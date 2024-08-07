
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{au as L,c as B,b as H,H as M,r as I,G as O}from"./index-CKuMw6bo.js";function j(){const n={},e={id:"wm_div_id",prefix:"mask_div_id",text:"测试水印",x:20,y:20,rows:0,cols:0,x_space:50,y_space:50,font:"微软雅黑",color:"black",fontsize:"18px",alpha:.15,width:100,height:100,angle:15,parent_width:0,parent_height:0,parent_node:null,monitor:!0};let d=!1;const h=new MutationObserver(f);function p(t){var E;Object.assign(e,t);const l=document.getElementById(e.id);(E=l==null?void 0:l.parentNode)==null||E.removeChild(l);const g=e.parent_node,s=g||document.body,_=Math.max(s.scrollWidth,s.clientWidth),b=Math.max(s.scrollHeight,s.clientHeight);let m=0,u=0;t.parent_width||t.parent_height?s&&(m=s.offsetTop||0,u=s.offsetLeft||0,e.x=e.x+u,e.y=e.y+m):s&&(m=s.offsetTop||0,u=s.offsetLeft||0);let i=document.getElementById(e.id),c=null;if(i)i.shadowRoot&&(c=i.shadowRoot);else{i=document.createElement("div"),i.id=e.id,i.setAttribute("style","pointer-events: none !important; display: block !important"),typeof i.attachShadow=="function"?c=i.attachShadow({mode:"open"}):c=i;const a=s.children,r=Math.floor(Math.random()*(a.length-1));a[r]?s.insertBefore(i,a[r]):s.appendChild(i)}e.cols=Math.floor((_-e.x)/(e.width+e.x_space));const $=Math.floor((_-e.x-e.width*e.cols)/e.cols);e.x_space=$&&e.x_space;let x;e.rows=Math.floor((b-e.y)/(e.height+e.y_space));const C=Math.floor((b-e.y-e.height*e.rows)/e.rows);e.y_space=C&&e.y_space;let v;g?(x=e.x+e.width*e.cols+e.x_space*(e.cols-1),v=e.y+e.height*e.rows+e.y_space*(e.rows-1)):(x=u+e.x+e.width*e.cols+e.x_space*(e.cols-1),v=m+e.y+e.height*e.rows+e.y_space*(e.rows-1));let k,S;for(let a=0;a<e.rows;a++){g?S=m+e.y+(e.y_space+e.height)*a:S=e.y+(b-v)/2+(e.y_space+e.height)*a;for(let r=0;r<e.cols;r++){g?k=u+e.x+(_-x)/2+(e.width+e.x_space)*r:k=e.x+(_-x)/2+(e.width+e.x_space)*r;const o=document.createElement("div");o.innerHTML=e.text.replace(/\n/g,"<br>"),o.id=e.prefix+a+r,o.style.transform=`rotate(-${e.angle}deg)`,o.style.visibility="",o.style.position="absolute",o.style.left=`${k}px`,o.style.top=`${S}px`,o.style.overflow="hidden",o.style.zIndex="9999999",o.style.opacity=`${e.alpha}`,o.style.fontSize=e.fontsize,o.style.fontFamily=e.font,o.style.color=e.color,o.style.textAlign="center",o.style.width=`${e.width}px`,o.style.height=`${e.height}px`,o.style.display="block",o.style.userSelect="none",c==null||c.appendChild(o)}}if(e.monitor){const a={childList:!0,attributes:!0,subtree:!0,attributeFilter:["style"],attributeOldValue:!0};h.observe(s,a),h.observe(document.getElementById(e.id).shadowRoot,a)}}function y(){var l;const t=document.getElementById(e.id);(l=t==null?void 0:t.parentNode)==null||l.removeChild(t),h.disconnect()}function f(t){if(d){d=!1;return}(n&&t.length===1||t.length===1&&t[0].removedNodes.length>=1)&&p(n)}return{init:function(t){Object.assign(n,t),p(t)},remove:function(){d=!0,y()}}}const T=L("watermark",()=>{const n=B(),e=H(),{init:d,remove:h}=j();M(()=>n.settings.app.enableWatermark,t=>{t?f():W()},{immediate:!0}),M(()=>n.settings.app.colorScheme,()=>{n.settings.app.enableWatermark&&f()});const p=I({}),y=O({get(){return Object.assign({text:`vue3-admin
当前用户：${e.account}`,width:150,x:0,y:0,x_space:50,y_space:50,alpha:.1,color:n.settings.app.colorScheme==="light"?"black":"white"},p.value)},set(t){w(t)}});M(y,()=>{n.settings.app.enableWatermark&&f()},{deep:!0});function f(){d(y.value)}function W(){try{h()}catch{}}function w(t={}){p.value=t}return{update:w}});export{T as u};
