import{d as e,V as l,C as t,K as a,$ as s,G as o,o as r,c as n,w as i,a as u,n as d,b as c,e as f,B as p,t as v,W as m,X as h,Y as g,H as b,Z as y,_ as S,Q as _,i as w,a0 as F,a1 as O,a2 as x,E as J,a3 as N}from"./index-b795adff.js";import{_ as j}from"./_plugin-vue_export-helper.1b428a4d.js";const k=j(e({name:"TheFormItem",props:{label:{type:String,default:""},prop:{type:String,default:""},rules:{type:Array,default:()=>[]},...$(!0)},setup(e,{expose:O}){const x=e,J=F(),N=h("theFormComponent"),j=N.$props,k=l((function(){let e=!1;const l=j.rules;return l&&l[x.prop]&&l[x.prop].length&&(e=l[x.prop].some((e=>e.required))),x.rules&&x.rules.length>0&&(e=x.rules.some((e=>e.required))),e})),$=l((()=>x.labelPosition||j.labelPosition)),I=l((()=>x.labelWidth||j.labelWidth)),V=l((()=>b(x.border,"boolean")?!!x.border:!!j.border)),T=t("-"),C=t(!1);function E(){let e=0;y().in(J).selectViewport().scrollOffset((l=>{b(l,"object")&&(e=l.scrollTop)})).select(".the-form-item").boundingClientRect((l=>{if(b(l,"array"))return;const t=e+l.top;S({scrollTop:t-50,duration:100})})).exec()}const M={...x,resetField:function(){C.value=!1},validateField:function(e){let l;const t=x.prop,a=j.rules,s=j.model,o=g(s,t),r="校验不通过";if(k.value&&t){const e=x.rules,s=[];a&&a[t]&&s.push(...a[t]),e&&e.length>0&&s.push(...e);for(let t=0;t<s.length;t++){const e=s[t];if(e.type){if(!b(o,e.type)){l=e,T.value=e.message||r,C.value=!0;break}C.value=!1}if(e.reg){const t=new RegExp(e.reg.slice(1,e.reg.length-1));if(b(t,"regexp")){if(!t.test(o.toString())){l=e,T.value=e.message||r,C.value=!0;break}C.value=!1}else console.warn("validateField >> ruls 传入的 reg 非正则，已跳过验证")}if(["",null,void 0].includes(o)||0===o.length){l=e,T.value=e.message||r,C.value=!0;break}C.value=!1}}e(t||"",l?[l]:[])},scrollIntoView:E,showValidateField:function(e){e&&(T.value=e),C.value=!0,j.validateScroll&&E()}};return a((function(){x.prop&&s(N.eventMap.add,M)})),o((function(){s(N.eventMap.remove,M)})),O(M),(l,t)=>{const a=_,s=w;return r(),n(s,{class:d(["the-form-item",{"the-form-item-border":V.value}])},{default:i((()=>[u(s,{class:d([{flex:"top"!==$.value}])},{default:i((()=>[u(s,{class:d(["the-form-label ellipsis",{"the-form-label-right":"right"===$.value}]),style:c({width:I.value})},{default:i((()=>[k.value?(r(),n(a,{key:0,class:"the-form-symbol"},{default:i((()=>[f("*")])),_:1})):p("",!0),u(a,null,{default:i((()=>[f(v(e.label),1)])),_:1})])),_:1},8,["class","style"]),u(s,{class:d(["the-form-value-box",{f1:"top"!==$.value}])},{default:i((()=>[m(l.$slots,"default",{},void 0,!0),u(s,{class:"validate-text"},{default:i((()=>[u(s,{class:d(["validate-tip ellipsis",{"validate-tip-show":C.value}])},{default:i((()=>[f(v(T.value),1)])),_:1},8,["class"])])),_:1})])),_:3},8,["class"])])),_:3},8,["class"])])),_:3},8,["class"])}}}),[["__scopeId","data-v-310e49eb"]]);function $(e){return{labelWidth:{type:String,default:""},labelPosition:{type:String,default:e?"":"left"},border:{type:[Boolean,String],default:!!e&&"-"}}}let I=1;const V=j(e({name:"TheForm",props:{model:{type:Object,required:!0},rules:{type:Object,default:()=>({})},validateScroll:{type:Boolean,default:!0},...$()},setup(e,{expose:l}){const t=e,a=I;I++;let s={},u={};const d=[];var c,f;c=t.model,f=t.rules||{},s={},u={},c&&(s=JSON.parse(JSON.stringify(c))),f&&(u=JSON.parse(JSON.stringify(f)));const p={add:`add-the-form-item-${a}`,remove:`remove-the-form-item-${a}`};O(p.add,(function(e){d.push(e)})),O(p.remove,(function(e){e.prop&&d.splice(d.indexOf(e),1)})),o((function(){x([p.add,p.remove])})),N("theFormComponent",{eventMap:p,$props:t});let v={};function h(e,l,a=!1){if(!t.model)return console.warn('表单验证缺少 "model" 对象');if(!t.rules)return console.warn('表单验证缺少 "rules" 对象，无法验证');let s={},o=[],r=!0;for(let n=0;n<d.length;n++){const l=d[n];if((t.rules&&t.rules[e]||l.rules&&l.rules.length)&&l.prop===e){l.validateField((function(e,t){e&&t.length>0&&(s[e]=t,r=!1,o.push(l),v[e]=!0)}));break}}t.validateScroll&&!a&&o.length>0&&o[0].scrollIntoView(),l&&l(r,s)}return J((()=>t.model),(function(e){const l=Object.keys(v);if(l.length)for(let t=0;t<l.length;t++){const a=l[t],s=g(e,a);""!==s&&null!=s&&0!==s.length&&h(a,(e=>{e&&delete v[a]}),!0)}}),{deep:!0}),l({eventMap:p,validate:function(e){if(!t.model)return console.warn('表单验证缺少 "model" 对象');if(!t.rules)return console.warn('表单验证缺少 "rules" 对象，无法验证');let l={},a=[],s=!0;d.forEach((function(e){e.validateField((function(t,o){t&&o.length>0&&(l[t]=o,s=!1,a.push(e),v[t]=!0)}))})),t.validateScroll&&a.length>0&&a[0].scrollIntoView(),e&&e(s,l)},validateField:h,resetFields:function(e){if(!t.model)return console.warn('表单验证缺少 "model" 对象');v={},d.forEach((e=>{e.resetField()})),e&&e(JSON.parse(JSON.stringify(s)),JSON.parse(JSON.stringify(u)))},resetField:function(e){for(let l=0;l<d.length;l++){const t=d[l];if(t.prop===e){Object.prototype.hasOwnProperty.call(v,e)&&delete v[e],t.resetField();break}}}}),(e,l)=>{const t=w;return r(),n(t,{class:"the-form"},{default:i((()=>[m(e.$slots,"default",{},void 0,!0)])),_:3})}}}),[["__scopeId","data-v-2656d0cf"]]);export{k as T,V as a};