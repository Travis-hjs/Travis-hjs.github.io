function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./login-D5vdYa2h.js","./vendor-BsZAJIoU.js","../css/vendor-P2UEzwrS.css","./common-BgGYdCts.js","../css/login-388KFgJf.css","./page-401-m5YBKim7.js","../css/page-401-hNHv4Vr6.css","./home-BoWIpbTL.js","../css/home-BzhbKSz0.css","./nested-UMJ_UH_7.js","../css/nested-DBbt7j1J.css","./menu-1-Dtl_DU5I.js","../css/menu-1-C5rTu6B4.css","./menu-2-D069X1ck.js","../css/menu-2-DwSbhe9C.css","./menu-3-2fBO9HbT.js","../css/menu-3-C1x6D_tQ.css","./menu-4-6U85TF5N.js","../css/menu-4-B_QkhR3M.css","./request-BcOs9Pl9.js","../css/request-BjYaB_Vm.css","./the-components-CbzXwAP_.js","../css/the-components-DFTbI306.css","./example-KVppRCvy.js","../css/example-DFXcbB_t.css","./index-BdDowSP0.js","../css/index-CJ5TRbCj.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var Re=Object.defineProperty;var Ae=(o,t,e)=>t in o?Re(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var B=(o,t,e)=>(Ae(o,typeof t!="symbol"?t+"":t,e),e);import{d as L,r as I,o as m,c as w,a as W,b as v,e as _,n as A,f as R,w as K,g as Q,h as ke,i as S,j as $,T as Y,k as Ne,l as T,m as G,v as te,p as D,t as N,q as ne,u as C,s as Pe,x as Be,F as M,y as X,z as De,A as ze,B as J,E as Me,C as me,D as Ve,G as q,H as oe,N as se,I as He,J as qe,K as We,L as Xe,M as je,O as Je,P as Ye,Q as Fe,R as Ue}from"./vendor-BsZAJIoU.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();const Ge=L({name:"App"}),we=(o,t)=>{const e=o.__vccOpts||o;for(const[n,i]of t)e[n]=i;return e};function Ke(o,t,e,n,i,a){const c=I("router-view");return m(),w(c)}const Qe=we(Ge,[["render",Ke]]),Ze=["xlink:href"],et=L({name:"SvgIcon"}),tt=L({...et,props:{name:{type:String,required:!0,default:""},className:{type:String,default:""}},setup(o){const t=o,e=W(()=>`#icon-${t.name}`),n=W(function(){return t.className?"svg-icon "+t.className:"svg-icon"});return(i,a)=>(m(),v("svg",{class:A(n.value),"aria-hidden":"true"},[_("use",{"xlink:href":e.value},null,8,Ze)],2))}});let ge=1e3;function de(){const o=ge;return ge++,o}function nt(o=10){return{pageSize:o,currentPage:1,total:0}}function xn(o,t){t||setTimeout(function(){const e=document.querySelector(`${o} .is-error`);if(!e)return;e.scrollIntoView&&e.scrollIntoView({behavior:"smooth"});const n=[".el-input",".el-textarea",".el-select"];let i=null;for(let c=0;c<n.length&&(i=e.querySelector(n[c]),!i);c++);if(!i)return;i.classList.add("apply-shake");function a(){i.removeEventListener("animationend",a),i.removeEventListener("click",a),i.classList.remove("apply-shake")}i.addEventListener("animationend",a),i.addEventListener("click",a)},1e3/60)}const ot={class:"base-dialog-title fbetween fvertical"},it={class:"base-dialog-body"},at={key:0,class:"base-dialog-footer"},st=L({name:"base-dialog"}),rt=L({...st,props:{title:{type:String,default:"提示"},modelValue:{type:Boolean,default:!1},width:{type:String,default:"50%"},closeByMask:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!1}},emits:["close","update:modelValue","afterLeave","afterEnd"],setup(o,{emit:t}){const e=o,n=t,i=de(),a=R(),c=R(),h=R(),p=R(!1),d="flag-dialog-"+i;K(()=>e.modelValue,function(u){u?setTimeout(()=>{p.value=!0},0):p.value=!1});function f(u){if(e.appendToBody&&!document.getElementById(d)&&(a.value.remove(),a.value=void 0,document.removeEventListener("click",f)),!e.modelValue||p.value||a.value.contains(u.target))return;const{clientWidth:y,clientHeight:E}=a.value,Z=y/2,ee=E/2,ie=u.clientY-ee,b=`${(u.clientX-Z)/y*100}vw`,x=`${ie/E*100}vh`;r(b,x)}function r(u,y){const E=h.value;E&&(E.style.setProperty("--contentX",u),E.style.setProperty("--contentY",y))}function s(u){(u&&u.target===a.value&&e.closeByMask||u&&u.target===c.value)&&(n("update:modelValue",!1),n("close"))}function l(){p.value&&r("0","0"),n("afterLeave")}function g(){n("afterEnd")}return Q(function(){document.addEventListener("click",f)}),ke(function(){document.removeEventListener("click",f)}),(u,y)=>{const E=I("el-scrollbar");return m(),v("section",null,[(m(),w(Ne,{to:"body",disabled:!o.appendToBody},[S(Y,{name:"fade"},{default:$(()=>[G(_("div",{ref_key:"el",ref:a,class:"base-dialog fvc",style:D({zIndex:C(i)}),onClick:s},[S(Y,{name:"dialog-move",onAfterLeave:l,onAfterEnter:g},{default:$(()=>[G(_("div",{ref_key:"contentBox",ref:h,class:"base-dialog-content flex",style:D({width:o.width})},[_("div",ot,[_("h2",null,N(o.title),1),_("i",{ref_key:"closeBtn",ref:c,onClick:s},null,512)]),_("div",it,[S(E,{"max-height":"76vh"},{default:$(()=>[ne(u.$slots,"default")]),_:3})]),u.$slots.footer?(m(),v("div",at,[ne(u.$slots,"footer")])):T("",!0)],4),[[te,p.value]])]),_:3})],4),[[te,o.modelValue]])]),_:3})],8,["disabled"])),o.appendToBody?(m(),v("div",{key:0,id:d,description:"用来标记 teleport 开启之后插入的节点用"})):T("",!0)])}}}),lt={class:"base-table"},ct={name:"base-table"},ut=L({...ct,props:{data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},checkbox:{type:Boolean,default:!1},isRowClick:{type:Boolean,default:!1},actions:{type:Array,default:()=>[]},checkboxDisabled:{type:Function,default:void 0},maxHeight:{type:Number,default:500}},emits:["select","row"],setup(o,{emit:t}){const e=o,n=t,i=R();Pe(function(){var f;(f=i.value)==null||f.doLayout()});function a(f){n("select",f)}function c(f,r,s){n("row",f,r,s)}function h(f){return["",null,void 0,"null","undefined"].includes(f)}function p(f){return typeof e.checkboxDisabled=="function"?!e.checkboxDisabled(f):!0}function d(f,r,s){return typeof s.formatter=="function"?s.formatter(f,f[r],s):h(f[s.prop])?"-":f[s.prop]}return(f,r)=>{const s=I("el-table-column"),l=I("base-table-option"),g=Be("loading");return G((m(),v("div",lt,[S(C(Me),{ref:"the-table",stripe:"",border:"","max-height":e.maxHeight,data:e.data,onRowClick:c,onSelectionChange:a},{default:$(()=>[e.checkbox?(m(),w(s,{key:0,type:"selection",width:"55",align:"center",fixed:"left",selectable:p})):T("",!0),(m(!0),v(M,null,X(e.columns,u=>(m(),w(s,{key:u.key||u.prop,prop:u.prop,label:u.label,"min-width":u.minWidth,width:u.width,"show-overflow-tooltip":u.tooltip===void 0?!0:u.tooltip,fixed:u.prop==="action-right"?"right":u.fixed,align:u.prop==="action-right"?"center":u.align,"class-name":o.isRowClick&&u.prop!=="action-right"?"base-column-click":"","label-class-name":"base-table-label"},{default:$(({row:y,$index:E})=>[u.slotName?ne(f.$slots,u.slotName,De(ze({key:0},{row:y,$index:E}))):u.prop==="action-right"?(m(),w(l,{key:1,row:y,index:E,list:e.actions,clickStop:e.isRowClick},null,8,["row","index","list","clickStop"])):(m(),v(M,{key:2},[J(N(d(y,u.prop,u)),1)],64))]),_:2},1032,["prop","label","min-width","width","show-overflow-tooltip","fixed","align","class-name"]))),128))]),_:3},8,["max-height","data"])])),[[g,o.loading]])}}});function dt(o){return Object.prototype.toString.call(o).match(/\[object (\S*)\]/)[1].toLocaleLowerCase()}function U(o,t){return dt(o)===t}function H(o,t){for(const e in t)if(Object.prototype.hasOwnProperty.call(o,e)){const n=t[e],i=o[e];U(i,"object")?H(i,n):o[e]=n}}function ft(o,t,e){if(o=o.replace(/(^\s*)|(\s*$)/g,""),!o){e&&e("复制的内容不能为空！");return}const n="the-clipboard";let i=document.getElementById(n);i||(i=document.createElement("textarea"),i.id=n,i.readOnly=!0,i.style.cssText="font-size: 15px; position: fixed; top: -1000%; left: -1000%;",document.body.appendChild(i)),i.value=o,i.select(),i.setSelectionRange(0,i.value.length),document.execCommand("copy")?t&&t():e&&e("复制失败")}function $n(o,t,e){let n=o.toString().trim();if(n.length===0)return"";const i="";return n=n.replace(/[^0-9]+/ig,""),i+n}function Se(o,t={}){let e=t;if(U(o,"string"))try{e=JSON.parse(o)}catch(n){console.warn("JSON格式化对象错误 >>",n)}return e}function pt(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)}function kn(o,t){return Math.round(Math.random()*(t-o)+o)}function wn(o,t){const e=parseInt((Math.random()*t).toString())+o,n=2e4,i=1e3;let a="",c=0;for(;c<e;){c++;const h=parseInt((Math.random()*i).toString());a+=String.fromCharCode(n+h)}return a}const mt=_("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),ht={key:0,class:"el-icon-loading"},gt={name:"base-table-option"},yt=L({...gt,props:{max:{type:[Number,String],default:3},row:{type:Object,default:()=>({})},index:{type:Number,default:-1},list:{type:Array,default:[]},clickStop:{type:Boolean,default:!1}},setup(o){const t=o,e=W(()=>t.list.filter(d=>U(d.hide,"function")?!d.hide(t.row):!d.hide)),n=W(()=>{var r,s;const d=Number(t.max),f=e;return((r=f.value)==null?void 0:r.length)>d?(s=f.value)==null?void 0:s.filter((l,g)=>g<d-1):f.value}),i=W(()=>{var r,s;const d=Number(t.max),f=e;return((r=f.value)==null?void 0:r.length)>d?(s=f.value)==null?void 0:s.filter((l,g)=>g>=d-1):[]}),a=(d,f)=>{const r=d[f];return r?U(r,"function")?r(t.row):r:"-"},c=(d,f)=>{const r=d[f];return r?U(r,"function")?r(t.row):r:!1},h=d=>{d.click&&d.click(t.row,t.index)},p=d=>{t.clickStop&&(d.stopPropagation(),d.preventDefault())};return(d,f)=>{const r=I("el-button"),s=I("el-dropdown-item"),l=I("el-dropdown-menu"),g=I("el-dropdown");return m(),v("div",{class:"base-table-option fvc",onClick:p},[(m(!0),v(M,null,X(n.value,(u,y)=>(m(),w(r,{text:"",type:u.type||"primary",key:"btn-"+y,loading:c(u,"loading"),disabled:c(u,"disabled"),onClick:E=>h(u)},{default:$(()=>[u.icon&&!c(u,"loading")?(m(),v("i",{key:0,class:A(["base-table-option-icon",a(u,"icon")])},null,2)):T("",!0),J(" "+N(a(u,"text")),1)]),_:2},1032,["type","loading","disabled","onClick"]))),128)),i.value.length?(m(),w(g,{key:0},{dropdown:$(()=>[S(l,null,{default:$(()=>[(m(!0),v(M,null,X(i.value,(u,y)=>(m(),w(s,{key:"drop-"+y,disabled:c(u,"disabled")||c(u,"loading"),onClick:E=>h(u)},{default:$(()=>[c(u,"loading")?(m(),v("i",ht)):u.icon&&!c(u,"loading")?(m(),v("i",{key:1,class:A(["base-table-option-icon",a(u,"icon")])},null,2)):T("",!0),J(" "+N(a(u,"text")),1)]),_:2},1032,["disabled","onClick"]))),128))]),_:1})]),default:$(()=>[S(r,{text:"",type:"primary"},{default:$(()=>[J("更多"),mt]),_:1})]),_:1})):T("",!0)])}}}),vt=L({name:"base-pagination"}),_t=L({...vt,props:{pageInfo:{type:Object,default:()=>nt()},pageSizes:{type:Array,default:()=>[10,30,100,200,300]},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},position:{type:String,default:"right"},disabled:{type:Boolean,default:!1}},emits:["change"],setup(o,{emit:t}){const e=o,n=t;function i(c){e.pageInfo.currentPage=1,e.pageInfo.pageSize=c,n("change",{type:"pageSize",value:c})}function a(c){e.pageInfo.currentPage=c,n("change",{type:"currentPage",value:c})}return(c,h)=>{const p=I("el-pagination");return m(),v("div",{class:A(["base-pagination",o.position])},[e.pageInfo.total?(m(),w(p,{key:0,background:"",disabled:e.disabled,layout:e.layout,total:e.pageInfo.total,"current-page":e.pageInfo.currentPage,"page-sizes":e.pageSizes,onSizeChange:i,onCurrentChange:a},null,8,["disabled","layout","total","current-page","page-sizes"])):T("",!0)],2)}}}),bt="modulepreload",xt=function(o,t){return new URL(o,t).href},ye={},O=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),h=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=Promise.all(e.map(p=>{if(p=xt(p,n),p in ye)return;ye[p]=!0;const d=p.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!n)for(let l=a.length-1;l>=0;l--){const g=a[l];if(g.href===p&&(!d||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${f}`))return;const s=document.createElement("link");if(s.rel=d?"stylesheet":bt,d||(s.as="script",s.crossOrigin=""),s.href=p,h&&s.setAttribute("nonce",h),document.head.appendChild(s),d)return new Promise((l,g)=>{s.addEventListener("load",l),s.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${p}`)))})}))}return i.then(()=>t()).catch(a=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a})},$t={key:0,class:"separator"},kt={key:1,href:"javascript:void(0)"},wt=L({__name:"Breadcrumb",setup(o){const t=me(),e=R([]);function n(){const i=t.matched.filter(a=>a.meta&&a.meta.title).map(a=>({path:a.path,meta:{...a.meta}}));e.value=i}return K(()=>t.path,function(){t.path.startsWith("/redirect/")||n()}),n(),(i,a)=>{const c=I("router-link");return m(),w(Ve,{name:"breadcrumb",tag:"div",class:"layout-breadcrumb fvertical"},{default:$(()=>[(m(!0),v(M,null,X(e.value,(h,p)=>(m(),v("span",{class:A(["layout-breadcrumb-item",{last:p===e.value.length-1}]),key:h.path},[p>0?(m(),v("i",$t,"/")):T("",!0),p===e.value.length-1?(m(),v("a",kt,N(h.meta.title),1)):(m(),w(c,{key:2,to:h.path},{default:$(()=>[J(N(h.meta.title),1)]),_:2},1032,["to"]))],2))),128))]),_:1})}}}),ve=function(){const o=document.createElement("div");o.style.width="100px",o.style.height="100px",o.style.overflow="scroll",document.body.appendChild(o);const t=o.offsetWidth-o.clientWidth;return o.remove(),t}(),St=L({name:"Scrollbar"}),Ee=L({...St,props:{thumbColor:{type:String,default:"rgba(147, 147, 153, 0.45)"},thumbSize:{type:Number,default:8},clickUpdateDelay:{type:Number,default:0}},setup(o,{expose:t}){const e=o,n=R(),i=R(),a=R(),c=R(),h=q({height:"",width:""}),p=q({x:{width:"",height:"",left:"",bottom:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor},y:{width:"",height:"",top:"",right:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor}}),d=R(!1);function f(){const b=n.value.parentElement;b.style.overflow="hidden";const x=getComputedStyle(b);h.width=`calc(100% + ${ve}px + ${x.borderLeftWidth} + ${x.borderRightWidth})`,h.height=`calc(100% + ${ve}px + ${x.borderTopWidth} + ${x.borderBottomWidth})`}function r(){p.y.right=p.y.top="0px",p.y.width=e.thumbSize+"px",p.x.bottom=p.x.left="0px",p.x.height=e.thumbSize+"px",p.x.borderRadius=p.y.borderRadius=`${e.thumbSize/2}px`}function s(){const b=i.value;if(b){let x=b.clientHeight/b.scrollHeight*100;x>=100&&(x=0),p.y.height=x+"%",p.y.transform=`translate3d(0, ${b.scrollTop/b.scrollHeight*b.clientHeight}px, 0)`;let P=b.clientWidth/b.scrollWidth*100;P>=100&&(P=0),p.x.width=P+"%",p.x.transform=`translate3d(${b.scrollLeft/b.scrollWidth*b.clientWidth}px, 0, 0)`}}let l=!1,g=!1,u=0,y;function E(b){const x=a.value,P=c.value,j=b.target;x.contains(j)&&(l=!0,g=!1,u=b.clientX-x.getBoundingClientRect().left),P.contains(j)&&(l=!0,g=!0,u=b.clientY-P.getBoundingClientRect().top)}function Z(b){if(!l)return;const x=i.value;if(g){const P=x.getBoundingClientRect().top,j=x.clientHeight;let ae=b.clientY-P;x.scrollTop=(ae-u)/j*x.scrollHeight}else{const P=x.getBoundingClientRect().left,j=x.clientWidth;let ae=b.clientX-P;x.scrollLeft=(ae-u)/j*x.scrollWidth}}function ee(b){l=!1,n.value.contains(b.target)?e.clickUpdateDelay>0&&(y&&clearTimeout(y),y=setTimeout(s,e.clickUpdateDelay)):d.value=!1}function ie(){d.value=!0,s()}function he(){l||(d.value=!1)}return Q(function(){f(),r(),i.value&&i.value.addEventListener("scroll",s),document.addEventListener("mousedown",E),document.addEventListener("mousemove",Z),document.addEventListener("mouseup",ee)}),ke(function(){i.value&&i.value.removeEventListener("scroll",s),document.removeEventListener("mousedown",E),document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",ee),y&&clearTimeout(y)}),t({updateWrapStyle:f,updateThumbStyle:s}),(b,x)=>(m(),v("div",{class:"the-scrollbar",ref_key:"el",ref:n,onMouseenter:x[0]||(x[0]=P=>ie()),onMouseleave:x[1]||(x[1]=P=>he())},[_("div",{ref_key:"wrap",ref:i,class:"the-scrollbar-wrap",style:D(h)},[ne(b.$slots,"default")],4),S(Y,{name:"fade"},{default:$(()=>[G(_("button",{class:"the-scrollbar-thumb",ref_key:"thumbY",ref:c,title:"滚动条-摁住拖拽Y轴",style:D(p.y)},null,4),[[te,d.value]])]),_:1}),S(Y,{name:"fade"},{default:$(()=>[G(_("button",{class:"the-scrollbar-thumb",ref_key:"thumbX",ref:a,title:"滚动条-摁住拖拽X轴",style:D(p.x)},null,4),[[te,d.value]])]),_:1})],544))}});function Et(o){return oe.get(o)||""}function Lt(o,t,e){e?oe.set(o,t,e):oe.set(o,t)}function Ct(o,t){oe.remove(o)}const re="ModuleUser";function _e(){return{id:"",name:"",type:"",token:"",avatar:"",account:"",password:""}}const It=3,Ot=24*60*60*1e3;class Tt{constructor(){B(this,"info",q(_e()));this.init()}init(){const t=Et(re);if(t){const e=Se(t);H(this.info,e)}}update(t){H(this.info,t),Lt(re,JSON.stringify(this.info),{expires:new Date(Date.now()+It*Ot)})}reset(){H(this.info,_e()),Ct(re)}}const Rt=""+new URL("../image/logo-CPmPqqKk.png",import.meta.url).href,be="ModuleLayout";class At{constructor(){B(this,"addRouters",[]);B(this,"completeRouters",[]);B(this,"info",q({showTagsView:!0,sidebarOpen:!0,showSidebarLogo:!0,historyViews:[],layoutMode:""}));B(this,"menuSizeInfo",q({titleHeight:0,itemHeight:0}));this.init(),K(this.info,this.saveInfo.bind(this))}init(){const t=sessionStorage.getItem(be);try{t&&H(this.info,JSON.parse(t))}catch(e){console.log("ModuleLayout init fail >>",e)}}saveInfo(){sessionStorage.setItem(be,JSON.stringify(this.info))}}const le="ModuleGoods";function xe(){return{id:0,name:"",price:0,specs:{size:"xs",width:"",height:""}}}class Nt{constructor(){B(this,"info",q(xe()));const t=sessionStorage.getItem(le);if(t){const e=Se(t);H(this.info,e)}}update(t){H(this.info,t),sessionStorage.setItem(le,JSON.stringify(this.info))}reset(){H(this.info,xe()),sessionStorage.removeItem(le)}}class Pt{constructor(){B(this,"projectInfo",{title:"Vue Typescript Admin",name:"XXX后台管理平台",logo:Rt,link:"https://github.com/Travis-hjs/vue-admin"});B(this,"layout",new At);B(this,"user",new Tt);B(this,"_goods");console.log("%c ModuleStore init","color: #409EFF")}get goods(){return this._goods||(this._goods=new Nt),this._goods}}const k=new Pt,F={path:"/",query:{}},fe="redirect404";let z;function Le(o){const t=[],e=k.user.info.type;for(let n=0;n<o.length;n++){const i=o[n],a=i.meta?i.meta.auth:void 0;(!a||a&&a.includes(e))&&(i.children&&i.children.length>0&&(i.children=Le(i.children)),t.push(i))}return t}function Bt(o,t,e){z=o,z.beforeEach(function(n,i,a){if(se.start(),k.user.info.token)if(k.layout.addRouters.length>0)a();else{k.layout.addRouters=Le(e);for(let c=0;c<k.layout.addRouters.length;c++){const h=k.layout.addRouters[c];z.addRoute(h)}z.hasRoute(fe)||z.addRoute({...t[1],path:"/:catchAll(.*)",name:fe}),k.layout.completeRouters=t.concat(k.layout.addRouters),a({...n,replace:!0})}else n.path==="/login"?a():(F.path=n.path,F.query=n.query,a({path:"/login"}),se.done())}),z.afterEach(n=>{se.done(),n.meta&&n.meta.title&&(document.title=n.meta.title)})}function Sn(){z.replace({path:F.path,query:F.query})}function Dt(){const o=k.layout.addRouters;for(let t=o.length-1;t>-1;t--){const e=o[t];e.name&&z.hasRoute(e.name)&&z.removeRoute(e.name)}F.path="/",F.query={},z.removeRoute(fe),k.layout.addRouters=k.layout.completeRouters=[]}const zt={class:"the-layout-header"},Mt={class:"the-layout-navbar flex"},Vt={class:"user-info-box fvertical"},Ht=["src"],qt={class:"the-tag green mgr_10"},Wt=_("span",null,"退出登录",-1),Xt={key:0,class:"the-layout-tags"},jt=["onClick"],Jt="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",Yt=L({__name:"HeaderBar",setup(o){const t=me(),e=He(),n=k.layout.info,i=k.user.info;function a(){n.sidebarOpen=!n.sidebarOpen}function c(){k.user.reset(),e.push("/login").then(()=>{n.historyViews=[],Dt()})}function h(d){return d.path===t.path&&JSON.stringify(d.query)===JSON.stringify(t.query)&&JSON.stringify(d.params)===JSON.stringify(t.params)}function p(d){n.historyViews.splice(d,1)}return K(()=>t.path,function(){n.historyViews.some(f=>h(f))||n.historyViews.push({name:t.name,path:t.path,query:t.query,params:t.params,meta:t.meta})},{immediate:!0}),(d,f)=>{const r=I("svg-icon"),s=I("router-link");return m(),v("div",zt,[_("div",Mt,[_("div",{class:A(["fvc hamburger",{"hamburger-active":C(n).sidebarOpen}]),onClick:f[0]||(f[0]=l=>a())},[S(r,{name:"hamburger"})],2),S(wt,{class:"f1"}),_("div",Vt,[_("img",{class:"avatar",src:C(i).avatar||Jt},null,8,Ht),_("span",qt,N(C(i).name||C(i).account||"用户未设置昵称"),1),_("button",{class:"logout fvertical",onClick:f[1]||(f[1]=l=>c())},[S(r,{name:"exit"}),Wt])])]),C(n).showTagsView?(m(),v("div",Xt,[S(C(Ee),null,{default:$(()=>[(m(!0),v(M,null,X(C(n).historyViews,(l,g)=>(m(),w(s,{class:A(["the-layout-tag",{"the-layout-tag-on":h(l)}]),key:g+l.path,to:{path:l.path,query:l.query,params:l.params}},{default:$(()=>[_("span",null,N(l.meta.title),1),_("i",{class:"close",onClick:qe(u=>p(g),["prevent","stop"])},"-",8,jt)]),_:2},1032,["class","to"]))),128))]),_:1})])):T("",!0)])}}}),Ft={class:"f1"},Ut=_("i",{class:"the-layout-menu-arrow"},null,-1),Gt=["href"],Kt={class:"f1"},Qt={class:"f1"},Zt=["href"],en=L({__name:"MenuItem",props:{level:{type:Number,default:1},info:{type:Object,default:()=>({title:"-"})}},setup(o){const t=o;function e(r){return!!(r.children&&r.children.length>0)}function n(r){let s=0;const l=r.children,g=k.layout.menuSizeInfo;return r.isOpen&&l&&l.length>0&&l.forEach(u=>{const y=e(u)?g.titleHeight:g.itemHeight;s+=y,s+=n(u)}),s}const i=W(function(){const r=t.info;return{"the-layout-menu-title fvertical":!0,"the-layout-menu-selected":r.isActive,"the-layout-menu-open":r.isOpen,"the-layout-menu-actived":r.hasActive,"the-layout-menu-active-title":r.hasActive&&t.level===1}});function a(r){return{"the-layout-menu-item fvertical":!0,"the-layout-menu-selected":r.isActive}}const c=q({paddingLeft:""}),h=q({paddingLeft:""}),p=W(function(){return{height:n(t.info)+"px"}}),d=R();function f(){t.info.isOpen=!t.info.isOpen}return Q(function(){const r=d.value;if(t.level>=1){const s=getComputedStyle(r.children[0]),l=parseFloat(s.paddingLeft);if(isNaN(l))return;c.paddingLeft=l*t.level+"px",h.paddingLeft=l*(t.level+1)+"px"}}),(r,s)=>{const l=I("svg-icon"),g=I("router-link"),u=I("MenuItem",!0);return m(),v("div",{class:"the-layout-menu",ref_key:"menuBox",ref:d},[e(o.info)?(m(),v("button",{key:0,class:A(i.value),style:D(c),onClick:s[0]||(s[0]=y=>f())},[o.info.icon?(m(),w(l,{key:0,name:o.info.icon},null,8,["name"])):T("",!0),_("span",Ft,N(o.info.title),1),Ut],6)):(m(),v(M,{key:1},[o.info.link?(m(),v("a",{key:0,class:A(i.value),style:D(c),href:o.info.link,target:"_blank"},[o.info.icon?(m(),w(l,{key:0,name:o.info.icon},null,8,["name"])):T("",!0),_("span",Kt,N(o.info.title),1)],14,Gt)):(m(),w(g,{key:1,class:A(i.value),style:D(c),to:o.info.path},{default:$(()=>[o.info.icon?(m(),w(l,{key:0,name:o.info.icon},null,8,["name"])):T("",!0),_("span",Qt,N(o.info.title),1)]),_:1},8,["class","style","to"]))],64)),o.info.children&&o.info.children.length>0?(m(),v("div",{key:2,class:"the-layout-menu-list",style:D(p.value)},[(m(!0),v(M,null,X(o.info.children,y=>(m(),v("div",{key:y.key},[e(y)?(m(),w(u,{key:0,info:y,level:o.level+1},null,8,["info","level"])):(m(),v(M,{key:1},[y.link?(m(),v("a",{key:0,class:A(a(y)),style:D(h),href:y.link,target:"_blank"},[y.icon?(m(),w(l,{key:0,name:y.icon},null,8,["name"])):T("",!0),_("span",null,N(y.title),1)],14,Zt)):(m(),w(g,{key:1,class:A(a(y)),style:D(h),to:y.path},{default:$(()=>[y.icon?(m(),w(l,{key:0,name:y.icon},null,8,["name"])):T("",!0),_("span",null,N(y.title),1)]),_:2},1032,["class","style","to"]))],64))]))),128))],4)):T("",!0)],512)}}}),tn=L({__name:"Menu",props:{mergeOnlyOneChild:{type:Boolean,default:!1},onlyMergeFirst:{type:Boolean,default:!1}},setup(o){const t=o,e=me();function n(r,s){r=JSON.parse(JSON.stringify(r));const l=[];for(let g=0;g<r.length;g++){const u=r[g],y={key:s?`${s}-${g}`:g.toString(),isOpen:!1,isActive:!1,hasActive:!1,children:[],path:u.path,...u.meta};if(!y.hidden){l.push(y);const E=u.children;E&&E.length>0&&(y.children=n(E,y.key))}}return l}function i(r){r=JSON.parse(JSON.stringify(r));const s=[];for(let l=0;l<r.length;l++){const g=r[l],u=g.children;u&&u.length>0?u.length===1?(u[0].key=g.key,s.push(u[0]),u[0].children&&u[0].children.length>0&&!t.onlyMergeFirst&&(u[0].children=i(u[0].children))):(s.push(g),t.onlyMergeFirst||(g.children=i(u))):s.push(g)}return s}let a=n(Ie(k.layout.completeRouters));t.mergeOnlyOneChild&&(a=i(a));const c=R(a);let h=[];function p(r){for(let s=0;s<r.length;s++){const l=r[s];l.hasActive=!1,l.isOpen&&(!l.children||l.children&&l.children.length===0)&&(l.isOpen=!1),l.isActive=l.path===e.path,l.isActive&&(h=l.key.split("-").map(g=>Number(g))),l.children&&l.children.length>0&&p(l.children)}}function d(r,s=0){const l=h[s],g=r[l];g.hasActive=g.isOpen=!0,s<h.length-1&&d(g.children,s+1)}function f(){h=[],p(c.value),h.length>0&&d(c.value)}return K(()=>e.path,function(){f()}),Q(function(){f();function r(s,l=0){const g=document.querySelector(s);return g?g.clientHeight:(console.log("%c 找不到节点 >>","color: #ff4949",s,"已使用默认值 >>",l),l)}k.layout.menuSizeInfo.titleHeight=r(".the-layout-menu .the-layout-menu-title",50),k.layout.menuSizeInfo.itemHeight=r(".the-layout-menu .the-layout-menu-item",44)}),(r,s)=>(m(!0),v(M,null,X(c.value,l=>(m(),w(en,{key:l.key,info:l},null,8,["info"]))),128))}}),nn={class:"the-layout-sidebar"},on={key:0,class:"the-logo-box"},an=["src"],sn=["title"],rn=L({__name:"Sidebar",setup(o){const t=k.layout.info,e=k.projectInfo;return(n,i)=>{const a=I("router-link");return m(),v("div",nn,[S(C(Ee),{clickUpdateDelay:300,thumbSize:10},{default:$(()=>[S(Y,{name:"fade"},{default:$(()=>[C(t).showSidebarLogo?(m(),v("div",on,[S(a,{class:"the-logo-link fvertical",to:"/"},{default:$(()=>[_("img",{class:"the-logo",src:C(e).logo},null,8,an),_("h1",{class:"the-logo-title ellipsis",title:C(e).title},N(C(e).title),9,sn)]),_:1})])):T("",!0)]),_:1}),S(tn,{mergeOnlyOneChild:!0,onlyMergeFirst:!0})]),_:1})])}}}),ln=L({name:"Layout"}),ce=L({...ln,setup(o){const t=k.layout.info;function e(d){let f=[];for(let r=0;r<d.length;r++){const s=d[r],l=s.children;l&&l.length>0&&(f=f.concat(e(l))),s.meta.keepAlive&&s.name&&f.push(s.name)}return f.filter(r=>r)}const n=e(k.layout.completeRouters),i=R(),a=R(!1);let c;function h(){c.scrollTo({top:0,left:0,behavior:"smooth"})}function p(){a.value=c.scrollTop>document.documentElement.clientHeight}return Q(function(){c=i.value,c.addEventListener("scroll",p),p()}),(d,f)=>{const r=I("router-view");return m(),v("div",{class:A(["the-layout",C(t).layoutMode,{"has-tags-view":C(t).showTagsView},{"collapsed-sidebar":!C(t).sidebarOpen}])},[S(Yt),S(rn),_("div",{class:"the-layout-content",ref_key:"contentBox",ref:i},[S(r,{class:"the-layout-page"},{default:$(({Component:s,route:l})=>[S(Y,{name:"fadeSlideX",mode:"out-in"},{default:$(()=>[(m(),w(Xe,{include:C(n)},[(m(),w(We(s),{key:l.path}))],1032,["include"]))]),_:2},1024)]),_:1})],512),_("button",{class:A(["the-layout-totop",{"the-layout-totop-hide":!a.value}]),title:"返回顶部",onClick:f[0]||(f[0]=s=>h())},null,2)],2)}}}),cn=L({name:"page-404"}),un={class:"page-404 fvc"},dn=_("h4",{class:"title"},"当前页面不存在",-1);function fn(o,t,e,n,i,a){const c=I("router-link");return m(),v("div",un,[_("div",null,[dn,S(c,{class:"goback",to:"/"},{default:$(()=>[J("返回首页")]),_:1})])])}const pe=we(cn,[["render",fn]]),Ce=[{path:"/login",name:"login",component:()=>O(()=>import("./login-D5vdYa2h.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),meta:{hidden:!0,title:"请登录"}},{path:"/404",name:"page-404",component:pe,meta:{hidden:!0,title:"不存在该页面"}},{path:"/401",name:"page-401",component:()=>O(()=>import("./page-401-m5YBKim7.js"),__vite__mapDeps([5,1,2,6]),import.meta.url),meta:{hidden:!0,title:"暂无权限访问"}}],pn=[{path:"/",name:"index",redirect:"/home",component:ce,meta:{title:"首页",icon:"home"},children:[{path:"/home",meta:{title:"首页展示",icon:"guide"},component:()=>O(()=>import("./home-BoWIpbTL.js"),__vite__mapDeps([7,1,2,8]),import.meta.url)},{path:"/nested",name:"nested",redirect:"/nested/menu-1",meta:{title:"多级菜单嵌套",icon:"tree"},component:()=>O(()=>import("./nested-UMJ_UH_7.js"),__vite__mapDeps([9,1,2,10]),import.meta.url),children:[{path:"/nested/menu-1",name:"nested/menu-1",meta:{title:"el-plus 表格"},component:()=>O(()=>import("./menu-1-Dtl_DU5I.js"),__vite__mapDeps([11,1,2,12]),import.meta.url)},{path:"/nested/menu-2",name:"nested/menu-2",meta:{title:"el-plus 表单验证"},component:()=>O(()=>import("./menu-2-D069X1ck.js"),__vite__mapDeps([13,1,2,14]),import.meta.url)},{path:"/nested/three-level",name:"nested/three-level",meta:{title:"三级菜单"},redirect:"/nested/three-level/menu-1",component:()=>O(()=>import("./nested-UMJ_UH_7.js"),__vite__mapDeps([9,1,2,10]),import.meta.url),children:[{path:"/nested/three-level/menu-1",name:"/nested/three-level/menu-1",meta:{title:"菜单 3-1"},component:()=>O(()=>import("./menu-1-Dtl_DU5I.js"),__vite__mapDeps([11,1,2,12]),import.meta.url)},{path:"/nested/three-level/menu-2",name:"/nested/three-level/menu-2",meta:{title:"菜单 3-2"},component:()=>O(()=>import("./menu-2-D069X1ck.js"),__vite__mapDeps([13,1,2,14]),import.meta.url)}]},{path:"/nested/four-level",name:"nested/four-level",meta:{title:"三级菜单-2"},redirect:"/nested/four-level/menu-1",component:()=>O(()=>import("./nested-UMJ_UH_7.js"),__vite__mapDeps([9,1,2,10]),import.meta.url),children:[{path:"/nested/four-level/menu-1",name:"/nested/four-level/menu-1",meta:{title:"菜单 3-2-1"},component:()=>O(()=>import("./menu-1-Dtl_DU5I.js"),__vite__mapDeps([11,1,2,12]),import.meta.url)}]},{path:"/nested/menu-3",name:"nested/menu-3",meta:{title:"菜单 2-3"},component:()=>O(()=>import("./menu-3-2fBO9HbT.js"),__vite__mapDeps([15,1,2,16]),import.meta.url)}]},{path:"/link-baidu",name:"link-baidu",component:pe,meta:{title:"百度一下",icon:"baidu",link:"https://www.baidu.com"}},{path:"/menu-4",name:"menu-4",meta:{title:"换行菜单标题换行菜单标题",icon:"nested"},component:()=>O(()=>import("./menu-4-6U85TF5N.js"),__vite__mapDeps([17,1,2,18]),import.meta.url)}]},{path:"/example",name:"example",component:ce,meta:{title:"示例页栏目",icon:"menu"},redirect:"/example/request",children:[{path:"/example/request",name:"example-request",meta:{title:"http-请求示例",keepAlive:!0},component:()=>O(()=>import("./request-BcOs9Pl9.js"),__vite__mapDeps([19,3,1,2,20]),import.meta.url)},{path:"/example/components",name:"example-components",meta:{title:"自定义组件"},component:()=>O(()=>import("./the-components-CbzXwAP_.js"),__vite__mapDeps([21,3,1,2,22]),import.meta.url)},{path:"/example/tsx",name:"example-tsx",meta:{title:"tsx-示例"},component:()=>O(()=>import("./example-KVppRCvy.js"),__vite__mapDeps([23,1,2,24]),import.meta.url)}]},{path:"/icon",name:"icon",meta:{title:"图标栏目",auth:[0]},component:ce,redirect:"/icon/svg-icons",children:[{path:"/icon/svg-icons",name:"svg-icons",component:()=>O(()=>import("./index-BdDowSP0.js"),__vite__mapDeps([25,1,2,26]),import.meta.url),meta:{title:"svg-图标",icon:"svg-icon"}}]},{path:"/"+k.projectInfo.link,name:"GitHub-Travis",component:pe,meta:{title:"项目地址",icon:"github",link:k.projectInfo.link,auth:[0]}}];function Ie(o){o=JSON.parse(JSON.stringify(o));const t=[];for(let e=0;e<o.length;e++){const n=o[e];(!n.meta||n.meta&&!n.meta.hidden)&&(t.push(n),n.children&&n.children.length>0&&(n.children=Ie(n.children)))}return t}const Oe=je({history:Je(),routes:Ce});Bt(Oe,Ce,pn);const mn="1.1.1",ue=[];function hn(o,t){let e;ue.length>1?e=ue.shift():(e=document.createElement("div"),e.className="ripple");const n=t.getBoundingClientRect(),i=t.getAttribute("color");let a=Math.max(n.width,n.height);a>200&&(a=200),e.style.height=e.style.width=a+"px",e.style.backgroundColor=i||"rgba(255, 255, 255, .45)",t.appendChild(e);const c=o.touches,h=c?c[0].clientY:o.clientY,p=c?c[0].clientX:o.clientX,d=h-n.top-e.offsetHeight/2,f=p-n.left-e.offsetWidth/2;e.style.top=d+"px",e.style.left=f+"px";function r(){e.removeEventListener("animationend",r),t.removeChild(e),ue.push(e)}e.addEventListener("animationend",r)}function gn(o={}){const t=document,e=`__${Math.random().toString(36).slice(2,7)}`,n={box:`msg-box${e}`,hide:`hide${e}`,text:`msg-text${e}`,icon:`msg-icon${e}`},i=t.createElement("style");i.textContent=`
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
  `.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),t.head.appendChild(i);const a=[];function c(d){let f=10;for(let r=0;r<a.length;r++){const s=a[r];if(d&&d===s)break;f+=s.clientHeight+20}return f}function h(d){for(let f=0;f<a.length;f++)if(a[f]===d){a.splice(f,1);break}d.classList.add(n.hide),a.forEach(function(f){f.style.top=`${c(f)}px`})}function p(d,f="info",r){const s=t.createElement("div");s.className=`${n.box} ${f}`,s.style.top=`${c()}px`,s.style.zIndex=Te.message,s.innerHTML=`
    <span class="${n.icon}"></span>
    <span class="${n.text}">${d}</span>
    `,a.push(s),t.body.appendChild(s);function l(){s.removeEventListener("animationend",l),setTimeout(h,r||o.duration||3e3,s)}s.addEventListener("animationend",l);function g(){getComputedStyle(s).opacity==="0"&&(s.removeEventListener("transitionend",g),s.remove())}s.addEventListener("transitionend",g)}return{show:p,info(d){p(d,"info")},success(d){p(d,"success")},warning(d){p(d,"warning")},error(d){p(d,"error")}}}function yn(){const o=document,t=`__${Math.random().toString(36).slice(2,7)}`,e={mask:`dialog-mask${t}`,popup:`dialog-popup${t}`,title:`dialog-title${t}`,content:`dialog-content${t}`,footer:`dialog-footer${t}`,confirm:`confirm${t}`,fade:`fade${t}`,show:`show${t}`,hide:`hide${t}`},n=`
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
    font-size: 0;
  }
  .${e.footer} button {
    padding: 8px 15px;
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
  `,i=o.createElement("style");i.textContent=n.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),o.head.appendChild(i);const a={x:"0vw",y:"0vh"};o.addEventListener("click",function(h){const{innerWidth:p,innerHeight:d}=window,f=p/2,r=d/2,s=h.clientY-r,l=h.clientX-f;a.x=`${l/p*100}vw`,a.y=`${s/d*100}vh`},!0);function c(h){const p=o.createElement("section");p.className=e.mask,p.style.zIndex=Te.dialog,p.style.setProperty("--x",a.x),p.style.setProperty("--y",a.y),a.x="0vw",a.y="0vh";const d=h.cancelText?`<button class="el-button">${h.cancelText}</button>`:"";p.innerHTML=`
    <div class="${e.popup}">
      <h2 class="${e.title}">${typeof h.title=="string"?h.title:"提示"}</h2>
      <div class="${e.content}">${h.content}</div>
      <div class="${e.footer}">
        ${d}
        <button class="el-button el-button--primary ${e.confirm}">${h.confirmText||"确认"}</button>
      </div>
    </div>
    `,o.body.appendChild(p),p.addEventListener("transitionend",function(r){r.target===p&&p.classList.contains(e.hide)&&p.remove()});function f(){p.classList.add(e.hide)}h.cancelText&&(p.querySelector(`.${e.footer} button`).onclick=function(){f(),h.cancel&&h.cancel()}),p.querySelector(`.${e.confirm}`).onclick=function(){f(),h.confirm&&h.confirm()}}return{show:c}}const Te={get message(){return(de()+20).toString()},get dialog(){return(de()+10).toString()}},$e=gn({duration:3600}),vn=yn(),En=vn.show;window.version=mn;const V=Ye(Qe);V.use(Fe,{locale:Ue});V.directive("copy",{mounted(o,t){o.addEventListener("click",function(){const e=o.getAttribute("copy-data")||t.value||"";ft(e,()=>$e.success("复制成功"),n=>$e.success(n))})}});V.directive("ripple",{mounted(o){const t=pt()?"touchstart":"mousedown";o.setAttribute("ripple",""),o.addEventListener(t,function(e){hn(e,o)})}});V.component("svg-icon",tt);V.component("base-dialog",rt);V.component("base-table",ut);V.component("base-table-option",yt);V.component("base-pagination",_t);V.use(Oe);V.mount("#app");export{we as _,$e as a,En as b,ft as c,wn as d,Ee as e,dt as f,O as g,$n as i,Se as j,H as m,Sn as o,kn as r,k as s,nt as u,xn as v};
