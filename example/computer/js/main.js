(function () {
  /**
   * 查找单个元素
   * @param {string} name 
   * @returns {HTMLElement}
   */
  const find = name => document.querySelector(name);
  /**
   * @type {Array<HTMLInputElement>}
   */
  const inputs = Array.from(document.querySelectorAll(".input"));
  /**
   * 单价
   * @type {HTMLElement}
   */
  const unitPrice = find(".unit-price span");
  /**
   * 总价
   * @type {HTMLElement}
   */
  const totalPrice = find(".total-price span");
  /** 缓存键值 */
  const cacheKey = "price-record";
  /**
   * @type {{ oil: string; price: string; distance: string }}
   */
  const cacheInfo = (function () {
    const val = localStorage.getItem(cacheKey);
    if (typeof val === "string") {
      return JSON.parse(val);
    }
    return undefined;
  })();

  /**
   * 保存记录
   * @param {typeof cacheInfo} params 
   */
  function saveCache(params) {
    localStorage.setItem(cacheKey, JSON.stringify(params));
  }

  function onReset() {
    inputs.forEach(input => (input.value = ""));
    unitPrice.textContent = totalPrice.textContent = "??";
    localStorage.removeItem(cacheKey);
  }

  function onResult() {
    const oil = inputs[0].value;
    const price = inputs[1].value;
    const distance = inputs[2].value;
    if (!oil || !price) return alert("请输入油耗和油价");
    let res = Number(oil) / 100 * Number(price);
    unitPrice.textContent = res.toFixed(2);
    if (distance) {
      totalPrice.textContent = (res * Number(distance)).toFixed(2);
    } else {
      totalPrice.textContent = "";
    }
    saveCache({ oil, price, distance });
  }

  if (cacheInfo) {
    inputs[0].value = cacheInfo.oil;
    inputs[1].value = cacheInfo.price;
    inputs[2].value = cacheInfo.distance;
    onResult();
  }

  find(".result-btn").addEventListener("click", onResult);
  find(".reset-btn").addEventListener("click", onReset);
  inputs.forEach(input => {
    input.addEventListener("keypress", e => e.key === "Enter" && onResult());
  });
})();
