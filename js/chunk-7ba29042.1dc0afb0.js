(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ba29042","chunk-2d0aef64"],{"02f4":function(e,t,a){var r=a("4588"),o=a("be13");e.exports=function(e){return function(t,a){var i,s,n=String(o(t)),l=r(a),u=n.length;return l<0||l>=u?e?"":void 0:(i=n.charCodeAt(l),i<55296||i>56319||l+1===u||(s=n.charCodeAt(l+1))<56320||s>57343?e?n.charAt(l):i:e?n.slice(l,l+2):s-56320+(i-55296<<10)+65536)}}},"0390":function(e,t,a){"use strict";var r=a("02f4")(!0);e.exports=function(e,t,a){return t+(a?r(e,t).length:1)}},"0bfb":function(e,t,a){"use strict";var r=a("cb7c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,a){"use strict";a("b0c5");var r=a("2aba"),o=a("32e9"),i=a("79e5"),s=a("be13"),n=a("2b4c"),l=a("520a"),u=n("species"),c=!i(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),p=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();e.exports=function(e,t,a){var d=n(e),m=!i(function(){var t={};return t[d]=function(){return 7},7!=""[e](t)}),v=m?!i(function(){var t=!1,a=/a/;return a.exec=function(){return t=!0,null},"split"===e&&(a.constructor={},a.constructor[u]=function(){return a}),a[d](""),!t}):void 0;if(!m||!v||"replace"===e&&!c||"split"===e&&!p){var f=/./[d],h=a(s,d,""[e],function(e,t,a,r,o){return t.exec===l?m&&!o?{done:!0,value:f.call(t,a,r)}:{done:!0,value:e.call(a,t,r)}:{done:!1}}),b=h[0],g=h[1];r(String.prototype,e,b),o(RegExp.prototype,d,2==t?function(e,t){return g.call(e,this,t)}:function(e){return g.call(e,this)})}}},"28a5":function(e,t,a){"use strict";var r=a("aae3"),o=a("cb7c"),i=a("ebd6"),s=a("0390"),n=a("9def"),l=a("5f1b"),u=a("520a"),c=a("79e5"),p=Math.min,d=[].push,m="split",v="length",f="lastIndex",h=4294967295,b=!c(function(){RegExp(h,"y")});a("214f")("split",2,function(e,t,a,c){var g;return g="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[v]||2!="ab"[m](/(?:ab)*/)[v]||4!="."[m](/(.?)(.?)/)[v]||"."[m](/()()/)[v]>1||""[m](/.?/)[v]?function(e,t){var o=String(this);if(void 0===e&&0===t)return[];if(!r(e))return a.call(o,e,t);var i,s,n,l=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,m=void 0===t?h:t>>>0,b=new RegExp(e.source,c+"g");while(i=u.call(b,o)){if(s=b[f],s>p&&(l.push(o.slice(p,i.index)),i[v]>1&&i.index<o[v]&&d.apply(l,i.slice(1)),n=i[0][v],p=s,l[v]>=m))break;b[f]===i.index&&b[f]++}return p===o[v]?!n&&b.test("")||l.push(""):l.push(o.slice(p)),l[v]>m?l.slice(0,m):l}:"0"[m](void 0,0)[v]?function(e,t){return void 0===e&&0===t?[]:a.call(this,e,t)}:a,[function(a,r){var o=e(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,o,r):g.call(String(o),a,r)},function(e,t){var r=c(g,e,this,t,g!==a);if(r.done)return r.value;var u=o(e),d=String(this),m=i(u,RegExp),v=u.unicode,f=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(b?"y":"g"),C=new m(b?u:"^(?:"+u.source+")",f),x=void 0===t?h:t>>>0;if(0===x)return[];if(0===d.length)return null===l(C,d)?[d]:[];var w=0,R=0,y=[];while(R<d.length){C.lastIndex=b?R:0;var I,A=l(C,b?d:d.slice(R));if(null===A||(I=p(n(C.lastIndex+(b?0:R)),d.length))===w)R=s(d,R,v);else{if(y.push(d.slice(w,R)),y.length===x)return y;for(var F=1;F<=A.length-1;F++)if(y.push(A[F]),y.length===x)return y;R=w=I}}return y.push(d.slice(w)),y}]})},"51d9":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"新建沟通记录",placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:400}},[a("a-card",{attrs:{bordered:!1}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"产品线",labelCol:{span:8},wrapperCol:{span:16}}},["detailadd"==e.visible.type?[e._v("\n          "+e._s(e.visible.assetsdetail.line.ProductLineText)+"               \n        ")]:[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ComProductLineGuids",{rules:e.AFormImportRules.iptSelect}],expression:"['ComProductLineGuids',{rules:AFormImportRules.iptSelect}]"}],attrs:{mode:"multiple",placeholder:"请选择",allowClear:!0}},e._l(e.ComProductLine,function(t){return a("a-select-option",{key:t.ComProductLineGuid},[e._v(e._s(t.ProductLineText))])}),1)]],2),"detailadd"==e.visible.type?a("a-form-item",{attrs:{label:"预算",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Budget",{initialValue:e.visible.assetsdetail.line.Budget,rules:e.AFormImportRules.iptInput}],expression:"['Budget',{initialValue:visible.assetsdetail.line.Budget,rules:AFormImportRules.iptInput}]"}]})],1):e._e(),a("a-form-item",{attrs:{label:"联系人",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ComContactGuid",{initialValue:e.visible.connectdetail.ComContactGuid,rules:e.AFormImportRules.iptSelect}],expression:"['ComContactGuid',{initialValue:visible.connectdetail.ComContactGuid,rules:AFormImportRules.iptSelect }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.linkmanList,function(t){return a("a-select-option",{key:t.ComContactGuid},[e._v(e._s(t.Linkman))])}),1)],1),a("a-form-item",{attrs:{label:"联系方式",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ContactType",{rules:e.AFormImportRules.iptSelect}],expression:"['ContactType',{rules:AFormImportRules.iptSelect }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.dim.ContactType,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1),a("a-form-item",{attrs:{label:"联系内容",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["ContactContent",{rules:e.AFormImportRules.iptInput}],expression:"['ContactContent',{rules:AFormImportRules.iptInput}]"}],attrs:{placeholder:"请输入联系内容",rows:4}})],1),a("a-form-item",{attrs:{label:"下次联系时间",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["NextContacttime"],expression:"['NextContacttime']"}],attrs:{"show-time":"",format:"YYYY-MM-DD HH:mm:ss"}})],1),"detailadd"==e.visible.type&&null!=e.visible.assetsdetail.line.Stage&&parseInt(e.visible.assetsdetail.line.Stage)<30?[a("a-form-item",{attrs:{label:"是否迁升",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["value",{initialValue:"0"},{rules:[{required:!0,message:"请选择"}]}],expression:"['value', {initialValue: '0'}, {rules: [{ required: true, message: '请选择' }]}]"}],on:{change:e.onChange}},[a("a-radio",{attrs:{value:"1"}},[e._v("\n            是\n          ")]),a("a-radio",{attrs:{value:"0"}},[e._v("\n            否\n          ")])],1)],1),1==e.ProcessUp?[parseInt(e.visible.assetsdetail.line.Stage)+10==20?[a("a-form-item",{attrs:{label:"需求概况",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Reason1",{rules:e.AFormImportRules.Remarks}],expression:"['Reason1',{rules:AFormImportRules.Remarks}]"}],attrs:{placeholder:"需求概况",rows:4}})],1),a("a-form-item",{attrs:{label:"报价",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Reason2",{rules:e.AFormImportRules.Remarks}],expression:"['Reason2',{rules:AFormImportRules.Remarks}]"}],attrs:{placeholder:"报价",rows:4}})],1)]:e._e(),parseInt(e.visible.assetsdetail.line.Stage)+10==30?[a("a-form-item",{attrs:{label:"服务方案",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Reason1",{rules:e.AFormImportRules.Remarks}],expression:"['Reason1',{rules:AFormImportRules.Remarks}]"}],attrs:{placeholder:"服务方案",rows:4}})],1),a("a-form-item",{attrs:{label:"合同初稿",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Reason2",{rules:e.AFormImportRules.Remarks}],expression:"['Reason2',{rules:AFormImportRules.Remarks}]"}],attrs:{placeholder:"合同初稿",rows:18}})],1)]:e._e(),a("a-form-item",{attrs:{label:"附件",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-upload",{directives:[{name:"decorator",rawName:"v-decorator",value:["uploadArry",{valuePropName:"fileList",getValueFromEvent:e.normFile,rules:e.AFormImportRules.upload}],expression:"[\n            'uploadArry',\n            {\n              valuePropName: 'fileList',\n              getValueFromEvent: normFile,\n              rules:AFormImportRules.upload\n            }\n          ]"}],attrs:{name:"files",action:"/api/Crm/ProductLine/UploadFile",data:e.uploadData}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),e._v(" 上传附件 ")],1)],1)],1)]:e._e()]:e._e()],2)],1),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:e.onClose}},[e._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)},o=[],i=(a("ac6a"),a("b775")),s=(a("61f7"),{props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,assetsdetail:{line:{Budget:""}},connectdetail:{ComProductLineGuid:"",ComContactGuid:""}},dim:{Brand:[]},ComProductLine:[],DepList:[],linkmanList:[],form:this.$form.createForm(this),AFormImportRules:{iptDate:[{required:!0,message:"请选择"}],iptInput:[{required:!0,message:"请输入"}],iptSelect:[{required:!0,message:"请选择"}],Mobile:[{required:!0,message:"请输入手机号"},{validator:this.ConfirmMobile}],Remarks:[{required:!0,message:"请输入"}],upload:[{required:!1,message:"请上传"}]},ProcessUp:0,SpaceIdNormal:"",fescoMessage:{},uploadArry:[],notInDingTalk:!1,uploadData:{Domain:"SaleProcess"}}},watch:{show:function(e,t){var a=this;a.visible=e,e.show&&a.init()}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.ProcessUp=0,this.form.resetFields()},init:function(){var e=this;"detailadd"==e.visible.type&&null!=e.visible.assetsdetail.line.Stage&&parseInt(e.visible.assetsdetail.line.Stage)+10==30?e.AFormImportRules.upload[0].required=!0:e.AFormImportRules.upload[0].required=!1,i["a"].post("/api/Crm/ProductLine/ListByCom",{ComGuid:e.visible.assetsdetail.company.ComGuid,Scene:"我的",pageSize:50,current:1,total:0}).then(function(t){0===t.code&&(e.ComProductLine=t.data.rows)}).catch(function(e){console.log(e)}),i["a"].post("/api/Dim/Enum/GetEnum",{Names:["ContactType"]}).then(function(t){0===t.code&&(e.dim.ContactType=t.data.ContactType)}).catch(function(e){console.log(e)}),i["a"].post("/api/Crm/Contact/List",{ComGuid:e.visible.assetsdetail.company.ComGuid,pageSize:50,current:1,total:0}).then(function(t){0===t.code&&(e.linkmanList=t.data.rows)}).catch(function(e){console.log(e)})},handleSubmit:function(e){var t=this;this.form.validateFields(function(a,r){if(!a){var o=r;o.ComGuid=t.visible.assetsdetail.company.ComGuid,o.FromType=t.visible.type,"detailadd"==t.visible.type&&(o.ComProductLineGuids=[],o.ComProductLineGuids.push(t.visible.assetsdetail.line.ComProductLineGuid),null!=t.visible.assetsdetail.line.Stage&&parseInt(t.visible.assetsdetail.line.Stage)<30?o.ProcessUp=1==t.ProcessUp:o.ProcessUp=!1,null!=t.visible.assetsdetail.line.Stage&&parseInt(t.visible.assetsdetail.line.Stage)<30&&1==t.ProcessUp&&(o.Reason1=r.Reason1,o.Reason2=r.Reason2,o.Files=[],t.uploadArry.forEach(function(e){o.Files.push(e.response.data.fileName)}))),t.$loading.open(),i["a"].post("/api/Crm/Contact/AddRecord",o).then(function(a){t.$loading.close();var r=a;r.code>0?t.$message.error(r.msg):("next"===e?(t.form.resetFields(),t.refresh&&t.refresh()):t.onClose(),r.data&&""!=r.data.msg&&t.$message.error(r.data.msg),t.$message.success("联系记录提交"+r.msg+"!"))}).catch(function(e){t.$loading.close(),console.log(e)})}})},onChange:function(e){this.ProcessUp=e.target.value},normFile:function(e){return console.log("Upload event:",e),Array.isArray(e)?e:(this.uploadArry=e.fileList,console.log(this.uploadArry),e&&e.fileList)}}}),n=s,l=a("2877"),u=Object(l["a"])(n,r,o,!1,null,null,null);t["default"]=u.exports},"520a":function(e,t,a){"use strict";var r=a("0bfb"),o=RegExp.prototype.exec,i=String.prototype.replace,s=o,n="lastIndex",l=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e[n]||0!==t[n]}(),u=void 0!==/()??/.exec("")[1],c=l||u;c&&(s=function(e){var t,a,s,c,p=this;return u&&(a=new RegExp("^"+p.source+"$(?!\\s)",r.call(p))),l&&(t=p[n]),s=o.call(p,e),l&&s&&(p[n]=p.global?s.index+s[0].length:t),u&&s&&s.length>1&&i.call(s[0],a,function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(s[c]=void 0)}),s}),e.exports=s},"5f1b":function(e,t,a){"use strict";var r=a("23c6"),o=RegExp.prototype.exec;e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var i=a.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"61f7":function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return o}),a.d(t,"d",function(){return i}),a.d(t,"c",function(){return s});a("28a5");function r(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}function o(e){var t=!0;if((t&&!e||!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(e))&&(t=!1),t&&18==e.length){for(var a=e.split(""),r=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],o=[1,0,"X",9,8,7,6,5,4,3,2],i=0,s=0,n=0,l=0;l<17;l++)s=a[l],n=r[l],i+=s*n;o[i%11]!=a[17]&&(t=!1)}return t}function i(e){var t=/^1[3|4|5|6|7|8|9][0-9]\d{8}$/;return t.test(e)}function s(e){var t=/^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;return t.test(e)}},aae3:function(e,t,a){var r=a("d3f4"),o=a("2d95"),i=a("2b4c")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==o(e))}},b0c5:function(e,t,a){"use strict";var r=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})}}]);