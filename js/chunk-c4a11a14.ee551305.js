(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4a11a14","chunk-c1b53df0","chunk-2d0aef64"],{"0bfb":function(t,e,a){"use strict";var i=a("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"6b54":function(t,e,a){"use strict";a("3846");var i=a("cb7c"),n=a("0bfb"),o=a("9e1e"),l="toString",s=/./[l],c=function(t){a("2aba")(RegExp.prototype,l,t,!0)};a("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?c(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?n.call(t):void 0)}):s.name!=l&&c(function(){return s.call(this)})},af38:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{message:"",visible:this.visible.show,width:500,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[a("template",{slot:"title"},[t._v("\n    律师函工作详情\n  ")]),null==t.visible.detail?[a("div",{staticClass:"emptybox"},[a("a-icon",{staticClass:"empty",attrs:{type:"inbox"}}),a("br"),t._v("暂无数据\n    ")],1)]:[a("a-row",{attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("客服:")]),a("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.UserArray[t.visible.detail.Userid])+" ")])],1),a("a-row",{attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("客服操作时间:")]),a("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.detail.CreateDate)+" ")])],1),a("a-row",{attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("客服说明:")]),a("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.detail.Explain)+" ")])],1),a("a-row",{attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("客服附件:")]),a("a-col",{attrs:{span:18}},[1==t.notInDingTalk?a("div",[a("a-tag",{attrs:{color:"red"}},[t._v("此浏览器不支持预览，请到钉钉应用界面预览附件！")])],1):null==t.visible.detail.kfUpload?a("div",[t._v("无")]):[t._l(t.visible.detail.kfUpload,function(e,i){return[a("div",{key:i,staticClass:"fujian"},[t._v("\n                "+t._s(e.fileName)+" "),a("a-tag",{attrs:{color:"blue"},on:{click:function(a){return t.showFile(e)}}},[t._v("预览")])],1)]})]],2)],1),a("a-row",{attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("质控操作时间:")]),a("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.detail.FinishTime?t.visible.detail.FinishTime:"无")+" ")])],1),a("a-row",{attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("质控说明:")]),a("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.detail["质控情况说明"]?t.visible.detail["质控情况说明"]:"无")+" ")])],1),a("a-row",{attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("质控附件:")]),a("a-col",{attrs:{span:18}},[1==t.notInDingTalk?a("div",[a("a-tag",{attrs:{color:"red"}},[t._v("此浏览器不支持预览，请到钉钉应用界面预览附件！")])],1):null==t.visible.detail.zkUpload?a("div",[t._v("无")]):[t._l(t.visible.detail.zkUpload,function(e,i){return[a("div",{key:i,staticClass:"fujian"},[t._v("\n                "+t._s(e.fileName)+" "),a("a-tag",{attrs:{color:"blue"},on:{click:function(a){return t.showFile(e)}}},[t._v("预览")])],1)]})]],2)],1)]],2)},n=[],o=(a("6b54"),a("ac6a"),a("b775")),l=a("c32d"),s=a.n(l),c={components:{},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},detail:{kfUpload:[],zkUpload:[]},UserArray:{}},FormComponentValues:{},formSearch:{pageSize:5,current:1,total:0,next:!0},form:this.$form.createForm(this),drawer:{},modal:{outchange:{show:!1}},notInDingTalk:!1,SpaceId:"",SpaceIdNormal:"",SpaceIdApply:"",fescoMessage:{},ComProductLine:{},ComProductLineSmall:{},InvoiceType:{},Bank:{},RecPublishItemStatus:{},ReceiptInvoiceType:{},applytime:"",Attachments:[]}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,console.log(t.visible),t.visible.show&&t.init()})},methods:{init:function(){var t=this;null!=t.visible.detail&&(t.visible.detail.kfUpload=JSON.parse(t.visible.detail["附件"]),t.visible.detail.zkUpload=JSON.parse(t.visible.detail["质控附件"])),o["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine","ComProductLineSmall","InvoiceType","Bank","ReceiptInvoiceType"]}).then(function(e){0===e.code&&(e.data.ComProductLine.forEach(function(e,a){t.ComProductLine[e.key]=e.text}),e.data.ComProductLineSmall.forEach(function(e,a){t.ComProductLineSmall[e.key]=e.text}),e.data.InvoiceType.forEach(function(e,a){t.InvoiceType[e.key]=e.text}),e.data.Bank.forEach(function(e,a){t.Bank[e.key]=e.text}),e.data.ReceiptInvoiceType.forEach(function(e,a){t.ReceiptInvoiceType[e.key]=e.text}))}).catch(function(t){console.log(t)}),"notInDingTalk"==dd.env.platform&&(t.notInDingTalk=!0),o["a"].post("/api/DingTalk/GetCustomSpace",{Domain:"Bill"}).then(function(e){var a=e,i=a.data.Spaceid;0===a.code&&(t.SpaceIdNormal=i)}).catch(function(t){console.log(t)}),o["a"].get("/api/DingTalk/CspaceInfo").then(function(e){var a=e,i=a.data.SpaceId;0===a.code&&(t.SpaceIdApply=i)}).catch(function(t){console.log(t)}),o["a"].post("/api/DingTalk/GetSign",{}).then(function(e){t.fescoMessage=e.data,dd.config({agentId:e.data.AgentId,corpId:e.data.corpId,timeStamp:e.data.timeStamp,nonceStr:e.data.nonceStr,signature:e.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.FormComponentValues={},this.visible.detail={kfUpload:[],zkUpload:[]},this.refresh&&this.refresh()},showFile:function(t){var e=this,a="";dd.ready(function(){var i=s()("2021-02-09").format("YYYY-MM-DD"),n=s()(e.applytime).format("YYYY-MM-DD"),o=s()(n).diff(i,"day");console.log(o),a=o<0?e.SpaceIdApply:e.SpaceIdNormal,console.log(a),dd.biz.cspace.preview({corpId:e.fescoMessage.corpId,spaceId:a.toString(),fileId:t.fileId,fileName:t.fileName,fileSize:t.fileSize,fileType:t.fileType,onSuccess:function(){},onFail:function(t){}})})}}},r=c,d=(a("beb9"),a("2877")),p=Object(d["a"])(r,i,n,!1,null,null,null);e["default"]=p.exports},bdaa:function(t,e,a){},beb9:function(t,e,a){"use strict";var i=a("bdaa"),n=a.n(i);n.a}}]);