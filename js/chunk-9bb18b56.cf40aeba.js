(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9bb18b56"],{3846:function(e,t,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"6b54":function(e,t,a){"use strict";a("3846");var o=a("cb7c"),i=a("0bfb"),l=a("9e1e"),r="toString",n=/./[r],s=function(e){a("2aba")(RegExp.prototype,r,e,!0)};a("79e5")(function(){return"/a/b"!=n.call({source:"a",flags:"b"})})?s(function(){var e=o(this);return"/".concat(e.source,"/","flags"in e?e.flags:!l&&e instanceof RegExp?i.call(e):void 0)}):n.name!=r&&s(function(){return n.call(this)})},a903:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"新建合同",placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:550}},[a("a-card",{attrs:{bordered:!1}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"客商名称",labelCol:{span:8},wrapperCol:{span:16}}},[e._v("\n        "+e._s(e.visible.assetsdetail.ComName?e.visible.assetsdetail.ComName:e.visible.assetsdetail.company.ComName)+"\n      ")]),a("a-form-item",{attrs:{label:"客商类型",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["客商类型",{initialValue:e.visible.FormComponentValues["客商类型"],rules:e.AFormImportRules.iptSelectReq}],expression:"['客商类型',{initialValue:visible.FormComponentValues['客商类型'],rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.dim.ComType,function(t){return a("a-select-option",{key:t.text},[e._v(e._s(t.text))])}),1)],1),a("a-form-item",{attrs:{label:"产品线",labelCol:{span:8},wrapperCol:{span:16}}},["company"==e.visible.componenttype?a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ComProductLineGuid",{initialValue:e.visible.reapplydetail.ComProductLineGuid,rules:e.AFormImportRules.iptSelectReq}],expression:"['ComProductLineGuid',{initialValue:visible.reapplydetail.ComProductLineGuid,rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.dim.ComProductLine,function(t){return a("a-select-option",{key:t.ComProductLineGuid},[e._v(e._s(t.ProductLineText))])}),1):e._e(),"line"==e.visible.componenttype?[e._v("\n          "+e._s(e.visible.assetsdetail.line.ProductLineText)+"\n          "),a("a-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"},{name:"decorator",rawName:"v-decorator",value:["ComProductLineGuid",{initialValue:e.visible.assetsdetail.line.ComProductLineGuid}],expression:"['ComProductLineGuid',{initialValue:visible.assetsdetail.line.ComProductLineGuid}]"}]})]:e._e()],2),a("a-form-item",{attrs:{label:"其他产品线",labelCol:{span:8},wrapperCol:{span:16}}},["company"==e.visible.componenttype||"line"==e.visible.componenttype?a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["LinkComProductLineGuids",{initialValue:e.visible.FormComponentValues.LinkComProductLineGuids,rules:e.AFormImportRules.iptSelect}],expression:"['LinkComProductLineGuids',{initialValue:visible.FormComponentValues.LinkComProductLineGuids,rules:AFormImportRules.iptSelect }]"}],attrs:{mode:"multiple",placeholder:"请选择",allowClear:!0}},e._l(e.dim.ComProductLine,function(t){return a("a-select-option",{key:t.ComProductLineGuid},[e._v(e._s(t.ProductLineText))])}),1):e._e()],1),a("a-form-item",{attrs:{label:"客户评级",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["Rank",{rules:e.AFormImportRules.iptSelectReq}],expression:"['Rank',{rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.dim.ComRankNormal,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1),a("a-form-item",{attrs:{label:"开始日期",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["开始日期",{initialValue:e.visible.FormComponentValues["开始日期"],rules:e.AFormImportRules.iptInputReq}],expression:"['开始日期',{initialValue:visible.FormComponentValues['开始日期'],rules:AFormImportRules.iptInputReq}]"}],attrs:{valueFormat:"string",format:"YYYY-MM-DD"}})],1),a("a-form-item",{attrs:{label:"终止日期",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["终止日期",{initialValue:e.visible.FormComponentValues["终止日期"],rules:e.AFormImportRules.iptInputReq}],expression:"['终止日期',{initialValue:visible.FormComponentValues['终止日期'],rules:AFormImportRules.iptInputReq}]"}],attrs:{valueFormat:"string",format:"YYYY-MM-DD"}})],1),a("a-form-item",{attrs:{label:"是否延期",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["是否延期",{initialValue:e.visible.FormComponentValues["是否延期"],rules:e.AFormImportRules.iptSelectReq}],expression:"['是否延期',{initialValue:visible.FormComponentValues['是否延期'],rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},[a("a-select-option",{key:"是"},[e._v("是")]),a("a-select-option",{key:"否"},[e._v("否")])],1)],1),a("a-form-item",{attrs:{label:"服务内容",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["服务内容",{initialValue:e.visible.FormComponentValues["服务内容"],rules:e.AFormImportRules.iptInputReq}],expression:"['服务内容',{initialValue:visible.FormComponentValues['服务内容'],rules:AFormImportRules.iptInputReq}]"}],attrs:{placeholder:"请输入",rows:4}})],1),a("a-form-item",{attrs:{label:"本人所在部门",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["DepId",{rules:e.AFormImportRules.iptInputReq}],expression:"['DepId',{rules:AFormImportRules.iptInputReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.selfDepList,function(t){return a("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1)],1),a("a-form-item",{attrs:{label:"服务部门",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["服务部门",{rules:e.AFormImportRules.iptInputReq}],expression:"['服务部门',{rules:AFormImportRules.iptInputReq}]"}],attrs:{options:e.serviceOptions,loadData:e.serviceloadData,changeOnSelect:"",placeholder:"请选择服务部门"},on:{change:e.serviceOnChange}})],1),a("a-form-item",{attrs:{label:"申请类型",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["申请类型",{initialValue:e.visible.FormComponentValues["申请类型"],rules:e.AFormImportRules.iptSelectReq}],expression:"['申请类型',{initialValue:visible.FormComponentValues['申请类型'],rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.dim.SignType,function(t){return a("a-select-option",{key:t.text},[e._v(e._s(t.text))])}),1)],1),a("a-form-item",{attrs:{label:"合同内容",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["合同内容",{initialValue:e.visible.FormComponentValues["合同内容"],rules:e.AFormImportRules.iptSelectReq}],expression:"['合同内容',{initialValue:visible.FormComponentValues['合同内容'],rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.dim.ContractContent,function(t){return a("a-select-option",{key:t.text},[e._v(e._s(t.text))])}),1)],1),e._l(e.subjects,function(t,o){return[a("div",{key:o},[a("a-row",{attrs:{gutter:15,type:"flex",justify:"space-around",align:"middle"}},[a("a-col",{attrs:{span:21}},[a("a-divider",{staticStyle:{"font-size":"12px"},attrs:{dashed:"",orientation:"left"}},[e._v("标准合同修改内容("+e._s(o+1)+")")])],1),a("a-col",{attrs:{span:3}},[e.subjects.length>1?a("div",{staticClass:"dynamic-delete-button",staticStyle:{color:"#1890ff",cursor:"pointer","text-align":"right"},attrs:{disabled:1===e.subjects.length},on:{click:function(){return e.remove(t.key)}}},[e._v("删除")]):e._e()])],1),a("a-form-item",{attrs:{label:"原合同内容",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-textarea",{attrs:{placeholder:"请输入",rows:4},model:{value:t.old,callback:function(a){e.$set(t,"old",a)},expression:"item.old"}})],1),a("a-form-item",{attrs:{label:"修改后合同内容",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-textarea",{attrs:{placeholder:"请输入",rows:4},model:{value:t.new,callback:function(a){e.$set(t,"new",a)},expression:"item.new"}})],1)],1)]}),a("a-form-item",{attrs:{label:"",labelCol:{span:0},wrapperCol:{span:16,offset:8}}},[a("a-button",{staticStyle:{width:"100%"},attrs:{type:"dashed"},on:{click:e.add}},[a("a-icon",{attrs:{type:"plus"}}),e._v("增加明细\n        ")],1)],1),a("a-form-item",{attrs:{label:"垫付",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["垫付",{initialValue:e.visible.FormComponentValues["垫付"],rules:e.AFormImportRules.iptSelectReq}],expression:"['垫付',{initialValue:visible.FormComponentValues['垫付'],rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},[a("a-select-option",{key:"是"},[e._v("是")]),a("a-select-option",{key:"否"},[e._v("否")])],1)],1),a("a-form-item",{attrs:{label:"垫付金额",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["垫付金额",{initialValue:e.visible.FormComponentValues["垫付金额"],rules:e.AFormImportRules.iptInputNumber}],expression:"['垫付金额',{initialValue:visible.FormComponentValues['垫付金额'],rules:AFormImportRules.iptInputNumber}]"}]})],1),a("a-form-item",{attrs:{label:"垫付周期",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["垫付周期",{initialValue:e.visible.FormComponentValues["垫付周期"],rules:e.AFormImportRules.iptInput}],expression:"['垫付周期',{initialValue:visible.FormComponentValues['垫付周期'],rules:AFormImportRules.iptInput}]"}]})],1),a("a-form-item",{attrs:{label:"月服务费",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["月服务费",{initialValue:e.visible.FormComponentValues["月服务费"],rules:e.AFormImportRules.iptInputNumber}],expression:"['月服务费',{initialValue:visible.FormComponentValues['月服务费'],rules:AFormImportRules.iptInputNumber}]"}]})],1),a("a-form-item",{attrs:{label:"垫付说明",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["垫付说明",{initialValue:e.visible.FormComponentValues["垫付说明"],rules:e.AFormImportRules.iptInput}],expression:"['垫付说明',{initialValue:visible.FormComponentValues['垫付说明'],rules:AFormImportRules.iptInput}]"}],attrs:{placeholder:"请输入",rows:4}})],1),a("a-form-item",{attrs:{label:"绑定销线",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["LeadsGuid",{initialValue:e.visible.reapplydetail.LeadsGuid,rules:e.AFormImportRules.iptSelect}],expression:"['LeadsGuid',{initialValue:visible.reapplydetail.LeadsGuid,rules:AFormImportRules.iptSelect }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.productLineList,function(t){return a("a-select-option",{key:t.LeadsGuid},[e._v(e._s(t.ComName)+"-"+e._s(e.ProductLine[t.ProductLine])+"-"+e._s(e.visible.user[t.Userid]))])}),1)],1),a("a-form-item",{attrs:{label:"信息费比例",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["信息费比例",{initialValue:e.visible.FormComponentValues["信息费比例"],rules:e.AFormImportRules.iptInputNumber}],expression:"['信息费比例',{initialValue:visible.FormComponentValues['信息费比例'],rules:AFormImportRules.iptInputNumber}]"}]})],1),a("a-form-item",{attrs:{label:"签单支持部门",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["签单支持部门",{rules:e.AFormImportRules.iptInput}],expression:"['签单支持部门',{rules:AFormImportRules.iptInput}]"}],attrs:{options:e.options,loadData:e.loadData,changeOnSelect:"",placeholder:"请选择分配部门"},on:{change:e.onChange}})],1),a("a-form-item",{attrs:{label:"签单支持员工",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["签单支持员工"],expression:"['签单支持员工']"}],attrs:{allowClear:!0}},e._l(e.DepList,function(t){return a("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1)],1),a("a-form-item",{attrs:{label:"附件",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-button",{attrs:{disabled:1==e.notInDingTalk&&"disabled"},on:{click:e.uploadFile}},[a("a-icon",{attrs:{type:"upload"}}),e._v(" 上传附件")],1),1==e.notInDingTalk?a("div",[a("a-tag",{attrs:{color:"red"}},[e._v("此浏览器不支持上传，请到钉钉应用界面上传附件！")]),a("a-tag",{attrs:{color:"red"}},[e._v("如果是重新发起合同，请到钉钉上处理原上传附件！")])],1):e._e(),0==e.notInDingTalk?e._l(e.uploadArry,function(t){return a("div",{key:t.fileId},[a("a-icon",{attrs:{type:"file-text"}}),e._v(" "+e._s(t.fileName)+" "),a("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"delete"},on:{click:function(a){return e.deleteFile(t.fileId)}}}),e._v("  "),a("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"file-search"},on:{click:function(a){return e.preview(t)}}})],1)}):e._e(),1==e.notInDingTalk&&e.visible.FormComponentValues["附件"]?e._l(e.uploadArry,function(t){return a("div",{key:t.fileId},[a("a-icon",{attrs:{type:"file-text"}}),e._v(" "+e._s(t.fileName)+" ")],1)}):e._e()],2)],2)],1),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px","z-index":9}},[a("a-button",{on:{click:e.onClose}},[e._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(t){return e.handleSubmit("approval")}}},[e._v("提交")])],1)],1)},i=[],l=(a("6b54"),a("75fc")),r=(a("7f7f"),a("ac6a"),a("b775")),n=a("61f7"),s={props:{show:{type:Object,default:function(){}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,assetsdetail:{ComName:"",company:{ComName:""}},componenttype:"",reapplydetail:{},FormComponentValues:{},user:{}},dim:{ComType:[],SignType:[],ContractContent:[],ComProductLine:[],ComRankNormal:[]},ComProductLine:[],DepList:[],linkmanList:[],serviceOptions:[],options:[],SaleUserid:"",subjects:[{key:0,old:"",new:""}],SpaceId:"",uploadArry:[],productLineList:[],notInDingTalk:!1,form:this.$form.createForm(this),AFormImportRules:{iptDate:[{required:!0,message:"请选择"}],iptInputReq:[{required:!0,message:"请输入"}],iptInput:[{required:!1,message:"请输入"}],iptSelect:[{required:!1,message:"请选择"}],iptSelectReq:[{required:!0,message:"请选择"}],Mobile:[{required:!0,message:"请输入手机号"},{validator:this.ConfirmMobile}],iptInputNumber:[{required:!1,message:"请输入数字"},{validator:this.ConfirmNumber}]},fescoMessage:{},comRankObject:{},selfDepList:[],ProductLine:{}}},watch:{show:function(e,t){var a=this;a.visible=e,e.show&&a.init()}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields(),this.subjects=[{"原合同内容":"","修改后合同内容":""}],this.serviceOptions=[],this.options=[],this.uploadArry=[]},init:function(){var e=this,t="";console.log(e.visible.assetsdetail),t="line"==e.visible.componenttype?e.visible.assetsdetail.company.ComGuid:e.visible.assetsdetail.ComGuid,e.visible.FormComponentValues["标准合同修改内容"]&&(e.subjects=[],e.visible.FormComponentValues["标准合同修改内容"].forEach(function(t,a){var o={key:a,old:t["原合同内容"],new:t["修改后合同内容"]};e.subjects.push(o)})),e.visible.FormComponentValues["附件"]&&(e.uploadArry=e.visible.FormComponentValues["附件"]),r["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComType","SignType","ContractContent","ComRankNormal","ComProductLine"]}).then(function(t){0===t.code&&(e.dim.ComType=t.data.ComType,e.dim.SignType=t.data.SignType,e.dim.ContractContent=t.data.ContractContent,e.dim.ComRankNormal=t.data.ComRankNormal,t.data.ComRankNormal.forEach(function(t,a){e.comRankObject[t.key]=t.text}),t.data.ComProductLine.forEach(function(t,a){e.ProductLine[t.key]=t.text}))}).catch(function(e){console.log(e)}),r["a"].post("/api/Crm/ProductLine/ListByCom",{ComGuid:t,Scene:"我的",pageSize:50,current:1,total:0}).then(function(t){0===t.code&&(e.dim.ComProductLine=t.data.rows)}).catch(function(e){console.log(e)}),r["a"].get("/api/DingTalk/CspaceInfo").then(function(t){var a=t,o=a.data.SpaceId;0===a.code&&(e.SpaceId=o)}).catch(function(e){console.log(e)}),r["a"].post("/api/DingTalk/GetSign",{}).then(function(t){e.fescoMessage=t.data,dd.config({agentId:t.data.AgentId,corpId:t.data.corpId,timeStamp:t.data.timeStamp,nonceStr:t.data.nonceStr,signature:t.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(e){console.log(e)}),r["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:"1"}).then(function(t){0===t.code&&t.data.forEach(function(t,a){var o={};o.value=t.code,o.label=t.name,o.isLeaf=!1,e.options.push(o),e.serviceOptions.push(o)})}).catch(function(e){console.log(e)}),"notInDingTalk"==dd.env.platform&&(e.notInDingTalk=!0),e.comLeads(),r["a"].get("/api/Org/Department/DepsByCurUser").then(function(t){0===t.code&&(e.selfDepList=t.data)}).catch(function(e){console.log(e)})},comLeads:function(){var e=this,t="";t="line"==e.visible.componenttype?e.visible.assetsdetail.company.ComGuid:e.visible.assetsdetail.ComGuid,r["a"].post("/api/Leads/Com/LeadsByCom",{ComGuid:t}).then(function(t){0===t.code&&(e.productLineList=t.data.leads)}).catch(function(e){console.log(e)})},handleSubmit:function(e){var t=this,a=this;this.form.validateFields(function(o,i){if(console.log(i),!o){i["客商类型"];var l=[];i.IsApproval="approval"===e,i["服务部门"].length>0&&(i["服务部门"]=i["服务部门"][i["服务部门"].length-1]),void 0!=i["签单支持部门"]&&i["签单支持部门"].length>0&&(i["签单支持部门"]=i["签单支持部门"][i["签单支持部门"].length-1]),i["开始日期"]=i["开始日期"].format("YYYY-MM-DD"),i["终止日期"]=i["终止日期"].format("YYYY-MM-DD"),void 0!=i.LinkComProductLineGuids&&i.LinkComProductLineGuids.length>0&&i.LinkComProductLineGuids.forEach(function(e,t){e==i.ComProductLineGuid&&i.LinkComProductLineGuids.splice(t,1)});var n={ComProductLineGuid:i.ComProductLineGuid,DepId:i.DepId,IsApproval:i.IsApproval,LeadsGuid:i.LeadsGuid,LinkComProductLineGuids:i.LinkComProductLineGuids,contract:{"客商类型":i["客商类型"],"客户评级":a.comRankObject[i.Rank],"开始日期":i["开始日期"],"终止日期":i["终止日期"],"是否延期":i["是否延期"],"服务内容":i["服务内容"],"服务部门":i["服务部门"],"申请类型":i["申请类型"],"合同内容":i["合同内容"],"垫付":i["垫付"],"垫付金额":i["垫付金额"],"垫付周期":i["垫付周期"],"月服务费":i["月服务费"],"垫付说明":i["垫付说明"],"信息费比例":i["信息费比例"],"签单支持部门":i["签单支持部门"],"签单支持员工":i["签单支持员工"],"附件":a.uploadArry}};t.subjects.length>0&&t.subjects.forEach(function(e,t){l.push({"原合同内容":e.old,"修改后合同内容":e.new})}),n["contract"]["标准合同修改内容"]=l,a.$loading.open(),r["a"].post("/api/Crm/Contract/Add",n).then(function(e){a.$loading.close();var t=e;t.code>0?a.$message.error(t.msg):(a.onClose(),a.uploadArry=[],a.$message.success(t.msg))}).catch(function(e){a.$loading.close(),console.log(e)})}})},serviceloadData:function(e){var t=e[e.length-1],a=this;t.loading=!0,r["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:t.value}).then(function(e){t.loading=!1,0===e.code&&(e.data.length>0?(t.children=[],e.data.forEach(function(e,a){var o={};o.value=e.code,o.label=e.name,o.isLeaf=!1,t.children.push(o)}),a.serviceOptions=Object(l["a"])(a.serviceOptions)):(t.isLeaf=!0,t.loading=!1))}).catch(function(e){console.log(e),t.loading=!1})},serviceOnChange:function(e){},loadData:function(e){var t=e[e.length-1],a=this;t.loading=!0,r["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:t.value}).then(function(e){t.loading=!1,0===e.code&&(e.data.length>0?(t.children=[],e.data.forEach(function(e,a){var o={};o.value=e.code,o.label=e.name,o.isLeaf=!1,t.children.push(o)}),a.options=Object(l["a"])(a.options)):(t.isLeaf=!0,t.loading=!1))}).catch(function(e){console.log(e),t.loading=!1})},onChange:function(e){this.DepList=[],this.SaleUserid="",this.userbydepid(e[e.length-1])},userbydepid:function(e){var t=this;r["a"].post("/api/Org/User/UsersByDepId",{DepId:e}).then(function(e){var a=e;0===a.code&&(t.DepList=a.data)}).catch(function(e){console.log(e)})},add:function(){var e=0;this.subjects.forEach(function(t,a){e=t.key>e?t.key:e}),this.subjects.push({key:e+1,old:"",new:""})},remove:function(e){this.subjects=this.subjects.filter(function(t){return t.key!=e});this.form.getFieldValue("keys")},ConfirmNumber:function(e,t,a){!t||Object(n["c"])(t)?a():a("请输入数字！")},uploadFile:function(){var e=this;dd.ready(function(){dd.biz.util.uploadAttachment({image:{multiple:!0,compress:!1,max:9,spaceId:e.SpaceId.toString()},space:{corpId:e.fescoMessage.corpId,spaceId:e.SpaceId.toString(),max:9},file:{spaceId:e.SpaceId.toString(),max:9},types:["file"],onSuccess:function(t){e.uploadArry=e.uploadArry.concat(t.data)},onFail:function(e){}})})},deleteFile:function(e){var t=this;this.uploadArry.forEach(function(a,o){a.fileId===e&&t.uploadArry.splice(o,1)})},preview:function(e){var t=this;dd.ready(function(){dd.biz.cspace.preview({corpId:t.fescoMessage.corpId,spaceId:t.SpaceId.toString(),fileId:e.fileId,fileName:e.fileName,fileSize:e.fileSize,fileType:e.fileType,onSuccess:function(){},onFail:function(e){}})})}}},p=s,c=a("2877"),u=Object(c["a"])(p,o,i,!1,null,null,null);t["default"]=u.exports}}]);