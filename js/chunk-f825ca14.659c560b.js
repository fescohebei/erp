(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f825ca14"],{"02f4":function(t,e,a){var n=a("4588"),r=a("be13");t.exports=function(t){return function(e,a){var o,i,c=String(r(e)),s=n(a),l=c.length;return s<0||s>=l?t?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===l||(i=c.charCodeAt(s+1))<56320||i>57343?t?c.charAt(s):o:t?c.slice(s,s+2):i-56320+(o-55296<<10)+65536)}}},"0390":function(t,e,a){"use strict";var n=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?n(t,e).length:1)}},"0bb7":function(t,e,a){"use strict";var n=a("6ccd"),r=a.n(n);r.a},"0bfb":function(t,e,a){"use strict";var n=a("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,a){"use strict";a("b0c5");var n=a("2aba"),r=a("32e9"),o=a("79e5"),i=a("be13"),c=a("2b4c"),s=a("520a"),l=c("species"),u=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var p=c(t),d=!o(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),h=d?!o(function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[l]=function(){return a}),a[p](""),!e}):void 0;if(!d||!h||"replace"===t&&!u||"split"===t&&!f){var m=/./[p],v=a(i,p,""[t],function(t,e,a,n,r){return e.exec===s?d&&!r?{done:!0,value:m.call(e,a,n)}:{done:!0,value:t.call(a,e,n)}:{done:!1}}),g=v[0],b=v[1];n(String.prototype,t,g),r(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"2c5e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:"匹配账单",destroyOnClose:!0,visible:this.visible.show,width:1100,maskClosable:!1,footer:null},on:{cancel:t.onClose}},[a("a-row",{attrs:{gutter:30}},[a("a-col",{attrs:{span:24}},[a("a-row",{attrs:{gutter:5}},[a("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          户名:\n        ")]),a("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["户名"])+"\n        ")]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          开户行:\n        ")]),a("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["开户行"])+"\n        ")]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          账号:\n        ")]),a("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["账号"])+"\n        ")])],1),a("a-row",{attrs:{gutter:5}},[a("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          交易时间:\n        ")]),a("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["交易时间"])+"\n        ")]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          交易金额:\n        ")]),a("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["交易金额"])+"\n        ")]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          记账日期:\n        ")]),a("a-col",{attrs:{span:6}},[t._v("\n           "+t._s(t.visible.claimdetail["记账日期"])+"\n        ")])],1),a("a-row",{attrs:{gutter:5}},[a("a-col",{attrs:{span:2,align:"right"}},[t._v("\n          摘要:\n        ")]),a("a-col",{attrs:{span:20}},[t._v("\n           "+t._s(t.visible.claimdetail["摘要"])+"\n        ")])],1)],1),a("a-col",{staticClass:"bright",attrs:{span:24}},[a("a-divider",{attrs:{orientation:"left"}},[t._v("账单查询")]),a("a-form",{attrs:{form:t.form}},[t.visible.ComName?t._e():a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:12}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:3},wrapperCol:{span:21}}},[a("a-input",{class:t.comNameInp,attrs:{placeholder:"请输入"},on:{change:t.changeComName},model:{value:t.formSearch.Keyword,callback:function(e){t.$set(t.formSearch,"Keyword",e)},expression:"formSearch.Keyword"}}),t.formSearch.Keyword?t._e():a("div",{staticClass:"ant-form-explain"},[t._v("请输入公司名称")])],1)],1),a("a-col",{attrs:{md:5}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:t.initPage}},[t._v("查询")])],1)],1)],1)],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"BillGuid",size:"middle"},scopedSlots:t._u([{key:"action",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[30!=n.Receipted?a("a",{on:{click:function(e){return t.claim(n,"line")}}},[t._v("认领")]):t._e()])}},{key:"ComName",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(n.ComName)),a("span",{staticClass:"fs12"},[t._v("("+t._s(t.visible.ComProductLine[n.ProductLine])+")")])])}},{key:"accountMoney",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(n["账单金额"])),a("span",{staticClass:"fs12"},[t._v("("+t._s(t.InvoicePaymentType[n.Receipted])+")")])])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1)],1)],1)},r=[],o=(a("a481"),a("ac6a"),a("b775")),i=[{title:"公司名称/产品线",scopedSlots:{customRender:"ComName"},width:200},{title:"所属月份",dataIndex:"所属月份"},{title:"代发薪资",dataIndex:"代发薪资"},{title:"公积金",dataIndex:"公积金"},{title:"商险",dataIndex:"商险"},{title:"服务费",dataIndex:"服务费"},{title:"社保",dataIndex:"社保"},{title:"账单金额",scopedSlots:{customRender:"accountMoney"}},{title:"操作",scopedSlots:{customRender:"action"},width:140}],c={props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,claimdetail:{},ComProductLine:{},ComName:""},columns:i,dataSource:[],form:this.$form.createForm(this),AFormImportRules:{Amount:[{required:!0,message:"请输入"},{validator:this.checkAmount}]},formSearch:{Keyword:"",pageSize:5,current:1,total:0,ComProductLineGuid:"",BillStatus:"1"},InvApplyStatus:{},comNameText:"",comProductLineText:"",selected:{},comNameInp:"",InvoiceOpenType:{},InvoicePaymentType:{}}},watch:{show:function(t,e){var a=this;a.visible=t,console.log(a.visible),t.show&&a.init()}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields(),this.comNameText="",this.comProductLineText="",this.selected={},this.kpDataSource=[],this.formSearch.Keyword=""},init:function(){var t=this;t.formSearch.Keyword=t.visible.claimdetail["户名"],console.log(t.visible),o["a"].post("/api/Dim/Enum/GetEnum",{Names:["InvApplyStatus","InvoiceOpenType","InvoicePaymentType"]}).then(function(e){0===e.code&&(e.data.InvApplyStatus.forEach(function(e,a){t.InvApplyStatus[e.key]=e.text}),e.data.InvoicePaymentType.forEach(function(e,a){t.InvoicePaymentType[e.key]=e.text}),e.data.InvoiceOpenType.forEach(function(e,a){t.InvoiceOpenType[e.key]=e.text}))}).catch(function(e){t.$loading.close(),console.log(e)}),this.pagechange(1)},initPage:function(){this.pagechange(1)},pagechange:function(t){var e=this;e.formSearch.current=t,e.visible.ComName&&(e.formSearch.Keyword=this.visible.ComName),e.formSearch.Keyword?(e.comNameInp="",e.formSearch.Keyword=e.formSearch.Keyword.replace(/^\s*|\s*$/g,""),e.$loading.open(),o["a"].post("/api/Bill/Info/List",e.formSearch).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})):e.comNameInp="comNameInpErr"},claim:function(t,e){var a=this,n=this;this.form.validateFields(function(e,r){if(!e){var i=r,c="";i.RecPIGuid=a.visible.claimdetail.RecPIGuid,i.BillGuid=t.BillGuid,c='是否将该笔到款认领到"'+t.ComName+'"的"'+t["所属月份"]+'"月份账单上吗？',a.$confirm({title:c,content:"",onOk:function(){o["a"].post("/api/Bill/Receipt/Pick",i).then(function(t){var e=t;e.code>0?n.$message.error(e.msg):(n.onClose(),n.$message.success(e.msg))}).catch(function(t){console.log(t)})},onCancel:function(){}})}})},changeComName:function(){this.formSearch.Keyword?this.comNameInp="":this.comNameInp="comNameInpErr"}}},s=c,l=(a("0bb7"),a("2877")),u=Object(l["a"])(s,n,r,!1,null,"6125a82d",null);e["default"]=u.exports},"520a":function(t,e,a){"use strict";var n=a("0bfb"),r=RegExp.prototype.exec,o=String.prototype.replace,i=r,c="lastIndex",s=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t[c]||0!==e[c]}(),l=void 0!==/()??/.exec("")[1],u=s||l;u&&(i=function(t){var e,a,i,u,f=this;return l&&(a=new RegExp("^"+f.source+"$(?!\\s)",n.call(f))),s&&(e=f[c]),i=r.call(f,t),s&&i&&(f[c]=f.global?i.index+i[0].length:e),l&&i&&i.length>1&&o.call(i[0],a,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)}),i}),t.exports=i},"5f1b":function(t,e,a){"use strict";var n=a("23c6"),r=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var o=a.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"6ccd":function(t,e,a){},a481:function(t,e,a){"use strict";var n=a("cb7c"),r=a("4bf8"),o=a("9def"),i=a("4588"),c=a("0390"),s=a("5f1b"),l=Math.max,u=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};a("214f")("replace",2,function(t,e,a,m){return[function(n,r){var o=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,o,r):a.call(String(o),n,r)},function(t,e){var r=m(a,t,this,e);if(r.done)return r.value;var f=n(t),p=String(this),d="function"===typeof e;d||(e=String(e));var g=f.global;if(g){var b=f.unicode;f.lastIndex=0}var y=[];while(1){var x=s(f,p);if(null===x)break;if(y.push(x),!g)break;var S=String(x[0]);""===S&&(f.lastIndex=c(p,o(f.lastIndex),b))}for(var w="",_=0,I=0;I<y.length;I++){x=y[I];for(var C=String(x[0]),k=l(u(i(x.index),p.length),0),N=[],$=1;$<x.length;$++)N.push(h(x[$]));var E=x.groups;if(d){var R=[C].concat(N,k,p);void 0!==E&&R.push(E);var P=String(e.apply(void 0,R))}else P=v(C,p,k,N,E,e);k>=_&&(w+=p.slice(_,k)+P,_=k+C.length)}return w+p.slice(_)}];function v(t,e,n,o,i,c){var s=n+t.length,l=o.length,u=d;return void 0!==i&&(i=r(i),u=p),a.call(c,u,function(a,r){var c;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(s);case"<":c=i[r.slice(1,-1)];break;default:var u=+r;if(0===u)return a;if(u>l){var p=f(u/10);return 0===p?a:p<=l?void 0===o[p-1]?r.charAt(1):o[p-1]+r.charAt(1):a}c=o[u-1]}return void 0===c?"":c})}})},b0c5:function(t,e,a){"use strict";var n=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})}}]);