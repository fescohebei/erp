(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7adcca8b","chunk-b40dad8a","chunk-6574e546"],{"02f4":function(e,t,a){var o=a("4588"),r=a("be13");e.exports=function(e){return function(t,a){var i,n,l=String(r(t)),s=o(a),c=l.length;return s<0||s>=c?e?"":void 0:(i=l.charCodeAt(s),i<55296||i>56319||s+1===c||(n=l.charCodeAt(s+1))<56320||n>57343?e?l.charAt(s):i:e?l.slice(s,s+2):n-56320+(i-55296<<10)+65536)}}},"0390":function(e,t,a){"use strict";var o=a("02f4")(!0);e.exports=function(e,t,a){return t+(a?o(e,t).length:1)}},"0bfb":function(e,t,a){"use strict";var o=a("cb7c");e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"1af6":function(e,t,a){var o=a("63b6");o(o.S,"Array",{isArray:a("9003")})},"214f":function(e,t,a){"use strict";a("b0c5");var o=a("2aba"),r=a("32e9"),i=a("79e5"),n=a("be13"),l=a("2b4c"),s=a("520a"),c=l("species"),u=!i(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),p=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();e.exports=function(e,t,a){var d=l(e),m=!i(function(){var t={};return t[d]=function(){return 7},7!=""[e](t)}),f=m?!i(function(){var t=!1,a=/a/;return a.exec=function(){return t=!0,null},"split"===e&&(a.constructor={},a.constructor[c]=function(){return a}),a[d](""),!t}):void 0;if(!m||!f||"replace"===e&&!u||"split"===e&&!p){var v=/./[d],b=a(n,d,""[e],function(e,t,a,o,r){return t.exec===s?m&&!r?{done:!0,value:v.call(t,a,o)}:{done:!0,value:e.call(a,t,o)}:{done:!1}}),h=b[0],C=b[1];o(String.prototype,e,h),r(RegExp.prototype,d,2==t?function(e,t){return C.call(e,this,t)}:function(e){return C.call(e,this)})}}},"28a5":function(e,t,a){"use strict";var o=a("aae3"),r=a("cb7c"),i=a("ebd6"),n=a("0390"),l=a("9def"),s=a("5f1b"),c=a("520a"),u=a("79e5"),p=Math.min,d=[].push,m="split",f="length",v="lastIndex",b=4294967295,h=!u(function(){RegExp(b,"y")});a("214f")("split",2,function(e,t,a,u){var C;return C="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[f]||2!="ab"[m](/(?:ab)*/)[f]||4!="."[m](/(.?)(.?)/)[f]||"."[m](/()()/)[f]>1||""[m](/.?/)[f]?function(e,t){var r=String(this);if(void 0===e&&0===t)return[];if(!o(e))return a.call(r,e,t);var i,n,l,s=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,m=void 0===t?b:t>>>0,h=new RegExp(e.source,u+"g");while(i=c.call(h,r)){if(n=h[v],n>p&&(s.push(r.slice(p,i.index)),i[f]>1&&i.index<r[f]&&d.apply(s,i.slice(1)),l=i[0][f],p=n,s[f]>=m))break;h[v]===i.index&&h[v]++}return p===r[f]?!l&&h.test("")||s.push(""):s.push(r.slice(p)),s[f]>m?s.slice(0,m):s}:"0"[m](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:a.call(this,e,t)}:a,[function(a,o){var r=e(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,r,o):C.call(String(r),a,o)},function(e,t){var o=u(C,e,this,t,C!==a);if(o.done)return o.value;var c=r(e),d=String(this),m=i(c,RegExp),f=c.unicode,v=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(h?"y":"g"),g=new m(h?c:"^(?:"+c.source+")",v),y=void 0===t?b:t>>>0;if(0===y)return[];if(0===d.length)return null===s(g,d)?[d]:[];var I=0,w=0,x=[];while(w<d.length){g.lastIndex=h?w:0;var F,R=s(g,h?d:d.slice(w));if(null===R||(F=p(l(g.lastIndex+(h?0:w)),d.length))===I)w=n(d,w,f);else{if(x.push(d.slice(I,w)),x.length===y)return x;for(var k=1;k<=R.length-1;k++)if(x.push(R[k]),x.length===y)return x;w=I=F}}return x.push(d.slice(I)),x}]})},3846:function(e,t,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"520a":function(e,t,a){"use strict";var o=a("0bfb"),r=RegExp.prototype.exec,i=String.prototype.replace,n=r,l="lastIndex",s=function(){var e=/a/,t=/b*/g;return r.call(e,"a"),r.call(t,"a"),0!==e[l]||0!==t[l]}(),c=void 0!==/()??/.exec("")[1],u=s||c;u&&(n=function(e){var t,a,n,u,p=this;return c&&(a=new RegExp("^"+p.source+"$(?!\\s)",o.call(p))),s&&(t=p[l]),n=r.call(p,e),s&&n&&(p[l]=p.global?n.index+n[0].length:t),c&&n&&n.length>1&&i.call(n[0],a,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(n[u]=void 0)}),n}),e.exports=n},"5f1b":function(e,t,a){"use strict";var o=a("23c6"),r=RegExp.prototype.exec;e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var i=a.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==o(e))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"61f7":function(e,t,a){"use strict";a.d(t,"b",function(){return o}),a.d(t,"a",function(){return r}),a.d(t,"d",function(){return i}),a.d(t,"c",function(){return n});a("28a5");function o(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}function r(e){var t=!0;if((t&&!e||!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(e))&&(t=!1),t&&18==e.length){for(var a=e.split(""),o=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],r=[1,0,"X",9,8,7,6,5,4,3,2],i=0,n=0,l=0,s=0;s<17;s++)n=a[s],l=o[s],i+=n*l;r[i%11]!=a[17]&&(t=!1)}return t}function i(e){var t=/^1[3|4|5|6|7|8|9][0-9]\d{8}$/;return t.test(e)}function n(e){var t=/^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;return t.test(e)}},"6b54":function(e,t,a){"use strict";a("3846");var o=a("cb7c"),r=a("0bfb"),i=a("9e1e"),n="toString",l=/./[n],s=function(e){a("2aba")(RegExp.prototype,n,e,!0)};a("79e5")(function(){return"/a/b"!=l.call({source:"a",flags:"b"})})?s(function(){var e=o(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?r.call(e):void 0)}):l.name!=n&&s(function(){return l.call(this)})},"75fc":function(e,t,a){"use strict";var o=a("a745"),r=a.n(o);function i(e){if(r()(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}var n=a("774e"),l=a.n(n),s=a("c8bb"),c=a.n(s);function u(e){if(c()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return l()(e)}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(e){return i(e)||u(e)||p()}a.d(t,"a",function(){return d})},"774e":function(e,t,a){e.exports=a("d2d5")},a745:function(e,t,a){e.exports=a("f410")},a903:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"新建合同",placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:550}},[a("a-card",{attrs:{bordered:!1}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"客商名称",labelCol:{span:8},wrapperCol:{span:16}}},[e._v("\n        "+e._s(e.visible.assetsdetail.ComName)+"\n      ")]),a("a-form-item",{attrs:{label:"客商类型",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["客商类型",{initialValue:e.visible.FormComponentValues["客商类型"],rules:e.AFormImportRules.iptSelectReq}],expression:"['客商类型',{initialValue:visible.FormComponentValues['客商类型'],rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.dim.ComType,function(t){return a("a-select-option",{key:t.text},[e._v(e._s(t.text))])}),1)],1),a("a-form-item",{attrs:{label:"产品线",labelCol:{span:8},wrapperCol:{span:16}}},["company"==e.visible.componenttype?a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ComProductLineGuid",{initialValue:e.visible.reapplydetail.ComProductLineGuid,rules:e.AFormImportRules.iptSelectReq}],expression:"['ComProductLineGuid',{initialValue:visible.reapplydetail.ComProductLineGuid,rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.dim.ComProductLine,function(t){return a("a-select-option",{key:t.ComProductLineGuid},[e._v(e._s(t.ProductLineText))])}),1):e._e(),"line"==e.visible.componenttype?[e._v("\n          "+e._s(e.visible.assetsdetail.line.ProductLineText)+"\n          "),a("a-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"},{name:"decorator",rawName:"v-decorator",value:["ComProductLineGuid",{initialValue:e.visible.assetsdetail.line.ComProductLineGuid}],expression:"['ComProductLineGuid',{initialValue:visible.assetsdetail.line.ComProductLineGuid}]"}]})]:e._e()],2),a("a-form-item",{attrs:{label:"其他产品线",labelCol:{span:8},wrapperCol:{span:16}}},["company"==e.visible.componenttype||"line"==e.visible.componenttype?a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["LinkComProductLineGuids",{initialValue:e.visible.FormComponentValues.LinkComProductLineGuids,rules:e.AFormImportRules.iptSelect}],expression:"['LinkComProductLineGuids',{initialValue:visible.FormComponentValues.LinkComProductLineGuids,rules:AFormImportRules.iptSelect }]"}],attrs:{mode:"multiple",placeholder:"请选择",allowClear:!0}},e._l(e.dim.ComProductLine,function(t){return a("a-select-option",{key:t.ComProductLineGuid},[e._v(e._s(t.ProductLineText))])}),1):e._e()],1),a("a-form-item",{attrs:{label:"建议评级",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["Rank",{rules:e.AFormImportRules.iptSelectReq}],expression:"['Rank',{rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.dim.ComRankNormal,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1),a("a-form-item",{attrs:{label:"申请日期",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["申请日期",{initialValue:e.visible.FormComponentValues["申请日期"],rules:e.AFormImportRules.iptInputReq}],expression:"['申请日期',{initialValue:visible.FormComponentValues['申请日期'],rules:AFormImportRules.iptInputReq}]"}],attrs:{valueFormat:"string",format:"YYYY-MM-DD"}})],1),a("a-form-item",{attrs:{label:"开始日期",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["开始日期",{initialValue:e.visible.FormComponentValues["开始日期"],rules:e.AFormImportRules.iptInputReq}],expression:"['开始日期',{initialValue:visible.FormComponentValues['开始日期'],rules:AFormImportRules.iptInputReq}]"}],attrs:{valueFormat:"string",format:"YYYY-MM-DD"}})],1),a("a-form-item",{attrs:{label:"终止日期",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["终止日期",{initialValue:e.visible.FormComponentValues["终止日期"],rules:e.AFormImportRules.iptInputReq}],expression:"['终止日期',{initialValue:visible.FormComponentValues['终止日期'],rules:AFormImportRules.iptInputReq}]"}],attrs:{valueFormat:"string",format:"YYYY-MM-DD"}})],1),a("a-form-item",{attrs:{label:"是否延期",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["是否延期",{initialValue:e.visible.FormComponentValues["是否延期"],rules:e.AFormImportRules.iptSelectReq}],expression:"['是否延期',{initialValue:visible.FormComponentValues['是否延期'],rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},[a("a-select-option",{key:"是"},[e._v("是")]),a("a-select-option",{key:"否"},[e._v("否")])],1)],1),a("a-form-item",{attrs:{label:"服务内容",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["服务内容",{initialValue:e.visible.FormComponentValues["服务内容"],rules:e.AFormImportRules.iptInputReq}],expression:"['服务内容',{initialValue:visible.FormComponentValues['服务内容'],rules:AFormImportRules.iptInputReq}]"}],attrs:{placeholder:"请输入",rows:4}})],1),a("a-form-item",{attrs:{label:"服务部门",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["服务部门",{rules:e.AFormImportRules.iptInputReq}],expression:"['服务部门',{rules:AFormImportRules.iptInputReq}]"}],attrs:{options:e.serviceOptions,loadData:e.serviceloadData,changeOnSelect:"",placeholder:"请选择服务部门"},on:{change:e.serviceOnChange}})],1),a("a-form-item",{attrs:{label:"申请类型",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["申请类型",{initialValue:e.visible.FormComponentValues["申请类型"],rules:e.AFormImportRules.iptSelectReq}],expression:"['申请类型',{initialValue:visible.FormComponentValues['申请类型'],rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.dim.SignType,function(t){return a("a-select-option",{key:t.text},[e._v(e._s(t.text))])}),1)],1),a("a-form-item",{attrs:{label:"合同内容",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["合同内容",{initialValue:e.visible.FormComponentValues["合同内容"],rules:e.AFormImportRules.iptSelectReq}],expression:"['合同内容',{initialValue:visible.FormComponentValues['合同内容'],rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.dim.ContractContent,function(t){return a("a-select-option",{key:t.text},[e._v(e._s(t.text))])}),1)],1),e._l(e.subjects,function(t,o){return[a("div",{key:o},[a("a-row",{attrs:{gutter:15,type:"flex",justify:"space-around",align:"middle"}},[a("a-col",{attrs:{span:21}},[a("a-divider",{staticStyle:{"font-size":"12px"},attrs:{dashed:"",orientation:"left"}},[e._v("标准合同修改内容("+e._s(o+1)+")")])],1),a("a-col",{attrs:{span:3}},[e.subjects.length>1?a("div",{staticClass:"dynamic-delete-button",staticStyle:{color:"#1890ff",cursor:"pointer","text-align":"right"},attrs:{disabled:1===e.subjects.length},on:{click:function(){return e.remove(t.key)}}},[e._v("删除")]):e._e()])],1),a("a-form-item",{attrs:{label:"原合同内容",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-textarea",{attrs:{placeholder:"请输入",rows:4},model:{value:t.old,callback:function(a){e.$set(t,"old",a)},expression:"item.old"}})],1),a("a-form-item",{attrs:{label:"修改后合同内容",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-textarea",{attrs:{placeholder:"请输入",rows:4},model:{value:t.new,callback:function(a){e.$set(t,"new",a)},expression:"item.new"}})],1)],1)]}),a("a-form-item",{attrs:{label:"",labelCol:{span:0},wrapperCol:{span:16,offset:8}}},[a("a-button",{staticStyle:{width:"100%"},attrs:{type:"dashed"},on:{click:e.add}},[a("a-icon",{attrs:{type:"plus"}}),e._v("增加明细\n        ")],1)],1),a("a-form-item",{attrs:{label:"垫付",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["垫付",{initialValue:e.visible.FormComponentValues["垫付"],rules:e.AFormImportRules.iptSelectReq}],expression:"['垫付',{initialValue:visible.FormComponentValues['垫付'],rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},[a("a-select-option",{key:"是"},[e._v("是")]),a("a-select-option",{key:"否"},[e._v("否")])],1)],1),a("a-form-item",{attrs:{label:"垫付金额",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["垫付金额",{initialValue:e.visible.FormComponentValues["垫付金额"],rules:e.AFormImportRules.iptInputNumber}],expression:"['垫付金额',{initialValue:visible.FormComponentValues['垫付金额'],rules:AFormImportRules.iptInputNumber}]"}]})],1),a("a-form-item",{attrs:{label:"垫付周期",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["垫付周期",{initialValue:e.visible.FormComponentValues["垫付周期"],rules:e.AFormImportRules.iptInput}],expression:"['垫付周期',{initialValue:visible.FormComponentValues['垫付周期'],rules:AFormImportRules.iptInput}]"}]})],1),a("a-form-item",{attrs:{label:"月服务费",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["月服务费",{initialValue:e.visible.FormComponentValues["月服务费"],rules:e.AFormImportRules.iptInputNumber}],expression:"['月服务费',{initialValue:visible.FormComponentValues['月服务费'],rules:AFormImportRules.iptInputNumber}]"}]})],1),a("a-form-item",{attrs:{label:"垫付说明",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["垫付说明",{initialValue:e.visible.FormComponentValues["垫付说明"],rules:e.AFormImportRules.iptInput}],expression:"['垫付说明',{initialValue:visible.FormComponentValues['垫付说明'],rules:AFormImportRules.iptInput}]"}],attrs:{placeholder:"请输入",rows:4}})],1),a("a-form-item",{attrs:{label:"绑定销线",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["LeadsGuid",{initialValue:e.visible.reapplydetail.LeadsGuid,rules:e.AFormImportRules.iptSelect}],expression:"['LeadsGuid',{initialValue:visible.reapplydetail.LeadsGuid,rules:AFormImportRules.iptSelect }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.productLineList,function(t){return a("a-select-option",{key:t.LeadsGuid},[e._v(e._s(t.ComName)+"-"+e._s(t.ProductLineText)+"-"+e._s(t.UseridText))])}),1)],1),a("a-form-item",{attrs:{label:"信息费比例",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["信息费比例",{initialValue:e.visible.FormComponentValues["信息费比例"],rules:e.AFormImportRules.iptInputNumber}],expression:"['信息费比例',{initialValue:visible.FormComponentValues['信息费比例'],rules:AFormImportRules.iptInputNumber}]"}]})],1),a("a-form-item",{attrs:{label:"签单支持部门",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["签单支持部门",{rules:e.AFormImportRules.iptInput}],expression:"['签单支持部门',{rules:AFormImportRules.iptInput}]"}],attrs:{options:e.options,loadData:e.loadData,changeOnSelect:"",placeholder:"请选择分配部门"},on:{change:e.onChange}})],1),a("a-form-item",{attrs:{label:"签单支持员工",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["签单支持员工"],expression:"['签单支持员工']"}],attrs:{allowClear:!0}},e._l(e.DepList,function(t){return a("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1)],1),a("a-form-item",{attrs:{label:"附件",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-button",{attrs:{disabled:1==e.notInDingTalk&&"disabled"},on:{click:e.uploadFile}},[a("a-icon",{attrs:{type:"upload"}}),e._v(" 上传附件")],1),1==e.notInDingTalk?a("div",[a("a-tag",{attrs:{color:"red"}},[e._v("此浏览器不支持上传，请到钉钉应用界面上传附件！")]),a("a-tag",{attrs:{color:"red"}},[e._v("如果是重新发起合同，请到钉钉上处理原上传附件！")])],1):e._e(),0==e.notInDingTalk?e._l(e.uploadArry,function(t){return a("div",{key:t.fileId},[a("a-icon",{attrs:{type:"file-text"}}),e._v(" "+e._s(t.fileName)+" "),a("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"delete"},on:{click:function(a){return e.deleteFile(t.fileId)}}}),e._v("  "),a("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"file-search"},on:{click:function(a){return e.preview(t)}}})],1)}):e._e(),1==e.notInDingTalk&&e.visible.FormComponentValues["附件"]?e._l(e.uploadArry,function(t){return a("div",{key:t.fileId},[a("a-icon",{attrs:{type:"file-text"}}),e._v(" "+e._s(t.fileName)+" ")],1)}):e._e()],2)],2)],1),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px","z-index":9}},[a("a-button",{on:{click:e.onClose}},[e._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(t){return e.handleSubmit("approval")}}},[e._v("提交")])],1)],1)},r=[],i=(a("6b54"),a("75fc")),n=(a("7f7f"),a("ac6a"),a("b775")),l=a("61f7"),s={props:{show:{type:Object,default:function(){}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,assetsdetail:{},componenttype:"",reapplydetail:{},FormComponentValues:{}},dim:{ComType:[],SignType:[],ContractContent:[],ComProductLine:[],ComRankNormal:[]},ComProductLine:[],DepList:[],linkmanList:[],serviceOptions:[],options:[],SaleUserid:"",subjects:[{key:0,old:"",new:""}],SpaceId:"",uploadArry:[],productLineList:[],notInDingTalk:!1,form:this.$form.createForm(this),AFormImportRules:{iptDate:[{required:!0,message:"请选择"}],iptInputReq:[{required:!0,message:"请输入"}],iptInput:[{required:!1,message:"请输入"}],iptSelect:[{required:!1,message:"请选择"}],iptSelectReq:[{required:!0,message:"请选择"}],Mobile:[{required:!0,message:"请输入手机号"},{validator:this.ConfirmMobile}],iptInputNumber:[{required:!1,message:"请输入数字"},{validator:this.ConfirmNumber}]},fescoMessage:{}}},watch:{show:function(e,t){var a=this;a.visible=e,e.show&&a.init()}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields(),this.subjects=[{"原合同内容":"","修改后合同内容":""}],this.serviceOptions=[],this.options=[],this.uploadArry=[]},init:function(){var e=this,t="";console.log(e.visible.assetsdetail),t="line"==e.visible.componenttype?e.visible.assetsdetail.company.ComGuid:e.visible.assetsdetail.ComGuid,e.visible.FormComponentValues["标准合同修改内容"]&&(e.subjects=[],e.visible.FormComponentValues["标准合同修改内容"].forEach(function(t,a){var o={key:a,old:t["原合同内容"],new:t["修改后合同内容"]};e.subjects.push(o)})),e.visible.FormComponentValues["附件"]&&(e.uploadArry=e.visible.FormComponentValues["附件"]),n["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComType","SignType","ContractContent","ComRankNormal"]}).then(function(t){0===t.code&&(e.dim.ComType=t.data.ComType,e.dim.SignType=t.data.SignType,e.dim.ContractContent=t.data.ContractContent,e.dim.ComRankNormal=t.data.ComRankNormal)}).catch(function(e){console.log(e)}),n["a"].post("/api/Crm/ProductLine/ListByCom",{ComGuid:t,Scene:"我的",pageSize:50,current:1,total:0}).then(function(t){0===t.code&&(e.dim.ComProductLine=t.data.rows)}).catch(function(e){console.log(e)}),n["a"].get("/api/DingTalk/CspaceInfo").then(function(t){var a=t,o=a.data.SpaceId;0===a.code&&(e.SpaceId=o)}).catch(function(e){console.log(e)}),n["a"].post("/api/DingTalk/GetSign",{}).then(function(t){e.fescoMessage=t.data,dd.config({agentId:t.data.AgentId,corpId:t.data.corpId,timeStamp:t.data.timeStamp,nonceStr:t.data.nonceStr,signature:t.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(e){console.log(e)}),n["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:"1"}).then(function(t){0===t.code&&t.data.forEach(function(t,a){var o={};o.value=t.code,o.label=t.name,o.isLeaf=!1,e.options.push(o),e.serviceOptions.push(o)})}).catch(function(e){console.log(e)}),"notInDingTalk"==dd.env.platform&&(e.notInDingTalk=!0),e.comLeads()},comLeads:function(){var e=this;n["a"].post("/api/Leads/Com/LeadsByCom",{ComGuid:e.visible.assetsdetail.ComGuid}).then(function(t){0===t.code&&(e.productLineList=t.data.leads)}).catch(function(e){console.log(e)})},handleSubmit:function(e){var t=this,a=this;this.form.validateFields(function(o,r){if(console.log(r),!o){r["客商类型"];var i=[];r.IsApproval="approval"===e,r["服务部门"].length>0&&(r["服务部门"]=r["服务部门"][r["服务部门"].length-1]),void 0!=r["签单支持部门"]&&r["签单支持部门"].length>0&&(r["签单支持部门"]=r["签单支持部门"][r["签单支持部门"].length-1]),r["开始日期"]=r["开始日期"].format("YYYY-MM-DD"),r["申请日期"]=r["申请日期"].format("YYYY-MM-DD"),r["终止日期"]=r["终止日期"].format("YYYY-MM-DD"),void 0!=r.LinkComProductLineGuids&&r.LinkComProductLineGuids.length>0&&r.LinkComProductLineGuids.forEach(function(e,t){e==r.ComProductLineGuid&&r.LinkComProductLineGuids.splice(t,1)});var l={ComProductLineGuid:r.ComProductLineGuid,IsApproval:r.IsApproval,LeadsGuid:r.LeadsGuid,LinkComProductLineGuids:r.LinkComProductLineGuids,Rank:r.Rank,contract:{"客商类型":r["客商类型"],"申请日期":r["申请日期"],"开始日期":r["开始日期"],"终止日期":r["终止日期"],"是否延期":r["是否延期"],"服务内容":r["服务内容"],"服务部门":r["服务部门"],"申请类型":r["申请类型"],"合同内容":r["合同内容"],"垫付":r["垫付"],"垫付金额":r["垫付金额"],"垫付周期":r["垫付周期"],"月服务费":r["月服务费"],"垫付说明":r["垫付说明"],"信息费比例":r["信息费比例"],"签单支持部门":r["签单支持部门"],"签单支持员工":r["签单支持员工"],"附件":a.uploadArry}};t.subjects.length>0&&t.subjects.forEach(function(e,t){i.push({"原合同内容":e.old,"修改后合同内容":e.new})}),l["contract"]["标准合同修改内容"]=i,a.$loading.open(),n["a"].post("/api/Crm/Contract/Add",l).then(function(e){a.$loading.close();var t=e;t.code>0?a.$message.error(t.msg):(a.onClose(),a.uploadArry=[],a.$message.success(t.msg))}).catch(function(e){a.$loading.close(),console.log(e)})}})},serviceloadData:function(e){var t=e[e.length-1],a=this;t.loading=!0,n["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:t.value}).then(function(e){t.loading=!1,0===e.code&&(e.data.length>0?(t.children=[],e.data.forEach(function(e,a){var o={};o.value=e.code,o.label=e.name,o.isLeaf=!1,t.children.push(o)}),a.serviceOptions=Object(i["a"])(a.serviceOptions)):(t.isLeaf=!0,t.loading=!1))}).catch(function(e){console.log(e),t.loading=!1})},serviceOnChange:function(e){},loadData:function(e){var t=e[e.length-1],a=this;t.loading=!0,n["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:t.value}).then(function(e){t.loading=!1,0===e.code&&(e.data.length>0?(t.children=[],e.data.forEach(function(e,a){var o={};o.value=e.code,o.label=e.name,o.isLeaf=!1,t.children.push(o)}),a.options=Object(i["a"])(a.options)):(t.isLeaf=!0,t.loading=!1))}).catch(function(e){console.log(e),t.loading=!1})},onChange:function(e){this.DepList=[],this.SaleUserid="",this.userbydepid(e[e.length-1])},userbydepid:function(e){var t=this;n["a"].post("/api/Org/User/UsersByDepId",{DepId:e}).then(function(e){var a=e;0===a.code&&(t.DepList=a.data)}).catch(function(e){console.log(e)})},add:function(){var e=0;this.subjects.forEach(function(t,a){e=t.key>e?t.key:e}),this.subjects.push({key:e+1,old:"",new:""})},remove:function(e){this.subjects=this.subjects.filter(function(t){return t.key!=e});this.form.getFieldValue("keys")},ConfirmNumber:function(e,t,a){!t||Object(l["c"])(t)?a():a("请输入数字！")},uploadFile:function(){var e=this;dd.ready(function(){dd.biz.util.uploadAttachment({image:{multiple:!0,compress:!1,max:9,spaceId:e.SpaceId.toString()},space:{corpId:e.fescoMessage.corpId,spaceId:e.SpaceId.toString(),max:9},file:{spaceId:e.SpaceId.toString(),max:9},types:["file"],onSuccess:function(t){e.uploadArry=e.uploadArry.concat(t.data)},onFail:function(e){}})})},deleteFile:function(e){var t=this;this.uploadArry.forEach(function(a,o){a.fileId===e&&t.uploadArry.splice(o,1)})},preview:function(e){var t=this;dd.ready(function(){dd.biz.cspace.preview({corpId:t.fescoMessage.corpId,spaceId:t.SpaceId.toString(),fileId:e.fileId,fileName:e.fileName,fileSize:e.fileSize,fileType:e.fileType,onSuccess:function(){},onFail:function(e){}})})}}},c=s,u=a("2877"),p=Object(u["a"])(c,o,r,!1,null,null,null);t["default"]=p.exports},aae3:function(e,t,a){var o=a("d3f4"),r=a("2d95"),i=a("2b4c")("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==r(e))}},b0c5:function(e,t,a){"use strict";var o=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:o!==/./.exec},{exec:o})},c8bb:function(e,t,a){e.exports=a("54a1")},f410:function(e,t,a){a("1af6"),e.exports=a("584a").Array.isArray}}]);