import{F as e,R as t}from"./vendor-aFqMcHTB.js";var n=1e3;function r(){let e=n;return n++,e}function i(e={}){let t=document,n=`__${Math.random().toString(36).slice(2,7)}`,r={item:`msg-item${n}`,box:`msg-box${n}`,hide:`hide${n}`,text:`msg-text${n}`,icon:`msg-icon${n}`},i=t.createElement(`style`);i.textContent=`
  .${r.item}, ${r.box}, .${r.icon}, .${r.text} {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .${r.item} {
    position: fixed;
    top: 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    animation: ${r.item}-move .4s;
    transition: .4s all;
    opacity: 1;
    pointer-events: none;
  }
  .${r.box} {
    position: relative;
    display: flex;
    width: fit-content;
    max-width: 90%;
    padding: 12px 16px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12);
    overflow: hidden;
    pointer-events: auto;
  }
  .${r.box}::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
  }
  @keyframes ${r.item}-move {
    0% {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0%, 0);
    }
  }
  .${r.item}.${r.hide} {
    opacity: 0;
    /* transform: translate3d(0, -100%, 0); */
    transform: translate3d(0, -100%, 0) scale(0);
  }
  .${r.icon} {
    display: inline-block;
    width: 18px;
    min-width: 18px;
    height: 18px;
    min-height: 18px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 6px;
    position: relative;
  }
  .${r.text} {
    font-size: 14px;
    line-height: 18px;
    color: #555;
  }
  .${r.icon}::after,
  .${r.icon}::before {
    position: absolute;
    content: "";
    background-color: #fff;
  }
  .${r.box}.info .${r.icon}, .${r.box}.info::after {
    background-color: #1890ff;
  }
  .${r.box}.success .${r.icon}, .${r.box}.success::after {
    background-color: #52c41a;
  }
  .${r.box}.warning .${r.icon}, .${r.box}.warning::after {
    background-color: #faad14;
  }
  .${r.box}.error .${r.icon}, .${r.box}.error::after {
    background-color: #ff4d4f;
  }
  .${r.box}.info .${r.icon}::after,
  .${r.box}.warning .${r.icon}::after {
    top: 15%;
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
  }
  .${r.box}.info .${r.icon}::before,
  .${r.box}.warning .${r.icon}::before {
    top: calc(15% + 4px);
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 40%;
  }
  .${r.box}.error .${r.icon}::after,
  .${r.box}.error .${r.icon}::before {
    top: 20%;
    left: 50%;
    width: 2px;
    height: 60%;
    margin-left: -1px;
    border-radius: 1px;
  }
  .${r.box}.error .${r.icon}::after {
    transform: rotate(-45deg);
  }
  .${r.box}.error .${r.icon}::before {
    transform: rotate(45deg);
  }
  .${r.box}.success .${r.icon}::after {
    box-sizing: content-box;
    background-color: transparent;
    border: 2px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 50%;
    left: 35%;
    top: 13%;
    transform: rotate(45deg);
    width: 20%;
    transform-origin: center;
  }
  `.replace(/(\s)*/g,`$1`).replace(/\n|\t|\s([{},:;])/g,`$1`).replace(/([{},:;])\s/g,`$1`),t.head.appendChild(i);let a=[];function s(e){let t=10;for(let n=0;n<a.length;n++){let r=a[n];if(e&&e===r)break;t+=r.clientHeight+20}return t}function c(e){for(let t=0;t<a.length;t++)if(a[t]===e){a.splice(t,1);break}e.classList.add(r.hide),a.forEach(e=>{e.style.top=`${s(e)}px`})}function l(n,i=`info`,l){let u=t.createElement(`div`);u.className=r.item,u.style.top=`${s()}px`,u.style.zIndex=o.message,u.innerHTML=`
    <div class="${r.box} ${i}">
      <span class="${r.icon}"></span>
      <span class="${r.text}">${n}</span>
    </div>
    `,a.push(u),t.body.appendChild(u);function d(){u.removeEventListener(`animationend`,d),setTimeout(c,l||e.duration||3e3,u)}u.addEventListener(`animationend`,d);function f(){getComputedStyle(u).opacity===`0`&&(u.removeEventListener(`transitionend`,f),u.remove())}u.addEventListener(`transitionend`,f)}return{show:l,info(e){l(e,`info`)},success(e){l(e,`success`)},warning(e){l(e,`warning`)},error(e){l(e,`error`)}}}function a(){let e=document,t=`__${Math.random().toString(36).slice(2,7)}`,n={mask:`dialog-mask${t}`,popup:`dialog-popup${t}`,title:`dialog-title${t}`,content:`dialog-content${t}`,footer:`dialog-footer${t}`,confirm:`confirm${t}`,fade:`fade${t}`,show:`show${t}`,hide:`hide${t}`},r=`
  .${n.mask} {
    --time: .3s;
    --transition: .3s all;
    --black: #333;
    --text-color: #555;
    --confirm-bg: #2ec1cb;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    animation: ${n.fade} var(--time);
  }
  .${n.mask} * {
    box-sizing: border-box;
  }
  .${n.popup} {
    width: 74%;
    max-width: 375px;
    border-radius: var(--border-radius);
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    background-color: #fff;
    transition: var(--transition);
    animation: ${n.show} var(--time);
  }
  .${n.title} {
    font-size: 18px;
    padding: 12px 15px;
    border-bottom: solid 1px #eee;
    font-weight: normal;
    color: var(--black);
    text-align: left;
  }
  .${n.content} {
    padding: 16px 15px;
    font-size: 15px;
    color: var(--text-color);
    text-align: left;
    line-height: 20px;
  }
  .${n.footer} {
    width: 100%;
    text-align: right;
    border-top: solid 1px #eee;
    padding: 12px 15px;
  }
  @keyframes ${n.fade} {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes ${n.show} {
    0% { transform: translate3d(var(--x), var(--y), 0) scale(0); }
    100% { transform: translate3d(0, 0, 0) scale(1); }
  }
  .${n.mask}.${n.hide} {
    opacity: 0;
  }
  .${n.mask}.${n.hide} .${n.popup} {
    transform: translate3d(var(--x), var(--y), 0) scale(0);
  }
  `,i=e.createElement(`style`);i.textContent=r.replace(/(\n|\t|\s)*/gi,`$1`).replace(/\n|\t|\s(\{|\}|\,|\:|\;)/gi,`$1`).replace(/(\{|\}|\,|\:|\;)\s/gi,`$1`),e.head.appendChild(i);let a={x:`0vw`,y:`0vh`};e.addEventListener(`click`,function(e){let{innerWidth:t,innerHeight:n}=window,r=t/2,i=n/2,o=e.clientY-i;a.x=`${(e.clientX-r)/t*100}vw`,a.y=`${o/n*100}vh`},!0);function s(t){let r=e.createElement(`section`);r.className=n.mask,r.style.zIndex=o.dialog,r.style.setProperty(`--x`,a.x),r.style.setProperty(`--y`,a.y),a.x=`0vw`,a.y=`0vh`;let i=t.cancelText?`<button class="the-btn">${t.cancelText}</button>`:``;r.innerHTML=`
    <div class="${n.popup}">
      <h2 class="${n.title}">${typeof t.title==`string`?t.title:`提示`}</h2>
      <div class="${n.content}">${t.content}</div>
      <div class="${n.footer}">
        ${i}
        <button class="${n.confirm} the-btn blue">${t.confirmText||`确认`}</button>
      </div>
    </div>
    `,e.body.appendChild(r),r.addEventListener(`transitionend`,function(e){e.target===r&&r.classList.contains(n.hide)&&r.remove()});function s(){r.classList.add(n.hide)}t.cancelText&&(r.querySelector(`.${n.footer} button`).onclick=function(){s(),t.cancel&&t.cancel()}),r.querySelector(`.${n.confirm}`).onclick=function(){s(),t.confirm&&t.confirm()}}return{show:s}}var o={get message(){return(r()+20).toString()},get dialog(){return(r()+10).toString()}},s=i({duration:3600}),c=a().show;function l(e){return Object.prototype.toString.call(e).match(/\[object (\S*)\]/)[1].toLocaleLowerCase()}function u(e,t){return l(e)===t}function d(e,t){for(let n in t)if(Object.prototype.hasOwnProperty.call(e,n)){let r=t[n],i=e[n];u(i,`object`)?d(i,r):e[n]=r}}function f(e=Date.now(),t=`Y-M-D h:m:s`){if([`null`,null,`undefined`,void 0,``].includes(e))return``;typeof e==`string`&&new Date(e).toString()===`Invalid Date`&&(e=e.replace(/-/g,`/`));let n=e=>`0${e}`.slice(-2),r=new Date(e),i=[`Y`,`M`,`D`,`h`,`m`,`s`],a=[r.getFullYear().toString(),n(r.getMonth()+1),n(r.getDate()),n(r.getHours()),n(r.getMinutes()),n(r.getSeconds())];for(let e=0;e<a.length;e++)t=t.replace(i[e],a[e]);return t}function p(e,t,n){if(e=e.replace(/(^\s*)|(\s*$)/g,``),!e){n&&n(`复制的内容不能为空！`);return}let r=`the-clipboard`,i=document.getElementById(r);i||(i=document.createElement(`textarea`),i.id=r,i.readOnly=!0,i.style.cssText=`font-size: 15px; position: fixed; top: -1000%; left: -1000%;`,document.body.appendChild(i)),i.value=e,i.select(),i.setSelectionRange(0,i.value.length),document.execCommand(`copy`)?t?t():s.success(`复制成功`):n&&n(`复制失败`)}function m(e,t,n){let r=e.toString().trim();if(r.length===0)return``;let i=n&&r[0]==`-`?`-`:``;if(t){r=r.replace(/[^0-9.]+/gi,``);let e=r.split(`.`);e.length>1&&(r=e[0]+`.`+e[1])}else r=r.replace(/[^0-9]+/gi,``);return i+r}function h(e,t){if(t)return JSON.parse(JSON.stringify(e));let n=new Map;function r(e){if(!e||typeof e!=`object`)return e;if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);if(e instanceof Map)return new Map(Array.from(e,([e,t])=>[r(e),r(t)]));if(e instanceof Set)return new Set(Array.from(e,e=>r(e)));if(n.has(e))return n.get(e);let t=Array.isArray(e)?[]:{};n.set(e,t);for(let n in e)t[n]=r(e[n]);return t}return r(e)}function g(e,t={}){let n=t;if(u(e,`string`))try{n=JSON.parse(e)}catch(e){console.warn(`JSON格式化对象错误 >>`,e)}return n}function _(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)}function v(e){let t=`; ${document.cookie}`.split(`; ${e}=`);return t.length>=2?t.pop().split(`;`).shift():``}function y(e,t,n){let r=`${e}=${t}; path=/`;n&&(n.expires&&(r+=`; expires=${n.expires.toUTCString()}`),n.domain&&(r+=`; domain=${n.domain}`)),document.cookie=r}function b(e,t){let n=`expires=Thu, 01 Jan 1970 00:00:00 GMT`;t&&t.domain?document.cookie=`${e}=; domain=${t.domain}; path=/; ${n}`:document.cookie=`${e}=; path=/; ${n}`}var x=`ModuleUser`;function S(){return{id:``,name:``,type:``,token:``,avatar:``,account:``,password:``}}var C=3,w=1440*60*1e3,T=class{constructor(){this.init()}info=t(S());init(){let e=v(x);if(e){let t=g(e);d(this.info,t)}}update(e){d(this.info,e),y(x,JSON.stringify(this.info),{expires:new Date(Date.now()+C*w)})}reset(){d(this.info,S()),b(x)}},E=``+new URL(`../image/logo-CPmPqqKk.png`,import.meta.url).href,D=`ModuleLayout`,O=`admin-system-logout`,k=class{constructor(){let t=sessionStorage.getItem(D);try{t&&d(this.info,JSON.parse(t))}catch(e){console.log(`ModuleLayout init fail >>`,e)}e(this.info,()=>{sessionStorage.setItem(D,JSON.stringify(this.info))})}get isLogout(){return sessionStorage.getItem(O)===`true`}set isLogout(e){e?sessionStorage.setItem(O,`true`):sessionStorage.removeItem(O)}addRouters=[];completeRouters=[];info=t({showTagList:!0,showSidebar:!0,showSidebarLogo:!0,tagList:[],layoutMode:``,keyword:``})},A=`ModuleGoods`;function j(){return{id:0,name:``,price:0,specs:{size:`xs`,width:``,height:``}}}var M=class{constructor(){let e=sessionStorage.getItem(A);if(e){let t=g(e);d(this.info,t)}}info=t(j());update(e){d(this.info,e),sessionStorage.setItem(A,JSON.stringify(this.info))}reset(){d(this.info,j()),sessionStorage.removeItem(A)}},N=new class{constructor(){console.log(`%c ModuleStore init`,`color: #409EFF`)}projectInfo={title:`Vue Typescript Admin`,name:`XXX后台管理平台`,logo:E,link:`https://github.com/Travis-hjs/vue-admin`,email:`1141752341@qq.com`};layout=new k;user=new T;_goods;get goods(){return this._goods||=new M,this._goods}};export{f as a,u as c,s as d,c as f,h as i,g as l,l as n,m as o,r as p,p as r,_ as s,N as t,d as u};