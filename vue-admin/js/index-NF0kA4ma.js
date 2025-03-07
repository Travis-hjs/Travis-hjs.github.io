function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./home-4Z4A3IFn.js","./vendor-DAP4FNWh.js","../css/vendor-BUMXTAWU.css","./index.vue_vue_type_style_index_0_lang-iMRAFZgV.js","../css/index-CBMF1Z1B.css","../css/home-C0-MuaMf.css","./nested-CTnWakyn.js","../css/nested-DBbt7j1J.css","./menu-1-B4wK1N_p.js","../css/menu-1-PIQFC6DV.css","./menu-2-D864vWKK.js","../css/menu-2-DwSbhe9C.css","./menu-3-zRKdEx26.js","../css/menu-3-C1x6D_tQ.css","./menu-4-CQhDTjX9.js","../css/menu-4-B_QkhR3M.css","./request-D61MkjvU.js","./common-BTOIiv5i.js","../css/request-BjYaB_Vm.css","./the-components-lKoYEsE4.js","../css/the-components-IJgq8Frg.css","./example-BJZSCQpe.js","../css/example-CJnj_JQw.css","./index-CqFr2Acl.js","../css/index-CJ5TRbCj.css","./login-zZgYNEEK.js","../css/login-C2zo-VT6.css","./page-401-BB1f4ghq.js","../css/page-401-hNHv4Vr6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var Ae=Object.defineProperty;var Me=(o,t,e)=>t in o?Ae(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var F=(o,t,e)=>(Me(o,typeof t!="symbol"?t+"":t,e),e);import{r as P,c as w,o as m,a as v,b as p,d as H,e as R,f as Q,g as ne,h as he,i as C,j as ee,n as z,T as W,w as S,k as j,v as X,l as J,u as y,m as M,t as B,p as De,q as Ee,F as q,s as Z,x as D,y as Le,z as Pe,A as Fe,B as _e,C as Ne,D as ve,E as qe,K as ze,G as He,H as Ve,I as je,J as We,N as ae,L as Xe,M as Ye,O as Je}from"./vendor-DAP4FNWh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Ge={name:"App"},oe=(o,t)=>{const e=o.__vccOpts||o;for(const[n,i]of t)e[n]=i;return e};function Ue(o,t,e,n,i,s){const c=P("router-view");return m(),w(c)}const Ke=oe(Ge,[["render",Ue]]),Ze={name:"SvgIcon",props:{name:{type:String,required:!0,default:""}}},Qe={class:"svg-icon","aria-hidden":"true"},et=["xlink:href"];function tt(o,t,e,n,i,s){return m(),v("svg",Qe,[p("use",{"xlink:href":`#icon-${e.name}`},null,8,et)])}const nt=oe(Ze,[["render",tt]]);let ye=1e3;function fe(){const o=ye;return ye++,o}const ot={name:"Scrollbar"},ge=H({...ot,props:{thumbColor:{type:String,default:"rgba(147, 147, 153, 0.45)"},thumbSize:{type:Number,default:8},maxHeight:{type:String},maxWidth:{type:String}},setup(o,{expose:t}){const e=o,n=R(),i=R(),s=R(),c=R(),u=Q({x:{width:"",height:"",left:"",bottom:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor},y:{width:"",height:"",top:"",right:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor}}),r=R(!1);function h(){const x=n.value.parentElement;x.style.overflow="hidden"}function g(){u.y.right=u.y.top="0px",u.y.width=e.thumbSize+"px",u.x.bottom=u.x.left="0px",u.x.height=e.thumbSize+"px",u.x.borderRadius=u.y.borderRadius=`${e.thumbSize/2}px`}function d(){const x=i.value;if(x){let k=x.clientHeight/x.scrollHeight*100;k>=100&&(k=0),u.y.height=k+"%",u.y.transform=`translate3d(0, ${x.scrollTop/x.scrollHeight*x.clientHeight}px, 0)`;let A=x.clientWidth/x.scrollWidth*100;A>=100&&(A=0),u.x.width=A+"%",u.x.transform=`translate3d(${x.scrollLeft/x.scrollWidth*x.clientWidth}px, 0, 0)`}}let l=!1,f=!1,a=0;function _(x){const k=s.value,A=c.value,Y=x.target;k.contains(Y)&&(l=!0,f=!1,a=x.clientX-k.getBoundingClientRect().left),A.contains(Y)&&(l=!0,f=!0,a=x.clientY-A.getBoundingClientRect().top)}function b(x){if(!l)return;const k=i.value;if(f){const A=k.getBoundingClientRect().top,Y=k.clientHeight;let re=x.clientY-A;k.scrollTop=(re-a)/Y*k.scrollHeight}else{const A=k.getBoundingClientRect().left,Y=k.clientWidth;let re=x.clientX-A;k.scrollLeft=(re-a)/Y*k.scrollWidth}}function L(x){l=!1,n.value.contains(x.target)||(r.value=!1)}function T(){r.value=!0,d()}function O(){l||(r.value=!1)}let E;const K=R();return ne(function(){h(),g(),document.addEventListener("mousedown",_),document.addEventListener("mousemove",b),document.addEventListener("mouseup",L),E=new ResizeObserver(function(){d()}),K.value&&E.observe(K.value)}),he(function(){document.removeEventListener("mousedown",_),document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",L),E.disconnect()}),t({updateWrapStyle:h,updateThumbStyle:d}),(x,k)=>(m(),v("div",{class:"the-scrollbar",ref_key:"el",ref:n,onMouseenter:k[1]||(k[1]=A=>T()),onMouseleave:k[2]||(k[2]=A=>O())},[p("div",{ref_key:"wrap",ref:i,class:"the-scrollbar-wrap",style:z({"max-height":o.maxHeight,"max-width":o.maxWidth}),onScroll:k[0]||(k[0]=A=>d())},[p("div",{ref_key:"view",ref:K},[ee(x.$slots,"default")],512)],36),C(W,{name:"fade"},{default:S(()=>[j(p("button",{class:"the-scrollbar-thumb",ref_key:"thumbY",ref:c,title:"滚动条-摁住拖拽Y轴",style:z(u.y)},null,4),[[X,r.value]])]),_:1}),C(W,{name:"fade"},{default:S(()=>[j(p("button",{class:"the-scrollbar-thumb",ref_key:"thumbX",ref:s,title:"滚动条-摁住拖拽X轴",style:z(u.x)},null,4),[[X,r.value]])]),_:1})],544))}}),st={class:"base-dialog-title f-between f-vertical"},it={key:0,class:"base-dialog-text"},rt={class:"base-dialog-body"},at={key:0,class:"base-dialog-footer"},ct={name:"base-dialog"},lt=H({...ct,props:{title:{type:String,default:"提示"},show:{type:Boolean,default:!1},width:{type:String,default:"50%"},closeByMask:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1}},emits:["close","update:show","afterLeave","afterEnd"],setup(o,{emit:t}){const e=o,n=t,i=fe(),s=R(),c=R(),u=R(),r=R(!1);J(()=>e.show,function(a){a?setTimeout(()=>{r.value=!0},0):r.value=!1},{immediate:!0});function h(a){if(!e.show||r.value||s.value.contains(a.target))return;const{clientWidth:_,clientHeight:b}=s.value,L=_/2,T=b/2,O=a.clientY-T,K=`${(a.clientX-L)/_*100}vw`,x=`${O/b*100}vh`;g(K,x)}function g(a,_){const b=u.value;b&&(b.style.setProperty("--content-x",a),b.style.setProperty("--content-y",_))}function d(a){(a&&a.target===s.value&&e.closeByMask||a&&a.target===c.value)&&(n("update:show",!1),n("close"))}function l(){r.value&&g("0","0"),n("afterLeave")}function f(){n("afterEnd")}return ne(function(){document.addEventListener("click",h)}),he(function(){document.removeEventListener("click",h)}),(a,_)=>(m(),v("section",null,[(m(),w(De,{to:"body",disabled:!e.appendToBody},[C(W,{name:"fade"},{default:S(()=>[j(p("div",{ref_key:"el",ref:s,class:"base-dialog fvc",style:z({zIndex:y(i)}),onClick:d},[C(W,{name:"dialog-move",onAfterLeave:l,onAfterEnter:f},{default:S(()=>[j(p("div",{ref_key:"contentBox",ref:u,class:"base-dialog-content flex",style:z({width:e.width})},[p("div",st,[a.$slots.header?M("",!0):(m(),v("h2",it,B(o.title),1)),ee(a.$slots,"header"),p("i",{class:"base-dialog-icon",ref_key:"closeBtn",ref:c,onClick:d},null,512)]),p("div",rt,[C(y(ge),{maxHeight:"76vh"},{default:S(()=>[ee(a.$slots,"default")]),_:3})]),a.$slots.footer?(m(),v("div",at,[ee(a.$slots,"footer")])):M("",!0)],4),[[X,r.value]])]),_:3})],4),[[X,e.show]])]),_:3})],8,["disabled"]))]))}}),ut="modulepreload",dt=function(o,t){return new URL(o,t).href},xe={},I=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){const s=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=Promise.all(e.map(r=>{if(r=dt(r,n),r in xe)return;xe[r]=!0;const h=r.endsWith(".css"),g=h?'[rel="stylesheet"]':"";if(!!n)for(let f=s.length-1;f>=0;f--){const a=s[f];if(a.href===r&&(!h||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${g}`))return;const l=document.createElement("link");if(l.rel=h?"stylesheet":ut,h||(l.as="script",l.crossOrigin=""),l.href=r,u&&l.setAttribute("nonce",u),document.head.appendChild(l),h)return new Promise((f,a)=>{l.addEventListener("load",f),l.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${r}`)))})}))}return i.then(()=>t()).catch(s=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s})};function ft(o){return Object.prototype.toString.call(o).match(/\[object (\S*)\]/)[1].toLocaleLowerCase()}function Ce(o,t){return ft(o)===t}function V(o,t){for(const e in t)if(Object.prototype.hasOwnProperty.call(o,e)){const n=t[e],i=o[e];Ce(i,"object")?V(i,n):o[e]=n}}function Se(o,t,e){if(o=o.replace(/(^\s*)|(\s*$)/g,""),!o){e&&e("复制的内容不能为空！");return}const n="the-clipboard";let i=document.getElementById(n);i||(i=document.createElement("textarea"),i.id=n,i.readOnly=!0,i.style.cssText="font-size: 15px; position: fixed; top: -1000%; left: -1000%;",document.body.appendChild(i)),i.value=o,i.select(),i.setSelectionRange(0,i.value.length),document.execCommand("copy")?t&&t():e&&e("复制失败")}function Vn(o,t,e){let n=o.toString().trim();if(n.length===0)return"";const i="";return n=n.replace(/[^0-9]+/ig,""),i+n}function Te(o,t={}){let e=t;if(Ce(o,"string"))try{e=JSON.parse(o)}catch(n){console.warn("JSON格式化对象错误 >>",n)}return e}function mt(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)}function pt(o){const e=`; ${document.cookie}`.split(`; ${o}=`);return e.length===2?e.pop().split(";").shift():""}function ht(o,t,e){let n=`${o}=${t}; path=/`;e&&(e.expires&&(n+=`; expires=${e.expires.toUTCString()}`),e.domain&&(n+=`; domain=${e.domain}`)),document.cookie=n}function gt(o,t){const e="expires=Thu, 01 Jan 1970 00:00:00 GMT";document.cookie=`${o}=; path=/; ${e}`}const ce="ModuleUser";function be(){return{id:"",name:"",type:"",token:"",avatar:"",account:"",password:""}}const _t=3,vt=24*60*60*1e3;class yt{constructor(){F(this,"info",Q(be()));this.init()}init(){const t=pt(ce);if(t){const e=Te(t);V(this.info,e)}}update(t){V(this.info,t),ht(ce,JSON.stringify(this.info),{expires:new Date(Date.now()+_t*vt)})}reset(){V(this.info,be()),gt(ce)}}const xt=""+new URL("../image/logo-CPmPqqKk.png",import.meta.url).href,$e="ModuleLayout";class bt{constructor(){F(this,"addRouters",[]);F(this,"completeRouters",[]);F(this,"info",Q({showTagList:!0,showSidebar:!0,showSidebarLogo:!0,tagList:[],layoutMode:"",keyword:""}));const t=sessionStorage.getItem($e);try{t&&V(this.info,JSON.parse(t))}catch(e){console.log("ModuleLayout init fail >>",e)}J(this.info,()=>{sessionStorage.setItem($e,JSON.stringify(this.info))})}}const le="ModuleGoods";function ke(){return{id:0,name:"",price:0,specs:{size:"xs",width:"",height:""}}}class $t{constructor(){F(this,"info",Q(ke()));const t=sessionStorage.getItem(le);if(t){const e=Te(t);V(this.info,e)}}update(t){V(this.info,t),sessionStorage.setItem(le,JSON.stringify(this.info))}reset(){V(this.info,ke()),sessionStorage.removeItem(le)}}class kt{constructor(){F(this,"projectInfo",{title:"Vue Typescript Admin",name:"XXX后台管理平台",logo:xt,link:"https://github.com/Travis-hjs/vue-admin",email:"1141752341@qq.com"});F(this,"layout",new bt);F(this,"user",new yt);F(this,"_goods");console.log("%c ModuleStore init","color: #409EFF")}get goods(){return this._goods||(this._goods=new $t),this._goods}}const $=new kt,wt={key:0,class:"separator"},Et={key:1,href:"javascript:void(0)"},Lt={name:"BreadCrumb"},Ct=H({...Lt,setup(o){const t=Ee(),e=R([]);function n(){const i=t.matched.filter(s=>s.meta&&s.meta.title).map(s=>({path:s.path,meta:{...s.meta}}));e.value=i}return J(()=>t.path,function(){t.path.startsWith("/redirect/")||n()}),n(),(i,s)=>{const c=P("router-link");return m(),w(Pe,{name:"breadcrumb",tag:"div",class:"layout-breadcrumb f-vertical"},{default:S(()=>[(m(!0),v(q,null,Z(e.value,(u,r)=>(m(),v("span",{class:D(["layout-breadcrumb-item",{last:r===e.value.length-1}]),key:u.path},[r>0?(m(),v("i",wt,"/")):M("",!0),r===e.value.length-1?(m(),v("a",Et,B(u.meta.title),1)):(m(),w(c,{key:2,to:u.path},{default:S(()=>[Le(B(u.meta.title),1)]),_:2},1032,["to"]))],2))),128))]),_:1})}}});function St(o={}){const t=document,e=`__${Math.random().toString(36).slice(2,7)}`,n={box:`msg-box${e}`,hide:`hide${e}`,text:`msg-text${e}`,icon:`msg-icon${e}`},i=t.createElement("style");i.textContent=`
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
  `.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),t.head.appendChild(i);const s=[];function c(h){let g=10;for(let d=0;d<s.length;d++){const l=s[d];if(h&&h===l)break;g+=l.clientHeight+20}return g}function u(h){for(let g=0;g<s.length;g++)if(s[g]===h){s.splice(g,1);break}h.classList.add(n.hide),s.forEach(function(g){g.style.top=`${c(g)}px`})}function r(h,g="info",d){const l=t.createElement("div");l.className=`${n.box} ${g}`,l.style.top=`${c()}px`,l.style.zIndex=Ie.message,l.innerHTML=`
    <span class="${n.icon}"></span>
    <span class="${n.text}">${h}</span>
    `,s.push(l),t.body.appendChild(l);function f(){l.removeEventListener("animationend",f),setTimeout(u,d||o.duration||3e3,l)}l.addEventListener("animationend",f);function a(){getComputedStyle(l).opacity==="0"&&(l.removeEventListener("transitionend",a),l.remove())}l.addEventListener("transitionend",a)}return{show:r,info(h){r(h,"info")},success(h){r(h,"success")},warning(h){r(h,"warning")},error(h){r(h,"error")}}}function Tt(){const o=document,t=`__${Math.random().toString(36).slice(2,7)}`,e={mask:`dialog-mask${t}`,popup:`dialog-popup${t}`,title:`dialog-title${t}`,content:`dialog-content${t}`,footer:`dialog-footer${t}`,confirm:`confirm${t}`,fade:`fade${t}`,show:`show${t}`,hide:`hide${t}`},n=`
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
  `,i=o.createElement("style");i.textContent=n.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),o.head.appendChild(i);const s={x:"0vw",y:"0vh"};o.addEventListener("click",function(u){const{innerWidth:r,innerHeight:h}=window,g=r/2,d=h/2,l=u.clientY-d,f=u.clientX-g;s.x=`${f/r*100}vw`,s.y=`${l/h*100}vh`},!0);function c(u){const r=o.createElement("section");r.className=e.mask,r.style.zIndex=Ie.dialog,r.style.setProperty("--x",s.x),r.style.setProperty("--y",s.y),s.x="0vw",s.y="0vh";const h=u.cancelText?`<button class="the-btn">${u.cancelText}</button>`:"";r.innerHTML=`
    <div class="${e.popup}">
      <h2 class="${e.title}">${typeof u.title=="string"?u.title:"提示"}</h2>
      <div class="${e.content}">${u.content}</div>
      <div class="${e.footer}">
        ${h}
        <button class="${e.confirm} the-btn blue">${u.confirmText||"确认"}</button>
      </div>
    </div>
    `,o.body.appendChild(r),r.addEventListener("transitionend",function(d){d.target===r&&r.classList.contains(e.hide)&&r.remove()});function g(){r.classList.add(e.hide)}u.cancelText&&(r.querySelector(`.${e.footer} button`).onclick=function(){g(),u.cancel&&u.cancel()}),r.querySelector(`.${e.confirm}`).onclick=function(){g(),u.confirm&&u.confirm()}}return{show:c}}const Ie={get message(){return(fe()+20).toString()},get dialog(){return(fe()+10).toString()}},me=St({duration:3600}),It=Tt(),jn=It.show;function se(){const o=Ee(),t=Fe();function e(s){return JSON.stringify(s||{})}function n(s){return s.path===o.path&&e(s.query)===e(o.query)&&e(s.params)===e(o.params)}function i(s){if(n(s))return!0;if(s.children&&s.children.length)for(let c=0;c<s.children.length;c++){const u=s.children[c];if(i(u))return!0}return!1}return{route:o,router:t,isActive:n,hasActive:i}}let we=0;function Ot(){return we++,`menu-${we}`}function Rt(o=300){const t=`${o}ms height`;function e(r){r.style.transition=t,r.style.height="0px"}function n(r){r.scrollHeight!==0?r.style.height=`${r.scrollHeight}px`:r.style.height="",r.style.overflow="hidden"}function i(r){r.style.transition=r.style.height=""}function s(r){r.style.display="block",r.style.height=`${r.scrollHeight}px`,r.style.overflow="hidden"}function c(r){r.scrollHeight!==0&&(r.style.transition=t,r.style.height="0px")}function u(r){r.style.transition=r.style.height=""}return{onBeforeEnter:e,onEnter:n,onAfterEnter:i,onBeforeLeave:s,onLeave:c,onAfterLeave:u}}const Bt={class:"the-layout-tag-box"},At={class:"the-layout-tags"},Mt=["onClick"],Dt=["onClick"],Pt={name:"TagList"},Ft=H({...Pt,setup(o){const t=$.layout.info,{route:e,router:n,isActive:i}=se();function s(d){if(i(t.tagList[d])){const l=d>0?d-1:d+1,f=t.tagList[l];n.push({path:f.path,query:f.query,params:f.params})}t.tagList.splice(d,1)}J(()=>e.path,function(){t.tagList.some(l=>i(l))||t.tagList.push({name:e.name,path:e.path,query:e.query,params:e.params,meta:e.meta})},{immediate:!0});const c=Q({show:!1,left:""}),u={list:[{label:"关闭其他",id:1,click(){c.show=!1;const d=u.current;i(d)?t.tagList=[d]:n.push(d.path).then(()=>{t.tagList=[d]})},show:()=>t.tagList.length>1},{label:"在新标签打开",id:2,click(){c.show=!1;const d=location.href.split("#");window.open(`${d[0]}#${u.current.path}`,"_blank")}},{label:"复制当前信息",id:3,click(){c.show=!1;const d=u.current;Se(JSON.stringify(d,null,4),()=>me.success("复制成功！"))}}],current:void 0},r=R();function h(d,l){c.show=!0,u.current=l,Ne(()=>{let f=d.x;const a=parseFloat(getComputedStyle(r.value).width),_=document.body.clientWidth-a;f>_&&(f=_),c.left=`${f}px`})}function g(d){const l=d.target;c.show&&!r.value.contains(l)&&(c.show=!1)}return ne(function(){document.addEventListener("click",g)}),he(function(){document.removeEventListener("click",g)}),(d,l)=>{const f=P("router-link");return m(),v(q,null,[p("div",Bt,[C(y(ge),null,{default:S(()=>[p("div",At,[(m(!0),v(q,null,Z(y(t).tagList,(a,_)=>(m(),w(f,{class:D(["the-layout-tag",{"is-active":y(i)(a)}]),key:a.path+_,to:{path:a.path,query:a.query,params:a.params},onContextmenu:_e(b=>h(b,a),["prevent"])},{default:S(()=>[p("span",null,B(a.meta.title),1),p("i",{class:"close",onClick:_e(b=>s(_),["prevent","stop"])},"-",8,Mt)]),_:2},1032,["class","to","onContextmenu"]))),128))])]),_:1})]),j(p("div",{ref_key:"tagMenuRef",ref:r,class:"the-layout-tag-menu",style:z({left:c.left})},[(m(!0),v(q,null,Z(u.list,a=>j((m(),v("div",{key:a.id,class:"the-layout-tag-menu-item",onClick:_=>a.click()},B(a.label),9,Dt)),[[X,a.show?a.show():!0]])),128))],4),[[X,c.show]])],64)}}}),Nt={class:"the-layout-header"},qt={class:"the-layout-navbar flex"},zt={class:"user-info-box f-vertical"},Ht=["src"],Vt={class:"the-tag green mgr-10"},jt=p("span",null,"退出登录",-1),Wt={name:"HeaderBar"},Xt=H({...Wt,setup(o){const t=$.layout.info,e=$.user.info,{router:n}=se();function i(){t.showSidebar=!t.showSidebar}const s="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif";function c(){$.user.reset(),n.push("/login").then(()=>{t.tagList=[],Fn()})}return(u,r)=>{const h=P("svg-icon");return m(),v("div",Nt,[p("div",qt,[p("div",{class:D(["fvc hamburger",{"hamburger-actived":y(t).showSidebar}]),onClick:r[0]||(r[0]=g=>i())},[C(h,{name:"hamburger"})],2),C(Ct,{class:"f1"}),p("div",zt,[p("img",{class:"avatar",src:y(e).avatar||s},null,8,Ht),p("span",Vt,B(y(e).name||y(e).account||"用户未设置昵称"),1),p("button",{class:"logout f-vertical",onClick:r[1]||(r[1]=g=>c())},[C(h,{name:"exit"}),jt])])]),y(t).showTagList?(m(),w(Ft,{key:0})):M("",!0)])}}}),Yt={class:"f1"},Jt=p("i",{class:"the-layout-menu-arrow"},null,-1),Gt=["href"],Ut={class:"f1"},Kt={class:"f1"},Zt=["href"],Qt=H({__name:"MenuItem",props:{menu:{type:Object,required:!0},level:{type:Number,default:0}},setup(o){const t=o,{onBeforeEnter:e,onEnter:n,onAfterEnter:i,onBeforeLeave:s,onLeave:c,onAfterLeave:u}=Rt(),{isActive:r,hasActive:h}=se(),g=ve(function(){const _=r(t.menu);return{"the-layout-menu-title":!0,"is-current":h(t.menu)&&!_,"is-open":t.menu.isOpen,"is-active":_}}),d=ve(function(){return{"the-layout-menu-list":!0,"is-open":t.menu.isOpen}});function l(_){return{"the-layout-menu-link":!0,"is-active":r(_)}}function f(_){return!!(_.children&&_.children.length>0)}function a(){const _=t.menu;_.isOpen=!_.isOpen}return(_,b)=>{const L=P("svg-icon"),T=P("router-link"),O=P("MenuItem",!0);return m(),v("section",{class:"the-layout-menu",style:z({"--level":t.level})},[f(t.menu)?(m(),v("div",{key:0,class:D(g.value),onClick:b[0]||(b[0]=E=>a())},[t.menu.icon?(m(),w(L,{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):M("",!0),p("span",Yt,B(t.menu.title),1),Jt],2)):(m(),v(q,{key:1},[t.menu.link?(m(),v("a",{key:0,href:t.menu.link,class:D(g.value),target:"_blank"},[t.menu.icon?(m(),w(L,{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):M("",!0),p("span",Ut,B(t.menu.title),1)],10,Gt)):(m(),w(T,{key:1,to:t.menu.path,class:D(g.value)},{default:S(()=>[t.menu.icon?(m(),w(L,{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):M("",!0),p("span",Kt,B(t.menu.title),1)]),_:1},8,["to","class"]))],64)),f(t.menu)?(m(),w(W,{key:2,onBeforeEnter:y(e),onEnter:y(n),onAfterEnter:y(i),onBeforeLeave:y(s),onLeave:y(c),onAfterLeave:y(u)},{default:S(()=>[j(p("div",{class:D(d.value)},[(m(!0),v(q,null,Z(t.menu.children,E=>(m(),v(q,{key:E.menuId},[f(E)?(m(),w(O,{key:0,menu:E,level:t.level+1},null,8,["menu","level"])):(m(),v(q,{key:1},[E.link?(m(),v("a",{key:0,href:E.link,class:D(l(E)),target:"_blank"},[E.icon?(m(),w(L,{key:0,name:E.icon,class:"menu-icon"},null,8,["name"])):M("",!0),p("span",null,B(E.title),1)],10,Zt)):(m(),w(T,{key:1,to:E.path,class:D(l(E))},{default:S(()=>[E.icon?(m(),w(L,{key:0,name:E.icon,class:"menu-icon"},null,8,["name"])):M("",!0),p("span",null,B(E.title),1)]),_:2},1032,["to","class"]))],64))],64))),128))],2),[[X,t.menu.isOpen]])]),_:1},8,["onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])):M("",!0)],4)}}}),en={name:"Empty",props:{text:{type:String,default:"暂无数据"},size:{type:Number}}},tn="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20width='64'%20height='41'%20viewBox='0%200%2064%2041'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(0%201)'%20fill='none'%20fill-rule='evenodd'%3e%3cellipse%20fill='%23f5f5f5'%20cx='32'%20cy='33'%20rx='32'%20ry='7'%3e%3c/ellipse%3e%3cg%20fill-rule='nonzero'%20stroke='%23d9d9d9'%3e%3cpath%20d='M55%2012.76L44.854%201.258C44.367.474%2043.656%200%2042.907%200H21.093c-.749%200-1.46.474-1.947%201.257L9%2012.761V22h46v-9.24z'%3e%3c/path%3e%3cpath%20d='M41.613%2015.931c0-1.605.994-2.93%202.227-2.931H55v18.137C55%2033.26%2053.68%2035%2052.05%2035h-40.1C10.32%2035%209%2033.259%209%2031.137V13h11.16c1.233%200%202.227%201.323%202.227%202.928v.022c0%201.605%201.005%202.901%202.237%202.901h14.752c1.232%200%202.237-1.308%202.237-2.913v-.007z'%20fill='%23fafafa'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",nn={class:"empty"},on={class:"text"};function sn(o,t,e,n,i,s){return m(),v("div",nn,[p("img",{class:"icon",style:z({width:e.size?`${e.size}px`:void 0}),src:tn,alt:""},null,4),p("span",on,B(e.text),1)])}const rn=oe(en,[["render",sn],["__scopeId","data-v-6a496f0d"]]),an={name:"Menu"},cn=H({...an,props:{mergeOnlyOneChild:{type:Number,default:0}},setup(o){const t=o,e=$.layout.info;function n(l){const f=[];for(let a=0;a<l.length;a++){const _=l[a];if(_.meta&&_.meta.hidden)continue;const b={menuId:Ot(),path:_.path,isOpen:!1,title:_.meta.title,icon:_.meta.icon,link:_.meta.link};_.children&&_.children.length&&(b.children=n(_.children)),f.push(b)}return f}function i(l,f=1){const a=[],_=f<t.mergeOnlyOneChild,b=f+1;for(let L=0;L<l.length;L++){const T=l[L],O=T.children;O&&O.length>0?O.length===1?(a.push(O[0]),O[0].children&&O[0].children.length>0&&_&&(O[0].children=i(O[0].children,b))):(a.push(T),_&&(T.children=i(O,b))):a.push(T)}return a}function s(l){const f=e.keyword;return l.filter(a=>a.children&&(a.children=s(a.children),a.children.length>0)?(a.isOpen=!0,!0):!!a.title.includes(f))}let c=n($.layout.completeRouters);t.mergeOnlyOneChild&&(c=i(c));const u=R(c),{route:r,isActive:h}=se();function g(l){const f=[];function a(_,b){for(let L=0;L<_.length;L++){const T=_[L];if(h(T))return f.push(...b),!0;if(T.children&&T.children.length&&a(T.children,[...b,T]))return!0}return!1}return a(l,[]),f}function d(){g(u.value).forEach(f=>{f.isOpen=!0})}return J(()=>e.keyword,function(l){const f=JSON.parse(JSON.stringify(c));if(l){const a=s(f);u.value=a}else u.value=f,d()}),J(()=>r.path,function(){d()},{immediate:!0}),(l,f)=>(m(),v(q,null,[(m(!0),v(q,null,Z(u.value,(a,_)=>(m(),w(Qt,{menu:a,key:a.menuId,style:z(_?void 0:{"margin-top":"0"})},null,8,["menu","style"]))),128)),u.value.length?M("",!0):(m(),w(y(rn),{key:0,style:{height:"140px"},text:"没有匹配到任何菜单"}))],64))}}),ln={class:"the-layout-sidebar"},un={class:"the-layout-sidebar-content"},dn={key:0,class:"the-logo-box"},fn=["src"],mn=["title"],pn={key:1,style:{height:"var(--page-padding)"}},hn={class:"the-layout-search-box"},gn={class:"f1"},_n={class:"the-layout-sidebar-content padding-full"},vn={name:"Sidebar"},yn=H({...vn,setup(o){const t=$.layout.info,e=$.projectInfo;function n(){t.keyword=""}return(i,s)=>{const c=P("router-link"),u=P("svg-icon");return m(),v("div",ln,[p("section",un,[C(W,{name:"fade",mode:"out-in"},{default:S(()=>[y(t).showSidebarLogo?(m(),v("div",dn,[C(c,{class:"the-logo-link f-vertical",to:"/"},{default:S(()=>[p("img",{class:"the-logo",src:y(e).logo},null,8,fn),p("h1",{class:"the-logo-title ellipsis",title:y(e).title},B(y(e).title),9,mn)]),_:1})])):(m(),v("div",pn))]),_:1}),p("div",hn,[j(p("input",{"onUpdate:modelValue":s[0]||(s[0]=r=>y(t).keyword=r),type:"text",placeholder:"请输入关键字检索菜单"},null,512),[[qe,y(t).keyword]]),y(t).keyword?(m(),w(u,{key:0,class:"the-layout-search-icon",name:"circle-close",onClick:s[1]||(s[1]=r=>n())})):(m(),w(u,{key:1,class:"the-layout-search-icon",name:"search"}))])]),p("section",gn,[C(y(ge),null,{default:S(()=>[p("div",_n,[C(cn,{mergeOnlyOneChild:1})])]),_:1})])])}}}),xn={name:"Layout"},ue=H({...xn,setup(o){const t=$.layout.info;function e(h){let g=[];for(let d=0;d<h.length;d++){const l=h[d],f=l.children;f&&f.length>0&&(g=g.concat(e(f))),l.meta.keepAlive&&l.name&&g.push(l.name)}return g.filter(d=>d)}const n=e($.layout.completeRouters),i=R(),s=R(!1);let c;function u(){c.scrollTo({top:0,left:0,behavior:"smooth"})}function r(){s.value=c.scrollTop>document.documentElement.clientHeight}return ne(function(){c=i.value,c.addEventListener("scroll",r),r()}),(h,g)=>{const d=P("router-view");return m(),v("div",{class:D(["the-layout",y(t).layoutMode,{"has-tag-list":y(t).showTagList},{"collapsed-sidebar":!y(t).showSidebar}])},[C(Xt),C(yn),p("div",{class:"the-layout-content",ref_key:"contentBox",ref:i},[C(d,{class:"the-layout-page"},{default:S(({Component:l,route:f})=>[C(W,{name:"page-y",mode:"out-in"},{default:S(()=>[(m(),w(ze,{include:y(n)},[(m(),w(He(l),{key:f.fullPath}))],1032,["include"]))]),_:2},1024)]),_:1})],512),p("button",{class:D(["the-layout-to-top",{hidden:!s.value}]),title:"返回顶部",onClick:g[0]||(g[0]=l=>u())},null,2)],2)}}}),bn={name:"page-404",data(){return{project:$.projectInfo}}},ie=o=>(je("data-v-099818c9"),o=o(),We(),o),$n={class:"page-404 fvc"},kn=Ve('<div class="from-top-box f-vertical" data-v-099818c9><div class="mgr-30" data-v-099818c9><div class="point-icon mgb-50" data-v-099818c9></div><div class="point-icon" data-v-099818c9></div></div><div class="radius-icon" data-v-099818c9></div><div class="code-value" data-v-099818c9>404</div></div>',1),wn={class:"from-right-box mgb-40"},En=ie(()=>p("p",{class:"text"},"你访问的页面不存在，请确认页面路径是否正确。",-1)),Ln=ie(()=>p("p",{class:"text"},"我们只收集某些错误信息，然后需要你重新点击返回首页或返回上一页。",-1)),Cn={class:"pdt-40"},Sn={class:"from-bottom-box flex"},Tn=ie(()=>p("img",{class:"qrcode-box",src:"https://travis-hjs.github.io/images/reward-code.jpg",alt:"谢谢打赏！"},null,-1)),In={class:"pdt-20"},On=ie(()=>p("p",{class:"desc"},"如需技术支持，请扫码联系作者。",-1)),Rn={class:"desc"},Bn={class:"desc"};function An(o,t,e,n,i,s){const c=P("router-link");return m(),v("div",$n,[p("section",null,[kn,p("div",wn,[En,Ln,p("div",Cn,[C(c,{class:"go-back fvc",to:"/"},{default:S(()=>[Le("返回首页")]),_:1})])]),p("div",Sn,[Tn,p("div",In,[On,p("p",Rn,"邮箱地址："+B(i.project.email),1),p("p",Bn,"项目地址："+B(i.project.link),1)])])])])}const te=oe(bn,[["render",An],["__scopeId","data-v-099818c9"]]),Mn=[{path:"/",name:"index",redirect:"/home",component:ue,meta:{title:"首页",icon:"home"},children:[{path:"/home",meta:{title:"首页展示",icon:"guide"},component:()=>I(()=>import("./home-4Z4A3IFn.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)},{path:"/nested",name:"nested",redirect:"/nested/menu-1",meta:{title:"多级菜单嵌套",icon:"tree"},component:()=>I(()=>import("./nested-CTnWakyn.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/menu-1",name:"nested/menu-1",meta:{title:"el-plus 表格"},component:()=>I(()=>import("./menu-1-B4wK1N_p.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/nested/menu-2",name:"nested/menu-2",meta:{title:"el-plus 表单验证"},component:()=>I(()=>import("./menu-2-D864vWKK.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)},{path:"/nested/three-level",name:"nested/three-level",meta:{title:"三级菜单"},redirect:"/nested/three-level/menu-1",component:()=>I(()=>import("./nested-CTnWakyn.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/three-level/menu-1",name:"/nested/three-level/menu-1",meta:{title:"菜单 3-1"},component:()=>I(()=>import("./menu-1-B4wK1N_p.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/nested/three-level/menu-2",name:"/nested/three-level/menu-2",meta:{title:"菜单 3-2"},component:()=>I(()=>import("./menu-2-D864vWKK.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)}]},{path:"/nested/four-level",name:"nested/four-level",meta:{title:"三级菜单-2"},redirect:"/nested/four-level/menu-1",component:()=>I(()=>import("./nested-CTnWakyn.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/four-level/menu-1",name:"/nested/four-level/menu-1",meta:{title:"菜单 3-2-1"},component:()=>I(()=>import("./menu-1-B4wK1N_p.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)}]},{path:"/nested/menu-3",name:"nested/menu-3",meta:{title:"菜单 2-3"},component:()=>I(()=>import("./menu-3-zRKdEx26.js"),__vite__mapDeps([12,1,2,13]),import.meta.url)}]},{path:"/link-baidu",name:"link-baidu",component:te,meta:{title:"百度一下",icon:"baidu",link:"https://www.baidu.com"}},{path:"/menu-4",name:"menu-4",meta:{title:"换行菜单标题换行菜单标题",icon:"nested"},component:()=>I(()=>import("./menu-4-CQhDTjX9.js"),__vite__mapDeps([14,1,2,15]),import.meta.url)}]},{path:"/example",name:"example",component:ue,meta:{title:"示例页栏目",icon:"menu"},redirect:"/example/request",children:[{path:"/example/request",name:"example-request",meta:{title:"http-请求示例",keepAlive:!0},component:()=>I(()=>import("./request-D61MkjvU.js"),__vite__mapDeps([16,1,2,17,18]),import.meta.url)},{path:"/example/components",name:"example-components",meta:{title:"自定义组件"},component:()=>I(()=>import("./the-components-lKoYEsE4.js"),__vite__mapDeps([19,1,2,17,20]),import.meta.url)},{path:"/example/tsx",name:"example-tsx",meta:{title:"tsx-示例"},component:()=>I(()=>import("./example-BJZSCQpe.js"),__vite__mapDeps([21,1,2,22]),import.meta.url)},{path:"/example/no-found",name:"no-found",meta:{title:"404 页面",link:`${location.origin+location.pathname}#/is-error-path`},component:te}]},{path:"/icon",name:"icon",meta:{title:"图标栏目",auth:[0]},component:ue,redirect:"/icon/svg-icons",children:[{path:"/icon/svg-icons",name:"svg-icons",component:()=>I(()=>import("./index-CqFr2Acl.js"),__vite__mapDeps([23,1,2,24]),import.meta.url),meta:{title:"svg-图标",icon:"svg-icon"}}]},{path:"/"+$.projectInfo.link,name:"GitHub-Travis",component:te,meta:{title:"项目地址",icon:"github",link:$.projectInfo.link,auth:[0]}}],G={path:"/",query:{}},pe="redirect404";let N;function Oe(o){const t=[],e=$.user.info.type;for(let n=0;n<o.length;n++){const i=o[n],s=i.meta?i.meta.auth:void 0;(!s||s&&s.includes(e))&&(i.children&&i.children.length>0&&(i.children=Oe(i.children)),t.push(i))}return t}async function Dn(){return Oe(Mn)}function Pn(o,t){N=o,N.beforeEach(async function(e,n,i){if(ae.start(),$.user.info.token)if($.layout.addRouters.length>0)i();else{$.layout.addRouters=await Dn();for(let s=0;s<$.layout.addRouters.length;s++){const c=$.layout.addRouters[s];N.addRoute(c)}N.hasRoute(pe)||N.addRoute({...t[1],path:"/:catchAll(.*)",name:pe}),$.layout.completeRouters=t.concat($.layout.addRouters),i({...e,replace:!0})}else e.path==="/login"?i():(G.path=e.path,G.query=e.query,i({path:"/login"}),ae.done())}),N.afterEach(e=>{ae.done(),e.meta&&e.meta.title&&(document.title=e.meta.title)})}function Wn(){N.replace({path:G.path,query:G.query})}function Fn(){const o=$.layout.addRouters;for(let t=o.length-1;t>-1;t--){const e=o[t];e.name&&N.hasRoute(e.name)&&N.removeRoute(e.name)}G.path="/",G.query={},N.removeRoute(pe),$.layout.addRouters=$.layout.completeRouters=[]}const Re=[{path:"/login",name:"login",component:()=>I(()=>import("./login-zZgYNEEK.js"),__vite__mapDeps([25,1,2,17,3,4,26]),import.meta.url),meta:{hidden:!0,title:"请登录"}},{path:"/404",name:"page-404",component:te,meta:{hidden:!0,title:"不存在该页面"}},{path:"/401",name:"page-401",component:()=>I(()=>import("./page-401-BB1f4ghq.js"),__vite__mapDeps([27,1,2,28]),import.meta.url),meta:{hidden:!0,title:"暂无权限访问"}}],Be=Xe({history:Ye(),routes:Re});Pn(Be,Re);const Nn="1.1.3",de=[];function qn(o,t){let e;de.length>1?e=de.shift():(e=document.createElement("div"),e.className="ripple");const n=t.getBoundingClientRect(),i=t.getAttribute("color");let s=Math.max(n.width,n.height);s>200&&(s=200),e.style.height=e.style.width=s+"px",e.style.backgroundColor=i||"rgba(255, 255, 255, .45)",t.appendChild(e);const c=o.touches,u=c?c[0].clientY:o.clientY,r=c?c[0].clientX:o.clientX,h=u-n.top-e.offsetHeight/2,g=r-n.left-e.offsetWidth/2;e.style.top=h+"px",e.style.left=g+"px";function d(){e.removeEventListener("animationend",d),t.removeChild(e),de.push(e)}e.addEventListener("animationend",d)}window.version=Nn;const U=Je(Ke);U.directive("copy",{mounted(o,t){o.addEventListener("click",function(){Se(t.value,()=>me.success("复制成功"),e=>me.success(e))})}});U.directive("ripple",{mounted(o){const t=mt()?"touchstart":"mousedown";o.setAttribute("ripple",""),o.addEventListener(t,function(e){qn(e,o)})}});U.component("svg-icon",nt);U.component("base-dialog",lt);U.use(Be);U.mount("#app");export{oe as _,V as a,jn as b,Se as c,ge as d,ft as e,I as f,Vn as i,Te as j,me as m,Wn as o,$ as s};
