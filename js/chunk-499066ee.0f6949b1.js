(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-499066ee","chunk-2d0c8c27"],{"55f7":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-drawer",{attrs:{message:"",visible:this.visible.show,width:650,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[e("template",{slot:"title"},[t._v("\n    "+t._s(t.assetsdetail.GoodsName)+"详情\n    "),0==t.assetsdetail.Status||10==t.assetsdetail.Status?e("a-button",{staticStyle:{float:"right"},attrs:{size:"small",icon:"form"},on:{click:t.allot}},[t._v("分配")]):t._e(),0==t.assetsdetail.Status||10==t.assetsdetail.Status?e("a-button",{staticStyle:{float:"right","margin-right":"10px"},attrs:{size:"small",icon:"delete"},on:{click:t.isSrue}},[t._v("无效")]):t._e()],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("公司名称:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.ComName))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("产品线:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.ProductLineText))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("联系人:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.Linkman))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("联系电话:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.LinkTel))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("创建时间:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.CreatDate))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("更新时间:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.UpdateTime))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("归属部门:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.DepIdText))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("归属人:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.UseridText))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("状态:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.StatusText))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("备注:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.Remarks))])],1),e("a-divider",{attrs:{orientation:"left"}},[t._v("流程记录")]),e("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,bordered:!1,pagination:!1,size:"middle",rowKey:"LogGuid"}}),e("drawer-allot",{attrs:{show:t.drawer.allot,refresh:t.initDrawer}})],2)},i=[],r=e("b775"),o=e("97f8"),l=(e("c32d"),[{title:"状态",dataIndex:"ActionText"},{title:"操作人员",dataIndex:"UseridText"},{title:"操作时间",dataIndex:"LogTime"},{title:"备注",dataIndex:"Remarks"}]),n={components:{DrawerAllot:o["default"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null},isSrueDelete:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{}},columns:l,formSearch:{pageSize:10,current:1,total:0},dataSource:[],assetsdetail:{},enableeditguid:"",form:this.$form.createForm(this),drawer:{allot:{show:!1}},modal:{outchange:{show:!1}}}},created:function(){var t=this;this.$watch("show",function(a,e){t.visible=a,t.visible.show&&t.init()})},methods:{init:function(){var t=this;r["a"].post("/api/Leads/Com/Detail",{LeadsGuid:t.show.id}).then(function(a){0===a.code&&(t.assetsdetail=a.data.leadsCom,t.dataSource=a.data.leadsComLogs)}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.dataSource=[],this.assetsdetail={}},initDrawer:function(){this.init(),this.refresh()},detail:function(t){this.drawer.detail={show:!0,id:t.SBOrderItemGuid}},allot:function(){this.drawer.allot={show:!0,id:this.show.id,assetsdetail:this.assetsdetail}},outchange:function(t){this.modal.outchange={show:!0,id:t.BalanceGuid,balance:t}},isSrue:function(){this.isSrueDelete(this.assetsdetail,!1)}}},c=n,d=e("2877"),u=Object(d["a"])(c,s,i,!1,null,null,null);a["default"]=u.exports},"615f":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-layout",[e("a-layout-content",[e("a-card",{attrs:{bordered:!1}},[e("div",[e("a-form",{attrs:{layout:"horizontal"}},[e("div",{class:t.advanced?null:"fold"},[e("a-row",{attrs:{gutter:10}},[e("a-col",{attrs:{md:6}},[e("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[e("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.Keyword,callback:function(a){t.$set(t.formSearch,"Keyword",a)},expression:"formSearch.Keyword"}})],1)],1),e("a-col",{attrs:{md:3}},[e("a-form-item",[e("a-select",{model:{value:t.formSearch.Scene,callback:function(a){t.$set(t.formSearch,"Scene",a)},expression:"formSearch.Scene"}},[e("a-select-option",{attrs:{value:"待转客户"}},[t._v("\n                      待转客户\n                    ")]),e("a-select-option",{attrs:{value:"已转客户"}},[t._v("\n                      已转客户\n                    ")]),e("a-select-option",{attrs:{value:"全部"}},[t._v("\n                      全部\n                    ")])],1)],1)],1),e("a-col",{attrs:{span:12}},[e("a-form-item",[e("a-button",{attrs:{type:"primary"},on:{click:t.init}},[t._v("查询")])],1)],1)],1)],1)])],1),e("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"PLGUID"},scopedSlots:t._u([{key:"action",fn:function(a,s){return e("span",{staticStyle:{"text-align":"right"}},[30==s.Status?e("a",{on:{click:function(a){return t.detail(s)}}},[t._v("详情")]):t._e(),30==s.Status?e("a-divider",{attrs:{type:"vertical"}}):t._e(),30==s.Status?e("a",{on:{click:function(a){return t.isSrue(s,!1)}}},[t._v("无效")]):t._e(),40==s.Status?e("a",{on:{click:function(a){return t.saledetail(s)}}},[t._v("详情")]):t._e()],1)}}])},[e("template",{slot:"footer"},[e("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2),e("a-modal",{attrs:{title:"提示信息",visible:t.invalidlayer,"confirm-loading":t.confirmLoading,zIndex:99999},on:{ok:t.invalidOk,cancel:t.invalidCancel}},[e("a-form",{attrs:{layout:"horizontal"}},[e("div",[e("a-row",{attrs:{gutter:10}},[e("a-col",{attrs:{md:24}},[e("a-form-item",{attrs:{label:"原因",labelCol:{span:3},wrapperCol:{span:18,offset:1}}},[e("a-textarea",{attrs:{placeholder:"请输入原因",rows:4},model:{value:t.VerifyNote,callback:function(a){t.VerifyNote=a},expression:"VerifyNote"}})],1)],1)],1)],1)])],1)],1)],1),e("drawer-detail",{attrs:{show:t.drawer.detail,refresh:t.init,isSrueDelete:t.isSrue}}),e("drawer-sale-detail",{attrs:{show:t.drawer.saledetail,refresh:t.pagerefresh}})],1)},i=[],r=(e("ac6a"),e("b775")),o=e("f802"),l=e("55f7"),n=[{title:"状态",dataIndex:"StatusText"},{title:"公司名称",dataIndex:"ComName"},{title:"产品线",dataIndex:"ProductLineText"},{title:"联系人",dataIndex:"Linkman"},{title:"联系电话",dataIndex:"LinkTel"},{title:"创建时间",dataIndex:"CreatDate"},{title:"操作",scopedSlots:{customRender:"action"}}],c={components:{DrawerDetail:o["default"],DrawerSaleDetail:l["default"]},data:function(){return{advanced:!0,columns:n,formSearch:{pageSize:10,current:1,total:0,Keyword:"",Scene:"待转客户"},dataSource:[],roles:[],drawer:{detail:{show:!1},saledetail:{show:!1}},modal:{exporttransfer:{show:!1}},invalidlayer:!1,confirmLoading:!1,invalidRecord:{},VerifyNote:""}},mounted:function(){var t=this;t.init()},methods:{init:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var a=this;a.formSearch.current=t,a.$loading.open(),r["a"].post("/api/Leads/Com/ConvertList",a.formSearch).then(function(t){a.$loading.close(),0===t.code&&(t.data.rows.forEach(function(t){t.CreatDate=moment(t.CreatDate).format("YYYY-MM-DD")}),a.dataSource=t.data.rows,a.roles=t.data.Operator.Roles,a.formSearch.total=t.count)}).catch(function(t){a.$loading.close(),console.log(t)})},detail:function(t){this.drawer.detail={show:!0,id:t.LeadsGuid,roles:this.roles}},saledetail:function(t){this.drawer.saledetail={show:!0,id:t.LeadsGuid}},isSrue:function(t,a,e){var s=this;s.invalidlayer=!0,s.invalidRecord=t,s.invalidRecord.status="false",e&&(this.callback=e)},invalidOk:function(t){var a=this;r["a"].post("/api/Leads/Com/Verify",{LeadsGuid:a.invalidRecord.LeadsGuid,Effective:a.invalidRecord.status,VerifyNote:a.VerifyNote}).then(function(t){var e=t;0===t.code?(a.$message.success(e.msg),a.init(),a.invalidlayer=!1,a.VerifyNote="",a.callback()):(a.$message.error(e.msg),a.VerifyNote="")}).catch(function(t){console.log(t)})},invalidCancel:function(t){this.invalidlayer=!1,this.VerifyNote=""},callback:function(){}}},d=c,u=(e("6aa7"),e("2877")),f=Object(u["a"])(d,s,i,!1,null,null,null);a["default"]=f.exports},"6aa7":function(t,a,e){"use strict";var s=e("fa53"),i=e.n(s);i.a},fa53:function(t,a,e){}}]);