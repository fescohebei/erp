(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5f36d58"],{"0bfb":function(t,a,i){"use strict";var e=i("cb7c");t.exports=function(){var t=e(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},"25bf":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("a-drawer",{attrs:{message:"",visible:this.visible.show,width:500,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[i("template",{slot:"title"},[t._v("\n    开票申请详情\n  ")]),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("购买方名称:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.info["购方名称"]?t.invoicedetail.info["购方名称"]:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("购买方地址:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.info["购方地址"]?t.invoicedetail.info["购方地址"]:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("购买方开户行:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.info["购方开户行"]?t.invoicedetail.info["购方开户行"]:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("购买方银行账号:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.info["购方银行账号"]?t.invoicedetail.info["购方银行账号"]:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("购买方电话:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.info["购方电话"]?t.invoicedetail.info["购方电话"]:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("购买方税号:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.info["购方税号"]?t.invoicedetail.info["购方税号"]:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("发票类型:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply["发票种类"]?t.invoicedetail.apply["发票种类"]:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("产品线:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply.ProductLine?t.ComProductLine[t.invoicedetail.apply.ProductLine]:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("开票小类:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply.ComProductLineSmall?t.ComProductLineSmall[t.invoicedetail.apply.ComProductLineSmall]:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("所属月份:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply["所属月份"]?t.invoicedetail.apply["所属月份"]:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("发起日期:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply.CreateDate?t.invoicedetail.apply.CreateDate:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("更新日期:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply.UpdateTime?t.invoicedetail.apply.UpdateTime:"无"))])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("账单金额:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply["账单金额"]?t.invoicedetail.apply["账单金额"]:"无")+"元")])],1),t._l(t.FormComponentValues.ApplyItems,function(a,e){return[i("a-row",{key:e,staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v(t._s(t.visible.InvApplyItemType[a.InvAIType])+":")]),i("a-col",{attrs:{span:17}},[t._v(t._s(a["金额"])+"元")])],1)]}),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("分摊:")]),i("a-col",{attrs:{span:17}},[!t.FormComponentValues.ApplyShares||t.FormComponentValues.ApplyShares.length<1?[t._v("无")]:t._e(),t._l(t.FormComponentValues.ApplyShares,function(a,e){return[i("div",{key:e},[t._v("\n          "+t._s(t.visible.DeptArray[a.DepId])+" "+t._s(t.visible.UserArray[a.Userid])+" "+t._s(a.Percentage)+"%\n        ")])]})],2)],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("附件:")]),i("a-col",{attrs:{span:17}},[1==t.notInDingTalk?i("div",[i("a-tag",{attrs:{color:"red"}},[t._v("此浏览器不支持预览，请到钉钉应用界面预览附件！")])],1):t.FormComponentValues["附件"]?[t._l(t.FormComponentValues["附件"],function(a,e){return[i("div",{key:e,staticClass:"fujian"},[t._v("\n            "+t._s(a.fileName)+" "),i("a-tag",{attrs:{color:"blue"},on:{click:function(i){return t.showFile(a)}}},[t._v("预览")])],1)]})]:i("div",[t._v("无")])],2)],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("备注:")]),i("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply.Remarks?t.invoicedetail.apply.Remarks:"无"))])],1),t.invoicedetail.apply.Status>15?[i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("复核人:")]),i("a-col",{attrs:{span:17}},[t._v("\n        "+t._s(t.visible.UserArray[t.invoicedetail.apply["复核人"]]?t.visible.UserArray[t.invoicedetail.apply["复核人"]]:"无")+"\n      ")])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("复核时间:")]),i("a-col",{attrs:{span:17}},[t._v("\n        "+t._s(t.invoicedetail.apply["复核时间"]?t.invoicedetail.apply["复核时间"]:"无")+"\n      ")])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("复核备注:")]),i("a-col",{attrs:{span:17}},[t._v("\n        "+t._s(t.invoicedetail.apply.VerifyNote?t.invoicedetail.apply.VerifyNote:"无")+"\n      ")])],1)]:t._e(),30==t.invoicedetail.apply.Status?[i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("开票人:")]),i("a-col",{attrs:{span:17}},[t._v("\n        "+t._s(t.visible.UserArray[t.invoicedetail.apply["开票人"]]?t.visible.UserArray[t.invoicedetail.apply["开票人"]]:"无")+"\n      ")])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("开票时间:")]),i("a-col",{attrs:{span:17}},[t._v("\n        "+t._s(t.invoicedetail.apply["开票时间"]?t.invoicedetail.apply["开票时间"]:"无")+"\n      ")])],1),t._l(t.invoicedetail.invoice,function(a,e){return[i("div",{key:a.InvApplyInvGuid},[i("a-row",{attrs:{gutter:15,type:"flex",justify:"space-around",align:"middle"}},[i("a-col",{attrs:{span:24}},[i("a-divider",{staticStyle:{"font-size":"12px"},attrs:{dashed:"",orientation:"left"}},[t._v("发票("+t._s(e+1)+")")])],1)],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("发票代码:")]),i("a-col",{attrs:{span:17}},[t._v("\n          "+t._s(a["发票代码"]?a["发票代码"]:"无")+"\n        ")])],1),i("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("发票号码:")]),i("a-col",{attrs:{span:17}},[t._v("\n          "+t._s(a["发票号码"]?a["发票号码"]:"无")+"\n        ")])],1)],1)]})]:t._e(),i("a-row",{staticStyle:{padding:"10px 0"},attrs:{gutter:24}})],2)},n=[],s=(i("6b54"),i("ac6a"),i("b775")),o=(i("c32d"),{components:{},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},invoicedetail:{},InvApplyItemType:{},UserArray:{},DeptArray:{}},FormComponentValues:{},invoicedetail:{apply:{},info:{}},formSearch:{pageSize:5,current:1,total:0,next:!0},form:this.$form.createForm(this),drawer:{},modal:{outchange:{show:!1}},notInDingTalk:!1,SpaceId:"",fescoMessage:{},ComProductLine:{},ComProductLineSmall:{}}},created:function(){var t=this;this.$watch("show",function(a,i){t.visible=a,console.log(t.visible),t.visible.show&&t.init()})},methods:{init:function(){var t=this;s["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine","ComProductLineSmall"]}).then(function(a){0===a.code&&(a.data.ComProductLine.forEach(function(a,i){t.ComProductLine[a.key]=a.text}),a.data.ComProductLineSmall.forEach(function(a,i){t.ComProductLineSmall[a.key]=a.text}))}).catch(function(t){console.log(t)}),s["a"].post("/api/Invoice/Apply/Detail",{InvApplyGuid:t.visible.invoicedetail.InvApplyGuid}).then(function(a){0===a.code&&(t.invoicedetail=a.data,a.data.apply.FormComponentValues&&(t.FormComponentValues=JSON.parse(a.data.apply.FormComponentValues)))}).catch(function(t){console.log(t)}),"notInDingTalk"==dd.env.platform&&(t.notInDingTalk=!0),s["a"].get("/api/DingTalk/CspaceInfo").then(function(a){var i=a,e=i.data.SpaceId;0===i.code&&(t.SpaceId=e),console.log(i)}).catch(function(t){console.log(t)}),s["a"].post("/api/DingTalk/GetSign",{}).then(function(a){t.fescoMessage=a.data,dd.config({agentId:a.data.AgentId,corpId:a.data.corpId,timeStamp:a.data.timeStamp,nonceStr:a.data.nonceStr,signature:a.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.FormComponentValues={},this.invoicedetail={apply:{},info:{}},this.refresh&&this.refresh()},showFile:function(t){var a=this;dd.ready(function(){dd.biz.cspace.preview({corpId:a.fescoMessage.corpId,spaceId:a.SpaceId.toString(),fileId:t.fileId,fileName:t.fileName,fileSize:t.fileSize,fileType:t.fileType,onSuccess:function(){},onFail:function(t){console.log(t)}})})}}}),l=o,r=i("2877"),c=Object(r["a"])(l,e,n,!1,null,null,null);a["default"]=c.exports},3846:function(t,a,i){i("9e1e")&&"g"!=/./g.flags&&i("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:i("0bfb")})},"6b54":function(t,a,i){"use strict";i("3846");var e=i("cb7c"),n=i("0bfb"),s=i("9e1e"),o="toString",l=/./[o],r=function(t){i("2aba")(RegExp.prototype,o,t,!0)};i("79e5")(function(){return"/a/b"!=l.call({source:"a",flags:"b"})})?r(function(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?n.call(t):void 0)}):l.name!=o&&r(function(){return l.call(this)})}}]);