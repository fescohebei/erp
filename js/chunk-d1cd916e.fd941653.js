(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1cd916e","chunk-2d0d839a"],{"0e6c":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{layout:"horizontal"}},[a("div",{class:t.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:8}},[a("a-form-item",{attrs:{label:"名称",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.GoodsName,callback:function(e){t.$set(t.formSearch,"GoodsName",e)},expression:"formSearch.GoodsName"}})],1)],1),a("a-col",{attrs:{span:16}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:t.init}},[t._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.edit({key:null})}}},[t._v("添加")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.exportbalanceout}},[t._v("领用记录导出")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"GoodsGuid"},scopedSlots:t._u([{key:"shuliang",fn:function(e){return a("span",{},[t._v(t._s(e.Amount)+t._s(e.UnitName))])}},{key:"action",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.detail(o)}}},[t._v("详情")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[t._v("\n              更多\n              "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{on:{click:function(e){return t.add(o)}}},[t._v("入库")]),a("a-menu-item",{on:{click:function(e){return t.out(o)}}},[t._v("领用")])],1)],1)],1)}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1)],1),a("drawer-add",{attrs:{show:t.drawer.add,refresh:t.init}}),a("drawer-out",{attrs:{show:t.drawer.out,refresh:t.init}}),a("drawer-edit",{attrs:{show:t.drawer.edit,refresh:t.init}}),a("drawer-detail",{attrs:{show:t.drawer.detail,refresh:t.init}}),a("modal-export-balanceout",{attrs:{show:t.modal.exportbalanceout}})],1)},r=[],n=a("b775"),i=a("b783"),l=a("bcf9"),s=a("383f"),d=a("1578"),c=a("79bd"),u=[{title:"名称",dataIndex:"GoodsName"},{title:"品聘",dataIndex:"BrandName"},{title:"大类",dataIndex:"ClassName"},{title:"小类",dataIndex:"SubclassName"},{title:"仓库",dataIndex:"WarehouseName"},{title:"备注",dataIndex:"Remarks"},{title:"数量",scopedSlots:{customRender:"shuliang"}},{title:"操作",scopedSlots:{customRender:"action"}}],m={components:{DrawerEdit:i["default"],DrawerDetail:d["default"],DrawerAdd:l["default"],DrawerOut:s["default"],ModalExportBalanceout:c["default"]},data:function(){return{advanced:!0,columns:u,formSearch:{pageSize:10,current:1,total:0},dataSource:[],drawer:{add:{show:!1},out:{show:!1},detail:{show:!1,id:1},edit:{show:!1}},modal:{exportbalanceout:{show:!1}}}},mounted:function(){var t=this;t.init()},methods:{init:function(){this.pagechange(1)},pagechange:function(t){var e=this;e.formSearch.current=t,n["a"].post("/api/Supplies/Goods/List",e.formSearch).then(function(t){var a=t;0===a.code&&(e.dataSource=a.data,e.formSearch.total=a.count)}).catch(function(t){console.log(t)})},detail:function(t){this.drawer.detail={show:!0,id:t.GoodsGuid}},edit:function(t){this.drawer.edit={show:!0,id:t.key,goodsdetail:null}},add:function(t){this.drawer.add={show:!0,id:t.GoodsGuid,goodsdetail:t}},out:function(t){this.drawer.out={show:!0,id:t.GoodsGuid,goodsdetail:t}},exportbalanceout:function(){this.modal.exportbalanceout={show:!0}}}},p=m,f=(a("2afd"),a("2877")),h=Object(f["a"])(p,o,r,!1,null,null,null);e["default"]=h.exports},"2afd":function(t,e,a){"use strict";var o=a("5047"),r=a.n(o);r.a},5047:function(t,e,a){},"79bd":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:"领用记录导出",destroyOnClose:!0,visible:this.visible.show,maskClosable:!0},on:{ok:t.handleSubmit,cancel:t.onClose}},[a("a-form",{attrs:{form:t.form},on:{submit:t.handleSubmit}},[a("a-form-item",{attrs:{label:"日期范围",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["DatePicker",{rules:t.AFormImportRules.iptSelect}],expression:"['DatePicker',{rules:AFormImportRules.iptSelect }]"}]})],1),a("a-form-item",{attrs:{label:"导出类型",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ExportType",{rules:t.AFormImportRules.iptSelect}],expression:"['ExportType',{rules:AFormImportRules.iptSelect }]"}],attrs:{placeholder:"请选择",allowClear:!0}},[a("a-select-option",{key:"1"},[t._v("按部门导出")]),a("a-select-option",{key:"2"},[t._v("按人员导出")])],1)],1)],1)],1)},r=[],n={props:{show:{type:Object,default:{show:!1}}},data:function(){return{visible:{show:!1},form:this.$form.createForm(this),AFormImportRules:{iptSelect:[{required:!0,message:"请选择"}]}}},watch:{show:function(t,e){var a=this;a.visible=t}},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},handleSubmit:function(){this.form.validateFields(function(t,e){if(!t){var a=document.createElement("a");a.href="/api/Supplies/Goods/getBalanceOutExport?begindate="+e.DatePicker[0].format("YYYY-MM-DD")+"&enddate="+e.DatePicker[1].format("YYYY-MM-DD")+"&type="+e.ExportType,a.click()}})}}},i=n,l=a("2877"),s=Object(l["a"])(i,o,r,!1,null,null,null);e["default"]=s.exports}}]);