import{s as b,j,m as T,a as k,c as N,b as W,i as E}from"./index-6gIBH12-.js";import{d as O,g as M,i as q,j as D,r as C,o as L,e as J,f as i,u as f,a as t,w as n,C as m}from"./element-plus-BSReT4aI.js";const G={class:"page-home"},K=i("h2",{class:"the-title mgb-30"},"Vue3 + Vite + TypeScript 后台管理模板",-1),Q={class:"mgb-40"},R=i("span",{class:"the-tag blue"},"无 UI 框架依赖，可以无缝接入自己喜欢的任何第三方库",-1),X=["href"],Y=i("h2",{class:"the-title mgb-30"},"布局操作开关",-1),Z=i("h2",{class:"the-title mgb-30"},"主题&样式",-1),_=i("span",{class:"the-tag blue"},[i("i",{class:"el-icon-question el-icon--left"}),m("修改此值需要手动刷新页面")],-1),c=i("h2",{class:"the-title mgb-30"},"打赏一下",-1),ee=i("div",{class:"code-box"},[i("img",{class:"hovercode",src:"https://travis-hjs.github.io/images/wxcode1.jpg"}),i("img",{class:"qrcode",src:"https://travis-hjs.github.io/images/reward-code.jpg"})],-1),v="theme-diy-style",ne=O({__name:"home",setup(oe){const p=b.layout.info,h=b.projectInfo.link,s=["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"];function H(){return{wholeBgColor:"#ffffff",sidebarWidth:210,menuBgColor:"#001529",menuHoverBgColor:"rgba(255, 255, 255, 0.1)",menuItemBgColor:"#000c17",menuItemBgActivedColor:"#1890FF",menuItemTagColor:"#1890FF",menuPadding:20,menuFontSize:14,menuTitleHeight:50,menuItemHeight:44,menuTextColor:"#ffffffa6",menuTextActivedColor:"#ffffff",navbarHeight:50,contentPadding:12,contentBgColor:"#eeeeee",pagePadding:14}}const l=M(H()),U=()=>`
.the-layout {
  --whole-bg-color: ${l.wholeBgColor};
  --sidebar-width: ${l.sidebarWidth}px;
  --menu-bg-color: ${l.menuBgColor};
  --menu-hover-bg-color: ${l.menuHoverBgColor};
  --menu-item-bg-color: ${l.menuItemBgColor};
  --menu-item-bg-actived-color: ${l.menuItemBgActivedColor};
  --menu-item-tag-color: ${l.menuItemTagColor};
  --menu-padding: ${l.menuPadding}px;
  --menu-font-size: ${l.menuFontSize}px;
  --menu-title-height: ${l.menuTitleHeight}px;
  --menu-item-height: ${l.menuItemHeight}px;
  --menu-text-color: ${l.menuTextColor};
  --menu-text-actived-color: ${l.menuTextActivedColor};
  --navbar-height: ${l.navbarHeight}px;
  --content-padding: ${l.contentPadding}px;
  --content-bg-color: ${l.contentBgColor};
  --page-padding: ${l.pagePadding}px;
}
`;function x(a=!1){let e=document.getElementById(v);e||(e=document.createElement("style"),e.id=v,document.head.appendChild(e)),e.textContent=U(),b.layout.menuSizeInfo.titleHeight=l.menuTitleHeight,b.layout.menuSizeInfo.itemHeight=l.menuItemHeight,a||(k.success("应用成功！"),sessionStorage.setItem(v,JSON.stringify(l)))}function S(){N(U(),function(){W({title:"复制成功！",content:"请将代码复制在`src/styles/layout.scss`中即可"})})}function P(){T(l,H()),sessionStorage.removeItem(v),b.layout.menuSizeInfo.titleHeight=l.menuTitleHeight,b.layout.menuSizeInfo.itemHeight=l.menuItemHeight;const a=document.getElementById(v);a&&a.remove()}function A(){const a=H();T(a,{menuBgColor:"#ffffff",menuHoverBgColor:"rgba(214, 231, 255, 0.2)",menuItemBgColor:"#ffffff",menuItemBgActivedColor:"#ecf5ff",menuTextColor:"#545454",menuTextActivedColor:"#1388f6"}),T(l,a),x()}const w={sidebarWidth:100,menuPadding:0,menuFontSize:10,menuTitleHeight:20,menuItemHeight:20,navbarHeight:38,contentPadding:0,pagePadding:0};let y;function V(a,e){const I=E(a),u=Number(I);l[e]=u,clearTimeout(y),y=setTimeout(function(){u<w[e]&&(l[e]=w[e]),x()},500)}function r(){x()}return q(function(){const a=j(sessionStorage.getItem(v),void 0);a&&(T(l,a),x(!0))}),D(function(){clearTimeout(y)}),(a,e)=>{const I=C("el-switch"),u=C("el-form-item"),$=C("el-radio-button"),z=C("el-radio-group"),d=C("el-input"),g=C("el-color-picker"),B=C("el-button"),F=C("el-form");return L(),J("div",G,[K,i("div",Q,[R,i("a",{class:"the-tag green",href:f(h),target:"_blank"},"项目地址",8,X)]),t(F,{class:"the-form mgb-30","label-width":"160px",size:"small"},{default:n(()=>[Y,t(u,{label:"显示侧边栏logo"},{default:n(()=>[t(I,{modelValue:f(p).showSidebarLogo,"onUpdate:modelValue":e[0]||(e[0]=o=>f(p).showSidebarLogo=o),"active-text":"显示","inactive-text":"隐藏"},null,8,["modelValue"])]),_:1}),t(u,{label:"显示历史记录标签"},{default:n(()=>[t(I,{modelValue:f(p).showTagsView,"onUpdate:modelValue":e[1]||(e[1]=o=>f(p).showTagsView=o),"active-text":"显示","inactive-text":"隐藏"},null,8,["modelValue"])]),_:1}),t(u,{label:"侧边栏展开"},{default:n(()=>[t(I,{modelValue:f(p).sidebarOpen,"onUpdate:modelValue":e[2]||(e[2]=o=>f(p).sidebarOpen=o),"active-text":"展开","inactive-text":"收起"},null,8,["modelValue"])]),_:1}),t(u,{label:"布局模式"},{default:n(()=>[t(z,{modelValue:f(p).layoutMode,"onUpdate:modelValue":e[3]||(e[3]=o=>f(p).layoutMode=o)},{default:n(()=>[t($,{value:""},{default:n(()=>[m("默认布局")]),_:1}),t($,{value:"full-header"},{default:n(()=>[m("顶部撑满")]),_:1})]),_:1},8,["modelValue"])]),_:1}),Z,t(u,{label:"整体背景颜色"},{default:n(()=>[t(d,{modelValue:l.wholeBgColor,"onUpdate:modelValue":e[4]||(e[4]=o=>l.wholeBgColor=o)},null,8,["modelValue"]),t(g,{modelValue:l.wholeBgColor,"onUpdate:modelValue":e[5]||(e[5]=o=>l.wholeBgColor=o),"show-alpha":"",predefine:s,onChange:e[6]||(e[6]=o=>r())},null,8,["modelValue"])]),_:1}),t(u,{label:"侧边菜单栏宽度"},{default:n(()=>[t(d,{modelValue:l.sidebarWidth,"onUpdate:modelValue":e[7]||(e[7]=o=>l.sidebarWidth=o),onInput:e[8]||(e[8]=o=>V(o,"sidebarWidth"))},{suffix:n(()=>[m("px")]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"侧边菜单栏背景色"},{default:n(()=>[t(d,{modelValue:l.menuBgColor,"onUpdate:modelValue":e[9]||(e[9]=o=>l.menuBgColor=o)},null,8,["modelValue"]),t(g,{modelValue:l.menuBgColor,"onUpdate:modelValue":e[10]||(e[10]=o=>l.menuBgColor=o),"show-alpha":"",predefine:s,onChange:e[11]||(e[11]=o=>r())},null,8,["modelValue"])]),_:1}),t(u,{label:"菜单hover动画背景色"},{default:n(()=>[t(d,{modelValue:l.menuHoverBgColor,"onUpdate:modelValue":e[12]||(e[12]=o=>l.menuHoverBgColor=o)},null,8,["modelValue"]),t(g,{modelValue:l.menuHoverBgColor,"onUpdate:modelValue":e[13]||(e[13]=o=>l.menuHoverBgColor=o),"show-alpha":"",predefine:s,onChange:e[14]||(e[14]=o=>r())},null,8,["modelValue"])]),_:1}),t(u,{label:"菜单选项背景色"},{default:n(()=>[t(d,{modelValue:l.menuItemBgColor,"onUpdate:modelValue":e[15]||(e[15]=o=>l.menuItemBgColor=o)},null,8,["modelValue"]),t(g,{modelValue:l.menuItemBgColor,"onUpdate:modelValue":e[16]||(e[16]=o=>l.menuItemBgColor=o),"show-alpha":"",predefine:s,onChange:e[17]||(e[17]=o=>r())},null,8,["modelValue"])]),_:1}),t(u,{label:"菜单选项激活状态背景色"},{default:n(()=>[t(d,{modelValue:l.menuItemBgActivedColor,"onUpdate:modelValue":e[18]||(e[18]=o=>l.menuItemBgActivedColor=o)},null,8,["modelValue"]),t(g,{modelValue:l.menuItemBgActivedColor,"onUpdate:modelValue":e[19]||(e[19]=o=>l.menuItemBgActivedColor=o),"show-alpha":"",predefine:s,onChange:e[20]||(e[20]=o=>r())},null,8,["modelValue"])]),_:1}),t(u,{label:"菜单选项激活伪类颜色"},{default:n(()=>[t(d,{modelValue:l.menuItemTagColor,"onUpdate:modelValue":e[21]||(e[21]=o=>l.menuItemTagColor=o)},null,8,["modelValue"]),t(g,{modelValue:l.menuItemTagColor,"onUpdate:modelValue":e[22]||(e[22]=o=>l.menuItemTagColor=o),"show-alpha":"",predefine:s,onChange:e[23]||(e[23]=o=>r())},null,8,["modelValue"])]),_:1}),t(u,{label:"菜单左右间距"},{default:n(()=>[t(d,{modelValue:l.menuPadding,"onUpdate:modelValue":e[24]||(e[24]=o=>l.menuPadding=o),onInput:e[25]||(e[25]=o=>V(o,"menuPadding"))},{suffix:n(()=>[m("px")]),_:1},8,["modelValue"]),_]),_:1}),t(u,{label:"菜单字体大小"},{default:n(()=>[t(d,{modelValue:l.menuFontSize,"onUpdate:modelValue":e[26]||(e[26]=o=>l.menuFontSize=o),onInput:e[27]||(e[27]=o=>V(o,"menuFontSize"))},{suffix:n(()=>[m("px")]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"菜单标题高度"},{default:n(()=>[t(d,{modelValue:l.menuTitleHeight,"onUpdate:modelValue":e[28]||(e[28]=o=>l.menuTitleHeight=o),onInput:e[29]||(e[29]=o=>V(o,"menuTitleHeight"))},{suffix:n(()=>[m("px")]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"菜单栏目高度"},{default:n(()=>[t(d,{modelValue:l.menuItemHeight,"onUpdate:modelValue":e[30]||(e[30]=o=>l.menuItemHeight=o),onInput:e[31]||(e[31]=o=>V(o,"menuItemHeight"))},{suffix:n(()=>[m("px")]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"侧边菜单栏文字默认颜色"},{default:n(()=>[t(d,{modelValue:l.menuTextColor,"onUpdate:modelValue":e[32]||(e[32]=o=>l.menuTextColor=o)},null,8,["modelValue"]),t(g,{modelValue:l.menuTextColor,"onUpdate:modelValue":e[33]||(e[33]=o=>l.menuTextColor=o),"show-alpha":"",predefine:s,onChange:e[34]||(e[34]=o=>r())},null,8,["modelValue"])]),_:1}),t(u,{label:"侧边菜单栏文字激活颜色"},{default:n(()=>[t(d,{modelValue:l.menuTextActivedColor,"onUpdate:modelValue":e[35]||(e[35]=o=>l.menuTextActivedColor=o)},null,8,["modelValue"]),t(g,{modelValue:l.menuTextActivedColor,"onUpdate:modelValue":e[36]||(e[36]=o=>l.menuTextActivedColor=o),"show-alpha":"",predefine:s,onChange:e[37]||(e[37]=o=>r())},null,8,["modelValue"])]),_:1}),t(u,{label:"顶部导航栏高度"},{default:n(()=>[t(d,{modelValue:l.navbarHeight,"onUpdate:modelValue":e[38]||(e[38]=o=>l.navbarHeight=o),onInput:e[39]||(e[39]=o=>V(o,"navbarHeight"))},{suffix:n(()=>[m("px")]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"主容器内边距"},{default:n(()=>[t(d,{modelValue:l.contentPadding,"onUpdate:modelValue":e[40]||(e[40]=o=>l.contentPadding=o),onInput:e[41]||(e[41]=o=>V(o,"contentPadding"))},{suffix:n(()=>[m("px")]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"主容器背景色"},{default:n(()=>[t(d,{modelValue:l.contentBgColor,"onUpdate:modelValue":e[42]||(e[42]=o=>l.contentBgColor=o)},null,8,["modelValue"]),t(g,{modelValue:l.contentBgColor,"onUpdate:modelValue":e[43]||(e[43]=o=>l.contentBgColor=o),"show-alpha":"",predefine:s,onChange:e[44]||(e[44]=o=>r())},null,8,["modelValue"])]),_:1}),t(u,{label:"页面内边距"},{default:n(()=>[t(d,{modelValue:l.pagePadding,"onUpdate:modelValue":e[45]||(e[45]=o=>l.pagePadding=o),onInput:e[46]||(e[46]=o=>V(o,"pagePadding"))},{suffix:n(()=>[m("px")]),_:1},8,["modelValue"])]),_:1}),t(u,null,{default:n(()=>[t(B,{type:"primary",onClick:e[47]||(e[47]=o=>x())},{default:n(()=>[m("应用当前配置")]),_:1}),t(B,{type:"success",onClick:e[48]||(e[48]=o=>S())},{default:n(()=>[m("复制当前配置")]),_:1}),t(B,{type:"info",plain:"",onClick:e[49]||(e[49]=o=>P())},{default:n(()=>[m("重置默认样式")]),_:1}),t(B,{type:"primary",onClick:e[50]||(e[50]=o=>A())},{default:n(()=>[m("应用预设配置")]),_:1})]),_:1})]),_:1}),c,ee])}}});export{ne as default};