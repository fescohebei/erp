(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c9e18de","chunk-0bfaa36c","chunk-abe1ae02"],{"02f4":function(t,e,a){var i=a("4588"),s=a("be13");t.exports=function(t){return function(e,a){var r,n,o=String(s(e)),l=i(a),c=o.length;return l<0||l>=c?t?"":void 0:(r=o.charCodeAt(l),r<55296||r>56319||l+1===c||(n=o.charCodeAt(l+1))<56320||n>57343?t?o.charAt(l):r:t?o.slice(l,l+2):n-56320+(r-55296<<10)+65536)}}},"0390":function(t,e,a){"use strict";var i=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?i(t,e).length:1)}},"0bfb":function(t,e,a){"use strict";var i=a("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,a){"use strict";a("b0c5");var i=a("2aba"),s=a("32e9"),r=a("79e5"),n=a("be13"),o=a("2b4c"),l=a("520a"),c=o("species"),d=!r(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),u=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var p=o(t),f=!r(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),m=f?!r(function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[c]=function(){return a}),a[p](""),!e}):void 0;if(!f||!m||"replace"===t&&!d||"split"===t&&!u){var g=/./[p],v=a(n,p,""[t],function(t,e,a,i,s){return e.exec===l?f&&!s?{done:!0,value:g.call(e,a,i)}:{done:!0,value:t.call(a,e,i)}:{done:!1}}),h=v[0],b=v[1];i(String.prototype,t,h),s(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"28a5":function(t,e,a){"use strict";var i=a("aae3"),s=a("cb7c"),r=a("ebd6"),n=a("0390"),o=a("9def"),l=a("5f1b"),c=a("520a"),d=a("79e5"),u=Math.min,p=[].push,f="split",m="length",g="lastIndex",v=4294967295,h=!d(function(){RegExp(v,"y")});a("214f")("split",2,function(t,e,a,d){var b;return b="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[m]||2!="ab"[f](/(?:ab)*/)[m]||4!="."[f](/(.?)(.?)/)[m]||"."[f](/()()/)[m]>1||""[f](/.?/)[m]?function(t,e){var s=String(this);if(void 0===t&&0===e)return[];if(!i(t))return a.call(s,t,e);var r,n,o,l=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),u=0,f=void 0===e?v:e>>>0,h=new RegExp(t.source,d+"g");while(r=c.call(h,s)){if(n=h[g],n>u&&(l.push(s.slice(u,r.index)),r[m]>1&&r.index<s[m]&&p.apply(l,r.slice(1)),o=r[0][m],u=n,l[m]>=f))break;h[g]===r.index&&h[g]++}return u===s[m]?!o&&h.test("")||l.push(""):l.push(s.slice(u)),l[m]>f?l.slice(0,f):l}:"0"[f](void 0,0)[m]?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,i){var s=t(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,s,i):b.call(String(s),a,i)},function(t,e){var i=d(b,t,this,e,b!==a);if(i.done)return i.value;var c=s(t),p=String(this),f=r(c,RegExp),m=c.unicode,g=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(h?"y":"g"),y=new f(h?c:"^(?:"+c.source+")",g),S=void 0===e?v:e>>>0;if(0===S)return[];if(0===p.length)return null===l(y,p)?[p]:[];var w=0,x=0,_=[];while(x<p.length){y.lastIndex=h?x:0;var R,I=l(y,h?p:p.slice(x));if(null===I||(R=u(o(y.lastIndex+(h?0:x)),p.length))===w)x=n(p,x,m);else{if(_.push(p.slice(w,x)),_.length===S)return _;for(var C=1;C<=I.length-1;C++)if(_.push(I[C]),_.length===S)return _;x=w=R}}return _.push(p.slice(w)),_}]})},"2c97":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{layout:"horizontal"}},[a("div",{class:t.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.Keyword,callback:function(e){t.$set(t.formSearch,"Keyword",e)},expression:"formSearch.Keyword"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:t.pageinit}},[t._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"RenameGuid"},scopedSlots:t._u([{key:"Status",fn:function(e,i){return a("span",{},[a("a-tag",{attrs:{color:10==i.Status?"blue":20==i.Status?"green":"red"}},[[t._v(t._s(t.RenameStatus[i.Status]))]],2)],1)}},{key:"ApplyUserid",fn:function(e,i){return a("span",{},[t._v("\n          "+t._s(t.user[i.ApplyUserid])+"\n        ")])}},{key:"action",fn:function(e,i){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.detail(i)}}},[t._v("详情")]),1==t.Roles&&10==i.Status?a("a-divider",{attrs:{type:"vertical"}}):t._e(),1==t.Roles&&10==i.Status?a("a",{on:{click:function(e){return t.verify(i)}}},[t._v("审核")]):t._e()],1)}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1)],1),a("drawer-detail",{attrs:{show:t.drawer.detail,refresh:t.pagerefresh}}),a("drawer-verify",{attrs:{show:t.drawer.verify,refresh:t.pagerefresh}})],1)},s=[],r=(a("ac6a"),a("b775")),n=(a("61f7"),a("b012")),o=a("e1b2"),l=[{title:"状态",scopedSlots:{customRender:"Status"}},{title:"原公司名称",dataIndex:"ComNameOld"},{title:"新公司名称",dataIndex:"ComNameNew"},{title:"申请人",scopedSlots:{customRender:"ApplyUserid"}},{title:"情况说明",dataIndex:"Remarks"},{title:"操作",scopedSlots:{customRender:"action"}}],c={components:{DrawerDetail:n["default"],DrawerVerify:o["default"]},data:function(){return{advanced:!0,columns:l,visible:!1,formSearch:{pageSize:10,current:1,total:0,Keyword:"",Scene:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],dataLeads:[],dataDetail:[],roles:[],drawer:{detail:{show:!1},verify:{show:!1}},modal:{exporttransfer:{show:!1}},ThrowReason:[],checkComId:"",checkLineId:"",userid:"",expandedRowKeys:[],department:[],departmentKey:"",showClaimLayer:!1,claimLineId:"",childLine:{expanded:"",record:""},Roles:!1,RenameStatus:{},user:{}}},mounted:function(){var t=this;t.init()},methods:{init:function(){var t=this;r["a"].post("/api/Dim/Enum/DimDecode",{Names:["User"]}).then(function(e){0===e.code?t.user=e.data.User:t.$message.error(e.msg)}).catch(function(t){console.log(t)}),r["a"].post("/api/Dim/Enum/GetEnum",{Names:["RenameStatus"]}).then(function(e){0===e.code?e.data.RenameStatus.forEach(function(e,a){t.RenameStatus[e.key]=e.text}):t.$message.error(e.msg)}).catch(function(t){console.log(t)}),r["a"].get("/api/Org/User/CurrentUsersRole").then(function(e){0===e.code&&(e.data.forEach(function(e,a){"96"==e&&(t.Roles=!0)}),t.pagechange(1))}).catch(function(t){console.log(t)})},pageinit:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this;e.formSearch.current=t,e.Roles?e.formSearch.Scene="":e.formSearch.Scene="我的",e.$loading.open(),r["a"].post("/api/Crm/Com/RenameList",e.formSearch).then(function(t){e.$loading.close(),0===t.code&&(t.data.rows.forEach(function(t){t.CreatDate=moment(t.CreatDate).format("YYYY-MM-DD")}),e.dataSource=t.data.rows,e.roles=t.data.role,e.formSearch.total=t.count,e.userid=t.data.Operator.Userid,t.data.Operator.Roles.length>0&&t.data.Operator.Roles.forEach(function(t,a){"96"==t&&(e.Roles=!0)}))}).catch(function(t){e.$loading.close(),console.log(t)})},detail:function(t){this.drawer.detail={show:!0,id:t.ComGuid,assetsdetail:t,user:this.user}},verify:function(t){this.drawer.verify={show:!0,id:t.ComGuid,assetsdetail:t,user:this.user}}}},d=c,u=a("2877"),p=Object(u["a"])(d,i,s,!1,null,null,null);e["default"]=p.exports},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"520a":function(t,e,a){"use strict";var i=a("0bfb"),s=RegExp.prototype.exec,r=String.prototype.replace,n=s,o="lastIndex",l=function(){var t=/a/,e=/b*/g;return s.call(t,"a"),s.call(e,"a"),0!==t[o]||0!==e[o]}(),c=void 0!==/()??/.exec("")[1],d=l||c;d&&(n=function(t){var e,a,n,d,u=this;return c&&(a=new RegExp("^"+u.source+"$(?!\\s)",i.call(u))),l&&(e=u[o]),n=s.call(u,t),l&&n&&(u[o]=u.global?n.index+n[0].length:e),c&&n&&n.length>1&&r.call(n[0],a,function(){for(d=1;d<arguments.length-2;d++)void 0===arguments[d]&&(n[d]=void 0)}),n}),t.exports=n},"5f1b":function(t,e,a){"use strict";var i=a("23c6"),s=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var r=a.call(t,e);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},"61f7":function(t,e,a){"use strict";a.d(e,"b",function(){return i}),a.d(e,"a",function(){return s}),a.d(e,"d",function(){return r}),a.d(e,"c",function(){return n});a("28a5");function i(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)}function s(t){var e=!0;if((e&&!t||!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(t))&&(e=!1),e&&18==t.length){for(var a=t.split(""),i=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],s=[1,0,"X",9,8,7,6,5,4,3,2],r=0,n=0,o=0,l=0;l<17;l++)n=a[l],o=i[l],r+=n*o;s[r%11]!=a[17]&&(e=!1)}return e}function r(t){var e=/^1[3|4|5|6|7|8|9][0-9]\d{8}$/;return e.test(t)}function n(t){var e=/^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;return e.test(t)}},"6b54":function(t,e,a){"use strict";a("3846");var i=a("cb7c"),s=a("0bfb"),r=a("9e1e"),n="toString",o=/./[n],l=function(t){a("2aba")(RegExp.prototype,n,t,!0)};a("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?l(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?s.call(t):void 0)}):o.name!=n&&l(function(){return o.call(this)})},aae3:function(t,e,a){var i=a("d3f4"),s=a("2d95"),r=a("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==s(t))}},b012:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{message:"",visible:this.visible.show,width:450,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[a("template",{slot:"title"},[t._v("\n    更名详情\n  ")]),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[t._v("原公司名称:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.ComNameOld?t.visible.assetsdetail.ComNameOld:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[t._v("新公司名称:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.ComNameNew?t.visible.assetsdetail.ComNameNew:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[t._v("申请人:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.user[t.visible.assetsdetail.ApplyUserid]?t.visible.user[t.visible.assetsdetail.ApplyUserid]:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[t._v("申请时间:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.ApplyTime?t.visible.assetsdetail.ApplyTime:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[t._v("情况说明:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.Remarks?t.visible.assetsdetail.Remarks:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[t._v("证明附件:")]),a("a-col",{attrs:{span:15}},[1==t.notInDingTalk?a("div",[a("a-tag",{attrs:{color:"red"}},[t._v("此浏览器不支持预览，请到钉钉应用界面预览!")])],1):t._e(),0==t.notInDingTalk?[t.FormalAttachment.length>0?t._l(t.FormalAttachment,function(e){return a("div",{key:e.fileId},[t._v(t._s(e.fileName)+" "),a("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"file-search"},on:{click:function(a){return t.preview(e)}}})],1)}):[t._v("无")]]:t._e()],2)],1),t.visible.assetsdetail.Status>10?[a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[t._v("审核人:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.user[t.visible.assetsdetail.ReviewUserid]?t.visible.user[t.visible.assetsdetail.ReviewUserid]:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[t._v("审核时间:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.ReviewTime?t.visible.assetsdetail.ReviewTime:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[t._v("审核备注:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.ReviewNotes?t.visible.assetsdetail.ReviewNotes:"无"))])],1)]:t._e(),a("a-row",{staticStyle:{padding:"10px 0"},attrs:{gutter:24}})],2)},s=[],r=(a("6b54"),a("ac6a"),a("b775")),n=a("c32d"),o=a.n(n),l={components:{},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},assetsdetail:{},user:{}},form:this.$form.createForm(this),drawer:{},modal:{outchange:{show:!1}},FormalAttachment:[],notInDingTalk:!1,fescoMessage:{},fileList:[],SpaceId:"",applytime:"",SpaceIdNormal:"",SpaceIdApply:""}},created:function(){var t=this;this.$watch("show",function(e,a){var i=t;t.visible=e;try{t.FormalAttachment=JSON.parse(t.visible.assetsdetail.FormalAttachment),t.FormalAttachment.forEach(function(t){i.fileList.push(t.fileId)})}catch(s){t.FormalAttachment=[]}t.visible.show&&t.init()})},methods:{init:function(){var t=this;r["a"].post("/api/Crm/Com/RenameDetail",{RenameGuid:t.visible.assetsdetail.RenameGuid}).then(function(e){var a=e;0===a.code&&(t.applytime=a.data.detail.ApplyTime)}).catch(function(t){console.log(t)}),r["a"].post("/api/DingTalk/GetCustomSpace",{Domain:"ComRename"}).then(function(e){var a=e,i=a.data.Spaceid;0===a.code&&(t.SpaceIdNormal=i)}).catch(function(t){console.log(t)}),r["a"].get("/api/DingTalk/CspaceInfo").then(function(e){var a=e,i=a.data.SpaceId;0===a.code&&(t.SpaceIdApply=i)}).catch(function(t){console.log(t)}),r["a"].post("/api/DingTalk/GetSign",{}).then(function(e){t.fescoMessage=e.data,dd.config({agentId:e.data.AgentId,corpId:e.data.corpId,timeStamp:e.data.timeStamp,nonceStr:e.data.nonceStr,signature:e.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(t){console.log(t)}),"notInDingTalk"==dd.env.platform&&(t.notInDingTalk=!0)},onClose:function(){this.visible.show=!1},preview:function(t){var e=this,a="";dd.ready(function(){var i=o()("2020-12-09").format("YYYY-MM-DD"),s=o()(e.applytime).diff(i,"day");a=s<0?e.SpaceIdApply:e.SpaceIdNormal,dd.biz.cspace.preview({corpId:e.fescoMessage.corpId,spaceId:a.toString(),fileId:t.fileId,fileName:t.fileName,fileSize:t.fileSize,fileType:t.fileType,onSuccess:function(){},onFail:function(t){}})})}}},c=l,d=a("2877"),u=Object(d["a"])(c,i,s,!1,null,null,null);e["default"]=u.exports},b0c5:function(t,e,a){"use strict";var i=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},e1b2:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{message:"",visible:this.visible.show,maskClosable:!1,width:450,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[a("template",{slot:"title"},[t._v("\n    更名审核\n  ")]),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("原公司名称:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.ComNameOld?t.visible.assetsdetail.ComNameOld:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("新公司名称:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.ComNameNew?t.visible.assetsdetail.ComNameNew:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("申请人:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.ApplyUserid?t.visible.assetsdetail.ApplyUserid:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("申请时间:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.ApplyTime?t.visible.assetsdetail.ApplyTime:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("情况说明:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.Remarks?t.visible.assetsdetail.Remarks:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:7}},[t._v("证明附件:")]),a("a-col",{attrs:{span:15}},[1==t.notInDingTalk?a("div",[a("a-tag",{attrs:{color:"red"}},[t._v("此浏览器不支持预览，请到钉钉应用界面预览!")])],1):t._e(),0==t.notInDingTalk?[t.FormalAttachment.length>0?t._l(t.FormalAttachment,function(e){return a("div",{key:e.fileId},[t._v(t._s(e.fileName)+" "),a("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"file-search"},on:{click:function(a){return t.preview(e)}}})],1)}):[t._v("无")]]:t._e()],2)],1),t.visible.assetsdetail.Status>10?[a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[t._v("审核人:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.ReviewUserid?t.visible.assetsdetail.ReviewUserid:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[t._v("审核时间:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.ReviewTime?t.visible.assetsdetail.ReviewTime:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[t._v("审核备注:")]),a("a-col",{attrs:{span:15}},[t._v(t._s(t.visible.assetsdetail.ReviewNotes?t.visible.assetsdetail.ReviewNotes:"无"))])],1)]:t._e(),a("a-row",{staticStyle:{padding:"10px 0"},attrs:{gutter:24}}),a("a-form",{attrs:{form:t.form,layout:"horizontal"}},[a("a-row",{attrs:{gutter:11}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"是否通过",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["Verify",{rules:t.AFormImportRules.iptSelect}],expression:"['Verify',{rules:AFormImportRules.iptSelect}]"}],on:{change:t.verifyChange}},[a("a-select-option",{key:20},[t._v("\n              审核通过\n            ")]),a("a-select-option",{key:90},[t._v("\n              拒绝\n            ")])],1)],1),a("a-form-item",{attrs:{label:"理由",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["VerifyNote",{rules:t.AFormImportRules.note}],expression:"['VerifyNote',{rules:AFormImportRules.note}]"}],attrs:{placeholder:"理由",rows:4}})],1)],1)],1)],1),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:t.onClose}},[t._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:t.handleSubmit}},[t._v("提交")])],1)],2)},s=[],r=(a("6b54"),a("b775")),n=a("c32d"),o=a.n(n),l={components:{},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},assetsdetail:{},user:{}},form:this.$form.createForm(this),AFormImportRules:{note:[{required:!1,message:"请输入"}],iptSelect:[{required:!0,message:"请选择"}]},drawer:{},modal:{outchange:{show:!1}},FormalAttachment:[],notInDingTalk:!1,fescoMessage:{},SpaceId:"",applytime:"",SpaceIdNormal:"",SpaceIdApply:""}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e;try{t.FormalAttachment=JSON.parse(t.visible.assetsdetail.FormalAttachment)}catch(i){t.FormalAttachment=[]}t.visible.show&&t.init()})},methods:{init:function(){var t=this;r["a"].post("/api/Crm/Com/RenameDetail",{RenameGuid:t.visible.assetsdetail.RenameGuid}).then(function(e){var a=e;0===a.code&&(t.applytime=a.data.detail.ApplyTime)}).catch(function(t){console.log(t)}),r["a"].post("/api/DingTalk/GetCustomSpace",{Domain:"ComRename"}).then(function(e){var a=e,i=a.data.Spaceid;0===a.code&&(t.SpaceIdNormal=i)}).catch(function(t){console.log(t)}),r["a"].get("/api/DingTalk/CspaceInfo").then(function(e){var a=e,i=a.data.SpaceId;0===a.code&&(t.SpaceIdApply=i)}).catch(function(t){console.log(t)}),r["a"].post("/api/DingTalk/GetSign",{}).then(function(e){t.fescoMessage=e.data,dd.config({agentId:e.data.AgentId,corpId:e.data.corpId,timeStamp:e.data.timeStamp,nonceStr:e.data.nonceStr,signature:e.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(t){console.log(t)}),"notInDingTalk"==dd.env.platform&&(t.notInDingTalk=!0)},onClose:function(){this.visible.show=!1},preview:function(t){var e=this,a="";dd.ready(function(){var i=o()("2020-12-09").format("YYYY-MM-DD"),s=o()(e.applytime).diff(i,"day");a=s<0?e.SpaceIdApply:e.SpaceIdNormal,dd.biz.cspace.preview({corpId:e.fescoMessage.corpId,spaceId:a.toString(),fileId:t.fileId,fileName:t.fileName,fileSize:t.fileSize,fileType:t.fileType,onSuccess:function(){},onFail:function(t){}})})},handleSubmit:function(t){var e=this;this.form.validateFields(function(t,a){if(!t){var i=a;i.RenameGuid=e.visible.assetsdetail.RenameGuid,r["a"].post("/api/Crm/Com/RenameVerify",i).then(function(t){var a=t;a.code>0?e.$message.error(a.msg):(e.onClose(),e.$message.success(a.msg))}).catch(function(t){console.log(t)})}})},verifyChange:function(t){this.AFormImportRules.note[0].required=90==t}}},c=l,d=a("2877"),u=Object(d["a"])(c,i,s,!1,null,null,null);e["default"]=u.exports}}]);