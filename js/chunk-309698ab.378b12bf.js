(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-309698ab","chunk-758ca360","chunk-2d0c4d8d"],{"3d28":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{message:"",visible:this.visible.show,width:650,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[a("template",{slot:"title"},[t._v("审批内容详情\n  ")]),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("姓名:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.Name))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("所属部门:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.OriginatorDeptName))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("审批编号:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.BusinessId))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("主题:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.Title))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("审批结果:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.ResultStr))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("流程状态:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.StatusStr))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("发起时间:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.CreateTime))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("完成时间:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.FinishTime))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("报销类别:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.报销类别))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("确认状态:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(1==t.visible.detail.Confirmed?"已确认":"未确认"))])],1),1==t.visible.detail.Confirmed?a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("确认人:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.ConfirmName))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("确认时间:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.ConfirmedTime))])],1):t._e(),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("总金额:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.总金额))])],1),a("a-divider",{attrs:{orientation:"left"}},[t._v("分摊情况")]),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,bordered:!1,pagination:!1,size:"middle",rowKey:"部门"}})],2)},s=[],l=(a("7514"),a("ac6a"),a("b775")),n=[{title:"分摊部门",dataIndex:"部门"},{title:"金额",dataIndex:"金额"}],r={props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,detail:{}},columns:n,dataSource:[]}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{init:function(){var t=this;l["a"].post("/api/Budget/Approve/ApproveDetail",{ProcessInstanceId:t.visible.detail.processInstanceId}).then(function(e){if(0===e.code){var a=new Array;e.data.forEach(function(e){t.visible.detail.Name=e.Name,t.visible.detail.OriginatorDeptName=e.OriginatorDeptName,t.visible.detail.BusinessId=e.BusinessId,t.visible.detail.Title=e.Title,t.visible.detail.ResultStr=e.ResultStr,t.visible.detail.StatusStr=e.StatusStr,t.visible.detail.CreateTime=e.CreateTime,t.visible.detail.FinishTime=e.FinishTime,t.visible.detail.ConfirmName=e.ConfirmName,t.visible.detail.ConfirmedTime=e.ConfirmedTime;var i=JSON.parse(e.FormComponentValues),s=i.find(function(t){return"报销类别"===t.Name}).Value;t.visible.detail.报销类别=s;var l=i.find(function(t){return"TableField"===t.ComponentType}).ExtValue,n=JSON.parse(l).statValue.find(function(t){return"总金额（元）"===t.label}).num;t.visible.detail.总金额=n+"元";i=JSON.parse(e.FormComponentValues);var r=i.find(function(t){return"部门分摊"===t.Name}).Value;JSON.parse(r).forEach(function(t){var e=t.rowValue.find(function(t){return"部门"===t.label}).value,i=t.rowValue.find(function(t){return"金额（元）"===t.label}).value;a.push({"部门":e,"金额":i})}),t.dataSource=a})}}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.dataSource=[],this.refresh&&this.refresh()}}},o=r,c=a("2877"),d=Object(c["a"])(o,i,s,!1,null,null,null);e["default"]=d.exports},"4b68":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{message:"",visible:this.visible.show,width:650,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[a("template",{slot:"title"},[t._v("预算与执行详情\n    "),0==t.visible.detail.Status?a("a-button",{staticStyle:{float:"right"},attrs:{size:"small",icon:"form"},on:{click:function(e){return t.confirm(t.visible.detail)}}},[t._v("确认")]):t._e()],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("部门:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.DeptName))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("状态:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.StatusText))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("部门预算:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.Amount))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("部门执行:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.AmountExecute))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("子部门预算:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.AmountChild))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("子部门执行:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.AmountChildExecute))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("总预算:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.Amount+t.visible.detail.AmountChild))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("总执行:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.AmountExecute+t.visible.detail.AmountChildExecute))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("备注:")]),a("a-col",{attrs:{span:16}},[t._v(t._s(t.visible.detail.Remarks))])],1),a("a-divider",{attrs:{orientation:"left"}},[t._v("部门预算执行情况")]),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,bordered:!1,pagination:!1,size:"middle",rowKey:"BSGuid"},scopedSlots:t._u([{key:"lastPercent",fn:function(e,i){return a("span",{staticStyle:{"text-align":"right"}},[0==i.Amount?void 0:[t._v("         \n        "+t._s((100*(i.Amount-i.AmountExecute)/i.Amount*100/100).toFixed(2))+"%\n      ")]],2)}},{key:"action",fn:function(e,i){return a("a",{on:{click:function(e){return t.detail(i)}}},[t._v("详情")])}}])}),a("drawer-detail-execute",{attrs:{show:t.drawer.detailexecute,refresh:t.init}})],2)},s=[],l=(a("ac6a"),a("b775")),n=a("98f5"),r=[{title:"科目",dataIndex:"Name"},{title:"预算",dataIndex:"Amount"},{title:"预算执行",dataIndex:"AmountExecute"},{title:"预算剩余",customRender:function(t,e,a){return e.Amount-e.AmountExecute}},{title:"剩余比例",scopedSlots:{customRender:"lastPercent"}},{title:"操作",scopedSlots:{customRender:"action"}}],o={components:{DrawerDetailExecute:n["default"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,detail:{}},columns:r,dataSource:[],drawer:{detailexecute:{show:!1}}}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{init:function(){var t=this;l["a"].post("/api/Budget/Statement/ItemList",{DepGuid:t.visible.detail.DepGuid,IncludeChild:!0,FiscalYear:t.visible.detail.FiscalYear}).then(function(e){if(0===e.code){t.dataSource=e.data;e.data.forEach(function(t){t.Amount})}}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.dataSource=[],this.refresh&&this.refresh()},detail:function(t){this.drawer.detailexecute={show:!0,detail:t}},confirm:function(t){var e=this;l["a"].post("/api/Budget/Statement/ConfirmBudgetDept",{BudgetDeptGuid:t.BudgetDeptGuid}).then(function(t){0===t.code&&(e.$message.success(t.msg),e.init())})}}},c=o,d=a("2877"),u=Object(d["a"])(c,i,s,!1,null,null,null);e["default"]=u.exports},"98f5":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{message:"",visible:this.visible.show,width:450,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[a("template",{slot:"title"},[t._v("执行详情")]),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("部门预算:")]),a("a-col",{attrs:{span:7}},[t._v(t._s(t.visible.detail.Amount))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("部门执行:")]),a("a-col",{attrs:{span:7}},[t._v(t._s(t.visible.detail.AmountExecute))])],1),a("a-divider",{attrs:{orientation:"left"}},[t._v("部门预算执行明细")]),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,bordered:!1,pagination:!1,size:"middle",rowKey:"BudgetExecuteGuid"},scopedSlots:t._u([{key:"action",fn:function(e,i){return a("a",{on:{click:function(e){return t.detail(i)}}},[t._v("详情")])}}])}),a("drawer-detail",{attrs:{show:t.drawer.detail,refresh:t.init}})],2)},s=[],l=a("b775"),n=a("c32d"),r=a.n(n),o=a("3d28"),c=[{title:"执行日期",customRender:function(t,e,a){return r()(e.ExecuteDate).format("YYYY-MM-DD")}},{title:"执行金额",dataIndex:"AmountExecute"},{title:"操作",scopedSlots:{customRender:"action"}}],d={components:{DrawerDetail:o["default"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,detail:{}},columns:c,dataSource:[],drawer:{detail:{show:!1}}}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{init:function(){var t=this;l["a"].post("/api/Budget/Statement/ExecuteItemList",t.visible.detail).then(function(e){0===e.code&&(t.dataSource=e.data)}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.dataSource=[]},detail:function(t){this.drawer.detail={show:!0,id:t.processInstanceId,detail:t}}}},u=d,v=a("2877"),p=Object(v["a"])(u,i,s,!1,null,null,null);e["default"]=p.exports}}]);