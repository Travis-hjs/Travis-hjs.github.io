// @ts-check

// /**
//  * 计算文本
//  * @param {HTMLElement} fontEl 字体元素，用于获取字体尺寸信息
//  */
// function computeText(fontEl) {
//   const canvas = document.createElement("canvas");
//   const context = canvas.getContext("2d");
//   const { font, paddingLeft, paddingRight, paddingTop, paddingBottom, lineHeight } = getComputedStyle(fontEl);
//   context.font = font;
//   return {
//     /**
//      * 获取文本的宽度
//      * @param {string} value 
//      * @returns 
//      */
//     getWidth(value) {
//       return context.measureText(value).width;
//     },
//     padding: {
//       left: parseFloat(paddingLeft),
//       right: parseFloat(paddingRight),
//       top: parseFloat(paddingTop),
//       bottom: parseFloat(paddingBottom),
//     },
//     lineHeight: parseFloat(lineHeight)
//   }
// }

// 计算动态文本的操作不写进 waterfallVirtual 方法里面的原因是有些文字节点高度是固定的，所以这里分开处理

/** 文字计算对象 */
const textInfo = (function() {
  /**
   * @type {HTMLTemplateElement}
   */
  const template = document.querySelector(".waterfall-item");
  /**
   * @type {HTMLElement}
   */
  const itemEl = template.content.querySelector(".item")
  /**
   * @type {HTMLElement}
   */
  const textEl = template.content.querySelector(".text");
  // 这里必须要输出到页面上才能获取到正确的 dom 信息
  document.body.appendChild(template.content);
  const { lineHeight } = getComputedStyle(textEl);
  return {
    /**
     * 获取文本的实际高度
     * @param {string} text 
     * @param {number} width
     */
    getHeight(text, width) {
      itemEl.style.width = width + "px";
      textEl.textContent = text;
      return textEl.clientHeight;
    },
    lineHeight: parseFloat(lineHeight)
  }
})();

/**
 * 瀑布流虚拟布局
 * @param {object} params 
 * @param {HTMLElement | string} params.el 瀑布流列表节点
 * @param {HTMLElement=} params.scrollEl 指定监听滚动的节点，不传则默认监听`window`的滚动操作
 * @param {number=} params.gap 容器之间的间距，默认`10`
 * @param {boolean=} params.notMutation 是否关闭实时监听元素变动并更新布局，关闭时，由开发者自行决定调用`mutation`来进行更新
 * @param {Array<{ minWidth: number, column: number }>} params.columns 容器宽度与列数配置`column`的最小值为`2`，小于`2`的将被过滤掉
 * @param {(next: (list: Array<{ width: number, height: number }>) => void) => void} params.load 加载数据回调，异步函数
 * @param {(el: HTMLElement) => void=} params.mounted 元素挂载钩子函数
 */
function waterfallVirtual(params) {
  if (!params.el) throw new Error("缺少需要的列表节点 params.el");
  if (!params.columns || !params.columns.length) throw new Error("缺少容器宽度与列数配置 params.columns");
  if (typeof params.load !== "function") throw new Error("缺少加载回调函数 params.load");
  /** 
   * 列表节点
   * @type {HTMLElement}
   */
  const content = params.el instanceof HTMLElement ? params.el : document.querySelector(params.el);
  /** 滚动的目标节点 */
  const scrollEl = params.scrollEl || document.documentElement;
  /** 
   * 包裹容器尺寸，计算视口超出时的参照对象
   * - 注意不是列表容器，而是可视的包裹容器
   */
  const wrapSize = {
    width: 0,
    height: 0,
    get compareWidth() {
      return content.clientWidth;
    },
    get compareHeight() {
      return params.scrollEl ? params.scrollEl.clientHeight : window.innerHeight;
    }
  }
  /** 间距 */
  const gap = params.gap || 10;
  /**
   * 当前列表数据
   * @type {Array<{ width: number, height: number, content: string, url: string }>}
  */
  let listData = [];
  /**
   * 节点数据列表
   * @type {Array<{
   *  index: number
   *  columnIndex: number
   *  width: number
   *  height: number
   *  imgHeight: number
   *  left: number
   *  top: number
   *  content: string
   *  url: string
   * }>}
   */
  let domDataList = [];
  /**
   * 瀑布流列数据
   * @type {Array<{ index: number, height: number }>}
   */
  let columnData = [];
  /** 列宽 */
  let columnWidth = 0;
  /** 列数配置，小于`2`的不处理 */
  const columnSetting = params.columns.filter(col => col.column >= 2).sort((a, b) => b.column - a.column);
  /**
   * 渲染节点集合对象
   * @type {{ [key: number]: HTMLElement }}
   */
  let renderMap = {};
  /** 滚动操作 */
  const scroll = {
    /** 上次滚动`Y`轴距离 */
    lastY: 0,
    /** 开始索引 */
    start: 0,
    /** 结束索引 */
    end: 0,
    /** 开始遍历的范围 */
    startRange: 0,
    /** 结束遍历的范围 */
    endRange: 0
  }

  function getColumn() {
    for (let i = 0; i < columnSetting.length; i++) {
      const col = columnSetting[i];
      if (wrapSize.width >= col.minWidth) {
        return col.column;
      }
    }
    return 2; // 找不到就返回最小列数
  }

  function updateColumnWidth() {
    const column = getColumn();
    const gapLength = gap * (column - 1);
    columnWidth = (wrapSize.width - gapLength) / column;
  }

  function updateColumnData() {
    columnData = [];
    const column = getColumn();
    for (let i = 0; i < column; i++) {
      columnData.push({
        index: i,
        height: 0
      })
    }
  }

  /**
   * 更新`dom`信息列表
   * @param {typeof listData} addList 
   * @param {number} start 
   */
  function updateDomDataList(addList, start) {
    const list = [];
    for (let i = 0; i < addList.length; i++) {
      const row = addList[i];
      const item = {
        index: start + i,
        columnIndex: 0,
        width: columnWidth,
        height: 0,
        imgHeight: row.height * columnWidth / row.width,
        left: 0,
        top: 0,
        content: row.content,
        url: row.url
      }
      // 这里将最短的一列排序至最前
      columnData.sort((a, b) => a.height - b.height);
      const first = columnData[0];
      item.columnIndex = first.index;
      item.top = first.height;
      item.left = (item.columnIndex) * (gap + columnWidth);
      // TODO: 这里设置布局相关样式
      const textHeight = textInfo.getHeight(row.content, columnWidth);
      item.height = item.imgHeight + textHeight;
      // 最后累加整体高度
      first.height += item.height + gap;
      list.push(item);
    }
    domDataList = domDataList.concat(list);
    // console.log("domDataList >>", domDataList);
    setHeight();
  }

  function setHeight() {
    columnData.sort((a, b) => b.height - a.height);
    const maxHeight = columnData[0].height;
    content.style.height = maxHeight + "px";
    // console.log("setHeight >>", columnData);
  }

  /**
   * 获取视口交集的渲染条件
   * @param {typeof domDataList[0]} data 
   */
  function getIntersection(data) {
    const { top, height } = data;
    const y = top + height;
    const range = wrapSize.height / 2;
    const topLine = scrollEl.scrollTop - range;
    const bottomLine = scrollEl.scrollTop + wrapSize.height + range;
    /** 是否在上线之上 */
    const above = topLine > y;
    /** 是否在下线之下 */
    const under = top > bottomLine;
    return {
      above,
      under,
    }
  }

  /**
   * 渲染节点
   * @param {number} start 开始计数索引
   */
  function render(start) {
    if (!domDataList.length) return;
    for (let i = start; i < domDataList.length; i++) {
      const data = domDataList[i];
      const dom = renderMap[data.index];
      const { above, under } = getIntersection(data);
      if (above || under) {
        // console.log("不在范围内的 dom >>", data);
        if (dom) {
          removeElement(dom);
          delete renderMap[data.index];
        }
        continue;
      }
      if (dom) {
        setElement(dom, data);
      } else {
        renderMap[data.index] = setElement(getElement(), data);
      }
    }
  }

  /** 
   * 可用的节点列表
   * - 为了不频繁的执行`el.remove()`，这里将不用的节点储存起来，并设置不可见状态，需要用的时候再取出来，减少不必要的元素创建操作
   * @type {Array<HTMLElement>}
   */
  let elementList = [];
  
  function getElement() {
    if (elementList.length) {
      const el = elementList.shift();
      el.style.display = ""; // 对应下面设置的 none
      return el;
    } else {
      const el = document.createElement("div");
      params.mounted && params.mounted(el);
      content.append(el);
      return el;
    }
  }

  /**
   * 将节点从视口中移除
   * @param {HTMLElement} el 
   */
  function removeElement(el) {
    el.style.display = "none";
    elementList.push(el);
  }
  
  /**
   * 设置节点信息
   * @param {HTMLElement} el 
   * @param {typeof domDataList[0]} data 
   */
  function setElement(el, data) {
    // TODO: 简单处理
    // el.className = "item the-card";
    // el.style.width = `${data.width}px`;
    // el.style.height = `${data.height}px`;
    // el.style.transform = `translate3d(${data.left}px, ${data.top}px, 0)`;
    // el.id = `waterfall-item-${data.index}`;
    // el.dataset["index"] = data.index.toString();
    // el.dataset["column"] = data.columnIndex.toString();
    // el.innerHTML = `
    // <img src="${data.url}" style="height: ${data.imgHeight}px" alt="">
    // <div class="text">${data.content}</div>
    // `;
    
    // TODO: 最优处理，精准更新某个值，尤其是图片的 src 在手机上频繁设置想同值会闪烁
    const className = "item the-card";
    if (el.className !== className) {
      el.className = className;
    }
    const width = `${data.width}px`;
    if (el.style.width !== width) {
      el.style.width = width;
    }
    const height = `${data.height}px`;
    if (el.style.height !== height) {
      el.style.height = height;
    }
    const transform = `translate3d(${data.left}px, ${data.top}px, 0)`;
    if (el.style.transform !== transform) {
      el.style.transform = transform;
    }
    // const id = `waterfall-item-${data.index}`;
    // if (el.id !== id) {
    //   el.id = id;
    // }
    const index = data.index.toString();
    if (el.dataset["index"] !== index) {
      el.dataset["index"] = index;
    }
    const column = data.columnIndex.toString();
    if (el.dataset["column"] != column) {
      el.dataset["column"] = column;
    }
    if (el.children.length) {
      const image = /** @type {HTMLImageElement} */ (el.children[0]);
      const text = el.children[1];
      const { url, content } = data;
      if (image.src != url) {
        image.src = url;
      }
      const imgHeight = data.imgHeight + "px";
      if (image.style.height !== imgHeight) {
        image.style.height = imgHeight;
      }
      if (text.textContent !== content) {
        text.textContent = content;
      }
    } else {
      el.innerHTML = `
      <img src="${data.url}" style="height: ${data.imgHeight}px" alt="">
      <div class="text">${data.content}</div>
      `;
    }
    return el;
  }

  function computeScroll() {
    const indexList = Object.keys(renderMap).map(key => Number(key));
    scroll.start = indexList[0];
    scroll.end = indexList[indexList.length - 1];
    /** 最大遍历次数 */
    // const max = Math.ceil(wrapSize.height / 100) * columnData.length; // TODO: 这里 100 是单个图片最小高度，也可以由外部传进来
    const max = content.children.length;
    const maxEnd = scroll.end - max;
    const maxStart = scroll.start + max;
    scroll.startRange = maxStart > domDataList.length ? domDataList.length : maxStart;
    scroll.endRange = maxEnd < 0 ? 0 : maxEnd;
    // console.log("scroll >>", scroll, max, renderMap);
  }

  function onScroll() {
    const isUp = scrollEl.scrollTop - scroll.lastY >= 0 ? false : true;
    scroll.lastY = scrollEl.scrollTop;
    // console.log("isUp >>", isUp);
    /**
     * 遍历
     * @param {typeof domDataList[0]} data 
     */
    function each(data) {
      const { above, under } = getIntersection(data);
      const dom = renderMap[data.index];
      if (above || under) {
        if (dom) {
          removeElement(dom);
          delete renderMap[data.index];
        }
      } else {
        if (dom) {
          setElement(dom, data);
        } else {
          renderMap[data.index] = setElement(getElement(), data);
        }
      }
    }

    computeScroll();
    // 特殊情况处理：
    // 出现的情况：当鼠标摁住滚动条不放，且在非滚动条区间移动之后再漂回来滚动条时会触发；
    // 估计是这个原因，小红书的实现就是把滚动条给隐藏了...
    if (scroll.start === undefined) {
      // console.log("特殊情况处理 >>", domDataList.length);
      for (let i = 0; i < domDataList.length; i++) {
        each(domDataList[i]);
      }
    } else {
      // 分上下区域遍历
      if (isUp) {
        for (let i = scroll.end; i >= scroll.endRange; i--) {
          // console.log("向上滚动遍历次数");
          each(domDataList[i]);
        }
      } else {
        for (let i = scroll.start; i < scroll.startRange; i++) {
          // console.log("向下滚动遍历次数");
          each(domDataList[i]);
        }
      }
    }
    // console.log("--------------------", renderMap, elementList);
    const { scrollTop, scrollHeight } = scrollEl;
    // 判断是否触底
    if (scrollHeight - scrollTop <= wrapSize.height) {
      // console.log("触底");
      params.load(add);
    }
  }

  /**
   * 向当前列表添加数据
   * @param {typeof listData} list 添加的列表数据
   */
  function add(list) {
    // console.log("addList", list);
    const start = listData.length;
    listData = listData.concat(list);
    updateDomDataList(list, start);
    render(start);
  }

  function reset() {
    content.innerHTML = "";
    elementList = [];
    listData = [];
    renderMap = {};
    onResize();
  }

  function onResize() {
    // console.log("onResize");
    domDataList = [];
    updateColumnWidth();
    updateColumnData();
    updateDomDataList(listData, 0);
    render(0);
  }

  let isMutation = !params.notMutation;
  /**
   * 这里模拟监听元素尺寸变化
   * - 注意不能使用`MutationObserver`代替，理由是`MutationObserver`只能监听显示设置属性，`css`自适应的场景下失效
   */
  function onMutation() {
    if (wrapSize.width !== wrapSize.compareWidth) {
      wrapSize.width = wrapSize.compareWidth;
      onResize();
    }
    if (wrapSize.height !== wrapSize.compareHeight) {
      wrapSize.height = wrapSize.compareHeight;
      onResize();
    }
    isMutation && requestAnimationFrame(onMutation);
  }

  const scrollTarget = params.scrollEl || window;
  scrollTarget.addEventListener("scroll", onScroll);
  params.load(add);
  wrapSize.width = wrapSize.compareWidth;
  wrapSize.height = wrapSize.compareHeight;
  onResize();
  onMutation();

  return {
    reset,
    mutation: onMutation,
    /** 
     * 销毁当前所有监听事件
     * - 通常用于单页面应用
     */
    destroy() {
      isMutation = false;
      scrollTarget.removeEventListener("scroll", onScroll);
    }
  }
}

// 使用示例代码
(function () {

  /**
   * 整体布局容器
   * @type {HTMLElement}
   */
  const layoutEl = document.querySelector(".layout");
  
  const property = {
    width: layoutEl.style.getPropertyValue("--sidebar-width"),
    height: layoutEl.style.getPropertyValue("--nav-height"),
  }
  
  /**
   * 范围随机整数
   * @param {number} min 最小数
   * @param {number} max 最大数
   */
  function ranInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  
  /**
   * 随机生成中文
   * @param {number} min 
   * @param {number} max 
   */
  function randomText(min, max) {
    const len = Math.floor(Math.random() * max) + min;
    const base = 20000;
    const range = 1000;
    let str = "";
    let i = 0;
    while (i < len) {
      i++;
      const lower = Math.floor(Math.random() * range);
      str += String.fromCharCode(base + lower);
    }
    return str;
  }
  
  const photoList = (function() {
    /**
     * 图片前缀
     * [图片来源](https://lol.qq.com/data/info-heros.shtml)
     */
    const photoPrefix = "https://game.gtimg.cn/images/lol/act/img";
    
    const bgList = [
      photoPrefix + "/skinloading/106000.jpg",
      photoPrefix + "/skinloading/107000.jpg",
      photoPrefix + "/skinloading/110000.jpg",
      photoPrefix + "/skinloading/111000.jpg",
      photoPrefix + "/skinloading/112000.jpg",
      photoPrefix + "/skinloading/113000.jpg",
      photoPrefix + "/skinloading/114000.jpg"
    ];

    const banner = [
      photoPrefix + "/skin/big_0d45ca44-f198-492b-a1ac-7bb23476ace5.jpg",
      photoPrefix + "/skin/big_f225e3e3-e08a-4583-a54a-734d9f4a8b1e.jpg"
    ]

    const list = [
      {
        url: "https://shp.qpic.cn/cfwebcap/0/2ca38dafa3b75c35f960f54ef4421cdf/",
        width: 600,
        height: 704
      },
      {
        url: "https://shp.qpic.cn/cfwebcap/0/2ca38dafa3b75c35f960f54ef4421cdf/",
        width: 512,
        height: 512
      },
      {
        url: "https://shp.qpic.cn/cfwebcap/0/4af7bc7d605f6924c5ed0ced8d11d64f/",
        width: 624,
        height: 440
      },
      {
        url: "https://shp.qpic.cn/cfwebcap/0/200c20050240d7f1958cce5bfc5ead8e/",
        width: 312,
        height: 412
      },
      {
        url: "https://shp.qpic.cn/cfwebcap/0/cb6d18645393a0d4033903a19fe5c68e/",
        width: 342,
        height: 413
      },
      {
        url: "https://shp.qpic.cn/cfwebcap/0/3a93a6fa29ed405bb2e442fc6698cd86/",
        width: 463,
        height: 397
      },
      {
        url: "https://shp.qpic.cn/cfwebcap/0/39238781fb94c3aa8d99840e0a229d36/",
        width: 806,
        height: 700
      }
    ];

    banner.forEach(banner => {
      list.push({
        url: banner,
        width: 980,
        height: 500
      });
    });

    bgList.forEach(bg => {
      list.push({
        url: bg,
        width: 308,
        height: 506
      });
    })

    return list;
  })();
  
  function createData(total = 500) {
    return new Array(total).fill(0).map((_, index) => {
      const photo = photoList[ranInt(0, photoList.length - 1)];
      const fixed = 100; // 为了好计算所以设置 100
      return {
        id: index,
        content: randomText(4, 100),
        width: fixed,
        height: photo.height / (photo.width / fixed),
        url: photo.url
      }
    });
  }

  /** 总列表 */
  let totalData = createData();
  
  /**
   * 提示节点
   * @type {HTMLElement}
   */
  const tips = document.querySelector(".bottom-tips");

  const tipsText = tips.textContent;

  const state = {
    showSidebar: true,
    _loading: false,
    get loading() {
      return this._loading;
    },
    set loading(val) {
      this._loading = val;
      tips.textContent = val ? "加载中..." : tipsText;
    },
    _hasMore: true,
    /** 是否有更多数据 */
    get hasMore() {
      return this._hasMore;
    },
    set hasMore(val) {
      this._hasMore = val;
      tips.textContent = !val ? "数据已全部加载完" : tipsText;
    },
    /** 分页信息 */
    pageInfo: {
      page: 0,
      size: 20,
    },
  }

  function onReset() {
    totalData = createData(state.pageInfo.size * 12);
    state.hasMore = true;
    state.loading = false;
    state.pageInfo.page = 0;
  }

  function switchSidebar() {
    state.showSidebar = !state.showSidebar;
    layoutEl.style.setProperty("--sidebar-width", state.showSidebar ? property.width : "0px");
  }
  
  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  /**
   * 模拟获取接口请求数据
   * @param {typeof state.pageInfo} info
   * @returns {Promise<{ code: number, data: { list: typeof totalData, total: number, page: number, size: number } }>}
   */
  function getPicList(info) {
    return new Promise(function(resolve) {
      const { page, size } = info;
      const start = page * size;
      const nextList = totalData.slice(start, start + size);
      const result = {
        code: 1,
        data: {
          list: nextList,
          total: totalData.length,
          page,
          size
        }
      }
      setTimeout(() => {
        resolve(result);
      }, page === 0 ? 0 : ranInt(100, 2000));
    })
  }
  
  const waterfall = waterfallVirtual({
    el: ".layout .list",
    gap: 12,
    columns: [
      { minWidth: 1600, column: 5 },
      { minWidth: 1200, column: 4 },
      { minWidth: 780, column: 3 },
      { minWidth: 500, column: 2 },
    ],
    async load(next) {
      if (!state.hasMore) {
        const isConfirm = confirm("当前数据已全部加载完成，是否重新开始？");
        if (!isConfirm) return;
        waterfall.reset();
        onReset();
      }
      if (state.loading) return;
      state.loading = true;
      const res = await getPicList(state.pageInfo);
      state.loading = false;
      state.pageInfo.page++;
      state.hasMore = state.pageInfo.page * state.pageInfo.size < res.data.total;
      next(res.data.list);
    },
    mounted(el) {
      // console.log("元素挂载 >>", el, data);
      el.addEventListener("click", function() {
        const info = {
          index: el.dataset["index"],
          column: el.dataset["column"]
        }
        console.log(el.id, totalData[info.index]);
      });
    }
  });

  document.querySelector(".the-btn.blue").addEventListener("click", switchSidebar);
  document.querySelector(".the-btn.green").addEventListener("click", goToTop);

  // TODO: 调试
  window["state"] = state;
  
})();
