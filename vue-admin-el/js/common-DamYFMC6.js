import{At as e,Dt as t,_t as n,vt as r}from"./ui-CUdWs3mQ.js";function i(e={}){let t=document,n=`__${Math.random().toString(36).slice(2,7)}`,r={item:`msg-item${n}`,box:`msg-box${n}`,hide:`hide${n}`,text:`msg-text${n}`,icon:`msg-icon${n}`},i=t.createElement(`style`);i.textContent=`
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
    `,a.push(u),t.body.appendChild(u);function d(){u.removeEventListener(`animationend`,d),setTimeout(c,l||e.duration||3e3,u)}u.addEventListener(`animationend`,d);function f(){getComputedStyle(u).opacity===`0`&&(u.removeEventListener(`transitionend`,f),u.remove())}u.addEventListener(`transitionend`,f)}return{show:l,info(e){l(e,`info`)},success(e){l(e,`success`)},warning(e){l(e,`warning`)},error(e){l(e,`error`)}}}function a(){let e=document,t=`__${Math.random().toString(36).slice(2,7)}`,n={mask:`dialog-mask${t}`,popup:`dialog-popup${t}`,title:`dialog-title${t}`,content:`dialog-content${t}`,footer:`dialog-footer${t}`,confirm:`confirm${t}`,cancel:`cancel${t}`,fade:`fade${t}`,show:`show${t}`,hide:`hide${t}`},r=`
  .${n.mask} {
    --time: .3s;
    --transition: .3s all;
    --black: #333;
    --text-color: #555;
    --confirm-bg: var(--blue);
    --border-radius: 2px;
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
    max-height: 80vh;
    overflow: auto;
  }
  .${n.footer} {
    width: 100%;
    text-align: right;
    border-top: solid 1px #eee;
    padding: 12px 15px;
    font-size: 0;
  }
  .${n.footer} button {
    padding: 8px 15px;
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
  `,i=e.createElement(`style`);i.textContent=r.replace(/(\n|\t|\s)*/gi,`$1`).replace(/\n|\t|\s(\{|\}|\,|\:|\;)/gi,`$1`).replace(/(\{|\}|\,|\:|\;)\s/gi,`$1`),e.head.appendChild(i);let a={x:`0vw`,y:`0vh`};e.addEventListener(`click`,function(e){let{innerWidth:t,innerHeight:n}=window,r=t/2,i=n/2,o=e.clientY-i;a.x=`${(e.clientX-r)/t*100}vw`,a.y=`${o/n*100}vh`},!0);function s(t){let r=e.createElement(`section`);r.className=n.mask,r.style.zIndex=o.dialog,r.style.setProperty(`--x`,a.x),r.style.setProperty(`--y`,a.y),a.x=`0vw`,a.y=`0vh`;let i=t.cancelText?`<button class="el-button ${n.cancel}">${t.cancelText}</button>`:``,s=t.width?` style="width: ${t.width}; max-width: 100%"`:``;r.innerHTML=`
    <div class="${n.popup}"${s}>
      <h2 class="${n.title}">${typeof t.title==`string`?t.title:`提示`}</h2>
      <div class="${n.content}">${t.content}</div>
      <div class="${n.footer}">
        ${i}
        <button class="el-button el-button--primary ${n.confirm}">${t.confirmText||`确认`}</button>
      </div>
    </div>
    `,e.body.appendChild(r),r.addEventListener(`transitionend`,function(e){e.target===r&&r.classList.contains(n.hide)&&r.remove()});let c=r.querySelector(`.${n.confirm}`),l=r.querySelector(`.${n.cancel}`),d=!1;function f(){r.classList.add(n.hide)}function p(){d=!0,c.innerHTML=`<i class="el-icon-loading el-icon--left"></i>`+c.innerHTML,c.classList.add(`is-loading`),l&&l.classList.add(`is-disabled`)}function m(){d=!1,c.querySelector(`.el-icon-loading`)?.remove(),c.classList.remove(`is-loading`),l&&l.classList.remove(`is-disabled`)}async function h(e){if(!d){if(!e)return f();if(u(e,`asyncfunction`)){p();let t=await e();m(),u(t,`boolean`)?t&&f():f();return}if(e.length){p(),e(e=>{m(),e&&f()});return}e(),f()}}t.cancelText&&(l.onclick=function(){h(t.cancel)}),c.onclick=function(){h(t.confirm)}}return{show:s}}var o={get message(){return(U()+20).toString()},get dialog(){return(U()+10).toString()}},s=i({duration:3600}),c=a().show;function l(e){return Object.prototype.toString.call(e).match(/\[object (\S*)\]/)[1].toLocaleLowerCase()}function u(e,t){return l(e)===t}function d(e,t){for(let n in t)if(Object.prototype.hasOwnProperty.call(e,n)){let r=t[n],i=e[n];u(i,`object`)?d(i,r):e[n]=r}}function f(e=Date.now(),t=`Y-M-D h:m:s`){if([`null`,null,`undefined`,void 0,``].includes(e))return``;typeof e==`string`&&new Date(e).toString()===`Invalid Date`&&(e=e.replace(/-/g,`/`));let n=e=>`0${e}`.slice(-2),r=new Date(e),i=[`Y`,`M`,`D`,`h`,`m`,`s`],a=[r.getFullYear().toString(),n(r.getMonth()+1),n(r.getDate()),n(r.getHours()),n(r.getMinutes()),n(r.getSeconds())];for(let e=0;e<a.length;e++)t=t.replace(i[e],a[e]);return t}function p(e,t,n){if(e=e.toString().replace(/(^\s*)|(\s*$)/g,``),!e){n&&n(`复制的内容不能为空！`);return}let r=`the-clipboard`,i=document.getElementById(r);i||(i=document.createElement(`textarea`),i.id=r,i.readOnly=!0,i.style.cssText=`font-size: 15px; position: fixed; top: -1000%; left: -1000%;`,document.body.appendChild(i)),i.value=e,i.select(),i.setSelectionRange(0,i.value.length),document.execCommand(`copy`)?t?t():s.success(`复制成功`):n&&n(`复制失败`)}function m(e,t,n){let r=e.toString().trim();if(r.length===0)return``;let i=n&&r[0]==`-`?`-`:``;if(t){r=r.replace(/[^0-9.]+/gi,``);let e=r.split(`.`);e.length>1&&(r=e[0]+`.`+e[1])}else r=r.replace(/[^0-9]+/gi,``);return i+r}function h(e,t){if(t)return JSON.parse(JSON.stringify(e));let n=new Map;function r(e){if(!e||typeof e!=`object`)return e;if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);if(e instanceof Map)return new Map(Array.from(e,([e,t])=>[r(e),r(t)]));if(e instanceof Set)return new Set(Array.from(e,e=>r(e)));if(n.has(e))return n.get(e);let t=Array.isArray(e)?[]:{};n.set(e,t);for(let n in e)t[n]=r(e[n]);return t}return r(e)}function g(e){let t=``;for(let n in e)t+=`&${n}=${e[n]}`;return t.slice(1)}function _(e,t={}){let n=t;if(u(e,`string`))try{n=JSON.parse(e)}catch(e){console.warn(`JSON格式化对象错误 >>`,e)}return n}function v(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)}function y(e,t){return Math.round(Math.random()*(t-e)+e)}function b(e,t){let n=parseInt((Math.random()*t).toString())+e,r=``,i=0;for(;i<n;){i++;let e=parseInt((Math.random()*1e3).toString());r+=String.fromCharCode(2e4+e)}return r}function x(e,t){return e.filter((e,n,r)=>r.findIndex(n=>t(n,e))===n)}function S(e){let t={};for(let n in e){let r=e[n],i=n.split(`.`);i.reduce((e,t,n)=>(n===i.length-1?e[t]=r:e[t]=e[t]||{},e[t]),t)}return t}function C(e,t){return t.includes(`.`)?t.split(`.`).reduce((e,t)=>e&&e[t],e):e[t]}function w(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.append(r),r.click(),r.remove(),URL.revokeObjectURL(n)}function T(e,t=2){function n(e){if(Array.isArray(e))return e.map(e=>n(e));if(typeof e==`object`&&e){let t={};for(let r in e)t[r]=n(e[r]);return t}else if(typeof e==`number`)return`<code style='color: var(--orange)'>${e}</code>`;else if(typeof e==`string`)return`<code style='color: var(--green)'>${e}</code>`;else if(e==null)return`<code style='color: var(--empty)'>${e}</code>`;return e}function r(e){return e.match(/^\s*/)[0].length}let i=n(JSON.parse(e)),a=JSON.stringify(i,null,4).split(`
`),o=t*2||4,s=``;return a.forEach(e=>{let t=r(e),n=e.trim();n.includes(`color: var(--orange)`)&&(n=n.replace(`"<code`,`<code`).replace(`</code>"`,`</code>`)),s+=`<p style="text-indent: ${t*o}px;">${n}</p>`}),`<section style="--black: #555; --orange: orange; --green: green; --empty: #ff4949; padding: 10px; background-color: #f8f8f8; word-wrap: break-word;">${s}</section>`}function E(e){let t=`; ${document.cookie}`.split(`; ${e}=`);return t.length>=2?t.pop().split(`;`).shift():``}function D(e,t,n){let r=`${e}=${t}; path=/`;n&&(n.expires&&(r+=`; expires=${n.expires.toUTCString()}`),n.domain&&(r+=`; domain=${n.domain}`)),document.cookie=r}function O(e,t){let n=`expires=Thu, 01 Jan 1970 00:00:00 GMT`;t&&t.domain?document.cookie=`${e}=; domain=${t.domain}; path=/; ${n}`:document.cookie=`${e}=; path=/; ${n}`}var k=`ModuleUser`;function A(){return{id:``,name:``,type:``,token:``,avatar:``,account:``,password:``}}var j=3,M=1440*60*1e3,N=class{constructor(){this.init()}info=e(A());init(){let e=E(k);if(e){let t=_(e);d(this.info,t)}}update(e){d(this.info,e),D(k,JSON.stringify(this.info),{expires:new Date(Date.now()+j*M)})}reset(){d(this.info,A()),O(k)}},P=``+new URL(`../image/logo-CPmPqqKk.png`,import.meta.url).href,F=`ModuleLayout`,I=`admin-system-logout`,L=class{constructor(){let e=sessionStorage.getItem(F);try{e&&d(this.info,JSON.parse(e))}catch(e){console.log(`ModuleLayout init fail >>`,e)}t(this.info,()=>{sessionStorage.setItem(F,JSON.stringify(this.info))})}get isLogout(){return sessionStorage.getItem(I)===`true`}set isLogout(e){e?sessionStorage.setItem(I,`true`):sessionStorage.removeItem(I)}addRouters=[];completeRouters=[];info=e({showTagList:!0,showSidebar:!0,showSidebarLogo:!0,tagList:[],layoutMode:``,keyword:``})},R=`ModuleGoods`;function z(){return{id:0,name:``,price:0,specs:{size:`xs`,width:``,height:``}}}var B=class{constructor(){let e=sessionStorage.getItem(R);if(e){let t=_(e);d(this.info,t)}}info=e(z());update(e){d(this.info,e),sessionStorage.setItem(R,JSON.stringify(this.info))}reset(){d(this.info,z()),sessionStorage.removeItem(R)}},V=new class{constructor(){console.log(`%c ModuleStore init`,`color: #409EFF`)}projectInfo={title:`Vue Typescript Admin`,name:`XXX后台管理平台`,logo:P,link:`https://github.com/Travis-hjs/vue-admin`,email:`1141752341@qq.com`};layout=new L;user=new N;_goods;get goods(){return this._goods||=new B,this._goods}},H=1e3;function U(){let e=H;return H++,e}var W=0;function G(e){return W++,e=e?`${e}-`:``,`${e}${Math.random().toString(36).slice(2)}-${Date.now()}-${W}`}function K(e=10){return{pageSize:e,currentPage:1,total:0}}function q(e){let i,a=0;function o(){i&&e.callback({width:i.clientWidth,height:i.clientHeight})}let s=V.layout;t(()=>s.info.showSidebar,function(){a&&clearTimeout(a),a=setTimeout(o,300)}),n(function(){i=u(e.el,`string`)?document.querySelector(e.el):e.el,window.addEventListener(`resize`,o),o()}),r(function(){a&&clearTimeout(a),window.removeEventListener(`resize`,o)})}function J(e){let t=e.findLevel||3,n=e.dataKey||`key`,r={index:-1},i={key:``};function a(e,r=1){let i=e.dataset[n];if(i)return i;if(r<t&&e.parentElement)return a(e.parentElement,r+1)}function o(e){let t={};return e.forEach((e,n)=>t[e]=n),t}function s(e){r.index=e}function c(){r.index=-1}function l(t,n){if(t.preventDefault(),r.index<0)return;let s=a(t.target);if(!s||s===i.key)return;i.key=s;let c=e.list(),l=c.map(t=>t[e.key]),u=JSON.stringify(l),d=JSON.parse(u);if([d[r.index],d[n]]=[d[n],d[r.index]],u===JSON.stringify(d))return;let f=o(d);c.sort((t,n)=>{let r=e.key;return f[t[r]]-f[n[r]]}),r.index=n}return{onDragStart:s,onDragMove:l,onDropEnd:c}}function Y(e,t=!0){return{required:t,message:e,trigger:`blur`}}function X(e,t=!0){return{required:t,message:e,trigger:`change`}}export{d as C,c as D,s as E,g as S,b as T,m as _,q as a,_ as b,V as c,h as d,w as f,C as g,S as h,X as i,l,f as m,Y as n,J as o,x as p,K as r,U as s,G as t,p as u,v,y as w,T as x,u as y};