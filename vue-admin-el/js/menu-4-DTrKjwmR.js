import{s as g,d as n,r as x}from"./index-BFotbu0e.js";import{d as u,e as _,f as p,i as s,b as h,c as a,u as v,g as m,C as d}from"./element-plus-CetPY_yD.js";const C={class:"goods-form"},b=s("h2",{class:"the-title is-line mgb-20"},"商品表单组件-测试文件",-1),y=["value"],$=u({__name:"GoodsForm",props:{form:{type:Object,required:!0}},setup(r){const e=r;return(l,c)=>(_(),p("div",C,[b,s("div",null,[s("textarea",{cols:"30",rows:"10",readonly:"",value:JSON.stringify(e.form,null,4)},null,8,y)])]))}}),k={class:"menu-4"},N=s("div",{class:"mgb-20"},[s("span",{class:"the-tag cyan"},"menu-4")],-1),w=u({__name:"menu-4",setup(r){const e=g.goods;function l(){const o=["xs","s","m","l","xl","2xl"];e.update({id:n(0,999),name:x(2,20),price:n(1,999),specs:{size:o[n(0,o.length-1)]}})}function c(){e.reset()}return(o,t)=>{const i=h("el-button");return _(),p("div",k,[N,a($,{class:"mgb-20",form:v(e).info},null,8,["form"]),a(i,{type:"primary",onClick:t[0]||(t[0]=f=>l())},{default:m(()=>[d("修改商品信息")]),_:1}),a(i,{onClick:t[1]||(t[1]=f=>c())},{default:m(()=>[d("重置商品信息")]),_:1})])}}});export{w as default};