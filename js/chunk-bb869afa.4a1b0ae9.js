(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb869afa"],{3561:function(t,e,n){"use strict";var a=n("8a96"),i=n.n(a);i.a},"8a96":function(t,e,n){},a187:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-modal",{attrs:{title:"客户到款余额认领",destroyOnClose:!0,visible:this.visible.show,width:1100,maskClosable:!1,footer:null},on:{cancel:t.onClose}},[n("div",[n("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"RecPIGuid"},scopedSlots:t._u([{key:"action",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[n("a",{on:{click:function(e){return t.claimproductline(a)}}},[t._v("认领")])])}},{key:"Status",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\r\n        "+t._s(t.RecPublishItemStatus[a.Status])+"\r\n    ")])}},{key:"BankId",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\r\n        "+t._s(t.Bank[a.BankId])+"\r\n    ")])}},{key:"khBank",fn:function(e,a){return[n("a-tooltip",[n("template",{slot:"title"},[t._v("\r\n          "+t._s(a["开户行"])+"\r\n        ")]),n("div",{staticClass:"remark-text ellipsis"},[t._v(t._s(a["开户行"]))])],2)]}},{key:"Remark",fn:function(e,a){return[n("a-tooltip",[n("template",{slot:"title"},[t._v("\r\n          "+t._s(a["摘要"])+"\r\n        ")]),n("div",{staticClass:"remark-text ellipsis"},[t._v(t._s(a["摘要"]))])],2)]}}])},[n("template",{slot:"footer"},[n("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1)])},i=[],o=(n("ac6a"),n("b775")),s=[{title:"公司名称",dataIndex:"ComName"},{title:"户名",dataIndex:"户名",key:"户名"},{title:"交易金额",dataIndex:"交易金额"},{title:"剩余金额",dataIndex:"金额",key:"金额"},{title:"记账日期",dataIndex:"记账日期",key:"记账日期"},{title:"摘要",dataIndex:"摘要",key:"摘要",scopedSlots:{customRender:"Remark"}},{title:"操作",scopedSlots:{customRender:"action"},width:100}],c={components:{},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,assetsdetail:{}},columns:s,dataSource:[],formSearch:{ComGuid:"",ComProductLineGuid:"",pageSize:5,current:1,total:0},drawer:{},ComProductLine:{}}},created:function(){var t=this;this.$watch("show",function(e,n){t.visible=e,console.log(t.visible),t.visible.show&&t.init()})},computed:{},methods:{init:function(){var t=this;o["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine"]}).then(function(e){0===e.code&&e.data.ComProductLine.forEach(function(e,n){t.ComProductLine[e.key]=e.text})}).catch(function(e){t.$loading.close(),console.log(e)}),this.pagechange(1)},onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.assetsdetail={}},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this;e.formSearch.current=t,e.formSearch.ComGuid=e.visible.assetsdetail.bill.ComGuid,e.$loading.open(),o["a"].post("/api/Bill/Receipt/Unmatched",e.formSearch).then(function(t){e.$loading.close(),0===t.code?(e.dataSource=t.data.rows,e.formSearch.total=t.count):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)})},claimproductline:function(t){var e=this,n={},a="";n.RecPISplitGuid=t.RecPISplitGuid,n.BillGuid=this.visible.assetsdetail.bill.BillGuid,a="是否将该笔到款余额认领到该账单上吗？",this.$confirm({title:a,content:"",onOk:function(){o["a"].post("/api/Bill/Receipt/PickFromCom",n).then(function(t){var n=t;n.code>0?e.$message.error(n.msg):(e.onClose(),e.$message.success(n.msg))}).catch(function(t){console.log(t)})},onCancel:function(){}})}}},r=c,l=(n("3561"),n("2877")),u=Object(l["a"])(r,a,i,!1,null,null,null);e["default"]=u.exports}}]);