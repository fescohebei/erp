(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b38ca"],{"299f":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-drawer",{attrs:{title:"新建",placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:400}},[t("a-card",{attrs:{bordered:!1}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:16}}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ComName",{initialValue:e.visible.assetsdetail.ComName,rules:e.AFormImportRules.iptInput}],expression:"['ComName',{initialValue:visible.assetsdetail.ComName,rules:AFormImportRules.iptInput}]"}]})],1),t("a-form-item",{attrs:{label:"产品线",labelCol:{span:6},wrapperCol:{span:16}}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ProductLine",{initialValue:e.visible.assetsdetail.ProductLine,rules:e.AFormImportRules.iptSelect}],expression:"['ProductLine',{initialValue:visible.assetsdetail.ProductLine,rules:AFormImportRules.iptSelect }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.dim.ComProductLine,function(a){return t("a-select-option",{key:a.key},[e._v(e._s(a.text))])}),1)],1),t("a-form-item",{attrs:{label:"城市",labelCol:{span:6},wrapperCol:{span:16}}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cityname",{rules:e.AFormImportRules.iptInput}],expression:"['cityname',{rules:AFormImportRules.iptInput}]"}],attrs:{readOnly:"",placeholder:"请输入"},on:{click:e.chooseArea}})],1),t("a-form-item",{attrs:{label:"联系人",labelCol:{span:6},wrapperCol:{span:16}}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Linkman",{initialValue:e.visible.assetsdetail.Linkman,rules:e.AFormImportRules.iptInput}],expression:"['Linkman',{initialValue:visible.assetsdetail.Linkman,rules:AFormImportRules.iptInput}]"}]})],1),t("a-form-item",{attrs:{label:"联系电话",labelCol:{span:6},wrapperCol:{span:16}}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["LinkTel",{initialValue:e.visible.assetsdetail.LinkTel,rules:e.AFormImportRules.Mobile}],expression:"['LinkTel',{initialValue:visible.assetsdetail.LinkTel,rules:AFormImportRules.Mobile}]"}]})],1),t("a-form-item",{attrs:{label:"备注",labelCol:{span:6},wrapperCol:{span:16}}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{initialValue:e.visible.assetsdetail.Remarks,rules:e.AFormImportRules.Remarks}],expression:"['Remarks',{initialValue:visible.assetsdetail.Remarks,rules:AFormImportRules.Remarks}]"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1),t("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[t("a-button",{on:{click:e.onClose}},[e._v("取消")]),t("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.handleSubmit}},[e._v("提交")]),null==e.visible.id?t("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(a){return e.handleSubmit("next")}}},[e._v("提交并继续录入")]):e._e()],1),t("chooseArea",{attrs:{openDrawer:e.drawer.area.show},on:{Closearea:e.areaClose,Surearea:e.areaSure}})],1)},i=[],r=(t("7f7f"),t("b775")),o=t("61f7"),l=t("1269"),n={components:{chooseArea:l["a"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,assetsdetail:{AssetsCode:""}},dim:{Brand:[]},DepList:[],form:this.$form.createForm(this),AFormImportRules:{iptDate:[{required:!0,message:"请选择"}],iptInput:[{required:!0,message:"请输入"}],iptSelect:[{required:!0,message:"请选择"}],Remarks:[{required:!0,message:"备注"}],Mobile:[{required:!0,message:"请输入手机号"}]},drawer:{area:{show:!1}},city:{}}},watch:{show:function(e,a){var t=this;null==t.visible.assetsdetail&&(t.visible.assetsdetail={AssetsCode:""}),null!=e.assetsdetail.PurchaseDate&&(e.assetsdetail.PurchaseDate=moment(e.assetsdetail.PurchaseDate)),t.visible=e,e.show&&t.init()}},methods:{onClose:function(){this.visible.show=!1,this.city={},this.refresh&&this.refresh(),this.form.resetFields()},init:function(){var e=this;r["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine"]}).then(function(a){0===a.code&&(e.dim.ComProductLine=a.data.ComProductLine)}).catch(function(e){console.log(e)}),r["a"].get("/api/Org/Department/DepsByCurUser").then(function(a){0===a.code&&(e.DepList=a.data)}).catch(function(e){console.log(e)})},handleSubmit:function(e){var a=this;this.form.validateFields(function(t,s){if(!t){var i=s;i.LeadsGuid=a.visible.id,i.CityCode=a.city.value,a.$loading.open(),r["a"].post("/api/Leads/Com/Save",i).then(function(t){a.$loading.close();var s=t;s.code>0?a.$message.error(s.msg):("next"===e?(a.form.resetFields(),a.refresh&&a.refresh()):a.onClose(),a.$message.success(s.msg))}).catch(function(e){a.$loading.close(),console.log(e)})}})},ConfirmMobile:function(e,a,t){!a||Object(o["d"])(a)?t():t("手机号码不符合规则！")},chooseArea:function(){this.drawer.area={show:!0}},areaClose:function(e){this.drawer.area={show:!1}},areaSure:function(e){this.city=e,this.drawer.area={show:!1},this.form.setFieldsValue({cityname:e.name})}}},u=n,m=t("2877"),c=Object(m["a"])(u,s,i,!1,null,null,null);a["default"]=c.exports}}]);