
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{r as I,G as i,d as V,aE as M,aF as O,aB as j,B as H,H as K,av as y,ax as P,aW as U,aw as L,aC as A,aD as F,O as G,aH as h,aN as R,aO as q,o as g,M as k,w as z,i as w,N as W,K as C,j as J,_ as Q}from"./index-CKuMw6bo.js";import{s as X}from"./use-resolve-button-type-CTrP_QTB.js";function Y(a,l,t){let o=I(t==null?void 0:t.value),n=i(()=>a.value!==void 0);return[i(()=>n.value?a.value:o.value),function(s){return n.value||(o.value=s),l==null?void 0:l(s)}]}function Z(a){var l,t;let o=(l=a==null?void 0:a.form)!=null?l:a.closest("form");if(o){for(let n of o.elements)if(n!==a&&(n.tagName==="INPUT"&&n.type==="submit"||n.tagName==="BUTTON"&&n.type==="submit"||n.nodeName==="INPUT"&&n.type==="image")){n.click();return}(t=o.requestSubmit)==null||t.call(o)}}let ee=Symbol("GroupContext"),ae=V({name:"Switch",emits:{"update:modelValue":a=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null},disabled:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},inheritAttrs:!1,setup(a,{emit:l,attrs:t,slots:o,expose:n}){var s;let B=(s=a.id)!=null?s:`headlessui-switch-${M()}`,r=O(ee,null),[d,m]=Y(i(()=>a.modelValue),e=>l("update:modelValue",e),i(()=>a.defaultChecked));function p(){m(!d.value)}let x=I(null),f=r===null?x:r.switchRef,N=X(i(()=>({as:a.as,type:t.type})),f);n({el:f,$el:f});function S(e){e.preventDefault(),p()}function $(e){e.key===h.Space?(e.preventDefault(),p()):e.key===h.Enter&&Z(e.currentTarget)}function T(e){e.preventDefault()}let c=i(()=>{var e,u;return(u=(e=j(f))==null?void 0:e.closest)==null?void 0:u.call(e,"form")});return H(()=>{K([c],()=>{if(!c.value||a.defaultChecked===void 0)return;function e(){m(a.defaultChecked)}return c.value.addEventListener("reset",e),()=>{var u;(u=c.value)==null||u.removeEventListener("reset",e)}},{immediate:!0})}),()=>{let{name:e,value:u,form:_,tabIndex:v,...b}=a,E={checked:d.value},D={id:B,ref:f,role:"switch",type:N.value,tabIndex:v===-1?0:v,"aria-checked":d.value,"aria-labelledby":r==null?void 0:r.labelledby.value,"aria-describedby":r==null?void 0:r.describedby.value,onClick:S,onKeyup:$,onKeypress:T};return y(G,[e!=null&&d.value!=null?y(P,U({features:L.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:d.value,form:_,disabled:b.disabled,name:e,value:u})):null,A({ourProps:D,theirProps:{...t,...F(b,["modelValue","defaultChecked"])},slot:E,attrs:t,slots:o,name:"Switch"})])}}});const le={class:"absolute inset-0 h-full w-full flex items-center justify-center"},oe=V({__name:"HToggle",props:R({disabled:{type:Boolean,default:!1},onIcon:{},offIcon:{}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const l=q(a,"modelValue");return(t,o)=>{const n=Q;return g(),k(J(ae),{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=s=>l.value=s),disabled:t.disabled,class:C(["relative h-5 w-10 inline-flex flex-shrink-0 cursor-pointer border-2 border-transparent rounded-full p-0 vertical-middle disabled-cursor-not-allowed disabled-opacity-50 focus-outline-none focus-visible-ring-2 focus-visible-ring-offset-2 focus-visible-ring-offset-white dark-focus-visible-ring-offset-gray-900",[l.value?"bg-ui-primary":"bg-stone-3 dark-bg-stone-7"]])},{default:z(()=>[w("span",{class:C(["pointer-events-none relative inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition-margin duration-200 ease-in-out dark-bg-dark",[l.value?"ms-5":"ms-0"]])},[w("span",le,[l.value&&t.onIcon||!l.value&&t.offIcon?(g(),k(n,{key:0,name:l.value?t.onIcon:t.offIcon,class:"h-3 w-3 text-stone-7 dark-text-stone-3"},null,8,["name"])):W("",!0)])],2)]),_:1},8,["modelValue","disabled","class"])}}});export{oe as _};
