function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./login-BQvr04oD.js","./vendor-E5oG33nU.js","../css/vendor-BUMXTAWU.css","./common-CCj4psVO.js","../css/login-C2zo-VT6.css","./page-401-B2a0x037.js","../css/page-401-hNHv4Vr6.css","./home-CrY1kyzM.js","../css/home-NLRWRYAt.css","./nested-C4Fwsx9U.js","../css/nested-DBbt7j1J.css","./menu-1-BP3eVGXx.js","../css/menu-1-PIQFC6DV.css","./menu-2-D97_A0b0.js","../css/menu-2-DwSbhe9C.css","./menu-3-ClVko1nP.js","../css/menu-3-C1x6D_tQ.css","./menu-4-mDrxtvFg.js","../css/menu-4-B_QkhR3M.css","./request-CYT5zAHV.js","../css/request-BjYaB_Vm.css","./the-components-Dx9Cq0yT.js","../css/the-components-IJgq8Frg.css","./example-B84-eOFO.js","../css/example-CJnj_JQw.css","./index-qzcLwOZp.js","../css/index-CJ5TRbCj.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var Re=Object.defineProperty;var Ae=(o,n,e)=>n in o?Re(o,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[n]=e;var R=(o,n,e)=>(Ae(o,typeof n!="symbol"?n+"":n,e),e);import{d as O,r as D,o as g,c as L,a as G,b as x,e as y,n as P,f as T,w as j,g as Y,h as xe,i as E,j as S,T as W,k as Ne,l as A,m as K,v as Z,p as N,t as B,q as le,u as w,s as fe,x as ee,y as $e,F as q,z as Pe,A as z,B as Q,N as oe,C as Be,D as Ve,E as De,K as Me,G as ze,H as He,I as qe}from"./vendor-E5oG33nU.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const We=O({name:"App"}),ke=(o,n)=>{const e=o.__vccOpts||o;for(const[t,i]of n)e[t]=i;return e};function Xe(o,n,e,t,i,s){const u=D("router-view");return g(),L(u)}const Je=ke(We,[["render",Xe]]),je=["xlink:href"],Ye=O({name:"SvgIcon"}),Fe=O({...Ye,props:{name:{type:String,required:!0,default:""},className:{type:String,default:""}},setup(o){const n=o,e=G(()=>`#icon-${n.name}`),t=G(function(){return n.className?"svg-icon "+n.className:"svg-icon"});return(i,s)=>(g(),x("svg",{class:P(t.value),"aria-hidden":"true"},[y("use",{"xlink:href":e.value},null,8,je)],2))}});let he=1e3;function ce(){const o=he;return he++,o}const Ue={class:"base-dialog-title fbetween fvertical"},Ge={class:"base-dialog-body"},Ke={key:0,class:"base-dialog-footer"},Ze=O({name:"base-dialog"}),Qe=O({...Ze,props:{title:{type:String,default:"提示"},modelValue:{type:Boolean,default:!1},width:{type:String,default:"50%"},closeByMask:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!1}},emits:["close","update:modelValue","afterLeave","afterEnd"],setup(o,{emit:n}){const e=o,t=n,i=ce(),s=T(),u=T(),f=T(),l=T(!1),d="flag-dialog-"+i;j(()=>e.modelValue,function(p){p?setTimeout(()=>{l.value=!0},0):l.value=!1});function m(p){if(e.appendToBody&&!document.getElementById(d)&&(s.value.remove(),s.value=void 0,document.removeEventListener("click",m)),!e.modelValue||l.value||s.value.contains(p.target))return;const{clientWidth:v,clientHeight:I}=s.value,F=v/2,U=I/2,te=p.clientY-U,_=`${(p.clientX-F)/v*100}vw`,b=`${te/I*100}vh`;c(_,b)}function c(p,v){const I=f.value;I&&(I.style.setProperty("--contentX",p),I.style.setProperty("--contentY",v))}function a(p){(p&&p.target===s.value&&e.closeByMask||p&&p.target===u.value)&&(t("update:modelValue",!1),t("close"))}function r(){l.value&&c("0","0"),t("afterLeave")}function h(){t("afterEnd")}return Y(function(){document.addEventListener("click",m)}),xe(function(){document.removeEventListener("click",m)}),(p,v)=>(g(),x("section",null,[(g(),L(Ne,{to:"body",disabled:!o.appendToBody},[E(W,{name:"fade"},{default:S(()=>[K(y("div",{ref_key:"el",ref:s,class:"base-dialog fvc",style:N({zIndex:w(i)}),onClick:a},[E(W,{name:"dialog-move",onAfterLeave:r,onAfterEnter:h},{default:S(()=>[K(y("div",{ref_key:"contentBox",ref:f,class:"base-dialog-content flex",style:N({width:o.width})},[y("div",Ue,[y("h2",null,B(o.title),1),y("i",{ref_key:"closeBtn",ref:u,onClick:a},null,512)]),y("div",Ge,[le(p.$slots,"default")]),p.$slots.footer?(g(),x("div",Ke,[le(p.$slots,"footer")])):A("",!0)],4),[[Z,l.value]])]),_:3})],4),[[Z,o.modelValue]])]),_:3})],8,["disabled"])),o.appendToBody?(g(),x("div",{key:0,id:d,description:"用来标记 teleport 开启之后插入的节点用"})):A("",!0)]))}}),et="modulepreload",tt=function(o,n){return new URL(o,n).href},pe={},k=function(n,e,t){let i=Promise.resolve();if(e&&e.length>0){const s=document.getElementsByTagName("link"),u=document.querySelector("meta[property=csp-nonce]"),f=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));i=Promise.all(e.map(l=>{if(l=tt(l,t),l in pe)return;pe[l]=!0;const d=l.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(!!t)for(let r=s.length-1;r>=0;r--){const h=s[r];if(h.href===l&&(!d||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${m}`))return;const a=document.createElement("link");if(a.rel=d?"stylesheet":et,d||(a.as="script",a.crossOrigin=""),a.href=l,f&&a.setAttribute("nonce",f),document.head.appendChild(a),d)return new Promise((r,h)=>{a.addEventListener("load",r),a.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}return i.then(()=>n()).catch(s=>{const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=s,window.dispatchEvent(u),!u.defaultPrevented)throw s})},nt={key:0,class:"separator"},ot={key:1,href:"javascript:void(0)"},it=O({__name:"Breadcrumb",setup(o){const n=fe(),e=T([]);function t(){const i=n.matched.filter(s=>s.meta&&s.meta.title).map(s=>({path:s.path,meta:{...s.meta}}));e.value=i}return j(()=>n.path,function(){n.path.startsWith("/redirect/")||t()}),t(),(i,s)=>{const u=D("router-link");return g(),L(Pe,{name:"breadcrumb",tag:"div",class:"layout-breadcrumb fvertical"},{default:S(()=>[(g(!0),x(q,null,ee(e.value,(f,l)=>(g(),x("span",{class:P(["layout-breadcrumb-item",{last:l===e.value.length-1}]),key:f.path},[l>0?(g(),x("i",nt,"/")):A("",!0),l===e.value.length-1?(g(),x("a",ot,B(f.meta.title),1)):(g(),L(u,{key:2,to:f.path},{default:S(()=>[$e(B(f.meta.title),1)]),_:2},1032,["to"]))],2))),128))]),_:1})}}}),ge=function(){const o=document.createElement("div");o.style.width="100px",o.style.height="100px",o.style.overflow="scroll",document.body.appendChild(o);const n=o.offsetWidth-o.clientWidth;return o.remove(),n}(),st=O({name:"Scrollbar"}),we=O({...st,props:{thumbColor:{type:String,default:"rgba(147, 147, 153, 0.45)"},thumbSize:{type:Number,default:8},clickUpdateDelay:{type:Number,default:0}},setup(o,{expose:n}){const e=o,t=T(),i=T(),s=T(),u=T(),f=z({height:"",width:""}),l=z({x:{width:"",height:"",left:"",bottom:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor},y:{width:"",height:"",top:"",right:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor}}),d=T(!1);function m(){const _=t.value.parentElement;_.style.overflow="hidden";const b=getComputedStyle(_);f.width=`calc(100% + ${ge}px + ${b.borderLeftWidth} + ${b.borderRightWidth})`,f.height=`calc(100% + ${ge}px + ${b.borderTopWidth} + ${b.borderBottomWidth})`}function c(){l.y.right=l.y.top="0px",l.y.width=e.thumbSize+"px",l.x.bottom=l.x.left="0px",l.x.height=e.thumbSize+"px",l.x.borderRadius=l.y.borderRadius=`${e.thumbSize/2}px`}function a(){const _=i.value;if(_){let b=_.clientHeight/_.scrollHeight*100;b>=100&&(b=0),l.y.height=b+"%",l.y.transform=`translate3d(0, ${_.scrollTop/_.scrollHeight*_.clientHeight}px, 0)`;let C=_.clientWidth/_.scrollWidth*100;C>=100&&(C=0),l.x.width=C+"%",l.x.transform=`translate3d(${_.scrollLeft/_.scrollWidth*_.clientWidth}px, 0, 0)`}}let r=!1,h=!1,p=0,v;function I(_){const b=s.value,C=u.value,H=_.target;b.contains(H)&&(r=!0,h=!1,p=_.clientX-b.getBoundingClientRect().left),C.contains(H)&&(r=!0,h=!0,p=_.clientY-C.getBoundingClientRect().top)}function F(_){if(!r)return;const b=i.value;if(h){const C=b.getBoundingClientRect().top,H=b.clientHeight;let ne=_.clientY-C;b.scrollTop=(ne-p)/H*b.scrollHeight}else{const C=b.getBoundingClientRect().left,H=b.clientWidth;let ne=_.clientX-C;b.scrollLeft=(ne-p)/H*b.scrollWidth}}function U(_){r=!1,t.value.contains(_.target)?e.clickUpdateDelay>0&&(v&&clearTimeout(v),v=setTimeout(a,e.clickUpdateDelay)):d.value=!1}function te(){d.value=!0,a()}function me(){r||(d.value=!1)}return Y(function(){m(),c(),i.value&&i.value.addEventListener("scroll",a),document.addEventListener("mousedown",I),document.addEventListener("mousemove",F),document.addEventListener("mouseup",U)}),xe(function(){i.value&&i.value.removeEventListener("scroll",a),document.removeEventListener("mousedown",I),document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",U),v&&clearTimeout(v)}),n({updateWrapStyle:m,updateThumbStyle:a}),(_,b)=>(g(),x("div",{class:"the-scrollbar",ref_key:"el",ref:t,onMouseenter:b[0]||(b[0]=C=>te()),onMouseleave:b[1]||(b[1]=C=>me())},[y("div",{ref_key:"wrap",ref:i,class:"the-scrollbar-wrap",style:N(f)},[le(_.$slots,"default")],4),E(W,{name:"fade"},{default:S(()=>[K(y("button",{class:"the-scrollbar-thumb",ref_key:"thumbY",ref:u,title:"滚动条-摁住拖拽Y轴",style:N(l.y)},null,4),[[Z,d.value]])]),_:1}),E(W,{name:"fade"},{default:S(()=>[K(y("button",{class:"the-scrollbar-thumb",ref_key:"thumbX",ref:s,title:"滚动条-摁住拖拽X轴",style:N(l.x)},null,4),[[Z,d.value]])]),_:1})],544))}});function rt(o){return Object.prototype.toString.call(o).match(/\[object (\S*)\]/)[1].toLocaleLowerCase()}function Ee(o,n){return rt(o)===n}function M(o,n){for(const e in n)if(Object.prototype.hasOwnProperty.call(o,e)){const t=n[e],i=o[e];Ee(i,"object")?M(i,t):o[e]=t}}function at(o,n,e){if(o=o.replace(/(^\s*)|(\s*$)/g,""),!o){e&&e("复制的内容不能为空！");return}const t="the-clipboard";let i=document.getElementById(t);i||(i=document.createElement("textarea"),i.id=t,i.readOnly=!0,i.style.cssText="font-size: 15px; position: fixed; top: -1000%; left: -1000%;",document.body.appendChild(i)),i.value=o,i.select(),i.setSelectionRange(0,i.value.length),document.execCommand("copy")?n&&n():e&&e("复制失败")}function on(o,n,e){let t=o.toString().trim();if(t.length===0)return"";const i="";return t=t.replace(/[^0-9]+/ig,""),i+t}function Le(o,n={}){let e=n;if(Ee(o,"string"))try{e=JSON.parse(o)}catch(t){console.warn("JSON格式化对象错误 >>",t)}return e}function lt(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)}function ct(o){return Q.get(o)||""}function ut(o,n,e){e?Q.set(o,n,e):Q.set(o,n)}function dt(o,n){Q.remove(o)}const ie="ModuleUser";function ve(){return{id:"",name:"",type:"",token:"",avatar:"",account:"",password:""}}const ft=3,mt=24*60*60*1e3;class ht{constructor(){R(this,"info",z(ve()));this.init()}init(){const n=ct(ie);if(n){const e=Le(n);M(this.info,e)}}update(n){M(this.info,n),ut(ie,JSON.stringify(this.info),{expires:new Date(Date.now()+ft*mt)})}reset(){M(this.info,ve()),dt(ie)}}const pt=""+new URL("../image/logo-CPmPqqKk.png",import.meta.url).href,ye="ModuleLayout";class gt{constructor(){R(this,"addRouters",[]);R(this,"completeRouters",[]);R(this,"info",z({showTagsView:!0,sidebarOpen:!0,showSidebarLogo:!0,historyViews:[],layoutMode:""}));R(this,"menuSizeInfo",z({titleHeight:0,itemHeight:0}));this.init(),j(this.info,this.saveInfo.bind(this))}init(){const n=sessionStorage.getItem(ye);try{n&&M(this.info,JSON.parse(n))}catch(e){console.log("ModuleLayout init fail >>",e)}}saveInfo(){sessionStorage.setItem(ye,JSON.stringify(this.info))}}const se="ModuleGoods";function _e(){return{id:0,name:"",price:0,specs:{size:"xs",width:"",height:""}}}class vt{constructor(){R(this,"info",z(_e()));const n=sessionStorage.getItem(se);if(n){const e=Le(n);M(this.info,e)}}update(n){M(this.info,n),sessionStorage.setItem(se,JSON.stringify(this.info))}reset(){M(this.info,_e()),sessionStorage.removeItem(se)}}class yt{constructor(){R(this,"projectInfo",{title:"Vue Typescript Admin",name:"XXX后台管理平台",logo:pt,link:"https://github.com/Travis-hjs/vue-admin"});R(this,"layout",new gt);R(this,"user",new ht);R(this,"_goods");console.log("%c ModuleStore init","color: #409EFF")}get goods(){return this._goods||(this._goods=new vt),this._goods}}const $=new yt,X={path:"/",query:{}},ue="redirect404";let V;function Se(o){const n=[],e=$.user.info.type;for(let t=0;t<o.length;t++){const i=o[t],s=i.meta?i.meta.auth:void 0;(!s||s&&s.includes(e))&&(i.children&&i.children.length>0&&(i.children=Se(i.children)),n.push(i))}return n}function _t(o,n,e){V=o,V.beforeEach(function(t,i,s){if(oe.start(),$.user.info.token)if($.layout.addRouters.length>0)s();else{$.layout.addRouters=Se(e);for(let u=0;u<$.layout.addRouters.length;u++){const f=$.layout.addRouters[u];V.addRoute(f)}V.hasRoute(ue)||V.addRoute({...n[1],path:"/:catchAll(.*)",name:ue}),$.layout.completeRouters=n.concat($.layout.addRouters),s({...t,replace:!0})}else t.path==="/login"?s():(X.path=t.path,X.query=t.query,s({path:"/login"}),oe.done())}),V.afterEach(t=>{oe.done(),t.meta&&t.meta.title&&(document.title=t.meta.title)})}function sn(){V.replace({path:X.path,query:X.query})}function bt(){const o=$.layout.addRouters;for(let n=o.length-1;n>-1;n--){const e=o[n];e.name&&V.hasRoute(e.name)&&V.removeRoute(e.name)}X.path="/",X.query={},V.removeRoute(ue),$.layout.addRouters=$.layout.completeRouters=[]}const xt={class:"the-layout-header"},$t={class:"the-layout-navbar flex"},kt={class:"user-info-box fvertical"},wt=["src"],Et={class:"the-tag green mgr_10"},Lt=y("span",null,"退出登录",-1),St={key:0,class:"the-layout-tags"},Ot=["onClick"],Tt="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",It=O({__name:"HeaderBar",setup(o){const n=fe(),e=Be(),t=$.layout.info,i=$.user.info;function s(){t.sidebarOpen=!t.sidebarOpen}function u(){$.user.reset(),e.push("/login").then(()=>{t.historyViews=[],bt()})}function f(d){return d.path===n.path&&JSON.stringify(d.query)===JSON.stringify(n.query)&&JSON.stringify(d.params)===JSON.stringify(n.params)}function l(d){t.historyViews.splice(d,1)}return j(()=>n.path,function(){t.historyViews.some(m=>f(m))||t.historyViews.push({name:n.name,path:n.path,query:n.query,params:n.params,meta:n.meta})},{immediate:!0}),(d,m)=>{const c=D("svg-icon"),a=D("router-link");return g(),x("div",xt,[y("div",$t,[y("div",{class:P(["fvc hamburger",{"hamburger-active":w(t).sidebarOpen}]),onClick:m[0]||(m[0]=r=>s())},[E(c,{name:"hamburger"})],2),E(it,{class:"f1"}),y("div",kt,[y("img",{class:"avatar",src:w(i).avatar||Tt},null,8,wt),y("span",Et,B(w(i).name||w(i).account||"用户未设置昵称"),1),y("button",{class:"logout fvertical",onClick:m[1]||(m[1]=r=>u())},[E(c,{name:"exit"}),Lt])])]),w(t).showTagsView?(g(),x("div",St,[E(w(we),null,{default:S(()=>[(g(!0),x(q,null,ee(w(t).historyViews,(r,h)=>(g(),L(a,{class:P(["the-layout-tag",{"the-layout-tag-on":f(r)}]),key:h+r.path,to:{path:r.path,query:r.query,params:r.params}},{default:S(()=>[y("span",null,B(r.meta.title),1),y("i",{class:"close",onClick:Ve(p=>l(h),["prevent","stop"])},"-",8,Ot)]),_:2},1032,["class","to"]))),128))]),_:1})])):A("",!0)])}}}),Ct={class:"f1"},Rt=y("i",{class:"the-layout-menu-arrow"},null,-1),At=["href"],Nt={class:"f1"},Pt={class:"f1"},Bt=["href"],Vt=O({__name:"MenuItem",props:{level:{type:Number,default:1},info:{type:Object,default:()=>({title:"-"})}},setup(o){const n=o;function e(c){return!!(c.children&&c.children.length>0)}function t(c){let a=0;const r=c.children,h=$.layout.menuSizeInfo;return c.isOpen&&r&&r.length>0&&r.forEach(p=>{const v=e(p)?h.titleHeight:h.itemHeight;a+=v,a+=t(p)}),a}const i=G(function(){const c=n.info;return{"the-layout-menu-title fvertical":!0,"the-layout-menu-selected":c.isActive,"the-layout-menu-open":c.isOpen,"the-layout-menu-actived":c.hasActive,"the-layout-menu-active-title":c.hasActive&&n.level===1}});function s(c){return{"the-layout-menu-item fvertical":!0,"the-layout-menu-selected":c.isActive}}const u=z({paddingLeft:""}),f=z({paddingLeft:""}),l=G(function(){return{height:t(n.info)+"px"}}),d=T();function m(){n.info.isOpen=!n.info.isOpen}return Y(function(){const c=d.value;if(n.level>=1){const a=getComputedStyle(c.children[0]),r=parseFloat(a.paddingLeft);if(isNaN(r))return;u.paddingLeft=r*n.level+"px",f.paddingLeft=r*(n.level+1)+"px"}}),(c,a)=>{const r=D("svg-icon"),h=D("router-link"),p=D("MenuItem",!0);return g(),x("div",{class:"the-layout-menu",ref_key:"menuBox",ref:d},[e(o.info)?(g(),x("button",{key:0,class:P(i.value),style:N(u),onClick:a[0]||(a[0]=v=>m())},[o.info.icon?(g(),L(r,{key:0,name:o.info.icon},null,8,["name"])):A("",!0),y("span",Ct,B(o.info.title),1),Rt],6)):(g(),x(q,{key:1},[o.info.link?(g(),x("a",{key:0,class:P(i.value),style:N(u),href:o.info.link,target:"_blank"},[o.info.icon?(g(),L(r,{key:0,name:o.info.icon},null,8,["name"])):A("",!0),y("span",Nt,B(o.info.title),1)],14,At)):(g(),L(h,{key:1,class:P(i.value),style:N(u),to:o.info.path},{default:S(()=>[o.info.icon?(g(),L(r,{key:0,name:o.info.icon},null,8,["name"])):A("",!0),y("span",Pt,B(o.info.title),1)]),_:1},8,["class","style","to"]))],64)),o.info.children&&o.info.children.length>0?(g(),x("div",{key:2,class:"the-layout-menu-list",style:N(l.value)},[(g(!0),x(q,null,ee(o.info.children,v=>(g(),x("div",{key:v.key},[e(v)?(g(),L(p,{key:0,info:v,level:o.level+1},null,8,["info","level"])):(g(),x(q,{key:1},[v.link?(g(),x("a",{key:0,class:P(s(v)),style:N(f),href:v.link,target:"_blank"},[v.icon?(g(),L(r,{key:0,name:v.icon},null,8,["name"])):A("",!0),y("span",null,B(v.title),1)],14,Bt)):(g(),L(h,{key:1,class:P(s(v)),style:N(f),to:v.path},{default:S(()=>[v.icon?(g(),L(r,{key:0,name:v.icon},null,8,["name"])):A("",!0),y("span",null,B(v.title),1)]),_:2},1032,["class","style","to"]))],64))]))),128))],4)):A("",!0)],512)}}}),Dt=O({__name:"Menu",props:{mergeOnlyOneChild:{type:Boolean,default:!1},onlyMergeFirst:{type:Boolean,default:!1}},setup(o){const n=o,e=fe();function t(c,a){c=JSON.parse(JSON.stringify(c));const r=[];for(let h=0;h<c.length;h++){const p=c[h],v={key:a?`${a}-${h}`:h.toString(),isOpen:!1,isActive:!1,hasActive:!1,children:[],path:p.path,...p.meta};if(!v.hidden){r.push(v);const I=p.children;I&&I.length>0&&(v.children=t(I,v.key))}}return r}function i(c){c=JSON.parse(JSON.stringify(c));const a=[];for(let r=0;r<c.length;r++){const h=c[r],p=h.children;p&&p.length>0?p.length===1?(p[0].key=h.key,a.push(p[0]),p[0].children&&p[0].children.length>0&&!n.onlyMergeFirst&&(p[0].children=i(p[0].children))):(a.push(h),n.onlyMergeFirst||(h.children=i(p))):a.push(h)}return a}let s=t(Te($.layout.completeRouters));n.mergeOnlyOneChild&&(s=i(s));const u=T(s);let f=[];function l(c){for(let a=0;a<c.length;a++){const r=c[a];r.hasActive=!1,r.isOpen&&(!r.children||r.children&&r.children.length===0)&&(r.isOpen=!1),r.isActive=r.path===e.path,r.isActive&&(f=r.key.split("-").map(h=>Number(h))),r.children&&r.children.length>0&&l(r.children)}}function d(c,a=0){const r=f[a],h=c[r];h.hasActive=h.isOpen=!0,a<f.length-1&&d(h.children,a+1)}function m(){f=[],l(u.value),f.length>0&&d(u.value)}return j(()=>e.path,function(){m()}),Y(function(){m();function c(a,r=0){const h=document.querySelector(a);return h?h.clientHeight:(console.log("%c 找不到节点 >>","color: #ff4949",a,"已使用默认值 >>",r),r)}$.layout.menuSizeInfo.titleHeight=c(".the-layout-menu .the-layout-menu-title",50),$.layout.menuSizeInfo.itemHeight=c(".the-layout-menu .the-layout-menu-item",44)}),(c,a)=>(g(!0),x(q,null,ee(u.value,r=>(g(),L(Vt,{key:r.key,info:r},null,8,["info"]))),128))}}),Mt={class:"the-layout-sidebar"},zt={key:0,class:"the-logo-box"},Ht=["src"],qt=["title"],Wt=O({__name:"Sidebar",setup(o){const n=$.layout.info,e=$.projectInfo;return(t,i)=>{const s=D("router-link");return g(),x("div",Mt,[E(w(we),{clickUpdateDelay:300,thumbSize:10},{default:S(()=>[E(W,{name:"fade"},{default:S(()=>[w(n).showSidebarLogo?(g(),x("div",zt,[E(s,{class:"the-logo-link fvertical",to:"/"},{default:S(()=>[y("img",{class:"the-logo",src:w(e).logo},null,8,Ht),y("h1",{class:"the-logo-title ellipsis",title:w(e).title},B(w(e).title),9,qt)]),_:1})])):A("",!0)]),_:1}),E(Dt,{mergeOnlyOneChild:!0,onlyMergeFirst:!0})]),_:1})])}}}),Xt=O({name:"Layout"}),re=O({...Xt,setup(o){const n=$.layout.info;function e(d){let m=[];for(let c=0;c<d.length;c++){const a=d[c],r=a.children;r&&r.length>0&&(m=m.concat(e(r))),a.meta.keepAlive&&a.name&&m.push(a.name)}return m.filter(c=>c)}const t=e($.layout.completeRouters),i=T(),s=T(!1);let u;function f(){u.scrollTo({top:0,left:0,behavior:"smooth"})}function l(){s.value=u.scrollTop>document.documentElement.clientHeight}return Y(function(){u=i.value,u.addEventListener("scroll",l),l()}),(d,m)=>{const c=D("router-view");return g(),x("div",{class:P(["the-layout",w(n).layoutMode,{"has-tags-view":w(n).showTagsView},{"collapsed-sidebar":!w(n).sidebarOpen}])},[E(It),E(Wt),y("div",{class:"the-layout-content",ref_key:"contentBox",ref:i},[E(c,{class:"the-layout-page"},{default:S(({Component:a,route:r})=>[E(W,{name:"fadeSlideX",mode:"out-in"},{default:S(()=>[(g(),L(Me,{include:w(t)},[(g(),L(De(a),{key:r.path}))],1032,["include"]))]),_:2},1024)]),_:1})],512),y("button",{class:P(["the-layout-totop",{"the-layout-totop-hide":!s.value}]),title:"返回顶部",onClick:m[0]||(m[0]=a=>f())},null,2)],2)}}}),Jt=O({name:"page-404"}),jt={class:"page-404 fvc"},Yt=y("h4",{class:"title"},"当前页面不存在",-1);function Ft(o,n,e,t,i,s){const u=D("router-link");return g(),x("div",jt,[y("div",null,[Yt,E(u,{class:"goback",to:"/"},{default:S(()=>[$e("返回首页")]),_:1})])])}const de=ke(Jt,[["render",Ft]]),Oe=[{path:"/login",name:"login",component:()=>k(()=>import("./login-BQvr04oD.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),meta:{hidden:!0,title:"请登录"}},{path:"/404",name:"page-404",component:de,meta:{hidden:!0,title:"不存在该页面"}},{path:"/401",name:"page-401",component:()=>k(()=>import("./page-401-B2a0x037.js"),__vite__mapDeps([5,1,2,6]),import.meta.url),meta:{hidden:!0,title:"暂无权限访问"}}],Ut=[{path:"/",name:"index",redirect:"/home",component:re,meta:{title:"首页",icon:"home"},children:[{path:"/home",meta:{title:"首页展示",icon:"guide"},component:()=>k(()=>import("./home-CrY1kyzM.js"),__vite__mapDeps([7,1,2,8]),import.meta.url)},{path:"/nested",name:"nested",redirect:"/nested/menu-1",meta:{title:"多级菜单嵌套",icon:"tree"},component:()=>k(()=>import("./nested-C4Fwsx9U.js"),__vite__mapDeps([9,1,2,10]),import.meta.url),children:[{path:"/nested/menu-1",name:"nested/menu-1",meta:{title:"菜单 2-1"},component:()=>k(()=>import("./menu-1-BP3eVGXx.js"),__vite__mapDeps([11,1,2,12]),import.meta.url)},{path:"/nested/menu-2",name:"nested/menu-2",meta:{title:"菜单 2-2"},component:()=>k(()=>import("./menu-2-D97_A0b0.js"),__vite__mapDeps([13,1,2,14]),import.meta.url)},{path:"/nested/three-level",name:"nested/three-level",meta:{title:"三级菜单"},redirect:"/nested/three-level/menu-1",component:()=>k(()=>import("./nested-C4Fwsx9U.js"),__vite__mapDeps([9,1,2,10]),import.meta.url),children:[{path:"/nested/three-level/menu-1",name:"/nested/three-level/menu-1",meta:{title:"菜单 3-1"},component:()=>k(()=>import("./menu-1-BP3eVGXx.js"),__vite__mapDeps([11,1,2,12]),import.meta.url)},{path:"/nested/three-level/menu-2",name:"/nested/three-level/menu-2",meta:{title:"菜单 3-2"},component:()=>k(()=>import("./menu-2-D97_A0b0.js"),__vite__mapDeps([13,1,2,14]),import.meta.url)}]},{path:"/nested/four-level",name:"nested/four-level",meta:{title:"三级菜单-2"},redirect:"/nested/four-level/menu-1",component:()=>k(()=>import("./nested-C4Fwsx9U.js"),__vite__mapDeps([9,1,2,10]),import.meta.url),children:[{path:"/nested/four-level/menu-1",name:"/nested/four-level/menu-1",meta:{title:"菜单 3-2-1"},component:()=>k(()=>import("./menu-1-BP3eVGXx.js"),__vite__mapDeps([11,1,2,12]),import.meta.url)}]},{path:"/nested/menu-3",name:"nested/menu-3",meta:{title:"菜单 2-3"},component:()=>k(()=>import("./menu-3-ClVko1nP.js"),__vite__mapDeps([15,1,2,16]),import.meta.url)}]},{path:"/link-baidu",name:"link-baidu",component:de,meta:{title:"百度一下",icon:"baidu",link:"https://www.baidu.com"}},{path:"/menu-4",name:"menu-4",meta:{title:"换行菜单标题换行菜单标题",icon:"nested"},component:()=>k(()=>import("./menu-4-mDrxtvFg.js"),__vite__mapDeps([17,1,2,18]),import.meta.url)}]},{path:"/example",name:"example",component:re,meta:{title:"示例页栏目",icon:"menu"},redirect:"/example/request",children:[{path:"/example/request",name:"example-request",meta:{title:"http-请求示例",keepAlive:!0},component:()=>k(()=>import("./request-CYT5zAHV.js"),__vite__mapDeps([19,1,2,3,20]),import.meta.url)},{path:"/example/components",name:"example-components",meta:{title:"自定义组件"},component:()=>k(()=>import("./the-components-Dx9Cq0yT.js"),__vite__mapDeps([21,1,2,3,22]),import.meta.url)},{path:"/example/tsx",name:"example-tsx",meta:{title:"tsx-示例"},component:()=>k(()=>import("./example-B84-eOFO.js"),__vite__mapDeps([23,1,2,24]),import.meta.url)}]},{path:"/icon",name:"icon",meta:{title:"图标栏目",auth:[0]},component:re,redirect:"/icon/svg-icons",children:[{path:"/icon/svg-icons",name:"svg-icons",component:()=>k(()=>import("./index-qzcLwOZp.js"),__vite__mapDeps([25,1,2,26]),import.meta.url),meta:{title:"svg-图标",icon:"svg-icon"}}]},{path:"/"+$.projectInfo.link,name:"GitHub-Travis",component:de,meta:{title:"项目地址",icon:"github",link:$.projectInfo.link,auth:[0]}}];function Te(o){o=JSON.parse(JSON.stringify(o));const n=[];for(let e=0;e<o.length;e++){const t=o[e];(!t.meta||t.meta&&!t.meta.hidden)&&(n.push(t),t.children&&t.children.length>0&&(t.children=Te(t.children)))}return n}const Ie=ze({history:He(),routes:Oe});_t(Ie,Oe,Ut);const Gt="1.1.1",ae=[];function Kt(o,n){let e;ae.length>1?e=ae.shift():(e=document.createElement("div"),e.className="ripple");const t=n.getBoundingClientRect(),i=n.getAttribute("color");let s=Math.max(t.width,t.height);s>200&&(s=200),e.style.height=e.style.width=s+"px",e.style.backgroundColor=i||"rgba(255, 255, 255, .45)",n.appendChild(e);const u=o.touches,f=u?u[0].clientY:o.clientY,l=u?u[0].clientX:o.clientX,d=f-t.top-e.offsetHeight/2,m=l-t.left-e.offsetWidth/2;e.style.top=d+"px",e.style.left=m+"px";function c(){e.removeEventListener("animationend",c),n.removeChild(e),ae.push(e)}e.addEventListener("animationend",c)}function Zt(o={}){const n=document,e=`__${Math.random().toString(36).slice(2,7)}`,t={box:`msg-box${e}`,hide:`hide${e}`,text:`msg-text${e}`,icon:`msg-icon${e}`},i=n.createElement("style");i.textContent=`
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
  `.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),n.head.appendChild(i);const s=[];function u(d){let m=10;for(let c=0;c<s.length;c++){const a=s[c];if(d&&d===a)break;m+=a.clientHeight+20}return m}function f(d){for(let m=0;m<s.length;m++)if(s[m]===d){s.splice(m,1);break}d.classList.add(t.hide),s.forEach(function(m){m.style.top=`${u(m)}px`})}function l(d,m="info",c){const a=n.createElement("div");a.className=`${t.box} ${m}`,a.style.top=`${u()}px`,a.style.zIndex=Ce.message,a.innerHTML=`
    <span class="${t.icon}"></span>
    <span class="${t.text}">${d}</span>
    `,s.push(a),n.body.appendChild(a);function r(){a.removeEventListener("animationend",r),setTimeout(f,c||o.duration||3e3,a)}a.addEventListener("animationend",r);function h(){getComputedStyle(a).opacity==="0"&&(a.removeEventListener("transitionend",h),a.remove())}a.addEventListener("transitionend",h)}return{show:l,info(d){l(d,"info")},success(d){l(d,"success")},warning(d){l(d,"warning")},error(d){l(d,"error")}}}function Qt(){const o=document,n=`__${Math.random().toString(36).slice(2,7)}`,e={mask:`dialog-mask${n}`,popup:`dialog-popup${n}`,title:`dialog-title${n}`,content:`dialog-content${n}`,footer:`dialog-footer${n}`,confirm:`confirm${n}`,fade:`fade${n}`,show:`show${n}`,hide:`hide${n}`},t=`
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
  `,i=o.createElement("style");i.textContent=t.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),o.head.appendChild(i);const s={x:"0vw",y:"0vh"};o.addEventListener("click",function(f){const{innerWidth:l,innerHeight:d}=window,m=l/2,c=d/2,a=f.clientY-c,r=f.clientX-m;s.x=`${r/l*100}vw`,s.y=`${a/d*100}vh`},!0);function u(f){const l=o.createElement("section");l.className=e.mask,l.style.zIndex=Ce.dialog,l.style.setProperty("--x",s.x),l.style.setProperty("--y",s.y),s.x="0vw",s.y="0vh";const d=f.cancelText?`<button class="the-btn">${f.cancelText}</button>`:"";l.innerHTML=`
    <div class="${e.popup}">
      <h2 class="${e.title}">${typeof f.title=="string"?f.title:"提示"}</h2>
      <div class="${e.content}">${f.content}</div>
      <div class="${e.footer}">
        ${d}
        <button class="${e.confirm} the-btn blue">${f.confirmText||"确认"}</button>
      </div>
    </div>
    `,o.body.appendChild(l),l.addEventListener("transitionend",function(c){c.target===l&&l.classList.contains(e.hide)&&l.remove()});function m(){l.classList.add(e.hide)}f.cancelText&&(l.querySelector(`.${e.footer} button`).onclick=function(){m(),f.cancel&&f.cancel()}),l.querySelector(`.${e.confirm}`).onclick=function(){m(),f.confirm&&f.confirm()}}return{show:u}}const Ce={get message(){return(ce()+20).toString()},get dialog(){return(ce()+10).toString()}},be=Zt({duration:3600}),en=Qt(),rn=en.show;window.version=Gt;const J=qe(Je);J.directive("copy",{mounted(o,n){o.addEventListener("click",function(){at(n.value,()=>be.success("复制成功"),e=>be.success(e))})}});J.directive("ripple",{mounted(o){const n=lt()?"touchstart":"mousedown";o.setAttribute("ripple",""),o.addEventListener(n,function(e){Kt(e,o)})}});J.component("svg-icon",Fe);J.component("base-dialog",Qe);J.use(Ie);J.mount("#app");export{ke as _,M as a,rn as b,at as c,we as d,rt as e,k as f,on as i,Le as j,be as m,sn as o,$ as s};
