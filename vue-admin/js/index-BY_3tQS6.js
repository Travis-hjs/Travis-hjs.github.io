function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./home-BOKNpi0c.js","./vendor-DctTrLAr.js","../css/vendor-BUMXTAWU.css","./index.vue_vue_type_style_index_0_lang-C4WZgOgm.js","../css/index-IkwLXdHV.css","../css/home-tXTSvP-d.css","./nested-d2FVjbee.js","../css/nested-DBbt7j1J.css","./menu-1-CePr7Ap2.js","./example-wvHONKfp.js","../css/example-CJnj_JQw.css","../css/menu-1-PIQFC6DV.css","./menu-2-T5Zqmglb.js","../css/menu-2-DwSbhe9C.css","./menu-3-cMTaxWHm.js","../css/menu-3-C1x6D_tQ.css","./menu-4-BtgRlS5Y.js","../css/menu-4-B_QkhR3M.css","./request-Bwx0AK7p.js","./common-Daitbgws.js","../css/request-BjYaB_Vm.css","./the-components-C-_JwrBB.js","../css/the-components-BuIyYIOI.css","./login-CJWFN8nG.js","../css/login-C2zo-VT6.css","./page-401-CEgjjPbJ.js","../css/page-401-hNHv4Vr6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var De=Object.defineProperty;var Me=(o,t,e)=>t in o?De(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var M=(o,t,e)=>(Me(o,typeof t!="symbol"?t+"":t,e),e);import{o as Q,r as V,c as k,a as p,d as q,b as O,e as ee,f as me,g as b,h as m,i as L,j as te,n as z,T as W,w as S,k as j,v as X,l as U,m as A,t as R,u as _,p as Pe,q as Ee,F as N,s as Z,x as D,y as Le,z as Fe,A as Ne,B as ve,C as ze,D as de,I as qe,E as He,K as Ve,G as je,H as We,J as Xe,L as Ye,N as ae,M as Ue,O as Je,P as Ge}from"./vendor-DctTrLAr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();let _e=1e3;function fe(){const o=_e;return _e++,o}function Ke(o={}){const t=document,e=`__${Math.random().toString(36).slice(2,7)}`,n={box:`msg-box${e}`,hide:`hide${e}`,text:`msg-text${e}`,icon:`msg-icon${e}`},s=t.createElement("style");s.textContent=`
  .${n.box}, .${n.icon}, .${n.text} {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .${n.box} {
    position: fixed;
    top: 0;
    left: 50%;
    display: flex;
    padding: 12px 16px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12);
    white-space: nowrap;
    animation: ${n.box}-move .4s;
    transition: .4s all;
    transform: translate3d(-50%, 0%, 0);
    opacity: 1;
    overflow: hidden;
  }
  .${n.box}::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
  }
  @keyframes ${n.box}-move {
    0% {
      opacity: 0;
      transform: translate3d(-50%, -100%, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(-50%, 0%, 0);
    }
  }
  .${n.box}.${n.hide} {
    opacity: 0;
    /* transform: translate3d(-50%, -100%, 0); */
    transform: translate3d(-50%, -100%, 0) scale(0);
  }
  .${n.icon} {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 6px;
    position: relative;
  }
  .${n.text} {
    font-size: 14px;
    line-height: 18px;
    color: #555;
  }
  .${n.icon}::after,
  .${n.icon}::before {
    position: absolute;
    content: "";
    background-color: #fff;
  }
  .${n.box}.info .${n.icon}, .${n.box}.info::after {
    background-color: #1890ff;
  }
  .${n.box}.success .${n.icon}, .${n.box}.success::after {
    background-color: #52c41a;
  }
  .${n.box}.warning .${n.icon}, .${n.box}.warning::after {
    background-color: #faad14;
  }
  .${n.box}.error .${n.icon}, .${n.box}.error::after {
    background-color: #ff4d4f;
  }
  .${n.box}.info .${n.icon}::after,
  .${n.box}.warning .${n.icon}::after {
    top: 15%;
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
  }
  .${n.box}.info .${n.icon}::before,
  .${n.box}.warning .${n.icon}::before {
    top: calc(15% + 4px);
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 40%;
  }
  .${n.box}.error .${n.icon}::after, 
  .${n.box}.error .${n.icon}::before {
    top: 20%;
    left: 50%;
    width: 2px;
    height: 60%;
    margin-left: -1px;
    border-radius: 1px;
  }
  .${n.box}.error .${n.icon}::after {
    transform: rotate(-45deg);
  }
  .${n.box}.error .${n.icon}::before {
    transform: rotate(45deg);
  }
  .${n.box}.success .${n.icon}::after {
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
  `.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),t.head.appendChild(s);const i=[];function a(g){let v=10;for(let f=0;f<i.length;f++){const u=i[f];if(g&&g===u)break;v+=u.clientHeight+20}return v}function l(g){for(let v=0;v<i.length;v++)if(i[v]===g){i.splice(v,1);break}g.classList.add(n.hide),i.forEach(function(v){v.style.top=`${a(v)}px`})}function r(g,v="info",f){const u=t.createElement("div");u.className=`${n.box} ${v}`,u.style.top=`${a()}px`,u.style.zIndex=Se.message,u.innerHTML=`
    <span class="${n.icon}"></span>
    <span class="${n.text}">${g}</span>
    `,i.push(u),t.body.appendChild(u);function c(){u.removeEventListener("animationend",c),setTimeout(l,f||o.duration||3e3,u)}u.addEventListener("animationend",c);function d(){getComputedStyle(u).opacity==="0"&&(u.removeEventListener("transitionend",d),u.remove())}u.addEventListener("transitionend",d)}return{show:r,info(g){r(g,"info")},success(g){r(g,"success")},warning(g){r(g,"warning")},error(g){r(g,"error")}}}function Ze(){const o=document,t=`__${Math.random().toString(36).slice(2,7)}`,e={mask:`dialog-mask${t}`,popup:`dialog-popup${t}`,title:`dialog-title${t}`,content:`dialog-content${t}`,footer:`dialog-footer${t}`,confirm:`confirm${t}`,fade:`fade${t}`,show:`show${t}`,hide:`hide${t}`},n=`
  .${e.mask} {
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
    animation: ${e.fade} var(--time);
  }
  .${e.mask} * {
    box-sizing: border-box;
  }
  .${e.popup} {
    width: 74%;
    max-width: 375px;
    border-radius: var(--border-radius);
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    background-color: #fff;
    transition: var(--transition);
    animation: ${e.show} var(--time);
  }
  .${e.title} {
    font-size: 18px;
    padding: 12px 15px;
    border-bottom: solid 1px #eee;
    font-weight: normal;
    color: var(--black);
    text-align: left;
  }
  .${e.content} {
    padding: 16px 15px;
    font-size: 15px;
    color: var(--text-color);
    text-align: left;
  }
  .${e.footer} {
    width: 100%;
    text-align: right;
    border-top: solid 1px #eee;
    padding: 12px 15px;
  }
  @keyframes ${e.fade} {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes ${e.show} {
    0% { transform: translate3d(var(--x), var(--y), 0) scale(0); }
    100% { transform: translate3d(0, 0, 0) scale(1); }
  }
  .${e.mask}.${e.hide} {
    opacity: 0;
  }
  .${e.mask}.${e.hide} .${e.popup} {
    transform: translate3d(var(--x), var(--y), 0) scale(0);
  }
  `,s=o.createElement("style");s.textContent=n.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),o.head.appendChild(s);const i={x:"0vw",y:"0vh"};o.addEventListener("click",function(l){const{innerWidth:r,innerHeight:g}=window,v=r/2,f=g/2,u=l.clientY-f,c=l.clientX-v;i.x=`${c/r*100}vw`,i.y=`${u/g*100}vh`},!0);function a(l){const r=o.createElement("section");r.className=e.mask,r.style.zIndex=Se.dialog,r.style.setProperty("--x",i.x),r.style.setProperty("--y",i.y),i.x="0vw",i.y="0vh";const g=l.cancelText?`<button class="the-btn">${l.cancelText}</button>`:"";r.innerHTML=`
    <div class="${e.popup}">
      <h2 class="${e.title}">${typeof l.title=="string"?l.title:"提示"}</h2>
      <div class="${e.content}">${l.content}</div>
      <div class="${e.footer}">
        ${g}
        <button class="${e.confirm} the-btn blue">${l.confirmText||"确认"}</button>
      </div>
    </div>
    `,o.body.appendChild(r),r.addEventListener("transitionend",function(f){f.target===r&&r.classList.contains(e.hide)&&r.remove()});function v(){r.classList.add(e.hide)}l.cancelText&&(r.querySelector(`.${e.footer} button`).onclick=function(){v(),l.cancel&&l.cancel()}),r.querySelector(`.${e.confirm}`).onclick=function(){v(),l.confirm&&l.confirm()}}return{show:a}}const Se={get message(){return(fe()+20).toString()},get dialog(){return(fe()+10).toString()}},oe=Ke({duration:3600}),Qe=Ze(),et=Qe.show,tt=function(){let o=location.origin,t="dev",e="";return location.hostname==="test.com"&&(t="test",e="https://api.test.com",o="https://test.com"),location.hostname==="travis-hjs.github.io"&&(t="prod",e="https://api.prod.com",o="https://prod.com"),{get requestTimeout(){return 8e3},get apiUrl(){return e},get isDev(){return t==="dev"},get webUrl(){return o}}}();function nt(o){return Object.prototype.toString.call(o).match(/\[object (\S*)\]/)[1].toLocaleLowerCase()}function Ce(o,t){return nt(o)===t}function H(o,t){for(const e in t)if(Object.prototype.hasOwnProperty.call(o,e)){const n=t[e],s=o[e];Ce(s,"object")?H(s,n):o[e]=n}}function ot(o=Date.now(),t="Y-M-D h:m:s"){if(["null",null,"undefined",void 0,""].includes(o))return"";typeof o=="string"&&new Date(o).toString()==="Invalid Date"&&(o=o.replace(/-/g,"/"));const e=a=>`0${a}`.slice(-2),n=new Date(o),s=["Y","M","D","h","m","s"],i=[n.getFullYear().toString(),e(n.getMonth()+1),e(n.getDate()),e(n.getHours()),e(n.getMinutes()),e(n.getSeconds())];for(let a=0;a<i.length;a++)t=t.replace(s[a],i[a]);return t}function Te(o,t,e){if(o=o.replace(/(^\s*)|(\s*$)/g,""),!o){e&&e("复制的内容不能为空！");return}const n="the-clipboard";let s=document.getElementById(n);s||(s=document.createElement("textarea"),s.id=n,s.readOnly=!0,s.style.cssText="font-size: 15px; position: fixed; top: -1000%; left: -1000%;",document.body.appendChild(s)),s.value=o,s.select(),s.setSelectionRange(0,s.value.length),document.execCommand("copy")?t?t():oe.success("复制成功"):e&&e("复制失败")}function Wn(o,t,e){let n=o.toString().trim();if(n.length===0)return"";const s="";return n=n.replace(/[^0-9]+/ig,""),s+n}function Ie(o,t={}){let e=t;if(Ce(o,"string"))try{e=JSON.parse(o)}catch(n){console.warn("JSON格式化对象错误 >>",n)}return e}function st(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)}const it={name:"App",setup(){let t;function e(){const n=Date.now(),{origin:s,pathname:i}=location,a=`${s+i}version.json?t=${n}`;fetch(a).then(l=>l.json()).then(l=>{l.version&&l.version!==window._version?(clearTimeout(t),et({title:"版本更新提示",content:`
            <div class="text-[14px]">
              <p>当前页面有新版本发布, 是否更新？</p>
              <p>新版发布时间：<span class="text-amber-600">${ot(l.version)}</span></p>
              <p>不更新则需要手动刷新页面，否则影响部分功能使用。</p>
            </div>
            `,confirmText:"更新",cancelText:"取消(关闭提醒)",confirm(){location.reload()}})):t=setTimeout(e,18e4)}).catch(l=>{console.error("检查版本出错 >>",l),clearTimeout(t)})}Q(function(){window._version&&!tt.isDev&&e()})}},he=(o,t)=>{const e=o.__vccOpts||o;for(const[n,s]of t)e[n]=s;return e};function rt(o,t,e,n,s,i){const a=V("router-view");return p(),k(a)}const at=he(it,[["render",rt]]),le=[];function lt(o,t){let e;le.length>1?e=le.shift():(e=document.createElement("div"),e.className="ripple");const n=t.getBoundingClientRect(),s=t.getAttribute("color");let i=Math.max(n.width,n.height);i>200&&(i=200),e.style.height=e.style.width=i+"px",e.style.backgroundColor=s||"rgba(255, 255, 255, .45)",t.appendChild(e);const a=o.touches,l=a?a[0].clientY:o.clientY,r=a?a[0].clientX:o.clientX,g=l-n.top-e.offsetHeight/2,v=r-n.left-e.offsetWidth/2;e.style.top=g+"px",e.style.left=v+"px";function f(){e.removeEventListener("animationend",f),t.removeChild(e),le.push(e)}e.addEventListener("animationend",f)}const ct={name:"Scrollbar"},ge=q({...ct,props:{thumbColor:{type:String,default:"rgba(147, 147, 153, 0.45)"},thumbSize:{type:Number,default:8},maxHeight:{type:String},maxWidth:{type:String}},setup(o,{expose:t}){const e=o,n=O(),s=O(),i=O(),a=O(),l=ee({x:{width:"",height:"",left:"",bottom:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor},y:{width:"",height:"",top:"",right:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor}}),r=O(!1);function g(){const x=n.value.parentElement;x.style.overflow="hidden"}function v(){l.y.right=l.y.top="0px",l.y.width=e.thumbSize+"px",l.x.bottom=l.x.left="0px",l.x.height=e.thumbSize+"px",l.x.borderRadius=l.y.borderRadius=`${e.thumbSize/2}px`}function f(){const x=s.value;if(x){let w=x.clientHeight/x.scrollHeight*100;w>=100&&(w=0),l.y.height=w+"%",l.y.transform=`translate3d(0, ${x.scrollTop/x.scrollHeight*x.clientHeight}px, 0)`;let B=x.clientWidth/x.scrollWidth*100;B>=100&&(B=0),l.x.width=B+"%",l.x.transform=`translate3d(${x.scrollLeft/x.scrollWidth*x.clientWidth}px, 0, 0)`}}let u=!1,c=!1,d=0;function h(x){const w=i.value,B=a.value,Y=x.target;w.contains(Y)&&(u=!0,c=!1,d=x.clientX-w.getBoundingClientRect().left),B.contains(Y)&&(u=!0,c=!0,d=x.clientY-B.getBoundingClientRect().top)}function E(x){if(!u)return;const w=s.value;if(c){const B=w.getBoundingClientRect().top,Y=w.clientHeight;let re=x.clientY-B;w.scrollTop=(re-d)/Y*w.scrollHeight}else{const B=w.getBoundingClientRect().left,Y=w.clientWidth;let re=x.clientX-B;w.scrollLeft=(re-d)/Y*w.scrollWidth}}function I(x){u=!1,n.value.contains(x.target)||(r.value=!1)}function C(){r.value=!0,f()}function y(){u||(r.value=!1)}let G;const K=O();return Q(function(){g(),v(),document.addEventListener("mousedown",h),document.addEventListener("mousemove",E),document.addEventListener("mouseup",I),G=new ResizeObserver(function(){f()}),K.value&&G.observe(K.value)}),me(function(){document.removeEventListener("mousedown",h),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",I),G.disconnect()}),t({updateThumbStyle:f}),(x,w)=>(p(),b("div",{class:"the-scrollbar",ref_key:"el",ref:n,onMouseenter:w[1]||(w[1]=B=>C()),onMouseleave:w[2]||(w[2]=B=>y())},[m("div",{ref_key:"wrap",ref:s,class:"the-scrollbar-wrap",style:z({"max-height":o.maxHeight,"max-width":o.maxWidth}),onScroll:w[0]||(w[0]=B=>f())},[m("div",{ref_key:"view",ref:K},[te(x.$slots,"default")],512)],36),L(W,{name:"fade"},{default:S(()=>[j(m("div",{class:"the-scrollbar-thumb",ref_key:"thumbY",ref:a,title:"滚动条-摁住拖拽Y轴",style:z(l.y)},null,4),[[X,r.value]])]),_:1}),L(W,{name:"fade"},{default:S(()=>[j(m("div",{class:"the-scrollbar-thumb",ref_key:"thumbX",ref:i,title:"滚动条-摁住拖拽X轴",style:z(l.x)},null,4),[[X,r.value]])]),_:1})],544))}}),ut={class:"base-dialog-title f-between f-vertical"},dt={key:0,class:"base-dialog-text"},ft={class:"base-dialog-body"},pt={key:0,class:"base-dialog-footer"},mt={name:"base-dialog"},ht=q({...mt,props:{title:{type:String,default:"提示"},show:{type:Boolean,default:!1},width:{type:String,default:"50%"},closeByMask:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1},zIndex:{type:Number,default:()=>fe()}},emits:["close","update:show","closed","opened"],setup(o,{emit:t}){const e=o,n=t,s=O(),i=O(),a=O(),l=O(!1);U(()=>e.show,function(c){c?setTimeout(()=>{l.value=!0},0):l.value=!1},{immediate:!0});function r(c){if(!e.show||l.value||s.value.contains(c.target))return;const{clientWidth:d,clientHeight:h}=s.value,E=d/2,I=h/2,C=c.clientY-I,G=`${(c.clientX-E)/d*100}vw`,K=`${C/h*100}vh`;g(G,K)}function g(c,d){const h=a.value;h&&(h.style.setProperty("--content-x",c),h.style.setProperty("--content-y",d))}function v(c){(c&&c.target===s.value&&e.closeByMask||c&&c.target===i.value)&&(n("update:show",!1),n("close"))}function f(){l.value&&g("0","0"),n("closed")}function u(){n("opened")}return Q(function(){document.addEventListener("click",r)}),me(function(){document.removeEventListener("click",r)}),(c,d)=>(p(),b("section",null,[(p(),k(Pe,{to:"body",disabled:!e.appendToBody},[L(W,{name:"fade"},{default:S(()=>[j(m("div",{ref_key:"el",ref:s,class:"base-dialog fvc",style:z({"z-index":e.zIndex}),onClick:v},[L(W,{name:"dialog-move",onAfterLeave:f,onAfterEnter:u},{default:S(()=>[j(m("div",{ref_key:"contentBox",ref:a,class:"base-dialog-content flex",style:z({width:e.width})},[m("div",ut,[c.$slots.header?A("",!0):(p(),b("h2",dt,R(o.title),1)),te(c.$slots,"header"),m("i",{class:"base-dialog-icon",ref_key:"closeBtn",ref:i,onClick:v},null,512)]),m("div",ft,[L(_(ge),{maxHeight:"76vh"},{default:S(()=>[te(c.$slots,"default")]),_:3})]),c.$slots.footer?(p(),b("div",pt,[te(c.$slots,"footer")])):A("",!0)],4),[[X,l.value]])]),_:3})],4),[[X,e.show]])]),_:3})],8,["disabled"]))]))}}),gt="modulepreload",vt=function(o,t){return new URL(o,t).href},ye={},T=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const i=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.all(e.map(r=>{if(r=vt(r,n),r in ye)return;ye[r]=!0;const g=r.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(!!n)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===r&&(!g||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${v}`))return;const u=document.createElement("link");if(u.rel=g?"stylesheet":gt,g||(u.as="script",u.crossOrigin=""),u.href=r,l&&u.setAttribute("nonce",l),document.head.appendChild(u),g)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})}))}return s.then(()=>t()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})};function _t(o){const e=`; ${document.cookie}`.split(`; ${o}=`);return e.length===2?e.pop().split(";").shift():""}function yt(o,t,e){let n=`${o}=${t}; path=/`;e&&(e.expires&&(n+=`; expires=${e.expires.toUTCString()}`),e.domain&&(n+=`; domain=${e.domain}`)),document.cookie=n}function bt(o,t){const e="expires=Thu, 01 Jan 1970 00:00:00 GMT";document.cookie=`${o}=; path=/; ${e}`}const ce="ModuleUser";function be(){return{id:"",name:"",type:"",token:"",avatar:"",account:"",password:""}}const xt=3,$t=24*60*60*1e3;class wt{constructor(){M(this,"info",ee(be()));this.init()}init(){const t=_t(ce);if(t){const e=Ie(t);H(this.info,e)}}update(t){H(this.info,t),yt(ce,JSON.stringify(this.info),{expires:new Date(Date.now()+xt*$t)})}reset(){H(this.info,be()),bt(ce)}}const kt=""+new URL("../image/logo-CPmPqqKk.png",import.meta.url).href,xe="ModuleLayout";class Et{constructor(){M(this,"addRouters",[]);M(this,"completeRouters",[]);M(this,"info",ee({showTagList:!0,showSidebar:!0,showSidebarLogo:!0,tagList:[],layoutMode:"",keyword:""}));const t=sessionStorage.getItem(xe);try{t&&H(this.info,JSON.parse(t))}catch(e){console.log("ModuleLayout init fail >>",e)}U(this.info,()=>{sessionStorage.setItem(xe,JSON.stringify(this.info))})}}const ue="ModuleGoods";function $e(){return{id:0,name:"",price:0,specs:{size:"xs",width:"",height:""}}}class Lt{constructor(){M(this,"info",ee($e()));const t=sessionStorage.getItem(ue);if(t){const e=Ie(t);H(this.info,e)}}update(t){H(this.info,t),sessionStorage.setItem(ue,JSON.stringify(this.info))}reset(){H(this.info,$e()),sessionStorage.removeItem(ue)}}class St{constructor(){M(this,"projectInfo",{title:"Vue Typescript Admin",name:"XXX后台管理平台",logo:kt,link:"https://github.com/Travis-hjs/vue-admin",email:"1141752341@qq.com"});M(this,"layout",new Et);M(this,"user",new wt);M(this,"_goods");console.log("%c ModuleStore init","color: #409EFF")}get goods(){return this._goods||(this._goods=new Lt),this._goods}}const $=new St,Ct={key:0,class:"separator"},Tt={key:1,href:"javascript:void(0)"},It={name:"BreadCrumb"},Ot=q({...It,setup(o){const t=Ee(),e=O([]);function n(){const s=t.matched.filter(i=>i.meta&&i.meta.title).map(i=>({path:i.path,meta:{...i.meta}}));e.value=s}return U(()=>t.path,function(){t.path.startsWith("/redirect/")||n()}),n(),(s,i)=>{const a=V("router-link");return p(),k(Fe,{name:"breadcrumb",tag:"div",class:"layout-breadcrumb f-vertical"},{default:S(()=>[(p(!0),b(N,null,Z(e.value,(l,r)=>(p(),b("span",{class:D(["layout-breadcrumb-item",{last:r===e.value.length-1}]),key:l.path},[r>0?(p(),b("i",Ct,"/")):A("",!0),r===e.value.length-1?(p(),b("a",Tt,R(l.meta.title),1)):(p(),k(a,{key:2,to:l.path},{default:S(()=>[Le(R(l.meta.title),1)]),_:2},1032,["to"]))],2))),128))]),_:1})}}});function se(){const o=Ee(),t=Ne();function e(i){return JSON.stringify(i||{})}function n(i){return i.path===o.path&&e(i.query)===e(o.query)&&e(i.params)===e(o.params)}function s(i){if(n(i))return!0;if(i.children&&i.children.length)for(let a=0;a<i.children.length;a++){const l=i.children[a];if(s(l))return!0}return!1}return{route:o,router:t,isActive:n,hasActive:s}}let we=0;function Rt(){return we++,`menu-${we}`}function Bt(o=300){const t=`${o}ms height`;function e(r){r.style.transition=t,r.style.height="0px"}function n(r){r.scrollHeight!==0?r.style.height=`${r.scrollHeight}px`:r.style.height="",r.style.overflow="hidden"}function s(r){r.style.transition=r.style.height=""}function i(r){r.style.display="block",r.style.height=`${r.scrollHeight}px`,r.style.overflow="hidden"}function a(r){r.scrollHeight!==0&&(r.style.transition=t,r.style.height="0px")}function l(r){r.style.transition=r.style.height=""}return{onBeforeEnter:e,onEnter:n,onAfterEnter:s,onBeforeLeave:i,onLeave:a,onAfterLeave:l}}const At={class:"the-layout-tag-box"},Dt={class:"the-layout-tags"},Mt=["onClick"],Pt=["onClick"],Ft={name:"TagList"},Nt=q({...Ft,setup(o){const t=$.layout.info,{route:e,router:n,isActive:s}=se();function i(f){if(s(t.tagList[f])){const u=f>0?f-1:f+1,c=t.tagList[u];n.push({path:c.path,query:c.query,params:c.params})}t.tagList.splice(f,1)}U(()=>e.path,function(){t.tagList.some(u=>s(u))||t.tagList.push({name:e.name,path:e.path,query:e.query,params:e.params,meta:e.meta})},{immediate:!0});const a=ee({show:!1,left:""}),l={list:[{label:"关闭其他",id:1,click(){a.show=!1;const f=l.current;s(f)?t.tagList=[f]:n.push(f.path).then(()=>{t.tagList=[f]})},show:()=>t.tagList.length>1},{label:"在新标签打开",id:2,click(){a.show=!1;const f=location.href.split("#");window.open(`${f[0]}#${l.current.path}`,"_blank")}},{label:"复制当前信息",id:3,click(){a.show=!1;const f=l.current;Te(JSON.stringify(f,null,4),()=>oe.success("复制成功！"))}}],current:void 0},r=O();function g(f,u){a.show=!0,l.current=u,ze(()=>{let c=f.x;const d=parseFloat(getComputedStyle(r.value).width),h=document.body.clientWidth-d;c>h&&(c=h),a.left=`${c}px`})}function v(f){const u=f.target;a.show&&!r.value.contains(u)&&(a.show=!1)}return Q(function(){document.addEventListener("click",v)}),me(function(){document.removeEventListener("click",v)}),(f,u)=>{const c=V("router-link");return p(),b(N,null,[m("div",At,[L(_(ge),null,{default:S(()=>[m("div",Dt,[(p(!0),b(N,null,Z(_(t).tagList,(d,h)=>(p(),k(c,{class:D(["the-layout-tag",{"is-active":_(s)(d)}]),key:d.path+h,to:{path:d.path,query:d.query,params:d.params},onContextmenu:ve(E=>g(E,d),["prevent"])},{default:S(()=>[m("span",null,R(d.meta.title),1),m("i",{class:"close",onClick:ve(E=>i(h),["prevent","stop"])},"-",8,Mt)]),_:2},1032,["class","to","onContextmenu"]))),128))])]),_:1})]),j(m("div",{ref_key:"tagMenuRef",ref:r,class:"the-layout-tag-menu",style:z({left:a.left})},[(p(!0),b(N,null,Z(l.list,d=>j((p(),b("div",{key:d.id,class:"the-layout-tag-menu-item",onClick:h=>d.click()},R(d.label),9,Pt)),[[X,d.show?d.show():!0]])),128))],4),[[X,a.show]])],64)}}}),zt={name:"Icon"},F=q({...zt,props:{name:{type:String,required:!0},size:{type:[String,Number],default:void 0},color:{type:String,default:void 0}},setup(o){const t=o,e=de(()=>{const n=t.size;return{fontSize:typeof n=="number"?`${n}px`:n,color:t.color}});return(n,s)=>(p(),k(_(qe),{icon:t.name,style:z(e.value),class:"the-icon"},null,8,["icon","style"]))}}),qt={class:"the-layout-header"},Ht={class:"the-layout-navbar flex"},Vt={class:"user-info-box f-vertical"},jt=["src"],Wt={class:"the-tag green mr-[10px]"},Xt=m("span",null,"退出登录",-1),Yt={name:"HeaderBar"},Ut=q({...Yt,setup(o){const t=$.layout.info,e=$.user.info,{router:n}=se();function s(){t.showSidebar=!t.showSidebar}const i="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif";function a(){$.user.reset(),n.push("/login").then(()=>{t.tagList=[],qn()})}return(l,r)=>(p(),b("div",qt,[m("div",Ht,[m("div",{class:D(["fvc menu-fold",{"menu-fold-actived":_(t).showSidebar}]),onClick:r[0]||(r[0]=g=>s())},[L(_(F),{name:"tdesign:menu-fold",size:"24px",color:"#555"})],2),L(Ot,{class:"f1"}),m("div",Vt,[m("img",{class:"avatar",src:_(e).avatar||i},null,8,jt),m("span",Wt,R(_(e).name||_(e).account||"用户未设置昵称"),1),m("button",{class:"logout f-vertical",onClick:r[1]||(r[1]=g=>a())},[L(_(F),{name:"tdesign:logout",class:"mr-[4px]"}),Xt])])]),_(t).showTagList?(p(),k(Nt,{key:0})):A("",!0)]))}}),Jt={class:"f1"},Gt=m("i",{class:"the-layout-menu-arrow"},null,-1),Kt=["href"],Zt={class:"f1"},Qt={class:"f1"},en=["href"],tn={name:"MenuItem"},nn=q({...tn,props:{menu:{type:Object,required:!0},level:{type:Number,default:0}},setup(o){const t=o,{onBeforeEnter:e,onEnter:n,onAfterEnter:s,onBeforeLeave:i,onLeave:a,onAfterLeave:l}=Bt(),{isActive:r,hasActive:g}=se(),v=de(function(){const h=r(t.menu);return{"the-layout-menu-title":!0,"is-current":g(t.menu)&&!h,"is-open":t.menu.isOpen,"is-active":h}}),f=de(function(){return{"the-layout-menu-list":!0,"is-open":t.menu.isOpen}});function u(h){return{"the-layout-menu-link":!0,"is-active":r(h)}}function c(h){return!!(h.children&&h.children.length>0)}function d(){const h=t.menu;h.isOpen=!h.isOpen}return(h,E)=>{const I=V("router-link"),C=V("MenuItem",!0);return p(),b("section",{class:"the-layout-menu",style:z({"--level":t.level})},[c(t.menu)?(p(),b("div",{key:0,class:D(v.value),onClick:E[0]||(E[0]=y=>d())},[t.menu.icon?(p(),k(_(F),{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):A("",!0),m("span",Jt,R(t.menu.title),1),Gt],2)):(p(),b(N,{key:1},[t.menu.link?(p(),b("a",{key:0,href:t.menu.link,class:D(v.value),target:"_blank"},[t.menu.icon?(p(),k(_(F),{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):A("",!0),m("span",Zt,R(t.menu.title),1)],10,Kt)):(p(),k(I,{key:1,to:t.menu.path,class:D(v.value)},{default:S(()=>[t.menu.icon?(p(),k(_(F),{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):A("",!0),m("span",Qt,R(t.menu.title),1)]),_:1},8,["to","class"]))],64)),c(t.menu)?(p(),k(W,{key:2,onBeforeEnter:_(e),onEnter:_(n),onAfterEnter:_(s),onBeforeLeave:_(i),onLeave:_(a),onAfterLeave:_(l)},{default:S(()=>[j(m("div",{class:D(f.value)},[(p(!0),b(N,null,Z(t.menu.children,y=>(p(),b(N,{key:y.menuId},[c(y)?(p(),k(C,{key:0,menu:y,level:t.level+1},null,8,["menu","level"])):(p(),b(N,{key:1},[y.link?(p(),b("a",{key:0,href:y.link,class:D(u(y)),target:"_blank"},[y.icon?(p(),k(_(F),{key:0,name:y.icon,class:"menu-icon"},null,8,["name"])):A("",!0),m("span",null,R(y.title),1)],10,en)):(p(),k(I,{key:1,to:y.path,class:D(u(y))},{default:S(()=>[y.icon?(p(),k(_(F),{key:0,name:y.icon,class:"menu-icon"},null,8,["name"])):A("",!0),m("span",null,R(y.title),1)]),_:2},1032,["to","class"]))],64))],64))),128))],2),[[X,t.menu.isOpen]])]),_:1},8,["onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])):A("",!0)],4)}}}),on={name:"Empty",props:{text:{type:String,default:"暂无数据"},size:{type:Number}}},sn="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20width='64'%20height='41'%20viewBox='0%200%2064%2041'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(0%201)'%20fill='none'%20fill-rule='evenodd'%3e%3cellipse%20fill='%23f5f5f5'%20cx='32'%20cy='33'%20rx='32'%20ry='7'%3e%3c/ellipse%3e%3cg%20fill-rule='nonzero'%20stroke='%23d9d9d9'%3e%3cpath%20d='M55%2012.76L44.854%201.258C44.367.474%2043.656%200%2042.907%200H21.093c-.749%200-1.46.474-1.947%201.257L9%2012.761V22h46v-9.24z'%3e%3c/path%3e%3cpath%20d='M41.613%2015.931c0-1.605.994-2.93%202.227-2.931H55v18.137C55%2033.26%2053.68%2035%2052.05%2035h-40.1C10.32%2035%209%2033.259%209%2031.137V13h11.16c1.233%200%202.227%201.323%202.227%202.928v.022c0%201.605%201.005%202.901%202.237%202.901h14.752c1.232%200%202.237-1.308%202.237-2.913v-.007z'%20fill='%23fafafa'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",rn={class:"empty"},an={class:"text"};function ln(o,t,e,n,s,i){return p(),b("div",rn,[m("img",{class:"icon",style:z({width:e.size?`${e.size}px`:void 0}),src:sn,alt:""},null,4),m("span",an,R(e.text),1)])}const cn=he(on,[["render",ln],["__scopeId","data-v-a5ec6d3f"]]),un={name:"Menu"},dn=q({...un,props:{mergeOnlyOneChild:{type:Number,default:0}},setup(o){const t=o,e=$.layout.info;function n(u){const c=[];for(let d=0;d<u.length;d++){const h=u[d];if(h.meta&&h.meta.hidden)continue;const E={menuId:Rt(),path:h.path,isOpen:!1,title:h.meta.title,icon:h.meta.icon,link:h.meta.link};h.children&&h.children.length&&(E.children=n(h.children)),c.push(E)}return c}function s(u,c=1){const d=[],h=c<t.mergeOnlyOneChild,E=c+1;for(let I=0;I<u.length;I++){const C=u[I],y=C.children;y&&y.length>0?y.length===1?(d.push(y[0]),y[0].children&&y[0].children.length>0&&h&&(y[0].children=s(y[0].children,E))):(d.push(C),h&&(C.children=s(y,E))):d.push(C)}return d}function i(u){const c=e.keyword;return u.filter(d=>d.children&&(d.children=i(d.children),d.children.length>0)?(d.isOpen=!0,!0):!!d.title.includes(c))}let a=n($.layout.completeRouters);t.mergeOnlyOneChild&&(a=s(a));const l=O(a),{route:r,isActive:g}=se();function v(u){const c=[];function d(h,E){for(let I=0;I<h.length;I++){const C=h[I];if(g(C))return c.push(...E),!0;if(C.children&&C.children.length&&d(C.children,[...E,C]))return!0}return!1}return d(u,[]),c}function f(){v(l.value).forEach(c=>{c.isOpen=!0})}return U(()=>e.keyword,function(u){const c=JSON.parse(JSON.stringify(a));if(u){const d=i(c);l.value=d}else l.value=c,f()}),U(()=>r.path,function(){f()},{immediate:!0}),(u,c)=>(p(),b(N,null,[(p(!0),b(N,null,Z(l.value,(d,h)=>(p(),k(nn,{menu:d,key:d.menuId,style:z(h?void 0:{"margin-top":"0"})},null,8,["menu","style"]))),128)),l.value.length?A("",!0):(p(),k(_(cn),{key:0,style:{height:"140px"},text:"没有匹配到任何菜单"}))],64))}}),fn={class:"the-layout-sidebar"},pn={class:"the-layout-sidebar-content"},mn={key:0,class:"the-logo-box"},hn=["src"],gn=["title"],vn={key:1,style:{height:"var(--page-padding)"}},_n={class:"the-layout-search-box"},yn={class:"f1"},bn={class:"the-layout-sidebar-content padding-full"},xn={name:"Sidebar"},$n=q({...xn,setup(o){const t=$.layout.info,e=$.projectInfo;function n(){t.keyword=""}return(s,i)=>{const a=V("router-link");return p(),b("div",fn,[m("section",pn,[L(W,{name:"fade",mode:"out-in"},{default:S(()=>[_(t).showSidebarLogo?(p(),b("div",mn,[L(a,{class:"the-logo-link f-vertical",to:"/"},{default:S(()=>[m("img",{class:"the-logo",src:_(e).logo},null,8,hn),m("h1",{class:"the-logo-title ellipsis",title:_(e).title},R(_(e).title),9,gn)]),_:1})])):(p(),b("div",vn))]),_:1}),m("div",_n,[j(m("input",{"onUpdate:modelValue":i[0]||(i[0]=l=>_(t).keyword=l),type:"text",placeholder:"请输入关键字检索菜单"},null,512),[[He,_(t).keyword]]),_(t).keyword?(p(),k(_(F),{key:0,class:"the-layout-search-icon",name:"tdesign:close-circle",onClick:i[1]||(i[1]=l=>n())})):(p(),k(_(F),{key:1,class:"the-layout-search-icon",name:"tdesign:search"}))])]),m("section",yn,[L(_(ge),null,{default:S(()=>[m("div",bn,[L(dn,{mergeOnlyOneChild:1})])]),_:1})])])}}}),wn={name:"Layout"},ke=q({...wn,setup(o){const t=$.layout.info;function e(g){let v=[];for(let f=0;f<g.length;f++){const u=g[f],c=u.children;c&&c.length>0&&(v=v.concat(e(c))),u.meta.keepAlive&&u.name&&v.push(u.name)}return v.filter(f=>f)}const n=e($.layout.completeRouters),s=O(),i=O(!1);let a;function l(){a.scrollTo({top:0,left:0,behavior:"smooth"})}function r(){i.value=a.scrollTop>document.documentElement.clientHeight}return Q(function(){a=s.value,a.addEventListener("scroll",r),r()}),(g,v)=>{const f=V("router-view");return p(),b("div",{class:D(["the-layout",_(t).layoutMode,{"has-tag-list":_(t).showTagList},{"collapsed-sidebar":!_(t).showSidebar}])},[L(Ut),L($n),m("div",{class:"the-layout-content",ref_key:"contentBox",ref:s},[L(f,{class:"the-layout-page"},{default:S(({Component:u,route:c})=>[L(W,{name:"page-y",mode:"out-in"},{default:S(()=>[(p(),k(Ve,{include:_(n)},[(p(),k(je(u),{key:c.fullPath}))],1032,["include"]))]),_:2},1024)]),_:1})],512),m("button",{class:D(["the-layout-to-top fvc",{hidden:!i.value}]),title:"返回顶部",onClick:v[0]||(v[0]=u=>l())},[L(_(F),{name:"tdesign:align-top",size:20})],2)],2)}}}),kn={name:"page-404",data(){return{project:$.projectInfo}}},ie=o=>(Xe("data-v-9091b7be"),o=o(),Ye(),o),En={class:"page-404 fvc"},Ln=We('<div class="from-top-box f-vertical" data-v-9091b7be><div class="mr-[30px]" data-v-9091b7be><div class="point-icon mb-[50px]" data-v-9091b7be></div><div class="point-icon" data-v-9091b7be></div></div><div class="radius-icon" data-v-9091b7be></div><div class="code-value" data-v-9091b7be>404</div></div>',1),Sn={class:"from-right-box mb-[40px]"},Cn=ie(()=>m("p",{class:"text"},"你访问的页面不存在，请确认页面路径是否正确。",-1)),Tn=ie(()=>m("p",{class:"text"},"我们只收集某些错误信息，然后需要你重新点击返回首页或返回上一页。",-1)),In={class:"pt-[40px]"},On={class:"from-bottom-box flex"},Rn=ie(()=>m("img",{class:"qrcode-box",src:"https://travis-hjs.github.io/images/reward-code.jpg",alt:"谢谢打赏！"},null,-1)),Bn={class:"pt-[20px]"},An=ie(()=>m("p",{class:"desc"},"如需技术支持，请扫码联系作者。",-1)),Dn={class:"desc"},Mn={class:"desc"};function Pn(o,t,e,n,s,i){const a=V("router-link");return p(),b("div",En,[m("section",null,[Ln,m("div",Sn,[Cn,Tn,m("div",In,[L(a,{class:"go-back fvc",to:"/"},{default:S(()=>[Le("返回首页")]),_:1})])]),m("div",On,[Rn,m("div",Bn,[An,m("p",Dn,"邮箱地址："+R(s.project.email),1),m("p",Mn,"项目地址："+R(s.project.link),1)])])])])}const ne=he(kn,[["render",Pn],["__scopeId","data-v-9091b7be"]]),Fn=[{path:"/",name:"index",redirect:"/home",component:ke,meta:{title:"首页",icon:"tdesign:home"},children:[{path:"/home",meta:{title:"首页展示",icon:"tdesign:bookmark-double"},component:()=>T(()=>import("./home-BOKNpi0c.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)},{path:"/nested",name:"nested",redirect:"/nested/menu-1",meta:{title:"多级菜单嵌套",icon:"tdesign:tree-square-dot"},component:()=>T(()=>import("./nested-d2FVjbee.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/menu-1",name:"nested/menu-1",meta:{title:"el-plus 表格"},component:()=>T(()=>import("./menu-1-CePr7Ap2.js"),__vite__mapDeps([8,1,2,9,10,11]),import.meta.url)},{path:"/nested/menu-2",name:"nested/menu-2",meta:{title:"el-plus 表单验证"},component:()=>T(()=>import("./menu-2-T5Zqmglb.js"),__vite__mapDeps([12,1,2,13]),import.meta.url)},{path:"/nested/three-level",name:"nested/three-level",meta:{title:"三级菜单"},redirect:"/nested/three-level/menu-1",component:()=>T(()=>import("./nested-d2FVjbee.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/three-level/menu-1",name:"/nested/three-level/menu-1",meta:{title:"菜单 3-1"},component:()=>T(()=>import("./menu-1-CePr7Ap2.js"),__vite__mapDeps([8,1,2,9,10,11]),import.meta.url)},{path:"/nested/three-level/menu-2",name:"/nested/three-level/menu-2",meta:{title:"菜单 3-2"},component:()=>T(()=>import("./menu-2-T5Zqmglb.js"),__vite__mapDeps([12,1,2,13]),import.meta.url)}]},{path:"/nested/four-level",name:"nested/four-level",meta:{title:"三级菜单-2"},redirect:"/nested/four-level/menu-1",component:()=>T(()=>import("./nested-d2FVjbee.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/four-level/menu-1",name:"/nested/four-level/menu-1",meta:{title:"菜单 3-2-1"},component:()=>T(()=>import("./menu-1-CePr7Ap2.js"),__vite__mapDeps([8,1,2,9,10,11]),import.meta.url)}]},{path:"/nested/menu-3",name:"nested/menu-3",meta:{title:"菜单 2-3"},component:()=>T(()=>import("./menu-3-cMTaxWHm.js"),__vite__mapDeps([14,1,2,15]),import.meta.url)}]},{path:"/link-baidu",name:"link-baidu",component:ne,meta:{title:"百度一下",icon:"tdesign:system-search-filled",link:"https://www.baidu.com"}},{path:"/menu-4",name:"menu-4",meta:{title:"换行菜单标题换行菜单标题",icon:"tdesign:component-layout"},component:()=>T(()=>import("./menu-4-BtgRlS5Y.js"),__vite__mapDeps([16,1,2,17]),import.meta.url)}]},{path:"/example",name:"example",component:ke,meta:{title:"示例页栏目",icon:"tdesign:play-demo"},redirect:"/example/request",children:[{path:"/example/request",name:"example-request",meta:{title:"http-请求示例",keepAlive:!0},component:()=>T(()=>import("./request-Bwx0AK7p.js"),__vite__mapDeps([18,1,2,19,20]),import.meta.url)},{path:"/example/components",name:"example-components",meta:{title:"自定义组件"},component:()=>T(()=>import("./the-components-C-_JwrBB.js"),__vite__mapDeps([21,1,2,19,22]),import.meta.url)},{path:"/example/tsx",name:"example-tsx",meta:{title:"tsx-示例"},component:()=>T(()=>import("./example-wvHONKfp.js"),__vite__mapDeps([9,1,2,10]),import.meta.url)},{path:"/example/no-found",name:"no-found",meta:{title:"404 页面",link:`${location.origin+location.pathname}#/is-error-path`},component:ne}]},{path:"/"+$.projectInfo.link,name:"GitHub-Travis",component:ne,meta:{title:"项目地址",icon:"tdesign:logo-github-filled",link:$.projectInfo.link,auth:[0]}}],J={path:"/",query:{}},pe="redirect404";let P;function Oe(o){const t=[],e=$.user.info.type;for(let n=0;n<o.length;n++){const s=o[n],i=s.meta?s.meta.auth:void 0;(!i||i&&i.includes(e))&&(s.children&&s.children.length>0&&(s.children=Oe(s.children)),t.push(s))}return t}async function Nn(){return Oe(Fn)}function zn(o,t){P=o,P.beforeEach(async function(e,n,s){if(ae.start(),$.user.info.token)if($.layout.addRouters.length>0)s();else{$.layout.addRouters=await Nn();for(let i=0;i<$.layout.addRouters.length;i++){const a=$.layout.addRouters[i];P.addRoute(a)}P.hasRoute(pe)||P.addRoute({...t[1],path:"/:catchAll(.*)",name:pe}),$.layout.completeRouters=t.concat($.layout.addRouters),s({...e,replace:!0})}else e.path==="/login"?s():(J.path=e.path,J.query=e.query,s({path:"/login"}),ae.done())}),P.afterEach(e=>{ae.done(),e.meta&&e.meta.title&&(document.title=e.meta.title)})}function Xn(){P.replace({path:J.path,query:J.query})}function qn(){const o=$.layout.addRouters;for(let t=o.length-1;t>-1;t--){const e=o[t];e.name&&P.hasRoute(e.name)&&P.removeRoute(e.name)}J.path="/",J.query={},P.removeRoute(pe),$.layout.addRouters=$.layout.completeRouters=[]}const Re=[{path:"/login",name:"login",component:()=>T(()=>import("./login-CJWFN8nG.js"),__vite__mapDeps([23,1,2,19,3,4,24]),import.meta.url),meta:{hidden:!0,title:"请登录"}},{path:"/404",name:"page-404",component:ne,meta:{hidden:!0,title:"不存在该页面"}},{path:"/401",name:"page-401",component:()=>T(()=>import("./page-401-CEgjjPbJ.js"),__vite__mapDeps([25,1,2,26]),import.meta.url),meta:{hidden:!0,title:"暂无权限访问"}}],Be=Ue({history:Je(),routes:Re});zn(Be,Re);function Hn(o){o.directive("copy",{mounted(t,e){t.addEventListener("click",function(){Te(e.value,()=>oe.success("复制成功"),n=>oe.success(n))})}}),o.directive("ripple",{mounted(t){const e=st()?"touchstart":"mousedown";t.setAttribute("ripple",""),t.addEventListener(e,function(n){lt(n,t)})}}),o.component("base-dialog",ht),o.use(Be)}const Ae=Ge(at);Hn(Ae);Ae.mount("#app");export{he as _,H as a,et as b,Te as c,ht as d,F as e,ge as f,nt as g,tt as h,Wn as i,Ie as j,oe as m,Xn as o,Hn as r,$ as s};
