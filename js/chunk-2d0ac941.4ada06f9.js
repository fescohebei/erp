(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac941"],{"19ad":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-drawer",{attrs:{message:"",visible:this.visible.show,width:500,destroyOnClose:!0,closable:!1},on:{close:e.onClose}},[i("template",{slot:"title"},[e._v("\n    详情\n  ")]),i("a-table",{attrs:{columns:e.columns,dataSource:e.peopleList,pagination:!1,rowKey:"ComGuid"},scopedSlots:e._u([{key:"Userid",fn:function(t,n){return i("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.UserArray[n.Userid])+"\n        ")])}},{key:"ProductLine",fn:function(t,n){return i("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.visible.ProductLine[n.ProductLine])+"\n        ")])}}])},[i("template",{slot:"footer"},[i("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2)],2)},o=[],a=i("b775"),r=(i("c32d"),[{title:"公司名称",dataIndex:"ComName",width:150}]),s={components:{},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},assetsdetail:{},ProductLine:{}},columns:r,formSearch:{pageSize:10,current:1,total:0,Userid:"",Begin:"",End:""},form:this.$form.createForm(this),drawer:{},modal:{},peopleList:[]}},created:function(){var e=this;this.$watch("show",function(t,i){e.visible=t,console.log(e.visible),e.visible.show&&e.init()})},methods:{init:function(){var e=this;e.pagechange(1)},pagechange:function(e){var t=this,i=t.formSearch;t.formSearch.current=e,t.formSearch.Userid=t.visible.assetsdetail.Userid,t.formSearch.Begin=t.visible.Begin,t.formSearch.End=t.visible.End,a["a"].post("/api/Crm/Data/ContactRecordsComDetailByUser",i).then(function(e){0===e.code&&(t.peopleList=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){console.log(e)})},onClose:function(){this.visible.show=!1,this.refresh&&this.refresh()}}},c=s,l=i("2877"),h=Object(l["a"])(c,n,o,!1,null,null,null);t["default"]=h.exports}}]);