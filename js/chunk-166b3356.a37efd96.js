(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-166b3356","chunk-9b1f5526"],{"02f4":function(t,e,n){var a=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var o,r,c=String(i(e)),l=a(n),s=c.length;return l<0||l>=s?t?"":void 0:(o=c.charCodeAt(l),o<55296||o>56319||l+1===s||(r=c.charCodeAt(l+1))<56320||r>57343?t?c.charAt(l):o:t?c.slice(l,l+2):r-56320+(o-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var a=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},"0b75":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout",[n("a-layout-content",[n("a-card",{attrs:{bordered:!1}},[n("a-form",{attrs:{form:t.form,layout:"horizontal"}},[n("div",{class:t.advanced?null:"fold"},[n("a-row",{attrs:{gutter:10}},[n("a-col",{attrs:{md:6}},[n("a-form-item",{attrs:{label:"户名",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[n("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.Keyword,callback:function(e){t.$set(t.formSearch,"Keyword",e)},expression:"formSearch.Keyword"}})],1)],1),n("a-col",{attrs:{xs:3,sm:3,md:3}},[n("a-form-item",[n("a-button",{attrs:{type:"primary"},on:{click:t.init}},[t._v("查询")])],1)],1)],1)],1)]),n("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"RecPIGuid"},scopedSlots:t._u([{key:"action",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[n("a",{on:{click:function(e){return t.claimproductline(a)}}},[t._v("匹配账单")])])}},{key:"Status",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\n            "+t._s(t.RecPublishItemStatus[a.Status])+"\n        ")])}},{key:"BankId",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\n            "+t._s(t.Bank[a.BankId])+"\n        ")])}},{key:"khBank",fn:function(e,a){return[n("a-tooltip",[n("template",{slot:"title"},[t._v("\n              "+t._s(a["开户行"])+"\n            ")]),n("div",{staticClass:"remark-text ellipsis"},[t._v(t._s(a["开户行"]))])],2)]}},{key:"Remark",fn:function(e,a){return[n("a-tooltip",[n("template",{slot:"title"},[t._v("\n              "+t._s(a["摘要"])+"\n            ")]),n("div",{staticClass:"remark-text ellipsis"},[t._v(t._s(a["摘要"]))])],2)]}}])},[n("template",{slot:"footer"},[n("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1)],1),n("modal-claim-productline",{attrs:{show:t.drawer.claimproductline,refresh:t.pagerefresh}})],1)},i=[],o=(n("ac6a"),n("c32d"),n("b775")),r=(n("61f7"),n("cef7")),c=[{title:"公司名称",dataIndex:"ComName",width:80},{title:"户名",dataIndex:"户名",key:"户名",width:200},{title:"交易金额",dataIndex:"交易金额",width:100},{title:"剩余金额",dataIndex:"金额",key:"金额",width:100},{title:"记账日期",dataIndex:"记账日期",key:"记账日期",width:100},{title:"摘要",dataIndex:"摘要",key:"摘要",scopedSlots:{customRender:"Remark"},width:100},{title:"操作",scopedSlots:{customRender:"action"},width:100}],l={components:{ModalClaimProductline:r["default"]},data:function(){return{advanced:!0,columns:c,visible:!1,formSearch:{Keyword:"",pageSize:10,current:1,total:0},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],drawer:{claimproductline:{show:!1}},modal:{exporttransfer:{show:!1}},userid:"",ComProductLine:{},UserArray:{},DeptArray:{},InvApplyStatusList:{},InvApplyStatus:[],InvApplyItemType:[],FormComponentValues:{},RecPublishItemStatus:{},Bank:{}}},mounted:function(){var t=this;t.init()},methods:{init:function(){var t=this;o["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine","InvApplyStatus","InvApplyItemType","RecPublishItemStatus","Bank"]}).then(function(e){0===e.code&&(t.InvApplyStatusList=e.data.InvApplyStatus,e.data.ComProductLine.forEach(function(e,n){t.ComProductLine[e.key]=e.text}),e.data.InvApplyStatus.forEach(function(e,n){t.InvApplyStatus[e.key]=e.text}),e.data.InvApplyItemType.forEach(function(e,n){t.InvApplyItemType[e.key]=e.text}),e.data.RecPublishItemStatus.forEach(function(e,n){t.RecPublishItemStatus[e.key]=e.text}),e.data.Bank.forEach(function(e,n){t.Bank[e.key]=e.text}))}).catch(function(e){t.$loading.close(),console.log(e)}),o["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept"]}).then(function(e){0===e.code&&(t.UserArray=e.data.User,t.DeptArray=e.data.Dept)}).catch(function(t){console.log(t)}),this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this;e.formSearch.current=t,e.$loading.open(),o["a"].post("/api/Bill/Receipt/Unmatched",e.formSearch).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},claimproductline:function(t){var e=this;e.drawer.claimproductline={show:!0,claimdetail:t,ComProductLine:e.ComProductLine}}}},s=l,u=(n("fd9d"),n("2877")),d=Object(u["a"])(s,a,i,!1,null,null,null);e["default"]=d.exports},"0bfb":function(t,e,n){"use strict";var a=n("cb7c");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0dda":function(t,e,n){},"214f":function(t,e,n){"use strict";n("b0c5");var a=n("2aba"),i=n("32e9"),o=n("79e5"),r=n("be13"),c=n("2b4c"),l=n("520a"),s=c("species"),u=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=c(t),f=!o(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),h=f?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[s]=function(){return n}),n[p](""),!e}):void 0;if(!f||!h||"replace"===t&&!u||"split"===t&&!d){var m=/./[p],v=n(r,p,""[t],function(t,e,n,a,i){return e.exec===l?f&&!i?{done:!0,value:m.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),g=v[0],y=v[1];a(String.prototype,t,g),i(RegExp.prototype,p,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}}},"28a5":function(t,e,n){"use strict";var a=n("aae3"),i=n("cb7c"),o=n("ebd6"),r=n("0390"),c=n("9def"),l=n("5f1b"),s=n("520a"),u=n("79e5"),d=Math.min,p=[].push,f="split",h="length",m="lastIndex",v=4294967295,g=!u(function(){RegExp(v,"y")});n("214f")("split",2,function(t,e,n,u){var y;return y="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[h]||2!="ab"[f](/(?:ab)*/)[h]||4!="."[f](/(.?)(.?)/)[h]||"."[f](/()()/)[h]>1||""[f](/.?/)[h]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!a(t))return n.call(i,t,e);var o,r,c,l=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,f=void 0===e?v:e>>>0,g=new RegExp(t.source,u+"g");while(o=s.call(g,i)){if(r=g[m],r>d&&(l.push(i.slice(d,o.index)),o[h]>1&&o.index<i[h]&&p.apply(l,o.slice(1)),c=o[0][h],d=r,l[h]>=f))break;g[m]===o.index&&g[m]++}return d===i[h]?!c&&g.test("")||l.push(""):l.push(i.slice(d)),l[h]>f?l.slice(0,f):l}:"0"[f](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,a){var i=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,i,a):y.call(String(i),n,a)},function(t,e){var a=u(y,t,this,e,y!==n);if(a.done)return a.value;var s=i(t),p=String(this),f=o(s,RegExp),h=s.unicode,m=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(g?"y":"g"),x=new f(g?s:"^(?:"+s.source+")",m),S=void 0===e?v:e>>>0;if(0===S)return[];if(0===p.length)return null===l(x,p)?[p]:[];var b=0,I=0,w=[];while(I<p.length){x.lastIndex=g?I:0;var k,_=l(x,g?p:p.slice(I));if(null===_||(k=d(c(x.lastIndex+(g?0:I)),p.length))===b)I=r(p,I,h);else{if(w.push(p.slice(b,I)),w.length===S)return w;for(var C=1;C<=_.length-1;C++)if(w.push(_[C]),w.length===S)return w;I=b=k}}return w.push(p.slice(b)),w}]})},3045:function(t,e,n){},"520a":function(t,e,n){"use strict";var a=n("0bfb"),i=RegExp.prototype.exec,o=String.prototype.replace,r=i,c="lastIndex",l=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[c]||0!==e[c]}(),s=void 0!==/()??/.exec("")[1],u=l||s;u&&(r=function(t){var e,n,r,u,d=this;return s&&(n=new RegExp("^"+d.source+"$(?!\\s)",a.call(d))),l&&(e=d[c]),r=i.call(d,t),l&&r&&(d[c]=d.global?r.index+r[0].length:e),s&&r&&r.length>1&&o.call(r[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(r[u]=void 0)}),r}),t.exports=r},"5f1b":function(t,e,n){"use strict";var a=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"61f7":function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"c",function(){return r});n("28a5");function a(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)}function i(t){var e=!0;if((e&&!t||!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(t))&&(e=!1),e&&18==t.length){for(var n=t.split(""),a=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],i=[1,0,"X",9,8,7,6,5,4,3,2],o=0,r=0,c=0,l=0;l<17;l++)r=n[l],c=a[l],o+=r*c;i[o%11]!=n[17]&&(e=!1)}return e}function o(t){var e=/^1[3|4|5|6|7|8|9][0-9]\d{8}$/;return e.test(t)}function r(t){var e=/^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;return e.test(t)}},aae3:function(t,e,n){var a=n("d3f4"),i=n("2d95"),o=n("2b4c")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},b0c5:function(t,e,n){"use strict";var a=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},cc18:function(t,e,n){"use strict";var a=n("3045"),i=n.n(a);i.a},cef7:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-modal",{attrs:{title:"匹配账单",destroyOnClose:!0,visible:this.visible.show,width:1100,maskClosable:!1,footer:null},on:{cancel:t.onClose}},[n("a-row",{attrs:{gutter:30}},[n("a-col",{attrs:{span:24}},[n("a-row",{attrs:{gutter:5}},[n("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          公司:\n        ")]),n("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail.ComName)+"\n        ")]),n("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          户名:\n        ")]),n("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["户名"])+"\n        ")]),n("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          金额:\n        ")]),n("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["金额"])+"\n        ")])],1),n("a-row",{attrs:{gutter:5}},[n("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          记账日期:\n        ")]),n("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["记账日期"])+"\n        ")]),n("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          摘要:\n        ")]),n("a-col",{attrs:{span:14}},[t._v("\n           "+t._s(t.visible.claimdetail["摘要"])+"\n        ")])],1)],1),n("a-col",{staticClass:"bright",attrs:{span:24}},[n("a-divider",{attrs:{orientation:"left"}},[t._v("账单查询")]),n("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"BillGuid",size:"middle"},scopedSlots:t._u([{key:"action",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[30!=a.Receipted?n("a",{on:{click:function(e){return t.claim(a,"line")}}},[t._v("认领")]):t._e()])}},{key:"ProductLineText",fn:function(e,a){return n("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(t.visible.ComProductLine[a.ProductLine])+"\n        ")])}}])},[n("template",{slot:"footer"},[n("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1)],1)],1)},i=[],o=(n("ac6a"),n("b775")),r=[{title:"公司名称",dataIndex:"ComName",width:200},{title:"产品线",scopedSlots:{customRender:"ProductLineText"}},{title:"所属月份",dataIndex:"所属月份"},{title:"账单金额",dataIndex:"账单金额"},{title:"代发薪资",dataIndex:"代发薪资"},{title:"公积金",dataIndex:"公积金"},{title:"商险",dataIndex:"商险"},{title:"服务费",dataIndex:"服务费"},{title:"社保",dataIndex:"社保"},{title:"操作",scopedSlots:{customRender:"action"},width:140}],c={props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,claimdetail:{},ComProductLine:{},ComName:""},columns:r,dataSource:[],form:this.$form.createForm(this),AFormImportRules:{Amount:[{required:!0,message:"请输入"},{validator:this.checkAmount}]},formSearch:{Keyword:"",pageSize:5,current:1,total:0,ComProductLineGuid:""},InvApplyStatus:{},comNameText:"",comProductLineText:"",selected:{},comNameInp:"",InvoiceOpenType:{},InvoicePaymentType:{}}},watch:{show:function(t,e){var n=this;n.visible=t,console.log(n.visible),t.show&&n.init()}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields(),this.comNameText="",this.comProductLineText="",this.selected={},this.kpDataSource=[],this.formSearch.Keyword=""},init:function(){var t=this;console.log(t.visible),o["a"].post("/api/Dim/Enum/GetEnum",{Names:["InvApplyStatus","InvoiceOpenType","InvoicePaymentType"]}).then(function(e){0===e.code&&(e.data.InvApplyStatus.forEach(function(e,n){t.InvApplyStatus[e.key]=e.text}),e.data.InvoicePaymentType.forEach(function(e,n){t.InvoicePaymentType[e.key]=e.text}),e.data.InvoiceOpenType.forEach(function(e,n){t.InvoiceOpenType[e.key]=e.text}))}).catch(function(e){t.$loading.close(),console.log(e)}),this.pagechange(1)},initPage:function(){this.pagechange(1)},pagechange:function(t){var e=this;e.formSearch.current=t,e.formSearch.ComGuid=this.visible.claimdetail.ComGuid,e.$loading.open(),o["a"].post("/api/Bill/Info/List",e.formSearch).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},claim:function(t,e){var n=this,a=this;this.form.validateFields(function(e,i){if(!e){var r=i,c="";r.RecPISplitGuid=n.visible.claimdetail.RecPISplitGuid,r.BillGuid=t.BillGuid,c='是否将该笔到款认领到"'+t.ComName+'"的"'+t["所属月份"]+'"月份账单上吗？',n.$confirm({title:c,content:"",onOk:function(){o["a"].post("/api/Bill/Receipt/PickFromCom",r).then(function(t){var e=t;e.code>0?a.$message.error(e.msg):(a.onClose(),a.$message.success(e.msg))}).catch(function(t){console.log(t)})},onCancel:function(){}})}})},changeComName:function(){this.formSearch.Keyword?this.comNameInp="":this.comNameInp="comNameInpErr"}}},l=c,s=(n("cc18"),n("2877")),u=Object(s["a"])(l,a,i,!1,null,"1b7d5e1e",null);e["default"]=u.exports},fd9d:function(t,e,n){"use strict";var a=n("0dda"),i=n.n(a);i.a}}]);