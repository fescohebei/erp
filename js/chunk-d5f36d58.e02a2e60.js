(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5f36d58"],{"0bfb":function(t,a,e){"use strict";var i=e("cb7c");t.exports=function(){var t=i(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},"25bf":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-drawer",{attrs:{message:"",visible:this.visible.show,width:750,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[e("template",{slot:"title"},[t._v("\n    开票申请详情\n  ")]),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("购买方名称:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["购方名称"]?t.invoicedetail.info["购方名称"]:"无"))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("购买方地址:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["购方地址"]?t.invoicedetail.info["购方地址"]:"无"))])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("购买方开户行:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["购方开户行"]?t.invoicedetail.info["购方开户行"]:"无"))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("购买方银行账号:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["购方银行账号"]?t.invoicedetail.info["购方银行账号"]:"无"))])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("购买方电话:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["购方电话"]?t.invoicedetail.info["购方电话"]:"无"))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("购买方税号:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["购方税号"]?t.invoicedetail.info["购方税号"]:"无"))])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("邮箱:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["邮箱"]?t.invoicedetail.info["邮箱"]:"无"))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("手机号:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["手机号"]?t.invoicedetail.info["手机号"]:"无"))])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("开票性质:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply.InvoiceType?t.InvoiceType[t.invoicedetail.apply.InvoiceType]:"无"))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("发票到款情况:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply.InvoicePaymentType?t.visible.InvoicePaymentType[t.invoicedetail.apply.InvoicePaymentType]:"无"))])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("发票类型:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply["发票种类"]?t.invoicedetail.apply["发票种类"]:"无"))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("产品线:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply.ProductLine?t.ComProductLine[t.invoicedetail.apply.ProductLine]:"无"))])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("开票小类:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply.ComProductLineSmall?t.ComProductLineSmall[t.invoicedetail.apply.ComProductLineSmall]:"无"))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("所属月份:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply["所属月份"]?t.invoicedetail.apply["所属月份"]:"无"))])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("发起日期:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply.CreateDate?t.invoicedetail.apply.CreateDate:"无"))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("更新日期:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply.UpdateTime?t.invoicedetail.apply.UpdateTime:"无"))])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("账单金额:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply["账单金额"]?t.invoicedetail.apply["账单金额"]:"0")+"元")])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("服务费:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply["服务费"]?t.invoicedetail.apply["服务费"]:"0")+"元")])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("社保:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply["社保"]?t.invoicedetail.apply["社保"]:"0")+"元")])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("公积金:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply["公积金"]?t.invoicedetail.apply["公积金"]:"0")+"元")])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("代发薪资:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply["代发薪资"]?t.invoicedetail.apply["代发薪资"]:"0")+"元")])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("商险:")]),e("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply["商险"]?t.invoicedetail.apply["商险"]:"0")+"元")])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("分摊:")]),e("a-col",{attrs:{span:17}},[!t.FormComponentValues.ApplyShares||t.FormComponentValues.ApplyShares.length<1?[t._v("无")]:t._e(),t._l(t.FormComponentValues.ApplyShares,function(a,i){return[e("div",{key:i},[t._v("\n          "+t._s(t.visible.DeptArray[a.DepId])+" "+t._s(t.visible.UserArray[a.Userid])+" "+t._s(a.Percentage)+"%\n        ")])]})],2)],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("附件:")]),e("a-col",{attrs:{span:17}},[1==t.notInDingTalk?e("div",[e("a-tag",{attrs:{color:"red"}},[t._v("此浏览器不支持预览，请到钉钉应用界面预览附件！")])],1):t.Attachments||0!=t.Attachments.length?[t._l(t.Attachments,function(a,i){return[e("div",{key:i,staticClass:"fujian"},[t._v("\n            "+t._s(a.fileName)+" "),e("a-tag",{attrs:{color:"blue"},on:{click:function(e){return t.showFile(a)}}},[t._v("预览")])],1)]})]:e("div",[t._v("无")])],2)],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("备注:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply.Remarks?t.invoicedetail.apply.Remarks:"无"))])],1),t.invoicedetail.apply.Status>15?[e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("复核人:")]),e("a-col",{attrs:{span:7}},[t._v("\n        "+t._s(t.visible.UserArray[t.invoicedetail.apply["复核人"]]?t.visible.UserArray[t.invoicedetail.apply["复核人"]]:"无")+"\n      ")]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("复核时间:")]),e("a-col",{attrs:{span:7}},[t._v("\n        "+t._s(t.invoicedetail.apply["复核时间"]?t.invoicedetail.apply["复核时间"]:"无")+"\n      ")])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("复核备注:")]),e("a-col",{attrs:{span:17}},[t._v("\n        "+t._s(t.invoicedetail.apply.VerifyNote?t.invoicedetail.apply.VerifyNote:"无")+"\n      ")])],1)]:t._e(),30==t.invoicedetail.apply.Status?[e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("开票人:")]),e("a-col",{attrs:{span:7}},[t._v("\n        "+t._s(t.visible.UserArray[t.invoicedetail.apply["开票人"]]?t.visible.UserArray[t.invoicedetail.apply["开票人"]]:"无")+"\n      ")]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("开票时间:")]),e("a-col",{attrs:{span:7}},[t._v("\n        "+t._s(t.invoicedetail.apply["开票时间"]?t.invoicedetail.apply["开票时间"]:"无")+"\n      ")])],1),e("a-row",{attrs:{gutter:15,type:"flex",justify:"space-around",align:"middle"}},[e("a-col",{attrs:{span:24}},[e("a-divider",{staticStyle:{"font-size":"12px"},attrs:{dashed:"",orientation:"left"}},[t._v("发票")])],1)],1),t._l(t.invoicedetail.invoice,function(a,i){return[e("div",{key:a.InvApplyInvGuid},[e("a-row",{staticStyle:{"line-height":"30px"},attrs:{gutter:11,type:"flex"}},[e("a-col",{attrs:{span:3}},[e("div",{staticStyle:{"text-align":"right","font-weight":"bold"}},[t._v("("+t._s(i+1)+"):")])]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:3}},[t._v("发票代码:")]),e("a-col",{attrs:{span:4}},[t._v("\n          "+t._s(a["发票代码"]?a["发票代码"]:"无")+"\n        ")]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:3}},[t._v("发票号码:")]),e("a-col",{attrs:{span:4}},[t._v("\n          "+t._s(a["发票号码"]?a["发票号码"]:"无")+"\n        ")])],1)],1)]})]:t._e()],2)},n=[],l=(e("6b54"),e("ac6a"),e("b775")),o=e("c32d"),s=e.n(o),c={components:{},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},invoicedetail:{},InvApplyItemType:{},UserArray:{},DeptArray:{},InvoiceOpenType:{},InvoicePaymentType:{}},FormComponentValues:{},invoicedetail:{apply:{},info:{}},formSearch:{pageSize:5,current:1,total:0,next:!0},form:this.$form.createForm(this),drawer:{},modal:{outchange:{show:!1}},notInDingTalk:!1,SpaceId:"",SpaceIdNormal:"",SpaceIdApply:"",fescoMessage:{},ComProductLine:{},ComProductLineSmall:{},InvoiceType:{},Bank:{},RecPublishItemStatus:{},ReceiptInvoiceType:{},applytime:"",Attachments:[]}},created:function(){var t=this;this.$watch("show",function(a,e){t.visible=a,console.log(t.visible),t.visible.show&&t.init()})},methods:{init:function(){var t=this;l["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine","ComProductLineSmall","InvoiceType","Bank","ReceiptInvoiceType"]}).then(function(a){0===a.code&&(a.data.ComProductLine.forEach(function(a,e){t.ComProductLine[a.key]=a.text}),a.data.ComProductLineSmall.forEach(function(a,e){t.ComProductLineSmall[a.key]=a.text}),a.data.InvoiceType.forEach(function(a,e){t.InvoiceType[a.key]=a.text}),a.data.Bank.forEach(function(a,e){t.Bank[a.key]=a.text}),a.data.ReceiptInvoiceType.forEach(function(a,e){t.ReceiptInvoiceType[a.key]=a.text}))}).catch(function(t){console.log(t)}),l["a"].post("/api/Bill/Invoice/Detail",{InvApplyGuid:t.visible.invoicedetail.InvApplyGuid}).then(function(a){0===a.code&&(t.invoicedetail=a.data,t.applytime=a.data.apply.CreateDate,a.data.apply.FormComponentValues&&(t.FormComponentValues=JSON.parse(a.data.apply.FormComponentValues)),a.data.apply.Attachments&&(t.Attachments=JSON.parse(a.data.apply.Attachments),console.log(t.Attachments)))}).catch(function(t){console.log(t)}),"notInDingTalk"==dd.env.platform&&(t.notInDingTalk=!0),l["a"].post("/api/DingTalk/GetCustomSpace",{Domain:"Bill"}).then(function(a){var e=a,i=e.data.Spaceid;0===e.code&&(t.SpaceIdNormal=i)}).catch(function(t){console.log(t)}),l["a"].get("/api/DingTalk/CspaceInfo").then(function(a){var e=a,i=e.data.SpaceId;0===e.code&&(t.SpaceIdApply=i)}).catch(function(t){console.log(t)}),l["a"].post("/api/DingTalk/GetSign",{}).then(function(a){t.fescoMessage=a.data,dd.config({agentId:a.data.AgentId,corpId:a.data.corpId,timeStamp:a.data.timeStamp,nonceStr:a.data.nonceStr,signature:a.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.FormComponentValues={},this.invoicedetail={apply:{},info:{}},this.refresh&&this.refresh()},showFile:function(t){var a=this,e="";dd.ready(function(){var i=s()("2021-02-09").format("YYYY-MM-DD"),n=s()(a.applytime).format("YYYY-MM-DD"),l=s()(n).diff(i,"day");console.log(l),e=l<0?a.SpaceIdApply:a.SpaceIdNormal,console.log(e),dd.biz.cspace.preview({corpId:a.fescoMessage.corpId,spaceId:e.toString(),fileId:t.fileId,fileName:t.fileName,fileSize:t.fileSize,fileType:t.fileType,onSuccess:function(){},onFail:function(t){}})})}}},p=c,r=e("2877"),d=Object(r["a"])(p,i,n,!1,null,null,null);a["default"]=d.exports},3846:function(t,a,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"6b54":function(t,a,e){"use strict";e("3846");var i=e("cb7c"),n=e("0bfb"),l=e("9e1e"),o="toString",s=/./[o],c=function(t){e("2aba")(RegExp.prototype,o,t,!0)};e("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?c(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!l&&t instanceof RegExp?n.call(t):void 0)}):s.name!=o&&c(function(){return s.call(this)})}}]);