(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c15df6a6","chunk-b40dad8a","chunk-6574e546","chunk-d5f36d58"],{"02f4":function(t,e,a){var n=a("4588"),i=a("be13");t.exports=function(t){return function(e,a){var r,o,s=String(i(e)),c=n(a),l=s.length;return c<0||c>=l?t?"":void 0:(r=s.charCodeAt(c),r<55296||r>56319||c+1===l||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):r:t?s.slice(c,c+2):o-56320+(r-55296<<10)+65536)}}},"0390":function(t,e,a){"use strict";var n=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?n(t,e).length:1)}},"0bfb":function(t,e,a){"use strict";var n=a("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"1af6":function(t,e,a){var n=a("63b6");n(n.S,"Array",{isArray:a("9003")})},"1f7d":function(t,e,a){},"214f":function(t,e,a){"use strict";a("b0c5");var n=a("2aba"),i=a("32e9"),r=a("79e5"),o=a("be13"),s=a("2b4c"),c=a("520a"),l=s("species"),p=!r(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),u=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var d=s(t),f=!r(function(){var e={};return e[d]=function(){return 7},7!=""[t](e)}),v=f?!r(function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[l]=function(){return a}),a[d](""),!e}):void 0;if(!f||!v||"replace"===t&&!p||"split"===t&&!u){var y=/./[d],g=a(o,d,""[t],function(t,e,a,n,i){return e.exec===c?f&&!i?{done:!0,value:y.call(e,a,n)}:{done:!0,value:t.call(a,e,n)}:{done:!1}}),h=g[0],m=g[1];n(String.prototype,t,h),i(RegExp.prototype,d,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},"25bf":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{message:"",visible:this.visible.show,width:500,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[a("template",{slot:"title"},[t._v("\n    开票申请详情\n  ")]),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("购买方名称:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.info["购方名称"]?t.invoicedetail.info["购方名称"]:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("购买方地址:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.info["购方地址"]?t.invoicedetail.info["购方地址"]:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("购买方开户行:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.info["购方开户行"]?t.invoicedetail.info["购方开户行"]:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("购买方银行账号:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.info["购方银行账号"]?t.invoicedetail.info["购方银行账号"]:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("购买方电话:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.info["购方电话"]?t.invoicedetail.info["购方电话"]:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("购买方税号:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.info["购方税号"]?t.invoicedetail.info["购方税号"]:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("发票类型:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply["发票种类"]?t.invoicedetail.apply["发票种类"]:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("产品线:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply.ProductLine?t.ComProductLine[t.invoicedetail.apply.ProductLine]:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("开票小类:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply.ComProductLineSmall?t.ComProductLineSmall[t.invoicedetail.apply.ComProductLineSmall]:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("所属月份:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply["所属月份"]?t.invoicedetail.apply["所属月份"]:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("发起日期:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply.CreateDate?t.invoicedetail.apply.CreateDate:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("更新日期:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply.UpdateTime?t.invoicedetail.apply.UpdateTime:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("账单金额:")]),a("a-col",{attrs:{span:17}},[t._v(t._s(t.invoicedetail.apply["账单金额"]?t.invoicedetail.apply["账单金额"]:"无")+"元")])],1),t._l(t.FormComponentValues.ApplyItems,function(e,n){return[a("a-row",{key:n,staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v(t._s(t.visible.InvApplyItemType[e.InvAIType])+":")]),a("a-col",{attrs:{span:17}},[t._v(t._s(e["金额"])+"元")])],1)]}),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("分摊:")]),a("a-col",{attrs:{span:17}},[!t.FormComponentValues.ApplyShares||t.FormComponentValues.ApplyShares.length<1?[t._v("无")]:t._e(),t._l(t.FormComponentValues.ApplyShares,function(e,n){return[a("div",{key:n},[t._v("\n          "+t._s(t.visible.DeptArray[e.DepId])+" "+t._s(t.visible.UserArray[e.Userid])+" "+t._s(e.Percentage)+"%\n        ")])]})],2)],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("附件:")]),a("a-col",{attrs:{span:17}},[1==t.notInDingTalk?a("div",[a("a-tag",{attrs:{color:"red"}},[t._v("此浏览器不支持预览，请到钉钉应用界面预览附件！")])],1):t.FormComponentValues["附件"]?[t._l(t.FormComponentValues["附件"],function(e,n){return[a("div",{key:n,staticClass:"fujian"},[t._v("\n            "+t._s(e.fileName)+" "),a("a-tag",{attrs:{color:"blue"},on:{click:function(a){return t.showFile(e)}}},[t._v("预览")])],1)]})]:a("div",[t._v("无")])],2)],1),t.invoicedetail.apply.Status>15?[a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("复核人:")]),a("a-col",{attrs:{span:17}},[t._v("\n        "+t._s(t.visible.UserArray[t.invoicedetail.apply["复核人"]]?t.visible.UserArray[t.invoicedetail.apply["复核人"]]:"无")+"\n      ")])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("复核时间:")]),a("a-col",{attrs:{span:17}},[t._v("\n        "+t._s(t.invoicedetail.apply["复核时间"]?t.invoicedetail.apply["复核时间"]:"无")+"\n      ")])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("复核备注:")]),a("a-col",{attrs:{span:17}},[t._v("\n        "+t._s(t.invoicedetail.apply.VerifyNote?t.invoicedetail.apply.VerifyNote:"无")+"\n      ")])],1)]:t._e(),30==t.invoicedetail.apply.Status?[a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("开票人:")]),a("a-col",{attrs:{span:17}},[t._v("\n        "+t._s(t.visible.UserArray[t.invoicedetail.apply["开票人"]]?t.visible.UserArray[t.invoicedetail.apply["开票人"]]:"无")+"\n      ")])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("开票时间:")]),a("a-col",{attrs:{span:17}},[t._v("\n        "+t._s(t.invoicedetail.apply["开票时间"]?t.invoicedetail.apply["开票时间"]:"无")+"\n      ")])],1),t._l(t.invoicedetail.invoice,function(e,n){return[a("div",{key:e.InvApplyInvGuid},[a("a-row",{attrs:{gutter:15,type:"flex",justify:"space-around",align:"middle"}},[a("a-col",{attrs:{span:24}},[a("a-divider",{staticStyle:{"font-size":"12px"},attrs:{dashed:"",orientation:"left"}},[t._v("发票("+t._s(n+1)+")")])],1)],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("发票代码:")]),a("a-col",{attrs:{span:17}},[t._v("\n          "+t._s(e["发票代码"]?e["发票代码"]:"无")+"\n        ")])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("发票号码:")]),a("a-col",{attrs:{span:17}},[t._v("\n          "+t._s(e["发票号码"]?e["发票号码"]:"无")+"\n        ")])],1)],1)]})]:t._e(),a("a-row",{staticStyle:{padding:"10px 0"},attrs:{gutter:24}})],2)},i=[],r=(a("6b54"),a("ac6a"),a("b775")),o=(a("c32d"),{components:{},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},invoicedetail:{},InvApplyItemType:{},UserArray:{},DeptArray:{}},FormComponentValues:{},invoicedetail:{apply:{},info:{}},formSearch:{pageSize:5,current:1,total:0,next:!0},form:this.$form.createForm(this),drawer:{},modal:{outchange:{show:!1}},notInDingTalk:!1,SpaceId:"",fescoMessage:{},ComProductLine:{},ComProductLineSmall:{}}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,console.log(t.visible),t.visible.show&&t.init()})},methods:{init:function(){var t=this;r["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine","ComProductLineSmall"]}).then(function(e){0===e.code&&(e.data.ComProductLine.forEach(function(e,a){t.ComProductLine[e.key]=e.text}),e.data.ComProductLineSmall.forEach(function(e,a){t.ComProductLineSmall[e.key]=e.text}))}).catch(function(t){console.log(t)}),r["a"].post("/api/Invoice/Apply/Detail",{InvApplyGuid:t.visible.invoicedetail.InvApplyGuid}).then(function(e){0===e.code&&(t.invoicedetail=e.data,e.data.apply.FormComponentValues&&(t.FormComponentValues=JSON.parse(e.data.apply.FormComponentValues)))}).catch(function(t){console.log(t)}),"notInDingTalk"==dd.env.platform&&(t.notInDingTalk=!0),r["a"].get("/api/DingTalk/CspaceInfo").then(function(e){var a=e,n=a.data.SpaceId;0===a.code&&(t.SpaceId=n),console.log(a)}).catch(function(t){console.log(t)}),r["a"].post("/api/DingTalk/GetSign",{}).then(function(e){t.fescoMessage=e.data,dd.config({agentId:e.data.AgentId,corpId:e.data.corpId,timeStamp:e.data.timeStamp,nonceStr:e.data.nonceStr,signature:e.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.FormComponentValues={},this.invoicedetail={apply:{},info:{}},this.refresh&&this.refresh()},showFile:function(t){var e=this;dd.ready(function(){dd.biz.cspace.preview({corpId:e.fescoMessage.corpId,spaceId:e.SpaceId.toString(),fileId:t.fileId,fileName:t.fileName,fileSize:t.fileSize,fileType:t.fileType,onSuccess:function(){},onFail:function(t){console.log(t)}})})}}}),s=o,c=a("2877"),l=Object(c["a"])(s,n,i,!1,null,null,null);e["default"]=l.exports},"28a5":function(t,e,a){"use strict";var n=a("aae3"),i=a("cb7c"),r=a("ebd6"),o=a("0390"),s=a("9def"),c=a("5f1b"),l=a("520a"),p=a("79e5"),u=Math.min,d=[].push,f="split",v="length",y="lastIndex",g=4294967295,h=!p(function(){RegExp(g,"y")});a("214f")("split",2,function(t,e,a,p){var m;return m="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[v]||2!="ab"[f](/(?:ab)*/)[v]||4!="."[f](/(.?)(.?)/)[v]||"."[f](/()()/)[v]>1||""[f](/.?/)[v]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!n(t))return a.call(i,t,e);var r,o,s,c=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),u=0,f=void 0===e?g:e>>>0,h=new RegExp(t.source,p+"g");while(r=l.call(h,i)){if(o=h[y],o>u&&(c.push(i.slice(u,r.index)),r[v]>1&&r.index<i[v]&&d.apply(c,r.slice(1)),s=r[0][v],u=o,c[v]>=f))break;h[y]===r.index&&h[y]++}return u===i[v]?!s&&h.test("")||c.push(""):c.push(i.slice(u)),c[v]>f?c.slice(0,f):c}:"0"[f](void 0,0)[v]?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,n){var i=t(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,i,n):m.call(String(i),a,n)},function(t,e){var n=p(m,t,this,e,m!==a);if(n.done)return n.value;var l=i(t),d=String(this),f=r(l,RegExp),v=l.unicode,y=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(h?"y":"g"),S=new f(h?l:"^(?:"+l.source+")",y),x=void 0===e?g:e>>>0;if(0===x)return[];if(0===d.length)return null===c(S,d)?[d]:[];var _=0,b=0,A=[];while(b<d.length){S.lastIndex=h?b:0;var w,I=c(S,h?d:d.slice(b));if(null===I||(w=u(s(S.lastIndex+(h?0:b)),d.length))===_)b=o(d,b,v);else{if(A.push(d.slice(_,b)),A.length===x)return A;for(var C=1;C<=I.length-1;C++)if(A.push(I[C]),A.length===x)return A;b=_=w}}return A.push(d.slice(_)),A}]})},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"520a":function(t,e,a){"use strict";var n=a("0bfb"),i=RegExp.prototype.exec,r=String.prototype.replace,o=i,s="lastIndex",c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[s]||0!==e[s]}(),l=void 0!==/()??/.exec("")[1],p=c||l;p&&(o=function(t){var e,a,o,p,u=this;return l&&(a=new RegExp("^"+u.source+"$(?!\\s)",n.call(u))),c&&(e=u[s]),o=i.call(u,t),c&&o&&(u[s]=u.global?o.index+o[0].length:e),l&&o&&o.length>1&&r.call(o[0],a,function(){for(p=1;p<arguments.length-2;p++)void 0===arguments[p]&&(o[p]=void 0)}),o}),t.exports=o},"5f1b":function(t,e,a){"use strict";var n=a("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var r=a.call(t,e);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"61f7":function(t,e,a){"use strict";a.d(e,"b",function(){return n}),a.d(e,"a",function(){return i}),a.d(e,"d",function(){return r}),a.d(e,"c",function(){return o});a("28a5");function n(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)}function i(t){var e=!0;if((e&&!t||!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(t))&&(e=!1),e&&18==t.length){for(var a=t.split(""),n=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],i=[1,0,"X",9,8,7,6,5,4,3,2],r=0,o=0,s=0,c=0;c<17;c++)o=a[c],s=n[c],r+=o*s;i[r%11]!=a[17]&&(e=!1)}return e}function r(t){var e=/^1[3|4|5|6|7|8|9][0-9]\d{8}$/;return e.test(t)}function o(t){var e=/^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;return e.test(t)}},"6b54":function(t,e,a){"use strict";a("3846");var n=a("cb7c"),i=a("0bfb"),r=a("9e1e"),o="toString",s=/./[o],c=function(t){a("2aba")(RegExp.prototype,o,t,!0)};a("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?c(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?i.call(t):void 0)}):s.name!=o&&c(function(){return s.call(this)})},"6cbd":function(t,e,a){"use strict";var n=a("1f7d"),i=a.n(n);i.a},"75fc":function(t,e,a){"use strict";var n=a("a745"),i=a.n(n);function r(t){if(i()(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var o=a("774e"),s=a.n(o),c=a("c8bb"),l=a.n(c);function p(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){return r(t)||p(t)||u()}a.d(e,"a",function(){return d})},"774e":function(t,e,a){t.exports=a("d2d5")},"9d2d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("a-form",{attrs:{form:t.form,layout:"horizontal"}},[a("div",{class:t.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.Keyword,callback:function(e){t.$set(t.formSearch,"Keyword",e)},expression:"formSearch.Keyword"}})],1)],1),a("a-col",{attrs:{md:6}},[a("a-form-item",[a("a-select",{model:{value:t.formSearch.InvApplyStatus,callback:function(e){t.$set(t.formSearch,"InvApplyStatus",e)},expression:"formSearch.InvApplyStatus"}},[t._l(t.InvApplyStatusList,function(e){return a("a-select-option",{key:e.key},[t._v("\n                      "+t._s(e.text)+"\n                    ")])}),a("a-select-option",{attrs:{value:"0"}},[t._v("\n                      全部\n                    ")])],2)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:t.init}},[t._v("查询")])],1)],1)],1)],1)]),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"InvApplyGuid"},scopedSlots:t._u([{key:"action",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.invoiceDetail(n)}}},[t._v("详情")]),15==n.Status||25==n.Status?a("a-divider",{attrs:{type:"vertical"}}):t._e(),15==n.Status||25==n.Status?a("a",{on:{click:function(e){return t.reApply(n)}}},[t._v("重新申请")]):t._e(),10==n.Status?a("a-divider",{attrs:{type:"vertical"}}):t._e(),10==n.Status?a("a",{on:{click:function(e){return t.disApply(n)}}},[t._v("取消申请")]):t._e(),5==n.Status?a("a-divider",{attrs:{type:"vertical"}}):t._e(),5==n.Status?a("a",{on:{click:function(e){return t.modifyApply(n)}}},[t._v("修改")]):t._e()],1)}},{key:"Status",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n            "+t._s(t.InvApplyStatus[n.Status])+"\n        ")])}},{key:"ProductLine",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n            "+t._s(t.ComProductLine[n.ProductLine])+"\n        ")])}},{key:"ComProductLineSmall",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n            "+t._s(n.ComProductLineSmall?t.ComProductLineSmall[n.ComProductLineSmall]:"")+"\n        ")])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1)],1),a("drawer-invoice-detail",{attrs:{show:t.drawer.invoicedetail,refresh:t.pagerefresh}}),a("drawer-invoice-add",{attrs:{show:t.drawer.invoiceadd,assetsdetail:{},refresh:t.pagerefresh,UserArray:t.UserArray,DeptArray:t.DeptArray}})],1)},i=[],r=(a("ac6a"),a("c32d"),a("b775")),o=(a("61f7"),a("25bf")),s=a("e21c"),c=[{title:"状态",scopedSlots:{customRender:"Status"}},{title:"公司名称",dataIndex:"Title"},{title:"产品线",scopedSlots:{customRender:"ProductLine"}},{title:"开票小类",scopedSlots:{customRender:"ComProductLineSmall"}},{title:"发票种类",dataIndex:"发票种类"},{title:"所属月份",dataIndex:"所属月份"},{title:"账单金额",dataIndex:"账单金额"},{title:"发起时间",dataIndex:"CreateDate"},{title:"操作",scopedSlots:{customRender:"action"}}],l={components:{DrawerInvoiceDetail:o["default"],DrawerInvoiceAdd:s["default"]},data:function(){return{advanced:!0,columns:c,visible:!1,formSearch:{Keyword:"",pageSize:10,current:1,total:0,Scene:"我的",InvApplyStatus:"0"},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],drawer:{invoicedetail:{show:!1},invoiceadd:{show:!1}},modal:{exporttransfer:{show:!1}},userid:"",ComProductLine:[],UserArray:{},DeptArray:{},InvApplyStatusList:{},InvApplyStatus:[],InvApplyItemType:[],FormComponentValues:{},ComProductLineSmall:{}}},mounted:function(){var t=this;t.init()},methods:{init:function(){var t=this;r["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine","InvApplyStatus","InvApplyItemType","ComProductLineSmall"]}).then(function(e){0===e.code&&(t.InvApplyStatusList=e.data.InvApplyStatus,e.data.ComProductLine.forEach(function(e,a){t.ComProductLine[e.key]=e.text}),e.data.InvApplyStatus.forEach(function(e,a){t.InvApplyStatus[e.key]=e.text}),e.data.InvApplyItemType.forEach(function(e,a){t.InvApplyItemType[e.key]=e.text}),e.data.ComProductLineSmall.forEach(function(e,a){t.ComProductLineSmall[e.key]=e.text}))}).catch(function(e){t.$loading.close(),console.log(e)}),r["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept"]}).then(function(e){0===e.code&&(t.UserArray=e.data.User,t.DeptArray=e.data.Dept)}).catch(function(t){console.log(t)}),this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this;e.formSearch.current=t,e.$loading.open(),r["a"].post("/api/Invoice/Apply/List",e.formSearch).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},invoiceDetail:function(t){this.drawer.invoicedetail={show:!0,invoicedetail:t,InvApplyItemType:this.InvApplyItemType,UserArray:this.UserArray,DeptArray:this.DeptArray}},disApply:function(t){var e=this;this.$confirm({title:"确定取消申请?",content:"点击确定申请将取消。",onOk:function(){r["a"].post("/api/Invoice/Apply/Cancel",{InvApplyGuid:t.InvApplyGuid}).then(function(t){0===t.code?(e.$message.success(t.msg),e.pagerefresh()):e.$message.error(t.msg)}).catch(function(t){console.log(t)})},onCancel:function(){}})},reApply:function(t){t.FormComponentValues&&(this.FormComponentValues=JSON.parse(t.FormComponentValues)),this.drawer.invoiceadd={show:!0,assetsdetail:t,type:"reapply",FormComponentValues:this.FormComponentValues,InvApplyItemTypeArr:this.InvApplyItemType,UserArray:this.UserArray,DeptArray:this.DeptArray}},modifyApply:function(t){t.FormComponentValues&&(this.FormComponentValues=JSON.parse(t.FormComponentValues)),this.drawer.invoiceadd={show:!0,assetsdetail:t,type:"modify",FormComponentValues:this.FormComponentValues,InvApplyItemTypeArr:this.InvApplyItemType,UserArray:this.UserArray,DeptArray:this.DeptArray}}}},p=l,u=(a("6cbd"),a("2877")),d=Object(u["a"])(p,n,i,!1,null,null,null);e["default"]=d.exports},a745:function(t,e,a){t.exports=a("f410")},aae3:function(t,e,a){var n=a("d3f4"),i=a("2d95"),r=a("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==i(t))}},b0c5:function(t,e,a){"use strict";var n=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},c8bb:function(t,e,a){t.exports=a("54a1")},f410:function(t,e,a){a("1af6"),t.exports=a("584a").Array.isArray}}]);