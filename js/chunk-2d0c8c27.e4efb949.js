(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8c27"],{"55f7":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a-drawer",{attrs:{message:"",visible:this.visible.show,width:650,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[s("template",{slot:"title"},[t._v("\n    "+t._s(t.assetsdetail.GoodsName)+"详情\n    "),0==t.assetsdetail.Status||10==t.assetsdetail.Status?s("a-button",{staticStyle:{float:"right"},attrs:{size:"small",icon:"form"},on:{click:t.allot}},[t._v("分配")]):t._e(),0==t.assetsdetail.Status||10==t.assetsdetail.Status?s("a-button",{staticStyle:{float:"right","margin-right":"10px"},attrs:{size:"small",icon:"delete"},on:{click:t.isSrue}},[t._v("无效")]):t._e()],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("公司名称:")]),s("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.ComName))]),s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("产品线:")]),s("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.ProductLineText))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("联系人:")]),s("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.Linkman))]),s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("联系电话:")]),s("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.LinkTel))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("创建时间:")]),s("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.CreatDate))]),s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("更新时间:")]),s("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.UpdateTime))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("归属部门:")]),s("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.DepIdText))]),s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("归属人:")]),s("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.UseridText))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("状态:")]),s("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.StatusText))]),s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("备注:")]),s("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.Remarks))])],1),s("a-divider",{attrs:{orientation:"left"}},[t._v("流程记录")]),s("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,bordered:!1,pagination:!1,size:"middle",rowKey:"LogGuid"}}),s("drawer-allot",{attrs:{show:t.drawer.allot,refresh:t.initDrawer}})],2)},i=[],l=s("b775"),o=s("97f8"),n=(s("c32d"),[{title:"状态",dataIndex:"ActionText"},{title:"操作人员",dataIndex:"UseridText"},{title:"操作时间",dataIndex:"LogTime"},{title:"备注",dataIndex:"Remarks"}]),r={components:{DrawerAllot:o["default"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null},isSrueDelete:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{}},columns:n,formSearch:{pageSize:10,current:1,total:0},dataSource:[],assetsdetail:{},enableeditguid:"",form:this.$form.createForm(this),drawer:{allot:{show:!1}},modal:{outchange:{show:!1}}}},created:function(){var t=this;this.$watch("show",function(a,s){t.visible=a,t.visible.show&&t.init()})},methods:{init:function(){var t=this;l["a"].post("/api/Leads/Com/Detail",{LeadsGuid:t.show.id}).then(function(a){0===a.code&&(t.assetsdetail=a.data.leadsCom,t.dataSource=a.data.leadsComLogs)}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.dataSource=[],this.assetsdetail={}},initDrawer:function(){this.init(),this.refresh()},detail:function(t){this.drawer.detail={show:!0,id:t.SBOrderItemGuid}},allot:function(){this.drawer.allot={show:!0,id:this.show.id,assetsdetail:this.assetsdetail}},outchange:function(t){this.modal.outchange={show:!0,id:t.BalanceGuid,balance:t}},isSrue:function(){this.isSrueDelete(this.assetsdetail,!1)}}},d=r,c=s("2877"),u=Object(c["a"])(d,e,i,!1,null,null,null);a["default"]=u.exports}}]);