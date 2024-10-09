function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./home-CslC8srp.js","./vendor-BLtJ1nIq.js","../css/vendor-BUMXTAWU.css","./index.vue_vue_type_script_setup_true_lang-BjTlgRsb.js","../css/home-NLRWRYAt.css","./nested-Cnft7_o_.js","../css/nested-DBbt7j1J.css","./menu-1-DZLMBYWn.js","../css/menu-1-PIQFC6DV.css","./menu-2-CAZRnKDr.js","../css/menu-2-DwSbhe9C.css","./menu-3-BTQqg9CG.js","../css/menu-3-C1x6D_tQ.css","./menu-4-CyyvUCFu.js","../css/menu-4-B_QkhR3M.css","./request-Jsw8oWpJ.js","./common-BNHO4y_t.js","../css/request-BjYaB_Vm.css","./the-components-B3uzdEuX.js","../css/the-components-IJgq8Frg.css","./example-T6gIs7HY.js","../css/example-CJnj_JQw.css","./index-IQF_HjLy.js","../css/index-CJ5TRbCj.css","./login-BEYk_4aW.js","../css/login-C2zo-VT6.css","./page-401-BLfwz7n8.js","../css/page-401-hNHv4Vr6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var Be=Object.defineProperty;var Ae=(n,t,e)=>t in n?Be(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var A=(n,t,e)=>(Ae(n,typeof t!="symbol"?t+"":t,e),e);import{d as C,r as F,o as g,c as L,a as Z,b as x,e as v,n as D,f as O,w as X,g as J,h as $e,i as E,j as S,T as H,k as Ne,l as B,m as Q,v as ee,p as N,t as T,q as G,u as w,s as te,x as M,y as fe,z as ne,A as ke,F as q,B as De,C as Pe,D as Fe,E as Ve,K as Me,G as ze,H as qe,I as He,N as ae,J as je,L as We,M as Xe}from"./vendor-BLtJ1nIq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Je=C({name:"App"}),we=(n,t)=>{const e=n.__vccOpts||n;for(const[o,i]of t)e[o]=i;return e};function Ye(n,t,e,o,i,s){const d=F("router-view");return g(),L(d)}const Ue=we(Je,[["render",Ye]]),Ge=["xlink:href"],Ke=C({name:"SvgIcon"}),Ze=C({...Ke,props:{name:{type:String,required:!0,default:""},className:{type:String,default:""}},setup(n){const t=n,e=Z(()=>`#icon-${t.name}`),o=Z(function(){return t.className?"svg-icon "+t.className:"svg-icon"});return(i,s)=>(g(),x("svg",{class:D(o.value),"aria-hidden":"true"},[v("use",{"xlink:href":e.value},null,8,Ge)],2))}});let he=1e3;function de(){const n=he;return he++,n}const Qe={class:"base-dialog-title f-between f-vertical"},et={key:0,class:"base-dialog-text"},tt={class:"base-dialog-body"},nt={key:0,class:"base-dialog-footer"},ot=C({name:"base-dialog"}),it=C({...ot,props:{title:{type:String,default:"提示"},modelValue:{type:Boolean,default:!1},width:{type:String,default:"50%"},closeByMask:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!1}},emits:["close","update:modelValue","afterLeave","afterEnd"],setup(n,{emit:t}){const e=n,o=t,i=de(),s=O(),d=O(),m=O(),l=O(!1),u="flag-dialog-"+i;X(()=>e.modelValue,function(p){p?setTimeout(()=>{l.value=!0},0):l.value=!1},{immediate:!0});function f(p){if(e.appendToBody&&!document.getElementById(u)&&(s.value.remove(),s.value=void 0,document.removeEventListener("click",f)),!e.modelValue||l.value||s.value.contains(p.target))return;const{clientWidth:y,clientHeight:I}=s.value,Y=y/2,U=I/2,ie=p.clientY-U,_=`${(p.clientX-Y)/y*100}vw`,b=`${ie/I*100}vh`;c(_,b)}function c(p,y){const I=m.value;I&&(I.style.setProperty("--content-x",p),I.style.setProperty("--content-y",y))}function r(p){(p&&p.target===s.value&&e.closeByMask||p&&p.target===d.value)&&(o("update:modelValue",!1),o("close"))}function a(){l.value&&c("0","0"),o("afterLeave")}function h(){o("afterEnd")}return J(function(){document.addEventListener("click",f)}),$e(function(){document.removeEventListener("click",f)}),(p,y)=>(g(),x("section",null,[(g(),L(Ne,{to:"body",disabled:!n.appendToBody},[E(H,{name:"fade"},{default:S(()=>[Q(v("div",{ref_key:"el",ref:s,class:"base-dialog fvc",style:N({zIndex:w(i)}),onClick:r},[E(H,{name:"dialog-move",onAfterLeave:a,onAfterEnter:h},{default:S(()=>[Q(v("div",{ref_key:"contentBox",ref:m,class:"base-dialog-content flex",style:N({width:n.width})},[v("div",Qe,[p.$slots.header?B("",!0):(g(),x("h2",et,T(n.title),1)),G(p.$slots,"header"),v("i",{class:"base-dialog-icon",ref_key:"closeBtn",ref:d,onClick:r},null,512)]),v("div",tt,[G(p.$slots,"default")]),p.$slots.footer?(g(),x("div",nt,[G(p.$slots,"footer")])):B("",!0)],4),[[ee,l.value]])]),_:3})],4),[[ee,n.modelValue]])]),_:3})],8,["disabled"])),n.appendToBody?(g(),x("div",{key:0,id:u,description:"用来标记 teleport 开启之后插入的节点用"})):B("",!0)]))}}),st="modulepreload",at=function(n,t){return new URL(n,t).href},ge={},k=function(t,e,o){let i=Promise.resolve();if(e&&e.length>0){const s=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),m=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));i=Promise.all(e.map(l=>{if(l=at(l,o),l in ge)return;ge[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!o)for(let a=s.length-1;a>=0;a--){const h=s[a];if(h.href===l&&(!u||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${f}`))return;const r=document.createElement("link");if(r.rel=u?"stylesheet":st,u||(r.as="script",r.crossOrigin=""),r.href=l,m&&r.setAttribute("nonce",m),document.head.appendChild(r),u)return new Promise((a,h)=>{r.addEventListener("load",a),r.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}return i.then(()=>t()).catch(s=>{const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=s,window.dispatchEvent(d),!d.defaultPrevented)throw s})};function rt(n){return Object.prototype.toString.call(n).match(/\[object (\S*)\]/)[1].toLocaleLowerCase()}function Ee(n,t){return rt(n)===t}function V(n,t){for(const e in t)if(Object.prototype.hasOwnProperty.call(n,e)){const o=t[e],i=n[e];Ee(i,"object")?V(i,o):n[e]=o}}function lt(n,t,e){if(n=n.replace(/(^\s*)|(\s*$)/g,""),!n){e&&e("复制的内容不能为空！");return}const o="the-clipboard";let i=document.getElementById(o);i||(i=document.createElement("textarea"),i.id=o,i.readOnly=!0,i.style.cssText="font-size: 15px; position: fixed; top: -1000%; left: -1000%;",document.body.appendChild(i)),i.value=n,i.select(),i.setSelectionRange(0,i.value.length),document.execCommand("copy")?t&&t():e&&e("复制失败")}function xn(n,t,e){let o=n.toString().trim();if(o.length===0)return"";const i="";return o=o.replace(/[^0-9]+/ig,""),i+o}function Le(n,t={}){let e=t;if(Ee(n,"string"))try{e=JSON.parse(n)}catch(o){console.warn("JSON格式化对象错误 >>",o)}return e}function ct(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)}function ut(n){return te.get(n)||""}function dt(n,t,e){e?te.set(n,t,e):te.set(n,t)}function mt(n,t){te.remove(n)}const re="ModuleUser";function ve(){return{id:"",name:"",type:"",token:"",avatar:"",account:"",password:""}}const ft=3,pt=24*60*60*1e3;class ht{constructor(){A(this,"info",M(ve()));this.init()}init(){const t=ut(re);if(t){const e=Le(t);V(this.info,e)}}update(t){V(this.info,t),dt(re,JSON.stringify(this.info),{expires:new Date(Date.now()+ft*pt)})}reset(){V(this.info,ve()),mt(re)}}const gt=""+new URL("../image/logo-CPmPqqKk.png",import.meta.url).href,ye="ModuleLayout";class vt{constructor(){A(this,"addRouters",[]);A(this,"completeRouters",[]);A(this,"info",M({showTagsView:!0,sidebarOpen:!0,showSidebarLogo:!0,historyViews:[],layoutMode:""}));A(this,"menuSizeInfo",M({titleHeight:0,itemHeight:0}));this.init(),X(this.info,this.saveInfo.bind(this))}init(){const t=sessionStorage.getItem(ye);try{t&&V(this.info,JSON.parse(t))}catch(e){console.log("ModuleLayout init fail >>",e)}}saveInfo(){sessionStorage.setItem(ye,JSON.stringify(this.info))}}const le="ModuleGoods";function _e(){return{id:0,name:"",price:0,specs:{size:"xs",width:"",height:""}}}class yt{constructor(){A(this,"info",M(_e()));const t=sessionStorage.getItem(le);if(t){const e=Le(t);V(this.info,e)}}update(t){V(this.info,t),sessionStorage.setItem(le,JSON.stringify(this.info))}reset(){V(this.info,_e()),sessionStorage.removeItem(le)}}class _t{constructor(){A(this,"projectInfo",{title:"Vue Typescript Admin",name:"XXX后台管理平台",logo:gt,link:"https://github.com/Travis-hjs/vue-admin",email:"1141752341@qq.com"});A(this,"layout",new vt);A(this,"user",new ht);A(this,"_goods");console.log("%c ModuleStore init","color: #409EFF")}get goods(){return this._goods||(this._goods=new yt),this._goods}}const $=new _t,bt={key:0,class:"separator"},xt={key:1,href:"javascript:void(0)"},$t=C({__name:"Breadcrumb",setup(n){const t=fe(),e=O([]);function o(){const i=t.matched.filter(s=>s.meta&&s.meta.title).map(s=>({path:s.path,meta:{...s.meta}}));e.value=i}return X(()=>t.path,function(){t.path.startsWith("/redirect/")||o()}),o(),(i,s)=>{const d=F("router-link");return g(),L(De,{name:"breadcrumb",tag:"div",class:"layout-breadcrumb f-vertical"},{default:S(()=>[(g(!0),x(q,null,ne(e.value,(m,l)=>(g(),x("span",{class:D(["layout-breadcrumb-item",{last:l===e.value.length-1}]),key:m.path},[l>0?(g(),x("i",bt,"/")):B("",!0),l===e.value.length-1?(g(),x("a",xt,T(m.meta.title),1)):(g(),L(d,{key:2,to:m.path},{default:S(()=>[ke(T(m.meta.title),1)]),_:2},1032,["to"]))],2))),128))]),_:1})}}}),be=function(){const n=document.createElement("div");n.style.width="100px",n.style.height="100px",n.style.overflow="scroll",document.body.appendChild(n);const t=n.offsetWidth-n.clientWidth;return n.remove(),t}(),kt=C({name:"Scrollbar"}),Se=C({...kt,props:{thumbColor:{type:String,default:"rgba(147, 147, 153, 0.45)"},thumbSize:{type:Number,default:8},clickUpdateDelay:{type:Number,default:0}},setup(n,{expose:t}){const e=n,o=O(),i=O(),s=O(),d=O(),m=M({height:"",width:""}),l=M({x:{width:"",height:"",left:"",bottom:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor},y:{width:"",height:"",top:"",right:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor}}),u=O(!1);function f(){const _=o.value.parentElement;_.style.overflow="hidden";const b=getComputedStyle(_);m.width=`calc(100% + ${be}px + ${b.borderLeftWidth} + ${b.borderRightWidth})`,m.height=`calc(100% + ${be}px + ${b.borderTopWidth} + ${b.borderBottomWidth})`}function c(){l.y.right=l.y.top="0px",l.y.width=e.thumbSize+"px",l.x.bottom=l.x.left="0px",l.x.height=e.thumbSize+"px",l.x.borderRadius=l.y.borderRadius=`${e.thumbSize/2}px`}function r(){const _=i.value;if(_){let b=_.clientHeight/_.scrollHeight*100;b>=100&&(b=0),l.y.height=b+"%",l.y.transform=`translate3d(0, ${_.scrollTop/_.scrollHeight*_.clientHeight}px, 0)`;let R=_.clientWidth/_.scrollWidth*100;R>=100&&(R=0),l.x.width=R+"%",l.x.transform=`translate3d(${_.scrollLeft/_.scrollWidth*_.clientWidth}px, 0, 0)`}}let a=!1,h=!1,p=0,y;function I(_){const b=s.value,R=d.value,z=_.target;b.contains(z)&&(a=!0,h=!1,p=_.clientX-b.getBoundingClientRect().left),R.contains(z)&&(a=!0,h=!0,p=_.clientY-R.getBoundingClientRect().top)}function Y(_){if(!a)return;const b=i.value;if(h){const R=b.getBoundingClientRect().top,z=b.clientHeight;let se=_.clientY-R;b.scrollTop=(se-p)/z*b.scrollHeight}else{const R=b.getBoundingClientRect().left,z=b.clientWidth;let se=_.clientX-R;b.scrollLeft=(se-p)/z*b.scrollWidth}}function U(_){a=!1,o.value.contains(_.target)?e.clickUpdateDelay>0&&(y&&clearTimeout(y),y=setTimeout(r,e.clickUpdateDelay)):u.value=!1}function ie(){u.value=!0,r()}function pe(){a||(u.value=!1)}return J(function(){f(),c(),i.value&&i.value.addEventListener("scroll",r),document.addEventListener("mousedown",I),document.addEventListener("mousemove",Y),document.addEventListener("mouseup",U)}),$e(function(){i.value&&i.value.removeEventListener("scroll",r),document.removeEventListener("mousedown",I),document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",U),y&&clearTimeout(y)}),t({updateWrapStyle:f,updateThumbStyle:r}),(_,b)=>(g(),x("div",{class:"the-scrollbar",ref_key:"el",ref:o,onMouseenter:b[0]||(b[0]=R=>ie()),onMouseleave:b[1]||(b[1]=R=>pe())},[v("div",{ref_key:"wrap",ref:i,class:"the-scrollbar-wrap",style:N(m)},[G(_.$slots,"default")],4),E(H,{name:"fade"},{default:S(()=>[Q(v("button",{class:"the-scrollbar-thumb",ref_key:"thumbY",ref:d,title:"滚动条-摁住拖拽Y轴",style:N(l.y)},null,4),[[ee,u.value]])]),_:1}),E(H,{name:"fade"},{default:S(()=>[Q(v("button",{class:"the-scrollbar-thumb",ref_key:"thumbX",ref:s,title:"滚动条-摁住拖拽X轴",style:N(l.x)},null,4),[[ee,u.value]])]),_:1})],544))}}),wt={class:"the-layout-header"},Et={class:"the-layout-navbar flex"},Lt={class:"user-info-box f-vertical"},St=["src"],Ot={class:"the-tag green mgr-10"},Ct=v("span",null,"退出登录",-1),It={key:0,class:"the-layout-tag-box"},Tt={class:"the-layout-tags"},Rt=["onClick"],Bt="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",At=C({__name:"HeaderBar",setup(n){const t=fe(),e=Pe(),o=$.layout.info,i=$.user.info;function s(){o.sidebarOpen=!o.sidebarOpen}function d(){$.user.reset(),e.push("/login").then(()=>{o.historyViews=[],fn()})}function m(u){return u.path===t.path&&JSON.stringify(u.query)===JSON.stringify(t.query)&&JSON.stringify(u.params)===JSON.stringify(t.params)}function l(u){o.historyViews.splice(u,1)}return X(()=>t.path,function(){o.historyViews.some(f=>m(f))||o.historyViews.push({name:t.name,path:t.path,query:t.query,params:t.params,meta:t.meta})},{immediate:!0}),(u,f)=>{const c=F("svg-icon"),r=F("router-link");return g(),x("div",wt,[v("div",Et,[v("div",{class:D(["fvc hamburger",{"hamburger-active":w(o).sidebarOpen}]),onClick:f[0]||(f[0]=a=>s())},[E(c,{name:"hamburger"})],2),E($t,{class:"f1"}),v("div",Lt,[v("img",{class:"avatar",src:w(i).avatar||Bt},null,8,St),v("span",Ot,T(w(i).name||w(i).account||"用户未设置昵称"),1),v("button",{class:"logout f-vertical",onClick:f[1]||(f[1]=a=>d())},[E(c,{name:"exit"}),Ct])])]),w(o).showTagsView?(g(),x("div",It,[E(w(Se),null,{default:S(()=>[v("div",Tt,[(g(!0),x(q,null,ne(w(o).historyViews,(a,h)=>(g(),L(r,{class:D(["the-layout-tag",{"the-layout-tag-on":m(a)}]),key:h+a.path,to:{path:a.path,query:a.query,params:a.params}},{default:S(()=>[v("span",null,T(a.meta.title),1),v("i",{class:"close",onClick:Fe(p=>l(h),["prevent","stop"])},"-",8,Rt)]),_:2},1032,["class","to"]))),128))])]),_:1})])):B("",!0)])}}}),Nt={class:"f1"},Dt=v("i",{class:"the-layout-menu-arrow"},null,-1),Pt=["href"],Ft={class:"f1"},Vt={class:"f1"},Mt=["href"],zt=C({__name:"MenuItem",props:{level:{type:Number,default:1},info:{type:Object,default:()=>({title:"-"})}},setup(n){const t=n;function e(c){return!!(c.children&&c.children.length>0)}function o(c){let r=0;const a=c.children,h=$.layout.menuSizeInfo;return c.isOpen&&a&&a.length>0&&a.forEach(p=>{const y=e(p)?h.titleHeight:h.itemHeight;r+=y,r+=o(p)}),r}const i=Z(function(){const c=t.info;return{"the-layout-menu-title f-vertical":!0,"the-layout-menu-selected":c.isActive,"the-layout-menu-open":c.isOpen,"the-layout-menu-actived":c.hasActive,"the-layout-menu-active-title":c.hasActive&&t.level===1}});function s(c){return{"the-layout-menu-item f-vertical":!0,"the-layout-menu-selected":c.isActive}}const d=M({paddingLeft:""}),m=M({paddingLeft:""}),l=Z(function(){return{height:o(t.info)+"px"}}),u=O();function f(){t.info.isOpen=!t.info.isOpen}return J(function(){const c=u.value;if(t.level>=1){const r=getComputedStyle(c.children[0]),a=parseFloat(r.paddingLeft);if(isNaN(a))return;d.paddingLeft=a*t.level+"px",m.paddingLeft=a*(t.level+1)+"px"}}),(c,r)=>{const a=F("svg-icon"),h=F("router-link"),p=F("MenuItem",!0);return g(),x("div",{class:"the-layout-menu",ref_key:"menuBox",ref:u},[e(n.info)?(g(),x("button",{key:0,class:D(i.value),style:N(d),onClick:r[0]||(r[0]=y=>f())},[n.info.icon?(g(),L(a,{key:0,name:n.info.icon},null,8,["name"])):B("",!0),v("span",Nt,T(n.info.title),1),Dt],6)):(g(),x(q,{key:1},[n.info.link?(g(),x("a",{key:0,class:D(i.value),style:N(d),href:n.info.link,target:"_blank"},[n.info.icon?(g(),L(a,{key:0,name:n.info.icon},null,8,["name"])):B("",!0),v("span",Ft,T(n.info.title),1)],14,Pt)):(g(),L(h,{key:1,class:D(i.value),style:N(d),to:n.info.path},{default:S(()=>[n.info.icon?(g(),L(a,{key:0,name:n.info.icon},null,8,["name"])):B("",!0),v("span",Vt,T(n.info.title),1)]),_:1},8,["class","style","to"]))],64)),n.info.children&&n.info.children.length>0?(g(),x("div",{key:2,class:"the-layout-menu-list",style:N(l.value)},[(g(!0),x(q,null,ne(n.info.children,y=>(g(),x("div",{key:y.key},[e(y)?(g(),L(p,{key:0,info:y,level:n.level+1},null,8,["info","level"])):(g(),x(q,{key:1},[y.link?(g(),x("a",{key:0,class:D(s(y)),style:N(m),href:y.link,target:"_blank"},[y.icon?(g(),L(a,{key:0,name:y.icon},null,8,["name"])):B("",!0),v("span",null,T(y.title),1)],14,Mt)):(g(),L(h,{key:1,class:D(s(y)),style:N(m),to:y.path},{default:S(()=>[y.icon?(g(),L(a,{key:0,name:y.icon},null,8,["name"])):B("",!0),v("span",null,T(y.title),1)]),_:2},1032,["class","style","to"]))],64))]))),128))],4)):B("",!0)],512)}}}),qt=C({__name:"Menu",props:{mergeOnlyOneChild:{type:Boolean,default:!1},onlyMergeFirst:{type:Boolean,default:!1}},setup(n){const t=n,e=fe();function o(c,r){c=JSON.parse(JSON.stringify(c));const a=[];for(let h=0;h<c.length;h++){const p=c[h],y={key:r?`${r}-${h}`:h.toString(),isOpen:!1,isActive:!1,hasActive:!1,children:[],path:p.path,...p.meta};if(!y.hidden){a.push(y);const I=p.children;I&&I.length>0&&(y.children=o(I,y.key))}}return a}function i(c){c=JSON.parse(JSON.stringify(c));const r=[];for(let a=0;a<c.length;a++){const h=c[a],p=h.children;p&&p.length>0?p.length===1?(p[0].key=h.key,r.push(p[0]),p[0].children&&p[0].children.length>0&&!t.onlyMergeFirst&&(p[0].children=i(p[0].children))):(r.push(h),t.onlyMergeFirst||(h.children=i(p))):r.push(h)}return r}let s=o(Ie($.layout.completeRouters));t.mergeOnlyOneChild&&(s=i(s));const d=O(s);let m=[];function l(c){for(let r=0;r<c.length;r++){const a=c[r];a.hasActive=!1,a.isOpen&&(!a.children||a.children&&a.children.length===0)&&(a.isOpen=!1),a.isActive=a.path===e.path,a.isActive&&(m=a.key.split("-").map(h=>Number(h))),a.children&&a.children.length>0&&l(a.children)}}function u(c,r=0){const a=m[r],h=c[a];h.hasActive=h.isOpen=!0,r<m.length-1&&u(h.children,r+1)}function f(){m=[],l(d.value),m.length>0&&u(d.value)}return X(()=>e.path,function(){f()}),J(function(){f();function c(r,a=0){const h=document.querySelector(r);return h?h.clientHeight:(console.log("%c 找不到节点 >>","color: #ff4949",r,"已使用默认值 >>",a),a)}$.layout.menuSizeInfo.titleHeight=c(".the-layout-menu .the-layout-menu-title",50),$.layout.menuSizeInfo.itemHeight=c(".the-layout-menu .the-layout-menu-item",44)}),(c,r)=>(g(!0),x(q,null,ne(d.value,a=>(g(),L(zt,{key:a.key,info:a},null,8,["info"]))),128))}}),Ht={class:"the-layout-sidebar"},jt={key:0,class:"the-logo-box"},Wt=["src"],Xt=["title"],Jt=C({__name:"Sidebar",setup(n){const t=$.layout.info,e=$.projectInfo;return(o,i)=>{const s=F("router-link");return g(),x("div",Ht,[E(w(Se),{clickUpdateDelay:300,thumbSize:10},{default:S(()=>[E(H,{name:"fade"},{default:S(()=>[w(t).showSidebarLogo?(g(),x("div",jt,[E(s,{class:"the-logo-link f-vertical",to:"/"},{default:S(()=>[v("img",{class:"the-logo",src:w(e).logo},null,8,Wt),v("h1",{class:"the-logo-title ellipsis",title:w(e).title},T(w(e).title),9,Xt)]),_:1})])):B("",!0)]),_:1}),E(qt,{mergeOnlyOneChild:!0,onlyMergeFirst:!0})]),_:1})])}}}),Yt=C({name:"Layout"}),ce=C({...Yt,setup(n){const t=$.layout.info;function e(u){let f=[];for(let c=0;c<u.length;c++){const r=u[c],a=r.children;a&&a.length>0&&(f=f.concat(e(a))),r.meta.keepAlive&&r.name&&f.push(r.name)}return f.filter(c=>c)}const o=e($.layout.completeRouters),i=O(),s=O(!1);let d;function m(){d.scrollTo({top:0,left:0,behavior:"smooth"})}function l(){s.value=d.scrollTop>document.documentElement.clientHeight}return J(function(){d=i.value,d.addEventListener("scroll",l),l()}),(u,f)=>{const c=F("router-view");return g(),x("div",{class:D(["the-layout",w(t).layoutMode,{"has-tags-view":w(t).showTagsView},{"collapsed-sidebar":!w(t).sidebarOpen}])},[E(At),E(Jt),v("div",{class:"the-layout-content",ref_key:"contentBox",ref:i},[E(c,{class:"the-layout-page"},{default:S(({Component:r,route:a})=>[E(H,{name:"fade-slide-x",mode:"out-in"},{default:S(()=>[(g(),L(Me,{include:w(o)},[(g(),L(Ve(r),{key:a.path}))],1032,["include"]))]),_:2},1024)]),_:1})],512),v("button",{class:D(["the-layout-totop",{"the-layout-totop-hide":!s.value}]),title:"返回顶部",onClick:f[0]||(f[0]=r=>m())},null,2)],2)}}}),Ut={name:"page-404",data(){return{project:$.projectInfo}}},oe=n=>(qe("data-v-099818c9"),n=n(),He(),n),Gt={class:"page-404 fvc"},Kt=ze('<div class="from-top-box f-vertical" data-v-099818c9><div class="mgr-30" data-v-099818c9><div class="point-icon mgb-50" data-v-099818c9></div><div class="point-icon" data-v-099818c9></div></div><div class="radius-icon" data-v-099818c9></div><div class="code-value" data-v-099818c9>404</div></div>',1),Zt={class:"from-right-box mgb-40"},Qt=oe(()=>v("p",{class:"text"},"你访问的页面不存在，请确认页面路径是否正确。",-1)),en=oe(()=>v("p",{class:"text"},"我们只收集某些错误信息，然后需要你重新点击返回首页或返回上一页。",-1)),tn={class:"pdt-40"},nn={class:"from-bottom-box flex"},on=oe(()=>v("img",{class:"qrcode-box",src:"https://travis-hjs.github.io/images/reward-code.jpg",alt:"谢谢打赏！"},null,-1)),sn={class:"pdt-20"},an=oe(()=>v("p",{class:"desc"},"如需技术支持，请扫码联系作者。",-1)),rn={class:"desc"},ln={class:"desc"};function cn(n,t,e,o,i,s){const d=F("router-link");return g(),x("div",Gt,[v("section",null,[Kt,v("div",Zt,[Qt,en,v("div",tn,[E(d,{class:"go-back fvc",to:"/"},{default:S(()=>[ke("返回首页")]),_:1})])]),v("div",nn,[on,v("div",sn,[an,v("p",rn,"邮箱地址："+T(i.project.email),1),v("p",ln,"项目地址："+T(i.project.link),1)])])])])}const K=we(Ut,[["render",cn],["__scopeId","data-v-099818c9"]]),un=[{path:"/",name:"index",redirect:"/home",component:ce,meta:{title:"首页",icon:"home"},children:[{path:"/home",meta:{title:"首页展示",icon:"guide"},component:()=>k(()=>import("./home-CslC8srp.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)},{path:"/nested",name:"nested",redirect:"/nested/menu-1",meta:{title:"多级菜单嵌套",icon:"tree"},component:()=>k(()=>import("./nested-Cnft7_o_.js"),__vite__mapDeps([5,1,2,6]),import.meta.url),children:[{path:"/nested/menu-1",name:"nested/menu-1",meta:{title:"el-plus 表格"},component:()=>k(()=>import("./menu-1-DZLMBYWn.js"),__vite__mapDeps([7,1,2,8]),import.meta.url)},{path:"/nested/menu-2",name:"nested/menu-2",meta:{title:"el-plus 表单验证"},component:()=>k(()=>import("./menu-2-CAZRnKDr.js"),__vite__mapDeps([9,1,2,10]),import.meta.url)},{path:"/nested/three-level",name:"nested/three-level",meta:{title:"三级菜单"},redirect:"/nested/three-level/menu-1",component:()=>k(()=>import("./nested-Cnft7_o_.js"),__vite__mapDeps([5,1,2,6]),import.meta.url),children:[{path:"/nested/three-level/menu-1",name:"/nested/three-level/menu-1",meta:{title:"菜单 3-1"},component:()=>k(()=>import("./menu-1-DZLMBYWn.js"),__vite__mapDeps([7,1,2,8]),import.meta.url)},{path:"/nested/three-level/menu-2",name:"/nested/three-level/menu-2",meta:{title:"菜单 3-2"},component:()=>k(()=>import("./menu-2-CAZRnKDr.js"),__vite__mapDeps([9,1,2,10]),import.meta.url)}]},{path:"/nested/four-level",name:"nested/four-level",meta:{title:"三级菜单-2"},redirect:"/nested/four-level/menu-1",component:()=>k(()=>import("./nested-Cnft7_o_.js"),__vite__mapDeps([5,1,2,6]),import.meta.url),children:[{path:"/nested/four-level/menu-1",name:"/nested/four-level/menu-1",meta:{title:"菜单 3-2-1"},component:()=>k(()=>import("./menu-1-DZLMBYWn.js"),__vite__mapDeps([7,1,2,8]),import.meta.url)}]},{path:"/nested/menu-3",name:"nested/menu-3",meta:{title:"菜单 2-3"},component:()=>k(()=>import("./menu-3-BTQqg9CG.js"),__vite__mapDeps([11,1,2,12]),import.meta.url)}]},{path:"/link-baidu",name:"link-baidu",component:K,meta:{title:"百度一下",icon:"baidu",link:"https://www.baidu.com"}},{path:"/menu-4",name:"menu-4",meta:{title:"换行菜单标题换行菜单标题",icon:"nested"},component:()=>k(()=>import("./menu-4-CyyvUCFu.js"),__vite__mapDeps([13,1,2,14]),import.meta.url)}]},{path:"/example",name:"example",component:ce,meta:{title:"示例页栏目",icon:"menu"},redirect:"/example/request",children:[{path:"/example/request",name:"example-request",meta:{title:"http-请求示例",keepAlive:!0},component:()=>k(()=>import("./request-Jsw8oWpJ.js"),__vite__mapDeps([15,1,2,16,17]),import.meta.url)},{path:"/example/components",name:"example-components",meta:{title:"自定义组件"},component:()=>k(()=>import("./the-components-B3uzdEuX.js"),__vite__mapDeps([18,1,2,16,19]),import.meta.url)},{path:"/example/tsx",name:"example-tsx",meta:{title:"tsx-示例"},component:()=>k(()=>import("./example-T6gIs7HY.js"),__vite__mapDeps([20,1,2,21]),import.meta.url)},{path:"/example/no-found",name:"no-found",meta:{title:"404 页面",link:`${location.origin+location.pathname}#/is-error-path`},component:K}]},{path:"/icon",name:"icon",meta:{title:"图标栏目",auth:[0]},component:ce,redirect:"/icon/svg-icons",children:[{path:"/icon/svg-icons",name:"svg-icons",component:()=>k(()=>import("./index-IQF_HjLy.js"),__vite__mapDeps([22,1,2,23]),import.meta.url),meta:{title:"svg-图标",icon:"svg-icon"}}]},{path:"/"+$.projectInfo.link,name:"GitHub-Travis",component:K,meta:{title:"项目地址",icon:"github",link:$.projectInfo.link,auth:[0]}}],j={path:"/",query:{}},me="redirect404";let P;function Oe(n){const t=[],e=$.user.info.type;for(let o=0;o<n.length;o++){const i=n[o],s=i.meta?i.meta.auth:void 0;(!s||s&&s.includes(e))&&(i.children&&i.children.length>0&&(i.children=Oe(i.children)),t.push(i))}return t}async function dn(){return Oe(un)}function mn(n,t){P=n,P.beforeEach(async function(e,o,i){if(ae.start(),$.user.info.token)if($.layout.addRouters.length>0)i();else{$.layout.addRouters=await dn();for(let s=0;s<$.layout.addRouters.length;s++){const d=$.layout.addRouters[s];P.addRoute(d)}P.hasRoute(me)||P.addRoute({...t[1],path:"/:catchAll(.*)",name:me}),$.layout.completeRouters=t.concat($.layout.addRouters),i({...e,replace:!0})}else e.path==="/login"?i():(j.path=e.path,j.query=e.query,i({path:"/login"}),ae.done())}),P.afterEach(e=>{ae.done(),e.meta&&e.meta.title&&(document.title=e.meta.title)})}function $n(){P.replace({path:j.path,query:j.query})}function fn(){const n=$.layout.addRouters;for(let t=n.length-1;t>-1;t--){const e=n[t];e.name&&P.hasRoute(e.name)&&P.removeRoute(e.name)}j.path="/",j.query={},P.removeRoute(me),$.layout.addRouters=$.layout.completeRouters=[]}const Ce=[{path:"/login",name:"login",component:()=>k(()=>import("./login-BEYk_4aW.js"),__vite__mapDeps([24,1,2,16,3,25]),import.meta.url),meta:{hidden:!0,title:"请登录"}},{path:"/404",name:"page-404",component:K,meta:{hidden:!0,title:"不存在该页面"}},{path:"/401",name:"page-401",component:()=>k(()=>import("./page-401-BLfwz7n8.js"),__vite__mapDeps([26,1,2,27]),import.meta.url),meta:{hidden:!0,title:"暂无权限访问"}}];function Ie(n){n=JSON.parse(JSON.stringify(n));const t=[];for(let e=0;e<n.length;e++){const o=n[e];(!o.meta||o.meta&&!o.meta.hidden)&&(t.push(o),o.children&&o.children.length>0&&(o.children=Ie(o.children)))}return t}const Te=je({history:We(),routes:Ce});mn(Te,Ce);const pn="1.1.1",ue=[];function hn(n,t){let e;ue.length>1?e=ue.shift():(e=document.createElement("div"),e.className="ripple");const o=t.getBoundingClientRect(),i=t.getAttribute("color");let s=Math.max(o.width,o.height);s>200&&(s=200),e.style.height=e.style.width=s+"px",e.style.backgroundColor=i||"rgba(255, 255, 255, .45)",t.appendChild(e);const d=n.touches,m=d?d[0].clientY:n.clientY,l=d?d[0].clientX:n.clientX,u=m-o.top-e.offsetHeight/2,f=l-o.left-e.offsetWidth/2;e.style.top=u+"px",e.style.left=f+"px";function c(){e.removeEventListener("animationend",c),t.removeChild(e),ue.push(e)}e.addEventListener("animationend",c)}function gn(n={}){const t=document,e=`__${Math.random().toString(36).slice(2,7)}`,o={box:`msg-box${e}`,hide:`hide${e}`,text:`msg-text${e}`,icon:`msg-icon${e}`},i=t.createElement("style");i.textContent=`
  .${o.box}, .${o.icon}, .${o.text} {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .${o.box} {
    position: fixed;
    top: 0;
    left: 50%;
    display: flex;
    padding: 12px 16px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12);
    white-space: nowrap;
    animation: ${o.box}-move .4s;
    transition: .4s all;
    transform: translate3d(-50%, 0%, 0);
    opacity: 1;
    overflow: hidden;
  }
  .${o.box}::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
  }
  @keyframes ${o.box}-move {
    0% {
      opacity: 0;
      transform: translate3d(-50%, -100%, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(-50%, 0%, 0);
    }
  }
  .${o.box}.${o.hide} {
    opacity: 0;
    /* transform: translate3d(-50%, -100%, 0); */
    transform: translate3d(-50%, -100%, 0) scale(0);
  }
  .${o.icon} {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 6px;
    position: relative;
  }
  .${o.text} {
    font-size: 14px;
    line-height: 18px;
    color: #555;
  }
  .${o.icon}::after,
  .${o.icon}::before {
    position: absolute;
    content: "";
    background-color: #fff;
  }
  .${o.box}.info .${o.icon}, .${o.box}.info::after {
    background-color: #1890ff;
  }
  .${o.box}.success .${o.icon}, .${o.box}.success::after {
    background-color: #52c41a;
  }
  .${o.box}.warning .${o.icon}, .${o.box}.warning::after {
    background-color: #faad14;
  }
  .${o.box}.error .${o.icon}, .${o.box}.error::after {
    background-color: #ff4d4f;
  }
  .${o.box}.info .${o.icon}::after,
  .${o.box}.warning .${o.icon}::after {
    top: 15%;
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
  }
  .${o.box}.info .${o.icon}::before,
  .${o.box}.warning .${o.icon}::before {
    top: calc(15% + 4px);
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 40%;
  }
  .${o.box}.error .${o.icon}::after, 
  .${o.box}.error .${o.icon}::before {
    top: 20%;
    left: 50%;
    width: 2px;
    height: 60%;
    margin-left: -1px;
    border-radius: 1px;
  }
  .${o.box}.error .${o.icon}::after {
    transform: rotate(-45deg);
  }
  .${o.box}.error .${o.icon}::before {
    transform: rotate(45deg);
  }
  .${o.box}.success .${o.icon}::after {
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
  `.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),t.head.appendChild(i);const s=[];function d(u){let f=10;for(let c=0;c<s.length;c++){const r=s[c];if(u&&u===r)break;f+=r.clientHeight+20}return f}function m(u){for(let f=0;f<s.length;f++)if(s[f]===u){s.splice(f,1);break}u.classList.add(o.hide),s.forEach(function(f){f.style.top=`${d(f)}px`})}function l(u,f="info",c){const r=t.createElement("div");r.className=`${o.box} ${f}`,r.style.top=`${d()}px`,r.style.zIndex=Re.message,r.innerHTML=`
    <span class="${o.icon}"></span>
    <span class="${o.text}">${u}</span>
    `,s.push(r),t.body.appendChild(r);function a(){r.removeEventListener("animationend",a),setTimeout(m,c||n.duration||3e3,r)}r.addEventListener("animationend",a);function h(){getComputedStyle(r).opacity==="0"&&(r.removeEventListener("transitionend",h),r.remove())}r.addEventListener("transitionend",h)}return{show:l,info(u){l(u,"info")},success(u){l(u,"success")},warning(u){l(u,"warning")},error(u){l(u,"error")}}}function vn(){const n=document,t=`__${Math.random().toString(36).slice(2,7)}`,e={mask:`dialog-mask${t}`,popup:`dialog-popup${t}`,title:`dialog-title${t}`,content:`dialog-content${t}`,footer:`dialog-footer${t}`,confirm:`confirm${t}`,fade:`fade${t}`,show:`show${t}`,hide:`hide${t}`},o=`
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
  `,i=n.createElement("style");i.textContent=o.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),n.head.appendChild(i);const s={x:"0vw",y:"0vh"};n.addEventListener("click",function(m){const{innerWidth:l,innerHeight:u}=window,f=l/2,c=u/2,r=m.clientY-c,a=m.clientX-f;s.x=`${a/l*100}vw`,s.y=`${r/u*100}vh`},!0);function d(m){const l=n.createElement("section");l.className=e.mask,l.style.zIndex=Re.dialog,l.style.setProperty("--x",s.x),l.style.setProperty("--y",s.y),s.x="0vw",s.y="0vh";const u=m.cancelText?`<button class="the-btn">${m.cancelText}</button>`:"";l.innerHTML=`
    <div class="${e.popup}">
      <h2 class="${e.title}">${typeof m.title=="string"?m.title:"提示"}</h2>
      <div class="${e.content}">${m.content}</div>
      <div class="${e.footer}">
        ${u}
        <button class="${e.confirm} the-btn blue">${m.confirmText||"确认"}</button>
      </div>
    </div>
    `,n.body.appendChild(l),l.addEventListener("transitionend",function(c){c.target===l&&l.classList.contains(e.hide)&&l.remove()});function f(){l.classList.add(e.hide)}m.cancelText&&(l.querySelector(`.${e.footer} button`).onclick=function(){f(),m.cancel&&m.cancel()}),l.querySelector(`.${e.confirm}`).onclick=function(){f(),m.confirm&&m.confirm()}}return{show:d}}const Re={get message(){return(de()+20).toString()},get dialog(){return(de()+10).toString()}},xe=gn({duration:3600}),yn=vn(),kn=yn.show;window.version=pn;const W=Xe(Ue);W.directive("copy",{mounted(n,t){n.addEventListener("click",function(){lt(t.value,()=>xe.success("复制成功"),e=>xe.success(e))})}});W.directive("ripple",{mounted(n){const t=ct()?"touchstart":"mousedown";n.setAttribute("ripple",""),n.addEventListener(t,function(e){hn(e,n)})}});W.component("svg-icon",Ze);W.component("base-dialog",it);W.use(Te);W.mount("#app");export{we as _,V as a,kn as b,lt as c,Se as d,rt as e,k as f,xn as i,Le as j,xe as m,$n as o,$ as s};
