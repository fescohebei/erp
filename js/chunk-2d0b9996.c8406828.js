(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9996"],{3443:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a-drawer",{attrs:{message:"",visible:this.visible.show,width:450,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[a("template",{slot:"title"},[t._v("\n    联系人详情\n  ")]),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:24}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("联系人姓名:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.assetsdetail.Linkman?t.visible.assetsdetail.Linkman:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:24}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("手机号码:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.assetsdetail.Mobile?t.visible.assetsdetail.Mobile:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:24}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("联系电话:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.assetsdetail.Tel?t.visible.assetsdetail.Tel:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:24}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("产品线:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.assetsdetail.ProductLineText?t.visible.assetsdetail.ProductLineText:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:24}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("邮箱:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.assetsdetail.Email?t.visible.assetsdetail.Email:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:24}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("部门:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.assetsdetail.Department?t.visible.assetsdetail.Department:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:24}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("职能:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.assetsdetail.JobTitle?t.visible.assetsdetail.JobTitle:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:24}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("地址:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.assetsdetail.Address?t.visible.assetsdetail.Address:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:24}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("创建时间:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.assetsdetail.CreateDate?t.visible.assetsdetail.CreateDate:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:24}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("更新时间:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.assetsdetail.UpdateTime?t.visible.assetsdetail.UpdateTime:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:24}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("备注:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.visible.assetsdetail.Remarks?t.visible.assetsdetail.Remarks:"无"))])],1)],2)},i=[],l=(a("b775"),{components:{},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},assetsdetail:{}},assetsdetail:{}}},created:function(){var t=this;this.$watch("show",function(s,a){t.visible=s,t.visible.show&&t.init()})},methods:{init:function(){},onClose:function(){this.visible.show=!1,this.assetsdetail={},this.refresh&&this.refresh()}}}),r=l,n=a("2877"),o=Object(n["a"])(r,e,i,!1,null,null,null);s["default"]=o.exports}}]);