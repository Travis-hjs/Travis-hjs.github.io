import{Lt as e,Nt as t,St as n,lt as r,nt as i}from"./ui-CIm5c0MY.js";import{D as a,E as o,m as s}from"./common-DaHLLaOy.js";import{u as c}from"./vendor-Bd4KxCHR.js";import{a as l,i as u,t as d}from"./common-qsEpcFY5.js";import{a as f,o as p,r as m,t as h}from"./Curd-2V0khWP1.js";import{a as g}from"./Table-zmZGtQwX.js";var _=r({__name:`curd-page`,setup(r){let _=c().name,v={gameType:[{label:`单机`,value:1},{label:`网游`,value:2}]},y=t({search:{labelRight:!1,labelWidth:void 0,list:[{...f(`input`,`gameName`),label:`游戏名称`},{...f(`input-between`,`gamePrice`),label:`游戏价格`,placeholder:[`最小价格`,`最大价格`],valueType:`array<number>`,valueWidth:300},{...f(`select`,`gameType`),label:`游戏类型`,placeholder:`请选择游戏类型`,options:v.gameType,required:!0,defaultValue:1},{...f(`date`,`gameDate`),label:`上架日期`,dateType:`daterange`,formatShow:`YYYY-MM-DD HH:mm:ss`,format:`Y-M-D h:m:s`,valueType:`array`,valueWidth:400}]},table:{columns:[{...m(`gameName`,`游戏名称`),minWidth:140},{...m(`gameType`,`游戏类型`),width:140,rawContent(e){let t={1:{color:`cyan`,text:`单机`},2:{color:`purple`,text:`网游`}}[e];return`<span class="the-tag ${t.color}">${t.text}</span>`}},{...m(`num`,`游戏编号`),width:140,cellType:`js`,tooltip:!1,jsCode:'const { cellValue } = sandbox; return `<button type="button" class="el-button el-button--primary is-link" onclick="_copyText(${cellValue}, () => _message.success(\'复制成功\'))"><span>Num: ${cellValue}</span></button>`;',slot:`render-cell-num`},{...m(`banner`,`游戏封面`),width:110,cellType:`image`,slot:`preview-image-banner`},{...m(`gamePrice`,`游戏价格`),width:140,formatter(e){return e?`￥${e}`:`-`},sort:`desc`},{...m(`date`,`上架时间`),width:200,formatter(e){return e?s(e):`-`},sort:!0,titleTips:`人工设置的时间`},{...m(g.Right,`操作`),width:220}],actions:[{key:p.ActionEdit,text:`编辑`,type:`success`,icon:`el-icon-edit`},{key:`1`,text:e=>e.report===1?`上报游戏`:`取消上报`,type:`primary`,click(e,t){console.log(`上报游戏 >>`,e,t);let n=e.report===1?`上报游戏`:`取消上报`;a({content:`是否${n}？`,cancelText:`取消`,async confirm(){e.report=(await l(e.report)).data,o.success(`${n}成功~`)}})}},{key:`2`,text:`同步数据`,type:`primary`,click:`
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
});`}],formAdd:{width:520,labelPosition:`left`,labelWidth:140,fields:[{...f(`input`,`gameName`),label:`游戏名称`,required:!0,placeholder:`请输入游戏名称`},{...f(`select`,`gameType`),label:`游戏类型`,required:!0,placeholder:`请选择游戏类型`,valueType:`number`,options:v.gameType},{...f(`input`,`gamePrice`),label:`游戏价格`,required:!0,placeholder:`请输入游戏价格`,valueType:`number`},{...f(`date`,`gameDate`),label:`上架日期`},{...f(`switch`,`gameLimit`),label:`设备登录限制`,show(e){return e.gameType===2}}]},formEdit:{width:520,labelPosition:`left`,labelWidth:140,fields:[{...f(`input`,`gameName`),label:`游戏名称`,required:!0,placeholder:`请输入游戏名称`},{...f(`select`,`gameType`),label:`游戏类型`,required:!0,placeholder:`请选择游戏类型`,valueType:`number`,options:v.gameType},{...f(`input`,`gamePrice`),label:`游戏价格`,required:!0,placeholder:`请输入游戏价格`,valueType:`number`}]},selectKey:`id`,batchs:[{text:`批量删除`,type:`danger`,key:`batch-delete`,click:`
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
});`},{text:`批量上报`,type:`primary`,key:`batch-post`,click({list:e,selectList:t,pageId:n}){console.log(`多选数据 >>`,e,t),o.info(`上报成功！`),window[`_${n}`].onSearch()}}],operations:[{text:`导出数据`,type:`primary`,key:`export-data`,click:`_message.success("导出成功！")`}]}}),b={getTableData(e,t){return console.log(`getTableData >>`,e,t),d({...e,...t})},created(e){e()},onAdd(e,t){return u(t)},onEdit(e,t){return u(e)}};return(t,r)=>(n(),i(e(h),{data:y.value,"onUpdate:data":r[0]||=e=>y.value=e,action:b,"page-id":e(_)},null,8,[`data`,`page-id`]))}});export{_ as default};