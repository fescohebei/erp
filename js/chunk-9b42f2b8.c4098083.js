(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b42f2b8"],{"043c":function(e,t,i){"use strict";var a=i("ae60"),o=i.n(a);o.a},"0bfb":function(e,t,i){"use strict";var a=i("cb7c");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"262d":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-drawer",{attrs:{title:e.visible.title,visible:this.visible.show,width:550,destroyOnClose:!0},on:{close:e.onClose}},[i("a-form",{attrs:{form:e.form,layout:"horizontal"}},[i("a-row",{attrs:{gutter:11}},[i("a-col",{attrs:{md:24}},[e.cuiShouDetail.length>0?[i("a-timeline",e._l(e.cuiShouDetail,function(t){return i("a-timeline-item",{key:t.index},[i("p",[e._v(e._s(t.CreateDate)+" "),i("a-divider",{attrs:{type:"vertical"}}),e._v(" "+e._s(e.visible.UserArray[t.Userid]))],1),i("p",[e._v("说明："+e._s(t.Explain))]),1==e.notInDingTalk?i("div",[e._v("附件： "),i("a-tag",{attrs:{color:"red"}},[e._v("此浏览器不支持预览，请到钉钉应用界面预览附件！")])],1):t.kfUpload||0!=t.kfUpload.length?[e._l(t.kfUpload,function(t,a){return[i("div",{key:a,staticClass:"fujian"},[e._v("\n                    "+e._s(t.fileName)+" "),i("a-tag",{attrs:{color:"blue"},on:{click:function(i){return e.showFile(t)}}},[e._v("预览")])],1)]})]:i("div",[e._v("无")])],2)}),1)]:e._e(),i("a-form-item",{attrs:{label:"附件",labelCol:{span:3},wrapperCol:{span:20}}},[i("a-button",{attrs:{disabled:1==e.notInDingTalk&&"disabled"},on:{click:e.uploadFile}},[i("a-icon",{attrs:{type:"upload"}}),e._v(" 上传附件")],1),1==e.notInDingTalk?i("div",[i("a-tag",{attrs:{color:"red"}},[e._v("此浏览器不支持上传，请到钉钉应用界面上传附件！")])],1):e._e(),e._l(e.uploadArry,function(t){return i("div",{key:t.fileId},[i("a-icon",{attrs:{type:"file-text"}}),e._v(" "+e._s(t.fileName)+"  "),i("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"search"},on:{click:function(i){return e.showFile(t)}}}),e._v("  "),i("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"delete"},on:{click:function(i){return e.deleteFile(t.fileId)}}})],1)})],2),i("a-form-item",{attrs:{label:"说明",labelCol:{span:3},wrapperCol:{span:20}}},[i("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Explain",{rules:e.AFormImportRules.Explain}],expression:"['Explain',{rules:AFormImportRules.Explain}]"}],attrs:{placeholder:"说明",rows:4}})],1)],2)],1)],1),i("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px","z-index":9}},[i("a-button",{on:{click:e.onClose}},[e._v("取消")]),i("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(t){return e.handleSubmit()}}},[e._v("立即提交")])],1)],1)},o=[],n=(i("6b54"),i("ac6a"),i("b775")),l={props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{spinning:!1,visible:{show:!1,title:"",ReceiptType:"",BankList:[],detail:{}},form:this.$form.createForm(this),AFormImportRules:{Explain:[{required:!0,message:"请输入"}]},receivedtype:{ReceiptType:""},errdatarows:[],fileDis:!0,fileList:[],previewVisible:!1,previewImage:"",notInDingTalk:!1,uploadArry:[],SpaceId:"",SpaceIdNormal:"",cuiShouDetail:[]}},created:function(){var e=this;this.$watch("show",function(t,i){e.visible=t,e.spinning=!1,e.init()})},methods:{onClose:function(){this.visible.show=!1,this.receivedtype={ReceiptType:""},this.fileDis=!0,this.uploadArry=[],this.cuiShouDetail={},this.refresh&&this.refresh()},init:function(){var e=this;n["a"].post("/api/Bill/Urge/Detail",{BillGuid:e.visible.detail.BillGuid}).then(function(t){e.cuiShouDetail=t.data.CuiKuan,e.cuiShouDetail.forEach(function(e){e.kfUpload=JSON.parse(e["附件"])})}).catch(function(e){console.log(e)}),n["a"].post("/api/DingTalk/GrantCustomSpaceAdd",{domain:"Bill"}).then(function(e){}).catch(function(e){console.log(e)}),n["a"].post("/api/DingTalk/GetCustomSpace",{Domain:"Bill"}).then(function(t){var i=t,a=i.data.Spaceid;0===i.code&&(e.SpaceIdNormal=a)}).catch(function(e){console.log(e)}),n["a"].post("/api/DingTalk/GetSign",{}).then(function(t){e.fescoMessage=t.data,dd.config({agentId:t.data.AgentId,corpId:t.data.corpId,timeStamp:t.data.timeStamp,nonceStr:t.data.nonceStr,signature:t.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(e){console.log(e)}),"notInDingTalk"==dd.env.platform&&(this.notInDingTalk=!0)},uploadFile:function(){var e=this,t="";dd.ready(function(){t=e.SpaceIdNormal,dd.biz.util.uploadAttachment({image:{multiple:!0,compress:!1,max:9,spaceId:t.toString()},space:{corpId:e.fescoMessage.corpId,spaceId:t.toString(),max:9},file:{spaceId:t.toString(),max:9},types:["file"],onSuccess:function(t){e.uploadArry=e.uploadArry.concat(t.data),n["a"].post("/api/DingTalk/GrantCustomSpaceDownload",{Domain:"Bill",Files:e.uploadArry}).then(function(e){}).catch(function(e){console.log(e)})},onFail:function(e){}})})},showFile:function(e){console.log(e);var t=this,i="";dd.ready(function(){i=t.SpaceIdNormal,dd.biz.cspace.preview({corpId:t.fescoMessage.corpId,spaceId:i.toString(),fileId:e.fileId,fileName:e.fileName,fileSize:e.fileSize,fileType:e.fileType,onSuccess:function(){},onFail:function(e){}})})},deleteFile:function(e){var t=this;this.uploadArry.forEach(function(i,a){i.fileId===e&&t.uploadArry.splice(a,1)})},handleSubmit:function(e){var t=this,i=this;this.form.validateFields(function(e,a){if(!e){if(!i.uploadArry.length)return void t.$message.error("请上传附件！");var o={BillGuid:t.visible.detail.BillGuid,Explain:a.Explain,"附件":i.uploadArry};i.submitCallback("/api/Bill/Urge/CuiKuan",o)}})},submitCallback:function(e,t){var i=this;i.$loading.open(),n["a"].post(e,t).then(function(e){i.$loading.close();var t=e;t.code>0?i.$message.error(t.msg):(i.onClose(),i.refresh(),i.$message.success(t.msg))}).catch(function(e){i.$loading.close(),console.log(e)})}}},r=l,s=(i("043c"),i("2877")),c=Object(s["a"])(r,a,o,!1,null,null,null);t["default"]=c.exports},3846:function(e,t,i){i("9e1e")&&"g"!=/./g.flags&&i("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:i("0bfb")})},"6b54":function(e,t,i){"use strict";i("3846");var a=i("cb7c"),o=i("0bfb"),n=i("9e1e"),l="toString",r=/./[l],s=function(e){i("2aba")(RegExp.prototype,l,e,!0)};i("79e5")(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?s(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!n&&e instanceof RegExp?o.call(e):void 0)}):r.name!=l&&s(function(){return r.call(this)})},ae60:function(e,t,i){}}]);