(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-abe1ae02","chunk-c1b53df0","chunk-2d0aef64"],{"0bfb":function(t,e,a){"use strict";var s=a("cb7c");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"6b54":function(t,e,a){"use strict";a("3846");var s=a("cb7c"),i=a("0bfb"),o=a("9e1e"),l="toString",n=/./[l],r=function(t){a("2aba")(RegExp.prototype,l,t,!0)};a("79e5")(function(){return"/a/b"!=n.call({source:"a",flags:"b"})})?r(function(){var t=s(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):n.name!=l&&r(function(){return n.call(this)})},e1b2:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{message:"",visible:this.visible.show,maskClosable:!1,width:450,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[a("template",{slot:"title"},[t._v("\n    更名审核\n  ")]),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("原公司名称:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.ComNameOld?t.visible.assetsdetail.ComNameOld:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("新公司名称:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.ComNameNew?t.visible.assetsdetail.ComNameNew:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("申请人:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.ApplyUserid?t.visible.assetsdetail.ApplyUserid:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("申请时间:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.ApplyTime?t.visible.assetsdetail.ApplyTime:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("情况说明:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.Remarks?t.visible.assetsdetail.Remarks:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("证明附件:")]),a("a-col",{attrs:{span:15}},[1==t.notInDingTalk?a("div",[a("a-tag",{attrs:{color:"red"}},[t._v("此浏览器不支持预览，请到钉钉应用界面预览!")])],1):t._e(),0==t.notInDingTalk?[t.FormalAttachment.length>0?t._l(t.FormalAttachment,function(e){return a("div",{key:e.fileId},[t._v(t._s(e.fileName)+" "),a("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"file-search"},on:{click:function(a){return t.preview(e)}}})],1)}):[t._v("无")]]:t._e()],2)],1),t.visible.assetsdetail.Status>10?[a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[t._v("审核人:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.ReviewUserid?t.visible.assetsdetail.ReviewUserid:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[t._v("审核时间:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.ReviewTime?t.visible.assetsdetail.ReviewTime:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[t._v("审核备注:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.ReviewNotes?t.visible.assetsdetail.ReviewNotes:"无"))])],1)]:t._e(),a("a-row",{staticStyle:{padding:"10px 0"},attrs:{gutter:24}}),a("a-form",{attrs:{form:t.form,layout:"horizontal"}},[a("a-row",{attrs:{gutter:11}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"是否通过",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["Verify",{rules:t.AFormImportRules.iptSelect}],expression:"['Verify',{rules:AFormImportRules.iptSelect}]"}],on:{change:t.verifyChange}},[a("a-select-option",{key:20},[t._v("\n              审核通过\n            ")]),a("a-select-option",{key:90},[t._v("\n              拒绝\n            ")])],1)],1),a("a-form-item",{attrs:{label:"理由",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["VerifyNote",{rules:t.AFormImportRules.note}],expression:"['VerifyNote',{rules:AFormImportRules.note}]"}],attrs:{placeholder:"理由",rows:4}})],1)],1)],1)],1),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:t.onClose}},[t._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:t.handleSubmit}},[t._v("提交")])],1)],2)},i=[],o=(a("6b54"),a("b775")),l=a("c32d"),n=a.n(l),r={components:{},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},assetsdetail:{},user:{}},form:this.$form.createForm(this),AFormImportRules:{note:[{required:!1,message:"请输入"}],iptSelect:[{required:!0,message:"请选择"}]},drawer:{},modal:{outchange:{show:!1}},FormalAttachment:[],notInDingTalk:!1,fescoMessage:{},SpaceId:"",applytime:"",SpaceIdNormal:"",SpaceIdApply:""}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e;try{t.FormalAttachment=JSON.parse(t.visible.assetsdetail.FormalAttachment)}catch(s){t.FormalAttachment=[]}t.visible.show&&t.init()})},methods:{init:function(){var t=this;o["a"].post("/api/Crm/Com/RenameDetail",{RenameGuid:t.visible.assetsdetail.RenameGuid}).then(function(e){var a=e;0===a.code&&(t.applytime=a.data.detail.ApplyTime)}).catch(function(t){console.log(t)}),o["a"].post("/api/DingTalk/GetCustomSpace",{Domain:"ComRename"}).then(function(e){var a=e,s=a.data.Spaceid;0===a.code&&(t.SpaceIdNormal=s)}).catch(function(t){console.log(t)}),o["a"].get("/api/DingTalk/CspaceInfo").then(function(e){var a=e,s=a.data.SpaceId;0===a.code&&(t.SpaceIdApply=s)}).catch(function(t){console.log(t)}),o["a"].post("/api/DingTalk/GetSign",{}).then(function(e){t.fescoMessage=e.data,dd.config({agentId:e.data.AgentId,corpId:e.data.corpId,timeStamp:e.data.timeStamp,nonceStr:e.data.nonceStr,signature:e.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(t){console.log(t)}),"notInDingTalk"==dd.env.platform&&(t.notInDingTalk=!0)},onClose:function(){this.visible.show=!1},preview:function(t){var e=this,a="";dd.ready(function(){var s=n()("2020-12-09").format("YYYY-MM-DD"),i=n()(e.applytime).diff(s,"day");a=i<0?e.SpaceIdApply:e.SpaceIdNormal,dd.biz.cspace.preview({corpId:e.fescoMessage.corpId,spaceId:a.toString(),fileId:t.fileId,fileName:t.fileName,fileSize:t.fileSize,fileType:t.fileType,onSuccess:function(){},onFail:function(t){}})})},handleSubmit:function(t){var e=this;this.form.validateFields(function(t,a){if(!t){var s=a;s.RenameGuid=e.visible.assetsdetail.RenameGuid,o["a"].post("/api/Crm/Com/RenameVerify",s).then(function(t){var a=t;a.code>0?e.$message.error(a.msg):(e.onClose(),e.$message.success(a.msg))}).catch(function(t){console.log(t)})}})},verifyChange:function(t){this.AFormImportRules.note[0].required=90==t}}},c=r,p=a("2877"),d=Object(p["a"])(c,s,i,!1,null,null,null);e["default"]=d.exports}}]);