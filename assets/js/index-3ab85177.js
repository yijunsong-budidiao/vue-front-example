var e=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,p=(a,o,n)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[o]=n;import{c as r,_ as s,d as l,r as c,N as d,o as u,e as f,O as A}from"./index-87208653.js";var v={exports:{}},M=v.exports=function(){function e(e){var n=[];return e.AMapUI&&n.push(a(e.AMapUI)),e.Loca&&n.push(o(e.Loca)),Promise.all(n)}function a(e){return new Promise((function(a,o){var i=[];if(e.plugins)for(var s=0;s<e.plugins.length;s+=1)-1==t.AMapUI.plugins.indexOf(e.plugins[s])&&i.push(e.plugins[s]);if(p.AMapUI===n.failed)o("前次请求 AMapUI 失败");else if(p.AMapUI===n.notload){p.AMapUI=n.loading,t.AMapUI.version=e.version||t.AMapUI.version,s=t.AMapUI.version;var l=document.body||document.head,c=document.createElement("script");c.type="text/javascript",c.src="https://webapi.amap.com/ui/"+s+"/main.js",c.onerror=function(e){p.AMapUI=n.failed,o("请求 AMapUI 失败")},c.onload=function(){if(p.AMapUI=n.loaded,i.length)window.AMapUI.loadUI(i,(function(){for(var e=0,o=i.length;e<o;e++){var n=i[e].split("/").slice(-1)[0];window.AMapUI[n]=arguments[e]}for(a();r.AMapUI.length;)r.AMapUI.splice(0,1)[0]()}));else for(a();r.AMapUI.length;)r.AMapUI.splice(0,1)[0]()},l.appendChild(c)}else p.AMapUI===n.loaded?e.version&&e.version!==t.AMapUI.version?o("不允许多个版本 AMapUI 混用"):i.length?window.AMapUI.loadUI(i,(function(){for(var e=0,o=i.length;e<o;e++){var n=i[e].split("/").slice(-1)[0];window.AMapUI[n]=arguments[e]}a()})):a():e.version&&e.version!==t.AMapUI.version?o("不允许多个版本 AMapUI 混用"):r.AMapUI.push((function(e){e?o(e):i.length?window.AMapUI.loadUI(i,(function(){for(var e=0,o=i.length;e<o;e++){var n=i[e].split("/").slice(-1)[0];window.AMapUI[n]=arguments[e]}a()})):a()}))}))}function o(e){return new Promise((function(a,o){if(p.Loca===n.failed)o("前次请求 Loca 失败");else if(p.Loca===n.notload){p.Loca=n.loading,t.Loca.version=e.version||t.Loca.version;var i=t.Loca.version,s=t.AMap.version.startsWith("2"),l=i.startsWith("2");if(s&&!l||!s&&l)o("JSAPI 与 Loca 版本不对应！！");else{s=t.key,l=document.body||document.head;var c=document.createElement("script");c.type="text/javascript",c.src="https://webapi.amap.com/loca?v="+i+"&key="+s,c.onerror=function(e){p.Loca=n.failed,o("请求 AMapUI 失败")},c.onload=function(){for(p.Loca=n.loaded,a();r.Loca.length;)r.Loca.splice(0,1)[0]()},l.appendChild(c)}}else p.Loca===n.loaded?e.version&&e.version!==t.Loca.version?o("不允许多个版本 Loca 混用"):a():e.version&&e.version!==t.Loca.version?o("不允许多个版本 Loca 混用"):r.Loca.push((function(e){e?o(e):o()}))}))}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var n,i;(i=n||(n={})).notload="notload",i.loading="loading",i.loaded="loaded",i.failed="failed";var t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},p={AMap:n.notload,AMapUI:n.notload,Loca:n.notload},r={AMap:[],AMapUI:[],Loca:[]},s=[],l=function(e){"function"==typeof e&&(p.AMap===n.loaded?e(window.AMap):s.push(e))};return{load:function(a){return new Promise((function(o,i){if(p.AMap==n.failed)i("");else if(p.AMap==n.notload){var r=a.key,c=a.version,d=a.plugins;r?(window.AMap&&"lbs.amap.com"!==location.host&&i("禁止多种API加载方式混用"),t.key=r,t.AMap.version=c||t.AMap.version,t.AMap.plugins=d||t.AMap.plugins,p.AMap=n.loading,c=document.body||document.head,window.___onAPILoaded=function(t){if(delete window.___onAPILoaded,t)p.AMap=n.failed,i(t);else for(p.AMap=n.loaded,e(a).then((function(){o(window.AMap)})).catch(i);s.length;)s.splice(0,1)[0]()},(d=document.createElement("script")).type="text/javascript",d.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+t.AMap.version+"&key="+r+"&plugin="+t.AMap.plugins.join(","),d.onerror=function(e){p.AMap=n.failed,i(e)},c.appendChild(d)):i("请填写key")}else if(p.AMap==n.loaded)if(a.key&&a.key!==t.key)i("多个不一致的 key");else if(a.version&&a.version!==t.AMap.version)i("不允许多个版本 JSAPI 混用");else{if(r=[],a.plugins)for(c=0;c<a.plugins.length;c+=1)-1==t.AMap.plugins.indexOf(a.plugins[c])&&r.push(a.plugins[c]);r.length?window.AMap.plugin(r,(function(){e(a).then((function(){o(window.AMap)})).catch(i)})):e(a).then((function(){o(window.AMap)})).catch(i)}else if(a.key&&a.key!==t.key)i("多个不一致的 key");else if(a.version&&a.version!==t.AMap.version)i("不允许多个版本 JSAPI 混用");else{var u=[];if(a.plugins)for(c=0;c<a.plugins.length;c+=1)-1==t.AMap.plugins.indexOf(a.plugins[c])&&u.push(a.plugins[c]);l((function(){u.length?window.AMap.plugin(u,(function(){e(a).then((function(){o(window.AMap)})).catch(i)})):e(a).then((function(){o(window.AMap)})).catch(i)}))}}))},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},p={AMap:n.notload,AMapUI:n.notload,Loca:n.notload},r={AMap:[],AMapUI:[],Loca:[]}}}}();const w={class:"content-box"},h=[A('<div class="link" data-v-f20f0d86> 高德地图api：<a href="https://lbs.amap.com/api/jsapi-v2/summary/" target="_blank" data-v-f20f0d86>https://lbs.amap.com/api/jsapi-v2/summary/</a></div><div id="tip" data-v-f20f0d86><input type="text" id="keyword" name="keyword" placeholder="请输入关键字：(选定后搜索)" autocomplete="off" data-v-f20f0d86></div><div id="container" data-v-f20f0d86></div>',3)],m=l({name:"amap"}),g=l((I=((e,a)=>{for(var o in a||(a={}))i.call(a,o)&&p(e,o,a[o]);if(n)for(var o of n(a))t.call(a,o)&&p(e,o,a[o]);return e})({},m),a(I,o({setup(e){let a=c("");return M.load({key:d,version:"2.0",plugins:["AMap.AutoComplete","AMap.PlaceSearch"]}).then((e=>{a=new e.Map("container",{viewMode:"3D",zoom:4,center:[105.602725,37.076636]}),e.plugin(["AMap.Autocomplete","AMap.PlaceSearch"],(function(){const o=new e.Autocomplete({city:"北京",input:"keyword"},(function(e){}));let n=new e.PlaceSearch({city:"北京",map:a});o.on("select",(function(e){n.setCity(e.poi.adcode),n.search(e.poi.name)}))}))})).catch((e=>{})),(e,a)=>(u(),f("div",w,h))}}))));var I,y=s(g,[["__scopeId","data-v-f20f0d86"],["__file","/home/runner/work/Joy-Admin/Joy-Admin/src/views/assembly/amap/index.vue"]]);export{y as default};