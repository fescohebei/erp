(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1382476d","chunk-100ec3b8","chunk-4c038002","chunk-c1b53df0","chunk-2d0aef64"],{"02f4":function(t,e,a){var i=a("4588"),n=a("be13");t.exports=function(t){return function(e,a){var r,o,l=String(n(e)),c=i(a),s=l.length;return c<0||c>=s?t?"":void 0:(r=l.charCodeAt(c),r<55296||r>56319||c+1===s||(o=l.charCodeAt(c+1))<56320||o>57343?t?l.charAt(c):r:t?l.slice(c,c+2):o-56320+(r-55296<<10)+65536)}}},"0390":function(t,e,a){"use strict";var i=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?i(t,e).length:1)}},"03e6":function(t,e,a){},"0bfb":function(t,e,a){"use strict";var i=a("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,a){"use strict";a("b0c5");var i=a("2aba"),n=a("32e9"),r=a("79e5"),o=a("be13"),l=a("2b4c"),c=a("520a"),s=l("species"),u=!r(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),p=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var d=l(t),f=!r(function(){var e={};return e[d]=function(){return 7},7!=""[t](e)}),h=f?!r(function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[s]=function(){return a}),a[d](""),!e}):void 0;if(!f||!h||"replace"===t&&!u||"split"===t&&!p){var g=/./[d],m=a(o,d,""[t],function(t,e,a,i,n){return e.exec===c?f&&!n?{done:!0,value:g.call(e,a,i)}:{done:!0,value:t.call(a,e,i)}:{done:!1}}),v=m[0],y=m[1];i(String.prototype,t,v),n(RegExp.prototype,d,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}}},2703:function(t,e,a){},2797:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{title:t.visible.title,visible:this.visible.show,width:500,destroyOnClose:!0},on:{close:t.onClose}},[a("a-form",{attrs:{form:t.form,layout:"horizontal"}},[a("a-row",{attrs:{gutter:11}},[a("a-col",{attrs:{md:24}},[t._l(t.LawDetail,function(e,i){return[a("div",{key:i,staticStyle:{"margin-bottom":"20px"}},[a("a-divider",{attrs:{orientation:"right"}},[t._v(t._s(e.CreateDate))]),a("a-row",[a("a-col",{attrs:{span:4}},[t._v("客服:")]),a("a-col",[t._v(t._s(t.visible.UserArray[e.Userid]))])],1),a("a-row",[a("a-col",{attrs:{span:4}},[t._v("客服附件:")]),a("a-col",[1==t.notInDingTalk?a("div",[a("a-tag",{attrs:{color:"red"}},[t._v("此浏览器不支持预览，请到钉钉应用界面预览附件！")])],1):e.kfUpload||0!=e.kfUpload.length?[t._l(e.kfUpload,function(e,i){return[a("div",{key:i,staticClass:"fujian"},[t._v("\n                        "+t._s(e.fileName)+" "),a("a-tag",{attrs:{color:"blue"},on:{click:function(a){return t.showFile(e)}}},[t._v("预览")])],1)]})]:a("div",[t._v("无")])],2)],1),a("a-row",[a("a-col",{attrs:{span:4}},[t._v("客服说明:")]),a("a-col",[t._v(t._s(e.Explain))])],1)],1)]}),a("a-divider",{attrs:{dashed:""}}),a("a-form-item",{attrs:{label:"附件",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-button",{attrs:{disabled:1==t.notInDingTalk&&"disabled"},on:{click:t.uploadFile}},[a("a-icon",{attrs:{type:"upload"}}),t._v(" 上传附件")],1),1==t.notInDingTalk?a("div",[a("a-tag",{attrs:{color:"red"}},[t._v("此浏览器不支持上传，请到钉钉应用界面上传附件！")])],1):t._e(),t._l(t.uploadArry,function(e){return a("div",{key:e.fileId},[a("a-icon",{attrs:{type:"file-text"}}),t._v(" "+t._s(e.fileName)+"  "),a("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"search"},on:{click:function(a){return t.showFile(e)}}}),t._v("  "),a("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"delete"},on:{click:function(a){return t.deleteFile(e.fileId)}}})],1)})],2),a("a-form-item",{attrs:{label:"说明",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Explain",{rules:t.AFormImportRules.Explain}],expression:"['Explain',{rules:AFormImportRules.Explain}]"}],attrs:{placeholder:"说明",rows:4}})],1)],2)],1)],1),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px","z-index":9}},[a("a-button",{on:{click:t.onClose}},[t._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(e){return t.handleSubmit()}}},[t._v("立即提交")])],1)],1)},n=[],r=(a("6b54"),a("ac6a"),a("b775")),o={props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{spinning:!1,visible:{show:!1,title:"",ReceiptType:"",BankList:[],detail:{},UserArray:{}},form:this.$form.createForm(this),AFormImportRules:{Explain:[{required:!0,message:"请输入"}]},receivedtype:{ReceiptType:""},errdatarows:[],fileDis:!0,fileList:[],previewVisible:!1,previewImage:"",notInDingTalk:!1,uploadArry:[],SpaceId:"",SpaceIdNormal:"",LawDetail:[]}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.spinning=!1,t.init()})},methods:{onClose:function(){this.visible.show=!1,this.receivedtype={ReceiptType:""},this.fileDis=!0,this.uploadArry=[],this.refresh&&this.refresh()},init:function(){var t=this;r["a"].post("/api/Bill/Urge/LawDetail",{BillGuid:t.visible.detail.BillGuid}).then(function(e){t.LawDetail=e.data,t.LawDetail.forEach(function(t){t.kfUpload=JSON.parse(t["附件"])})}).catch(function(t){console.log(t)}),r["a"].post("/api/DingTalk/GrantCustomSpaceAdd",{domain:"Bill"}).then(function(t){}).catch(function(t){console.log(t)}),r["a"].post("/api/DingTalk/GetCustomSpace",{Domain:"Bill"}).then(function(e){var a=e,i=a.data.Spaceid;0===a.code&&(t.SpaceIdNormal=i)}).catch(function(t){console.log(t)}),r["a"].post("/api/DingTalk/GetSign",{}).then(function(e){t.fescoMessage=e.data,dd.config({agentId:e.data.AgentId,corpId:e.data.corpId,timeStamp:e.data.timeStamp,nonceStr:e.data.nonceStr,signature:e.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(t){console.log(t)}),"notInDingTalk"==dd.env.platform&&(this.notInDingTalk=!0)},uploadFile:function(){var t=this,e="";dd.ready(function(){e=t.SpaceIdNormal,dd.biz.util.uploadAttachment({image:{multiple:!0,compress:!1,max:9,spaceId:e.toString()},space:{corpId:t.fescoMessage.corpId,spaceId:e.toString(),max:9},file:{spaceId:e.toString(),max:9},types:["file"],onSuccess:function(e){t.uploadArry=t.uploadArry.concat(e.data),r["a"].post("/api/DingTalk/GrantCustomSpaceDownload",{Domain:"Bill",Files:t.uploadArry}).then(function(t){}).catch(function(t){console.log(t)})},onFail:function(t){}})})},showFile:function(t){console.log(t);var e=this,a="";dd.ready(function(){a=e.SpaceIdNormal,dd.biz.cspace.preview({corpId:e.fescoMessage.corpId,spaceId:a.toString(),fileId:t.fileId,fileName:t.fileName,fileSize:t.fileSize,fileType:t.fileType,onSuccess:function(){},onFail:function(t){}})})},deleteFile:function(t){var e=this;this.uploadArry.forEach(function(a,i){a.fileId===t&&e.uploadArry.splice(i,1)})},handleSubmit:function(t){var e=this,a=this;this.form.validateFields(function(t,i){if(!t){if(!a.uploadArry.length)return void e.$message.error("请上传附件！");var n={BillGuid:e.visible.detail.BillGuid,"质控情况说明":i.Explain,"质控附件":a.uploadArry};a.submitCallback("/api/Bill/Urge/LawyerLetter",n)}})},submitCallback:function(t,e){var a=this;a.$loading.open(),r["a"].post(t,e).then(function(t){a.$loading.close();var e=t;e.code>0?a.$message.error(e.msg):(a.onClose(),a.refresh(),a.$message.success(e.msg))}).catch(function(t){a.$loading.close(),console.log(t)})}}},l=o,c=(a("5194"),a("2877")),s=Object(c["a"])(l,i,n,!1,null,null,null);e["default"]=s.exports},"28a5":function(t,e,a){"use strict";var i=a("aae3"),n=a("cb7c"),r=a("ebd6"),o=a("0390"),l=a("9def"),c=a("5f1b"),s=a("520a"),u=a("79e5"),p=Math.min,d=[].push,f="split",h="length",g="lastIndex",m=4294967295,v=!u(function(){RegExp(m,"y")});a("214f")("split",2,function(t,e,a,u){var y;return y="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[h]||2!="ab"[f](/(?:ab)*/)[h]||4!="."[f](/(.?)(.?)/)[h]||"."[f](/()()/)[h]>1||""[f](/.?/)[h]?function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!i(t))return a.call(n,t,e);var r,o,l,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,f=void 0===e?m:e>>>0,v=new RegExp(t.source,u+"g");while(r=s.call(v,n)){if(o=v[g],o>p&&(c.push(n.slice(p,r.index)),r[h]>1&&r.index<n[h]&&d.apply(c,r.slice(1)),l=r[0][h],p=o,c[h]>=f))break;v[g]===r.index&&v[g]++}return p===n[h]?!l&&v.test("")||c.push(""):c.push(n.slice(p)),c[h]>f?c.slice(0,f):c}:"0"[f](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,i){var n=t(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,n,i):y.call(String(n),a,i)},function(t,e){var i=u(y,t,this,e,y!==a);if(i.done)return i.value;var s=n(t),d=String(this),f=r(s,RegExp),h=s.unicode,g=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(v?"y":"g"),b=new f(v?s:"^(?:"+s.source+")",g),x=void 0===e?m:e>>>0;if(0===x)return[];if(0===d.length)return null===c(b,d)?[d]:[];var w=0,S=0,_=[];while(S<d.length){b.lastIndex=v?S:0;var k,I=c(b,v?d:d.slice(S));if(null===I||(k=p(l(b.lastIndex+(v?0:S)),d.length))===w)S=o(d,S,h);else{if(_.push(d.slice(w,S)),_.length===x)return _;for(var D=1;D<=I.length-1;D++)if(_.push(I[D]),_.length===x)return _;S=w=k}}return _.push(d.slice(w)),_}]})},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},5140:function(t,e,a){"use strict";var i=a("03e6"),n=a.n(i);n.a},5194:function(t,e,a){"use strict";var i=a("2703"),n=a.n(i);n.a},"520a":function(t,e,a){"use strict";var i=a("0bfb"),n=RegExp.prototype.exec,r=String.prototype.replace,o=n,l="lastIndex",c=function(){var t=/a/,e=/b*/g;return n.call(t,"a"),n.call(e,"a"),0!==t[l]||0!==e[l]}(),s=void 0!==/()??/.exec("")[1],u=c||s;u&&(o=function(t){var e,a,o,u,p=this;return s&&(a=new RegExp("^"+p.source+"$(?!\\s)",i.call(p))),c&&(e=p[l]),o=n.call(p,t),c&&o&&(p[l]=p.global?o.index+o[0].length:e),s&&o&&o.length>1&&r.call(o[0],a,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)}),o}),t.exports=o},"5bc5":function(t,e,a){"use strict";var i=a("6487"),n=a.n(i);n.a},"5f1b":function(t,e,a){"use strict";var i=a("23c6"),n=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var r=a.call(t,e);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},"61f7":function(t,e,a){"use strict";a.d(e,"b",function(){return i}),a.d(e,"a",function(){return n}),a.d(e,"d",function(){return r}),a.d(e,"c",function(){return o});a("28a5");function i(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)}function n(t){var e=!0;if((e&&!t||!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(t))&&(e=!1),e&&18==t.length){for(var a=t.split(""),i=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],n=[1,0,"X",9,8,7,6,5,4,3,2],r=0,o=0,l=0,c=0;c<17;c++)o=a[c],l=i[c],r+=o*l;n[r%11]!=a[17]&&(e=!1)}return e}function r(t){var e=/^1[3|4|5|6|7|8|9][0-9]\d{8}$/;return e.test(t)}function o(t){var e=/^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;return e.test(t)}},6487:function(t,e,a){},"6b54":function(t,e,a){"use strict";a("3846");var i=a("cb7c"),n=a("0bfb"),r=a("9e1e"),o="toString",l=/./[o],c=function(t){a("2aba")(RegExp.prototype,o,t,!0)};a("79e5")(function(){return"/a/b"!=l.call({source:"a",flags:"b"})})?c(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?n.call(t):void 0)}):l.name!=o&&c(function(){return l.call(this)})},aae3:function(t,e,a){var i=a("d3f4"),n=a("2d95"),r=a("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==n(t))}},b0c5:function(t,e,a){"use strict";var i=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},c233:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("a-form",{attrs:{form:t.form,layout:"horizontal"}},[a("div",{class:t.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{xs:4,sm:6,md:4,lg:5,xl:6}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.Keyword,callback:function(e){t.$set(t.formSearch,"Keyword",e)},expression:"formSearch.Keyword"}})],1)],1),a("a-col",{attrs:{xs:{span:8},sm:{span:8},md:{span:6},lg:{span:6}}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:t.pageinit}},[t._v("查询")])],1)],1)],1)],1)]),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"ReceiptGuid"},scopedSlots:t._u([{key:"ProductLine",fn:function(e,i){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n            "+t._s(t.ComProductLine[i.ProductLine])+"\n        ")])}},{key:"account",fn:function(e,i){return a("span",{staticStyle:{"text-align":"right","font-size":"12px"}},[t._v("\n            金额："+t._s(i["账单金额"])),a("br"),t._v("\n            所属月份："+t._s(i["所属月份"])),a("br"),t._v("\n            账期截止日："+t._s(t.moment(i["账期截止日"]).format("YYYY-MM-DD"))+"\n        ")])}},{key:"lateDate",fn:function(e,i){return a("span",{staticStyle:{"text-align":"right","font-size":"12px"}},[t._v("\n            状态：\n            "),30==i["预期处理工作"]?[a("a",{on:{click:function(e){return t.overdue(i)}}},[a("span",{staticClass:"red"},[t._v(t._s(t.WorkStatus[i["预期处理工作"]]))])]),a("br")]:[a("span",{class:50==i["预期处理工作"]?"green":""},[t._v(t._s(t.WorkStatus[i["预期处理工作"]]))]),a("br")],t._v("             \n            日期："+t._s(i["预期处理日期"]?t.moment(i["预期处理日期"]).format("YYYY-MM-DD"):"")+"\n        ")],2)}},{key:"lawyer",fn:function(e,i){return a("span",{staticStyle:{"text-align":"right","font-size":"12px"}},[t._v("\n            状态：\n            "),30==i["律师函工作"]?[a("a",{on:{click:function(e){return t.lawapply(i)}}},[a("span",{staticClass:"red"},[t._v(t._s(t.WorkStatus[i["律师函工作"]]))])]),a("br")]:[a("span",{class:50==i["律师函工作"]?"green":""},[t._v(t._s(t.WorkStatus[i["律师函工作"]]))]),a("br")],t._v(" \n            日期："+t._s(i["律师函日期"]?t.moment(i["律师函日期"]).format("YYYY-MM-DD"):"")+"\n        ")],2)}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1)],1),a("drawer-overdue",{attrs:{show:t.drawer.overdue,refresh:t.pageinit}}),a("drawer-lawapply",{attrs:{show:t.drawer.lawapply,refresh:t.pageinit}})],1)},n=[],r=(a("ac6a"),a("c32d")),o=a.n(r),l=a("b775"),c=(a("61f7"),a("cb56")),s=a("2797"),u=[{title:"公司名称",dataIndex:"ComName"},{title:"产品线",scopedSlots:{customRender:"ProductLine"}},{title:"账单",scopedSlots:{customRender:"account"}},{title:"逾期处理",scopedSlots:{customRender:"lateDate"}},{title:"律师函工作",scopedSlots:{customRender:"lawyer"}}],p={components:{DrawerOverdue:c["default"],DrawerLawapply:s["default"]},data:function(){return{advanced:!0,columns:u,visible:!1,formSearch:{pageSize:5,current:1,total:0,Keyword:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],drawer:{overdue:{show:!1},lawapply:{show:!1}},userid:"",UserArray:{},rolessh:!1,roleskp:!1,ComProductLine:{},moment:o.a,WorkStatus:{},YuQiExecType:{},standardTime:new Date}},mounted:function(){var t=this;t.init()},methods:{init:function(){var t=this;l["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine","WorkStatus","YuQiExecType"]}).then(function(e){0===e.code&&(e.data.ComProductLine.forEach(function(e,a){t.ComProductLine[e.key]=e.text}),e.data.WorkStatus.forEach(function(e,a){t.WorkStatus[e.key]=e.text}),e.data.YuQiExecType.forEach(function(e,a){t.YuQiExecType[e.key]=e.text}),t.pageinit())}).catch(function(e){t.$loading.close(),console.log(e)}),l["a"].post("/api/Dim/Enum/DimDecode",{Names:["User"]}).then(function(e){0===e.code&&(t.UserArray=e.data.User)}).catch(function(t){console.log(t)})},pageinit:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this;e.formSearch.current=t,e.$loading.open(),l["a"].post("/api/Bill/Urge/ListZhiKong",e.formSearch).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},overdue:function(t){this.drawer.overdue={show:!0,title:"逾期停缴函",detail:t,YuQiExecType:this.YuQiExecType,UserArray:this.UserArray}},lawapply:function(t){this.drawer.lawapply={show:!0,title:"律师函",detail:t,UserArray:this.UserArray}}}},d=p,f=(a("5140"),a("2877")),h=Object(f["a"])(d,i,n,!1,null,"64ea30ba",null);e["default"]=h.exports},cb56:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{title:t.visible.title,visible:this.visible.show,width:500,destroyOnClose:!0},on:{close:t.onClose}},[a("a-form",{attrs:{form:t.form,layout:"horizontal"}},[a("a-row",{staticStyle:{"margin-bottom":"50px"},attrs:{gutter:11}},[a("a-col",{attrs:{md:24}},[t._l(t.YuQiDetail,function(e,i){return[a("div",{key:i,staticStyle:{"margin-bottom":"20px"}},[a("a-divider",{attrs:{orientation:"right"}},[t._v(t._s(e.CreateDate))]),a("a-row",[a("a-col",{attrs:{span:4}},[t._v("客服:")]),a("a-col",[t._v(t._s(t.visible.UserArray[e.Userid]))])],1),a("a-row",[a("a-col",{attrs:{span:4}},[t._v("逾期处理:")]),a("a-col",[t._v(t._s(t.visible.YuQiExecType[e.YuQiExecType]))])],1),10==e.YuQiExecType?a("a-row",[a("a-col",{attrs:{span:4}},[t._v("延展天数:")]),a("a-col",[t._v(t._s(e["延展天数"]))])],1):t._e(),a("a-row",[a("a-col",{attrs:{span:4}},[t._v("客服附件:")]),a("a-col",[1==t.notInDingTalk?a("div",[a("a-tag",{attrs:{color:"red"}},[t._v("此浏览器不支持预览，请到钉钉应用界面预览附件！")])],1):e.kfUpload||0!=e.kfUpload.length?[t._l(e.kfUpload,function(e,i){return[a("div",{key:i,staticClass:"fujian"},[t._v("\n                        "+t._s(e.fileName)+" "),a("a-tag",{attrs:{color:"blue"},on:{click:function(a){return t.showFile(e)}}},[t._v("预览")])],1)]})]:a("div",[t._v("无")])],2)],1),a("a-row",[a("a-col",{attrs:{span:4}},[t._v("客服说明:")]),a("a-col",[t._v(t._s(e.Explain))])],1)],1)]}),a("a-divider",{attrs:{dashed:""}}),a("a-form-item",{attrs:{label:"附件",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-button",{attrs:{disabled:1==t.notInDingTalk&&"disabled"},on:{click:t.uploadFile}},[a("a-icon",{attrs:{type:"upload"}}),t._v(" 上传附件")],1),1==t.notInDingTalk?a("div",[a("a-tag",{attrs:{color:"red"}},[t._v("此浏览器不支持上传，请到钉钉应用界面上传附件！")])],1):t._e(),t._l(t.uploadArry,function(e){return a("div",{key:e.fileId},[a("a-icon",{attrs:{type:"file-text"}}),t._v(" "+t._s(e.fileName)+"  "),a("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"search"},on:{click:function(a){return t.showFile(e)}}}),t._v("  "),a("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"delete"},on:{click:function(a){return t.deleteFile(e.fileId)}}})],1)})],2),a("a-form-item",{attrs:{label:"说明",labelCol:{span:4},wrapperCol:{span:19}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Explain",{rules:t.AFormImportRules.Explain}],expression:"['Explain',{rules:AFormImportRules.Explain}]"}],attrs:{placeholder:"说明",rows:4}})],1)],2)],1)],1),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px","z-index":9}},[a("a-button",{on:{click:t.onClose}},[t._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(e){return t.handleSubmit()}}},[t._v("立即提交")])],1)],1)},n=[],r=(a("6b54"),a("ac6a"),a("b775")),o={props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{spinning:!1,visible:{show:!1,title:"",ReceiptType:"",BankList:[],detail:{},YuQiExecType:{},UserArray:{}},form:this.$form.createForm(this),AFormImportRules:{iptSelect:[{required:!0,message:"请选择"}],iptInput:[{required:!0,message:"请输入"}],Explain:[{required:!0,message:"请输入"}]},receivedtype:{ReceiptType:""},errdatarows:[],fileDis:!0,fileList:[],previewVisible:!1,previewImage:"",notInDingTalk:!1,uploadArry:[],SpaceId:"",SpaceIdNormal:"",YuQiDetail:[],kfUpload:[]}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.spinning=!1,t.uploadArry=[],t.init()})},methods:{onClose:function(){this.visible.show=!1,this.receivedtype={ReceiptType:""},this.fileDis=!0,this.refresh&&this.refresh()},init:function(){var t=this;r["a"].post("/api/Bill/Urge/YuQiDetail",{BillGuid:t.visible.detail.BillGuid}).then(function(e){t.YuQiDetail=e.data,t.YuQiDetail.forEach(function(t){t.kfUpload=JSON.parse(t["附件"])}),console.log(t.YuQiDetail)}).catch(function(t){console.log(t)}),r["a"].post("/api/DingTalk/GrantCustomSpaceAdd",{domain:"Bill"}).then(function(t){}).catch(function(t){console.log(t)}),r["a"].post("/api/DingTalk/GetCustomSpace",{Domain:"Bill"}).then(function(e){var a=e,i=a.data.Spaceid;0===a.code&&(t.SpaceIdNormal=i)}).catch(function(t){console.log(t)}),r["a"].post("/api/DingTalk/GetSign",{}).then(function(e){t.fescoMessage=e.data,dd.config({agentId:e.data.AgentId,corpId:e.data.corpId,timeStamp:e.data.timeStamp,nonceStr:e.data.nonceStr,signature:e.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(t){console.log(t)}),"notInDingTalk"==dd.env.platform&&(this.notInDingTalk=!0)},uploadFile:function(){var t=this,e="";dd.ready(function(){e=t.SpaceIdNormal,dd.biz.util.uploadAttachment({image:{multiple:!0,compress:!1,max:9,spaceId:e.toString()},space:{corpId:t.fescoMessage.corpId,spaceId:e.toString(),max:9},file:{spaceId:e.toString(),max:9},types:["file"],onSuccess:function(e){t.uploadArry=t.uploadArry.concat(e.data),r["a"].post("/api/DingTalk/GrantCustomSpaceDownload",{Domain:"Bill",Files:t.uploadArry}).then(function(t){}).catch(function(t){console.log(t)})},onFail:function(t){}})})},showFile:function(t){console.log(t);var e=this,a="";dd.ready(function(){a=e.SpaceIdNormal,dd.biz.cspace.preview({corpId:e.fescoMessage.corpId,spaceId:a.toString(),fileId:t.fileId,fileName:t.fileName,fileSize:t.fileSize,fileType:t.fileType,onSuccess:function(){},onFail:function(t){}})})},deleteFile:function(t){var e=this;this.uploadArry.forEach(function(a,i){a.fileId===t&&e.uploadArry.splice(i,1)})},handleSubmit:function(t){var e=this,a=this;this.form.validateFields(function(t,i){if(!t){if(!a.uploadArry.length)return void e.$message.error("请上传附件！");var n={BillGuid:e.visible.detail.BillGuid,"质控情况说明":i.Explain,"质控附件":a.uploadArry};a.submitCallback("/api/Bill/Urge/YuQiStopPaymentLetter",n)}})},submitCallback:function(t,e){var a=this;a.$loading.open(),r["a"].post(t,e).then(function(t){a.$loading.close();var e=t;e.code>0?a.$message.error(e.msg):(a.onClose(),a.refresh(),a.$message.success(e.msg))}).catch(function(t){a.$loading.close(),console.log(t)})}}},l=o,c=(a("5bc5"),a("2877")),s=Object(c["a"])(l,i,n,!1,null,null,null);e["default"]=s.exports}}]);