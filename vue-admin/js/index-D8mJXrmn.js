function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./home--q0u9PVg.js","./vendor-Dcy3W3ba.js","../css/vendor-BUMXTAWU.css","./index.vue_vue_type_style_index_0_lang-Bz5zxXpe.js","../css/index-CBMF1Z1B.css","../css/home-NLRWRYAt.css","./nested-DXRH8ESg.js","../css/nested-DBbt7j1J.css","./menu-1-zn3DaFvc.js","../css/menu-1-PIQFC6DV.css","./menu-2-DpWL6Yq1.js","../css/menu-2-DwSbhe9C.css","./menu-3-DB0eqVDI.js","../css/menu-3-C1x6D_tQ.css","./menu-4-_ZmjEgD9.js","../css/menu-4-B_QkhR3M.css","./request-Dq2UOTiT.js","./common-DqHSRvUU.js","../css/request-BjYaB_Vm.css","./the-components-HDEmz_ex.js","../css/the-components-IJgq8Frg.css","./example-B5wFxtuz.js","../css/example-CJnj_JQw.css","./index-CsKXL3Yx.js","../css/index-CJ5TRbCj.css","./login-DBB8e3aq.js","../css/login-C2zo-VT6.css","./page-401-DiBRxwLh.js","../css/page-401-hNHv4Vr6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var Re=Object.defineProperty;var Ae=(o,t,e)=>t in o?Re(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var R=(o,t,e)=>(Ae(o,typeof t!="symbol"?t+"":t,e),e);import{d as I,r as P,o as h,c as S,a as Z,b,e as g,n as N,f as C,w as J,g as X,h as xe,i as E,j as L,k as Q,v as ee,T as H,l as A,t as O,m as B,p as G,u as w,q as Be,s as V,x as te,y as $e,F as q,z as Ne,A as fe,B as De,C as Pe,D as Fe,K as Me,E as Ve,G as ze,H as qe,N as se,I as He,J as je,L as We}from"./vendor-Dcy3W3ba.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Je=I({name:"App"}),ke=(o,t)=>{const e=o.__vccOpts||o;for(const[n,i]of t)e[n]=i;return e};function Xe(o,t,e,n,i,s){const f=P("router-view");return h(),S(f)}const Ye=ke(Je,[["render",Xe]]),Ue=["xlink:href"],Ge=I({name:"SvgIcon"}),Ke=I({...Ge,props:{name:{type:String,required:!0,default:""},className:{type:String,default:""}},setup(o){const t=o,e=Z(()=>`#icon-${t.name}`),n=Z(function(){return t.className?"svg-icon "+t.className:"svg-icon"});return(i,s)=>(h(),b("svg",{class:N(n.value),"aria-hidden":"true"},[g("use",{"xlink:href":e.value},null,8,Ue)],2))}});let pe=1e3;function ue(){const o=pe;return pe++,o}const Ze={class:"base-dialog-title f-between f-vertical"},Qe={key:0,class:"base-dialog-text"},et={class:"base-dialog-body"},tt={key:0,class:"base-dialog-footer"},nt={name:"base-dialog"},ot=I({...nt,props:{title:{type:String,default:"提示"},show:{type:Boolean,default:!1},width:{type:String,default:"50%"},closeByMask:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1}},emits:["close","update:show","afterLeave","afterEnd"],setup(o,{emit:t}){const e=o,n=t,i=ue(),s=C(),f=C(),m=C(),l=C(!1);J(()=>e.show,function(u){u?setTimeout(()=>{l.value=!0},0):l.value=!1},{immediate:!0});function d(u){if(!e.show||l.value||s.value.contains(u.target))return;const{clientWidth:y,clientHeight:v}=s.value,F=y/2,Y=v/2,U=u.clientY-Y,oe=`${(u.clientX-F)/y*100}vw`,_=`${U/v*100}vh`;p(oe,_)}function p(u,y){const v=m.value;v&&(v.style.setProperty("--content-x",u),v.style.setProperty("--content-y",y))}function c(u){(u&&u.target===s.value&&e.closeByMask||u&&u.target===f.value)&&(n("update:show",!1),n("close"))}function r(){l.value&&p("0","0"),n("afterLeave")}function a(){n("afterEnd")}return X(function(){document.addEventListener("click",d)}),xe(function(){document.removeEventListener("click",d)}),(u,y)=>(h(),b("section",null,[(h(),S(Be,{to:"body",disabled:!e.appendToBody},[E(H,{name:"fade"},{default:L(()=>[Q(g("div",{ref_key:"el",ref:s,class:"base-dialog fvc",style:A({zIndex:w(i)}),onClick:c},[E(H,{name:"dialog-move",onAfterLeave:r,onAfterEnter:a},{default:L(()=>[Q(g("div",{ref_key:"contentBox",ref:m,class:"base-dialog-content flex",style:A({width:e.width})},[g("div",Ze,[u.$slots.header?B("",!0):(h(),b("h2",Qe,O(o.title),1)),G(u.$slots,"header"),g("i",{class:"base-dialog-icon",ref_key:"closeBtn",ref:f,onClick:c},null,512)]),g("div",et,[G(u.$slots,"default")]),u.$slots.footer?(h(),b("div",tt,[G(u.$slots,"footer")])):B("",!0)],4),[[ee,l.value]])]),_:3})],4),[[ee,e.show]])]),_:3})],8,["disabled"]))]))}}),it="modulepreload",st=function(o,t){return new URL(o,t).href},he={},k=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){const s=document.getElementsByTagName("link"),f=document.querySelector("meta[property=csp-nonce]"),m=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));i=Promise.all(e.map(l=>{if(l=st(l,n),l in he)return;he[l]=!0;const d=l.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(!!n)for(let a=s.length-1;a>=0;a--){const u=s[a];if(u.href===l&&(!d||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${p}`))return;const r=document.createElement("link");if(r.rel=d?"stylesheet":it,d||(r.as="script",r.crossOrigin=""),r.href=l,m&&r.setAttribute("nonce",m),document.head.appendChild(r),d)return new Promise((a,u)=>{r.addEventListener("load",a),r.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${l}`)))})}))}return i.then(()=>t()).catch(s=>{const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=s,window.dispatchEvent(f),!f.defaultPrevented)throw s})};function at(o){return Object.prototype.toString.call(o).match(/\[object (\S*)\]/)[1].toLocaleLowerCase()}function we(o,t){return at(o)===t}function M(o,t){for(const e in t)if(Object.prototype.hasOwnProperty.call(o,e)){const n=t[e],i=o[e];we(i,"object")?M(i,n):o[e]=n}}function rt(o,t,e){if(o=o.replace(/(^\s*)|(\s*$)/g,""),!o){e&&e("复制的内容不能为空！");return}const n="the-clipboard";let i=document.getElementById(n);i||(i=document.createElement("textarea"),i.id=n,i.readOnly=!0,i.style.cssText="font-size: 15px; position: fixed; top: -1000%; left: -1000%;",document.body.appendChild(i)),i.value=o,i.select(),i.setSelectionRange(0,i.value.length),document.execCommand("copy")?t&&t():e&&e("复制失败")}function bn(o,t,e){let n=o.toString().trim();if(n.length===0)return"";const i="";return n=n.replace(/[^0-9]+/ig,""),i+n}function Ee(o,t={}){let e=t;if(we(o,"string"))try{e=JSON.parse(o)}catch(n){console.warn("JSON格式化对象错误 >>",n)}return e}function lt(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)}function ct(o){const e=`; ${document.cookie}`.split(`; ${o}=`);return e.length===2?e.pop().split(";").shift():""}function ut(o,t,e){let n=`${o}=${t}; path=/`;e&&(e.expires&&(n+=`; expires=${e.expires.toUTCString()}`),e.domain&&(n+=`; domain=${e.domain}`)),document.cookie=n}function dt(o,t){const e="expires=Thu, 01 Jan 1970 00:00:00 GMT";document.cookie=`${o}=; path=/; ${e}`}const ae="ModuleUser";function ge(){return{id:"",name:"",type:"",token:"",avatar:"",account:"",password:""}}const ft=3,mt=24*60*60*1e3;class pt{constructor(){R(this,"info",V(ge()));this.init()}init(){const t=ct(ae);if(t){const e=Ee(t);M(this.info,e)}}update(t){M(this.info,t),ut(ae,JSON.stringify(this.info),{expires:new Date(Date.now()+ft*mt)})}reset(){M(this.info,ge()),dt(ae)}}const ht=""+new URL("../image/logo-CPmPqqKk.png",import.meta.url).href,ve="ModuleLayout";class gt{constructor(){R(this,"addRouters",[]);R(this,"completeRouters",[]);R(this,"info",V({showTagsView:!0,sidebarOpen:!0,showSidebarLogo:!0,historyViews:[],layoutMode:""}));R(this,"menuSizeInfo",V({titleHeight:0,itemHeight:0}));this.init(),J(this.info,this.saveInfo.bind(this))}init(){const t=sessionStorage.getItem(ve);try{t&&M(this.info,JSON.parse(t))}catch(e){console.log("ModuleLayout init fail >>",e)}}saveInfo(){sessionStorage.setItem(ve,JSON.stringify(this.info))}}const re="ModuleGoods";function ye(){return{id:0,name:"",price:0,specs:{size:"xs",width:"",height:""}}}class vt{constructor(){R(this,"info",V(ye()));const t=sessionStorage.getItem(re);if(t){const e=Ee(t);M(this.info,e)}}update(t){M(this.info,t),sessionStorage.setItem(re,JSON.stringify(this.info))}reset(){M(this.info,ye()),sessionStorage.removeItem(re)}}class yt{constructor(){R(this,"projectInfo",{title:"Vue Typescript Admin",name:"XXX后台管理平台",logo:ht,link:"https://github.com/Travis-hjs/vue-admin",email:"1141752341@qq.com"});R(this,"layout",new gt);R(this,"user",new pt);R(this,"_goods");console.log("%c ModuleStore init","color: #409EFF")}get goods(){return this._goods||(this._goods=new vt),this._goods}}const $=new yt,_t={key:0,class:"separator"},bt={key:1,href:"javascript:void(0)"},xt=I({__name:"Breadcrumb",setup(o){const t=fe(),e=C([]);function n(){const i=t.matched.filter(s=>s.meta&&s.meta.title).map(s=>({path:s.path,meta:{...s.meta}}));e.value=i}return J(()=>t.path,function(){t.path.startsWith("/redirect/")||n()}),n(),(i,s)=>{const f=P("router-link");return h(),S(Ne,{name:"breadcrumb",tag:"div",class:"layout-breadcrumb f-vertical"},{default:L(()=>[(h(!0),b(q,null,te(e.value,(m,l)=>(h(),b("span",{class:N(["layout-breadcrumb-item",{last:l===e.value.length-1}]),key:m.path},[l>0?(h(),b("i",_t,"/")):B("",!0),l===e.value.length-1?(h(),b("a",bt,O(m.meta.title),1)):(h(),S(f,{key:2,to:m.path},{default:L(()=>[$e(O(m.meta.title),1)]),_:2},1032,["to"]))],2))),128))]),_:1})}}}),_e=function(){const o=document.createElement("div");o.style.width="100px",o.style.height="100px",o.style.overflow="scroll",document.body.appendChild(o);const t=o.offsetWidth-o.clientWidth;return o.remove(),t}(),$t={name:"Scrollbar"},Se=I({...$t,props:{thumbColor:{type:String,default:"rgba(147, 147, 153, 0.45)"},thumbSize:{type:Number,default:8},clickUpdateDelay:{type:Number,default:0}},setup(o,{expose:t}){const e=o,n=C(),i=C(),s=C(),f=C(),m=V({height:"",width:""}),l=V({x:{width:"",height:"",left:"",bottom:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor},y:{width:"",height:"",top:"",right:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor}}),d=C(!1);function p(){const _=n.value.parentElement;_.style.overflow="hidden";const x=getComputedStyle(_);m.width=`calc(100% + ${_e}px + ${x.borderLeftWidth} + ${x.borderRightWidth})`,m.height=`calc(100% + ${_e}px + ${x.borderTopWidth} + ${x.borderBottomWidth})`}function c(){l.y.right=l.y.top="0px",l.y.width=e.thumbSize+"px",l.x.bottom=l.x.left="0px",l.x.height=e.thumbSize+"px",l.x.borderRadius=l.y.borderRadius=`${e.thumbSize/2}px`}function r(){const _=i.value;if(_){let x=_.clientHeight/_.scrollHeight*100;x>=100&&(x=0),l.y.height=x+"%",l.y.transform=`translate3d(0, ${_.scrollTop/_.scrollHeight*_.clientHeight}px, 0)`;let T=_.clientWidth/_.scrollWidth*100;T>=100&&(T=0),l.x.width=T+"%",l.x.transform=`translate3d(${_.scrollLeft/_.scrollWidth*_.clientWidth}px, 0, 0)`}}let a=!1,u=!1,y=0,v;function F(_){const x=s.value,T=f.value,z=_.target;x.contains(z)&&(a=!0,u=!1,y=_.clientX-x.getBoundingClientRect().left),T.contains(z)&&(a=!0,u=!0,y=_.clientY-T.getBoundingClientRect().top)}function Y(_){if(!a)return;const x=i.value;if(u){const T=x.getBoundingClientRect().top,z=x.clientHeight;let ie=_.clientY-T;x.scrollTop=(ie-y)/z*x.scrollHeight}else{const T=x.getBoundingClientRect().left,z=x.clientWidth;let ie=_.clientX-T;x.scrollLeft=(ie-y)/z*x.scrollWidth}}function U(_){a=!1,n.value.contains(_.target)?e.clickUpdateDelay>0&&(v&&clearTimeout(v),v=setTimeout(r,e.clickUpdateDelay)):d.value=!1}function me(){d.value=!0,r()}function oe(){a||(d.value=!1)}return X(function(){p(),c(),i.value&&i.value.addEventListener("scroll",r),document.addEventListener("mousedown",F),document.addEventListener("mousemove",Y),document.addEventListener("mouseup",U)}),xe(function(){i.value&&i.value.removeEventListener("scroll",r),document.removeEventListener("mousedown",F),document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",U),v&&clearTimeout(v)}),t({updateWrapStyle:p,updateThumbStyle:r}),(_,x)=>(h(),b("div",{class:"the-scrollbar",ref_key:"el",ref:n,onMouseenter:x[0]||(x[0]=T=>me()),onMouseleave:x[1]||(x[1]=T=>oe())},[g("div",{ref_key:"wrap",ref:i,class:"the-scrollbar-wrap",style:A(m)},[G(_.$slots,"default")],4),E(H,{name:"fade"},{default:L(()=>[Q(g("button",{class:"the-scrollbar-thumb",ref_key:"thumbY",ref:f,title:"滚动条-摁住拖拽Y轴",style:A(l.y)},null,4),[[ee,d.value]])]),_:1}),E(H,{name:"fade"},{default:L(()=>[Q(g("button",{class:"the-scrollbar-thumb",ref_key:"thumbX",ref:s,title:"滚动条-摁住拖拽X轴",style:A(l.x)},null,4),[[ee,d.value]])]),_:1})],544))}}),kt={class:"the-layout-header"},wt={class:"the-layout-navbar flex"},Et={class:"user-info-box f-vertical"},St=["src"],Lt={class:"the-tag green mgr-10"},Ct=g("span",null,"退出登录",-1),Ot={key:0,class:"the-layout-tag-box"},Tt={class:"the-layout-tags"},It=["onClick"],Rt="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",At=I({__name:"HeaderBar",setup(o){const t=fe(),e=Pe(),n=$.layout.info,i=$.user.info;function s(){n.sidebarOpen=!n.sidebarOpen}function f(){$.user.reset(),e.push("/login").then(()=>{n.historyViews=[],fn()})}function m(d){return d.path===t.path&&JSON.stringify(d.query)===JSON.stringify(t.query)&&JSON.stringify(d.params)===JSON.stringify(t.params)}function l(d){n.historyViews.splice(d,1)}return J(()=>t.path,function(){n.historyViews.some(p=>m(p))||n.historyViews.push({name:t.name,path:t.path,query:t.query,params:t.params,meta:t.meta})},{immediate:!0}),(d,p)=>{const c=P("svg-icon"),r=P("router-link");return h(),b("div",kt,[g("div",wt,[g("div",{class:N(["fvc hamburger",{"hamburger-active":w(n).sidebarOpen}]),onClick:p[0]||(p[0]=a=>s())},[E(c,{name:"hamburger"})],2),E(xt,{class:"f1"}),g("div",Et,[g("img",{class:"avatar",src:w(i).avatar||Rt},null,8,St),g("span",Lt,O(w(i).name||w(i).account||"用户未设置昵称"),1),g("button",{class:"logout f-vertical",onClick:p[1]||(p[1]=a=>f())},[E(c,{name:"exit"}),Ct])])]),w(n).showTagsView?(h(),b("div",Ot,[E(w(Se),null,{default:L(()=>[g("div",Tt,[(h(!0),b(q,null,te(w(n).historyViews,(a,u)=>(h(),S(r,{class:N(["the-layout-tag",{"the-layout-tag-on":m(a)}]),key:u+a.path,to:{path:a.path,query:a.query,params:a.params}},{default:L(()=>[g("span",null,O(a.meta.title),1),g("i",{class:"close",onClick:De(y=>l(u),["prevent","stop"])},"-",8,It)]),_:2},1032,["class","to"]))),128))])]),_:1})])):B("",!0)])}}}),Bt={class:"f1"},Nt=g("i",{class:"the-layout-menu-arrow"},null,-1),Dt=["href"],Pt={class:"f1"},Ft={class:"f1"},Mt=["href"],Vt=I({__name:"MenuItem",props:{level:{type:Number,default:1},info:{type:Object,default:()=>({title:"-"})}},setup(o){const t=o;function e(c){return!!(c.children&&c.children.length>0)}function n(c){let r=0;const a=c.children,u=$.layout.menuSizeInfo;return c.isOpen&&a&&a.length>0&&a.forEach(y=>{const v=e(y)?u.titleHeight:u.itemHeight;r+=v,r+=n(y)}),r}const i=Z(function(){const c=t.info;return{"the-layout-menu-title f-vertical":!0,"the-layout-menu-selected":c.isActive,"the-layout-menu-open":c.isOpen,"the-layout-menu-actived":c.hasActive,"the-layout-menu-active-title":c.hasActive&&t.level===1}});function s(c){return{"the-layout-menu-item f-vertical":!0,"the-layout-menu-selected":c.isActive}}const f=V({paddingLeft:""}),m=V({paddingLeft:""}),l=Z(function(){return{height:n(t.info)+"px"}}),d=C();function p(){t.info.isOpen=!t.info.isOpen}return X(function(){const c=d.value;if(t.level>=1){const r=getComputedStyle(c.children[0]),a=parseFloat(r.paddingLeft);if(isNaN(a))return;f.paddingLeft=a*t.level+"px",m.paddingLeft=a*(t.level+1)+"px"}}),(c,r)=>{const a=P("svg-icon"),u=P("router-link"),y=P("MenuItem",!0);return h(),b("div",{class:"the-layout-menu",ref_key:"menuBox",ref:d},[e(o.info)?(h(),b("button",{key:0,class:N(i.value),style:A(f),onClick:r[0]||(r[0]=v=>p())},[o.info.icon?(h(),S(a,{key:0,name:o.info.icon},null,8,["name"])):B("",!0),g("span",Bt,O(o.info.title),1),Nt],6)):(h(),b(q,{key:1},[o.info.link?(h(),b("a",{key:0,class:N(i.value),style:A(f),href:o.info.link,target:"_blank"},[o.info.icon?(h(),S(a,{key:0,name:o.info.icon},null,8,["name"])):B("",!0),g("span",Pt,O(o.info.title),1)],14,Dt)):(h(),S(u,{key:1,class:N(i.value),style:A(f),to:o.info.path},{default:L(()=>[o.info.icon?(h(),S(a,{key:0,name:o.info.icon},null,8,["name"])):B("",!0),g("span",Ft,O(o.info.title),1)]),_:1},8,["class","style","to"]))],64)),o.info.children&&o.info.children.length>0?(h(),b("div",{key:2,class:"the-layout-menu-list",style:A(l.value)},[(h(!0),b(q,null,te(o.info.children,v=>(h(),b("div",{key:v.key},[e(v)?(h(),S(y,{key:0,info:v,level:o.level+1},null,8,["info","level"])):(h(),b(q,{key:1},[v.link?(h(),b("a",{key:0,class:N(s(v)),style:A(m),href:v.link,target:"_blank"},[v.icon?(h(),S(a,{key:0,name:v.icon},null,8,["name"])):B("",!0),g("span",null,O(v.title),1)],14,Mt)):(h(),S(u,{key:1,class:N(s(v)),style:A(m),to:v.path},{default:L(()=>[v.icon?(h(),S(a,{key:0,name:v.icon},null,8,["name"])):B("",!0),g("span",null,O(v.title),1)]),_:2},1032,["class","style","to"]))],64))]))),128))],4)):B("",!0)],512)}}}),zt=I({__name:"Menu",props:{mergeOnlyOneChild:{type:Boolean,default:!1},onlyMergeFirst:{type:Boolean,default:!1}},setup(o){const t=o,e=fe();function n(c,r){c=JSON.parse(JSON.stringify(c));const a=[];for(let u=0;u<c.length;u++){const y=c[u],v={key:r?`${r}-${u}`:u.toString(),isOpen:!1,isActive:!1,hasActive:!1,children:[],path:y.path,...y.meta};if(!v.hidden){a.push(v);const F=y.children;F&&F.length>0&&(v.children=n(F,v.key))}}return a}function i(c){c=JSON.parse(JSON.stringify(c));const r=[];for(let a=0;a<c.length;a++){const u=c[a],y=u.children;y&&y.length>0?y.length===1?(y[0].key=u.key,r.push(y[0]),y[0].children&&y[0].children.length>0&&!t.onlyMergeFirst&&(y[0].children=i(y[0].children))):(r.push(u),t.onlyMergeFirst||(u.children=i(y))):r.push(u)}return r}let s=n(Oe($.layout.completeRouters));t.mergeOnlyOneChild&&(s=i(s));const f=C(s);let m=[];function l(c){for(let r=0;r<c.length;r++){const a=c[r];a.hasActive=!1,a.isOpen&&(!a.children||a.children&&a.children.length===0)&&(a.isOpen=!1),a.isActive=a.path===e.path,a.isActive&&(m=a.key.split("-").map(u=>Number(u))),a.children&&a.children.length>0&&l(a.children)}}function d(c,r=0){const a=m[r],u=c[a];u.hasActive=u.isOpen=!0,r<m.length-1&&d(u.children,r+1)}function p(){m=[],l(f.value),m.length>0&&d(f.value)}return J(()=>e.path,function(){p()}),X(function(){p();function c(r,a=0){const u=document.querySelector(r);return u?u.clientHeight:(console.log("%c 找不到节点 >>","color: #ff4949",r,"已使用默认值 >>",a),a)}$.layout.menuSizeInfo.titleHeight=c(".the-layout-menu .the-layout-menu-title",50),$.layout.menuSizeInfo.itemHeight=c(".the-layout-menu .the-layout-menu-item",44)}),(c,r)=>(h(!0),b(q,null,te(f.value,a=>(h(),S(Vt,{key:a.key,info:a},null,8,["info"]))),128))}}),qt={class:"the-layout-sidebar"},Ht={key:0,class:"the-logo-box"},jt=["src"],Wt=["title"],Jt=I({__name:"Sidebar",setup(o){const t=$.layout.info,e=$.projectInfo;return(n,i)=>{const s=P("router-link");return h(),b("div",qt,[E(w(Se),{clickUpdateDelay:300,thumbSize:10},{default:L(()=>[E(H,{name:"fade"},{default:L(()=>[w(t).showSidebarLogo?(h(),b("div",Ht,[E(s,{class:"the-logo-link f-vertical",to:"/"},{default:L(()=>[g("img",{class:"the-logo",src:w(e).logo},null,8,jt),g("h1",{class:"the-logo-title ellipsis",title:w(e).title},O(w(e).title),9,Wt)]),_:1})])):B("",!0)]),_:1}),E(zt,{mergeOnlyOneChild:!0,onlyMergeFirst:!0})]),_:1})])}}}),Xt=I({name:"Layout"}),le=I({...Xt,setup(o){const t=$.layout.info;function e(d){let p=[];for(let c=0;c<d.length;c++){const r=d[c],a=r.children;a&&a.length>0&&(p=p.concat(e(a))),r.meta.keepAlive&&r.name&&p.push(r.name)}return p.filter(c=>c)}const n=e($.layout.completeRouters),i=C(),s=C(!1);let f;function m(){f.scrollTo({top:0,left:0,behavior:"smooth"})}function l(){s.value=f.scrollTop>document.documentElement.clientHeight}return X(function(){f=i.value,f.addEventListener("scroll",l),l()}),(d,p)=>{const c=P("router-view");return h(),b("div",{class:N(["the-layout",w(t).layoutMode,{"has-tags-view":w(t).showTagsView},{"collapsed-sidebar":!w(t).sidebarOpen}])},[E(At),E(Jt),g("div",{class:"the-layout-content",ref_key:"contentBox",ref:i},[E(c,{class:"the-layout-page"},{default:L(({Component:r,route:a})=>[E(H,{name:"page-y",mode:"out-in"},{default:L(()=>[(h(),S(Me,{include:w(n)},[(h(),S(Fe(r),{key:a.path}))],1032,["include"]))]),_:2},1024)]),_:1})],512),g("button",{class:N(["the-layout-totop",{"the-layout-totop-hide":!s.value}]),title:"返回顶部",onClick:p[0]||(p[0]=r=>m())},null,2)],2)}}}),Yt={name:"page-404",data(){return{project:$.projectInfo}}},ne=o=>(ze("data-v-099818c9"),o=o(),qe(),o),Ut={class:"page-404 fvc"},Gt=Ve('<div class="from-top-box f-vertical" data-v-099818c9><div class="mgr-30" data-v-099818c9><div class="point-icon mgb-50" data-v-099818c9></div><div class="point-icon" data-v-099818c9></div></div><div class="radius-icon" data-v-099818c9></div><div class="code-value" data-v-099818c9>404</div></div>',1),Kt={class:"from-right-box mgb-40"},Zt=ne(()=>g("p",{class:"text"},"你访问的页面不存在，请确认页面路径是否正确。",-1)),Qt=ne(()=>g("p",{class:"text"},"我们只收集某些错误信息，然后需要你重新点击返回首页或返回上一页。",-1)),en={class:"pdt-40"},tn={class:"from-bottom-box flex"},nn=ne(()=>g("img",{class:"qrcode-box",src:"https://travis-hjs.github.io/images/reward-code.jpg",alt:"谢谢打赏！"},null,-1)),on={class:"pdt-20"},sn=ne(()=>g("p",{class:"desc"},"如需技术支持，请扫码联系作者。",-1)),an={class:"desc"},rn={class:"desc"};function ln(o,t,e,n,i,s){const f=P("router-link");return h(),b("div",Ut,[g("section",null,[Gt,g("div",Kt,[Zt,Qt,g("div",en,[E(f,{class:"go-back fvc",to:"/"},{default:L(()=>[$e("返回首页")]),_:1})])]),g("div",tn,[nn,g("div",on,[sn,g("p",an,"邮箱地址："+O(i.project.email),1),g("p",rn,"项目地址："+O(i.project.link),1)])])])])}const K=ke(Yt,[["render",ln],["__scopeId","data-v-099818c9"]]),cn=[{path:"/",name:"index",redirect:"/home",component:le,meta:{title:"首页",icon:"home"},children:[{path:"/home",meta:{title:"首页展示",icon:"guide"},component:()=>k(()=>import("./home--q0u9PVg.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)},{path:"/nested",name:"nested",redirect:"/nested/menu-1",meta:{title:"多级菜单嵌套",icon:"tree"},component:()=>k(()=>import("./nested-DXRH8ESg.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/menu-1",name:"nested/menu-1",meta:{title:"el-plus 表格"},component:()=>k(()=>import("./menu-1-zn3DaFvc.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/nested/menu-2",name:"nested/menu-2",meta:{title:"el-plus 表单验证"},component:()=>k(()=>import("./menu-2-DpWL6Yq1.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)},{path:"/nested/three-level",name:"nested/three-level",meta:{title:"三级菜单"},redirect:"/nested/three-level/menu-1",component:()=>k(()=>import("./nested-DXRH8ESg.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/three-level/menu-1",name:"/nested/three-level/menu-1",meta:{title:"菜单 3-1"},component:()=>k(()=>import("./menu-1-zn3DaFvc.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/nested/three-level/menu-2",name:"/nested/three-level/menu-2",meta:{title:"菜单 3-2"},component:()=>k(()=>import("./menu-2-DpWL6Yq1.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)}]},{path:"/nested/four-level",name:"nested/four-level",meta:{title:"三级菜单-2"},redirect:"/nested/four-level/menu-1",component:()=>k(()=>import("./nested-DXRH8ESg.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/four-level/menu-1",name:"/nested/four-level/menu-1",meta:{title:"菜单 3-2-1"},component:()=>k(()=>import("./menu-1-zn3DaFvc.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)}]},{path:"/nested/menu-3",name:"nested/menu-3",meta:{title:"菜单 2-3"},component:()=>k(()=>import("./menu-3-DB0eqVDI.js"),__vite__mapDeps([12,1,2,13]),import.meta.url)}]},{path:"/link-baidu",name:"link-baidu",component:K,meta:{title:"百度一下",icon:"baidu",link:"https://www.baidu.com"}},{path:"/menu-4",name:"menu-4",meta:{title:"换行菜单标题换行菜单标题",icon:"nested"},component:()=>k(()=>import("./menu-4-_ZmjEgD9.js"),__vite__mapDeps([14,1,2,15]),import.meta.url)}]},{path:"/example",name:"example",component:le,meta:{title:"示例页栏目",icon:"menu"},redirect:"/example/request",children:[{path:"/example/request",name:"example-request",meta:{title:"http-请求示例",keepAlive:!0},component:()=>k(()=>import("./request-Dq2UOTiT.js"),__vite__mapDeps([16,1,2,17,18]),import.meta.url)},{path:"/example/components",name:"example-components",meta:{title:"自定义组件"},component:()=>k(()=>import("./the-components-HDEmz_ex.js"),__vite__mapDeps([19,1,2,17,20]),import.meta.url)},{path:"/example/tsx",name:"example-tsx",meta:{title:"tsx-示例"},component:()=>k(()=>import("./example-B5wFxtuz.js"),__vite__mapDeps([21,1,2,22]),import.meta.url)},{path:"/example/no-found",name:"no-found",meta:{title:"404 页面",link:`${location.origin+location.pathname}#/is-error-path`},component:K}]},{path:"/icon",name:"icon",meta:{title:"图标栏目",auth:[0]},component:le,redirect:"/icon/svg-icons",children:[{path:"/icon/svg-icons",name:"svg-icons",component:()=>k(()=>import("./index-CsKXL3Yx.js"),__vite__mapDeps([23,1,2,24]),import.meta.url),meta:{title:"svg-图标",icon:"svg-icon"}}]},{path:"/"+$.projectInfo.link,name:"GitHub-Travis",component:K,meta:{title:"项目地址",icon:"github",link:$.projectInfo.link,auth:[0]}}],j={path:"/",query:{}},de="redirect404";let D;function Le(o){const t=[],e=$.user.info.type;for(let n=0;n<o.length;n++){const i=o[n],s=i.meta?i.meta.auth:void 0;(!s||s&&s.includes(e))&&(i.children&&i.children.length>0&&(i.children=Le(i.children)),t.push(i))}return t}async function un(){return Le(cn)}function dn(o,t){D=o,D.beforeEach(async function(e,n,i){if(se.start(),$.user.info.token)if($.layout.addRouters.length>0)i();else{$.layout.addRouters=await un();for(let s=0;s<$.layout.addRouters.length;s++){const f=$.layout.addRouters[s];D.addRoute(f)}D.hasRoute(de)||D.addRoute({...t[1],path:"/:catchAll(.*)",name:de}),$.layout.completeRouters=t.concat($.layout.addRouters),i({...e,replace:!0})}else e.path==="/login"?i():(j.path=e.path,j.query=e.query,i({path:"/login"}),se.done())}),D.afterEach(e=>{se.done(),e.meta&&e.meta.title&&(document.title=e.meta.title)})}function xn(){D.replace({path:j.path,query:j.query})}function fn(){const o=$.layout.addRouters;for(let t=o.length-1;t>-1;t--){const e=o[t];e.name&&D.hasRoute(e.name)&&D.removeRoute(e.name)}j.path="/",j.query={},D.removeRoute(de),$.layout.addRouters=$.layout.completeRouters=[]}const Ce=[{path:"/login",name:"login",component:()=>k(()=>import("./login-DBB8e3aq.js"),__vite__mapDeps([25,1,2,17,3,4,26]),import.meta.url),meta:{hidden:!0,title:"请登录"}},{path:"/404",name:"page-404",component:K,meta:{hidden:!0,title:"不存在该页面"}},{path:"/401",name:"page-401",component:()=>k(()=>import("./page-401-DiBRxwLh.js"),__vite__mapDeps([27,1,2,28]),import.meta.url),meta:{hidden:!0,title:"暂无权限访问"}}];function Oe(o){o=JSON.parse(JSON.stringify(o));const t=[];for(let e=0;e<o.length;e++){const n=o[e];(!n.meta||n.meta&&!n.meta.hidden)&&(t.push(n),n.children&&n.children.length>0&&(n.children=Oe(n.children)))}return t}const Te=He({history:je(),routes:Ce});dn(Te,Ce);const mn="1.1.2",ce=[];function pn(o,t){let e;ce.length>1?e=ce.shift():(e=document.createElement("div"),e.className="ripple");const n=t.getBoundingClientRect(),i=t.getAttribute("color");let s=Math.max(n.width,n.height);s>200&&(s=200),e.style.height=e.style.width=s+"px",e.style.backgroundColor=i||"rgba(255, 255, 255, .45)",t.appendChild(e);const f=o.touches,m=f?f[0].clientY:o.clientY,l=f?f[0].clientX:o.clientX,d=m-n.top-e.offsetHeight/2,p=l-n.left-e.offsetWidth/2;e.style.top=d+"px",e.style.left=p+"px";function c(){e.removeEventListener("animationend",c),t.removeChild(e),ce.push(e)}e.addEventListener("animationend",c)}function hn(o={}){const t=document,e=`__${Math.random().toString(36).slice(2,7)}`,n={box:`msg-box${e}`,hide:`hide${e}`,text:`msg-text${e}`,icon:`msg-icon${e}`},i=t.createElement("style");i.textContent=`
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
  `.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),t.head.appendChild(i);const s=[];function f(d){let p=10;for(let c=0;c<s.length;c++){const r=s[c];if(d&&d===r)break;p+=r.clientHeight+20}return p}function m(d){for(let p=0;p<s.length;p++)if(s[p]===d){s.splice(p,1);break}d.classList.add(n.hide),s.forEach(function(p){p.style.top=`${f(p)}px`})}function l(d,p="info",c){const r=t.createElement("div");r.className=`${n.box} ${p}`,r.style.top=`${f()}px`,r.style.zIndex=Ie.message,r.innerHTML=`
    <span class="${n.icon}"></span>
    <span class="${n.text}">${d}</span>
    `,s.push(r),t.body.appendChild(r);function a(){r.removeEventListener("animationend",a),setTimeout(m,c||o.duration||3e3,r)}r.addEventListener("animationend",a);function u(){getComputedStyle(r).opacity==="0"&&(r.removeEventListener("transitionend",u),r.remove())}r.addEventListener("transitionend",u)}return{show:l,info(d){l(d,"info")},success(d){l(d,"success")},warning(d){l(d,"warning")},error(d){l(d,"error")}}}function gn(){const o=document,t=`__${Math.random().toString(36).slice(2,7)}`,e={mask:`dialog-mask${t}`,popup:`dialog-popup${t}`,title:`dialog-title${t}`,content:`dialog-content${t}`,footer:`dialog-footer${t}`,confirm:`confirm${t}`,fade:`fade${t}`,show:`show${t}`,hide:`hide${t}`},n=`
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
  `,i=o.createElement("style");i.textContent=n.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),o.head.appendChild(i);const s={x:"0vw",y:"0vh"};o.addEventListener("click",function(m){const{innerWidth:l,innerHeight:d}=window,p=l/2,c=d/2,r=m.clientY-c,a=m.clientX-p;s.x=`${a/l*100}vw`,s.y=`${r/d*100}vh`},!0);function f(m){const l=o.createElement("section");l.className=e.mask,l.style.zIndex=Ie.dialog,l.style.setProperty("--x",s.x),l.style.setProperty("--y",s.y),s.x="0vw",s.y="0vh";const d=m.cancelText?`<button class="the-btn">${m.cancelText}</button>`:"";l.innerHTML=`
    <div class="${e.popup}">
      <h2 class="${e.title}">${typeof m.title=="string"?m.title:"提示"}</h2>
      <div class="${e.content}">${m.content}</div>
      <div class="${e.footer}">
        ${d}
        <button class="${e.confirm} the-btn blue">${m.confirmText||"确认"}</button>
      </div>
    </div>
    `,o.body.appendChild(l),l.addEventListener("transitionend",function(c){c.target===l&&l.classList.contains(e.hide)&&l.remove()});function p(){l.classList.add(e.hide)}m.cancelText&&(l.querySelector(`.${e.footer} button`).onclick=function(){p(),m.cancel&&m.cancel()}),l.querySelector(`.${e.confirm}`).onclick=function(){p(),m.confirm&&m.confirm()}}return{show:f}}const Ie={get message(){return(ue()+20).toString()},get dialog(){return(ue()+10).toString()}},be=hn({duration:3600}),vn=gn(),$n=vn.show;window.version=mn;const W=We(Ye);W.directive("copy",{mounted(o,t){o.addEventListener("click",function(){rt(t.value,()=>be.success("复制成功"),e=>be.success(e))})}});W.directive("ripple",{mounted(o){const t=lt()?"touchstart":"mousedown";o.setAttribute("ripple",""),o.addEventListener(t,function(e){pn(e,o)})}});W.component("svg-icon",Ke);W.component("base-dialog",ot);W.use(Te);W.mount("#app");export{ke as _,M as a,$n as b,rt as c,Se as d,at as e,k as f,bn as i,Ee as j,be as m,xn as o,$ as s};
