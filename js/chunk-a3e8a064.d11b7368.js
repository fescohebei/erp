(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a3e8a064"],{"02f4":function(e,t,o){var a=o("4588"),n=o("be13");e.exports=function(e){return function(t,o){var r,i,l=String(n(t)),s=a(o),c=l.length;return s<0||s>=c?e?"":void 0:(r=l.charCodeAt(s),r<55296||r>56319||s+1===c||(i=l.charCodeAt(s+1))<56320||i>57343?e?l.charAt(s):r:e?l.slice(s,s+2):i-56320+(r-55296<<10)+65536)}}},"0390":function(e,t,o){"use strict";var a=o("02f4")(!0);e.exports=function(e,t,o){return t+(o?a(e,t).length:1)}},"0bfb":function(e,t,o){"use strict";var a=o("cb7c");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,o){"use strict";o("b0c5");var a=o("2aba"),n=o("32e9"),r=o("79e5"),i=o("be13"),l=o("2b4c"),s=o("520a"),c=l("species"),u=!r(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),p=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var o="ab".split(e);return 2===o.length&&"a"===o[0]&&"b"===o[1]}();e.exports=function(e,t,o){var f=l(e),d=!r(function(){var t={};return t[f]=function(){return 7},7!=""[e](t)}),m=d?!r(function(){var t=!1,o=/a/;return o.exec=function(){return t=!0,null},"split"===e&&(o.constructor={},o.constructor[c]=function(){return o}),o[f](""),!t}):void 0;if(!d||!m||"replace"===e&&!u||"split"===e&&!p){var h=/./[f],b=o(i,f,""[e],function(e,t,o,a,n){return t.exec===s?d&&!n?{done:!0,value:h.call(t,o,a)}:{done:!0,value:e.call(o,t,a)}:{done:!1}}),g=b[0],v=b[1];a(String.prototype,e,g),n(RegExp.prototype,f,2==t?function(e,t){return v.call(e,this,t)}:function(e){return v.call(e,this)})}}},"28a5":function(e,t,o){"use strict";var a=o("aae3"),n=o("cb7c"),r=o("ebd6"),i=o("0390"),l=o("9def"),s=o("5f1b"),c=o("520a"),u=o("79e5"),p=Math.min,f=[].push,d="split",m="length",h="lastIndex",b=4294967295,g=!u(function(){RegExp(b,"y")});o("214f")("split",2,function(e,t,o,u){var v;return v="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[m]||2!="ab"[d](/(?:ab)*/)[m]||4!="."[d](/(.?)(.?)/)[m]||"."[d](/()()/)[m]>1||""[d](/.?/)[m]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!a(e))return o.call(n,e,t);var r,i,l,s=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,d=void 0===t?b:t>>>0,g=new RegExp(e.source,u+"g");while(r=c.call(g,n)){if(i=g[h],i>p&&(s.push(n.slice(p,r.index)),r[m]>1&&r.index<n[m]&&f.apply(s,r.slice(1)),l=r[0][m],p=i,s[m]>=d))break;g[h]===r.index&&g[h]++}return p===n[m]?!l&&g.test("")||s.push(""):s.push(n.slice(p)),s[m]>d?s.slice(0,d):s}:"0"[d](void 0,0)[m]?function(e,t){return void 0===e&&0===t?[]:o.call(this,e,t)}:o,[function(o,a){var n=e(this),r=void 0==o?void 0:o[t];return void 0!==r?r.call(o,n,a):v.call(String(n),o,a)},function(e,t){var a=u(v,e,this,t,v!==o);if(a.done)return a.value;var c=n(e),f=String(this),d=r(c,RegExp),m=c.unicode,h=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(g?"y":"g"),y=new d(g?c:"^(?:"+c.source+")",h),x=void 0===t?b:t>>>0;if(0===x)return[];if(0===f.length)return null===s(y,f)?[f]:[];var C=0,I=0,w=[];while(I<f.length){y.lastIndex=g?I:0;var A,S=s(y,g?f:f.slice(I));if(null===S||(A=p(l(y.lastIndex+(g?0:I)),f.length))===C)I=i(f,I,m);else{if(w.push(f.slice(C,I)),w.length===x)return w;for(var N=1;N<=S.length-1;N++)if(w.push(S[N]),w.length===x)return w;I=C=A}}return w.push(f.slice(C)),w}]})},3846:function(e,t,o){o("9e1e")&&"g"!=/./g.flags&&o("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:o("0bfb")})},"520a":function(e,t,o){"use strict";var a=o("0bfb"),n=RegExp.prototype.exec,r=String.prototype.replace,i=n,l="lastIndex",s=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e[l]||0!==t[l]}(),c=void 0!==/()??/.exec("")[1],u=s||c;u&&(i=function(e){var t,o,i,u,p=this;return c&&(o=new RegExp("^"+p.source+"$(?!\\s)",a.call(p))),s&&(t=p[l]),i=n.call(p,e),s&&i&&(p[l]=p.global?i.index+i[0].length:t),c&&i&&i.length>1&&r.call(i[0],o,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)}),i}),e.exports=i},"5dbc":function(e,t,o){var a=o("d3f4"),n=o("8b97").set;e.exports=function(e,t,o){var r,i=t.constructor;return i!==o&&"function"==typeof i&&(r=i.prototype)!==o.prototype&&a(r)&&n&&n(e,r),e}},"5f1b":function(e,t,o){"use strict";var a=o("23c6"),n=RegExp.prototype.exec;e.exports=function(e,t){var o=e.exec;if("function"===typeof o){var r=o.call(e,t);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==a(e))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"61f7":function(e,t,o){"use strict";o.d(t,"b",function(){return a}),o.d(t,"a",function(){return n}),o.d(t,"d",function(){return r}),o.d(t,"c",function(){return i});o("28a5");function a(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}function n(e){var t=!0;if((t&&!e||!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(e))&&(t=!1),t&&18==e.length){for(var o=e.split(""),a=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],n=[1,0,"X",9,8,7,6,5,4,3,2],r=0,i=0,l=0,s=0;s<17;s++)i=o[s],l=a[s],r+=i*l;n[r%11]!=o[17]&&(t=!1)}return t}function r(e){var t=/^1[3|4|5|6|7|8|9][0-9]\d{8}$/;return t.test(e)}function i(e){var t=/^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;return t.test(e)}},6582:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a-drawer",{attrs:{title:this.title,placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:550}},[o("a-card",{attrs:{bordered:!1}},[o("a-form",{attrs:{form:e.form}},[o("a-form-item",{attrs:{label:"客户名称",labelCol:{span:8},wrapperCol:{span:16}}},[e._v("\n        "+e._s(e.visible.assetsdetail.ComName?e.visible.assetsdetail.ComName:e.visible.assetsdetail.Title)+"\n      ")]),o("a-form-item",{attrs:{label:"产品线",labelCol:{span:8},wrapperCol:{span:16}}},[e._v("\n          "+e._s(e.ComProductLine[e.visible.assetsdetail.line.ProductLine])+"         \n      ")]),o("a-form-item",{attrs:{label:"账单月份",labelCol:{span:8},wrapperCol:{span:16}}},[o("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["所属月份",{rules:e.AFormImportRules.iptInputReq}],expression:"['所属月份',{rules:AFormImportRules.iptInputReq}]"}],staticStyle:{width:"100%"},attrs:{format:"YYYYMM"}})],1),o("a-form-item",{attrs:{label:"账单类型",labelCol:{span:8},wrapperCol:{span:16}}},[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["BillModel",{rules:e.AFormImportRules.iptSelectReq}],expression:"['BillModel',{rules:AFormImportRules.iptSelectReq}]"}],attrs:{placeholder:"请选择",allowClear:!0},on:{change:e.billChange}},e._l(e.BillModel,function(t){return o("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1),e.showBillModel?o("a-form-item",{attrs:{label:"账单性质",labelCol:{span:8},wrapperCol:{span:16}}},[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["BCLGuid",{rules:e.AFormImportRules.iptSelectReq}],expression:"['BCLGuid',{rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.bclArray,function(t){return o("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1)],1):e._e(),e.showDeadTime?o("a-form-item",{attrs:{label:"账期截止日",labelCol:{span:8},wrapperCol:{span:16}}},[o("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["账期截止日",{rules:e.AFormImportRules.iptInputReq}],expression:"['账期截止日',{rules:AFormImportRules.iptInputReq}]"}],staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD"}})],1):e._e(),o("a-form-item",{attrs:{label:"服务费",labelCol:{span:8},wrapperCol:{span:16}}},[o("a-input-number",{staticStyle:{width:"100%"},attrs:{min:.01},on:{change:e.costChange},model:{value:e.cost.fwf,callback:function(t){e.$set(e.cost,"fwf",t)},expression:"cost.fwf"}})],1),o("a-form-item",{attrs:{label:"社保合计",labelCol:{span:8},wrapperCol:{span:16}}},[o("a-input-number",{staticStyle:{width:"100%"},attrs:{min:.01},on:{change:e.costChange},model:{value:e.cost.shebao,callback:function(t){e.$set(e.cost,"shebao",t)},expression:"cost.shebao"}})],1),o("a-form-item",{attrs:{label:"公积金",labelCol:{span:8},wrapperCol:{span:16}}},[o("a-input-number",{staticStyle:{width:"100%"},attrs:{min:.01},on:{change:e.costChange},model:{value:e.cost.gjj,callback:function(t){e.$set(e.cost,"gjj",t)},expression:"cost.gjj"}})],1),o("a-form-item",{attrs:{label:"代发薪资",labelCol:{span:8},wrapperCol:{span:16}}},[o("a-input-number",{staticStyle:{width:"100%"},attrs:{min:.01},on:{change:e.costChange},model:{value:e.cost.dfxz,callback:function(t){e.$set(e.cost,"dfxz",t)},expression:"cost.dfxz"}})],1),o("a-form-item",{attrs:{label:"商险",labelCol:{span:8},wrapperCol:{span:16}}},[o("a-input-number",{staticStyle:{width:"100%"},attrs:{min:.01},on:{change:e.costChange},model:{value:e.cost.sx,callback:function(t){e.$set(e.cost,"sx",t)},expression:"cost.sx"}})],1),o("a-form-item",{attrs:{label:"总金额",labelCol:{span:8},wrapperCol:{span:16}}},[e._v("\n        "+e._s(e.allCost)+"元\n      ")]),o("a-form-item",{attrs:{label:"附件",labelCol:{span:8},wrapperCol:{span:16}}},[o("a-button",{attrs:{disabled:1==e.notInDingTalk&&"disabled"},on:{click:e.uploadFile}},[o("a-icon",{attrs:{type:"upload"}}),e._v(" 上传附件")],1),1==e.notInDingTalk?o("div",[o("a-tag",{attrs:{color:"red"}},[e._v("此浏览器不支持上传，请到钉钉应用界面上传附件！")])],1):e._e(),e._l(e.uploadArry,function(t){return o("div",{key:t.fileId},[o("a-icon",{attrs:{type:"file-text"}}),e._v(" "+e._s(t.fileName)+"  "),o("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"search"},on:{click:function(o){return e.showFile(t)}}}),e._v("  "),o("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"delete"},on:{click:function(o){return e.deleteFile(t.fileId)}}})],1)})],2)],1)],1),o("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px","z-index":9}},[o("a-button",{on:{click:e.onClose}},[e._v("取消")]),o("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(t){return e.handleSubmit()}}},[e._v("立即提交")])],1)],1)},n=[],r=(o("c5f6"),o("6b54"),o("ac6a"),o("b775")),i=o("c32d"),l=o.n(i),s=o("61f7"),c={components:{},props:{show:{type:Object,default:function(){}},refresh:{type:Function,default:null}},data:function(){return{title:"添加账单",visible:{show:!1,assetsdetail:{line:{ProductLine:""}}},SpaceId:"",SpaceIdNormal:"",SpaceIdApply:"",uploadArry:[],productLineList:[],notInDingTalk:!1,form:this.$form.createForm(this),AFormImportRules:{iptDate:[{required:!0,message:"请选择"}],iptInputReq:[{required:!0,message:"请输入"}],iptInput:[{required:!1,message:"请输入"}],iptSelect:[{required:!1,message:"请选择"}],iptSelectReq:[{required:!0,message:"请选择"}],iptInputNumber:[{required:!1,message:"请输入数字"},{validator:this.ConfirmNumber}]},fescoMessage:{},allCost:0,cost:{fwf:"",shebao:"",gjj:"",dfxz:"",sx:""},InvApplyItemType:[],InvApplyItemTypeArr:[],ComProductLine:{},redetail:{month:"",invtype:""},moment:l.a,ComProductLineSmall:{},BillModel:[],AttachmentType:[],bclArray:[],showBillModel:!1,showDeadTime:!1}},watch:{show:function(e,t){var o=this;o.visible=e,e.show&&(o.init(),o.redetail.month=new Date)}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields(),this.allCost=0,this.cost={fwf:"",shebao:"",gjj:"",dfxz:"",sx:""},this.ApplyShares=[],this.uploadArry=[]},init:function(){var e=this;r["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine","InvApplyItemType","ComProductLineSmall","BillModel","AttachmentType"]}).then(function(t){0===t.code&&(e.InvApplyItemType=t.data.InvApplyItemType,e.ComProductLineSmall=t.data.ComProductLineSmall,e.BillModel=t.data.BillModel,e.AttachmentType=t.data.AttachmentType,t.data.ComProductLine.forEach(function(t,o){e.ComProductLine[t.key]=t.text}))}).catch(function(e){console.log(e)}),r["a"].post("/api/DingTalk/GrantCustomSpaceAdd",{domain:"Bill"}).then(function(e){}).catch(function(e){console.log(e)}),r["a"].post("/api/DingTalk/GetCustomSpace",{Domain:"Bill"}).then(function(t){var o=t,a=o.data.Spaceid;0===o.code&&(e.SpaceIdNormal=a)}).catch(function(e){console.log(e)}),r["a"].post("/api/DingTalk/GetSign",{}).then(function(t){e.fescoMessage=t.data,dd.config({agentId:t.data.AgentId,corpId:t.data.corpId,timeStamp:t.data.timeStamp,nonceStr:t.data.nonceStr,signature:t.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(e){console.log(e)}),"notInDingTalk"==dd.env.platform&&(e.notInDingTalk=!0)},handleSubmit:function(e){var t=this,o=this,a=[];this.form.validateFields(function(e,n){if(!e){if(o.InvApplyItemType.forEach(function(e,o){var n={};"服务费"==e.text&&t.cost.fwf&&(n.InvAIType=e.key,n["金额"]=t.cost.fwf),"社保"==e.text&&t.cost.shebao&&(n.InvAIType=e.key,n["金额"]=t.cost.shebao),"公积金"==e.text&&t.cost.gjj&&(n.InvAIType=e.key,n["金额"]=t.cost.gjj),"代发薪资"==e.text&&t.cost.dfxz&&(n.InvAIType=e.key,n["金额"]=t.cost.dfxz),"商险"==e.text&&t.cost.sx&&(n.InvAIType=e.key,n["金额"]=t.cost.sx),"{}"!=JSON.stringify(n)&&a.push(n)}),!a.length)return void t.$message.error("费用不能都为空！");if(!o.uploadArry.length)return void t.$message.error("请上传附件！");var r={ComGuid:t.visible.assetsdetail.company.ComGuid,ComProductLineGuid:t.visible.assetsdetail.line.ComProductLineGuid,"所属月份":l()(n["所属月份"]).format("YYYYMM"),AttachmentType:"10",BillModel:n.BillModel,ApplyItems:a,"附件":o.uploadArry};"10"==n.BillModel&&(r.BCLGuid=n.BCLGuid),"20"==n.BillModel&&(r["账期截止日"]=n["账期截止日"]),o.submitCallback("/api/Bill/Info/Add",r)}})},submitCallback:function(e,t){var o=this;o.$loading.open(),r["a"].post(e,t).then(function(e){o.$loading.close();var t=e;t.code>0?o.$message.error(t.msg):(o.onClose(),o.refresh(),o.$message.success(t.msg))}).catch(function(e){o.$loading.close(),console.log(e)})},ConfirmNumber:function(e,t,o){!t||Object(s["c"])(t)?o():o("请输入数字！")},uploadFile:function(){var e=this,t="";dd.ready(function(){t=e.SpaceIdNormal,dd.biz.util.uploadAttachment({image:{multiple:!0,compress:!1,max:9,spaceId:t.toString()},space:{corpId:e.fescoMessage.corpId,spaceId:t.toString(),max:9},file:{spaceId:t.toString(),max:9},types:["file"],onSuccess:function(t){e.uploadArry=e.uploadArry.concat(t.data),r["a"].post("/api/DingTalk/GrantCustomSpaceDownload",{Domain:"Bill",Files:e.uploadArry}).then(function(e){}).catch(function(e){console.log(e)})},onFail:function(e){}})})},showFile:function(e){console.log(e);var t=this,o="";dd.ready(function(){o=t.SpaceIdNormal,dd.biz.cspace.preview({corpId:t.fescoMessage.corpId,spaceId:o.toString(),fileId:e.fileId,fileName:e.fileName,fileSize:e.fileSize,fileType:e.fileType,onSuccess:function(){},onFail:function(e){}})})},deleteFile:function(e){var t=this;this.uploadArry.forEach(function(o,a){o.fileId===e&&t.uploadArry.splice(a,1)})},costChange:function(){this.allCost=0,this.cost.fwf&&(this.allCost=Number(this.cost.fwf)+Number(this.allCost)),this.cost.shebao&&(this.allCost=Number(this.cost.shebao)+Number(this.allCost)),this.cost.gjj&&(this.allCost=Number(this.cost.gjj)+Number(this.allCost)),this.cost.sx&&(this.allCost=Number(this.cost.sx)+Number(this.allCost)),this.cost.dfxz&&(this.allCost=Number(this.cost.dfxz)+Number(this.allCost)),isNaN(parseFloat(this.allCost))||(this.allCost=this.allCost.toFixed(2))},ConfirmMobile:function(e,t,o){!t||Object(s["d"])(t)?o():o("手机号码不符合规则！")},ConfirmEmail:function(e,t,o){!t||validEmail(t)?o():o("邮箱不符合规则！")},billChange:function(e){var t=this;t.showDeadTime="20"==e,"10"==e?r["a"].post("/api/Bill/Config/Get",{ComProductLineGuid:t.visible.assetsdetail.line.ComProductLineGuid}).then(function(o){0===o.code?(t.bclArray=o.data,t.showBillModel="10"==e):t.$message.error(o.msg)}).catch(function(e){console.log(e)}):t.showBillModel="10"==e}}},u=c,p=o("2877"),f=Object(p["a"])(u,a,n,!1,null,null,null);t["default"]=f.exports},"6b54":function(e,t,o){"use strict";o("3846");var a=o("cb7c"),n=o("0bfb"),r=o("9e1e"),i="toString",l=/./[i],s=function(e){o("2aba")(RegExp.prototype,i,e,!0)};o("79e5")(function(){return"/a/b"!=l.call({source:"a",flags:"b"})})?s(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?n.call(e):void 0)}):l.name!=i&&s(function(){return l.call(this)})},"8b97":function(e,t,o){var a=o("d3f4"),n=o("cb7c"),r=function(e,t){if(n(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{a=o("9b43")(Function.call,o("11e9").f(Object.prototype,"__proto__").set,2),a(e,[]),t=!(e instanceof Array)}catch(n){t=!0}return function(e,o){return r(e,o),t?e.__proto__=o:a(e,o),e}}({},!1):void 0),check:r}},aa77:function(e,t,o){var a=o("5ca1"),n=o("be13"),r=o("79e5"),i=o("fdef"),l="["+i+"]",s="​",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),p=function(e,t,o){var n={},l=r(function(){return!!i[e]()||s[e]()!=s}),c=n[e]=l?t(f):i[e];o&&(n[o]=c),a(a.P+a.F*l,"String",n)},f=p.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=p},aae3:function(e,t,o){var a=o("d3f4"),n=o("2d95"),r=o("2b4c")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==n(e))}},b0c5:function(e,t,o){"use strict";var a=o("520a");o("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},c5f6:function(e,t,o){"use strict";var a=o("7726"),n=o("69a8"),r=o("2d95"),i=o("5dbc"),l=o("6a99"),s=o("79e5"),c=o("9093").f,u=o("11e9").f,p=o("86cc").f,f=o("aa77").trim,d="Number",m=a[d],h=m,b=m.prototype,g=r(o("2aeb")(b))==d,v="trim"in String.prototype,y=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():f(t,3);var o,a,n,r=t.charCodeAt(0);if(43===r||45===r){if(o=t.charCodeAt(2),88===o||120===o)return NaN}else if(48===r){switch(t.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+t}for(var i,s=t.slice(2),c=0,u=s.length;c<u;c++)if(i=s.charCodeAt(c),i<48||i>n)return NaN;return parseInt(s,a)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,o=this;return o instanceof m&&(g?s(function(){b.valueOf.call(o)}):r(o)!=d)?i(new h(y(t)),o,m):y(t)};for(var x,C=o("9e1e")?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;C.length>I;I++)n(h,x=C[I])&&!n(m,x)&&p(m,x,u(h,x));m.prototype=b,b.constructor=m,o("2aba")(a,d,m)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);