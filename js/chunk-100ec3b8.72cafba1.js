(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-100ec3b8","chunk-c1b53df0","chunk-2d0aef64"],{"0bfb":function(t,e,a){"use strict";var i=a("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},2703:function(t,e,a){},2797:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{title:t.visible.title,visible:this.visible.show,width:500,destroyOnClose:!0},on:{close:t.onClose}},[a("a-form",{attrs:{form:t.form,layout:"horizontal"}},[a("a-row",{attrs:{gutter:11}},[a("a-col",{attrs:{md:24}},[t._l(t.LawDetail,function(e,i){return[a("div",{key:i,staticStyle:{"margin-bottom":"20px"}},[a("a-divider",{attrs:{orientation:"right"}},[t._v(t._s(e.CreateDate))]),a("a-row",[a("a-col",{attrs:{span:4}},[t._v("客服:")]),a("a-col",[t._v(t._s(t.visible.UserArray[e.Userid]))])],1),a("a-row",[a("a-col",{attrs:{span:4}},[t._v("客服附件:")]),a("a-col",[1==t.notInDingTalk?a("div",[a("a-tag",{attrs:{color:"red"}},[t._v("此浏览器不支持预览，请到钉钉应用界面预览附件！")])],1):e.kfUpload||0!=e.kfUpload.length?[t._l(e.kfUpload,function(e,i){return[a("div",{key:i,staticClass:"fujian"},[t._v("\n                        "+t._s(e.fileName)+" "),a("a-tag",{attrs:{color:"blue"},on:{click:function(a){return t.showFile(e)}}},[t._v("预览")])],1)]})]:a("div",[t._v("无")])],2)],1),a("a-row",[a("a-col",{attrs:{span:4}},[t._v("客服说明:")]),a("a-col",[t._v(t._s(e.Explain))])],1)],1)]}),a("a-divider",{attrs:{dashed:""}}),a("a-form-item",{attrs:{label:"附件",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-button",{attrs:{disabled:1==t.notInDingTalk&&"disabled"},on:{click:t.uploadFile}},[a("a-icon",{attrs:{type:"upload"}}),t._v(" 上传附件")],1),1==t.notInDingTalk?a("div",[a("a-tag",{attrs:{color:"red"}},[t._v("此浏览器不支持上传，请到钉钉应用界面上传附件！")])],1):t._e(),t._l(t.uploadArry,function(e){return a("div",{key:e.fileId},[a("a-icon",{attrs:{type:"file-text"}}),t._v(" "+t._s(e.fileName)+"  "),a("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"search"},on:{click:function(a){return t.showFile(e)}}}),t._v("  "),a("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"delete"},on:{click:function(a){return t.deleteFile(e.fileId)}}})],1)})],2),a("a-form-item",{attrs:{label:"说明",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Explain",{rules:t.AFormImportRules.Explain}],expression:"['Explain',{rules:AFormImportRules.Explain}]"}],attrs:{placeholder:"说明",rows:4}})],1)],2)],1)],1),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px","z-index":9}},[a("a-button",{on:{click:t.onClose}},[t._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(e){return t.handleSubmit()}}},[t._v("立即提交")])],1)],1)},o=[],n=(a("6b54"),a("ac6a"),a("b775")),l={props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{spinning:!1,visible:{show:!1,title:"",ReceiptType:"",BankList:[],detail:{},UserArray:{}},form:this.$form.createForm(this),AFormImportRules:{Explain:[{required:!0,message:"请输入"}]},receivedtype:{ReceiptType:""},errdatarows:[],fileDis:!0,fileList:[],previewVisible:!1,previewImage:"",notInDingTalk:!1,uploadArry:[],SpaceId:"",SpaceIdNormal:"",LawDetail:[]}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.spinning=!1,t.init()})},methods:{onClose:function(){this.visible.show=!1,this.receivedtype={ReceiptType:""},this.fileDis=!0,this.uploadArry=[],this.refresh&&this.refresh()},init:function(){var t=this;n["a"].post("/api/Bill/Urge/LawDetail",{BillGuid:t.visible.detail.BillGuid}).then(function(e){t.LawDetail=e.data,t.LawDetail.forEach(function(t){t.kfUpload=JSON.parse(t["附件"])})}).catch(function(t){console.log(t)}),n["a"].post("/api/DingTalk/GrantCustomSpaceAdd",{domain:"Bill"}).then(function(t){}).catch(function(t){console.log(t)}),n["a"].post("/api/DingTalk/GetCustomSpace",{Domain:"Bill"}).then(function(e){var a=e,i=a.data.Spaceid;0===a.code&&(t.SpaceIdNormal=i)}).catch(function(t){console.log(t)}),n["a"].post("/api/DingTalk/GetSign",{}).then(function(e){t.fescoMessage=e.data,dd.config({agentId:e.data.AgentId,corpId:e.data.corpId,timeStamp:e.data.timeStamp,nonceStr:e.data.nonceStr,signature:e.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(t){console.log(t)}),"notInDingTalk"==dd.env.platform&&(this.notInDingTalk=!0)},uploadFile:function(){var t=this,e="";dd.ready(function(){e=t.SpaceIdNormal,dd.biz.util.uploadAttachment({image:{multiple:!0,compress:!1,max:9,spaceId:e.toString()},space:{corpId:t.fescoMessage.corpId,spaceId:e.toString(),max:9},file:{spaceId:e.toString(),max:9},types:["file"],onSuccess:function(e){t.uploadArry=t.uploadArry.concat(e.data),n["a"].post("/api/DingTalk/GrantCustomSpaceDownload",{Domain:"Bill",Files:t.uploadArry}).then(function(t){}).catch(function(t){console.log(t)})},onFail:function(t){}})})},showFile:function(t){console.log(t);var e=this,a="";dd.ready(function(){a=e.SpaceIdNormal,dd.biz.cspace.preview({corpId:e.fescoMessage.corpId,spaceId:a.toString(),fileId:t.fileId,fileName:t.fileName,fileSize:t.fileSize,fileType:t.fileType,onSuccess:function(){},onFail:function(t){}})})},deleteFile:function(t){var e=this;this.uploadArry.forEach(function(a,i){a.fileId===t&&e.uploadArry.splice(i,1)})},handleSubmit:function(t){var e=this,a=this;this.form.validateFields(function(t,i){if(!t){if(!a.uploadArry.length)return void e.$message.error("请上传附件！");var o={BillGuid:e.visible.detail.BillGuid,"质控情况说明":i.Explain,"质控附件":a.uploadArry};a.submitCallback("/api/Bill/Urge/LawyerLetter",o)}})},submitCallback:function(t,e){var a=this;a.$loading.open(),n["a"].post(t,e).then(function(t){a.$loading.close();var e=t;e.code>0?a.$message.error(e.msg):(a.onClose(),a.refresh(),a.$message.success(e.msg))}).catch(function(t){a.$loading.close(),console.log(t)})}}},r=l,s=(a("5194"),a("2877")),c=Object(s["a"])(r,i,o,!1,null,null,null);e["default"]=c.exports},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},5194:function(t,e,a){"use strict";var i=a("2703"),o=a.n(i);o.a},"6b54":function(t,e,a){"use strict";a("3846");var i=a("cb7c"),o=a("0bfb"),n=a("9e1e"),l="toString",r=/./[l],s=function(t){a("2aba")(RegExp.prototype,l,t,!0)};a("79e5")(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?s(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!n&&t instanceof RegExp?o.call(t):void 0)}):r.name!=l&&s(function(){return r.call(this)})}}]);