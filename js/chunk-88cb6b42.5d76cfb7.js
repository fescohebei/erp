(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88cb6b42"],{"16d1":function(e,a,t){},"20f0":function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-drawer",{attrs:{title:"合同确认",placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:500}},[t("a-card",{attrs:{bordered:!1}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{label:"产业",labelCol:{span:5},wrapperCol:{span:16}}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ChanyeCode",{rules:e.AFormImportRules.iptSelect}],expression:"['ChanyeCode',{rules:AFormImportRules.iptSelect }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.industry,function(a){return t("a-select-option",{key:a.code},[e._v(e._s(a.name))])}),1)],1),t("a-form-item",{attrs:{label:"地区",labelCol:{span:5},wrapperCol:{span:16}}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cityname",{initialValue:e.city.name,rules:e.AFormImportRules.iptInput}],expression:"['cityname',{initialValue:city.name,rules:AFormImportRules.iptInput}]"}],attrs:{readOnly:"",placeholder:"请输入"},on:{click:e.chooseArea}})],1),t("a-form-item",{attrs:{label:"合同编号",labelCol:{span:5},wrapperCol:{span:16}}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ContractCode",{rules:e.AFormImportRules.iptInput}],expression:"['ContractCode',{rules:AFormImportRules.iptInput}]"}],attrs:{placeholder:"请输入"}})],1),t("a-form-item",{attrs:{label:"是否月结",labelCol:{span:5},wrapperCol:{span:16}}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["IsProject",{initialValue:"0"},{rules:[{required:!0,message:"请选择"}]}],expression:"['IsProject', {initialValue: '0'}, {rules: [{ required: true, message: '请选择' }]}]"}],on:{change:e.onChange}},[t("a-radio",{attrs:{value:"0"}},[e._v("\n            是\n          ")]),t("a-radio",{attrs:{value:"1"}},[e._v("\n            否\n          ")])],1)],1),"0"==e.IsProject?t("a-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"付款时间",labelCol:{span:5},wrapperCol:{span:16}}},[t("a-form-item",{style:{display:"inline-block",width:"calc(50% - 12px)"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["PayDay",{}],expression:"['PayDay',{}]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.PayDayList,function(a){return t("a-select-option",{key:a.code},[e._v(e._s(a.name))])}),1)],1),t("span",{style:{display:"inline-block",width:"24px",textAlign:"center"}},[e._v("\n          -\n        ")]),t("a-form-item",{style:{display:"inline-block",width:"calc(50% - 12px)"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["PayDaySuffix",{}],expression:"['PayDaySuffix',{}]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.PayDaySuffix,function(a){return t("a-select-option",{key:a.key},[e._v(e._s(a.text))])}),1)],1)],1):e._e(),t("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:16}}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{}],expression:"['Remarks',{}]"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1),t("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[t("a-button",{on:{click:e.onClose}},[e._v("取消")]),t("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.handleSubmit}},[e._v("提交")])],1),t("chooseArea",{attrs:{openDrawer:e.drawer.area.show},on:{Closearea:e.areaClose,Surearea:e.areaSure}})],1)},r=[],i=t("bd86"),s=t("75fc"),n=(t("7f7f"),t("ac6a"),t("b775")),l=t("61f7"),c=t("1269"),d={components:{chooseArea:c["a"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,assetsdetail:{AssetsCode:""}},dim:{Brand:[]},DepList:[],industry:[],options:[],form:this.$form.createForm(this),AFormImportRules:{iptDate:[{required:!0,message:"请选择"}],iptInput:[{required:!0,message:"请输入"}],iptSelect:[{required:!0,message:"请选择"}],Remarks:[{required:!0,message:"备注"}],Mobile:[{required:!0,message:"请输入手机号"},{validator:this.ConfirmMobile}]},drawer:{area:{show:!1}},city:{},PayDayList:[{code:"1",name:"1日"},{code:"2",name:"2日"},{code:"3",name:"3日"},{code:"4",name:"4日"},{code:"5",name:"5日"},{code:"6",name:"6日"},{code:"7",name:"7日"},{code:"8",name:"8日"},{code:"9",name:"9日"},{code:"10",name:"10日"},{code:"11",name:"11日"},{code:"12",name:"12日"},{code:"13",name:"13日"},{code:"14",name:"14日"},{code:"15",name:"15日"},{code:"16",name:"16日"},{code:"17",name:"17日"},{code:"18",name:"18日"},{code:"19",name:"19日"},{code:"20",name:"20日"},{code:"21",name:"21日"},{code:"22",name:"22日"},{code:"23",name:"23日"},{code:"24",name:"24日"},{code:"25",name:"25日"},{code:"26",name:"26日"},{code:"27",name:"27日"},{code:"28",name:"28日"},{code:"29",name:"29日"},{code:"30",name:"30日"},{code:"31",name:"31日"}],PayDaySuffix:[],IsProject:"0"}},watch:{show:function(e,a){var t=this;null==t.visible.assetsdetail&&(t.visible.assetsdetail={AssetsCode:""}),null!=e.assetsdetail.PurchaseDate&&(e.assetsdetail.PurchaseDate=moment(e.assetsdetail.PurchaseDate)),t.visible=e,e.show&&t.init()}},methods:Object(i["a"])({onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields(),this.options=[],this.city={},this.IsProject="0"},init:function(){var e=this;n["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine","PayDaySuffix"]}).then(function(a){0===a.code&&(e.dim.ComProductLine=a.data.ComProductLine,e.PayDaySuffix=a.data.PayDaySuffix)}).catch(function(e){console.log(e)}),n["a"].post("/api/Dim/Enum/GetDim",{Names:["Chanye","Province"]}).then(function(a){0===a.code&&(e.industry=a.data.Chanye,a.data.Province.forEach(function(a,t){var o={};o.value=a.code,o.label=a.name,o.isLeaf=!1,e.options.push(o)}))}).catch(function(e){console.log(e)})},handleSubmit:function(e){var a=this;this.form.validateFields(function(e,t){if(!e){var o=t;if(o.ContractGuid=a.visible.assetsdetail.ContractGuid,o.CityCode=a.city.value,console.log(t),"0"==t.IsProject&&(""==t.PayDay||""==t.PayDaySuffix||void 0==t.PayDay||void 0==t.PayDaySuffix))return void a.$message.error("请输入完整的付款时间！");o.IsProject="0"!=t.IsProject,a.$loading.open(),n["a"].post("/api/Crm/Contract/Archive",o).then(function(e){a.$loading.close();var t=e;t.code>0?a.$message.error(t.msg):(a.onClose(),a.$message.success(t.msg))}).catch(function(e){a.$loading.close(),console.log(e)})}})},ConfirmMobile:function(e,a,t){!a||Object(l["d"])(a)?t():t("手机号码不符合规则！")},loadData:function(e){var a=e[e.length-1],t=this;a.loading=!0,n["a"].post("/api/Dim/Enum/GetCity",{ProvinceCode:a.value}).then(function(e){a.loading=!1,0===e.code&&(e.data.city.length>0?(a.children=[],e.data.city.forEach(function(e,t){var o={};o.value=e.code,o.label=e.name,o.isLeaf=!1,a.children.push(o)}),t.options=Object(s["a"])(t.options)):(a.isLeaf=!0,t.options=Object(s["a"])(t.options)))}).catch(function(e){console.log(e),a.loading=!1})},onChange:function(e){},areaClose:function(e){this.drawer.area={show:!1}},areaSure:function(e){this.city=e,this.drawer.area={show:!1},this.form.setFieldsValue({cityname:e.name})},chooseArea:function(){this.drawer.area={show:!0}}},"onChange",function(e){this.IsProject=e.target.value})},m=d,u=(t("37e5"),t("2877")),p=Object(u["a"])(m,o,r,!1,null,"64f689cc",null);a["default"]=p.exports},"37e5":function(e,a,t){"use strict";var o=t("16d1"),r=t.n(o);r.a}}]);