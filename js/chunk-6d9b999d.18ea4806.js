(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d9b999d"],{1663:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("a-row",{attrs:{gutter:10}},[e("a-col",{attrs:{span:12}},[e("a-form-item",[e("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:function(a){return t.contractAdd()}}},[t._v("添加")])],1)],1)],1),e("a-table",{attrs:{columns:t.columns,dataSource:t.contractList,pagination:!1,rowKey:"ContractGuid"},scopedSlots:t._u([{key:"StatusText",fn:function(a,s){return e("span",{staticStyle:{"text-align":"right"}},[t._v("\n      "+t._s(s.StatusText)+"\n      "),40==s.Status&&s.Result?[10==s.Result?e("span",{staticStyle:{color:"#52c41a"}},[t._v("("+t._s(s.ResultText)+")")]):t._e(),20==s.Result?e("span",{staticStyle:{color:"#f5222d"}},[t._v("("+t._s(s.ResultText)+")")]):t._e()]:t._e()],2)}},{key:"action",fn:function(a,s){return e("span",{staticStyle:{"text-align":"right"}},[e("a-dropdown",[e("a",{staticClass:"ant-dropdown-link"},[t._v("\n          更多\n          "),e("a-icon",{attrs:{type:"down"}})],1),e("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[e("a-menu-item",{on:{click:function(a){return t.detail(s)}}},[t._v("详情")]),(30==s.Status||40==s.Status&&20==s.Result)&&s.ProcessInstanceId&&t.userid==s.CreateUserid?e("a-menu-item",{on:{click:function(a){return t.contractAdd(s)}}},[t._v("重新发起")]):t._e()],1)],1)],1)}}])},[e("template",{slot:"footer"},[e("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.contractListChange}})],1)],2),e("drawer-contract-add",{attrs:{show:t.drawer.contractadd,refresh:t.refreshAll}}),e("drawer-contract-detail",{attrs:{show:t.drawer.contractdetail,refresh:t.init}})],1)},n=[],i=e("b775"),o=e("c32d"),r=e.n(o),l=e("a903"),c=e("33a7"),d=[{title:"状态",scopedSlots:{customRender:"StatusText"},width:90},{title:"产品线",dataIndex:"ProductLineText",width:140},{title:"客商类型",dataIndex:"ComTypeText",width:90},{title:"销售姓名",dataIndex:"CreateUseridText",width:90},{title:"类型",dataIndex:"SignTypeText",width:70},{title:"发送审核日期",dataIndex:"CreateDate",width:120},{title:"操作",scopedSlots:{customRender:"action"}}],p={name:"contractList",components:{DrawerContractAdd:l["default"],DrawerContractDetail:c["default"]},props:{show:{type:Object,default:function(){}},refresh:{type:Function,default:null},assetsdetail:{type:Object,default:""},componenttype:{type:String,default:""},userid:{type:String,default:""},comRankObject:{type:Object,default:function(){return{}}}},data:function(){return{visible:{show:!1,id:{},userid:"",comRankObject:{}},columns:d,dim:{ComProductLine:[]},formSearch:{pageSize:5,current:1,total:0,next:!0},contractList:[],enableeditguid:"",form:this.$form.createForm(this),drawer:{contractadd:{show:!1},contractdetail:{show:!1}},modal:{outchange:{show:!1}},User:{},Dept:{}}},created:function(){this.init()},methods:{init:function(){var t=this;t.$nextTick(function(){t.contractListChange(1)}),i["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept"]}).then(function(a){t.$loading.close(),0===a.code&&(t.User=a.data.User,t.Dept=a.data.Dept)}).catch(function(a){t.$loading.close(),console.log(a)})},detail:function(t){this.drawer.contractdetail={show:!0,assetsdetail:t,Dept:this.Dept,User:this.User,comRankObject:this.comRankObject}},searchContract:function(){this.contractListChange(1)},contractAdd:function(t){var a=this,e={};t?a.$confirm({title:"请仔细检查所填项！",content:"点击确定重新发起合同！",onOk:function(){t.ProcessInstanceId&&(e=JSON.parse(t.FormComponentValues),e["申请日期"]=r()(e["申请日期"]),e["开始日期"]=r()(e["开始日期"]),e["终止日期"]=r()(e["终止日期"]),console.log(e),a.drawer.contractadd={show:!0,assetsdetail:a.assetsdetail,componenttype:a.componenttype,reapplydetail:t,FormComponentValues:e})},onCancel:function(){}}):(t={},a.drawer.contractadd={show:!0,assetsdetail:a.assetsdetail,componenttype:a.componenttype,reapplydetail:t,FormComponentValues:e})},modify:function(){this.drawer.linemodify={show:!0,id:this.show.id,assetsdetail:this.assetsdetail.line}},contractListChange:function(t){var a=this,e=a.formSearch;a.formSearch.current=t,"line"===a.componenttype&&(e.ComProductLineGuid=a.assetsdetail.line.ComProductLineGuid),"company"===a.componenttype&&(e.ComGuid=a.assetsdetail.ComGuid),a.form.validateFields(function(t,s){t||i["a"].post("/api/Crm/Contract/List",e).then(function(t){0===t.code&&(a.formSearch.total=t.count,a.contractList=t.data.rows,t.data.rows.length<a.formSearch.pageSize&&(a.formSearch.next=!1))}).catch(function(t){console.log(t)})})},refreshAll:function(){this.init(),this.refresh&&this.refresh()}}},u=p,m=e("2877"),g=Object(m["a"])(u,s,n,!1,null,null,null);a["default"]=g.exports},"33a7":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-drawer",{attrs:{message:"",visible:this.visible.show,width:450,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[e("template",{slot:"title"},[t._v("\n    合同详情\n  ")]),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("公司名称:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.ComName?t.visible.assetsdetail.ComName:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("客商类型:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.ComTypeText?t.visible.assetsdetail.ComTypeText:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("客户评级:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.rankText?t.rankText:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("产品线:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.ProductLineText?t.visible.assetsdetail.ProductLineText:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("申请日期:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.CreateDate?t.visible.assetsdetail.CreateDate:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("开始日期:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.StartDate?t.visible.assetsdetail.StartDate:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("终止日期:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.EndDate?t.visible.assetsdetail.EndDate:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("是否延期:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["是否延期"]?t.FormComponentValues["是否延期"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("服务内容:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["服务内容"]?t.FormComponentValues["服务内容"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("服务部门:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["服务部门"]?t.visible.Dept[t.FormComponentValues["服务部门"]]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("申请类型:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.SignTypeText?t.visible.assetsdetail.SignTypeText:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("合同内容:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["合同内容"]?t.FormComponentValues["合同内容"]:"无"))])],1),t.FormComponentValues["标准合同修改内容"]&&t.FormComponentValues["标准合同修改内容"][0]["原合同内容"]?t._l(t.FormComponentValues["标准合同修改内容"],function(a,s){return e("a-row",{key:s,staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{attrs:{span:24}},[e("a-divider",{staticStyle:{"font-size":"12px"},attrs:{dashed:"",orientation:"left"}},[t._v("标准合同修改内容("+t._s(s+1)+"):")])],1),e("a-col",{attrs:{span:24}},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("原合同内容：")]),t._v(t._s(a["原合同内容"]))]),e("a-col",{attrs:{span:24}},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("修改后合同内容：")]),t._v(t._s(a["修改后合同内容"]))])],1)}):t._e(),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("垫付:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["垫付"]?t.FormComponentValues["垫付"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("垫付金额:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["垫付金额"]?t.FormComponentValues["垫付金额"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("垫付周期:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["垫付周期"]?t.FormComponentValues["垫付周期"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("月服务费:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["月服务费"]?t.FormComponentValues["月服务费"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("垫付说明:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["垫付说明"]?t.FormComponentValues["垫付说明"]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("信息提供者:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["信息提供者"]?t.visible.User[t.FormComponentValues["信息提供者"]]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("签单支持部门:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["签单支持部门"]?t.visible.Dept[t.FormComponentValues["签单支持部门"]]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("签单支持员工:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["签单支持员工"]?t.visible.User[t.FormComponentValues["签单支持员工"]]:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("状态:")]),e("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.StatusText?t.visible.assetsdetail.StatusText:"无"))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("审批结果:")]),e("a-col",{attrs:{span:18}},[10==t.visible.assetsdetail.Result?e("span",{staticStyle:{color:"#52c41a"}},[t._v(t._s(t.visible.assetsdetail.ResultText?t.visible.assetsdetail.ResultText:"无"))]):t._e(),20==t.visible.assetsdetail.Result?e("span",{staticStyle:{color:"#f5222d"}},[t._v(t._s(t.visible.assetsdetail.ResultText?t.visible.assetsdetail.ResultText:"无"))]):t._e()])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("附件:")]),e("a-col",{attrs:{span:18}},[1==t.notInDingTalk?e("div",[e("a-tag",{attrs:{color:"red"}},[t._v("请到钉钉应用界面查看附件！")])],1):t._e(),0==t.notInDingTalk?[t.uploadArry.length>0?t._l(t.uploadArry,function(a){return e("div",{key:a.fileId},[e("a-icon",{attrs:{type:"file-text"}}),t._v(" "+t._s(a.fileName)+"  "),e("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"file-search"},on:{click:function(e){return t.preview(a)}}})],1)}):[t._v("无")]]:t._e()],2)],1),e("a-row",{staticStyle:{padding:"10px 0"},attrs:{gutter:24}})],2)},n=[],i=(e("6b54"),e("b775")),o=(e("c32d"),{components:{},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},assetsdetail:{},Dept:{},User:{},comRankObject:{}},FormComponentValues:{},formSearch:{pageSize:5,current:1,total:0,next:!0},form:this.$form.createForm(this),drawer:{},modal:{outchange:{show:!1}},SpaceId:"",uploadArry:[],fescoMessage:{},notInDingTalk:!1,rankText:""}},created:function(){var t=this;this.$watch("show",function(a,e){t.visible=a,t.visible.show&&t.init()})},methods:{init:function(){var t=this;try{t.FormComponentValues=JSON.parse(this.visible.assetsdetail.FormComponentValues)}catch(a){t.FormComponentValues={"服务内容":this.visible.assetsdetail.FormComponentValues}}i["a"].get("/api/DingTalk/CspaceInfo").then(function(a){var e=a,s=e.data.SpaceId;0===e.code&&(t.SpaceId=s)}).catch(function(t){console.log(t)}),i["a"].post("/api/DingTalk/GetSign",{}).then(function(a){t.fescoMessage=a.data,dd.config({agentId:a.data.AgentId,corpId:a.data.corpId,timeStamp:a.data.timeStamp,nonceStr:a.data.nonceStr,signature:a.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(t){console.log(t)}),"notInDingTalk"==dd.env.platform&&(t.notInDingTalk=!0),t.FormComponentValues["附件"]&&(t.uploadArry=t.FormComponentValues["附件"]),i["a"].post("/api/Crm/ComRank/Last",{ComGuid:t.visible.assetsdetail.ComGuid}).then(function(a){0===a.code&&(a.data?t.rankText=t.visible.comRankObject[a.data.Rank]:t.rankText="")}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.sourceListRecords=[],this.formSearch.next=!0,this.assetsdetail={company:{},line:{},leads:{}},this.refresh&&this.refresh()},preview:function(t){var a=this;dd.ready(function(){dd.biz.cspace.preview({corpId:a.fescoMessage.corpId,spaceId:a.SpaceId.toString(),fileId:t.fileId,fileName:t.fileName,fileSize:t.fileSize,fileType:t.fileType,onSuccess:function(){},onFail:function(t){}})})}}}),r=o,l=e("2877"),c=Object(l["a"])(r,s,n,!1,null,null,null);a["default"]=c.exports}}]);