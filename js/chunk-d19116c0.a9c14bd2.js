(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d19116c0"],{"0bfb":function(t,a,e){"use strict";var i=e("cb7c");t.exports=function(){var t=i(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},3846:function(t,a,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"4f03":function(t,a,e){},"6b54":function(t,a,e){"use strict";e("3846");var i=e("cb7c"),n=e("0bfb"),o=e("9e1e"),s="toString",l=/./[s],r=function(t){e("2aba")(RegExp.prototype,s,t,!0)};e("79e5")(function(){return"/a/b"!=l.call({source:"a",flags:"b"})})?r(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?n.call(t):void 0)}):l.name!=s&&r(function(){return l.call(this)})},a8ca:function(t,a,e){"use strict";var i=e("4f03"),n=e.n(i);n.a},ef50:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-drawer",{attrs:{message:"",visible:this.visible.show,width:500,destroyOnClose:!0,closable:!1,maskClosable:!1},on:{close:t.onClose}},[e("template",{slot:"title"},[t._v("\n    回填票号\n  ")]),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("购买方名称:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.info["购方名称"]?t.invoicedetail.info["购方名称"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("购买方地址:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.info["购方地址"]?t.invoicedetail.info["购方地址"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("购买方开户行:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.info["购方开户行"]?t.invoicedetail.info["购方开户行"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("购买方银行账号:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.info["购方银行账号"]?t.invoicedetail.info["购方银行账号"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("购买方电话:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.info["购方电话"]?t.invoicedetail.info["购方电话"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("购买方税号:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.info["购方税号"]?t.invoicedetail.info["购方税号"]:"无"))])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("邮箱:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.info["邮箱"]?t.invoicedetail.info["邮箱"]:"无"))])],1),e("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("手机号:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.info["手机号"]?t.invoicedetail.info["手机号"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("申请人:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply.Userid?t.visible.UserArray[t.invoicedetail.apply.Userid]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("开票性质:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply.InvoiceType?t.visible.InvoiceType[t.invoicedetail.apply.InvoiceType]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("发票类型:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply["发票种类"]?t.invoicedetail.apply["发票种类"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("产品线:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply.ProductLine?t.visible.ComProductLine[t.invoicedetail.apply.ProductLine]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("开票小类:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply.ComProductLineSmall?t.visible.ComProductLineSmall[t.invoicedetail.apply.ComProductLineSmall]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("所属月份:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply["所属月份"]?t.invoicedetail.apply["所属月份"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("发起日期:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply.CreateDate?t.invoicedetail.apply.CreateDate:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("更新日期:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply.UpdateTime?t.invoicedetail.apply.UpdateTime:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("发票到款情况:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply.InvoicePaymentType?t.visible.InvoicePaymentType[t.invoicedetail.apply.InvoicePaymentType]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("账单金额:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply["账单金额"]?t.invoicedetail.apply["账单金额"]:"无")+"元")])],1),t._l(t.FormComponentValues.ApplyItems,function(a,i){return[e("a-row",{key:i,staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v(t._s(t.visible.InvApplyItemType[a.InvAIType])+":")]),e("a-col",{attrs:{span:17}},[t._v(t._s(a["金额"])+"元")])],1)]}),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("分摊:")]),e("a-col",{attrs:{span:17}},[!t.FormComponentValues.ApplyShares||t.FormComponentValues.ApplyShares.length<1?[t._v("无")]:t._l(t.FormComponentValues.ApplyShares,function(a,i){return[e("div",{key:i},[t._v("\n          "+t._s(t.visible.DeptArray[a.DepId])+" "+t._s(t.visible.UserArray[a.Userid])+" "+t._s(a.Percentage)+"%\n        ")])]})],2)],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("附件:")]),e("a-col",{attrs:{span:17}},[1==t.notInDingTalk?e("div",[e("a-tag",{attrs:{color:"red"}},[t._v("此浏览器不支持预览，请到钉钉应用界面预览附件！")])],1):t.Attachments||0!=t.Attachments.length?[t._l(t.Attachments,function(a,i){return[e("div",{key:i,staticClass:"fujian"},[t._v("\n            "+t._s(a.fileName)+" "),e("a-tag",{attrs:{color:"blue"},on:{click:function(e){return t.showFile(a)}}},[t._v("预览")])],1)]})]:e("div",[t._v("无")])],2)],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("备注:")]),e("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply.Remarks?t.invoicedetail.apply.Remarks:"无"))])],1),e("a-form",{attrs:{form:t.form,layout:"horizontal"}},[t._l(t.ApplyOpenItem,function(a,i){return[e("div",{key:i},[e("a-row",{attrs:{gutter:15,type:"flex",justify:"space-around",align:"middle"}},[e("a-col",{attrs:{span:21}},[e("a-divider",{staticStyle:{"font-size":"12px"},attrs:{dashed:"",orientation:"left"}},[t._v("发票("+t._s(i+1)+")")])],1),e("a-col",{attrs:{span:3}},[e("div",{staticClass:"dynamic-delete-button",staticStyle:{color:"#1890ff",cursor:"pointer","text-align":"right"},on:{click:function(){return t.remove(a.key)}}},[t._v("删除")])])],1),e("a-row",{attrs:{gutter:11}},[e("a-col",{attrs:{md:24}},[e("a-form-item",{attrs:{label:"发票代码",labelCol:{span:7},wrapperCol:{span:17}}},[e("a-input",{model:{value:a["发票代码"],callback:function(e){t.$set(a,"发票代码",e)},expression:"item['发票代码']"}})],1),e("a-form-item",{attrs:{label:"发票号码",labelCol:{span:7},wrapperCol:{span:17}}},[e("a-input",{model:{value:a["发票号码"],callback:function(e){t.$set(a,"发票号码",e)},expression:"item['发票号码']"}})],1)],1)],1)],1)]}),e("a-row",{attrs:{gutter:11}},[e("a-col",{attrs:{span:16,offset:7}},[e("a-button",{staticStyle:{width:"100%"},attrs:{type:"dashed"},on:{click:t.addInvoice}},[e("a-icon",{attrs:{type:"plus"}}),t._v(" 添加发票\n        ")],1)],1)],1),e("a-row",{staticStyle:{"margin-bottom":"50px"}})],2),e("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[e("a-button",{on:{click:t.onClose}},[t._v("取消")]),e("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:t.handleSubmit}},[t._v("提交")])],1)],2)},n=[],o=(e("ac6a"),e("6b54"),e("b775")),s=e("c32d"),l=e.n(s),r={components:{},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},invoicedetail:{},InvApplyItemType:{},UserArray:{},DeptArray:{},ComProductLine:{},ComProductLineSmall:{},InvoiceType:{},InvoiceOpenType:{},InvoicePaymentType:{}},FormComponentValues:{},invoicedetail:{apply:{},info:{}},formSearch:{pageSize:5,current:1,total:0,next:!0},form:this.$form.createForm(this),AFormImportRules:{iptInputReq:[{required:!0,message:"请输入"}]},drawer:{},modal:{outchange:{show:!1}},notInDingTalk:!1,SpaceId:"",SpaceIdNormal:"",SpaceIdApply:"",fescoMessage:{},ApplyOpenItem:[],Attachments:[]}},created:function(){var t=this;this.$watch("show",function(a,e){t.visible=a,console.log(t.visible),t.visible.show&&t.init()})},methods:{init:function(){var t=this;o["a"].post("/api/Bill/Invoice/Detail",{InvApplyGuid:t.visible.invoicedetail.InvApplyGuid}).then(function(a){0===a.code&&(t.invoicedetail=a.data,t.applytime=a.data.apply.CreateDate,a.data.apply.FormComponentValues&&(t.FormComponentValues=JSON.parse(a.data.apply.FormComponentValues)),a.data.apply.Attachments&&(t.Attachments=JSON.parse(a.data.apply.Attachments),console.log(t.Attachments)))}).catch(function(t){console.log(t)}),"notInDingTalk"==dd.env.platform&&(t.notInDingTalk=!0),o["a"].post("/api/DingTalk/GetCustomSpace",{Domain:"Bill"}).then(function(a){var e=a,i=e.data.Spaceid;0===e.code&&(t.SpaceIdNormal=i)}).catch(function(t){console.log(t)}),o["a"].get("/api/DingTalk/CspaceInfo").then(function(a){var e=a,i=e.data.SpaceId;0===e.code&&(t.SpaceIdApply=i)}).catch(function(t){console.log(t)}),o["a"].post("/api/DingTalk/GetSign",{}).then(function(a){t.fescoMessage=a.data,dd.config({agentId:a.data.AgentId,corpId:a.data.corpId,timeStamp:a.data.timeStamp,nonceStr:a.data.nonceStr,signature:a.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.FormComponentValues={},this.invoicedetail={apply:{},info:{}},this.ApplyOpenItem=[],this.refresh&&this.refresh()},showFile:function(t){var a=this,e="";dd.ready(function(){var i=l()("2021-02-09").format("YYYY-MM-DD"),n=l()(a.applytime).format("YYYY-MM-DD"),o=l()(n).diff(i,"day");console.log(o),e=o<0?a.SpaceIdApply:a.SpaceIdNormal,console.log(e),dd.biz.cspace.preview({corpId:a.fescoMessage.corpId,spaceId:e.toString(),fileId:t.fileId,fileName:t.fileName,fileSize:t.fileSize,fileType:t.fileType,onSuccess:function(){},onFail:function(t){}})})},handleSubmit:function(t){var a=this,e={};if(e.InvApplyGuid=a.invoicedetail.apply.InvApplyGuid,a.ApplyOpenItem.length>0){try{a.ApplyOpenItem.forEach(function(t,e){if(!t["发票代码"]||!t["发票号码"])throw a.$message.error("请将发票代码和发票号码填写完整！"),Error()})}catch(i){return}e.ApplyOpenItem=a.ApplyOpenItem,o["a"].post("/api/Bill/Invoice/Open",e).then(function(t){var e=t;e.code>0?a.$message.error(e.msg):(a.onClose(),a.$message.success(e.msg))}).catch(function(t){console.log(t)})}else a.$message.error("还没有填写发票号哦~")},addInvoice:function(){var t=0;this.ApplyOpenItem.forEach(function(a,e){t=a.key>t?a.key:t}),this.ApplyOpenItem.push({key:t+1,"发票代码":"","发票号码":""})},remove:function(t){this.ApplyOpenItem=this.ApplyOpenItem.filter(function(a){return a.key!=t})}}},c=r,p=(e("a8ca"),e("2877")),d=Object(p["a"])(c,i,n,!1,null,null,null);a["default"]=d.exports}}]);