import{u as B,r as T,f as $,b as P,a as d}from"./index-nS5hP4rW.js";import{d as g,k as t,g as U,j as z,r as s,o as u,b as f,l as o,D as x,x as r,F as A,A as j,t as m,e as c,p as E}from"./vendor-DyXZCu1l.js";const y="--label-width",q=g({name:"FilterWrap",props:{labelWidth:{type:String,default:"96px"}},setup(i,{slots:e}){return()=>t("section",{class:"filter-wrap flex",style:{[y]:i.labelWidth}},[e.left?t("div",{class:"filter-side"},[e.left()]):void 0,t("div",{class:"filter-content f1"},[e.default&&e.default()]),e.right?t("div",{class:"filter-side"},[e.right()]):void 0])}}),_=g({name:"FilterItem",props:{label:String,labelWidth:String},setup(i,{slots:e}){return()=>t("div",{class:"filter-item flex"},[e.label||i.label?t("span",{class:"filter-label f-vertical",style:{[y]:i.labelWidth}},[e.label?e.label():i.label]):void 0,e.default&&e.default()])}}),G={class:"menu-1"},H=c("span",{class:"the-tag blue mgb-20"},"通用表格展示模板页",-1),J=c("i",{class:"el-icon-search"},null,-1),K=c("i",{class:"el-icon-plus el-icon--left"},null,-1),M={class:"f-vertical"},O={key:0,style:{width:"200px"}},Q={class:"the-tag blue"},Y=g({__name:"menu-1",setup(i){const e=U({loading:!1,searchInfo:{type:"",date:[]},pageInfo:B(),selectList:[]}),b=z([]),I=[{label:"ID",prop:"id",width:90},{label:"名称",prop:"name",minWidth:180,slotName:"fuck"},{label:"创建时间",prop:"date",width:180},{label:"操作",prop:"action-right",width:200}],k=[{text:"编辑",icon:"el-icon-edit"},{text:"删除",icon:"el-icon-delete",type:"danger",click(a){P({content:`是否删除【${a.name}】？`,cancelText:"取消",confirm(){d.info("选择了删除操作~")}})}},{text:"终止",icon:"el-icon-video-pause",click:a=>d.error(`【${a.name}】已终止`)},{text:"启用",icon:"el-icon-video-play",click:a=>d.success(`【${a.name}】已启用`)},{text:"下架",icon:"el-icon-folder-delete",click:a=>d.warning(`【${a.name}】已下架`)}],L=[{label:"选项一",value:0},{label:"选项二",value:1}],h=Array.from({length:62}).map((a,n)=>({id:n+1,name:T(2,40),date:$()}));function p(){const a=e.pageInfo.pageSize,n=e.pageInfo.currentPage;b.value=h.slice((n-1)*a,n*a),e.pageInfo.total=h.length}p();function v(){e.pageInfo.currentPage=1,e.selectList=[],p()}return(a,n)=>{const V=s("el-input"),w=s("el-option"),C=s("el-select"),W=s("el-date-picker"),D=s("el-button"),F=s("base-table"),S=s("base-pagination");return u(),f("div",G,[H,t(r(q),null,{right:o(()=>[t(D,{type:"primary"},{default:o(()=>[K,x("新增")]),_:1})]),default:o(()=>[t(r(_),null,{default:o(()=>[t(V,{placeholder:"请输入关键字"},{suffix:o(()=>[J]),_:1})]),_:1}),t(r(_),{label:"选项一"},{default:o(()=>[t(C,{class:"short-value",modelValue:e.searchInfo.type,"onUpdate:modelValue":n[0]||(n[0]=l=>e.searchInfo.type=l),placeholder:"请选择",onChange:v},{default:o(()=>[(u(),f(A,null,j(L,l=>t(w,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),t(r(_),{label:"日期"},{default:o(()=>[t(W,{modelValue:e.searchInfo.date,"onUpdate:modelValue":n[1]||(n[1]=l=>e.searchInfo.date=l),type:"datetime",placeholder:"请选择日期",onChange:v},null,8,["modelValue"])]),_:1})]),_:1}),t(F,{columns:I,data:b.value,actions:k,loading:e.loading,"select-key":"id","select-list":e.selectList,"onUpdate:selectList":n[2]||(n[2]=l=>e.selectList=l),"select-disabled":l=>l.id%4===0},{fuck:o(({row:l,$index:N})=>[x(m(N+1)+"、"+m(l.name),1)]),_:1},8,["data","loading","select-list","select-disabled"]),c("div",M,[e.selectList.length>0?(u(),f("div",O,[c("span",Q,"已选择："+m(e.selectList.length)+" 条数据",1)])):E("",!0),t(S,{disabled:e.loading,"page-info":e.pageInfo,onChange:p},null,8,["disabled","page-info"])])])}}});export{Y as default};