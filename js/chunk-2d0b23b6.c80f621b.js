(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b23b6"],{"22dd":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("a-drawer",{attrs:{message:"",visible:this.visible.show,width:450,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[i("template",{slot:"title"},[t._v("\n    到款详情\n    ")]),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("状态:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.RecPublishItemStatus[t.visible.claimdetail.RecPublishStatus]?t.visible.RecPublishItemStatus[t.visible.claimdetail.RecPublishStatus]:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("银行名称:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.Bank[t.visible.claimdetail.BankId]?t.visible.Bank[t.visible.claimdetail.BankId]:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("户名:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.claimdetail["户名"]?t.visible.claimdetail["户名"]:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("开户行:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.claimdetail["开户行"]?t.visible.claimdetail["开户行"]:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("账号:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.claimdetail["账号"]?t.visible.claimdetail["账号"]:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("交易金额:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.claimdetail["交易金额"]?t.visible.claimdetail["交易金额"]:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("开票情况:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.ReceiptInvoiceType[t.visible.claimdetail.ReceiptInvoiceType]?t.visible.ReceiptInvoiceType[t.visible.claimdetail.ReceiptInvoiceType]:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("交易时间:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.claimdetail["交易时间"]?t.visible.claimdetail["交易时间"]:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("记账日期:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.claimdetail["记账日期"]?t.visible.claimdetail["记账日期"]:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("摘要:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.claimdetail["摘要"]?t.visible.claimdetail["摘要"]:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("认领时间:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.claimdetail.ClaimTime?t.visible.claimdetail.ClaimTime:"无"))])],1),i("a-row",{staticStyle:{padding:"10px 0"},attrs:{gutter:24}})],2)},s=[],l={components:{},props:{show:{type:Object,default:{show:!1}},assetsdetail:{type:Object,default:function(){return{}}}},data:function(){return{visible:{show:!1,id:{},claimdetail:{},RecPublishItemStatus:{},UserArray:{},DeptArray:{},Bank:{},ReceiptInvoiceType:{}},drawer:{}}},created:function(){var t=this;this.$watch("show",function(a,i){t.visible=a,t.visible.show&&t.init()})},methods:{init:function(){},onClose:function(){this.visible.show=!1,this.claimdetail={}}}},c=l,r=i("2877"),n=Object(r["a"])(c,e,s,!1,null,null,null);a["default"]=n.exports}}]);