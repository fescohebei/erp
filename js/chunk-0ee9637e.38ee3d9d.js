(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ee9637e","chunk-1f1b4ce5"],{"0bfb":function(t,a,e){"use strict";var s=e("cb7c");t.exports=function(){var t=s(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},"33a7":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-drawer",{attrs:{message:"",visible:this.visible.show,width:450,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[e("template",{slot:"title"},[t._v("\n    合同详情\n  ")]),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("公司名称:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.ComName?t.visible.assetsdetail.ComName:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("客商类型:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.ComTypeText?t.visible.assetsdetail.ComTypeText:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("客户评级:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.rankText?t.rankText:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("产品线:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.ProductLineText?t.visible.assetsdetail.ProductLineText:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("申请日期:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.CreateDate?t.visible.assetsdetail.CreateDate:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("开始日期:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.StartDate?t.visible.assetsdetail.StartDate:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("终止日期:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.EndDate?t.visible.assetsdetail.EndDate:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("是否延期:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["是否延期"]?t.FormComponentValues["是否延期"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("服务内容:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["服务内容"]?t.FormComponentValues["服务内容"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("服务部门:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["服务部门"]?t.visible.Dept[t.FormComponentValues["服务部门"]]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("申请类型:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.SignTypeText?t.visible.assetsdetail.SignTypeText:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("合同内容:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["合同内容"]?t.FormComponentValues["合同内容"]:"无"))])],1),t.FormComponentValues["标准合同修改内容"]&&t.FormComponentValues["标准合同修改内容"][0]["原合同内容"]?t._l(t.FormComponentValues["标准合同修改内容"],function(a,s){return e("a-row",{key:s,staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{attrs:{span:24}},[e("a-divider",{staticStyle:{"font-size":"12px"},attrs:{dashed:"",orientation:"left"}},[t._v("标准合同修改内容("+t._s(s+1)+"):")])],1),e("a-col",{attrs:{span:24}},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("原合同内容：")]),t._v(t._s(a["原合同内容"]))]),e("a-col",{attrs:{span:24}},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("修改后合同内容：")]),t._v(t._s(a["修改后合同内容"]))])],1)}):t._e(),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("垫付:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["垫付"]?t.FormComponentValues["垫付"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("垫付金额:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["垫付金额"]?t.FormComponentValues["垫付金额"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("垫付周期:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["垫付周期"]?t.FormComponentValues["垫付周期"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("月服务费:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["月服务费"]?t.FormComponentValues["月服务费"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("垫付说明:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["垫付说明"]?t.FormComponentValues["垫付说明"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("信息提供者:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["信息提供者"]?t.visible.User[t.FormComponentValues["信息提供者"]]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("签单支持部门:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["签单支持部门"]?t.visible.Dept[t.FormComponentValues["签单支持部门"]]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("签单支持员工:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["签单支持员工"]?t.visible.User[t.FormComponentValues["签单支持员工"]]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("状态:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.StatusText?t.visible.assetsdetail.StatusText:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("审批结果:")]),e("a-col",{attrs:{span:18}},[10==t.visible.assetsdetail.Result?e("span",{staticStyle:{color:"#52c41a"}},[t._v(t._s(t.visible.assetsdetail.ResultText?t.visible.assetsdetail.ResultText:"无"))]):t._e(),20==t.visible.assetsdetail.Result?e("span",{staticStyle:{color:"#f5222d"}},[t._v(t._s(t.visible.assetsdetail.ResultText?t.visible.assetsdetail.ResultText:"无"))]):t._e()])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("附件:")]),e("a-col",{attrs:{span:18}},[1==t.notInDingTalk?e("div",[e("a-tag",{attrs:{color:"red"}},[t._v("请到钉钉应用界面查看附件！")])],1):t._e(),0==t.notInDingTalk?[t.uploadArry.length>0?t._l(t.uploadArry,function(a){return e("div",{key:a.fileId},[e("a-icon",{attrs:{type:"file-text"}}),t._v(" "+t._s(a.fileName)+"  "),e("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"file-search"},on:{click:function(e){return t.preview(a)}}})],1)}):[t._v("无")]]:t._e()],2)],1),e("a-row",{staticStyle:{padding:"10px 0"},attrs:{gutter:24}})],2)},i=[],n=(e("6b54"),e("b775")),o=(e("c32d"),{components:{},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},assetsdetail:{},Dept:{},User:{},comRankObject:{}},FormComponentValues:{},formSearch:{pageSize:5,current:1,total:0,next:!0},form:this.$form.createForm(this),drawer:{},modal:{outchange:{show:!1}},SpaceId:"",uploadArry:[],fescoMessage:{},notInDingTalk:!1,rankText:""}},created:function(){var t=this;this.$watch("show",function(a,e){t.visible=a,t.visible.show&&t.init()})},methods:{init:function(){var t=this;this.visible.assetsdetail.ProcessInstanceId?t.FormComponentValues=JSON.parse(this.visible.assetsdetail.FormComponentValues):t.FormComponentValues={"服务内容":this.visible.assetsdetail.FormComponentValues},n["a"].get("/api/DingTalk/CspaceInfo").then(function(a){var e=a,s=e.data.SpaceId;0===e.code&&(t.SpaceId=s)}).catch(function(t){console.log(t)}),n["a"].post("/api/DingTalk/GetSign",{}).then(function(a){t.fescoMessage=a.data,dd.config({agentId:a.data.AgentId,corpId:a.data.corpId,timeStamp:a.data.timeStamp,nonceStr:a.data.nonceStr,signature:a.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(t){console.log(t)}),"notInDingTalk"==dd.env.platform&&(t.notInDingTalk=!0),t.FormComponentValues["附件"]&&(t.uploadArry=t.FormComponentValues["附件"]),n["a"].post("/api/Crm/ComRank/Last",{ComGuid:t.visible.assetsdetail.ComGuid}).then(function(a){0===a.code&&(a.data?t.rankText=t.visible.comRankObject[a.data.Rank]:t.rankText="")}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.sourceListRecords=[],this.formSearch.next=!0,this.assetsdetail={company:{},line:{},leads:{}},this.refresh&&this.refresh()},preview:function(t){var a=this;dd.ready(function(){dd.biz.cspace.preview({corpId:a.fescoMessage.corpId,spaceId:a.SpaceId.toString(),fileId:t.fileId,fileName:t.fileName,fileSize:t.fileSize,fileType:t.fileType,onSuccess:function(){},onFail:function(t){}})})}}}),r=o,l=e("2877"),c=Object(l["a"])(r,s,i,!1,null,null,null);a["default"]=c.exports},3454:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-drawer",{attrs:{message:"",visible:this.visible.show,width:850,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[e("template",{slot:"title"},[t._v("\n    详情\n  ")]),e("a-table",{attrs:{columns:t.columns,dataSource:t.peopleList,pagination:!1,rowKey:"ContractGuid"},scopedSlots:t._u([{key:"Status",fn:function(a,s){return e("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(t.visible.ContractStatus[s.Status])+"\n        ")])}},{key:"Userid",fn:function(a,s){return e("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(t.UserArray[s.Userid])+"\n        ")])}},{key:"ProductLine",fn:function(a,s){return e("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(t.visible.ProductLine[s.ProductLine])+"\n        ")])}},{key:"action",fn:function(a,s){return e("span",{staticStyle:{"text-align":"right"}},[e("a",{on:{click:function(a){return t.detail(s)}}},[t._v("详情")])])}}])},[e("template",{slot:"footer"},[e("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2),e("drawer-contract-detail",{attrs:{show:t.drawer.contractdetail,refresh:t.init}})],2)},i=[],n=(e("ac6a"),e("b775")),o=(e("c32d"),e("33a7")),r=[{title:"状态",scopedSlots:{customRender:"Status"}},{title:"公司名称",dataIndex:"ComName"},{title:"产品线",scopedSlots:{customRender:"ProductLine"}},{title:"操作",scopedSlots:{customRender:"action"}}],l={components:{DrawerContractDetail:o["default"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},assetsdetail:{},ProductLine:{},ContractStatus:{}},columns:r,formSearch:{pageSize:10,current:1,total:0,Userid:"",Begin:"",End:""},form:this.$form.createForm(this),drawer:{contractdetail:{show:!1}},modal:{},peopleList:[],ComType:{},ComProductLine:{},SignType:{},ContractStatus:{},ContractResult:{}}},created:function(){var t=this;this.$watch("show",function(a,e){t.visible=a,console.log(t.visible),t.visible.show&&t.init()})},methods:{init:function(){var t=this;n["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComType","ComProductLine","SignType","ContractStatus","ContractResult"]}).then(function(a){0===a.code&&(a.data.ComType.forEach(function(a,e){t.ComType[a.key]=a.text}),a.data.ComProductLine.forEach(function(a,e){t.ComProductLine[a.key]=a.text}),a.data.SignType.forEach(function(a,e){t.SignType[a.key]=a.text}),a.data.ContractStatus.forEach(function(a,e){t.ContractStatus[a.key]=a.text}),a.data.ContractResult.forEach(function(a,e){t.ContractResult[a.key]=a.text}))}).catch(function(t){console.log(t)}),t.pagechange(1)},pagechange:function(t){var a=this,e=a.formSearch;a.formSearch.current=t,a.formSearch.Userid=a.visible.assetsdetail.Userid,a.formSearch.Begin=a.visible.Begin,a.formSearch.End=a.visible.End,n["a"].post("/api/Crm/Data/ContractsDetailByUser",e).then(function(t){0===t.code&&(a.peopleList=t.data.rows,a.formSearch.total=t.count)}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.refresh&&this.refresh()},detail:function(t){t.ComTypeText=this.ComType[t.ComType],t.ProductLineText=this.ComProductLine[t.ProductLine],t.SignTypeText=this.SignType[t.SignType],t.StatusText=this.ContractStatus[t.Status],t.ResultText=this.ContractResult[t.Result],this.drawer.contractdetail={show:!0,assetsdetail:t}}}},c=l,p=e("2877"),u=Object(p["a"])(c,s,i,!1,null,null,null);a["default"]=u.exports},3846:function(t,a,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"6b54":function(t,a,e){"use strict";e("3846");var s=e("cb7c"),i=e("0bfb"),n=e("9e1e"),o="toString",r=/./[o],l=function(t){e("2aba")(RegExp.prototype,o,t,!0)};e("79e5")(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?l(function(){var t=s(this);return"/".concat(t.source,"/","flags"in t?t.flags:!n&&t instanceof RegExp?i.call(t):void 0)}):r.name!=o&&l(function(){return r.call(this)})}}]);