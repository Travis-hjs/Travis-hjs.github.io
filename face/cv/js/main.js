(function() {
  /**
   * 查找单个元素
   * @param {string} name 
   * @returns {HTMLElement}
   */
  const find = name => document.querySelector(name);
  
  const btn = find(".print");

  const page = find(".page");

  let loading = false;
 
  btn.addEventListener("click", function() {
    if (loading) return;
    loading = true;
    const btnText = btn.textContent;
    btn.setAttribute("disabled", "true");
    btn.textContent = "导出中...";
    function end() {
      btn.textContent = btnText;
      btn.removeAttribute("disabled");
      loading = false;
    }
    const ratio = window.devicePixelRatio || 2;
    createPdfByElement({
      el: page,
      title: "黄景圣-个人简历",
      scale: ratio > 2 ? ratio : 2,
      success: end,
      fail() {
        end();
        alert("导出错误，请查看控制台！");
      }
    });
  });
  
  const A4Size = {
    w: 592,
    h: 842
  }
  
  /**
   * 通过页面节点生成`PDF`
   * @param {object} options
   * @param {HTMLElement} options.el 截图的节点
   * @param {string} options.title 生成的`PDF`标题
   * @param {string} options.backgroundColor 背景颜色
   * @param {boolean} options.pagination 是否需要分页
   * @param {number=} options.padding 两边留白边距，没有分页的情况下生效
   * @param {number=} options.scale 生成`PDF`的清晰度
   * @param {() => void=} options.success 成功回调
   * @param {(error: any) => void=} options.fail 失败回调
   */
  function createPdfByElement(options) {
    html2canvas(options.el, {
      allowTaint: true,
      useCORS: true,
      backgroundColor: options.backgroundColor,
      scale: options.scale || 1
    }).then(function (canvas) {
      const { width, height } = canvas;
      const pageHeight = width / A4Size.w * A4Size.h;
      let pdfHeight = height;
      let position = 0;
      const imgWidth = A4Size.w;
      const imgHeight = A4Size.w / width * height;
      const base64 = canvas.toDataURL("image/jpeg", 1.0);
      // // TODO: 调试
      // const label = document.createElement('a');
      // label.download = options.title + '.jpg';
      // console.log('base64 >>', base64);
      // label.href = base64;
      // document.body.appendChild(label);
      // label.click();
      // label.remove();
      // // 调试结束
      const padding = options.padding || 0;
      const pdfOptions = {
        unit: "pt",
        compress: false,
        precision: 100,
        format: "a4"
      }
      if (!options.pagination) {
        pdfOptions.format = [imgWidth + padding * 2, imgHeight + padding * 2];
      }
      const pdf = new jspdf.jsPDF(pdfOptions);
  
      if (!options.pagination) {
        pdf.addImage(base64, "jpeg", padding, padding, imgWidth, imgHeight);
      } else {
        // 分页的情况 计算下一页
        if (pdfHeight < pageHeight) {
          pdf.addImage(base64, "jpeg", 0, 0, imgWidth, imgHeight);
        } else {
          while (pdfHeight > 0) {
            pdf.addImage(base64, "jpeg", 0, position, imgWidth, imgHeight);
            pdfHeight -= pageHeight;
            position -= A4Size.h;
            if (pdfHeight > 0) {
              pdf.addPage();
            }
          }
        }
      }
      // 保存至本地
      pdf.save(options.title + ".pdf");
      // 获取总共生成的`pdf`页面数量
      const total = pdf.getNumberOfPages();
      // 保存完了删掉原来的`pdf`
      for (let page = total; page > 0; page--) {
        pdf.deletePage(page);
      }
      // 成功回调
      options.success && options.success();
    }).catch(error => {
      options.fail && options.fail(error);
    });
  }

  // 判断链接上的主题颜色并设置
  const query = new URLSearchParams(location.search);
  const theme = query.get("theme");
  const hasPdf = query.get("pdf");
  const isiOS = navigator.userAgent.toLocaleLowerCase().includes("mac os");

  if (theme) {
    document.body.style.setProperty("--theme-color", "#" + theme);
  }
  if (!hasPdf && isiOS) {
    btn.style.display = "none";
  }
})();