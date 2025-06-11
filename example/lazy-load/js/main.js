/// <reference path="../../utils.js" />

(function () {
  /**
   * 图片前缀
   * [图片来源](https://lol.qq.com/data/info-heros.shtml)
   */
  const photoPrefix = "https://game.gtimg.cn/images/lol/act/img";

  /**
   * 用户数据列表
   */
  const userList = [
    {
      name: "刀锋之影-泰隆",
      image: photoPrefix + "/champion/Talon.png",
    },
    {
      name: "德玛西亚之翼-奎因",
      image: photoPrefix + "/champion/Quinn.png",
    },
    {
      name: "猩红收割者-弗拉基米尔",
      image: photoPrefix + "/champion/Vladimir.png",
    },
    {
      name: "琴瑟仙女-娑娜",
      image: photoPrefix + "/champion/Sona.png",
    },
    {
      name: "影流之主-劫",
      image: photoPrefix + "/champion/Zed.png",
    },
    {
      name: "赏金猎人-厄运小姐",
      image: photoPrefix + "/champion/MissFortune.png",
    },
    {
      name: "光辉女郎-拉克丝",
      image: photoPrefix + "/champion/Lux.png",
    },
  ];
  const bgList = [
    photoPrefix + "/skinloading/106000.jpg",
    photoPrefix + "/skinloading/107000.jpg",
    photoPrefix + "/skinloading/110000.jpg",
    photoPrefix + "/skinloading/111000.jpg",
    photoPrefix + "/skinloading/112000.jpg",
    photoPrefix + "/skinloading/113000.jpg",
    photoPrefix + "/skinloading/114000.jpg",
  ];

  /**
   * 懒加载
   * @description 可加载`<img>`、`<video>`、`<audio>`等一些引用资源路径的标签
   * @param {object} params 传参对象
   * @param {string} params.lazyAttr 自定义加载的属性（可选）
   * @param {"src"|"background"} params.loadType 加载的类型（默认为`src`）
   * @param {string} params.errorPath 加载失败时显示的资源路径，仅在`loadType`设置为`src`中可用（可选）
   */
  function lazyLoad(params) {
    const attr = params.lazyAttr || "lazy";
    const type = params.loadType || "src";

    /** 更新整个文档的懒加载节点 */
    function update() {
      const els = document.querySelectorAll(`[${attr}]`);
      for (let i = 0; i < els.length; i++) {
        const el = els[i];
        observer.observe(el);
      }
    }

    /**
     * 加载图片
     * @param {HTMLImageElement} el 图片节点
     */
    function loadImage(el) {
      const cache = el.src; // 缓存当前`src`加载失败时候用
      el.src = el.getAttribute(attr);
      el.onerror = function () {
        el.src = params.errorPath || cache;
      };
    }

    /**
     * 加载单个节点
     * @param {HTMLElement} el
     */
    function loadElement(el) {
      switch (type) {
        case "src":
          loadImage(el);
          break;
        case "background":
          el.style.backgroundImage = `url(${el.getAttribute(attr)})`;
          break;
      }
      el.removeAttribute(attr);
      observer.unobserve(el);
    }

    /**
     * 监听器
     * [MDN说明](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)
     */
    const observer = new IntersectionObserver(function (entries) {
      for (let i = 0; i < entries.length; i++) {
        const item = entries[i];
        if (item.isIntersecting) {
          loadElement(item.target);
        }
      }
    });

    update();

    return {
      observer,
      update,
    };
  }

  const lazySrc = lazyLoad({
    lazyAttr: "lazy-src",
  });

  const lazyBg = lazyLoad({
    lazyAttr: "lazy-bg",
    loadType: "background",
  });

  function outputItem() {
    const images = [];
    for (let i = 0; i < userList.length; i++) {
      const item = userList[i];
      const box = document.createElement("div");
      const image = document.createElement("img");
      image.alt = item.name;
      image.setAttribute("lazy-src", item.image);
      lazySrc.observer.observe(image);
      box.className = "item";
      box.appendChild(image);
      images.push(box);
    }
    find(".src-list").append(...images);
    const els = [];
    for (let i = 0; i < bgList.length; i++) {
      const bg = bgList[i];
      const box = document.createElement("div");
      box.className = "item";
      box.setAttribute("lazy-bg", bg);
      lazyBg.observer.observe(box);
      els.push(box);
    }
    find(".bg-list").append(...els);
  }

  window.onload = function () {
    outputItem();
  };
})();
