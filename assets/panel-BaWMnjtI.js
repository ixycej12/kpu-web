
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{d as b,u as w,a as y,b0 as C,F as I,r as P,H as S,o,f as r,i,j as e,O as v,M as p,N as x,h as c,w as z,X as N,t as $,x as B,k as F,v as R,q as _,ag as V,_ as j,p as A,l as D,z as H}from"./index-CKuMw6bo.js";import{S as M}from"./sortable.esm-C0-Qcoum.js";const h=d=>(A("data-v-1da93284"),d=d(),D(),d),T={class:"favorites-container w-80"},q={class:"flex items-center justify-between px-4 py-3"},E=h(()=>i("div",{class:"text-sm font-bold"}," 我的收藏夹 ",-1)),L=["title","onClick"],O={class:"name flex-1 truncate pe-4"},U={class:"right-1 h-5 w-6 rounded-full text-stone-3 !absolute dark-text-stone-7 hover-text-stone-7 dark-hover-text-stone-3"},X={key:1,flex:"center col","py-6":"","text-stone-5":""},G=h(()=>i("p",{"m-2":"","text-base":""}," 收藏夹是空的 ",-1)),J={"m-0":"","flex-center":"","text-sm":"","op-75":""},K=b({name:"FavoritesPanel",__name:"panel",setup(d){const l=w(),g=y(),t=C(),{generateI18nTitle:f}=I(),u=P();return S(()=>u.value,m=>{m&&new M(u.value,{animation:200,ghostClass:"draggable-ghost",draggable:".draggable-item",onUpdate:s=>{s.newIndex!==void 0&&s.oldIndex!==void 0&&t.sort(s.newIndex,s.oldIndex)}})}),(m,s)=>{const n=j;return o(),r("div",T,[i("div",q,[E,e(t).canAdd(e(l).fullPath)?(o(),r(v,{key:0},[e(t).isAdd(e(l).fullPath)?(o(),p(n,{key:1,class:"cursor-pointer text-xl",name:"i-mdi:star-remove",title:"从收藏夹删除",onClick:s[1]||(s[1]=a=>e(t).remove(e(l).fullPath))})):(o(),p(n,{key:0,class:"cursor-pointer text-xl",name:"i-mdi:star-plus-outline",title:"添加到收藏夹",onClick:s[0]||(s[0]=a=>e(t).add(e(l)))}))],64)):x("",!0)]),c(e(V),{options:{scrollbars:{autoHide:"leave",autoHideDelay:300}},defer:"",class:"max-h-220px"},{default:z(()=>[e(t).list.length>0?(o(),r("div",{key:0,ref_key:"favoritesContainerRef",ref:u,class:"flex flex-wrap items-center justify-between gap-2 px-4 pb-4"},[(o(!0),r(v,null,N(e(t).list,a=>(o(),r("div",{key:a.fullPath,title:e(f)(a.title),class:"draggable-item relative w-[calc(50%-0.25rem)] flex cursor-pointer items-center gap-1 rounded px-2 py-2 ring-1 ring-stone-3 ring-inset hover-bg-stone-1 dark-ring-stone-7 dark-hover-bg-dark/50",onClick:k=>e(g).push(a.fullPath)},[a.icon?(o(),p(n,{key:0,name:a.icon,size:18},null,8,["name"])):x("",!0),i("div",O,$(e(f)(a.title)),1),i("div",U,[c(n,{name:"i-ep:delete",size:14,onClick:B(k=>e(t).remove(a.fullPath),["stop"])},null,8,["onClick"])])],8,L))),128))],512)):(o(),r("div",X,[c(n,{name:"i-tabler:mood-empty",size:40}),G,F(i("p",J,[_(" 点击右上角 "),c(n,{name:"i-mdi:star-plus-outline",size:20,"mx-1":"","text-stone-6":"","dark-text-stone-4":""}),_(" 将当前页面添加到收藏夹 ")],512),[[R,e(t).canAdd(e(l).fullPath)]])]))]),_:1})])}}}),Y=H(K,[["__scopeId","data-v-1da93284"]]);export{Y as default};
