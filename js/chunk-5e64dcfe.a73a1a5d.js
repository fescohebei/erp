(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e64dcfe","chunk-2d0b59e6"],{"1a55":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:"导出",destroyOnClose:!0,visible:this.visible.show,maskClosable:!0},on:{ok:t.handleSubmit,cancel:t.onClose}},[a("a-form",{attrs:{form:t.form},on:{submit:t.handleSubmit}},[a("a-form-item",{attrs:{label:"合同归档时间",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["Time",{rules:t.AFormImportRules.iptInputReq}],expression:"['Time',{rules:AFormImportRules.iptInputReq}]"}],attrs:{format:"YYYY-MM-DD"},on:{change:t.changeTime}})],1),a("a-form-item",{attrs:{label:"合同状态",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{attrs:{allowClear:!0},model:{value:t.formSearch.Status,callback:function(e){t.$set(t.formSearch,"Status",e)},expression:"formSearch.Status"}},t._l(t.visible.status,function(e){return a("a-select-option",{key:e.key,attrs:{hidden:e.key<40}},[t._v("\n            "+t._s(e.text)+"\n          ")])}),1)],1),a("a-form-item",{attrs:{label:"审批结果",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{attrs:{allowClear:!0},model:{value:t.formSearch.Result,callback:function(e){t.$set(t.formSearch,"Result",e)},expression:"formSearch.Result"}},t._l(t.visible.ContractResult,function(e){return a("a-select-option",{key:e.key},[t._v("\n          "+t._s(e.text)+"\n        ")])}),1)],1)],1)],1)},o=[],n=(a("b775"),{props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,assetstransferdetail:{AssetsName:""}},form:this.$form.createForm(this),AFormImportRules:{iptInputReq:[{required:!0,message:"请输入"}]},formSearch:{Status:60,Result:"",BeginDate:"",EndDate:""}}},watch:{show:function(t,e){var a=this;a.visible=t,t.show&&a.init()}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields()},init:function(){},handleSubmit:function(){var t=this,e=this;this.form.validateFields(function(a,r){if(!a){var o=t.formSearch,n=document.createElement("a");n.href="/api/Crm/Contract/Export?BeginDate="+o.BeginDate+"&EndDate="+o.EndDate+"&Status="+(r.Status?r.Status:"")+"&Result="+(r.Result?r.Result:""),n.click(),e.onClose()}})},changeTime:function(t){this.formSearch.BeginDate=moment(t[0]._d).format("YYYY-MM-DD"),this.formSearch.EndDate=moment(t[1]._d).format("YYYY-MM-DD")}}}),s=n,i=a("2877"),c=Object(i["a"])(s,r,o,!1,null,null,null);e["default"]=c.exports},"6fd7":function(t,e,a){},"7f9d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{layout:"horizontal"}},[a("div",{class:t.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.init(e)}},model:{value:t.formSearch.Keyword,callback:function(e){t.$set(t.formSearch,"Keyword",e)},expression:"formSearch.Keyword"}})],1)],1),a("a-col",{attrs:{md:3}},[a("a-form-item",[a("a-select",{on:{change:t.statusChange},model:{value:t.formSearch.Status,callback:function(e){t.$set(t.formSearch,"Status",e)},expression:"formSearch.Status"}},[t._l(t.status,function(e){return a("a-select-option",{key:e.key},[t._v("\n                      "+t._s(e.text)+"\n                    ")])}),a("a-select-option",{attrs:{value:""}},[t._v("\n                      全部\n                    ")])],2)],1)],1),40==t.formSearch.Status?a("a-col",{attrs:{md:3}},[a("a-form-item",[a("a-select",{model:{value:t.formSearch.Result,callback:function(e){t.$set(t.formSearch,"Result",e)},expression:"formSearch.Result"}},[t._l(t.ContractResult,function(e){return a("a-select-option",{key:e.key},[t._v("\n                      "+t._s(e.text)+"\n                    ")])}),a("a-select-option",{attrs:{value:""}},[t._v("\n                      全部\n                    ")])],2)],1)],1):t._e(),a("a-col",{attrs:{span:12}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:t.init}},[t._v("查询")]),a("a-button",{attrs:{type:"primary"},on:{click:t.exportContract}},[t._v("导出")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.contractList,pagination:!1,rowKey:"ContractGuid"},scopedSlots:t._u([{key:"StatusText",fn:function(e,r){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(r.StatusText)+"\n          "),40==r.Status&&r.Result?[10==r.Result?a("span",{staticStyle:{color:"#52c41a"}},[t._v("("+t._s(r.ResultText)+")")]):t._e(),20==r.Result?a("span",{staticStyle:{color:"#f5222d"}},[t._v("("+t._s(r.ResultText)+")")]):t._e()]:t._e()],2)}},{key:"CreateDate",fn:function(e,r){return a("span",{},[t._v("\n          "+t._s(t.moment(r.CreateDate).format("YYYY-MM-DD"))+"\n        ")])}},{key:"action",fn:function(e,r){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.detail(r)}}},[t._v("详情")]),40==r.Status&&10==r.Result||80==r.Status?a("a-divider",{attrs:{type:"vertical"}}):t._e(),40==r.Status&&10==r.Result||80==r.Status?a("a",{on:{click:function(e){return t.isSure(r)}}},[t._v("确认")]):t._e()],1)}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1)],1),a("drawer-issure",{attrs:{show:t.drawer.issure,refresh:t.pagerefresh}}),a("drawer-detail",{attrs:{show:t.drawer.detail,refresh:t.pagerefresh,issure:t.isSure}}),a("modal-exportcontract",{attrs:{show:t.modal.exportcontract,refresh:t.init}})],1)},o=[],n=(a("ac6a"),a("b775")),s=a("c32d"),i=a.n(s),c=a("20f0"),l=a("0760"),u=a("1a55"),f=[{title:"状态",scopedSlots:{customRender:"StatusText"}},{title:"公司名称",dataIndex:"ComName"},{title:"产品线",dataIndex:"ProductLineText"},{title:"客商类型",dataIndex:"ComTypeText"},{title:"销售姓名",dataIndex:"CreateUseridText"},{title:"类型",dataIndex:"SignTypeText"},{title:"发送审核日期",scopedSlots:{customRender:"CreateDate"}},{title:"操作",scopedSlots:{customRender:"action"}}],m={components:{DrawerIssure:c["default"],DrawerDetail:l["default"],ModalExportcontract:u["default"]},data:function(){return{advanced:!0,columns:f,formSearch:{pageSize:10,current:1,total:0,Keyword:"",Status:40,Result:10},form:this.$form.createForm(this),contractList:[],roles:[],drawer:{issure:{show:!1},detail:{show:!1}},modal:{exporttransfer:{show:!1},exportcontract:{show:!1}},invalidlayer:!1,confirmLoading:!1,invalidRecord:{},status:[],ContractResult:[],PayDaySuffix:{},User:{},Dept:{},moment:i.a,comRankObject:{},rolesmanager:!1}},mounted:function(){var t=this;t.init()},methods:{init:function(){var t=this;n["a"].post("/api/Dim/Enum/GetEnum",{Names:["ContractStatus","ContractResult","PayDaySuffix","ComRankNormal"]}).then(function(e){0===e.code&&(t.status=e.data.ContractStatus,t.ContractResult=e.data.ContractResult,e.data.PayDaySuffix.forEach(function(e,a){t.PayDaySuffix[e.key]=e.text}),e.data.ComRankNormal.forEach(function(e,a){t.comRankObject[e.key]=e.text}))}).catch(function(t){console.log(t)}),n["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept"]}).then(function(e){t.$loading.close(),0===e.code&&(t.User=e.data.User,t.Dept=e.data.Dept)}).catch(function(e){t.$loading.close(),console.log(e)}),n["a"].get("/api/Org/User/CurrentUsersRole").then(function(e){0==e.code&&e.data.forEach(function(e,a){"96"==e&&(t.rolesmanager=!0)})}),this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this,a=e.formSearch;e.formSearch.current=t,40!=a.Status&&(a.Result=""),e.form.validateFields(function(t,r){t||(e.$loading.open(),n["a"].post("/api/Crm/Contract/List",a).then(function(t){e.$loading.close(),0===t.code&&(e.formSearch.total=t.count,e.contractList=t.data.rows)}).catch(function(t){e.$loading.close(),console.log(t)}))})},detail:function(t){console.log(this.rolesmanager),this.drawer.detail={show:!0,assetsdetail:t,PayDaySuffix:this.PayDaySuffix,Dept:this.Dept,User:this.User,comRankObject:this.comRankObject,rolesmanager:this.rolesmanager}},isSure:function(t){this.drawer.issure={show:!0,id:t.ContractGuid,assetsdetail:t}},statusChange:function(t){this.formSearch.Result=40==t?10:""},exportContract:function(){this.modal.exportcontract={show:!0,status:this.status,ContractResult:this.ContractResult}}}},d=m,h=(a("d343"),a("2877")),p=Object(h["a"])(d,r,o,!1,null,null,null);e["default"]=p.exports},d343:function(t,e,a){"use strict";var r=a("6fd7"),o=a.n(r);o.a}}]);