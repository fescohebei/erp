(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d820b966"],{4205:function(e,t,a){"use strict";var s=a("8a1e"),i=a.n(s);i.a},"8a1e":function(e,t,a){},a117:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{message:"",visible:this.visible.show,width:1100,destroyOnClose:!0,closable:!1,maskClosable:!0},on:{close:e.onClose}},[a("template",{slot:"title"},[e._v("\n    拨款详情\n    "),20==e.receipt.ReceiptStatus?a("a-button",{staticStyle:{float:"right"},attrs:{size:"small",icon:"api"},on:{click:e.match}},[e._v("匹配社保享受记录")]):e._e()],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"ReceiptItemGuid"},scopedSlots:e._u([{key:"ReceiptItemStatus",fn:function(t,s){return a("span",{staticStyle:{"text-align":"right",width:"120px"}},[e._v("\n        "+e._s(e.visible.ReceiptItemStatus[s.ReceiptItemStatus])+"\n    ")])}},{key:"BankId",fn:function(t,s){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(e.visible.Bank[s.BankId])+"\n    ")])}}])}),a("a-modal",{attrs:{title:"请选择到款类型",visible:e.showLayer,"confirm-loading":e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"类型",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["BXClassCode",{rules:e.AFormImportRules.iptSelect}],expression:"['BXClassCode',{rules:AFormImportRules.iptSelect}]"}]},e._l(e.BXClass,function(t){return a("a-select-option",{key:t.code},[e._v("\n                      "+e._s(t.name)+"\n                    ")])}),1)],1)],1)],1)],1)])],1)],2)},i=[],o=a("b775"),n=[{title:"状态",scopedSlots:{customRender:"ReceiptItemStatus"},width:120,key:"ReceiptItemStatus"},{title:"姓名",dataIndex:"姓名"},{title:"身份证号",dataIndex:"身份证号"},{title:"类型",dataIndex:"类型"},{title:"金额",dataIndex:"金额"},{title:"日期",dataIndex:"日期"},{title:"备注",dataIndex:"备注"}],l={components:{},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},publishdetail:{},Bank:{},RecPublishItemStatus:{},UserArray:{},DeptArray:{},ReceiptTypeList:[]},columns:n,publishdetail:{},dataSource:[],form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}],iptSelect:[{required:!0,message:"请选择"}]},drawer:{},modal:{outchange:{show:!1}},SpaceId:"",receipt:{},showLayer:!1,confirmLoading:!1,receiptType:"",BXClass:[]}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,console.log(e.visible),e.visible.show&&e.init()})},methods:{init:function(){var e=this;o["a"].post("/api/Receipt/Baoxiao/Detail",{ReceiptGuid:e.visible.detail.ReceiptGuid}).then(function(t){0===t.code&&(e.dataSource=t.data.rows,e.receipt=t.data.receipt)}).catch(function(e){console.log(e)}),o["a"].post("/api/Dim/Enum/GetDim",{Names:["BXClass"]}).then(function(t){0===t.code&&(e.BXClass=t.data.BXClass)}).catch(function(e){console.log(e)})},onClose:function(){this.visible.show=!1,this.publishdetail={},this.refresh&&this.refresh()},match:function(){this.showLayer=!0},handleOk:function(e){var t=this,a={ReceiptGuid:t.visible.detail.ReceiptGuid};this.form.validateFields(function(e,s){e||(a.BXClassCode=s.BXClassCode,o["a"].post("/api/Receipt/Baoxiao/Match",a).then(function(e){0===e.code&&(t.showLayer=!1,t.$message.success(e.msg),t.onClose(),t.refresh()),e.code>0&&t.$message.error(e.msg)}).catch(function(e){console.log(e)}))})},handleCancel:function(e){this.showLayer=!1,this.form.resetFields()}}},c=l,r=(a("4205"),a("2877")),d=Object(r["a"])(c,s,i,!1,null,null,null);t["default"]=d.exports}}]);