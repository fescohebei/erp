(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-135b4322","chunk-2d0c4d4a"],{"3d03":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-drawer",{attrs:{title:"修改",placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:700}},[i("a-form",{attrs:{form:t.form}},[i("a-form-item",{attrs:{label:"财年",labelCol:{span:4},wrapperCol:{span:20}}},[i("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["BudgetGuid",{initialValue:t.visible.detail.BudgetGuid,rules:t.AFormImportRules.iptSelect}],expression:"['BudgetGuid',{initialValue:visible.detail.BudgetGuid,rules:AFormImportRules.iptSelect }]"}],staticStyle:{width:"60%","margin-right":"8px"},attrs:{placeholder:"请选择",allowClear:!0,disabled:!!t.visible.detail.BudgetDeptGuid},on:{change:t.selectFiscalYearChange}},t._l(t.dim.budgets,function(e){return i("a-select-option",{key:e.BudgetGuid},[t._v(t._s(e.FiscalYear))])}),1)],1),i("a-form-item",{attrs:{label:"部门",labelCol:{span:4},wrapperCol:{span:20}}},[i("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["Depts",{initialValue:t.visible.detail.DepPath,rules:t.AFormImportRules.iptSelect}],expression:"['Depts',{initialValue:visible.detail.DepPath,rules:AFormImportRules.iptSelect }]"}],attrs:{options:t.dim.depts,changeOnSelect:"",placeholder:"请选择",disabled:!!t.visible.detail.BudgetDeptGuid}})],1),t._l(t.dim.subjects,function(e,a){return i("a-form-item",{key:a,attrs:{label:e.Name,labelCol:{span:4},wrapperCol:{span:20}}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Amount["+e.BSGuid+"]",{rules:t.AFormImportRules.iptInput}],expression:"[`Amount[${item.BSGuid}]`,\n        {\n          rules: AFormImportRules.iptInput,\n        }\n      ]"}],staticStyle:{width:"60%","margin-right":"8px"}})],1)}),i("a-form-item",{attrs:{label:"备注",labelCol:{span:4},wrapperCol:{span:20}}},[i("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{initialValue:t.visible.detail.Remarks}],expression:"['Remarks',{initialValue:visible.detail.Remarks }]"}],attrs:{placeholder:"备注",rows:4}})],1)],2),i("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[i("a-button",{on:{click:t.onClose}},[t._v("取消")]),i("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:t.handleSubmit}},[t._v("提交")]),null==t.visible.id?i("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.handleSubmit("next")}}},[t._v("提交并继续录入")]):t._e()],1)],1)},s=[],l=(i("ac6a"),i("b775")),r={props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,detail:{BudgetGuid:void 0}},dim:{depts:[],subjects:[],budgets:[]},subjects:[],form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}],iptSelect:[{required:!0,message:"请选择"}]}}},watch:{show:function(t,e){var i=this;i.visible=t,t.show&&(null==i.visible.detail&&(i.visible.detail={BudgetGuid:void 0}),i.init())}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.dim.subjects=[],this.form.resetFields()},init:function(){var t=this;l["a"].post("/api/Budget/Set/InitGroups").then(function(e){0===e.code&&(t.dim.depts=e.data.depts,t.dim.budgets=e.data.budgets)}).catch(function(t){console.log(t)}),t.visible.detail.BudgetDeptGuid&&l["a"].post("/api/Budget/Formation/GetItems",{BudgetDeptGuid:t.visible.detail.BudgetDeptGuid}).then(function(e){0===e.code&&(e.data.budget_Dept.DepPath=JSON.parse(e.data.budget_Dept.DepPath),t.visible.detail=e.data.budget_Dept,t.selectFiscalYearChange(t.visible.detail.BudgetGuid).then(function(){var i={};e.data.items.forEach(function(t){var e="Amount["+t.BSGuid+"]";i[e]=t.Amount}),t.form.setFieldsValue(i)}))}).catch(function(t){console.log(t)})},handleSubmit:function(t){var e=this;this.form.validateFields(function(i,a){if(!i){var s=a;s.Amount=JSON.stringify(a.Amount),s.DepPath=JSON.stringify(a.Depts),s.DepGuid=a.Depts[a.Depts.length-1],s.BudgetDeptGuid=e.visible.detail.BudgetDeptGuid,l["a"].post("/api/Budget/Formation/SaveItem",s).then(function(i){var a=i;a.code>0?e.$message.error(a.msg):("next"===t?(e.form.resetFields(),e.refresh&&e.refresh()):e.onClose(),e.$message.success(a.msg))}).catch(function(t){console.log(t)})}})},selectFiscalYearChange:function(t){var e=this;if(t)return e.dim.subjects=[],l["a"].post("/api/Budget/Set/GetConfig",{BudgetGuid:t}).then(function(t){0===t.code&&(e.dim.subjects=t.data.subjects)}).catch(function(t){console.log(t)});e.dim.subjects=[]}}},o=r,n=i("2877"),d=Object(n["a"])(o,a,s,!1,null,null,null);e["default"]=d.exports},aac1:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-drawer",{attrs:{message:"",visible:this.visible.show,width:650,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[i("template",{slot:"title"},[t._v("\n    详情\n    "),0==t.visible.detail.Status?i("a-button",{staticStyle:{float:"right"},attrs:{size:"small",icon:"form"},on:{click:t.edit}},[t._v("修改")]):t._e()],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("部门:")]),i("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.DeptName))]),i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("部门预算:")]),i("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.Amount))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("子部门预算:")]),i("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.AmountChild))]),i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("预算:")]),i("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.AmountChild+t.visible.detail.Amount))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("状态:")]),i("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.detail.StatusText))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("备注:")]),i("a-col",{attrs:{span:16}},[t._v(t._s(t.visible.detail.Remarks))])],1),i("a-divider",{attrs:{orientation:"left"}},[t._v("部门预算详情")]),i("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,bordered:!1,pagination:!1,size:"middle",rowKey:"BudgetItemGuid"}}),i("drawer-edit",{attrs:{show:t.drawer.edit,refresh:t.init}})],2)},s=[],l=(i("ac6a"),i("b775")),r=i("3d03"),o=[{title:"科目",dataIndex:"Name"},{title:"预算",dataIndex:"Amount"}],n={components:{DrawerEdit:r["default"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,detail:{}},columns:o,dataSource:[],form:this.$form.createForm(this),drawer:{edit:{show:!1}},modal:{outchange:{show:!1}}}},created:function(){var t=this;this.$watch("show",function(e,i){t.visible=e,t.visible.show&&t.init()})},methods:{init:function(){var t=this;l["a"].post("/api/Budget/Formation/ItemList",{BudgetDeptGuid:t.show.id}).then(function(e){if(0===e.code){t.dataSource=e.data;var i=0;e.data.forEach(function(t){i+=t.Amount}),t.visible.detail.Amount=i}}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.dataSource=[],this.refresh&&this.refresh()},detail:function(t){this.drawer.detail={show:!0,id:t.SBOrderItemGuid}},edit:function(){this.drawer.edit={show:!0,id:this.show.id,detail:this.visible.detail}}}},d=n,u=i("2877"),c=Object(u["a"])(d,a,s,!1,null,null,null);e["default"]=c.exports}}]);