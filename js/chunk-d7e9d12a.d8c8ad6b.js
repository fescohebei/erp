(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d7e9d12a"],{"0719":function(e,t,a){"use strict";var r=a("6e41"),o=a.n(r);o.a},"3d5c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("a-form",{attrs:{layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.Keyword,callback:function(t){e.$set(e.formSearch,"Keyword",t)},expression:"formSearch.Keyword"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.exportCustomer}},[e._v("余额导出")])],1)],1)],1)],1)]),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"index"},scopedSlots:e._u([{key:"CreatDate",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[""!=r.PullTime?[e._v(e._s(r.PullTime))]:e._e(),""==r.PullTime?[e._v(e._s(r.CreatDate))]:e._e()],2)}},{key:"isOperate",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[a("a-tag",{attrs:{color:1==r.Opened?"red":0==r.Cooperated?"blue":1==r.Cooperated?"green":""}},[1==r.Opened?[e._v("没人跟进")]:e._e(),0==r.Opened?[e._v(e._s(e.Cooperated[r.Cooperated]))]:e._e()],2)],1)}},{key:"CityCode",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.cityList[r.CityCode])+"\n        ")])}},{key:"ProductLine",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n            "+e._s(e.ComProductLine[r.ProductLine])+"\n        ")])}},{key:"UseridText",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n            "+e._s(e.UserArray[r.Userid])+"\n        ")])}},{key:"ServiceUserid",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n            "+e._s(e.UserArray[r.ServiceUserid])+"\n        ")])}},{key:"DepIdText",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n            "+e._s(e.DeptArray[r.DepId])+"\n        ")])}},{key:"difference",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[r["差额"]>0||0==r["差额"]?[a("span",{staticClass:"green"},[e._v(e._s(r["差额"]))])]:e._e(),r["差额"]<0?[a("span",{staticClass:"red"},[e._v(e._s(r["差额"]))])]:e._e()],2)}},{key:"action",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(t){return e.lineDetail(r)}}},[e._v("详情")])])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),a("a-modal",{attrs:{title:"导出服务客户",destroyOnClose:!0,visible:e.showExport,maskClosable:!0},on:{ok:e.handleSubmit,cancel:e.onClose}},[a("a-form",{attrs:{form:e.exportForm},on:{submit:e.handleSubmit}},[a("a-form-item",{attrs:{label:"截止时间",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["EndDate",{rules:e.AFormImportRules.iptInput}],expression:"['EndDate',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"260px"},attrs:{format:"YYYY-MM-DD"},on:{change:e.changeTime}})],1)],1)],1)],1)],1),a("drawer-add-line",{attrs:{show:e.drawer.addline,assetsdetail:{},refresh:e.pagerefresh,refreshChild:e.childLineListRefresh}}),a("drawer-line-modify",{attrs:{show:e.drawer.linemodify,assetsdetail:{},refresh:e.pagerefresh}}),a("drawer-line-detail",{attrs:{show:e.drawer.linedetail,assetsdetail:{},refresh:e.pagerefresh}})],1)},o=[],i=(a("ac6a"),a("c32d")),s=a.n(i),n=a("b775"),l=(a("61f7"),a("e830")),d=a("6e63"),c=a("30de"),u=[{title:"是否合作",scopedSlots:{customRender:"isOperate"}},{title:"公司名称",dataIndex:"ComName",width:240},{title:"城市",scopedSlots:{customRender:"CityCode"}},{title:"产品线",scopedSlots:{customRender:"ProductLine"},width:180},{title:"部门",scopedSlots:{customRender:"DepIdText"}},{title:"销售姓名",scopedSlots:{customRender:"UseridText"}},{title:"客服姓名",scopedSlots:{customRender:"ServiceUserid"}},{title:"到款金额",dataIndex:"到款金额"},{title:"开票金额",dataIndex:"开票金额"},{title:"差额",scopedSlots:{customRender:"difference"}},{title:"操作",scopedSlots:{customRender:"action"}}],m={components:{DrawerLineModify:d["default"],DrawerLineDetail:c["default"],DrawerAddLine:l["default"]},data:function(){return{advanced:!0,columns:u,visible:!1,confirmLoading:!1,formSearch:{Keyword:"",pageSize:10,current:1,total:0,Scene:"财务"},form:this.$form.createForm(this),exportForm:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],dataDetail:[],roles:[],drawer:{linemodify:{show:!1},linedetail:{show:!1},addline:{show:!1}},modal:{exporttransfer:{show:!1}},ThrowReason:[],checkComId:"",checkLineId:"",userid:"",expandedRowKeys:[],department:[],departmentKey:"",childLine:{expanded:"",record:""},ComProductLine:{},Cooperated:{},UserArray:{},DeptArray:{},cityList:{},showExport:!1}},mounted:function(){var e=this;e.init()},methods:{init:function(){var e=this;n["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine","Cooperated"]}).then(function(t){0===t.code&&(t.data.ComProductLine.forEach(function(t,a){e.ComProductLine[t.key]=t.text}),t.data.Cooperated.forEach(function(t,a){e.Cooperated[t.key]=t.text}))}).catch(function(t){e.$loading.close(),console.log(t)}),n["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept","City"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User,e.DeptArray=t.data.Dept,e.cityList=t.data.City)}).catch(function(e){console.log(e)})},pagerefresh:function(){this.pagechange(this.formSearch.current)},initPage:function(){this.pagechange(1)},pagechange:function(e){var t=this;""==t.formSearch.Keyword||t.formSearch.Keyword.length<2?t.$message.error("请输入公司名称（至少2个字及以上）！"):(t.formSearch.current=e,t.$loading.open(),n["a"].post("/api/Crm/ProductLine/ServiceList",t.formSearch).then(function(e){t.$loading.close(),0===e.code?(t.dataSource=e.data.rows,t.formSearch.total=e.count):t.$message.error(e.msg)}).catch(function(e){t.$loading.close(),console.log(e)}))},childLineList:function(e,t){var a=this;a.childLine.expanded=e,a.childLine.record=t,e?(n["a"].post("/api/Crm/Com/Detail",{ComGuid:t.ComGuid}).then(function(e){0===e.code&&(a.dataDetail=e.data)}).catch(function(e){console.log(e)}),this.expandedRowKeys=[],this.expandedRowKeys.push(t.ComGuid)):this.expandedRowKeys=[]},childLineListRefresh:function(){var e=this;e.childLine.expanded?(n["a"].post("/api/Crm/Com/Detail",{ComGuid:e.childLine.record.ComGuid}).then(function(t){0===t.code&&(e.dataDetail=t.data)}).catch(function(e){console.log(e)}),this.expandedRowKeys=[],this.expandedRowKeys.push(e.childLine.record.ComGuid)):this.expandedRowKeys=[]},linemodify:function(e){e.ProductLineText=this.ComProductLine[e.ProductLine],this.drawer.linemodify={show:!0,assetsdetail:e}},lineDetail:function(e){this.drawer.linedetail={show:!0,assetsdetail:e,UserArray:this.UserArray,DeptArray:this.DeptArray,comRankObject:this.ComRankNormal}},exportCustomer:function(){this.showExport=!0},handleSubmit:function(){var e=this;this.exportForm.validateFields(function(t,a){if(!t){var r={};r.EndDate=e.EndDate,r.Scene="财务";var o=document.createElement("a");o.href="/api/Crm/ProductLine/ServiceListExport?EndDate="+r.EndDate+"&Scene="+r.Scene,o.click(),e.onClose()}})},onClose:function(){this.showExport=!1,this.EndDate=""},changeTime:function(e){this.EndDate=s()(e).format("YYYY-MM-DD")}}},p=m,f=(a("0719"),a("2877")),h=Object(f["a"])(p,r,o,!1,null,null,null);t["default"]=h.exports},"6e41":function(e,t,a){},"6e63":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"修改产品线信息",placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:400}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"产品线",labelCol:{span:5},wrapperCol:{span:16}}},[e._v("\n            "+e._s(e.visible.assetsdetail.ProductLineText)+"\n          ")]),a("a-form-item",{attrs:{label:"预算",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Budget",{initialValue:e.visible.assetsdetail.Budget,rules:e.AFormImportRules.iptInput}],expression:"['Budget',{initialValue:visible.assetsdetail.Budget,rules:AFormImportRules.iptInput}]"}]})],1),a("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarkspro",{initialValue:e.visible.assetsdetail.Remarks}],expression:"['Remarkspro',{initialValue:visible.assetsdetail.Remarks}]"}],attrs:{placeholder:"备注",rows:4}})],1)],1),a("div",{style:{position:"absolute",bottom:"0",right:"0",width:"100%",padding:"10px 16px",borderTop:"1px solid #e8e8e8",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:e.onClose}},[e._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)},o=[],i=a("b775"),s=a("61f7"),n={components:{},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,assetsdetail:{company:{},line:{}}},dim:{Brand:[]},DepList:[],form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"},{validator:this.ConfirmNumber}],iptInputReq:[{required:!0,message:"请输入"}],iptSelect:[{required:!1,message:"请选择"}],iptSelectReq:[{required:!0,message:"请选择"}]}}},watch:{show:function(e,t){var a=this;a.visible=e,null==a.visible.assetsdetail&&(a.visible.assetsdetail={ComGuid:""}),e.show&&a.init()}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields()},init:function(){var e=this;i["a"].get("/api/Org/Department/DepsByCurUser").then(function(t){0===t.code&&(e.DepList=t.data)}).catch(function(e){console.log(e)}),i["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine"]}).then(function(t){0===t.code&&(e.dim.ComProductLine=t.data.ComProductLine)}).catch(function(e){console.log(e)})},ConfirmNumber:function(e,t,a){!t||Object(s["c"])(t)?a():a("请输入数字！")},handleSubmit:function(e){var t=this;this.form.validateFields(function(e,a){if(!e){var r={comProductLine:{ComGuid:t.visible.assetsdetail.ComGuid,ComProductLineGuid:t.visible.assetsdetail.ComProductLineGuid,ProductLine:t.visible.assetsdetail.ProductLine,DepId:t.visible.assetsdetail.DepId,Budget:a.Budget,Remarks:a.Remarkspro}};t.$loading.open(),i["a"].post("/api/Crm/ProductLine/Modify",r).then(function(e){t.$loading.close();var a=e;a.code>0?t.$message.error(a.msg):(t.onClose(),t.$message.success(a.msg))}).catch(function(e){t.$loading.close(),console.log(e)})}})}}},l=n,d=a("2877"),c=Object(d["a"])(l,r,o,!1,null,null,null);t["default"]=c.exports},e830:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"新建",placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:600}},[a("div",{style:{overflow:"auto",height:"100%"}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"产品线",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ProductLine",{rules:e.AFormImportRules.iptSelectReq}],expression:"['ProductLine',{rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.ComProductLine,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1),a("a-form-item",{attrs:{label:"预算",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Budget",{rules:e.AFormImportRules.iptInputNumber}],expression:"['Budget',{rules:AFormImportRules.iptInputNumber}]"}]})],1),a("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarkspro"],expression:"['Remarkspro']"}],attrs:{placeholder:"备注",rows:4}})],1),a("a-form-item",{attrs:{label:"联系人姓名",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Linkman",{rules:e.AFormImportRules.iptInputReq}],expression:"['Linkman',{rules:AFormImportRules.iptInputReq}]"}]})],1),a("a-form-item",{attrs:{label:"手机号码",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Mobile",{rules:e.AFormImportRules.Mobile}],expression:"['Mobile',{rules:AFormImportRules.Mobile}]"}]})],1),a("a-form-item",{attrs:{label:"固定电话",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Tel"],expression:"['Tel']"}]})],1),a("a-form-item",{attrs:{label:"邮箱",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Email",{rules:e.AFormImportRules.Email}],expression:"['Email',{rules:AFormImportRules.Email}]"}]})],1),a("a-form-item",{attrs:{label:"所在部门",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Department",{rules:e.AFormImportRules.iptInput}],expression:"['Department',{rules:AFormImportRules.iptInput}]"}]})],1),a("a-form-item",{attrs:{label:"职务",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["JobTitle",{rules:e.AFormImportRules.iptInput}],expression:"['JobTitle',{rules:AFormImportRules.iptInput}]"}]})],1),a("a-form-item",{attrs:{label:"通讯地址",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["personAddress",{rules:e.AFormImportRules.iptInput}],expression:"['personAddress',{rules:AFormImportRules.iptInput}]"}]})],1),a("div",{style:{height:"30px"}})],1),a("div",{style:{position:"absolute",bottom:"0",right:"0",width:"100%",padding:"10px 16px",borderTop:"1px solid #e8e8e8",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:e.onClose}},[e._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.addTeamWork}},[e._v("提交")])],1)],1)])},o=[],i=a("b775"),s=(a("c32d"),a("61f7")),n={props:{show:{type:Object,default:{show:!1}},assetsdetail:{type:Object,default:{company:{},line:{},leads:{}}},refresh:{type:Function,default:null},refreshChild:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},assetsdetail:{company:{},line:{},leads:{}}},ComProductLine:[],defaultData:{Source:"10"},dataSource:[],DepList:[],Source:[],Scale:[],Nature:[],Industry:[],searchCom:{},enableeditguid:"",form:this.$form.createForm(this),AFormImportRules:{iptDate:[{required:!0,message:"请选择"}],iptInput:[{message:"请输入"}],iptInputReq:[{required:!0,message:"请输入"}],iptSelect:[{required:!1,message:"请选择"}],iptSelectReq:[{required:!0,message:"请选择"}],Mobile:[{message:"请输入手机号"},{validator:this.ConfirmMobile}],Email:[{message:"请输入邮箱"},{validator:this.ConfirmEmail}],iptInputNumber:[{required:!0,message:"请输入数字"},{validator:this.ConfirmNumber}]},drawer:{},modal:{}}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{init:function(){var e=this;i["a"].get("/api/Org/Department/DepsByCurUser").then(function(t){0===t.code&&(e.DepList=t.data)}).catch(function(e){console.log(e)}),i["a"].post("/api/Dim/Enum/GetEnum",{Names:["Source","Scale","Nature","Industry","ComProductLine"]}).then(function(t){0===t.code&&(e.Source=t.data.Source,e.Industry=t.data.Industry,e.Scale=t.data.Scale,e.Nature=t.data.Nature,e.ComProductLine=t.data.ComProductLine)}).catch(function(e){console.log(e)})},ConfirmMobile:function(e,t,a){!t||Object(s["d"])(t)?a():a("手机号码不符合规则！")},ConfirmEmail:function(e,t,a){!t||Object(s["b"])(t)?a():a("邮箱不符合规则！")},ConfirmNumber:function(e,t,a){!t||Object(s["c"])(t)?a():a("请输入数字！")},addTeamWork:function(e){var t=this;this.form.validateFields(function(a,r){if(!a){var o={productLine:{ProductLine:r.ProductLine,DepId:r.DepId,ComGuid:t.visible.assetsdetail.company.ComGuid,Budget:r.Budget,Remarks:r.Remarkspro},comContact:{Linkman:r.Linkman,Mobile:r.Mobile,Tel:r.Tel,Email:r.Email,Department:r.Department,JobTitle:r.JobTitle,Address:r.personAddress},LeadsGuid:""};t.$loading.open(),i["a"].post("/api/Crm/ProductLine/Add",o).then(function(a){t.$loading.close();var i=a;i.code>0?t.$message.error(i.msg):("next"===e?(t.form.resetFields(),t.refresh&&t.refresh()):(t.onClose(),t.refreshChild(),t.searchCom={},r={},o={}),t.$message.success(i.msg))}).catch(function(e){t.$loading.close(),console.log(e)})}})},onClose:function(){this.visible.show=!1,this.dataSource=[],this.sourceListRecords=[],this.refresh&&this.refresh(),this.form.resetFields()}}},l=n,d=a("2877"),c=Object(d["a"])(l,r,o,!1,null,null,null);t["default"]=c.exports}}]);