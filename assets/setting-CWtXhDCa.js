
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{d as U,a as C,r as v,e as d,f as P,h as e,w as l,U as S,o as T,j as a,q as r,i as t,y as k,p as B,l as R,z as F}from"./index-CKuMw6bo.js";import{_ as Q}from"./index-DOv-tK3x.js";const c=_=>(B("data-v-61992082"),_=_(),R(),_),N=c(()=>t("h2",null,"基本设置",-1)),M=c(()=>t("h2",null,"安全设置",-1)),j={class:"setting-list"},z={class:"item"},G=c(()=>t("div",{class:"content"},[t("div",{class:"title"}," 账户密码 "),t("div",{class:"desc"}," 当前密码强度：强 ")],-1)),K={class:"action"},O={class:"item"},$=c(()=>t("div",{class:"content"},[t("div",{class:"title"}," 密保手机 "),t("div",{class:"desc"}," 已绑定手机：187****3441 ")],-1)),A={class:"action"},D={class:"item"},H=c(()=>t("div",{class:"content"},[t("div",{class:"title"}," 备用邮箱 "),t("div",{class:"desc"}," 当前未绑定备用邮箱 ")],-1)),J={class:"action"},L=U({name:"PersonalSetting",__name:"setting",setup(_){const E=C(),o=v({headimg:"",mobile:"",name:"",qq:"",wechat:""}),b=v();function g(m){m.error===""?o.value.headimg=m.data.path:k.warning(m.error)}function V(){E.push({name:"personalEditPassword"})}return(m,s)=>{const u=d("ElInput"),i=d("ElFormItem"),p=d("ElButton"),w=d("ElForm"),f=d("ElCol"),y=Q,x=d("ElRow"),h=d("ElTabPane"),I=d("ElTabs"),q=S;return T(),P("div",null,[e(q,null,{default:l(()=>[e(I,{"tab-position":"left",style:{height:"600px"}},{default:l(()=>[e(h,{label:"基本设置",class:"basic"},{default:l(()=>[N,e(x,{gutter:20},{default:l(()=>[e(f,{span:16},{default:l(()=>[e(w,{ref_key:"formRef",ref:b,model:a(o),"label-width":"120px","label-suffix":"："},{default:l(()=>[e(i,{label:"名 称"},{default:l(()=>[e(u,{modelValue:a(o).name,"onUpdate:modelValue":s[0]||(s[0]=n=>a(o).name=n),placeholder:"请输入你的名称"},null,8,["modelValue"])]),_:1}),e(i,{label:"手机号"},{default:l(()=>[e(u,{modelValue:a(o).mobile,"onUpdate:modelValue":s[1]||(s[1]=n=>a(o).mobile=n),placeholder:"请输入你的手机号"},null,8,["modelValue"])]),_:1}),e(i,{label:"QQ 号"},{default:l(()=>[e(u,{modelValue:a(o).qq,"onUpdate:modelValue":s[2]||(s[2]=n=>a(o).qq=n),placeholder:"请输入你的 QQ 号"},null,8,["modelValue"])]),_:1}),e(i,{label:"微信号"},{default:l(()=>[e(u,{modelValue:a(o).wechat,"onUpdate:modelValue":s[3]||(s[3]=n=>a(o).wechat=n),placeholder:"请输入你的微信号"},null,8,["modelValue"])]),_:1}),e(i,null,{default:l(()=>[e(p,{type:"primary"},{default:l(()=>[r(" 保存 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(f,{span:8},{default:l(()=>[e(y,{url:a(o).headimg,"onUpdate:url":s[4]||(s[4]=n=>a(o).headimg=n),action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKG509026665141383"},notip:"",class:"headimg-upload",onOnSuccess:g},null,8,["url"])]),_:1})]),_:1})]),_:1}),e(h,{label:"安全设置",class:"security"},{default:l(()=>[M,t("div",j,[t("div",z,[G,t("div",K,[e(p,{type:"primary",text:"",onClick:V},{default:l(()=>[r(" 修改 ")]),_:1})])]),t("div",O,[$,t("div",A,[e(p,{type:"primary",text:""},{default:l(()=>[r(" 修改 ")]),_:1})])]),t("div",D,[H,t("div",J,[e(p,{type:"primary",text:""},{default:l(()=>[r(" 绑定 ")]),_:1})])])])]),_:1})]),_:1})]),_:1})])}}}),Y=F(L,[["__scopeId","data-v-61992082"]]);export{Y as default};
