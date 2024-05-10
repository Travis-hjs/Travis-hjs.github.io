(function () {

  const classNames = {
    maskHide: "mask-hide",
    btnHide: "btn-hide"
  }

  const contentEl = document.querySelector(".content");
  const scaleInput = document.querySelector(".scale-input");
  const maskEl = document.querySelector(".mask");

  /**
   * 删除某个item
   * @param {HTMLElement} el 
   */
  function deletePhoto(el) {
    el.parentElement.remove();
  }

  /**
   * `blob`或者`file`转`base64`
   * @param {File | Blob} target 目标对象
   * @returns {Promise<string>}
   */
  function blobOrFlieToBase64(target) {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.onload = function () {
        resolve(reader.result);
      }
      reader.onerror = function () {
        console.warn("reader error >>", reader.error);
        reject(new Error("blobOrFlieToBase64 error"));
      }
      reader.readAsDataURL(target);
    })
  }

  /**
   * input上传图片
   * @param {HTMLInputElement} el 
   */
  function upload(el) {
    const files = el.files;
    const total = files.length;
    let count = 0;
    /** @type {Array<string>} */
    const listBase64 = new Array(total).fill("");
    for (let i = 0; i < total; i++) {
      setBase64(i, files[i]);
    }

    const deleteSvg = `<svg t="1700013819512" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4055"><path d="M858.31 208.58h-165.5l0.85-28.29c0.38-27.08-9.23-52.8-27.06-72.4-18.41-20.24-43.3-31.6-70.06-31.98l-164.8-2.34c-26.75-0.29-51.96 10.27-70.94 29.99-18.37 19.09-28.71 44.52-29.08 71.05l-1.03 33.96h-165c-18.96 0-34.33 15.37-34.33 34.33s15.37 34.33 34.33 34.33h31.54v570.19c0 56.8 46.2 103 103 103h423.55c56.8 0 103-46.2 103-103V277.24h31.53c18.96 0 34.33-15.37 34.33-34.33s-15.37-34.33-34.33-34.33z m-457.94-32.44c0.13-9.6 3.65-18.47 9.91-24.96 5.66-5.87 12.4-9.42 20.49-8.94l164.81 2.34c7.55 0.1 14.74 3.48 20.22 9.51 6.07 6.67 9.34 15.63 9.21 24.68l-0.89 29.81H399.39l0.98-32.44z m357.74 671.3c0 18.93-15.4 34.33-34.33 34.33H300.23c-18.93 0-34.33-15.4-34.33-34.33v-570.2h492.22v570.2z" p-id="4056" fill="#ffffff"></path><path d="M364.67 768.85c18.96 0 34.33-15.37 34.33-34.33V454.33c0-18.96-15.37-34.33-34.33-34.33s-34.33 15.37-34.33 34.33v280.19c0 18.96 15.37 34.33 34.33 34.33zM512 768.85c18.96 0 34.33-15.37 34.33-34.33V454.33c0-18.96-15.37-34.33-34.33-34.33s-34.33 15.37-34.33 34.33v280.19c0 18.96 15.37 34.33 34.33 34.33zM659.33 768.85c18.96 0 34.33-15.37 34.33-34.33V454.33c0-18.96-15.37-34.33-34.33-34.33S625 435.37 625 454.33v280.19c0 18.96 15.37 34.33 34.33 34.33z" p-id="4057" fill="#ffffff"></path></svg>`;

    /**
     * 
     * @param {number} index 
     * @param {File} file
     */
    function setBase64(index, file) {
      blobOrFlieToBase64(file).then(base64 => {
        listBase64[index] = base64;
        count++;
        if (count >= total) {
          el.value = "";
          const nodes = [];
          listBase64.forEach(url => {
            const item = document.createElement("div");
            item.className = "item";
            item.innerHTML = `<div class="img-wrap"><img src="${url}" crossorigin="anonymous" ></div><button onclick="deletePhoto(this)">${deleteSvg}</button>`;
            nodes.push(item);
          });
          contentEl.append(...nodes);
        }
      });
    }

    // const file = el.files[0];

    // blobOrFlieToBase64(file).then(base64 => {
    //   el.value = "";
    //   const item = document.createElement("div");
    //   item.className = "item";
    //   item.innerHTML = `<div class="img-wrap"><img src="${base64}" crossorigin="anonymous" ></div><button onclick="deletePhoto(this)">删除</button>`;
    //   contentEl.appendChild(item);
    // });

  }

  let loading = false;

  /**
   * 生成图片
   * @param {boolean} isPreview 
   */
  function createPicture(isPreview) {
    if (!contentEl.children.length) return alert("请上传图片再继续");
    if (loading) return;
    contentEl.classList.add(classNames.btnHide);
    loading = true;
    const scale = scaleInput.value ? Number(scaleInput.value) : 2;
    // console.log("scale >>", scale);
    setTimeout(function () {
      html2canvas(contentEl, {
        useCORS: true,
        scale: scale,
        width: contentEl.clientWidth,
        height: contentEl.clientHeight
      }).then(canvas => {
        const url = canvas.toDataURL("image/jpeg");
        if (isPreview) {
          maskEl.children[0].innerHTML = `<img src="${url}" style="display: block; height: calc(100% - 36px); margin: 0 auto"><button class="mask-close" onclick="closeMask()">点击关闭(长摁可保存)</button>`;
          maskEl.classList.remove(classNames.maskHide);
        } else {
          downloadByLink(url);
        }
        contentEl.classList.remove(classNames.btnHide);
        loading = false;
      });
    }, 60);
  }

  function downloadByLink(link) {
    const label = document.createElement("a");
    label.href = link;
    label.download = "合成图片.jpg";
    label.click();
  }

  function closeMask() {
    maskEl.classList.add(classNames.maskHide);
  }

  const global = {
    deletePhoto,
    upload,
    closeMask,
    createPicture
  }

  for (const key in global) {
    window[key] = global[key];
  }

})();
