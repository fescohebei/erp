(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5f36d58"],{"0bfb":function(t,a,e){"use strict";var i=e("cb7c");t.exports=function(){var t=i(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},"25bf":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-drawer",{attrs:{message:"",visible:this.visible.show,width:750,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[e("template",{slot:"title"},[t._v("\n    开票申请详情\n  ")]),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("购买方名称:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["购方名称"]?t.invoicedetail.info["购方名称"]:"无"))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("购买方地址:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["购方地址"]?t.invoicedetail.info["购方地址"]:"无"))])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("购买方开户行:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["购方开户行"]?t.invoicedetail.info["购方开户行"]:"无"))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("购买方银行账号:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["购方银行账号"]?t.invoicedetail.info["购方银行账号"]:"无"))])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("购买方电话:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["购方电话"]?t.invoicedetail.info["购方电话"]:"无"))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("购买方税号:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["购方税号"]?t.invoicedetail.info["购方税号"]:"无"))])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("邮箱:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["邮箱"]?t.invoicedetail.info["邮箱"]:"无"))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("手机号:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["手机号"]?t.invoicedetail.info["手机号"]:"无"))])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("开票性质:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply.InvoiceType?t.InvoiceType[t.invoicedetail.apply.InvoiceType]:"无"))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("开票类型:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply.InvoiceOpenType?t.visible.InvoiceOpenType[t.invoicedetail.apply.InvoiceOpenType]:"无"))])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("发票类型:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply["发票种类"]?t.invoicedetail.apply["发票种类"]:"无"))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("产品线:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply.ProductLine?t.ComProductLine[t.invoicedetail.apply.ProductLine]:"无"))])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("开票小类:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply.ComProductLineSmall?t.ComProductLineSmall[t.invoicedetail.apply.ComProductLineSmall]:"无"))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("所属月份:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply["所属月份"]?t.invoicedetail.apply["所属月份"]:"无"))])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("发起日期:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply.CreateDate?t.invoicedetail.apply.CreateDate:"无"))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("更新日期:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply.UpdateTime?t.invoicedetail.apply.UpdateTime:"无"))])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("发票到款情况:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply.InvoicePaymentType?t.visible.InvoicePaymentType[t.invoicedetail.apply.InvoicePaymentType]:"无"))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("账单金额:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply["账单金额"]?t.invoicedetail.apply["账单金额"]:"无")+"元")])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[t._l(t.FormComponentValues.ApplyItems,function(a,i){return[e("a-col",{key:i,staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v(t._s(t.visible.InvApplyItemType[a.InvAIType])+":")]),e("a-col",{attrs:{span:7}},[t._v(t._s(a["金额"])+"元")])]})],2),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("分摊:")]),e("a-col",{attrs:{span:17}},[!t.FormComponentValues.ApplyShares||t.FormComponentValues.ApplyShares.length<1?[t._v("无")]:t._e(),t._l(t.FormComponentValues.ApplyShares,function(a,i){return[e("div",{key:i},[t._v("\n          "+t._s(t.visible.DeptArray[a.DepId])+" "+t._s(t.visible.UserArray[a.Userid])+" "+t._s(a.Percentage)+"%\n        ")])]})],2)],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("附件:")]),e("a-col",{attrs:{span:17}},[1==t.notInDingTalk?e("div",[e("a-tag",{attrs:{color:"red"}},[t._v("此浏览器不支持预览，请到钉钉应用界面预览附件！")])],1):t.FormComponentValues["附件"]?[t._l(t.FormComponentValues["附件"],function(a,i){return[e("div",{key:i,staticClass:"fujian"},[t._v("\n            "+t._s(a.fileName)+" "),e("a-tag",{attrs:{color:"blue"},on:{click:function(e){return t.showFile(a)}}},[t._v("预览")])],1)]})]:e("div",[t._v("无")])],2)],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("备注:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply.Remarks?t.invoicedetail.apply.Remarks:"无"))])],1),t.invoicedetail.apply.Status>15?[e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("复核人:")]),e("a-col",{attrs:{span:7}},[t._v("\n        "+t._s(t.visible.UserArray[t.invoicedetail.apply["复核人"]]?t.visible.UserArray[t.invoicedetail.apply["复核人"]]:"无")+"\n      ")]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("复核时间:")]),e("a-col",{attrs:{span:7}},[t._v("\n        "+t._s(t.invoicedetail.apply["复核时间"]?t.invoicedetail.apply["复核时间"]:"无")+"\n      ")])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("复核备注:")]),e("a-col",{attrs:{span:17}},[t._v("\n        "+t._s(t.invoicedetail.apply.VerifyNote?t.invoicedetail.apply.VerifyNote:"无")+"\n      ")])],1)]:t._e(),30==t.invoicedetail.apply.Status?[e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("开票人:")]),e("a-col",{attrs:{span:7}},[t._v("\n        "+t._s(t.visible.UserArray[t.invoicedetail.apply["开票人"]]?t.visible.UserArray[t.invoicedetail.apply["开票人"]]:"无")+"\n      ")]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("开票时间:")]),e("a-col",{attrs:{span:7}},[t._v("\n        "+t._s(t.invoicedetail.apply["开票时间"]?t.invoicedetail.apply["开票时间"]:"无")+"\n      ")])],1),t._l(t.invoicedetail.invoice,function(a,i){return[e("div",{key:a.InvApplyInvGuid},[e("a-row",{attrs:{gutter:15,type:"flex",justify:"space-around",align:"middle"}},[e("a-col",{attrs:{span:24}},[e("a-divider",{staticStyle:{"font-size":"12px"},attrs:{dashed:"",orientation:"left"}},[t._v("发票("+t._s(i+1)+")")])],1)],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("发票代码:")]),e("a-col",{attrs:{span:7}},[t._v("\n          "+t._s(a["发票代码"]?a["发票代码"]:"无")+"\n        ")]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("发票号码:")]),e("a-col",{attrs:{span:7}},[t._v("\n          "+t._s(a["发票号码"]?a["发票号码"]:"无")+"\n        ")])],1)],1)]})]:t._e(),e("a-row",{staticStyle:{padding:"10px 0"},attrs:{gutter:24}}),e("a-row",{attrs:{gutter:15,type:"flex",justify:"space-around",align:"middle"}},[e("a-col",{attrs:{span:24}},[e("a-divider",{staticStyle:{"font-size":"12px"},attrs:{dashed:"",orientation:"left"}},[t._v("已匹配到款")])],1)],1),e("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"RecPIGuid",size:"small"},scopedSlots:t._u([{key:"BankId",fn:function(a,i){return e("span",{staticStyle:{"text-align":"right"}},[t._v("\n        "+t._s(t.Bank[i.BankId])+"\n    ")])}},{key:"ReceiptInvoiceType",fn:function(a,i){return e("span",{staticStyle:{"text-align":"right"}},[t._v("\n      "+t._s(t.ReceiptInvoiceType[i.ReceiptInvoiceType])+"\n    ")])}}])})],2)},n=[],o=(e("6b54"),e("ac6a"),e("b775")),l=(e("c32d"),[{title:"银行名称",scopedSlots:{customRender:"BankId"},key:"BankId"},{title:"户名",dataIndex:"户名",key:"户名",width:150},{title:"交易金额",dataIndex:"交易金额",key:"交易金额"},{title:"匹配金额",dataIndex:"匹配金额",align:"right"},{title:"开票情况",scopedSlots:{customRender:"ReceiptInvoiceType"},key:"ReceiptInvoiceType"},{title:"交易时间",dataIndex:"交易时间",key:"交易时间"}]),s={components:{},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},invoicedetail:{},InvApplyItemType:{},UserArray:{},DeptArray:{},InvoiceOpenType:{},InvoicePaymentType:{}},FormComponentValues:{},invoicedetail:{apply:{},info:{}},formSearch:{pageSize:5,current:1,total:0,next:!0},form:this.$form.createForm(this),drawer:{},modal:{outchange:{show:!1}},notInDingTalk:!1,SpaceId:"",fescoMessage:{},ComProductLine:{},ComProductLineSmall:{},InvoiceType:{},columns:l,dataSource:[],Bank:{},RecPublishItemStatus:{},ReceiptInvoiceType:{}}},created:function(){var t=this;this.$watch("show",function(a,e){t.visible=a,console.log(t.visible),t.visible.show&&t.init()})},methods:{init:function(){var t=this;o["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine","ComProductLineSmall","InvoiceType","Bank","ReceiptInvoiceType"]}).then(function(a){0===a.code&&(a.data.ComProductLine.forEach(function(a,e){t.ComProductLine[a.key]=a.text}),a.data.ComProductLineSmall.forEach(function(a,e){t.ComProductLineSmall[a.key]=a.text}),a.data.InvoiceType.forEach(function(a,e){t.InvoiceType[a.key]=a.text}),a.data.Bank.forEach(function(a,e){t.Bank[a.key]=a.text}),a.data.ReceiptInvoiceType.forEach(function(a,e){t.ReceiptInvoiceType[a.key]=a.text}),t.claimMatch())}).catch(function(t){console.log(t)}),o["a"].post("/api/Invoice/Apply/Detail",{InvApplyGuid:t.visible.invoicedetail.InvApplyGuid}).then(function(a){0===a.code&&(t.invoicedetail=a.data,a.data.apply.FormComponentValues&&(t.FormComponentValues=JSON.parse(a.data.apply.FormComponentValues)))}).catch(function(t){console.log(t)}),"notInDingTalk"==dd.env.platform&&(t.notInDingTalk=!0),o["a"].get("/api/DingTalk/CspaceInfo").then(function(a){var e=a,i=e.data.SpaceId;0===e.code&&(t.SpaceId=i),console.log(e)}).catch(function(t){console.log(t)}),o["a"].post("/api/DingTalk/GetSign",{}).then(function(a){t.fescoMessage=a.data,dd.config({agentId:a.data.AgentId,corpId:a.data.corpId,timeStamp:a.data.timeStamp,nonceStr:a.data.nonceStr,signature:a.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.FormComponentValues={},this.invoicedetail={apply:{},info:{}},this.refresh&&this.refresh()},showFile:function(t){var a=this;dd.ready(function(){dd.biz.cspace.preview({corpId:a.fescoMessage.corpId,spaceId:a.SpaceId.toString(),fileId:t.fileId,fileName:t.fileName,fileSize:t.fileSize,fileType:t.fileType,onSuccess:function(){},onFail:function(t){console.log(t)}})})},claimMatch:function(){var t=this;o["a"].post("/api/Receipt/PublishItem/ListByInvoice",{InvApplyGuid:t.visible.invoicedetail.InvApplyGuid}).then(function(a){0===a.code&&(t.dataSource=a.data.rows)}).catch(function(t){console.log(t)})}}},c=s,r=e("2877"),p=Object(r["a"])(c,i,n,!1,null,null,null);a["default"]=p.exports},3846:function(t,a,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"6b54":function(t,a,e){"use strict";e("3846");var i=e("cb7c"),n=e("0bfb"),o=e("9e1e"),l="toString",s=/./[l],c=function(t){e("2aba")(RegExp.prototype,l,t,!0)};e("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?c(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?n.call(t):void 0)}):s.name!=l&&c(function(){return s.call(this)})}}]);