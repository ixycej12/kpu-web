
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{d as w,r as m,$ as I,e as s,o as P,f as U,h as l,w as o,j as n,Y as g,q as z,i as B,t as $,m as k,U as F}from"./index-CKuMw6bo.js";import{_ as S}from"./index.vue_vue_type_script_setup_true_lang-BvQSz69F.js";import{i as q}from"./index.es-C9aGbPy1.js";const D=w({__name:"i18n",setup(N){const{t:r}=k(),i=m(1),p=m(100),a=m({name:"",age:""}),v=m({name:[{required:!0,message:()=>r("formRules.name"),trigger:"blur"}],age:[{required:!0,message:()=>r("formRules.age"),trigger:"blur"}]}),{changeLocale:f}=I();function _(u){u==="zh-cn"?f(u,{hello:{world:"你好，世界！"}}):(f(u,{hello:{world:"Hello World !"}}),q.success("载入成功，你可以切换语言查看效果"))}return(u,e)=>{const C=S,b=s("ElPagination"),d=F,c=s("ElInput"),V=s("ElFormItem"),x=s("ElForm"),E=s("ElButton");return P(),U("div",null,[l(C,{title:"国际化",content:"除了支持全局多语言切换，还支持 Vue 单文件模式语言切换，你可以尝试在这个页面点击右上角的语言切换试试"}),l(d,{title:"Element 组件"},{default:o(()=>[l(b,{"current-page":n(i),"onUpdate:currentPage":e[0]||(e[0]=t=>g(i)?i.value=t:null),"page-size":n(p),"onUpdate:pageSize":e[1]||(e[1]=t=>g(p)?p.value=t:null),"page-sizes":[100,200,300,400],layout:"total, sizes, prev, pager, next, jumper",total:400,onSizeChange:()=>{},onCurrentChange:()=>{}},null,8,["current-page","page-size"])]),_:1}),l(d,{title:"表单验证(待优化)"},{default:o(()=>[l(x,{modelValue:n(a),"onUpdate:modelValue":e[4]||(e[4]=t=>g(a)?a.value=t:null),rules:n(v),"label-width":"100px"},{default:o(()=>[l(V,{label:n(r)("form.name"),prop:"name"},{default:o(()=>[l(c,{modelValue:n(a).name,"onUpdate:modelValue":e[2]||(e[2]=t=>n(a).name=t)},null,8,["modelValue"])]),_:1},8,["label"]),l(V,{label:n(r)("form.age"),prop:"age"},{default:o(()=>[l(c,{modelValue:n(a).age,"onUpdate:modelValue":e[3]||(e[3]=t=>n(a).age=t)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["modelValue","rules"])]),_:1}),l(d,{title:"延迟加载"},{default:o(()=>[l(E,{onClick:e[5]||(e[5]=t=>_("zh-cn"))},{default:o(()=>[z(" 载入中文 ")]),_:1}),l(E,{onClick:e[6]||(e[6]=t=>_("en"))},{default:o(()=>[z(" 载入英文 ")]),_:1}),B("p",null,$(n(r)("hello.world")),1)]),_:1})])}}});export{D as default};
