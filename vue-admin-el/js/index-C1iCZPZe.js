function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./home-DgsZ8rvH.js","./vendor-DLKUgWGa.js","../css/vendor-P2UEzwrS.css","../css/home-BzhbKSz0.css","./nested-Doi_C3mq.js","../css/nested-DBbt7j1J.css","./menu-1-7-qe_FJT.js","../css/menu-1-C5rTu6B4.css","./menu-2-C9ZfWgis.js","../css/menu-2-DwSbhe9C.css","./menu-3-Cbw3fhMp.js","../css/menu-3-C1x6D_tQ.css","./menu-4-PWby9dmD.js","../css/menu-4-B_QkhR3M.css","./request-kKg4V92B.js","./common-lU7M6-0W.js","../css/request-BjYaB_Vm.css","./the-components-C-wzrDhL.js","../css/the-components-DFTbI306.css","./example-opkvKuPx.js","../css/example-DFXcbB_t.css","./index-BvtJdJRf.js","../css/index-CJ5TRbCj.css","./login-C-wBaNqL.js","../css/login-388KFgJf.css","./page-401-BTsjVVeU.js","../css/page-401-hNHv4Vr6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var Re=Object.defineProperty;var Ae=(n,t,e)=>t in n?Re(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var B=(n,t,e)=>(Ae(n,typeof t!="symbol"?t+"":t,e),e);import{d as L,r as I,o as m,c as w,a as W,b as v,e as _,n as A,f as R,w as K,g as Q,h as ke,i as S,j as $,T as Y,k as Ne,l as T,m as G,v as te,p as D,t as N,q as ne,u as C,s as Pe,x as Be,F as M,y as X,z as De,A as ze,B as J,E as Me,C as oe,D as q,G as me,H as Ve,I as He,J as qe,K as We,L as Xe,N as se,M as je,O as Je,P as Ye,Q as Fe,R as Ue}from"./vendor-DLKUgWGa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();const Ge=L({name:"App"}),we=(n,t)=>{const e=n.__vccOpts||n;for(const[o,i]of t)e[o]=i;return e};function Ke(n,t,e,o,i,a){const u=I("router-view");return m(),w(u)}const Qe=we(Ge,[["render",Ke]]),Ze=["xlink:href"],et=L({name:"SvgIcon"}),tt=L({...et,props:{name:{type:String,required:!0,default:""},className:{type:String,default:""}},setup(n){const t=n,e=W(()=>`#icon-${t.name}`),o=W(function(){return t.className?"svg-icon "+t.className:"svg-icon"});return(i,a)=>(m(),v("svg",{class:A(o.value),"aria-hidden":"true"},[_("use",{"xlink:href":e.value},null,8,Ze)],2))}});let ge=1e3;function de(){const n=ge;return ge++,n}function nt(n=10){return{pageSize:n,currentPage:1,total:0}}function kn(n,t){t||setTimeout(function(){const e=document.querySelector(`${n} .is-error`);if(!e)return;e.scrollIntoView&&e.scrollIntoView({behavior:"smooth"});const o=[".el-input",".el-textarea",".el-select"];let i=null;for(let u=0;u<o.length&&(i=e.querySelector(o[u]),!i);u++);if(!i)return;i.classList.add("apply-shake");function a(){i.removeEventListener("animationend",a),i.removeEventListener("click",a),i.classList.remove("apply-shake")}i.addEventListener("animationend",a),i.addEventListener("click",a)},1e3/60)}const ot={class:"base-dialog-title fbetween fvertical"},it={class:"base-dialog-body"},at={key:0,class:"base-dialog-footer"},st=L({name:"base-dialog"}),rt=L({...st,props:{title:{type:String,default:"提示"},modelValue:{type:Boolean,default:!1},width:{type:String,default:"50%"},closeByMask:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!1}},emits:["close","update:modelValue","afterLeave","afterEnd"],setup(n,{emit:t}){const e=n,o=t,i=de(),a=R(),u=R(),h=R(),p=R(!1),d="flag-dialog-"+i;K(()=>e.modelValue,function(c){c?setTimeout(()=>{p.value=!0},0):p.value=!1});function f(c){if(e.appendToBody&&!document.getElementById(d)&&(a.value.remove(),a.value=void 0,document.removeEventListener("click",f)),!e.modelValue||p.value||a.value.contains(c.target))return;const{clientWidth:y,clientHeight:E}=a.value,Z=y/2,ee=E/2,ie=c.clientY-ee,b=`${(c.clientX-Z)/y*100}vw`,x=`${ie/E*100}vh`;r(b,x)}function r(c,y){const E=h.value;E&&(E.style.setProperty("--contentX",c),E.style.setProperty("--contentY",y))}function s(c){(c&&c.target===a.value&&e.closeByMask||c&&c.target===u.value)&&(o("update:modelValue",!1),o("close"))}function l(){p.value&&r("0","0"),o("afterLeave")}function g(){o("afterEnd")}return Q(function(){document.addEventListener("click",f)}),ke(function(){document.removeEventListener("click",f)}),(c,y)=>{const E=I("el-scrollbar");return m(),v("section",null,[(m(),w(Ne,{to:"body",disabled:!n.appendToBody},[S(Y,{name:"fade"},{default:$(()=>[G(_("div",{ref_key:"el",ref:a,class:"base-dialog fvc",style:D({zIndex:C(i)}),onClick:s},[S(Y,{name:"dialog-move",onAfterLeave:l,onAfterEnter:g},{default:$(()=>[G(_("div",{ref_key:"contentBox",ref:h,class:"base-dialog-content flex",style:D({width:n.width})},[_("div",ot,[_("h2",null,N(n.title),1),_("i",{ref_key:"closeBtn",ref:u,onClick:s},null,512)]),_("div",it,[S(E,{"max-height":"76vh"},{default:$(()=>[ne(c.$slots,"default")]),_:3})]),c.$slots.footer?(m(),v("div",at,[ne(c.$slots,"footer")])):T("",!0)],4),[[te,p.value]])]),_:3})],4),[[te,n.modelValue]])]),_:3})],8,["disabled"])),n.appendToBody?(m(),v("div",{key:0,id:d,description:"用来标记 teleport 开启之后插入的节点用"})):T("",!0)])}}}),lt={class:"base-table"},ct={name:"base-table"},ut=L({...ct,props:{data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},checkbox:{type:Boolean,default:!1},isRowClick:{type:Boolean,default:!1},actions:{type:Array,default:()=>[]},checkboxDisabled:{type:Function,default:void 0},maxHeight:{type:Number,default:500}},emits:["select","row"],setup(n,{emit:t}){const e=n,o=t,i=R();Pe(function(){var f;(f=i.value)==null||f.doLayout()});function a(f){o("select",f)}function u(f,r,s){o("row",f,r,s)}function h(f){return["",null,void 0,"null","undefined"].includes(f)}function p(f){return typeof e.checkboxDisabled=="function"?!e.checkboxDisabled(f):!0}function d(f,r,s){return typeof s.formatter=="function"?s.formatter(f,f[r],s):h(f[s.prop])?"-":f[s.prop]}return(f,r)=>{const s=I("el-table-column"),l=I("base-table-option"),g=Be("loading");return G((m(),v("div",lt,[S(C(Me),{ref:"the-table",stripe:"",border:"","max-height":e.maxHeight,data:e.data,onRowClick:u,onSelectionChange:a},{default:$(()=>[e.checkbox?(m(),w(s,{key:0,type:"selection",width:"55",align:"center",fixed:"left",selectable:p})):T("",!0),(m(!0),v(M,null,X(e.columns,c=>(m(),w(s,{key:c.key||c.prop,prop:c.prop,label:c.label,"min-width":c.minWidth,width:c.width,"show-overflow-tooltip":c.tooltip===void 0?!0:c.tooltip,fixed:c.prop==="action-right"?"right":c.fixed,align:c.prop==="action-right"?"center":c.align,"class-name":n.isRowClick&&c.prop!=="action-right"?"base-column-click":"","label-class-name":"base-table-label"},{default:$(({row:y,$index:E})=>[c.slotName?ne(f.$slots,c.slotName,De(ze({key:0},{row:y,$index:E}))):c.prop==="action-right"?(m(),w(l,{key:1,row:y,index:E,list:e.actions,clickStop:e.isRowClick},null,8,["row","index","list","clickStop"])):(m(),v(M,{key:2},[J(N(d(y,c.prop,c)),1)],64))]),_:2},1032,["prop","label","min-width","width","show-overflow-tooltip","fixed","align","class-name"]))),128))]),_:3},8,["max-height","data"])])),[[g,n.loading]])}}});function dt(n){return Object.prototype.toString.call(n).match(/\[object (\S*)\]/)[1].toLocaleLowerCase()}function U(n,t){return dt(n)===t}function H(n,t){for(const e in t)if(Object.prototype.hasOwnProperty.call(n,e)){const o=t[e],i=n[e];U(i,"object")?H(i,o):n[e]=o}}function ft(n,t,e){if(n=n.replace(/(^\s*)|(\s*$)/g,""),!n){e&&e("复制的内容不能为空！");return}const o="the-clipboard";let i=document.getElementById(o);i||(i=document.createElement("textarea"),i.id=o,i.readOnly=!0,i.style.cssText="font-size: 15px; position: fixed; top: -1000%; left: -1000%;",document.body.appendChild(i)),i.value=n,i.select(),i.setSelectionRange(0,i.value.length),document.execCommand("copy")?t&&t():e&&e("复制失败")}function wn(n,t,e){let o=n.toString().trim();if(o.length===0)return"";const i="";return o=o.replace(/[^0-9]+/ig,""),i+o}function Se(n,t={}){let e=t;if(U(n,"string"))try{e=JSON.parse(n)}catch(o){console.warn("JSON格式化对象错误 >>",o)}return e}function pt(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)}function Sn(n,t){return Math.round(Math.random()*(t-n)+n)}function En(n,t){const e=parseInt((Math.random()*t).toString())+n,o=2e4,i=1e3;let a="",u=0;for(;u<e;){u++;const h=parseInt((Math.random()*i).toString());a+=String.fromCharCode(o+h)}return a}const mt=_("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),ht={key:0,class:"el-icon-loading"},gt={name:"base-table-option"},yt=L({...gt,props:{max:{type:[Number,String],default:3},row:{type:Object,default:()=>({})},index:{type:Number,default:-1},list:{type:Array,default:[]},clickStop:{type:Boolean,default:!1}},setup(n){const t=n,e=W(()=>t.list.filter(d=>U(d.hide,"function")?!d.hide(t.row):!d.hide)),o=W(()=>{var r,s;const d=Number(t.max),f=e;return((r=f.value)==null?void 0:r.length)>d?(s=f.value)==null?void 0:s.filter((l,g)=>g<d-1):f.value}),i=W(()=>{var r,s;const d=Number(t.max),f=e;return((r=f.value)==null?void 0:r.length)>d?(s=f.value)==null?void 0:s.filter((l,g)=>g>=d-1):[]}),a=(d,f)=>{const r=d[f];return r?U(r,"function")?r(t.row):r:"-"},u=(d,f)=>{const r=d[f];return r?U(r,"function")?r(t.row):r:!1},h=d=>{d.click&&d.click(t.row,t.index)},p=d=>{t.clickStop&&(d.stopPropagation(),d.preventDefault())};return(d,f)=>{const r=I("el-button"),s=I("el-dropdown-item"),l=I("el-dropdown-menu"),g=I("el-dropdown");return m(),v("div",{class:"base-table-option fvc",onClick:p},[(m(!0),v(M,null,X(o.value,(c,y)=>(m(),w(r,{text:"",type:c.type||"primary",key:"btn-"+y,loading:u(c,"loading"),disabled:u(c,"disabled"),onClick:E=>h(c)},{default:$(()=>[c.icon&&!u(c,"loading")?(m(),v("i",{key:0,class:A(["base-table-option-icon",a(c,"icon")])},null,2)):T("",!0),J(" "+N(a(c,"text")),1)]),_:2},1032,["type","loading","disabled","onClick"]))),128)),i.value.length?(m(),w(g,{key:0},{dropdown:$(()=>[S(l,null,{default:$(()=>[(m(!0),v(M,null,X(i.value,(c,y)=>(m(),w(s,{key:"drop-"+y,disabled:u(c,"disabled")||u(c,"loading"),onClick:E=>h(c)},{default:$(()=>[u(c,"loading")?(m(),v("i",ht)):c.icon&&!u(c,"loading")?(m(),v("i",{key:1,class:A(["base-table-option-icon",a(c,"icon")])},null,2)):T("",!0),J(" "+N(a(c,"text")),1)]),_:2},1032,["disabled","onClick"]))),128))]),_:1})]),default:$(()=>[S(r,{text:"",type:"primary"},{default:$(()=>[J("更多"),mt]),_:1})]),_:1})):T("",!0)])}}}),vt=L({name:"base-pagination"}),_t=L({...vt,props:{pageInfo:{type:Object,default:()=>nt()},pageSizes:{type:Array,default:()=>[10,30,100,200,300]},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},position:{type:String,default:"right"},disabled:{type:Boolean,default:!1}},emits:["change"],setup(n,{emit:t}){const e=n,o=t;function i(u){e.pageInfo.currentPage=1,e.pageInfo.pageSize=u,o("change",{type:"pageSize",value:u})}function a(u){e.pageInfo.currentPage=u,o("change",{type:"currentPage",value:u})}return(u,h)=>{const p=I("el-pagination");return m(),v("div",{class:A(["base-pagination",n.position])},[e.pageInfo.total?(m(),w(p,{key:0,background:"",disabled:e.disabled,layout:e.layout,total:e.pageInfo.total,"current-page":e.pageInfo.currentPage,"page-sizes":e.pageSizes,onSizeChange:i,onCurrentChange:a},null,8,["disabled","layout","total","current-page","page-sizes"])):T("",!0)],2)}}}),bt="modulepreload",xt=function(n,t){return new URL(n,t).href},ye={},O=function(t,e,o){let i=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),u=document.querySelector("meta[property=csp-nonce]"),h=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));i=Promise.all(e.map(p=>{if(p=xt(p,o),p in ye)return;ye[p]=!0;const d=p.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!o)for(let l=a.length-1;l>=0;l--){const g=a[l];if(g.href===p&&(!d||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${f}`))return;const s=document.createElement("link");if(s.rel=d?"stylesheet":bt,d||(s.as="script",s.crossOrigin=""),s.href=p,h&&s.setAttribute("nonce",h),document.head.appendChild(s),d)return new Promise((l,g)=>{s.addEventListener("load",l),s.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${p}`)))})}))}return i.then(()=>t()).catch(a=>{const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=a,window.dispatchEvent(u),!u.defaultPrevented)throw a})};function $t(n){return oe.get(n)||""}function kt(n,t,e){e?oe.set(n,t,e):oe.set(n,t)}function wt(n,t){oe.remove(n)}const re="ModuleUser";function ve(){return{id:"",name:"",type:"",token:"",avatar:"",account:"",password:""}}const St=3,Et=24*60*60*1e3;class Lt{constructor(){B(this,"info",q(ve()));this.init()}init(){const t=$t(re);if(t){const e=Se(t);H(this.info,e)}}update(t){H(this.info,t),kt(re,JSON.stringify(this.info),{expires:new Date(Date.now()+St*Et)})}reset(){H(this.info,ve()),wt(re)}}const Ct=""+new URL("../image/logo-CPmPqqKk.png",import.meta.url).href,_e="ModuleLayout";class It{constructor(){B(this,"addRouters",[]);B(this,"completeRouters",[]);B(this,"info",q({showTagsView:!0,sidebarOpen:!0,showSidebarLogo:!0,historyViews:[],layoutMode:""}));B(this,"menuSizeInfo",q({titleHeight:0,itemHeight:0}));this.init(),K(this.info,this.saveInfo.bind(this))}init(){const t=sessionStorage.getItem(_e);try{t&&H(this.info,JSON.parse(t))}catch(e){console.log("ModuleLayout init fail >>",e)}}saveInfo(){sessionStorage.setItem(_e,JSON.stringify(this.info))}}const le="ModuleGoods";function be(){return{id:0,name:"",price:0,specs:{size:"xs",width:"",height:""}}}class Ot{constructor(){B(this,"info",q(be()));const t=sessionStorage.getItem(le);if(t){const e=Se(t);H(this.info,e)}}update(t){H(this.info,t),sessionStorage.setItem(le,JSON.stringify(this.info))}reset(){H(this.info,be()),sessionStorage.removeItem(le)}}class Tt{constructor(){B(this,"projectInfo",{title:"Vue Typescript Admin",name:"XXX后台管理平台",logo:Ct,link:"https://github.com/Travis-hjs/vue-admin"});B(this,"layout",new It);B(this,"user",new Lt);B(this,"_goods");console.log("%c ModuleStore init","color: #409EFF")}get goods(){return this._goods||(this._goods=new Ot),this._goods}}const k=new Tt,Rt={key:0,class:"separator"},At={key:1,href:"javascript:void(0)"},Nt=L({__name:"Breadcrumb",setup(n){const t=me(),e=R([]);function o(){const i=t.matched.filter(a=>a.meta&&a.meta.title).map(a=>({path:a.path,meta:{...a.meta}}));e.value=i}return K(()=>t.path,function(){t.path.startsWith("/redirect/")||o()}),o(),(i,a)=>{const u=I("router-link");return m(),w(Ve,{name:"breadcrumb",tag:"div",class:"layout-breadcrumb fvertical"},{default:$(()=>[(m(!0),v(M,null,X(e.value,(h,p)=>(m(),v("span",{class:A(["layout-breadcrumb-item",{last:p===e.value.length-1}]),key:h.path},[p>0?(m(),v("i",Rt,"/")):T("",!0),p===e.value.length-1?(m(),v("a",At,N(h.meta.title),1)):(m(),w(u,{key:2,to:h.path},{default:$(()=>[J(N(h.meta.title),1)]),_:2},1032,["to"]))],2))),128))]),_:1})}}}),xe=function(){const n=document.createElement("div");n.style.width="100px",n.style.height="100px",n.style.overflow="scroll",document.body.appendChild(n);const t=n.offsetWidth-n.clientWidth;return n.remove(),t}(),Pt=L({name:"Scrollbar"}),Ee=L({...Pt,props:{thumbColor:{type:String,default:"rgba(147, 147, 153, 0.45)"},thumbSize:{type:Number,default:8},clickUpdateDelay:{type:Number,default:0}},setup(n,{expose:t}){const e=n,o=R(),i=R(),a=R(),u=R(),h=q({height:"",width:""}),p=q({x:{width:"",height:"",left:"",bottom:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor},y:{width:"",height:"",top:"",right:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor}}),d=R(!1);function f(){const b=o.value.parentElement;b.style.overflow="hidden";const x=getComputedStyle(b);h.width=`calc(100% + ${xe}px + ${x.borderLeftWidth} + ${x.borderRightWidth})`,h.height=`calc(100% + ${xe}px + ${x.borderTopWidth} + ${x.borderBottomWidth})`}function r(){p.y.right=p.y.top="0px",p.y.width=e.thumbSize+"px",p.x.bottom=p.x.left="0px",p.x.height=e.thumbSize+"px",p.x.borderRadius=p.y.borderRadius=`${e.thumbSize/2}px`}function s(){const b=i.value;if(b){let x=b.clientHeight/b.scrollHeight*100;x>=100&&(x=0),p.y.height=x+"%",p.y.transform=`translate3d(0, ${b.scrollTop/b.scrollHeight*b.clientHeight}px, 0)`;let P=b.clientWidth/b.scrollWidth*100;P>=100&&(P=0),p.x.width=P+"%",p.x.transform=`translate3d(${b.scrollLeft/b.scrollWidth*b.clientWidth}px, 0, 0)`}}let l=!1,g=!1,c=0,y;function E(b){const x=a.value,P=u.value,j=b.target;x.contains(j)&&(l=!0,g=!1,c=b.clientX-x.getBoundingClientRect().left),P.contains(j)&&(l=!0,g=!0,c=b.clientY-P.getBoundingClientRect().top)}function Z(b){if(!l)return;const x=i.value;if(g){const P=x.getBoundingClientRect().top,j=x.clientHeight;let ae=b.clientY-P;x.scrollTop=(ae-c)/j*x.scrollHeight}else{const P=x.getBoundingClientRect().left,j=x.clientWidth;let ae=b.clientX-P;x.scrollLeft=(ae-c)/j*x.scrollWidth}}function ee(b){l=!1,o.value.contains(b.target)?e.clickUpdateDelay>0&&(y&&clearTimeout(y),y=setTimeout(s,e.clickUpdateDelay)):d.value=!1}function ie(){d.value=!0,s()}function he(){l||(d.value=!1)}return Q(function(){f(),r(),i.value&&i.value.addEventListener("scroll",s),document.addEventListener("mousedown",E),document.addEventListener("mousemove",Z),document.addEventListener("mouseup",ee)}),ke(function(){i.value&&i.value.removeEventListener("scroll",s),document.removeEventListener("mousedown",E),document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",ee),y&&clearTimeout(y)}),t({updateWrapStyle:f,updateThumbStyle:s}),(b,x)=>(m(),v("div",{class:"the-scrollbar",ref_key:"el",ref:o,onMouseenter:x[0]||(x[0]=P=>ie()),onMouseleave:x[1]||(x[1]=P=>he())},[_("div",{ref_key:"wrap",ref:i,class:"the-scrollbar-wrap",style:D(h)},[ne(b.$slots,"default")],4),S(Y,{name:"fade"},{default:$(()=>[G(_("button",{class:"the-scrollbar-thumb",ref_key:"thumbY",ref:u,title:"滚动条-摁住拖拽Y轴",style:D(p.y)},null,4),[[te,d.value]])]),_:1}),S(Y,{name:"fade"},{default:$(()=>[G(_("button",{class:"the-scrollbar-thumb",ref_key:"thumbX",ref:a,title:"滚动条-摁住拖拽X轴",style:D(p.x)},null,4),[[te,d.value]])]),_:1})],544))}}),Bt={class:"the-layout-header"},Dt={class:"the-layout-navbar flex"},zt={class:"user-info-box fvertical"},Mt=["src"],Vt={class:"the-tag green mgr_10"},Ht=_("span",null,"退出登录",-1),qt={key:0,class:"the-layout-tag-box"},Wt={class:"the-layout-tags"},Xt=["onClick"],jt="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",Jt=L({__name:"HeaderBar",setup(n){const t=me(),e=He(),o=k.layout.info,i=k.user.info;function a(){o.sidebarOpen=!o.sidebarOpen}function u(){k.user.reset(),e.push("/login").then(()=>{o.historyViews=[],hn()})}function h(d){return d.path===t.path&&JSON.stringify(d.query)===JSON.stringify(t.query)&&JSON.stringify(d.params)===JSON.stringify(t.params)}function p(d){o.historyViews.splice(d,1)}return K(()=>t.path,function(){o.historyViews.some(f=>h(f))||o.historyViews.push({name:t.name,path:t.path,query:t.query,params:t.params,meta:t.meta})},{immediate:!0}),(d,f)=>{const r=I("svg-icon"),s=I("router-link");return m(),v("div",Bt,[_("div",Dt,[_("div",{class:A(["fvc hamburger",{"hamburger-active":C(o).sidebarOpen}]),onClick:f[0]||(f[0]=l=>a())},[S(r,{name:"hamburger"})],2),S(Nt,{class:"f1"}),_("div",zt,[_("img",{class:"avatar",src:C(i).avatar||jt},null,8,Mt),_("span",Vt,N(C(i).name||C(i).account||"用户未设置昵称"),1),_("button",{class:"logout fvertical",onClick:f[1]||(f[1]=l=>u())},[S(r,{name:"exit"}),Ht])])]),C(o).showTagsView?(m(),v("div",qt,[S(C(Ee),null,{default:$(()=>[_("div",Wt,[(m(!0),v(M,null,X(C(o).historyViews,(l,g)=>(m(),w(s,{class:A(["the-layout-tag",{"the-layout-tag-on":h(l)}]),key:g+l.path,to:{path:l.path,query:l.query,params:l.params}},{default:$(()=>[_("span",null,N(l.meta.title),1),_("i",{class:"close",onClick:qe(c=>p(g),["prevent","stop"])},"-",8,Xt)]),_:2},1032,["class","to"]))),128))])]),_:1})])):T("",!0)])}}}),Yt={class:"f1"},Ft=_("i",{class:"the-layout-menu-arrow"},null,-1),Ut=["href"],Gt={class:"f1"},Kt={class:"f1"},Qt=["href"],Zt=L({__name:"MenuItem",props:{level:{type:Number,default:1},info:{type:Object,default:()=>({title:"-"})}},setup(n){const t=n;function e(r){return!!(r.children&&r.children.length>0)}function o(r){let s=0;const l=r.children,g=k.layout.menuSizeInfo;return r.isOpen&&l&&l.length>0&&l.forEach(c=>{const y=e(c)?g.titleHeight:g.itemHeight;s+=y,s+=o(c)}),s}const i=W(function(){const r=t.info;return{"the-layout-menu-title fvertical":!0,"the-layout-menu-selected":r.isActive,"the-layout-menu-open":r.isOpen,"the-layout-menu-actived":r.hasActive,"the-layout-menu-active-title":r.hasActive&&t.level===1}});function a(r){return{"the-layout-menu-item fvertical":!0,"the-layout-menu-selected":r.isActive}}const u=q({paddingLeft:""}),h=q({paddingLeft:""}),p=W(function(){return{height:o(t.info)+"px"}}),d=R();function f(){t.info.isOpen=!t.info.isOpen}return Q(function(){const r=d.value;if(t.level>=1){const s=getComputedStyle(r.children[0]),l=parseFloat(s.paddingLeft);if(isNaN(l))return;u.paddingLeft=l*t.level+"px",h.paddingLeft=l*(t.level+1)+"px"}}),(r,s)=>{const l=I("svg-icon"),g=I("router-link"),c=I("MenuItem",!0);return m(),v("div",{class:"the-layout-menu",ref_key:"menuBox",ref:d},[e(n.info)?(m(),v("button",{key:0,class:A(i.value),style:D(u),onClick:s[0]||(s[0]=y=>f())},[n.info.icon?(m(),w(l,{key:0,name:n.info.icon},null,8,["name"])):T("",!0),_("span",Yt,N(n.info.title),1),Ft],6)):(m(),v(M,{key:1},[n.info.link?(m(),v("a",{key:0,class:A(i.value),style:D(u),href:n.info.link,target:"_blank"},[n.info.icon?(m(),w(l,{key:0,name:n.info.icon},null,8,["name"])):T("",!0),_("span",Gt,N(n.info.title),1)],14,Ut)):(m(),w(g,{key:1,class:A(i.value),style:D(u),to:n.info.path},{default:$(()=>[n.info.icon?(m(),w(l,{key:0,name:n.info.icon},null,8,["name"])):T("",!0),_("span",Kt,N(n.info.title),1)]),_:1},8,["class","style","to"]))],64)),n.info.children&&n.info.children.length>0?(m(),v("div",{key:2,class:"the-layout-menu-list",style:D(p.value)},[(m(!0),v(M,null,X(n.info.children,y=>(m(),v("div",{key:y.key},[e(y)?(m(),w(c,{key:0,info:y,level:n.level+1},null,8,["info","level"])):(m(),v(M,{key:1},[y.link?(m(),v("a",{key:0,class:A(a(y)),style:D(h),href:y.link,target:"_blank"},[y.icon?(m(),w(l,{key:0,name:y.icon},null,8,["name"])):T("",!0),_("span",null,N(y.title),1)],14,Qt)):(m(),w(g,{key:1,class:A(a(y)),style:D(h),to:y.path},{default:$(()=>[y.icon?(m(),w(l,{key:0,name:y.icon},null,8,["name"])):T("",!0),_("span",null,N(y.title),1)]),_:2},1032,["class","style","to"]))],64))]))),128))],4)):T("",!0)],512)}}}),en=L({__name:"Menu",props:{mergeOnlyOneChild:{type:Boolean,default:!1},onlyMergeFirst:{type:Boolean,default:!1}},setup(n){const t=n,e=me();function o(r,s){r=JSON.parse(JSON.stringify(r));const l=[];for(let g=0;g<r.length;g++){const c=r[g],y={key:s?`${s}-${g}`:g.toString(),isOpen:!1,isActive:!1,hasActive:!1,children:[],path:c.path,...c.meta};if(!y.hidden){l.push(y);const E=c.children;E&&E.length>0&&(y.children=o(E,y.key))}}return l}function i(r){r=JSON.parse(JSON.stringify(r));const s=[];for(let l=0;l<r.length;l++){const g=r[l],c=g.children;c&&c.length>0?c.length===1?(c[0].key=g.key,s.push(c[0]),c[0].children&&c[0].children.length>0&&!t.onlyMergeFirst&&(c[0].children=i(c[0].children))):(s.push(g),t.onlyMergeFirst||(g.children=i(c))):s.push(g)}return s}let a=o(Ie(k.layout.completeRouters));t.mergeOnlyOneChild&&(a=i(a));const u=R(a);let h=[];function p(r){for(let s=0;s<r.length;s++){const l=r[s];l.hasActive=!1,l.isOpen&&(!l.children||l.children&&l.children.length===0)&&(l.isOpen=!1),l.isActive=l.path===e.path,l.isActive&&(h=l.key.split("-").map(g=>Number(g))),l.children&&l.children.length>0&&p(l.children)}}function d(r,s=0){const l=h[s],g=r[l];g.hasActive=g.isOpen=!0,s<h.length-1&&d(g.children,s+1)}function f(){h=[],p(u.value),h.length>0&&d(u.value)}return K(()=>e.path,function(){f()}),Q(function(){f();function r(s,l=0){const g=document.querySelector(s);return g?g.clientHeight:(console.log("%c 找不到节点 >>","color: #ff4949",s,"已使用默认值 >>",l),l)}k.layout.menuSizeInfo.titleHeight=r(".the-layout-menu .the-layout-menu-title",50),k.layout.menuSizeInfo.itemHeight=r(".the-layout-menu .the-layout-menu-item",44)}),(r,s)=>(m(!0),v(M,null,X(u.value,l=>(m(),w(Zt,{key:l.key,info:l},null,8,["info"]))),128))}}),tn={class:"the-layout-sidebar"},nn={key:0,class:"the-logo-box"},on=["src"],an=["title"],sn=L({__name:"Sidebar",setup(n){const t=k.layout.info,e=k.projectInfo;return(o,i)=>{const a=I("router-link");return m(),v("div",tn,[S(C(Ee),{clickUpdateDelay:300,thumbSize:10},{default:$(()=>[S(Y,{name:"fade"},{default:$(()=>[C(t).showSidebarLogo?(m(),v("div",nn,[S(a,{class:"the-logo-link fvertical",to:"/"},{default:$(()=>[_("img",{class:"the-logo",src:C(e).logo},null,8,on),_("h1",{class:"the-logo-title ellipsis",title:C(e).title},N(C(e).title),9,an)]),_:1})])):T("",!0)]),_:1}),S(en,{mergeOnlyOneChild:!0,onlyMergeFirst:!0})]),_:1})])}}}),rn=L({name:"Layout"}),ce=L({...rn,setup(n){const t=k.layout.info;function e(d){let f=[];for(let r=0;r<d.length;r++){const s=d[r],l=s.children;l&&l.length>0&&(f=f.concat(e(l))),s.meta.keepAlive&&s.name&&f.push(s.name)}return f.filter(r=>r)}const o=e(k.layout.completeRouters),i=R(),a=R(!1);let u;function h(){u.scrollTo({top:0,left:0,behavior:"smooth"})}function p(){a.value=u.scrollTop>document.documentElement.clientHeight}return Q(function(){u=i.value,u.addEventListener("scroll",p),p()}),(d,f)=>{const r=I("router-view");return m(),v("div",{class:A(["the-layout",C(t).layoutMode,{"has-tags-view":C(t).showTagsView},{"collapsed-sidebar":!C(t).sidebarOpen}])},[S(Jt),S(sn),_("div",{class:"the-layout-content",ref_key:"contentBox",ref:i},[S(r,{class:"the-layout-page"},{default:$(({Component:s,route:l})=>[S(Y,{name:"fadeSlideX",mode:"out-in"},{default:$(()=>[(m(),w(Xe,{include:C(o)},[(m(),w(We(s),{key:l.path}))],1032,["include"]))]),_:2},1024)]),_:1})],512),_("button",{class:A(["the-layout-totop",{"the-layout-totop-hide":!a.value}]),title:"返回顶部",onClick:f[0]||(f[0]=s=>h())},null,2)],2)}}}),ln=L({name:"page-404"}),cn={class:"page-404 fvc"},un=_("h4",{class:"title"},"当前页面不存在",-1);function dn(n,t,e,o,i,a){const u=I("router-link");return m(),v("div",cn,[_("div",null,[un,S(u,{class:"goback",to:"/"},{default:$(()=>[J("返回首页")]),_:1})])])}const fe=we(ln,[["render",dn]]),fn=[{path:"/",name:"index",redirect:"/home",component:ce,meta:{title:"首页",icon:"home"},children:[{path:"/home",meta:{title:"首页展示",icon:"guide"},component:()=>O(()=>import("./home-DgsZ8rvH.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)},{path:"/nested",name:"nested",redirect:"/nested/menu-1",meta:{title:"多级菜单嵌套",icon:"tree"},component:()=>O(()=>import("./nested-Doi_C3mq.js"),__vite__mapDeps([4,1,2,5]),import.meta.url),children:[{path:"/nested/menu-1",name:"nested/menu-1",meta:{title:"el-plus 表格"},component:()=>O(()=>import("./menu-1-7-qe_FJT.js"),__vite__mapDeps([6,1,2,7]),import.meta.url)},{path:"/nested/menu-2",name:"nested/menu-2",meta:{title:"el-plus 表单验证"},component:()=>O(()=>import("./menu-2-C9ZfWgis.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/nested/three-level",name:"nested/three-level",meta:{title:"三级菜单"},redirect:"/nested/three-level/menu-1",component:()=>O(()=>import("./nested-Doi_C3mq.js"),__vite__mapDeps([4,1,2,5]),import.meta.url),children:[{path:"/nested/three-level/menu-1",name:"/nested/three-level/menu-1",meta:{title:"菜单 3-1"},component:()=>O(()=>import("./menu-1-7-qe_FJT.js"),__vite__mapDeps([6,1,2,7]),import.meta.url)},{path:"/nested/three-level/menu-2",name:"/nested/three-level/menu-2",meta:{title:"菜单 3-2"},component:()=>O(()=>import("./menu-2-C9ZfWgis.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)}]},{path:"/nested/four-level",name:"nested/four-level",meta:{title:"三级菜单-2"},redirect:"/nested/four-level/menu-1",component:()=>O(()=>import("./nested-Doi_C3mq.js"),__vite__mapDeps([4,1,2,5]),import.meta.url),children:[{path:"/nested/four-level/menu-1",name:"/nested/four-level/menu-1",meta:{title:"菜单 3-2-1"},component:()=>O(()=>import("./menu-1-7-qe_FJT.js"),__vite__mapDeps([6,1,2,7]),import.meta.url)}]},{path:"/nested/menu-3",name:"nested/menu-3",meta:{title:"菜单 2-3"},component:()=>O(()=>import("./menu-3-Cbw3fhMp.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)}]},{path:"/link-baidu",name:"link-baidu",component:fe,meta:{title:"百度一下",icon:"baidu",link:"https://www.baidu.com"}},{path:"/menu-4",name:"menu-4",meta:{title:"换行菜单标题换行菜单标题",icon:"nested"},component:()=>O(()=>import("./menu-4-PWby9dmD.js"),__vite__mapDeps([12,1,2,13]),import.meta.url)}]},{path:"/example",name:"example",component:ce,meta:{title:"示例页栏目",icon:"menu"},redirect:"/example/request",children:[{path:"/example/request",name:"example-request",meta:{title:"http-请求示例",keepAlive:!0},component:()=>O(()=>import("./request-kKg4V92B.js"),__vite__mapDeps([14,15,1,2,16]),import.meta.url)},{path:"/example/components",name:"example-components",meta:{title:"自定义组件"},component:()=>O(()=>import("./the-components-C-wzrDhL.js"),__vite__mapDeps([17,15,1,2,18]),import.meta.url)},{path:"/example/tsx",name:"example-tsx",meta:{title:"tsx-示例"},component:()=>O(()=>import("./example-opkvKuPx.js"),__vite__mapDeps([19,1,2,20]),import.meta.url)}]},{path:"/icon",name:"icon",meta:{title:"图标栏目",auth:[0]},component:ce,redirect:"/icon/svg-icons",children:[{path:"/icon/svg-icons",name:"svg-icons",component:()=>O(()=>import("./index-BvtJdJRf.js"),__vite__mapDeps([21,1,2,22]),import.meta.url),meta:{title:"svg-图标",icon:"svg-icon"}}]},{path:"/"+k.projectInfo.link,name:"GitHub-Travis",component:fe,meta:{title:"项目地址",icon:"github",link:k.projectInfo.link,auth:[0]}}],F={path:"/",query:{}},pe="redirect404";let z;function Le(n){const t=[],e=k.user.info.type;for(let o=0;o<n.length;o++){const i=n[o],a=i.meta?i.meta.auth:void 0;(!a||a&&a.includes(e))&&(i.children&&i.children.length>0&&(i.children=Le(i.children)),t.push(i))}return t}async function pn(){return Le(fn)}function mn(n,t){z=n,z.beforeEach(async function(e,o,i){if(se.start(),k.user.info.token)if(k.layout.addRouters.length>0)i();else{k.layout.addRouters=await pn();for(let a=0;a<k.layout.addRouters.length;a++){const u=k.layout.addRouters[a];z.addRoute(u)}z.hasRoute(pe)||z.addRoute({...t[1],path:"/:catchAll(.*)",name:pe}),k.layout.completeRouters=t.concat(k.layout.addRouters),i({...e,replace:!0})}else e.path==="/login"?i():(F.path=e.path,F.query=e.query,i({path:"/login"}),se.done())}),z.afterEach(e=>{se.done(),e.meta&&e.meta.title&&(document.title=e.meta.title)})}function Ln(){z.replace({path:F.path,query:F.query})}function hn(){const n=k.layout.addRouters;for(let t=n.length-1;t>-1;t--){const e=n[t];e.name&&z.hasRoute(e.name)&&z.removeRoute(e.name)}F.path="/",F.query={},z.removeRoute(pe),k.layout.addRouters=k.layout.completeRouters=[]}const Ce=[{path:"/login",name:"login",component:()=>O(()=>import("./login-C-wBaNqL.js"),__vite__mapDeps([23,1,2,15,24]),import.meta.url),meta:{hidden:!0,title:"请登录"}},{path:"/404",name:"page-404",component:fe,meta:{hidden:!0,title:"不存在该页面"}},{path:"/401",name:"page-401",component:()=>O(()=>import("./page-401-BTsjVVeU.js"),__vite__mapDeps([25,1,2,26]),import.meta.url),meta:{hidden:!0,title:"暂无权限访问"}}];function Ie(n){n=JSON.parse(JSON.stringify(n));const t=[];for(let e=0;e<n.length;e++){const o=n[e];(!o.meta||o.meta&&!o.meta.hidden)&&(t.push(o),o.children&&o.children.length>0&&(o.children=Ie(o.children)))}return t}const Oe=je({history:Je(),routes:Ce});mn(Oe,Ce);const gn="1.1.1",ue=[];function yn(n,t){let e;ue.length>1?e=ue.shift():(e=document.createElement("div"),e.className="ripple");const o=t.getBoundingClientRect(),i=t.getAttribute("color");let a=Math.max(o.width,o.height);a>200&&(a=200),e.style.height=e.style.width=a+"px",e.style.backgroundColor=i||"rgba(255, 255, 255, .45)",t.appendChild(e);const u=n.touches,h=u?u[0].clientY:n.clientY,p=u?u[0].clientX:n.clientX,d=h-o.top-e.offsetHeight/2,f=p-o.left-e.offsetWidth/2;e.style.top=d+"px",e.style.left=f+"px";function r(){e.removeEventListener("animationend",r),t.removeChild(e),ue.push(e)}e.addEventListener("animationend",r)}function vn(n={}){const t=document,e=`__${Math.random().toString(36).slice(2,7)}`,o={box:`msg-box${e}`,hide:`hide${e}`,text:`msg-text${e}`,icon:`msg-icon${e}`},i=t.createElement("style");i.textContent=`
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
  `.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),t.head.appendChild(i);const a=[];function u(d){let f=10;for(let r=0;r<a.length;r++){const s=a[r];if(d&&d===s)break;f+=s.clientHeight+20}return f}function h(d){for(let f=0;f<a.length;f++)if(a[f]===d){a.splice(f,1);break}d.classList.add(o.hide),a.forEach(function(f){f.style.top=`${u(f)}px`})}function p(d,f="info",r){const s=t.createElement("div");s.className=`${o.box} ${f}`,s.style.top=`${u()}px`,s.style.zIndex=Te.message,s.innerHTML=`
    <span class="${o.icon}"></span>
    <span class="${o.text}">${d}</span>
    `,a.push(s),t.body.appendChild(s);function l(){s.removeEventListener("animationend",l),setTimeout(h,r||n.duration||3e3,s)}s.addEventListener("animationend",l);function g(){getComputedStyle(s).opacity==="0"&&(s.removeEventListener("transitionend",g),s.remove())}s.addEventListener("transitionend",g)}return{show:p,info(d){p(d,"info")},success(d){p(d,"success")},warning(d){p(d,"warning")},error(d){p(d,"error")}}}function _n(){const n=document,t=`__${Math.random().toString(36).slice(2,7)}`,e={mask:`dialog-mask${t}`,popup:`dialog-popup${t}`,title:`dialog-title${t}`,content:`dialog-content${t}`,footer:`dialog-footer${t}`,confirm:`confirm${t}`,fade:`fade${t}`,show:`show${t}`,hide:`hide${t}`},o=`
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
  `,i=n.createElement("style");i.textContent=o.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),n.head.appendChild(i);const a={x:"0vw",y:"0vh"};n.addEventListener("click",function(h){const{innerWidth:p,innerHeight:d}=window,f=p/2,r=d/2,s=h.clientY-r,l=h.clientX-f;a.x=`${l/p*100}vw`,a.y=`${s/d*100}vh`},!0);function u(h){const p=n.createElement("section");p.className=e.mask,p.style.zIndex=Te.dialog,p.style.setProperty("--x",a.x),p.style.setProperty("--y",a.y),a.x="0vw",a.y="0vh";const d=h.cancelText?`<button class="el-button">${h.cancelText}</button>`:"";p.innerHTML=`
    <div class="${e.popup}">
      <h2 class="${e.title}">${typeof h.title=="string"?h.title:"提示"}</h2>
      <div class="${e.content}">${h.content}</div>
      <div class="${e.footer}">
        ${d}
        <button class="el-button el-button--primary ${e.confirm}">${h.confirmText||"确认"}</button>
      </div>
    </div>
    `,n.body.appendChild(p),p.addEventListener("transitionend",function(r){r.target===p&&p.classList.contains(e.hide)&&p.remove()});function f(){p.classList.add(e.hide)}h.cancelText&&(p.querySelector(`.${e.footer} button`).onclick=function(){f(),h.cancel&&h.cancel()}),p.querySelector(`.${e.confirm}`).onclick=function(){f(),h.confirm&&h.confirm()}}return{show:u}}const Te={get message(){return(de()+20).toString()},get dialog(){return(de()+10).toString()}},$e=vn({duration:3600}),bn=_n(),Cn=bn.show;window.version=gn;const V=Ye(Qe);V.use(Fe,{locale:Ue});V.directive("copy",{mounted(n,t){n.addEventListener("click",function(){const e=n.getAttribute("copy-data")||t.value||"";ft(e,()=>$e.success("复制成功"),o=>$e.success(o))})}});V.directive("ripple",{mounted(n){const t=pt()?"touchstart":"mousedown";n.setAttribute("ripple",""),n.addEventListener(t,function(e){yn(e,n)})}});V.component("svg-icon",tt);V.component("base-dialog",rt);V.component("base-table",ut);V.component("base-table-option",yt);V.component("base-pagination",_t);V.use(Oe);V.mount("#app");export{we as _,$e as a,Cn as b,ft as c,En as d,Ee as e,dt as f,O as g,wn as i,Se as j,H as m,Ln as o,Sn as r,k as s,nt as u,kn as v};
