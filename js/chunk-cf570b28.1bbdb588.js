(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf570b28","chunk-2d0f101e"],{"3c60":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"分配部门",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["SaleDepId",{rules:e.AFormImportRules.iptSelectReq}],expression:"['SaleDepId',{rules:AFormImportRules.iptSelectReq}]"}],attrs:{options:e.options,loadData:e.loadData,changeOnSelect:"",placeholder:"请选择分配部门"},on:{change:e.onChange}})],1),a("a-form-item",{attrs:{label:"分配人",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{model:{value:e.SaleUserid,callback:function(t){e.SaleUserid=t},expression:"SaleUserid"}},e._l(e.DepList,function(t){return a("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1)],1)],1),a("div",{style:{width:"100%",padding:"10px 16px",textAlign:"right",background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:e.onClose}},[e._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)},s=[],o=a("75fc"),i=(a("7f7f"),a("ac6a"),a("b775")),l=(a("61f7"),a("a314")),n={components:{searchform:l["default"]},props:{assetsdetail:{type:Object,default:""}},data:function(){return{visible:{},DepList:[],dataSource:[],form:this.$form.createForm(this),AFormImportRules:{iptDate:[{required:!0,message:"请选择"}],iptInput:[{message:"请输入"}],iptInputReq:[{required:!0,message:"请输入"}],iptSelect:[{required:!1,message:"请选择"}],iptSelectReq:[{required:!0,message:"请选择"}],Mobile:[{required:!0,message:"请输入手机号"},{validator:this.ConfirmMobile}]},options:[],selectedOptionsCell:[],SaleUserid:""}},watch:{},created:function(){this.init()},methods:{onClose:function(){this.$emit("onClose"),this.form.resetFields(),this.options=[]},init:function(){var e=this;e.getDep()},getDep:function(){var e=this;i["a"].get("/api/Org/Department/DepsByCurUser").then(function(t){0===t.code&&t.data.forEach(function(t,a){var r={};r.value=t.code,r.label=t.name,r.isLeaf=!1,e.options.push(r)})}).catch(function(e){console.log(e)})},handleSubmit:function(e){var t=this,a=this;this.form.validateFields(function(r,s){if(!r){var o={};o.LeadsGuid=a.assetsdetail.LeadsGuid,o.SaleDepId=s.SaleDepId[s.SaleDepId.length-1],o.SaleUserid=a.SaleUserid,a.$loading.open(),i["a"].post("/api/Leads/Com/Assign",o).then(function(t){a.$loading.close();var r=t;r.code>0?a.$message.error(r.msg):("next"===e?(a.form.resetFields(),a.refresh&&a.refresh()):a.onClose(),a.$message.success(r.msg))}).catch(function(e){a.$loading.close(),console.log(e)}),t.options=[]}})},loadData:function(e){var t=e[e.length-1],a=this;t.loading=!0,i["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:t.value}).then(function(e){t.loading=!1,0===e.code&&(e.data.length>0?(t.children=[],e.data.forEach(function(e,a){var r={};r.value=e.code,r.label=e.name,r.isLeaf=!1,t.children.push(r)}),a.options=Object(o["a"])(a.options)):(t.isLeaf=!0,t.loading=!1,a.options=Object(o["a"])(a.options)))}).catch(function(e){console.log(e),t.loading=!1})},onChange:function(e){this.DepList=[],this.SaleUserid="",this.userbydepid(e[e.length-1])},userbydepid:function(e){var t=this;i["a"].post("/api/Org/User/UsersByDepId",{DepId:e}).then(function(e){var a=e;0===a.code&&(t.DepList=a.data)}).catch(function(e){console.log(e)})}}},c=n,u=a("2877"),d=Object(u["a"])(c,r,s,!1,null,null,null);t["default"]=d.exports},"9f94":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:{overflow:"auto",height:"100%"}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"销线id",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["LeadsGuid",{initialValue:e.assetsdetail.LeadsGuid}],expression:"['LeadsGuid',{initialValue:assetsdetail.LeadsGuid}]"}]})],1),a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input-search",{directives:[{name:"decorator",rawName:"v-decorator",value:["ComName",{initialValue:e.assetsdetail.ComName,rules:e.AFormImportRules.iptInputReq}],expression:"['ComName',{initialValue:assetsdetail.ComName,rules:AFormImportRules.iptInputReq}]"}],attrs:{placeholder:"请输入公司名称",enterButton:"搜索"},on:{search:e.onSearch,change:e.onChange}})],1),a("span",{directives:[{name:"show",rawName:"v-show",value:e.searchNext,expression:"searchNext"}]},[a("a-form-item",{attrs:{label:"组织机构代码证",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Code",{initialValue:e.searchCom.Code,rules:e.AFormImportRules.iptInput}],expression:"['Code',{initialValue:searchCom.Code,rules:AFormImportRules.iptInput}]"}],attrs:{disabled:e.haveCom}})],1),a("a-form-item",{attrs:{label:"网址",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Url",{initialValue:e.searchCom.Url,rules:e.AFormImportRules.iptInput}],expression:"['Url',{initialValue:searchCom.Url,rules:AFormImportRules.iptInput}]"}],attrs:{disabled:e.haveCom}})],1),0==e.haveCom?[a("a-form-item",{attrs:{label:"城市",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cityname",{rules:e.AFormImportRules.iptInputReq}],expression:"['cityname',{rules:AFormImportRules.iptInputReq}]"}],attrs:{readOnly:"",placeholder:"请输入"},on:{click:e.chooseArea}})],1),a("a-form-item",{attrs:{label:"地址",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Address",{initialValue:e.searchCom.Address,rules:e.AFormImportRules.iptInputReq}],expression:"['Address',{initialValue:searchCom.Address,rules:AFormImportRules.iptInputReq}]"}],attrs:{disabled:e.haveCom}})],1),a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"客户来源",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{attrs:{disabled:!0}},e._l(e.Source,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1),a("a-form-item",{attrs:{label:"客户性质",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["Nature",{initialValue:e.searchCom.Nature,rules:e.AFormImportRules.iptSelectReq}],expression:"['Nature',{initialValue:searchCom.Nature,rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0,disabled:e.haveCom}},e._l(e.Nature,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1),a("a-form-item",{attrs:{label:"客户规模",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["Scale",{initialValue:e.searchCom.Scale,rules:e.AFormImportRules.iptSelectReq}],expression:"['Scale',{initialValue:searchCom.Scale,rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0,disabled:e.haveCom}},e._l(e.Scale,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1),a("a-form-item",{attrs:{label:"行业",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["Industry",{initialValue:e.searchCom.Industry,rules:e.AFormImportRules.iptSelectReq}],expression:"['Industry',{initialValue:searchCom.Industry,rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0,disabled:e.haveCom}},e._l(e.Industry,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)]:e._e(),1==e.haveCom?[a("a-form-item",{attrs:{label:"城市",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cityname",{initialValue:e.cityList[e.searchCom.CityCode],rules:e.AFormImportRules.iptInput}],expression:"['cityname',{initialValue:cityList[searchCom.CityCode],rules:AFormImportRules.iptInput}]"}],attrs:{readOnly:"",placeholder:"请输入",disabled:e.haveCom},on:{click:e.chooseArea}})],1),a("a-form-item",{attrs:{label:"地址",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Address",{initialValue:e.searchCom.Address,rules:e.AFormImportRules.iptInput}],expression:"['Address',{initialValue:searchCom.Address,rules:AFormImportRules.iptInput}]"}],attrs:{disabled:e.haveCom}})],1),a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"客户来源",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{attrs:{disabled:!0}},e._l(e.Source,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1),a("a-form-item",{attrs:{label:"客户性质",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["Nature",{initialValue:e.searchCom.Nature,rules:e.AFormImportRules.iptSelect}],expression:"['Nature',{initialValue:searchCom.Nature,rules:AFormImportRules.iptSelect }]"}],attrs:{placeholder:"请选择",allowClear:!0,disabled:e.haveCom}},e._l(e.Nature,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1),a("a-form-item",{attrs:{label:"客户规模",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["Scale",{initialValue:e.searchCom.Scale,rules:e.AFormImportRules.iptSelect}],expression:"['Scale',{initialValue:searchCom.Scale,rules:AFormImportRules.iptSelect }]"}],attrs:{placeholder:"请选择",allowClear:!0,disabled:e.haveCom}},e._l(e.Scale,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1),a("a-form-item",{attrs:{label:"行业",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["Industry",{initialValue:e.searchCom.Industry,rules:e.AFormImportRules.iptSelect}],expression:"['Industry',{initialValue:searchCom.Industry,rules:AFormImportRules.iptSelect }]"}],attrs:{placeholder:"请选择",allowClear:!0,disabled:e.haveCom}},e._l(e.Industry,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)]:e._e(),a("a-form-item",{attrs:{label:"产品线",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ProductLine",{initialValue:e.assetsdetail.ProductLine,rules:e.AFormImportRules.iptSelectReq}],expression:"['ProductLine',{initialValue:assetsdetail.ProductLine,rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.dim.ComProductLine,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1),a("a-form-item",{attrs:{label:"预算",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Budget",{rules:e.AFormImportRules.iptInputNumber}],expression:"['Budget',{rules:AFormImportRules.iptInputNumber}]"}]})],1),a("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarkspro"],expression:"['Remarkspro']"}],attrs:{placeholder:"备注",rows:4}})],1),a("a-form-item",{attrs:{label:"联系人姓名",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Linkman",{initialValue:e.assetsdetail.Linkman,rules:e.AFormImportRules.iptInputReq}],expression:"['Linkman',{initialValue:assetsdetail.Linkman,rules:AFormImportRules.iptInputReq}]"}]})],1),a("a-form-item",{attrs:{label:"手机号码",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Mobile",{initialValue:e.validtel(e.assetsdetail.LinkTel)?e.assetsdetail.LinkTel:"",rules:e.AFormImportRules.Mobile}],expression:"['Mobile',{initialValue:(validtel(assetsdetail.LinkTel) ? assetsdetail.LinkTel : ''),rules:AFormImportRules.Mobile}]"}]})],1),a("a-form-item",{attrs:{label:"固定电话",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Tel",{initialValue:e.validtel(e.assetsdetail.LinkTel)?"":e.assetsdetail.LinkTel}],expression:"['Tel',{initialValue:(validtel(assetsdetail.LinkTel) ? '' : assetsdetail.LinkTel)}]"}]})],1),a("a-form-item",{attrs:{label:"邮箱",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Email",{rules:e.AFormImportRules.Email}],expression:"['Email',{rules:AFormImportRules.Email}]"}]})],1),a("a-form-item",{attrs:{label:"所在部门",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Department",{rules:e.AFormImportRules.iptInput}],expression:"['Department',{rules:AFormImportRules.iptInput}]"}]})],1),a("a-form-item",{attrs:{label:"职务",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["JobTitle",{rules:e.AFormImportRules.iptInput}],expression:"['JobTitle',{rules:AFormImportRules.iptInput}]"}]})],1),a("a-form-item",{attrs:{label:"通讯地址",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["personAddress",{rules:e.AFormImportRules.iptInput}],expression:"['personAddress',{rules:AFormImportRules.iptInput}]"}]})],1),1==e.fixed?a("div",{style:{height:"30px"}}):e._e()],2)],1),1==e.fixed?a("div",{style:{position:"absolute",bottom:"0",right:"0",width:"100%",padding:"10px 16px",borderTop:"1px solid #e8e8e8",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:e.onClose}},[e._v("取消")]),0==e.haveCom?a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit",disabled:!e.searchNext},on:{click:e.handleSubmit}},[e._v("提交")]):e._e(),1==e.haveCom?a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.addTeamWork}},[e._v("加入协同")]):e._e()],1):e._e(),0==e.fixed?a("div",{style:{width:"100%",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:e.onClose}},[e._v("取消")]),0==e.haveCom?a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit",disabled:!e.searchNext},on:{click:e.handleSubmit}},[e._v("提交")]):e._e(),1==e.haveCom?a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.addTeamWork}},[e._v("加入协同")]):e._e()],1):e._e(),a("chooseArea",{attrs:{openDrawer:e.drawer.area.show},on:{Closearea:e.areaClose,Surearea:e.areaSure}})],1)},s=[],o=(a("7f7f"),a("b775")),i=(a("c32d"),a("61f7")),l=a("1269"),n={name:"addcustomer",components:{chooseArea:l["a"]},props:{assetsdetail:{type:Object,default:""},fixed:{type:Boolean,default:!1}},data:function(){return{visible:{show:!1,id:{}},dim:{},defaultData:{Source:"10"},dataSource:[],DepList:[],Source:[],Scale:[],Nature:[],Industry:[],searchCom:{},enableeditguid:"",form:this.$form.createForm(this),AFormImportRules:{iptDate:[{required:!0,message:"请选择"}],iptInput:[{message:"请输入"}],iptInputReq:[{required:!0,message:"请输入"}],iptSelect:[{required:!1,message:"请选择"}],iptSelectReq:[{required:!0,message:"请选择"}],Mobile:[{message:"请输入手机号"},{validator:this.ConfirmMobile}],Email:[{message:"请输入邮箱"},{validator:this.ConfirmEmail}],iptInputNumber:[{required:!0,message:"请输入数字"},{validator:this.ConfirmNumber}]},drawer:{area:{show:!1}},modal:{},haveCom:!1,searchNext:!1,cityList:{}}},created:function(){this.init()},methods:{init:function(){var e=this;o["a"].post("/api/Dim/Enum/DimDecode",{Names:["City"]}).then(function(t){e.$loading.close(),0===t.code&&(e.cityList=t.data.City)}).catch(function(t){e.$loading.close(),console.log(t)}),o["a"].get("/api/Org/Department/DepsByCurUser").then(function(t){0===t.code&&(e.DepList=t.data)}).catch(function(e){console.log(e)}),o["a"].post("/api/Dim/Enum/GetEnum",{Names:["Source","Scale","Nature","Industry","ComProductLine"]}).then(function(t){0===t.code&&(e.Source=t.data.Source,e.Industry=t.data.Industry,e.Scale=t.data.Scale,e.Nature=t.data.Nature,e.dim.ComProductLine=t.data.ComProductLine)}).catch(function(e){console.log(e)})},handleSubmit:function(e){var t=this;this.form.validateFields(function(a,r){if(!a){var s={company:{ComName:r.ComName,Code:r.Code,Url:r.Url,Address:r.Address,Source:"10",Nature:r.Nature,Scale:r.Scale,Industry:r.Industry,CityCode:t.city.value},comProductLine:{ProductLine:r.ProductLine,DepId:r.DepId,Budget:r.Budget,Remarks:r.Remarkspro},comContact:{Linkman:r.Linkman,Mobile:r.Mobile,Tel:r.Tel,Email:r.Email,Department:r.Department,JobTitle:r.JobTitle,Address:r.personAddress},LeadsGuid:r.LeadsGuid};t.$loading.open(),o["a"].post("/api/Crm/Customer/Add",s).then(function(a){t.$loading.close();var r=a;r.code>0?t.$message.error(r.msg):("next"===e?(t.form.resetFields(),t.refresh&&t.refresh()):t.$emit("onClose"),t.$message.success(r.msg))}).catch(function(e){t.$loading.close(),console.log(e)})}})},ConfirmMobile:function(e,t,a){!t||Object(i["d"])(t)?a():a("手机号码不符合规则！")},ConfirmEmail:function(e,t,a){!t||Object(i["b"])(t)?a():a("邮箱不符合规则！")},ConfirmNumber:function(e,t,a){!t||Object(i["c"])(t)?a():a("请输入数字！")},onBlur:function(e){console.log(e),this.onSearch(e)},onChange:function(){this.searchNext=!1},onSearch:function(e){var t=this;e?o["a"].post("/api/Crm/Com/ExactByName",{ComName:e}).then(function(e){var a=e;a.code>0?t.$message.error(a.msg):(null==a.data.company?(t.haveCom=!1,t.searchCom={}):(t.haveCom=!0,t.searchCom=a.data.company,t.$nextTick()),t.searchNext=!0)}).catch(function(e){console.log(e)}):t.$message.error("请输入公司名称")},addTeamWork:function(e){var t=this,a=this;this.form.validateFields(function(r,s){if(!r){var i={productLine:{ProductLine:s.ProductLine,DepId:s.DepId,ComGuid:a.searchCom.ComGuid,Budget:s.Budget,Remarks:s.Remarkspro},comContact:{Linkman:s.Linkman,Mobile:s.Mobile,Tel:s.Tel,Email:s.Email,Department:s.Department,JobTitle:s.JobTitle,Address:s.personAddress},LeadsGuid:t.assetsdetail.LeadsGuid};a.$loading.open(),o["a"].post("/api/Crm/ProductLine/Add",i).then(function(t){a.$loading.close();var r=t;r.code>0?a.$message.error(r.msg):("next"===e?(a.form.resetFields(),a.refresh&&a.refresh()):(a.$emit("onClose"),a.searchCom={}),a.$message.success(r.msg))}).catch(function(e){a.$loading.close(),console.log(e)})}})},onClose:function(){this.$emit("onClose")},validtel:function(e){return Object(i["d"])(e)},chooseArea:function(){this.drawer.area={show:!0}},areaClose:function(e){this.drawer.area={show:!1}},areaSure:function(e){this.city=e,this.drawer.area={show:!1},this.form.setFieldsValue({cityname:e.name})}}},c=n,u=a("2877"),d=Object(u["a"])(c,r,s,!1,null,null,null);t["default"]=d.exports},a314:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("a-form",{attrs:{form:e.form}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:11}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Keyword",{initialValue:e.title.ComName,rules:e.AFormImportRules.iptInput}],expression:"['Keyword',{initialValue:title.ComName,rules:AFormImportRules.iptInput}]"}],attrs:{placeholder:"请输入"}}),a("a-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"},{name:"decorator",rawName:"v-decorator",value:["LeadsGuid",{initialValue:e.title.LeadsGuid,rules:e.AFormImportRules.iptInput}],expression:"['LeadsGuid',{initialValue:title.LeadsGuid,rules:AFormImportRules.iptInput}]"}]}),a("a-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"},{name:"decorator",rawName:"v-decorator",value:["DepId",{initialValue:e.title.SaleDepId,rules:e.AFormImportRules.iptInput}],expression:"['DepId',{initialValue:title.SaleDepId,rules:AFormImportRules.iptInput}]"}]}),a("a-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"},{name:"decorator",rawName:"v-decorator",value:["ComProductLineGuid",{initialValue:e.title.ComProductLineGuid,rules:e.AFormImportRules.iptInput}],expression:"['ComProductLineGuid',{initialValue:title.ComProductLineGuid,rules:AFormImportRules.iptInput}]"}]})],1)],1),a("a-col",{attrs:{md:10}},[a("a-form-item",{attrs:{label:"产品线",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ProductLine",{initialValue:e.title.ProductLine,rules:e.AFormImportRules.iptSelect}],expression:"['ProductLine',{initialValue:title.ProductLine,rules:AFormImportRules.iptSelect }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.accesskey,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:3}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.searchCustom}},[e._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"PLGUID"},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[1==r.Opened?a("a",{on:{click:function(t){return e.Claim(r)}}},[e._v("认领")]):e._e(),0==r.Opened&&r.Userid==e.login.Userid?a("a",{on:{click:function(t){return e.conProductLine(r)}}},[e._v("关联销线")]):e._e(),0==r.Opened&&r.Userid!=e.login.Userid?a("a",{on:{click:function(t){return e.removeProductLine(r)}}},[e._v("转销线")]):e._e()])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2)],1)},s=[],o=a("b775"),i=(a("c32d"),a("61f7")),l=[{title:"公司名称",dataIndex:"ComName"},{title:"产品线",dataIndex:"ProductLineText"},{title:"归属人",dataIndex:"UseridText"},{title:"操作",scopedSlots:{customRender:"action"}}],n={name:"searchform",components:{},props:{title:{type:Object,default:""},accesskey:{type:Array,default:null}},data:function(){return{visible:{show:!1,id:{}},columns:l,dim:{},formSearch:{pageSize:10,current:1,total:0,Keyword:"",ProductLine:"",Code:"",PhoneNumber:""},defaultData:{Source:"10"},dataSource:[],DepList:[],assetsdetail:{},enableeditguid:"",form:this.$form.createForm(this),AFormImportRules:{iptDate:[{required:!0,message:"请选择"}],iptInput:[{message:"请输入"}],iptSelect:[{required:!1,message:"请选择"}],Mobile:[{message:"请输入手机号"},{validator:this.ConfirmMobile}]},drawer:{},modal:{outchange:{show:!1}},login:{}}},created:function(){this.init()},methods:{init:function(){var e=this;this.$watch("title",function(t,a){e.$nextTick(function(){e.searchCustom()})})},allot:function(){this.drawer.allot={show:!0,id:this.show.id,assetsdetail:this.assetsdetail}},outchange:function(e){this.modal.outchange={show:!0,id:e.BalanceGuid,balance:e}},searchCustom:function(){this.pagechange(1)},pagechange:function(e){var t=this;t.form.validateFields(function(a,r){a||(t.formSearch.current=e,t.formSearch.Keyword=r.Keyword,t.formSearch.ProductLine=r.ProductLine,o["a"].post("/api/Crm/Customer/PublicList",t.formSearch).then(function(e){0===e.code&&(t.dataSource=e.data.rows,t.login.Userid=e.data.Userid,t.formSearch.total=e.count,t.$nextTick())}).catch(function(e){console.log(e)}))})},ConfirmMobile:function(e,t,a){!t||Object(i["d"])(t)?a():a("手机号码不符合规则！")},removeProductLine:function(e){var t=this;this.form.validateFields(function(a,r){if(!a){var s={};s.LeadsGuid=r.LeadsGuid,s.SaleDepId=e.DepId,s.SaleUserid=e.Userid,o["a"].post("/api/Leads/Com/Assign",s).then(function(e){var a=e;a.code>0?t.$message.error(a.msg):(t.$emit("onClose"),t.$message.success(a.msg))}).catch(function(e){console.log(e)})}})},conProductLine:function(e){var t=this;this.form.validateFields(function(a,r){if(!a){var s={};s.LeadsGuid=r.LeadsGuid,s.ComProductLineGuid=e.ComProductLineGuid,o["a"].post("/api/Leads/Com/Link",s).then(function(e){var a=e;a.code>0?t.$message.error(a.msg):(t.$emit("onClose"),t.$message.success(a.msg))}).catch(function(e){console.log(e)})}})},Claim:function(e){var t=this;this.form.validateFields(function(a,r){if(!a){var s={};s.LeadsGuid=r.LeadsGuid,s.DepId=r.DepId,s.ComProductLineGuid=e.ComProductLineGuid,o["a"].post("/api/Crm/ProductLine/Pick",s).then(function(e){var a=e;a.code>0?t.$message.error(a.msg):(t.$emit("onClose"),t.$message.success(a.msg))}).catch(function(e){console.log(e)})}})}}},c=n,u=a("2877"),d=Object(u["a"])(c,r,s,!1,null,null,null);t["default"]=d.exports},f802:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{message:"",visible:this.visible.show,width:650,destroyOnClose:!0,closable:!1},on:{close:e.onClose}},[a("template",{slot:"title"},[e._v("\n    "+e._s(e.assetsdetail.GoodsName)+"详情\n    "),0==e.assetsdetail.Status||10==e.assetsdetail.Status?a("a-button",{staticStyle:{float:"right"},attrs:{size:"small",icon:"form"},on:{click:e.allot}},[e._v("分配")]):e._e(),30==e.assetsdetail.Status?a("a-button",{staticStyle:{float:"right","margin-right":"10px"},attrs:{size:"small",icon:"delete"},on:{click:e.isSrue}},[e._v("无效")]):e._e()],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("公司名称:")]),a("a-col",{attrs:{span:6}},[e._v(e._s(e.assetsdetail.ComName))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("产品线:")]),a("a-col",{attrs:{span:6}},[e._v(e._s(e.visible.ComProductLine[e.assetsdetail.ProductLine]))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("联系人:")]),a("a-col",{attrs:{span:6}},[e._v(e._s(e.assetsdetail.Linkman))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("联系电话:")]),a("a-col",{attrs:{span:6}},[e._v(e._s(e.assetsdetail.LinkTel))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("创建时间:")]),a("a-col",{attrs:{span:6}},[e._v(e._s(e.assetsdetail.CreatDate))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("更新时间:")]),a("a-col",{attrs:{span:6}},[e._v(e._s(e.assetsdetail.UpdateTime))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("城市:")]),a("a-col",{attrs:{span:6}},[e._v(e._s(e.visible.cityList[e.assetsdetail.CityCode]))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("归属人:")]),a("a-col",{attrs:{span:6}},[e._v(e._s(e.visible.userArray[e.assetsdetail.Userid]))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("状态:")]),a("a-col",{attrs:{span:6}},[e._v(e._s(e.visible.ComLeadsStatus[e.assetsdetail.Status]))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("备注:")]),a("a-col",{attrs:{span:6}},[e._v(e._s(e.assetsdetail.Remarks))])],1),a("div",[a("a-tabs",{attrs:{defaultActiveKey:"1"},on:{change:e.callback}},[a("a-tab-pane",{key:"1",attrs:{tab:"查询客户"}},[a("searchform",{attrs:{title:e.assetsdetail,accesskey:e.dim.ComProductLine},on:{onClose:e.onClose}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"新建客户",forceRender:""}},[a("addcustomer",{attrs:{assetsdetail:e.assetsdetail},on:{onClose:e.onClose}})],1),a("a-tab-pane",{key:"3",attrs:{tab:"分配",forceRender:""}},[a("allot",{attrs:{assetsdetail:e.assetsdetail},on:{onClose:e.onClose}})],1)],1)],1)],2)},s=[],o=a("b775"),i=(a("c32d"),a("a314")),l=a("9f94"),n=(a("61f7"),a("3c60")),c={components:{searchform:i["default"],addcustomer:l["default"],allot:n["default"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null},isSrueDelete:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},roles:[],cityList:{},userArray:{},ComProductLine:{},ComLeadsStatus:{}},dim:{Brand:[]},formSearch:{pageSize:10,current:1,total:0},defaultData:{Source:"10"},dataSource:[],DepList:[],assetsdetail:{},Source:[],Scale:[],Nature:[],Industry:[],searchCom:{},enableeditguid:"",form:this.$form.createForm(this),AFormImportRules:{iptDate:[{required:!0,message:"请选择"}],iptInput:[{message:"请输入"}],iptInputReq:[{required:!0,message:"请输入"}],iptSelect:[{required:!1,message:"请选择"}],iptSelectReq:[{required:!0,message:"请选择"}],Mobile:[{message:"请输入手机号"},{validator:this.ConfirmMobile}],Email:[{message:"请输入邮箱"},{validator:this.ConfirmEmail}]},drawer:{},modal:{outchange:{show:!1}},haveCom:!1,searchNext:!1}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&(e.haveCom=!1,e.init())})},methods:{init:function(){var e=this;o["a"].post("/api/Leads/Com/Detail",{LeadsGuid:e.show.id}).then(function(t){0===t.code&&(e.assetsdetail=t.data.leadsCom,e.dataSource=t.data.leadsComLogs)}).catch(function(e){console.log(e)}),o["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine"]}).then(function(t){0===t.code&&(e.dim.ComProductLine=t.data.ComProductLine)}).catch(function(e){console.log(e)})},onClose:function(){this.visible.show=!1,this.dataSource=[],this.assetsdetail={},this.searchCom={},this.refresh&&this.refresh()},detail:function(e){this.drawer.detail={show:!0,id:e.SBOrderItemGuid}},allot:function(){this.drawer.allot={show:!0,id:this.show.id,assetsdetail:this.assetsdetail}},outchange:function(e){this.modal.outchange={show:!0,id:e.BalanceGuid,balance:e}},callback:function(e){},isSrue:function(){this.isSrueDelete(this.assetsdetail,!1,this.sureback)},sureback:function(){this.onClose()}}},u=c,d=a("2877"),m=Object(d["a"])(u,r,s,!1,null,null,null);t["default"]=m.exports}}]);