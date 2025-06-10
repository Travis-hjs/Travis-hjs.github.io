function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./home-V0wFqNzT.js","./vendor-DMVYC7KV.js","../css/vendor-BUMXTAWU.css","./index.vue_vue_type_style_index_0_lang-BbEADiUR.js","../css/index-IkwLXdHV.css","../css/home-tXTSvP-d.css","./nested-D4c8LdM3.js","../css/nested-DBbt7j1J.css","./menu-1-X3xicvar.js","../css/menu-1-PIQFC6DV.css","./menu-2-CSTMWfGk.js","../css/menu-2-DwSbhe9C.css","./menu-3-_9fXxTuR.js","../css/menu-3-C1x6D_tQ.css","./menu-4-DkHpKtvv.js","../css/menu-4-B_QkhR3M.css","./request-BfjGdiRE.js","./common-BwtI489t.js","../css/request-BjYaB_Vm.css","./the-components-DvjQif1S.js","../css/the-components-BuIyYIOI.css","./example-DGzICbhX.js","../css/example-CJnj_JQw.css","./login-DywhHINm.js","../css/login-C2zo-VT6.css","./page-401-D1v6TZy7.js","../css/page-401-hNHv4Vr6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var Me=Object.defineProperty;var Pe=(o,t,e)=>t in o?Me(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var P=(o,t,e)=>(Pe(o,typeof t!="symbol"?t+"":t,e),e);import{r as V,c as E,o as p,d as q,a as O,b as Z,e as oe,f as he,g as b,h as m,i as L,j as te,n as z,T as W,w as S,k as j,v as X,l as J,u as v,m as A,t as R,p as De,q as Le,F as N,s as K,x as M,y as Se,z as Fe,A as Ne,B as ve,C as ze,D as de,I as qe,E as He,K as Ve,G as je,H as We,J as Xe,L as Ye,N as ae,M as Je,O as Ge,P as Ue}from"./vendor-DMVYC7KV.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const Ke={name:"App"},ge=(o,t)=>{const e=o.__vccOpts||o;for(const[n,s]of t)e[n]=s;return e};function Ze(o,t,e,n,s,i){const l=V("router-view");return p(),E(l)}const Qe=ge(Ke,[["render",Ze]]);let ye=1e3;function fe(){const o=ye;return ye++,o}const et={name:"Scrollbar"},_e=q({...et,props:{thumbColor:{type:String,default:"rgba(147, 147, 153, 0.45)"},thumbSize:{type:Number,default:8},maxHeight:{type:String},maxWidth:{type:String}},setup(o,{expose:t}){const e=o,n=O(),s=O(),i=O(),l=O(),u=Z({x:{width:"",height:"",left:"",bottom:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor},y:{width:"",height:"",top:"",right:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor}}),r=O(!1);function h(){const x=n.value.parentElement;x.style.overflow="hidden"}function _(){u.y.right=u.y.top="0px",u.y.width=e.thumbSize+"px",u.x.bottom=u.x.left="0px",u.x.height=e.thumbSize+"px",u.x.borderRadius=u.y.borderRadius=`${e.thumbSize/2}px`}function d(){const x=s.value;if(x){let w=x.clientHeight/x.scrollHeight*100;w>=100&&(w=0),u.y.height=w+"%",u.y.transform=`translate3d(0, ${x.scrollTop/x.scrollHeight*x.clientHeight}px, 0)`;let B=x.clientWidth/x.scrollWidth*100;B>=100&&(B=0),u.x.width=B+"%",u.x.transform=`translate3d(${x.scrollLeft/x.scrollWidth*x.clientWidth}px, 0, 0)`}}let c=!1,f=!1,a=0;function g(x){const w=i.value,B=l.value,Y=x.target;w.contains(Y)&&(c=!0,f=!1,a=x.clientX-w.getBoundingClientRect().left),B.contains(Y)&&(c=!0,f=!0,a=x.clientY-B.getBoundingClientRect().top)}function $(x){if(!c)return;const w=s.value;if(f){const B=w.getBoundingClientRect().top,Y=w.clientHeight;let re=x.clientY-B;w.scrollTop=(re-a)/Y*w.scrollHeight}else{const B=w.getBoundingClientRect().left,Y=w.clientWidth;let re=x.clientX-B;w.scrollLeft=(re-a)/Y*w.scrollWidth}}function I(x){c=!1,n.value.contains(x.target)||(r.value=!1)}function C(){r.value=!0,d()}function y(){c||(r.value=!1)}let ee;const U=O();return oe(function(){h(),_(),document.addEventListener("mousedown",g),document.addEventListener("mousemove",$),document.addEventListener("mouseup",I),ee=new ResizeObserver(function(){d()}),U.value&&ee.observe(U.value)}),he(function(){document.removeEventListener("mousedown",g),document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",I),ee.disconnect()}),t({updateThumbStyle:d}),(x,w)=>(p(),b("div",{class:"the-scrollbar",ref_key:"el",ref:n,onMouseenter:w[1]||(w[1]=B=>C()),onMouseleave:w[2]||(w[2]=B=>y())},[m("div",{ref_key:"wrap",ref:s,class:"the-scrollbar-wrap",style:z({"max-height":o.maxHeight,"max-width":o.maxWidth}),onScroll:w[0]||(w[0]=B=>d())},[m("div",{ref_key:"view",ref:U},[te(x.$slots,"default")],512)],36),L(W,{name:"fade"},{default:S(()=>[j(m("div",{class:"the-scrollbar-thumb",ref_key:"thumbY",ref:l,title:"滚动条-摁住拖拽Y轴",style:z(u.y)},null,4),[[X,r.value]])]),_:1}),L(W,{name:"fade"},{default:S(()=>[j(m("div",{class:"the-scrollbar-thumb",ref_key:"thumbX",ref:i,title:"滚动条-摁住拖拽X轴",style:z(u.x)},null,4),[[X,r.value]])]),_:1})],544))}}),tt={class:"base-dialog-title f-between f-vertical"},nt={key:0,class:"base-dialog-text"},ot={class:"base-dialog-body"},st={key:0,class:"base-dialog-footer"},it={name:"base-dialog"},rt=q({...it,props:{title:{type:String,default:"提示"},show:{type:Boolean,default:!1},width:{type:String,default:"50%"},closeByMask:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1}},emits:["close","update:show","afterLeave","afterEnd"],setup(o,{emit:t}){const e=o,n=t,s=fe(),i=O(),l=O(),u=O(),r=O(!1);J(()=>e.show,function(a){a?setTimeout(()=>{r.value=!0},0):r.value=!1},{immediate:!0});function h(a){if(!e.show||r.value||i.value.contains(a.target))return;const{clientWidth:g,clientHeight:$}=i.value,I=g/2,C=$/2,y=a.clientY-C,U=`${(a.clientX-I)/g*100}vw`,x=`${y/$*100}vh`;_(U,x)}function _(a,g){const $=u.value;$&&($.style.setProperty("--content-x",a),$.style.setProperty("--content-y",g))}function d(a){(a&&a.target===i.value&&e.closeByMask||a&&a.target===l.value)&&(n("update:show",!1),n("close"))}function c(){r.value&&_("0","0"),n("afterLeave")}function f(){n("afterEnd")}return oe(function(){document.addEventListener("click",h)}),he(function(){document.removeEventListener("click",h)}),(a,g)=>(p(),b("section",null,[(p(),E(De,{to:"body",disabled:!e.appendToBody},[L(W,{name:"fade"},{default:S(()=>[j(m("div",{ref_key:"el",ref:i,class:"base-dialog fvc",style:z({zIndex:v(s)}),onClick:d},[L(W,{name:"dialog-move",onAfterLeave:c,onAfterEnter:f},{default:S(()=>[j(m("div",{ref_key:"contentBox",ref:u,class:"base-dialog-content flex",style:z({width:e.width})},[m("div",tt,[a.$slots.header?A("",!0):(p(),b("h2",nt,R(o.title),1)),te(a.$slots,"header"),m("i",{class:"base-dialog-icon",ref_key:"closeBtn",ref:l,onClick:d},null,512)]),m("div",ot,[L(v(_e),{maxHeight:"76vh"},{default:S(()=>[te(a.$slots,"default")]),_:3})]),a.$slots.footer?(p(),b("div",st,[te(a.$slots,"footer")])):A("",!0)],4),[[X,r.value]])]),_:3})],4),[[X,e.show]])]),_:3})],8,["disabled"]))]))}}),at="modulepreload",lt=function(o,t){return new URL(o,t).href},be={},T=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const i=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=Promise.all(e.map(r=>{if(r=lt(r,n),r in be)return;be[r]=!0;const h=r.endsWith(".css"),_=h?'[rel="stylesheet"]':"";if(!!n)for(let f=i.length-1;f>=0;f--){const a=i[f];if(a.href===r&&(!h||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${_}`))return;const c=document.createElement("link");if(c.rel=h?"stylesheet":at,h||(c.as="script",c.crossOrigin=""),c.href=r,u&&c.setAttribute("nonce",u),document.head.appendChild(c),h)return new Promise((f,a)=>{c.addEventListener("load",f),c.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${r}`)))})}))}return s.then(()=>t()).catch(i=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i})};function ct(o){return Object.prototype.toString.call(o).match(/\[object (\S*)\]/)[1].toLocaleLowerCase()}function Ce(o,t){return ct(o)===t}function H(o,t){for(const e in t)if(Object.prototype.hasOwnProperty.call(o,e)){const n=t[e],s=o[e];Ce(s,"object")?H(s,n):o[e]=n}}function Te(o,t,e){if(o=o.replace(/(^\s*)|(\s*$)/g,""),!o){e&&e("复制的内容不能为空！");return}const n="the-clipboard";let s=document.getElementById(n);s||(s=document.createElement("textarea"),s.id=n,s.readOnly=!0,s.style.cssText="font-size: 15px; position: fixed; top: -1000%; left: -1000%;",document.body.appendChild(s)),s.value=o,s.select(),s.setSelectionRange(0,s.value.length),document.execCommand("copy")?t&&t():e&&e("复制失败")}function qn(o,t,e){let n=o.toString().trim();if(n.length===0)return"";const s="";return n=n.replace(/[^0-9]+/ig,""),s+n}function Ie(o,t={}){let e=t;if(Ce(o,"string"))try{e=JSON.parse(o)}catch(n){console.warn("JSON格式化对象错误 >>",n)}return e}function ut(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)}function dt(o){const e=`; ${document.cookie}`.split(`; ${o}=`);return e.length===2?e.pop().split(";").shift():""}function ft(o,t,e){let n=`${o}=${t}; path=/`;e&&(e.expires&&(n+=`; expires=${e.expires.toUTCString()}`),e.domain&&(n+=`; domain=${e.domain}`)),document.cookie=n}function pt(o,t){const e="expires=Thu, 01 Jan 1970 00:00:00 GMT";document.cookie=`${o}=; path=/; ${e}`}const le="ModuleUser";function xe(){return{id:"",name:"",type:"",token:"",avatar:"",account:"",password:""}}const mt=3,ht=24*60*60*1e3;class gt{constructor(){P(this,"info",Z(xe()));this.init()}init(){const t=dt(le);if(t){const e=Ie(t);H(this.info,e)}}update(t){H(this.info,t),ft(le,JSON.stringify(this.info),{expires:new Date(Date.now()+mt*ht)})}reset(){H(this.info,xe()),pt(le)}}const _t=""+new URL("../image/logo-CPmPqqKk.png",import.meta.url).href,$e="ModuleLayout";class vt{constructor(){P(this,"addRouters",[]);P(this,"completeRouters",[]);P(this,"info",Z({showTagList:!0,showSidebar:!0,showSidebarLogo:!0,tagList:[],layoutMode:"",keyword:""}));const t=sessionStorage.getItem($e);try{t&&H(this.info,JSON.parse(t))}catch(e){console.log("ModuleLayout init fail >>",e)}J(this.info,()=>{sessionStorage.setItem($e,JSON.stringify(this.info))})}}const ce="ModuleGoods";function ke(){return{id:0,name:"",price:0,specs:{size:"xs",width:"",height:""}}}class yt{constructor(){P(this,"info",Z(ke()));const t=sessionStorage.getItem(ce);if(t){const e=Ie(t);H(this.info,e)}}update(t){H(this.info,t),sessionStorage.setItem(ce,JSON.stringify(this.info))}reset(){H(this.info,ke()),sessionStorage.removeItem(ce)}}class bt{constructor(){P(this,"projectInfo",{title:"Vue Typescript Admin",name:"XXX后台管理平台",logo:_t,link:"https://github.com/Travis-hjs/vue-admin",email:"1141752341@qq.com"});P(this,"layout",new vt);P(this,"user",new gt);P(this,"_goods");console.log("%c ModuleStore init","color: #409EFF")}get goods(){return this._goods||(this._goods=new yt),this._goods}}const k=new bt,xt={key:0,class:"separator"},$t={key:1,href:"javascript:void(0)"},kt={name:"BreadCrumb"},wt=q({...kt,setup(o){const t=Le(),e=O([]);function n(){const s=t.matched.filter(i=>i.meta&&i.meta.title).map(i=>({path:i.path,meta:{...i.meta}}));e.value=s}return J(()=>t.path,function(){t.path.startsWith("/redirect/")||n()}),n(),(s,i)=>{const l=V("router-link");return p(),E(Fe,{name:"breadcrumb",tag:"div",class:"layout-breadcrumb f-vertical"},{default:S(()=>[(p(!0),b(N,null,K(e.value,(u,r)=>(p(),b("span",{class:M(["layout-breadcrumb-item",{last:r===e.value.length-1}]),key:u.path},[r>0?(p(),b("i",xt,"/")):A("",!0),r===e.value.length-1?(p(),b("a",$t,R(u.meta.title),1)):(p(),E(l,{key:2,to:u.path},{default:S(()=>[Se(R(u.meta.title),1)]),_:2},1032,["to"]))],2))),128))]),_:1})}}});function Et(o={}){const t=document,e=`__${Math.random().toString(36).slice(2,7)}`,n={box:`msg-box${e}`,hide:`hide${e}`,text:`msg-text${e}`,icon:`msg-icon${e}`},s=t.createElement("style");s.textContent=`
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
  `.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),t.head.appendChild(s);const i=[];function l(h){let _=10;for(let d=0;d<i.length;d++){const c=i[d];if(h&&h===c)break;_+=c.clientHeight+20}return _}function u(h){for(let _=0;_<i.length;_++)if(i[_]===h){i.splice(_,1);break}h.classList.add(n.hide),i.forEach(function(_){_.style.top=`${l(_)}px`})}function r(h,_="info",d){const c=t.createElement("div");c.className=`${n.box} ${_}`,c.style.top=`${l()}px`,c.style.zIndex=Oe.message,c.innerHTML=`
    <span class="${n.icon}"></span>
    <span class="${n.text}">${h}</span>
    `,i.push(c),t.body.appendChild(c);function f(){c.removeEventListener("animationend",f),setTimeout(u,d||o.duration||3e3,c)}c.addEventListener("animationend",f);function a(){getComputedStyle(c).opacity==="0"&&(c.removeEventListener("transitionend",a),c.remove())}c.addEventListener("transitionend",a)}return{show:r,info(h){r(h,"info")},success(h){r(h,"success")},warning(h){r(h,"warning")},error(h){r(h,"error")}}}function Lt(){const o=document,t=`__${Math.random().toString(36).slice(2,7)}`,e={mask:`dialog-mask${t}`,popup:`dialog-popup${t}`,title:`dialog-title${t}`,content:`dialog-content${t}`,footer:`dialog-footer${t}`,confirm:`confirm${t}`,fade:`fade${t}`,show:`show${t}`,hide:`hide${t}`},n=`
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
  `,s=o.createElement("style");s.textContent=n.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),o.head.appendChild(s);const i={x:"0vw",y:"0vh"};o.addEventListener("click",function(u){const{innerWidth:r,innerHeight:h}=window,_=r/2,d=h/2,c=u.clientY-d,f=u.clientX-_;i.x=`${f/r*100}vw`,i.y=`${c/h*100}vh`},!0);function l(u){const r=o.createElement("section");r.className=e.mask,r.style.zIndex=Oe.dialog,r.style.setProperty("--x",i.x),r.style.setProperty("--y",i.y),i.x="0vw",i.y="0vh";const h=u.cancelText?`<button class="the-btn">${u.cancelText}</button>`:"";r.innerHTML=`
    <div class="${e.popup}">
      <h2 class="${e.title}">${typeof u.title=="string"?u.title:"提示"}</h2>
      <div class="${e.content}">${u.content}</div>
      <div class="${e.footer}">
        ${h}
        <button class="${e.confirm} the-btn blue">${u.confirmText||"确认"}</button>
      </div>
    </div>
    `,o.body.appendChild(r),r.addEventListener("transitionend",function(d){d.target===r&&r.classList.contains(e.hide)&&r.remove()});function _(){r.classList.add(e.hide)}u.cancelText&&(r.querySelector(`.${e.footer} button`).onclick=function(){_(),u.cancel&&u.cancel()}),r.querySelector(`.${e.confirm}`).onclick=function(){_(),u.confirm&&u.confirm()}}return{show:l}}const Oe={get message(){return(fe()+20).toString()},get dialog(){return(fe()+10).toString()}},pe=Et({duration:3600}),St=Lt(),Hn=St.show;function se(){const o=Le(),t=Ne();function e(i){return JSON.stringify(i||{})}function n(i){return i.path===o.path&&e(i.query)===e(o.query)&&e(i.params)===e(o.params)}function s(i){if(n(i))return!0;if(i.children&&i.children.length)for(let l=0;l<i.children.length;l++){const u=i.children[l];if(s(u))return!0}return!1}return{route:o,router:t,isActive:n,hasActive:s}}let we=0;function Ct(){return we++,`menu-${we}`}function Tt(o=300){const t=`${o}ms height`;function e(r){r.style.transition=t,r.style.height="0px"}function n(r){r.scrollHeight!==0?r.style.height=`${r.scrollHeight}px`:r.style.height="",r.style.overflow="hidden"}function s(r){r.style.transition=r.style.height=""}function i(r){r.style.display="block",r.style.height=`${r.scrollHeight}px`,r.style.overflow="hidden"}function l(r){r.scrollHeight!==0&&(r.style.transition=t,r.style.height="0px")}function u(r){r.style.transition=r.style.height=""}return{onBeforeEnter:e,onEnter:n,onAfterEnter:s,onBeforeLeave:i,onLeave:l,onAfterLeave:u}}const It={class:"the-layout-tag-box"},Ot={class:"the-layout-tags"},Rt=["onClick"],Bt=["onClick"],At={name:"TagList"},Mt=q({...At,setup(o){const t=k.layout.info,{route:e,router:n,isActive:s}=se();function i(d){if(s(t.tagList[d])){const c=d>0?d-1:d+1,f=t.tagList[c];n.push({path:f.path,query:f.query,params:f.params})}t.tagList.splice(d,1)}J(()=>e.path,function(){t.tagList.some(c=>s(c))||t.tagList.push({name:e.name,path:e.path,query:e.query,params:e.params,meta:e.meta})},{immediate:!0});const l=Z({show:!1,left:""}),u={list:[{label:"关闭其他",id:1,click(){l.show=!1;const d=u.current;s(d)?t.tagList=[d]:n.push(d.path).then(()=>{t.tagList=[d]})},show:()=>t.tagList.length>1},{label:"在新标签打开",id:2,click(){l.show=!1;const d=location.href.split("#");window.open(`${d[0]}#${u.current.path}`,"_blank")}},{label:"复制当前信息",id:3,click(){l.show=!1;const d=u.current;Te(JSON.stringify(d,null,4),()=>pe.success("复制成功！"))}}],current:void 0},r=O();function h(d,c){l.show=!0,u.current=c,ze(()=>{let f=d.x;const a=parseFloat(getComputedStyle(r.value).width),g=document.body.clientWidth-a;f>g&&(f=g),l.left=`${f}px`})}function _(d){const c=d.target;l.show&&!r.value.contains(c)&&(l.show=!1)}return oe(function(){document.addEventListener("click",_)}),he(function(){document.removeEventListener("click",_)}),(d,c)=>{const f=V("router-link");return p(),b(N,null,[m("div",It,[L(v(_e),null,{default:S(()=>[m("div",Ot,[(p(!0),b(N,null,K(v(t).tagList,(a,g)=>(p(),E(f,{class:M(["the-layout-tag",{"is-active":v(s)(a)}]),key:a.path+g,to:{path:a.path,query:a.query,params:a.params},onContextmenu:ve($=>h($,a),["prevent"])},{default:S(()=>[m("span",null,R(a.meta.title),1),m("i",{class:"close",onClick:ve($=>i(g),["prevent","stop"])},"-",8,Rt)]),_:2},1032,["class","to","onContextmenu"]))),128))])]),_:1})]),j(m("div",{ref_key:"tagMenuRef",ref:r,class:"the-layout-tag-menu",style:z({left:l.left})},[(p(!0),b(N,null,K(u.list,a=>j((p(),b("div",{key:a.id,class:"the-layout-tag-menu-item",onClick:g=>a.click()},R(a.label),9,Bt)),[[X,a.show?a.show():!0]])),128))],4),[[X,l.show]])],64)}}}),Pt={name:"Icon"},F=q({...Pt,props:{name:{type:String,required:!0},size:{type:[String,Number],default:void 0},color:{type:String,default:void 0}},setup(o){const t=o,e=de(()=>{const n=t.size;return{fontSize:typeof n=="number"?`${n}px`:n,color:t.color}});return(n,s)=>(p(),E(v(qe),{icon:t.name,style:z(e.value),class:"the-icon"},null,8,["icon","style"]))}}),Dt={class:"the-layout-header"},Ft={class:"the-layout-navbar flex"},Nt={class:"user-info-box f-vertical"},zt=["src"],qt={class:"the-tag green mr-[10px]"},Ht=m("span",null,"退出登录",-1),Vt={name:"HeaderBar"},jt=q({...Vt,setup(o){const t=k.layout.info,e=k.user.info,{router:n}=se();function s(){t.showSidebar=!t.showSidebar}const i="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif";function l(){k.user.reset(),n.push("/login").then(()=>{t.tagList=[],Pn()})}return(u,r)=>(p(),b("div",Dt,[m("div",Ft,[m("div",{class:M(["fvc menu-fold",{"menu-fold-actived":v(t).showSidebar}]),onClick:r[0]||(r[0]=h=>s())},[L(v(F),{name:"tdesign:menu-fold",size:"24px",color:"#555"})],2),L(wt,{class:"f1"}),m("div",Nt,[m("img",{class:"avatar",src:v(e).avatar||i},null,8,zt),m("span",qt,R(v(e).name||v(e).account||"用户未设置昵称"),1),m("button",{class:"logout f-vertical",onClick:r[1]||(r[1]=h=>l())},[L(v(F),{name:"tdesign:logout",class:"mr-[4px]"}),Ht])])]),v(t).showTagList?(p(),E(Mt,{key:0})):A("",!0)]))}}),Wt={class:"f1"},Xt=m("i",{class:"the-layout-menu-arrow"},null,-1),Yt=["href"],Jt={class:"f1"},Gt={class:"f1"},Ut=["href"],Kt=q({__name:"MenuItem",props:{menu:{type:Object,required:!0},level:{type:Number,default:0}},setup(o){const t=o,{onBeforeEnter:e,onEnter:n,onAfterEnter:s,onBeforeLeave:i,onLeave:l,onAfterLeave:u}=Tt(),{isActive:r,hasActive:h}=se(),_=de(function(){const g=r(t.menu);return{"the-layout-menu-title":!0,"is-current":h(t.menu)&&!g,"is-open":t.menu.isOpen,"is-active":g}}),d=de(function(){return{"the-layout-menu-list":!0,"is-open":t.menu.isOpen}});function c(g){return{"the-layout-menu-link":!0,"is-active":r(g)}}function f(g){return!!(g.children&&g.children.length>0)}function a(){const g=t.menu;g.isOpen=!g.isOpen}return(g,$)=>{const I=V("router-link"),C=V("MenuItem",!0);return p(),b("section",{class:"the-layout-menu",style:z({"--level":t.level})},[f(t.menu)?(p(),b("div",{key:0,class:M(_.value),onClick:$[0]||($[0]=y=>a())},[t.menu.icon?(p(),E(v(F),{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):A("",!0),m("span",Wt,R(t.menu.title),1),Xt],2)):(p(),b(N,{key:1},[t.menu.link?(p(),b("a",{key:0,href:t.menu.link,class:M(_.value),target:"_blank"},[t.menu.icon?(p(),E(v(F),{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):A("",!0),m("span",Jt,R(t.menu.title),1)],10,Yt)):(p(),E(I,{key:1,to:t.menu.path,class:M(_.value)},{default:S(()=>[t.menu.icon?(p(),E(v(F),{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):A("",!0),m("span",Gt,R(t.menu.title),1)]),_:1},8,["to","class"]))],64)),f(t.menu)?(p(),E(W,{key:2,onBeforeEnter:v(e),onEnter:v(n),onAfterEnter:v(s),onBeforeLeave:v(i),onLeave:v(l),onAfterLeave:v(u)},{default:S(()=>[j(m("div",{class:M(d.value)},[(p(!0),b(N,null,K(t.menu.children,y=>(p(),b(N,{key:y.menuId},[f(y)?(p(),E(C,{key:0,menu:y,level:t.level+1},null,8,["menu","level"])):(p(),b(N,{key:1},[y.link?(p(),b("a",{key:0,href:y.link,class:M(c(y)),target:"_blank"},[y.icon?(p(),E(v(F),{key:0,name:y.icon,class:"menu-icon"},null,8,["name"])):A("",!0),m("span",null,R(y.title),1)],10,Ut)):(p(),E(I,{key:1,to:y.path,class:M(c(y))},{default:S(()=>[y.icon?(p(),E(v(F),{key:0,name:y.icon,class:"menu-icon"},null,8,["name"])):A("",!0),m("span",null,R(y.title),1)]),_:2},1032,["to","class"]))],64))],64))),128))],2),[[X,t.menu.isOpen]])]),_:1},8,["onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])):A("",!0)],4)}}}),Zt={name:"Empty",props:{text:{type:String,default:"暂无数据"},size:{type:Number}}},Qt="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20width='64'%20height='41'%20viewBox='0%200%2064%2041'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(0%201)'%20fill='none'%20fill-rule='evenodd'%3e%3cellipse%20fill='%23f5f5f5'%20cx='32'%20cy='33'%20rx='32'%20ry='7'%3e%3c/ellipse%3e%3cg%20fill-rule='nonzero'%20stroke='%23d9d9d9'%3e%3cpath%20d='M55%2012.76L44.854%201.258C44.367.474%2043.656%200%2042.907%200H21.093c-.749%200-1.46.474-1.947%201.257L9%2012.761V22h46v-9.24z'%3e%3c/path%3e%3cpath%20d='M41.613%2015.931c0-1.605.994-2.93%202.227-2.931H55v18.137C55%2033.26%2053.68%2035%2052.05%2035h-40.1C10.32%2035%209%2033.259%209%2031.137V13h11.16c1.233%200%202.227%201.323%202.227%202.928v.022c0%201.605%201.005%202.901%202.237%202.901h14.752c1.232%200%202.237-1.308%202.237-2.913v-.007z'%20fill='%23fafafa'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",en={class:"empty"},tn={class:"text"};function nn(o,t,e,n,s,i){return p(),b("div",en,[m("img",{class:"icon",style:z({width:e.size?`${e.size}px`:void 0}),src:Qt,alt:""},null,4),m("span",tn,R(e.text),1)])}const on=ge(Zt,[["render",nn],["__scopeId","data-v-a5ec6d3f"]]),sn={name:"Menu"},rn=q({...sn,props:{mergeOnlyOneChild:{type:Number,default:0}},setup(o){const t=o,e=k.layout.info;function n(c){const f=[];for(let a=0;a<c.length;a++){const g=c[a];if(g.meta&&g.meta.hidden)continue;const $={menuId:Ct(),path:g.path,isOpen:!1,title:g.meta.title,icon:g.meta.icon,link:g.meta.link};g.children&&g.children.length&&($.children=n(g.children)),f.push($)}return f}function s(c,f=1){const a=[],g=f<t.mergeOnlyOneChild,$=f+1;for(let I=0;I<c.length;I++){const C=c[I],y=C.children;y&&y.length>0?y.length===1?(a.push(y[0]),y[0].children&&y[0].children.length>0&&g&&(y[0].children=s(y[0].children,$))):(a.push(C),g&&(C.children=s(y,$))):a.push(C)}return a}function i(c){const f=e.keyword;return c.filter(a=>a.children&&(a.children=i(a.children),a.children.length>0)?(a.isOpen=!0,!0):!!a.title.includes(f))}let l=n(k.layout.completeRouters);t.mergeOnlyOneChild&&(l=s(l));const u=O(l),{route:r,isActive:h}=se();function _(c){const f=[];function a(g,$){for(let I=0;I<g.length;I++){const C=g[I];if(h(C))return f.push(...$),!0;if(C.children&&C.children.length&&a(C.children,[...$,C]))return!0}return!1}return a(c,[]),f}function d(){_(u.value).forEach(f=>{f.isOpen=!0})}return J(()=>e.keyword,function(c){const f=JSON.parse(JSON.stringify(l));if(c){const a=i(f);u.value=a}else u.value=f,d()}),J(()=>r.path,function(){d()},{immediate:!0}),(c,f)=>(p(),b(N,null,[(p(!0),b(N,null,K(u.value,(a,g)=>(p(),E(Kt,{menu:a,key:a.menuId,style:z(g?void 0:{"margin-top":"0"})},null,8,["menu","style"]))),128)),u.value.length?A("",!0):(p(),E(v(on),{key:0,style:{height:"140px"},text:"没有匹配到任何菜单"}))],64))}}),an={class:"the-layout-sidebar"},ln={class:"the-layout-sidebar-content"},cn={key:0,class:"the-logo-box"},un=["src"],dn=["title"],fn={key:1,style:{height:"var(--page-padding)"}},pn={class:"the-layout-search-box"},mn={class:"f1"},hn={class:"the-layout-sidebar-content padding-full"},gn={name:"Sidebar"},_n=q({...gn,setup(o){const t=k.layout.info,e=k.projectInfo;function n(){t.keyword=""}return(s,i)=>{const l=V("router-link");return p(),b("div",an,[m("section",ln,[L(W,{name:"fade",mode:"out-in"},{default:S(()=>[v(t).showSidebarLogo?(p(),b("div",cn,[L(l,{class:"the-logo-link f-vertical",to:"/"},{default:S(()=>[m("img",{class:"the-logo",src:v(e).logo},null,8,un),m("h1",{class:"the-logo-title ellipsis",title:v(e).title},R(v(e).title),9,dn)]),_:1})])):(p(),b("div",fn))]),_:1}),m("div",pn,[j(m("input",{"onUpdate:modelValue":i[0]||(i[0]=u=>v(t).keyword=u),type:"text",placeholder:"请输入关键字检索菜单"},null,512),[[He,v(t).keyword]]),v(t).keyword?(p(),E(v(F),{key:0,class:"the-layout-search-icon",name:"tdesign:close-circle",onClick:i[1]||(i[1]=u=>n())})):(p(),E(v(F),{key:1,class:"the-layout-search-icon",name:"tdesign:search"}))])]),m("section",mn,[L(v(_e),null,{default:S(()=>[m("div",hn,[L(rn,{mergeOnlyOneChild:1})])]),_:1})])])}}}),vn={name:"Layout"},Ee=q({...vn,setup(o){const t=k.layout.info;function e(h){let _=[];for(let d=0;d<h.length;d++){const c=h[d],f=c.children;f&&f.length>0&&(_=_.concat(e(f))),c.meta.keepAlive&&c.name&&_.push(c.name)}return _.filter(d=>d)}const n=e(k.layout.completeRouters),s=O(),i=O(!1);let l;function u(){l.scrollTo({top:0,left:0,behavior:"smooth"})}function r(){i.value=l.scrollTop>document.documentElement.clientHeight}return oe(function(){l=s.value,l.addEventListener("scroll",r),r()}),(h,_)=>{const d=V("router-view");return p(),b("div",{class:M(["the-layout",v(t).layoutMode,{"has-tag-list":v(t).showTagList},{"collapsed-sidebar":!v(t).showSidebar}])},[L(jt),L(_n),m("div",{class:"the-layout-content",ref_key:"contentBox",ref:s},[L(d,{class:"the-layout-page"},{default:S(({Component:c,route:f})=>[L(W,{name:"page-y",mode:"out-in"},{default:S(()=>[(p(),E(Ve,{include:v(n)},[(p(),E(je(c),{key:f.fullPath}))],1032,["include"]))]),_:2},1024)]),_:1})],512),m("button",{class:M(["the-layout-to-top fvc",{hidden:!i.value}]),title:"返回顶部",onClick:_[0]||(_[0]=c=>u())},[L(v(F),{name:"tdesign:align-top",size:20})],2)],2)}}}),yn={name:"page-404",data(){return{project:k.projectInfo}}},ie=o=>(Xe("data-v-9091b7be"),o=o(),Ye(),o),bn={class:"page-404 fvc"},xn=We('<div class="from-top-box f-vertical" data-v-9091b7be><div class="mr-[30px]" data-v-9091b7be><div class="point-icon mb-[50px]" data-v-9091b7be></div><div class="point-icon" data-v-9091b7be></div></div><div class="radius-icon" data-v-9091b7be></div><div class="code-value" data-v-9091b7be>404</div></div>',1),$n={class:"from-right-box mb-[40px]"},kn=ie(()=>m("p",{class:"text"},"你访问的页面不存在，请确认页面路径是否正确。",-1)),wn=ie(()=>m("p",{class:"text"},"我们只收集某些错误信息，然后需要你重新点击返回首页或返回上一页。",-1)),En={class:"pt-[40px]"},Ln={class:"from-bottom-box flex"},Sn=ie(()=>m("img",{class:"qrcode-box",src:"https://travis-hjs.github.io/images/reward-code.jpg",alt:"谢谢打赏！"},null,-1)),Cn={class:"pt-[20px]"},Tn=ie(()=>m("p",{class:"desc"},"如需技术支持，请扫码联系作者。",-1)),In={class:"desc"},On={class:"desc"};function Rn(o,t,e,n,s,i){const l=V("router-link");return p(),b("div",bn,[m("section",null,[xn,m("div",$n,[kn,wn,m("div",En,[L(l,{class:"go-back fvc",to:"/"},{default:S(()=>[Se("返回首页")]),_:1})])]),m("div",Ln,[Sn,m("div",Cn,[Tn,m("p",In,"邮箱地址："+R(s.project.email),1),m("p",On,"项目地址："+R(s.project.link),1)])])])])}const ne=ge(yn,[["render",Rn],["__scopeId","data-v-9091b7be"]]),Bn=[{path:"/",name:"index",redirect:"/home",component:Ee,meta:{title:"首页",icon:"tdesign:home"},children:[{path:"/home",meta:{title:"首页展示",icon:"tdesign:bookmark-double"},component:()=>T(()=>import("./home-V0wFqNzT.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)},{path:"/nested",name:"nested",redirect:"/nested/menu-1",meta:{title:"多级菜单嵌套",icon:"tdesign:tree-square-dot"},component:()=>T(()=>import("./nested-D4c8LdM3.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/menu-1",name:"nested/menu-1",meta:{title:"el-plus 表格"},component:()=>T(()=>import("./menu-1-X3xicvar.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/nested/menu-2",name:"nested/menu-2",meta:{title:"el-plus 表单验证"},component:()=>T(()=>import("./menu-2-CSTMWfGk.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)},{path:"/nested/three-level",name:"nested/three-level",meta:{title:"三级菜单"},redirect:"/nested/three-level/menu-1",component:()=>T(()=>import("./nested-D4c8LdM3.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/three-level/menu-1",name:"/nested/three-level/menu-1",meta:{title:"菜单 3-1"},component:()=>T(()=>import("./menu-1-X3xicvar.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/nested/three-level/menu-2",name:"/nested/three-level/menu-2",meta:{title:"菜单 3-2"},component:()=>T(()=>import("./menu-2-CSTMWfGk.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)}]},{path:"/nested/four-level",name:"nested/four-level",meta:{title:"三级菜单-2"},redirect:"/nested/four-level/menu-1",component:()=>T(()=>import("./nested-D4c8LdM3.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/four-level/menu-1",name:"/nested/four-level/menu-1",meta:{title:"菜单 3-2-1"},component:()=>T(()=>import("./menu-1-X3xicvar.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)}]},{path:"/nested/menu-3",name:"nested/menu-3",meta:{title:"菜单 2-3"},component:()=>T(()=>import("./menu-3-_9fXxTuR.js"),__vite__mapDeps([12,1,2,13]),import.meta.url)}]},{path:"/link-baidu",name:"link-baidu",component:ne,meta:{title:"百度一下",icon:"tdesign:system-search-filled",link:"https://www.baidu.com"}},{path:"/menu-4",name:"menu-4",meta:{title:"换行菜单标题换行菜单标题",icon:"tdesign:component-layout"},component:()=>T(()=>import("./menu-4-DkHpKtvv.js"),__vite__mapDeps([14,1,2,15]),import.meta.url)}]},{path:"/example",name:"example",component:Ee,meta:{title:"示例页栏目",icon:"tdesign:play-demo"},redirect:"/example/request",children:[{path:"/example/request",name:"example-request",meta:{title:"http-请求示例",keepAlive:!0},component:()=>T(()=>import("./request-BfjGdiRE.js"),__vite__mapDeps([16,1,2,17,18]),import.meta.url)},{path:"/example/components",name:"example-components",meta:{title:"自定义组件"},component:()=>T(()=>import("./the-components-DvjQif1S.js"),__vite__mapDeps([19,1,2,17,20]),import.meta.url)},{path:"/example/tsx",name:"example-tsx",meta:{title:"tsx-示例"},component:()=>T(()=>import("./example-DGzICbhX.js"),__vite__mapDeps([21,1,2,22]),import.meta.url)},{path:"/example/no-found",name:"no-found",meta:{title:"404 页面",link:`${location.origin+location.pathname}#/is-error-path`},component:ne}]},{path:"/"+k.projectInfo.link,name:"GitHub-Travis",component:ne,meta:{title:"项目地址",icon:"tdesign:logo-github-filled",link:k.projectInfo.link,auth:[0]}}],G={path:"/",query:{}},me="redirect404";let D;function Re(o){const t=[],e=k.user.info.type;for(let n=0;n<o.length;n++){const s=o[n],i=s.meta?s.meta.auth:void 0;(!i||i&&i.includes(e))&&(s.children&&s.children.length>0&&(s.children=Re(s.children)),t.push(s))}return t}async function An(){return Re(Bn)}function Mn(o,t){D=o,D.beforeEach(async function(e,n,s){if(ae.start(),k.user.info.token)if(k.layout.addRouters.length>0)s();else{k.layout.addRouters=await An();for(let i=0;i<k.layout.addRouters.length;i++){const l=k.layout.addRouters[i];D.addRoute(l)}D.hasRoute(me)||D.addRoute({...t[1],path:"/:catchAll(.*)",name:me}),k.layout.completeRouters=t.concat(k.layout.addRouters),s({...e,replace:!0})}else e.path==="/login"?s():(G.path=e.path,G.query=e.query,s({path:"/login"}),ae.done())}),D.afterEach(e=>{ae.done(),e.meta&&e.meta.title&&(document.title=e.meta.title)})}function Vn(){D.replace({path:G.path,query:G.query})}function Pn(){const o=k.layout.addRouters;for(let t=o.length-1;t>-1;t--){const e=o[t];e.name&&D.hasRoute(e.name)&&D.removeRoute(e.name)}G.path="/",G.query={},D.removeRoute(me),k.layout.addRouters=k.layout.completeRouters=[]}const Be=[{path:"/login",name:"login",component:()=>T(()=>import("./login-DywhHINm.js"),__vite__mapDeps([23,1,2,17,3,4,24]),import.meta.url),meta:{hidden:!0,title:"请登录"}},{path:"/404",name:"page-404",component:ne,meta:{hidden:!0,title:"不存在该页面"}},{path:"/401",name:"page-401",component:()=>T(()=>import("./page-401-D1v6TZy7.js"),__vite__mapDeps([25,1,2,26]),import.meta.url),meta:{hidden:!0,title:"暂无权限访问"}}],Ae=Je({history:Ge(),routes:Be});Mn(Ae,Be);const Dn="1.1.7",ue=[];function Fn(o,t){let e;ue.length>1?e=ue.shift():(e=document.createElement("div"),e.className="ripple");const n=t.getBoundingClientRect(),s=t.getAttribute("color");let i=Math.max(n.width,n.height);i>200&&(i=200),e.style.height=e.style.width=i+"px",e.style.backgroundColor=s||"rgba(255, 255, 255, .45)",t.appendChild(e);const l=o.touches,u=l?l[0].clientY:o.clientY,r=l?l[0].clientX:o.clientX,h=u-n.top-e.offsetHeight/2,_=r-n.left-e.offsetWidth/2;e.style.top=h+"px",e.style.left=_+"px";function d(){e.removeEventListener("animationend",d),t.removeChild(e),ue.push(e)}e.addEventListener("animationend",d)}window.version=Dn;const Q=Ue(Qe);Q.directive("copy",{mounted(o,t){o.addEventListener("click",function(){Te(t.value,()=>pe.success("复制成功"),e=>pe.success(e))})}});Q.directive("ripple",{mounted(o){const t=ut()?"touchstart":"mousedown";o.setAttribute("ripple",""),o.addEventListener(t,function(e){Fn(e,o)})}});Q.component("base-dialog",rt);Q.use(Ae);Q.mount("#app");export{ge as _,H as a,Hn as b,Te as c,F as d,_e as e,ct as f,qn as i,Ie as j,pe as m,Vn as o,k as s};
