(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-064038e3"],{"13bc":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{layout:"horizontal"}},[a("div",{class:t.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.Keyword,callback:function(e){t.$set(t.formSearch,"Keyword",e)},expression:"formSearch.Keyword"}})],1)],1),a("a-col",{attrs:{md:3}},[a("a-form-item",[a("a-select",{on:{change:t.statusChange},model:{value:t.formSearch.Status,callback:function(e){t.$set(t.formSearch,"Status",e)},expression:"formSearch.Status"}},[t._l(t.status,function(e){return a("a-select-option",{key:e.key},[t._v("\n                      "+t._s(e.text)+"\n                    ")])}),a("a-select-option",{attrs:{value:""}},[t._v("\n                      全部\n                    ")])],2)],1)],1),40==t.formSearch.Status?a("a-col",{attrs:{md:3}},[a("a-form-item",[a("a-select",{model:{value:t.formSearch.Result,callback:function(e){t.$set(t.formSearch,"Result",e)},expression:"formSearch.Result"}},[t._l(t.ContractResult,function(e){return a("a-select-option",{key:e.key},[t._v("\n                      "+t._s(e.text)+"\n                    ")])}),a("a-select-option",{attrs:{value:""}},[t._v("\n                      全部\n                    ")])],2)],1)],1):t._e(),a("a-col",{attrs:{span:12}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:t.init}},[t._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.contractList,pagination:!1,rowKey:"ContractGuid"},scopedSlots:t._u([{key:"StatusText",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(n.StatusText)+"\n          "),40==n.Status&&n.Result?[10==n.Result?a("span",{staticStyle:{color:"#52c41a"}},[t._v("("+t._s(n.ResultText)+")")]):t._e(),20==n.Result?a("span",{staticStyle:{color:"#f5222d"}},[t._v("("+t._s(n.ResultText)+")")]):t._e()]:t._e()],2)}},{key:"CreateDate",fn:function(e,n){return a("span",{},[t._v("\n          "+t._s(t.moment(n.CreateDate).format("YYYY-MM-DD"))+"\n        ")])}},{key:"action",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.detail(n)}}},[t._v("详情")])])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1)],1),a("drawer-detail",{attrs:{show:t.drawer.detail,refresh:t.pagerefresh}})],1)},o=[],r=(a("ac6a"),a("b775")),s=a("c32d"),c=a.n(s),i=a("0760"),l=[{title:"状态",scopedSlots:{customRender:"StatusText"}},{title:"公司名称",dataIndex:"ComName"},{title:"产品线",dataIndex:"ProductLineText"},{title:"客商类型",dataIndex:"ComTypeText"},{title:"销售姓名",dataIndex:"CreateUseridText"},{title:"类型",dataIndex:"SignTypeText"},{title:"发送审核日期",scopedSlots:{customRender:"CreateDate"}},{title:"操作",scopedSlots:{customRender:"action"}}],u={components:{DrawerDetail:i["default"]},data:function(){return{advanced:!0,columns:l,formSearch:{pageSize:10,current:1,total:0,Keyword:"",Status:"",Result:"",Scene:"我的"},form:this.$form.createForm(this),contractList:[],roles:[],drawer:{detail:{show:!1}},modal:{exporttransfer:{show:!1}},invalidlayer:!1,confirmLoading:!1,invalidRecord:{},status:[],ContractResult:[],PayDaySuffix:{},User:{},Dept:{},moment:c.a,comRankObject:{},rolesmanager:!1}},mounted:function(){var t=this;t.init()},methods:{init:function(){var t=this;r["a"].post("/api/Dim/Enum/GetEnum",{Names:["ContractStatus","ContractResult","PayDaySuffix","ComRankNormal"]}).then(function(e){0===e.code&&(t.status=e.data.ContractStatus,t.ContractResult=e.data.ContractResult,e.data.PayDaySuffix.forEach(function(e,a){t.PayDaySuffix[e.key]=e.text}),e.data.ComRankNormal.forEach(function(e,a){t.comRankObject[e.key]=e.text}))}).catch(function(t){console.log(t)}),r["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept"]}).then(function(e){t.$loading.close(),0===e.code&&(t.User=e.data.User,t.Dept=e.data.Dept)}).catch(function(e){t.$loading.close(),console.log(e)}),r["a"].get("/api/Org/User/CurrentUsersRole").then(function(e){0==e.code&&e.data.forEach(function(e,a){"96"==e&&(t.rolesmanager=!0)})}),this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this,a=e.formSearch;e.formSearch.current=t,40!=a.Status&&(a.Result=""),e.form.validateFields(function(t,n){t||(e.$loading.open(),r["a"].post("/api/Crm/Contract/List",a).then(function(t){e.$loading.close(),0===t.code&&(e.formSearch.total=t.count,e.contractList=t.data.rows)}).catch(function(t){e.$loading.close(),console.log(t)}))})},detail:function(t){this.drawer.detail={show:!0,assetsdetail:t,PayDaySuffix:this.PayDaySuffix,Dept:this.Dept,User:this.User,comRankObject:this.comRankObject,rolesmanager:this.rolesmanager}},statusChange:function(t){this.formSearch.Result=40==t?10:""}}},f=u,d=(a("f676"),a("2877")),m=Object(d["a"])(f,n,o,!1,null,null,null);e["default"]=m.exports},b7b9:function(t,e,a){},f676:function(t,e,a){"use strict";var n=a("b7b9"),o=a.n(n);o.a}}]);