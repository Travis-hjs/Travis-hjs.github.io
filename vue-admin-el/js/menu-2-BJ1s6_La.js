import{a as w}from"./index-Dwacj8b2.js";import{v as C}from"./dom-vtHEqTVj.js";import{d as N,j as B,r as R,b as r,e as S,f as j,c as e,g as o,u as E,i as p,C as b}from"./element-plus-CrjfmyRg.js";const J={class:"menu-2"},O=p("span",{class:"the-tag green mgb-20"},"表单验证操作",-1),T={class:"f-vertical",style:{width:"100%"}},z=p("div",{class:"f1 fvc"},"至",-1),G=N({__name:"menu-2",setup(A){const u=B();function i(){return{name:"",region:"",count:"",startDate:"",endDate:"",delivery:!1,type:[],resource:"",desc:""}}const a=R({data:i(),rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:20,message:"长度为3到20个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动地区",trigger:"change"}],count:[{required:!0,message:"请选择活动次数",trigger:"change"}],startDate:[{required:!0,message:"请选择活动开始时间",trigger:"change"}],endDate:[{required:!0,message:"请选择活动结束时间",trigger:"change"}],type:[{required:!0,message:"请选择活动类型",trigger:"change"}],resource:[{required:!0,message:"请选择活动来源",trigger:"change"}],desc:[{required:!1,message:"请输入活动描述",trigger:"blur"}]}}),V=Array.from({length:1e4}).map((n,l)=>({value:l+1,label:`最多${l+1}次`}));function v(){u.value.validate(n=>{C("#the-form",n),n&&(w.success("验证成功，表单数据已打印至控制台"),console.log("form.data >>",JSON.parse(JSON.stringify(a.data))))})}function h(){a.data=i(),setTimeout(()=>u.value.clearValidate())}return(n,l)=>{const c=r("el-input"),d=r("el-form-item"),m=r("el-option"),y=r("el-select"),D=r("el-select-v2"),_=r("el-date-picker"),k=r("el-switch"),s=r("el-checkbox"),x=r("el-checkbox-group"),g=r("el-radio"),q=r("el-radio-group"),f=r("el-button"),U=r("el-form");return S(),j("div",J,[O,e(U,{style:{width:"600px"},id:"the-form",ref_key:"formRef",ref:u,model:a.data,rules:a.rules,"label-width":"120px"},{default:o(()=>[e(d,{label:"活动名称",prop:"name"},{default:o(()=>[e(c,{modelValue:a.data.name,"onUpdate:modelValue":l[0]||(l[0]=t=>a.data.name=t),placeholder:a.rules.name[0].message},null,8,["modelValue","placeholder"])]),_:1}),e(d,{label:"活动区域",prop:"region"},{default:o(()=>[e(y,{modelValue:a.data.region,"onUpdate:modelValue":l[1]||(l[1]=t=>a.data.region=t),placeholder:a.rules.region[0].message},{default:o(()=>[e(m,{label:"上海",value:"shanghai"}),e(m,{label:"北京",value:"beijing"}),e(m,{label:"深圳",value:"shenzhen"})]),_:1},8,["modelValue","placeholder"])]),_:1}),e(d,{label:"活动次数",prop:"count"},{default:o(()=>[e(D,{modelValue:a.data.count,"onUpdate:modelValue":l[2]||(l[2]=t=>a.data.count=t),placeholder:a.rules.region[0].message,options:E(V)},null,8,["modelValue","placeholder","options"])]),_:1}),e(d,{label:"活动时间",required:""},{default:o(()=>[p("div",T,[e(d,{prop:"startDate"},{default:o(()=>[e(_,{modelValue:a.data.startDate,"onUpdate:modelValue":l[3]||(l[3]=t=>a.data.startDate=t),type:"date",label:"选择一个日期",placeholder:a.rules.startDate[0].message},null,8,["modelValue","placeholder"])]),_:1}),z,e(d,{prop:"endDate"},{default:o(()=>[e(_,{modelValue:a.data.endDate,"onUpdate:modelValue":l[4]||(l[4]=t=>a.data.endDate=t),type:"date",label:"选择一个日期",placeholder:a.rules.endDate[0].message},null,8,["modelValue","placeholder"])]),_:1})])]),_:1}),e(d,{label:"即时送达",prop:"delivery"},{default:o(()=>[e(k,{modelValue:a.data.delivery,"onUpdate:modelValue":l[5]||(l[5]=t=>a.data.delivery=t)},null,8,["modelValue"])]),_:1}),e(d,{label:"活动类型",prop:"type"},{default:o(()=>[e(x,{modelValue:a.data.type,"onUpdate:modelValue":l[6]||(l[6]=t=>a.data.type=t)},{default:o(()=>[e(s,{label:"在线活动",value:"a",name:"type"}),e(s,{label:"促销活动",value:"b",name:"type"}),e(s,{label:"线下活动",value:"c",name:"type"}),e(s,{label:"简单的品牌曝光",value:"d",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"来源",prop:"resource"},{default:o(()=>[e(q,{modelValue:a.data.resource,"onUpdate:modelValue":l[7]||(l[7]=t=>a.data.resource=t)},{default:o(()=>[e(g,{value:"sponsor",label:"赞助"}),e(g,{value:"place",label:"地点"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"活动描述",prop:"desc"},{default:o(()=>[e(c,{modelValue:a.data.desc,"onUpdate:modelValue":l[8]||(l[8]=t=>a.data.desc=t),type:"textarea",placeholder:a.rules.desc[0].message},null,8,["modelValue","placeholder"])]),_:1}),e(d,null,{default:o(()=>[e(f,{type:"primary",onClick:v},{default:o(()=>[b("提交")]),_:1}),e(f,{onClick:h},{default:o(()=>[b("重置")]),_:1})]),_:1})]),_:1},8,["model","rules"])])}}});export{G as default};