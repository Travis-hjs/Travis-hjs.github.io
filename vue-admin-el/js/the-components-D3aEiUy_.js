import{c as A,a as B,e as I,b as E}from"./index-BFotbu0e.js";import{u as L}from"./common-BnokhgWM.js";import{d as M,j as C,y as q,e as c,f as u,l as G,m as H,i as e,t as _,p as z,w as J,o as K,q as P,r as N,b as U,c as n,u as w,g as l,C as g,F as S,z as V}from"./element-plus-CetPY_yD.js";const Q={class:"base-upload-image"},R={key:0,class:"image-box"},W=["src"],X={class:"remove fvc"},Y=e("div",{class:"add-icon"},null,-1),Z=["accept"],ee={key:0,class:"upload-tip"},te={name:"UploadImage"},F=M({...te,props:{src:{type:String,default:""},uploadId:{type:[String,Number],default:""},width:{type:String,default:"178px"},height:{type:String,default:"178px"},autoHeight:{type:Boolean,default:!1},tip:{type:[String,Number],default:""},maxSize:{type:Number,default:5},copy:{type:Boolean,default:!0},accept:{type:Array,default:()=>["image/jpg","image/png","image/jpeg","image/gif"]}},emits:["change"],setup(o,{emit:h}){const d=o,i=C(!1),a=C(),b=h;function T(){b("change",{id:d.uploadId,src:""})}function x(){A(d.src,()=>B.success("复制图片地址成功！"),y=>B.error(y))}async function k(){const y=a.value,f=y.files[0];if(y.value="",f.size>d.maxSize*1024*1024)return B.warning(`上传的文件不能大于 ${d.maxSize}M`);const $=new FormData;$.append("file",f),i.value=!0;const m=await L($);if(i.value=!1,console.log("上传图片 >>",m),m.code===1){const v=m.data.url;b("change",{id:d.uploadId,src:v})}}return(y,f)=>{const $=q("loading");return c(),u("div",Q,[G((c(),u("div",{class:"base-upload-content",style:H({width:o.width})},[o.src?(c(),u("div",R,[e("img",{class:"image",src:o.src,style:H({height:o.autoHeight?"":o.height})},null,12,W),e("div",X,[e("i",{class:"upload-icon el-icon-delete",onClick:f[0]||(f[0]=m=>T())}),e("i",{class:"upload-icon el-icon-document-copy",onClick:f[1]||(f[1]=m=>x())})])])):(c(),u("div",{key:1,class:"upload-box fvc",style:H({height:o.height})},[Y,e("input",{class:"upload-input",type:"file",name:"picture",ref_key:"uploadInput",ref:a,accept:o.accept.toString(),onChange:f[2]||(f[2]=m=>k())},null,40,Z)],4))],4)),[[$,i.value]]),o.tip?(c(),u("p",ee,_(i.value?"上传中...":o.tip),1)):z("",!0)])}}}),se={name:"CollapseHeight"},O=M({...se,props:{show:{type:Boolean}},setup(o){const h=o,d=C();return J(()=>h.show,function(i,a){i!==a&&(i?j(d.value):oe(d.value))}),K(function(){const i=d.value;i.addEventListener("transitionend",function(){h.show?i.style.height="":i.style.display="none"}),i.clientHeight>0&&j(i)}),(i,a)=>(c(),u("section",{class:"collapse-height",ref_key:"collapseBox",ref:d},[P(i.$slots,"default")],512))}});function j(o){if(!o)return;o.style.display="",o.style.height="";const h=o.clientHeight;o.style.height="0px",o.offsetHeight,o.style.height=`${h}px`}function oe(o){if(!o)return;const h=o.clientHeight;o.style.height=`${h}px`,o.offsetHeight,o.style.height="0px"}const le={class:"the-components"},ne=e("div",{class:"mgb-30"},[e("h2",{class:"the-title is-line"},"上传图片组件")],-1),ie={class:"flex mgb-40"},ae={class:"mgb-30"},de=e("h2",{class:"the-title is-line mgr-40"},"滚动条组件",-1),ce=e("div",{class:"mgb-20"},[e("span",{class:"the-tag green"},"横向滚动")],-1),ue={class:"list-x mgb-40"},re=e("div",{class:"mgb-20"},[e("span",{class:"the-tag blue"},"垂直滚动")],-1),pe={class:"list-y mgb-40"},ge=e("div",{class:"mgb-10"},[e("span",{class:"the-tag cyan"},"宽高超出滚动")],-1),he={style:{width:"300px",height:"140px"},class:"mgb-30"},fe=e("div",{style:{width:"500px",height:"300px","background-color":"yellow",color:"#555","line-height":"28px"}},[e("p",null,"内容内容内容内容内容内容内容"),e("p",null,"内容内容内容内容内容内容内容内容内容"),e("p",null,"内容内容内容内容内容内容内容")],-1),me=e("div",{class:"mgb-30"},[e("h2",{class:"the-title is-line mgr-40"},"折叠盒子")],-1),ye={class:"mgb-20"},ve={class:"flex"},_e=e("div",{class:"collapse-box"},"box-one",-1),be=e("div",{class:"collapse-box"},"box-two",-1),we=e("div",{class:"mgb-30"},[e("h2",{class:"the-title is-line mgr-40"},"自定义全局 Dialog 组件")],-1),xe={class:"mgb-30 flex"},$e=e("div",{class:"f1"},null,-1),ke={class:"mgb-10"},Ce={key:0},Te=e("p",null,[e("span",{class:"the-tag orange"},"当前不可点击遮罩层关闭")],-1),Se={class:"mgb-10"},Ve={key:0},Be={class:"mgb-10"},De={class:"dialog-list"},Ie=e("div",{class:"mgb-30"},[e("h2",{class:"the-title is-line"},"自定义 Message 控件")],-1),He={class:"mgb-50"},Ne=e("div",{class:"mgb-30"},[e("h2",{class:"the-title is-line"},"自定义 MessageBox 控件")],-1),ze={class:"mgb-50"},je=M({__name:"the-components",setup(o){const h=N({banner:"",logo:""}),d=C(new Array(10).fill(0).map((r,t)=>t+1));function i(r){h[r.id]=r.src}const a=N({first:{show:!1,count:0},second:{show:!1,count:0},third:{show:!1,count:0}}),b=C(!1);let T;function x(r){a[r].count++,a[r].show=!0,T=setTimeout(()=>{b.value=!0},2e3)}function k(r){a[r].show=!1,y()}function y(){b.value=!1,clearTimeout(T)}const f=[{label:"message-info",type:"info",btnType:"primary"},{label:"message-success",type:"success",btnType:"success"},{label:"message-warning",type:"warning",btnType:"warning"},{label:"message-error",type:"error",btnType:"danger"}];function $(r){B.show(`This is a prompt message for ${r.type}`,r.type)}function m(r=!1){E({content:r?"确认取消框":"确认框",cancelText:r?"取消":void 0})}const v=N({showOne:!0,showTwo:!0});return(r,t)=>{const p=U("el-button"),D=U("base-dialog");return c(),u("div",le,[ne,e("div",ie,[n(w(F),{uploadId:"logo",src:h.logo,tip:"正方形图片",onChange:i},null,8,["src"]),n(w(F),{uploadId:"banner",src:h.banner,tip:"高度自适应",autoHeight:!0,onChange:i},null,8,["src"])]),e("div",ae,[de,n(p,{type:"success",onClick:t[0]||(t[0]=()=>d.value.push(d.value.length+1))},{default:l(()=>[g("添加一个列表 item")]),_:1}),n(p,{type:"primary",onClick:t[1]||(t[1]=s=>x("first"))},{default:l(()=>[g("打开弹出层-1")]),_:1})]),ce,e("div",ue,[n(w(I),{thumbColor:"#42b983"},{default:l(()=>[(c(!0),u(S,null,V(d.value,s=>(c(),u("div",{class:"item item-text",key:s},"item-"+_(s),1))),128))]),_:1})]),re,e("div",pe,[n(w(I),{thumbColor:"#42b983"},{default:l(()=>[(c(!0),u(S,null,V(d.value,s=>(c(),u("div",{class:"item item-text",key:s},"item-"+_(s),1))),128))]),_:1})]),ge,e("div",he,[n(w(I),null,{default:l(()=>[fe]),_:1})]),me,e("section",null,[e("div",ye,[n(p,{type:"primary",onClick:t[2]||(t[2]=s=>v.showOne=!v.showOne)},{default:l(()=>[g("box-one switch")]),_:1}),n(p,{type:"primary",onClick:t[3]||(t[3]=s=>v.showTwo=!v.showTwo)},{default:l(()=>[g("box-one switch")]),_:1})]),e("div",ve,[n(w(O),{show:v.showOne,class:"mgr-20"},{default:l(()=>[_e]),_:1},8,["show"]),n(w(O),{show:v.showTwo},{default:l(()=>[be]),_:1},8,["show"])])]),we,e("div",xe,[n(p,{type:"primary",onClick:t[4]||(t[4]=s=>x("first"))},{default:l(()=>[g("打开弹出层-1")]),_:1}),$e,n(p,{type:"success",onClick:t[5]||(t[5]=s=>x("second"))},{default:l(()=>[g("打开弹出层-2")]),_:1})]),n(D,{title:"第一个 dialog",modelValue:a.first.show,"onUpdate:modelValue":t[7]||(t[7]=s=>a.first.show=s),"close-by-mask":"",onClose:t[8]||(t[8]=s=>y())},{footer:l(()=>[n(p,{type:"danger",onClick:t[6]||(t[6]=s=>k("first"))},{default:l(()=>[g("关闭")]),_:1})]),default:l(()=>[e("div",null,[e("p",ke,"出现次数："+_(a.first.count),1),b.value?(c(),u("div",Ce,"延迟出现")):z("",!0)])]),_:1},8,["modelValue"]),n(D,{title:"第二个 dialog",modelValue:a.second.show,"onUpdate:modelValue":t[13]||(t[13]=s=>a.second.show=s)},{footer:l(()=>[n(p,{type:"danger",onClick:t[11]||(t[11]=s=>k("second"))},{default:l(()=>[g("关闭")]),_:1}),n(p,{type:"success",onClick:t[12]||(t[12]=s=>x("third"))},{default:l(()=>[g("打开嵌套 Dialog")]),_:1})]),default:l(()=>[e("div",null,[Te,e("p",Se,"出现次数："+_(a.second.count),1),b.value?(c(),u("div",Ve,"延迟出现")):z("",!0),n(D,{title:"第三个 dialog",modelValue:a.third.show,"onUpdate:modelValue":t[10]||(t[10]=s=>a.third.show=s),"append-to-body":""},{footer:l(()=>[n(p,{type:"danger",onClick:t[9]||(t[9]=s=>k("third"))},{default:l(()=>[g("关闭嵌套 Dialog")]),_:1})]),default:l(()=>[e("div",null,[e("p",Be,"出现次数："+_(a.third.count),1),e("ul",De,[(c(!0),u(S,null,V(d.value,s=>(c(),u("li",{class:"dialog-item f-vertical",key:s},_(s),1))),128))])])]),_:1},8,["modelValue"])])]),_:1},8,["modelValue"]),Ie,e("div",He,[(c(),u(S,null,V(f,s=>n(p,{key:s.type,type:s.btnType,onClick:Me=>$(s)},{default:l(()=>[g(_(s.label),1)]),_:2},1032,["type","onClick"])),64))]),Ne,e("div",ze,[n(p,{type:"primary",onClick:t[14]||(t[14]=s=>m())},{default:l(()=>[g("打开确认框")]),_:1}),n(p,{type:"primary",onClick:t[15]||(t[15]=s=>m(!0))},{default:l(()=>[g("打开确认取消框")]),_:1})])])}}});export{je as default};