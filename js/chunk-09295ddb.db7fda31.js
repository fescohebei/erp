(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09295ddb"],{"0760":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a-drawer",{attrs:{message:"",visible:this.visible.show,width:450,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[s("template",{slot:"title"},[t._v("\n    合同详情\n    "),40==t.visible.assetsdetail.Status&&10==t.visible.assetsdetail.Result?s("a-button",{staticStyle:{float:"right"},attrs:{size:"small",icon:"form"},on:{click:t.isSure}},[t._v("确认")]):t._e()],1),60==t.visible.assetsdetail.Status||80==t.visible.assetsdetail.Status?[s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("合同编号:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.ContractCode?t.visible.assetsdetail.ContractCode:"无"))])],1)]:t._e(),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("公司名称:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.ComName?t.visible.assetsdetail.ComName:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("客商类型:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.ComTypeText?t.visible.assetsdetail.ComTypeText:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("客户评级:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.rankText?t.rankText:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("产品线:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.ProductLineText?t.visible.assetsdetail.ProductLineText:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("申请日期:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.CreateDate?t.moment(t.visible.assetsdetail.CreateDate).format("YYYY-MM-DD"):"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("开始日期:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.StartDate?t.moment(t.visible.assetsdetail.StartDate).format("YYYY-MM-DD"):"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("终止日期:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.EndDate?t.moment(t.visible.assetsdetail.EndDate).format("YYYY-MM-DD"):"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("是否延期:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["是否延期"]?t.FormComponentValues["是否延期"]:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("服务内容:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["服务内容"]?t.FormComponentValues["服务内容"]:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("服务部门:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["服务部门"]?t.visible.Dept[t.FormComponentValues["服务部门"]]:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("申请类型:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.SignTypeText?t.visible.assetsdetail.SignTypeText:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("合同内容:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["合同内容"]?t.FormComponentValues["合同内容"]:"无"))])],1),t.FormComponentValues["标准合同修改内容"]&&t.FormComponentValues["标准合同修改内容"][0]["原合同内容"]?t._l(t.FormComponentValues["标准合同修改内容"],function(a,e){return s("a-row",{key:e,staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{attrs:{span:24}},[s("a-divider",{staticStyle:{"font-size":"12px"},attrs:{dashed:"",orientation:"left"}},[t._v("标准合同修改内容("+t._s(e+1)+"):")])],1),s("a-col",{attrs:{span:24}},[s("span",{staticStyle:{"font-weight":"bold"}},[t._v("原合同内容：")]),t._v(t._s(a["原合同内容"]))]),s("a-col",{attrs:{span:24}},[s("span",{staticStyle:{"font-weight":"bold"}},[t._v("修改后合同内容：")]),t._v(t._s(a["修改后合同内容"]))])],1)}):t._e(),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("垫付:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["垫付"]?t.FormComponentValues["垫付"]:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("垫付金额:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["垫付金额"]?t.FormComponentValues["垫付金额"]:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("垫付周期:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["垫付周期"]?t.FormComponentValues["垫付周期"]:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("月服务费:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["月服务费"]?t.FormComponentValues["月服务费"]:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("垫付说明:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["垫付说明"]?t.FormComponentValues["垫付说明"]:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("信息提供者:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.InfoUseridText?t.visible.assetsdetail.InfoUseridText:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("信息提供部门:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.InfoDepIdText?t.visible.assetsdetail.InfoDepIdText:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("信息费比例:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["信息费比例"]?t.FormComponentValues["信息费比例"]:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("销售部门:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["销售部门"]?t.visible.Dept[t.FormComponentValues["销售部门"]]:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("销售姓名:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.CreateUseridText?t.visible.assetsdetail.CreateUseridText:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("签单支持部门:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["签单支持部门"]?t.visible.Dept[t.FormComponentValues["签单支持部门"]]:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("签单支持员工:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.FormComponentValues["签单支持员工"]?t.visible.User[t.FormComponentValues["签单支持员工"]]:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("附件:")]),s("a-col",{attrs:{span:18}},[1==t.notInDingTalk?s("div",[s("a-tag",{attrs:{color:"red"}},[t._v("请到钉钉应用界面查看附件！")])],1):t._e(),0==t.notInDingTalk?[t.uploadArry.length>0?t._l(t.uploadArry,function(a){return s("div",{key:a.fileId},[s("a-icon",{attrs:{type:"file-text"}}),t._v(" "+t._s(a.fileName)+"  "),s("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"file-search"},on:{click:function(s){return t.preview(a)}}})],1)}):[t._v("无")]]:t._e()],2)],1),60==t.visible.assetsdetail.Status||80==t.visible.assetsdetail.Status?[s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("产业:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.chanyeList[t.visible.assetsdetail.ChanyeCode]?t.chanyeList[t.visible.assetsdetail.ChanyeCode]:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("地区:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.cityList[t.visible.assetsdetail.CityCode]?t.cityList[t.visible.assetsdetail.CityCode]:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("付款时间:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.PayDay?"每月"+t.visible.assetsdetail.PayDay+"日"+t.visible.PayDaySuffix[t.visible.assetsdetail.PayDaySuffix]:"无"))])],1),s("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:11}},[s("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t._v("备注:")]),s("a-col",{attrs:{span:18}},[t._v(t._s(t.visible.assetsdetail.Remarks?t.visible.assetsdetail.Remarks:"无"))])],1)]:t._e(),s("a-row",{staticStyle:{padding:"10px 0"},attrs:{gutter:24}}),s("drawer-issure",{attrs:{show:t.drawer.issure,refresh:t.init}})],2)},i=[],n=(s("6b54"),s("b775")),l=s("c32d"),o=s.n(l),r=s("20f0"),c={components:{DrawerIssure:r["default"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},assetsdetail:{},PayDaySuffix:{},Dept:{},User:{}},FormComponentValues:{},formSearch:{pageSize:5,current:1,total:0,next:!0},form:this.$form.createForm(this),drawer:{issure:{show:!1}},modal:{outchange:{show:!1}},cityList:{},chanyeList:{},SpaceId:"",uploadArry:[],fescoMessage:{},notInDingTalk:!1,moment:o.a,rankText:""}},created:function(){var t=this;this.$watch("show",function(a,s){t.visible=a,console.log(t.visible),t.visible.show&&t.init()})},methods:{init:function(){var t=this;this.visible.assetsdetail.ProcessInstanceId?t.FormComponentValues=JSON.parse(this.visible.assetsdetail.FormComponentValues):t.FormComponentValues={"服务内容":this.visible.assetsdetail.FormComponentValues},n["a"].post("/api/Dim/Enum/DimDecode",{Names:["City","chanye"]}).then(function(a){0===a.code&&(t.cityList=a.data.City,t.chanyeList=a.data.chanye)}).catch(function(t){console.log(t)}),n["a"].post("/api/Crm/ComRank/Last",{ComGuid:t.visible.assetsdetail.ComGuid}).then(function(a){0===a.code&&(a.data?t.rankText=t.visible.comRankObject[a.data.Rank]:t.rankText="")}).catch(function(t){console.log(t)}),n["a"].get("/api/DingTalk/CspaceInfo").then(function(a){var s=a,e=s.data.SpaceId;0===s.code&&(t.SpaceId=e)}).catch(function(t){console.log(t)}),n["a"].post("/api/DingTalk/GetSign",{}).then(function(a){t.fescoMessage=a.data,dd.config({agentId:a.data.AgentId,corpId:a.data.corpId,timeStamp:a.data.timeStamp,nonceStr:a.data.nonceStr,signature:a.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(t){console.log(t)}),"notInDingTalk"==dd.env.platform&&(t.notInDingTalk=!0),t.FormComponentValues["附件"]&&(t.uploadArry=t.FormComponentValues["附件"])},onClose:function(){this.visible.show=!1,this.sourceListRecords=[],this.formSearch.next=!0,this.refresh&&this.refresh()},isSure:function(){this.drawer.issure={show:!0,assetsdetail:this.visible.assetsdetail}},preview:function(t){var a=this;dd.ready(function(){dd.biz.cspace.preview({corpId:a.fescoMessage.corpId,spaceId:a.SpaceId.toString(),fileId:t.fileId,fileName:t.fileName,fileSize:t.fileSize,fileType:t.fileType,onSuccess:function(){},onFail:function(t){}})})}}},p=c,d=s("2877"),g=Object(d["a"])(p,e,i,!1,null,null,null);a["default"]=g.exports},3846:function(t,a,s){s("9e1e")&&"g"!=/./g.flags&&s("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:s("0bfb")})},"6b54":function(t,a,s){"use strict";s("3846");var e=s("cb7c"),i=s("0bfb"),n=s("9e1e"),l="toString",o=/./[l],r=function(t){s("2aba")(RegExp.prototype,l,t,!0)};s("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?r(function(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!n&&t instanceof RegExp?i.call(t):void 0)}):o.name!=l&&r(function(){return o.call(this)})}}]);