(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd5f7"],{"2c5e":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-modal",{attrs:{title:"匹配产品线",destroyOnClose:!0,visible:this.visible.show,width:700,maskClosable:!1,footer:null},on:{cancel:t.onClose}},[o("a-form",{attrs:{form:t.form}},[o("a-row",{attrs:{gutter:10}},[o("a-col",{attrs:{md:19}},[o("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[o("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.Keyword,callback:function(e){t.$set(t.formSearch,"Keyword",e)},expression:"formSearch.Keyword"}})],1)],1),o("a-col",{attrs:{md:5}},[o("a-form-item",[o("a-button",{attrs:{type:"primary"},on:{click:t.init}},[t._v("查询")])],1)],1)],1)],1),o("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"ComProductLineGuid"},scopedSlots:t._u([{key:"action",fn:function(e,a){return o("span",{staticStyle:{"text-align":"right"}},[o("a",{on:{click:function(e){return t.claim(a)}}},[t._v("认领")])])}}])},[o("template",{slot:"footer"},[o("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1)},r=[],i=o("b775"),n=[{title:"公司名称",dataIndex:"ComName",width:400},{title:"产品线",dataIndex:"ProductLineText"},{title:"操作",scopedSlots:{customRender:"action"}}],c={props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,claimdetail:{}},columns:n,dataSource:[],form:this.$form.createForm(this),AFormImportRules:{Amount:[{required:!0,message:"请输入"},{validator:this.checkAmount}]},formSearch:{Keyword:"",pageSize:5,current:1,total:0}}},watch:{show:function(t,e){var o=this;o.visible=t,t.show&&o.init()}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields()},init:function(){this.pagechange(1)},pagechange:function(t){var e=this;e.formSearch.current=t,e.$loading.open(),i["a"].post("/api/Crm/ProductLine/ServiceList",e.formSearch).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},claim:function(t){var e=this,o=this;this.form.validateFields(function(a,r){if(!a){var n=r;n.RecPIGuid=e.visible.claimdetail.RecPIGuid,n.ComProductLineGuid=t.ComProductLineGuid,i["a"].post("/api/Receipt/PublishItem/Pick",n).then(function(t){var e=t;e.code>0?o.$message.error(e.msg):(o.onClose(),o.$message.success(e.msg))}).catch(function(t){console.log(t)})}})}}},s=c,l=o("2877"),u=Object(l["a"])(s,a,r,!1,null,null,null);e["default"]=u.exports}}]);