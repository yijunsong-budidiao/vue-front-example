import{$ as e,a1 as a,_ as t,d as n,o as l,e as o,P as s,Q as r,g as d,m as u,n as i,b as c,D as m,F as p,t as f,w as _,f as v,H as h,I as y,ah as g,a3 as b,a4 as w,U as k,q as A,r as J,h as x,R as C,W as I,l as T,ai as L,aj as M,ak as $,T as V,al as S,G as z,a as D,u as H,S as j,ad as B,E as R,am as q,C as F,an as P,ao as U,ap as E}from"./index-14747de6.js";import{_ as W,g as G,u as O,S as Q,a as K}from"./index-e28054c1.js";import{h as N,g as X}from"./util-5930ea7e.js";import{T as Y}from"./tabs-d779d007.js";import"./index-84fdfe61.js";const Z=e({id:"MenuState",state:()=>({isCollapse:!1,menuList:[]}),getters:{},actions:{async setCollapse(){this.isCollapse=!this.isCollapse},async setMenuList(e){this.menuList=e}},persist:a("MenuState")});const ee={class:"logo flx-center"},ae=(e=>(u("data-v-a443eee0"),e=e(),i(),e))((()=>d("img",{src:W,alt:"logo"},null,-1)));var te=t(n({__name:"Logo",props:{isCollapse:{type:Boolean,required:!0}},setup:e=>(a,t)=>(l(),o("div",ee,[ae,s(d("span",null,"Joy Admin",512),[[r,!e.isCollapse]])]))}),[["__scopeId","data-v-a443eee0"],["__file","/home/runner/work/Joy-Admin/Joy-Admin/src/layout/Menu/components/Logo.vue"]]);var ne=t(n({__name:"SubItem",props:{menuList:{type:Array,required:!0}},setup:e=>(a,t)=>{const n=c("el-icon"),s=c("SubItem",!0),r=c("el-sub-menu"),u=c("el-menu-item");return l(!0),o(p,null,m(e.menuList,(e=>(l(),o(p,{key:e.path},[e.children&&e.children.length>0?(l(),f(r,{key:0,index:e.path},{title:_((()=>[v(n,null,{default:_((()=>[(l(),f(h(e.icon)))])),_:2},1024),d("span",null,y(e.title),1)])),default:_((()=>[v(s,{menuList:e.children},null,8,["menuList"])])),_:2},1032,["index"])):(l(),f(u,{key:1,index:e.path},g({default:_((()=>[v(n,null,{default:_((()=>[(l(),f(h(e.icon)))])),_:2},1024)])),_:2},[e.isLink?{name:"title",fn:_((()=>[d("a",{class:"href",href:e.isLink,target:"_blank"},y(e.title),9,["href"])]))}:{name:"title",fn:_((()=>[d("span",null,y(e.title),1)]))}]),1032,["index"]))],64)))),128)}}),[["__scopeId","data-v-1431fcc4"],["__file","/home/runner/work/Joy-Admin/Joy-Admin/src/layout/Menu/components/SubItem.vue"]]);var le=t(n({__name:"index",setup(e){const a=b(),t=Z(),n=w();k((async()=>{const e=await G();if(!e.data)return;const a=N(e.data);n.setAuthRouter(a),t.setMenuList(e.data)}));const s=A((()=>a.path)),r=A((()=>t.isCollapse)),d=A((()=>t.menuList)),u=J(0),i=J(0);return window.onresize=()=>(u.value=document.body.clientWidth,i.value=document.body.clientHeight,!1===r.value&&u.value<1200&&t.setCollapse(),void(!0===r.value&&u.value>1200&&t.setCollapse())),(e,a)=>{const t=c("el-menu"),n=c("el-scrollbar");return l(),o("div",{class:"menu",style:C({width:x(r)?"65px":"220px"})},[v(te,{isCollapse:x(r)},null,8,["isCollapse"]),v(n,null,{default:_((()=>[v(t,{"default-active":x(s),router:!0,collapse:x(r),"collapse-transition":!1,"unique-opened":!0,"background-color":"#191a20","text-color":"#bdbdc0","active-text-color":"#fff"},{default:_((()=>[v(ne,{menuList:x(d)},null,8,["menuList"])])),_:1},8,["default-active","collapse"])])),_:1})],4)}}}),[["__scopeId","data-v-7662de3e"],["__file","/home/runner/work/Joy-Admin/Joy-Admin/src/layout/Menu/index.vue"]]);var oe=t(n({__name:"CollapseIcon",setup(e){const a=Z(),t=A((()=>a.isCollapse));return(e,n)=>{const o=c("el-icon");return l(),f(o,{class:"collapse-icon",onClick:n[0]||(n[0]=e=>x(a).setCollapse())},{default:_((()=>[(l(),f(h(x(t)?"expand":"fold")))])),_:1})}}}),[["__scopeId","data-v-46da6159"],["__file","/home/runner/work/Joy-Admin/Joy-Admin/src/layout/Header/components/CollapseIcon.vue"]]);const se=T("首页");var re=t(n({__name:"Breadcrumb",setup(e){const a=b(),t=A((()=>a.matched.filter((e=>e.meta&&e.meta.title&&"首页"!==e.meta.title))));return(e,a)=>{const n=c("el-breadcrumb-item"),s=c("el-breadcrumb");return l(),f(s,{"separator-icon":x(M)},{default:_((()=>[v(L,{name:"breadcrumb",mode:"out-in"},{default:_((()=>[v(n,{to:{path:x(I)},key:"/home"},{default:_((()=>[se])),_:1},8,["to"]),(l(!0),o(p,null,m(x(t),(e=>(l(),f(n,{key:e.path,to:{path:e.path}},{default:_((()=>[T(y(e.meta.title),1)])),_:2},1032,["to"])))),128))])),_:1})])),_:1},8,["separator-icon"])}}}),[["__file","/home/runner/work/Joy-Admin/Joy-Admin/src/layout/Header/components/Breadcrumb.vue"]]);var de=t(n({__name:"Fullscreen",setup(e){const{toggle:a,isFullscreen:t}=$();return(e,n)=>{const o=c("el-tooltip");return l(),f(o,{effect:"dark",content:x(t)?e.$t("header.exitFullScreen"):e.$t("header.fullScreen"),placement:"bottom"},{default:_((()=>[d("i",{class:V([["iconfont",x(t)?"icon-quxiaoquanping":"icon-quanping"],"icon-style"]),onClick:n[0]||(n[0]=(...e)=>x(a)&&x(a)(...e))},null,2)])),_:1},8,["content"])}}}),[["__scopeId","data-v-d71b30e4"],["__file","/home/runner/work/Joy-Admin/Joy-Admin/src/layout/Header/components/Fullscreen.vue"]]);const ue={class:"el-dropdown-link"},ie=T("简体中文"),ce=T("English");var me=t(n({__name:"Language",setup(e){const a=S(),t=z(),n=A((()=>t.language)),o=e=>{a.locale.value=e,t.updateLanguage(e)};return k((()=>{o(n.value||X())})),(e,a)=>{const t=c("el-tooltip"),s=c("el-dropdown-item"),r=c("el-dropdown-menu"),u=c("el-dropdown");return l(),f(u,{trigger:"click",onCommand:o},{dropdown:_((()=>[v(r,null,{default:_((()=>[v(s,{disabled:x(n)&&"zh"===x(n),command:"zh"},{default:_((()=>[ie])),_:1},8,["disabled"]),v(s,{disabled:"en"===x(n),command:"en"},{default:_((()=>[ce])),_:1},8,["disabled"])])),_:1})])),default:_((()=>[d("span",ue,[v(t,{effect:"dark",content:e.$t("header.language"),placement:"bottom"},{default:_((()=>[d("i",{class:V(["zh"===x(n)?"iconfont icon-zhongwen":"iconfont icon-yingwen","icon-style"])},null,2)])),_:1},8,["content"])])])),_:1})}}}),[["__scopeId","data-v-4d9e492a"],["__file","/home/runner/work/Joy-Admin/Joy-Admin/src/layout/Header/components/Language.vue"]]);const pe={class:"el-dropdown-link"};var fe=t(n({__name:"AssemblySize",setup(e){const a=z(),t=A((()=>a.assemblySize)),n=D({default:"默认",large:"大型",small:"小型"}),s=D(["default","large","small"]),r=e=>{t.value!==e&&a.setAssemblySizeSize(e)};return(e,a)=>{const u=c("el-tooltip"),i=c("el-dropdown-item"),h=c("el-dropdown-menu"),g=c("el-dropdown");return l(),f(g,{trigger:"click",onCommand:r},{dropdown:_((()=>[v(h,null,{default:_((()=>[(l(!0),o(p,null,m(s,(e=>(l(),f(i,{key:e,disabled:x(t)===e,command:e},{default:_((()=>[T(y(n[e]),1)])),_:2},1032,["disabled","command"])))),128))])),_:1})])),default:_((()=>[d("span",pe,[v(u,{effect:"dark",content:e.$t("header.componentSize"),placement:"bottom"},{default:_((()=>[d("i",{class:V(["iconfont icon-thlarge","icon-style"])})])),_:1},8,["content"])])])),_:1})}}}),[["__scopeId","data-v-103fd21a"],["__file","/home/runner/work/Joy-Admin/Joy-Admin/src/layout/Header/components/AssemblySize.vue"]]);const _e={class:"theme-item"};var ve=t(n({__name:"Theme",setup(e){O();const a=J(!1),t=()=>{a.value=!0};return(e,n)=>{const s=c("el-tooltip"),r=c("el-divider"),u=c("el-drawer");return l(),o("div",null,[v(s,{effect:"dark",content:e.$t("header.theme"),placement:"bottom"},{default:_((()=>[d("i",{class:V(["iconfont icon-pifu1","icon-style"]),onClick:t})])),_:1},8,["content"]),v(u,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),title:e.$t("header.themeSetting"),size:"300px"},{default:_((()=>[v(r,{"content-position":"center"},{default:_((()=>[T(y(e.$t("header.theme")),1)])),_:1}),d("div",_e,[d("span",null,y(e.$t("header.darkMode")),1),v(Q)])])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-3fcc0446"],["__file","/home/runner/work/Joy-Admin/Joy-Admin/src/layout/Header/components/Theme.vue"]]);const he=d("span",null,"This is userInfo",-1);var ye=t(n({__name:"InfoDialog",setup(e,{expose:a}){const t=J(!1);return a({openDialog:()=>{t.value=!0}}),(e,a)=>{const n=c("el-dialog");return l(),f(n,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),title:e.$t("header.personalData"),width:"500px",draggable:""},{default:_((()=>[he])),_:1},8,["modelValue","title"])}}}),[["__file","/home/runner/work/Joy-Admin/Joy-Admin/src/layout/Header/components/InfoDialog.vue"]]);const ge=d("span",null,"This is Password",-1),be={class:"dialog-footer"},we=T("取消"),ke=T("确认");var Ae=t(n({__name:"PasswordDialog",setup(e,{expose:a}){const t=J(!1);return a({openDialog:()=>{t.value=!0}}),(e,a)=>{const n=c("el-button"),o=c("el-dialog");return l(),f(o,{modelValue:t.value,"onUpdate:modelValue":a[2]||(a[2]=e=>t.value=e),title:e.$t("header.changePassword"),width:"500px",draggable:""},{footer:_((()=>[d("span",be,[v(n,{onClick:a[0]||(a[0]=e=>t.value=!1)},{default:_((()=>[we])),_:1}),v(n,{type:"primary",onClick:a[1]||(a[1]=e=>t.value=!1)},{default:_((()=>[ke])),_:1})])])),default:_((()=>[ge])),_:1},8,["modelValue","title"])}}}),[["__file","/home/runner/work/Joy-Admin/Joy-Admin/src/layout/Header/components/PasswordDialog.vue"]]);const Je=(e=>(u("data-v-f8df78a8"),e=e(),i(),e))((()=>d("div",{class:"avatar"},[d("img",{src:"/Joy-Admin/assets/jpg/avatar-afadcf92.jpg",alt:"avatar"})],-1)));var xe=t(n({__name:"Avatar",setup(e){const a=H(),t=z(),n=()=>{B.confirm("您是否确认退出登录?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{a.push({name:"login"}),t.setToken(""),R({type:"success",message:"退出登录成功！"})}))},s=J(null),r=J(null),d=e=>{var a,t;if("infoRef"==e)return null==(a=s.value)?void 0:a.openDialog();null==(t=r.value)||t.openDialog()};return(e,a)=>{const t=c("el-dropdown-item"),u=c("el-dropdown-menu"),i=c("el-dropdown");return l(),o(p,null,[v(i,{trigger:"click"},{dropdown:_((()=>[v(u,null,{default:_((()=>[v(t,{onClick:a[0]||(a[0]=e=>d("infoRef"))},{default:_((()=>[T(y(e.$t("header.personalData")),1)])),_:1}),v(t,{onClick:a[1]||(a[1]=e=>d("passwordRef"))},{default:_((()=>[T(y(e.$t("header.changePassword")),1)])),_:1}),v(t,{onClick:n,divided:""},{default:_((()=>[T(y(e.$t("header.logout")),1)])),_:1})])),_:1})])),default:_((()=>[Je])),_:1}),j(" infoDialog "),v(ye,{ref_key:"infoRef",ref:s},null,512),j(" passwordDialog "),v(Ae,{ref_key:"passwordRef",ref:r},null,512)],64)}}}),[["__scopeId","data-v-f8df78a8"],["__file","/home/runner/work/Joy-Admin/Joy-Admin/src/layout/Header/components/Avatar.vue"]]);const Ce={class:"header"},Ie={class:"header-lf flx-center"},Te={class:"header-ri flx-center"},Le=(e=>(u("data-v-37df78ec"),e=e(),i(),e))((()=>d("span",{class:"username"},"Joy",-1)));var Me=t(n({__name:"index",setup:e=>(e,a)=>(l(),o("div",Ce,[d("div",Ie,[v(oe),v(re)]),d("div",Te,[j(" Component size "),v(fe),j(" Language "),v(me),j(" Theme "),v(ve),j(" Full screen "),v(de),j(" User name "),Le,j(" Avatar "),v(xe)])]))}),[["__scopeId","data-v-37df78ec"],["__file","/home/runner/work/Joy-Admin/Joy-Admin/src/layout/Header/index.vue"]]);var $e=t(n({__name:"MoreButton",setup(e){const a=Y(),t=()=>{a.tabsMenuValue!==I&&a.removeTabs(a.tabsMenuValue)},n=()=>{a.closeMultipleTab(a.tabsMenuValue)},o=()=>{a.closeMultipleTab(),a.goHome()};return(e,a)=>{const s=c("arrow-down"),r=c("el-icon"),u=c("el-button"),i=c("el-dropdown-item"),m=c("el-dropdown-menu"),p=c("el-dropdown");return l(),f(p,{trigger:"click"},{dropdown:_((()=>[v(m,null,{default:_((()=>[v(i,{onClick:t},{default:_((()=>[T(y(e.$t("tabs.closeCurrent")),1)])),_:1}),v(i,{onClick:n},{default:_((()=>[T(y(e.$t("tabs.closeOther")),1)])),_:1}),v(i,{onClick:o},{default:_((()=>[T(y(e.$t("tabs.closeAll")),1)])),_:1})])),_:1})])),default:_((()=>[v(u,{size:"small",type:"primary"},{default:_((()=>[d("span",null,y(e.$t("tabs.more")),1),v(r,{class:"el-icon--right"},{default:_((()=>[v(s)])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-41f8576b"],["__file","/home/runner/work/Joy-Admin/Joy-Admin/src/layout/Tabs/components/MoreButton.vue"]]);const Ve={class:"tabs-box"},Se={class:"tabs-menu"};var ze=t(n({__name:"index",setup(e){const a=Y(),t=A((()=>a.tabsMenuList)),n=A({get:()=>a.tabsMenuValue,set:e=>{a.setTabsMenuValue(e)}}),s=b(),r=H();q((()=>s.path),(()=>{let e={title:s.meta.title,path:s.path,close:!0};a.addTabs(e)}),{immediate:!0});const u=e=>{let a=e.props.name;r.push(a)},i=e=>{a.removeTabs(e)};return(e,a)=>{const s=c("el-icon"),r=c("el-tab-pane"),g=c("el-tabs");return l(),o("div",Ve,[d("div",Se,[v(g,{modelValue:x(n),"onUpdate:modelValue":a[0]||(a[0]=e=>F(n)?n.value=e:null),type:"card",onTabClick:u,onTabRemove:i},{default:_((()=>[(l(!0),o(p,null,m(x(t),(e=>(l(),f(r,{key:e.path,path:e.path,label:e.title,name:e.path,closable:e.close},{label:_((()=>[e.icon?(l(),f(s,{key:0,class:"tabs-icon"},{default:_((()=>[(l(),f(h(e.icon)))])),_:2},1024)):j("v-if",!0),T(" "+y(e.title),1)])),_:2},1032,["path","label","name","closable"])))),128))])),_:1},8,["modelValue"]),v($e)])])}}}),[["__scopeId","data-v-634a219d"],["__file","/home/runner/work/Joy-Admin/Joy-Admin/src/layout/Tabs/index.vue"]]);const De={},He={class:"footer flx-center"},je=[(e=>(u("data-v-399f527a"),e=e(),i(),e))((()=>d("a",{href:"https://www.cnblogs.com/yijunsong/",target:"_blank"}," 2022 © Joy-Admin By Joy Technology. ",-1)))];var Be=t(De,[["render",function(e,a){return l(),o("div",He,je)}],["__scopeId","data-v-399f527a"],["__file","/home/runner/work/Joy-Admin/Joy-Admin/src/layout/Footer/index.vue"]]);let Re=[];const qe=(e,a)=>{e.forEach((e=>{var t;(null==(t=e.meta)?void 0:t.keepAlive)&&e.name&&a.push(e.name),e.children&&0!==e.children.length&&qe(e.children,a)}))};qe(P,Re);const Fe={class:"main-box"};var Pe=t(n({__name:"index",setup(e){const a=w();return k((async()=>{const e=await K();e.data&&a.setAuthButtons(e.data)})),(e,a)=>{const t=c("el-aside"),n=c("el-header"),o=c("router-view"),s=c("el-main"),r=c("el-footer"),u=c("el-container");return l(),f(u,null,{default:_((()=>[v(t,null,{default:_((()=>[v(le)])),_:1}),v(u,null,{default:_((()=>[v(n,null,{default:_((()=>[v(Me),v(ze)])),_:1}),v(s,null,{default:_((()=>[d("section",Fe,[v(o,null,{default:_((({Component:e,route:a})=>[v(U,{appear:"",name:"fade-transform",mode:"out-in"},{default:_((()=>[(l(),f(E,{include:x(Re)},[(l(),f(h(e),{key:a.path}))],1032,["include"]))])),_:2},1024)])),_:1})])])),_:1}),v(r,null,{default:_((()=>[v(Be)])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-13877386"],["__file","/home/runner/work/Joy-Admin/Joy-Admin/src/layout/index.vue"]]);export{Pe as default};
