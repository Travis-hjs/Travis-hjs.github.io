function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./home-sdtwcxtk.js","./vendor-CXPWdb6f.js","../css/vendor-BUMXTAWU.css","./index.vue_vue_type_style_index_0_lang-wkVjDpD3.js","../css/index-IkwLXdHV.css","../css/home-tXTSvP-d.css","./nested-Cq_JFNhl.js","../css/nested-DBbt7j1J.css","./menu-1-Ch07WTdq.js","./example-CexIWO7Z.js","../css/example-CJnj_JQw.css","../css/menu-1-PIQFC6DV.css","./menu-2-VDLRIWYK.js","../css/menu-2-DwSbhe9C.css","./menu-3-BTprvKbB.js","../css/menu-3-C1x6D_tQ.css","./menu-4-B9KlkiCY.js","../css/menu-4-B_QkhR3M.css","./request-s1oLlXu-.js","./common-fyrvM4kL.js","../css/request-BjYaB_Vm.css","./the-components-DqM8oGvS.js","../css/the-components-BuIyYIOI.css","./login-DRiziCg8.js","../css/login-C2zo-VT6.css","./page-401-C6kTgRi7.js","../css/page-401-hNHv4Vr6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var De=Object.defineProperty;var Me=(o,e,t)=>e in o?De(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var M=(o,e,t)=>(Me(o,typeof e!="symbol"?e+"":e,t),t);import{o as Q,r as V,c as w,a as f,d as q,b as I,e as ee,f as pe,g as _,h as m,i as L,j as te,n as z,T as W,w as C,k as j,v as X,l as U,m as B,t as R,u as v,p as Pe,q as Ee,F as N,s as Z,x as D,y as Le,z as Fe,A as Ne,B as ve,C as ze,D as oe,I as qe,E as He,K as Ve,G as je,H as We,N as ae,J as Xe,L as Ye,M as Ue}from"./vendor-CXPWdb6f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();let ye=1e3;function de(){const o=ye;return ye++,o}function Je(o={}){const e=document,t=`__${Math.random().toString(36).slice(2,7)}`,n={box:`msg-box${t}`,hide:`hide${t}`,text:`msg-text${t}`,icon:`msg-icon${t}`},s=e.createElement("style");s.textContent=`
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
  `.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),e.head.appendChild(s);const i=[];function l(h){let y=10;for(let p=0;p<i.length;p++){const u=i[p];if(h&&h===u)break;y+=u.clientHeight+20}return y}function a(h){for(let y=0;y<i.length;y++)if(i[y]===h){i.splice(y,1);break}h.classList.add(n.hide),i.forEach(function(y){y.style.top=`${l(y)}px`})}function r(h,y="info",p){const u=e.createElement("div");u.className=`${n.box} ${y}`,u.style.top=`${l()}px`,u.style.zIndex=Ce.message,u.innerHTML=`
    <span class="${n.icon}"></span>
    <span class="${n.text}">${h}</span>
    `,i.push(u),e.body.appendChild(u);function c(){u.removeEventListener("animationend",c),setTimeout(a,p||o.duration||3e3,u)}u.addEventListener("animationend",c);function d(){getComputedStyle(u).opacity==="0"&&(u.removeEventListener("transitionend",d),u.remove())}u.addEventListener("transitionend",d)}return{show:r,info(h){r(h,"info")},success(h){r(h,"success")},warning(h){r(h,"warning")},error(h){r(h,"error")}}}function Ge(){const o=document,e=`__${Math.random().toString(36).slice(2,7)}`,t={mask:`dialog-mask${e}`,popup:`dialog-popup${e}`,title:`dialog-title${e}`,content:`dialog-content${e}`,footer:`dialog-footer${e}`,confirm:`confirm${e}`,fade:`fade${e}`,show:`show${e}`,hide:`hide${e}`},n=`
  .${t.mask} {
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
    animation: ${t.fade} var(--time);
  }
  .${t.mask} * {
    box-sizing: border-box;
  }
  .${t.popup} {
    width: 74%;
    max-width: 375px;
    border-radius: var(--border-radius);
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    background-color: #fff;
    transition: var(--transition);
    animation: ${t.show} var(--time);
  }
  .${t.title} {
    font-size: 18px;
    padding: 12px 15px;
    border-bottom: solid 1px #eee;
    font-weight: normal;
    color: var(--black);
    text-align: left;
  }
  .${t.content} {
    padding: 16px 15px;
    font-size: 15px;
    color: var(--text-color);
    text-align: left;
  }
  .${t.footer} {
    width: 100%;
    text-align: right;
    border-top: solid 1px #eee;
    padding: 12px 15px;
  }
  @keyframes ${t.fade} {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes ${t.show} {
    0% { transform: translate3d(var(--x), var(--y), 0) scale(0); }
    100% { transform: translate3d(0, 0, 0) scale(1); }
  }
  .${t.mask}.${t.hide} {
    opacity: 0;
  }
  .${t.mask}.${t.hide} .${t.popup} {
    transform: translate3d(var(--x), var(--y), 0) scale(0);
  }
  `,s=o.createElement("style");s.textContent=n.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),o.head.appendChild(s);const i={x:"0vw",y:"0vh"};o.addEventListener("click",function(a){const{innerWidth:r,innerHeight:h}=window,y=r/2,p=h/2,u=a.clientY-p,c=a.clientX-y;i.x=`${c/r*100}vw`,i.y=`${u/h*100}vh`},!0);function l(a){const r=o.createElement("section");r.className=t.mask,r.style.zIndex=Ce.dialog,r.style.setProperty("--x",i.x),r.style.setProperty("--y",i.y),i.x="0vw",i.y="0vh";const h=a.cancelText?`<button class="the-btn">${a.cancelText}</button>`:"";r.innerHTML=`
    <div class="${t.popup}">
      <h2 class="${t.title}">${typeof a.title=="string"?a.title:"提示"}</h2>
      <div class="${t.content}">${a.content}</div>
      <div class="${t.footer}">
        ${h}
        <button class="${t.confirm} the-btn blue">${a.confirmText||"确认"}</button>
      </div>
    </div>
    `,o.body.appendChild(r),r.addEventListener("transitionend",function(p){p.target===r&&r.classList.contains(t.hide)&&r.remove()});function y(){r.classList.add(t.hide)}a.cancelText&&(r.querySelector(`.${t.footer} button`).onclick=function(){y(),a.cancel&&a.cancel()}),r.querySelector(`.${t.confirm}`).onclick=function(){y(),a.confirm&&a.confirm()}}return{show:l}}const Ce={get message(){return(de()+20).toString()},get dialog(){return(de()+10).toString()}},se=Je({duration:3600}),Ke=Ge(),Ze=Ke.show,Qe=function(){let o=location.origin,e="dev",t="";return location.hostname==="test.com"&&(e="test",t="https://api.test.com",o="https://test.com"),location.hostname==="travis-hjs.github.io"&&(e="prod",t="https://api.prod.com",o="https://prod.com"),{get requestTimeout(){return 8e3},get apiUrl(){return t},get isDev(){return e==="dev"},get webUrl(){return o}}}();function et(o){return Object.prototype.toString.call(o).match(/\[object (\S*)\]/)[1].toLocaleLowerCase()}function me(o,e){return et(o)===e}function H(o,e){for(const t in e)if(Object.prototype.hasOwnProperty.call(o,t)){const n=e[t],s=o[t];me(s,"object")?H(s,n):o[t]=n}}function tt(o=Date.now(),e="Y-M-D h:m:s"){if(["null",null,"undefined",void 0,""].includes(o))return"";typeof o=="string"&&new Date(o).toString()==="Invalid Date"&&(o=o.replace(/-/g,"/"));const t=l=>`0${l}`.slice(-2),n=new Date(o),s=["Y","M","D","h","m","s"],i=[n.getFullYear().toString(),t(n.getMonth()+1),t(n.getDate()),t(n.getHours()),t(n.getMinutes()),t(n.getSeconds())];for(let l=0;l<i.length;l++)e=e.replace(s[l],i[l]);return e}function Se(o,e,t){if(o=o.replace(/(^\s*)|(\s*$)/g,""),!o){t&&t("复制的内容不能为空！");return}const n="the-clipboard";let s=document.getElementById(n);s||(s=document.createElement("textarea"),s.id=n,s.readOnly=!0,s.style.cssText="font-size: 15px; position: fixed; top: -1000%; left: -1000%;",document.body.appendChild(s)),s.value=o,s.select(),s.setSelectionRange(0,s.value.length),document.execCommand("copy")?e?e():se.success("复制成功"):t&&t("复制失败")}function Fn(o,e,t){let n=o.toString().trim();if(n.length===0)return"";const s="";return n=n.replace(/[^0-9]+/ig,""),s+n}function nt(o,e){return JSON.parse(JSON.stringify(o))}function Te(o,e={}){let t=e;if(me(o,"string"))try{t=JSON.parse(o)}catch(n){console.warn("JSON格式化对象错误 >>",n)}return t}function ot(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)}const st={name:"App",setup(){let e;function t(){const n=Date.now(),{origin:s,pathname:i}=location,l=`${s+i}version.json?t=${n}`;fetch(l).then(a=>a.json()).then(a=>{a.version&&a.version!==window._version?(clearTimeout(e),Ze({title:"版本更新提示",content:`
            <div class="text-[14px]">
              <p>当前页面有新版本发布, 是否更新？</p>
              <p>新版发布时间：<span class="text-amber-600">${tt(a.version)}</span></p>
              <p>不更新则需要手动刷新页面，否则影响部分功能使用。</p>
            </div>
            `,confirmText:"更新",cancelText:"取消(关闭提醒)",confirm(){location.reload()}})):e=setTimeout(t,18e4)}).catch(a=>{console.error("检查版本出错 >>",a),clearTimeout(e)})}Q(function(){window._version&&!Qe.isDev&&t()})}},he=(o,e)=>{const t=o.__vccOpts||o;for(const[n,s]of e)t[n]=s;return t};function it(o,e,t,n,s,i){const l=V("router-view");return f(),w(l)}const rt=he(st,[["render",it]]),le=[];function at(o,e){let t;le.length>1?t=le.shift():(t=document.createElement("div"),t.className="ripple");const n=e.getBoundingClientRect(),s=e.getAttribute("color");let i=Math.max(n.width,n.height);i>200&&(i=200),t.style.height=t.style.width=i+"px",t.style.backgroundColor=s||"rgba(255, 255, 255, .45)",e.appendChild(t);const l=o.touches,a=l?l[0].clientY:o.clientY,r=l?l[0].clientX:o.clientX,h=a-n.top-t.offsetHeight/2,y=r-n.left-t.offsetWidth/2;t.style.top=h+"px",t.style.left=y+"px";function p(){t.removeEventListener("animationend",p),e.removeChild(t),le.push(t)}t.addEventListener("animationend",p)}const lt={name:"Scrollbar"},ge=q({...lt,props:{thumbColor:{type:String,default:"rgba(147, 147, 153, 0.45)"},thumbSize:{type:Number,default:8},maxHeight:{type:String},maxWidth:{type:String}},setup(o,{expose:e}){const t=o,n=I(),s=I(),i=I(),l=I(),a=ee({x:{width:"",height:"",left:"",bottom:"",transform:"",borderRadius:"",backgroundColor:t.thumbColor},y:{width:"",height:"",top:"",right:"",transform:"",borderRadius:"",backgroundColor:t.thumbColor}}),r=I(!1);function h(){const b=n.value.parentElement;b.style.overflow="hidden"}function y(){a.y.right=a.y.top="0px",a.y.width=t.thumbSize+"px",a.x.bottom=a.x.left="0px",a.x.height=t.thumbSize+"px",a.x.borderRadius=a.y.borderRadius=`${t.thumbSize/2}px`}function p(){const b=s.value;if(b){let k=b.clientHeight/b.scrollHeight*100;k>=100&&(k=0),a.y.height=k+"%",a.y.transform=`translate3d(0, ${b.scrollTop/b.scrollHeight*b.clientHeight}px, 0)`;let O=b.clientWidth/b.scrollWidth*100;O>=100&&(O=0),a.x.width=O+"%",a.x.transform=`translate3d(${b.scrollLeft/b.scrollWidth*b.clientWidth}px, 0, 0)`}}let u=!1,c=!1,d=0;function g(b){const k=i.value,O=l.value,Y=b.target;k.contains(Y)&&(u=!0,c=!1,d=b.clientX-k.getBoundingClientRect().left),O.contains(Y)&&(u=!0,c=!0,d=b.clientY-O.getBoundingClientRect().top)}function E(b){if(!u)return;const k=s.value;if(c){const O=k.getBoundingClientRect().top,Y=k.clientHeight;let re=b.clientY-O;k.scrollTop=(re-d)/Y*k.scrollHeight}else{const O=k.getBoundingClientRect().left,Y=k.clientWidth;let re=b.clientX-O;k.scrollLeft=(re-d)/Y*k.scrollWidth}}function A(b){u=!1,n.value.contains(b.target)||(r.value=!1)}function S(){r.value=!0,p()}function x(){u||(r.value=!1)}let G;const K=I();return Q(function(){h(),y(),document.addEventListener("mousedown",g),document.addEventListener("mousemove",E),document.addEventListener("mouseup",A),G=new ResizeObserver(function(){p()}),K.value&&G.observe(K.value)}),pe(function(){document.removeEventListener("mousedown",g),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",A),G.disconnect()}),e({updateThumbStyle:p}),(b,k)=>(f(),_("div",{class:"the-scrollbar",ref_key:"el",ref:n,onMouseenter:k[1]||(k[1]=O=>S()),onMouseleave:k[2]||(k[2]=O=>x())},[m("div",{ref_key:"wrap",ref:s,class:"the-scrollbar-wrap",style:z({"max-height":o.maxHeight,"max-width":o.maxWidth}),onScroll:k[0]||(k[0]=O=>p())},[m("div",{ref_key:"view",ref:K},[te(b.$slots,"default")],512)],36),L(W,{name:"fade"},{default:C(()=>[j(m("div",{class:"the-scrollbar-thumb",ref_key:"thumbY",ref:l,title:"滚动条-摁住拖拽Y轴",style:z(a.y)},null,4),[[X,r.value]])]),_:1}),L(W,{name:"fade"},{default:C(()=>[j(m("div",{class:"the-scrollbar-thumb",ref_key:"thumbX",ref:i,title:"滚动条-摁住拖拽X轴",style:z(a.x)},null,4),[[X,r.value]])]),_:1})],544))}}),ct={class:"base-dialog-title f-between f-vertical"},ut={key:0,class:"base-dialog-text"},dt={class:"base-dialog-body"},ft={key:0,class:"base-dialog-footer"},pt={name:"base-dialog"},mt=q({...pt,props:{title:{type:String,default:"提示"},show:{type:Boolean,default:!1},width:{type:String,default:"50%"},closeByMask:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1},zIndex:{type:Number,default:()=>de()}},emits:["close","update:show","closed","opened"],setup(o,{emit:e}){const t=o,n=e,s=I(),i=I(),l=I(),a=I(!1);U(()=>t.show,function(c){c?setTimeout(()=>{a.value=!0},0):a.value=!1},{immediate:!0});function r(c){if(!t.show||a.value||s.value.contains(c.target))return;const{clientWidth:d,clientHeight:g}=s.value,E=d/2,A=g/2,S=c.clientY-A,G=`${(c.clientX-E)/d*100}vw`,K=`${S/g*100}vh`;h(G,K)}function h(c,d){const g=l.value;g&&(g.style.setProperty("--content-x",c),g.style.setProperty("--content-y",d))}function y(c){(c&&c.target===s.value&&t.closeByMask||c&&c.target===i.value)&&(n("update:show",!1),n("close"))}function p(){a.value&&h("0","0"),n("closed")}function u(){n("opened")}return Q(function(){document.addEventListener("click",r)}),pe(function(){document.removeEventListener("click",r)}),(c,d)=>(f(),_("section",null,[(f(),w(Pe,{to:"body",disabled:!t.appendToBody},[L(W,{name:"fade"},{default:C(()=>[j(m("div",{ref_key:"el",ref:s,class:"base-dialog fvc",style:z({"z-index":t.zIndex}),onClick:y},[L(W,{name:"dialog-move",onAfterLeave:p,onAfterEnter:u},{default:C(()=>[j(m("div",{ref_key:"contentBox",ref:l,class:"base-dialog-content flex",style:z({width:t.width})},[m("div",ct,[c.$slots.header?B("",!0):(f(),_("h2",ut,R(o.title),1)),te(c.$slots,"header"),m("i",{class:"base-dialog-icon",ref_key:"closeBtn",ref:i,onClick:y},null,512)]),m("div",dt,[L(v(ge),{maxHeight:"76vh"},{default:C(()=>[te(c.$slots,"default")]),_:3})]),c.$slots.footer?(f(),_("div",ft,[te(c.$slots,"footer")])):B("",!0)],4),[[X,a.value]])]),_:3})],4),[[X,t.show]])]),_:3})],8,["disabled"]))]))}}),ht="modulepreload",gt=function(o,e){return new URL(o,e).href},_e={},T=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){const i=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),a=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=Promise.all(t.map(r=>{if(r=gt(r,n),r in _e)return;_e[r]=!0;const h=r.endsWith(".css"),y=h?'[rel="stylesheet"]':"";if(!!n)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===r&&(!h||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${y}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":ht,h||(u.as="script",u.crossOrigin=""),u.href=r,a&&u.setAttribute("nonce",a),document.head.appendChild(u),h)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})}))}return s.then(()=>e()).catch(i=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i})};function vt(o){const t=`; ${document.cookie}`.split(`; ${o}=`);return t.length>=2?t.pop().split(";").shift():""}function yt(o,e,t){let n=`${o}=${e}; path=/`;t&&(t.expires&&(n+=`; expires=${t.expires.toUTCString()}`),t.domain&&(n+=`; domain=${t.domain}`)),document.cookie=n}function _t(o,e){const t="expires=Thu, 01 Jan 1970 00:00:00 GMT";document.cookie=`${o}=; path=/; ${t}`}const ce="ModuleUser";function xe(){return{id:"",name:"",type:"",token:"",avatar:"",account:"",password:""}}const xt=3,bt=24*60*60*1e3;class $t{constructor(){M(this,"info",ee(xe()));this.init()}init(){const e=vt(ce);if(e){const t=Te(e);H(this.info,t)}}update(e){H(this.info,e),yt(ce,JSON.stringify(this.info),{expires:new Date(Date.now()+xt*bt)})}reset(){H(this.info,xe()),_t(ce)}}const kt=""+new URL("../image/logo-CPmPqqKk.png",import.meta.url).href,be="ModuleLayout";class wt{constructor(){M(this,"addRouters",[]);M(this,"completeRouters",[]);M(this,"info",ee({showTagList:!0,showSidebar:!0,showSidebarLogo:!0,tagList:[],layoutMode:"",keyword:""}));const e=sessionStorage.getItem(be);try{e&&H(this.info,JSON.parse(e))}catch(t){console.log("ModuleLayout init fail >>",t)}U(this.info,()=>{sessionStorage.setItem(be,JSON.stringify(this.info))})}}const ue="ModuleGoods";function $e(){return{id:0,name:"",price:0,specs:{size:"xs",width:"",height:""}}}class Et{constructor(){M(this,"info",ee($e()));const e=sessionStorage.getItem(ue);if(e){const t=Te(e);H(this.info,t)}}update(e){H(this.info,e),sessionStorage.setItem(ue,JSON.stringify(this.info))}reset(){H(this.info,$e()),sessionStorage.removeItem(ue)}}class Lt{constructor(){M(this,"projectInfo",{title:"Vue Typescript Admin",name:"XXX后台管理平台",logo:kt,link:"https://github.com/Travis-hjs/vue-admin",email:"1141752341@qq.com"});M(this,"layout",new wt);M(this,"user",new $t);M(this,"_goods");console.log("%c ModuleStore init","color: #409EFF")}get goods(){return this._goods||(this._goods=new Et),this._goods}}const $=new Lt,Ct={key:0,class:"separator"},St={key:1,href:"javascript:void(0)"},Tt={name:"BreadCrumb"},At=q({...Tt,setup(o){const e=Ee(),t=I([]);function n(){const s=e.matched.filter(i=>i.meta&&i.meta.title).map(i=>({path:i.path,meta:{...i.meta}}));t.value=s}return U(()=>e.path,function(){e.path.startsWith("/redirect/")||n()}),n(),(s,i)=>{const l=V("router-link");return f(),w(Fe,{name:"breadcrumb",tag:"div",class:"layout-breadcrumb f-vertical"},{default:C(()=>[(f(!0),_(N,null,Z(t.value,(a,r)=>(f(),_("span",{class:D(["layout-breadcrumb-item",{last:r===t.value.length-1}]),key:a.path},[r>0?(f(),_("i",Ct,"/")):B("",!0),r===t.value.length-1?(f(),_("a",St,R(a.meta.title),1)):(f(),w(l,{key:2,to:a.path},{default:C(()=>[Le(R(a.meta.title),1)]),_:2},1032,["to"]))],2))),128))]),_:1})}}});function ie(){const o=Ee(),e=Ne();function t(i){return JSON.stringify(i||{})}function n(i,l){return l?i.path===o.path&&t(i.query)===t(o.query)&&t(i.params)===t(o.params):i.path===o.path}function s(i,l){if(n(i,l))return!0;if(i.children&&i.children.length)for(let a=0;a<i.children.length;a++){const r=i.children[a];if(s(r,l))return!0}return!1}return{route:o,router:e,isActive:n,hasActive:s}}let ke=0;function It(){return ke++,`menu-${ke}`}function Rt(o=300){const e=`${o}ms height`;function t(r){r.style.transition=e,r.style.height="0px"}function n(r){r.scrollHeight!==0?r.style.height=`${r.scrollHeight}px`:r.style.height="",r.style.overflow="hidden"}function s(r){r.style.transition=r.style.height=""}function i(r){r.style.display="block",r.style.height=`${r.scrollHeight}px`,r.style.overflow="hidden"}function l(r){r.scrollHeight!==0&&(r.style.transition=e,r.style.height="0px")}function a(r){r.style.transition=r.style.height=""}return{onBeforeEnter:t,onEnter:n,onAfterEnter:s,onBeforeLeave:i,onLeave:l,onAfterLeave:a}}const Ot={class:"the-layout-tag-box"},Bt={class:"the-layout-tags"},Dt=["onClick"],Mt=["onClick"],Pt={name:"TagList"},Ft=q({...Pt,setup(o){const e=$.layout.info,{route:t,router:n,isActive:s}=ie();function i(p){if(s(e.tagList[p],!0)){const u=p>0?p-1:p+1,c=e.tagList[u];n.push({path:c.path,query:c.query,params:c.params})}e.tagList.splice(p,1)}U(()=>t.path,function(){e.tagList.some(u=>s(u,!0))||e.tagList.push({name:t.name,path:t.path,query:t.query,params:t.params,meta:t.meta})},{immediate:!0});const l=ee({show:!1,left:""}),a={list:[{label:"关闭其他",id:1,click(){l.show=!1;const p=a.current;s(p,!0)?e.tagList=[p]:n.push(p.path).then(()=>{e.tagList=[p]})},show:()=>e.tagList.length>1},{label:"在新标签打开",id:2,click(){l.show=!1;const p=location.href.split("#");window.open(`${p[0]}#${a.current.path}`,"_blank")}},{label:"复制当前信息",id:3,click(){l.show=!1;const p=a.current;Se(JSON.stringify(p,null,4),()=>se.success("复制成功！"))}}],current:void 0},r=I();function h(p,u){l.show=!0,a.current=u,ze(()=>{let c=p.x;const d=parseFloat(getComputedStyle(r.value).width),g=document.body.clientWidth-d;c>g&&(c=g),l.left=`${c}px`})}function y(p){const u=p.target;l.show&&!r.value.contains(u)&&(l.show=!1)}return Q(function(){document.addEventListener("click",y)}),pe(function(){document.removeEventListener("click",y)}),(p,u)=>{const c=V("router-link");return f(),_(N,null,[m("div",Ot,[L(v(ge),null,{default:C(()=>[m("div",Bt,[(f(!0),_(N,null,Z(v(e).tagList,(d,g)=>(f(),w(c,{class:D(["the-layout-tag",{"is-active":v(s)(d,!0)}]),key:d.path+g,to:{path:d.path,query:d.query,params:d.params},onContextmenu:ve(E=>h(E,d),["prevent"])},{default:C(()=>[m("span",{class:D([{"pr-[2px]":v(e).tagList.length<=1}])},R(d.meta.title),3),v(e).tagList.length>1?(f(),_("i",{key:0,class:"close",onClick:ve(E=>i(g),["prevent","stop"])},"-",8,Dt)):B("",!0)]),_:2},1032,["class","to","onContextmenu"]))),128))])]),_:1})]),j(m("div",{ref_key:"tagMenuRef",ref:r,class:"the-layout-tag-menu",style:z({left:l.left})},[(f(!0),_(N,null,Z(a.list,d=>j((f(),_("div",{key:d.id,class:"the-layout-tag-menu-item",onClick:g=>d.click()},R(d.label),9,Mt)),[[X,d.show?d.show():!0]])),128))],4),[[X,l.show]])],64)}}}),Nt={name:"Icon"},F=q({...Nt,props:{name:{type:String,required:!0},size:{type:[String,Number],default:void 0},color:{type:String,default:void 0}},setup(o){const e=o,t=oe(()=>{const n=e.size;return{fontSize:typeof n=="number"?`${n}px`:n,color:e.color}});return(n,s)=>(f(),w(v(qe),{icon:e.name,style:z(t.value),class:"the-icon"},null,8,["icon","style"]))}}),zt={class:"the-layout-header"},qt={class:"the-layout-navbar flex"},Ht={class:"user-info-box f-vertical"},Vt=["src"],jt={class:"the-tag green mr-[10px]"},Wt={name:"HeaderBar"},Xt=q({...Wt,setup(o){const e=$.layout.info,t=$.user.info,{router:n}=ie();function s(){e.showSidebar=!e.showSidebar}const i="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif";function l(){$.user.reset(),n.push("/login").then(()=>{e.tagList=[],Bn()})}return(a,r)=>(f(),_("div",zt,[m("div",qt,[m("div",{class:D(["fvc menu-fold",{"menu-fold-actived":v(e).showSidebar}]),onClick:r[0]||(r[0]=h=>s())},[L(v(F),{name:"tdesign:menu-fold",size:"24px",color:"#555"})],2),L(At,{class:"f1"}),m("div",Ht,[m("img",{class:"avatar",src:v(t).avatar||i},null,8,Vt),m("span",jt,R(v(t).name||v(t).account||"用户未设置昵称"),1),m("button",{class:"logout f-vertical",onClick:r[1]||(r[1]=h=>l())},[L(v(F),{name:"tdesign:logout",class:"mr-[4px]"}),r[2]||(r[2]=m("span",null,"退出登录",-1))])])]),v(e).showTagList?(f(),w(Ft,{key:0})):B("",!0)]))}}),Yt={class:"f1"},Ut=["href"],Jt={class:"f1"},Gt={class:"f1"},Kt=["href"],Zt={name:"MenuItem"},Qt=q({...Zt,props:{menu:{type:Object,required:!0},level:{type:Number,default:0}},setup(o){const e=o,{onBeforeEnter:t,onEnter:n,onAfterEnter:s,onBeforeLeave:i,onLeave:l,onAfterLeave:a}=Rt(),{isActive:r,hasActive:h}=ie(),y=oe(function(){const g=r(e.menu);return{"the-layout-menu-title":!0,"is-current":h(e.menu)&&!g,"is-open":e.menu.isOpen,"is-active":g}}),p=oe(function(){return{"the-layout-menu-list":!0,"is-open":e.menu.isOpen}});function u(g){return{"the-layout-menu-link":!0,"is-active":r(g)}}function c(g){return!!(g.children&&g.children.length>0)}function d(){const g=e.menu;g.isOpen=!g.isOpen}return(g,E)=>{const A=V("router-link"),S=V("MenuItem",!0);return f(),_("section",{class:"the-layout-menu",style:z({"--level":e.level})},[c(e.menu)?(f(),_("div",{key:0,class:D(y.value),onClick:E[0]||(E[0]=x=>d())},[e.menu.icon?(f(),w(v(F),{key:0,name:e.menu.icon,class:"menu-icon"},null,8,["name"])):B("",!0),m("span",Yt,R(e.menu.title),1),E[1]||(E[1]=m("i",{class:"the-layout-menu-arrow"},null,-1))],2)):(f(),_(N,{key:1},[e.menu.link?(f(),_("a",{key:0,href:e.menu.link,class:D(y.value),target:"_blank"},[e.menu.icon?(f(),w(v(F),{key:0,name:e.menu.icon,class:"menu-icon"},null,8,["name"])):B("",!0),m("span",Jt,R(e.menu.title),1)],10,Ut)):(f(),w(A,{key:1,to:e.menu.path,class:D(y.value)},{default:C(()=>[e.menu.icon?(f(),w(v(F),{key:0,name:e.menu.icon,class:"menu-icon"},null,8,["name"])):B("",!0),m("span",Gt,R(e.menu.title),1)]),_:1},8,["to","class"]))],64)),c(e.menu)?(f(),w(W,{key:2,onBeforeEnter:v(t),onEnter:v(n),onAfterEnter:v(s),onBeforeLeave:v(i),onLeave:v(l),onAfterLeave:v(a)},{default:C(()=>[j(m("div",{class:D(p.value)},[(f(!0),_(N,null,Z(e.menu.children,x=>(f(),_(N,{key:x.menuId},[c(x)?(f(),w(S,{key:0,menu:x,level:e.level+1},null,8,["menu","level"])):(f(),_(N,{key:1},[x.link?(f(),_("a",{key:0,href:x.link,class:D(u(x)),target:"_blank"},[x.icon?(f(),w(v(F),{key:0,name:x.icon,class:"menu-icon"},null,8,["name"])):B("",!0),m("span",null,R(x.title),1)],10,Kt)):(f(),w(A,{key:1,to:x.path,class:D(u(x))},{default:C(()=>[x.icon?(f(),w(v(F),{key:0,name:x.icon,class:"menu-icon"},null,8,["name"])):B("",!0),m("span",null,R(x.title),1)]),_:2},1032,["to","class"]))],64))],64))),128))],2),[[X,e.menu.isOpen]])]),_:1},8,["onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])):B("",!0)],4)}}}),en={name:"Empty",props:{text:{type:String,default:"暂无数据"},size:{type:Number}}},tn="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20width='64'%20height='41'%20viewBox='0%200%2064%2041'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(0%201)'%20fill='none'%20fill-rule='evenodd'%3e%3cellipse%20fill='%23f5f5f5'%20cx='32'%20cy='33'%20rx='32'%20ry='7'%3e%3c/ellipse%3e%3cg%20fill-rule='nonzero'%20stroke='%23d9d9d9'%3e%3cpath%20d='M55%2012.76L44.854%201.258C44.367.474%2043.656%200%2042.907%200H21.093c-.749%200-1.46.474-1.947%201.257L9%2012.761V22h46v-9.24z'%3e%3c/path%3e%3cpath%20d='M41.613%2015.931c0-1.605.994-2.93%202.227-2.931H55v18.137C55%2033.26%2053.68%2035%2052.05%2035h-40.1C10.32%2035%209%2033.259%209%2031.137V13h11.16c1.233%200%202.227%201.323%202.227%202.928v.022c0%201.605%201.005%202.901%202.237%202.901h14.752c1.232%200%202.237-1.308%202.237-2.913v-.007z'%20fill='%23fafafa'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",nn={class:"empty"},on={class:"text"};function sn(o,e,t,n,s,i){return f(),_("div",nn,[m("img",{class:"icon",style:z({width:t.size?`${t.size}px`:void 0}),src:tn,alt:""},null,4),m("span",on,R(t.text),1)])}const rn=he(en,[["render",sn],["__scopeId","data-v-a5ec6d3f"]]),an={name:"Menu"},ln=q({...an,props:{mergeOnlyOneChild:{type:Number,default:0}},setup(o){const e=o,t=$.layout.info;function n(u){const c=[];for(let d=0;d<u.length;d++){const g=u[d];if(g.meta&&g.meta.hidden)continue;const E={menuId:It(),path:g.path,isOpen:!1,title:g.meta.title,icon:g.meta.icon,link:g.meta.link};g.children&&g.children.length&&(E.children=n(g.children)),c.push(E)}return c}function s(u,c=1){const d=[],g=c<e.mergeOnlyOneChild,E=c+1;for(let A=0;A<u.length;A++){const S=u[A],x=S.children;x&&x.length>0?x.length===1?(d.push(x[0]),x[0].children&&x[0].children.length>0&&g&&(x[0].children=s(x[0].children,E))):(d.push(S),g&&(S.children=s(x,E))):d.push(S)}return d}function i(u){const c=t.keyword;return u.filter(d=>d.children&&(d.children=i(d.children),d.children.length>0)?(d.isOpen=!0,!0):!!d.title.includes(c))}let l=n($.layout.completeRouters);e.mergeOnlyOneChild&&(l=s(l));const a=I(l),{route:r,isActive:h}=ie();function y(u){const c=[];function d(g,E){for(let A=0;A<g.length;A++){const S=g[A];if(h(S))return c.push(...E),!0;if(S.children&&S.children.length&&d(S.children,[...E,S]))return!0}return!1}return d(u,[]),c}function p(){y(a.value).forEach(c=>{c.isOpen=!0})}return U(()=>t.keyword,function(u){const c=nt(l);if(u){const d=i(c);a.value=d}else a.value=c,p()}),U(()=>r.path,function(){p()},{immediate:!0}),(u,c)=>(f(),_(N,null,[(f(!0),_(N,null,Z(a.value,(d,g)=>(f(),w(Qt,{menu:d,key:d.menuId,style:z(g?void 0:{"margin-top":"0"})},null,8,["menu","style"]))),128)),a.value.length?B("",!0):(f(),w(v(rn),{key:0,style:{height:"140px"},text:"没有匹配到任何菜单"}))],64))}}),cn={class:"the-layout-sidebar"},un={class:"the-layout-sidebar-content"},dn={key:0,class:"the-logo-box"},fn=["src"],pn=["title"],mn={key:1,style:{height:"var(--page-padding)"}},hn={class:"the-layout-search-box"},gn={class:"f1"},vn={class:"the-layout-sidebar-content padding-full"},yn={name:"Sidebar"},_n=q({...yn,setup(o){const e=$.layout.info,t=$.projectInfo;function n(){e.keyword=""}return(s,i)=>{const l=V("router-link");return f(),_("div",cn,[m("section",un,[L(W,{name:"fade",mode:"out-in"},{default:C(()=>[v(e).showSidebarLogo?(f(),_("div",dn,[L(l,{class:"the-logo-link f-vertical",to:"/"},{default:C(()=>[m("img",{class:"the-logo",src:v(t).logo},null,8,fn),m("h1",{class:"the-logo-title ellipsis",title:v(t).title},R(v(t).title),9,pn)]),_:1})])):(f(),_("div",mn))]),_:1}),m("div",hn,[j(m("input",{"onUpdate:modelValue":i[0]||(i[0]=a=>v(e).keyword=a),type:"text",placeholder:"请输入关键字检索菜单"},null,512),[[He,v(e).keyword]]),v(e).keyword?(f(),w(v(F),{key:0,class:"the-layout-search-icon",name:"tdesign:close-circle",onClick:i[1]||(i[1]=a=>n())})):(f(),w(v(F),{key:1,class:"the-layout-search-icon",name:"tdesign:search"}))])]),m("section",gn,[L(v(ge),null,{default:C(()=>[m("div",vn,[L(ln,{mergeOnlyOneChild:1})])]),_:1})])])}}}),xn={name:"Layout"},we=q({...xn,setup(o){const e=$.layout.info,t=oe(()=>{const r=[];return $.layout.info.tagList.forEach(h=>{h.meta.keepAlive&&h.name&&r.push(h.name)}),r}),n=I(),s=I(!1);let i;function l(){i.scrollTo({top:0,left:0,behavior:"smooth"})}function a(){s.value=i.scrollTop>document.documentElement.clientHeight}return Q(function(){i=n.value,i.addEventListener("scroll",a),a()}),(r,h)=>{const y=V("router-view");return f(),_("div",{class:D(["the-layout",v(e).layoutMode,{"has-tag-list":v(e).showTagList},{"collapsed-sidebar":!v(e).showSidebar}])},[L(Xt),L(_n),m("div",{class:"the-layout-content",ref_key:"contentBox",ref:n},[L(y,{class:"the-layout-page"},{default:C(({Component:p,route:u})=>[L(W,{name:"page-y",mode:"out-in"},{default:C(()=>[(f(),w(Ve,{include:t.value},[(f(),w(je(p),{key:u.fullPath}))],1032,["include"]))]),_:2},1024)]),_:1})],512),m("button",{class:D(["the-layout-to-top fvc",{hidden:!s.value}]),title:"返回顶部",onClick:h[0]||(h[0]=p=>l())},[L(v(F),{name:"tdesign:align-top",size:20})],2)],2)}}}),bn={name:"page-404",data(){return{project:$.projectInfo}}},$n={class:"page-404 fvc"},kn={class:"from-right-box mb-[40px]"},wn={class:"pt-[40px]"},En={class:"from-bottom-box flex"},Ln={class:"pt-[20px]"},Cn={class:"desc"},Sn={class:"desc"};function Tn(o,e,t,n,s,i){const l=V("router-link");return f(),_("div",$n,[m("section",null,[e[5]||(e[5]=We('<div class="from-top-box f-vertical" data-v-9091b7be><div class="mr-[30px]" data-v-9091b7be><div class="point-icon mb-[50px]" data-v-9091b7be></div><div class="point-icon" data-v-9091b7be></div></div><div class="radius-icon" data-v-9091b7be></div><div class="code-value" data-v-9091b7be>404</div></div>',1)),m("div",kn,[e[1]||(e[1]=m("p",{class:"text"},"你访问的页面不存在，请确认页面路径是否正确。",-1)),e[2]||(e[2]=m("p",{class:"text"},"我们只收集某些错误信息，然后需要你重新点击返回首页或返回上一页。",-1)),m("div",wn,[L(l,{class:"go-back fvc",to:"/"},{default:C(()=>[...e[0]||(e[0]=[Le("返回首页",-1)])]),_:1})])]),m("div",En,[e[4]||(e[4]=m("img",{class:"qrcode-box",src:"https://travis-hjs.github.io/images/reward-code.jpg",alt:"谢谢打赏！"},null,-1)),m("div",Ln,[e[3]||(e[3]=m("p",{class:"desc"},"如需技术支持，请扫码联系作者。",-1)),m("p",Cn,"邮箱地址："+R(s.project.email),1),m("p",Sn,"项目地址："+R(s.project.link),1)])])])])}const ne=he(bn,[["render",Tn],["__scopeId","data-v-9091b7be"]]),An=[{path:"/",name:"index",redirect:"/home",component:we,meta:{title:"首页",icon:"tdesign:home"},children:[{path:"/home",name:"home",meta:{title:"首页展示",icon:"tdesign:bookmark-double",keepAlive:!0},component:T(()=>import("./home-sdtwcxtk.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)},{path:"/nested",name:"nested",redirect:"/nested/menu-1",meta:{title:"多级菜单嵌套",icon:"tdesign:tree-square-dot",keepAlive:!0},component:T(()=>import("./nested-Cq_JFNhl.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/menu-1",name:"nested/menu-1",meta:{title:"el-plus 表格",keepAlive:!0},component:T(()=>import("./menu-1-Ch07WTdq.js"),__vite__mapDeps([8,1,2,9,10,11]),import.meta.url)},{path:"/nested/menu-2",name:"nested/menu-2",meta:{title:"el-plus 表单验证",keepAlive:!0},component:T(()=>import("./menu-2-VDLRIWYK.js"),__vite__mapDeps([12,1,2,13]),import.meta.url)},{path:"/nested/three-level",name:"nested/three-level",meta:{title:"三级菜单",keepAlive:!0},redirect:"nested/three-level/menu-1",component:T(()=>import("./nested-Cq_JFNhl.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/three-level/menu-1",name:"nested/three-level/menu-1",meta:{title:"菜单 3-1",keepAlive:!0},component:T(()=>import("./menu-1-Ch07WTdq.js"),__vite__mapDeps([8,1,2,9,10,11]),import.meta.url)},{path:"/nested/three-level/menu-2",name:"nested/three-level/menu-2",meta:{title:"菜单 3-2",keepAlive:!0},component:T(()=>import("./menu-2-VDLRIWYK.js"),__vite__mapDeps([12,1,2,13]),import.meta.url)}]},{path:"/nested/four-level",name:"nested/four-level",meta:{title:"三级菜单-2",keepAlive:!0},redirect:"/nested/four-level/menu-1",component:T(()=>import("./nested-Cq_JFNhl.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/four-level/menu-1",name:"nested/four-level/menu-1",meta:{title:"菜单 3-2-1",keepAlive:!0},component:T(()=>import("./menu-1-Ch07WTdq.js"),__vite__mapDeps([8,1,2,9,10,11]),import.meta.url)}]},{path:"/nested/menu-3",name:"nested/menu-3",meta:{title:"菜单 2-3",keepAlive:!0},component:T(()=>import("./menu-3-BTprvKbB.js"),__vite__mapDeps([14,1,2,15]),import.meta.url)}]},{path:"/link-baidu",name:"link-baidu",component:ne,meta:{title:"百度一下",icon:"tdesign:system-search-filled",link:"https://www.baidu.com"}},{path:"/menu-4",name:"menu-4",meta:{title:"换行菜单标题换行菜单标题",icon:"tdesign:component-layout",keepAlive:!0},component:T(()=>import("./menu-4-B9KlkiCY.js"),__vite__mapDeps([16,1,2,17]),import.meta.url)}]},{path:"/example",name:"example",component:we,meta:{title:"示例页栏目",icon:"tdesign:play-demo",keepAlive:!0},redirect:"/example/request",children:[{path:"/example/request",name:"example-request",meta:{title:"http-请求示例",keepAlive:!0},component:T(()=>import("./request-s1oLlXu-.js"),__vite__mapDeps([18,1,2,19,20]),import.meta.url)},{path:"/example/components",name:"example-components",meta:{title:"自定义组件",keepAlive:!0},component:T(()=>import("./the-components-DqM8oGvS.js"),__vite__mapDeps([21,1,2,19,22]),import.meta.url)},{path:"/example/tsx",name:"example-tsx",meta:{title:"tsx-示例",keepAlive:!0},component:T(()=>import("./example-CexIWO7Z.js"),__vite__mapDeps([9,1,2,10]),import.meta.url)},{path:"/example/no-found",name:"no-found",meta:{title:"404 页面",link:`${location.origin+location.pathname}#/is-error-path`},component:ne}]},{path:"/"+$.projectInfo.link,name:"GitHub-Travis",component:ne,meta:{title:"项目地址",icon:"tdesign:logo-github-filled",link:$.projectInfo.link,auth:[0]}}],J={path:"/",query:{}},fe="redirect404";let P;function Ae(o){const e=[],t=$.user.info.type;for(let n=0;n<o.length;n++){const s=o[n],i=s.meta?s.meta.auth:void 0;(!i||i&&i.includes(t))&&(s.children&&s.children.length>0&&(s.children=Ae(s.children)),e.push(s))}return e}async function In(o,e){const t=await o;return t.default.name||(t.default.name=e),t}function Ie(o){o.forEach(e=>{const{meta:t,component:n,name:s,children:i}=e;t.keepAlive&&me(n,"promise")&&(s?e.component=()=>In(n,s):console.warn("当前路由需要设置 name 属性才能实现缓存功能：",e)),i&&i.length>0&&Ie(i)})}async function Rn(){const o=Ae(An);return Ie(o),o}function On(o,e){P=o,P.beforeEach(async function(t,n,s){if(ae.start(),$.user.info.token)if($.layout.addRouters.length>0)s();else{$.layout.addRouters=await Rn();for(let i=0;i<$.layout.addRouters.length;i++){const l=$.layout.addRouters[i];P.addRoute(l)}P.hasRoute(fe)||P.addRoute({...e[1],path:"/:catchAll(.*)",name:fe}),$.layout.completeRouters=e.concat($.layout.addRouters),s({...t,replace:!0})}else t.path==="/login"?s():(J.path=t.path,J.query=t.query,s({path:"/login"}),ae.done())}),P.afterEach(t=>{ae.done(),t.meta&&t.meta.title&&(document.title=t.meta.title)})}function Nn(){P.replace({path:J.path,query:J.query})}function Bn(){const o=$.layout.addRouters;for(let e=o.length-1;e>-1;e--){const t=o[e];t.name&&P.hasRoute(t.name)&&P.removeRoute(t.name)}J.path="/",J.query={},P.removeRoute(fe),$.layout.addRouters=$.layout.completeRouters=[]}const Re=[{path:"/login",name:"login",component:()=>T(()=>import("./login-DRiziCg8.js"),__vite__mapDeps([23,1,2,19,3,4,24]),import.meta.url),meta:{hidden:!0,title:"请登录"}},{path:"/404",name:"page-404",component:ne,meta:{hidden:!0,title:"不存在该页面"}},{path:"/401",name:"page-401",component:()=>T(()=>import("./page-401-C6kTgRi7.js"),__vite__mapDeps([25,1,2,26]),import.meta.url),meta:{hidden:!0,title:"暂无权限访问"}}],Oe=Xe({history:Ye(),routes:Re});On(Oe,Re);function Dn(o){o.directive("copy",{mounted(e,t){e.addEventListener("click",function(){Se(t.value,()=>se.success("复制成功"),n=>se.success(n))})}}),o.directive("ripple",{mounted(e){const t=ot()?"touchstart":"mousedown";e.setAttribute("ripple",""),e.addEventListener(t,function(n){at(n,e)})}}),o.component("base-dialog",mt),o.use(Oe)}const Be=Ue(rt);Dn(Be);Be.mount("#app");export{he as _,H as a,Ze as b,Se as c,mt as d,F as e,ge as f,et as g,Qe as h,Fn as i,Te as j,se as m,Nn as o,Dn as r,$ as s};
