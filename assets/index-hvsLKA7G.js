
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import f from"./index-CLs2-Es5.js";import h from"./index-DvRJvAzz.js";import{d as y,c as T,G as l,r as b,B as _,J as w,H as v,o as i,f as x,j as o,M as c,N as d,K as S,z as k}from"./index-CKuMw6bo.js";import"./sortable.esm-C0-Qcoum.js";import"./index.es-C9aGbPy1.js";import"./moreAction-5HOkrn0m.js";import"./HDropdown-Bxg_WJ8X.js";import"./HTooltip.vue_vue_type_script_setup_true_lang-B_iNwzIl.js";import"./useTabbar-B0XWqNu5.js";import"./useMainPage-CWUiX425.js";import"./leftSide.vue_vue_type_script_setup_true_lang-DEaieVvs.js";import"./tools.vue_vue_type_script_setup_true_lang-DngKaRhl.js";import"./index-3LbGkijK.js";import"./index-C34ABLIP.js";import"./item.vue_vue_type_script_setup_true_lang-CGcwkTMT.js";import"./index.vue_vue_type_script_setup_true_lang-CXFDit10.js";import"./HTabList.vue_vue_type_script_setup_true_lang-CW4P3unG.js";import"./use-resolve-button-type-CTrP_QTB.js";import"./index.vue_vue_type_script_setup_true_lang-bagLWO9-.js";import"./panel-BaWMnjtI.js";import"./index.vue_vue_type_script_setup_true_lang-Du7Rfksq.js";import"./index-r5tezyYp.js";import"./index.vue_vue_type_script_setup_true_lang-DqQjP8-5.js";import"./HDropdownMenu.vue_vue_type_script_setup_true_lang-CT2JCF0C.js";import"./index.vue_vue_type_script_setup_true_lang-BtQ533uP.js";import"./HKbd-DQFyEgag.js";import"./index-CUkm2f6Q.js";import"./HBadge.vue_vue_type_script_setup_true_lang-Hbnwni3N.js";import"./panel-R3A6hKww.js";import"./notification-B94ndBWO.js";import"./index-BWioYw2Z.js";import"./rightSide.vue_vue_type_script_setup_true_lang-BqA_HSHC.js";const E=y({name:"Topbar",__name:"index",setup(B){const t=T(),n=l(()=>{const e=t.settings.toolbar.layout.findIndex(a=>a==="->"),r=t.settings.toolbar.layout.some((a,g)=>g<e&&a!=="->"?t.settings.app.routeBaseOn==="filesystem"&&a==="breadcrumb"?!1:t.settings.toolbar[a]:!1);return!["head","only-head"].includes(t.settings.menu.mode)||r}),s=b(0),m=b(!1),u=l(()=>{const e=t.settings.tabbar.enable?Number.parseInt(getComputedStyle(document.documentElement||document.body).getPropertyValue("--g-tabbar-height")):0,r=n.value?Number.parseInt(getComputedStyle(document.documentElement||document.body).getPropertyValue("--g-toolbar-height")):0;return e+r});_(()=>{window.addEventListener("scroll",p)}),w(()=>{window.removeEventListener("scroll",p)});function p(){s.value=(document.documentElement||document.body).scrollTop}return v(s,(e,r)=>{m.value=t.settings.topbar.mode==="sticky"&&e>r&&e>u.value}),(e,r)=>(i(),x("div",{class:S(["topbar-container",{"has-tabbar":o(t).settings.tabbar.enable,"has-toolbar":o(n),[`topbar-${o(t).settings.topbar.mode}`]:!0,shadow:!o(t).settings.topbar.switchTabbarAndToolbar&&o(s),hide:o(m),"switch-tabbar-toolbar":o(t).settings.topbar.switchTabbarAndToolbar}]),"data-fixed-calc-width":""},[o(t).settings.tabbar.enable?(i(),c(f,{key:0})):d("",!0),o(n)?(i(),c(h,{key:1})):d("",!0)],2))}}),st=k(E,[["__scopeId","data-v-a5ff7d03"]]);export{st as default};
