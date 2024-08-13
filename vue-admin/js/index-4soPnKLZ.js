function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./home-CIeoQHZI.js","./vendor-Dg4sGmeE.js","../css/vendor-BUMXTAWU.css","./index.vue_vue_type_script_setup_true_lang-bKeKtTF2.js","../css/home-NLRWRYAt.css","./nested-Cik36Koa.js","../css/nested-DBbt7j1J.css","./menu-1-gq4N5mjl.js","../css/menu-1-PIQFC6DV.css","./menu-2-B05m0SmO.js","../css/menu-2-DwSbhe9C.css","./menu-3-BofRAZjj.js","../css/menu-3-C1x6D_tQ.css","./menu-4-CZpxkRgm.js","../css/menu-4-B_QkhR3M.css","./request-BXLldtSz.js","./common-DFVvsqIY.js","../css/request-BjYaB_Vm.css","./the-components-Bd7qwkLe.js","../css/the-components-IJgq8Frg.css","./example-DBIeRb7K.js","../css/example-CJnj_JQw.css","./index-BXd80gP6.js","../css/index-CJ5TRbCj.css","./login-Bi3LvlLY.js","../css/login-C2zo-VT6.css","./page-401-DtS-R97q.js","../css/page-401-hNHv4Vr6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var Ce=Object.defineProperty;var Ae=(o,t,e)=>t in o?Ce(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var A=(o,t,e)=>(Ae(o,typeof t!="symbol"?t+"":t,e),e);import{d as O,r as V,o as g,c as L,a as K,b as x,e as y,n as P,f as T,w as j,g as Y,h as xe,i as E,j as S,T as W,k as Ne,l as C,m as Z,v as Q,p as N,t as B,q as G,u as w,s as ee,x as z,y as fe,z as te,A as $e,F as q,B as Pe,C as Be,D as De,E as Ve,K as Me,N as ie,G as ze,H as He,I as qe}from"./vendor-Dg4sGmeE.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const We=O({name:"App"}),ke=(o,t)=>{const e=o.__vccOpts||o;for(const[n,i]of t)e[n]=i;return e};function Xe(o,t,e,n,i,s){const d=V("router-view");return g(),L(d)}const Je=ke(We,[["render",Xe]]),je=["xlink:href"],Ye=O({name:"SvgIcon"}),Fe=O({...Ye,props:{name:{type:String,required:!0,default:""},className:{type:String,default:""}},setup(o){const t=o,e=K(()=>`#icon-${t.name}`),n=K(function(){return t.className?"svg-icon "+t.className:"svg-icon"});return(i,s)=>(g(),x("svg",{class:P(n.value),"aria-hidden":"true"},[y("use",{"xlink:href":e.value},null,8,je)],2))}});let he=1e3;function ce(){const o=he;return he++,o}const Ue={class:"base-dialog-title f-between f-vertical"},Ge={key:0,class:"base-dialog-text"},Ke={class:"base-dialog-body"},Ze={key:0,class:"base-dialog-footer"},Qe=O({name:"base-dialog"}),et=O({...Qe,props:{title:{type:String,default:"提示"},modelValue:{type:Boolean,default:!1},width:{type:String,default:"50%"},closeByMask:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!1}},emits:["close","update:modelValue","afterLeave","afterEnd"],setup(o,{emit:t}){const e=o,n=t,i=ce(),s=T(),d=T(),f=T(),l=T(!1),u="flag-dialog-"+i;j(()=>e.modelValue,function(h){h?setTimeout(()=>{l.value=!0},0):l.value=!1},{immediate:!0});function m(h){if(e.appendToBody&&!document.getElementById(u)&&(s.value.remove(),s.value=void 0,document.removeEventListener("click",m)),!e.modelValue||l.value||s.value.contains(h.target))return;const{clientWidth:v,clientHeight:I}=s.value,F=v/2,U=I/2,ne=h.clientY-U,_=`${(h.clientX-F)/v*100}vw`,b=`${ne/I*100}vh`;c(_,b)}function c(h,v){const I=f.value;I&&(I.style.setProperty("--contentX",h),I.style.setProperty("--contentY",v))}function a(h){(h&&h.target===s.value&&e.closeByMask||h&&h.target===d.value)&&(n("update:modelValue",!1),n("close"))}function r(){l.value&&c("0","0"),n("afterLeave")}function p(){n("afterEnd")}return Y(function(){document.addEventListener("click",m)}),xe(function(){document.removeEventListener("click",m)}),(h,v)=>(g(),x("section",null,[(g(),L(Ne,{to:"body",disabled:!o.appendToBody},[E(W,{name:"fade"},{default:S(()=>[Z(y("div",{ref_key:"el",ref:s,class:"base-dialog fvc",style:N({zIndex:w(i)}),onClick:a},[E(W,{name:"dialog-move",onAfterLeave:r,onAfterEnter:p},{default:S(()=>[Z(y("div",{ref_key:"contentBox",ref:f,class:"base-dialog-content flex",style:N({width:o.width})},[y("div",Ue,[h.$slots.header?C("",!0):(g(),x("h2",Ge,B(o.title),1)),G(h.$slots,"header"),y("i",{class:"base-dialog-icon",ref_key:"closeBtn",ref:d,onClick:a},null,512)]),y("div",Ke,[G(h.$slots,"default")]),h.$slots.footer?(g(),x("div",Ze,[G(h.$slots,"footer")])):C("",!0)],4),[[Q,l.value]])]),_:3})],4),[[Q,o.modelValue]])]),_:3})],8,["disabled"])),o.appendToBody?(g(),x("div",{key:0,id:u,description:"用来标记 teleport 开启之后插入的节点用"})):C("",!0)]))}}),tt="modulepreload",nt=function(o,t){return new URL(o,t).href},pe={},k=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){const s=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));i=Promise.all(e.map(l=>{if(l=nt(l,n),l in pe)return;pe[l]=!0;const u=l.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(!!n)for(let r=s.length-1;r>=0;r--){const p=s[r];if(p.href===l&&(!u||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${m}`))return;const a=document.createElement("link");if(a.rel=u?"stylesheet":tt,u||(a.as="script",a.crossOrigin=""),a.href=l,f&&a.setAttribute("nonce",f),document.head.appendChild(a),u)return new Promise((r,p)=>{a.addEventListener("load",r),a.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}return i.then(()=>t()).catch(s=>{const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=s,window.dispatchEvent(d),!d.defaultPrevented)throw s})};function ot(o){return Object.prototype.toString.call(o).match(/\[object (\S*)\]/)[1].toLocaleLowerCase()}function we(o,t){return ot(o)===t}function M(o,t){for(const e in t)if(Object.prototype.hasOwnProperty.call(o,e)){const n=t[e],i=o[e];we(i,"object")?M(i,n):o[e]=n}}function it(o,t,e){if(o=o.replace(/(^\s*)|(\s*$)/g,""),!o){e&&e("复制的内容不能为空！");return}const n="the-clipboard";let i=document.getElementById(n);i||(i=document.createElement("textarea"),i.id=n,i.readOnly=!0,i.style.cssText="font-size: 15px; position: fixed; top: -1000%; left: -1000%;",document.body.appendChild(i)),i.value=o,i.select(),i.setSelectionRange(0,i.value.length),document.execCommand("copy")?t&&t():e&&e("复制失败")}function an(o,t,e){let n=o.toString().trim();if(n.length===0)return"";const i="";return n=n.replace(/[^0-9]+/ig,""),i+n}function Ee(o,t={}){let e=t;if(we(o,"string"))try{e=JSON.parse(o)}catch(n){console.warn("JSON格式化对象错误 >>",n)}return e}function st(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)}function rt(o){return ee.get(o)||""}function at(o,t,e){e?ee.set(o,t,e):ee.set(o,t)}function lt(o,t){ee.remove(o)}const se="ModuleUser";function ge(){return{id:"",name:"",type:"",token:"",avatar:"",account:"",password:""}}const ct=3,ut=24*60*60*1e3;class dt{constructor(){A(this,"info",z(ge()));this.init()}init(){const t=rt(se);if(t){const e=Ee(t);M(this.info,e)}}update(t){M(this.info,t),at(se,JSON.stringify(this.info),{expires:new Date(Date.now()+ct*ut)})}reset(){M(this.info,ge()),lt(se)}}const ft=""+new URL("../image/logo-CPmPqqKk.png",import.meta.url).href,ve="ModuleLayout";class mt{constructor(){A(this,"addRouters",[]);A(this,"completeRouters",[]);A(this,"info",z({showTagsView:!0,sidebarOpen:!0,showSidebarLogo:!0,historyViews:[],layoutMode:""}));A(this,"menuSizeInfo",z({titleHeight:0,itemHeight:0}));this.init(),j(this.info,this.saveInfo.bind(this))}init(){const t=sessionStorage.getItem(ve);try{t&&M(this.info,JSON.parse(t))}catch(e){console.log("ModuleLayout init fail >>",e)}}saveInfo(){sessionStorage.setItem(ve,JSON.stringify(this.info))}}const re="ModuleGoods";function ye(){return{id:0,name:"",price:0,specs:{size:"xs",width:"",height:""}}}class ht{constructor(){A(this,"info",z(ye()));const t=sessionStorage.getItem(re);if(t){const e=Ee(t);M(this.info,e)}}update(t){M(this.info,t),sessionStorage.setItem(re,JSON.stringify(this.info))}reset(){M(this.info,ye()),sessionStorage.removeItem(re)}}class pt{constructor(){A(this,"projectInfo",{title:"Vue Typescript Admin",name:"XXX后台管理平台",logo:ft,link:"https://github.com/Travis-hjs/vue-admin"});A(this,"layout",new mt);A(this,"user",new dt);A(this,"_goods");console.log("%c ModuleStore init","color: #409EFF")}get goods(){return this._goods||(this._goods=new ht),this._goods}}const $=new pt,gt={key:0,class:"separator"},vt={key:1,href:"javascript:void(0)"},yt=O({__name:"Breadcrumb",setup(o){const t=fe(),e=T([]);function n(){const i=t.matched.filter(s=>s.meta&&s.meta.title).map(s=>({path:s.path,meta:{...s.meta}}));e.value=i}return j(()=>t.path,function(){t.path.startsWith("/redirect/")||n()}),n(),(i,s)=>{const d=V("router-link");return g(),L(Pe,{name:"breadcrumb",tag:"div",class:"layout-breadcrumb f-vertical"},{default:S(()=>[(g(!0),x(q,null,te(e.value,(f,l)=>(g(),x("span",{class:P(["layout-breadcrumb-item",{last:l===e.value.length-1}]),key:f.path},[l>0?(g(),x("i",gt,"/")):C("",!0),l===e.value.length-1?(g(),x("a",vt,B(f.meta.title),1)):(g(),L(d,{key:2,to:f.path},{default:S(()=>[$e(B(f.meta.title),1)]),_:2},1032,["to"]))],2))),128))]),_:1})}}}),_e=function(){const o=document.createElement("div");o.style.width="100px",o.style.height="100px",o.style.overflow="scroll",document.body.appendChild(o);const t=o.offsetWidth-o.clientWidth;return o.remove(),t}(),_t=O({name:"Scrollbar"}),Le=O({..._t,props:{thumbColor:{type:String,default:"rgba(147, 147, 153, 0.45)"},thumbSize:{type:Number,default:8},clickUpdateDelay:{type:Number,default:0}},setup(o,{expose:t}){const e=o,n=T(),i=T(),s=T(),d=T(),f=z({height:"",width:""}),l=z({x:{width:"",height:"",left:"",bottom:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor},y:{width:"",height:"",top:"",right:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor}}),u=T(!1);function m(){const _=n.value.parentElement;_.style.overflow="hidden";const b=getComputedStyle(_);f.width=`calc(100% + ${_e}px + ${b.borderLeftWidth} + ${b.borderRightWidth})`,f.height=`calc(100% + ${_e}px + ${b.borderTopWidth} + ${b.borderBottomWidth})`}function c(){l.y.right=l.y.top="0px",l.y.width=e.thumbSize+"px",l.x.bottom=l.x.left="0px",l.x.height=e.thumbSize+"px",l.x.borderRadius=l.y.borderRadius=`${e.thumbSize/2}px`}function a(){const _=i.value;if(_){let b=_.clientHeight/_.scrollHeight*100;b>=100&&(b=0),l.y.height=b+"%",l.y.transform=`translate3d(0, ${_.scrollTop/_.scrollHeight*_.clientHeight}px, 0)`;let R=_.clientWidth/_.scrollWidth*100;R>=100&&(R=0),l.x.width=R+"%",l.x.transform=`translate3d(${_.scrollLeft/_.scrollWidth*_.clientWidth}px, 0, 0)`}}let r=!1,p=!1,h=0,v;function I(_){const b=s.value,R=d.value,H=_.target;b.contains(H)&&(r=!0,p=!1,h=_.clientX-b.getBoundingClientRect().left),R.contains(H)&&(r=!0,p=!0,h=_.clientY-R.getBoundingClientRect().top)}function F(_){if(!r)return;const b=i.value;if(p){const R=b.getBoundingClientRect().top,H=b.clientHeight;let oe=_.clientY-R;b.scrollTop=(oe-h)/H*b.scrollHeight}else{const R=b.getBoundingClientRect().left,H=b.clientWidth;let oe=_.clientX-R;b.scrollLeft=(oe-h)/H*b.scrollWidth}}function U(_){r=!1,n.value.contains(_.target)?e.clickUpdateDelay>0&&(v&&clearTimeout(v),v=setTimeout(a,e.clickUpdateDelay)):u.value=!1}function ne(){u.value=!0,a()}function me(){r||(u.value=!1)}return Y(function(){m(),c(),i.value&&i.value.addEventListener("scroll",a),document.addEventListener("mousedown",I),document.addEventListener("mousemove",F),document.addEventListener("mouseup",U)}),xe(function(){i.value&&i.value.removeEventListener("scroll",a),document.removeEventListener("mousedown",I),document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",U),v&&clearTimeout(v)}),t({updateWrapStyle:m,updateThumbStyle:a}),(_,b)=>(g(),x("div",{class:"the-scrollbar",ref_key:"el",ref:n,onMouseenter:b[0]||(b[0]=R=>ne()),onMouseleave:b[1]||(b[1]=R=>me())},[y("div",{ref_key:"wrap",ref:i,class:"the-scrollbar-wrap",style:N(f)},[G(_.$slots,"default")],4),E(W,{name:"fade"},{default:S(()=>[Z(y("button",{class:"the-scrollbar-thumb",ref_key:"thumbY",ref:d,title:"滚动条-摁住拖拽Y轴",style:N(l.y)},null,4),[[Q,u.value]])]),_:1}),E(W,{name:"fade"},{default:S(()=>[Z(y("button",{class:"the-scrollbar-thumb",ref_key:"thumbX",ref:s,title:"滚动条-摁住拖拽X轴",style:N(l.x)},null,4),[[Q,u.value]])]),_:1})],544))}}),bt={class:"the-layout-header"},xt={class:"the-layout-navbar flex"},$t={class:"user-info-box f-vertical"},kt=["src"],wt={class:"the-tag green mgr-10"},Et=y("span",null,"退出登录",-1),Lt={key:0,class:"the-layout-tag-box"},St={class:"the-layout-tags"},Ot=["onClick"],Tt="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",It=O({__name:"HeaderBar",setup(o){const t=fe(),e=Be(),n=$.layout.info,i=$.user.info;function s(){n.sidebarOpen=!n.sidebarOpen}function d(){$.user.reset(),e.push("/login").then(()=>{n.historyViews=[],Zt()})}function f(u){return u.path===t.path&&JSON.stringify(u.query)===JSON.stringify(t.query)&&JSON.stringify(u.params)===JSON.stringify(t.params)}function l(u){n.historyViews.splice(u,1)}return j(()=>t.path,function(){n.historyViews.some(m=>f(m))||n.historyViews.push({name:t.name,path:t.path,query:t.query,params:t.params,meta:t.meta})},{immediate:!0}),(u,m)=>{const c=V("svg-icon"),a=V("router-link");return g(),x("div",bt,[y("div",xt,[y("div",{class:P(["fvc hamburger",{"hamburger-active":w(n).sidebarOpen}]),onClick:m[0]||(m[0]=r=>s())},[E(c,{name:"hamburger"})],2),E(yt,{class:"f1"}),y("div",$t,[y("img",{class:"avatar",src:w(i).avatar||Tt},null,8,kt),y("span",wt,B(w(i).name||w(i).account||"用户未设置昵称"),1),y("button",{class:"logout f-vertical",onClick:m[1]||(m[1]=r=>d())},[E(c,{name:"exit"}),Et])])]),w(n).showTagsView?(g(),x("div",Lt,[E(w(Le),null,{default:S(()=>[y("div",St,[(g(!0),x(q,null,te(w(n).historyViews,(r,p)=>(g(),L(a,{class:P(["the-layout-tag",{"the-layout-tag-on":f(r)}]),key:p+r.path,to:{path:r.path,query:r.query,params:r.params}},{default:S(()=>[y("span",null,B(r.meta.title),1),y("i",{class:"close",onClick:De(h=>l(p),["prevent","stop"])},"-",8,Ot)]),_:2},1032,["class","to"]))),128))])]),_:1})])):C("",!0)])}}}),Rt={class:"f1"},Ct=y("i",{class:"the-layout-menu-arrow"},null,-1),At=["href"],Nt={class:"f1"},Pt={class:"f1"},Bt=["href"],Dt=O({__name:"MenuItem",props:{level:{type:Number,default:1},info:{type:Object,default:()=>({title:"-"})}},setup(o){const t=o;function e(c){return!!(c.children&&c.children.length>0)}function n(c){let a=0;const r=c.children,p=$.layout.menuSizeInfo;return c.isOpen&&r&&r.length>0&&r.forEach(h=>{const v=e(h)?p.titleHeight:p.itemHeight;a+=v,a+=n(h)}),a}const i=K(function(){const c=t.info;return{"the-layout-menu-title f-vertical":!0,"the-layout-menu-selected":c.isActive,"the-layout-menu-open":c.isOpen,"the-layout-menu-actived":c.hasActive,"the-layout-menu-active-title":c.hasActive&&t.level===1}});function s(c){return{"the-layout-menu-item f-vertical":!0,"the-layout-menu-selected":c.isActive}}const d=z({paddingLeft:""}),f=z({paddingLeft:""}),l=K(function(){return{height:n(t.info)+"px"}}),u=T();function m(){t.info.isOpen=!t.info.isOpen}return Y(function(){const c=u.value;if(t.level>=1){const a=getComputedStyle(c.children[0]),r=parseFloat(a.paddingLeft);if(isNaN(r))return;d.paddingLeft=r*t.level+"px",f.paddingLeft=r*(t.level+1)+"px"}}),(c,a)=>{const r=V("svg-icon"),p=V("router-link"),h=V("MenuItem",!0);return g(),x("div",{class:"the-layout-menu",ref_key:"menuBox",ref:u},[e(o.info)?(g(),x("button",{key:0,class:P(i.value),style:N(d),onClick:a[0]||(a[0]=v=>m())},[o.info.icon?(g(),L(r,{key:0,name:o.info.icon},null,8,["name"])):C("",!0),y("span",Rt,B(o.info.title),1),Ct],6)):(g(),x(q,{key:1},[o.info.link?(g(),x("a",{key:0,class:P(i.value),style:N(d),href:o.info.link,target:"_blank"},[o.info.icon?(g(),L(r,{key:0,name:o.info.icon},null,8,["name"])):C("",!0),y("span",Nt,B(o.info.title),1)],14,At)):(g(),L(p,{key:1,class:P(i.value),style:N(d),to:o.info.path},{default:S(()=>[o.info.icon?(g(),L(r,{key:0,name:o.info.icon},null,8,["name"])):C("",!0),y("span",Pt,B(o.info.title),1)]),_:1},8,["class","style","to"]))],64)),o.info.children&&o.info.children.length>0?(g(),x("div",{key:2,class:"the-layout-menu-list",style:N(l.value)},[(g(!0),x(q,null,te(o.info.children,v=>(g(),x("div",{key:v.key},[e(v)?(g(),L(h,{key:0,info:v,level:o.level+1},null,8,["info","level"])):(g(),x(q,{key:1},[v.link?(g(),x("a",{key:0,class:P(s(v)),style:N(f),href:v.link,target:"_blank"},[v.icon?(g(),L(r,{key:0,name:v.icon},null,8,["name"])):C("",!0),y("span",null,B(v.title),1)],14,Bt)):(g(),L(p,{key:1,class:P(s(v)),style:N(f),to:v.path},{default:S(()=>[v.icon?(g(),L(r,{key:0,name:v.icon},null,8,["name"])):C("",!0),y("span",null,B(v.title),1)]),_:2},1032,["class","style","to"]))],64))]))),128))],4)):C("",!0)],512)}}}),Vt=O({__name:"Menu",props:{mergeOnlyOneChild:{type:Boolean,default:!1},onlyMergeFirst:{type:Boolean,default:!1}},setup(o){const t=o,e=fe();function n(c,a){c=JSON.parse(JSON.stringify(c));const r=[];for(let p=0;p<c.length;p++){const h=c[p],v={key:a?`${a}-${p}`:p.toString(),isOpen:!1,isActive:!1,hasActive:!1,children:[],path:h.path,...h.meta};if(!v.hidden){r.push(v);const I=h.children;I&&I.length>0&&(v.children=n(I,v.key))}}return r}function i(c){c=JSON.parse(JSON.stringify(c));const a=[];for(let r=0;r<c.length;r++){const p=c[r],h=p.children;h&&h.length>0?h.length===1?(h[0].key=p.key,a.push(h[0]),h[0].children&&h[0].children.length>0&&!t.onlyMergeFirst&&(h[0].children=i(h[0].children))):(a.push(p),t.onlyMergeFirst||(p.children=i(h))):a.push(p)}return a}let s=n(Te($.layout.completeRouters));t.mergeOnlyOneChild&&(s=i(s));const d=T(s);let f=[];function l(c){for(let a=0;a<c.length;a++){const r=c[a];r.hasActive=!1,r.isOpen&&(!r.children||r.children&&r.children.length===0)&&(r.isOpen=!1),r.isActive=r.path===e.path,r.isActive&&(f=r.key.split("-").map(p=>Number(p))),r.children&&r.children.length>0&&l(r.children)}}function u(c,a=0){const r=f[a],p=c[r];p.hasActive=p.isOpen=!0,a<f.length-1&&u(p.children,a+1)}function m(){f=[],l(d.value),f.length>0&&u(d.value)}return j(()=>e.path,function(){m()}),Y(function(){m();function c(a,r=0){const p=document.querySelector(a);return p?p.clientHeight:(console.log("%c 找不到节点 >>","color: #ff4949",a,"已使用默认值 >>",r),r)}$.layout.menuSizeInfo.titleHeight=c(".the-layout-menu .the-layout-menu-title",50),$.layout.menuSizeInfo.itemHeight=c(".the-layout-menu .the-layout-menu-item",44)}),(c,a)=>(g(!0),x(q,null,te(d.value,r=>(g(),L(Dt,{key:r.key,info:r},null,8,["info"]))),128))}}),Mt={class:"the-layout-sidebar"},zt={key:0,class:"the-logo-box"},Ht=["src"],qt=["title"],Wt=O({__name:"Sidebar",setup(o){const t=$.layout.info,e=$.projectInfo;return(n,i)=>{const s=V("router-link");return g(),x("div",Mt,[E(w(Le),{clickUpdateDelay:300,thumbSize:10},{default:S(()=>[E(W,{name:"fade"},{default:S(()=>[w(t).showSidebarLogo?(g(),x("div",zt,[E(s,{class:"the-logo-link f-vertical",to:"/"},{default:S(()=>[y("img",{class:"the-logo",src:w(e).logo},null,8,Ht),y("h1",{class:"the-logo-title ellipsis",title:w(e).title},B(w(e).title),9,qt)]),_:1})])):C("",!0)]),_:1}),E(Vt,{mergeOnlyOneChild:!0,onlyMergeFirst:!0})]),_:1})])}}}),Xt=O({name:"Layout"}),ae=O({...Xt,setup(o){const t=$.layout.info;function e(u){let m=[];for(let c=0;c<u.length;c++){const a=u[c],r=a.children;r&&r.length>0&&(m=m.concat(e(r))),a.meta.keepAlive&&a.name&&m.push(a.name)}return m.filter(c=>c)}const n=e($.layout.completeRouters),i=T(),s=T(!1);let d;function f(){d.scrollTo({top:0,left:0,behavior:"smooth"})}function l(){s.value=d.scrollTop>document.documentElement.clientHeight}return Y(function(){d=i.value,d.addEventListener("scroll",l),l()}),(u,m)=>{const c=V("router-view");return g(),x("div",{class:P(["the-layout",w(t).layoutMode,{"has-tags-view":w(t).showTagsView},{"collapsed-sidebar":!w(t).sidebarOpen}])},[E(It),E(Wt),y("div",{class:"the-layout-content",ref_key:"contentBox",ref:i},[E(c,{class:"the-layout-page"},{default:S(({Component:a,route:r})=>[E(W,{name:"fadeSlideX",mode:"out-in"},{default:S(()=>[(g(),L(Me,{include:w(n)},[(g(),L(Ve(a),{key:r.path}))],1032,["include"]))]),_:2},1024)]),_:1})],512),y("button",{class:P(["the-layout-totop",{"the-layout-totop-hide":!s.value}]),title:"返回顶部",onClick:m[0]||(m[0]=a=>f())},null,2)],2)}}}),Jt=O({name:"page-404"}),jt={class:"page-404 fvc"},Yt=y("h4",{class:"title"},"当前页面不存在",-1);function Ft(o,t,e,n,i,s){const d=V("router-link");return g(),x("div",jt,[y("div",null,[Yt,E(d,{class:"goback",to:"/"},{default:S(()=>[$e("返回首页")]),_:1})])])}const ue=ke(Jt,[["render",Ft]]),Ut=[{path:"/",name:"index",redirect:"/home",component:ae,meta:{title:"首页",icon:"home"},children:[{path:"/home",meta:{title:"首页展示",icon:"guide"},component:()=>k(()=>import("./home-CIeoQHZI.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)},{path:"/nested",name:"nested",redirect:"/nested/menu-1",meta:{title:"多级菜单嵌套",icon:"tree"},component:()=>k(()=>import("./nested-Cik36Koa.js"),__vite__mapDeps([5,1,2,6]),import.meta.url),children:[{path:"/nested/menu-1",name:"nested/menu-1",meta:{title:"el-plus 表格"},component:()=>k(()=>import("./menu-1-gq4N5mjl.js"),__vite__mapDeps([7,1,2,8]),import.meta.url)},{path:"/nested/menu-2",name:"nested/menu-2",meta:{title:"el-plus 表单验证"},component:()=>k(()=>import("./menu-2-B05m0SmO.js"),__vite__mapDeps([9,1,2,10]),import.meta.url)},{path:"/nested/three-level",name:"nested/three-level",meta:{title:"三级菜单"},redirect:"/nested/three-level/menu-1",component:()=>k(()=>import("./nested-Cik36Koa.js"),__vite__mapDeps([5,1,2,6]),import.meta.url),children:[{path:"/nested/three-level/menu-1",name:"/nested/three-level/menu-1",meta:{title:"菜单 3-1"},component:()=>k(()=>import("./menu-1-gq4N5mjl.js"),__vite__mapDeps([7,1,2,8]),import.meta.url)},{path:"/nested/three-level/menu-2",name:"/nested/three-level/menu-2",meta:{title:"菜单 3-2"},component:()=>k(()=>import("./menu-2-B05m0SmO.js"),__vite__mapDeps([9,1,2,10]),import.meta.url)}]},{path:"/nested/four-level",name:"nested/four-level",meta:{title:"三级菜单-2"},redirect:"/nested/four-level/menu-1",component:()=>k(()=>import("./nested-Cik36Koa.js"),__vite__mapDeps([5,1,2,6]),import.meta.url),children:[{path:"/nested/four-level/menu-1",name:"/nested/four-level/menu-1",meta:{title:"菜单 3-2-1"},component:()=>k(()=>import("./menu-1-gq4N5mjl.js"),__vite__mapDeps([7,1,2,8]),import.meta.url)}]},{path:"/nested/menu-3",name:"nested/menu-3",meta:{title:"菜单 2-3"},component:()=>k(()=>import("./menu-3-BofRAZjj.js"),__vite__mapDeps([11,1,2,12]),import.meta.url)}]},{path:"/link-baidu",name:"link-baidu",component:ue,meta:{title:"百度一下",icon:"baidu",link:"https://www.baidu.com"}},{path:"/menu-4",name:"menu-4",meta:{title:"换行菜单标题换行菜单标题",icon:"nested"},component:()=>k(()=>import("./menu-4-CZpxkRgm.js"),__vite__mapDeps([13,1,2,14]),import.meta.url)}]},{path:"/example",name:"example",component:ae,meta:{title:"示例页栏目",icon:"menu"},redirect:"/example/request",children:[{path:"/example/request",name:"example-request",meta:{title:"http-请求示例",keepAlive:!0},component:()=>k(()=>import("./request-BXLldtSz.js"),__vite__mapDeps([15,1,2,16,17]),import.meta.url)},{path:"/example/components",name:"example-components",meta:{title:"自定义组件"},component:()=>k(()=>import("./the-components-Bd7qwkLe.js"),__vite__mapDeps([18,1,2,16,19]),import.meta.url)},{path:"/example/tsx",name:"example-tsx",meta:{title:"tsx-示例"},component:()=>k(()=>import("./example-DBIeRb7K.js"),__vite__mapDeps([20,1,2,21]),import.meta.url)}]},{path:"/icon",name:"icon",meta:{title:"图标栏目",auth:[0]},component:ae,redirect:"/icon/svg-icons",children:[{path:"/icon/svg-icons",name:"svg-icons",component:()=>k(()=>import("./index-BXd80gP6.js"),__vite__mapDeps([22,1,2,23]),import.meta.url),meta:{title:"svg-图标",icon:"svg-icon"}}]},{path:"/"+$.projectInfo.link,name:"GitHub-Travis",component:ue,meta:{title:"项目地址",icon:"github",link:$.projectInfo.link,auth:[0]}}],X={path:"/",query:{}},de="redirect404";let D;function Se(o){const t=[],e=$.user.info.type;for(let n=0;n<o.length;n++){const i=o[n],s=i.meta?i.meta.auth:void 0;(!s||s&&s.includes(e))&&(i.children&&i.children.length>0&&(i.children=Se(i.children)),t.push(i))}return t}async function Gt(){return Se(Ut)}function Kt(o,t){D=o,D.beforeEach(async function(e,n,i){if(ie.start(),$.user.info.token)if($.layout.addRouters.length>0)i();else{$.layout.addRouters=await Gt();for(let s=0;s<$.layout.addRouters.length;s++){const d=$.layout.addRouters[s];D.addRoute(d)}D.hasRoute(de)||D.addRoute({...t[1],path:"/:catchAll(.*)",name:de}),$.layout.completeRouters=t.concat($.layout.addRouters),i({...e,replace:!0})}else e.path==="/login"?i():(X.path=e.path,X.query=e.query,i({path:"/login"}),ie.done())}),D.afterEach(e=>{ie.done(),e.meta&&e.meta.title&&(document.title=e.meta.title)})}function ln(){D.replace({path:X.path,query:X.query})}function Zt(){const o=$.layout.addRouters;for(let t=o.length-1;t>-1;t--){const e=o[t];e.name&&D.hasRoute(e.name)&&D.removeRoute(e.name)}X.path="/",X.query={},D.removeRoute(de),$.layout.addRouters=$.layout.completeRouters=[]}const Oe=[{path:"/login",name:"login",component:()=>k(()=>import("./login-Bi3LvlLY.js"),__vite__mapDeps([24,1,2,16,3,25]),import.meta.url),meta:{hidden:!0,title:"请登录"}},{path:"/404",name:"page-404",component:ue,meta:{hidden:!0,title:"不存在该页面"}},{path:"/401",name:"page-401",component:()=>k(()=>import("./page-401-DtS-R97q.js"),__vite__mapDeps([26,1,2,27]),import.meta.url),meta:{hidden:!0,title:"暂无权限访问"}}];function Te(o){o=JSON.parse(JSON.stringify(o));const t=[];for(let e=0;e<o.length;e++){const n=o[e];(!n.meta||n.meta&&!n.meta.hidden)&&(t.push(n),n.children&&n.children.length>0&&(n.children=Te(n.children)))}return t}const Ie=ze({history:He(),routes:Oe});Kt(Ie,Oe);const Qt="1.1.1",le=[];function en(o,t){let e;le.length>1?e=le.shift():(e=document.createElement("div"),e.className="ripple");const n=t.getBoundingClientRect(),i=t.getAttribute("color");let s=Math.max(n.width,n.height);s>200&&(s=200),e.style.height=e.style.width=s+"px",e.style.backgroundColor=i||"rgba(255, 255, 255, .45)",t.appendChild(e);const d=o.touches,f=d?d[0].clientY:o.clientY,l=d?d[0].clientX:o.clientX,u=f-n.top-e.offsetHeight/2,m=l-n.left-e.offsetWidth/2;e.style.top=u+"px",e.style.left=m+"px";function c(){e.removeEventListener("animationend",c),t.removeChild(e),le.push(e)}e.addEventListener("animationend",c)}function tn(o={}){const t=document,e=`__${Math.random().toString(36).slice(2,7)}`,n={box:`msg-box${e}`,hide:`hide${e}`,text:`msg-text${e}`,icon:`msg-icon${e}`},i=t.createElement("style");i.textContent=`
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
  `.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),t.head.appendChild(i);const s=[];function d(u){let m=10;for(let c=0;c<s.length;c++){const a=s[c];if(u&&u===a)break;m+=a.clientHeight+20}return m}function f(u){for(let m=0;m<s.length;m++)if(s[m]===u){s.splice(m,1);break}u.classList.add(n.hide),s.forEach(function(m){m.style.top=`${d(m)}px`})}function l(u,m="info",c){const a=t.createElement("div");a.className=`${n.box} ${m}`,a.style.top=`${d()}px`,a.style.zIndex=Re.message,a.innerHTML=`
    <span class="${n.icon}"></span>
    <span class="${n.text}">${u}</span>
    `,s.push(a),t.body.appendChild(a);function r(){a.removeEventListener("animationend",r),setTimeout(f,c||o.duration||3e3,a)}a.addEventListener("animationend",r);function p(){getComputedStyle(a).opacity==="0"&&(a.removeEventListener("transitionend",p),a.remove())}a.addEventListener("transitionend",p)}return{show:l,info(u){l(u,"info")},success(u){l(u,"success")},warning(u){l(u,"warning")},error(u){l(u,"error")}}}function nn(){const o=document,t=`__${Math.random().toString(36).slice(2,7)}`,e={mask:`dialog-mask${t}`,popup:`dialog-popup${t}`,title:`dialog-title${t}`,content:`dialog-content${t}`,footer:`dialog-footer${t}`,confirm:`confirm${t}`,fade:`fade${t}`,show:`show${t}`,hide:`hide${t}`},n=`
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
  `,i=o.createElement("style");i.textContent=n.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),o.head.appendChild(i);const s={x:"0vw",y:"0vh"};o.addEventListener("click",function(f){const{innerWidth:l,innerHeight:u}=window,m=l/2,c=u/2,a=f.clientY-c,r=f.clientX-m;s.x=`${r/l*100}vw`,s.y=`${a/u*100}vh`},!0);function d(f){const l=o.createElement("section");l.className=e.mask,l.style.zIndex=Re.dialog,l.style.setProperty("--x",s.x),l.style.setProperty("--y",s.y),s.x="0vw",s.y="0vh";const u=f.cancelText?`<button class="the-btn">${f.cancelText}</button>`:"";l.innerHTML=`
    <div class="${e.popup}">
      <h2 class="${e.title}">${typeof f.title=="string"?f.title:"提示"}</h2>
      <div class="${e.content}">${f.content}</div>
      <div class="${e.footer}">
        ${u}
        <button class="${e.confirm} the-btn blue">${f.confirmText||"确认"}</button>
      </div>
    </div>
    `,o.body.appendChild(l),l.addEventListener("transitionend",function(c){c.target===l&&l.classList.contains(e.hide)&&l.remove()});function m(){l.classList.add(e.hide)}f.cancelText&&(l.querySelector(`.${e.footer} button`).onclick=function(){m(),f.cancel&&f.cancel()}),l.querySelector(`.${e.confirm}`).onclick=function(){m(),f.confirm&&f.confirm()}}return{show:d}}const Re={get message(){return(ce()+20).toString()},get dialog(){return(ce()+10).toString()}},be=tn({duration:3600}),on=nn(),cn=on.show;window.version=Qt;const J=qe(Je);J.directive("copy",{mounted(o,t){o.addEventListener("click",function(){it(t.value,()=>be.success("复制成功"),e=>be.success(e))})}});J.directive("ripple",{mounted(o){const t=st()?"touchstart":"mousedown";o.setAttribute("ripple",""),o.addEventListener(t,function(e){en(e,o)})}});J.component("svg-icon",Fe);J.component("base-dialog",et);J.use(Ie);J.mount("#app");export{ke as _,M as a,cn as b,it as c,Le as d,ot as e,k as f,an as i,Ee as j,be as m,ln as o,$ as s};
