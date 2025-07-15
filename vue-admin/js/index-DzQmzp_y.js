function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./home-DW3x8uC2.js","./vendor-iAWo1EIP.js","../css/vendor-BUMXTAWU.css","./index.vue_vue_type_style_index_0_lang-Dj-V2zoq.js","../css/index-IkwLXdHV.css","../css/home-tXTSvP-d.css","./nested-pLXpPb33.js","../css/nested-DBbt7j1J.css","./menu-1-BY-DwDb4.js","../css/menu-1-PIQFC6DV.css","./menu-2-Cx_54ATn.js","../css/menu-2-DwSbhe9C.css","./menu-3-SvX4uDVM.js","../css/menu-3-C1x6D_tQ.css","./menu-4-Dkx7qZyA.js","../css/menu-4-B_QkhR3M.css","./request-CNV2Z_EW.js","./common-Cl9dvmIw.js","../css/request-BjYaB_Vm.css","./the-components-Mi9QAYyK.js","../css/the-components-BuIyYIOI.css","./example-DawWL69e.js","../css/example-CJnj_JQw.css","./login-BKCp9ACI.js","../css/login-C2zo-VT6.css","./page-401-X8qsDuEw.js","../css/page-401-hNHv4Vr6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var De=Object.defineProperty;var Me=(o,t,e)=>t in o?De(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var M=(o,t,e)=>(Me(o,typeof t!="symbol"?t+"":t,e),e);import{o as Z,r as V,c as E,a as p,d as q,b as R,e as Q,f as he,g as b,h as m,i as L,j as ne,n as z,T as W,w as S,k as j,v as X,l as U,u as _,m as A,t as O,p as Pe,q as Le,F as N,s as K,x as D,y as Se,z as Fe,A as Ne,B as _e,C as ze,D as de,I as qe,E as He,K as Ve,G as je,H as We,J as Xe,L as Ye,N as ae,M as Ue,O as Je,P as Ge}from"./vendor-iAWo1EIP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();let ye=1e3;function fe(){const o=ye;return ye++,o}function Ke(o={}){const t=document,e=`__${Math.random().toString(36).slice(2,7)}`,n={box:`msg-box${e}`,hide:`hide${e}`,text:`msg-text${e}`,icon:`msg-icon${e}`},r=t.createElement("style");r.textContent=`
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
  `.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),t.head.appendChild(r);const s=[];function a(h){let v=10;for(let d=0;d<s.length;d++){const u=s[d];if(h&&h===u)break;v+=u.clientHeight+20}return v}function c(h){for(let v=0;v<s.length;v++)if(s[v]===h){s.splice(v,1);break}h.classList.add(n.hide),s.forEach(function(v){v.style.top=`${a(v)}px`})}function i(h,v="info",d){const u=t.createElement("div");u.className=`${n.box} ${v}`,u.style.top=`${a()}px`,u.style.zIndex=Ce.message,u.innerHTML=`
    <span class="${n.icon}"></span>
    <span class="${n.text}">${h}</span>
    `,s.push(u),t.body.appendChild(u);function f(){u.removeEventListener("animationend",f),setTimeout(c,d||o.duration||3e3,u)}u.addEventListener("animationend",f);function l(){getComputedStyle(u).opacity==="0"&&(u.removeEventListener("transitionend",l),u.remove())}u.addEventListener("transitionend",l)}return{show:i,info(h){i(h,"info")},success(h){i(h,"success")},warning(h){i(h,"warning")},error(h){i(h,"error")}}}function Ze(){const o=document,t=`__${Math.random().toString(36).slice(2,7)}`,e={mask:`dialog-mask${t}`,popup:`dialog-popup${t}`,title:`dialog-title${t}`,content:`dialog-content${t}`,footer:`dialog-footer${t}`,confirm:`confirm${t}`,fade:`fade${t}`,show:`show${t}`,hide:`hide${t}`},n=`
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
  `,r=o.createElement("style");r.textContent=n.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),o.head.appendChild(r);const s={x:"0vw",y:"0vh"};o.addEventListener("click",function(c){const{innerWidth:i,innerHeight:h}=window,v=i/2,d=h/2,u=c.clientY-d,f=c.clientX-v;s.x=`${f/i*100}vw`,s.y=`${u/h*100}vh`},!0);function a(c){const i=o.createElement("section");i.className=e.mask,i.style.zIndex=Ce.dialog,i.style.setProperty("--x",s.x),i.style.setProperty("--y",s.y),s.x="0vw",s.y="0vh";const h=c.cancelText?`<button class="the-btn">${c.cancelText}</button>`:"";i.innerHTML=`
    <div class="${e.popup}">
      <h2 class="${e.title}">${typeof c.title=="string"?c.title:"提示"}</h2>
      <div class="${e.content}">${c.content}</div>
      <div class="${e.footer}">
        ${h}
        <button class="${e.confirm} the-btn blue">${c.confirmText||"确认"}</button>
      </div>
    </div>
    `,o.body.appendChild(i),i.addEventListener("transitionend",function(d){d.target===i&&i.classList.contains(e.hide)&&i.remove()});function v(){i.classList.add(e.hide)}c.cancelText&&(i.querySelector(`.${e.footer} button`).onclick=function(){v(),c.cancel&&c.cancel()}),i.querySelector(`.${e.confirm}`).onclick=function(){v(),c.confirm&&c.confirm()}}return{show:a}}const Ce={get message(){return(fe()+20).toString()},get dialog(){return(fe()+10).toString()}},pe=Ke({duration:3600}),Qe=Ze(),et=Qe.show,tt=function(){let o=location.origin,t="dev",e="";return location.hostname==="test.com"&&(t="test",e="https://api.test.com",o="https://test.com"),location.hostname==="prod.com"&&(t="prod",e="https://api.prod.com",o="https://prod.com"),{get requestTimeout(){return 8e3},get apiUrl(){return e},get isDev(){return t==="dev"},get webUrl(){return o}}}();function nt(o){return Object.prototype.toString.call(o).match(/\[object (\S*)\]/)[1].toLocaleLowerCase()}function Te(o,t){return nt(o)===t}function H(o,t){for(const e in t)if(Object.prototype.hasOwnProperty.call(o,e)){const n=t[e],r=o[e];Te(r,"object")?H(r,n):o[e]=n}}function ot(o=Date.now(),t="Y-M-D h:m:s"){if(["null",null,"undefined",void 0,""].includes(o))return"";typeof o=="string"&&new Date(o).toString()==="Invalid Date"&&(o=o.replace(/-/g,"/"));const e=a=>`0${a}`.slice(-2),n=new Date(o),r=["Y","M","D","h","m","s"],s=[n.getFullYear().toString(),e(n.getMonth()+1),e(n.getDate()),e(n.getHours()),e(n.getMinutes()),e(n.getSeconds())];for(let a=0;a<s.length;a++)t=t.replace(r[a],s[a]);return t}function Ie(o,t,e){if(o=o.replace(/(^\s*)|(\s*$)/g,""),!o){e&&e("复制的内容不能为空！");return}const n="the-clipboard";let r=document.getElementById(n);r||(r=document.createElement("textarea"),r.id=n,r.readOnly=!0,r.style.cssText="font-size: 15px; position: fixed; top: -1000%; left: -1000%;",document.body.appendChild(r)),r.value=o,r.select(),r.setSelectionRange(0,r.value.length),document.execCommand("copy")?t&&t():e&&e("复制失败")}function Vn(o,t,e){let n=o.toString().trim();if(n.length===0)return"";const r="";return n=n.replace(/[^0-9]+/ig,""),r+n}function Re(o,t={}){let e=t;if(Te(o,"string"))try{e=JSON.parse(o)}catch(n){console.warn("JSON格式化对象错误 >>",n)}return e}function st(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)}const it={name:"App",setup(){let t;function e(){const n=Date.now(),{protocol:r,host:s,href:a}=location,c=`${r}//${s}/version.json?t=${n}`;fetch(c).then(i=>i.json()).then(i=>{i.version&&i.version!==window._version?(t&&clearTimeout(t),et({title:"版本更新提示",content:`
            <div class="text-[14px]">
              <p>当前页面有新版本发布, 是否更新？</p>
              <p>新版发布时间：<span class="text-amber-600">${ot(i.version)}</span></p>
              <p>不更新则需要手动刷新页面，否则影响部分功能使用。</p>
            </div>
            `,confirmText:"更新",cancelText:"取消(关闭提醒)",confirm(){const h=new URL(a);h.searchParams.set("t",n.toString()),location.href=h.toString()}})):t=setTimeout(e,6e4)}).catch(i=>{console.error("检查版本出错 >>",i),clearTimeout(t)})}Z(function(){window._version&&!tt.isDev&&(t=setTimeout(e,6e4))})}},ge=(o,t)=>{const e=o.__vccOpts||o;for(const[n,r]of t)e[n]=r;return e};function rt(o,t,e,n,r,s){const a=V("router-view");return p(),E(a)}const at=ge(it,[["render",rt]]),lt={name:"Scrollbar"},ve=q({...lt,props:{thumbColor:{type:String,default:"rgba(147, 147, 153, 0.45)"},thumbSize:{type:Number,default:8},maxHeight:{type:String},maxWidth:{type:String}},setup(o,{expose:t}){const e=o,n=R(),r=R(),s=R(),a=R(),c=Q({x:{width:"",height:"",left:"",bottom:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor},y:{width:"",height:"",top:"",right:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor}}),i=R(!1);function h(){const x=n.value.parentElement;x.style.overflow="hidden"}function v(){c.y.right=c.y.top="0px",c.y.width=e.thumbSize+"px",c.x.bottom=c.x.left="0px",c.x.height=e.thumbSize+"px",c.x.borderRadius=c.y.borderRadius=`${e.thumbSize/2}px`}function d(){const x=r.value;if(x){let k=x.clientHeight/x.scrollHeight*100;k>=100&&(k=0),c.y.height=k+"%",c.y.transform=`translate3d(0, ${x.scrollTop/x.scrollHeight*x.clientHeight}px, 0)`;let B=x.clientWidth/x.scrollWidth*100;B>=100&&(B=0),c.x.width=B+"%",c.x.transform=`translate3d(${x.scrollLeft/x.scrollWidth*x.clientWidth}px, 0, 0)`}}let u=!1,f=!1,l=0;function g(x){const k=s.value,B=a.value,Y=x.target;k.contains(Y)&&(u=!0,f=!1,l=x.clientX-k.getBoundingClientRect().left),B.contains(Y)&&(u=!0,f=!0,l=x.clientY-B.getBoundingClientRect().top)}function $(x){if(!u)return;const k=r.value;if(f){const B=k.getBoundingClientRect().top,Y=k.clientHeight;let re=x.clientY-B;k.scrollTop=(re-l)/Y*k.scrollHeight}else{const B=k.getBoundingClientRect().left,Y=k.clientWidth;let re=x.clientX-B;k.scrollLeft=(re-l)/Y*k.scrollWidth}}function I(x){u=!1,n.value.contains(x.target)||(i.value=!1)}function C(){i.value=!0,d()}function y(){u||(i.value=!1)}let te;const G=R();return Z(function(){h(),v(),document.addEventListener("mousedown",g),document.addEventListener("mousemove",$),document.addEventListener("mouseup",I),te=new ResizeObserver(function(){d()}),G.value&&te.observe(G.value)}),he(function(){document.removeEventListener("mousedown",g),document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",I),te.disconnect()}),t({updateThumbStyle:d}),(x,k)=>(p(),b("div",{class:"the-scrollbar",ref_key:"el",ref:n,onMouseenter:k[1]||(k[1]=B=>C()),onMouseleave:k[2]||(k[2]=B=>y())},[m("div",{ref_key:"wrap",ref:r,class:"the-scrollbar-wrap",style:z({"max-height":o.maxHeight,"max-width":o.maxWidth}),onScroll:k[0]||(k[0]=B=>d())},[m("div",{ref_key:"view",ref:G},[ne(x.$slots,"default")],512)],36),L(W,{name:"fade"},{default:S(()=>[j(m("div",{class:"the-scrollbar-thumb",ref_key:"thumbY",ref:a,title:"滚动条-摁住拖拽Y轴",style:z(c.y)},null,4),[[X,i.value]])]),_:1}),L(W,{name:"fade"},{default:S(()=>[j(m("div",{class:"the-scrollbar-thumb",ref_key:"thumbX",ref:s,title:"滚动条-摁住拖拽X轴",style:z(c.x)},null,4),[[X,i.value]])]),_:1})],544))}}),ct={class:"base-dialog-title f-between f-vertical"},ut={key:0,class:"base-dialog-text"},dt={class:"base-dialog-body"},ft={key:0,class:"base-dialog-footer"},pt={name:"base-dialog"},mt=q({...pt,props:{title:{type:String,default:"提示"},show:{type:Boolean,default:!1},width:{type:String,default:"50%"},closeByMask:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1}},emits:["close","update:show","afterLeave","afterEnd"],setup(o,{emit:t}){const e=o,n=t,r=fe(),s=R(),a=R(),c=R(),i=R(!1);U(()=>e.show,function(l){l?setTimeout(()=>{i.value=!0},0):i.value=!1},{immediate:!0});function h(l){if(!e.show||i.value||s.value.contains(l.target))return;const{clientWidth:g,clientHeight:$}=s.value,I=g/2,C=$/2,y=l.clientY-C,G=`${(l.clientX-I)/g*100}vw`,x=`${y/$*100}vh`;v(G,x)}function v(l,g){const $=c.value;$&&($.style.setProperty("--content-x",l),$.style.setProperty("--content-y",g))}function d(l){(l&&l.target===s.value&&e.closeByMask||l&&l.target===a.value)&&(n("update:show",!1),n("close"))}function u(){i.value&&v("0","0"),n("afterLeave")}function f(){n("afterEnd")}return Z(function(){document.addEventListener("click",h)}),he(function(){document.removeEventListener("click",h)}),(l,g)=>(p(),b("section",null,[(p(),E(Pe,{to:"body",disabled:!e.appendToBody},[L(W,{name:"fade"},{default:S(()=>[j(m("div",{ref_key:"el",ref:s,class:"base-dialog fvc",style:z({zIndex:_(r)}),onClick:d},[L(W,{name:"dialog-move",onAfterLeave:u,onAfterEnter:f},{default:S(()=>[j(m("div",{ref_key:"contentBox",ref:c,class:"base-dialog-content flex",style:z({width:e.width})},[m("div",ct,[l.$slots.header?A("",!0):(p(),b("h2",ut,O(o.title),1)),ne(l.$slots,"header"),m("i",{class:"base-dialog-icon",ref_key:"closeBtn",ref:a,onClick:d},null,512)]),m("div",dt,[L(_(ve),{maxHeight:"76vh"},{default:S(()=>[ne(l.$slots,"default")]),_:3})]),l.$slots.footer?(p(),b("div",ft,[ne(l.$slots,"footer")])):A("",!0)],4),[[X,i.value]])]),_:3})],4),[[X,e.show]])]),_:3})],8,["disabled"]))]))}}),ht="modulepreload",gt=function(o,t){return new URL(o,t).href},be={},T=function(t,e,n){let r=Promise.resolve();if(e&&e.length>0){const s=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.all(e.map(i=>{if(i=gt(i,n),i in be)return;be[i]=!0;const h=i.endsWith(".css"),v=h?'[rel="stylesheet"]':"";if(!!n)for(let f=s.length-1;f>=0;f--){const l=s[f];if(l.href===i&&(!h||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${v}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":ht,h||(u.as="script",u.crossOrigin=""),u.href=i,c&&u.setAttribute("nonce",c),document.head.appendChild(u),h)return new Promise((f,l)=>{u.addEventListener("load",f),u.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};function vt(o){const e=`; ${document.cookie}`.split(`; ${o}=`);return e.length===2?e.pop().split(";").shift():""}function _t(o,t,e){let n=`${o}=${t}; path=/`;e&&(e.expires&&(n+=`; expires=${e.expires.toUTCString()}`),e.domain&&(n+=`; domain=${e.domain}`)),document.cookie=n}function yt(o,t){const e="expires=Thu, 01 Jan 1970 00:00:00 GMT";document.cookie=`${o}=; path=/; ${e}`}const le="ModuleUser";function xe(){return{id:"",name:"",type:"",token:"",avatar:"",account:"",password:""}}const bt=3,xt=24*60*60*1e3;class $t{constructor(){M(this,"info",Q(xe()));this.init()}init(){const t=vt(le);if(t){const e=Re(t);H(this.info,e)}}update(t){H(this.info,t),_t(le,JSON.stringify(this.info),{expires:new Date(Date.now()+bt*xt)})}reset(){H(this.info,xe()),yt(le)}}const wt=""+new URL("../image/logo-CPmPqqKk.png",import.meta.url).href,$e="ModuleLayout";class kt{constructor(){M(this,"addRouters",[]);M(this,"completeRouters",[]);M(this,"info",Q({showTagList:!0,showSidebar:!0,showSidebarLogo:!0,tagList:[],layoutMode:"",keyword:""}));const t=sessionStorage.getItem($e);try{t&&H(this.info,JSON.parse(t))}catch(e){console.log("ModuleLayout init fail >>",e)}U(this.info,()=>{sessionStorage.setItem($e,JSON.stringify(this.info))})}}const ce="ModuleGoods";function we(){return{id:0,name:"",price:0,specs:{size:"xs",width:"",height:""}}}class Et{constructor(){M(this,"info",Q(we()));const t=sessionStorage.getItem(ce);if(t){const e=Re(t);H(this.info,e)}}update(t){H(this.info,t),sessionStorage.setItem(ce,JSON.stringify(this.info))}reset(){H(this.info,we()),sessionStorage.removeItem(ce)}}class Lt{constructor(){M(this,"projectInfo",{title:"Vue Typescript Admin",name:"XXX后台管理平台",logo:wt,link:"https://github.com/Travis-hjs/vue-admin",email:"1141752341@qq.com"});M(this,"layout",new kt);M(this,"user",new $t);M(this,"_goods");console.log("%c ModuleStore init","color: #409EFF")}get goods(){return this._goods||(this._goods=new Et),this._goods}}const w=new Lt,St={key:0,class:"separator"},Ct={key:1,href:"javascript:void(0)"},Tt={name:"BreadCrumb"},It=q({...Tt,setup(o){const t=Le(),e=R([]);function n(){const r=t.matched.filter(s=>s.meta&&s.meta.title).map(s=>({path:s.path,meta:{...s.meta}}));e.value=r}return U(()=>t.path,function(){t.path.startsWith("/redirect/")||n()}),n(),(r,s)=>{const a=V("router-link");return p(),E(Fe,{name:"breadcrumb",tag:"div",class:"layout-breadcrumb f-vertical"},{default:S(()=>[(p(!0),b(N,null,K(e.value,(c,i)=>(p(),b("span",{class:D(["layout-breadcrumb-item",{last:i===e.value.length-1}]),key:c.path},[i>0?(p(),b("i",St,"/")):A("",!0),i===e.value.length-1?(p(),b("a",Ct,O(c.meta.title),1)):(p(),E(a,{key:2,to:c.path},{default:S(()=>[Se(O(c.meta.title),1)]),_:2},1032,["to"]))],2))),128))]),_:1})}}});function se(){const o=Le(),t=Ne();function e(s){return JSON.stringify(s||{})}function n(s){return s.path===o.path&&e(s.query)===e(o.query)&&e(s.params)===e(o.params)}function r(s){if(n(s))return!0;if(s.children&&s.children.length)for(let a=0;a<s.children.length;a++){const c=s.children[a];if(r(c))return!0}return!1}return{route:o,router:t,isActive:n,hasActive:r}}let ke=0;function Rt(){return ke++,`menu-${ke}`}function Ot(o=300){const t=`${o}ms height`;function e(i){i.style.transition=t,i.style.height="0px"}function n(i){i.scrollHeight!==0?i.style.height=`${i.scrollHeight}px`:i.style.height="",i.style.overflow="hidden"}function r(i){i.style.transition=i.style.height=""}function s(i){i.style.display="block",i.style.height=`${i.scrollHeight}px`,i.style.overflow="hidden"}function a(i){i.scrollHeight!==0&&(i.style.transition=t,i.style.height="0px")}function c(i){i.style.transition=i.style.height=""}return{onBeforeEnter:e,onEnter:n,onAfterEnter:r,onBeforeLeave:s,onLeave:a,onAfterLeave:c}}const Bt={class:"the-layout-tag-box"},At={class:"the-layout-tags"},Dt=["onClick"],Mt=["onClick"],Pt={name:"TagList"},Ft=q({...Pt,setup(o){const t=w.layout.info,{route:e,router:n,isActive:r}=se();function s(d){if(r(t.tagList[d])){const u=d>0?d-1:d+1,f=t.tagList[u];n.push({path:f.path,query:f.query,params:f.params})}t.tagList.splice(d,1)}U(()=>e.path,function(){t.tagList.some(u=>r(u))||t.tagList.push({name:e.name,path:e.path,query:e.query,params:e.params,meta:e.meta})},{immediate:!0});const a=Q({show:!1,left:""}),c={list:[{label:"关闭其他",id:1,click(){a.show=!1;const d=c.current;r(d)?t.tagList=[d]:n.push(d.path).then(()=>{t.tagList=[d]})},show:()=>t.tagList.length>1},{label:"在新标签打开",id:2,click(){a.show=!1;const d=location.href.split("#");window.open(`${d[0]}#${c.current.path}`,"_blank")}},{label:"复制当前信息",id:3,click(){a.show=!1;const d=c.current;Ie(JSON.stringify(d,null,4),()=>pe.success("复制成功！"))}}],current:void 0},i=R();function h(d,u){a.show=!0,c.current=u,ze(()=>{let f=d.x;const l=parseFloat(getComputedStyle(i.value).width),g=document.body.clientWidth-l;f>g&&(f=g),a.left=`${f}px`})}function v(d){const u=d.target;a.show&&!i.value.contains(u)&&(a.show=!1)}return Z(function(){document.addEventListener("click",v)}),he(function(){document.removeEventListener("click",v)}),(d,u)=>{const f=V("router-link");return p(),b(N,null,[m("div",Bt,[L(_(ve),null,{default:S(()=>[m("div",At,[(p(!0),b(N,null,K(_(t).tagList,(l,g)=>(p(),E(f,{class:D(["the-layout-tag",{"is-active":_(r)(l)}]),key:l.path+g,to:{path:l.path,query:l.query,params:l.params},onContextmenu:_e($=>h($,l),["prevent"])},{default:S(()=>[m("span",null,O(l.meta.title),1),m("i",{class:"close",onClick:_e($=>s(g),["prevent","stop"])},"-",8,Dt)]),_:2},1032,["class","to","onContextmenu"]))),128))])]),_:1})]),j(m("div",{ref_key:"tagMenuRef",ref:i,class:"the-layout-tag-menu",style:z({left:a.left})},[(p(!0),b(N,null,K(c.list,l=>j((p(),b("div",{key:l.id,class:"the-layout-tag-menu-item",onClick:g=>l.click()},O(l.label),9,Mt)),[[X,l.show?l.show():!0]])),128))],4),[[X,a.show]])],64)}}}),Nt={name:"Icon"},F=q({...Nt,props:{name:{type:String,required:!0},size:{type:[String,Number],default:void 0},color:{type:String,default:void 0}},setup(o){const t=o,e=de(()=>{const n=t.size;return{fontSize:typeof n=="number"?`${n}px`:n,color:t.color}});return(n,r)=>(p(),E(_(qe),{icon:t.name,style:z(e.value),class:"the-icon"},null,8,["icon","style"]))}}),zt={class:"the-layout-header"},qt={class:"the-layout-navbar flex"},Ht={class:"user-info-box f-vertical"},Vt=["src"],jt={class:"the-tag green mr-[10px]"},Wt=m("span",null,"退出登录",-1),Xt={name:"HeaderBar"},Yt=q({...Xt,setup(o){const t=w.layout.info,e=w.user.info,{router:n}=se();function r(){t.showSidebar=!t.showSidebar}const s="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif";function a(){w.user.reset(),n.push("/login").then(()=>{t.tagList=[],Nn()})}return(c,i)=>(p(),b("div",zt,[m("div",qt,[m("div",{class:D(["fvc menu-fold",{"menu-fold-actived":_(t).showSidebar}]),onClick:i[0]||(i[0]=h=>r())},[L(_(F),{name:"tdesign:menu-fold",size:"24px",color:"#555"})],2),L(It,{class:"f1"}),m("div",Ht,[m("img",{class:"avatar",src:_(e).avatar||s},null,8,Vt),m("span",jt,O(_(e).name||_(e).account||"用户未设置昵称"),1),m("button",{class:"logout f-vertical",onClick:i[1]||(i[1]=h=>a())},[L(_(F),{name:"tdesign:logout",class:"mr-[4px]"}),Wt])])]),_(t).showTagList?(p(),E(Ft,{key:0})):A("",!0)]))}}),Ut={class:"f1"},Jt=m("i",{class:"the-layout-menu-arrow"},null,-1),Gt=["href"],Kt={class:"f1"},Zt={class:"f1"},Qt=["href"],en=q({__name:"MenuItem",props:{menu:{type:Object,required:!0},level:{type:Number,default:0}},setup(o){const t=o,{onBeforeEnter:e,onEnter:n,onAfterEnter:r,onBeforeLeave:s,onLeave:a,onAfterLeave:c}=Ot(),{isActive:i,hasActive:h}=se(),v=de(function(){const g=i(t.menu);return{"the-layout-menu-title":!0,"is-current":h(t.menu)&&!g,"is-open":t.menu.isOpen,"is-active":g}}),d=de(function(){return{"the-layout-menu-list":!0,"is-open":t.menu.isOpen}});function u(g){return{"the-layout-menu-link":!0,"is-active":i(g)}}function f(g){return!!(g.children&&g.children.length>0)}function l(){const g=t.menu;g.isOpen=!g.isOpen}return(g,$)=>{const I=V("router-link"),C=V("MenuItem",!0);return p(),b("section",{class:"the-layout-menu",style:z({"--level":t.level})},[f(t.menu)?(p(),b("div",{key:0,class:D(v.value),onClick:$[0]||($[0]=y=>l())},[t.menu.icon?(p(),E(_(F),{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):A("",!0),m("span",Ut,O(t.menu.title),1),Jt],2)):(p(),b(N,{key:1},[t.menu.link?(p(),b("a",{key:0,href:t.menu.link,class:D(v.value),target:"_blank"},[t.menu.icon?(p(),E(_(F),{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):A("",!0),m("span",Kt,O(t.menu.title),1)],10,Gt)):(p(),E(I,{key:1,to:t.menu.path,class:D(v.value)},{default:S(()=>[t.menu.icon?(p(),E(_(F),{key:0,name:t.menu.icon,class:"menu-icon"},null,8,["name"])):A("",!0),m("span",Zt,O(t.menu.title),1)]),_:1},8,["to","class"]))],64)),f(t.menu)?(p(),E(W,{key:2,onBeforeEnter:_(e),onEnter:_(n),onAfterEnter:_(r),onBeforeLeave:_(s),onLeave:_(a),onAfterLeave:_(c)},{default:S(()=>[j(m("div",{class:D(d.value)},[(p(!0),b(N,null,K(t.menu.children,y=>(p(),b(N,{key:y.menuId},[f(y)?(p(),E(C,{key:0,menu:y,level:t.level+1},null,8,["menu","level"])):(p(),b(N,{key:1},[y.link?(p(),b("a",{key:0,href:y.link,class:D(u(y)),target:"_blank"},[y.icon?(p(),E(_(F),{key:0,name:y.icon,class:"menu-icon"},null,8,["name"])):A("",!0),m("span",null,O(y.title),1)],10,Qt)):(p(),E(I,{key:1,to:y.path,class:D(u(y))},{default:S(()=>[y.icon?(p(),E(_(F),{key:0,name:y.icon,class:"menu-icon"},null,8,["name"])):A("",!0),m("span",null,O(y.title),1)]),_:2},1032,["to","class"]))],64))],64))),128))],2),[[X,t.menu.isOpen]])]),_:1},8,["onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])):A("",!0)],4)}}}),tn={name:"Empty",props:{text:{type:String,default:"暂无数据"},size:{type:Number}}},nn="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20width='64'%20height='41'%20viewBox='0%200%2064%2041'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(0%201)'%20fill='none'%20fill-rule='evenodd'%3e%3cellipse%20fill='%23f5f5f5'%20cx='32'%20cy='33'%20rx='32'%20ry='7'%3e%3c/ellipse%3e%3cg%20fill-rule='nonzero'%20stroke='%23d9d9d9'%3e%3cpath%20d='M55%2012.76L44.854%201.258C44.367.474%2043.656%200%2042.907%200H21.093c-.749%200-1.46.474-1.947%201.257L9%2012.761V22h46v-9.24z'%3e%3c/path%3e%3cpath%20d='M41.613%2015.931c0-1.605.994-2.93%202.227-2.931H55v18.137C55%2033.26%2053.68%2035%2052.05%2035h-40.1C10.32%2035%209%2033.259%209%2031.137V13h11.16c1.233%200%202.227%201.323%202.227%202.928v.022c0%201.605%201.005%202.901%202.237%202.901h14.752c1.232%200%202.237-1.308%202.237-2.913v-.007z'%20fill='%23fafafa'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",on={class:"empty"},sn={class:"text"};function rn(o,t,e,n,r,s){return p(),b("div",on,[m("img",{class:"icon",style:z({width:e.size?`${e.size}px`:void 0}),src:nn,alt:""},null,4),m("span",sn,O(e.text),1)])}const an=ge(tn,[["render",rn],["__scopeId","data-v-a5ec6d3f"]]),ln={name:"Menu"},cn=q({...ln,props:{mergeOnlyOneChild:{type:Number,default:0}},setup(o){const t=o,e=w.layout.info;function n(u){const f=[];for(let l=0;l<u.length;l++){const g=u[l];if(g.meta&&g.meta.hidden)continue;const $={menuId:Rt(),path:g.path,isOpen:!1,title:g.meta.title,icon:g.meta.icon,link:g.meta.link};g.children&&g.children.length&&($.children=n(g.children)),f.push($)}return f}function r(u,f=1){const l=[],g=f<t.mergeOnlyOneChild,$=f+1;for(let I=0;I<u.length;I++){const C=u[I],y=C.children;y&&y.length>0?y.length===1?(l.push(y[0]),y[0].children&&y[0].children.length>0&&g&&(y[0].children=r(y[0].children,$))):(l.push(C),g&&(C.children=r(y,$))):l.push(C)}return l}function s(u){const f=e.keyword;return u.filter(l=>l.children&&(l.children=s(l.children),l.children.length>0)?(l.isOpen=!0,!0):!!l.title.includes(f))}let a=n(w.layout.completeRouters);t.mergeOnlyOneChild&&(a=r(a));const c=R(a),{route:i,isActive:h}=se();function v(u){const f=[];function l(g,$){for(let I=0;I<g.length;I++){const C=g[I];if(h(C))return f.push(...$),!0;if(C.children&&C.children.length&&l(C.children,[...$,C]))return!0}return!1}return l(u,[]),f}function d(){v(c.value).forEach(f=>{f.isOpen=!0})}return U(()=>e.keyword,function(u){const f=JSON.parse(JSON.stringify(a));if(u){const l=s(f);c.value=l}else c.value=f,d()}),U(()=>i.path,function(){d()},{immediate:!0}),(u,f)=>(p(),b(N,null,[(p(!0),b(N,null,K(c.value,(l,g)=>(p(),E(en,{menu:l,key:l.menuId,style:z(g?void 0:{"margin-top":"0"})},null,8,["menu","style"]))),128)),c.value.length?A("",!0):(p(),E(_(an),{key:0,style:{height:"140px"},text:"没有匹配到任何菜单"}))],64))}}),un={class:"the-layout-sidebar"},dn={class:"the-layout-sidebar-content"},fn={key:0,class:"the-logo-box"},pn=["src"],mn=["title"],hn={key:1,style:{height:"var(--page-padding)"}},gn={class:"the-layout-search-box"},vn={class:"f1"},_n={class:"the-layout-sidebar-content padding-full"},yn={name:"Sidebar"},bn=q({...yn,setup(o){const t=w.layout.info,e=w.projectInfo;function n(){t.keyword=""}return(r,s)=>{const a=V("router-link");return p(),b("div",un,[m("section",dn,[L(W,{name:"fade",mode:"out-in"},{default:S(()=>[_(t).showSidebarLogo?(p(),b("div",fn,[L(a,{class:"the-logo-link f-vertical",to:"/"},{default:S(()=>[m("img",{class:"the-logo",src:_(e).logo},null,8,pn),m("h1",{class:"the-logo-title ellipsis",title:_(e).title},O(_(e).title),9,mn)]),_:1})])):(p(),b("div",hn))]),_:1}),m("div",gn,[j(m("input",{"onUpdate:modelValue":s[0]||(s[0]=c=>_(t).keyword=c),type:"text",placeholder:"请输入关键字检索菜单"},null,512),[[He,_(t).keyword]]),_(t).keyword?(p(),E(_(F),{key:0,class:"the-layout-search-icon",name:"tdesign:close-circle",onClick:s[1]||(s[1]=c=>n())})):(p(),E(_(F),{key:1,class:"the-layout-search-icon",name:"tdesign:search"}))])]),m("section",vn,[L(_(ve),null,{default:S(()=>[m("div",_n,[L(cn,{mergeOnlyOneChild:1})])]),_:1})])])}}}),xn={name:"Layout"},Ee=q({...xn,setup(o){const t=w.layout.info;function e(h){let v=[];for(let d=0;d<h.length;d++){const u=h[d],f=u.children;f&&f.length>0&&(v=v.concat(e(f))),u.meta.keepAlive&&u.name&&v.push(u.name)}return v.filter(d=>d)}const n=e(w.layout.completeRouters),r=R(),s=R(!1);let a;function c(){a.scrollTo({top:0,left:0,behavior:"smooth"})}function i(){s.value=a.scrollTop>document.documentElement.clientHeight}return Z(function(){a=r.value,a.addEventListener("scroll",i),i()}),(h,v)=>{const d=V("router-view");return p(),b("div",{class:D(["the-layout",_(t).layoutMode,{"has-tag-list":_(t).showTagList},{"collapsed-sidebar":!_(t).showSidebar}])},[L(Yt),L(bn),m("div",{class:"the-layout-content",ref_key:"contentBox",ref:r},[L(d,{class:"the-layout-page"},{default:S(({Component:u,route:f})=>[L(W,{name:"page-y",mode:"out-in"},{default:S(()=>[(p(),E(Ve,{include:_(n)},[(p(),E(je(u),{key:f.fullPath}))],1032,["include"]))]),_:2},1024)]),_:1})],512),m("button",{class:D(["the-layout-to-top fvc",{hidden:!s.value}]),title:"返回顶部",onClick:v[0]||(v[0]=u=>c())},[L(_(F),{name:"tdesign:align-top",size:20})],2)],2)}}}),$n={name:"page-404",data(){return{project:w.projectInfo}}},ie=o=>(Xe("data-v-9091b7be"),o=o(),Ye(),o),wn={class:"page-404 fvc"},kn=We('<div class="from-top-box f-vertical" data-v-9091b7be><div class="mr-[30px]" data-v-9091b7be><div class="point-icon mb-[50px]" data-v-9091b7be></div><div class="point-icon" data-v-9091b7be></div></div><div class="radius-icon" data-v-9091b7be></div><div class="code-value" data-v-9091b7be>404</div></div>',1),En={class:"from-right-box mb-[40px]"},Ln=ie(()=>m("p",{class:"text"},"你访问的页面不存在，请确认页面路径是否正确。",-1)),Sn=ie(()=>m("p",{class:"text"},"我们只收集某些错误信息，然后需要你重新点击返回首页或返回上一页。",-1)),Cn={class:"pt-[40px]"},Tn={class:"from-bottom-box flex"},In=ie(()=>m("img",{class:"qrcode-box",src:"https://travis-hjs.github.io/images/reward-code.jpg",alt:"谢谢打赏！"},null,-1)),Rn={class:"pt-[20px]"},On=ie(()=>m("p",{class:"desc"},"如需技术支持，请扫码联系作者。",-1)),Bn={class:"desc"},An={class:"desc"};function Dn(o,t,e,n,r,s){const a=V("router-link");return p(),b("div",wn,[m("section",null,[kn,m("div",En,[Ln,Sn,m("div",Cn,[L(a,{class:"go-back fvc",to:"/"},{default:S(()=>[Se("返回首页")]),_:1})])]),m("div",Tn,[In,m("div",Rn,[On,m("p",Bn,"邮箱地址："+O(r.project.email),1),m("p",An,"项目地址："+O(r.project.link),1)])])])])}const oe=ge($n,[["render",Dn],["__scopeId","data-v-9091b7be"]]),Mn=[{path:"/",name:"index",redirect:"/home",component:Ee,meta:{title:"首页",icon:"tdesign:home"},children:[{path:"/home",meta:{title:"首页展示",icon:"tdesign:bookmark-double"},component:()=>T(()=>import("./home-DW3x8uC2.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)},{path:"/nested",name:"nested",redirect:"/nested/menu-1",meta:{title:"多级菜单嵌套",icon:"tdesign:tree-square-dot"},component:()=>T(()=>import("./nested-pLXpPb33.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/menu-1",name:"nested/menu-1",meta:{title:"el-plus 表格"},component:()=>T(()=>import("./menu-1-BY-DwDb4.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/nested/menu-2",name:"nested/menu-2",meta:{title:"el-plus 表单验证"},component:()=>T(()=>import("./menu-2-Cx_54ATn.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)},{path:"/nested/three-level",name:"nested/three-level",meta:{title:"三级菜单"},redirect:"/nested/three-level/menu-1",component:()=>T(()=>import("./nested-pLXpPb33.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/three-level/menu-1",name:"/nested/three-level/menu-1",meta:{title:"菜单 3-1"},component:()=>T(()=>import("./menu-1-BY-DwDb4.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/nested/three-level/menu-2",name:"/nested/three-level/menu-2",meta:{title:"菜单 3-2"},component:()=>T(()=>import("./menu-2-Cx_54ATn.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)}]},{path:"/nested/four-level",name:"nested/four-level",meta:{title:"三级菜单-2"},redirect:"/nested/four-level/menu-1",component:()=>T(()=>import("./nested-pLXpPb33.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/four-level/menu-1",name:"/nested/four-level/menu-1",meta:{title:"菜单 3-2-1"},component:()=>T(()=>import("./menu-1-BY-DwDb4.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)}]},{path:"/nested/menu-3",name:"nested/menu-3",meta:{title:"菜单 2-3"},component:()=>T(()=>import("./menu-3-SvX4uDVM.js"),__vite__mapDeps([12,1,2,13]),import.meta.url)}]},{path:"/link-baidu",name:"link-baidu",component:oe,meta:{title:"百度一下",icon:"tdesign:system-search-filled",link:"https://www.baidu.com"}},{path:"/menu-4",name:"menu-4",meta:{title:"换行菜单标题换行菜单标题",icon:"tdesign:component-layout"},component:()=>T(()=>import("./menu-4-Dkx7qZyA.js"),__vite__mapDeps([14,1,2,15]),import.meta.url)}]},{path:"/example",name:"example",component:Ee,meta:{title:"示例页栏目",icon:"tdesign:play-demo"},redirect:"/example/request",children:[{path:"/example/request",name:"example-request",meta:{title:"http-请求示例",keepAlive:!0},component:()=>T(()=>import("./request-CNV2Z_EW.js"),__vite__mapDeps([16,1,2,17,18]),import.meta.url)},{path:"/example/components",name:"example-components",meta:{title:"自定义组件"},component:()=>T(()=>import("./the-components-Mi9QAYyK.js"),__vite__mapDeps([19,1,2,17,20]),import.meta.url)},{path:"/example/tsx",name:"example-tsx",meta:{title:"tsx-示例"},component:()=>T(()=>import("./example-DawWL69e.js"),__vite__mapDeps([21,1,2,22]),import.meta.url)},{path:"/example/no-found",name:"no-found",meta:{title:"404 页面",link:`${location.origin+location.pathname}#/is-error-path`},component:oe}]},{path:"/"+w.projectInfo.link,name:"GitHub-Travis",component:oe,meta:{title:"项目地址",icon:"tdesign:logo-github-filled",link:w.projectInfo.link,auth:[0]}}],J={path:"/",query:{}},me="redirect404";let P;function Oe(o){const t=[],e=w.user.info.type;for(let n=0;n<o.length;n++){const r=o[n],s=r.meta?r.meta.auth:void 0;(!s||s&&s.includes(e))&&(r.children&&r.children.length>0&&(r.children=Oe(r.children)),t.push(r))}return t}async function Pn(){return Oe(Mn)}function Fn(o,t){P=o,P.beforeEach(async function(e,n,r){if(ae.start(),w.user.info.token)if(w.layout.addRouters.length>0)r();else{w.layout.addRouters=await Pn();for(let s=0;s<w.layout.addRouters.length;s++){const a=w.layout.addRouters[s];P.addRoute(a)}P.hasRoute(me)||P.addRoute({...t[1],path:"/:catchAll(.*)",name:me}),w.layout.completeRouters=t.concat(w.layout.addRouters),r({...e,replace:!0})}else e.path==="/login"?r():(J.path=e.path,J.query=e.query,r({path:"/login"}),ae.done())}),P.afterEach(e=>{ae.done(),e.meta&&e.meta.title&&(document.title=e.meta.title)})}function jn(){P.replace({path:J.path,query:J.query})}function Nn(){const o=w.layout.addRouters;for(let t=o.length-1;t>-1;t--){const e=o[t];e.name&&P.hasRoute(e.name)&&P.removeRoute(e.name)}J.path="/",J.query={},P.removeRoute(me),w.layout.addRouters=w.layout.completeRouters=[]}const Be=[{path:"/login",name:"login",component:()=>T(()=>import("./login-BKCp9ACI.js"),__vite__mapDeps([23,1,2,17,3,4,24]),import.meta.url),meta:{hidden:!0,title:"请登录"}},{path:"/404",name:"page-404",component:oe,meta:{hidden:!0,title:"不存在该页面"}},{path:"/401",name:"page-401",component:()=>T(()=>import("./page-401-X8qsDuEw.js"),__vite__mapDeps([25,1,2,26]),import.meta.url),meta:{hidden:!0,title:"暂无权限访问"}}],Ae=Ue({history:Je(),routes:Be});Fn(Ae,Be);const ue=[];function zn(o,t){let e;ue.length>1?e=ue.shift():(e=document.createElement("div"),e.className="ripple");const n=t.getBoundingClientRect(),r=t.getAttribute("color");let s=Math.max(n.width,n.height);s>200&&(s=200),e.style.height=e.style.width=s+"px",e.style.backgroundColor=r||"rgba(255, 255, 255, .45)",t.appendChild(e);const a=o.touches,c=a?a[0].clientY:o.clientY,i=a?a[0].clientX:o.clientX,h=c-n.top-e.offsetHeight/2,v=i-n.left-e.offsetWidth/2;e.style.top=h+"px",e.style.left=v+"px";function d(){e.removeEventListener("animationend",d),t.removeChild(e),ue.push(e)}e.addEventListener("animationend",d)}const ee=Ge(at);ee.directive("copy",{mounted(o,t){o.addEventListener("click",function(){Ie(t.value,()=>pe.success("复制成功"),e=>pe.success(e))})}});ee.directive("ripple",{mounted(o){const t=st()?"touchstart":"mousedown";o.setAttribute("ripple",""),o.addEventListener(t,function(e){zn(e,o)})}});ee.component("base-dialog",mt);ee.use(Ae);ee.mount("#app");export{ge as _,H as a,et as b,Ie as c,F as d,ve as e,nt as f,tt as g,Vn as i,Re as j,pe as m,jn as o,w as s};
