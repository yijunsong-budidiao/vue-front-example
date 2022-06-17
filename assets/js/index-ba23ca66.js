var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(a,l,r)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[l]=r,n=(e,a)=>{for(var l in a||(a={}))t.call(a,l)&&i(e,l,a[l]);if(r)for(var l of r(a))o.call(a,l)&&i(e,l,a[l]);return e},s=(e,r)=>a(e,l(r));import{_ as p,a as c,u,g as d,U as m,b as h}from"./UserDrawer-092d2b3a.js";import{g as b,I as y,d as f,r as g,c as v,u as w,e as k,B as C,a as P,b as S}from"./index-61e66a83.js";import{d as x,b as _,o as V,e as T,t as U,a2 as z,w as j,F as D,D as Y,r as H,N as O,q as R,f as $,ab as B,g as M,h as q,$ as E,a0 as A,l as I,J as L,H as N,a5 as F,a6 as K,T as J,a4 as G,ac as Q,a3 as W,ad as X,ae as Z,a as ee,E as ae,a1 as le,K as re,M as te,a7 as oe,a8 as ie}from"./index-f575ae5b.js";import{f as ne,d as se}from"./util-d8a35172.js";import"./index-8e6b5fb7.js";import"./plugin-vue_export-helper-b2bddca3.js";const pe=x({name:"searchFormItem"}),ce=x(s(n({},pe),{props:{item:null,searchParam:null},setup(e){const a=e=>null==e.initSearchParam||null==e.initSearchParam;return(l,r)=>{const t=_("el-input"),o=_("el-option"),i=_("el-select"),n=_("el-tree-select"),s=_("el-date-picker"),p=_("el-time-picker");return V(),T(D,null,[null==e.item.searchType||"text"==e.item.searchType?(V(),U(t,{key:0,modelValue:e.searchParam[e.item.prop],"onUpdate:modelValue":r[0]||(r[0]=a=>e.searchParam[e.item.prop]=a),placeholder:"请输入",clearable:a(e.item)},null,8,["modelValue","clearable"])):z("",!0),"select"==e.item.searchType||"multipleSelect"==e.item.searchType?(V(),U(i,{key:1,modelValue:e.searchParam[e.item.prop],"onUpdate:modelValue":r[1]||(r[1]=a=>e.searchParam[e.item.prop]=a),multiple:"multipleSelect"==e.item.searchType,placeholder:"请选择",clearable:a(e.item)},{default:j((()=>[(V(!0),T(D,null,Y(e.item.enum,(e=>(V(),U(o,{key:e.value,label:e.label,value:e.value,disabled:e.disabled},null,8,["label","value","disabled"])))),128))])),_:1},8,["modelValue","multiple","clearable"])):z("",!0),"treeSelect"==e.item.searchType||"multipleTreeSelect"==e.item.searchType?(V(),U(n,{key:2,modelValue:e.searchParam[e.item.prop],"onUpdate:modelValue":r[2]||(r[2]=a=>e.searchParam[e.item.prop]=a),multiple:"multipleTreeSelect"==e.item.searchType,data:e.item.enum},null,8,["modelValue","multiple","data"])):z("",!0),"date"==e.item.searchType?(V(),U(s,{key:3,modelValue:e.searchParam[e.item.prop],"onUpdate:modelValue":r[3]||(r[3]=a=>e.searchParam[e.item.prop]=a),"value-format":"YYYY-MM-DD",type:"date",placeholder:"请选择日期",clearable:a(e.item)},null,8,["modelValue","clearable"])):z("",!0),"timerange"==e.item.searchType?(V(),U(p,{key:4,modelValue:e.searchParam[e.item.prop],"onUpdate:modelValue":r[4]||(r[4]=a=>e.searchParam[e.item.prop]=a),"is-range":"","value-format":"HH:mm:ss","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",clearable:a(e.item)},null,8,["modelValue","clearable"])):z("",!0),"daterange"==e.item.searchType?(V(),U(s,{key:5,modelValue:e.searchParam[e.item.prop],"onUpdate:modelValue":r[5]||(r[5]=a=>e.searchParam[e.item.prop]=a),type:"daterange","value-format":"YYYY-MM-DD","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",clearable:a(e.item)},null,8,["modelValue","clearable"])):z("",!0),"datetimerange"==e.item.searchType?(V(),U(s,{key:6,modelValue:e.searchParam[e.item.prop],"onUpdate:modelValue":r[6]||(r[6]=a=>e.searchParam[e.item.prop]=a),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",clearable:a(e.item)},null,8,["modelValue","clearable"])):z("",!0)],64)}}})),ue={key:0,class:"table-search"},de={class:"search-operation"},me=I("搜索"),he=I("重置"),be=x({name:"searchForm"}),ye=x(s(n({},be),{props:{columns:{default:()=>[]},searchParam:{default:{}},search:null,reset:null},setup(e){const a=e,l=H(4),r=H(1260);O((()=>{a.columns.length>=4&&(("datetimerange"===a.columns[3].searchType||"daterange"===a.columns[3].searchType)&&(r.value=945,l.value=3),a.columns.slice(0,3).forEach((e=>{("datetimerange"===e.searchType||"daterange"===e.searchType)&&(r.value=1135,l.value=3)})))}));const t=H(!1),o=R((()=>t.value?a.columns:a.columns.slice(0,l.value)));return(a,i)=>{const n=_("el-form-item"),s=_("el-form"),p=_("el-button"),c=_("el-icon");return e.columns.length?(V(),T("div",ue,[$(s,{ref:"formRef",model:e.searchParam,inline:!0,"label-width":"100px",style:B(`max-width: ${r.value}px`)},{default:j((()=>[(V(!0),T(D,null,Y(q(o),(a=>(V(),U(n,{key:a.prop,label:`${a.label} :`},{default:j((()=>[$(ce,{item:a,searchParam:e.searchParam},null,8,["item","searchParam"])])),_:2},1032,["label"])))),128))])),_:1},8,["model","style"]),M("div",de,[$(p,{type:"primary",icon:q(E),onClick:e.search},{default:j((()=>[me])),_:1},8,["icon","onClick"]),$(p,{icon:q(A),onClick:e.reset},{default:j((()=>[he])),_:1},8,["icon","onClick"]),e.columns.length>l.value?(V(),U(p,{key:0,type:"primary",link:"",class:"search-isOpen",onClick:i[0]||(i[0]=e=>t.value=!t.value)},{default:j((()=>[I(L(t.value?"合并":"展开")+" ",1),$(c,{class:"el-icon--right"},{default:j((()=>[(V(),U(N(t.value?q(F):q(K))))])),_:1})])),_:1})):z("",!0)])])):z("",!0)}}})),fe=x({name:"pagination"}),ge=x(s(n({},fe),{props:{pageable:null,handleSizeChange:null,handleCurrentChange:null},setup:e=>(a,l)=>{const r=_("el-pagination");return V(),U(r,{currentPage:e.pageable.pageNum,"page-size":e.pageable.pageSize,"page-sizes":[10,25,50,100],background:!0,layout:"total, sizes, prev, pager, next, jumper",total:e.pageable.total,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["currentPage","page-size","total","onSizeChange","onCurrentChange"])}})),ve={class:"table-box"},we=M("div",{class:"table-empty"},[M("img",{src:p,alt:"notData"}),M("div",null,"暂无数据")],-1),ke=x({name:"colSetting"}),Ce=x(s(n({},ke),{props:{colSetting:null,tableRef:null},setup(e,{expose:a}){const l=H(!1);return a({openColSetting:()=>{l.value=!0}}),(a,r)=>{const t=_("el-table-column"),o=_("el-switch"),i=_("el-table"),n=_("el-drawer");return V(),U(n,{title:"列设置",modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=e=>l.value=e),size:"400px"},{default:j((()=>[M("div",ve,[$(i,{height:"575",data:e.colSetting,border:!0},{empty:j((()=>[we])),default:j((()=>[$(t,{prop:"label",label:"列名"}),$(t,{prop:"name",label:"显示"},{default:j((e=>[$(o,{modelValue:e.row.isShow,"onUpdate:modelValue":a=>e.row.isShow=a},null,8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"])])])),_:1},8,["modelValue"])}}})),Pe={class:"table-box"},Se={class:"table-header"},xe={class:"header-button-lf"},_e={key:0,class:"header-button-ri"},Ve={key:2},Te=M("div",{class:"table-empty"},[M("img",{src:p,alt:"notData"}),M("div",null,"暂无数据")],-1),Ue=x({name:"proTable"});var ze=x(s(n({},Ue),{props:{columns:{default:()=>[]},requestApi:null,pagination:{type:Boolean,default:!0},initParam:{default:{}},border:{type:Boolean,default:!0},stripe:{type:Boolean,default:!1},toolButton:{type:Boolean,default:!0},childrenName:{default:"children"}},setup(e,{expose:a}){const l=e,r=H(),t=H(!0),{selectionChange:o,getRowKeys:i,selectedListIds:p,isSelected:d}=c(),{tableData:m,pageable:h,searchParam:b,initSearchParam:y,getTableList:f,search:g,reset:v,handleSizeChange:w,handleCurrentChange:k}=u(l.requestApi,l.initParam,l.pagination),C=H();C.value=l.columns.map((e=>s(n({},e),{isShow:!0})));const P=l.columns.filter((e=>e.search));P.forEach((e=>{void 0!==e.initSearchParam&&null!==e.initSearchParam&&(y.value[e.prop]=e.initSearchParam,b.value[e.prop]=e.initSearchParam)}));const S=H(),x=C.value.filter((e=>"selection"!==e.type&&"index"!==e.type&&"expand"!==e.type&&"operation"!==e.prop)),R=()=>{S.value.openColSetting()};return O((()=>{f()})),a({searchParam:b,refresh:f}),(a,l)=>{const n=_("el-button"),s=_("el-table-column"),c=_("el-image"),u=_("el-tag"),y=_("el-table");return V(),T("div",Pe,[J($(ye,{search:q(g),reset:q(v),searchParam:q(b),columns:q(P)},null,8,["search","reset","searchParam","columns"]),[[G,t.value]]),M("div",Se,[M("div",xe,[Q(a.$slots,"tableHeader",{ids:q(p),isSelected:q(d)})]),e.toolButton?(V(),T("div",_e,[$(n,{icon:q(W),circle:"",onClick:q(f)},null,8,["icon","onClick"]),$(n,{icon:q(X),circle:"",onClick:R},null,8,["icon"]),q(P).length?(V(),U(n,{key:0,icon:q(E),circle:"",onClick:l[0]||(l[0]=e=>t.value=!t.value)},null,8,["icon"])):z("",!0)])):z("",!0)]),$(y,{height:"575",ref_key:"tableRef",ref:r,data:q(m),border:e.border,onSelectionChange:q(o),"row-key":q(i),stripe:e.stripe,"tree-props":{children:e.childrenName}},{empty:j((()=>[Te])),default:j((()=>[(V(!0),T(D,null,Y(C.value,(e=>(V(),T(D,{key:e},["selection"==e.type||"index"==e.type?(V(),U(s,{key:0,type:e.type,"reserve-selection":"selection"==e.type,label:e.label,width:e.width,fixed:e.fixed},null,8,["type","reserve-selection","label","width","fixed"])):z("",!0),"expand"==e.type?(V(),U(s,{key:1,type:e.type,label:e.label,width:e.width,fixed:e.fixed},{default:j((l=>[Q(a.$slots,e.type,{row:l.row})])),_:2},1032,["type","label","width","fixed"])):z("",!0),!e.type&&e.prop&&e.isShow?(V(),U(s,{key:2,prop:e.prop,label:e.label,width:e.width,sortable:e.sortable,"show-overflow-tooltip":"operation"!==e.prop,resizable:!0,fixed:e.fixed},Z({default:j((l=>[Q(a.$slots,e.prop,{row:l.row},(()=>{var a;return[e.image?(V(),U(c,{key:0,src:l.row[e.prop],"preview-src-list":[l.row[e.prop]],fit:"cover",class:"table-image","preview-teleported":""},null,8,["src","preview-src-list"])):e.tag?(V(),U(u,{key:1,type:q(ne)(l.row[e.prop],e.enum,"tag")},{default:j((()=>{var a;return[I(L((null==(a=e.enum)?void 0:a.length)?q(ne)(l.row[e.prop],e.enum):q(se)(0,0,l.row[e.prop])),1)]})),_:2},1032,["type"])):(V(),T("span",Ve,L((null==(a=e.enum)?void 0:a.length)?q(ne)(l.row[e.prop],e.enum):q(se)(0,0,l.row[e.prop])),1))]}))])),_:2},[e.renderHeader?{name:"header",fn:j((()=>[(V(),U(N(e.renderHeader),{row:e},null,8,["row"]))]))}:void 0]),1032,["prop","label","width","sortable","show-overflow-tooltip","fixed"])):z("",!0)],64)))),128))])),_:3},8,["data","border","onSelectionChange","row-key","stripe","tree-props"]),e.pagination?(V(),U(ge,{key:0,pageable:q(h),handleSizeChange:q(w),handleCurrentChange:q(k)},null,8,["pageable","handleSizeChange","handleCurrentChange"])):z("",!0),e.toolButton?(V(),U(Ce,{key:1,ref_key:"colRef",ref:S,tableRef:r.value,colSetting:q(x)},null,8,["tableRef","colSetting"])):z("",!0)])}}}));const je={class:"table-box"},De=I("新增用户"),Ye=I("批量添加用户"),He=I("导出用户数据"),Oe=I(" 批量删除用户 "),Re=["onClick"],$e=I("查看"),Be=I("编辑"),Me=I("重置密码"),qe=I("删除"),Ee=x({name:"useComponent"});var Ae=x(s(n({},Ee),{setup(e){const a=H(),l=ee({type:1}),r=e=>$(_("el-button"),{type:"primary",onClick:()=>{ae.success("我是自定义表头")}},{default:()=>[e.row.label]}),t=[{type:"selection",width:80,fixed:"left"},{type:"index",label:"#",width:80},{type:"expand",label:"Expand",width:100},{prop:"username",label:"用户姓名",search:!0,width:135,renderHeader:r},{prop:"gender",label:"性别",width:"140",enum:d,search:!0,sortable:!0,searchType:"select"},{prop:"idCard",label:"身份证号",search:!0},{prop:"email",label:"邮箱",search:!0},{prop:"address",label:"居住地址",search:!0},{prop:"createTime",label:"创建时间",width:200,sortable:!0,search:!0,searchType:"datetimerange",initSearchParam:["2022-04-05 00:00:00","2022-05-10 23:59:59"]},{prop:"status",label:"用户状态",sortable:!0,width:160},{prop:"avatar",label:"头像",width:120,image:!0,renderHeader:r},{prop:"operation",label:"操作",width:320,fixed:"right"}],o=async()=>{w(k,"用户列表",a.value.searchParam)},i=H(),s=()=>{let e={title:"用户",tempUrl:k,importUrl:C,getTableList:a.value.refresh};i.value.acceptParams(e)},p=H(),c=(e,l={})=>{let r={title:e,rowData:n({},l),isView:"查看"===e,apiUrl:"新增"===e?P:"编辑"===e?S:"",getTableList:a.value.refresh};p.value.acceptParams(r)};return(e,r)=>{const n=_("el-button"),u=_("el-switch");return V(),T("div",je,[$(ze,{ref_key:"proTable",ref:a,requestApi:q(b),initParam:l,columns:t},{tableHeader:j((e=>[$(n,{type:"primary",icon:q(le),onClick:r[0]||(r[0]=e=>c("新增"))},{default:j((()=>[De])),_:1},8,["icon"]),$(n,{type:"primary",icon:q(re),plain:"",onClick:s},{default:j((()=>[Ye])),_:1},8,["icon"]),$(n,{type:"primary",icon:q(te),plain:"",onClick:o},{default:j((()=>[He])),_:1},8,["icon"]),$(n,{type:"danger",icon:q(A),plain:"",disabled:!e.isSelected,onClick:l=>(async e=>{await h(f,{id:e},"删除所选用户信息"),a.value.refresh()})(e.ids)},{default:j((()=>[Oe])),_:2},1032,["icon","disabled","onClick"])])),expand:j((e=>[I(L(e.row),1)])),status:j((e=>[M("div",{onClick:l=>(async e=>{await h(v,{id:e.id,status:1==e.status?0:1},`切换【${e.username}】用户状态`),a.value.refresh()})(e.row)},[$(u,{value:e.row.status,"active-text":1===e.row.status?"启用":"禁用","active-value":1,"inactive-value":0},null,8,["value","active-text"])],8,Re)])),operation:j((e=>[$(n,{type:"primary",link:"",icon:q(oe),onClick:a=>c("查看",e.row)},{default:j((()=>[$e])),_:2},1032,["icon","onClick"]),$(n,{type:"primary",link:"",icon:q(ie),onClick:a=>c("编辑",e.row)},{default:j((()=>[Be])),_:2},1032,["icon","onClick"]),$(n,{type:"primary",link:"",icon:q(W),onClick:l=>(async e=>{await h(g,{id:e.id},`重置【${e.username}】用户密码`),a.value.refresh()})(e.row)},{default:j((()=>[Me])),_:2},1032,["icon","onClick"]),$(n,{type:"primary",link:"",icon:q(A),onClick:l=>(async e=>{await h(f,{id:[e.id]},`删除【${e.username}】用户`),a.value.refresh()})(e.row)},{default:j((()=>[qe])),_:2},1032,["icon","onClick"])])),_:1},8,["requestApi","initParam"]),$(m,{ref_key:"drawerRef",ref:p},null,512),$(y,{ref_key:"dialogRef",ref:i},null,512)])}}}));export{Ae as default};
