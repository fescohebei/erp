(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6200a5eb"],{"2c5e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:"匹配产品线",destroyOnClose:!0,visible:this.visible.show,width:1100,maskClosable:!1,footer:null},on:{cancel:t.onClose}},[a("a-row",{attrs:{gutter:30}},[a("a-col",{attrs:{span:24}},[a("a-row",{attrs:{gutter:5}},[a("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          户名:\n        ")]),a("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["户名"])+"\n        ")]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          开户行:\n        ")]),a("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["开户行"])+"\n        ")]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          账号:\n        ")]),a("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["账号"])+"\n        ")])],1),a("a-row",{attrs:{gutter:5}},[a("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          交易时间:\n        ")]),a("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["交易时间"])+"\n        ")]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          交易金额:\n        ")]),a("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["交易金额"])+"\n        ")]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          记账日期:\n        ")]),a("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["记账日期"])+"\n        ")])],1),a("a-row",{attrs:{gutter:5}},[a("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          摘要:\n        ")]),a("a-col",{attrs:{span:20}},[t._v("\n           "+t._s(t.visible.claimdetail["摘要"])+"\n        ")])],1)],1),a("a-col",{staticClass:"bright",attrs:{span:12}},[a("a-divider",{attrs:{orientation:"left"}},[t._v("公司查询")]),a("a-form",{attrs:{form:t.form}},[t.visible.ComName?t._e():a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:19}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{class:t.comNameInp,attrs:{placeholder:"请输入"},on:{change:t.changeComName},model:{value:t.formSearch.Keyword,callback:function(e){t.$set(t.formSearch,"Keyword",e)},expression:"formSearch.Keyword"}}),t.formSearch.Keyword?t._e():a("div",{staticClass:"ant-form-explain"},[t._v("请输入公司名称")])],1)],1),a("a-col",{attrs:{md:5}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:t.initPage}},[t._v("查询")])],1)],1)],1)],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"ComProductLineGuid",size:"middle"},scopedSlots:t._u([{key:"action",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.lookClaim(n)}}},[t._v("查看开票")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.claim(n,"line")}}},[t._v("认领")])],1)}},{key:"ProductLineText",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(t.visible.ComProductLine[n.ProductLine])+"\n        ")])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1),a("a-col",{attrs:{span:12}},[a("a-divider",{attrs:{orientation:"left"}},[t._v(t._s(t.comNameText)+"开票信息")]),a("a-table",{attrs:{columns:t.kpColumns,dataSource:t.kpDataSource,pagination:!1,rowKey:"InvApplyGuid",size:"middle"},scopedSlots:t._u([{key:"Status",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(t.InvApplyStatus[n.Status])+"\n        ")])}},{key:"InvoiceOpenType",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(t.InvoiceOpenType[n.InvoiceOpenType])+"\n        ")])}},{key:"InvoicePaymentType",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(t.InvoicePaymentType[n.InvoicePaymentType])+"\n        ")])}},{key:"action",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[30!=n.InvoicePaymentType?a("a",{on:{click:function(e){return t.claim(n,"invoice")}}},[t._v("认领")]):t._e()])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.kpformSearch.pageSize,total:t.kpformSearch.total,current:t.kpformSearch.current},on:{change:t.kpPagechange}})],1)],2)],1)],1)],1)},o=[],i=(a("ac6a"),a("b775")),c=[{title:"公司名称",dataIndex:"ComName",width:200},{title:"产品线",scopedSlots:{customRender:"ProductLineText"}},{title:"操作",scopedSlots:{customRender:"action"},width:140}],r=[{title:"状态",scopedSlots:{customRender:"Status"}},{title:"开票类型",scopedSlots:{customRender:"InvoiceOpenType"}},{title:"发票种类",dataIndex:"发票种类"},{title:"所属月份",dataIndex:"所属月份"},{title:"发票到款情况",scopedSlots:{customRender:"InvoicePaymentType"}},{title:"账单金额",dataIndex:"账单金额"},{title:"操作",scopedSlots:{customRender:"action"},width:80}],s={props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,claimdetail:{},ComProductLine:{},ComName:""},columns:c,kpColumns:r,dataSource:[],kpDataSource:[],form:this.$form.createForm(this),AFormImportRules:{Amount:[{required:!0,message:"请输入"},{validator:this.checkAmount}]},formSearch:{Keyword:"",pageSize:5,current:1,total:0},kpformSearch:{pageSize:5,current:1,total:0},InvApplyStatus:{},comNameText:"",comProductLineText:"",selected:{},comNameInp:"",InvoiceOpenType:{},InvoicePaymentType:{}}},watch:{show:function(t,e){var a=this;a.visible=t,console.log(a.visible),t.show&&a.init()}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields(),this.comNameText="",this.comProductLineText="",this.selected={},this.kpDataSource=[],this.formSearch.Keyword=""},init:function(){var t=this;t.formSearch.Keyword=t.visible.claimdetail["户名"],console.log(t.visible),i["a"].post("/api/Dim/Enum/GetEnum",{Names:["InvApplyStatus","InvoiceOpenType","InvoicePaymentType"]}).then(function(e){0===e.code&&(e.data.InvApplyStatus.forEach(function(e,a){t.InvApplyStatus[e.key]=e.text}),e.data.InvoicePaymentType.forEach(function(e,a){t.InvoicePaymentType[e.key]=e.text}),e.data.InvoiceOpenType.forEach(function(e,a){t.InvoiceOpenType[e.key]=e.text}))}).catch(function(e){t.$loading.close(),console.log(e)}),this.pagechange(1)},initPage:function(){this.pagechange(1)},pagechange:function(t){var e=this;e.formSearch.current=t,e.visible.ComName&&(e.formSearch.Keyword=this.visible.ComName),e.formSearch.Keyword?(e.comNameInp="",e.$loading.open(),i["a"].post("/api/Crm/ProductLine/ServiceList",e.formSearch).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})):e.comNameInp="comNameInpErr"},claim:function(t,e){var a=this,n=this;this.form.validateFields(function(o,c){if(!o){var r=c,s="";r.RecPIGuid=a.visible.claimdetail.RecPIGuid,r.ComProductLineGuid=t.ComProductLineGuid,"invoice"==e?(r.InvApplyGuid=t.InvApplyGuid,s='是否将该笔到款认领到"'+n.comNameText+'"的"'+t["所属月份"]+'"这笔借票申请上吗？'):s='是否将该笔到款认领到"'+n.comNameText+'"的"'+n.comProductLineText+'"该条产品线上吗？',a.$confirm({title:s,content:"",onOk:function(){i["a"].post("/api/Receipt/PublishItem/Pick",r).then(function(t){var e=t;e.code>0?n.$message.error(e.msg):(n.onClose(),n.$message.success(e.msg))}).catch(function(t){console.log(t)})},onCancel:function(){}})}})},lookClaim:function(t){var e=this;e.selected=t,e.comNameText=t.ComName,e.comProductLineText=e.visible.ComProductLine[t.ProductLine],e.kpformSearch.ComGuid=t.ComGuid,e.kpformSearch.ComProductLineGuid=t.ComProductLineGuid,this.kpPagechange(1)},kpPagerefresh:function(){this.kpPagechange(this.kpformSearch.current)},kpPagechange:function(t){var e=this;e.kpformSearch.current=t,e.$loading.open(),i["a"].post("/api/Invoice/Apply/ListByCom",e.kpformSearch).then(function(t){e.$loading.close(),0===t.code&&(e.kpDataSource=t.data.rows,e.kpformSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},changeComName:function(){this.formSearch.Keyword?this.comNameInp="":this.comNameInp="comNameInpErr"}}},l=s,m=(a("fffd"),a("2877")),u=Object(m["a"])(l,n,o,!1,null,"3f5fdf65",null);e["default"]=u.exports},f1a7:function(t,e,a){},fffd:function(t,e,a){"use strict";var n=a("f1a7"),o=a.n(n);o.a}}]);