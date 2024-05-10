// 类型提示用（运行时不会引用）
/// <reference path="./table.js" />
/// <reference path="./utils.js" />

(function () {
  const tableData = [
    { pv: 100, netRevenue: 1250, rate: 0, voucher: 6 },
    { pv: 200, netRevenue: 2500, rate: 3, voucher: 6 },
    { pv: 600, netRevenue: 7500, rate: 6, voucher: 6 },
    { pv: 1000, netRevenue: 12500, rate: 9, voucher: 6 },
    { pv: 2000, netRevenue: 25000, rate: 12, voucher: 6 },
    { pv: 4000, netRevenue: 50000, rate: 15, voucher: 6 },
    { pv: 7000, netRevenue: 87500, rate: 18, voucher: 6 },
    { pv: 10000, netRevenue: 125000, rate: 21, voucher: 6 },
  ];

  createTable({
    el: find(".table-1"),
    data: tableData.map(item => ({ pv: formatNumber(item.pv), netRevenue: formatNumber(item.netRevenue), rate: item.rate + "%", voucher: item.voucher + "%" })),
    columns: [
      { label: "PV(销售指数)", prop: "pv", },
      { label: "净营业额", prop: "netRevenue", },
      { label: "佣金比率", prop: "rate", },
      { label: "电子券比率", prop: "voucher", },
    ]
  });
  /**
   * 获取单个奖金
   * @param {number} value 
   */
  function getSingleBonus(value) {
    let index = tableData.length - 1;
    let price = -1;
    let voucher = 0;
    let rate = 0;
    value = value < tableData[0].netRevenue ?  tableData[0].netRevenue : value;
    while (price === -1) {
      const item = tableData[index];
      if (value >= item.netRevenue) {
        price = item.rate * value / 100;
        voucher = item.voucher * value / 100;
        rate = item.rate;
      } else {
        index--;
      }
    }
    return {
      price,
      voucher,
      rate
    };
  }

  const elValue = find(".value");
  const elInput = find(".input");
  const elInputText = find(".input-text");

  elInput.addEventListener("input", function() {
    const maxNum = 999999999999999;
    let number = Number(elInput.value);
    // console.log(number);
    if (number > 0) {
      if (number > maxNum) {
        const max = elInput.value.substring(0, 15);
        number = Number(max);
        elInput.value = max;
      }
      const result = getSingleBonus(number);
      elValue.innerHTML = `可获得收入: <b>${formatNumber(result.price)}元</b>; 佣金比率为: <b>${result.rate}%</b>; 可获得电子券: <b>${formatNumber(result.voucher)}元</b>`;
      elInputText.textContent = "净营业额：" + numberToChinese(number);
    } else {
      elValue.innerHTML = elInputText.textContent = "";
    }
  })
})();