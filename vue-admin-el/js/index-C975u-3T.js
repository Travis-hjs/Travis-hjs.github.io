function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./home-BBg7fENk.js","./vendor-B7Tgj0F6.js","../css/vendor-P2UEzwrS.css","../css/home-BzhbKSz0.css","./nested-Bq1bBcSV.js","../css/nested-DBbt7j1J.css","./menu-1-ClkQdvi8.js","../css/menu-1-C5rTu6B4.css","./menu-2-BJP70cXS.js","../css/menu-2-DwSbhe9C.css","./menu-3-BvHXH3Fs.js","../css/menu-3-C1x6D_tQ.css","./menu-4-C0h-YWMv.js","../css/menu-4-B_QkhR3M.css","./request-CNvNPapA.js","./common-c0wRlVQ3.js","../css/request-BjYaB_Vm.css","./the-components-DifZGUax.js","../css/the-components-DvAnk08N.css","./example-CGgYdUf-.js","../css/example-DFXcbB_t.css","./index-CT19Wo1Y.js","../css/index-CJ5TRbCj.css","./index-YQ3wOxDb.js","../css/index-E8MyBd09.css","./login-1LCturVr.js","../css/login-388KFgJf.css","./page-401-Dc9JQz5p.js","../css/page-401-hNHv4Vr6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var Re=Object.defineProperty;var Ae=(n,t,e)=>t in n?Re(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var D=(n,t,e)=>(Ae(n,typeof t!="symbol"?t+"":t,e),e);import{d as L,r as O,o as m,c as w,a as W,b as v,e as _,n as A,f as oe,g as q,w as G,h as K,i as me,j as R,k as S,l as k,T as F,m as Ne,p as T,q as Z,v as ie,s as B,t as N,u as Q,x as I,y as Pe,z as De,F as z,A as X,B as Be,C as Me,D as Y,E as ze,G as he,H as Ve,I as He,J as qe,K as We,L as Xe,N as re,M as je,O as Ye,P as Je,Q as Fe,R as Ue}from"./vendor-B7Tgj0F6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();const Ge=L({name:"App"}),we=(n,t)=>{const e=n.__vccOpts||n;for(const[o,i]of t)e[o]=i;return e};function Ke(n,t,e,o,i,a){const l=O("router-view");return m(),w(l)}const Qe=we(Ge,[["render",Ke]]),Ze=["xlink:href"],et=L({name:"SvgIcon"}),tt=L({...et,props:{name:{type:String,required:!0,default:""},className:{type:String,default:""}},setup(n){const t=n,e=W(()=>`#icon-${t.name}`),o=W(function(){return t.className?"svg-icon "+t.className:"svg-icon"});return(i,a)=>(m(),v("svg",{class:A(o.value),"aria-hidden":"true"},[_("use",{"xlink:href":e.value},null,8,Ze)],2))}});function nt(n){return Object.prototype.toString.call(n).match(/\[object (\S*)\]/)[1].toLocaleLowerCase()}function J(n,t){return nt(n)===t}function H(n,t){for(const e in t)if(Object.prototype.hasOwnProperty.call(n,e)){const o=t[e],i=n[e];J(i,"object")?H(i,o):n[e]=o}}function wn(n=Date.now(),t="Y-M-D h:m:s"){if(["null",null,"undefined",void 0,""].includes(n))return"";typeof n=="string"&&new Date(n).toString()==="Invalid Date"&&(n=n.replace(/-/g,"/"));const e=l=>`0${l}`.slice(-2),o=new Date(n),i=["Y","M","D","h","m","s"],a=[];a.push(o.getFullYear().toString()),a.push(e(o.getMonth()+1)),a.push(e(o.getDate())),a.push(e(o.getHours())),a.push(e(o.getMinutes())),a.push(e(o.getSeconds()));for(let l=0;l<a.length;l++)t=t.replace(i[l],a[l]);return t}function ot(n,t,e){if(n=n.replace(/(^\s*)|(\s*$)/g,""),!n){e&&e("复制的内容不能为空！");return}const o="the-clipboard";let i=document.getElementById(o);i||(i=document.createElement("textarea"),i.id=o,i.readOnly=!0,i.style.cssText="font-size: 15px; position: fixed; top: -1000%; left: -1000%;",document.body.appendChild(i)),i.value=n,i.select(),i.setSelectionRange(0,i.value.length),document.execCommand("copy")?t&&t():e&&e("复制失败")}function Sn(n,t,e){let o=n.toString().trim();if(o.length===0)return"";const i="";return o=o.replace(/[^0-9]+/ig,""),i+o}function Se(n,t={}){let e=t;if(J(n,"string"))try{e=JSON.parse(n)}catch(o){console.warn("JSON格式化对象错误 >>",o)}return e}function it(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)}function En(n,t){return Math.round(Math.random()*(t-n)+n)}function Ln(n,t){const e=parseInt((Math.random()*t).toString())+n,o=2e4,i=1e3;let a="",l=0;for(;l<e;){l++;const h=parseInt((Math.random()*i).toString());a+=String.fromCharCode(o+h)}return a}function at(n){return oe.get(n)||""}function st(n,t,e){e?oe.set(n,t,e):oe.set(n,t)}function rt(n,t){oe.remove(n)}const le="ModuleUser";function ye(){return{id:"",name:"",type:"",token:"",avatar:"",account:"",password:""}}const lt=3,ct=24*60*60*1e3;class ut{constructor(){D(this,"info",q(ye()));this.init()}init(){const t=at(le);if(t){const e=Se(t);H(this.info,e)}}update(t){H(this.info,t),st(le,JSON.stringify(this.info),{expires:new Date(Date.now()+lt*ct)})}reset(){H(this.info,ye()),rt(le)}}const dt=""+new URL("../image/logo-CPmPqqKk.png",import.meta.url).href,ve="ModuleLayout";class ft{constructor(){D(this,"addRouters",[]);D(this,"completeRouters",[]);D(this,"info",q({showTagsView:!0,sidebarOpen:!0,showSidebarLogo:!0,historyViews:[],layoutMode:""}));D(this,"menuSizeInfo",q({titleHeight:0,itemHeight:0}));this.init(),G(this.info,this.saveInfo.bind(this))}init(){const t=sessionStorage.getItem(ve);try{t&&H(this.info,JSON.parse(t))}catch(e){console.log("ModuleLayout init fail >>",e)}}saveInfo(){sessionStorage.setItem(ve,JSON.stringify(this.info))}}const ce="ModuleGoods";function _e(){return{id:0,name:"",price:0,specs:{size:"xs",width:"",height:""}}}class pt{constructor(){D(this,"info",q(_e()));const t=sessionStorage.getItem(ce);if(t){const e=Se(t);H(this.info,e)}}update(t){H(this.info,t),sessionStorage.setItem(ce,JSON.stringify(this.info))}reset(){H(this.info,_e()),sessionStorage.removeItem(ce)}}class mt{constructor(){D(this,"projectInfo",{title:"Vue Typescript Admin",name:"XXX后台管理平台",logo:dt,link:"https://github.com/Travis-hjs/vue-admin"});D(this,"layout",new ft);D(this,"user",new ut);D(this,"_goods");console.log("%c ModuleStore init","color: #409EFF")}get goods(){return this._goods||(this._goods=new pt),this._goods}}const $=new mt;let be=1e3;function de(){const n=be;return be++,n}function ht(n=10){return{pageSize:n,currentPage:1,total:0}}function Cn(n,t){t||setTimeout(function(){const e=document.querySelector(`${n} .is-error`);if(!e)return;e.scrollIntoView&&e.scrollIntoView({behavior:"smooth"});const o=[".el-input",".el-textarea",".el-select"];let i=null;for(let l=0;l<o.length&&(i=e.querySelector(o[l]),!i);l++);if(!i)return;i.classList.add("apply-shake");function a(){i.removeEventListener("animationend",a),i.removeEventListener("click",a),i.classList.remove("apply-shake")}i.addEventListener("animationend",a),i.addEventListener("click",a)},1e3/60)}function In(n){let t,e=0;function o(){t&&n.callback({width:t.clientWidth,height:t.clientHeight})}const i=$.layout;G(()=>i.info.sidebarOpen,function(){e&&clearTimeout(e),e=setTimeout(o,300)}),K(function(){t=J(n.el,"string")?document.querySelector(n.el):n.el,window.addEventListener("resize",o),o()}),me(function(){e&&clearTimeout(e),window.removeEventListener("resize",o)})}const gt={class:"base-dialog-title f-between f-vertical"},yt={key:0,class:"base-dialog-text"},vt={class:"base-dialog-body"},_t={key:0,class:"base-dialog-footer"},bt=L({name:"base-dialog"}),xt=L({...bt,props:{title:{type:String,default:"提示"},modelValue:{type:Boolean,default:!1},width:{type:String,default:"50%"},closeByMask:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!1}},emits:["close","update:modelValue","afterLeave","afterEnd"],setup(n,{emit:t}){const e=n,o=t,i=de(),a=R(),l=R(),h=R(),p=R(!1),d="flag-dialog-"+i;G(()=>e.modelValue,function(u){u?setTimeout(()=>{p.value=!0},0):p.value=!1},{immediate:!0});function f(u){if(e.appendToBody&&!document.getElementById(d)&&(a.value.remove(),a.value=void 0,document.removeEventListener("click",f)),!e.modelValue||p.value||a.value.contains(u.target))return;const{clientWidth:y,clientHeight:E}=a.value,ee=y/2,te=E/2,ae=u.clientY-te,b=`${(u.clientX-ee)/y*100}vw`,x=`${ae/E*100}vh`;r(b,x)}function r(u,y){const E=h.value;E&&(E.style.setProperty("--contentX",u),E.style.setProperty("--contentY",y))}function s(u){(u&&u.target===a.value&&e.closeByMask||u&&u.target===l.value)&&(o("update:modelValue",!1),o("close"))}function c(){p.value&&r("0","0"),o("afterLeave")}function g(){o("afterEnd")}return K(function(){document.addEventListener("click",f)}),me(function(){document.removeEventListener("click",f)}),(u,y)=>{const E=O("el-scrollbar");return m(),v("section",null,[(m(),w(Ne,{to:"body",disabled:!n.appendToBody},[S(F,{name:"fade"},{default:k(()=>[Z(_("div",{ref_key:"el",ref:a,class:"base-dialog fvc",style:B({zIndex:I(i)}),onClick:s},[S(F,{name:"dialog-move",onAfterLeave:c,onAfterEnter:g},{default:k(()=>[Z(_("div",{ref_key:"contentBox",ref:h,class:"base-dialog-content flex",style:B({width:n.width})},[_("div",gt,[u.$slots.header?T("",!0):(m(),v("h2",yt,N(n.title),1)),Q(u.$slots,"header"),_("i",{class:"base-dialog-icon",ref_key:"closeBtn",ref:l,onClick:s},null,512)]),_("div",vt,[S(E,{"max-height":"76vh"},{default:k(()=>[Q(u.$slots,"default")]),_:3})]),u.$slots.footer?(m(),v("div",_t,[Q(u.$slots,"footer")])):T("",!0)],4),[[ie,p.value]])]),_:3})],4),[[ie,n.modelValue]])]),_:3})],8,["disabled"])),n.appendToBody?(m(),v("div",{key:0,id:d,description:"用来标记 teleport 开启之后插入的节点用"})):T("",!0)])}}}),$t={class:"base-table"},kt={name:"base-table"},wt=L({...kt,props:{data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},checkbox:{type:Boolean,default:!1},isRowClick:{type:Boolean,default:!1},actions:{type:Array,default:()=>[]},checkboxDisabled:{type:Function,default:void 0},maxHeight:{type:Number,default:500}},emits:["select","row"],setup(n,{emit:t}){const e=n,o=t,i=R();Pe(function(){var f;(f=i.value)==null||f.doLayout()});function a(f){o("select",f)}function l(f,r,s){o("row",f,r,s)}function h(f){return["",null,void 0,"null","undefined"].includes(f)}function p(f){return typeof e.checkboxDisabled=="function"?!e.checkboxDisabled(f):!0}function d(f,r,s){return typeof s.formatter=="function"?s.formatter(f,f[r],s):h(f[s.prop])?"-":f[s.prop]}return(f,r)=>{const s=O("el-table-column"),c=O("base-table-option"),g=De("loading");return Z((m(),v("div",$t,[S(I(ze),{ref:"the-table",stripe:"",border:"","max-height":e.maxHeight,data:e.data,onRowClick:l,onSelectionChange:a},{default:k(()=>[e.checkbox?(m(),w(s,{key:0,type:"selection",width:"55",align:"center",fixed:"left",selectable:p})):T("",!0),(m(!0),v(z,null,X(e.columns,u=>(m(),w(s,{key:u.key||u.prop,prop:u.prop,label:u.label,"min-width":u.minWidth,width:u.width,"show-overflow-tooltip":u.tooltip===void 0?!0:u.tooltip,fixed:u.prop==="action-right"?"right":u.fixed,align:u.prop==="action-right"?"center":u.align,"class-name":n.isRowClick&&u.prop!=="action-right"?"base-column-click":"","label-class-name":"base-table-label"},{default:k(({row:y,$index:E})=>[u.slotName?Q(f.$slots,u.slotName,Be(Me({key:0},{row:y,$index:E}))):u.prop==="action-right"?(m(),w(c,{key:1,row:y,index:E,list:e.actions,clickStop:e.isRowClick},null,8,["row","index","list","clickStop"])):(m(),v(z,{key:2},[Y(N(d(y,u.prop,u)),1)],64))]),_:2},1032,["prop","label","min-width","width","show-overflow-tooltip","fixed","align","class-name"]))),128))]),_:3},8,["max-height","data"])])),[[g,n.loading]])}}}),St=_("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),Et={key:0,class:"el-icon-loading"},Lt={name:"base-table-option"},Ct=L({...Lt,props:{max:{type:[Number,String],default:3},row:{type:Object,default:()=>({})},index:{type:Number,default:-1},list:{type:Array,default:[]},clickStop:{type:Boolean,default:!1}},setup(n){const t=n,e=W(()=>t.list.filter(d=>J(d.hide,"function")?!d.hide(t.row):!d.hide)),o=W(()=>{var r,s;const d=Number(t.max),f=e;return((r=f.value)==null?void 0:r.length)>d?(s=f.value)==null?void 0:s.filter((c,g)=>g<d-1):f.value}),i=W(()=>{var r,s;const d=Number(t.max),f=e;return((r=f.value)==null?void 0:r.length)>d?(s=f.value)==null?void 0:s.filter((c,g)=>g>=d-1):[]}),a=(d,f)=>{const r=d[f];return r?J(r,"function")?r(t.row):r:"-"},l=(d,f)=>{const r=d[f];return r?J(r,"function")?r(t.row):r:!1},h=d=>{d.click&&d.click(t.row,t.index)},p=d=>{t.clickStop&&(d.stopPropagation(),d.preventDefault())};return(d,f)=>{const r=O("el-button"),s=O("el-dropdown-item"),c=O("el-dropdown-menu"),g=O("el-dropdown");return m(),v("div",{class:"base-table-option fvc",onClick:p},[(m(!0),v(z,null,X(o.value,(u,y)=>(m(),w(r,{text:"",type:u.type||"primary",key:"btn-"+y,loading:l(u,"loading"),disabled:l(u,"disabled"),onClick:E=>h(u)},{default:k(()=>[u.icon&&!l(u,"loading")?(m(),v("i",{key:0,class:A(["base-table-option-icon",a(u,"icon")])},null,2)):T("",!0),Y(" "+N(a(u,"text")),1)]),_:2},1032,["type","loading","disabled","onClick"]))),128)),i.value.length?(m(),w(g,{key:0},{dropdown:k(()=>[S(c,null,{default:k(()=>[(m(!0),v(z,null,X(i.value,(u,y)=>(m(),w(s,{key:"drop-"+y,disabled:l(u,"disabled")||l(u,"loading"),onClick:E=>h(u)},{default:k(()=>[l(u,"loading")?(m(),v("i",Et)):u.icon&&!l(u,"loading")?(m(),v("i",{key:1,class:A(["base-table-option-icon",a(u,"icon")])},null,2)):T("",!0),Y(" "+N(a(u,"text")),1)]),_:2},1032,["disabled","onClick"]))),128))]),_:1})]),default:k(()=>[S(r,{text:"",type:"primary"},{default:k(()=>[Y("更多"),St]),_:1})]),_:1})):T("",!0)])}}}),It=L({name:"base-pagination"}),Ot=L({...It,props:{pageInfo:{type:Object,default:()=>ht()},pageSizes:{type:Array,default:()=>[10,30,100,200,300]},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},position:{type:String,default:"right"},disabled:{type:Boolean,default:!1}},emits:["change"],setup(n,{emit:t}){const e=n,o=t;function i(l){e.pageInfo.currentPage=1,e.pageInfo.pageSize=l,o("change",{type:"pageSize",value:l})}function a(l){e.pageInfo.currentPage=l,o("change",{type:"currentPage",value:l})}return(l,h)=>{const p=O("el-pagination");return m(),v("div",{class:A(["base-pagination",n.position])},[e.pageInfo.total?(m(),w(p,{key:0,background:"",disabled:e.disabled,layout:e.layout,total:e.pageInfo.total,"current-page":e.pageInfo.currentPage,"page-sizes":e.pageSizes,onSizeChange:i,onCurrentChange:a},null,8,["disabled","layout","total","current-page","page-sizes"])):T("",!0)],2)}}}),Tt="modulepreload",Rt=function(n,t){return new URL(n,t).href},xe={},C=function(t,e,o){let i=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),h=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.all(e.map(p=>{if(p=Rt(p,o),p in xe)return;xe[p]=!0;const d=p.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!o)for(let c=a.length-1;c>=0;c--){const g=a[c];if(g.href===p&&(!d||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${f}`))return;const s=document.createElement("link");if(s.rel=d?"stylesheet":Tt,d||(s.as="script",s.crossOrigin=""),s.href=p,h&&s.setAttribute("nonce",h),document.head.appendChild(s),d)return new Promise((c,g)=>{s.addEventListener("load",c),s.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${p}`)))})}))}return i.then(()=>t()).catch(a=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a})},At={key:0,class:"separator"},Nt={key:1,href:"javascript:void(0)"},Pt=L({__name:"Breadcrumb",setup(n){const t=he(),e=R([]);function o(){const i=t.matched.filter(a=>a.meta&&a.meta.title).map(a=>({path:a.path,meta:{...a.meta}}));e.value=i}return G(()=>t.path,function(){t.path.startsWith("/redirect/")||o()}),o(),(i,a)=>{const l=O("router-link");return m(),w(Ve,{name:"breadcrumb",tag:"div",class:"layout-breadcrumb f-vertical"},{default:k(()=>[(m(!0),v(z,null,X(e.value,(h,p)=>(m(),v("span",{class:A(["layout-breadcrumb-item",{last:p===e.value.length-1}]),key:h.path},[p>0?(m(),v("i",At,"/")):T("",!0),p===e.value.length-1?(m(),v("a",Nt,N(h.meta.title),1)):(m(),w(l,{key:2,to:h.path},{default:k(()=>[Y(N(h.meta.title),1)]),_:2},1032,["to"]))],2))),128))]),_:1})}}}),$e=function(){const n=document.createElement("div");n.style.width="100px",n.style.height="100px",n.style.overflow="scroll",document.body.appendChild(n);const t=n.offsetWidth-n.clientWidth;return n.remove(),t}(),Dt=L({name:"Scrollbar"}),Ee=L({...Dt,props:{thumbColor:{type:String,default:"rgba(147, 147, 153, 0.45)"},thumbSize:{type:Number,default:8},clickUpdateDelay:{type:Number,default:0}},setup(n,{expose:t}){const e=n,o=R(),i=R(),a=R(),l=R(),h=q({height:"",width:""}),p=q({x:{width:"",height:"",left:"",bottom:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor},y:{width:"",height:"",top:"",right:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor}}),d=R(!1);function f(){const b=o.value.parentElement;b.style.overflow="hidden";const x=getComputedStyle(b);h.width=`calc(100% + ${$e}px + ${x.borderLeftWidth} + ${x.borderRightWidth})`,h.height=`calc(100% + ${$e}px + ${x.borderTopWidth} + ${x.borderBottomWidth})`}function r(){p.y.right=p.y.top="0px",p.y.width=e.thumbSize+"px",p.x.bottom=p.x.left="0px",p.x.height=e.thumbSize+"px",p.x.borderRadius=p.y.borderRadius=`${e.thumbSize/2}px`}function s(){const b=i.value;if(b){let x=b.clientHeight/b.scrollHeight*100;x>=100&&(x=0),p.y.height=x+"%",p.y.transform=`translate3d(0, ${b.scrollTop/b.scrollHeight*b.clientHeight}px, 0)`;let P=b.clientWidth/b.scrollWidth*100;P>=100&&(P=0),p.x.width=P+"%",p.x.transform=`translate3d(${b.scrollLeft/b.scrollWidth*b.clientWidth}px, 0, 0)`}}let c=!1,g=!1,u=0,y;function E(b){const x=a.value,P=l.value,j=b.target;x.contains(j)&&(c=!0,g=!1,u=b.clientX-x.getBoundingClientRect().left),P.contains(j)&&(c=!0,g=!0,u=b.clientY-P.getBoundingClientRect().top)}function ee(b){if(!c)return;const x=i.value;if(g){const P=x.getBoundingClientRect().top,j=x.clientHeight;let se=b.clientY-P;x.scrollTop=(se-u)/j*x.scrollHeight}else{const P=x.getBoundingClientRect().left,j=x.clientWidth;let se=b.clientX-P;x.scrollLeft=(se-u)/j*x.scrollWidth}}function te(b){c=!1,o.value.contains(b.target)?e.clickUpdateDelay>0&&(y&&clearTimeout(y),y=setTimeout(s,e.clickUpdateDelay)):d.value=!1}function ae(){d.value=!0,s()}function ge(){c||(d.value=!1)}return K(function(){f(),r(),i.value&&i.value.addEventListener("scroll",s),document.addEventListener("mousedown",E),document.addEventListener("mousemove",ee),document.addEventListener("mouseup",te)}),me(function(){i.value&&i.value.removeEventListener("scroll",s),document.removeEventListener("mousedown",E),document.removeEventListener("mousemove",ee),document.removeEventListener("mouseup",te),y&&clearTimeout(y)}),t({updateWrapStyle:f,updateThumbStyle:s}),(b,x)=>(m(),v("div",{class:"the-scrollbar",ref_key:"el",ref:o,onMouseenter:x[0]||(x[0]=P=>ae()),onMouseleave:x[1]||(x[1]=P=>ge())},[_("div",{ref_key:"wrap",ref:i,class:"the-scrollbar-wrap",style:B(h)},[Q(b.$slots,"default")],4),S(F,{name:"fade"},{default:k(()=>[Z(_("button",{class:"the-scrollbar-thumb",ref_key:"thumbY",ref:l,title:"滚动条-摁住拖拽Y轴",style:B(p.y)},null,4),[[ie,d.value]])]),_:1}),S(F,{name:"fade"},{default:k(()=>[Z(_("button",{class:"the-scrollbar-thumb",ref_key:"thumbX",ref:a,title:"滚动条-摁住拖拽X轴",style:B(p.x)},null,4),[[ie,d.value]])]),_:1})],544))}}),Bt={class:"the-layout-header"},Mt={class:"the-layout-navbar flex"},zt={class:"user-info-box f-vertical"},Vt=["src"],Ht={class:"the-tag green mgr-10"},qt=_("span",null,"退出登录",-1),Wt={key:0,class:"the-layout-tag-box"},Xt={class:"the-layout-tags"},jt=["onClick"],Yt="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",Jt=L({__name:"HeaderBar",setup(n){const t=he(),e=He(),o=$.layout.info,i=$.user.info;function a(){o.sidebarOpen=!o.sidebarOpen}function l(){$.user.reset(),e.push("/login").then(()=>{o.historyViews=[],gn()})}function h(d){return d.path===t.path&&JSON.stringify(d.query)===JSON.stringify(t.query)&&JSON.stringify(d.params)===JSON.stringify(t.params)}function p(d){o.historyViews.splice(d,1)}return G(()=>t.path,function(){o.historyViews.some(f=>h(f))||o.historyViews.push({name:t.name,path:t.path,query:t.query,params:t.params,meta:t.meta})},{immediate:!0}),(d,f)=>{const r=O("svg-icon"),s=O("router-link");return m(),v("div",Bt,[_("div",Mt,[_("div",{class:A(["fvc hamburger",{"hamburger-active":I(o).sidebarOpen}]),onClick:f[0]||(f[0]=c=>a())},[S(r,{name:"hamburger"})],2),S(Pt,{class:"f1"}),_("div",zt,[_("img",{class:"avatar",src:I(i).avatar||Yt},null,8,Vt),_("span",Ht,N(I(i).name||I(i).account||"用户未设置昵称"),1),_("button",{class:"logout f-vertical",onClick:f[1]||(f[1]=c=>l())},[S(r,{name:"exit"}),qt])])]),I(o).showTagsView?(m(),v("div",Wt,[S(I(Ee),null,{default:k(()=>[_("div",Xt,[(m(!0),v(z,null,X(I(o).historyViews,(c,g)=>(m(),w(s,{class:A(["the-layout-tag",{"the-layout-tag-on":h(c)}]),key:g+c.path,to:{path:c.path,query:c.query,params:c.params}},{default:k(()=>[_("span",null,N(c.meta.title),1),_("i",{class:"close",onClick:qe(u=>p(g),["prevent","stop"])},"-",8,jt)]),_:2},1032,["class","to"]))),128))])]),_:1})])):T("",!0)])}}}),Ft={class:"f1"},Ut=_("i",{class:"the-layout-menu-arrow"},null,-1),Gt=["href"],Kt={class:"f1"},Qt={class:"f1"},Zt=["href"],en=L({__name:"MenuItem",props:{level:{type:Number,default:1},info:{type:Object,default:()=>({title:"-"})}},setup(n){const t=n;function e(r){return!!(r.children&&r.children.length>0)}function o(r){let s=0;const c=r.children,g=$.layout.menuSizeInfo;return r.isOpen&&c&&c.length>0&&c.forEach(u=>{const y=e(u)?g.titleHeight:g.itemHeight;s+=y,s+=o(u)}),s}const i=W(function(){const r=t.info;return{"the-layout-menu-title f-vertical":!0,"the-layout-menu-selected":r.isActive,"the-layout-menu-open":r.isOpen,"the-layout-menu-actived":r.hasActive,"the-layout-menu-active-title":r.hasActive&&t.level===1}});function a(r){return{"the-layout-menu-item f-vertical":!0,"the-layout-menu-selected":r.isActive}}const l=q({paddingLeft:""}),h=q({paddingLeft:""}),p=W(function(){return{height:o(t.info)+"px"}}),d=R();function f(){t.info.isOpen=!t.info.isOpen}return K(function(){const r=d.value;if(t.level>=1){const s=getComputedStyle(r.children[0]),c=parseFloat(s.paddingLeft);if(isNaN(c))return;l.paddingLeft=c*t.level+"px",h.paddingLeft=c*(t.level+1)+"px"}}),(r,s)=>{const c=O("svg-icon"),g=O("router-link"),u=O("MenuItem",!0);return m(),v("div",{class:"the-layout-menu",ref_key:"menuBox",ref:d},[e(n.info)?(m(),v("button",{key:0,class:A(i.value),style:B(l),onClick:s[0]||(s[0]=y=>f())},[n.info.icon?(m(),w(c,{key:0,name:n.info.icon},null,8,["name"])):T("",!0),_("span",Ft,N(n.info.title),1),Ut],6)):(m(),v(z,{key:1},[n.info.link?(m(),v("a",{key:0,class:A(i.value),style:B(l),href:n.info.link,target:"_blank"},[n.info.icon?(m(),w(c,{key:0,name:n.info.icon},null,8,["name"])):T("",!0),_("span",Kt,N(n.info.title),1)],14,Gt)):(m(),w(g,{key:1,class:A(i.value),style:B(l),to:n.info.path},{default:k(()=>[n.info.icon?(m(),w(c,{key:0,name:n.info.icon},null,8,["name"])):T("",!0),_("span",Qt,N(n.info.title),1)]),_:1},8,["class","style","to"]))],64)),n.info.children&&n.info.children.length>0?(m(),v("div",{key:2,class:"the-layout-menu-list",style:B(p.value)},[(m(!0),v(z,null,X(n.info.children,y=>(m(),v("div",{key:y.key},[e(y)?(m(),w(u,{key:0,info:y,level:n.level+1},null,8,["info","level"])):(m(),v(z,{key:1},[y.link?(m(),v("a",{key:0,class:A(a(y)),style:B(h),href:y.link,target:"_blank"},[y.icon?(m(),w(c,{key:0,name:y.icon},null,8,["name"])):T("",!0),_("span",null,N(y.title),1)],14,Zt)):(m(),w(g,{key:1,class:A(a(y)),style:B(h),to:y.path},{default:k(()=>[y.icon?(m(),w(c,{key:0,name:y.icon},null,8,["name"])):T("",!0),_("span",null,N(y.title),1)]),_:2},1032,["class","style","to"]))],64))]))),128))],4)):T("",!0)],512)}}}),tn=L({__name:"Menu",props:{mergeOnlyOneChild:{type:Boolean,default:!1},onlyMergeFirst:{type:Boolean,default:!1}},setup(n){const t=n,e=he();function o(r,s){r=JSON.parse(JSON.stringify(r));const c=[];for(let g=0;g<r.length;g++){const u=r[g],y={key:s?`${s}-${g}`:g.toString(),isOpen:!1,isActive:!1,hasActive:!1,children:[],path:u.path,...u.meta};if(!y.hidden){c.push(y);const E=u.children;E&&E.length>0&&(y.children=o(E,y.key))}}return c}function i(r){r=JSON.parse(JSON.stringify(r));const s=[];for(let c=0;c<r.length;c++){const g=r[c],u=g.children;u&&u.length>0?u.length===1?(u[0].key=g.key,s.push(u[0]),u[0].children&&u[0].children.length>0&&!t.onlyMergeFirst&&(u[0].children=i(u[0].children))):(s.push(g),t.onlyMergeFirst||(g.children=i(u))):s.push(g)}return s}let a=o(Ie($.layout.completeRouters));t.mergeOnlyOneChild&&(a=i(a));const l=R(a);let h=[];function p(r){for(let s=0;s<r.length;s++){const c=r[s];c.hasActive=!1,c.isOpen&&(!c.children||c.children&&c.children.length===0)&&(c.isOpen=!1),c.isActive=c.path===e.path,c.isActive&&(h=c.key.split("-").map(g=>Number(g))),c.children&&c.children.length>0&&p(c.children)}}function d(r,s=0){const c=h[s],g=r[c];g.hasActive=g.isOpen=!0,s<h.length-1&&d(g.children,s+1)}function f(){h=[],p(l.value),h.length>0&&d(l.value)}return G(()=>e.path,function(){f()}),K(function(){f();function r(s,c=0){const g=document.querySelector(s);return g?g.clientHeight:(console.log("%c 找不到节点 >>","color: #ff4949",s,"已使用默认值 >>",c),c)}$.layout.menuSizeInfo.titleHeight=r(".the-layout-menu .the-layout-menu-title",50),$.layout.menuSizeInfo.itemHeight=r(".the-layout-menu .the-layout-menu-item",44)}),(r,s)=>(m(!0),v(z,null,X(l.value,c=>(m(),w(en,{key:c.key,info:c},null,8,["info"]))),128))}}),nn={class:"the-layout-sidebar"},on={key:0,class:"the-logo-box"},an=["src"],sn=["title"],rn=L({__name:"Sidebar",setup(n){const t=$.layout.info,e=$.projectInfo;return(o,i)=>{const a=O("router-link");return m(),v("div",nn,[S(I(Ee),{clickUpdateDelay:300,thumbSize:10},{default:k(()=>[S(F,{name:"fade"},{default:k(()=>[I(t).showSidebarLogo?(m(),v("div",on,[S(a,{class:"the-logo-link f-vertical",to:"/"},{default:k(()=>[_("img",{class:"the-logo",src:I(e).logo},null,8,an),_("h1",{class:"the-logo-title ellipsis",title:I(e).title},N(I(e).title),9,sn)]),_:1})])):T("",!0)]),_:1}),S(tn,{mergeOnlyOneChild:!0,onlyMergeFirst:!0})]),_:1})])}}}),ln=L({name:"Layout"}),ne=L({...ln,setup(n){const t=$.layout.info;function e(d){let f=[];for(let r=0;r<d.length;r++){const s=d[r],c=s.children;c&&c.length>0&&(f=f.concat(e(c))),s.meta.keepAlive&&s.name&&f.push(s.name)}return f.filter(r=>r)}const o=e($.layout.completeRouters),i=R(),a=R(!1);let l;function h(){l.scrollTo({top:0,left:0,behavior:"smooth"})}function p(){a.value=l.scrollTop>document.documentElement.clientHeight}return K(function(){l=i.value,l.addEventListener("scroll",p),p()}),(d,f)=>{const r=O("router-view");return m(),v("div",{class:A(["the-layout",I(t).layoutMode,{"has-tags-view":I(t).showTagsView},{"collapsed-sidebar":!I(t).sidebarOpen}])},[S(Jt),S(rn),_("div",{class:"the-layout-content",ref_key:"contentBox",ref:i},[S(r,{class:"the-layout-page"},{default:k(({Component:s,route:c})=>[S(F,{name:"fadeSlideX",mode:"out-in"},{default:k(()=>[(m(),w(Xe,{include:I(o)},[(m(),w(We(s),{key:c.path}))],1032,["include"]))]),_:2},1024)]),_:1})],512),_("button",{class:A(["the-layout-totop",{"the-layout-totop-hide":!a.value}]),title:"返回顶部",onClick:f[0]||(f[0]=s=>h())},null,2)],2)}}}),cn=L({name:"page-404"}),un={class:"page-404 fvc"},dn=_("h4",{class:"title"},"当前页面不存在",-1);function fn(n,t,e,o,i,a){const l=O("router-link");return m(),v("div",un,[_("div",null,[dn,S(l,{class:"goback",to:"/"},{default:k(()=>[Y("返回首页")]),_:1})])])}const fe=we(cn,[["render",fn]]),pn=[{path:"/",name:"index",redirect:"/home",component:ne,meta:{title:"首页",icon:"home"},children:[{path:"/home",meta:{title:"首页展示",icon:"guide"},component:()=>C(()=>import("./home-BBg7fENk.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)},{path:"/nested",name:"nested",redirect:"/nested/menu-1",meta:{title:"多级菜单嵌套",icon:"tree"},component:()=>C(()=>import("./nested-Bq1bBcSV.js"),__vite__mapDeps([4,1,2,5]),import.meta.url),children:[{path:"/nested/menu-1",name:"nested/menu-1",meta:{title:"el-plus 表格"},component:()=>C(()=>import("./menu-1-ClkQdvi8.js"),__vite__mapDeps([6,1,2,7]),import.meta.url)},{path:"/nested/menu-2",name:"nested/menu-2",meta:{title:"el-plus 表单验证"},component:()=>C(()=>import("./menu-2-BJP70cXS.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/nested/three-level",name:"nested/three-level",meta:{title:"三级菜单"},redirect:"/nested/three-level/menu-1",component:()=>C(()=>import("./nested-Bq1bBcSV.js"),__vite__mapDeps([4,1,2,5]),import.meta.url),children:[{path:"/nested/three-level/menu-1",name:"/nested/three-level/menu-1",meta:{title:"菜单 3-1"},component:()=>C(()=>import("./menu-1-ClkQdvi8.js"),__vite__mapDeps([6,1,2,7]),import.meta.url)},{path:"/nested/three-level/menu-2",name:"/nested/three-level/menu-2",meta:{title:"菜单 3-2"},component:()=>C(()=>import("./menu-2-BJP70cXS.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)}]},{path:"/nested/four-level",name:"nested/four-level",meta:{title:"三级菜单-2"},redirect:"/nested/four-level/menu-1",component:()=>C(()=>import("./nested-Bq1bBcSV.js"),__vite__mapDeps([4,1,2,5]),import.meta.url),children:[{path:"/nested/four-level/menu-1",name:"/nested/four-level/menu-1",meta:{title:"菜单 3-2-1"},component:()=>C(()=>import("./menu-1-ClkQdvi8.js"),__vite__mapDeps([6,1,2,7]),import.meta.url)}]},{path:"/nested/menu-3",name:"nested/menu-3",meta:{title:"菜单 2-3"},component:()=>C(()=>import("./menu-3-BvHXH3Fs.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)}]},{path:"/link-baidu",name:"link-baidu",component:fe,meta:{title:"百度一下",icon:"baidu",link:"https://www.baidu.com"}},{path:"/menu-4",name:"menu-4",meta:{title:"换行菜单标题换行菜单标题",icon:"nested"},component:()=>C(()=>import("./menu-4-C0h-YWMv.js"),__vite__mapDeps([12,1,2,13]),import.meta.url)}]},{path:"/example",name:"example",component:ne,meta:{title:"示例页栏目",icon:"menu"},redirect:"/example/request",children:[{path:"/example/request",name:"example-request",meta:{title:"http-请求示例",keepAlive:!0},component:()=>C(()=>import("./request-CNvNPapA.js"),__vite__mapDeps([14,15,1,2,16]),import.meta.url)},{path:"/example/components",name:"example-components",meta:{title:"自定义组件"},component:()=>C(()=>import("./the-components-DifZGUax.js"),__vite__mapDeps([17,15,1,2,18]),import.meta.url)},{path:"/example/tsx",name:"example-tsx",meta:{title:"tsx-示例"},component:()=>C(()=>import("./example-CGgYdUf-.js"),__vite__mapDeps([19,1,2,20]),import.meta.url)}]},{path:"/icon",name:"icon",meta:{title:"图标栏目",auth:[0]},component:ne,redirect:"/icon/svg-icons",children:[{path:"/icon/svg-icons",name:"svg-icons",component:()=>C(()=>import("./index-CT19Wo1Y.js"),__vite__mapDeps([21,1,2,22]),import.meta.url),meta:{title:"svg-图标",icon:"svg-icon"}}]},{path:"/"+$.projectInfo.link,name:"GitHub-Travis",component:fe,meta:{title:"项目地址",icon:"github",link:$.projectInfo.link,auth:[0]}},{path:"/menu",name:"menu",meta:{title:"菜单管理"},component:ne,redirect:"/menu/list",children:[{path:"/menu/list",name:"menu-list",component:()=>C(()=>import("./index-YQ3wOxDb.js"),__vite__mapDeps([23,1,2,24]),import.meta.url),meta:{title:"菜单管理",icon:"menu"}}]}],U={path:"/",query:{}},pe="redirect404";let M;function Le(n){const t=[],e=$.user.info.type;for(let o=0;o<n.length;o++){const i=n[o],a=i.meta?i.meta.auth:void 0;(!a||a&&a.includes(e))&&(i.children&&i.children.length>0&&(i.children=Le(i.children)),t.push(i))}return t}async function mn(){return Le(pn)}function hn(n,t){M=n,M.beforeEach(async function(e,o,i){if(re.start(),$.user.info.token)if($.layout.addRouters.length>0)i();else{$.layout.addRouters=await mn();for(let a=0;a<$.layout.addRouters.length;a++){const l=$.layout.addRouters[a];M.addRoute(l)}M.hasRoute(pe)||M.addRoute({...t[1],path:"/:catchAll(.*)",name:pe}),$.layout.completeRouters=t.concat($.layout.addRouters),i({...e,replace:!0})}else e.path==="/login"?i():(U.path=e.path,U.query=e.query,i({path:"/login"}),re.done())}),M.afterEach(e=>{re.done(),e.meta&&e.meta.title&&(document.title=e.meta.title)})}function On(){M.replace({path:U.path,query:U.query})}function gn(){const n=$.layout.addRouters;for(let t=n.length-1;t>-1;t--){const e=n[t];e.name&&M.hasRoute(e.name)&&M.removeRoute(e.name)}U.path="/",U.query={},M.removeRoute(pe),$.layout.addRouters=$.layout.completeRouters=[]}const Ce=[{path:"/login",name:"login",component:()=>C(()=>import("./login-1LCturVr.js"),__vite__mapDeps([25,1,2,15,26]),import.meta.url),meta:{hidden:!0,title:"请登录"}},{path:"/404",name:"page-404",component:fe,meta:{hidden:!0,title:"不存在该页面"}},{path:"/401",name:"page-401",component:()=>C(()=>import("./page-401-Dc9JQz5p.js"),__vite__mapDeps([27,1,2,28]),import.meta.url),meta:{hidden:!0,title:"暂无权限访问"}}];function Ie(n){n=JSON.parse(JSON.stringify(n));const t=[];for(let e=0;e<n.length;e++){const o=n[e];(!o.meta||o.meta&&!o.meta.hidden)&&(t.push(o),o.children&&o.children.length>0&&(o.children=Ie(o.children)))}return t}const Oe=je({history:Ye(),routes:Ce});hn(Oe,Ce);const yn="1.1.1",ue=[];function vn(n,t){let e;ue.length>1?e=ue.shift():(e=document.createElement("div"),e.className="ripple");const o=t.getBoundingClientRect(),i=t.getAttribute("color");let a=Math.max(o.width,o.height);a>200&&(a=200),e.style.height=e.style.width=a+"px",e.style.backgroundColor=i||"rgba(255, 255, 255, .45)",t.appendChild(e);const l=n.touches,h=l?l[0].clientY:n.clientY,p=l?l[0].clientX:n.clientX,d=h-o.top-e.offsetHeight/2,f=p-o.left-e.offsetWidth/2;e.style.top=d+"px",e.style.left=f+"px";function r(){e.removeEventListener("animationend",r),t.removeChild(e),ue.push(e)}e.addEventListener("animationend",r)}function _n(n={}){const t=document,e=`__${Math.random().toString(36).slice(2,7)}`,o={box:`msg-box${e}`,hide:`hide${e}`,text:`msg-text${e}`,icon:`msg-icon${e}`},i=t.createElement("style");i.textContent=`
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
  `.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),t.head.appendChild(i);const a=[];function l(d){let f=10;for(let r=0;r<a.length;r++){const s=a[r];if(d&&d===s)break;f+=s.clientHeight+20}return f}function h(d){for(let f=0;f<a.length;f++)if(a[f]===d){a.splice(f,1);break}d.classList.add(o.hide),a.forEach(function(f){f.style.top=`${l(f)}px`})}function p(d,f="info",r){const s=t.createElement("div");s.className=`${o.box} ${f}`,s.style.top=`${l()}px`,s.style.zIndex=Te.message,s.innerHTML=`
    <span class="${o.icon}"></span>
    <span class="${o.text}">${d}</span>
    `,a.push(s),t.body.appendChild(s);function c(){s.removeEventListener("animationend",c),setTimeout(h,r||n.duration||3e3,s)}s.addEventListener("animationend",c);function g(){getComputedStyle(s).opacity==="0"&&(s.removeEventListener("transitionend",g),s.remove())}s.addEventListener("transitionend",g)}return{show:p,info(d){p(d,"info")},success(d){p(d,"success")},warning(d){p(d,"warning")},error(d){p(d,"error")}}}function bn(){const n=document,t=`__${Math.random().toString(36).slice(2,7)}`,e={mask:`dialog-mask${t}`,popup:`dialog-popup${t}`,title:`dialog-title${t}`,content:`dialog-content${t}`,footer:`dialog-footer${t}`,confirm:`confirm${t}`,fade:`fade${t}`,show:`show${t}`,hide:`hide${t}`},o=`
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
  `,i=n.createElement("style");i.textContent=o.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),n.head.appendChild(i);const a={x:"0vw",y:"0vh"};n.addEventListener("click",function(h){const{innerWidth:p,innerHeight:d}=window,f=p/2,r=d/2,s=h.clientY-r,c=h.clientX-f;a.x=`${c/p*100}vw`,a.y=`${s/d*100}vh`},!0);function l(h){const p=n.createElement("section");p.className=e.mask,p.style.zIndex=Te.dialog,p.style.setProperty("--x",a.x),p.style.setProperty("--y",a.y),a.x="0vw",a.y="0vh";const d=h.cancelText?`<button class="el-button">${h.cancelText}</button>`:"";p.innerHTML=`
    <div class="${e.popup}">
      <h2 class="${e.title}">${typeof h.title=="string"?h.title:"提示"}</h2>
      <div class="${e.content}">${h.content}</div>
      <div class="${e.footer}">
        ${d}
        <button class="el-button el-button--primary ${e.confirm}">${h.confirmText||"确认"}</button>
      </div>
    </div>
    `,n.body.appendChild(p),p.addEventListener("transitionend",function(r){r.target===p&&p.classList.contains(e.hide)&&p.remove()});function f(){p.classList.add(e.hide)}h.cancelText&&(p.querySelector(`.${e.footer} button`).onclick=function(){f(),h.cancel&&h.cancel()}),p.querySelector(`.${e.confirm}`).onclick=function(){f(),h.confirm&&h.confirm()}}return{show:l}}const Te={get message(){return(de()+20).toString()},get dialog(){return(de()+10).toString()}},ke=_n({duration:3600}),xn=bn(),Tn=xn.show;window.version=yn;const V=Je(Qe);V.use(Fe,{locale:Ue});V.directive("copy",{mounted(n,t){n.addEventListener("click",function(){const e=n.getAttribute("copy-data")||t.value||"";ot(e,()=>ke.success("复制成功"),o=>ke.success(o))})}});V.directive("ripple",{mounted(n){const t=it()?"touchstart":"mousedown";n.setAttribute("ripple",""),n.addEventListener(t,function(e){vn(e,n)})}});V.component("svg-icon",tt);V.component("base-dialog",xt);V.component("base-table",wt);V.component("base-table-option",Ct);V.component("base-pagination",Ot);V.use(Oe);V.mount("#app");export{we as _,ke as a,Tn as b,ot as c,Ln as d,Ee as e,wn as f,nt as g,C as h,Sn as i,Se as j,de as k,In as l,H as m,On as o,En as r,$ as s,ht as u,Cn as v};
