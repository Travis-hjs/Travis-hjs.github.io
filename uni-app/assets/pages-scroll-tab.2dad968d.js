import{d as l,q as a,j as e,ab as t,_ as s,o as c,c as o,w as i,a as r,e as u,r as n,u as f,F as v,a1 as d,f as b,ac as _,G as m,b as x,t as p}from"./index-9c1d1735.js";import{o as k}from"./control.41ccfec6.js";import{_ as w}from"./pluginHelper.1b428a4d.js";const L=w(l({__name:"scroll-tab",setup(l){const w=d(),L=new Array(12).fill(0).map((function(l,e){return{label:a(2,6),value:e}})),V=e({activeValue1:0,scrollLeft1:0,activeValue2:0,scrollLeft2:0});let h=0;return t((function(){s().in(w).select("#list-2").boundingClientRect((function(l){h=Array.isArray(l)?l[0].width:l.width})).exec(),V.activeValue1=5,k({ctx:w,id:"one-5",scrollValue:V.scrollLeft1,callback(l){V.scrollLeft1=l}})})),(l,a)=>{const e=b,t=_;return c(),o(e,{class:"scroll-tab"},{default:i((()=>[r(t,{"scroll-x":"true","scroll-with-animation":"","scroll-left":V.scrollLeft1,class:"list-1 mgb_50"},{default:i((()=>[r(e,{class:"tab-box flex"},{default:i((()=>[(c(!0),u(v,null,n(f(L),(l=>(c(),o(e,{class:m(["tab-item fvc",{active:V.activeValue1===l.value}]),onClick:a=>function(l,a){V.activeValue1=l.value,k({ctx:w,id:"one-"+l.value,event:a,callback(l){V.scrollLeft1=l}})}(l,a),id:"one-"+l.value,key:l.value},{default:i((()=>[x(p(l.label),1)])),_:2},1032,["class","onClick","id"])))),128))])),_:1})])),_:1},8,["scroll-left"]),r(t,{"scroll-x":"true","scroll-with-animation":"","scroll-left":V.scrollLeft2,class:"list-2",id:"list-2"},{default:i((()=>[r(e,{class:"tab-box flex"},{default:i((()=>[(c(!0),u(v,null,n(f(L),(l=>(c(),o(e,{class:m(["tab-item fvc",{active:V.activeValue2===l.value}]),onClick:a=>function(l,a){V.activeValue2=l.value,k({ctx:w,id:"two-"+l.value,event:a,wrapWidth:h,callback(l){V.scrollLeft2=l}})}(l,a),id:"two-"+l.value,key:l.value},{default:i((()=>[x(p(l.label),1)])),_:2},1032,["class","onClick","id"])))),128))])),_:1})])),_:1},8,["scroll-left"])])),_:1})}}}),[["__scopeId","data-v-ca026727"]]);export{L as default};