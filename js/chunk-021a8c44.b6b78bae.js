(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-021a8c44","chunk-2cbe7de5","chunk-f762a1fe","chunk-6574e546","chunk-73ff4645"],{"02f4":function(t,e,a){var r=a("4588"),i=a("be13");t.exports=function(t){return function(e,a){var n,s,o=String(i(e)),l=r(a),c=o.length;return l<0||l>=c?t?"":void 0:(n=o.charCodeAt(l),n<55296||n>56319||l+1===c||(s=o.charCodeAt(l+1))<56320||s>57343?t?o.charAt(l):n:t?o.slice(l,l+2):s-56320+(n-55296<<10)+65536)}}},"0390":function(t,e,a){"use strict";var r=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?r(t,e).length:1)}},"0bfb":function(t,e,a){"use strict";var r=a("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"1af6":function(t,e,a){var r=a("63b6");r(r.S,"Array",{isArray:a("9003")})},"214f":function(t,e,a){"use strict";a("b0c5");var r=a("2aba"),i=a("32e9"),n=a("79e5"),s=a("be13"),o=a("2b4c"),l=a("520a"),c=o("species"),u=!n(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var p=o(t),f=!n(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),h=f?!n(function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[c]=function(){return a}),a[p](""),!e}):void 0;if(!f||!h||"replace"===t&&!u||"split"===t&&!d){var m=/./[p],g=a(s,p,""[t],function(t,e,a,r,i){return e.exec===l?f&&!i?{done:!0,value:m.call(e,a,r)}:{done:!0,value:t.call(a,e,r)}:{done:!1}}),v=g[0],S=g[1];r(String.prototype,t,v),i(RegExp.prototype,p,2==e?function(t,e){return S.call(t,this,e)}:function(t){return S.call(t,this)})}}},"28a5":function(t,e,a){"use strict";var r=a("aae3"),i=a("cb7c"),n=a("ebd6"),s=a("0390"),o=a("9def"),l=a("5f1b"),c=a("520a"),u=a("79e5"),d=Math.min,p=[].push,f="split",h="length",m="lastIndex",g=4294967295,v=!u(function(){RegExp(g,"y")});a("214f")("split",2,function(t,e,a,u){var S;return S="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[h]||2!="ab"[f](/(?:ab)*/)[h]||4!="."[f](/(.?)(.?)/)[h]||"."[f](/()()/)[h]>1||""[f](/.?/)[h]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return a.call(i,t,e);var n,s,o,l=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,f=void 0===e?g:e>>>0,v=new RegExp(t.source,u+"g");while(n=c.call(v,i)){if(s=v[m],s>d&&(l.push(i.slice(d,n.index)),n[h]>1&&n.index<i[h]&&p.apply(l,n.slice(1)),o=n[0][h],d=s,l[h]>=f))break;v[m]===n.index&&v[m]++}return d===i[h]?!o&&v.test("")||l.push(""):l.push(i.slice(d)),l[h]>f?l.slice(0,f):l}:"0"[f](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,r){var i=t(this),n=void 0==a?void 0:a[e];return void 0!==n?n.call(a,i,r):S.call(String(i),a,r)},function(t,e){var r=u(S,t,this,e,S!==a);if(r.done)return r.value;var c=i(t),p=String(this),f=n(c,RegExp),h=c.unicode,m=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(v?"y":"g"),b=new f(v?c:"^(?:"+c.source+")",m),x=void 0===e?g:e>>>0;if(0===x)return[];if(0===p.length)return null===l(b,p)?[p]:[];var y=0,w=0,_=[];while(w<p.length){b.lastIndex=v?w:0;var C,L=l(b,v?p:p.slice(w));if(null===L||(C=d(o(b.lastIndex+(v?0:w)),p.length))===y)w=s(p,w,h);else{if(_.push(p.slice(y,w)),_.length===x)return _;for(var I=1;I<=L.length-1;I++)if(_.push(L[I]),_.length===x)return _;w=y=C}}return _.push(p.slice(y)),_}]})},"520a":function(t,e,a){"use strict";var r=a("0bfb"),i=RegExp.prototype.exec,n=String.prototype.replace,s=i,o="lastIndex",l=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[o]||0!==e[o]}(),c=void 0!==/()??/.exec("")[1],u=l||c;u&&(s=function(t){var e,a,s,u,d=this;return c&&(a=new RegExp("^"+d.source+"$(?!\\s)",r.call(d))),l&&(e=d[o]),s=i.call(d,t),l&&s&&(d[o]=d.global?s.index+s[0].length:e),c&&s&&s.length>1&&n.call(s[0],a,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)}),s}),t.exports=s},"55f7":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{message:"",visible:this.visible.show,width:650,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[a("template",{slot:"title"},[t._v("\n    "+t._s(t.assetsdetail.GoodsName)+"详情\n    "),0==t.assetsdetail.Status||10==t.assetsdetail.Status?a("a-button",{staticStyle:{float:"right"},attrs:{size:"small",icon:"form"},on:{click:t.allot}},[t._v("分配")]):t._e(),0==t.assetsdetail.Status||10==t.assetsdetail.Status?a("a-button",{staticStyle:{float:"right","margin-right":"10px"},attrs:{size:"small",icon:"delete"},on:{click:t.isSrue}},[t._v("无效")]):t._e()],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("公司名称:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.ComName))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("产品线:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.ProductLineText))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("联系人:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.Linkman))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("联系电话:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.LinkTel))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("创建时间:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.CreatDate))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("更新时间:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.UpdateTime))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("归属部门:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.DepIdText))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("归属人:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.UseridText))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("状态:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.StatusText))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("备注:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.assetsdetail.Remarks))])],1),a("a-divider",{attrs:{orientation:"left"}},[t._v("流程记录")]),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,bordered:!1,pagination:!1,size:"middle",rowKey:"LogGuid"}}),a("drawer-allot",{attrs:{show:t.drawer.allot,refresh:t.initDrawer}})],2)},i=[],n=a("b775"),s=a("97f8"),o=(a("c32d"),[{title:"状态",dataIndex:"ActionText"},{title:"操作人员",dataIndex:"UseridText"},{title:"操作时间",dataIndex:"LogTime"},{title:"备注",dataIndex:"Remarks"}]),l={components:{DrawerAllot:s["default"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null},isSrueDelete:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{}},columns:o,formSearch:{pageSize:10,current:1,total:0},dataSource:[],assetsdetail:{},enableeditguid:"",form:this.$form.createForm(this),drawer:{allot:{show:!1}},modal:{outchange:{show:!1}}}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{init:function(){var t=this;n["a"].post("/api/Leads/Com/Detail",{LeadsGuid:t.show.id}).then(function(e){0===e.code&&(t.assetsdetail=e.data.leadsCom,t.dataSource=e.data.leadsComLogs)}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.dataSource=[],this.assetsdetail={}},initDrawer:function(){this.init(),this.refresh()},detail:function(t){this.drawer.detail={show:!0,id:t.SBOrderItemGuid}},allot:function(){this.drawer.allot={show:!0,id:this.show.id,assetsdetail:this.assetsdetail}},outchange:function(t){this.modal.outchange={show:!0,id:t.BalanceGuid,balance:t}},isSrue:function(){this.isSrueDelete(this.assetsdetail,!1)}}},c=l,u=a("2877"),d=Object(u["a"])(c,r,i,!1,null,null,null);e["default"]=d.exports},"561d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("a-form",{attrs:{form:t.form}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:12}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Keyword",{initialValue:t.title.ComName,rules:t.AFormImportRules.iptInput}],expression:"['Keyword',{initialValue:title.ComName,rules:AFormImportRules.iptInput}]"}],attrs:{placeholder:"请输入"}}),a("a-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"},{name:"decorator",rawName:"v-decorator",value:["LeadsGuid",{initialValue:t.title.LeadsGuid,rules:t.AFormImportRules.iptInput}],expression:"['LeadsGuid',{initialValue:title.LeadsGuid,rules:AFormImportRules.iptInput}]"}]})],1)],1),a("a-col",{attrs:{md:12}},[a("a-form-item",{attrs:{label:"产品线",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ProductLine",{initialValue:t.title.ProductLine,rules:t.AFormImportRules.iptSelect}],expression:"['ProductLine',{initialValue:title.ProductLine,rules:AFormImportRules.iptSelect }]"}],attrs:{placeholder:"请选择",allowClear:!0}},t._l(t.accesskey,function(e){return a("a-select-option",{key:e.key},[t._v(t._s(e.text))])}),1)],1)],1),a("a-col",{attrs:{md:12}},[a("a-form-item",{attrs:{label:"联系电话",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["LinkTel",{initialValue:t.title.LinkTel,rules:t.AFormImportRules.iptInput}],expression:"['LinkTel',{initialValue:title.LinkTel,rules:AFormImportRules.iptInput}]"}],attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:t.searchCustom}},[t._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"index"},scopedSlots:t._u([{key:"action",fn:function(e,r){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.allot(r)}}},[t._v("分配")])])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1)},i=[],n=a("b775"),s=(a("c32d"),a("61f7")),o=[{title:"公司名称",dataIndex:"ComName"},{title:"产品线",dataIndex:"ProductLineText"},{title:"归属人",dataIndex:"UseridText"},{title:"操作",scopedSlots:{customRender:"action"}}],l={name:"searchform",components:{},props:{title:{type:Object,default:""},accesskey:{type:Array,default:null}},data:function(){return{visible:{show:!1,id:{}},columns:o,dim:{},formSearch:{pageSize:10,current:1,total:0,Keyword:"",ProductLine:"",Code:"",PhoneNumber:""},dataSource:[],assetsdetail:{},form:this.$form.createForm(this),AFormImportRules:{iptDate:[{required:!0,message:"请选择"}],iptInput:[{message:"请输入"}],iptSelect:[{required:!1,message:"请选择"}],Mobile:[{message:"请输入手机号"},{validator:this.ConfirmMobile}]},drawer:{},modal:{}}},created:function(){this.init()},methods:{init:function(){var t=this;this.$watch("title",function(e,a){t.$nextTick(function(){t.searchCustom()})})},searchCustom:function(){this.pagechange(1)},pagechange:function(t){var e=this;e.form.validateFields(function(a,r){a||(e.formSearch.current=t,e.formSearch.Keyword=r.Keyword,e.formSearch.PhoneNumber=r.LinkTel,e.formSearch.ProductLine=r.ProductLine,n["a"].post("/api/Crm/Customer/PublicList",e.formSearch).then(function(t){0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count,e.$nextTick())}).catch(function(t){console.log(t)}))})},ConfirmMobile:function(t,e,a){!e||Object(s["d"])(e)?a():a("手机号码不符合规则！")},allot:function(t){var e=this;e.$confirm({title:"确定分配该销线给"+t.UseridText+"?",content:"点击确定，完成分配。",onOk:function(){e.form.validateFields(function(a,r){if(!a){var i={};i.LeadsGuid=r.LeadsGuid,i.SaleDepId=t.DepId,i.SaleUserid=t.Userid,n["a"].post("/api/Leads/Com/Assign",i).then(function(t){var a=t;a.code>0?e.$message.error(a.msg):(e.$emit("onClose"),e.$message.success(a.msg))}).catch(function(t){console.log(t)})}})},onCancel:function(){}})}}},c=l,u=a("2877"),d=Object(u["a"])(c,r,i,!1,null,null,null);e["default"]=d.exports},"5f1b":function(t,e,a){"use strict";var r=a("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var n=a.call(t,e);if("object"!==typeof n)throw new TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"61f7":function(t,e,a){"use strict";a.d(e,"b",function(){return r}),a.d(e,"a",function(){return i}),a.d(e,"d",function(){return n}),a.d(e,"c",function(){return s});a("28a5");function r(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)}function i(t){var e=!0;if((e&&!t||!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(t))&&(e=!1),e&&18==t.length){for(var a=t.split(""),r=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],i=[1,0,"X",9,8,7,6,5,4,3,2],n=0,s=0,o=0,l=0;l<17;l++)s=a[l],o=r[l],n+=s*o;i[n%11]!=a[17]&&(e=!1)}return e}function n(t){var e=/^1[3|4|5|6|7|8|9][0-9]\d{8}$/;return e.test(t)}function s(t){var e=/^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;return e.test(t)}},"68b4":function(t,e,a){"use strict";var r=a("9722"),i=a.n(r);i.a},"75fc":function(t,e,a){"use strict";var r=a("a745"),i=a.n(r);function n(t){if(i()(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var s=a("774e"),o=a.n(s),l=a("c8bb"),c=a.n(l);function u(t){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return o()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){return n(t)||u(t)||d()}a.d(e,"a",function(){return p})},"774e":function(t,e,a){t.exports=a("d2d5")},9722:function(t,e,a){},"97f8":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{title:"销线分配",placement:"right",closable:!1,maskClosable:!0,visible:this.visible.show,width:450,destroyOnClose:!0},on:{close:t.onClose}},[a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("公司名称 :")]),a("a-col",{attrs:{span:18}},[t._v(t._s(t.assetsdetail.ComName))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("产品线 :")]),a("a-col",{attrs:{span:18}},[t._v(t._s(t.assetsdetail.ProductLineText))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("联系人 :")]),a("a-col",{attrs:{span:18}},[t._v(t._s(t.assetsdetail.Linkman))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("联系电话 :")]),a("a-col",{attrs:{span:18}},[t._v(t._s(t.assetsdetail.LinkTel))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("创建时间 :")]),a("a-col",{attrs:{span:18}},[t._v(t._s(t.assetsdetail.CreatDate))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("创建人 :")]),a("a-col",{attrs:{span:18}},[t._v(t._s(t.assetsdetail.UseridText))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("部门 :")]),a("a-col",{attrs:{span:18}},[t._v(t._s(t.assetsdetail.DepIdText))])],1),a("div",[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"部门",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["SaleDepId",{rules:t.AFormImportRules.iptSelectReq}],expression:"['SaleDepId',{rules:AFormImportRules.iptSelectReq}]"}],attrs:{options:t.options,loadData:t.loadData,changeOnSelect:"",placeholder:"请选择分配部门"},on:{change:t.onChange}})],1),a("a-form-item",{attrs:{label:"人员",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-select",{model:{value:t.SaleUserid,callback:function(e){t.SaleUserid=e},expression:"SaleUserid"}},t._l(t.DepList,function(e){return a("a-select-option",{key:e.code},[t._v(t._s(e.name))])}),1)],1)],1),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:t.onClose}},[t._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:t.handleSubmit}},[t._v("提交")])],1)],1)],1)},i=[],n=a("75fc"),s=(a("7f7f"),a("ac6a"),a("b775")),o=a("61f7"),l=a("561d"),c={components:{searchform:l["default"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:""},dim:{ComProductLine:[]},assetsdetail:{},DepList:[],dataSource:[],form:this.$form.createForm(this),formSearchBox:this.$form.createForm(this),formSearch:{pageSize:10,current:1,total:0,Keyword:"",ProductLine:"",Code:"",PhoneNumber:""},AFormImportRules:{iptDate:[{required:!0,message:"请选择"}],iptInput:[{message:"请输入"}],iptInputReq:[{required:!0,message:"请输入"}],iptSelect:[{required:!1,message:"请选择"}],iptSelectReq:[{required:!0,message:"请选择"}],Mobile:[{required:!0,message:"请输入手机号"},{validator:this.ConfirmMobile}]},options:[],selectedOptionsCell:[],SaleUserid:""}},watch:{show:function(t,e){var a=this;null==a.visible.assetsdetail&&(a.visible.assetsdetail={AssetsCode:""}),a.visible=t,t.show&&a.init()}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields(),this.options=[],this.assetsdetail={},this.SaleUserid="",this.DepList=[]},init:function(){var t=this;t.getDep(),s["a"].post("/api/Leads/Com/Detail",{LeadsGuid:t.show.id}).then(function(e){0===e.code&&(t.assetsdetail=e.data.leadsCom)}).catch(function(t){console.log(t)})},getDep:function(){var t=this;s["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:"1"}).then(function(e){0===e.code&&e.data.forEach(function(e,a){var r={};r.value=e.code,r.label=e.name,r.isLeaf=!1,t.options.push(r)})}).catch(function(t){console.log(t)})},handleSubmit:function(t){var e=this,a=this;this.form.validateFields(function(r,i){if(!r){var n={};n.LeadsGuid=a.visible.id,n.SaleDepId=i.SaleDepId[i.SaleDepId.length-1],n.SaleUserid=a.SaleUserid,a.$loading.open(),s["a"].post("/api/Leads/Com/Assign",n).then(function(e){a.$loading.close();var r=e;r.code>0?a.$message.error(r.msg):("next"===t?(a.form.resetFields(),a.refresh&&a.refresh()):a.onClose(),a.$message.success(r.msg))}).catch(function(t){a.$loading.close(),console.log(t)}),e.options=[]}})},ConfirmMobile:function(t,e,a){!e||Object(o["d"])(e)?a():a("手机号码不符合规则！")},loadData:function(t){var e=t[t.length-1],a=this;e.loading=!0,s["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:e.value}).then(function(t){e.loading=!1,0===t.code&&(t.data.length>0?(e.children=[],t.data.forEach(function(t,a){var r={};r.value=t.code,r.label=t.name,r.isLeaf=!1,e.children.push(r)}),a.options=Object(n["a"])(a.options)):(e.isLeaf=!0,e.loading=!1,a.options=Object(n["a"])(a.options)))}).catch(function(t){console.log(t),e.loading=!1})},onChange:function(t){this.DepList=[],this.SaleUserid="",this.userbydepid(t[t.length-1])},userbydepid:function(t){var e=this;s["a"].post("/api/Org/User/UsersByDepId",{DepId:t}).then(function(t){var a=t;0===a.code&&(e.DepList=a.data)}).catch(function(t){console.log(t)})},callback:function(t){}}},u=c,d=a("2877"),p=Object(d["a"])(u,r,i,!1,null,null,null);e["default"]=p.exports},a745:function(t,e,a){t.exports=a("f410")},aae3:function(t,e,a){var r=a("d3f4"),i=a("2d95"),n=a("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==i(t))}},b0c5:function(t,e,a){"use strict";var r=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},c8bb:function(t,e,a){t.exports=a("54a1")},ee89:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{layout:"horizontal"}},[a("div",{class:t.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.Keyword,callback:function(e){t.$set(t.formSearch,"Keyword",e)},expression:"formSearch.Keyword"}})],1)],1),a("a-col",{attrs:{md:3}},[a("a-form-item",[a("a-select",{model:{value:t.formSearch.Scene,callback:function(e){t.$set(t.formSearch,"Scene",e)},expression:"formSearch.Scene"}},[a("a-select-option",{attrs:{value:"待分配"}},[t._v("\n                      待分配\n                    ")]),a("a-select-option",{attrs:{value:"已分配"}},[t._v("\n                      已分配\n                    ")]),a("a-select-option",{attrs:{value:"全部"}},[t._v("\n                      全部\n                    ")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:t.init}},[t._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"PLGUID"},scopedSlots:t._u([{key:"action",fn:function(e,r){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.detail(r)}}},[t._v("详情")]),0==r.Status?a("a-divider",{attrs:{type:"vertical"}}):t._e(),0==r.Status?a("a",{on:{click:function(e){return t.isSrue(r,!1)}}},[t._v("无效")]):t._e(),0==r.Status||10==r.Status?a("a-divider",{attrs:{type:"vertical"}}):t._e(),0==r.Status||10==r.Status?a("a",{on:{click:function(e){return t.isDistribution(r)}}},[t._v("分配")]):t._e()],1)}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2),a("a-modal",{attrs:{title:"提示信息",visible:t.invalidlayer,"confirm-loading":t.confirmLoading,zIndex:99999},on:{ok:t.invalidOk,cancel:t.invalidCancel}},[a("a-form",{attrs:{layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"原因",labelCol:{span:3},wrapperCol:{span:18,offset:1}}},[a("a-textarea",{attrs:{placeholder:"请输入原因",rows:4},model:{value:t.VerifyNote,callback:function(e){t.VerifyNote=e},expression:"VerifyNote"}})],1)],1)],1)],1)])],1)],1)],1),a("drawer-allot",{attrs:{show:t.drawer.allot,refresh:t.init}}),a("drawer-detail",{attrs:{show:t.drawer.detail,refresh:t.init,isSrueDelete:t.isSrue}})],1)},i=[],n=(a("ac6a"),a("b775")),s=a("97f8"),o=a("55f7"),l=[{title:"状态",dataIndex:"StatusText"},{title:"公司名称",dataIndex:"ComName"},{title:"产品线",dataIndex:"ProductLineText"},{title:"联系人",dataIndex:"Linkman"},{title:"联系电话",dataIndex:"LinkTel"},{title:"创建时间",dataIndex:"CreatDate"},{title:"操作",scopedSlots:{customRender:"action"}}],c={components:{DrawerAllot:s["default"],DrawerDetail:o["default"]},data:function(){return{advanced:!0,columns:l,formSearch:{pageSize:10,current:1,total:0,Keyword:"",Scene:"待分配"},dataSource:[],roles:[],drawer:{allot:{show:!1},detail:{show:!1}},modal:{exporttransfer:{show:!1}},invalidlayer:!1,confirmLoading:!1,invalidRecord:{},VerifyNote:""}},mounted:function(){var t=this;t.init()},methods:{init:function(){this.pagechange(1)},pagechange:function(t){var e=this;e.formSearch.current=t,e.$loading.open(),n["a"].post("/api/Leads/Com/AssignList",e.formSearch).then(function(t){e.$loading.close(),0===t.code&&(t.data.rows.forEach(function(t){t.CreatDate=moment(t.CreatDate).format("YYYY-MM-DD")}),e.dataSource=t.data.rows,e.roles=t.data.role,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},detail:function(t){this.drawer.detail={show:!0,id:t.LeadsGuid}},isSrue:function(t,e){var a=this;a.invalidlayer=!0,a.invalidRecord=t,a.invalidRecord.status="false"},invalidOk:function(t){var e=this;n["a"].post("/api/Leads/Com/Verify",{LeadsGuid:e.invalidRecord.LeadsGuid,Effective:e.invalidRecord.status,VerifyNote:e.VerifyNote}).then(function(t){var a=t;0===t.code?(e.$message.success(a.msg),e.init(),e.invalidlayer=!1,e.VerifyNote=""):(e.$message.error(a.msg),e.VerifyNote="")}).catch(function(t){console.log(t)})},invalidCancel:function(t){this.invalidlayer=!1,this.VerifyNote=""},isDistribution:function(t){console.log(t),this.drawer.allot={show:!0,id:t.LeadsGuid,assetsdetail:t}}}},u=c,d=(a("68b4"),a("2877")),p=Object(d["a"])(u,r,i,!1,null,null,null);e["default"]=p.exports},f410:function(t,e,a){a("1af6"),t.exports=a("584a").Array.isArray}}]);