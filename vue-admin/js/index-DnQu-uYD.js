function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./home-DNOuDmSf.js","./vendor-BlOjVvO_.js","../css/vendor-BUMXTAWU.css","./index.vue_vue_type_style_index_0_lang-D3rd8Bc7.js","../css/index-CBMF1Z1B.css","../css/home-C0-MuaMf.css","./nested-DJLo1Cup.js","../css/nested-DBbt7j1J.css","./menu-1-DHEVLQEp.js","../css/menu-1-PIQFC6DV.css","./menu-2-BxFMhT_K.js","../css/menu-2-DwSbhe9C.css","./menu-3-PtPty9b5.js","../css/menu-3-C1x6D_tQ.css","./menu-4-C0Em9nUp.js","../css/menu-4-B_QkhR3M.css","./request-CXhwscai.js","./common-Bzp2NI5E.js","../css/request-BjYaB_Vm.css","./the-components-8wpHx-gL.js","../css/the-components-IJgq8Frg.css","./example-BtGmfJIP.js","../css/example-CJnj_JQw.css","./index-CzMo7FVe.js","../css/index-CJ5TRbCj.css","./login-Dw6Yq73G.js","../css/login-C2zo-VT6.css","./page-401-CoOg9LyB.js","../css/page-401-hNHv4Vr6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var De=Object.defineProperty;var Me=(o,t,e)=>t in o?De(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var F=(o,t,e)=>(Me(o,typeof t!="symbol"?t+"":t,e),e);import{r as P,c as w,o as p,a as v,b as h,d as V,e as B,w as U,f as te,g as he,h as I,i as R,j as W,n as z,u as y,T as j,k as D,l as Q,t as O,v as X,m as Pe,p as J,q as Ee,F as q,s as Z,x as M,y as Le,z as Fe,A as Ne,B as ge,C as qe,D as _e,E as ze,K as Ve,G as He,H as We,I as je,J as Xe,N as ae,L as Ye,M as Ue,O as Je}from"./vendor-BlOjVvO_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Ge={name:"App"},ne=(o,t)=>{const e=o.__vccOpts||o;for(const[n,i]of t)e[n]=i;return e};function Ke(o,t,e,n,i,r){const c=P("router-view");return p(),w(c)}const Ze=ne(Ge,[["render",Ke]]),Qe={name:"SvgIcon",props:{name:{type:String,required:!0,default:""}}},et={class:"svg-icon","aria-hidden":"true"},tt=["xlink:href"];function nt(o,t,e,n,i,r){return p(),v("svg",et,[h("use",{"xlink:href":`#icon-${e.name}`},null,8,tt)])}const ot=ne(Qe,[["render",nt]]);let ve=1e3;function fe(){const o=ve;return ve++,o}const st={class:"base-dialog-title f-between f-vertical"},it={key:0,class:"base-dialog-text"},rt={class:"base-dialog-body"},at={key:0,class:"base-dialog-footer"},ct={name:"base-dialog"},lt=V({...ct,props:{title:{type:String,default:"提示"},show:{type:Boolean,default:!1},width:{type:String,default:"50%"},closeByMask:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1}},emits:["close","update:show","afterLeave","afterEnd"],setup(o,{emit:t}){const e=o,n=t,i=fe(),r=B(),c=B(),u=B(),s=B(!1);U(()=>e.show,function(a){a?setTimeout(()=>{s.value=!0},0):s.value=!1},{immediate:!0});function m(a){if(!e.show||s.value||r.value.contains(a.target))return;const{clientWidth:g,clientHeight:b}=r.value,E=g/2,L=b/2,S=a.clientY-L,ie=`${(a.clientX-E)/g*100}vw`,x=`${S/b*100}vh`;_(ie,x)}function _(a,g){const b=u.value;b&&(b.style.setProperty("--content-x",a),b.style.setProperty("--content-y",g))}function f(a){(a&&a.target===r.value&&e.closeByMask||a&&a.target===c.value)&&(n("update:show",!1),n("close"))}function l(){s.value&&_("0","0"),n("afterLeave")}function d(){n("afterEnd")}return te(function(){document.addEventListener("click",m)}),he(function(){document.removeEventListener("click",m)}),(a,g)=>(p(),v("section",null,[(p(),w(Pe,{to:"body",disabled:!e.appendToBody},[I(j,{name:"fade"},{default:R(()=>[W(h("div",{ref_key:"el",ref:r,class:"base-dialog fvc",style:z({zIndex:y(i)}),onClick:f},[I(j,{name:"dialog-move",onAfterLeave:l,onAfterEnter:d},{default:R(()=>[W(h("div",{ref_key:"contentBox",ref:u,class:"base-dialog-content flex",style:z({width:e.width})},[h("div",st,[a.$slots.header?D("",!0):(p(),v("h2",it,O(o.title),1)),Q(a.$slots,"header"),h("i",{class:"base-dialog-icon",ref_key:"closeBtn",ref:c,onClick:f},null,512)]),h("div",rt,[Q(a.$slots,"default")]),a.$slots.footer?(p(),v("div",at,[Q(a.$slots,"footer")])):D("",!0)],4),[[X,s.value]])]),_:3})],4),[[X,e.show]])]),_:3})],8,["disabled"]))]))}}),ut="modulepreload",dt=function(o,t){return new URL(o,t).href},ye={},T=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){const r=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=Promise.all(e.map(s=>{if(s=dt(s,n),s in ye)return;ye[s]=!0;const m=s.endsWith(".css"),_=m?'[rel="stylesheet"]':"";if(!!n)for(let d=r.length-1;d>=0;d--){const a=r[d];if(a.href===s&&(!m||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${_}`))return;const l=document.createElement("link");if(l.rel=m?"stylesheet":ut,m||(l.as="script",l.crossOrigin=""),l.href=s,u&&l.setAttribute("nonce",u),document.head.appendChild(l),m)return new Promise((d,a)=>{l.addEventListener("load",d),l.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${s}`)))})}))}return i.then(()=>t()).catch(r=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=r,window.dispatchEvent(c),!c.defaultPrevented)throw r})};function ft(o){return Object.prototype.toString.call(o).match(/\[object (\S*)\]/)[1].toLocaleLowerCase()}function Ce(o,t){return ft(o)===t}function H(o,t){for(const e in t)if(Object.prototype.hasOwnProperty.call(o,e)){const n=t[e],i=o[e];Ce(i,"object")?H(i,n):o[e]=n}}function Se(o,t,e){if(o=o.replace(/(^\s*)|(\s*$)/g,""),!o){e&&e("复制的内容不能为空！");return}const n="the-clipboard";let i=document.getElementById(n);i||(i=document.createElement("textarea"),i.id=n,i.readOnly=!0,i.style.cssText="font-size: 15px; position: fixed; top: -1000%; left: -1000%;",document.body.appendChild(i)),i.value=o,i.select(),i.setSelectionRange(0,i.value.length),document.execCommand("copy")?t&&t():e&&e("复制失败")}function Wn(o,t,e){let n=o.toString().trim();if(n.length===0)return"";const i="";return n=n.replace(/[^0-9]+/ig,""),i+n}function Te(o,t={}){let e=t;if(Ce(o,"string"))try{e=JSON.parse(o)}catch(n){console.warn("JSON格式化对象错误 >>",n)}return e}function pt(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)}function mt(o){const e=`; ${document.cookie}`.split(`; ${o}=`);return e.length===2?e.pop().split(";").shift():""}function ht(o,t,e){let n=`${o}=${t}; path=/`;e&&(e.expires&&(n+=`; expires=${e.expires.toUTCString()}`),e.domain&&(n+=`; domain=${e.domain}`)),document.cookie=n}function gt(o,t){const e="expires=Thu, 01 Jan 1970 00:00:00 GMT";document.cookie=`${o}=; path=/; ${e}`}const ce="ModuleUser";function be(){return{id:"",name:"",type:"",token:"",avatar:"",account:"",password:""}}const _t=3,vt=24*60*60*1e3;class yt{constructor(){F(this,"info",J(be()));this.init()}init(){const t=mt(ce);if(t){const e=Te(t);H(this.info,e)}}update(t){H(this.info,t),ht(ce,JSON.stringify(this.info),{expires:new Date(Date.now()+_t*vt)})}reset(){H(this.info,be()),gt(ce)}}const bt=""+new URL("../image/logo-CPmPqqKk.png",import.meta.url).href,xe="ModuleLayout";class xt{constructor(){F(this,"addRouters",[]);F(this,"completeRouters",[]);F(this,"info",J({showTagList:!0,showSidebar:!0,showSidebarLogo:!0,tagList:[],layoutMode:"",keyword:""}));const t=sessionStorage.getItem(xe);try{t&&H(this.info,JSON.parse(t))}catch(e){console.log("ModuleLayout init fail >>",e)}U(()=>this.info,()=>{sessionStorage.setItem(xe,JSON.stringify(this.info))})}}const le="ModuleGoods";function $e(){return{id:0,name:"",price:0,specs:{size:"xs",width:"",height:""}}}class $t{constructor(){F(this,"info",J($e()));const t=sessionStorage.getItem(le);if(t){const e=Te(t);H(this.info,e)}}update(t){H(this.info,t),sessionStorage.setItem(le,JSON.stringify(this.info))}reset(){H(this.info,$e()),sessionStorage.removeItem(le)}}class kt{constructor(){F(this,"projectInfo",{title:"Vue Typescript Admin",name:"XXX后台管理平台",logo:bt,link:"https://github.com/Travis-hjs/vue-admin",email:"1141752341@qq.com"});F(this,"layout",new xt);F(this,"user",new yt);F(this,"_goods");console.log("%c ModuleStore init","color: #409EFF")}get goods(){return this._goods||(this._goods=new $t),this._goods}}const k=new kt,wt={key:0,class:"separator"},Et={key:1,href:"javascript:void(0)"},Lt={name:"BreadCrumb"},Ct=V({...Lt,setup(o){const t=Ee(),e=B([]);function n(){const i=t.matched.filter(r=>r.meta&&r.meta.title).map(r=>({path:r.path,meta:{...r.meta}}));e.value=i}return U(()=>t.path,function(){t.path.startsWith("/redirect/")||n()}),n(),(i,r)=>{const c=P("router-link");return p(),w(Fe,{name:"breadcrumb",tag:"div",class:"layout-breadcrumb f-vertical"},{default:R(()=>[(p(!0),v(q,null,Z(e.value,(u,s)=>(p(),v("span",{class:M(["layout-breadcrumb-item",{last:s===e.value.length-1}]),key:u.path},[s>0?(p(),v("i",wt,"/")):D("",!0),s===e.value.length-1?(p(),v("a",Et,O(u.meta.title),1)):(p(),w(c,{key:2,to:u.path},{default:R(()=>[Le(O(u.meta.title),1)]),_:2},1032,["to"]))],2))),128))]),_:1})}}}),ke=function(){const o=document.createElement("div");o.style.width="100px",o.style.height="100px",o.style.overflow="scroll",document.body.appendChild(o);const t=o.offsetWidth-o.clientWidth;return o.remove(),t}(),St={name:"Scrollbar"},Ie=V({...St,props:{thumbColor:{type:String,default:"rgba(147, 147, 153, 0.45)"},thumbSize:{type:Number,default:8},clickUpdateDelay:{type:Number,default:0}},setup(o,{expose:t}){const e=o,n=B(),i=B(),r=B(),c=B(),u=J({height:"",width:""}),s=J({x:{width:"",height:"",left:"",bottom:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor},y:{width:"",height:"",top:"",right:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor}}),m=B(!1);function _(){const x=n.value.parentElement;x.style.overflow="hidden";const $=getComputedStyle(x);u.width=`calc(100% + ${ke}px + ${$.borderLeftWidth} + ${$.borderRightWidth})`,u.height=`calc(100% + ${ke}px + ${$.borderTopWidth} + ${$.borderBottomWidth})`}function f(){s.y.right=s.y.top="0px",s.y.width=e.thumbSize+"px",s.x.bottom=s.x.left="0px",s.x.height=e.thumbSize+"px",s.x.borderRadius=s.y.borderRadius=`${e.thumbSize/2}px`}function l(){const x=i.value;if(x){let $=x.clientHeight/x.scrollHeight*100;$>=100&&($=0),s.y.height=$+"%",s.y.transform=`translate3d(0, ${x.scrollTop/x.scrollHeight*x.clientHeight}px, 0)`;let A=x.clientWidth/x.scrollWidth*100;A>=100&&(A=0),s.x.width=A+"%",s.x.transform=`translate3d(${x.scrollLeft/x.scrollWidth*x.clientWidth}px, 0, 0)`}}let d=!1,a=!1,g=0,b;function E(x){const $=r.value,A=c.value,Y=x.target;$.contains(Y)&&(d=!0,a=!1,g=x.clientX-$.getBoundingClientRect().left),A.contains(Y)&&(d=!0,a=!0,g=x.clientY-A.getBoundingClientRect().top)}function L(x){if(!d)return;const $=i.value;if(a){const A=$.getBoundingClientRect().top,Y=$.clientHeight;let re=x.clientY-A;$.scrollTop=(re-g)/Y*$.scrollHeight}else{const A=$.getBoundingClientRect().left,Y=$.clientWidth;let re=x.clientX-A;$.scrollLeft=(re-g)/Y*$.scrollWidth}}function S(x){d=!1,n.value.contains(x.target)?e.clickUpdateDelay>0&&(b&&clearTimeout(b),b=setTimeout(l,e.clickUpdateDelay)):m.value=!1}function C(){m.value=!0,l()}function ie(){d||(m.value=!1)}return te(function(){_(),f(),i.value&&i.value.addEventListener("scroll",l),document.addEventListener("mousedown",E),document.addEventListener("mousemove",L),document.addEventListener("mouseup",S)}),he(function(){i.value&&i.value.removeEventListener("scroll",l),document.removeEventListener("mousedown",E),document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",S),b&&clearTimeout(b)}),t({updateWrapStyle:_,updateThumbStyle:l}),(x,$)=>(p(),v("div",{class:"the-scrollbar",ref_key:"el",ref:n,onMouseenter:$[0]||($[0]=A=>C()),onMouseleave:$[1]||($[1]=A=>ie())},[h("div",{ref_key:"wrap",ref:i,class:"the-scrollbar-wrap",style:z(u)},[Q(x.$slots,"default")],4),I(j,{name:"fade"},{default:R(()=>[W(h("button",{class:"the-scrollbar-thumb",ref_key:"thumbY",ref:c,title:"滚动条-摁住拖拽Y轴",style:z(s.y)},null,4),[[X,m.value]])]),_:1}),I(j,{name:"fade"},{default:R(()=>[W(h("button",{class:"the-scrollbar-thumb",ref_key:"thumbX",ref:r,title:"滚动条-摁住拖拽X轴",style:z(s.x)},null,4),[[X,m.value]])]),_:1})],544))}});function Tt(o={}){const t=document,e=`__${Math.random().toString(36).slice(2,7)}`,n={box:`msg-box${e}`,hide:`hide${e}`,text:`msg-text${e}`,icon:`msg-icon${e}`},i=t.createElement("style");i.textContent=`
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
  `.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),t.head.appendChild(i);const r=[];function c(m){let _=10;for(let f=0;f<r.length;f++){const l=r[f];if(m&&m===l)break;_+=l.clientHeight+20}return _}function u(m){for(let _=0;_<r.length;_++)if(r[_]===m){r.splice(_,1);break}m.classList.add(n.hide),r.forEach(function(_){_.style.top=`${c(_)}px`})}function s(m,_="info",f){const l=t.createElement("div");l.className=`${n.box} ${_}`,l.style.top=`${c()}px`,l.style.zIndex=Re.message,l.innerHTML=`
    <span class="${n.icon}"></span>
    <span class="${n.text}">${m}</span>
    `,r.push(l),t.body.appendChild(l);function d(){l.removeEventListener("animationend",d),setTimeout(u,f||o.duration||3e3,l)}l.addEventListener("animationend",d);function a(){getComputedStyle(l).opacity==="0"&&(l.removeEventListener("transitionend",a),l.remove())}l.addEventListener("transitionend",a)}return{show:s,info(m){s(m,"info")},success(m){s(m,"success")},warning(m){s(m,"warning")},error(m){s(m,"error")}}}function It(){const o=document,t=`__${Math.random().toString(36).slice(2,7)}`,e={mask:`dialog-mask${t}`,popup:`dialog-popup${t}`,title:`dialog-title${t}`,content:`dialog-content${t}`,footer:`dialog-footer${t}`,confirm:`confirm${t}`,fade:`fade${t}`,show:`show${t}`,hide:`hide${t}`},n=`
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
    margin: 0;
    padding: 0;
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
  `,i=o.createElement("style");i.textContent=n.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),o.head.appendChild(i);const r={x:"0vw",y:"0vh"};o.addEventListener("click",function(u){const{innerWidth:s,innerHeight:m}=window,_=s/2,f=m/2,l=u.clientY-f,d=u.clientX-_;r.x=`${d/s*100}vw`,r.y=`${l/m*100}vh`},!0);function c(u){const s=o.createElement("section");s.className=e.mask,s.style.zIndex=Re.dialog,s.style.setProperty("--x",r.x),s.style.setProperty("--y",r.y),r.x="0vw",r.y="0vh";const m=u.cancelText?`<button class="the-btn">${u.cancelText}</button>`:"";s.innerHTML=`
    <div class="${e.popup}">
      <h2 class="${e.title}">${typeof u.title=="string"?u.title:"提示"}</h2>
      <div class="${e.content}">${u.content}</div>
      <div class="${e.footer}">
        ${m}
        <button class="${e.confirm} the-btn blue">${u.confirmText||"确认"}</button>
      </div>
    </div>
    `,o.body.appendChild(s),s.addEventListener("transitionend",function(f){f.target===s&&s.classList.contains(e.hide)&&s.remove()});function _(){s.classList.add(e.hide)}u.cancelText&&(s.querySelector(`.${e.footer} button`).onclick=function(){_(),u.cancel&&u.cancel()}),s.querySelector(`.${e.confirm}`).onclick=function(){_(),u.confirm&&u.confirm()}}return{show:c}}const Re={get message(){return(fe()+20).toString()},get dialog(){return(fe()+10).toString()}},pe=Tt({duration:3600}),Rt=It(),jn=Rt.show;function oe(){const o=Ee(),t=Ne();function e(r){return JSON.stringify(r||{})}function n(r){return r.path===o.path&&e(r.query)===e(o.query)&&e(r.params)===e(o.params)}function i(r){if(n(r))return!0;if(r.children&&r.children.length)for(let c=0;c<r.children.length;c++){const u=r.children[c];if(i(u))return!0}return!1}return{route:o,router:t,isActive:n,hasActive:i}}let we=0;function Ot(){return we++,`menu-${we}`}function Bt(o=300){const t=`${o}ms height`;function e(s){s.style.transition=t,s.style.height="0px"}function n(s){s.scrollHeight!==0?s.style.height=`${s.scrollHeight}px`:s.style.height="",s.style.overflow="hidden"}function i(s){s.style.transition=s.style.height=""}function r(s){s.style.display="block",s.style.height=`${s.scrollHeight}px`,s.style.overflow="hidden"}function c(s){s.scrollHeight!==0&&(s.style.transition=t,s.style.height="0px")}function u(s){s.style.transition=s.style.height=""}return{onBeforeEnter:e,onEnter:n,onAfterEnter:i,onBeforeLeave:r,onLeave:c,onAfterLeave:u}}const At={class:"the-layout-tag-box"},Dt={class:"the-layout-tags"},Mt=["onClick"],Pt=["onClick"],Ft={name:"TagList"},Nt=V({...Ft,setup(o){const t=k.layout.info,{route:e,router:n,isActive:i}=oe();function r(f){if(i(t.tagList[f])){const l=f>0?f-1:f+1,d=t.tagList[l];n.push({path:d.path,query:d.query,params:d.params})}t.tagList.splice(f,1)}U(()=>e.path,function(){t.tagList.some(l=>i(l))||t.tagList.push({name:e.name,path:e.path,query:e.query,params:e.params,meta:e.meta})},{immediate:!0});const c=J({show:!1,left:""}),u={list:[{label:"关闭其他",id:1,click(){c.show=!1;const f=u.current;i(f)?t.tagList=[f]:n.push(f.path).then(()=>{t.tagList=[f]})},show:()=>t.tagList.length>1},{label:"在新标签打开",id:2,click(){c.show=!1;const f=location.href.split("#");window.open(`${f[0]}#${u.current.path}`,"_blank")}},{label:"复制当前信息",id:3,click(){c.show=!1;const f=u.current;Se(JSON.stringify(f,null,4),()=>pe.success("复制成功！"))}}],current:void 0},s=B();function m(f,l){c.show=!0,u.current=l,qe(()=>{let d=f.x;const a=parseFloat(getComputedStyle(s.value).width),g=document.body.clientWidth-a;d>g&&(d=g),c.left=`${d}px`})}function _(f){const l=f.target;c.show&&!s.value.contains(l)&&(c.show=!1)}return te(function(){document.addEventListener("click",_)}),he(function(){document.removeEventListener("click",_)}),(f,l)=>{const d=P("router-link");return p(),v(q,null,[h("div",At,[I(y(Ie),null,{default:R(()=>[h("div",Dt,[(p(!0),v(q,null,Z(y(t).tagList,(a,g)=>(p(),w(d,{class:M(["the-layout-tag",{"is-active":y(i)(a)}]),key:a.path+g,to:{path:a.path,query:a.query,params:a.params},onContextmenu:ge(b=>m(b,a),["prevent"])},{default:R(()=>[h("span",null,O(a.meta.title),1),h("i",{class:"close",onClick:ge(b=>r(g),["prevent","stop"])},"-",8,Mt)]),_:2},1032,["class","to","onContextmenu"]))),128))])]),_:1})]),W(h("div",{ref_key:"tagMenuRef",ref:s,class:"the-layout-tag-menu",style:z({left:c.left})},[(p(!0),v(q,null,Z(u.list,a=>W((p(),v("div",{key:a.id,class:"the-layout-tag-menu-item",onClick:g=>a.click()},O(a.label),9,Pt)),[[X,a.show?a.show():!0]])),128))],4),[[X,c.show]])],64)}}}),qt={class:"the-layout-header"},zt={class:"the-layout-navbar flex"},Vt={class:"user-info-box f-vertical"},Ht=["src"],Wt={class:"the-tag green mgr-10"},jt=h("span",null,"退出登录",-1),Xt={name:"HeaderBar"},Yt=V({...Xt,setup(o){const t=k.layout.info,e=k.user.info,{router:n}=oe();function i(){t.showSidebar=!t.showSidebar}const r="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif";function c(){k.user.reset(),n.push("/login").then(()=>{t.tagList=[],Nn()})}return(u,s)=>{const m=P("svg-icon");return p(),v("div",qt,[h("div",zt,[h("div",{class:M(["fvc hamburger",{"hamburger-actived":y(t).showSidebar}]),onClick:s[0]||(s[0]=_=>i())},[I(m,{name:"hamburger"})],2),I(Ct,{class:"f1"}),h("div",Vt,[h("img",{class:"avatar",src:y(e).avatar||r},null,8,Ht),h("span",Wt,O(y(e).name||y(e).account||"用户未设置昵称"),1),h("button",{class:"logout f-vertical",onClick:s[1]||(s[1]=_=>c())},[I(m,{name:"exit"}),jt])])]),y(t).showTagList?(p(),w(Nt,{key:0})):D("",!0)])}}}),Ut={class:"f1"},Jt=h("i",{class:"the-layout-menu-arrow"},null,-1),Gt=["href"],Kt={class:"f1"},Zt={class:"f1"},Qt=["href"],en=V({__name:"MenuItem",props:{menu:{type:Object,required:!0},level:{type:Number,default:0}},setup(o){const t=o,{onBeforeEnter:e,onEnter:n,onAfterEnter:i,onBeforeLeave:r,onLeave:c,onAfterLeave:u}=Bt(),{isActive:s,hasActive:m}=oe(),_=_e(function(){const g=s(t.menu);return{"the-layout-menu-title":!0,"is-current":m(t.menu)&&!g,"is-open":t.menu.isOpen,"is-active":g}}),f=_e(function(){return{"the-layout-menu-list":!0,"is-open":t.menu.isOpen}});function l(g){return{"the-layout-menu-link":!0,"is-active":s(g)}}function d(g){return!!(g.children&&g.children.length>0)}function a(){const g=t.menu;g.isOpen=!g.isOpen}return(g,b)=>{const E=P("svg-icon"),L=P("router-link"),S=P("MenuItem",!0);return p(),v("section",{class:"the-layout-menu",style:z({"--level":t.level})},[d(t.menu)?(p(),v("div",{key:0,class:M(_.value),onClick:b[0]||(b[0]=C=>a())},[t.menu.icon?(p(),w(E,{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):D("",!0),h("span",Ut,O(t.menu.title),1),Jt],2)):(p(),v(q,{key:1},[t.menu.link?(p(),v("a",{key:0,href:t.menu.link,class:M(_.value),target:"_blank"},[t.menu.icon?(p(),w(E,{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):D("",!0),h("span",Kt,O(t.menu.title),1)],10,Gt)):(p(),w(L,{key:1,to:t.menu.path,class:M(_.value)},{default:R(()=>[t.menu.icon?(p(),w(E,{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):D("",!0),h("span",Zt,O(t.menu.title),1)]),_:1},8,["to","class"]))],64)),d(t.menu)?(p(),w(j,{key:2,onBeforeEnter:y(e),onEnter:y(n),onAfterEnter:y(i),onBeforeLeave:y(r),onLeave:y(c),onAfterLeave:y(u)},{default:R(()=>[W(h("div",{class:M(f.value)},[(p(!0),v(q,null,Z(t.menu.children,C=>(p(),v(q,{key:C.menuId},[d(C)?(p(),w(S,{key:0,menu:C,level:t.level+1},null,8,["menu","level"])):(p(),v(q,{key:1},[C.link?(p(),v("a",{key:0,href:C.link,class:M(l(C)),target:"_blank"},[C.icon?(p(),w(E,{key:0,name:C.icon,class:"menu-icon"},null,8,["name"])):D("",!0),h("span",null,O(C.title),1)],10,Qt)):(p(),w(L,{key:1,to:C.path,class:M(l(C))},{default:R(()=>[C.icon?(p(),w(E,{key:0,name:C.icon,class:"menu-icon"},null,8,["name"])):D("",!0),h("span",null,O(C.title),1)]),_:2},1032,["to","class"]))],64))],64))),128))],2),[[X,t.menu.isOpen]])]),_:1},8,["onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])):D("",!0)],4)}}}),tn={name:"Empty",props:{text:{type:String,default:"暂无数据"},size:{type:Number}}},nn="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20width='64'%20height='41'%20viewBox='0%200%2064%2041'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(0%201)'%20fill='none'%20fill-rule='evenodd'%3e%3cellipse%20fill='%23f5f5f5'%20cx='32'%20cy='33'%20rx='32'%20ry='7'%3e%3c/ellipse%3e%3cg%20fill-rule='nonzero'%20stroke='%23d9d9d9'%3e%3cpath%20d='M55%2012.76L44.854%201.258C44.367.474%2043.656%200%2042.907%200H21.093c-.749%200-1.46.474-1.947%201.257L9%2012.761V22h46v-9.24z'%3e%3c/path%3e%3cpath%20d='M41.613%2015.931c0-1.605.994-2.93%202.227-2.931H55v18.137C55%2033.26%2053.68%2035%2052.05%2035h-40.1C10.32%2035%209%2033.259%209%2031.137V13h11.16c1.233%200%202.227%201.323%202.227%202.928v.022c0%201.605%201.005%202.901%202.237%202.901h14.752c1.232%200%202.237-1.308%202.237-2.913v-.007z'%20fill='%23fafafa'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",on={class:"empty"},sn={class:"text"};function rn(o,t,e,n,i,r){return p(),v("div",on,[h("img",{class:"icon",style:z({width:e.size?`${e.size}px`:void 0}),src:nn,alt:""},null,4),h("span",sn,O(e.text),1)])}const an=ne(tn,[["render",rn],["__scopeId","data-v-6a496f0d"]]),cn={name:"Menu"},ln=V({...cn,props:{mergeOnlyOneChild:{type:Number,default:0}},setup(o){const t=o,e=k.layout.info;function n(l){const d=[];for(let a=0;a<l.length;a++){const g=l[a];if(g.meta&&g.meta.hidden)continue;const b={menuId:Ot(),path:g.path,isOpen:!1,title:g.meta.title,icon:g.meta.icon,link:g.meta.link};g.children&&g.children.length&&(b.children=n(g.children)),d.push(b)}return d}function i(l,d=1){const a=[],g=d<t.mergeOnlyOneChild,b=d+1;for(let E=0;E<l.length;E++){const L=l[E],S=L.children;S&&S.length>0?S.length===1?(a.push(S[0]),S[0].children&&S[0].children.length>0&&g&&(S[0].children=i(S[0].children,b))):(a.push(L),g&&(L.children=i(S,b))):a.push(L)}return a}function r(l){const d=e.keyword;return l.filter(a=>a.children&&(a.children=r(a.children),a.children.length>0)?(a.isOpen=!0,!0):!!a.title.includes(d))}let c=n(k.layout.completeRouters);t.mergeOnlyOneChild&&(c=i(c));const u=B(c),{route:s,isActive:m}=oe();function _(l){const d=[];function a(g,b){for(let E=0;E<g.length;E++){const L=g[E];if(m(L))return d.push(...b),!0;if(L.children&&L.children.length&&a(L.children,[...b,L]))return!0}return!1}return a(l,[]),d}function f(){_(u.value).forEach(d=>{d.isOpen=!0})}return U(()=>e.keyword,function(l){const d=JSON.parse(JSON.stringify(c));if(l){const a=r(d);u.value=a}else u.value=d,f()}),U(()=>s.path,function(){f()},{immediate:!0}),(l,d)=>(p(),v(q,null,[(p(!0),v(q,null,Z(u.value,(a,g)=>(p(),w(en,{menu:a,key:a.menuId,style:z(g?void 0:{"margin-top":"0"})},null,8,["menu","style"]))),128)),u.value.length?D("",!0):(p(),w(y(an),{key:0,style:{height:"140px"},text:"没有匹配到任何菜单"}))],64))}}),un={class:"the-layout-sidebar"},dn={class:"the-layout-sidebar-content"},fn={key:0,class:"the-logo-box"},pn=["src"],mn=["title"],hn={key:1,style:{height:"var(--page-padding)"}},gn={class:"the-layout-search-box"},_n={class:"f1"},vn={class:"the-layout-sidebar-content padding-full"},yn={name:"Sidebar"},bn=V({...yn,setup(o){const t=k.layout.info,e=k.projectInfo;function n(){t.keyword=""}return(i,r)=>{const c=P("router-link"),u=P("svg-icon");return p(),v("div",un,[h("section",dn,[I(j,{name:"fade",mode:"out-in"},{default:R(()=>[y(t).showSidebarLogo?(p(),v("div",fn,[I(c,{class:"the-logo-link f-vertical",to:"/"},{default:R(()=>[h("img",{class:"the-logo",src:y(e).logo},null,8,pn),h("h1",{class:"the-logo-title ellipsis",title:y(e).title},O(y(e).title),9,mn)]),_:1})])):(p(),v("div",hn))]),_:1}),h("div",gn,[W(h("input",{"onUpdate:modelValue":r[0]||(r[0]=s=>y(t).keyword=s),type:"text",placeholder:"请输入关键字检索菜单"},null,512),[[ze,y(t).keyword]]),y(t).keyword?(p(),w(u,{key:0,class:"the-layout-search-icon",name:"circle-close",onClick:r[1]||(r[1]=s=>n())})):(p(),w(u,{key:1,class:"the-layout-search-icon",name:"search"}))])]),h("section",_n,[I(y(Ie),{"click-update-delay":300},{default:R(()=>[h("div",vn,[I(ln,{mergeOnlyOneChild:1})])]),_:1})])])}}}),xn={name:"Layout"},ue=V({...xn,setup(o){const t=k.layout.info;function e(m){let _=[];for(let f=0;f<m.length;f++){const l=m[f],d=l.children;d&&d.length>0&&(_=_.concat(e(d))),l.meta.keepAlive&&l.name&&_.push(l.name)}return _.filter(f=>f)}const n=e(k.layout.completeRouters),i=B(),r=B(!1);let c;function u(){c.scrollTo({top:0,left:0,behavior:"smooth"})}function s(){r.value=c.scrollTop>document.documentElement.clientHeight}return te(function(){c=i.value,c.addEventListener("scroll",s),s()}),(m,_)=>{const f=P("router-view");return p(),v("div",{class:M(["the-layout",y(t).layoutMode,{"has-tag-list":y(t).showTagList},{"collapsed-sidebar":!y(t).showSidebar}])},[I(Yt),I(bn),h("div",{class:"the-layout-content",ref_key:"contentBox",ref:i},[I(f,{class:"the-layout-page"},{default:R(({Component:l,route:d})=>[I(j,{name:"page-y",mode:"out-in"},{default:R(()=>[(p(),w(Ve,{include:y(n)},[(p(),w(He(l),{key:d.fullPath}))],1032,["include"]))]),_:2},1024)]),_:1})],512),h("button",{class:M(["the-layout-to-top",{hidden:!r.value}]),title:"返回顶部",onClick:_[0]||(_[0]=l=>u())},null,2)],2)}}}),$n={name:"page-404",data(){return{project:k.projectInfo}}},se=o=>(je("data-v-099818c9"),o=o(),Xe(),o),kn={class:"page-404 fvc"},wn=We('<div class="from-top-box f-vertical" data-v-099818c9><div class="mgr-30" data-v-099818c9><div class="point-icon mgb-50" data-v-099818c9></div><div class="point-icon" data-v-099818c9></div></div><div class="radius-icon" data-v-099818c9></div><div class="code-value" data-v-099818c9>404</div></div>',1),En={class:"from-right-box mgb-40"},Ln=se(()=>h("p",{class:"text"},"你访问的页面不存在，请确认页面路径是否正确。",-1)),Cn=se(()=>h("p",{class:"text"},"我们只收集某些错误信息，然后需要你重新点击返回首页或返回上一页。",-1)),Sn={class:"pdt-40"},Tn={class:"from-bottom-box flex"},In=se(()=>h("img",{class:"qrcode-box",src:"https://travis-hjs.github.io/images/reward-code.jpg",alt:"谢谢打赏！"},null,-1)),Rn={class:"pdt-20"},On=se(()=>h("p",{class:"desc"},"如需技术支持，请扫码联系作者。",-1)),Bn={class:"desc"},An={class:"desc"};function Dn(o,t,e,n,i,r){const c=P("router-link");return p(),v("div",kn,[h("section",null,[wn,h("div",En,[Ln,Cn,h("div",Sn,[I(c,{class:"go-back fvc",to:"/"},{default:R(()=>[Le("返回首页")]),_:1})])]),h("div",Tn,[In,h("div",Rn,[On,h("p",Bn,"邮箱地址："+O(i.project.email),1),h("p",An,"项目地址："+O(i.project.link),1)])])])])}const ee=ne($n,[["render",Dn],["__scopeId","data-v-099818c9"]]),Mn=[{path:"/",name:"index",redirect:"/home",component:ue,meta:{title:"首页",icon:"home"},children:[{path:"/home",meta:{title:"首页展示",icon:"guide"},component:()=>T(()=>import("./home-DNOuDmSf.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)},{path:"/nested",name:"nested",redirect:"/nested/menu-1",meta:{title:"多级菜单嵌套",icon:"tree"},component:()=>T(()=>import("./nested-DJLo1Cup.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/menu-1",name:"nested/menu-1",meta:{title:"el-plus 表格"},component:()=>T(()=>import("./menu-1-DHEVLQEp.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/nested/menu-2",name:"nested/menu-2",meta:{title:"el-plus 表单验证"},component:()=>T(()=>import("./menu-2-BxFMhT_K.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)},{path:"/nested/three-level",name:"nested/three-level",meta:{title:"三级菜单"},redirect:"/nested/three-level/menu-1",component:()=>T(()=>import("./nested-DJLo1Cup.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/three-level/menu-1",name:"/nested/three-level/menu-1",meta:{title:"菜单 3-1"},component:()=>T(()=>import("./menu-1-DHEVLQEp.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/nested/three-level/menu-2",name:"/nested/three-level/menu-2",meta:{title:"菜单 3-2"},component:()=>T(()=>import("./menu-2-BxFMhT_K.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)}]},{path:"/nested/four-level",name:"nested/four-level",meta:{title:"三级菜单-2"},redirect:"/nested/four-level/menu-1",component:()=>T(()=>import("./nested-DJLo1Cup.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/four-level/menu-1",name:"/nested/four-level/menu-1",meta:{title:"菜单 3-2-1"},component:()=>T(()=>import("./menu-1-DHEVLQEp.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)}]},{path:"/nested/menu-3",name:"nested/menu-3",meta:{title:"菜单 2-3"},component:()=>T(()=>import("./menu-3-PtPty9b5.js"),__vite__mapDeps([12,1,2,13]),import.meta.url)}]},{path:"/link-baidu",name:"link-baidu",component:ee,meta:{title:"百度一下",icon:"baidu",link:"https://www.baidu.com"}},{path:"/menu-4",name:"menu-4",meta:{title:"换行菜单标题换行菜单标题",icon:"nested"},component:()=>T(()=>import("./menu-4-C0Em9nUp.js"),__vite__mapDeps([14,1,2,15]),import.meta.url)}]},{path:"/example",name:"example",component:ue,meta:{title:"示例页栏目",icon:"menu"},redirect:"/example/request",children:[{path:"/example/request",name:"example-request",meta:{title:"http-请求示例",keepAlive:!0},component:()=>T(()=>import("./request-CXhwscai.js"),__vite__mapDeps([16,1,2,17,18]),import.meta.url)},{path:"/example/components",name:"example-components",meta:{title:"自定义组件"},component:()=>T(()=>import("./the-components-8wpHx-gL.js"),__vite__mapDeps([19,1,2,17,20]),import.meta.url)},{path:"/example/tsx",name:"example-tsx",meta:{title:"tsx-示例"},component:()=>T(()=>import("./example-BtGmfJIP.js"),__vite__mapDeps([21,1,2,22]),import.meta.url)},{path:"/example/no-found",name:"no-found",meta:{title:"404 页面",link:`${location.origin+location.pathname}#/is-error-path`},component:ee}]},{path:"/icon",name:"icon",meta:{title:"图标栏目",auth:[0]},component:ue,redirect:"/icon/svg-icons",children:[{path:"/icon/svg-icons",name:"svg-icons",component:()=>T(()=>import("./index-CzMo7FVe.js"),__vite__mapDeps([23,1,2,24]),import.meta.url),meta:{title:"svg-图标",icon:"svg-icon"}}]},{path:"/"+k.projectInfo.link,name:"GitHub-Travis",component:ee,meta:{title:"项目地址",icon:"github",link:k.projectInfo.link,auth:[0]}}],G={path:"/",query:{}},me="redirect404";let N;function Oe(o){const t=[],e=k.user.info.type;for(let n=0;n<o.length;n++){const i=o[n],r=i.meta?i.meta.auth:void 0;(!r||r&&r.includes(e))&&(i.children&&i.children.length>0&&(i.children=Oe(i.children)),t.push(i))}return t}async function Pn(){return Oe(Mn)}function Fn(o,t){N=o,N.beforeEach(async function(e,n,i){if(ae.start(),k.user.info.token)if(k.layout.addRouters.length>0)i();else{k.layout.addRouters=await Pn();for(let r=0;r<k.layout.addRouters.length;r++){const c=k.layout.addRouters[r];N.addRoute(c)}N.hasRoute(me)||N.addRoute({...t[1],path:"/:catchAll(.*)",name:me}),k.layout.completeRouters=t.concat(k.layout.addRouters),i({...e,replace:!0})}else e.path==="/login"?i():(G.path=e.path,G.query=e.query,i({path:"/login"}),ae.done())}),N.afterEach(e=>{ae.done(),e.meta&&e.meta.title&&(document.title=e.meta.title)})}function Xn(){N.replace({path:G.path,query:G.query})}function Nn(){const o=k.layout.addRouters;for(let t=o.length-1;t>-1;t--){const e=o[t];e.name&&N.hasRoute(e.name)&&N.removeRoute(e.name)}G.path="/",G.query={},N.removeRoute(me),k.layout.addRouters=k.layout.completeRouters=[]}const Be=[{path:"/login",name:"login",component:()=>T(()=>import("./login-Dw6Yq73G.js"),__vite__mapDeps([25,1,2,17,3,4,26]),import.meta.url),meta:{hidden:!0,title:"请登录"}},{path:"/404",name:"page-404",component:ee,meta:{hidden:!0,title:"不存在该页面"}},{path:"/401",name:"page-401",component:()=>T(()=>import("./page-401-CoOg9LyB.js"),__vite__mapDeps([27,1,2,28]),import.meta.url),meta:{hidden:!0,title:"暂无权限访问"}}],Ae=Ye({history:Ue(),routes:Be});Fn(Ae,Be);const qn="1.1.3",de=[];function zn(o,t){let e;de.length>1?e=de.shift():(e=document.createElement("div"),e.className="ripple");const n=t.getBoundingClientRect(),i=t.getAttribute("color");let r=Math.max(n.width,n.height);r>200&&(r=200),e.style.height=e.style.width=r+"px",e.style.backgroundColor=i||"rgba(255, 255, 255, .45)",t.appendChild(e);const c=o.touches,u=c?c[0].clientY:o.clientY,s=c?c[0].clientX:o.clientX,m=u-n.top-e.offsetHeight/2,_=s-n.left-e.offsetWidth/2;e.style.top=m+"px",e.style.left=_+"px";function f(){e.removeEventListener("animationend",f),t.removeChild(e),de.push(e)}e.addEventListener("animationend",f)}window.version=qn;const K=Je(Ze);K.directive("copy",{mounted(o,t){o.addEventListener("click",function(){Se(t.value,()=>pe.success("复制成功"),e=>pe.success(e))})}});K.directive("ripple",{mounted(o){const t=pt()?"touchstart":"mousedown";o.setAttribute("ripple",""),o.addEventListener(t,function(e){zn(e,o)})}});K.component("svg-icon",ot);K.component("base-dialog",lt);K.use(Ae);K.mount("#app");export{ne as _,H as a,jn as b,Se as c,Ie as d,ft as e,T as f,Wn as i,Te as j,pe as m,Xn as o,k as s};
