(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213189"],{aae8:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a-layout",[o("a-layout-content",[o("a-card",{attrs:{bordered:!1}},[o("div",[o("a-form",{attrs:{layout:"horizontal"}},[o("div",{class:e.advanced?null:"fold"},[o("a-row",{attrs:{gutter:10}},[o("a-col",{attrs:{md:6}},[o("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[o("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.Keyword,callback:function(t){e.$set(e.formSearch,"Keyword",t)},expression:"formSearch.Keyword"}})],1)],1),o("a-col",{attrs:{span:12}},[o("a-form-item",[o("a-button",{attrs:{type:"primary"},on:{click:e.init}},[e._v("查询")])],1)],1)],1)],1)])],1),o("a-table",{attrs:{rowKey:"ContactRecordGuid",columns:e.columnsLines,"data-source":e.dataLeads,pagination:!1},scopedSlots:e._u([{key:"ProductLine",fn:function(t,a){return o("span",{staticStyle:{"text-align":"right"}},[e._l(a.ProductLines,function(t,o){return[o==a.ProductLines.length-1?[e._v("\n                  "+e._s(e.ProductLine[t])+"\n              ")]:[e._v("\n                "+e._s(e.ProductLine[t])+",\n              ")]]})],2)}},{key:"ContactType",fn:function(t,a){return o("span",{staticStyle:{"text-align":"right"}},[e._v("\n            "+e._s(e.ContactType[a.ContactType])+"\n          ")])}},{key:"action",fn:function(t,a){return o("span",{staticStyle:{"text-align":"right"}},[o("a",{on:{click:function(t){return e.comDetail(a)}}},[e._v("详情")])])}}])},[o("template",{slot:"footer"},[o("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2)],1)],1),o("a-modal",{attrs:{title:"提示信息",visible:e.visible,"confirm-loading":e.confirmLoading},on:{ok:e.comhandleOk,cancel:e.comhandleCancel}},[o("a-form",{attrs:{layout:"horizontal"}},[o("div",[o("a-row",{attrs:{gutter:10}},[o("a-col",{attrs:{md:24}},[o("a-form-item",{attrs:{label:"放弃原因",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[o("a-select",{model:{value:e.ThrowComReasonKey,callback:function(t){e.ThrowComReasonKey=t},expression:"ThrowComReasonKey"}},e._l(e.ThrowReason,function(t){return o("a-select-option",{key:t.key},[e._v("\n                      "+e._s(t.text)+"\n                    ")])}),1)],1)],1)],1)],1)])],1),o("drawer-detail",{attrs:{show:e.drawer.detail,refresh:e.pagerefresh,deleteCustomer:e.throwCom}})],1)},n=[],r=(o("ac6a"),o("b775")),c=(o("61f7"),o("0dd8")),i=[{title:"公司名称",dataIndex:"ComName"},{title:"产品线",scopedSlots:{customRender:"ProductLine"},width:300},{title:"联系方式",scopedSlots:{customRender:"ContactType"}},{title:"创建时间",dataIndex:"CreateDate"},{title:"下次联系时间",dataIndex:"NextContacttime"},{title:"联系内容",dataIndex:"ContactContent",width:300},{title:"操作",scopedSlots:{customRender:"action"}}],s={components:{DrawerDetail:c["default"]},data:function(){return{advanced:!0,columnsLines:i,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,Keyword:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],dataLeads:[],dataDetail:[],roles:[],drawer:{detail:{show:!1}},modal:{exporttransfer:{show:!1}},ThrowReason:[],checkComId:"",checkLineId:"",userid:"",expandedRowKeys:[],department:[],departmentKey:"",showClaimLayer:!1,claimLineId:"",childLine:{expanded:"",record:""},Roles:!1,Dept:[],User:[],ProductLine:{},ContactType:{},ThrowComReasonKey:""}},mounted:function(){var e=this;e.init()},methods:{init:function(){var e=this;r["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept"]}).then(function(t){e.$loading.close(),0===t.code&&(e.User=t.data.User,e.Dept=t.data.Dept)}).catch(function(t){e.$loading.close(),console.log(t)}),r["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine","ContactType"]}).then(function(t){0===t.code?(t.data.ComProductLine.forEach(function(t,o){e.ProductLine[t.key]=t.text}),t.data.ContactType.forEach(function(t,o){e.ContactType[t.key]=t.text})):e.$message.error(t.msg)}).catch(function(e){console.log(e)}),this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this;t.formSearch.current=e,t.$loading.open(),r["a"].post("/api/Crm/Contact/ListNextRecords",t.formSearch).then(function(e){t.$loading.close(),0===e.code&&(t.dataLeads=e.data.rows,t.formSearch.total=e.data.count)}).catch(function(e){t.$loading.close(),console.log(e)})},comDetail:function(e){this.drawer.detail={show:!0,id:e.ComGuid,listText:e}},throwCom:function(e){var t=this;t.visible=!0,t.checkComId=e.ComGuid,r["a"].post("/api/Dim/Enum/GetEnum",{Names:["ThrowReason"]}).then(function(e){0===e.code&&(t.ThrowReason=e.data.ThrowReason)}).catch(function(e){console.log(e)})},comhandleOk:function(e){var t=this;""===t.ThrowComReasonKey?t.$message.error("请选择放弃原因！"):r["a"].post("/api/Crm/Com/Throw",{ComGuid:t.checkComId,ThrowReason:t.ThrowComReasonKey}).then(function(e){0===e.code?(t.visible=!1,t.pagerefresh(),t.ThrowComReasonKey="",t.checkComId=""):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},comhandleCancel:function(e){this.visible=!1,this.checkComId=""}}},l=s,d=o("2877"),u=Object(d["a"])(l,a,n,!1,null,null,null);t["default"]=u.exports}}]);