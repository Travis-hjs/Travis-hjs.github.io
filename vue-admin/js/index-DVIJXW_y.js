function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./home-CjKF8aGr.js","./vendor-BlOjVvO_.js","../css/vendor-BUMXTAWU.css","./index.vue_vue_type_style_index_0_lang-D3rd8Bc7.js","../css/index-CBMF1Z1B.css","../css/home-C0-MuaMf.css","./nested-CQeZ5mKH.js","../css/nested-DBbt7j1J.css","./menu-1-DTY44xyq.js","../css/menu-1-PIQFC6DV.css","./menu-2-OXtFQ3Tl.js","../css/menu-2-DwSbhe9C.css","./menu-3-Cehh6XKa.js","../css/menu-3-C1x6D_tQ.css","./menu-4-Bw8iW7qY.js","../css/menu-4-B_QkhR3M.css","./request-DbDy283w.js","./common-B4BxH7tx.js","../css/request-BjYaB_Vm.css","./the-components-CEKF7o3d.js","../css/the-components-IJgq8Frg.css","./example-BtGmfJIP.js","../css/example-CJnj_JQw.css","./index-CVmxwDia.js","../css/index-CJ5TRbCj.css","./login-ScqcYc8G.js","../css/login-C2zo-VT6.css","./page-401-B8oUL2un.js","../css/page-401-hNHv4Vr6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var De=Object.defineProperty;var Pe=(o,t,e)=>t in o?De(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var F=(o,t,e)=>(Pe(o,typeof t!="symbol"?t+"":t,e),e);import{r as P,c as k,o as p,a as v,b as m,d as V,e as O,w as J,f as oe,g as ge,h as T,i as I,j as W,n as z,u as y,T as j,k as M,l as te,t as B,v as X,m as Fe,p as G,q as Le,F as q,s as ee,x as D,y as Ce,z as Ne,A as qe,B as _e,C as ze,D as ve,E as Ve,K as He,G as We,H as je,I as Xe,J as Ye,N as ce,L as Je,M as Ge,O as Ue}from"./vendor-BlOjVvO_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Ke={name:"App"},se=(o,t)=>{const e=o.__vccOpts||o;for(const[n,i]of t)e[n]=i;return e};function Ze(o,t,e,n,i,r){const c=P("router-view");return p(),k(c)}const Qe=se(Ke,[["render",Ze]]),et={name:"SvgIcon",props:{name:{type:String,required:!0,default:""}}},tt={class:"svg-icon","aria-hidden":"true"},nt=["xlink:href"];function ot(o,t,e,n,i,r){return p(),v("svg",tt,[m("use",{"xlink:href":`#icon-${e.name}`},null,8,nt)])}const st=se(et,[["render",ot]]);let ye=1e3;function pe(){const o=ye;return ye++,o}const it={class:"base-dialog-title f-between f-vertical"},rt={key:0,class:"base-dialog-text"},at={class:"base-dialog-body"},ct={key:0,class:"base-dialog-footer"},lt={name:"base-dialog"},ut=V({...lt,props:{title:{type:String,default:"提示"},show:{type:Boolean,default:!1},width:{type:String,default:"50%"},closeByMask:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1}},emits:["close","update:show","afterLeave","afterEnd"],setup(o,{emit:t}){const e=o,n=t,i=pe(),r=O(),c=O(),u=O(),s=O(!1);J(()=>e.show,function(a){a?setTimeout(()=>{s.value=!0},0):s.value=!1},{immediate:!0});function h(a){if(!e.show||s.value||r.value.contains(a.target))return;const{clientWidth:g,clientHeight:$}=r.value,E=g/2,L=$/2,R=a.clientY-L,Z=`${(a.clientX-E)/g*100}vw`,Q=`${R/$*100}vh`;_(Z,Q)}function _(a,g){const $=u.value;$&&($.style.setProperty("--content-x",a),$.style.setProperty("--content-y",g))}function f(a){(a&&a.target===r.value&&e.closeByMask||a&&a.target===c.value)&&(n("update:show",!1),n("close"))}function l(){s.value&&_("0","0"),n("afterLeave")}function d(){n("afterEnd")}return oe(function(){document.addEventListener("click",h)}),ge(function(){document.removeEventListener("click",h)}),(a,g)=>(p(),v("section",null,[(p(),k(Fe,{to:"body",disabled:!e.appendToBody},[T(j,{name:"fade"},{default:I(()=>[W(m("div",{ref_key:"el",ref:r,class:"base-dialog fvc",style:z({zIndex:y(i)}),onClick:f},[T(j,{name:"dialog-move",onAfterLeave:l,onAfterEnter:d},{default:I(()=>[W(m("div",{ref_key:"contentBox",ref:u,class:"base-dialog-content flex",style:z({width:e.width})},[m("div",it,[a.$slots.header?M("",!0):(p(),v("h2",rt,B(o.title),1)),te(a.$slots,"header"),m("i",{class:"base-dialog-icon",ref_key:"closeBtn",ref:c,onClick:f},null,512)]),m("div",at,[te(a.$slots,"default")]),a.$slots.footer?(p(),v("div",ct,[te(a.$slots,"footer")])):M("",!0)],4),[[X,s.value]])]),_:3})],4),[[X,e.show]])]),_:3})],8,["disabled"]))]))}}),dt="modulepreload",ft=function(o,t){return new URL(o,t).href},be={},S=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){const r=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=Promise.all(e.map(s=>{if(s=ft(s,n),s in be)return;be[s]=!0;const h=s.endsWith(".css"),_=h?'[rel="stylesheet"]':"";if(!!n)for(let d=r.length-1;d>=0;d--){const a=r[d];if(a.href===s&&(!h||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${_}`))return;const l=document.createElement("link");if(l.rel=h?"stylesheet":dt,h||(l.as="script",l.crossOrigin=""),l.href=s,u&&l.setAttribute("nonce",u),document.head.appendChild(l),h)return new Promise((d,a)=>{l.addEventListener("load",d),l.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${s}`)))})}))}return i.then(()=>t()).catch(r=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=r,window.dispatchEvent(c),!c.defaultPrevented)throw r})};function pt(o){return Object.prototype.toString.call(o).match(/\[object (\S*)\]/)[1].toLocaleLowerCase()}function Se(o,t){return pt(o)===t}function H(o,t){for(const e in t)if(Object.prototype.hasOwnProperty.call(o,e)){const n=t[e],i=o[e];Se(i,"object")?H(i,n):o[e]=n}}function Te(o,t,e){if(o=o.replace(/(^\s*)|(\s*$)/g,""),!o){e&&e("复制的内容不能为空！");return}const n="the-clipboard";let i=document.getElementById(n);i||(i=document.createElement("textarea"),i.id=n,i.readOnly=!0,i.style.cssText="font-size: 15px; position: fixed; top: -1000%; left: -1000%;",document.body.appendChild(i)),i.value=o,i.select(),i.setSelectionRange(0,i.value.length),document.execCommand("copy")?t&&t():e&&e("复制失败")}function jn(o,t,e){let n=o.toString().trim();if(n.length===0)return"";const i="";return n=n.replace(/[^0-9]+/ig,""),i+n}function Ie(o,t={}){let e=t;if(Se(o,"string"))try{e=JSON.parse(o)}catch(n){console.warn("JSON格式化对象错误 >>",n)}return e}function mt(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)}function ht(o){const e=`; ${document.cookie}`.split(`; ${o}=`);return e.length===2?e.pop().split(";").shift():""}function gt(o,t,e){let n=`${o}=${t}; path=/`;e&&(e.expires&&(n+=`; expires=${e.expires.toUTCString()}`),e.domain&&(n+=`; domain=${e.domain}`)),document.cookie=n}function _t(o,t){const e="expires=Thu, 01 Jan 1970 00:00:00 GMT";document.cookie=`${o}=; path=/; ${e}`}const le="ModuleUser";function xe(){return{id:"",name:"",type:"",token:"",avatar:"",account:"",password:""}}const vt=3,yt=24*60*60*1e3;class bt{constructor(){F(this,"info",G(xe()));this.init()}init(){const t=ht(le);if(t){const e=Ie(t);H(this.info,e)}}update(t){H(this.info,t),gt(le,JSON.stringify(this.info),{expires:new Date(Date.now()+vt*yt)})}reset(){H(this.info,xe()),_t(le)}}const xt=""+new URL("../image/logo-CPmPqqKk.png",import.meta.url).href,$e="ModuleLayout";class $t{constructor(){F(this,"addRouters",[]);F(this,"completeRouters",[]);F(this,"info",G({showTagList:!0,showSidebar:!0,showSidebarLogo:!0,tagList:[],layoutMode:"",keyword:""}));const t=sessionStorage.getItem($e);try{t&&H(this.info,JSON.parse(t))}catch(e){console.log("ModuleLayout init fail >>",e)}J(this.info,()=>{sessionStorage.setItem($e,JSON.stringify(this.info))})}}const ue="ModuleGoods";function we(){return{id:0,name:"",price:0,specs:{size:"xs",width:"",height:""}}}class wt{constructor(){F(this,"info",G(we()));const t=sessionStorage.getItem(ue);if(t){const e=Ie(t);H(this.info,e)}}update(t){H(this.info,t),sessionStorage.setItem(ue,JSON.stringify(this.info))}reset(){H(this.info,we()),sessionStorage.removeItem(ue)}}class kt{constructor(){F(this,"projectInfo",{title:"Vue Typescript Admin",name:"XXX后台管理平台",logo:xt,link:"https://github.com/Travis-hjs/vue-admin",email:"1141752341@qq.com"});F(this,"layout",new $t);F(this,"user",new bt);F(this,"_goods");console.log("%c ModuleStore init","color: #409EFF")}get goods(){return this._goods||(this._goods=new wt),this._goods}}const w=new kt,Et={key:0,class:"separator"},Lt={key:1,href:"javascript:void(0)"},Ct={name:"BreadCrumb"},St=V({...Ct,setup(o){const t=Le(),e=O([]);function n(){const i=t.matched.filter(r=>r.meta&&r.meta.title).map(r=>({path:r.path,meta:{...r.meta}}));e.value=i}return J(()=>t.path,function(){t.path.startsWith("/redirect/")||n()}),n(),(i,r)=>{const c=P("router-link");return p(),k(Ne,{name:"breadcrumb",tag:"div",class:"layout-breadcrumb f-vertical"},{default:I(()=>[(p(!0),v(q,null,ee(e.value,(u,s)=>(p(),v("span",{class:D(["layout-breadcrumb-item",{last:s===e.value.length-1}]),key:u.path},[s>0?(p(),v("i",Et,"/")):M("",!0),s===e.value.length-1?(p(),v("a",Lt,B(u.meta.title),1)):(p(),k(c,{key:2,to:u.path},{default:I(()=>[Ce(B(u.meta.title),1)]),_:2},1032,["to"]))],2))),128))]),_:1})}}}),ke=function(){const o=document.createElement("div");o.style.width="100px",o.style.height="100px",o.style.overflow="scroll",document.body.appendChild(o);const t=o.offsetWidth-o.clientWidth;return o.remove(),t}(),Tt={name:"Scrollbar"},Re=V({...Tt,props:{thumbColor:{type:String,default:"rgba(147, 147, 153, 0.45)"},thumbSize:{type:Number,default:8}},setup(o,{expose:t}){const e=o,n=O(),i=O(),r=O(),c=O(),u=G({height:"",width:""}),s=G({x:{width:"",height:"",left:"",bottom:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor},y:{width:"",height:"",top:"",right:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor}}),h=O(!1);function _(){const b=n.value.parentElement;b.style.overflow="hidden";const x=getComputedStyle(b);u.width=`calc(100% + ${ke}px + ${x.borderLeftWidth} + ${x.borderRightWidth})`,u.height=`calc(100% + ${ke}px + ${x.borderTopWidth} + ${x.borderBottomWidth})`}function f(){s.y.right=s.y.top="0px",s.y.width=e.thumbSize+"px",s.x.bottom=s.x.left="0px",s.x.height=e.thumbSize+"px",s.x.borderRadius=s.y.borderRadius=`${e.thumbSize/2}px`}function l(){const b=i.value;if(b){let x=b.clientHeight/b.scrollHeight*100;x>=100&&(x=0),s.y.height=x+"%",s.y.transform=`translate3d(0, ${b.scrollTop/b.scrollHeight*b.clientHeight}px, 0)`;let A=b.clientWidth/b.scrollWidth*100;A>=100&&(A=0),s.x.width=A+"%",s.x.transform=`translate3d(${b.scrollLeft/b.scrollWidth*b.clientWidth}px, 0, 0)`}}let d=!1,a=!1,g=0;function $(b){const x=r.value,A=c.value,Y=b.target;x.contains(Y)&&(d=!0,a=!1,g=b.clientX-x.getBoundingClientRect().left),A.contains(Y)&&(d=!0,a=!0,g=b.clientY-A.getBoundingClientRect().top)}function E(b){if(!d)return;const x=i.value;if(a){const A=x.getBoundingClientRect().top,Y=x.clientHeight;let ae=b.clientY-A;x.scrollTop=(ae-g)/Y*x.scrollHeight}else{const A=x.getBoundingClientRect().left,Y=x.clientWidth;let ae=b.clientX-A;x.scrollLeft=(ae-g)/Y*x.scrollWidth}}function L(b){d=!1,n.value.contains(b.target)||(h.value=!1)}function R(){h.value=!0,l()}function C(){d||(h.value=!1)}let Z;const Q=O();return oe(function(){_(),f(),document.addEventListener("mousedown",$),document.addEventListener("mousemove",E),document.addEventListener("mouseup",L),i.value&&i.value.addEventListener("scroll",l),Z=new ResizeObserver(function(){l()}),Q.value&&Z.observe(Q.value)}),ge(function(){document.removeEventListener("mousedown",$),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",L),i.value&&i.value.removeEventListener("scroll",l),Z.disconnect()}),t({updateWrapStyle:_,updateThumbStyle:l}),(b,x)=>(p(),v("div",{class:"the-scrollbar",ref_key:"el",ref:n,onMouseenter:x[0]||(x[0]=A=>R()),onMouseleave:x[1]||(x[1]=A=>C())},[m("div",{ref_key:"wrap",ref:i,class:"the-scrollbar-wrap",style:z(u)},[m("div",{ref_key:"view",ref:Q},[te(b.$slots,"default")],512)],4),T(j,{name:"fade"},{default:I(()=>[W(m("button",{class:"the-scrollbar-thumb",ref_key:"thumbY",ref:c,title:"滚动条-摁住拖拽Y轴",style:z(s.y)},null,4),[[X,h.value]])]),_:1}),T(j,{name:"fade"},{default:I(()=>[W(m("button",{class:"the-scrollbar-thumb",ref_key:"thumbX",ref:r,title:"滚动条-摁住拖拽X轴",style:z(s.x)},null,4),[[X,h.value]])]),_:1})],544))}});function It(o={}){const t=document,e=`__${Math.random().toString(36).slice(2,7)}`,n={box:`msg-box${e}`,hide:`hide${e}`,text:`msg-text${e}`,icon:`msg-icon${e}`},i=t.createElement("style");i.textContent=`
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
  `.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),t.head.appendChild(i);const r=[];function c(h){let _=10;for(let f=0;f<r.length;f++){const l=r[f];if(h&&h===l)break;_+=l.clientHeight+20}return _}function u(h){for(let _=0;_<r.length;_++)if(r[_]===h){r.splice(_,1);break}h.classList.add(n.hide),r.forEach(function(_){_.style.top=`${c(_)}px`})}function s(h,_="info",f){const l=t.createElement("div");l.className=`${n.box} ${_}`,l.style.top=`${c()}px`,l.style.zIndex=Oe.message,l.innerHTML=`
    <span class="${n.icon}"></span>
    <span class="${n.text}">${h}</span>
    `,r.push(l),t.body.appendChild(l);function d(){l.removeEventListener("animationend",d),setTimeout(u,f||o.duration||3e3,l)}l.addEventListener("animationend",d);function a(){getComputedStyle(l).opacity==="0"&&(l.removeEventListener("transitionend",a),l.remove())}l.addEventListener("transitionend",a)}return{show:s,info(h){s(h,"info")},success(h){s(h,"success")},warning(h){s(h,"warning")},error(h){s(h,"error")}}}function Rt(){const o=document,t=`__${Math.random().toString(36).slice(2,7)}`,e={mask:`dialog-mask${t}`,popup:`dialog-popup${t}`,title:`dialog-title${t}`,content:`dialog-content${t}`,footer:`dialog-footer${t}`,confirm:`confirm${t}`,fade:`fade${t}`,show:`show${t}`,hide:`hide${t}`},n=`
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
  `,i=o.createElement("style");i.textContent=n.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),o.head.appendChild(i);const r={x:"0vw",y:"0vh"};o.addEventListener("click",function(u){const{innerWidth:s,innerHeight:h}=window,_=s/2,f=h/2,l=u.clientY-f,d=u.clientX-_;r.x=`${d/s*100}vw`,r.y=`${l/h*100}vh`},!0);function c(u){const s=o.createElement("section");s.className=e.mask,s.style.zIndex=Oe.dialog,s.style.setProperty("--x",r.x),s.style.setProperty("--y",r.y),r.x="0vw",r.y="0vh";const h=u.cancelText?`<button class="the-btn">${u.cancelText}</button>`:"";s.innerHTML=`
    <div class="${e.popup}">
      <h2 class="${e.title}">${typeof u.title=="string"?u.title:"提示"}</h2>
      <div class="${e.content}">${u.content}</div>
      <div class="${e.footer}">
        ${h}
        <button class="${e.confirm} the-btn blue">${u.confirmText||"确认"}</button>
      </div>
    </div>
    `,o.body.appendChild(s),s.addEventListener("transitionend",function(f){f.target===s&&s.classList.contains(e.hide)&&s.remove()});function _(){s.classList.add(e.hide)}u.cancelText&&(s.querySelector(`.${e.footer} button`).onclick=function(){_(),u.cancel&&u.cancel()}),s.querySelector(`.${e.confirm}`).onclick=function(){_(),u.confirm&&u.confirm()}}return{show:c}}const Oe={get message(){return(pe()+20).toString()},get dialog(){return(pe()+10).toString()}},me=It({duration:3600}),Ot=Rt(),Xn=Ot.show;function ie(){const o=Le(),t=qe();function e(r){return JSON.stringify(r||{})}function n(r){return r.path===o.path&&e(r.query)===e(o.query)&&e(r.params)===e(o.params)}function i(r){if(n(r))return!0;if(r.children&&r.children.length)for(let c=0;c<r.children.length;c++){const u=r.children[c];if(i(u))return!0}return!1}return{route:o,router:t,isActive:n,hasActive:i}}let Ee=0;function Bt(){return Ee++,`menu-${Ee}`}function At(o=300){const t=`${o}ms height`;function e(s){s.style.transition=t,s.style.height="0px"}function n(s){s.scrollHeight!==0?s.style.height=`${s.scrollHeight}px`:s.style.height="",s.style.overflow="hidden"}function i(s){s.style.transition=s.style.height=""}function r(s){s.style.display="block",s.style.height=`${s.scrollHeight}px`,s.style.overflow="hidden"}function c(s){s.scrollHeight!==0&&(s.style.transition=t,s.style.height="0px")}function u(s){s.style.transition=s.style.height=""}return{onBeforeEnter:e,onEnter:n,onAfterEnter:i,onBeforeLeave:r,onLeave:c,onAfterLeave:u}}const Mt={class:"the-layout-tag-box"},Dt={class:"the-layout-tags"},Pt=["onClick"],Ft=["onClick"],Nt={name:"TagList"},qt=V({...Nt,setup(o){const t=w.layout.info,{route:e,router:n,isActive:i}=ie();function r(f){if(i(t.tagList[f])){const l=f>0?f-1:f+1,d=t.tagList[l];n.push({path:d.path,query:d.query,params:d.params})}t.tagList.splice(f,1)}J(()=>e.path,function(){t.tagList.some(l=>i(l))||t.tagList.push({name:e.name,path:e.path,query:e.query,params:e.params,meta:e.meta})},{immediate:!0});const c=G({show:!1,left:""}),u={list:[{label:"关闭其他",id:1,click(){c.show=!1;const f=u.current;i(f)?t.tagList=[f]:n.push(f.path).then(()=>{t.tagList=[f]})},show:()=>t.tagList.length>1},{label:"在新标签打开",id:2,click(){c.show=!1;const f=location.href.split("#");window.open(`${f[0]}#${u.current.path}`,"_blank")}},{label:"复制当前信息",id:3,click(){c.show=!1;const f=u.current;Te(JSON.stringify(f,null,4),()=>me.success("复制成功！"))}}],current:void 0},s=O();function h(f,l){c.show=!0,u.current=l,ze(()=>{let d=f.x;const a=parseFloat(getComputedStyle(s.value).width),g=document.body.clientWidth-a;d>g&&(d=g),c.left=`${d}px`})}function _(f){const l=f.target;c.show&&!s.value.contains(l)&&(c.show=!1)}return oe(function(){document.addEventListener("click",_)}),ge(function(){document.removeEventListener("click",_)}),(f,l)=>{const d=P("router-link");return p(),v(q,null,[m("div",Mt,[T(y(Re),null,{default:I(()=>[m("div",Dt,[(p(!0),v(q,null,ee(y(t).tagList,(a,g)=>(p(),k(d,{class:D(["the-layout-tag",{"is-active":y(i)(a)}]),key:a.path+g,to:{path:a.path,query:a.query,params:a.params},onContextmenu:_e($=>h($,a),["prevent"])},{default:I(()=>[m("span",null,B(a.meta.title),1),m("i",{class:"close",onClick:_e($=>r(g),["prevent","stop"])},"-",8,Pt)]),_:2},1032,["class","to","onContextmenu"]))),128))])]),_:1})]),W(m("div",{ref_key:"tagMenuRef",ref:s,class:"the-layout-tag-menu",style:z({left:c.left})},[(p(!0),v(q,null,ee(u.list,a=>W((p(),v("div",{key:a.id,class:"the-layout-tag-menu-item",onClick:g=>a.click()},B(a.label),9,Ft)),[[X,a.show?a.show():!0]])),128))],4),[[X,c.show]])],64)}}}),zt={class:"the-layout-header"},Vt={class:"the-layout-navbar flex"},Ht={class:"user-info-box f-vertical"},Wt=["src"],jt={class:"the-tag green mgr-10"},Xt=m("span",null,"退出登录",-1),Yt={name:"HeaderBar"},Jt=V({...Yt,setup(o){const t=w.layout.info,e=w.user.info,{router:n}=ie();function i(){t.showSidebar=!t.showSidebar}const r="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif";function c(){w.user.reset(),n.push("/login").then(()=>{t.tagList=[],qn()})}return(u,s)=>{const h=P("svg-icon");return p(),v("div",zt,[m("div",Vt,[m("div",{class:D(["fvc hamburger",{"hamburger-actived":y(t).showSidebar}]),onClick:s[0]||(s[0]=_=>i())},[T(h,{name:"hamburger"})],2),T(St,{class:"f1"}),m("div",Ht,[m("img",{class:"avatar",src:y(e).avatar||r},null,8,Wt),m("span",jt,B(y(e).name||y(e).account||"用户未设置昵称"),1),m("button",{class:"logout f-vertical",onClick:s[1]||(s[1]=_=>c())},[T(h,{name:"exit"}),Xt])])]),y(t).showTagList?(p(),k(qt,{key:0})):M("",!0)])}}}),Gt={class:"f1"},Ut=m("i",{class:"the-layout-menu-arrow"},null,-1),Kt=["href"],Zt={class:"f1"},Qt={class:"f1"},en=["href"],tn=V({__name:"MenuItem",props:{menu:{type:Object,required:!0},level:{type:Number,default:0}},setup(o){const t=o,{onBeforeEnter:e,onEnter:n,onAfterEnter:i,onBeforeLeave:r,onLeave:c,onAfterLeave:u}=At(),{isActive:s,hasActive:h}=ie(),_=ve(function(){const g=s(t.menu);return{"the-layout-menu-title":!0,"is-current":h(t.menu)&&!g,"is-open":t.menu.isOpen,"is-active":g}}),f=ve(function(){return{"the-layout-menu-list":!0,"is-open":t.menu.isOpen}});function l(g){return{"the-layout-menu-link":!0,"is-active":s(g)}}function d(g){return!!(g.children&&g.children.length>0)}function a(){const g=t.menu;g.isOpen=!g.isOpen}return(g,$)=>{const E=P("svg-icon"),L=P("router-link"),R=P("MenuItem",!0);return p(),v("section",{class:"the-layout-menu",style:z({"--level":t.level})},[d(t.menu)?(p(),v("div",{key:0,class:D(_.value),onClick:$[0]||($[0]=C=>a())},[t.menu.icon?(p(),k(E,{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):M("",!0),m("span",Gt,B(t.menu.title),1),Ut],2)):(p(),v(q,{key:1},[t.menu.link?(p(),v("a",{key:0,href:t.menu.link,class:D(_.value),target:"_blank"},[t.menu.icon?(p(),k(E,{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):M("",!0),m("span",Zt,B(t.menu.title),1)],10,Kt)):(p(),k(L,{key:1,to:t.menu.path,class:D(_.value)},{default:I(()=>[t.menu.icon?(p(),k(E,{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):M("",!0),m("span",Qt,B(t.menu.title),1)]),_:1},8,["to","class"]))],64)),d(t.menu)?(p(),k(j,{key:2,onBeforeEnter:y(e),onEnter:y(n),onAfterEnter:y(i),onBeforeLeave:y(r),onLeave:y(c),onAfterLeave:y(u)},{default:I(()=>[W(m("div",{class:D(f.value)},[(p(!0),v(q,null,ee(t.menu.children,C=>(p(),v(q,{key:C.menuId},[d(C)?(p(),k(R,{key:0,menu:C,level:t.level+1},null,8,["menu","level"])):(p(),v(q,{key:1},[C.link?(p(),v("a",{key:0,href:C.link,class:D(l(C)),target:"_blank"},[C.icon?(p(),k(E,{key:0,name:C.icon,class:"menu-icon"},null,8,["name"])):M("",!0),m("span",null,B(C.title),1)],10,en)):(p(),k(L,{key:1,to:C.path,class:D(l(C))},{default:I(()=>[C.icon?(p(),k(E,{key:0,name:C.icon,class:"menu-icon"},null,8,["name"])):M("",!0),m("span",null,B(C.title),1)]),_:2},1032,["to","class"]))],64))],64))),128))],2),[[X,t.menu.isOpen]])]),_:1},8,["onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])):M("",!0)],4)}}}),nn={name:"Empty",props:{text:{type:String,default:"暂无数据"},size:{type:Number}}},on="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20width='64'%20height='41'%20viewBox='0%200%2064%2041'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(0%201)'%20fill='none'%20fill-rule='evenodd'%3e%3cellipse%20fill='%23f5f5f5'%20cx='32'%20cy='33'%20rx='32'%20ry='7'%3e%3c/ellipse%3e%3cg%20fill-rule='nonzero'%20stroke='%23d9d9d9'%3e%3cpath%20d='M55%2012.76L44.854%201.258C44.367.474%2043.656%200%2042.907%200H21.093c-.749%200-1.46.474-1.947%201.257L9%2012.761V22h46v-9.24z'%3e%3c/path%3e%3cpath%20d='M41.613%2015.931c0-1.605.994-2.93%202.227-2.931H55v18.137C55%2033.26%2053.68%2035%2052.05%2035h-40.1C10.32%2035%209%2033.259%209%2031.137V13h11.16c1.233%200%202.227%201.323%202.227%202.928v.022c0%201.605%201.005%202.901%202.237%202.901h14.752c1.232%200%202.237-1.308%202.237-2.913v-.007z'%20fill='%23fafafa'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",sn={class:"empty"},rn={class:"text"};function an(o,t,e,n,i,r){return p(),v("div",sn,[m("img",{class:"icon",style:z({width:e.size?`${e.size}px`:void 0}),src:on,alt:""},null,4),m("span",rn,B(e.text),1)])}const cn=se(nn,[["render",an],["__scopeId","data-v-6a496f0d"]]),ln={name:"Menu"},un=V({...ln,props:{mergeOnlyOneChild:{type:Number,default:0}},setup(o){const t=o,e=w.layout.info;function n(l){const d=[];for(let a=0;a<l.length;a++){const g=l[a];if(g.meta&&g.meta.hidden)continue;const $={menuId:Bt(),path:g.path,isOpen:!1,title:g.meta.title,icon:g.meta.icon,link:g.meta.link};g.children&&g.children.length&&($.children=n(g.children)),d.push($)}return d}function i(l,d=1){const a=[],g=d<t.mergeOnlyOneChild,$=d+1;for(let E=0;E<l.length;E++){const L=l[E],R=L.children;R&&R.length>0?R.length===1?(a.push(R[0]),R[0].children&&R[0].children.length>0&&g&&(R[0].children=i(R[0].children,$))):(a.push(L),g&&(L.children=i(R,$))):a.push(L)}return a}function r(l){const d=e.keyword;return l.filter(a=>a.children&&(a.children=r(a.children),a.children.length>0)?(a.isOpen=!0,!0):!!a.title.includes(d))}let c=n(w.layout.completeRouters);t.mergeOnlyOneChild&&(c=i(c));const u=O(c),{route:s,isActive:h}=ie();function _(l){const d=[];function a(g,$){for(let E=0;E<g.length;E++){const L=g[E];if(h(L))return d.push(...$),!0;if(L.children&&L.children.length&&a(L.children,[...$,L]))return!0}return!1}return a(l,[]),d}function f(){_(u.value).forEach(d=>{d.isOpen=!0})}return J(()=>e.keyword,function(l){const d=JSON.parse(JSON.stringify(c));if(l){const a=r(d);u.value=a}else u.value=d,f()}),J(()=>s.path,function(){f()},{immediate:!0}),(l,d)=>(p(),v(q,null,[(p(!0),v(q,null,ee(u.value,(a,g)=>(p(),k(tn,{menu:a,key:a.menuId,style:z(g?void 0:{"margin-top":"0"})},null,8,["menu","style"]))),128)),u.value.length?M("",!0):(p(),k(y(cn),{key:0,style:{height:"140px"},text:"没有匹配到任何菜单"}))],64))}}),dn={class:"the-layout-sidebar"},fn={class:"the-layout-sidebar-content"},pn={key:0,class:"the-logo-box"},mn=["src"],hn=["title"],gn={key:1,style:{height:"var(--page-padding)"}},_n={class:"the-layout-search-box"},vn={class:"f1"},yn={class:"the-layout-sidebar-content padding-full"},bn={name:"Sidebar"},xn=V({...bn,setup(o){const t=w.layout.info,e=w.projectInfo;function n(){t.keyword=""}return(i,r)=>{const c=P("router-link"),u=P("svg-icon");return p(),v("div",dn,[m("section",fn,[T(j,{name:"fade",mode:"out-in"},{default:I(()=>[y(t).showSidebarLogo?(p(),v("div",pn,[T(c,{class:"the-logo-link f-vertical",to:"/"},{default:I(()=>[m("img",{class:"the-logo",src:y(e).logo},null,8,mn),m("h1",{class:"the-logo-title ellipsis",title:y(e).title},B(y(e).title),9,hn)]),_:1})])):(p(),v("div",gn))]),_:1}),m("div",_n,[W(m("input",{"onUpdate:modelValue":r[0]||(r[0]=s=>y(t).keyword=s),type:"text",placeholder:"请输入关键字检索菜单"},null,512),[[Ve,y(t).keyword]]),y(t).keyword?(p(),k(u,{key:0,class:"the-layout-search-icon",name:"circle-close",onClick:r[1]||(r[1]=s=>n())})):(p(),k(u,{key:1,class:"the-layout-search-icon",name:"search"}))])]),m("section",vn,[T(y(Re),null,{default:I(()=>[m("div",yn,[T(un,{mergeOnlyOneChild:1})])]),_:1})])])}}}),$n={name:"Layout"},de=V({...$n,setup(o){const t=w.layout.info;function e(h){let _=[];for(let f=0;f<h.length;f++){const l=h[f],d=l.children;d&&d.length>0&&(_=_.concat(e(d))),l.meta.keepAlive&&l.name&&_.push(l.name)}return _.filter(f=>f)}const n=e(w.layout.completeRouters),i=O(),r=O(!1);let c;function u(){c.scrollTo({top:0,left:0,behavior:"smooth"})}function s(){r.value=c.scrollTop>document.documentElement.clientHeight}return oe(function(){c=i.value,c.addEventListener("scroll",s),s()}),(h,_)=>{const f=P("router-view");return p(),v("div",{class:D(["the-layout",y(t).layoutMode,{"has-tag-list":y(t).showTagList},{"collapsed-sidebar":!y(t).showSidebar}])},[T(Jt),T(xn),m("div",{class:"the-layout-content",ref_key:"contentBox",ref:i},[T(f,{class:"the-layout-page"},{default:I(({Component:l,route:d})=>[T(j,{name:"page-y",mode:"out-in"},{default:I(()=>[(p(),k(He,{include:y(n)},[(p(),k(We(l),{key:d.fullPath}))],1032,["include"]))]),_:2},1024)]),_:1})],512),m("button",{class:D(["the-layout-to-top",{hidden:!r.value}]),title:"返回顶部",onClick:_[0]||(_[0]=l=>u())},null,2)],2)}}}),wn={name:"page-404",data(){return{project:w.projectInfo}}},re=o=>(Xe("data-v-099818c9"),o=o(),Ye(),o),kn={class:"page-404 fvc"},En=je('<div class="from-top-box f-vertical" data-v-099818c9><div class="mgr-30" data-v-099818c9><div class="point-icon mgb-50" data-v-099818c9></div><div class="point-icon" data-v-099818c9></div></div><div class="radius-icon" data-v-099818c9></div><div class="code-value" data-v-099818c9>404</div></div>',1),Ln={class:"from-right-box mgb-40"},Cn=re(()=>m("p",{class:"text"},"你访问的页面不存在，请确认页面路径是否正确。",-1)),Sn=re(()=>m("p",{class:"text"},"我们只收集某些错误信息，然后需要你重新点击返回首页或返回上一页。",-1)),Tn={class:"pdt-40"},In={class:"from-bottom-box flex"},Rn=re(()=>m("img",{class:"qrcode-box",src:"https://travis-hjs.github.io/images/reward-code.jpg",alt:"谢谢打赏！"},null,-1)),On={class:"pdt-20"},Bn=re(()=>m("p",{class:"desc"},"如需技术支持，请扫码联系作者。",-1)),An={class:"desc"},Mn={class:"desc"};function Dn(o,t,e,n,i,r){const c=P("router-link");return p(),v("div",kn,[m("section",null,[En,m("div",Ln,[Cn,Sn,m("div",Tn,[T(c,{class:"go-back fvc",to:"/"},{default:I(()=>[Ce("返回首页")]),_:1})])]),m("div",In,[Rn,m("div",On,[Bn,m("p",An,"邮箱地址："+B(i.project.email),1),m("p",Mn,"项目地址："+B(i.project.link),1)])])])])}const ne=se(wn,[["render",Dn],["__scopeId","data-v-099818c9"]]),Pn=[{path:"/",name:"index",redirect:"/home",component:de,meta:{title:"首页",icon:"home"},children:[{path:"/home",meta:{title:"首页展示",icon:"guide"},component:()=>S(()=>import("./home-CjKF8aGr.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)},{path:"/nested",name:"nested",redirect:"/nested/menu-1",meta:{title:"多级菜单嵌套",icon:"tree"},component:()=>S(()=>import("./nested-CQeZ5mKH.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/menu-1",name:"nested/menu-1",meta:{title:"el-plus 表格"},component:()=>S(()=>import("./menu-1-DTY44xyq.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/nested/menu-2",name:"nested/menu-2",meta:{title:"el-plus 表单验证"},component:()=>S(()=>import("./menu-2-OXtFQ3Tl.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)},{path:"/nested/three-level",name:"nested/three-level",meta:{title:"三级菜单"},redirect:"/nested/three-level/menu-1",component:()=>S(()=>import("./nested-CQeZ5mKH.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/three-level/menu-1",name:"/nested/three-level/menu-1",meta:{title:"菜单 3-1"},component:()=>S(()=>import("./menu-1-DTY44xyq.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/nested/three-level/menu-2",name:"/nested/three-level/menu-2",meta:{title:"菜单 3-2"},component:()=>S(()=>import("./menu-2-OXtFQ3Tl.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)}]},{path:"/nested/four-level",name:"nested/four-level",meta:{title:"三级菜单-2"},redirect:"/nested/four-level/menu-1",component:()=>S(()=>import("./nested-CQeZ5mKH.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/four-level/menu-1",name:"/nested/four-level/menu-1",meta:{title:"菜单 3-2-1"},component:()=>S(()=>import("./menu-1-DTY44xyq.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)}]},{path:"/nested/menu-3",name:"nested/menu-3",meta:{title:"菜单 2-3"},component:()=>S(()=>import("./menu-3-Cehh6XKa.js"),__vite__mapDeps([12,1,2,13]),import.meta.url)}]},{path:"/link-baidu",name:"link-baidu",component:ne,meta:{title:"百度一下",icon:"baidu",link:"https://www.baidu.com"}},{path:"/menu-4",name:"menu-4",meta:{title:"换行菜单标题换行菜单标题",icon:"nested"},component:()=>S(()=>import("./menu-4-Bw8iW7qY.js"),__vite__mapDeps([14,1,2,15]),import.meta.url)}]},{path:"/example",name:"example",component:de,meta:{title:"示例页栏目",icon:"menu"},redirect:"/example/request",children:[{path:"/example/request",name:"example-request",meta:{title:"http-请求示例",keepAlive:!0},component:()=>S(()=>import("./request-DbDy283w.js"),__vite__mapDeps([16,1,2,17,18]),import.meta.url)},{path:"/example/components",name:"example-components",meta:{title:"自定义组件"},component:()=>S(()=>import("./the-components-CEKF7o3d.js"),__vite__mapDeps([19,1,2,17,20]),import.meta.url)},{path:"/example/tsx",name:"example-tsx",meta:{title:"tsx-示例"},component:()=>S(()=>import("./example-BtGmfJIP.js"),__vite__mapDeps([21,1,2,22]),import.meta.url)},{path:"/example/no-found",name:"no-found",meta:{title:"404 页面",link:`${location.origin+location.pathname}#/is-error-path`},component:ne}]},{path:"/icon",name:"icon",meta:{title:"图标栏目",auth:[0]},component:de,redirect:"/icon/svg-icons",children:[{path:"/icon/svg-icons",name:"svg-icons",component:()=>S(()=>import("./index-CVmxwDia.js"),__vite__mapDeps([23,1,2,24]),import.meta.url),meta:{title:"svg-图标",icon:"svg-icon"}}]},{path:"/"+w.projectInfo.link,name:"GitHub-Travis",component:ne,meta:{title:"项目地址",icon:"github",link:w.projectInfo.link,auth:[0]}}],U={path:"/",query:{}},he="redirect404";let N;function Be(o){const t=[],e=w.user.info.type;for(let n=0;n<o.length;n++){const i=o[n],r=i.meta?i.meta.auth:void 0;(!r||r&&r.includes(e))&&(i.children&&i.children.length>0&&(i.children=Be(i.children)),t.push(i))}return t}async function Fn(){return Be(Pn)}function Nn(o,t){N=o,N.beforeEach(async function(e,n,i){if(ce.start(),w.user.info.token)if(w.layout.addRouters.length>0)i();else{w.layout.addRouters=await Fn();for(let r=0;r<w.layout.addRouters.length;r++){const c=w.layout.addRouters[r];N.addRoute(c)}N.hasRoute(he)||N.addRoute({...t[1],path:"/:catchAll(.*)",name:he}),w.layout.completeRouters=t.concat(w.layout.addRouters),i({...e,replace:!0})}else e.path==="/login"?i():(U.path=e.path,U.query=e.query,i({path:"/login"}),ce.done())}),N.afterEach(e=>{ce.done(),e.meta&&e.meta.title&&(document.title=e.meta.title)})}function Yn(){N.replace({path:U.path,query:U.query})}function qn(){const o=w.layout.addRouters;for(let t=o.length-1;t>-1;t--){const e=o[t];e.name&&N.hasRoute(e.name)&&N.removeRoute(e.name)}U.path="/",U.query={},N.removeRoute(he),w.layout.addRouters=w.layout.completeRouters=[]}const Ae=[{path:"/login",name:"login",component:()=>S(()=>import("./login-ScqcYc8G.js"),__vite__mapDeps([25,1,2,17,3,4,26]),import.meta.url),meta:{hidden:!0,title:"请登录"}},{path:"/404",name:"page-404",component:ne,meta:{hidden:!0,title:"不存在该页面"}},{path:"/401",name:"page-401",component:()=>S(()=>import("./page-401-B8oUL2un.js"),__vite__mapDeps([27,1,2,28]),import.meta.url),meta:{hidden:!0,title:"暂无权限访问"}}],Me=Je({history:Ge(),routes:Ae});Nn(Me,Ae);const zn="1.1.3",fe=[];function Vn(o,t){let e;fe.length>1?e=fe.shift():(e=document.createElement("div"),e.className="ripple");const n=t.getBoundingClientRect(),i=t.getAttribute("color");let r=Math.max(n.width,n.height);r>200&&(r=200),e.style.height=e.style.width=r+"px",e.style.backgroundColor=i||"rgba(255, 255, 255, .45)",t.appendChild(e);const c=o.touches,u=c?c[0].clientY:o.clientY,s=c?c[0].clientX:o.clientX,h=u-n.top-e.offsetHeight/2,_=s-n.left-e.offsetWidth/2;e.style.top=h+"px",e.style.left=_+"px";function f(){e.removeEventListener("animationend",f),t.removeChild(e),fe.push(e)}e.addEventListener("animationend",f)}window.version=zn;const K=Ue(Qe);K.directive("copy",{mounted(o,t){o.addEventListener("click",function(){Te(t.value,()=>me.success("复制成功"),e=>me.success(e))})}});K.directive("ripple",{mounted(o){const t=mt()?"touchstart":"mousedown";o.setAttribute("ripple",""),o.addEventListener(t,function(e){Vn(e,o)})}});K.component("svg-icon",st);K.component("base-dialog",ut);K.use(Me);K.mount("#app");export{se as _,H as a,Xn as b,Te as c,Re as d,pt as e,S as f,jn as i,Ie as j,me as m,Yn as o,w as s};
