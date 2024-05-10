/**
 * 生成表格到指定节点中
 * @template T
 * @param {object} option
 * @param {HTMLElement} option.el 表格挂载的节点
 * @param {Array<T>} option.data 表格数据
 * @param {Array<{ label: string, prop: string, width?: string, minWidth?: string, slot?: (row: T, index: number) => string | HTMLElement }>} option.columns 表格列配置
 * @param {Array<{ text: string | (row: T) => string, click?: (row: T, index: number) => void, disabled?: boolean | (row: T) => boolean, className?: string }>} option.actions 操作列表，当`option.columns`中存在`prop: "actions"`时生效
 */
function createTable(option) {
  const styleId = "the-table-style";
  if (!document.getElementById(styleId)) {
    const cssText = `
    .the-table,
    .the-table thead,
    .the-table tbody,
    .the-table th,
    .the-table tr,
    .the-table td,
    .the-table-btn {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .the-table {
      width: 100%;
      --border: solid 1px #eee;
      --padding: 8px 6px;
      --transition: .24s all;
      --head-bg: #42b883;
      --head-color: #fff;
      --head-size: 15px;
      --head-height: 50px;
      --column-size: 14px;
      --column-height: 44px;
      --column-line-height: 22px;
      --column-color: #555;
      background-color: #fff;
      border-spacing: 0;
      border-collapse: collapse;
      border: var(--border);
    }
    .the-table th, .the-table td {
      border: var(--border);
      word-break: break-all;
    }
    .the-table-header {
      background-color: var(--head-bg);
      text-align: center;
    }
    .the-table-header th {
      height: var(--head-height);
      font-size: var(--head-size);
      color: var(--head-color);
      padding: var(--padding);
    }
    .the-table-body td {
      height: var(--column-height);
      padding: var(--padding);
      font-size: var(--column-size);
      color: var(--column-color);
      line-height: var(--column-line-height);
      text-align: center;
    }
    .the-table-body tr {
      transition: var(--transition);
    }
    .the-table-body tr:nth-child(even) {
      background-color: #fafafa;
    }
    .the-table-body tr:hover {
      background-color: #f0f9eb;
    }
    .the-table-btn {
      border: none;
      outline: none;
      padding: 0 8px;
      border-radius: 2px;
      background-color: transparent;
      cursor: pointer;
      line-height: 1;
      font-size: var(--column-size);
      height: var(--column-line-height);
      transition: var(--transition);
      color: var(--head-bg);
    }
    .the-table-btn:hover {
      background-color: #eee;
    }
    .the-table-btn:disabled {
      color: #999;
      cursor: no-drop;
    }
    `;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = cssText;
    document.head.appendChild(style);
  }
  /**
   * 创建表格元素
   * @param {"table"|"header"|"body"|"row"|"column"|"tcolumn"|"btn"} type 
   * @param {CSSStyleDeclaration=} styles 要设置的样式
   */
  function createElement(type, styles) {
    const map = {
      table: { class: "the-table", tag: "table" },
      header: { class: "the-table-header", tag: "thead" },
      body: { class: "the-table-body", tag: "tbody" },
      row: { class: "", tag: "tr" },
      column: { class: "", tag: "td" },
      tcolumn: { class: "", tag: "th" },
      btn: { class: "the-table-btn", tag: "button" }
    }
    const el = document.createElement(map[type].tag);
    map[type].class && (el.className = map[type].class);
    if (styles) {
      for (const key in styles) {
        el.style[key] = styles[key];
      }
    }
    return el;
  }

  const table = createElement("table");
  const tableHeader = createElement("header");
  const tableBody = createElement("body");
  table.append(tableHeader, tableBody);
  option.el.appendChild(table);
  
  /**
   * 获取表格栏的宽度样式
   * @param {{ width?: string, minWidth?: string }} column 
   */
  function getStyle(column) {
    return {
      width: column.width,
      minWidth: column.minWidth || column.width
    }
  }

  function renderHeader() {
    const columns = option.columns.map(column => {
      const el = createElement("tcolumn", getStyle(column));
      el.textContent = column.label || "-";
      return el;
    });
    tableHeader.append(...columns);
  }

  /**
   * 内部缓存的表格数据，点击时需要
   * @type {Array<T>}
   */
  let _tableData = [];

  /**
   * 渲染表格
   * @param {Array<T>} tableData 
   * @param {boolean} isPush 是否添加新数据
   */
  function renderBody(tableData, isPush = false) {
    if (!Array.isArray(tableData)) return console.warn("传入的表格数据有误");
    let rowIndex = isPush ? _tableData.length : 0;
    const rowEls = tableData.map(row => {
      const columnEls = option.columns.map(column => {
        const columnEl = createElement("column", getStyle(column));
        let btnEls = [];
        if (column.prop === "actions") {
          btnEls = option.actions.map((btn, bIndex) => {
            const btnEl = createElement("btn");
            btn.className && btnEl.classList.add(btn.className);
            btnEl.disabled = typeof btn.disabled === "function" ? !!btn.disabled(row) : !!btn.disabled;
            btnEl.textContent = typeof btn.text === "function" ? btn.text(row, rowIndex) : btn.text;
            btnEl.dataset["row"] = rowIndex;
            btnEl.dataset["index"] = bIndex;
            return btnEl;
          });
        }
        if (btnEls.length) {
          columnEl.append(...btnEls);
        } else {
          if (typeof column.slot === "function") {
            const value = column.slot(row, rowIndex);
            if (typeof value === "string") {
              columnEl.innerHTML = value || "-";
            }
            if (typeof value === "object" && value instanceof HTMLElement) {
              columnEl.append(value);
            }
          } else {
            columnEl.textContent = row[column.prop] || "-";
          }
        }
        return columnEl;
      });
      rowIndex++;
      const rowEl = createElement("row");
      rowEl.append(...columnEls);
      return rowEl;
    });
    if (isPush) {
      _tableData = _tableData.concat(tableData);
    } else {
      _tableData = tableData;
      tableBody.innerHTML = ""
    }
    tableBody.append(...rowEls);
  }
  
  renderHeader();
  
  renderBody(option.data);

  table.addEventListener("click", e => {
    if (e.target.tagName && e.target.tagName.toLocaleLowerCase() === "button") {
      /** @type {HTMLButtonElement} */
      const btn = e.target;
      const rowIndex = Number(btn.dataset["row"]);
      const actionIndex = Number(btn.dataset["index"]);
      option.actions[actionIndex].click && option.actions[actionIndex].click(_tableData[rowIndex], rowIndex);
    }
  })

  return {
    /** 
     * 更新整个表格数据
     * @template T
     * @param {Array<T>} data
     */
    update(data) {
      renderBody(data);
    },
    /**
     * 累加数据
     * @template T
     * @param {Array<T>} data
     */
    add(data) {
      renderBody(data, true);
    },
    /**
     * 删除指定索引行
     * @param {number} index 
     */
    remove(index) {
      const els = tableBody.children;
      els[index].remove();
      _tableData.splice(index, 1);
      // 更新之前绑定的索引
      for (let i = 0; i < els.length; i++) {
        const el = els[i];
        const btns = el.querySelectorAll("button");
        for (let j = 0; j < btns.length; j++) {
          const btn = btns[j];
          if (Number(btn.dataset.row) !== i) {
            btn.dataset.row = i;
          }
        } 
      }
    },
    /** 
     * 当前表格数据
     * @type {Array<T>}
     */
    get data() {
      return JSON.parse(JSON.stringify(_tableData));
    }
  }
}
