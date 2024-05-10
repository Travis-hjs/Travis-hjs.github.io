/**
 * 单个元素查找
 * @param {string} name class | id | label: `div`、`p`
 * @returns {HTMLElement}
 */
function find(name) {
  return document.querySelector(name);
}

/**
 * 多个元素查找
 * @param {string} name class | id | label <div> <p>
 * @returns {Array<HTMLElement>}
 */
function findAll(name) {
  let nodes = document.querySelectorAll(name);
  if (Array.from) {
    nodes = Array.from(nodes);
  } else {
    nodes = [].slice.call(nodes);
  }
  return nodes;
}

/**
 * 格式化数字
 * @param {number} n 
 */
const formatNumber = n => n.toLocaleString("en-US");

/**
 * 实现原生废弃的`String.prototype.substr()`方法
 * @param {string} value 
 * @param {number} start 
 * @param {number} length 
 */
function substr(value, start = 0, length = value.length) {
  if (length < 0) return "";
  const _length = value.length;
  if (start <= -_length) {
    start = 0;
  }
  start = start < 0 ? _length + start : start;
  length = start + length > _length ? _length : start + length;
  let result = "";
  for (let i = start; i < length; i++) {
    result += value[i];
  }
  return result;
}

/**
 * 数字转中文
 * @param {number} target 
 */
function numberToChinese(target) {
  if (typeof target !== "number" || isNaN(target)) return "";
  const cnNums = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  const cnIntRadice = ["", "十", "百", "千"];
  const cnIntUnits = ["", "万", "亿", "兆"];
  const cnDecUnits = ["角", "分", "毫", "厘"];
  const cnInteger = "整";
  const cnIntLast = "元";
  const maxNum = 999999999999999.9999;
  let integerNum = "";
  let decimalNum = "";
  let result = "";
  /** @type {Array<string>} */
  let parts;
  if (target >= maxNum) {
    console.warn("超出最大处理数字");
    return "";
  }
  if (target == 0) {
    result = cnNums[0] + cnIntLast + cnInteger;
    return result;
  }
  const numStr = target.toString();
  if (numStr.indexOf(".") == -1) {
    integerNum = numStr;
  } else {
    parts = numStr.split(".");
    integerNum = parts[0];
    decimalNum = substr(parts[1], 0, 4);
  }
  // 获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    let zeroCount = 0;
    const intLength = integerNum.length;
    for (let i = 0; i < intLength; i++) {
      const n = substr(integerNum, i, 1);
      const p = intLength - i - 1;
      const q = p / 4;
      const m = p % 4;
      if (n == "0") {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          result += cnNums[0];
        }
        zeroCount = 0; // 归零
        result += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m == 0 && zeroCount < 4) {
        result += cnIntUnits[q];
      }
    }
    result += cnIntLast;
  }
  // 小数部分
  if (decimalNum != "") {
    const decLength = decimalNum.length;
    for (let i = 0; i < decLength; i++) {
      const n = substr(decimalNum, i, 1);
      if (n != "0") {
        result += cnNums[Number(n)] + cnDecUnits[i];
      }
    }
  }
  if (result == "") {
    result += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum == "") {
    result += cnInteger;
  }
  return result;
}

/**
 * 获取范围随机数
 * @param {number} min 最小值 
 * @param {number} max 最大值
 */
function ranInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * 随机生成中文
 * @param {number} min 最小数
 * @param {number} max 最大数
 */
function randomText(min = 1, max = 1) {
  const len = Math.floor(Math.random() * max) + min;
  const base = 20000;
  const range = 1000;
  let str = '';
  let i = 0;
  while (i < len) {
    i++;
    const lower = Math.floor(Math.random() * range);
    str += String.fromCharCode(base + lower);
  }
  return str;
}
