(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2190df85","chunk-959e662a","chunk-2d0b38ca"],{"299f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{title:"新建",placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:400}},[a("a-card",{attrs:{bordered:!1}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ComName",{initialValue:t.visible.assetsdetail.ComName,rules:t.AFormImportRules.iptInput}],expression:"['ComName',{initialValue:visible.assetsdetail.ComName,rules:AFormImportRules.iptInput}]"}]})],1),a("a-form-item",{attrs:{label:"产品线",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ProductLine",{initialValue:t.visible.assetsdetail.ProductLine,rules:t.AFormImportRules.iptSelect}],expression:"['ProductLine',{initialValue:visible.assetsdetail.ProductLine,rules:AFormImportRules.iptSelect }]"}],attrs:{placeholder:"请选择",allowClear:!0}},t._l(t.dim.ComProductLine,function(e){return a("a-select-option",{key:e.key},[t._v(t._s(e.text))])}),1)],1),a("a-form-item",{attrs:{label:"城市",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cityname",{rules:t.AFormImportRules.iptInput}],expression:"['cityname',{rules:AFormImportRules.iptInput}]"}],attrs:{readOnly:"",placeholder:"请输入"},on:{click:t.chooseArea}})],1),a("a-form-item",{attrs:{label:"联系人",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Linkman",{initialValue:t.visible.assetsdetail.Linkman,rules:t.AFormImportRules.iptInput}],expression:"['Linkman',{initialValue:visible.assetsdetail.Linkman,rules:AFormImportRules.iptInput}]"}]})],1),a("a-form-item",{attrs:{label:"联系电话",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["LinkTel",{initialValue:t.visible.assetsdetail.LinkTel,rules:t.AFormImportRules.Mobile}],expression:"['LinkTel',{initialValue:visible.assetsdetail.LinkTel,rules:AFormImportRules.Mobile}]"}]})],1),a("a-form-item",{attrs:{label:"备注",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{initialValue:t.visible.assetsdetail.Remarks,rules:t.AFormImportRules.Remarks}],expression:"['Remarks',{initialValue:visible.assetsdetail.Remarks,rules:AFormImportRules.Remarks}]"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:t.onClose}},[t._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:t.handleSubmit}},[t._v("提交")]),null==t.visible.id?a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.handleSubmit("next")}}},[t._v("提交并继续录入")]):t._e()],1),a("chooseArea",{attrs:{openDrawer:t.drawer.area.show},on:{Closearea:t.areaClose,Surearea:t.areaSure}})],1)},i=[],r=(a("7f7f"),a("b775")),n=a("61f7"),o=a("1269"),l={components:{chooseArea:o["a"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,assetsdetail:{AssetsCode:""}},dim:{Brand:[]},DepList:[],form:this.$form.createForm(this),AFormImportRules:{iptDate:[{required:!0,message:"请选择"}],iptInput:[{required:!0,message:"请输入"}],iptSelect:[{required:!0,message:"请选择"}],Remarks:[{required:!0,message:"备注"}],Mobile:[{required:!0,message:"请输入手机号"}]},drawer:{area:{show:!1}},city:{}}},watch:{show:function(t,e){var a=this;null==a.visible.assetsdetail&&(a.visible.assetsdetail={AssetsCode:""}),null!=t.assetsdetail.PurchaseDate&&(t.assetsdetail.PurchaseDate=moment(t.assetsdetail.PurchaseDate)),a.visible=t,t.show&&a.init()}},methods:{onClose:function(){this.visible.show=!1,this.city={},this.refresh&&this.refresh(),this.form.resetFields()},init:function(){var t=this;r["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine"]}).then(function(e){0===e.code&&(t.dim.ComProductLine=e.data.ComProductLine)}).catch(function(t){console.log(t)}),r["a"].get("/api/Org/Department/DepsByCurUser").then(function(e){0===e.code&&(t.DepList=e.data)}).catch(function(t){console.log(t)})},handleSubmit:function(t){var e=this;this.form.validateFields(function(a,s){if(!a){var i=s;i.LeadsGuid=e.visible.id,i.CityCode=e.city.value,e.$loading.open(),r["a"].post("/api/Leads/Com/Save",i).then(function(a){e.$loading.close();var s=a;s.code>0?e.$message.error(s.msg):("next"===t?(e.form.resetFields(),e.refresh&&e.refresh()):e.onClose(),e.$message.success(s.msg))}).catch(function(t){e.$loading.close(),console.log(t)})}})},ConfirmMobile:function(t,e,a){!e||Object(n["d"])(e)?a():a("手机号码不符合规则！")},chooseArea:function(){this.drawer.area={show:!0}},areaClose:function(t){this.drawer.area={show:!1}},areaSure:function(t){this.city=t,this.drawer.area={show:!1},this.form.setFieldsValue({cityname:t.name})}}},c=l,d=a("2877"),u=Object(d["a"])(c,s,i,!1,null,null,null);e["default"]=u.exports},"8a69":function(t,e,a){"use strict";var s=a("951e"),i=a.n(s);i.a},"951e":function(t,e,a){},bb17:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{message:"",visible:this.visible.show,width:820,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[a("template",{slot:"title"},[t._v("\n    客户详情\n  ")]),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("公司名称:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.company.ComName?t.assetsdetail.company.ComName:"无"))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("组织机构代码证:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.company.Code?t.assetsdetail.company.Code:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("网址:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.company.Url?t.assetsdetail.company.Url:"无"))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("城市:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.company.CityCode?t.visible.cityList[t.assetsdetail.company.CityCode]:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("地址:")]),a("a-col",{attrs:{span:18}},[t._v(t._s(t.assetsdetail.company.Address?t.assetsdetail.company.Address:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("客户来源:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.company.SourceText?t.assetsdetail.company.SourceText:"无"))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("客户性质:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.company.NatureText?t.assetsdetail.company.NatureText:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("客户规模:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.company.ScaleText?t.assetsdetail.company.ScaleText:"无"))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("行业:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.company.IndustryText?t.assetsdetail.company.IndustryText:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("归属人:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.company.UseridText?t.assetsdetail.company.UseridText:"无"))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("归属部门:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.company.DepIdText?t.assetsdetail.company.DepIdText:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("客户评级:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.rankText?t.rankText:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("备注:")]),a("a-col",{attrs:{span:20}},[t._v(t._s(t.assetsdetail.company.Remarks?t.assetsdetail.company.Remarks:"无"))])],1),a("a-row",{staticStyle:{padding:"10px 0"},attrs:{gutter:24}}),a("div",[a("a-tabs",{attrs:{type:"card",defaultActiveKey:"1"},on:{change:t.callback}},[a("a-tab-pane",{key:"1",attrs:{tab:"沟通记录"}},[t.sourceListRecords.length>0?[a("a-timeline",[t._l(t.sourceListRecords,function(e){return a("a-timeline-item",{key:e.index},[a("p",[t._v(t._s(e.Contacttime)+" "),a("a-divider",{attrs:{type:"vertical"}}),t._v(" "+t._s(t.user[e.Userid])+"  "),a("a-divider",{attrs:{type:"vertical"}}),t._v(" "+t._s(t.ContactType[e.ContactType])+"沟通  "),a("a-divider",{attrs:{type:"vertical"}}),t._l(e.ProductLines,function(s,i){return[i==e.ProductLines.length-1?[a("span",{key:s},[t._v(t._s(t.ProductLine[s]))])]:[a("span",{key:s},[t._v(t._s(t.ProductLine[s]))]),t._v(",\n                ")]]})],2),a("p",[t._v("沟通内容："+t._s(e.ContactContent))]),1==e.ProcessUp?a("p",[t._v("附带销售阶段迁升")]):t._e()])}),a("a-timeline-item",[a("a",{directives:[{name:"show",rawName:"v-show",value:1==t.formSearch.next,expression:"formSearch.next==true"}],on:{click:t.loadMore}},[t._v("查看更多")]),a("span",{directives:[{name:"show",rawName:"v-show",value:0==t.formSearch.next,expression:"formSearch.next==false"}]},[a("a-icon",{attrs:{type:"smile"}}),t._v(" 我是有底线的")],1)])],2)]:t._e(),0==t.sourceListRecords.length?[a("div",[a("a-row",{staticStyle:{"text-align":"center"}},[a("a-icon",{attrs:{type:"smile"}}),t._v(" 暂无数据")],1)],1)]:t._e()],2),a("a-tab-pane",{key:"2",attrs:{tab:"销线",forceRender:""}},[a("a-table",{attrs:{columns:t.columnsLeads,dataSource:t.dataLeads,bordered:!1,pagination:!1,size:"middle",rowKey:"LeadsGuid"},scopedSlots:t._u([{key:"Status",fn:function(e,s){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n            "+t._s(t.visible.ComLeadsStatus[s.Status])+"\n          ")])}},{key:"ProductLine",fn:function(e,s){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n            "+t._s(t.visible.ProductLine[s.ProductLine])+"\n          ")])}},{key:"Userid",fn:function(e,s){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n            "+t._s(t.visible.UserArray[s.Userid])+"\n          ")])}},{key:"action",fn:function(e,s){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.leadsDetail(s)}}},[t._v("详情")])])}}])})],1),a("a-tab-pane",{key:"3",attrs:{tab:"合同"}},[a("contractList",{attrs:{assetsdetail:t.assetsdetail.company,userid:t.visible.userid,componenttype:t.company},on:{refresh:t.init}})],1),a("a-tab-pane",{key:"4",attrs:{tab:"联系人"}},[t.linkmanList.length>0?a("a-row",{attrs:{gutter:24}},t._l(t.linkmanList,function(e){return a("a-col",{key:e.ComContactGuid,attrs:{span:12}},[a("a-row",{staticClass:"linkman"},[a("a-col",{staticClass:"acol",attrs:{span:8}},[a("a-icon",{attrs:{type:"user"}}),t._v(" "+t._s(e.Linkman))],1),a("a-col",{staticClass:"acol",attrs:{span:16,align:"right"}},[a("a-icon",{attrs:{type:"phone"}}),t._v(t._s(e.Mobile)+" "),e.Tel&&e.Mobile?a("span",[t._v("/")]):t._e(),t._v(" "+t._s(e.Tel)+" "),e.Tel||e.Mobile?t._e():a("span",[t._v("没有联系方式")])],1),a("a-col",{staticClass:"acol",attrs:{span:10}},[t._v(t._s(e.ProductLineText))]),a("a-col",{staticClass:"acol",attrs:{span:14,align:"right"}},[t._v(t._s(e.Department)+" "),e.Department&&e.JobTitle?a("span",[t._v("/")]):t._e(),t._v(" "+t._s(e.JobTitle))]),a("a-col",{staticClass:"acol",attrs:{span:24}},[a("a",{on:{click:function(a){return t.linkDetail(e)}}},[t._v("详情")])])],1)],1)}),1):a("a-row",[a("a-col",{attrs:{align:"center"}},[a("a-icon",{attrs:{type:"smile"}}),t._v(" 暂无联系人")],1)],1),t.linkmanList.length>0?a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.linkTable.pageSize,total:t.linkTable.total,current:t.linkTable.current},on:{change:t.linkmanListChange}}):t._e()],1),a("a-tab-pane",{key:"5",attrs:{tab:"所有产品线"}},[a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,bordered:!1,pagination:!1,size:"middle",rowKey:"ComProductLineGuid"},scopedSlots:t._u([{key:"operate",fn:function(e,s){return a("span",{staticStyle:{"text-align":"right"}},[a("a-tag",{attrs:{color:1==s.Opened?"red":0==s.Cooperated?"blue":1==s.Cooperated?"green":""}},[1==s.Opened?[t._v("没人跟进")]:t._e(),0==s.Opened?[t._v(t._s(s.CooperatedText))]:t._e()],2),0==s.Opened?[a("a-tag",{attrs:{color:void 0!=s.ServiceDepId||void 0!=s.ServiceUserid?"green":"red"}},[0!=s.Opened||void 0==s.ServiceDepId&&void 0==s.ServiceUserid?t._e():[t._v("已交接")],0==s.Opened&&void 0==s.ServiceDepId&&void 0==s.ServiceUserid?[t._v("未交接")]:t._e()],2)]:t._e()],2)}},{key:"CreateDate",fn:function(e,s){return a("span",{staticStyle:{"text-align":"right"}},[1==s.Opened?[t._v(t._s(s.ThrowTime))]:t._e(),0==s.Opened?[t._v(t._s(s.PullTime))]:t._e()],2)}},{key:"Stage",fn:function(e,s){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n            "+t._s(s.Stage?t.visible.SaleStage[s.Stage]:"")+"\n          ")])}},{key:"Userid",fn:function(e,s){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n            "+t._s(t.visible.UserArray[s.Userid])+"\n          ")])}},{key:"XTUserid",fn:function(e,s){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n            "+t._s(t.visible.UserArray[s.XTUserid])+"\n          ")])}},{key:"action",fn:function(e,s){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.lineDetail(s)}}},[t._v("详情")])])}}])})],1)],1)],1),a("drawer-leads-detail",{attrs:{show:t.drawer.leadsdetail,refresh:t.init}}),a("drawer-link-detail",{attrs:{show:t.drawer.linkdetail,refresh:t.initLink}}),a("drawer-line-detail",{attrs:{show:t.drawer.linedetail,assetsdetail:{},refresh:t.init}})],2)},i=[],r=(a("ac6a"),a("b775")),n=a("61f7"),o=(a("c32d"),a("f228")),l=a("043a"),c=a("8a34"),d=a("110d"),u=[{title:"状态",scopedSlots:{customRender:"operate"},width:150},{title:"产品线",dataIndex:"ProductLineText",width:100},{title:"销售姓名",scopedSlots:{customRender:"Userid"},width:90},{title:"协同人员",scopedSlots:{customRender:"XTUserid"},width:130},{title:"入库时间",scopedSlots:{customRender:"CreateDate"}},{title:"销售阶段",scopedSlots:{customRender:"Stage"}},{title:"操作",scopedSlots:{customRender:"action"}}],p=[{title:"产品线",dataIndex:"ProductLineText",width:100},{title:"销售姓名",dataIndex:"UseridText",width:90},{title:"沟通方式",dataIndex:"ContactTypeText",width:90},{title:"沟通时间",dataIndex:"Contacttime",width:210},{title:"操作",scopedSlots:{customRender:"action"}}],m=[{title:"状态",scopedSlots:{customRender:"Status"}},{title:"产品线",scopedSlots:{customRender:"ProductLine"}},{title:"提供人",scopedSlots:{customRender:"Userid"}},{title:"操作",scopedSlots:{customRender:"action"}}],h={components:{DrawerLeadsDetail:o["default"],DrawerLinkDetail:l["default"],DrawerLineDetail:c["default"],contractList:d["default"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},listText:{},userid:"",UserArray:{},DeptArray:{},cityList:{},SaleStage:{},ComLeadsStatus:{},ProductLine:{}},company:"company",showClaimLayer:!1,columns:u,columnsLeads:m,columnsconnect:p,formSearch:{pageSize:5,current:1,total:0,next:!0},linkTable:{pageSize:4,current:1,total:0},dataSource:[],dataLeads:[],sourceListRecords:[],linkmanList:[],assetsdetail:{company:{},line:{},leads:{},rank:{}},form:this.$form.createForm(this),AFormClaimRules:{iptInputNumber:[{required:!0,message:"请输入数字"},{validator:this.ConfirmNumber}]},drawer:{leadsdetail:{show:!1},linkdetail:{show:!1},linedetail:{show:!1}},modal:{outchange:{show:!1}},confirmLoading:!1,department:[],departmentKey:"",ContactType:{},ProductLine:{},user:{},comRankObject:{},rankText:""}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{init:function(){var t=this;r["a"].post("/api/Crm/Com/Detail",{ComGuid:t.show.id}).then(function(e){0===e.code&&(t.assetsdetail=e.data,t.dataSource=e.data.lines,t.dataLeads=e.data.leads,t.sourceListRecords=[],t.formSearch.next=!0,t.visible.userid=e.data.Operator.Userid,t.pagechange(1),t.rank())}).catch(function(t){console.log(t)}),r["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine","ContactType","ComRankNormal"]}).then(function(e){0===e.code?(e.data.ComProductLine.forEach(function(e,a){t.ProductLine[e.key]=e.text}),e.data.ContactType.forEach(function(e,a){t.ContactType[e.key]=e.text}),e.data.ComRankNormal.forEach(function(e,a){t.comRankObject[e.key]=e.text})):t.$message.error(e.msg)}).catch(function(t){console.log(t)}),r["a"].post("/api/Dim/Enum/DimDecode",{Names:["User"]}).then(function(e){0===e.code?t.user=e.data.User:t.$message.error(e.msg)}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.dataSource=[],this.sourceListRecords=[],this.formSearch.next=!0,this.assetsdetail={company:{},line:{},leads:{},rank:{}},this.refresh&&this.refresh()},rank:function(){var t=this;r["a"].post("/api/Crm/ComRank/Last",{ComGuid:t.assetsdetail.company.ComGuid}).then(function(e){0===e.code&&(e.data?t.rankText=t.comRankObject[e.data.Rank]:t.rankText="")}).catch(function(t){console.log(t)})},detail:function(t){this.drawer.detail={show:!0,id:t.SBOrderItemGuid}},outchange:function(t){this.modal.outchange={show:!0,id:t.BalanceGuid,balance:t}},callback:function(t){4==t&&this.linkmanListChange(1)},loadMore:function(){this.formSearch.current=this.formSearch.current+1,this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this,a=e.formSearch;e.formSearch.current=t,a.ComGuid=e.assetsdetail.company.ComGuid,r["a"].post("/api/Crm/Contact/ListRecords",a).then(function(t){0===t.code&&(e.sourceListRecords=e.sourceListRecords.concat(t.data.rows),e.formSearch.total=t.count,t.data.rows.length<e.formSearch.pageSize&&(e.formSearch.next=!1))}).catch(function(t){console.log(t)})},initLink:function(){this.linkmanListChange(1)},linkmanListChange:function(t){var e=this,a=e.linkTable;e.linkTable.current=t,a.ComGuid=e.assetsdetail.company.ComGuid,r["a"].post("/api/Crm/Contact/List",a).then(function(t){0===t.code&&(e.linkmanList=t.data.rows,e.linkTable.total=t.count)}).catch(function(t){console.log(t)})},leadsDetail:function(t){this.drawer.leadsdetail={show:!0,id:t.LeadsGuid,ComProductLine:this.visible.ProductLine,cityList:this.visible.cityList,userArray:this.visible.UserArray,ComLeadsStatus:this.visible.ComLeadsStatus}},linkDetail:function(t){this.drawer.linkdetail={show:!0,assetsdetail:t}},lineDetail:function(t){this.drawer.linedetail={show:!0,assetsdetail:t,userid:this.visible.userid,UserArray:this.visible.UserArray,DeptArray:this.visible.DeptArray,SaleStage:this.visible.SaleStage}},ConfirmNumber:function(t,e,a){!e||Object(n["c"])(e)?a():a("请输入数字！")}}},v=h,f=(a("8a69"),a("2877")),g=Object(f["a"])(v,s,i,!1,null,null,null);e["default"]=g.exports},f228:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{message:"",visible:this.visible.show,width:650,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[a("template",{slot:"title"},[t._v("\n    "+t._s(t.assetsdetail.GoodsName)+"详情\n    "),0==t.assetsdetail.Status?a("a-button",{staticStyle:{float:"right"},attrs:{size:"small",icon:"form"},on:{click:t.edit}},[t._v("修改")]):t._e()],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("公司名称:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.ComName))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("产品线:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.ComProductLine[t.assetsdetail.ProductLine]))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("联系人:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.Linkman))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("联系电话:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.LinkTel))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("创建时间:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.CreatDate))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("更新时间:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.UpdateTime))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("城市:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.cityList[t.assetsdetail.CityCode]))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("归属人:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.userArray[t.assetsdetail.Userid]))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("状态:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.ComLeadsStatus[t.assetsdetail.Status]))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("备注:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.Remarks))])],1),a("a-divider",{attrs:{orientation:"left"}},[t._v("流程记录")]),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,bordered:!1,pagination:!1,size:"middle",rowKey:"LogGuid"}}),a("drawer-edit",{attrs:{show:t.drawer.edit,refresh:t.init}})],2)},i=[],r=a("b775"),n=a("299f"),o=(a("c32d"),[{title:"状态",dataIndex:"ActionText"},{title:"操作人员",dataIndex:"UseridText"},{title:"操作时间",dataIndex:"LogTime"}]),l={components:{DrawerEdit:n["default"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},cityList:{},userArray:{},ComProductLine:{},ComLeadsStatus:{}},columns:o,formSearch:{pageSize:10,current:1,total:0},dataSource:[],assetsdetail:{},enableeditguid:"",form:this.$form.createForm(this),drawer:{edit:{show:!1}},modal:{outchange:{show:!1}}}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{init:function(){var t=this;r["a"].post("/api/Leads/Com/Detail",{LeadsGuid:t.show.id}).then(function(e){0===e.code&&(t.assetsdetail=e.data.leadsCom,t.dataSource=e.data.leadsComLogs)}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.dataSource=[],this.assetsdetail={},this.refresh&&this.refresh()},detail:function(t){this.drawer.detail={show:!0,id:t.SBOrderItemGuid}},edit:function(){this.drawer.edit={show:!0,id:this.show.id,assetsdetail:this.assetsdetail}},outchange:function(t){this.modal.outchange={show:!0,id:t.BalanceGuid,balance:t}}}},c=l,d=a("2877"),u=Object(d["a"])(c,s,i,!1,null,null,null);e["default"]=u.exports}}]);