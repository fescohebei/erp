(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d5fd1"],{7145:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-drawer",{attrs:{title:"出库",placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:700}},[t("a-card",{attrs:{bordered:!1}},[t("a-form",{attrs:{form:e.form}},[t("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[t("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("编号:")]),t("a-col",{attrs:{span:6}},[e._v(e._s(e.visible.assetstransferdetail.AssetsCode))]),t("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("名称:")]),t("a-col",{attrs:{span:6}},[e._v(e._s(e.visible.assetstransferdetail.AssetsName))])],1),t("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[t("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("品牌:")]),t("a-col",{attrs:{span:6}},[e._v(e._s(e.visible.assetstransferdetail.BrandName))]),t("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("规格:")]),t("a-col",{attrs:{span:6}},[e._v(e._s(e.visible.assetstransferdetail.Spec))])],1),t("a-row",{attrs:{gutter:24}},[t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"交接类型",labelCol:{span:8},wrapperCol:{span:16}}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["TransferType",{initialValue:e.visible.assetstransferdetail.TransferType,rules:e.AFormImportRules.iptSelect}],expression:"['TransferType',{initialValue: visible.assetstransferdetail.TransferType,rules:AFormImportRules.iptSelect }]"}],attrs:{placeholder:"请选择",allowClear:!0},on:{change:e.onTransferTypeChange}},[t("a-select-option",{key:1},[e._v("交付")]),t("a-select-option",{key:2},[e._v("收回")]),t("a-select-option",{key:3},[e._v("转移")])],1)],1)],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"日期",labelCol:{span:8},wrapperCol:{span:16}}},[t("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["TransferDate",{initialValue:e.visible.assetstransferdetail.TransferDate,rules:e.AFormImportRules.iptDate}],expression:"['TransferDate',{initialValue: visible.assetstransferdetail.TransferDate,rules:AFormImportRules.iptDate }]"}]})],1)],1)],1),"3"==e.visible.assetstransferdetail.TransferType?t("a-row",{attrs:{gutter:24}},[t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"管理部门",labelCol:{span:8},wrapperCol:{span:16}}},[[t("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["Manage_DT_DepGuid",{initialValue:e.visible.assetstransferdetail.Manage_DT_DepGuid,rules:e.AFormImportRules.iptSelect}],expression:"['Manage_DT_DepGuid',{initialValue: visible.assetstransferdetail.Manage_DT_DepGuid,rules:AFormImportRules.iptSelect }]"}],attrs:{options:e.options,changeOnSelect:"",placeholder:"请选择",allowClear:!0},on:{change:e.onChange}})]],2)],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"存放地点",labelCol:{span:8},wrapperCol:{span:16}}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Location",{initialValue:e.visible.assetstransferdetail.Location,rules:e.AFormImportRules.iptInput}],expression:"['Location',{initialValue:visible.assetstransferdetail.Location,rules:AFormImportRules.iptInput}]"}]})],1)],1)],1):e._e(),"1"==e.visible.assetstransferdetail.TransferType?t("a-row",{attrs:{gutter:24}},[t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"使用部门",labelCol:{span:8},wrapperCol:{span:16}}},[[t("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["DT_DepGuid",{initialValue:e.visible.assetstransferdetail.DT_DepGuid,rules:e.AFormImportRules.iptSelect}],expression:"['DT_DepGuid',{initialValue: visible.assetstransferdetail.DT_DepGuid,rules:AFormImportRules.iptSelect }]"}],attrs:{options:e.options,changeOnSelect:"",placeholder:"请选择",allowClear:!0},on:{change:e.onChange}})]],2)],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"使用人",labelCol:{span:8},wrapperCol:{span:16}}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["DT_UserGuid",{initialValue:e.visible.assetstransferdetail.DT_UserGuid,rules:e.AFormImportRules.iptSelect}],expression:"['DT_UserGuid',{initialValue: visible.assetstransferdetail.DT_UserGuid,rules:AFormImportRules.iptSelect }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.dim.ApplyUser,function(a){return t("a-select-option",{key:a.code},[e._v(e._s(a.name))])}),1)],1)],1)],1):e._e(),t("a-row",{attrs:{gutter:24}},[t("a-col",{attrs:{span:24}},[t("a-form-item",{attrs:{label:"备注",labelCol:{span:4},wrapperCol:{span:20}}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{initialValue:e.visible.assetstransferdetail.Remarks}],expression:"['Remarks',{initialValue: visible.assetstransferdetail.Remarks }]"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1)],1)],1),t("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[t("a-button",{on:{click:e.onClose}},[e._v("取消")]),t("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)},r=[],i=t("b775"),l={props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,assetstransferdetail:{AssetsName:""}},form:this.$form.createForm(this),dim:{Departments:[]},options:[],AFormImportRules:{iptDate:[{required:!0,message:"请选择"}],iptSelect:[{required:!0,message:"请选择"}],Amount:[{required:!0,message:"请输入"},{validator:this.checkAmount}]}}},watch:{show:function(e,a){var t=this;null!=e.assetstransferdetail.TransferDate&&(e.assetstransferdetail.TransferDate=moment(e.assetstransferdetail.TransferDate)),t.visible=e,e.show&&t.init()}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields()},onChange:function(e){var a=this;e.length<0?(a.dim.ApplyUser=null,a.form.setFieldsValue({DT_UserGuid:void 0})):1==a.visible.assetstransferdetail.TransferType&&i["a"].post("/api/Org/User/UsersJsonByOneLevelDepId",{DepId:e[e.length-1]}).then(function(e){0===e.code&&(a.dim.ApplyUser=e.data,a.form.setFieldsValue({DT_UserGuid:void 0}))}).catch(function(e){console.log(e)})},init:function(){var e=this;i["a"].post("/api/Org/Department/TopDepsTreeJson").then(function(a){0===a.code&&(e.options=a.data)}).catch(function(e){console.log(e)})},handleSubmit:function(){var e,a=this;this.form.validateFields(function(t,s){if(!t){var r=s;1==r.TransferType&&(e=r.DT_DepGuid[r.DT_DepGuid.length-1],r.DT_DepGuid=""),3==r.TransferType&&(e=r.Manage_DT_DepGuid[r.Manage_DT_DepGuid.length-1],r.Manage_DT_DepGuid=""),r.AssetsGuid=a.visible.id,i["a"].post("/api/Supplies/Assets/SaveFormTransfer",{transfer:r,DepId:e}).then(function(e){var t=e;t.code>0?a.$message.error(t.msg):(a.onClose(),a.$message.success(t.msg))}).catch(function(e){console.log(e)})}})},onTransferTypeChange:function(e){this.visible.assetstransferdetail.TransferType=e}}},n=l,o=t("2877"),p=Object(o["a"])(n,s,r,!1,null,null,null);a["default"]=p.exports}}]);