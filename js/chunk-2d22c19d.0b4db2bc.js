(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c19d"],{f294:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-drawer",{attrs:{title:"报废后处置",placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:400}},[s("a-card",{attrs:{bordered:!1}},[s("a-form",{attrs:{form:t.form}},[s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("编号:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetstransferdetail.AssetsCode))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("名称:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetstransferdetail.AssetsName))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("品牌:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetstransferdetail.BrandName))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("规格:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetstransferdetail.Spec))])],1),s("a-row",{attrs:{gutter:24}},[s("a-col",{attrs:{span:24}},[s("a-form-item",{attrs:{label:"处置类型",labelCol:{span:6},wrapperCol:{span:18}}},[s("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["DisposeType",{rules:t.AFormImportRules.iptSelect}],expression:"['DisposeType',{rules:AFormImportRules.iptSelect}]"}],attrs:{placeholder:"请选择",allowClear:!0}},t._l(t.DisposeTypeList,function(e){return s("a-select-option",{key:e.key},[t._v(t._s(e.text))])}),1)],1)],1),s("a-col",{attrs:{span:24}},[s("a-form-item",{attrs:{label:"处置日期",labelCol:{span:6},wrapperCol:{span:18}}},[s("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["DisposeDate",{rules:t.AFormImportRules.iptDate}],expression:"['DisposeDate',{rules:AFormImportRules.iptDate }]"}],staticStyle:{width:"100%"}})],1)],1)],1),s("a-row",{attrs:{gutter:24}},[s("a-col",{attrs:{span:24}},[s("a-form-item",{attrs:{label:"说明",labelCol:{span:6},wrapperCol:{span:18}}},[s("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["DisposeNotes",{rules:t.AFormImportRules.iptTextarea}],expression:"['DisposeNotes',{rules:AFormImportRules.iptTextarea }]"}],attrs:{placeholder:"说明",rows:4}})],1)],1)],1)],1)],1),s("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[s("a-button",{on:{click:t.onClose}},[t._v("取消")]),s("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:t.handleSubmit}},[t._v("提交")])],1)],1)},r=[],i=s("b775"),o={props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null},callback:{type:Function,default:null}},data:function(){return{visible:{show:!1,assetstransferdetail:{AssetsName:""}},form:this.$form.createForm(this),dim:{Departments:[]},options:[],AFormImportRules:{iptDate:[{required:!0,message:"请选择"}],iptSelect:[{required:!0,message:"请选择"}],iptTextarea:[{required:!0,message:"请输入"}],Amount:[{required:!0,message:"请输入"},{validator:this.checkAmount}]},DisposeTypeList:[]}},watch:{show:function(t,e){var s=this;s.visible=t,t.show&&s.init()}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields()},init:function(){var t=this;i["a"].post("/api/Dim/Enum/GetEnum",{Names:["DisposeType"]}).then(function(e){0===e.code&&(t.DisposeTypeList=e.data.DisposeType)}).catch(function(t){console.log(t)})},handleSubmit:function(){var t=this;this.form.validateFields(function(e,s){if(!e){var a=s;a.AssetsGuid=t.visible.id,i["a"].post("/api/Supplies/Assets/Dispose",a).then(function(e){var s=e;s.code>0?t.$message.error(s.msg):(t.onClose(),t.$message.success(s.msg),t.visible.callback&&t.visible.callback())}).catch(function(t){console.log(t)})}})}}},l=o,n=s("2877"),p=Object(n["a"])(l,a,r,!1,null,null,null);e["default"]=p.exports}}]);