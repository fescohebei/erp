(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-959e662a","chunk-2d0b38ca"],{"299f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{title:"新建",placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:400}},[a("a-card",{attrs:{bordered:!1}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ComName",{initialValue:t.visible.assetsdetail.ComName,rules:t.AFormImportRules.iptInput}],expression:"['ComName',{initialValue:visible.assetsdetail.ComName,rules:AFormImportRules.iptInput}]"}]})],1),a("a-form-item",{attrs:{label:"产品线",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ProductLine",{initialValue:t.visible.assetsdetail.ProductLine,rules:t.AFormImportRules.iptSelect}],expression:"['ProductLine',{initialValue:visible.assetsdetail.ProductLine,rules:AFormImportRules.iptSelect }]"}],attrs:{placeholder:"请选择",allowClear:!0}},t._l(t.dim.ComProductLine,function(e){return a("a-select-option",{key:e.key},[t._v(t._s(e.text))])}),1)],1),a("a-form-item",{attrs:{label:"城市",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cityname",{rules:t.AFormImportRules.iptInput}],expression:"['cityname',{rules:AFormImportRules.iptInput}]"}],attrs:{readOnly:"",placeholder:"请输入"},on:{click:t.chooseArea}})],1),a("a-form-item",{attrs:{label:"联系人",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Linkman",{initialValue:t.visible.assetsdetail.Linkman,rules:t.AFormImportRules.iptInput}],expression:"['Linkman',{initialValue:visible.assetsdetail.Linkman,rules:AFormImportRules.iptInput}]"}]})],1),a("a-form-item",{attrs:{label:"联系电话",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["LinkTel",{initialValue:t.visible.assetsdetail.LinkTel,rules:t.AFormImportRules.Mobile}],expression:"['LinkTel',{initialValue:visible.assetsdetail.LinkTel,rules:AFormImportRules.Mobile}]"}]})],1),a("a-form-item",{attrs:{label:"备注",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{initialValue:t.visible.assetsdetail.Remarks,rules:t.AFormImportRules.Remarks}],expression:"['Remarks',{initialValue:visible.assetsdetail.Remarks,rules:AFormImportRules.Remarks}]"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:t.onClose}},[t._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:t.handleSubmit}},[t._v("提交")]),null==t.visible.id?a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.handleSubmit("next")}}},[t._v("提交并继续录入")]):t._e()],1),a("chooseArea",{attrs:{openDrawer:t.drawer.area.show},on:{Closearea:t.areaClose,Surearea:t.areaSure}})],1)},i=[],r=(a("7f7f"),a("b775")),o=a("61f7"),l=a("1269"),n={components:{chooseArea:l["a"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,assetsdetail:{AssetsCode:""}},dim:{Brand:[]},DepList:[],form:this.$form.createForm(this),AFormImportRules:{iptDate:[{required:!0,message:"请选择"}],iptInput:[{required:!0,message:"请输入"}],iptSelect:[{required:!0,message:"请选择"}],Remarks:[{required:!0,message:"备注"}],Mobile:[{required:!0,message:"请输入手机号"}]},drawer:{area:{show:!1}},city:{}}},watch:{show:function(t,e){var a=this;null==a.visible.assetsdetail&&(a.visible.assetsdetail={AssetsCode:""}),null!=t.assetsdetail.PurchaseDate&&(t.assetsdetail.PurchaseDate=moment(t.assetsdetail.PurchaseDate)),a.visible=t,t.show&&a.init()}},methods:{onClose:function(){this.visible.show=!1,this.city={},this.refresh&&this.refresh(),this.form.resetFields()},init:function(){var t=this;r["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine"]}).then(function(e){0===e.code&&(t.dim.ComProductLine=e.data.ComProductLine)}).catch(function(t){console.log(t)}),r["a"].get("/api/Org/Department/DepsByCurUser").then(function(e){0===e.code&&(t.DepList=e.data)}).catch(function(t){console.log(t)})},handleSubmit:function(t){var e=this;this.form.validateFields(function(a,s){if(!a){var i=s;i.LeadsGuid=e.visible.id,i.CityCode=e.city.value,e.$loading.open(),r["a"].post("/api/Leads/Com/Save",i).then(function(a){e.$loading.close();var s=a;s.code>0?e.$message.error(s.msg):("next"===t?(e.form.resetFields(),e.refresh&&e.refresh()):e.onClose(),e.$message.success(s.msg))}).catch(function(t){e.$loading.close(),console.log(t)})}})},ConfirmMobile:function(t,e,a){!e||Object(o["d"])(e)?a():a("手机号码不符合规则！")},chooseArea:function(){this.drawer.area={show:!0}},areaClose:function(t){this.drawer.area={show:!1}},areaSure:function(t){this.city=t,this.drawer.area={show:!1},this.form.setFieldsValue({cityname:t.name})}}},d=n,c=a("2877"),u=Object(c["a"])(d,s,i,!1,null,null,null);e["default"]=u.exports},f228:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{message:"",visible:this.visible.show,width:650,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[a("template",{slot:"title"},[t._v("\n    "+t._s(t.assetsdetail.GoodsName)+"详情\n    "),0==t.assetsdetail.Status?a("a-button",{staticStyle:{float:"right"},attrs:{size:"small",icon:"form"},on:{click:t.edit}},[t._v("修改")]):t._e()],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("公司名称:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.ComName))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("产品线:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.ComProductLine[t.assetsdetail.ProductLine]))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("联系人:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.Linkman))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("联系电话:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.LinkTel))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("创建时间:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.CreatDate))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("更新时间:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.UpdateTime))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("城市:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.cityList[t.assetsdetail.CityCode]))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("归属人:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.userArray[t.assetsdetail.Userid]))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("状态:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.ComLeadsStatus[t.assetsdetail.Status]))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("备注:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.Remarks))])],1),a("a-divider",{attrs:{orientation:"left"}},[t._v("流程记录")]),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,bordered:!1,pagination:!1,size:"middle",rowKey:"LogGuid"}}),a("drawer-edit",{attrs:{show:t.drawer.edit,refresh:t.init}})],2)},i=[],r=a("b775"),o=a("299f"),l=(a("c32d"),[{title:"状态",dataIndex:"ActionText"},{title:"操作人员",dataIndex:"UseridText"},{title:"操作时间",dataIndex:"LogTime"}]),n={components:{DrawerEdit:o["default"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},cityList:{},userArray:{},ComProductLine:{},ComLeadsStatus:{}},columns:l,formSearch:{pageSize:10,current:1,total:0},dataSource:[],assetsdetail:{},enableeditguid:"",form:this.$form.createForm(this),drawer:{edit:{show:!1}},modal:{outchange:{show:!1}}}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{init:function(){var t=this;r["a"].post("/api/Leads/Com/Detail",{LeadsGuid:t.show.id}).then(function(e){0===e.code&&(t.assetsdetail=e.data.leadsCom,t.dataSource=e.data.leadsComLogs)}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.dataSource=[],this.assetsdetail={},this.refresh&&this.refresh()},detail:function(t){this.drawer.detail={show:!0,id:t.SBOrderItemGuid}},edit:function(){this.drawer.edit={show:!0,id:this.show.id,assetsdetail:this.assetsdetail}},outchange:function(t){this.modal.outchange={show:!0,id:t.BalanceGuid,balance:t}}}},d=n,c=a("2877"),u=Object(c["a"])(d,s,i,!1,null,null,null);e["default"]=u.exports}}]);