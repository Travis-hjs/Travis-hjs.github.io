import{d as e,s as t,o as s,c as r,w as n,a,b as o,t as u,u as p,f as l,g as i}from"./index-9c1d1735.js";import{_ as c}from"./pluginHelper.1b428a4d.js";const d=function(){const e="prod",t={dev:"/api",prod:"https://huangjingsheng.com/api"};return{get requestOvertime(){return 8e3},get apiUrl(){return t[e]},get env(){return e},get uploadUrl(){return"http://xxx.com/upload"}}}(),f=c(e({__name:"personal",setup(e){const c=t.user.info;return(e,f)=>{const g=l,m=i;return s(),r(g,{class:"personal"},{default:n((()=>[a(g,{style:{"margin-bottom":"40rpx","font-size":"30rpx"}},{default:n((()=>[o("userInfo: "+u(JSON.stringify(p(c),null,4)),1)])),_:1}),a(m,{class:"button-pink",onClick:f[0]||(f[0]=e=>{t.user.reset()})},{default:n((()=>[o("清空`userInfo`")])),_:1}),o(" 环境变量："+u(p(d).env),1)])),_:1})}}}),[["__scopeId","data-v-625e21c7"]]);export{f as default};