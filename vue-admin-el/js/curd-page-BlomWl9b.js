import{B as d,C as a,D as g,b,E as y,a as c,G as r,f as h,T as f,H as i,I as T}from"./index-C_bH1vCy.js";import{_ as x}from"./index.vue_vue_type_script_setup_true_lang-CMilWEg_.js";import{f as w,x as _,k,u as p,i as v}from"./element-plus-q5-fTtZa.js";import"./Table.vue_vue_type_script_setup_true_lang-uURJbbk7.js";const N=w({__name:"curd-page",setup($){const m=d().name,s={gameType:[{label:"单机",value:1},{label:"网游",value:2}]},n=_({search:{labelRight:!1,labelWidth:void 0,list:[{...a("input","gameName"),label:"游戏名称"},{...a("input-between","gamePrice"),label:"游戏价格",placeholder:["最小价格","最大价格"],valueType:"array<number>",valueWidth:300},{...a("select","gameType"),label:"游戏类型",placeholder:"请选择游戏类型",options:s.gameType,required:!0,defaultValue:1},{...a("date","gameDate"),label:"上架日期",dateType:"daterange",formatShow:"YYYY-MM-DD HH:mm:ss",format:"Y-M-D h:m:s",valueType:"array",valueWidth:400}]},table:{columns:[{...r("gameName","游戏名称"),minWidth:140},{...r("gameType","游戏类型"),width:140,rawContent(e){const o={1:{color:"cyan",text:"单机"},2:{color:"purple",text:"网游"}}[e];return`<span class="the-tag ${o.color}">${o.text}</span>`}},{...r("num","游戏编号"),width:140,cellType:"js",tooltip:!1,jsCode:'const { cellValue } = sandbox; return `<button type="button" class="el-button el-button--primary is-link" onclick="_copyText(${cellValue}, () => _message.success(\'复制成功\'))"><span>Num: ${cellValue}</span></button>`;',slot:"render-cell-num"},{...r("banner","游戏封面"),width:110,cellType:"image",slot:"preview-image-banner"},{...r("gamePrice","游戏价格"),width:140,formatter(e,t){return t?`￥${t}`:"-"},sort:"desc"},{...r("date","上架时间"),width:200,formatter(e,t){return t?h(t):"-"},sort:!0,titleTips:"人工设置的时间"},{...r(f.Right,"操作"),width:220}],actions:[{key:g.ActionEdit,text:"编辑",type:"success",icon:"el-icon-edit"},{key:"1",text:e=>e.report===1?"上报游戏":"取消上报",type:"primary",click(e,t){console.log("上报游戏 >>",e,t);const l=e.report===1?"上报游戏":"取消上报";b({content:`是否${l}？`,cancelText:"取消",async confirm(){const o=await y(e.report);e.report=o.data,c.success(`${l}成功~`)}})}},{key:"2",text:"同步数据",type:"primary",click:`
const { pageId, row } = sandbox;
const page = window[\`_\${pageId}\`];
_messageBox({
  title: "操作提示",
  content: \`是否同步【\${row.gameName}】数据？\`,
  cancelText: "取消",
  confirm() {
    _message.success("同步数据成功！");
    page.getData();
  }
});`}],formAdd:{width:520,labelPosition:"left",labelWidth:140,fields:[{...a("input","gameName"),label:"游戏名称",required:!0,placeholder:"请输入游戏名称"},{...a("select","gameType"),label:"游戏类型",required:!0,placeholder:"请选择游戏类型",valueType:"number",options:s.gameType},{...a("input","gamePrice"),label:"游戏价格",required:!0,placeholder:"请输入游戏价格",valueType:"number"},{...a("date","gameDate"),label:"上架日期"},{...a("switch","gameLimit"),label:"设备登录限制",show(e){return e.gameType===2}}]},formEdit:{width:520,labelPosition:"left",labelWidth:140,fields:[{...a("input","gameName"),label:"游戏名称",required:!0,placeholder:"请输入游戏名称"},{...a("select","gameType"),label:"游戏类型",required:!0,placeholder:"请选择游戏类型",valueType:"number",options:s.gameType},{...a("input","gamePrice"),label:"游戏价格",required:!0,placeholder:"请输入游戏价格",valueType:"number"}]},selectKey:"id",batchs:[{text:"批量删除",type:"danger",key:"batch-delete",click:`
const { pageId, list } = sandbox;
const page = window[\`_\${pageId}\`];
const text = "删除";
_messageBox({
  title: "操作提示",
  content: \`是否\${text}选中的 \${list.length} 条数据？\`,
  cancelText: "取消",
  confirm() {
    _message.success(text + "成功！");
    page.onSearch();
  }
});`},{text:"批量上报",type:"primary",key:"batch-post",click({list:e,selectList:t,pageId:l}){console.log("多选数据 >>",e,t),c.info("上报成功！"),window[`_${l}`].onSearch()}}],operations:[{text:"导出数据",type:"primary",key:"export-data",click:'_message.success("导出成功！")'}]}}),u={getTableData(e,t){return console.log("getTableData >>",e,t),T({...e,...t})},created(e){e()},onAdd(e,t){return i(t)},onEdit(e,t){return i(e)}};return(e,t)=>(v(),k(p(x),{data:n.value,"onUpdate:data":t[0]||(t[0]=l=>n.value=l),action:u,"page-id":p(m)},null,8,["data","page-id"]))}});export{N as default};
