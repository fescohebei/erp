(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-369fc902","chunk-170b90a1","chunk-2d0cfeb0"],{"02f4":function(e,t,a){var r=a("4588"),o=a("be13");e.exports=function(e){return function(t,a){var s,i,n=String(o(t)),l=r(a),c=n.length;return l<0||l>=c?e?"":void 0:(s=n.charCodeAt(l),s<55296||s>56319||l+1===c||(i=n.charCodeAt(l+1))<56320||i>57343?e?n.charAt(l):s:e?n.slice(l,l+2):i-56320+(s-55296<<10)+65536)}}},"0390":function(e,t,a){"use strict";var r=a("02f4")(!0);e.exports=function(e,t,a){return t+(a?r(e,t).length:1)}},"0bfb":function(e,t,a){"use strict";var r=a("cb7c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,a){"use strict";a("b0c5");var r=a("2aba"),o=a("32e9"),s=a("79e5"),i=a("be13"),n=a("2b4c"),l=a("520a"),c=n("species"),d=!s(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),u=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();e.exports=function(e,t,a){var p=n(e),m=!s(function(){var t={};return t[p]=function(){return 7},7!=""[e](t)}),h=m?!s(function(){var t=!1,a=/a/;return a.exec=function(){return t=!0,null},"split"===e&&(a.constructor={},a.constructor[c]=function(){return a}),a[p](""),!t}):void 0;if(!m||!h||"replace"===e&&!d||"split"===e&&!u){var f=/./[p],g=a(i,p,""[e],function(e,t,a,r,o){return t.exec===l?m&&!o?{done:!0,value:f.call(t,a,r)}:{done:!0,value:e.call(a,t,r)}:{done:!1}}),v=g[0],y=g[1];r(String.prototype,e,v),o(RegExp.prototype,p,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}}},"28a5":function(e,t,a){"use strict";var r=a("aae3"),o=a("cb7c"),s=a("ebd6"),i=a("0390"),n=a("9def"),l=a("5f1b"),c=a("520a"),d=a("79e5"),u=Math.min,p=[].push,m="split",h="length",f="lastIndex",g=4294967295,v=!d(function(){RegExp(g,"y")});a("214f")("split",2,function(e,t,a,d){var y;return y="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[h]||2!="ab"[m](/(?:ab)*/)[h]||4!="."[m](/(.?)(.?)/)[h]||"."[m](/()()/)[h]>1||""[m](/.?/)[h]?function(e,t){var o=String(this);if(void 0===e&&0===t)return[];if(!r(e))return a.call(o,e,t);var s,i,n,l=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,m=void 0===t?g:t>>>0,v=new RegExp(e.source,d+"g");while(s=c.call(v,o)){if(i=v[f],i>u&&(l.push(o.slice(u,s.index)),s[h]>1&&s.index<o[h]&&p.apply(l,s.slice(1)),n=s[0][h],u=i,l[h]>=m))break;v[f]===s.index&&v[f]++}return u===o[h]?!n&&v.test("")||l.push(""):l.push(o.slice(u)),l[h]>m?l.slice(0,m):l}:"0"[m](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:a.call(this,e,t)}:a,[function(a,r){var o=e(this),s=void 0==a?void 0:a[t];return void 0!==s?s.call(a,o,r):y.call(String(o),a,r)},function(e,t){var r=d(y,e,this,t,y!==a);if(r.done)return r.value;var c=o(e),p=String(this),m=s(c,RegExp),h=c.unicode,f=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(v?"y":"g"),x=new m(v?c:"^(?:"+c.source+")",f),w=void 0===t?g:t>>>0;if(0===w)return[];if(0===p.length)return null===l(x,p)?[p]:[];var b=0,C=0,S=[];while(C<p.length){x.lastIndex=v?C:0;var _,R=l(x,v?p:p.slice(C));if(null===R||(_=u(n(x.lastIndex+(v?0:C)),p.length))===b)C=i(p,C,h);else{if(S.push(p.slice(b,C)),S.length===w)return S;for(var L=1;L<=R.length-1;L++)if(S.push(R[L]),S.length===w)return S;C=b=_}}return S.push(p.slice(b)),S}]})},4781:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.Keyword,callback:function(t){e.$set(e.formSearch,"Keyword",t)},expression:"formSearch.Keyword"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.init}},[e._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"ComGuid",expandedRowKeys:e.expandedRowKeys},on:{expand:e.childLineList},scopedSlots:e._u([{key:"CreatDate",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[""!=r.PullTime?[e._v(e._s(r.PullTime))]:e._e(),""==r.PullTime?[e._v(e._s(r.CreatDate))]:e._e()],2)}},{key:"isOperate",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[a("a-tag",{attrs:{color:1==r.Opened?"red":0==r.Cooperated?"blue":1==r.Cooperated?"green":""}},[1==r.Opened?[e._v("公海")]:e._e(),0==r.Opened?[e._v(e._s(r.CooperatedText))]:e._e()],2)],1)}},{key:"CityCode",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.cityList[r.CityCode])+"\n        ")])}},{key:"action",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(t){return e.detail(r)}}},[e._v("详情")]),1==e.Roles?a("a-divider",{attrs:{type:"vertical"}}):e._e(),1==e.Roles?a("a",{on:{click:function(t){return e.lineAdd(r)}}},[e._v("添加产品线")]):e._e()],1)}}])},[a("a-table",{attrs:{slot:"expandedRowRender",rowKey:"ComProductLineGuid",columns:e.columnsLines,"data-source":e.dataLeads,pagination:!1},slot:"expandedRowRender",scopedSlots:e._u([{key:"operate",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[a("a-tag",{attrs:{color:1==r.Opened?"red":0==r.Cooperated?"blue":1==r.Cooperated?"green":""}},[1==r.Opened?[e._v("没人跟进")]:e._e(),0==r.Opened?[e._v(e._s(r.CooperatedText))]:e._e()],2)],1)}},{key:"action",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[1==r.Opened&&1==e.Roles?a("a",{on:{click:function(t){return e.claimLine(r)}}},[e._v("协同开发")]):e._e()])}},{key:"CreateDate",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[1==r.Opened?[e._v(e._s(r.ThrowTime))]:e._e(),0==r.Opened?[e._v(e._s(r.PullTime))]:e._e()],2)}}])}),a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),a("a-modal",{attrs:{title:"提示信息",visible:e.showClaimLayer,"confirm-loading":e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-form",{attrs:{layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"所属部门",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-select",{model:{value:e.departmentKey,callback:function(t){e.departmentKey=t},expression:"departmentKey"}},e._l(e.department,function(t){return a("a-select-option",{key:t.code},[e._v("\n                      "+e._s(t.name)+"\n                    ")])}),1)],1)],1)],1)],1)])],1)],1)],1),a("drawer-detail",{attrs:{show:e.drawer.detail,refresh:e.pagerefresh}}),a("drawer-add-line",{attrs:{show:e.drawer.addline,assetsdetail:{},refresh:e.pagerefresh,refreshChild:e.childLineListRefresh}})],1)},o=[],s=(a("ac6a"),a("b775")),i=(a("61f7"),a("6682")),n=a("e830"),l=[{title:"状态",scopedSlots:{customRender:"isOperate"}},{title:"公司名称",dataIndex:"ComName"},{title:"城市",scopedSlots:{customRender:"CityCode"}},{title:"开放时间",dataIndex:"ThrowTime"},{title:"开放原因",dataIndex:"ThrowReasonText"},{title:"操作",scopedSlots:{customRender:"action"}}],c=[{title:"状态",scopedSlots:{customRender:"operate"},width:90},{title:"产品线",dataIndex:"ProductLineText",width:120},{title:"销售姓名",dataIndex:"UseridText",width:130},{title:"部门",dataIndex:"DepIdText",width:130},{title:"入库时间",scopedSlots:{customRender:"CreateDate"},width:200},{title:"操作",scopedSlots:{customRender:"action"}}],d={components:{DrawerDetail:i["default"],DrawerAddLine:n["default"]},data:function(){return{advanced:!0,columns:l,columnsLines:c,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,Keyword:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],dataLeads:[],dataDetail:[],roles:[],drawer:{detail:{show:!1},addline:{show:!1}},modal:{exporttransfer:{show:!1}},ThrowReason:[],checkComId:"",checkLineId:"",userid:"",expandedRowKeys:[],department:[],departmentKey:"",showClaimLayer:!1,claimLineId:"",childLine:{expanded:"",record:""},Roles:!1,cityList:{}}},mounted:function(){var e=this;e.init()},methods:{init:function(){var e=this;s["a"].post("/api/Dim/Enum/DimDecode",{Names:["City"]}).then(function(t){0===t.code&&(e.cityList=t.data.City)}).catch(function(e){console.log(e)}),this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this;t.formSearch.current=e,t.formSearch.Scene="公海",t.$loading.open(),s["a"].post("/api/Crm/Com/List",t.formSearch).then(function(e){t.$loading.close(),0===e.code&&(e.data.rows.forEach(function(e){e.CreatDate=moment(e.CreatDate).format("YYYY-MM-DD")}),t.dataSource=e.data.rows,t.roles=e.data.role,t.formSearch.total=e.count,t.userid=e.data.Operator.Userid,e.data.Operator.Roles.length>0&&e.data.Operator.Roles.forEach(function(e,a){"89"==e&&(t.Roles=!0)}))}).catch(function(e){t.$loading.close(),console.log(e)})},detail:function(e){this.drawer.detail={show:!0,id:e.ComGuid,userid:this.userid,listText:e,cityList:this.cityList}},childLineList:function(e,t){var a=this;a.childLine.expanded=e,a.childLine.record=t,e?(s["a"].post("/api/Crm/Com/Detail",{ComGuid:t.ComGuid}).then(function(e){0===e.code&&(a.dataLeads=e.data.lines,a.dataDetail=e.data)}).catch(function(e){console.log(e)}),this.expandedRowKeys=[],this.expandedRowKeys.push(t.ComGuid)):this.expandedRowKeys=[]},childLineListRefresh:function(){var e=this;e.childLine.expanded?(s["a"].post("/api/Crm/Com/Detail",{ComGuid:e.childLine.record.ComGuid}).then(function(t){0===t.code&&(e.dataLeads=t.data.lines,e.dataDetail=t.data)}).catch(function(e){console.log(e)}),this.expandedRowKeys=[],this.expandedRowKeys.push(e.childLine.record.ComGuid)):this.expandedRowKeys=[]},lineAdd:function(e){this.drawer.addline={show:!0,assetsdetail:{company:e}}},claimLine:function(e){var t=this;t.showClaimLayer=!0,s["a"].get("/api/Org/Department/DepsByCurUser").then(function(e){0===e.code&&(t.department=e.data)}).catch(function(e){console.log(e)}),t.claimLineId=e.ComProductLineGuid},handleOk:function(e){var t=this;t.departmentKey?s["a"].post("/api/Crm/ProductLine/Pick",{ComProductLineGuid:t.claimLineId,DepId:t.departmentKey}).then(function(e){0===e.code&&(t.showClaimLayer=!1,t.$message.success(e.msg),t.departmentKey="",t.claimLineId="",s["a"].post("/api/Crm/Com/Detail",{ComGuid:t.dataDetail.company.ComGuid}).then(function(e){0===e.code&&(t.dataLeads=e.data.lines,t.dataDetail=e.data)}).catch(function(e){console.log(e)}),t.pagerefresh()),e.code>0&&t.$message.error(e.msg)}).catch(function(e){console.log(e)}):t.$message.error("请选择你的所属部门！")},handleCancel:function(e){this.showClaimLayer=!1,this.claimLineId=""}}},u=d,p=a("2877"),m=Object(p["a"])(u,r,o,!1,null,null,null);t["default"]=m.exports},"520a":function(e,t,a){"use strict";var r=a("0bfb"),o=RegExp.prototype.exec,s=String.prototype.replace,i=o,n="lastIndex",l=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e[n]||0!==t[n]}(),c=void 0!==/()??/.exec("")[1],d=l||c;d&&(i=function(e){var t,a,i,d,u=this;return c&&(a=new RegExp("^"+u.source+"$(?!\\s)",r.call(u))),l&&(t=u[n]),i=o.call(u,e),l&&i&&(u[n]=u.global?i.index+i[0].length:t),c&&i&&i.length>1&&s.call(i[0],a,function(){for(d=1;d<arguments.length-2;d++)void 0===arguments[d]&&(i[d]=void 0)}),i}),e.exports=i},"5f1b":function(e,t,a){"use strict";var r=a("23c6"),o=RegExp.prototype.exec;e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var s=a.call(e,t);if("object"!==typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"61f7":function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return o}),a.d(t,"d",function(){return s}),a.d(t,"c",function(){return i});a("28a5");function r(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}function o(e){var t=!0;if((t&&!e||!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(e))&&(t=!1),t&&18==e.length){for(var a=e.split(""),r=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],o=[1,0,"X",9,8,7,6,5,4,3,2],s=0,i=0,n=0,l=0;l<17;l++)i=a[l],n=r[l],s+=i*n;o[s%11]!=a[17]&&(t=!1)}return t}function s(e){var t=/^1[3|4|5|6|7|8|9][0-9]\d{8}$/;return t.test(e)}function i(e){var t=/^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;return t.test(e)}},6682:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{message:"",visible:this.visible.show,width:450,destroyOnClose:!0,closable:!1},on:{close:e.onClose}},[a("template",{slot:"title"},[e._v("\n    客户详情\n  ")]),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[e._v("公司名称:")]),a("a-col",{attrs:{span:15}},[e._v(e._s(e.assetsdetail.company.ComName?e.assetsdetail.company.ComName:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[e._v("组织机构代码证:")]),a("a-col",{attrs:{span:15}},[e._v(e._s(e.assetsdetail.company.Code?e.assetsdetail.company.Code:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[e._v("网址:")]),a("a-col",{attrs:{span:15}},[e._v(e._s(e.assetsdetail.company.Url?e.assetsdetail.company.Url:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[e._v("城市:")]),a("a-col",{attrs:{span:15}},[e._v(e._s(e.assetsdetail.company.CityCode?e.visible.cityList[e.assetsdetail.company.CityCode]:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[e._v("地址:")]),a("a-col",{attrs:{span:15}},[e._v(e._s(e.assetsdetail.company.Address?e.assetsdetail.company.Address:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[e._v("客户来源:")]),a("a-col",{attrs:{span:15}},[e._v(e._s(e.assetsdetail.company.SourceText?e.assetsdetail.company.SourceText:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[e._v("客户性质:")]),a("a-col",{attrs:{span:15}},[e._v(e._s(e.assetsdetail.company.NatureText?e.assetsdetail.company.NatureText:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[e._v("客户规模:")]),a("a-col",{attrs:{span:15}},[e._v(e._s(e.assetsdetail.company.ScaleText?e.assetsdetail.company.ScaleText:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[e._v("行业:")]),a("a-col",{attrs:{span:15}},[e._v(e._s(e.assetsdetail.company.IndustryText?e.assetsdetail.company.IndustryText:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[e._v("归属人:")]),a("a-col",{attrs:{span:15}},[e._v(e._s(e.assetsdetail.company.UseridText?e.assetsdetail.company.UseridText:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[e._v("归属部门:")]),a("a-col",{attrs:{span:15}},[e._v(e._s(e.assetsdetail.company.DepIdText?e.assetsdetail.company.DepIdText:"无"))])],1),1==e.assetsdetail.company.Opened?[a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[e._v("开放时间:")]),a("a-col",{attrs:{span:15}},[e._v(e._s(e.assetsdetail.company.ThrowTime?e.assetsdetail.company.ThrowTime:"无"))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[e._v("开放原因:")]),a("a-col",{attrs:{span:15}},[e._v(e._s(e.assetsdetail.company.ThrowReasonText?e.assetsdetail.company.ThrowReasonText:"无"))])],1)]:e._e(),a("a-row",{staticStyle:{padding:"10px 0"},attrs:{gutter:24}})],2)},o=[],s=a("b775"),i=(a("c32d"),{components:{},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null},deleteCustomer:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},listText:{},cityList:[]},assetsdetail:{company:{},line:{},leads:{}},form:this.$form.createForm(this),drawer:{},modal:{outchange:{show:!1}}}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{init:function(){var e=this;s["a"].post("/api/Crm/Com/Detail",{ComGuid:e.show.id}).then(function(t){0===t.code&&(e.assetsdetail=t.data,e.dataSource=t.data.lines,e.dataLeads=t.data.leads,e.sourceListRecords=[])}).catch(function(e){console.log(e)})},onClose:function(){this.visible.show=!1,this.dataSource=[],this.sourceListRecords=[],this.assetsdetail={company:{},line:{},leads:{}}}}}),n=i,l=a("2877"),c=Object(l["a"])(n,r,o,!1,null,null,null);t["default"]=c.exports},aae3:function(e,t,a){var r=a("d3f4"),o=a("2d95"),s=a("2b4c")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==o(e))}},b0c5:function(e,t,a){"use strict";var r=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},e830:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"新建",placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:600}},[a("div",{style:{overflow:"auto",height:"100%"}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"产品线",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ProductLine",{rules:e.AFormImportRules.iptSelectReq}],expression:"['ProductLine',{rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.dim.ComProductLine,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1),a("a-form-item",{attrs:{label:"预算",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Budget",{rules:e.AFormImportRules.iptInputNumber}],expression:"['Budget',{rules:AFormImportRules.iptInputNumber}]"}]})],1),a("a-form-item",{attrs:{label:"部门",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["DepId",{rules:e.AFormImportRules.iptSelectReq}],expression:"['DepId',{rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},e._l(e.DepList,function(t){return a("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1)],1),a("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarkspro"],expression:"['Remarkspro']"}],attrs:{placeholder:"备注",rows:4}})],1),a("a-form-item",{attrs:{label:"联系人姓名",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Linkman",{rules:e.AFormImportRules.iptInputReq}],expression:"['Linkman',{rules:AFormImportRules.iptInputReq}]"}]})],1),a("a-form-item",{attrs:{label:"手机号码",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Mobile",{rules:e.AFormImportRules.Mobile}],expression:"['Mobile',{rules:AFormImportRules.Mobile}]"}]})],1),a("a-form-item",{attrs:{label:"固定电话",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Tel"],expression:"['Tel']"}]})],1),a("a-form-item",{attrs:{label:"邮箱",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Email",{rules:e.AFormImportRules.Email}],expression:"['Email',{rules:AFormImportRules.Email}]"}]})],1),a("a-form-item",{attrs:{label:"所在部门",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Department",{rules:e.AFormImportRules.iptInput}],expression:"['Department',{rules:AFormImportRules.iptInput}]"}]})],1),a("a-form-item",{attrs:{label:"职务",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["JobTitle",{rules:e.AFormImportRules.iptInput}],expression:"['JobTitle',{rules:AFormImportRules.iptInput}]"}]})],1),a("a-form-item",{attrs:{label:"通讯地址",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["personAddress",{rules:e.AFormImportRules.iptInput}],expression:"['personAddress',{rules:AFormImportRules.iptInput}]"}]})],1),a("div",{style:{height:"30px"}})],1),a("div",{style:{position:"absolute",bottom:"0",right:"0",width:"100%",padding:"10px 16px",borderTop:"1px solid #e8e8e8",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:e.onClose}},[e._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.addTeamWork}},[e._v("提交")])],1)],1)])},o=[],s=a("b775"),i=(a("c32d"),a("61f7")),n={props:{show:{type:Object,default:{show:!1}},assetsdetail:{type:Object,default:{company:{},line:{},leads:{}}},refresh:{type:Function,default:null},refreshChild:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},assetsdetail:{company:{},line:{},leads:{}}},dim:{},defaultData:{Source:"10"},dataSource:[],DepList:[],Source:[],Scale:[],Nature:[],Industry:[],searchCom:{},enableeditguid:"",form:this.$form.createForm(this),AFormImportRules:{iptDate:[{required:!0,message:"请选择"}],iptInput:[{message:"请输入"}],iptInputReq:[{required:!0,message:"请输入"}],iptSelect:[{required:!1,message:"请选择"}],iptSelectReq:[{required:!0,message:"请选择"}],Mobile:[{message:"请输入手机号"},{validator:this.ConfirmMobile}],Email:[{message:"请输入邮箱"},{validator:this.ConfirmEmail}],iptInputNumber:[{required:!1,message:"请输入数字"},{validator:this.ConfirmNumber}]},drawer:{},modal:{}}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{init:function(){var e=this;s["a"].get("/api/Org/Department/DepsByCurUser").then(function(t){0===t.code&&(e.DepList=t.data)}).catch(function(e){console.log(e)}),s["a"].post("/api/Dim/Enum/GetEnum",{Names:["Source","Scale","Nature","Industry","ComProductLine"]}).then(function(t){0===t.code&&(e.Source=t.data.Source,e.Industry=t.data.Industry,e.Scale=t.data.Scale,e.Nature=t.data.Nature,e.dim.ComProductLine=t.data.ComProductLine)}).catch(function(e){console.log(e)})},ConfirmMobile:function(e,t,a){!t||Object(i["d"])(t)?a():a("手机号码不符合规则！")},ConfirmEmail:function(e,t,a){!t||Object(i["b"])(t)?a():a("邮箱不符合规则！")},ConfirmNumber:function(e,t,a){!t||Object(i["c"])(t)?a():a("请输入数字！")},addTeamWork:function(e){var t=this;this.form.validateFields(function(a,r){if(!a){var o={productLine:{ProductLine:r.ProductLine,DepId:r.DepId,ComGuid:t.visible.assetsdetail.company.ComGuid,Budget:r.Budget,Remarks:r.Remarkspro},comContact:{Linkman:r.Linkman,Mobile:r.Mobile,Tel:r.Tel,Email:r.Email,Department:r.Department,JobTitle:r.JobTitle,Address:r.personAddress},LeadsGuid:""};t.$loading.open(),s["a"].post("/api/Crm/ProductLine/Add",o).then(function(a){t.$loading.close();var s=a;s.code>0?t.$message.error(s.msg):("next"===e?(t.form.resetFields(),t.refresh&&t.refresh()):(t.onClose(),t.refreshChild(),t.searchCom={},r={},o={}),t.$message.success(s.msg))}).catch(function(e){t.$loading.close(),console.log(e)})}})},onClose:function(){this.visible.show=!1,this.dataSource=[],this.sourceListRecords=[],this.refresh&&this.refresh(),this.form.resetFields()}}},l=n,c=a("2877"),d=Object(c["a"])(l,r,o,!1,null,null,null);t["default"]=d.exports}}]);