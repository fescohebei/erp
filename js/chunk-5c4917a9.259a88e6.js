(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c4917a9","chunk-88cb6b42"],{"0760":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-drawer",{attrs:{message:"",visible:this.visible.show,width:450,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[e("template",{slot:"title"},[t._v("\n    合同详情\n    "),t.visible.rolesmanager&&40==t.visible.assetsdetail.Status&&10==t.visible.assetsdetail.Result?e("a-button",{staticStyle:{float:"right"},attrs:{size:"small",icon:"form"},on:{click:t.isSure}},[t._v("确认")]):t._e()],1),60==t.visible.assetsdetail.Status||80==t.visible.assetsdetail.Status?[e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("合同编号:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.ContractCode?t.visible.assetsdetail.ContractCode:"无"))])],1)]:t._e(),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("公司名称:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.ComName?t.visible.assetsdetail.ComName:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("客商类型:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.ComTypeText?t.visible.assetsdetail.ComTypeText:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("客户评级:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.rankText?t.rankText:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("产品线:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.ProductLineText?t.visible.assetsdetail.ProductLineText:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("申请日期:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.CreateDate?t.moment(t.visible.assetsdetail.CreateDate).format("YYYY-MM-DD"):"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("开始日期:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.StartDate?t.moment(t.visible.assetsdetail.StartDate).format("YYYY-MM-DD"):"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("终止日期:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.EndDate?t.moment(t.visible.assetsdetail.EndDate).format("YYYY-MM-DD"):"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("是否延期:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["是否延期"]?t.FormComponentValues["是否延期"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("服务内容:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["服务内容"]?t.FormComponentValues["服务内容"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("服务部门:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["服务部门"]?t.visible.Dept[t.FormComponentValues["服务部门"]]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("申请类型:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.SignTypeText?t.visible.assetsdetail.SignTypeText:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("合同内容:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["合同内容"]?t.FormComponentValues["合同内容"]:"无"))])],1),t.FormComponentValues["标准合同修改内容"]&&t.FormComponentValues["标准合同修改内容"][0]["原合同内容"]?t._l(t.FormComponentValues["标准合同修改内容"],function(a,s){return e("a-row",{key:s,staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{attrs:{span:24}},[e("a-divider",{staticStyle:{"font-size":"12px"},attrs:{dashed:"",orientation:"left"}},[t._v("标准合同修改内容("+t._s(s+1)+"):")])],1),e("a-col",{attrs:{span:24}},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("原合同内容：")]),t._v(t._s(a["原合同内容"]))]),e("a-col",{attrs:{span:24}},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("修改后合同内容：")]),t._v(t._s(a["修改后合同内容"]))])],1)}):t._e(),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("垫付:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["垫付"]?t.FormComponentValues["垫付"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("垫付金额:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["垫付金额"]?t.FormComponentValues["垫付金额"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("垫付周期:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["垫付周期"]?t.FormComponentValues["垫付周期"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("月服务费:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["月服务费"]?t.FormComponentValues["月服务费"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("垫付说明:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["垫付说明"]?t.FormComponentValues["垫付说明"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("信息提供者:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.InfoUseridText?t.visible.assetsdetail.InfoUseridText:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("信息提供部门:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.InfoDepIdText?t.visible.assetsdetail.InfoDepIdText:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("信息费比例:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["信息费比例"]?t.FormComponentValues["信息费比例"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("销售部门:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["销售部门"]?t.visible.Dept[t.FormComponentValues["销售部门"]]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("销售姓名:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.CreateUseridText?t.visible.assetsdetail.CreateUseridText:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("签单支持部门:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["签单支持部门"]?t.visible.Dept[t.FormComponentValues["签单支持部门"]]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("签单支持员工:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["签单支持员工"]?t.visible.User[t.FormComponentValues["签单支持员工"]]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("附件:")]),e("a-col",{attrs:{span:18}},[1==t.notInDingTalk?e("div",[e("a-tag",{attrs:{color:"red"}},[t._v("请到钉钉应用界面查看附件！")])],1):t._e(),0==t.notInDingTalk?[t.uploadArry.length>0?t._l(t.uploadArry,function(a){return e("div",{key:a.fileId},[e("a-icon",{attrs:{type:"file-text"}}),t._v(" "+t._s(a.fileName)+"  "),e("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"file-search"},on:{click:function(e){return t.preview(a)}}})],1)}):[t._v("无")]]:t._e()],2)],1),60==t.visible.assetsdetail.Status||80==t.visible.assetsdetail.Status?[e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("产业:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.chanyeList[t.visible.assetsdetail.ChanyeCode]?t.chanyeList[t.visible.assetsdetail.ChanyeCode]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("地区:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.cityList[t.visible.assetsdetail.CityCode]?t.cityList[t.visible.assetsdetail.CityCode]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("付款时间:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.PayDay?"每月"+t.visible.assetsdetail.PayDay+"日"+t.visible.PayDaySuffix[t.visible.assetsdetail.PayDaySuffix]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("备注:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.Remarks?t.visible.assetsdetail.Remarks:"无"))])],1)]:t._e(),e("a-row",{staticStyle:{padding:"10px 0"},attrs:{gutter:24}}),e("drawer-issure",{attrs:{show:t.drawer.issure,refresh:t.init}})],2)},i=[],o=(e("6b54"),e("b775")),r=e("c32d"),n=e.n(r),l=e("20f0"),c={components:{DrawerIssure:l["default"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},assetsdetail:{},PayDaySuffix:{},Dept:{},User:{},rolesmanager:!1},FormComponentValues:{},formSearch:{pageSize:5,current:1,total:0,next:!0},form:this.$form.createForm(this),drawer:{issure:{show:!1}},modal:{outchange:{show:!1}},cityList:{},chanyeList:{},SpaceId:"",uploadArry:[],fescoMessage:{},notInDingTalk:!1,moment:n.a,rankText:""}},created:function(){var t=this;this.$watch("show",function(a,e){t.visible=a,console.log(t.visible),t.visible.show&&t.init()})},methods:{init:function(){var t=this;this.visible.assetsdetail.ProcessInstanceId?t.FormComponentValues=JSON.parse(this.visible.assetsdetail.FormComponentValues):t.FormComponentValues={"服务内容":this.visible.assetsdetail.FormComponentValues},o["a"].post("/api/Dim/Enum/DimDecode",{Names:["City","chanye"]}).then(function(a){0===a.code&&(t.cityList=a.data.City,t.chanyeList=a.data.chanye)}).catch(function(t){console.log(t)}),o["a"].post("/api/Crm/ComRank/Last",{ComGuid:t.visible.assetsdetail.ComGuid}).then(function(a){0===a.code&&(a.data?t.rankText=t.visible.comRankObject[a.data.Rank]:t.rankText="")}).catch(function(t){console.log(t)}),o["a"].get("/api/DingTalk/CspaceInfo").then(function(a){var e=a,s=e.data.SpaceId;0===e.code&&(t.SpaceId=s)}).catch(function(t){console.log(t)}),o["a"].post("/api/DingTalk/GetSign",{}).then(function(a){t.fescoMessage=a.data,dd.config({agentId:a.data.AgentId,corpId:a.data.corpId,timeStamp:a.data.timeStamp,nonceStr:a.data.nonceStr,signature:a.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(t){console.log(t)}),"notInDingTalk"==dd.env.platform&&(t.notInDingTalk=!0),t.FormComponentValues["附件"]&&(t.uploadArry=t.FormComponentValues["附件"])},onClose:function(){this.visible.show=!1,this.sourceListRecords=[],this.formSearch.next=!0,this.FormComponentValues={},this.visible.assetsdetail={},this.uploadArry=[],this.refresh&&this.refresh()},isSure:function(){this.drawer.issure={show:!0,assetsdetail:this.visible.assetsdetail}},preview:function(t){var a=this;dd.ready(function(){dd.biz.cspace.preview({corpId:a.fescoMessage.corpId,spaceId:a.SpaceId.toString(),fileId:t.fileId,fileName:t.fileName,fileSize:t.fileSize,fileType:t.fileType,onSuccess:function(){},onFail:function(t){}})})}}},d=c,p=e("2877"),u=Object(p["a"])(d,s,i,!1,null,null,null);a["default"]=u.exports},"16d1":function(t,a,e){},"20f0":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-drawer",{attrs:{title:"合同确认",placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:500}},[e("a-card",{attrs:{bordered:!1}},[e("a-form",{attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"产业",labelCol:{span:5},wrapperCol:{span:16}}},[e("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ChanyeCode",{rules:t.AFormImportRules.iptSelect}],expression:"['ChanyeCode',{rules:AFormImportRules.iptSelect }]"}],attrs:{placeholder:"请选择",allowClear:!0}},t._l(t.industry,function(a){return e("a-select-option",{key:a.code},[t._v(t._s(a.name))])}),1)],1),e("a-form-item",{attrs:{label:"地区",labelCol:{span:5},wrapperCol:{span:16}}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cityname",{initialValue:t.city.name,rules:t.AFormImportRules.iptInput}],expression:"['cityname',{initialValue:city.name,rules:AFormImportRules.iptInput}]"}],attrs:{readOnly:"",placeholder:"请输入"},on:{click:t.chooseArea}})],1),e("a-form-item",{attrs:{label:"合同编号",labelCol:{span:5},wrapperCol:{span:16}}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ContractCode",{rules:t.AFormImportRules.iptInput}],expression:"['ContractCode',{rules:AFormImportRules.iptInput}]"}],attrs:{placeholder:"请输入"}})],1),e("a-form-item",{attrs:{label:"是否月结",labelCol:{span:5},wrapperCol:{span:16}}},[e("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["IsProject",{initialValue:"0"},{rules:[{required:!0,message:"请选择"}]}],expression:"['IsProject', {initialValue: '0'}, {rules: [{ required: true, message: '请选择' }]}]"}],on:{change:t.onChange}},[e("a-radio",{attrs:{value:"0"}},[t._v("\n            是\n          ")]),e("a-radio",{attrs:{value:"1"}},[t._v("\n            否\n          ")])],1)],1),"0"==t.IsProject?e("a-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"付款时间",labelCol:{span:5},wrapperCol:{span:16}}},[e("a-form-item",{style:{display:"inline-block",width:"calc(50% - 12px)"}},[e("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["PayDay",{}],expression:"['PayDay',{}]"}],attrs:{placeholder:"请选择",allowClear:!0}},t._l(t.PayDayList,function(a){return e("a-select-option",{key:a.code},[t._v(t._s(a.name))])}),1)],1),e("span",{style:{display:"inline-block",width:"24px",textAlign:"center"}},[t._v("\n          -\n        ")]),e("a-form-item",{style:{display:"inline-block",width:"calc(50% - 12px)"}},[e("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["PayDaySuffix",{}],expression:"['PayDaySuffix',{}]"}],attrs:{placeholder:"请选择",allowClear:!0}},t._l(t.PayDaySuffix,function(a){return e("a-select-option",{key:a.key},[t._v(t._s(a.text))])}),1)],1)],1):t._e(),e("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:16}}},[e("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{}],expression:"['Remarks',{}]"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1),e("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[e("a-button",{on:{click:t.onClose}},[t._v("取消")]),e("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:t.handleSubmit}},[t._v("提交")])],1),e("chooseArea",{attrs:{openDrawer:t.drawer.area.show},on:{Closearea:t.areaClose,Surearea:t.areaSure}})],1)},i=[],o=e("bd86"),r=e("75fc"),n=(e("7f7f"),e("ac6a"),e("b775")),l=e("61f7"),c=e("1269"),d={components:{chooseArea:c["a"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,assetsdetail:{AssetsCode:""}},dim:{Brand:[]},DepList:[],industry:[],options:[],form:this.$form.createForm(this),AFormImportRules:{iptDate:[{required:!0,message:"请选择"}],iptInput:[{required:!0,message:"请输入"}],iptSelect:[{required:!0,message:"请选择"}],Remarks:[{required:!0,message:"备注"}],Mobile:[{required:!0,message:"请输入手机号"},{validator:this.ConfirmMobile}]},drawer:{area:{show:!1}},city:{},PayDayList:[{code:"1",name:"1日"},{code:"2",name:"2日"},{code:"3",name:"3日"},{code:"4",name:"4日"},{code:"5",name:"5日"},{code:"6",name:"6日"},{code:"7",name:"7日"},{code:"8",name:"8日"},{code:"9",name:"9日"},{code:"10",name:"10日"},{code:"11",name:"11日"},{code:"12",name:"12日"},{code:"13",name:"13日"},{code:"14",name:"14日"},{code:"15",name:"15日"},{code:"16",name:"16日"},{code:"17",name:"17日"},{code:"18",name:"18日"},{code:"19",name:"19日"},{code:"20",name:"20日"},{code:"21",name:"21日"},{code:"22",name:"22日"},{code:"23",name:"23日"},{code:"24",name:"24日"},{code:"25",name:"25日"},{code:"26",name:"26日"},{code:"27",name:"27日"},{code:"28",name:"28日"},{code:"29",name:"29日"},{code:"30",name:"30日"},{code:"31",name:"31日"}],PayDaySuffix:[],IsProject:"0"}},watch:{show:function(t,a){var e=this;null==e.visible.assetsdetail&&(e.visible.assetsdetail={AssetsCode:""}),null!=t.assetsdetail.PurchaseDate&&(t.assetsdetail.PurchaseDate=moment(t.assetsdetail.PurchaseDate)),e.visible=t,t.show&&e.init()}},methods:Object(o["a"])({onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields(),this.options=[],this.city={},this.IsProject="0"},init:function(){var t=this;n["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine","PayDaySuffix"]}).then(function(a){0===a.code&&(t.dim.ComProductLine=a.data.ComProductLine,t.PayDaySuffix=a.data.PayDaySuffix)}).catch(function(t){console.log(t)}),n["a"].post("/api/Dim/Enum/GetDim",{Names:["Chanye","Province"]}).then(function(a){0===a.code&&(t.industry=a.data.Chanye,a.data.Province.forEach(function(a,e){var s={};s.value=a.code,s.label=a.name,s.isLeaf=!1,t.options.push(s)}))}).catch(function(t){console.log(t)})},handleSubmit:function(t){var a=this;this.form.validateFields(function(t,e){if(!t){var s=e;if(s.ContractGuid=a.visible.assetsdetail.ContractGuid,s.CityCode=a.city.value,console.log(e),"0"==e.IsProject&&(""==e.PayDay||""==e.PayDaySuffix||void 0==e.PayDay||void 0==e.PayDaySuffix))return void a.$message.error("请输入完整的付款时间！");s.IsProject="0"!=e.IsProject,a.$loading.open(),n["a"].post("/api/Crm/Contract/Archive",s).then(function(t){a.$loading.close();var e=t;e.code>0?a.$message.error(e.msg):(a.onClose(),a.$message.success(e.msg))}).catch(function(t){a.$loading.close(),console.log(t)})}})},ConfirmMobile:function(t,a,e){!a||Object(l["d"])(a)?e():e("手机号码不符合规则！")},loadData:function(t){var a=t[t.length-1],e=this;a.loading=!0,n["a"].post("/api/Dim/Enum/GetCity",{ProvinceCode:a.value}).then(function(t){a.loading=!1,0===t.code&&(t.data.city.length>0?(a.children=[],t.data.city.forEach(function(t,e){var s={};s.value=t.code,s.label=t.name,s.isLeaf=!1,a.children.push(s)}),e.options=Object(r["a"])(e.options)):(a.isLeaf=!0,e.options=Object(r["a"])(e.options)))}).catch(function(t){console.log(t),a.loading=!1})},onChange:function(t){},areaClose:function(t){this.drawer.area={show:!1}},areaSure:function(t){this.city=t,this.drawer.area={show:!1},this.form.setFieldsValue({cityname:t.name})},chooseArea:function(){this.drawer.area={show:!0}}},"onChange",function(t){this.IsProject=t.target.value})},p=d,u=(e("37e5"),e("2877")),m=Object(u["a"])(p,s,i,!1,null,"64f689cc",null);a["default"]=m.exports},"37e5":function(t,a,e){"use strict";var s=e("16d1"),i=e.n(s);i.a},3846:function(t,a,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"6b54":function(t,a,e){"use strict";e("3846");var s=e("cb7c"),i=e("0bfb"),o=e("9e1e"),r="toString",n=/./[r],l=function(t){e("2aba")(RegExp.prototype,r,t,!0)};e("79e5")(function(){return"/a/b"!=n.call({source:"a",flags:"b"})})?l(function(){var t=s(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):n.name!=r&&l(function(){return n.call(this)})}}]);