import{B as d,C as a,D as l,f as g,E as y,G as i,H as b,I as h,a as p,b as f,J as T}from"./index-C24nMwOO.js";import{_ as x}from"./index.vue_vue_type_script_setup_true_lang-xydLaWHV.js";import{d as w,x as _,k,u as m,i as $}from"./element-plus-CwxVOKr1.js";import"./Table.vue_vue_type_script_setup_true_lang-R_FyhFcS.js";const W=w({__name:"curd-page",setup(v){const o=d().name,n={gameType:[{label:"单机",value:1},{label:"网游",value:2}]},c=_({search:{labelRight:!1,labelWidth:void 0,list:[{...a("input","gameName"),label:"游戏名称"},{...a("input-between","gamePrice"),label:"游戏价格",placeholder:["最小价格","最大价格"],valueType:"array<number>",valueWidth:300},{...a("select","gameType"),label:"游戏类型",placeholder:"请选择游戏类型",options:n.gameType,required:!0,defaultValue:1},{...a("date","gameDate"),label:"上架日期",dateType:"daterange",formatShow:"YYYY-MM-DD HH:mm:ss",format:"Y-M-D h:m:s",valueType:"array",valueWidth:400}]},table:{columns:[{...l("gameName","游戏名称"),minWidth:140},{...l("gameType","游戏类型"),width:140,rawContent(e){const s={1:{color:"cyan",text:"单机"},2:{color:"purple",text:"网游"}}[e];return`<span class="the-tag ${s.color}">${s.text}</span>`}},{...l("num","游戏编号"),width:140,cellType:"js",tooltip:!1,jsCode:'return `<button type="button" class="el-button el-button--primary is-link" onclick="_copyText(${cellValue}, () => _message.success(\'复制成功\'))"><span>Num: ${cellValue}</span></button>`;',slot:"render-cell-num"},{...l("banner","游戏封面"),width:110,cellType:"image",slot:"preview-image-banner"},{...l("gamePrice","游戏价格"),width:140,formatter(e,t){return t?`￥${t}`:"-"},sort:"desc"},{...l("date","上架时间"),width:200,formatter(e,t){return t?g(t):"-"},sort:!0,titleTips:"人工设置的时间"},{...l(y,"操作"),width:220}],actions:[{key:h,text:"编辑",type:"success",icon:"el-icon-edit"},{key:"1",text:e=>e.report===1?"上报游戏":"取消上报",type:"primary",click(e,t){console.log("上报游戏 >>",e,t);const r=e.report===1?"上报游戏":"取消上报";f({content:`是否${r}？`,cancelText:"取消",async confirm(){const s=await T(e.report);e.report=s.data,p.success(`${r}成功~`)}})}},{key:"2",text:"同步数据",type:"primary",click:`const pageId = "${o}";
const page = window[\`_\${pageId}\`];
_messageBox({
  title: "操作提示",
  content: \`是否同步【\${row.gameName}】数据？\`,
  cancelText: "取消",
  confirm() {
    _message.success("同步数据成功！");
    page.getData();
  }
});`}],formAdd:{width:520,labelPosition:"left",labelWidth:140,fields:[{...a("input","gameName"),label:"游戏名称",required:!0,placeholder:"请输入游戏名称"},{...a("select","gameType"),label:"游戏类型",required:!0,placeholder:"请选择游戏类型",valueType:"number",options:n.gameType},{...a("input","gamePrice"),label:"游戏价格",required:!0,placeholder:"请输入游戏价格",valueType:"number"},{...a("date","gameDate"),label:"上架日期"},{...a("switch","gameLimit"),label:"设备登录限制",show(e){return e.gameType===2}}]},formEdit:{width:520,labelPosition:"left",labelWidth:140,fields:[{...a("input","gameName"),label:"游戏名称",required:!0,placeholder:"请输入游戏名称"},{...a("select","gameType"),label:"游戏类型",required:!0,placeholder:"请选择游戏类型",valueType:"number",options:n.gameType},{...a("input","gamePrice"),label:"游戏价格",required:!0,placeholder:"请输入游戏价格",valueType:"number"}]},selectKey:"id",batchs:[{text:"批量删除",type:"danger",key:"batch-delete",click:`
const pageId = "${o}";
const page = window[\`_${o}\`];
const text = "删除";
_messageBox({
  title: "操作提示",
  content: \`是否\${text}选中的 \${list.length} 条数据？\`,
  cancelText: "取消",
  confirm() {
    _message.success(text + "成功！");
    page.onSearch();
  }
});`},{text:"批量上报",type:"primary",key:"batch-post",click(e,t){console.log("多选数据 >>",e,t),p.info("上报成功！"),window[`_${o}`].onSearch()}}],operations:[{text:"导出数据",type:"primary",key:"export-data",click:'_message.success("导出成功！")'}]}}),u={getTableData(e,t){return console.log("getTableData >>",e,t),b({...e,...t})},created(e){e()},onAdd(e,t){return i(t)},onEdit(e,t){return i(e)}};return(e,t)=>($(),k(m(x),{data:c.value,"onUpdate:data":t[0]||(t[0]=r=>c.value=r),action:u,pageId:m(o)},null,8,["data","pageId"]))}});export{W as default};
