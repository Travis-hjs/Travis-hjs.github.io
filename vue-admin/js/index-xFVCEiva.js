function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./home-BDqPBVS0.js","./vendor-CmuVtlUM.js","../css/vendor-BUMXTAWU.css","./index.vue_vue_type_style_index_0_lang-BQR0AioL.js","../css/index-CBMF1Z1B.css","../css/home-NLRWRYAt.css","./nested-wZawDBry.js","../css/nested-DBbt7j1J.css","./menu-1-K60-PeLt.js","../css/menu-1-PIQFC6DV.css","./menu-2-D_SbC2Uj.js","../css/menu-2-DwSbhe9C.css","./menu-3-Dm5b3mvV.js","../css/menu-3-C1x6D_tQ.css","./menu-4-DpA_CNH6.js","../css/menu-4-B_QkhR3M.css","./request-Bln9ZRut.js","./common-BosT8CX5.js","../css/request-BjYaB_Vm.css","./the-components-C6zWRI7b.js","../css/the-components-IJgq8Frg.css","./example-CrFeZX6f.js","../css/example-CJnj_JQw.css","./index-Bxqo8siW.js","../css/index-CJ5TRbCj.css","./login-DmRrYVGJ.js","../css/login-C2zo-VT6.css","./page-401-CPwelwL-.js","../css/page-401-hNHv4Vr6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var Ae=Object.defineProperty;var Be=(n,t,e)=>t in n?Ae(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var R=(n,t,e)=>(Be(n,typeof t!="symbol"?t+"":t,e),e);import{d as T,r as P,o as h,c as L,a as Z,b,e as g,n as N,f as O,w as X,g as J,h as $e,i as E,j as S,k as Q,v as ee,T as H,l as A,t as C,m as B,p as G,u as w,q as Ne,s as te,x as M,y as ne,z as ke,F as q,A as De,B as me,C as Pe,D as Fe,E as Ve,K as Me,G as ze,H as qe,I as He,N as ae,J as je,L as We,M as Xe}from"./vendor-CmuVtlUM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Je=T({name:"App"}),we=(n,t)=>{const e=n.__vccOpts||n;for(const[o,i]of t)e[o]=i;return e};function Ye(n,t,e,o,i,s){const f=P("router-view");return h(),L(f)}const Ue=we(Je,[["render",Ye]]),Ge=["xlink:href"],Ke=T({name:"SvgIcon"}),Ze=T({...Ke,props:{name:{type:String,required:!0,default:""},className:{type:String,default:""}},setup(n){const t=n,e=Z(()=>`#icon-${t.name}`),o=Z(function(){return t.className?"svg-icon "+t.className:"svg-icon"});return(i,s)=>(h(),b("svg",{class:N(o.value),"aria-hidden":"true"},[g("use",{"xlink:href":e.value},null,8,Ge)],2))}});let he=1e3;function de(){const n=he;return he++,n}const Qe={class:"base-dialog-title f-between f-vertical"},et={key:0,class:"base-dialog-text"},tt={class:"base-dialog-body"},nt={key:0,class:"base-dialog-footer"},ot={name:"base-dialog"},it=T({...ot,props:{title:{type:String,default:"提示"},modelValue:{type:Boolean,default:!1},width:{type:String,default:"50%"},closeByMask:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1}},emits:["close","update:modelValue","afterLeave","afterEnd"],setup(n,{emit:t}){const e=n,o=t,i=de(),s=O(),f=O(),m=O(),l=O(!1);X(()=>e.modelValue,function(u){u?setTimeout(()=>{l.value=!0},0):l.value=!1},{immediate:!0});function d(u){if(!e.modelValue||l.value||s.value.contains(u.target))return;const{clientWidth:y,clientHeight:v}=s.value,F=y/2,Y=v/2,U=u.clientY-Y,ie=`${(u.clientX-F)/y*100}vw`,_=`${U/v*100}vh`;p(ie,_)}function p(u,y){const v=m.value;v&&(v.style.setProperty("--content-x",u),v.style.setProperty("--content-y",y))}function c(u){(u&&u.target===s.value&&e.closeByMask||u&&u.target===f.value)&&(o("update:modelValue",!1),o("close"))}function r(){l.value&&p("0","0"),o("afterLeave")}function a(){o("afterEnd")}return J(function(){document.addEventListener("click",d)}),$e(function(){document.removeEventListener("click",d)}),(u,y)=>(h(),b("section",null,[(h(),L(Ne,{to:"body",disabled:!n.appendToBody},[E(H,{name:"fade"},{default:S(()=>[Q(g("div",{ref_key:"el",ref:s,class:"base-dialog fvc",style:A({zIndex:w(i)}),onClick:c},[E(H,{name:"dialog-move",onAfterLeave:r,onAfterEnter:a},{default:S(()=>[Q(g("div",{ref_key:"contentBox",ref:m,class:"base-dialog-content flex",style:A({width:n.width})},[g("div",Qe,[u.$slots.header?B("",!0):(h(),b("h2",et,C(n.title),1)),G(u.$slots,"header"),g("i",{class:"base-dialog-icon",ref_key:"closeBtn",ref:f,onClick:c},null,512)]),g("div",tt,[G(u.$slots,"default")]),u.$slots.footer?(h(),b("div",nt,[G(u.$slots,"footer")])):B("",!0)],4),[[ee,l.value]])]),_:3})],4),[[ee,n.modelValue]])]),_:3})],8,["disabled"]))]))}}),st="modulepreload",at=function(n,t){return new URL(n,t).href},ge={},k=function(t,e,o){let i=Promise.resolve();if(e&&e.length>0){const s=document.getElementsByTagName("link"),f=document.querySelector("meta[property=csp-nonce]"),m=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));i=Promise.all(e.map(l=>{if(l=at(l,o),l in ge)return;ge[l]=!0;const d=l.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(!!o)for(let a=s.length-1;a>=0;a--){const u=s[a];if(u.href===l&&(!d||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${p}`))return;const r=document.createElement("link");if(r.rel=d?"stylesheet":st,d||(r.as="script",r.crossOrigin=""),r.href=l,m&&r.setAttribute("nonce",m),document.head.appendChild(r),d)return new Promise((a,u)=>{r.addEventListener("load",a),r.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${l}`)))})}))}return i.then(()=>t()).catch(s=>{const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=s,window.dispatchEvent(f),!f.defaultPrevented)throw s})};function rt(n){return Object.prototype.toString.call(n).match(/\[object (\S*)\]/)[1].toLocaleLowerCase()}function Ee(n,t){return rt(n)===t}function V(n,t){for(const e in t)if(Object.prototype.hasOwnProperty.call(n,e)){const o=t[e],i=n[e];Ee(i,"object")?V(i,o):n[e]=o}}function lt(n,t,e){if(n=n.replace(/(^\s*)|(\s*$)/g,""),!n){e&&e("复制的内容不能为空！");return}const o="the-clipboard";let i=document.getElementById(o);i||(i=document.createElement("textarea"),i.id=o,i.readOnly=!0,i.style.cssText="font-size: 15px; position: fixed; top: -1000%; left: -1000%;",document.body.appendChild(i)),i.value=n,i.select(),i.setSelectionRange(0,i.value.length),document.execCommand("copy")?t&&t():e&&e("复制失败")}function xn(n,t,e){let o=n.toString().trim();if(o.length===0)return"";const i="";return o=o.replace(/[^0-9]+/ig,""),i+o}function Le(n,t={}){let e=t;if(Ee(n,"string"))try{e=JSON.parse(n)}catch(o){console.warn("JSON格式化对象错误 >>",o)}return e}function ct(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)}function ut(n){return te.get(n)||""}function dt(n,t,e){e?te.set(n,t,e):te.set(n,t)}function ft(n,t){te.remove(n)}const re="ModuleUser";function ve(){return{id:"",name:"",type:"",token:"",avatar:"",account:"",password:""}}const mt=3,pt=24*60*60*1e3;class ht{constructor(){R(this,"info",M(ve()));this.init()}init(){const t=ut(re);if(t){const e=Le(t);V(this.info,e)}}update(t){V(this.info,t),dt(re,JSON.stringify(this.info),{expires:new Date(Date.now()+mt*pt)})}reset(){V(this.info,ve()),ft(re)}}const gt=""+new URL("../image/logo-CPmPqqKk.png",import.meta.url).href,ye="ModuleLayout";class vt{constructor(){R(this,"addRouters",[]);R(this,"completeRouters",[]);R(this,"info",M({showTagsView:!0,sidebarOpen:!0,showSidebarLogo:!0,historyViews:[],layoutMode:""}));R(this,"menuSizeInfo",M({titleHeight:0,itemHeight:0}));this.init(),X(this.info,this.saveInfo.bind(this))}init(){const t=sessionStorage.getItem(ye);try{t&&V(this.info,JSON.parse(t))}catch(e){console.log("ModuleLayout init fail >>",e)}}saveInfo(){sessionStorage.setItem(ye,JSON.stringify(this.info))}}const le="ModuleGoods";function _e(){return{id:0,name:"",price:0,specs:{size:"xs",width:"",height:""}}}class yt{constructor(){R(this,"info",M(_e()));const t=sessionStorage.getItem(le);if(t){const e=Le(t);V(this.info,e)}}update(t){V(this.info,t),sessionStorage.setItem(le,JSON.stringify(this.info))}reset(){V(this.info,_e()),sessionStorage.removeItem(le)}}class _t{constructor(){R(this,"projectInfo",{title:"Vue Typescript Admin",name:"XXX后台管理平台",logo:gt,link:"https://github.com/Travis-hjs/vue-admin",email:"1141752341@qq.com"});R(this,"layout",new vt);R(this,"user",new ht);R(this,"_goods");console.log("%c ModuleStore init","color: #409EFF")}get goods(){return this._goods||(this._goods=new yt),this._goods}}const $=new _t,bt={key:0,class:"separator"},xt={key:1,href:"javascript:void(0)"},$t=T({__name:"Breadcrumb",setup(n){const t=me(),e=O([]);function o(){const i=t.matched.filter(s=>s.meta&&s.meta.title).map(s=>({path:s.path,meta:{...s.meta}}));e.value=i}return X(()=>t.path,function(){t.path.startsWith("/redirect/")||o()}),o(),(i,s)=>{const f=P("router-link");return h(),L(De,{name:"breadcrumb",tag:"div",class:"layout-breadcrumb f-vertical"},{default:S(()=>[(h(!0),b(q,null,ne(e.value,(m,l)=>(h(),b("span",{class:N(["layout-breadcrumb-item",{last:l===e.value.length-1}]),key:m.path},[l>0?(h(),b("i",bt,"/")):B("",!0),l===e.value.length-1?(h(),b("a",xt,C(m.meta.title),1)):(h(),L(f,{key:2,to:m.path},{default:S(()=>[ke(C(m.meta.title),1)]),_:2},1032,["to"]))],2))),128))]),_:1})}}}),be=function(){const n=document.createElement("div");n.style.width="100px",n.style.height="100px",n.style.overflow="scroll",document.body.appendChild(n);const t=n.offsetWidth-n.clientWidth;return n.remove(),t}(),kt={name:"Scrollbar"},Se=T({...kt,props:{thumbColor:{type:String,default:"rgba(147, 147, 153, 0.45)"},thumbSize:{type:Number,default:8},clickUpdateDelay:{type:Number,default:0}},setup(n,{expose:t}){const e=n,o=O(),i=O(),s=O(),f=O(),m=M({height:"",width:""}),l=M({x:{width:"",height:"",left:"",bottom:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor},y:{width:"",height:"",top:"",right:"",transform:"",borderRadius:"",backgroundColor:e.thumbColor}}),d=O(!1);function p(){const _=o.value.parentElement;_.style.overflow="hidden";const x=getComputedStyle(_);m.width=`calc(100% + ${be}px + ${x.borderLeftWidth} + ${x.borderRightWidth})`,m.height=`calc(100% + ${be}px + ${x.borderTopWidth} + ${x.borderBottomWidth})`}function c(){l.y.right=l.y.top="0px",l.y.width=e.thumbSize+"px",l.x.bottom=l.x.left="0px",l.x.height=e.thumbSize+"px",l.x.borderRadius=l.y.borderRadius=`${e.thumbSize/2}px`}function r(){const _=i.value;if(_){let x=_.clientHeight/_.scrollHeight*100;x>=100&&(x=0),l.y.height=x+"%",l.y.transform=`translate3d(0, ${_.scrollTop/_.scrollHeight*_.clientHeight}px, 0)`;let I=_.clientWidth/_.scrollWidth*100;I>=100&&(I=0),l.x.width=I+"%",l.x.transform=`translate3d(${_.scrollLeft/_.scrollWidth*_.clientWidth}px, 0, 0)`}}let a=!1,u=!1,y=0,v;function F(_){const x=s.value,I=f.value,z=_.target;x.contains(z)&&(a=!0,u=!1,y=_.clientX-x.getBoundingClientRect().left),I.contains(z)&&(a=!0,u=!0,y=_.clientY-I.getBoundingClientRect().top)}function Y(_){if(!a)return;const x=i.value;if(u){const I=x.getBoundingClientRect().top,z=x.clientHeight;let se=_.clientY-I;x.scrollTop=(se-y)/z*x.scrollHeight}else{const I=x.getBoundingClientRect().left,z=x.clientWidth;let se=_.clientX-I;x.scrollLeft=(se-y)/z*x.scrollWidth}}function U(_){a=!1,o.value.contains(_.target)?e.clickUpdateDelay>0&&(v&&clearTimeout(v),v=setTimeout(r,e.clickUpdateDelay)):d.value=!1}function pe(){d.value=!0,r()}function ie(){a||(d.value=!1)}return J(function(){p(),c(),i.value&&i.value.addEventListener("scroll",r),document.addEventListener("mousedown",F),document.addEventListener("mousemove",Y),document.addEventListener("mouseup",U)}),$e(function(){i.value&&i.value.removeEventListener("scroll",r),document.removeEventListener("mousedown",F),document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",U),v&&clearTimeout(v)}),t({updateWrapStyle:p,updateThumbStyle:r}),(_,x)=>(h(),b("div",{class:"the-scrollbar",ref_key:"el",ref:o,onMouseenter:x[0]||(x[0]=I=>pe()),onMouseleave:x[1]||(x[1]=I=>ie())},[g("div",{ref_key:"wrap",ref:i,class:"the-scrollbar-wrap",style:A(m)},[G(_.$slots,"default")],4),E(H,{name:"fade"},{default:S(()=>[Q(g("button",{class:"the-scrollbar-thumb",ref_key:"thumbY",ref:f,title:"滚动条-摁住拖拽Y轴",style:A(l.y)},null,4),[[ee,d.value]])]),_:1}),E(H,{name:"fade"},{default:S(()=>[Q(g("button",{class:"the-scrollbar-thumb",ref_key:"thumbX",ref:s,title:"滚动条-摁住拖拽X轴",style:A(l.x)},null,4),[[ee,d.value]])]),_:1})],544))}}),wt={class:"the-layout-header"},Et={class:"the-layout-navbar flex"},Lt={class:"user-info-box f-vertical"},St=["src"],Ot={class:"the-tag green mgr-10"},Ct=g("span",null,"退出登录",-1),It={key:0,class:"the-layout-tag-box"},Tt={class:"the-layout-tags"},Rt=["onClick"],At="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",Bt=T({__name:"HeaderBar",setup(n){const t=me(),e=Fe(),o=$.layout.info,i=$.user.info;function s(){o.sidebarOpen=!o.sidebarOpen}function f(){$.user.reset(),e.push("/login").then(()=>{o.historyViews=[],mn()})}function m(d){return d.path===t.path&&JSON.stringify(d.query)===JSON.stringify(t.query)&&JSON.stringify(d.params)===JSON.stringify(t.params)}function l(d){o.historyViews.splice(d,1)}return X(()=>t.path,function(){o.historyViews.some(p=>m(p))||o.historyViews.push({name:t.name,path:t.path,query:t.query,params:t.params,meta:t.meta})},{immediate:!0}),(d,p)=>{const c=P("svg-icon"),r=P("router-link");return h(),b("div",wt,[g("div",Et,[g("div",{class:N(["fvc hamburger",{"hamburger-active":w(o).sidebarOpen}]),onClick:p[0]||(p[0]=a=>s())},[E(c,{name:"hamburger"})],2),E($t,{class:"f1"}),g("div",Lt,[g("img",{class:"avatar",src:w(i).avatar||At},null,8,St),g("span",Ot,C(w(i).name||w(i).account||"用户未设置昵称"),1),g("button",{class:"logout f-vertical",onClick:p[1]||(p[1]=a=>f())},[E(c,{name:"exit"}),Ct])])]),w(o).showTagsView?(h(),b("div",It,[E(w(Se),null,{default:S(()=>[g("div",Tt,[(h(!0),b(q,null,ne(w(o).historyViews,(a,u)=>(h(),L(r,{class:N(["the-layout-tag",{"the-layout-tag-on":m(a)}]),key:u+a.path,to:{path:a.path,query:a.query,params:a.params}},{default:S(()=>[g("span",null,C(a.meta.title),1),g("i",{class:"close",onClick:Pe(y=>l(u),["prevent","stop"])},"-",8,Rt)]),_:2},1032,["class","to"]))),128))])]),_:1})])):B("",!0)])}}}),Nt={class:"f1"},Dt=g("i",{class:"the-layout-menu-arrow"},null,-1),Pt=["href"],Ft={class:"f1"},Vt={class:"f1"},Mt=["href"],zt=T({__name:"MenuItem",props:{level:{type:Number,default:1},info:{type:Object,default:()=>({title:"-"})}},setup(n){const t=n;function e(c){return!!(c.children&&c.children.length>0)}function o(c){let r=0;const a=c.children,u=$.layout.menuSizeInfo;return c.isOpen&&a&&a.length>0&&a.forEach(y=>{const v=e(y)?u.titleHeight:u.itemHeight;r+=v,r+=o(y)}),r}const i=Z(function(){const c=t.info;return{"the-layout-menu-title f-vertical":!0,"the-layout-menu-selected":c.isActive,"the-layout-menu-open":c.isOpen,"the-layout-menu-actived":c.hasActive,"the-layout-menu-active-title":c.hasActive&&t.level===1}});function s(c){return{"the-layout-menu-item f-vertical":!0,"the-layout-menu-selected":c.isActive}}const f=M({paddingLeft:""}),m=M({paddingLeft:""}),l=Z(function(){return{height:o(t.info)+"px"}}),d=O();function p(){t.info.isOpen=!t.info.isOpen}return J(function(){const c=d.value;if(t.level>=1){const r=getComputedStyle(c.children[0]),a=parseFloat(r.paddingLeft);if(isNaN(a))return;f.paddingLeft=a*t.level+"px",m.paddingLeft=a*(t.level+1)+"px"}}),(c,r)=>{const a=P("svg-icon"),u=P("router-link"),y=P("MenuItem",!0);return h(),b("div",{class:"the-layout-menu",ref_key:"menuBox",ref:d},[e(n.info)?(h(),b("button",{key:0,class:N(i.value),style:A(f),onClick:r[0]||(r[0]=v=>p())},[n.info.icon?(h(),L(a,{key:0,name:n.info.icon},null,8,["name"])):B("",!0),g("span",Nt,C(n.info.title),1),Dt],6)):(h(),b(q,{key:1},[n.info.link?(h(),b("a",{key:0,class:N(i.value),style:A(f),href:n.info.link,target:"_blank"},[n.info.icon?(h(),L(a,{key:0,name:n.info.icon},null,8,["name"])):B("",!0),g("span",Ft,C(n.info.title),1)],14,Pt)):(h(),L(u,{key:1,class:N(i.value),style:A(f),to:n.info.path},{default:S(()=>[n.info.icon?(h(),L(a,{key:0,name:n.info.icon},null,8,["name"])):B("",!0),g("span",Vt,C(n.info.title),1)]),_:1},8,["class","style","to"]))],64)),n.info.children&&n.info.children.length>0?(h(),b("div",{key:2,class:"the-layout-menu-list",style:A(l.value)},[(h(!0),b(q,null,ne(n.info.children,v=>(h(),b("div",{key:v.key},[e(v)?(h(),L(y,{key:0,info:v,level:n.level+1},null,8,["info","level"])):(h(),b(q,{key:1},[v.link?(h(),b("a",{key:0,class:N(s(v)),style:A(m),href:v.link,target:"_blank"},[v.icon?(h(),L(a,{key:0,name:v.icon},null,8,["name"])):B("",!0),g("span",null,C(v.title),1)],14,Mt)):(h(),L(u,{key:1,class:N(s(v)),style:A(m),to:v.path},{default:S(()=>[v.icon?(h(),L(a,{key:0,name:v.icon},null,8,["name"])):B("",!0),g("span",null,C(v.title),1)]),_:2},1032,["class","style","to"]))],64))]))),128))],4)):B("",!0)],512)}}}),qt=T({__name:"Menu",props:{mergeOnlyOneChild:{type:Boolean,default:!1},onlyMergeFirst:{type:Boolean,default:!1}},setup(n){const t=n,e=me();function o(c,r){c=JSON.parse(JSON.stringify(c));const a=[];for(let u=0;u<c.length;u++){const y=c[u],v={key:r?`${r}-${u}`:u.toString(),isOpen:!1,isActive:!1,hasActive:!1,children:[],path:y.path,...y.meta};if(!v.hidden){a.push(v);const F=y.children;F&&F.length>0&&(v.children=o(F,v.key))}}return a}function i(c){c=JSON.parse(JSON.stringify(c));const r=[];for(let a=0;a<c.length;a++){const u=c[a],y=u.children;y&&y.length>0?y.length===1?(y[0].key=u.key,r.push(y[0]),y[0].children&&y[0].children.length>0&&!t.onlyMergeFirst&&(y[0].children=i(y[0].children))):(r.push(u),t.onlyMergeFirst||(u.children=i(y))):r.push(u)}return r}let s=o(Ie($.layout.completeRouters));t.mergeOnlyOneChild&&(s=i(s));const f=O(s);let m=[];function l(c){for(let r=0;r<c.length;r++){const a=c[r];a.hasActive=!1,a.isOpen&&(!a.children||a.children&&a.children.length===0)&&(a.isOpen=!1),a.isActive=a.path===e.path,a.isActive&&(m=a.key.split("-").map(u=>Number(u))),a.children&&a.children.length>0&&l(a.children)}}function d(c,r=0){const a=m[r],u=c[a];u.hasActive=u.isOpen=!0,r<m.length-1&&d(u.children,r+1)}function p(){m=[],l(f.value),m.length>0&&d(f.value)}return X(()=>e.path,function(){p()}),J(function(){p();function c(r,a=0){const u=document.querySelector(r);return u?u.clientHeight:(console.log("%c 找不到节点 >>","color: #ff4949",r,"已使用默认值 >>",a),a)}$.layout.menuSizeInfo.titleHeight=c(".the-layout-menu .the-layout-menu-title",50),$.layout.menuSizeInfo.itemHeight=c(".the-layout-menu .the-layout-menu-item",44)}),(c,r)=>(h(!0),b(q,null,ne(f.value,a=>(h(),L(zt,{key:a.key,info:a},null,8,["info"]))),128))}}),Ht={class:"the-layout-sidebar"},jt={key:0,class:"the-logo-box"},Wt=["src"],Xt=["title"],Jt=T({__name:"Sidebar",setup(n){const t=$.layout.info,e=$.projectInfo;return(o,i)=>{const s=P("router-link");return h(),b("div",Ht,[E(w(Se),{clickUpdateDelay:300,thumbSize:10},{default:S(()=>[E(H,{name:"fade"},{default:S(()=>[w(t).showSidebarLogo?(h(),b("div",jt,[E(s,{class:"the-logo-link f-vertical",to:"/"},{default:S(()=>[g("img",{class:"the-logo",src:w(e).logo},null,8,Wt),g("h1",{class:"the-logo-title ellipsis",title:w(e).title},C(w(e).title),9,Xt)]),_:1})])):B("",!0)]),_:1}),E(qt,{mergeOnlyOneChild:!0,onlyMergeFirst:!0})]),_:1})])}}}),Yt=T({name:"Layout"}),ce=T({...Yt,setup(n){const t=$.layout.info;function e(d){let p=[];for(let c=0;c<d.length;c++){const r=d[c],a=r.children;a&&a.length>0&&(p=p.concat(e(a))),r.meta.keepAlive&&r.name&&p.push(r.name)}return p.filter(c=>c)}const o=e($.layout.completeRouters),i=O(),s=O(!1);let f;function m(){f.scrollTo({top:0,left:0,behavior:"smooth"})}function l(){s.value=f.scrollTop>document.documentElement.clientHeight}return J(function(){f=i.value,f.addEventListener("scroll",l),l()}),(d,p)=>{const c=P("router-view");return h(),b("div",{class:N(["the-layout",w(t).layoutMode,{"has-tags-view":w(t).showTagsView},{"collapsed-sidebar":!w(t).sidebarOpen}])},[E(Bt),E(Jt),g("div",{class:"the-layout-content",ref_key:"contentBox",ref:i},[E(c,{class:"the-layout-page"},{default:S(({Component:r,route:a})=>[E(H,{name:"page-y",mode:"out-in"},{default:S(()=>[(h(),L(Me,{include:w(o)},[(h(),L(Ve(r),{key:a.path}))],1032,["include"]))]),_:2},1024)]),_:1})],512),g("button",{class:N(["the-layout-totop",{"the-layout-totop-hide":!s.value}]),title:"返回顶部",onClick:p[0]||(p[0]=r=>m())},null,2)],2)}}}),Ut={name:"page-404",data(){return{project:$.projectInfo}}},oe=n=>(qe("data-v-099818c9"),n=n(),He(),n),Gt={class:"page-404 fvc"},Kt=ze('<div class="from-top-box f-vertical" data-v-099818c9><div class="mgr-30" data-v-099818c9><div class="point-icon mgb-50" data-v-099818c9></div><div class="point-icon" data-v-099818c9></div></div><div class="radius-icon" data-v-099818c9></div><div class="code-value" data-v-099818c9>404</div></div>',1),Zt={class:"from-right-box mgb-40"},Qt=oe(()=>g("p",{class:"text"},"你访问的页面不存在，请确认页面路径是否正确。",-1)),en=oe(()=>g("p",{class:"text"},"我们只收集某些错误信息，然后需要你重新点击返回首页或返回上一页。",-1)),tn={class:"pdt-40"},nn={class:"from-bottom-box flex"},on=oe(()=>g("img",{class:"qrcode-box",src:"https://travis-hjs.github.io/images/reward-code.jpg",alt:"谢谢打赏！"},null,-1)),sn={class:"pdt-20"},an=oe(()=>g("p",{class:"desc"},"如需技术支持，请扫码联系作者。",-1)),rn={class:"desc"},ln={class:"desc"};function cn(n,t,e,o,i,s){const f=P("router-link");return h(),b("div",Gt,[g("section",null,[Kt,g("div",Zt,[Qt,en,g("div",tn,[E(f,{class:"go-back fvc",to:"/"},{default:S(()=>[ke("返回首页")]),_:1})])]),g("div",nn,[on,g("div",sn,[an,g("p",rn,"邮箱地址："+C(i.project.email),1),g("p",ln,"项目地址："+C(i.project.link),1)])])])])}const K=we(Ut,[["render",cn],["__scopeId","data-v-099818c9"]]),un=[{path:"/",name:"index",redirect:"/home",component:ce,meta:{title:"首页",icon:"home"},children:[{path:"/home",meta:{title:"首页展示",icon:"guide"},component:()=>k(()=>import("./home-BDqPBVS0.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)},{path:"/nested",name:"nested",redirect:"/nested/menu-1",meta:{title:"多级菜单嵌套",icon:"tree"},component:()=>k(()=>import("./nested-wZawDBry.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/menu-1",name:"nested/menu-1",meta:{title:"el-plus 表格"},component:()=>k(()=>import("./menu-1-K60-PeLt.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/nested/menu-2",name:"nested/menu-2",meta:{title:"el-plus 表单验证"},component:()=>k(()=>import("./menu-2-D_SbC2Uj.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)},{path:"/nested/three-level",name:"nested/three-level",meta:{title:"三级菜单"},redirect:"/nested/three-level/menu-1",component:()=>k(()=>import("./nested-wZawDBry.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/three-level/menu-1",name:"/nested/three-level/menu-1",meta:{title:"菜单 3-1"},component:()=>k(()=>import("./menu-1-K60-PeLt.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/nested/three-level/menu-2",name:"/nested/three-level/menu-2",meta:{title:"菜单 3-2"},component:()=>k(()=>import("./menu-2-D_SbC2Uj.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)}]},{path:"/nested/four-level",name:"nested/four-level",meta:{title:"三级菜单-2"},redirect:"/nested/four-level/menu-1",component:()=>k(()=>import("./nested-wZawDBry.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),children:[{path:"/nested/four-level/menu-1",name:"/nested/four-level/menu-1",meta:{title:"菜单 3-2-1"},component:()=>k(()=>import("./menu-1-K60-PeLt.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)}]},{path:"/nested/menu-3",name:"nested/menu-3",meta:{title:"菜单 2-3"},component:()=>k(()=>import("./menu-3-Dm5b3mvV.js"),__vite__mapDeps([12,1,2,13]),import.meta.url)}]},{path:"/link-baidu",name:"link-baidu",component:K,meta:{title:"百度一下",icon:"baidu",link:"https://www.baidu.com"}},{path:"/menu-4",name:"menu-4",meta:{title:"换行菜单标题换行菜单标题",icon:"nested"},component:()=>k(()=>import("./menu-4-DpA_CNH6.js"),__vite__mapDeps([14,1,2,15]),import.meta.url)}]},{path:"/example",name:"example",component:ce,meta:{title:"示例页栏目",icon:"menu"},redirect:"/example/request",children:[{path:"/example/request",name:"example-request",meta:{title:"http-请求示例",keepAlive:!0},component:()=>k(()=>import("./request-Bln9ZRut.js"),__vite__mapDeps([16,1,2,17,18]),import.meta.url)},{path:"/example/components",name:"example-components",meta:{title:"自定义组件"},component:()=>k(()=>import("./the-components-C6zWRI7b.js"),__vite__mapDeps([19,1,2,17,20]),import.meta.url)},{path:"/example/tsx",name:"example-tsx",meta:{title:"tsx-示例"},component:()=>k(()=>import("./example-CrFeZX6f.js"),__vite__mapDeps([21,1,2,22]),import.meta.url)},{path:"/example/no-found",name:"no-found",meta:{title:"404 页面",link:`${location.origin+location.pathname}#/is-error-path`},component:K}]},{path:"/icon",name:"icon",meta:{title:"图标栏目",auth:[0]},component:ce,redirect:"/icon/svg-icons",children:[{path:"/icon/svg-icons",name:"svg-icons",component:()=>k(()=>import("./index-Bxqo8siW.js"),__vite__mapDeps([23,1,2,24]),import.meta.url),meta:{title:"svg-图标",icon:"svg-icon"}}]},{path:"/"+$.projectInfo.link,name:"GitHub-Travis",component:K,meta:{title:"项目地址",icon:"github",link:$.projectInfo.link,auth:[0]}}],j={path:"/",query:{}},fe="redirect404";let D;function Oe(n){const t=[],e=$.user.info.type;for(let o=0;o<n.length;o++){const i=n[o],s=i.meta?i.meta.auth:void 0;(!s||s&&s.includes(e))&&(i.children&&i.children.length>0&&(i.children=Oe(i.children)),t.push(i))}return t}async function dn(){return Oe(un)}function fn(n,t){D=n,D.beforeEach(async function(e,o,i){if(ae.start(),$.user.info.token)if($.layout.addRouters.length>0)i();else{$.layout.addRouters=await dn();for(let s=0;s<$.layout.addRouters.length;s++){const f=$.layout.addRouters[s];D.addRoute(f)}D.hasRoute(fe)||D.addRoute({...t[1],path:"/:catchAll(.*)",name:fe}),$.layout.completeRouters=t.concat($.layout.addRouters),i({...e,replace:!0})}else e.path==="/login"?i():(j.path=e.path,j.query=e.query,i({path:"/login"}),ae.done())}),D.afterEach(e=>{ae.done(),e.meta&&e.meta.title&&(document.title=e.meta.title)})}function $n(){D.replace({path:j.path,query:j.query})}function mn(){const n=$.layout.addRouters;for(let t=n.length-1;t>-1;t--){const e=n[t];e.name&&D.hasRoute(e.name)&&D.removeRoute(e.name)}j.path="/",j.query={},D.removeRoute(fe),$.layout.addRouters=$.layout.completeRouters=[]}const Ce=[{path:"/login",name:"login",component:()=>k(()=>import("./login-DmRrYVGJ.js"),__vite__mapDeps([25,1,2,17,3,4,26]),import.meta.url),meta:{hidden:!0,title:"请登录"}},{path:"/404",name:"page-404",component:K,meta:{hidden:!0,title:"不存在该页面"}},{path:"/401",name:"page-401",component:()=>k(()=>import("./page-401-CPwelwL-.js"),__vite__mapDeps([27,1,2,28]),import.meta.url),meta:{hidden:!0,title:"暂无权限访问"}}];function Ie(n){n=JSON.parse(JSON.stringify(n));const t=[];for(let e=0;e<n.length;e++){const o=n[e];(!o.meta||o.meta&&!o.meta.hidden)&&(t.push(o),o.children&&o.children.length>0&&(o.children=Ie(o.children)))}return t}const Te=je({history:We(),routes:Ce});fn(Te,Ce);const pn="1.1.2",ue=[];function hn(n,t){let e;ue.length>1?e=ue.shift():(e=document.createElement("div"),e.className="ripple");const o=t.getBoundingClientRect(),i=t.getAttribute("color");let s=Math.max(o.width,o.height);s>200&&(s=200),e.style.height=e.style.width=s+"px",e.style.backgroundColor=i||"rgba(255, 255, 255, .45)",t.appendChild(e);const f=n.touches,m=f?f[0].clientY:n.clientY,l=f?f[0].clientX:n.clientX,d=m-o.top-e.offsetHeight/2,p=l-o.left-e.offsetWidth/2;e.style.top=d+"px",e.style.left=p+"px";function c(){e.removeEventListener("animationend",c),t.removeChild(e),ue.push(e)}e.addEventListener("animationend",c)}function gn(n={}){const t=document,e=`__${Math.random().toString(36).slice(2,7)}`,o={box:`msg-box${e}`,hide:`hide${e}`,text:`msg-text${e}`,icon:`msg-icon${e}`},i=t.createElement("style");i.textContent=`
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
  `.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),t.head.appendChild(i);const s=[];function f(d){let p=10;for(let c=0;c<s.length;c++){const r=s[c];if(d&&d===r)break;p+=r.clientHeight+20}return p}function m(d){for(let p=0;p<s.length;p++)if(s[p]===d){s.splice(p,1);break}d.classList.add(o.hide),s.forEach(function(p){p.style.top=`${f(p)}px`})}function l(d,p="info",c){const r=t.createElement("div");r.className=`${o.box} ${p}`,r.style.top=`${f()}px`,r.style.zIndex=Re.message,r.innerHTML=`
    <span class="${o.icon}"></span>
    <span class="${o.text}">${d}</span>
    `,s.push(r),t.body.appendChild(r);function a(){r.removeEventListener("animationend",a),setTimeout(m,c||n.duration||3e3,r)}r.addEventListener("animationend",a);function u(){getComputedStyle(r).opacity==="0"&&(r.removeEventListener("transitionend",u),r.remove())}r.addEventListener("transitionend",u)}return{show:l,info(d){l(d,"info")},success(d){l(d,"success")},warning(d){l(d,"warning")},error(d){l(d,"error")}}}function vn(){const n=document,t=`__${Math.random().toString(36).slice(2,7)}`,e={mask:`dialog-mask${t}`,popup:`dialog-popup${t}`,title:`dialog-title${t}`,content:`dialog-content${t}`,footer:`dialog-footer${t}`,confirm:`confirm${t}`,fade:`fade${t}`,show:`show${t}`,hide:`hide${t}`},o=`
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
  `,i=n.createElement("style");i.textContent=o.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),n.head.appendChild(i);const s={x:"0vw",y:"0vh"};n.addEventListener("click",function(m){const{innerWidth:l,innerHeight:d}=window,p=l/2,c=d/2,r=m.clientY-c,a=m.clientX-p;s.x=`${a/l*100}vw`,s.y=`${r/d*100}vh`},!0);function f(m){const l=n.createElement("section");l.className=e.mask,l.style.zIndex=Re.dialog,l.style.setProperty("--x",s.x),l.style.setProperty("--y",s.y),s.x="0vw",s.y="0vh";const d=m.cancelText?`<button class="the-btn">${m.cancelText}</button>`:"";l.innerHTML=`
    <div class="${e.popup}">
      <h2 class="${e.title}">${typeof m.title=="string"?m.title:"提示"}</h2>
      <div class="${e.content}">${m.content}</div>
      <div class="${e.footer}">
        ${d}
        <button class="${e.confirm} the-btn blue">${m.confirmText||"确认"}</button>
      </div>
    </div>
    `,n.body.appendChild(l),l.addEventListener("transitionend",function(c){c.target===l&&l.classList.contains(e.hide)&&l.remove()});function p(){l.classList.add(e.hide)}m.cancelText&&(l.querySelector(`.${e.footer} button`).onclick=function(){p(),m.cancel&&m.cancel()}),l.querySelector(`.${e.confirm}`).onclick=function(){p(),m.confirm&&m.confirm()}}return{show:f}}const Re={get message(){return(de()+20).toString()},get dialog(){return(de()+10).toString()}},xe=gn({duration:3600}),yn=vn(),kn=yn.show;window.version=pn;const W=Xe(Ue);W.directive("copy",{mounted(n,t){n.addEventListener("click",function(){lt(t.value,()=>xe.success("复制成功"),e=>xe.success(e))})}});W.directive("ripple",{mounted(n){const t=ct()?"touchstart":"mousedown";n.setAttribute("ripple",""),n.addEventListener(t,function(e){hn(e,n)})}});W.component("svg-icon",Ze);W.component("base-dialog",it);W.use(Te);W.mount("#app");export{we as _,V as a,kn as b,lt as c,Se as d,rt as e,k as f,xn as i,Le as j,xe as m,$n as o,$ as s};
