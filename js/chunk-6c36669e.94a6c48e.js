(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c36669e","chunk-badfd94c"],{"015a":function(t,e,a){},"2d52":function(t,e,a){},"42d1":function(t,e,a){"use strict";var n=a("2d52"),o=a.n(n);o.a},"5dbc":function(t,e,a){var n=a("d3f4"),o=a("8b97").set;t.exports=function(t,e,a){var i,r=e.constructor;return r!==a&&"function"==typeof r&&(i=r.prototype)!==a.prototype&&n(i)&&o&&o(t,i),t}},"8b97":function(t,e,a){var n=a("d3f4"),o=a("cb7c"),i=function(t,e){if(o(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,a){return i(t,a),e?t.__proto__=a:n(t,a),t}}({},!1):void 0),check:i}},aa77:function(t,e,a){var n=a("5ca1"),o=a("be13"),i=a("79e5"),r=a("fdef"),c="["+r+"]",s="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),d=function(t,e,a){var o={},c=i(function(){return!!r[t]()||s[t]()!=s}),l=o[t]=c?e(f):r[t];a&&(o[a]=l),n(n.P+n.F*c,"String",o)},f=d.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},c5f6:function(t,e,a){"use strict";var n=a("7726"),o=a("69a8"),i=a("2d95"),r=a("5dbc"),c=a("6a99"),s=a("79e5"),l=a("9093").f,u=a("11e9").f,d=a("86cc").f,f=a("aa77").trim,p="Number",m=n[p],h=m,g=m.prototype,v=i(a("2aeb")(g))==p,y="trim"in String.prototype,S=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():f(e,3);var a,n,o,i=e.charCodeAt(0);if(43===i||45===i){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var r,s=e.slice(2),l=0,u=s.length;l<u;l++)if(r=s.charCodeAt(l),r<48||r>o)return NaN;return parseInt(s,n)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof m&&(v?s(function(){g.valueOf.call(a)}):i(a)!=p)?r(new h(S(e)),a,m):S(e)};for(var _,I=a("9e1e")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;I.length>b;b++)o(h,_=I[b])&&!o(m,_)&&d(m,_,u(h,_));m.prototype=g,g.constructor=m,a("2aba")(n,p,m)}},cef7:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:"匹配账单",destroyOnClose:!0,visible:this.visible.show,width:1100,maskClosable:!1,footer:null},on:{cancel:t.onClose}},[a("a-row",{attrs:{gutter:30}},[a("a-col",{attrs:{span:24}},[a("a-row",{attrs:{gutter:5}},[a("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          公司:\n        ")]),a("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail.ComName)+"\n        ")]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          户名:\n        ")]),a("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["户名"])+"\n        ")]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          金额:\n        ")]),a("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["金额"])+"\n        ")])],1),a("a-row",{attrs:{gutter:5}},[a("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          记账日期:\n        ")]),a("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["记账日期"])+"\n        ")]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          摘要:\n        ")]),a("a-col",{attrs:{span:14}},[t._v("\n           "+t._s(t.visible.claimdetail["摘要"])+"\n        ")])],1)],1),a("a-col",{staticClass:"bright",attrs:{span:24}},[a("a-divider",{attrs:{orientation:"left"}},[t._v("账单查询")]),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"BillGuid",size:"middle"},scopedSlots:t._u([{key:"action",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[30!=n.Receipted?a("a",{on:{click:function(e){return t.claim(n,"line")}}},[t._v("认领")]):t._e()])}},{key:"ProductLineText",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(t.visible.ComProductLine[n.ProductLine])+"\n        ")])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1)],1)],1)},o=[],i=(a("ac6a"),a("b775")),r=[{title:"公司名称",dataIndex:"ComName",width:200},{title:"产品线",scopedSlots:{customRender:"ProductLineText"}},{title:"所属月份",dataIndex:"所属月份"},{title:"代发薪资",dataIndex:"代发薪资"},{title:"公积金",dataIndex:"公积金"},{title:"商险",dataIndex:"商险"},{title:"服务费",dataIndex:"服务费"},{title:"社保",dataIndex:"社保"},{title:"账单金额",dataIndex:"账单金额"},{title:"操作",scopedSlots:{customRender:"action"},width:140}],c={props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,claimdetail:{},ComProductLine:{},ComName:""},columns:r,dataSource:[],form:this.$form.createForm(this),AFormImportRules:{Amount:[{required:!0,message:"请输入"},{validator:this.checkAmount}]},formSearch:{Keyword:"",pageSize:5,current:1,total:0,ComProductLineGuid:""},InvApplyStatus:{},comNameText:"",comProductLineText:"",selected:{},comNameInp:"",InvoiceOpenType:{},InvoicePaymentType:{}}},watch:{show:function(t,e){var a=this;a.visible=t,console.log(a.visible),t.show&&a.init()}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields(),this.comNameText="",this.comProductLineText="",this.selected={},this.kpDataSource=[],this.formSearch.Keyword=""},init:function(){var t=this;console.log(t.visible),i["a"].post("/api/Dim/Enum/GetEnum",{Names:["InvApplyStatus","InvoiceOpenType","InvoicePaymentType"]}).then(function(e){0===e.code&&(e.data.InvApplyStatus.forEach(function(e,a){t.InvApplyStatus[e.key]=e.text}),e.data.InvoicePaymentType.forEach(function(e,a){t.InvoicePaymentType[e.key]=e.text}),e.data.InvoiceOpenType.forEach(function(e,a){t.InvoiceOpenType[e.key]=e.text}))}).catch(function(e){t.$loading.close(),console.log(e)}),this.pagechange(1)},initPage:function(){this.pagechange(1)},pagechange:function(t){var e=this;e.formSearch.current=t,e.formSearch.ComGuid=this.visible.claimdetail.ComGuid,e.$loading.open(),i["a"].post("/api/Bill/Info/List",e.formSearch).then(function(t){e.$loading.close(),0===t.code?(e.dataSource=t.data.rows,e.formSearch.total=t.count):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)})},claim:function(t,e){var a=this,n=this;this.form.validateFields(function(e,o){if(!e){var r=o,c="";r.RecPISplitGuid=a.visible.claimdetail.RecPISplitGuid,r.BillGuid=t.BillGuid,c='是否将该笔到款认领到"'+t.ComName+'"的"'+t["所属月份"]+'"月份账单上吗？',a.$confirm({title:c,content:"",onOk:function(){i["a"].post("/api/Bill/Receipt/PickFromCom",r).then(function(t){var e=t;e.code>0?n.$message.error(e.msg):(n.onClose(),n.$message.success(e.msg))}).catch(function(t){console.log(t)})},onCancel:function(){}})}})},changeComName:function(){this.formSearch.Keyword?this.comNameInp="":this.comNameInp="comNameInpErr"}}},s=c,l=(a("42d1"),a("2877")),u=Object(l["a"])(s,n,o,!1,null,"1e0a3736",null);e["default"]=u.exports},d88a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"RecPIGuid"},scopedSlots:t._u([{key:"action",fn:function(e,n){return 2!=t.type?a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.claimproductline(n)}}},[t._v("匹配账单")])]):t._e()}},{key:"Status",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\r\n        "+t._s(t.RecPublishItemStatus[n.Status])+"\r\n    ")])}},{key:"BankId",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\r\n        "+t._s(t.Bank[n.BankId])+"\r\n    ")])}},{key:"khBank",fn:function(e,n){return[a("a-tooltip",[a("template",{slot:"title"},[t._v("\r\n          "+t._s(n["开户行"])+"\r\n        ")]),a("div",{staticClass:"remark-text ellipsis"},[t._v(t._s(n["开户行"]))])],2)]}},{key:"Remark",fn:function(e,n){return[a("a-tooltip",[a("template",{slot:"title"},[t._v("\r\n          "+t._s(n["摘要"])+"\r\n        ")]),a("div",{staticClass:"remark-text ellipsis"},[t._v(t._s(n["摘要"]))])],2)]}}],null,!0)},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2),a("modal-claim-productline",{attrs:{show:t.drawer.claimproductline,refresh:t.pagerefresh}})],1)},o=[],i=(a("ac6a"),a("c5f6"),a("b775")),r=a("cef7"),c=[{title:"公司名称",dataIndex:"ComName"},{title:"户名",dataIndex:"户名",key:"户名"},{title:"交易金额",dataIndex:"交易金额"},{title:"剩余金额",dataIndex:"金额",key:"金额"},{title:"记账日期",dataIndex:"记账日期",key:"记账日期"},{title:"摘要",dataIndex:"摘要",key:"摘要",scopedSlots:{customRender:"Remark"}},{title:"操作",scopedSlots:{customRender:"action"},width:100}],s={components:{ModalClaimProductline:r["default"]},props:{assetsdetail:{type:Object,default:function(){return{}}},type:{type:Number,default:""}},data:function(){return{columns:c,dataSource:[],formSearch:{ComGuid:"",ComProductLineGuid:"",pageSize:5,current:1,total:0},drawer:{claimproductline:{show:!1}},ComProductLine:{}}},mounted:function(){var t=this;t.init()},computed:{},methods:{init:function(){var t=this;i["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine"]}).then(function(e){0===e.code&&e.data.ComProductLine.forEach(function(e,a){t.ComProductLine[e.key]=e.text})}).catch(function(e){t.$loading.close(),console.log(e)}),this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this;e.formSearch.current=t,e.formSearch.ComGuid=e.assetsdetail.company.ComGuid,e.$loading.open(),i["a"].post("/api/Bill/Receipt/Unmatched",e.formSearch).then(function(t){e.$loading.close(),0===t.code?(e.dataSource=t.data.rows,e.formSearch.total=t.count):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)})},claimproductline:function(t){var e=this;e.drawer.claimproductline={show:!0,claimdetail:t,ComProductLine:e.ComProductLine}}}},l=s,u=(a("da90"),a("2877")),d=Object(u["a"])(l,n,o,!1,null,null,null);e["default"]=d.exports},da90:function(t,e,a){"use strict";var n=a("015a"),o=a.n(n);o.a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);