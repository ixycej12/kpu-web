
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{_ as R}from"./index.vue_vue_type_script_setup_true_lang-DatdAW6h.js";import{d as j,aP as M,b as P,r as V,B as A,s as S,H as T,o as v,M as H,w as t,i as g,t as N,h as e,j as o,f as h,O as q,X as G,x as L,ag as W,a1 as X,q as x,_ as z,W as K,p as Q,l as Y,z as Z,e as u,U as ee}from"./index-CKuMw6bo.js";import te from"./HDropdown-Bxg_WJ8X.js";import{_ as oe}from"./HDialog.vue_vue_type_script_setup_true_lang-DKpezjP8.js";import{_ as ae}from"./HInput.vue_vue_type_script_setup_true_lang-D_qxMOyy.js";import{S as le}from"./sortable.esm-C0-Qcoum.js";import{i as F}from"./index.es-C9aGbPy1.js";import{_ as ne}from"./index.vue_vue_type_script_setup_true_lang-BvQSz69F.js";const se=b=>(Q("data-v-12f3b558"),b=b(),Y(),b),de={class:"w-40"},ie={class:"flex items-center justify-between px-4 py-3"},re={class:"text-sm font-bold"},ue=["title","onClick"],ce={class:"name flex-1 truncate pe-4"},me={class:"right-1 h-5 w-6 rounded-full text-stone-3 !absolute dark-text-stone-7 hover-text-stone-7 dark-hover-text-stone-3"},_e={key:1,flex:"center col","py-6":"","text-stone-5":""},pe=se(()=>g("p",{"m-2":"","text-base":""}," 空空如也 ",-1)),fe=j({name:"StorageBox",__name:"index",props:{data:{},name:{},title:{default:"储存箱"}},emits:["takeOut"],setup(b,{emit:B}){const n=b,E=B,C=M(),m=P(),l=V([]),i=V({visible:!1,name:""});A(()=>{_()});function I(){i.value.name?(l.value.push({title:i.value.name,content:JSON.stringify(n.data)}),c(),i.value.visible=!1,i.value.name=""):F.warning("名称不能为空",{zIndex:2e3})}function w(a){E("takeOut",JSON.parse(a))}function y(a){l.value.splice(a,1),c()}function $(a,s){l.value.splice(a,0,l.value.splice(s,1)[0]),c()}function c(){const a=S.session.has("storageBoxData")?JSON.parse(S.session.get("storageBoxData")):{};a[m.account]=a[m.account]||{},a[m.account][n.name]=l.value,S.session.set("storageBoxData",JSON.stringify(a))}function _(){S.session.has("storageBoxData")&&(l.value=JSON.parse(S.session.get("storageBoxData"))[m.account][n.name]||[])}const p=V();return T(()=>p.value,a=>{a&&new le(p.value,{animation:200,ghostClass:"draggable-ghost",draggable:".draggable-item",onUpdate:s=>{s.newIndex!==void 0&&s.oldIndex!==void 0&&$(s.newIndex,s.oldIndex)}})}),(a,s)=>{const f=z,O=ae,k=K,U=oe,D=te;return v(),H(D,{placement:"bottom"},{dropdown:t(()=>[g("div",de,[g("div",ie,[g("div",re,N(a.title),1),e(f,{name:"i-ep:plus",class:"cursor-pointer text-base",onClick:s[3]||(s[3]=r=>o(i).visible=!0)})]),e(o(W),{options:{scrollbars:{autoHide:"leave",autoHideDelay:300}},defer:"",class:"max-h-200px"},{default:t(()=>[o(l).length>0?(v(),h("div",{key:0,ref_key:"containerRef",ref:p,class:"flex flex-col gap-2 px-4 pb-4"},[(v(!0),h(q,null,G(o(l),(r,d)=>(v(),h("div",{key:`${d}_${r.title}`,title:r.title,class:"draggable-item relative flex cursor-pointer items-center rounded px-2 py-2 ring-1 ring-stone-3 ring-inset hover-bg-stone-1 dark-ring-stone-7 dark-hover-bg-dark/50",onClick:J=>w(r.content)},[g("div",ce,N(r.title),1),g("div",me,[e(f,{name:"i-ep:delete",size:14,onClick:L(J=>y(d),["stop"])},null,8,["onClick"])])],8,ue))),128))],512)):(v(),h("div",_e,[e(f,{name:"i-tabler:mood-empty",size:40}),pe]))]),_:1})])]),default:t(()=>[o(C).default?X(a.$slots,"default",{key:0},void 0,!0):(v(),H(f,{key:1,name:"i-ep:message-box",size:16})),e(U,{modelValue:o(i).visible,"onUpdate:modelValue":s[2]||(s[2]=r=>o(i).visible=r),title:"请输入一个方便记忆的名称"},{footer:t(()=>[e(k,{outline:"",class:"mr-2",onClick:s[1]||(s[1]=r=>o(i).visible=!1)},{default:t(()=>[x(" 取消 ")]),_:1}),e(k,{onClick:I},{default:t(()=>[x(" 确定 ")]),_:1})]),default:t(()=>[e(O,{modelValue:o(i).name,"onUpdate:modelValue":s[0]||(s[0]=r=>o(i).name=r),class:"w-full!"},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:3})}}}),ve=Z(fe,[["__scopeId","data-v-12f3b558"]]),we=j({name:"StorageBox",__name:"storagebox",setup(b){const B=V([]),n=V({name:"",department_id:"",department_job_id:"",role_id:"",check1:!0,check2:!1});function E(){F.info("模拟触发搜索")}function C(m){n.value=m,E()}return(m,l)=>{const i=ne,I=u("ElAlert"),w=ve,y=ee,$=u("ElInput"),c=u("ElFormItem"),_=u("ElCol"),p=u("ElRow"),a=u("ElOption"),s=u("ElSelect"),f=u("ElCheckbox"),O=z,k=u("ElButton"),U=u("ElSpace"),D=u("ElForm"),r=R;return v(),h("div",null,[e(i,{title:"储存箱",content:"StorageBox"}),e(y,{title:"你可以将页面中的数据（object/array）储存到该组件内，并在需要的时候取出来"},{default:t(()=>[e(I,{"show-icon":"",title:"该组件需要搭配业务场景使用。",closable:!1}),e(w,{data:o(B),name:"box1","mt2.5":""},null,8,["data"])]),_:1}),e(y,{title:"推荐场景：具有复杂筛选项的页面，并记录常用的筛选条件"},{default:t(()=>[e(r,{"show-toggle":!1},{default:t(()=>[e(D,{model:o(n),size:"default","label-width":"120px"},{default:t(()=>[e(p,null,{default:t(()=>[e(_,{span:24},{default:t(()=>[e(c,{label:"姓名 / 手机号",class:"search-form-item-name"},{default:t(()=>[e($,{modelValue:o(n).name,"onUpdate:modelValue":l[0]||(l[0]=d=>o(n).name=d),placeholder:"请输入姓名或者手机号，支持模糊查询",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(p,null,{default:t(()=>[e(_,{span:6},{default:t(()=>[e(c,{label:"部门"},{default:t(()=>[e(s,{modelValue:o(n).department_id,"onUpdate:modelValue":l[1]||(l[1]=d=>o(n).department_id=d),clearable:"",placeholder:"请选择部门"},{default:t(()=>[e(a,{label:"技术部",value:1}),e(a,{label:"设计部",value:2}),e(a,{label:"行政部",value:3})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(_,{span:6},{default:t(()=>[e(c,{label:"职位"},{default:t(()=>[e(s,{modelValue:o(n).department_job_id,"onUpdate:modelValue":l[2]||(l[2]=d=>o(n).department_job_id=d),clearable:"",placeholder:"请选择职位"},{default:t(()=>[e(a,{label:"程序员",value:1}),e(a,{label:"设计师",value:2}),e(a,{label:"人事",value:3})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(_,{span:6},{default:t(()=>[e(c,{label:"角色"},{default:t(()=>[e(s,{modelValue:o(n).role_id,"onUpdate:modelValue":l[3]||(l[3]=d=>o(n).role_id=d),clearable:"",placeholder:"请选择角色"},{default:t(()=>[e(a,{label:"主管",value:1}),e(a,{label:"普通职员",value:2})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(p,null,{default:t(()=>[e(_,{span:24},{default:t(()=>[e(c,{label:"角色"},{default:t(()=>[e(f,{modelValue:o(n).check1,"onUpdate:modelValue":l[4]||(l[4]=d=>o(n).check1=d)},{default:t(()=>[x(" 备选项 ")]),_:1},8,["modelValue"]),e(f,{modelValue:o(n).check2,"onUpdate:modelValue":l[5]||(l[5]=d=>o(n).check2=d)},{default:t(()=>[x(" 备选项 ")]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(U,null,{default:t(()=>[e(k,{type:"primary",onClick:E},{icon:t(()=>[e(O,{name:"i-ep:search"})]),default:t(()=>[x(" 筛选 ")]),_:1}),e(w,{data:o(n),name:"box2",title:"我的快捷筛选",onTakeOut:C},{default:t(()=>[e(k,{link:""},{default:t(()=>[x(" 保存当前筛选 ")]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})])}}});export{we as default};
