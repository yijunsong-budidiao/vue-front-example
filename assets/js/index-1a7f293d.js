var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(a,l,r)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[l]=r;import{d as n,r as d,a as i,b as u,o as m,e as p,f as c,w as f,F as b,H as v,l as y,v as g,Z as _}from"./index-27a4382b.js";import{_ as k}from"./plugin-vue_export-helper-b2bddca3.js";const O={class:"content-box"},j=y("Add Input"),w=y(" Delete "),P=y("Submit"),V=y("Reset"),x=n({name:"dynamicForm"}),h=n((C=((e,a)=>{for(var l in a||(a={}))t.call(a,l)&&s(e,l,a[l]);if(r)for(var l of r(a))o.call(a,l)&&s(e,l,a[l]);return e})({},x),a(C,l({setup(e){const a=d(),l=i({domains:[{key:1,value:""}],email:""}),r=()=>{l.domains.push({key:Date.now(),value:""})};return(e,t)=>{const o=u("el-button"),s=u("el-input"),n=u("el-form-item"),d=u("el-form");return m(),p("div",O,[c(o,{class:"add",type:"success",onClick:r,plain:""},{default:f((()=>[j])),_:1}),c(d,{ref_key:"formRef",ref:a,model:l,"label-width":"100px",class:"demo-dynamic"},{default:f((()=>[c(n,{prop:"email",label:"Email",rules:[{required:!0,message:"Please input email address",trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:["blur","change"]}]},{default:f((()=>[c(s,{modelValue:l.email,"onUpdate:modelValue":t[0]||(t[0]=e=>l.email=e)},null,8,["modelValue"])])),_:1}),(m(!0),p(b,null,v(l.domains,((e,a)=>(m(),g(n,{key:e.key,label:"Domain"+a,prop:"domains."+a+".value",rules:{required:!0,message:"domain can not be null",trigger:"blur"}},{default:f((()=>[c(s,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a},{append:f((()=>[c(o,{type:"danger",plain:"",class:"mt-2",onClick:_((a=>(e=>{const a=l.domains.indexOf(e);-1!==a&&l.domains.splice(a,1)})(e)),["prevent"])},{default:f((()=>[w])),_:2},1032,["onClick"])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label","prop"])))),128)),c(n,null,{default:f((()=>[c(o,{type:"primary",onClick:t[1]||(t[1]=e=>{var l;(l=a.value)&&l.validate((e=>{if(!e)return!1}))})},{default:f((()=>[P])),_:1}),c(o,{onClick:t[2]||(t[2]=e=>{var l;(l=a.value)&&l.resetFields()})},{default:f((()=>[V])),_:1})])),_:1})])),_:1},8,["model"])])}}}))));var C,D=k(h,[["__scopeId","data-v-699e21e8"]]);export{D as default};
