import{s as g,r as n,d as x}from"./index-C1iCZPZe.js";import{d,o as u,b as p,e as s,r as h,i as r,u as v,j as m,B as _}from"./vendor-DLKUgWGa.js";const b={class:"goods-form"},C=s("h2",{class:"the-title mgb_20"},"商品表单组件-测试文件",-1),y=["value"],$=d({__name:"GoodsForm",props:{form:{type:Object,required:!0}},setup(a){const e=a;return(l,c)=>(u(),p("div",b,[C,s("div",null,[s("textarea",{cols:"30",rows:"10",readonly:"",value:JSON.stringify(e.form,null,4)},null,8,y)])]))}}),k={class:"menu-4"},B=s("div",{class:"mgb_20"},[s("span",{class:"the-tag cyan"},"menu-4")],-1),j=d({__name:"menu-4",setup(a){const e=g.goods;function l(){const o=["xs","s","m","l","xl","2xl"];e.update({id:n(0,999),name:x(2,20),price:n(1,999),specs:{size:o[n(0,o.length-1)]}})}function c(){e.reset()}return(o,t)=>{const i=h("el-button");return u(),p("div",k,[B,r($,{class:"mgb_20",form:v(e).info},null,8,["form"]),r(i,{type:"primary",onClick:t[0]||(t[0]=f=>l())},{default:m(()=>[_("修改商品信息")]),_:1}),r(i,{onClick:t[1]||(t[1]=f=>c())},{default:m(()=>[_("重置商品信息")]),_:1})])}}});export{j as default};