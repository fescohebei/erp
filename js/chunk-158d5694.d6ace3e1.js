(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-158d5694","chunk-6200a5eb"],{"02f4":function(t,e,n){var a=n("4588"),o=n("be13");t.exports=function(t){return function(e,n){var r,i,c=String(o(e)),s=a(n),l=c.length;return s<0||s>=l?t?"":void 0:(r=c.charCodeAt(s),r<55296||r>56319||s+1===l||(i=c.charCodeAt(s+1))<56320||i>57343?t?c.charAt(s):r:t?c.slice(s,s+2):i-56320+(r-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var a=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},"0605":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout",[n("a-layout-content",[n("a-card",{attrs:{bordered:!1}},[n("a-form",{attrs:{form:t.form,layout:"horizontal"}},[n("div",{class:t.advanced?null:"fold"},[n("a-row",{attrs:{gutter:10}},[n("a-col",{attrs:{md:6}},[n("a-form-item",{attrs:{label:"户名",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[n("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.Keyword,callback:function(e){t.$set(t.formSearch,"Keyword",e)},expression:"formSearch.Keyword"}})],1)],1),n("a-col",{attrs:{span:12}},[n("a-form-item",[n("a-button",{attrs:{type:"primary"},on:{click:t.init}},[t._v("查询")])],1)],1)],1)],1)]),n("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"index"},scopedSlots:t._u([{key:"action",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[n("a",{on:{click:function(e){return t.claimproductline(a)}}},[t._v("匹配产品线")])])}},{key:"Status",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\n            "+t._s(t.RecPublishItemStatus[a.Status])+"\n        ")])}},{key:"BankId",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\n            "+t._s(t.Bank[a.BankId])+"\n        ")])}}])},[n("template",{slot:"footer"},[n("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1)],1),n("modal-claim-productline",{attrs:{show:t.drawer.claimproductline,refresh:t.pagerefresh}})],1)},o=[],r=(n("ac6a"),n("c32d"),n("b775")),i=(n("61f7"),n("2c5e")),c=[{title:"状态",scopedSlots:{customRender:"Status"},key:"Status",width:90},{title:"银行名称",scopedSlots:{customRender:"BankId"},key:"BankId",width:90},{title:"户名",dataIndex:"户名",key:"户名",width:250},{title:"开户行",dataIndex:"开户行",key:"开户行",width:250},{title:"账号",dataIndex:"账号",key:"账号",width:150},{title:"交易金额",dataIndex:"交易金额",key:"交易金额",width:100},{title:"记账日期",dataIndex:"记账日期",key:"记账日期",width:100},{title:"交易时间",dataIndex:"交易时间",key:"交易时间",width:200},{title:"摘要",dataIndex:"摘要",key:"摘要"},{title:"操作",scopedSlots:{customRender:"action"},width:220}],s={components:{ModalClaimProductline:i["default"]},data:function(){return{advanced:!0,columns:c,visible:!1,formSearch:{Keyword:"",pageSize:10,current:1,total:0,RecPublishItemStatus:10},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],drawer:{claimproductline:{show:!1}},modal:{exporttransfer:{show:!1}},userid:"",ComProductLine:[],UserArray:{},DeptArray:{},InvApplyStatusList:{},InvApplyStatus:[],InvApplyItemType:[],FormComponentValues:{},RecPublishItemStatus:{},Bank:{}}},mounted:function(){var t=this;t.init()},methods:{init:function(){var t=this;r["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine","InvApplyStatus","InvApplyItemType","RecPublishItemStatus","Bank"]}).then(function(e){0===e.code&&(t.InvApplyStatusList=e.data.InvApplyStatus,e.data.ComProductLine.forEach(function(e,n){t.ComProductLine[e.key]=e.text}),e.data.InvApplyStatus.forEach(function(e,n){t.InvApplyStatus[e.key]=e.text}),e.data.InvApplyItemType.forEach(function(e,n){t.InvApplyItemType[e.key]=e.text}),e.data.RecPublishItemStatus.forEach(function(e,n){t.RecPublishItemStatus[e.key]=e.text}),e.data.Bank.forEach(function(e,n){t.Bank[e.key]=e.text}))}).catch(function(e){t.$loading.close(),console.log(e)}),r["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept"]}).then(function(e){0===e.code&&(t.UserArray=e.data.User,t.DeptArray=e.data.Dept)}).catch(function(t){console.log(t)}),this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this;e.formSearch.current=t,e.$loading.open(),r["a"].post("/api/Receipt/PublishItem/ListMatching",e.formSearch).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},claimproductline:function(t){var e=this;e.drawer.claimproductline={show:!0,claimdetail:t,ComProductLine:e.ComProductLine,ComName:t["户名"]}}}},l=s,u=(n("3664"),n("2877")),p=Object(u["a"])(l,a,o,!1,null,null,null);e["default"]=p.exports},"0bfb":function(t,e,n){"use strict";var a=n("cb7c");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var a=n("2aba"),o=n("32e9"),r=n("79e5"),i=n("be13"),c=n("2b4c"),s=n("520a"),l=c("species"),u=!r(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),p=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=c(t),f=!r(function(){var e={};return e[d]=function(){return 7},7!=""[t](e)}),m=f?!r(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[d](""),!e}):void 0;if(!f||!m||"replace"===t&&!u||"split"===t&&!p){var h=/./[d],v=n(i,d,""[t],function(t,e,n,a,o){return e.exec===s?f&&!o?{done:!0,value:h.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),g=v[0],y=v[1];a(String.prototype,t,g),o(RegExp.prototype,d,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}}},"28a5":function(t,e,n){"use strict";var a=n("aae3"),o=n("cb7c"),r=n("ebd6"),i=n("0390"),c=n("9def"),s=n("5f1b"),l=n("520a"),u=n("79e5"),p=Math.min,d=[].push,f="split",m="length",h="lastIndex",v=4294967295,g=!u(function(){RegExp(v,"y")});n("214f")("split",2,function(t,e,n,u){var y;return y="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[m]||2!="ab"[f](/(?:ab)*/)[m]||4!="."[f](/(.?)(.?)/)[m]||"."[f](/()()/)[m]>1||""[f](/.?/)[m]?function(t,e){var o=String(this);if(void 0===t&&0===e)return[];if(!a(t))return n.call(o,t,e);var r,i,c,s=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,f=void 0===e?v:e>>>0,g=new RegExp(t.source,u+"g");while(r=l.call(g,o)){if(i=g[h],i>p&&(s.push(o.slice(p,r.index)),r[m]>1&&r.index<o[m]&&d.apply(s,r.slice(1)),c=r[0][m],p=i,s[m]>=f))break;g[h]===r.index&&g[h]++}return p===o[m]?!c&&g.test("")||s.push(""):s.push(o.slice(p)),s[m]>f?s.slice(0,f):s}:"0"[f](void 0,0)[m]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,a){var o=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,o,a):y.call(String(o),n,a)},function(t,e){var a=u(y,t,this,e,y!==n);if(a.done)return a.value;var l=o(t),d=String(this),f=r(l,RegExp),m=l.unicode,h=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(g?"y":"g"),S=new f(g?l:"^(?:"+l.source+")",h),x=void 0===e?v:e>>>0;if(0===x)return[];if(0===d.length)return null===s(S,d)?[d]:[];var b=0,I=0,k=[];while(I<d.length){S.lastIndex=g?I:0;var w,C=s(S,g?d:d.slice(I));if(null===C||(w=p(c(S.lastIndex+(g?0:I)),d.length))===b)I=i(d,I,m);else{if(k.push(d.slice(b,I)),k.length===x)return k;for(var _=1;_<=C.length-1;_++)if(k.push(C[_]),k.length===x)return k;I=b=w}}return k.push(d.slice(b)),k}]})},"2c5e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-modal",{attrs:{title:"匹配产品线",destroyOnClose:!0,visible:this.visible.show,width:1100,maskClosable:!1,footer:null},on:{cancel:t.onClose}},[n("a-row",{attrs:{gutter:30}},[n("a-col",{attrs:{span:24}},[n("a-row",{attrs:{gutter:5}},[n("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          户名:\n        ")]),n("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["户名"])+"\n        ")]),n("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          开户行:\n        ")]),n("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["开户行"])+"\n        ")]),n("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          账号:\n        ")]),n("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["账号"])+"\n        ")])],1),n("a-row",{attrs:{gutter:5}},[n("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          交易时间:\n        ")]),n("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["交易时间"])+"\n        ")]),n("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          交易金额:\n        ")]),n("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["交易金额"])+"\n        ")]),n("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          记账日期:\n        ")]),n("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["记账日期"])+"\n        ")])],1),n("a-row",{attrs:{gutter:5}},[n("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          摘要:\n        ")]),n("a-col",{attrs:{span:20}},[t._v("\n           "+t._s(t.visible.claimdetail["摘要"])+"\n        ")])],1)],1),n("a-col",{staticClass:"bright",attrs:{span:12}},[n("a-divider",{attrs:{orientation:"left"}},[t._v("公司查询")]),n("a-form",{attrs:{form:t.form}},[t.visible.ComName?t._e():n("a-row",{attrs:{gutter:10}},[n("a-col",{attrs:{md:19}},[n("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[n("a-input",{class:t.comNameInp,attrs:{placeholder:"请输入"},on:{change:t.changeComName},model:{value:t.formSearch.Keyword,callback:function(e){t.$set(t.formSearch,"Keyword",e)},expression:"formSearch.Keyword"}}),t.formSearch.Keyword?t._e():n("div",{staticClass:"ant-form-explain"},[t._v("请输入公司名称")])],1)],1),n("a-col",{attrs:{md:5}},[n("a-form-item",[n("a-button",{attrs:{type:"primary"},on:{click:t.initPage}},[t._v("查询")])],1)],1)],1)],1),n("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"ComProductLineGuid",size:"middle"},scopedSlots:t._u([{key:"action",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[n("a",{on:{click:function(e){return t.lookClaim(a)}}},[t._v("查看开票")]),n("a-divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(e){return t.claim(a,"line")}}},[t._v("认领")])],1)}},{key:"ProductLineText",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(t.visible.ComProductLine[a.ProductLine])+"\n        ")])}}])},[n("template",{slot:"footer"},[n("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1),n("a-col",{attrs:{span:12}},[n("a-divider",{attrs:{orientation:"left"}},[t._v(t._s(t.comNameText)+"开票信息")]),n("a-table",{attrs:{columns:t.kpColumns,dataSource:t.kpDataSource,pagination:!1,rowKey:"InvApplyGuid",size:"middle"},scopedSlots:t._u([{key:"Status",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(t.InvApplyStatus[a.Status])+"\n        ")])}},{key:"InvoiceOpenType",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(t.InvoiceOpenType[a.InvoiceOpenType])+"\n        ")])}},{key:"InvoicePaymentType",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(t.InvoicePaymentType[a.InvoicePaymentType])+"\n        ")])}},{key:"action",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[30!=a.InvoicePaymentType?n("a",{on:{click:function(e){return t.claim(a,"invoice")}}},[t._v("认领")]):t._e()])}}])},[n("template",{slot:"footer"},[n("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.kpformSearch.pageSize,total:t.kpformSearch.total,current:t.kpformSearch.current},on:{change:t.kpPagechange}})],1)],2)],1)],1)],1)},o=[],r=(n("ac6a"),n("b775")),i=[{title:"公司名称",dataIndex:"ComName",width:200},{title:"产品线",scopedSlots:{customRender:"ProductLineText"}},{title:"操作",scopedSlots:{customRender:"action"},width:140}],c=[{title:"状态",scopedSlots:{customRender:"Status"}},{title:"开票类型",scopedSlots:{customRender:"InvoiceOpenType"}},{title:"发票种类",dataIndex:"发票种类"},{title:"所属月份",dataIndex:"所属月份"},{title:"发票到款情况",scopedSlots:{customRender:"InvoicePaymentType"}},{title:"账单金额",dataIndex:"账单金额"},{title:"操作",scopedSlots:{customRender:"action"},width:80}],s={props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,claimdetail:{},ComProductLine:{},ComName:""},columns:i,kpColumns:c,dataSource:[],kpDataSource:[],form:this.$form.createForm(this),AFormImportRules:{Amount:[{required:!0,message:"请输入"},{validator:this.checkAmount}]},formSearch:{Keyword:"",pageSize:5,current:1,total:0},kpformSearch:{pageSize:5,current:1,total:0},InvApplyStatus:{},comNameText:"",comProductLineText:"",selected:{},comNameInp:"",InvoiceOpenType:{},InvoicePaymentType:{}}},watch:{show:function(t,e){var n=this;n.visible=t,console.log(n.visible),t.show&&n.init()}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields(),this.comNameText="",this.comProductLineText="",this.selected={},this.kpDataSource=[],this.formSearch.Keyword=""},init:function(){var t=this;t.formSearch.Keyword=t.visible.claimdetail["户名"],console.log(t.visible),r["a"].post("/api/Dim/Enum/GetEnum",{Names:["InvApplyStatus","InvoiceOpenType","InvoicePaymentType"]}).then(function(e){0===e.code&&(e.data.InvApplyStatus.forEach(function(e,n){t.InvApplyStatus[e.key]=e.text}),e.data.InvoicePaymentType.forEach(function(e,n){t.InvoicePaymentType[e.key]=e.text}),e.data.InvoiceOpenType.forEach(function(e,n){t.InvoiceOpenType[e.key]=e.text}))}).catch(function(e){t.$loading.close(),console.log(e)}),this.pagechange(1)},initPage:function(){this.pagechange(1)},pagechange:function(t){var e=this;e.formSearch.current=t,e.visible.ComName&&(e.formSearch.Keyword=this.visible.ComName),e.formSearch.Keyword?(e.comNameInp="",e.$loading.open(),r["a"].post("/api/Crm/ProductLine/ServiceList",e.formSearch).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})):e.comNameInp="comNameInpErr"},claim:function(t,e){var n=this,a=this;this.form.validateFields(function(o,i){if(!o){var c=i,s="";c.RecPIGuid=n.visible.claimdetail.RecPIGuid,c.ComProductLineGuid=t.ComProductLineGuid,"invoice"==e?(c.InvApplyGuid=t.InvApplyGuid,s='是否将该笔到款认领到"'+a.comNameText+'"的"'+t["所属月份"]+'"这笔借票申请上吗？'):s='是否将该笔到款认领到"'+a.comNameText+'"的"'+a.comProductLineText+'"该条产品线上吗？',n.$confirm({title:s,content:"",onOk:function(){r["a"].post("/api/Receipt/PublishItem/Pick",c).then(function(t){var e=t;e.code>0?a.$message.error(e.msg):(a.onClose(),a.$message.success(e.msg))}).catch(function(t){console.log(t)})},onCancel:function(){}})}})},lookClaim:function(t){var e=this;e.selected=t,e.comNameText=t.ComName,e.comProductLineText=e.visible.ComProductLine[t.ProductLine],e.kpformSearch.ComGuid=t.ComGuid,e.kpformSearch.ComProductLineGuid=t.ComProductLineGuid,this.kpPagechange(1)},kpPagerefresh:function(){this.kpPagechange(this.kpformSearch.current)},kpPagechange:function(t){var e=this;e.kpformSearch.current=t,e.$loading.open(),r["a"].post("/api/Invoice/Apply/ListByCom",e.kpformSearch).then(function(t){e.$loading.close(),0===t.code&&(e.kpDataSource=t.data.rows,e.kpformSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},changeComName:function(){this.formSearch.Keyword?this.comNameInp="":this.comNameInp="comNameInpErr"}}},l=s,u=(n("fffd"),n("2877")),p=Object(u["a"])(l,a,o,!1,null,"3f5fdf65",null);e["default"]=p.exports},3664:function(t,e,n){"use strict";var a=n("d071"),o=n.n(a);o.a},"520a":function(t,e,n){"use strict";var a=n("0bfb"),o=RegExp.prototype.exec,r=String.prototype.replace,i=o,c="lastIndex",s=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t[c]||0!==e[c]}(),l=void 0!==/()??/.exec("")[1],u=s||l;u&&(i=function(t){var e,n,i,u,p=this;return l&&(n=new RegExp("^"+p.source+"$(?!\\s)",a.call(p))),s&&(e=p[c]),i=o.call(p,t),s&&i&&(p[c]=p.global?i.index+i[0].length:e),l&&i&&i.length>1&&r.call(i[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)}),i}),t.exports=i},"5f1b":function(t,e,n){"use strict";var a=n("23c6"),o=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var r=n.call(t,e);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"61f7":function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return o}),n.d(e,"d",function(){return r}),n.d(e,"c",function(){return i});n("28a5");function a(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)}function o(t){var e=!0;if((e&&!t||!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(t))&&(e=!1),e&&18==t.length){for(var n=t.split(""),a=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],o=[1,0,"X",9,8,7,6,5,4,3,2],r=0,i=0,c=0,s=0;s<17;s++)i=n[s],c=a[s],r+=i*c;o[r%11]!=n[17]&&(e=!1)}return e}function r(t){var e=/^1[3|4|5|6|7|8|9][0-9]\d{8}$/;return e.test(t)}function i(t){var e=/^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;return e.test(t)}},aae3:function(t,e,n){var a=n("d3f4"),o=n("2d95"),r=n("2b4c")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==o(t))}},b0c5:function(t,e,n){"use strict";var a=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},d071:function(t,e,n){},f1a7:function(t,e,n){},fffd:function(t,e,n){"use strict";var a=n("f1a7"),o=n.n(a);o.a}}]);