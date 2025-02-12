function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./home-D4G0-cxt.js","./vendor-Bmv9FcY2.js","../css/vendor-BUMXTAWU.css","./index.vue_vue_type_style_index_0_lang-x45RB61w.js","../css/index-CBMF1Z1B.css","../css/home-NLRWRYAt.css","./nested-ATMbhIfw.js","../css/nested-DBbt7j1J.css","./menu-1-CHSu2KKe.js","../css/menu-1-PIQFC6DV.css","./menu-2-vqQMTQaQ.js","../css/menu-2-DwSbhe9C.css","./menu-3-CdbiZIo1.js","../css/menu-3-C1x6D_tQ.css","./menu-4-BKw7udv6.js","../css/menu-4-B_QkhR3M.css","./request-8WNEb18S.js","./common-BCCdtHRN.js","../css/request-BjYaB_Vm.css","./the-components-BU7gYW68.js","../css/the-components-IJgq8Frg.css","./example-CadG9ylp.js","../css/example-CJnj_JQw.css","./index-CUDNes07.js","../css/index-CJ5TRbCj.css","./login-BlSBB_v1.js","../css/login-C2zo-VT6.css","./page-401-JWyxBRLF.js","../css/page-401-hNHv4Vr6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var Be=Object.defineProperty;var Ne=(o,n,e)=>n in o?Be(o,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[n]=e;var B=(o,n,e)=>(Ne(o,typeof n!="symbol"?n+"":n,e),e);import{r as F,c as L,o as g,d as V,a as ne,b as _,e as v,n as D,f as T,w as Q,g as U,h as me,i as S,j as C,k as j,l as A,u as E,T as J,m as N,p as ee,t as O,v as X,q as De,s as P,x as pe,F as H,y as Z,z as we,A as Me,B as Fe,C as ge,D as Pe,K as Ve,E as qe,G as ze,H as He,I as We,N as ae,J as je,L as Je,M as Xe}from"./vendor-Bmv9FcY2.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&t(f)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();const Ye={name:"App"},ke=(o,n)=>{const e=o.__vccOpts||o;for(const[t,i]of n)e[t]=i;return e};function Ue(o,n,e,t,i,a){const f=F("router-view");return g(),L(f)}const Ge=ke(Ye,[["render",Ue]]),Ke=["xlink:href"],Ze={name:"SvgIcon"},Qe=V({...Ze,props:{name:{type:String,required:!0,default:""},className:{type:String,default:""}},setup(o){const n=o,e=ne(()=>`#icon-${n.name}`),t=ne(function(){return n.className?"svg-icon "+n.className:"svg-icon"});return(i,a)=>(g(),_("svg",{class:D(t.value),"aria-hidden":"true"},[v("use",{"xlink:href":e.value},null,8,Ke)],2))}});let ye=1e3;function de(){const o=ye;return ye++,o}const et={class:"base-dialog-title f-between f-vertical"},tt={key:0,class:"base-dialog-text"},nt={class:"base-dialog-body"},ot={key:0,class:"base-dialog-footer"},it={name:"base-dialog"},st=V({...it,props:{title:{type:String,default:"提示"},show:{type:Boolean,default:!1},width:{type:String,default:"50%"},closeByMask:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1}},emits:["close","update:show","afterLeave","afterEnd"],setup(o,{emit:n}){const e=o,t=n,i=de(),a=T(),f=T(),m=T(),l=T(!1);Q(()=>e.show,function(s){s?setTimeout(()=>{l.value=!0},0):l.value=!1},{immediate:!0});function h(s){if(!e.show||l.value||a.value.contains(s.target))return;const{clientWidth:y,clientHeight:p}=a.value,I=y/2,w=p/2,q=s.clientY-w,ie=`${(s.clientX-I)/y*100}vw`,b=`${q/p*100}vh`;d(ie,b)}function d(s,y){const p=m.value;p&&(p.style.setProperty("--content-x",s),p.style.setProperty("--content-y",y))}function u(s){(s&&s.target===a.value&&e.closeByMask||s&&s.target===f.value)&&(t("update:show",!1),t("close"))}function r(){l.value&&d("0","0"),t("afterLeave")}function c(){t("afterEnd")}return U(function(){document.addEventListener("click",h)}),me(function(){document.removeEventListener("click",h)}),(s,y)=>(g(),_("section",null,[(g(),L(De,{to:"body",disabled:!e.appendToBody},[S(J,{name:"fade"},{default:C(()=>[j(v("div",{ref_key:"el",ref:a,class:"base-dialog fvc",style:A({zIndex:E(i)}),onClick:u},[S(J,{name:"dialog-move",onAfterLeave:r,onAfterEnter:c},{default:C(()=>[j(v("div",{ref_key:"contentBox",ref:m,class:"base-dialog-content flex",style:A({width:e.width})},[v("div",et,[s.$slots.header?N("",!0):(g(),_("h2",tt,O(o.title),1)),ee(s.$slots,"header"),v("i",{class:"base-dialog-icon",ref_key:"closeBtn",ref:f,onClick:u},null,512)]),v("div",nt,[ee(s.$slots,"default")]),s.$slots.footer?(g(),_("div",ot,[ee(s.$slots,"footer")])):N("",!0)],4),[[X,l.value]])]),_:3})],4),[[X,e.show]])]),_:3})],8,["disabled"]))]))}}),at="modulepreload",rt=function(o,n){return new URL(o,n).href},ve={},k=function(n,e,t){let i=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),f=document.querySelector("meta[property=csp-nonce]"),m=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));i=Promise.all(e.map(l=>{if(l=rt(l,t),l in ve)return;ve[l]=!0;const h=l.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!t)for(let c=a.length-1;c>=0;c--){const s=a[c];if(s.href===l&&(!h||s.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${d}`))return;const r=document.createElement("link");if(r.rel=h?"stylesheet":at,h||(r.as="script",r.crossOrigin=""),r.href=l,m&&r.setAttribute("nonce",m),document.head.appendChild(r),h)return new Promise((c,s)=>{r.addEventListener("load",c),r.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${l}`)))})}))}return i.then(()=>n()).catch(a=>{const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=a,window.dispatchEvent(f),!f.defaultPrevented)throw a})};function lt(o){return Object.prototype.toString.call(o).match(/\[object (\S*)\]/)[1].toLocaleLowerCase()}function Ee(o,n){return lt(o)===n}function z(o,n){for(const e in n)if(Object.prototype.hasOwnProperty.call(o,e)){const t=n[e],i=o[e];Ee(i,"object")?z(i,t):o[e]=t}}function Se(o,n,e){if(o=o.replace(/(^\s*)|(\s*$)/g,""),!o){e&&e("复制的内容不能为空！");return}const t="the-clipboard";let i=document.getElementById(t);i||(i=document.createElement("textarea"),i.id=t,i.readOnly=!0,i.style.cssText="font-size: 15px; position: fixed; top: -1000%; left: -1000%;",document.body.appendChild(i)),i.value=o,i.select(),i.setSelectionRange(0,i.value.length),document.execCommand("copy")?n&&n():e&&e("复制失败")}function Sn(o,n,e){let t=o.toString().trim();if(t.length===0)return"";const i="";return t=t.replace(/[^0-9]+/ig,""),i+t}function Le(o,n={}){let e=n;if(Ee(o,"string"))try{e=JSON.parse(o)}catch(t){console.warn("JSON格式化对象错误 >>",t)}return e}function ct(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)}function ut(o){const e=`; ${document.cookie}`.split(`; ${o}=`);return e.length===2?e.pop().split(";").shift():""}function dt(o,n,e){let t=`${o}=${n}; path=/`;e&&(e.expires&&(t+=`; expires=${e.expires.toUTCString()}`),e.domain&&(t+=`; domain=${e.domain}`)),document.cookie=t}function ft(o,n){const e="expires=Thu, 01 Jan 1970 00:00:00 GMT";document.cookie=`${o}=; path=/; ${e}`}const re="ModuleUser";function _e(){return{id:"",name:"",type:"",token:"",avatar:"",account:"",password:""}}const ht=3,mt=24*60*60*1e3;class pt{constructor(){B(this,"info",P(_e()));this.init()}init(){const n=ut(re);if(n){const e=Le(n);z(this.info,e)}}update(n){z(this.info,n),dt(re,JSON.stringify(this.info),{expires:new Date(Date.now()+ht*mt)})}reset(){z(this.info,_e()),ft(re)}}const gt=""+new URL("../image/logo-CPmPqqKk.png",import.meta.url).href,be="ModuleLayout";class yt{constructor(){B(this,"addRouters",[]);B(this,"completeRouters",[]);B(this,"info",P({showTagsView:!0,showSidebar:!0,showSidebarLogo:!0,historyViews:[],layoutMode:""}));B(this,"menuSizeInfo",P({titleHeight:0,itemHeight:0}));this.init(),Q(this.info,this.saveInfo.bind(this))}init(){const n=sessionStorage.getItem(be);try{n&&z(this.info,JSON.parse(n))}catch(e){console.log("ModuleLayout init fail >>",e)}}saveInfo(){sessionStorage.setItem(be,JSON.stringify(this.info))}}const le="ModuleGoods";function xe(){return{id:0,name:"",price:0,specs:{size:"xs",width:"",height:""}}}class vt{constructor(){B(this,"info",P(xe()));const n=sessionStorage.getItem(le);if(n){const e=Le(n);z(this.info,e)}}update(n){z(this.info,n),sessionStorage.setItem(le,JSON.stringify(this.info))}reset(){z(this.info,xe()),sessionStorage.removeItem(le)}}class _t{constructor(){B(this,"projectInfo",{title:"Vue Typescript Admin",name:"XXX后台管理平台",logo:gt,link:"https://github.com/Travis-hjs/vue-admin",email:"1141752341@qq.com"});B(this,"layout",new yt);B(this,"user",new pt);B(this,"_goods");console.log("%c ModuleStore init","color: #409EFF")}get goods(){return this._goods||(this._goods=new vt),this._goods}}const $=new _t,bt={key:0,class:"separator"},xt={key:1,href:"javascript:void(0)"},$t={name:"BreadCrumb"},wt=V({...$t,setup(o){const n=pe(),e=T([]);function t(){const i=n.matched.filter(a=>a.meta&&a.meta.title).map(a=>({path:a.path,meta:{...a.meta}}));e.value=i}return Q(()=>n.path,function(){n.path.startsWith("/redirect/")||t()}),t(),(i,a)=>{const f=F("router-link");return g(),L(Me,{name:"breadcrumb",tag:"div",class:"layout-breadcrumb f-vertical"},{default:C(()=>[(g(!0),_(H,null,Z(e.value,(m,l)=>(g(),_("span",{class:D(["layout-breadcrumb-item",{last:l===e.value.length-1}]),key:m.path},[l>0?(g(),_("i",bt,"/")):N("",!0),l===e.value.length-1?(g(),_("a",xt,O(m.meta.title),1)):(g(),L(f,{key:2,to:m.path},{default:C(()=>[we(O(m.meta.title),1)]),_:2},1032,["to"]))],2))),128))]),_:1})}}}),$e=function(){const o=document.createElement("div");o.style.width="100px",o.style.height="100px",o.style.overflow="scroll",document.body.appendChild(o);const n=o.offsetWidth-o.clientWidth;return o.remove(),n}(),kt={name:"Scrollbar"},Ce=V({...kt,props:{thumbColor:{type:String,default:"rgba(147, 147, 153, 0.45)"},thumbSize:{type:Number,default:8},clickUpdateDelay:{type:Number,default:0}},setup(o,{expose:n}){const e=o,t=T(),i=T(),a=T(),f=T(),m=P({height:"",width:""}),l=P({x:{width:"",height:"",left:"",bottom:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor},y:{width:"",height:"",top:"",right:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor}}),h=T(!1);function d(){const b=t.value.parentElement;b.style.overflow="hidden";const x=getComputedStyle(b);m.width=`calc(100% + ${$e}px + ${x.borderLeftWidth} + ${x.borderRightWidth})`,m.height=`calc(100% + ${$e}px + ${x.borderTopWidth} + ${x.borderBottomWidth})`}function u(){l.y.right=l.y.top="0px",l.y.width=e.thumbSize+"px",l.x.bottom=l.x.left="0px",l.x.height=e.thumbSize+"px",l.x.borderRadius=l.y.borderRadius=`${e.thumbSize/2}px`}function r(){const b=i.value;if(b){let x=b.clientHeight/b.scrollHeight*100;x>=100&&(x=0),l.y.height=x+"%",l.y.transform=`translate3d(0, ${b.scrollTop/b.scrollHeight*b.clientHeight}px, 0)`;let R=b.clientWidth/b.scrollWidth*100;R>=100&&(R=0),l.x.width=R+"%",l.x.transform=`translate3d(${b.scrollLeft/b.scrollWidth*b.clientWidth}px, 0, 0)`}}let c=!1,s=!1,y=0,p;function I(b){const x=a.value,R=f.value,W=b.target;x.contains(W)&&(c=!0,s=!1,y=b.clientX-x.getBoundingClientRect().left),R.contains(W)&&(c=!0,s=!0,y=b.clientY-R.getBoundingClientRect().top)}function w(b){if(!c)return;const x=i.value;if(s){const R=x.getBoundingClientRect().top,W=x.clientHeight;let se=b.clientY-R;x.scrollTop=(se-y)/W*x.scrollHeight}else{const R=x.getBoundingClientRect().left,W=x.clientWidth;let se=b.clientX-R;x.scrollLeft=(se-y)/W*x.scrollWidth}}function q(b){c=!1,t.value.contains(b.target)?e.clickUpdateDelay>0&&(p&&clearTimeout(p),p=setTimeout(r,e.clickUpdateDelay)):h.value=!1}function K(){h.value=!0,r()}function ie(){c||(h.value=!1)}return U(function(){d(),u(),i.value&&i.value.addEventListener("scroll",r),document.addEventListener("mousedown",I),document.addEventListener("mousemove",w),document.addEventListener("mouseup",q)}),me(function(){i.value&&i.value.removeEventListener("scroll",r),document.removeEventListener("mousedown",I),document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",q),p&&clearTimeout(p)}),n({updateWrapStyle:d,updateThumbStyle:r}),(b,x)=>(g(),_("div",{class:"the-scrollbar",ref_key:"el",ref:t,onMouseenter:x[0]||(x[0]=R=>K()),onMouseleave:x[1]||(x[1]=R=>ie())},[v("div",{ref_key:"wrap",ref:i,class:"the-scrollbar-wrap",style:A(m)},[ee(b.$slots,"default")],4),S(J,{name:"fade"},{default:C(()=>[j(v("button",{class:"the-scrollbar-thumb",ref_key:"thumbY",ref:f,title:"滚动条-摁住拖拽Y轴",style:A(l.y)},null,4),[[X,h.value]])]),_:1}),S(J,{name:"fade"},{default:C(()=>[j(v("button",{class:"the-scrollbar-thumb",ref_key:"thumbX",ref:a,title:"滚动条-摁住拖拽X轴",style:A(l.x)},null,4),[[X,h.value]])]),_:1})],544))}});function Et(o={}){const n=document,e=`__${Math.random().toString(36).slice(2,7)}`,t={box:`msg-box${e}`,hide:`hide${e}`,text:`msg-text${e}`,icon:`msg-icon${e}`},i=n.createElement("style");i.textContent=`
  .${t.box}, .${t.icon}, .${t.text} {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .${t.box} {
    position: fixed;
    top: 0;
    left: 50%;
    display: flex;
    padding: 12px 16px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12);
    white-space: nowrap;
    animation: ${t.box}-move .4s;
    transition: .4s all;
    transform: translate3d(-50%, 0%, 0);
    opacity: 1;
    overflow: hidden;
  }
  .${t.box}::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
  }
  @keyframes ${t.box}-move {
    0% {
      opacity: 0;
      transform: translate3d(-50%, -100%, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(-50%, 0%, 0);
    }
  }
  .${t.box}.${t.hide} {
    opacity: 0;
    /* transform: translate3d(-50%, -100%, 0); */
    transform: translate3d(-50%, -100%, 0) scale(0);
  }
  .${t.icon} {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 6px;
    position: relative;
  }
  .${t.text} {
    font-size: 14px;
    line-height: 18px;
    color: #555;
  }
  .${t.icon}::after,
  .${t.icon}::before {
    position: absolute;
    content: "";
    background-color: #fff;
  }
  .${t.box}.info .${t.icon}, .${t.box}.info::after {
    background-color: #1890ff;
  }
  .${t.box}.success .${t.icon}, .${t.box}.success::after {
    background-color: #52c41a;
  }
  .${t.box}.warning .${t.icon}, .${t.box}.warning::after {
    background-color: #faad14;
  }
  .${t.box}.error .${t.icon}, .${t.box}.error::after {
    background-color: #ff4d4f;
  }
  .${t.box}.info .${t.icon}::after,
  .${t.box}.warning .${t.icon}::after {
    top: 15%;
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
  }
  .${t.box}.info .${t.icon}::before,
  .${t.box}.warning .${t.icon}::before {
    top: calc(15% + 4px);
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 40%;
  }
  .${t.box}.error .${t.icon}::after, 
  .${t.box}.error .${t.icon}::before {
    top: 20%;
    left: 50%;
    width: 2px;
    height: 60%;
    margin-left: -1px;
    border-radius: 1px;
  }
  .${t.box}.error .${t.icon}::after {
    transform: rotate(-45deg);
  }
  .${t.box}.error .${t.icon}::before {
    transform: rotate(45deg);
  }
  .${t.box}.success .${t.icon}::after {
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
  `.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),n.head.appendChild(i);const a=[];function f(h){let d=10;for(let u=0;u<a.length;u++){const r=a[u];if(h&&h===r)break;d+=r.clientHeight+20}return d}function m(h){for(let d=0;d<a.length;d++)if(a[d]===h){a.splice(d,1);break}h.classList.add(t.hide),a.forEach(function(d){d.style.top=`${f(d)}px`})}function l(h,d="info",u){const r=n.createElement("div");r.className=`${t.box} ${d}`,r.style.top=`${f()}px`,r.style.zIndex=Te.message,r.innerHTML=`
    <span class="${t.icon}"></span>
    <span class="${t.text}">${h}</span>
    `,a.push(r),n.body.appendChild(r);function c(){r.removeEventListener("animationend",c),setTimeout(m,u||o.duration||3e3,r)}r.addEventListener("animationend",c);function s(){getComputedStyle(r).opacity==="0"&&(r.removeEventListener("transitionend",s),r.remove())}r.addEventListener("transitionend",s)}return{show:l,info(h){l(h,"info")},success(h){l(h,"success")},warning(h){l(h,"warning")},error(h){l(h,"error")}}}function St(){const o=document,n=`__${Math.random().toString(36).slice(2,7)}`,e={mask:`dialog-mask${n}`,popup:`dialog-popup${n}`,title:`dialog-title${n}`,content:`dialog-content${n}`,footer:`dialog-footer${n}`,confirm:`confirm${n}`,fade:`fade${n}`,show:`show${n}`,hide:`hide${n}`},t=`
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
  `,i=o.createElement("style");i.textContent=t.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),o.head.appendChild(i);const a={x:"0vw",y:"0vh"};o.addEventListener("click",function(m){const{innerWidth:l,innerHeight:h}=window,d=l/2,u=h/2,r=m.clientY-u,c=m.clientX-d;a.x=`${c/l*100}vw`,a.y=`${r/h*100}vh`},!0);function f(m){const l=o.createElement("section");l.className=e.mask,l.style.zIndex=Te.dialog,l.style.setProperty("--x",a.x),l.style.setProperty("--y",a.y),a.x="0vw",a.y="0vh";const h=m.cancelText?`<button class="the-btn">${m.cancelText}</button>`:"";l.innerHTML=`
    <div class="${e.popup}">
      <h2 class="${e.title}">${typeof m.title=="string"?m.title:"提示"}</h2>
      <div class="${e.content}">${m.content}</div>
      <div class="${e.footer}">
        ${h}
        <button class="${e.confirm} the-btn blue">${m.confirmText||"确认"}</button>
      </div>
    </div>
    `,o.body.appendChild(l),l.addEventListener("transitionend",function(u){u.target===l&&l.classList.contains(e.hide)&&l.remove()});function d(){l.classList.add(e.hide)}m.cancelText&&(l.querySelector(`.${e.footer} button`).onclick=function(){d(),m.cancel&&m.cancel()}),l.querySelector(`.${e.confirm}`).onclick=function(){d(),m.confirm&&m.confirm()}}return{show:f}}const Te={get message(){return(de()+20).toString()},get dialog(){return(de()+10).toString()}},fe=Et({duration:3600}),Lt=St(),Ln=Lt.show,Ct={class:"the-layout-header"},Tt={class:"the-layout-navbar flex"},Ot={class:"user-info-box f-vertical"},It=["src"],Rt={class:"the-tag green mgr-10"},At=v("span",null,"退出登录",-1),Bt={key:0,class:"the-layout-tag-box"},Nt={class:"the-layout-tags"},Dt=["onClick"],Mt=["onClick"],Ft={name:"HeaderBar"},Pt=V({...Ft,setup(o){const n=pe(),e=Fe(),t=$.layout.info,i=$.user.info;function a(){t.showSidebar=!t.showSidebar}const f="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif";function m(){$.user.reset(),e.push("/login").then(()=>{t.historyViews=[],xn()})}function l(s){return s.path===n.path&&JSON.stringify(s.query)===JSON.stringify(n.query)&&JSON.stringify(s.params)===JSON.stringify(n.params)}function h(s){if(l(t.historyViews[s])){const y=s>0?s-1:s+1,p=t.historyViews[y];e.push({path:p.path,query:p.query,params:p.params})}t.historyViews.splice(s,1)}Q(()=>n.path,function(){t.historyViews.some(y=>l(y))||t.historyViews.push({name:n.name,path:n.path,query:n.query,params:n.params,meta:n.meta})},{immediate:!0});const d=P({show:!1,list:[{label:"关闭其他",id:1,click(){d.show=!1;const s=d.current;l(s)?t.historyViews=[s]:e.push(s.path).then(()=>{t.historyViews=[s]})},show:()=>t.historyViews.length>1},{label:"在新标签打开",id:2,click(){d.show=!1;const s=location.href.split("#");window.open(`${s[0]}#${d.current.path}`,"_blank")}},{label:"复制当前信息",id:3,click(){d.show=!1;const s=d.current;Se(JSON.stringify(s,null,4),()=>fe.success("复制成功！"))}}],left:"",current:void 0}),u=T();function r(s,y){d.show=!0,d.current=y,Pe(()=>{let p=s.x;const I=parseFloat(getComputedStyle(u.value).width),w=document.body.clientWidth-I;p>w&&(p=w),d.left=`${p}px`})}function c(s){const y=s.target;d.show&&!u.value.contains(y)&&(d.show=!1)}return U(function(){document.addEventListener("click",c)}),me(function(){document.removeEventListener("click",c)}),(s,y)=>{const p=F("svg-icon"),I=F("router-link");return g(),_("div",Ct,[v("div",Tt,[v("div",{class:D(["fvc hamburger",{"hamburger-actived":E(t).showSidebar}]),onClick:y[0]||(y[0]=w=>a())},[S(p,{name:"hamburger"})],2),S(wt,{class:"f1"}),v("div",Ot,[v("img",{class:"avatar",src:E(i).avatar||f},null,8,It),v("span",Rt,O(E(i).name||E(i).account||"用户未设置昵称"),1),v("button",{class:"logout f-vertical",onClick:y[1]||(y[1]=w=>m())},[S(p,{name:"exit"}),At])])]),E(t).showTagsView?(g(),_("div",Bt,[S(E(Ce),null,{default:C(()=>[v("div",Nt,[(g(!0),_(H,null,Z(E(t).historyViews,(w,q)=>(g(),L(I,{class:D(["the-layout-tag",{"the-layout-tag-on":l(w)}]),key:w.path+q,to:{path:w.path,query:w.query,params:w.params},onContextmenu:ge(K=>r(K,w),["prevent"])},{default:C(()=>[v("span",null,O(w.meta.title),1),v("i",{class:"close",onClick:ge(K=>h(q),["prevent","stop"])},"-",8,Dt)]),_:2},1032,["class","to","onContextmenu"]))),128))])]),_:1})])):N("",!0),j(v("div",{ref_key:"tagMenuRef",ref:u,class:"the-layout-tag-menu",style:A({left:d.left})},[(g(!0),_(H,null,Z(d.list,w=>j((g(),_("div",{key:w.id,class:"the-layout-tag-menu-item",onClick:q=>w.click()},O(w.label),9,Mt)),[[X,w.show?w.show():!0]])),128))],4),[[X,d.show]])])}}}),Vt={class:"f1"},qt=v("i",{class:"the-layout-menu-arrow"},null,-1),zt=["href"],Ht={class:"f1"},Wt={class:"f1"},jt=["href"],Jt={name:"MenuItem"},Xt=V({...Jt,props:{level:{type:Number,default:1},info:{type:Object,default:()=>({title:"-"})}},setup(o){const n=o;function e(u){return!!(u.children&&u.children.length>0)}function t(u){let r=0;const c=u.children,s=$.layout.menuSizeInfo;return u.isOpen&&c&&c.length>0&&c.forEach(y=>{const p=e(y)?s.titleHeight:s.itemHeight;r+=p,r+=t(y)}),r}const i=ne(function(){const u=n.info;return{"the-layout-menu-title f-vertical":!0,"the-layout-menu-selected":u.isActive,"the-layout-menu-open":u.isOpen,"the-layout-menu-actived":u.hasActive,"the-layout-menu-actived-title":u.hasActive&&n.level===1}});function a(u){return{"the-layout-menu-item f-vertical":!0,"the-layout-menu-selected":u.isActive}}const f=P({paddingLeft:""}),m=P({paddingLeft:""}),l=ne(function(){return{height:t(n.info)+"px"}}),h=T();function d(){n.info.isOpen=!n.info.isOpen}return U(function(){const u=h.value;if(n.level>=1){const r=getComputedStyle(u.children[0]),c=parseFloat(r.paddingLeft);if(isNaN(c))return;f.paddingLeft=c*n.level+"px",m.paddingLeft=c*(n.level+1)+"px"}}),(u,r)=>{const c=F("svg-icon"),s=F("router-link"),y=F("MenuItem",!0);return g(),_("div",{class:"the-layout-menu",ref_key:"menuBox",ref:h},[e(o.info)?(g(),_("button",{key:0,class:D(i.value),style:A(f),onClick:r[0]||(r[0]=p=>d())},[o.info.icon?(g(),L(c,{key:0,name:o.info.icon},null,8,["name"])):N("",!0),v("span",Vt,O(o.info.title),1),qt],6)):(g(),_(H,{key:1},[o.info.link?(g(),_("a",{key:0,class:D(i.value),style:A(f),href:o.info.link,target:"_blank"},[o.info.icon?(g(),L(c,{key:0,name:o.info.icon},null,8,["name"])):N("",!0),v("span",Ht,O(o.info.title),1)],14,zt)):(g(),L(s,{key:1,class:D(i.value),style:A(f),to:o.info.path},{default:C(()=>[o.info.icon?(g(),L(c,{key:0,name:o.info.icon},null,8,["name"])):N("",!0),v("span",Wt,O(o.info.title),1)]),_:1},8,["class","style","to"]))],64)),o.info.children&&o.info.children.length>0?(g(),_("div",{key:2,class:"the-layout-menu-list",style:A(l.value)},[(g(!0),_(H,null,Z(o.info.children,p=>(g(),_("div",{key:p.key},[e(p)?(g(),L(y,{key:0,info:p,level:o.level+1},null,8,["info","level"])):(g(),_(H,{key:1},[p.link?(g(),_("a",{key:0,class:D(a(p)),style:A(m),href:p.link,target:"_blank"},[p.icon?(g(),L(c,{key:0,name:p.icon},null,8,["name"])):N("",!0),v("span",null,O(p.title),1)],14,jt)):(g(),L(s,{key:1,class:D(a(p)),style:A(m),to:p.path},{default:C(()=>[p.icon?(g(),L(c,{key:0,name:p.icon},null,8,["name"])):N("",!0),v("span",null,O(p.title),1)]),_:2},1032,["class","style","to"]))],64))]))),128))],4)):N("",!0)],512)}}}),Yt={name:"Menu"},Ut=V({...Yt,props:{mergeOnlyOneChild:{type:Boolean,default:!1},onlyMergeFirst:{type:Boolean,default:!1}},setup(o){const n=o,e=pe();function t(u,r){u=JSON.parse(JSON.stringify(u));const c=[];for(let s=0;s<u.length;s++){const y=u[s],p={key:r?`${r}-${s}`:s.toString(),isOpen:!1,isActive:!1,hasActive:!1,children:[],path:y.path,...y.meta};if(!p.hidden){c.push(p);const I=y.children;I&&I.length>0&&(p.children=t(I,p.key))}}return c}function i(u){u=JSON.parse(JSON.stringify(u));const r=[];for(let c=0;c<u.length;c++){const s=u[c],y=s.children;y&&y.length>0?y.length===1?(y[0].key=s.key,r.push(y[0]),y[0].children&&y[0].children.length>0&&!n.onlyMergeFirst&&(y[0].children=i(y[0].children))):(r.push(s),n.onlyMergeFirst||(s.children=i(y))):r.push(s)}return r}let a=t(Re($.layout.completeRouters));n.mergeOnlyOneChild&&(a=i(a));const f=T(a);let m=[];function l(u){for(let r=0;r<u.length;r++){const c=u[r];c.hasActive=!1,c.isOpen&&(!c.children||c.children&&c.children.length===0)&&(c.isOpen=!1),c.isActive=c.path===e.path,c.isActive&&(m=c.key.split("-").map(s=>Number(s))),c.children&&c.children.length>0&&l(c.children)}}function h(u,r=0){const c=m[r],s=u[c];s.hasActive=s.isOpen=!0,r<m.length-1&&h(s.children,r+1)}function d(){m=[],l(f.value),m.length>0&&h(f.value)}return Q(()=>e.path,function(){d()}),U(function(){d();function u(r,c=0){const s=document.querySelector(r);return s?parseFloat(getComputedStyle(s).height):(console.log("%c 找不到节点 >>","color: #ff4949",r,"已使用默认值 >>",c),c)}$.layout.menuSizeInfo.titleHeight=u(".the-layout-menu .the-layout-menu-title",50),$.layout.menuSizeInfo.itemHeight=u(".the-layout-menu .the-layout-menu-item",44)}),(u,r)=>(g(!0),_(H,null,Z(f.value,c=>(g(),L(Xt,{key:c.key,info:c},null,8,["info"]))),128))}}),Gt={class:"the-layout-sidebar"},Kt={key:0,class:"the-logo-box"},Zt=["src"],Qt=["title"],en={name:"Sidebar"},tn=V({...en,setup(o){const n=$.layout.info,e=$.projectInfo;return(t,i)=>{const a=F("router-link");return g(),_("div",Gt,[S(E(Ce),{clickUpdateDelay:300,thumbSize:10},{default:C(()=>[S(J,{name:"fade"},{default:C(()=>[E(n).showSidebarLogo?(g(),_("div",Kt,[S(a,{class:"the-logo-link f-vertical",to:"/"},{default:C(()=>[v("img",{class:"the-logo",src:E(e).logo},null,8,Zt),v("h1",{class:"the-logo-title ellipsis",title:E(e).title},O(E(e).title),9,Qt)]),_:1})])):N("",!0)]),_:1}),S(Ut,{mergeOnlyOneChild:!0,onlyMergeFirst:!0})]),_:1})])}}}),nn={name:"Layout"},ce=V({...nn,setup(o){const n=$.layout.info;function e(h){let d=[];for(let u=0;u<h.length;u++){const r=h[u],c=r.children;c&&c.length>0&&(d=d.concat(e(c))),r.meta.keepAlive&&r.name&&d.push(r.name)}return d.filter(u=>u)}const t=e($.layout.completeRouters),i=T(),a=T(!1);let f;function m(){f.scrollTo({top:0,left:0,behavior:"smooth"})}function l(){a.value=f.scrollTop>document.documentElement.clientHeight}return U(function(){f=i.value,f.addEventListener("scroll",l),l()}),(h,d)=>{const u=F("router-view");return g(),_("div",{class:D(["the-layout",E(n).layoutMode,{"has-tags-view":E(n).showTagsView},{"collapsed-sidebar":!E(n).showSidebar}])},[S(Pt),S(tn),v("div",{class:"the-layout-content",ref_key:"contentBox",ref:i},[S(u,{class:"the-layout-page"},{default:C(({Component:r,route:c})=>[S(J,{name:"page-y",mode:"out-in"},{default:C(()=>[(g(),L(Ve,{include:E(t)},[(g(),L(qe(r),{key:c.path}))],1032,["include"]))]),_:2},1024)]),_:1})],512),v("button",{class:D(["the-layout-to-top",{hidden:!a.value}]),title:"返回顶部",onClick:d[0]||(d[0]=r=>m())},null,2)],2)}}}),on={name:"page-404",data(){return{project:$.projectInfo}}},oe=o=>(He("data-v-099818c9"),o=o(),We(),o),sn={class:"page-404 fvc"},an=ze('<div class="from-top-box f-vertical" data-v-099818c9><div class="mgr-30" data-v-099818c9><div class="point-icon mgb-50" data-v-099818c9></div><div class="point-icon" data-v-099818c9></div></div><div class="radius-icon" data-v-099818c9></div><div class="code-value" data-v-099818c9>404</div></div>',1),rn={class:"from-right-box mgb-40"},ln=oe(()=>v("p",{class:"text"},"你访问的页面不存在，请确认页面路径是否正确。",-1)),cn=oe(()=>v("p",{class:"text"},"我们只收集某些错误信息，然后需要你重新点击返回首页或返回上一页。",-1)),un={class:"pdt-40"},dn={class:"from-bottom-box flex"},fn=oe(()=>v("img",{class:"qrcode-box",src:"https://travis-hjs.github.io/images/reward-code.jpg",alt:"谢谢打赏！"},null,-1)),hn={class:"pdt-20"},mn=oe(()=>v("p",{class:"desc"},"如需技术支持，请扫码联系作者。",-1)),pn={class:"desc"},gn={class:"desc"};function yn(o,n,e,t,i,a){const f=F("router-link");return g(),_("div",sn,[v("section",null,[an,v("div",rn,[ln,cn,v("div",un,[S(f,{class:"go-back fvc",to:"/"},{default:C(()=>[we("返回首页")]),_:1})])]),v("div",dn,[fn,v("div",hn,[mn,v("p",pn,"邮箱地址："+O(i.project.email),1),v("p",gn,"项目地址："+O(i.project.link),1)])])])])}const te=ke(on,[["render",yn],["__scopeId","data-v-099818c9"]]),vn=[{path:"/",name:"index",redirect:"/home",component:ce,meta:{title:"首页",icon:"home"},children:[{path:"/home",meta:{title:"首页展示",icon:"guide"},component:()=>k(()=>import("./home-D4G0-cxt.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)},{path:"/nested",name:"nested",redirect:"/nested/menu-1",meta:{title:"多级菜单嵌套",icon:"tree"},component:()=>k(()=>import("./nested-ATMbhIfw.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/menu-1",name:"nested/menu-1",meta:{title:"el-plus 表格"},component:()=>k(()=>import("./menu-1-CHSu2KKe.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/nested/menu-2",name:"nested/menu-2",meta:{title:"el-plus 表单验证"},component:()=>k(()=>import("./menu-2-vqQMTQaQ.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)},{path:"/nested/three-level",name:"nested/three-level",meta:{title:"三级菜单"},redirect:"/nested/three-level/menu-1",component:()=>k(()=>import("./nested-ATMbhIfw.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/three-level/menu-1",name:"/nested/three-level/menu-1",meta:{title:"菜单 3-1"},component:()=>k(()=>import("./menu-1-CHSu2KKe.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/nested/three-level/menu-2",name:"/nested/three-level/menu-2",meta:{title:"菜单 3-2"},component:()=>k(()=>import("./menu-2-vqQMTQaQ.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)}]},{path:"/nested/four-level",name:"nested/four-level",meta:{title:"三级菜单-2"},redirect:"/nested/four-level/menu-1",component:()=>k(()=>import("./nested-ATMbhIfw.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/four-level/menu-1",name:"/nested/four-level/menu-1",meta:{title:"菜单 3-2-1"},component:()=>k(()=>import("./menu-1-CHSu2KKe.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)}]},{path:"/nested/menu-3",name:"nested/menu-3",meta:{title:"菜单 2-3"},component:()=>k(()=>import("./menu-3-CdbiZIo1.js"),__vite__mapDeps([12,1,2,13]),import.meta.url)}]},{path:"/link-baidu",name:"link-baidu",component:te,meta:{title:"百度一下",icon:"baidu",link:"https://www.baidu.com"}},{path:"/menu-4",name:"menu-4",meta:{title:"换行菜单标题换行菜单标题",icon:"nested"},component:()=>k(()=>import("./menu-4-BKw7udv6.js"),__vite__mapDeps([14,1,2,15]),import.meta.url)}]},{path:"/example",name:"example",component:ce,meta:{title:"示例页栏目",icon:"menu"},redirect:"/example/request",children:[{path:"/example/request",name:"example-request",meta:{title:"http-请求示例",keepAlive:!0},component:()=>k(()=>import("./request-8WNEb18S.js"),__vite__mapDeps([16,1,2,17,18]),import.meta.url)},{path:"/example/components",name:"example-components",meta:{title:"自定义组件"},component:()=>k(()=>import("./the-components-BU7gYW68.js"),__vite__mapDeps([19,1,2,17,20]),import.meta.url)},{path:"/example/tsx",name:"example-tsx",meta:{title:"tsx-示例"},component:()=>k(()=>import("./example-CadG9ylp.js"),__vite__mapDeps([21,1,2,22]),import.meta.url)},{path:"/example/no-found",name:"no-found",meta:{title:"404 页面",link:`${location.origin+location.pathname}#/is-error-path`},component:te}]},{path:"/icon",name:"icon",meta:{title:"图标栏目",auth:[0]},component:ce,redirect:"/icon/svg-icons",children:[{path:"/icon/svg-icons",name:"svg-icons",component:()=>k(()=>import("./index-CUDNes07.js"),__vite__mapDeps([23,1,2,24]),import.meta.url),meta:{title:"svg-图标",icon:"svg-icon"}}]},{path:"/"+$.projectInfo.link,name:"GitHub-Travis",component:te,meta:{title:"项目地址",icon:"github",link:$.projectInfo.link,auth:[0]}}],Y={path:"/",query:{}},he="redirect404";let M;function Oe(o){const n=[],e=$.user.info.type;for(let t=0;t<o.length;t++){const i=o[t],a=i.meta?i.meta.auth:void 0;(!a||a&&a.includes(e))&&(i.children&&i.children.length>0&&(i.children=Oe(i.children)),n.push(i))}return n}async function _n(){return Oe(vn)}function bn(o,n){M=o,M.beforeEach(async function(e,t,i){if(ae.start(),$.user.info.token)if($.layout.addRouters.length>0)i();else{$.layout.addRouters=await _n();for(let a=0;a<$.layout.addRouters.length;a++){const f=$.layout.addRouters[a];M.addRoute(f)}M.hasRoute(he)||M.addRoute({...n[1],path:"/:catchAll(.*)",name:he}),$.layout.completeRouters=n.concat($.layout.addRouters),i({...e,replace:!0})}else e.path==="/login"?i():(Y.path=e.path,Y.query=e.query,i({path:"/login"}),ae.done())}),M.afterEach(e=>{ae.done(),e.meta&&e.meta.title&&(document.title=e.meta.title)})}function Cn(){M.replace({path:Y.path,query:Y.query})}function xn(){const o=$.layout.addRouters;for(let n=o.length-1;n>-1;n--){const e=o[n];e.name&&M.hasRoute(e.name)&&M.removeRoute(e.name)}Y.path="/",Y.query={},M.removeRoute(he),$.layout.addRouters=$.layout.completeRouters=[]}const Ie=[{path:"/login",name:"login",component:()=>k(()=>import("./login-BlSBB_v1.js"),__vite__mapDeps([25,1,2,17,3,4,26]),import.meta.url),meta:{hidden:!0,title:"请登录"}},{path:"/404",name:"page-404",component:te,meta:{hidden:!0,title:"不存在该页面"}},{path:"/401",name:"page-401",component:()=>k(()=>import("./page-401-JWyxBRLF.js"),__vite__mapDeps([27,1,2,28]),import.meta.url),meta:{hidden:!0,title:"暂无权限访问"}}];function Re(o){o=JSON.parse(JSON.stringify(o));const n=[];for(let e=0;e<o.length;e++){const t=o[e];(!t.meta||t.meta&&!t.meta.hidden)&&(n.push(t),t.children&&t.children.length>0&&(t.children=Re(t.children)))}return n}const Ae=je({history:Je(),routes:Ie});bn(Ae,Ie);const $n="1.1.2",ue=[];function wn(o,n){let e;ue.length>1?e=ue.shift():(e=document.createElement("div"),e.className="ripple");const t=n.getBoundingClientRect(),i=n.getAttribute("color");let a=Math.max(t.width,t.height);a>200&&(a=200),e.style.height=e.style.width=a+"px",e.style.backgroundColor=i||"rgba(255, 255, 255, .45)",n.appendChild(e);const f=o.touches,m=f?f[0].clientY:o.clientY,l=f?f[0].clientX:o.clientX,h=m-t.top-e.offsetHeight/2,d=l-t.left-e.offsetWidth/2;e.style.top=h+"px",e.style.left=d+"px";function u(){e.removeEventListener("animationend",u),n.removeChild(e),ue.push(e)}e.addEventListener("animationend",u)}window.version=$n;const G=Xe(Ge);G.directive("copy",{mounted(o,n){o.addEventListener("click",function(){Se(n.value,()=>fe.success("复制成功"),e=>fe.success(e))})}});G.directive("ripple",{mounted(o){const n=ct()?"touchstart":"mousedown";o.setAttribute("ripple",""),o.addEventListener(n,function(e){wn(e,o)})}});G.component("svg-icon",Qe);G.component("base-dialog",st);G.use(Ae);G.mount("#app");export{ke as _,z as a,Ln as b,Se as c,Ce as d,lt as e,k as f,Sn as i,Le as j,fe as m,Cn as o,$ as s};
