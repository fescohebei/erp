(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c15df6a6","chunk-b40dad8a","chunk-b40dad8a","chunk-6574e546","chunk-6574e546","chunk-d5f36d58"],{"02f4":function(t,e,n){var a=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var o,c,r=String(i(e)),s=a(n),l=r.length;return s<0||s>=l?t?"":void 0:(o=r.charCodeAt(s),o<55296||o>56319||s+1===l||(c=r.charCodeAt(s+1))<56320||c>57343?t?r.charAt(s):o:t?r.slice(s,s+2):c-56320+(o-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var a=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var a=n("cb7c");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"1af6":function(t,e,n){var a=n("63b6");a(a.S,"Array",{isArray:n("9003")})},"1f7d":function(t,e,n){},"214f":function(t,e,n){"use strict";n("b0c5");var a=n("2aba"),i=n("32e9"),o=n("79e5"),c=n("be13"),r=n("2b4c"),s=n("520a"),l=r("species"),p=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),u=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=r(t),v=!o(function(){var e={};return e[d]=function(){return 7},7!=""[t](e)}),y=v?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[d](""),!e}):void 0;if(!v||!y||"replace"===t&&!p||"split"===t&&!u){var f=/./[d],m=n(c,d,""[t],function(t,e,n,a,i){return e.exec===s?v&&!i?{done:!0,value:f.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),g=m[0],h=m[1];a(String.prototype,t,g),i(RegExp.prototype,d,2==e?function(t,e){return h.call(t,this,e)}:function(t){return h.call(t,this)})}}},"25bf":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-drawer",{attrs:{message:"",visible:this.visible.show,width:750,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[n("template",{slot:"title"},[t._v("\n    开票申请详情\n  ")]),n("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("购买方名称:")]),n("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["购方名称"]?t.invoicedetail.info["购方名称"]:"无"))]),n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("购买方地址:")]),n("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["购方地址"]?t.invoicedetail.info["购方地址"]:"无"))])],1),n("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("购买方开户行:")]),n("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["购方开户行"]?t.invoicedetail.info["购方开户行"]:"无"))]),n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("购买方银行账号:")]),n("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["购方银行账号"]?t.invoicedetail.info["购方银行账号"]:"无"))])],1),n("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("购买方电话:")]),n("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["购方电话"]?t.invoicedetail.info["购方电话"]:"无"))]),n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("购买方税号:")]),n("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["购方税号"]?t.invoicedetail.info["购方税号"]:"无"))])],1),n("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("邮箱:")]),n("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["邮箱"]?t.invoicedetail.info["邮箱"]:"无"))]),n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("手机号:")]),n("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.info["手机号"]?t.invoicedetail.info["手机号"]:"无"))])],1),n("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("开票性质:")]),n("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply.InvoiceType?t.InvoiceType[t.invoicedetail.apply.InvoiceType]:"无"))]),n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("开票类型:")]),n("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply.InvoiceOpenType?t.visible.InvoiceOpenType[t.invoicedetail.apply.InvoiceOpenType]:"无"))])],1),n("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("发票类型:")]),n("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply["发票种类"]?t.invoicedetail.apply["发票种类"]:"无"))]),n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("产品线:")]),n("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply.ProductLine?t.ComProductLine[t.invoicedetail.apply.ProductLine]:"无"))])],1),n("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("开票小类:")]),n("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply.ComProductLineSmall?t.ComProductLineSmall[t.invoicedetail.apply.ComProductLineSmall]:"无"))]),n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("所属月份:")]),n("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply["所属月份"]?t.invoicedetail.apply["所属月份"]:"无"))])],1),n("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("发起日期:")]),n("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply.CreateDate?t.invoicedetail.apply.CreateDate:"无"))]),n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("更新日期:")]),n("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply.UpdateTime?t.invoicedetail.apply.UpdateTime:"无"))])],1),n("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("发票到款情况:")]),n("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply.InvoicePaymentType?t.visible.InvoicePaymentType[t.invoicedetail.apply.InvoicePaymentType]:"无"))]),n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("账单金额:")]),n("a-col",{attrs:{span:7}},[t._v(t._s(t.invoicedetail.apply["账单金额"]?t.invoicedetail.apply["账单金额"]:"无")+"元")])],1),n("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[t._l(t.FormComponentValues.ApplyItems,function(e,a){return[n("div",{key:a},[n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v(t._s(t.visible.InvApplyItemType[e.InvAIType])+":")]),n("a-col",{attrs:{span:7}},[t._v(t._s(e["金额"])+"元")])],1)]})],2),n("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("分摊:")]),n("a-col",{attrs:{span:17}},[!t.FormComponentValues.ApplyShares||t.FormComponentValues.ApplyShares.length<1?[t._v("无")]:t._e(),t._l(t.FormComponentValues.ApplyShares,function(e,a){return[n("div",{key:a},[t._v("\n          "+t._s(t.visible.DeptArray[e.DepId])+" "+t._s(t.visible.UserArray[e.Userid])+" "+t._s(e.Percentage)+"%\n        ")])]})],2)],1),n("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("附件:")]),n("a-col",{attrs:{span:17}},[1==t.notInDingTalk?n("div",[n("a-tag",{attrs:{color:"red"}},[t._v("此浏览器不支持预览，请到钉钉应用界面预览附件！")])],1):t.FormComponentValues["附件"]?[t._l(t.FormComponentValues["附件"],function(e,a){return[n("div",{key:a,staticClass:"fujian"},[t._v("\n            "+t._s(e.fileName)+" "),n("a-tag",{attrs:{color:"blue"},on:{click:function(n){return t.showFile(e)}}},[t._v("预览")])],1)]})]:n("div",[t._v("无")])],2)],1),n("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("备注:")]),n("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply.Remarks?t.invoicedetail.apply.Remarks:"无"))])],1),t.invoicedetail.apply.Status>15?[n("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("复核人:")]),n("a-col",{attrs:{span:7}},[t._v("\n        "+t._s(t.visible.UserArray[t.invoicedetail.apply["复核人"]]?t.visible.UserArray[t.invoicedetail.apply["复核人"]]:"无")+"\n      ")]),n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("复核时间:")]),n("a-col",{attrs:{span:7}},[t._v("\n        "+t._s(t.invoicedetail.apply["复核时间"]?t.invoicedetail.apply["复核时间"]:"无")+"\n      ")])],1),n("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("复核备注:")]),n("a-col",{attrs:{span:17}},[t._v("\n        "+t._s(t.invoicedetail.apply.VerifyNote?t.invoicedetail.apply.VerifyNote:"无")+"\n      ")])],1)]:t._e(),30==t.invoicedetail.apply.Status?[n("a-row",{staticStyle:{padding:"4px 0"},attrs:{gutter:11}},[n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("开票人:")]),n("a-col",{attrs:{span:7}},[t._v("\n        "+t._s(t.visible.UserArray[t.invoicedetail.apply["开票人"]]?t.visible.UserArray[t.invoicedetail.apply["开票人"]]:"无")+"\n      ")]),n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("开票时间:")]),n("a-col",{attrs:{span:7}},[t._v("\n        "+t._s(t.invoicedetail.apply["开票时间"]?t.invoicedetail.apply["开票时间"]:"无")+"\n      ")])],1),n("a-row",{attrs:{gutter:15,type:"flex",justify:"space-around",align:"middle"}},[n("a-col",{attrs:{span:24}},[n("a-divider",{staticStyle:{"font-size":"12px"},attrs:{dashed:"",orientation:"left"}},[t._v("发票")])],1)],1),t._l(t.invoicedetail.invoice,function(e,a){return[n("div",{key:e.InvApplyInvGuid},[n("a-row",{staticStyle:{"line-height":"30px"},attrs:{gutter:11,type:"flex"}},[n("a-col",{attrs:{span:3}},[n("div",{staticStyle:{"text-align":"right","font-weight":"bold"}},[t._v("("+t._s(a+1)+"):")])]),n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:3}},[t._v("发票代码:")]),n("a-col",{attrs:{span:4}},[t._v("\n          "+t._s(e["发票代码"]?e["发票代码"]:"无")+"\n        ")]),n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:3}},[t._v("发票号码:")]),n("a-col",{attrs:{span:4}},[t._v("\n          "+t._s(e["发票号码"]?e["发票号码"]:"无")+"\n        ")])],1)],1)]})]:t._e(),n("a-row",{attrs:{gutter:15,type:"flex",justify:"space-around",align:"middle"}},[n("a-col",{attrs:{span:24}},[n("a-divider",{staticStyle:{"font-size":"12px"},attrs:{dashed:"",orientation:"left"}},[t._v("已匹配到款")])],1)],1),n("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"RecPIGuid",size:"small"},scopedSlots:t._u([{key:"BankId",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\n        "+t._s(t.Bank[a.BankId])+"\n    ")])}},{key:"ReceiptInvoiceType",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\n      "+t._s(t.ReceiptInvoiceType[a.ReceiptInvoiceType])+"\n    ")])}}])})],2)},i=[],o=(n("6b54"),n("ac6a"),n("b775")),c=n("c32d"),r=n.n(c),s=[{title:"银行名称",scopedSlots:{customRender:"BankId"},key:"BankId"},{title:"户名",dataIndex:"户名",key:"户名",width:150},{title:"交易金额",dataIndex:"交易金额",key:"交易金额"},{title:"匹配金额",dataIndex:"匹配金额",align:"right"},{title:"开票情况",scopedSlots:{customRender:"ReceiptInvoiceType"},key:"ReceiptInvoiceType"},{title:"交易时间",dataIndex:"交易时间",key:"交易时间"}],l={components:{},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},invoicedetail:{},InvApplyItemType:{},UserArray:{},DeptArray:{},InvoiceOpenType:{},InvoicePaymentType:{}},FormComponentValues:{},invoicedetail:{apply:{},info:{}},formSearch:{pageSize:5,current:1,total:0,next:!0},form:this.$form.createForm(this),drawer:{},modal:{outchange:{show:!1}},notInDingTalk:!1,SpaceId:"",SpaceIdNormal:"",SpaceIdApply:"",fescoMessage:{},ComProductLine:{},ComProductLineSmall:{},InvoiceType:{},columns:s,dataSource:[],Bank:{},RecPublishItemStatus:{},ReceiptInvoiceType:{},applytime:""}},created:function(){var t=this;this.$watch("show",function(e,n){t.visible=e,console.log(t.visible),t.visible.show&&t.init()})},methods:{init:function(){var t=this;o["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine","ComProductLineSmall","InvoiceType","Bank","ReceiptInvoiceType"]}).then(function(e){0===e.code&&(e.data.ComProductLine.forEach(function(e,n){t.ComProductLine[e.key]=e.text}),e.data.ComProductLineSmall.forEach(function(e,n){t.ComProductLineSmall[e.key]=e.text}),e.data.InvoiceType.forEach(function(e,n){t.InvoiceType[e.key]=e.text}),e.data.Bank.forEach(function(e,n){t.Bank[e.key]=e.text}),e.data.ReceiptInvoiceType.forEach(function(e,n){t.ReceiptInvoiceType[e.key]=e.text}),t.claimMatch())}).catch(function(t){console.log(t)}),o["a"].post("/api/Invoice/Apply/Detail",{InvApplyGuid:t.visible.invoicedetail.InvApplyGuid}).then(function(e){0===e.code&&(t.invoicedetail=e.data,t.applytime=e.data.apply.CreateDate,e.data.apply.FormComponentValues&&(t.FormComponentValues=JSON.parse(e.data.apply.FormComponentValues)))}).catch(function(t){console.log(t)}),"notInDingTalk"==dd.env.platform&&(t.notInDingTalk=!0),o["a"].post("/api/DingTalk/GetCustomSpace",{Domain:"Bill"}).then(function(e){var n=e,a=n.data.Spaceid;0===n.code&&(t.SpaceIdNormal=a)}).catch(function(t){console.log(t)}),o["a"].get("/api/DingTalk/CspaceInfo").then(function(e){var n=e,a=n.data.SpaceId;0===n.code&&(t.SpaceIdApply=a)}).catch(function(t){console.log(t)}),o["a"].post("/api/DingTalk/GetSign",{}).then(function(e){t.fescoMessage=e.data,dd.config({agentId:e.data.AgentId,corpId:e.data.corpId,timeStamp:e.data.timeStamp,nonceStr:e.data.nonceStr,signature:e.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.FormComponentValues={},this.invoicedetail={apply:{},info:{}},this.refresh&&this.refresh()},showFile:function(t){var e=this,n="";dd.ready(function(){var a=r()("2021-02-09").format("YYYY-MM-DD"),i=r()(e.applytime).diff(a,"day");n=i<0?e.SpaceIdApply:e.SpaceIdNormal,console.log(n),dd.biz.cspace.preview({corpId:e.fescoMessage.corpId,spaceId:n.toString(),fileId:t.fileId,fileName:t.fileName,fileSize:t.fileSize,fileType:t.fileType,onSuccess:function(){},onFail:function(t){}})})},claimMatch:function(){var t=this;o["a"].post("/api/Receipt/PublishItem/ListByInvoice",{InvApplyGuid:t.visible.invoicedetail.InvApplyGuid}).then(function(e){0===e.code&&(t.dataSource=e.data.rows)}).catch(function(t){console.log(t)})}}},p=l,u=n("2877"),d=Object(u["a"])(p,a,i,!1,null,null,null);e["default"]=d.exports},"28a5":function(t,e,n){"use strict";var a=n("aae3"),i=n("cb7c"),o=n("ebd6"),c=n("0390"),r=n("9def"),s=n("5f1b"),l=n("520a"),p=n("79e5"),u=Math.min,d=[].push,v="split",y="length",f="lastIndex",m=4294967295,g=!p(function(){RegExp(m,"y")});n("214f")("split",2,function(t,e,n,p){var h;return h="c"=="abbc"[v](/(b)*/)[1]||4!="test"[v](/(?:)/,-1)[y]||2!="ab"[v](/(?:ab)*/)[y]||4!="."[v](/(.?)(.?)/)[y]||"."[v](/()()/)[y]>1||""[v](/.?/)[y]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!a(t))return n.call(i,t,e);var o,c,r,s=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),u=0,v=void 0===e?m:e>>>0,g=new RegExp(t.source,p+"g");while(o=l.call(g,i)){if(c=g[f],c>u&&(s.push(i.slice(u,o.index)),o[y]>1&&o.index<i[y]&&d.apply(s,o.slice(1)),r=o[0][y],u=c,s[y]>=v))break;g[f]===o.index&&g[f]++}return u===i[y]?!r&&g.test("")||s.push(""):s.push(i.slice(u)),s[y]>v?s.slice(0,v):s}:"0"[v](void 0,0)[y]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,a){var i=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,i,a):h.call(String(i),n,a)},function(t,e){var a=p(h,t,this,e,h!==n);if(a.done)return a.value;var l=i(t),d=String(this),v=o(l,RegExp),y=l.unicode,f=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(g?"y":"g"),S=new v(g?l:"^(?:"+l.source+")",f),I=void 0===e?m:e>>>0;if(0===I)return[];if(0===d.length)return null===s(S,d)?[d]:[];var _=0,x=0,b=[];while(x<d.length){S.lastIndex=g?x:0;var A,C=s(S,g?d:d.slice(x));if(null===C||(A=u(r(S.lastIndex+(g?0:x)),d.length))===_)x=c(d,x,y);else{if(b.push(d.slice(_,x)),b.length===I)return b;for(var k=1;k<=C.length-1;k++)if(b.push(C[k]),b.length===I)return b;x=_=A}}return b.push(d.slice(_)),b}]})},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"520a":function(t,e,n){"use strict";var a=n("0bfb"),i=RegExp.prototype.exec,o=String.prototype.replace,c=i,r="lastIndex",s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[r]||0!==e[r]}(),l=void 0!==/()??/.exec("")[1],p=s||l;p&&(c=function(t){var e,n,c,p,u=this;return l&&(n=new RegExp("^"+u.source+"$(?!\\s)",a.call(u))),s&&(e=u[r]),c=i.call(u,t),s&&c&&(u[r]=u.global?c.index+c[0].length:e),l&&c&&c.length>1&&o.call(c[0],n,function(){for(p=1;p<arguments.length-2;p++)void 0===arguments[p]&&(c[p]=void 0)}),c}),t.exports=c},"5f1b":function(t,e,n){"use strict";var a=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"61f7":function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"c",function(){return c});n("28a5");function a(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)}function i(t){var e=!0;if((e&&!t||!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(t))&&(e=!1),e&&18==t.length){for(var n=t.split(""),a=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],i=[1,0,"X",9,8,7,6,5,4,3,2],o=0,c=0,r=0,s=0;s<17;s++)c=n[s],r=a[s],o+=c*r;i[o%11]!=n[17]&&(e=!1)}return e}function o(t){var e=/^1[3|4|5|6|7|8|9][0-9]\d{8}$/;return e.test(t)}function c(t){var e=/^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;return e.test(t)}},"6b54":function(t,e,n){"use strict";n("3846");var a=n("cb7c"),i=n("0bfb"),o=n("9e1e"),c="toString",r=/./[c],s=function(t){n("2aba")(RegExp.prototype,c,t,!0)};n("79e5")(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?s(function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):r.name!=c&&s(function(){return r.call(this)})},"6cbd":function(t,e,n){"use strict";var a=n("1f7d"),i=n.n(a);i.a},"75fc":function(t,e,n){"use strict";var a=n("a745"),i=n.n(a);function o(t){if(i()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var c=n("774e"),r=n.n(c),s=n("c8bb"),l=n.n(s);function p(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r()(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){return o(t)||p(t)||u()}n.d(e,"a",function(){return d})},"774e":function(t,e,n){t.exports=n("d2d5")},"9d2d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout",[n("a-layout-content",[n("a-card",{attrs:{bordered:!1}},[n("a-form",{attrs:{form:t.form,layout:"horizontal"}},[n("div",{class:t.advanced?null:"fold"},[n("a-row",{attrs:{gutter:10}},[n("a-col",{attrs:{xs:8,sm:8,md:6}},[n("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[n("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.Keyword,callback:function(e){t.$set(t.formSearch,"Keyword",e)},expression:"formSearch.Keyword"}})],1)],1),n("a-col",{attrs:{xs:6,sm:6,md:3}},[n("a-form-item",[n("a-select",{model:{value:t.formSearch.InvApplyStatus,callback:function(e){t.$set(t.formSearch,"InvApplyStatus",e)},expression:"formSearch.InvApplyStatus"}},[t._l(t.InvApplyStatusList,function(e){return n("a-select-option",{key:e.key},[t._v("\n                      "+t._s(e.text)+"\n                    ")])}),n("a-select-option",{attrs:{value:"0"}},[t._v("\n                      全部\n                    ")])],2)],1)],1),n("a-col",{attrs:{xs:8,sm:9,md:4,lg:4}},[n("a-form-item",[n("a-input",{staticClass:"moneyInp",attrs:{placeholder:"最小金额"},model:{value:t.formSearch.min,callback:function(e){t.$set(t.formSearch,"min",e)},expression:"formSearch.min"}}),n("span",{style:{display:"inline-block",width:"24px",textAlign:"center"}},[t._v(" - ")]),n("a-input",{staticClass:"moneyInp",attrs:{placeholder:"最大金额"},model:{value:t.formSearch.max,callback:function(e){t.$set(t.formSearch,"max",e)},expression:"formSearch.max"}})],1)],1),n("a-col",{attrs:{xs:3,sm:3,md:3}},[n("a-form-item",[n("a-button",{attrs:{type:"primary"},on:{click:t.init}},[t._v("查询")])],1)],1)],1)],1)]),n("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"InvApplyGuid"},scopedSlots:t._u([{key:"action",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[n("a-dropdown",[n("a",{staticClass:"ant-dropdown-link"},[t._v("\n              更多\n              "),n("a-icon",{attrs:{type:"down"}})],1),n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",{on:{click:function(e){return t.invoiceDetail(a)}}},[t._v("详情")]),10==a.InvoiceOpenType||15!=a.Status&&25!=a.Status?t._e():n("a-menu-item",{on:{click:function(e){return t.reApply(a)}}},[t._v("重新申请")]),10==a.Status?n("a-menu-item",{on:{click:function(e){return t.disApply(a)}}},[t._v("取消申请")]):t._e(),5==a.Status?n("a-menu-item",{on:{click:function(e){return t.modifyApply(a)}}},[t._v("修改")]):t._e(),30==a.Status&&30!=a.InvoicePaymentType?n("a-menu-item",{on:{click:function(e){return t.connectClaim(a)}}},[t._v("匹配回款")]):t._e()],1)],1)],1)}},{key:"Status",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\n            "+t._s(t.InvApplyStatus[a.Status])+"\n        ")])}},{key:"ProductLine",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\n            "+t._s(t.ComProductLine[a.ProductLine])+"\n        ")])}},{key:"ComProductLineSmall",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\n            "+t._s(a.ComProductLineSmall?t.ComProductLineSmall[a.ComProductLineSmall]:"")+"\n        ")])}},{key:"InvoiceOpenType",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(t.InvoiceOpenType[a.InvoiceOpenType])+"\n        ")])}},{key:"InvoicePaymentType",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(t.InvoicePaymentType[a.InvoicePaymentType])+"\n        ")])}}])},[n("template",{slot:"footer"},[n("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1)],1),n("a-modal",{attrs:{title:"匹配回款",destroyOnClose:!0,visible:t.showConnect,width:850,footer:null,maskClosable:!1},on:{cancel:t.onCloseConnect}},[n("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:3}},[t._v("开票性质:")]),n("a-col",{attrs:{span:5}},[t._v(t._s(t.connectRecord.InvoiceType?t.InvoiceType[t.connectRecord.InvoiceType]:"无"))]),n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:3}},[t._v("开票类型:")]),n("a-col",{attrs:{span:5}},[t._v(t._s(t.connectRecord.InvoiceOpenType?t.InvoiceOpenType[t.connectRecord.InvoiceOpenType]:"无"))]),n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:3}},[t._v("发票类型:")]),n("a-col",{attrs:{span:5}},[t._v(t._s(t.connectRecord["发票种类"]?t.connectRecord["发票种类"]:"无"))])],1),n("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:3}},[t._v("所属月份:")]),n("a-col",{attrs:{span:5}},[t._v(t._s(t.connectRecord["所属月份"]?t.connectRecord["所属月份"]:"无"))]),n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:3}},[t._v("发起日期:")]),n("a-col",{attrs:{span:5}},[t._v(t._s(t.connectRecord.CreateDate?t.connectRecord.CreateDate:"无"))]),n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:3}},[t._v("发票到款情况:")]),n("a-col",{attrs:{span:5}},[t._v(t._s(t.connectRecord.InvoicePaymentType?t.InvoicePaymentType[t.connectRecord.InvoicePaymentType]:"无"))])],1),n("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[n("a-col",{staticStyle:{"text-align":"right"},attrs:{span:3}},[t._v("账单金额:")]),n("a-col",{attrs:{span:5}},[t._v(t._s(t.connectRecord["账单金额"]?t.connectRecord["账单金额"]:"无")+"元")]),t._l(t.FormComponentValues.ApplyItems,function(e,a){return[n("div",{key:a},[n("a-col",{staticStyle:{"text-align":"right","padding-bottom":"8px"},attrs:{span:3}},[t._v(t._s(t.InvApplyItemType[e.InvAIType])+":")]),n("a-col",{staticStyle:{"padding-bottom":"8px"},attrs:{span:5}},[t._v(t._s(e["金额"])+"元")])],1)]})],2),n("a-table",{attrs:{columns:t.connectColumns,dataSource:t.connectDataSource,pagination:!1,rowKey:"RecPIGuid"},scopedSlots:t._u([{key:"BankId",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(t.Bank[a.BankId])+"\n      ")])}},{key:"ReceiptInvoiceType",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\n        "+t._s(t.ReceiptInvoiceType[a.ReceiptInvoiceType])+"\n      ")])}},{key:"balance",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\n        "+t._s((parseFloat(a["交易金额"])-parseFloat(a["已匹配金额"])).toFixed(2))+"\n      ")])}},{key:"action",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[n("a",{on:{click:function(e){return t.connect(a)}}},[t._v("关联")])])}}])},[n("template",{slot:"footer"},[n("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.connectSearch.pageSize,total:t.connectSearch.total,current:t.connectSearch.current},on:{change:t.connectPagechange}})],1)],2)],1),n("drawer-invoice-detail",{attrs:{show:t.drawer.invoicedetail,refresh:t.pagerefresh}}),n("drawer-invoice-add",{attrs:{show:t.drawer.invoiceadd,assetsdetail:{},refresh:t.pagerefresh,UserArray:t.UserArray,DeptArray:t.DeptArray}})],1)},i=[],o=(n("ac6a"),n("bd86")),c=(n("c32d"),n("b775")),r=(n("61f7"),n("25bf")),s=n("e21c"),l=[{title:"状态",scopedSlots:{customRender:"Status"}},{title:"开票类型",scopedSlots:{customRender:"InvoiceOpenType"}},{title:"公司名称",dataIndex:"Title"},{title:"产品线",scopedSlots:{customRender:"ProductLine"}},{title:"开票小类",scopedSlots:{customRender:"ComProductLineSmall"}},{title:"发票种类",dataIndex:"发票种类"},{title:"所属月份",dataIndex:"所属月份"},{title:"账单金额",dataIndex:"账单金额"},{title:"发票到款情况",scopedSlots:{customRender:"InvoicePaymentType"}},{title:"发起时间",dataIndex:"CreateDate"},{title:"操作",scopedSlots:{customRender:"action"},width:80}],p=[{title:"银行名称",scopedSlots:{customRender:"BankId"},key:"BankId"},{title:"户名",dataIndex:"户名",key:"户名",width:150},{title:"交易金额",dataIndex:"交易金额",key:"交易金额"},{title:"开票情况",scopedSlots:{customRender:"ReceiptInvoiceType"},key:"ReceiptInvoiceType"},{title:"未开票金额",scopedSlots:{customRender:"balance"},key:"已匹配金额"},{title:"交易时间",dataIndex:"交易时间",key:"交易时间"},{title:"操作",scopedSlots:{customRender:"action"}}],u={components:{DrawerInvoiceDetail:r["default"],DrawerInvoiceAdd:s["default"]},data:function(){var t;return t={advanced:!0,columns:l,connectColumns:p,visible:!1,connectDataSource:[],formSearch:{Keyword:"",pageSize:10,current:1,total:0,Scene:"我的",InvApplyStatus:"0",min:"",max:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],drawer:{invoicedetail:{show:!1},invoiceadd:{show:!1}},modal:{exporttransfer:{show:!1}},userid:"",ComProductLine:[],UserArray:{},DeptArray:{},InvApplyStatusList:{},InvApplyStatus:[],InvApplyItemType:[],FormComponentValues:{},ComProductLineSmall:{},InvoiceOpenType:{},InvoicePaymentType:{},showConnect:!1,connectSearch:{pageSize:4,current:1,total:0},connectRecord:{},Bank:{},ReceiptInvoiceType:{}},Object(o["a"])(t,"FormComponentValues",{}),Object(o["a"])(t,"InvoiceType",{}),t},mounted:function(){var t=this;t.init()},methods:{init:function(){var t=this;c["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine","InvApplyStatus","InvApplyItemType","ComProductLineSmall","InvoiceOpenType","InvoicePaymentType","Bank","ReceiptInvoiceType","InvoiceType"]}).then(function(e){0===e.code&&(t.InvApplyStatusList=e.data.InvApplyStatus,e.data.ComProductLine.forEach(function(e,n){t.ComProductLine[e.key]=e.text}),e.data.InvApplyStatus.forEach(function(e,n){t.InvApplyStatus[e.key]=e.text}),e.data.InvApplyItemType.forEach(function(e,n){t.InvApplyItemType[e.key]=e.text}),e.data.ComProductLineSmall.forEach(function(e,n){t.ComProductLineSmall[e.key]=e.text}),e.data.InvoicePaymentType.forEach(function(e,n){t.InvoicePaymentType[e.key]=e.text}),e.data.InvoiceOpenType.forEach(function(e,n){t.InvoiceOpenType[e.key]=e.text}),e.data.Bank.forEach(function(e,n){t.Bank[e.key]=e.text}),e.data.ReceiptInvoiceType.forEach(function(e,n){t.ReceiptInvoiceType[e.key]=e.text}),e.data.InvoiceType.forEach(function(e,n){t.InvoiceType[e.key]=e.text}))}).catch(function(e){t.$loading.close(),console.log(e)}),c["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept"]}).then(function(e){0===e.code&&(t.UserArray=e.data.User,t.DeptArray=e.data.Dept)}).catch(function(t){console.log(t)}),this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this;e.formSearch.current=t,e.$loading.open(),c["a"].post("/api/Invoice/Apply/List",e.formSearch).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},invoiceDetail:function(t){this.drawer.invoicedetail={show:!0,invoicedetail:t,InvApplyItemType:this.InvApplyItemType,UserArray:this.UserArray,DeptArray:this.DeptArray,InvoiceOpenType:this.InvoiceOpenType,InvoicePaymentType:this.InvoicePaymentType}},disApply:function(t){var e=this;this.$confirm({title:"确定取消申请?",content:"点击确定申请将取消。",onOk:function(){c["a"].post("/api/Invoice/Apply/Cancel",{InvApplyGuid:t.InvApplyGuid}).then(function(t){0===t.code?(e.$message.success(t.msg),e.pagerefresh()):e.$message.error(t.msg)}).catch(function(t){console.log(t)})},onCancel:function(){}})},reApply:function(t){t.FormComponentValues&&(this.FormComponentValues=JSON.parse(t.FormComponentValues)),this.drawer.invoiceadd={show:!0,assetsdetail:t,type:"reapply",FormComponentValues:this.FormComponentValues,InvApplyItemTypeArr:this.InvApplyItemType,UserArray:this.UserArray,DeptArray:this.DeptArray}},modifyApply:function(t){t.FormComponentValues&&(this.FormComponentValues=JSON.parse(t.FormComponentValues)),this.drawer.invoiceadd={show:!0,assetsdetail:t,type:"modify",FormComponentValues:this.FormComponentValues,InvApplyItemTypeArr:this.InvApplyItemType,UserArray:this.UserArray,DeptArray:this.DeptArray}},connectClaim:function(t){this.showConnect=!0,this.connectRecord=t,this.FormComponentValues=JSON.parse(t.FormComponentValues),this.connectPagechange(1)},onCloseConnect:function(){this.showConnect=!1,this.connectRecord={},this.FormComponentValues={}},connectPagechange:function(t){var e=this;e.connectSearch.current=t,e.connectSearch.ComGuid=e.connectRecord.ComGuid,e.connectSearch.ComProductLineGuid=e.connectRecord.ComProductLineGuid,e.$loading.open(),c["a"].post("/api/Receipt/PublishItem/ListByComForMatch",e.connectSearch).then(function(t){e.$loading.close(),0===t.code&&(e.connectDataSource=t.data.rows,e.connectSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},connect:function(t){var e={},n=this;e.RecPIGuid=t.RecPIGuid,e.InvApplyGuid=n.connectRecord.InvApplyGuid,c["a"].post("/api/Receipt/PublishItem/PickForInvoice",e).then(function(t){n.$loading.close(),0===t.code?(n.$message.success(t.msg),n.pagerefresh()):n.$message.error(t.msg),n.onCloseConnect()}).catch(function(t){n.$loading.close(),console.log(t)})}}},d=u,v=(n("6cbd"),n("2877")),y=Object(v["a"])(d,a,i,!1,null,null,null);e["default"]=y.exports},a745:function(t,e,n){t.exports=n("f410")},aae3:function(t,e,n){var a=n("d3f4"),i=n("2d95"),o=n("2b4c")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},b0c5:function(t,e,n){"use strict";var a=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},c8bb:function(t,e,n){t.exports=n("54a1")},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray}}]);