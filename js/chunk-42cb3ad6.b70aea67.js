(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42cb3ad6"],{"5dbc":function(e,t,a){var o=a("d3f4"),s=a("8b97").set;e.exports=function(e,t,a){var n,r=t.constructor;return r!==a&&"function"==typeof r&&(n=r.prototype)!==a.prototype&&o(n)&&s&&s(e,n),e}},"8b97":function(e,t,a){var o=a("d3f4"),s=a("cb7c"),n=function(e,t){if(s(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,o){try{o=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),o(e,[]),t=!(e instanceof Array)}catch(s){t=!0}return function(e,a){return n(e,a),t?e.__proto__=a:o(e,a),e}}({},!1):void 0),check:n}},aa77:function(e,t,a){var o=a("5ca1"),s=a("be13"),n=a("79e5"),r=a("fdef"),i="["+r+"]",l="​",c=RegExp("^"+i+i+"*"),p=RegExp(i+i+"*$"),d=function(e,t,a){var s={},i=n(function(){return!!r[e]()||l[e]()!=l}),c=s[e]=i?t(u):r[e];a&&(s[a]=c),o(o.P+o.F*i,"String",s)},u=d.trim=function(e,t){return e=String(s(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(p,"")),e};e.exports=d},c5f6:function(e,t,a){"use strict";var o=a("7726"),s=a("69a8"),n=a("2d95"),r=a("5dbc"),i=a("6a99"),l=a("79e5"),c=a("9093").f,p=a("11e9").f,d=a("86cc").f,u=a("aa77").trim,m="Number",f=o[m],h=f,y=f.prototype,b=n(a("2aeb")(y))==m,v="trim"in String.prototype,g=function(e){var t=i(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():u(t,3);var a,o,s,n=t.charCodeAt(0);if(43===n||45===n){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:o=2,s=49;break;case 79:case 111:o=8,s=55;break;default:return+t}for(var r,l=t.slice(2),c=0,p=l.length;c<p;c++)if(r=l.charCodeAt(c),r<48||r>s)return NaN;return parseInt(l,o)}}return+t};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof f&&(b?l(function(){y.valueOf.call(a)}):n(a)!=m)?r(new h(g(t)),a,f):g(t)};for(var I,C=a("9e1e")?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;C.length>A;A++)s(h,I=C[A])&&!s(f,I)&&d(f,I,p(h,I));f.prototype=y,y.constructor=f,a("2aba")(o,m,f)}},e21c:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"开票申请",placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:550}},[a("a-card",{attrs:{bordered:!1}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"客户名称",labelCol:{span:8},wrapperCol:{span:16}}},[e._v("\n        "+e._s(e.visible.assetsdetail.ComName?e.visible.assetsdetail.ComName:e.visible.assetsdetail.Title)+"\n      ")]),a("a-form-item",{attrs:{label:"产品线",labelCol:{span:8},wrapperCol:{span:16}}},[("reapply"==e.visible.type||e.visible.type,[e._v("\n          "+e._s(e.ComProductLine[e.visible.assetsdetail.ProductLine])+"\n        ")])],2),e.smallShow?a("a-form-item",{attrs:{label:"开票小类",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ComProductLineSmall",{rules:e.AFormImportRules.iptSelectReq}],expression:"['ComProductLineSmall',{rules:AFormImportRules.iptSelectReq}]"}],attrs:{placeholder:"请选择",allowClear:!0}},[e._l(e.ComProductLineSmall,function(t){return[t.key>100*e.visible.assetsdetail.ProductLine&&t.key<100*(e.visible.assetsdetail.ProductLine+1)?a("a-select-option",{key:t.key},[e._v(e._s(t.text))]):e._e()]})],2)],1):e._e(),a("a-form-item",{attrs:{label:"所属月份",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["所属月份",{initialValue:e.moment(e.redetail.month,"YYYY-MM"),rules:e.AFormImportRules.iptInputReq}],expression:"['所属月份',{initialValue:moment(redetail.month, 'YYYY-MM'),rules:AFormImportRules.iptInputReq}]"}],staticStyle:{width:"100%"},attrs:{format:"YYYYMM"}})],1),a("a-form-item",{attrs:{label:"发票种类",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["发票种类",{initialValue:e.redetail.invtype,rules:e.AFormImportRules.iptSelectReq}],expression:"['发票种类',{initialValue:redetail.invtype,rules:AFormImportRules.iptSelectReq }]"}],attrs:{placeholder:"请选择",allowClear:!0}},[a("a-select-option",{attrs:{value:"增值税专票"}},[e._v("增值税专票")]),a("a-select-option",{attrs:{value:"普票"}},[e._v("普票")])],1)],1),a("a-form-item",{attrs:{label:"服务费",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{min:.01},on:{change:e.costChange},model:{value:e.cost.fwf,callback:function(t){e.$set(e.cost,"fwf",t)},expression:"cost.fwf"}})],1),a("a-form-item",{attrs:{label:"社保合计",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{min:.01},on:{change:e.costChange},model:{value:e.cost.shebao,callback:function(t){e.$set(e.cost,"shebao",t)},expression:"cost.shebao"}})],1),a("a-form-item",{attrs:{label:"公积金",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{min:.01},on:{change:e.costChange},model:{value:e.cost.gjj,callback:function(t){e.$set(e.cost,"gjj",t)},expression:"cost.gjj"}})],1),a("a-form-item",{attrs:{label:"代发薪资",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{min:.01},on:{change:e.costChange},model:{value:e.cost.dfxz,callback:function(t){e.$set(e.cost,"dfxz",t)},expression:"cost.dfxz"}})],1),a("a-form-item",{attrs:{label:"商险",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{min:.01},on:{change:e.costChange},model:{value:e.cost.sx,callback:function(t){e.$set(e.cost,"sx",t)},expression:"cost.sx"}})],1),a("a-form-item",{attrs:{label:"总金额",labelCol:{span:8},wrapperCol:{span:16}}},[e._v("\n        "+e._s(e.allCost)+"元\n      ")]),a("a-form-item",{attrs:{label:"分摊",labelCol:{span:8},wrapperCol:{span:16}}},[e._l(e.ApplyShares,function(t,o){return[a("div",{key:o},[a("span",[e._v(e._s(e.visible.DeptArray[t.DepId]))]),e._v(" "),a("span",[e._v(e._s(e.visible.UserArray[t.Userid]))]),e._v(" "),a("span",[e._v(e._s(t.Percentage))]),e._v("%\n              "),e.ApplyShares.length>0?a("a-icon",{staticClass:"dynamic-delete-button",attrs:{type:"minus-circle-o"},on:{click:function(){return e.remove(t.key)}}}):e._e()],1)]}),a("a-button",{staticStyle:{width:"100%"},attrs:{type:"dashed"},on:{click:e.showModal}},[a("a-icon",{attrs:{type:"plus"}}),e._v(" 添加分摊人员\n        ")],1),a("chooseShareModel",{ref:"collectionForm",attrs:{showModalLayer:e.showModalLayer,options:e.options,loadData:e.loadData,AFormImportRules:e.AFormImportRules},on:{cancel:e.handleCancel,create:e.handleCreate}})],2),a("a-form-item",{attrs:{label:"附件",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-button",{attrs:{disabled:1==e.notInDingTalk&&"disabled"},on:{click:e.uploadFile}},[a("a-icon",{attrs:{type:"upload"}}),e._v(" 上传附件")],1),1==e.notInDingTalk?a("div",[a("a-tag",{attrs:{color:"red"}},[e._v("此浏览器不支持上传，请到钉钉应用界面上传附件！")])],1):e._e(),e._l(e.uploadArry,function(t){return a("div",{key:t.fileId},[a("a-icon",{attrs:{type:"file-text"}}),e._v(" "+e._s(t.fileName)+" "),a("a-icon",{staticStyle:{cursor:"pointer",color:"#1890ff"},attrs:{type:"delete"},on:{click:function(a){return e.deleteFile(t.fileId)}}})],1)})],2)],1)],1),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px","z-index":9}},[a("a-button",{on:{click:e.onClose}},[e._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(t){return e.handleSubmit("storage")}}},[e._v("暂存")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(t){return e.handleSubmit()}}},[e._v("立即提交")])],1)],1)},s=[],n=(a("c5f6"),a("6b54"),a("75fc")),r=(a("7f7f"),a("ac6a"),a("b775")),i=a("c32d"),l=a.n(i),c=a("61f7"),p={props:{loadData:{type:Function,default:null},showModalLayer:{type:Boolean,default:!1},options:{type:Array,default:[]},AFormImportRules:{type:Object,default:function(){return{}}}},data:function(){return{DepList:[],selectedOptionsCell:[],SaleUserid:""}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"form_in_modal"})},template:'\n    <a-modal\n      :visible="showModalLayer"\n      title=\'选择分摊人员\'\n      okText=\'确定\'\n      @cancel="() => { $emit(\'cancel\') }"\n      @ok="() => { $emit(\'create\') }"\n    >\n      <a-form  :form="form">\n        <a-form-item label="部门" :labelCol="{span: 4}" :wrapperCol="{span: 18}">\n          <a-cascader v-decorator="[\'DepId\',{rules:[{required:true}]}]" :options="options" @change="onChange" :loadData="loadData" changeOnSelect placeholder="请选择部门" />\n        </a-form-item>  \n        <a-form-item label="人员" :labelCol="{span: 4}" :wrapperCol="{span: 18}">\n          <a-select v-decorator="[\'Userid\',{rules:[{required:true}]}]">\n            <a-select-option  v-for="item in DepList" :key="item.code">{{item.name}}</a-select-option>\n          </a-select>\n        </a-form-item>\n        <a-form-item label="比例" :labelCol="{span: 4}" :wrapperCol="{span: 18}">\n          <a-input-number style="width:100%" v-decorator="[\'Percentage\',{rules:[{required:true}]}]" :min="1" :max="99"  addon-after="%" />\n        </a-form-item>  \n      </a-form>\n    </a-modal>\n  ',methods:{onChange:function(e){this.DepList=[],this.SaleUserid="",this.userbydepid(e[e.length-1])},userbydepid:function(e){var t=this;r["a"].post("/api/Org/User/UsersByDepId",{DepId:e}).then(function(e){var a=e;0===a.code&&(t.DepList=a.data)}).catch(function(e){console.log(e)})}}},d={components:{ChooseShareModel:p},props:{show:{type:Object,default:function(){}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,assetsdetail:{},componenttype:"",type:"",FormComponentValues:{},InvApplyItemTypeArr:{},DeptArray:{},UserArray:{}},showModalLayer:!1,options:[],ApplyShares:[],SpaceId:"",uploadArry:[],productLineList:[],notInDingTalk:!1,form:this.$form.createForm(this),AFormImportRules:{iptDate:[{required:!0,message:"请选择"}],iptInputReq:[{required:!0,message:"请输入"}],iptInput:[{required:!1,message:"请输入"}],iptSelect:[{required:!1,message:"请选择"}],iptSelectReq:[{required:!0,message:"请选择"}],Mobile:[{required:!0,message:"请输入手机号"},{validator:this.ConfirmMobile}],iptInputNumber:[{required:!1,message:"请输入数字"},{validator:this.ConfirmNumber}]},fescoMessage:{},allCost:0,cost:{fwf:"",shebao:"",gjj:"",dfxz:"",sx:""},InvApplyItemType:[],InvApplyItemTypeArr:[],ComProductLine:{},redetail:{month:"",invtype:""},moment:l.a,ComProductLineSmall:{},smallShow:!1}},watch:{show:function(e,t){var a=this;a.visible=e,e.show&&(a.init(),a.redetail.month=new Date)}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields(),this.options=[],this.allCost=0,this.cost={fwf:"",shebao:"",gjj:"",dfxz:"",sx:""},this.ApplyShares=[],this.smallShow=!1,this.uploadArry=[]},init:function(){var e=this,t=0;r["a"].post("/api/Dim/Enum/GetEnum",{Names:["ComProductLine","InvApplyItemType","ComProductLineSmall"]}).then(function(a){0===a.code&&(e.InvApplyItemType=a.data.InvApplyItemType,e.ComProductLineSmall=a.data.ComProductLineSmall,a.data.ComProductLine.forEach(function(t,a){e.ComProductLine[t.key]=t.text}),a.data.ComProductLineSmall.forEach(function(a,o){a.key>=100*e.visible.assetsdetail.ProductLine&&a.key<100*(e.visible.assetsdetail.ProductLine+1)&&(t+=1)}),e.smallShow=t>0)}).catch(function(e){console.log(e)}),r["a"].post("/api/DingTalk/GetSign",{}).then(function(t){e.fescoMessage=t.data,dd.config({agentId:t.data.AgentId,corpId:t.data.corpId,timeStamp:t.data.timeStamp,nonceStr:t.data.nonceStr,signature:t.data.signature,type:0,jsApiList:["biz.cspace.saveFile","biz.util.uploadAttachment","biz.cspace.preview","biz.cspace.chooseSpaceDir"]})}).catch(function(e){console.log(e)}),r["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:"1"}).then(function(t){0===t.code&&t.data.forEach(function(t,a){var o={};o.value=t.code,o.label=t.name,o.isLeaf=!1,e.options.push(o)})}).catch(function(e){console.log(e)}),r["a"].get("/api/DingTalk/CspaceInfo").then(function(t){var a=t,o=a.data.SpaceId;0===a.code&&(e.SpaceId=o)}).catch(function(e){console.log(e)}),"notInDingTalk"==dd.env.platform&&(e.notInDingTalk=!0),"{}"!=JSON.stringify(e.visible.FormComponentValues)&&(e.redetail={month:e.visible.FormComponentValues["所属月份"],invtype:e.visible.FormComponentValues["发票种类"]},e.visible.FormComponentValues.ApplyItems.forEach(function(t,a){"服务费"==e.visible.InvApplyItemTypeArr[t.InvAIType]&&(e.cost.fwf=t["金额"]),"社保"==e.visible.InvApplyItemTypeArr[t.InvAIType]&&(e.cost.shebao=t["金额"]),"公积金"==e.visible.InvApplyItemTypeArr[t.InvAIType]&&(e.cost.gjj=t["金额"]),"代发薪资"==e.visible.InvApplyItemTypeArr[t.InvAIType]&&(e.cost.dfxz=t["金额"]),"商险"==e.visible.InvApplyItemTypeArr[t.InvAIType]&&(e.cost.sx=t["金额"])}),e.costChange(),e.visible.FormComponentValues.ApplyShares.forEach(function(t,a){e.ApplyShares.push({key:a+1,DepId:t.DepId,Userid:t.Userid,Percentage:t.Percentage})}),e.uploadArry=e.visible.FormComponentValues["附件"],console.log(e.uploadArry))},handleSubmit:function(e){var t=this,a=this,o=[],s="",n="";this.form.validateFields(function(i,l){if(!i){var c=new Date(l["所属月份"]);if(s=c.getFullYear()+""+(c.getMonth()+1>9?c.getMonth()+1:"0"+(c.getMonth()+1)),console.log(a.InvApplyItemType),a.InvApplyItemType.forEach(function(e,a){var s={};"服务费"==e.text&&t.cost.fwf&&(s.InvAIType=e.key,s["金额"]=t.cost.fwf),"社保"==e.text&&t.cost.shebao&&(s.InvAIType=e.key,s["金额"]=t.cost.shebao),"公积金"==e.text&&t.cost.gjj&&(s.InvAIType=e.key,s["金额"]=t.cost.gjj),"代发薪资"==e.text&&t.cost.dfxz&&(s.InvAIType=e.key,s["金额"]=t.cost.dfxz),"商险"==e.text&&t.cost.sx&&(s.InvAIType=e.key,s["金额"]=t.cost.sx),"{}"!=JSON.stringify(s)&&o.push(s)}),!o.length)return void t.$message.error("开票条目不能为空！");if(!a.uploadArry.length)return void t.$message.error("请上传附件！");var p={ComGuid:t.visible.assetsdetail.ComGuid,ComProductLineGuid:t.visible.assetsdetail.ComProductLineGuid,ComProductLineSmall:l.ComProductLineSmall,"所属月份":s,"发票种类":l["发票种类"],ApplyItems:o,ApplyShares:t.ApplyShares,"附件":a.uploadArry};p.IsSubmit="storage"!=e,a.$loading.open(),"modify"==a.visible.type?(n="/api/Invoice/Apply/Modify",p.InvApplyGuid=a.visible.assetsdetail.InvApplyGuid):n="/api/Invoice/Apply/Add",r["a"].post(n,p).then(function(e){a.$loading.close();var t=e;t.code>0?a.$message.error(t.msg):(a.onClose(),a.$message.success(t.msg))}).catch(function(e){a.$loading.close(),console.log(e)})}})},loadData:function(e){var t=e[e.length-1],a=this;t.loading=!0,r["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:t.value}).then(function(e){t.loading=!1,0===e.code&&(e.data.length>0?(t.children=[],e.data.forEach(function(e,a){var o={};o.value=e.code,o.label=e.name,o.isLeaf=!1,t.children.push(o)}),a.options=Object(n["a"])(a.options)):(t.isLeaf=!0,t.loading=!1))}).catch(function(e){console.log(e),t.loading=!1})},remove:function(e){console.log(e),this.ApplyShares=this.ApplyShares.filter(function(t){return t.key!=e}),console.log(this.ApplyShares)},ConfirmNumber:function(e,t,a){!t||Object(c["c"])(t)?a():a("请输入数字！")},uploadFile:function(){var e=this;dd.ready(function(){dd.biz.util.uploadAttachment({image:{multiple:!0,compress:!1,max:9,spaceId:e.SpaceId.toString()},space:{corpId:e.fescoMessage.corpId,spaceId:e.SpaceId.toString(),max:9},file:{spaceId:e.SpaceId.toString(),max:9},types:["photo","file","space"],onSuccess:function(t){e.uploadArry=e.uploadArry.concat(t.data)},onFail:function(e){}})})},deleteFile:function(e){var t=this;this.uploadArry.forEach(function(a,o){a.fileId===e&&t.uploadArry.splice(o,1)})},showModal:function(){this.showModalLayer=!0,console.log(this.showModalLayer)},handleCancel:function(){this.showModalLayer=!1},handleCreate:function(){var e=this,t=this.$refs.collectionForm.form,a=0,o=0;this.ApplyShares.forEach(function(e,t){a=e.key>a?e.key:a,o+=e.Percentage}),t.validateFields(function(s,n){s||(o+n.Percentage>99?e.$message.error("分摊比例总和不能超过99！"):(console.log("Received values of form: ",n),e.ApplyShares.push({key:a+1,DepId:n.DepId[n.DepId.length-1],Userid:n.Userid,Percentage:n.Percentage}),console.log(e.ApplyShares),t.resetFields(),e.showModalLayer=!1))})},costChange:function(){this.allCost=0,this.cost.fwf&&(this.allCost=Number(this.cost.fwf)+Number(this.allCost)),this.cost.shebao&&(this.allCost=Number(this.cost.shebao)+Number(this.allCost)),this.cost.gjj&&(this.allCost=Number(this.cost.gjj)+Number(this.allCost)),this.cost.sx&&(this.allCost=Number(this.cost.sx)+Number(this.allCost)),this.cost.dfxz&&(this.allCost=Number(this.cost.dfxz)+Number(this.allCost)),isNaN(parseFloat(this.allCost))||(this.allCost=this.allCost.toFixed(2))}}},u=d,m=a("2877"),f=Object(m["a"])(u,o,s,!1,null,null,null);t["default"]=f.exports},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);