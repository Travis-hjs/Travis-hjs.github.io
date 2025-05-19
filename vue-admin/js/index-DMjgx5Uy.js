function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./home-BXKuDYUz.js","./vendor-DlsSvUR1.js","../css/vendor-BUMXTAWU.css","./index.vue_vue_type_style_index_0_lang-D6Z8QSjW.js","../css/index-CBMF1Z1B.css","../css/home-C0-MuaMf.css","./nested-CAGLXTza.js","../css/nested-DBbt7j1J.css","./menu-1-BD_qyMV_.js","../css/menu-1-PIQFC6DV.css","./menu-2-5HHjKaEE.js","../css/menu-2-DwSbhe9C.css","./menu-3-DDSjRtE5.js","../css/menu-3-C1x6D_tQ.css","./menu-4-BZzpvtWp.js","../css/menu-4-B_QkhR3M.css","./request-Ce3MsyoC.js","./common-CAajVb3j.js","../css/request-BjYaB_Vm.css","./the-components-DQT-G3GR.js","../css/the-components-BuIyYIOI.css","./example-Manrn9pk.js","../css/example-CJnj_JQw.css","./login-C3En-Hgj.js","../css/login-C2zo-VT6.css","./page-401-D73KLJfI.js","../css/page-401-hNHv4Vr6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var Pe=Object.defineProperty;var De=(s,t,e)=>t in s?Pe(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var P=(s,t,e)=>(De(s,typeof t!="symbol"?t+"":t,e),e);import{r as V,c as E,o as p,d as z,a as I,b as Z,e as Q,f as he,g as b,h as m,i as L,j as ne,n as N,T as W,w as S,k as j,v as X,l as Y,u as _,m as M,t as O,p as Fe,q as Le,F,s as K,x as A,y as Se,z as Ne,A as ze,B as _e,C as Ce,D as de,I as qe,E as He,K as Ve,G as je,H as We,J as Xe,L as Ye,N as re,M as Je,O as Ge,P as Ue}from"./vendor-DlsSvUR1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const Ke={name:"App"},ge=(s,t)=>{const e=s.__vccOpts||s;for(const[n,i]of t)e[n]=i;return e};function Ze(s,t,e,n,i,o){const r=V("router-view");return p(),E(r)}const Qe=ge(Ke,[["render",Ze]]);let ye=1e3;function fe(){const s=ye;return ye++,s}const et={name:"Scrollbar"},ve=z({...et,props:{thumbColor:{type:String,default:"rgba(147, 147, 153, 0.45)"},thumbSize:{type:Number,default:8},maxHeight:{type:String},maxWidth:{type:String}},setup(s,{expose:t}){const e=s,n=I(),i=I(),o=I(),r=I(),c=Z({x:{width:"",height:"",left:"",bottom:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor},y:{width:"",height:"",top:"",right:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor}}),a=I(!1);function h(){const x=n.value.parentElement;x.style.overflow="hidden"}function v(){c.y.right=c.y.top="0px",c.y.width=e.thumbSize+"px",c.x.bottom=c.x.left="0px",c.x.height=e.thumbSize+"px",c.x.borderRadius=c.y.borderRadius=`${e.thumbSize/2}px`}function d(){const x=i.value;if(x){let k=x.clientHeight/x.scrollHeight*100;k>=100&&(k=0),c.y.height=k+"%",c.y.transform=`translate3d(0, ${x.scrollTop/x.scrollHeight*x.clientHeight}px, 0)`;let B=x.clientWidth/x.scrollWidth*100;B>=100&&(B=0),c.x.width=B+"%",c.x.transform=`translate3d(${x.scrollLeft/x.scrollWidth*x.clientWidth}px, 0, 0)`}}let u=!1,f=!1,l=0;function g(x){const k=o.value,B=r.value,J=x.target;k.contains(J)&&(u=!0,f=!1,l=x.clientX-k.getBoundingClientRect().left),B.contains(J)&&(u=!0,f=!0,l=x.clientY-B.getBoundingClientRect().top)}function $(x){if(!u)return;const k=i.value;if(f){const B=k.getBoundingClientRect().top,J=k.clientHeight;let ae=x.clientY-B;k.scrollTop=(ae-l)/J*k.scrollHeight}else{const B=k.getBoundingClientRect().left,J=k.clientWidth;let ae=x.clientX-B;k.scrollLeft=(ae-l)/J*k.scrollWidth}}function R(x){u=!1,n.value.contains(x.target)||(a.value=!1)}function C(){a.value=!0,d()}function y(){u||(a.value=!1)}let te;const U=I();return Q(function(){h(),v(),document.addEventListener("mousedown",g),document.addEventListener("mousemove",$),document.addEventListener("mouseup",R),te=new ResizeObserver(function(){d()}),U.value&&te.observe(U.value)}),he(function(){document.removeEventListener("mousedown",g),document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",R),te.disconnect()}),t({updateThumbStyle:d}),(x,k)=>(p(),b("div",{class:"the-scrollbar",ref_key:"el",ref:n,onMouseenter:k[1]||(k[1]=B=>C()),onMouseleave:k[2]||(k[2]=B=>y())},[m("div",{ref_key:"wrap",ref:i,class:"the-scrollbar-wrap",style:N({"max-height":s.maxHeight,"max-width":s.maxWidth}),onScroll:k[0]||(k[0]=B=>d())},[m("div",{ref_key:"view",ref:U},[ne(x.$slots,"default")],512)],36),L(W,{name:"fade"},{default:S(()=>[j(m("div",{class:"the-scrollbar-thumb",ref_key:"thumbY",ref:r,title:"滚动条-摁住拖拽Y轴",style:N(c.y)},null,4),[[X,a.value]])]),_:1}),L(W,{name:"fade"},{default:S(()=>[j(m("div",{class:"the-scrollbar-thumb",ref_key:"thumbX",ref:o,title:"滚动条-摁住拖拽X轴",style:N(c.x)},null,4),[[X,a.value]])]),_:1})],544))}}),tt={class:"base-dialog-title f-between f-vertical"},nt={key:0,class:"base-dialog-text"},ot={class:"base-dialog-body"},st={key:0,class:"base-dialog-footer"},it={name:"base-dialog"},at=z({...it,props:{title:{type:String,default:"提示"},show:{type:Boolean,default:!1},width:{type:String,default:"50%"},closeByMask:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1}},emits:["close","update:show","afterLeave","afterEnd"],setup(s,{emit:t}){const e=s,n=t,i=fe(),o=I(),r=I(),c=I(),a=I(!1);Y(()=>e.show,function(l){l?setTimeout(()=>{a.value=!0},0):a.value=!1},{immediate:!0});function h(l){if(!e.show||a.value||o.value.contains(l.target))return;const{clientWidth:g,clientHeight:$}=o.value,R=g/2,C=$/2,y=l.clientY-C,U=`${(l.clientX-R)/g*100}vw`,x=`${y/$*100}vh`;v(U,x)}function v(l,g){const $=c.value;$&&($.style.setProperty("--content-x",l),$.style.setProperty("--content-y",g))}function d(l){(l&&l.target===o.value&&e.closeByMask||l&&l.target===r.value)&&(n("update:show",!1),n("close"))}function u(){a.value&&v("0","0"),n("afterLeave")}function f(){n("afterEnd")}return Q(function(){document.addEventListener("click",h)}),he(function(){document.removeEventListener("click",h)}),(l,g)=>(p(),b("section",null,[(p(),E(Fe,{to:"body",disabled:!e.appendToBody},[L(W,{name:"fade"},{default:S(()=>[j(m("div",{ref_key:"el",ref:o,class:"base-dialog fvc",style:N({zIndex:_(i)}),onClick:d},[L(W,{name:"dialog-move",onAfterLeave:u,onAfterEnter:f},{default:S(()=>[j(m("div",{ref_key:"contentBox",ref:c,class:"base-dialog-content flex",style:N({width:e.width})},[m("div",tt,[l.$slots.header?M("",!0):(p(),b("h2",nt,O(s.title),1)),ne(l.$slots,"header"),m("i",{class:"base-dialog-icon",ref_key:"closeBtn",ref:r,onClick:d},null,512)]),m("div",ot,[L(_(ve),{maxHeight:"76vh"},{default:S(()=>[ne(l.$slots,"default")]),_:3})]),l.$slots.footer?(p(),b("div",st,[ne(l.$slots,"footer")])):M("",!0)],4),[[X,a.value]])]),_:3})],4),[[X,e.show]])]),_:3})],8,["disabled"]))]))}}),rt="modulepreload",lt=function(s,t){return new URL(s,t).href},be={},T=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),c=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));i=Promise.all(e.map(a=>{if(a=lt(a,n),a in be)return;be[a]=!0;const h=a.endsWith(".css"),v=h?'[rel="stylesheet"]':"";if(!!n)for(let f=o.length-1;f>=0;f--){const l=o[f];if(l.href===a&&(!h||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${v}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":rt,h||(u.as="script",u.crossOrigin=""),u.href=a,c&&u.setAttribute("nonce",c),document.head.appendChild(u),h)return new Promise((f,l)=>{u.addEventListener("load",f),u.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>t()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})};function ct(s){return Object.prototype.toString.call(s).match(/\[object (\S*)\]/)[1].toLocaleLowerCase()}function Te(s,t){return ct(s)===t}function H(s,t){for(const e in t)if(Object.prototype.hasOwnProperty.call(s,e)){const n=t[e],i=s[e];Te(i,"object")?H(i,n):s[e]=n}}function Ie(s,t,e){if(s=s.replace(/(^\s*)|(\s*$)/g,""),!s){e&&e("复制的内容不能为空！");return}const n="the-clipboard";let i=document.getElementById(n);i||(i=document.createElement("textarea"),i.id=n,i.readOnly=!0,i.style.cssText="font-size: 15px; position: fixed; top: -1000%; left: -1000%;",document.body.appendChild(i)),i.value=s,i.select(),i.setSelectionRange(0,i.value.length),document.execCommand("copy")?t&&t():e&&e("复制失败")}function qn(s,t,e){let n=s.toString().trim();if(n.length===0)return"";const i="";return n=n.replace(/[^0-9]+/ig,""),i+n}function Re(s,t={}){let e=t;if(Te(s,"string"))try{e=JSON.parse(s)}catch(n){console.warn("JSON格式化对象错误 >>",n)}return e}function ut(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)}function dt(s){const e=`; ${document.cookie}`.split(`; ${s}=`);return e.length===2?e.pop().split(";").shift():""}function ft(s,t,e){let n=`${s}=${t}; path=/`;e&&(e.expires&&(n+=`; expires=${e.expires.toUTCString()}`),e.domain&&(n+=`; domain=${e.domain}`)),document.cookie=n}function pt(s,t){const e="expires=Thu, 01 Jan 1970 00:00:00 GMT";document.cookie=`${s}=; path=/; ${e}`}const le="ModuleUser";function xe(){return{id:"",name:"",type:"",token:"",avatar:"",account:"",password:""}}const mt=3,ht=24*60*60*1e3;class gt{constructor(){P(this,"info",Z(xe()));this.init()}init(){const t=dt(le);if(t){const e=Re(t);H(this.info,e)}}update(t){H(this.info,t),ft(le,JSON.stringify(this.info),{expires:new Date(Date.now()+mt*ht)})}reset(){H(this.info,xe()),pt(le)}}const vt=""+new URL("../image/logo-CPmPqqKk.png",import.meta.url).href,$e="ModuleLayout";class _t{constructor(){P(this,"addRouters",[]);P(this,"completeRouters",[]);P(this,"info",Z({showTagList:!0,showSidebar:!0,showSidebarLogo:!0,tagList:[],layoutMode:"",keyword:""}));const t=sessionStorage.getItem($e);try{t&&H(this.info,JSON.parse(t))}catch(e){console.log("ModuleLayout init fail >>",e)}Y(this.info,()=>{sessionStorage.setItem($e,JSON.stringify(this.info))})}}const ce="ModuleGoods";function we(){return{id:0,name:"",price:0,specs:{size:"xs",width:"",height:""}}}class yt{constructor(){P(this,"info",Z(we()));const t=sessionStorage.getItem(ce);if(t){const e=Re(t);H(this.info,e)}}update(t){H(this.info,t),sessionStorage.setItem(ce,JSON.stringify(this.info))}reset(){H(this.info,we()),sessionStorage.removeItem(ce)}}class bt{constructor(){P(this,"projectInfo",{title:"Vue Typescript Admin",name:"XXX后台管理平台",logo:vt,link:"https://github.com/Travis-hjs/vue-admin",email:"1141752341@qq.com"});P(this,"layout",new _t);P(this,"user",new gt);P(this,"_goods");console.log("%c ModuleStore init","color: #409EFF")}get goods(){return this._goods||(this._goods=new yt),this._goods}}const w=new bt,xt={key:0,class:"separator"},$t={key:1,href:"javascript:void(0)"},wt={name:"BreadCrumb"},kt=z({...wt,setup(s){const t=Le(),e=I([]);function n(){const i=t.matched.filter(o=>o.meta&&o.meta.title).map(o=>({path:o.path,meta:{...o.meta}}));e.value=i}return Y(()=>t.path,function(){t.path.startsWith("/redirect/")||n()}),n(),(i,o)=>{const r=V("router-link");return p(),E(Ne,{name:"breadcrumb",tag:"div",class:"layout-breadcrumb f-vertical"},{default:S(()=>[(p(!0),b(F,null,K(e.value,(c,a)=>(p(),b("span",{class:A(["layout-breadcrumb-item",{last:a===e.value.length-1}]),key:c.path},[a>0?(p(),b("i",xt,"/")):M("",!0),a===e.value.length-1?(p(),b("a",$t,O(c.meta.title),1)):(p(),E(r,{key:2,to:c.path},{default:S(()=>[Se(O(c.meta.title),1)]),_:2},1032,["to"]))],2))),128))]),_:1})}}});function Et(s={}){const t=document,e=`__${Math.random().toString(36).slice(2,7)}`,n={box:`msg-box${e}`,hide:`hide${e}`,text:`msg-text${e}`,icon:`msg-icon${e}`},i=t.createElement("style");i.textContent=`
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
  `.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),t.head.appendChild(i);const o=[];function r(h){let v=10;for(let d=0;d<o.length;d++){const u=o[d];if(h&&h===u)break;v+=u.clientHeight+20}return v}function c(h){for(let v=0;v<o.length;v++)if(o[v]===h){o.splice(v,1);break}h.classList.add(n.hide),o.forEach(function(v){v.style.top=`${r(v)}px`})}function a(h,v="info",d){const u=t.createElement("div");u.className=`${n.box} ${v}`,u.style.top=`${r()}px`,u.style.zIndex=Oe.message,u.innerHTML=`
    <span class="${n.icon}"></span>
    <span class="${n.text}">${h}</span>
    `,o.push(u),t.body.appendChild(u);function f(){u.removeEventListener("animationend",f),setTimeout(c,d||s.duration||3e3,u)}u.addEventListener("animationend",f);function l(){getComputedStyle(u).opacity==="0"&&(u.removeEventListener("transitionend",l),u.remove())}u.addEventListener("transitionend",l)}return{show:a,info(h){a(h,"info")},success(h){a(h,"success")},warning(h){a(h,"warning")},error(h){a(h,"error")}}}function Lt(){const s=document,t=`__${Math.random().toString(36).slice(2,7)}`,e={mask:`dialog-mask${t}`,popup:`dialog-popup${t}`,title:`dialog-title${t}`,content:`dialog-content${t}`,footer:`dialog-footer${t}`,confirm:`confirm${t}`,fade:`fade${t}`,show:`show${t}`,hide:`hide${t}`},n=`
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
  `,i=s.createElement("style");i.textContent=n.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),s.head.appendChild(i);const o={x:"0vw",y:"0vh"};s.addEventListener("click",function(c){const{innerWidth:a,innerHeight:h}=window,v=a/2,d=h/2,u=c.clientY-d,f=c.clientX-v;o.x=`${f/a*100}vw`,o.y=`${u/h*100}vh`},!0);function r(c){const a=s.createElement("section");a.className=e.mask,a.style.zIndex=Oe.dialog,a.style.setProperty("--x",o.x),a.style.setProperty("--y",o.y),o.x="0vw",o.y="0vh";const h=c.cancelText?`<button class="the-btn">${c.cancelText}</button>`:"";a.innerHTML=`
    <div class="${e.popup}">
      <h2 class="${e.title}">${typeof c.title=="string"?c.title:"提示"}</h2>
      <div class="${e.content}">${c.content}</div>
      <div class="${e.footer}">
        ${h}
        <button class="${e.confirm} the-btn blue">${c.confirmText||"确认"}</button>
      </div>
    </div>
    `,s.body.appendChild(a),a.addEventListener("transitionend",function(d){d.target===a&&a.classList.contains(e.hide)&&a.remove()});function v(){a.classList.add(e.hide)}c.cancelText&&(a.querySelector(`.${e.footer} button`).onclick=function(){v(),c.cancel&&c.cancel()}),a.querySelector(`.${e.confirm}`).onclick=function(){v(),c.confirm&&c.confirm()}}return{show:r}}const Oe={get message(){return(fe()+20).toString()},get dialog(){return(fe()+10).toString()}},pe=Et({duration:3600}),St=Lt(),Hn=St.show;function se(){const s=Le(),t=ze();function e(o){return JSON.stringify(o||{})}function n(o){return o.path===s.path&&e(o.query)===e(s.query)&&e(o.params)===e(s.params)}function i(o){if(n(o))return!0;if(o.children&&o.children.length)for(let r=0;r<o.children.length;r++){const c=o.children[r];if(i(c))return!0}return!1}return{route:s,router:t,isActive:n,hasActive:i}}let ke=0;function Ct(){return ke++,`menu-${ke}`}function Tt(s=300){const t=`${s}ms height`;function e(a){a.style.transition=t,a.style.height="0px"}function n(a){a.scrollHeight!==0?a.style.height=`${a.scrollHeight}px`:a.style.height="",a.style.overflow="hidden"}function i(a){a.style.transition=a.style.height=""}function o(a){a.style.display="block",a.style.height=`${a.scrollHeight}px`,a.style.overflow="hidden"}function r(a){a.scrollHeight!==0&&(a.style.transition=t,a.style.height="0px")}function c(a){a.style.transition=a.style.height=""}return{onBeforeEnter:e,onEnter:n,onAfterEnter:i,onBeforeLeave:o,onLeave:r,onAfterLeave:c}}const It={class:"the-layout-tag-box"},Rt={class:"the-layout-tags"},Ot=["onClick"],Bt=["onClick"],At={name:"TagList"},Mt=z({...At,setup(s){const t=w.layout.info,{route:e,router:n,isActive:i}=se();function o(d){if(i(t.tagList[d])){const u=d>0?d-1:d+1,f=t.tagList[u];n.push({path:f.path,query:f.query,params:f.params})}t.tagList.splice(d,1)}Y(()=>e.path,function(){t.tagList.some(u=>i(u))||t.tagList.push({name:e.name,path:e.path,query:e.query,params:e.params,meta:e.meta})},{immediate:!0});const r=Z({show:!1,left:""}),c={list:[{label:"关闭其他",id:1,click(){r.show=!1;const d=c.current;i(d)?t.tagList=[d]:n.push(d.path).then(()=>{t.tagList=[d]})},show:()=>t.tagList.length>1},{label:"在新标签打开",id:2,click(){r.show=!1;const d=location.href.split("#");window.open(`${d[0]}#${c.current.path}`,"_blank")}},{label:"复制当前信息",id:3,click(){r.show=!1;const d=c.current;Ie(JSON.stringify(d,null,4),()=>pe.success("复制成功！"))}}],current:void 0},a=I();function h(d,u){r.show=!0,c.current=u,Ce(()=>{let f=d.x;const l=parseFloat(getComputedStyle(a.value).width),g=document.body.clientWidth-l;f>g&&(f=g),r.left=`${f}px`})}function v(d){const u=d.target;r.show&&!a.value.contains(u)&&(r.show=!1)}return Q(function(){document.addEventListener("click",v)}),he(function(){document.removeEventListener("click",v)}),(d,u)=>{const f=V("router-link");return p(),b(F,null,[m("div",It,[L(_(ve),null,{default:S(()=>[m("div",Rt,[(p(!0),b(F,null,K(_(t).tagList,(l,g)=>(p(),E(f,{class:A(["the-layout-tag",{"is-active":_(i)(l)}]),key:l.path+g,to:{path:l.path,query:l.query,params:l.params},onContextmenu:_e($=>h($,l),["prevent"])},{default:S(()=>[m("span",null,O(l.meta.title),1),m("i",{class:"close",onClick:_e($=>o(g),["prevent","stop"])},"-",8,Ot)]),_:2},1032,["class","to","onContextmenu"]))),128))])]),_:1})]),j(m("div",{ref_key:"tagMenuRef",ref:a,class:"the-layout-tag-menu",style:N({left:r.left})},[(p(!0),b(F,null,K(c.list,l=>j((p(),b("div",{key:l.id,class:"the-layout-tag-menu-item",onClick:g=>l.click()},O(l.label),9,Bt)),[[X,l.show?l.show():!0]])),128))],4),[[X,r.show]])],64)}}}),Pt={name:"Icon"},q=z({...Pt,props:{name:{type:String,default:void 0},color:{type:String,default:void 0},size:{type:[String,Number],default:16},spin:{type:Boolean,default:!1}},setup(s){const t=s,e=de(()=>{const o=t.size;return{fontSize:typeof o=="number"?`${o}px`:o,color:t.color}}),n=I();async function i(){const o=n.value;if(!o)return;await Ce();const r=t.name;if(!r)return;const c=qe.renderSVG(r,{});if(c)o.textContent="",o.append(c);else{const a=document.createElement("span");a.className="iconify",a.dataset.icon=r,o.textContent="",o.append(a)}}return Y(()=>t.name,i,{flush:"post"}),Q(i),(o,r)=>(p(),b("span",{ref_key:"elRef",ref:n,class:A(["the-icon",o.$attrs.class]),style:N(e.value)},null,6))}}),Dt={class:"the-layout-header"},Ft={class:"the-layout-navbar flex"},Nt={class:"user-info-box f-vertical"},zt=["src"],qt={class:"the-tag green mr-[10px]"},Ht=m("span",null,"退出登录",-1),Vt={name:"HeaderBar"},jt=z({...Vt,setup(s){const t=w.layout.info,e=w.user.info,{router:n}=se();function i(){t.showSidebar=!t.showSidebar}const o="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif";function r(){w.user.reset(),n.push("/login").then(()=>{t.tagList=[],Pn()})}return(c,a)=>(p(),b("div",Dt,[m("div",Ft,[m("div",{class:A(["fvc hamburger",{"hamburger-actived":_(t).showSidebar}]),onClick:a[0]||(a[0]=h=>i())},[L(_(q),{name:"tdesign:menu-fold",size:"24px",color:"#555"})],2),L(kt,{class:"f1"}),m("div",Nt,[m("img",{class:"avatar",src:_(e).avatar||o},null,8,zt),m("span",qt,O(_(e).name||_(e).account||"用户未设置昵称"),1),m("button",{class:"logout f-vertical",onClick:a[1]||(a[1]=h=>r())},[L(_(q),{name:"tdesign:logout",class:"mr-[4px]"}),Ht])])]),_(t).showTagList?(p(),E(Mt,{key:0})):M("",!0)]))}}),Wt={class:"f1"},Xt=m("i",{class:"the-layout-menu-arrow"},null,-1),Yt=["href"],Jt={class:"f1"},Gt={class:"f1"},Ut=["href"],Kt=z({__name:"MenuItem",props:{menu:{type:Object,required:!0},level:{type:Number,default:0}},setup(s){const t=s,{onBeforeEnter:e,onEnter:n,onAfterEnter:i,onBeforeLeave:o,onLeave:r,onAfterLeave:c}=Tt(),{isActive:a,hasActive:h}=se(),v=de(function(){const g=a(t.menu);return{"the-layout-menu-title":!0,"is-current":h(t.menu)&&!g,"is-open":t.menu.isOpen,"is-active":g}}),d=de(function(){return{"the-layout-menu-list":!0,"is-open":t.menu.isOpen}});function u(g){return{"the-layout-menu-link":!0,"is-active":a(g)}}function f(g){return!!(g.children&&g.children.length>0)}function l(){const g=t.menu;g.isOpen=!g.isOpen}return(g,$)=>{const R=V("router-link"),C=V("MenuItem",!0);return p(),b("section",{class:"the-layout-menu",style:N({"--level":t.level})},[f(t.menu)?(p(),b("div",{key:0,class:A(v.value),onClick:$[0]||($[0]=y=>l())},[t.menu.icon?(p(),E(_(q),{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):M("",!0),m("span",Wt,O(t.menu.title),1),Xt],2)):(p(),b(F,{key:1},[t.menu.link?(p(),b("a",{key:0,href:t.menu.link,class:A(v.value),target:"_blank"},[t.menu.icon?(p(),E(_(q),{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):M("",!0),m("span",Jt,O(t.menu.title),1)],10,Yt)):(p(),E(R,{key:1,to:t.menu.path,class:A(v.value)},{default:S(()=>[t.menu.icon?(p(),E(_(q),{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):M("",!0),m("span",Gt,O(t.menu.title),1)]),_:1},8,["to","class"]))],64)),f(t.menu)?(p(),E(W,{key:2,onBeforeEnter:_(e),onEnter:_(n),onAfterEnter:_(i),onBeforeLeave:_(o),onLeave:_(r),onAfterLeave:_(c)},{default:S(()=>[j(m("div",{class:A(d.value)},[(p(!0),b(F,null,K(t.menu.children,y=>(p(),b(F,{key:y.menuId},[f(y)?(p(),E(C,{key:0,menu:y,level:t.level+1},null,8,["menu","level"])):(p(),b(F,{key:1},[y.link?(p(),b("a",{key:0,href:y.link,class:A(u(y)),target:"_blank"},[y.icon?(p(),E(_(q),{key:0,name:y.icon,class:"menu-icon"},null,8,["name"])):M("",!0),m("span",null,O(y.title),1)],10,Ut)):(p(),E(R,{key:1,to:y.path,class:A(u(y))},{default:S(()=>[y.icon?(p(),E(_(q),{key:0,name:y.icon,class:"menu-icon"},null,8,["name"])):M("",!0),m("span",null,O(y.title),1)]),_:2},1032,["to","class"]))],64))],64))),128))],2),[[X,t.menu.isOpen]])]),_:1},8,["onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])):M("",!0)],4)}}}),Zt={name:"Empty",props:{text:{type:String,default:"暂无数据"},size:{type:Number}}},Qt="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20width='64'%20height='41'%20viewBox='0%200%2064%2041'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(0%201)'%20fill='none'%20fill-rule='evenodd'%3e%3cellipse%20fill='%23f5f5f5'%20cx='32'%20cy='33'%20rx='32'%20ry='7'%3e%3c/ellipse%3e%3cg%20fill-rule='nonzero'%20stroke='%23d9d9d9'%3e%3cpath%20d='M55%2012.76L44.854%201.258C44.367.474%2043.656%200%2042.907%200H21.093c-.749%200-1.46.474-1.947%201.257L9%2012.761V22h46v-9.24z'%3e%3c/path%3e%3cpath%20d='M41.613%2015.931c0-1.605.994-2.93%202.227-2.931H55v18.137C55%2033.26%2053.68%2035%2052.05%2035h-40.1C10.32%2035%209%2033.259%209%2031.137V13h11.16c1.233%200%202.227%201.323%202.227%202.928v.022c0%201.605%201.005%202.901%202.237%202.901h14.752c1.232%200%202.237-1.308%202.237-2.913v-.007z'%20fill='%23fafafa'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",en={class:"empty"},tn={class:"text"};function nn(s,t,e,n,i,o){return p(),b("div",en,[m("img",{class:"icon",style:N({width:e.size?`${e.size}px`:void 0}),src:Qt,alt:""},null,4),m("span",tn,O(e.text),1)])}const on=ge(Zt,[["render",nn],["__scopeId","data-v-a5ec6d3f"]]),sn={name:"Menu"},an=z({...sn,props:{mergeOnlyOneChild:{type:Number,default:0}},setup(s){const t=s,e=w.layout.info;function n(u){const f=[];for(let l=0;l<u.length;l++){const g=u[l];if(g.meta&&g.meta.hidden)continue;const $={menuId:Ct(),path:g.path,isOpen:!1,title:g.meta.title,icon:g.meta.icon,link:g.meta.link};g.children&&g.children.length&&($.children=n(g.children)),f.push($)}return f}function i(u,f=1){const l=[],g=f<t.mergeOnlyOneChild,$=f+1;for(let R=0;R<u.length;R++){const C=u[R],y=C.children;y&&y.length>0?y.length===1?(l.push(y[0]),y[0].children&&y[0].children.length>0&&g&&(y[0].children=i(y[0].children,$))):(l.push(C),g&&(C.children=i(y,$))):l.push(C)}return l}function o(u){const f=e.keyword;return u.filter(l=>l.children&&(l.children=o(l.children),l.children.length>0)?(l.isOpen=!0,!0):!!l.title.includes(f))}let r=n(w.layout.completeRouters);t.mergeOnlyOneChild&&(r=i(r));const c=I(r),{route:a,isActive:h}=se();function v(u){const f=[];function l(g,$){for(let R=0;R<g.length;R++){const C=g[R];if(h(C))return f.push(...$),!0;if(C.children&&C.children.length&&l(C.children,[...$,C]))return!0}return!1}return l(u,[]),f}function d(){v(c.value).forEach(f=>{f.isOpen=!0})}return Y(()=>e.keyword,function(u){const f=JSON.parse(JSON.stringify(r));if(u){const l=o(f);c.value=l}else c.value=f,d()}),Y(()=>a.path,function(){d()},{immediate:!0}),(u,f)=>(p(),b(F,null,[(p(!0),b(F,null,K(c.value,(l,g)=>(p(),E(Kt,{menu:l,key:l.menuId,style:N(g?void 0:{"margin-top":"0"})},null,8,["menu","style"]))),128)),c.value.length?M("",!0):(p(),E(_(on),{key:0,style:{height:"140px"},text:"没有匹配到任何菜单"}))],64))}}),rn={class:"the-layout-sidebar"},ln={class:"the-layout-sidebar-content"},cn={key:0,class:"the-logo-box"},un=["src"],dn=["title"],fn={key:1,style:{height:"var(--page-padding)"}},pn={class:"the-layout-search-box"},mn={class:"f1"},hn={class:"the-layout-sidebar-content padding-full"},gn={name:"Sidebar"},vn=z({...gn,setup(s){const t=w.layout.info,e=w.projectInfo;function n(){t.keyword=""}return(i,o)=>{const r=V("router-link");return p(),b("div",rn,[m("section",ln,[L(W,{name:"fade",mode:"out-in"},{default:S(()=>[_(t).showSidebarLogo?(p(),b("div",cn,[L(r,{class:"the-logo-link f-vertical",to:"/"},{default:S(()=>[m("img",{class:"the-logo",src:_(e).logo},null,8,un),m("h1",{class:"the-logo-title ellipsis",title:_(e).title},O(_(e).title),9,dn)]),_:1})])):(p(),b("div",fn))]),_:1}),m("div",pn,[j(m("input",{"onUpdate:modelValue":o[0]||(o[0]=c=>_(t).keyword=c),type:"text",placeholder:"请输入关键字检索菜单"},null,512),[[He,_(t).keyword]]),_(t).keyword?(p(),E(_(q),{key:0,class:"the-layout-search-icon",name:"tdesign:close-circle",onClick:o[1]||(o[1]=c=>n())})):(p(),E(_(q),{key:1,class:"the-layout-search-icon",name:"tdesign:search"}))])]),m("section",mn,[L(_(ve),null,{default:S(()=>[m("div",hn,[L(an,{mergeOnlyOneChild:1})])]),_:1})])])}}}),_n={name:"Layout"},Ee=z({..._n,setup(s){const t=w.layout.info;function e(h){let v=[];for(let d=0;d<h.length;d++){const u=h[d],f=u.children;f&&f.length>0&&(v=v.concat(e(f))),u.meta.keepAlive&&u.name&&v.push(u.name)}return v.filter(d=>d)}const n=e(w.layout.completeRouters),i=I(),o=I(!1);let r;function c(){r.scrollTo({top:0,left:0,behavior:"smooth"})}function a(){o.value=r.scrollTop>document.documentElement.clientHeight}return Q(function(){r=i.value,r.addEventListener("scroll",a),a()}),(h,v)=>{const d=V("router-view");return p(),b("div",{class:A(["the-layout",_(t).layoutMode,{"has-tag-list":_(t).showTagList},{"collapsed-sidebar":!_(t).showSidebar}])},[L(jt),L(vn),m("div",{class:"the-layout-content",ref_key:"contentBox",ref:i},[L(d,{class:"the-layout-page"},{default:S(({Component:u,route:f})=>[L(W,{name:"page-y",mode:"out-in"},{default:S(()=>[(p(),E(Ve,{include:_(n)},[(p(),E(je(u),{key:f.fullPath}))],1032,["include"]))]),_:2},1024)]),_:1})],512),m("button",{class:A(["the-layout-to-top",{hidden:!o.value}]),title:"返回顶部",onClick:v[0]||(v[0]=u=>c())},null,2)],2)}}}),yn={name:"page-404",data(){return{project:w.projectInfo}}},ie=s=>(Xe("data-v-9091b7be"),s=s(),Ye(),s),bn={class:"page-404 fvc"},xn=We('<div class="from-top-box f-vertical" data-v-9091b7be><div class="mr-[30px]" data-v-9091b7be><div class="point-icon mb-[50px]" data-v-9091b7be></div><div class="point-icon" data-v-9091b7be></div></div><div class="radius-icon" data-v-9091b7be></div><div class="code-value" data-v-9091b7be>404</div></div>',1),$n={class:"from-right-box mb-[40px]"},wn=ie(()=>m("p",{class:"text"},"你访问的页面不存在，请确认页面路径是否正确。",-1)),kn=ie(()=>m("p",{class:"text"},"我们只收集某些错误信息，然后需要你重新点击返回首页或返回上一页。",-1)),En={class:"pt-[40px]"},Ln={class:"from-bottom-box flex"},Sn=ie(()=>m("img",{class:"qrcode-box",src:"https://travis-hjs.github.io/images/reward-code.jpg",alt:"谢谢打赏！"},null,-1)),Cn={class:"pt-[20px]"},Tn=ie(()=>m("p",{class:"desc"},"如需技术支持，请扫码联系作者。",-1)),In={class:"desc"},Rn={class:"desc"};function On(s,t,e,n,i,o){const r=V("router-link");return p(),b("div",bn,[m("section",null,[xn,m("div",$n,[wn,kn,m("div",En,[L(r,{class:"go-back fvc",to:"/"},{default:S(()=>[Se("返回首页")]),_:1})])]),m("div",Ln,[Sn,m("div",Cn,[Tn,m("p",In,"邮箱地址："+O(i.project.email),1),m("p",Rn,"项目地址："+O(i.project.link),1)])])])])}const oe=ge(yn,[["render",On],["__scopeId","data-v-9091b7be"]]),Bn=[{path:"/",name:"index",redirect:"/home",component:Ee,meta:{title:"首页",icon:"tdesign:home"},children:[{path:"/home",meta:{title:"首页展示",icon:"tdesign:app"},component:()=>T(()=>import("./home-BXKuDYUz.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)},{path:"/nested",name:"nested",redirect:"/nested/menu-1",meta:{title:"多级菜单嵌套",icon:"tdesign:tree-square-dot"},component:()=>T(()=>import("./nested-CAGLXTza.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/menu-1",name:"nested/menu-1",meta:{title:"el-plus 表格"},component:()=>T(()=>import("./menu-1-BD_qyMV_.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/nested/menu-2",name:"nested/menu-2",meta:{title:"el-plus 表单验证"},component:()=>T(()=>import("./menu-2-5HHjKaEE.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)},{path:"/nested/three-level",name:"nested/three-level",meta:{title:"三级菜单"},redirect:"/nested/three-level/menu-1",component:()=>T(()=>import("./nested-CAGLXTza.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/three-level/menu-1",name:"/nested/three-level/menu-1",meta:{title:"菜单 3-1"},component:()=>T(()=>import("./menu-1-BD_qyMV_.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/nested/three-level/menu-2",name:"/nested/three-level/menu-2",meta:{title:"菜单 3-2"},component:()=>T(()=>import("./menu-2-5HHjKaEE.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)}]},{path:"/nested/four-level",name:"nested/four-level",meta:{title:"三级菜单-2"},redirect:"/nested/four-level/menu-1",component:()=>T(()=>import("./nested-CAGLXTza.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/four-level/menu-1",name:"/nested/four-level/menu-1",meta:{title:"菜单 3-2-1"},component:()=>T(()=>import("./menu-1-BD_qyMV_.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)}]},{path:"/nested/menu-3",name:"nested/menu-3",meta:{title:"菜单 2-3"},component:()=>T(()=>import("./menu-3-DDSjRtE5.js"),__vite__mapDeps([12,1,2,13]),import.meta.url)}]},{path:"/link-baidu",name:"link-baidu",component:oe,meta:{title:"百度一下",icon:"tdesign:data-search-filled",link:"https://www.baidu.com"}},{path:"/menu-4",name:"menu-4",meta:{title:"换行菜单标题换行菜单标题",icon:"tdesign:component-layout"},component:()=>T(()=>import("./menu-4-BZzpvtWp.js"),__vite__mapDeps([14,1,2,15]),import.meta.url)}]},{path:"/example",name:"example",component:Ee,meta:{title:"示例页栏目",icon:"tdesign:tree-list"},redirect:"/example/request",children:[{path:"/example/request",name:"example-request",meta:{title:"http-请求示例",keepAlive:!0},component:()=>T(()=>import("./request-Ce3MsyoC.js"),__vite__mapDeps([16,1,2,17,18]),import.meta.url)},{path:"/example/components",name:"example-components",meta:{title:"自定义组件"},component:()=>T(()=>import("./the-components-DQT-G3GR.js"),__vite__mapDeps([19,1,2,17,20]),import.meta.url)},{path:"/example/tsx",name:"example-tsx",meta:{title:"tsx-示例"},component:()=>T(()=>import("./example-Manrn9pk.js"),__vite__mapDeps([21,1,2,22]),import.meta.url)},{path:"/example/no-found",name:"no-found",meta:{title:"404 页面",link:`${location.origin+location.pathname}#/is-error-path`},component:oe}]},{path:"/"+w.projectInfo.link,name:"GitHub-Travis",component:oe,meta:{title:"项目地址",icon:"tdesign:logo-github-filled",link:w.projectInfo.link,auth:[0]}}],G={path:"/",query:{}},me="redirect404";let D;function Be(s){const t=[],e=w.user.info.type;for(let n=0;n<s.length;n++){const i=s[n],o=i.meta?i.meta.auth:void 0;(!o||o&&o.includes(e))&&(i.children&&i.children.length>0&&(i.children=Be(i.children)),t.push(i))}return t}async function An(){return Be(Bn)}function Mn(s,t){D=s,D.beforeEach(async function(e,n,i){if(re.start(),w.user.info.token)if(w.layout.addRouters.length>0)i();else{w.layout.addRouters=await An();for(let o=0;o<w.layout.addRouters.length;o++){const r=w.layout.addRouters[o];D.addRoute(r)}D.hasRoute(me)||D.addRoute({...t[1],path:"/:catchAll(.*)",name:me}),w.layout.completeRouters=t.concat(w.layout.addRouters),i({...e,replace:!0})}else e.path==="/login"?i():(G.path=e.path,G.query=e.query,i({path:"/login"}),re.done())}),D.afterEach(e=>{re.done(),e.meta&&e.meta.title&&(document.title=e.meta.title)})}function Vn(){D.replace({path:G.path,query:G.query})}function Pn(){const s=w.layout.addRouters;for(let t=s.length-1;t>-1;t--){const e=s[t];e.name&&D.hasRoute(e.name)&&D.removeRoute(e.name)}G.path="/",G.query={},D.removeRoute(me),w.layout.addRouters=w.layout.completeRouters=[]}const Ae=[{path:"/login",name:"login",component:()=>T(()=>import("./login-C3En-Hgj.js"),__vite__mapDeps([23,1,2,17,3,4,24]),import.meta.url),meta:{hidden:!0,title:"请登录"}},{path:"/404",name:"page-404",component:oe,meta:{hidden:!0,title:"不存在该页面"}},{path:"/401",name:"page-401",component:()=>T(()=>import("./page-401-D73KLJfI.js"),__vite__mapDeps([25,1,2,26]),import.meta.url),meta:{hidden:!0,title:"暂无权限访问"}}],Me=Je({history:Ge(),routes:Ae});Mn(Me,Ae);const Dn="1.1.5",ue=[];function Fn(s,t){let e;ue.length>1?e=ue.shift():(e=document.createElement("div"),e.className="ripple");const n=t.getBoundingClientRect(),i=t.getAttribute("color");let o=Math.max(n.width,n.height);o>200&&(o=200),e.style.height=e.style.width=o+"px",e.style.backgroundColor=i||"rgba(255, 255, 255, .45)",t.appendChild(e);const r=s.touches,c=r?r[0].clientY:s.clientY,a=r?r[0].clientX:s.clientX,h=c-n.top-e.offsetHeight/2,v=a-n.left-e.offsetWidth/2;e.style.top=h+"px",e.style.left=v+"px";function d(){e.removeEventListener("animationend",d),t.removeChild(e),ue.push(e)}e.addEventListener("animationend",d)}window.version=Dn;const ee=Ue(Qe);ee.directive("copy",{mounted(s,t){s.addEventListener("click",function(){Ie(t.value,()=>pe.success("复制成功"),e=>pe.success(e))})}});ee.directive("ripple",{mounted(s){const t=ut()?"touchstart":"mousedown";s.setAttribute("ripple",""),s.addEventListener(t,function(e){Fn(e,s)})}});ee.component("base-dialog",at);ee.use(Me);ee.mount("#app");export{ge as _,H as a,Hn as b,Ie as c,q as d,ve as e,ct as f,qn as i,Re as j,pe as m,Vn as o,w as s};
