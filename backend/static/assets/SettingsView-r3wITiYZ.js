import{S as e}from"./_baseFor-DyDN1Ubb.js";import{n as t,t as n}from"./now-CV8NFKEt.js";import{t as r}from"./Add-Bz4AffQf.js";import{t as i}from"./InputNumber-DJrD9GPS.js";import{t as a}from"./Space-Bdcgm-tk.js";import{t as o}from"./Switch-DpXJG_6m.js";import{t as s}from"./Popconfirm-DOQKvQTu.js";import{$r as c,A as l,Ar as u,Br as d,C as f,Cn as p,Gn as m,Gr as h,Hn as g,Ir as _,Jr as v,K as y,Kn as b,L as x,Lr as S,Mn as C,N as w,Nn as ee,Or as T,Pn as te,Pr as E,Rr as D,Sn as ne,Tn as O,Un as re,Ur as k,Vr as A,Wr as j,Xr as ie,Yr as M,_ as ae,ar as oe,c as N,ci as P,dn as se,dr as F,fi as I,fn as ce,fr as L,ft as le,gn as R,hi as z,jr as ue,kn as de,li as fe,lr as B,mr as V,ni as pe,oi as me,p as H,pi as U,pr as W,qr as G,ri as he,rr as ge,si as _e,ti as K,tt as q,ur as J,ut as ve,vi as Y,vn as ye,vr as X,yn as be,zr as xe}from"./index-mQJCJagR.js";import{t as Z}from"./settings-DZfdmadf.js";import{t as Q}from"./SettingRow-91nqU_yy.js";import{a as Se,i as Ce,n as we,r as Te,t as Ee}from"./session-browser-prefs-BqTQlP0y.js";var De=C(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[C(`&::-webkit-scrollbar`,{width:0,height:0})]),Oe=h({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=I(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=te();return De.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:ee,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return G(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),ke=`Expected a function`,Ae=Math.max,je=Math.min;function Me(r,i,a){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof r!=`function`)throw TypeError(ke);i=t(i)||0,e(a)&&(p=!!a.leading,m=`maxWait`in a,c=m?Ae(t(a.maxWait)||0,i):c,h=`trailing`in a?!!a.trailing:h);function g(e){var t=o,n=s;return o=s=void 0,f=e,l=r.apply(n,t),l}function _(e){return f=e,u=setTimeout(b,i),p?g(e):l}function v(e){var t=e-d,n=e-f,r=i-t;return m?je(r,c-n):r}function y(e){var t=e-d,n=e-f;return d===void 0||t>=i||t<0||m&&n>=c}function b(){var e=n();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function C(){return u===void 0?l:x(n())}function w(){var e=n(),t=y(e);if(o=arguments,s=this,d=e,t){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,i),g(d)}return u===void 0&&(u=setTimeout(b,i)),l}return w.cancel=S,w.flush=C,w}var Ne=`Expected a function`;function Pe(t,n,r){var i=!0,a=!0;if(typeof t!=`function`)throw TypeError(Ne);return e(r)&&(i=`leading`in r?!!r.leading:i,a=`trailing`in r?!!r.trailing:a),Me(t,n,{leading:i,maxWait:n,trailing:a})}var Fe=g(`n-tabs`),Ie={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},$=h({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:Ie,slots:Object,setup(e){let t=v(Fe,null);return t||O(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return G(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Le=h({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},be(Ie,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=v(Fe);return{trigger:d,mergedClosable:S(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:i,label:a,tab:o,value:s,mergedClosable:c,trigger:l,$slots:{default:u}}=this,d=a??o;return G(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?G(`div`,{class:`${t}-tabs-tab-pad`}):null,G(`div`,Object.assign({key:n,"data-name":n,"data-disabled":i?!0:void 0},M({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,i&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),G(`span`,{class:`${t}-tabs-tab__label`},e?G(E,null,G(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),G(ve,{clsPrefix:t},{default:()=>G(r,null)})):u?u():typeof d==`object`?d:ye(d??n)),c&&this.type===`card`?G(q,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:i}):null))}}),Re=J(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[L(`segment-type`,[J(`tabs-rail`,[B(`&.transition-disabled`,[J(`tabs-capsule`,`
 transition: none;
 `)])])]),L(`top`,[J(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),L(`left`,[J(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),L(`left, right`,`
 flex-direction: row;
 `,[J(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),J(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),L(`right`,`
 flex-direction: row-reverse;
 `,[J(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),J(`tabs-bar`,`
 left: 0;
 `)]),L(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[J(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),J(`tabs-bar`,`
 top: 0;
 `)]),J(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[J(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),J(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[J(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[L(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),B(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),L(`flex`,[J(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[J(`tabs-wrapper`,`
 width: 100%;
 `,[J(`tabs-tab`,`
 margin-right: 0;
 `)])])]),J(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[F(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),F(`prefix`,`padding-right: 16px;`),F(`suffix`,`padding-left: 16px;`)]),L(`top, bottom`,[B(`>`,[J(`tabs-nav`,[J(`tabs-nav-scroll-wrapper`,[B(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),B(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),L(`shadow-start`,[B(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),L(`shadow-end`,[B(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),L(`left, right`,[J(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),B(`>`,[J(`tabs-nav`,[J(`tabs-nav-scroll-wrapper`,[B(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),B(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),L(`shadow-start`,[B(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),L(`shadow-end`,[B(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),J(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[J(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[B(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),B(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),J(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),J(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),J(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),J(`tabs-tab`,`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[L(`disabled`,{cursor:`not-allowed`}),F(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),F(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),J(`tabs-bar`,`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[B(`&.transition-disabled`,`
 transition: none;
 `),L(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),J(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),J(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[B(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),B(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),B(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),B(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),B(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),J(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),L(`line-type, bar-type`,[J(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[B(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),L(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),L(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),J(`tabs-nav`,[L(`line-type`,[L(`top`,[F(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),J(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),J(`tabs-bar`,`
 bottom: -1px;
 `)]),L(`left`,[F(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),J(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),J(`tabs-bar`,`
 right: -1px;
 `)]),L(`right`,[F(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),J(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),J(`tabs-bar`,`
 left: -1px;
 `)]),L(`bottom`,[F(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),J(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),J(`tabs-bar`,`
 top: -1px;
 `)]),F(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),J(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),J(`tabs-bar`,`
 border-radius: 0;
 `)]),L(`card-type`,[F(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),J(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),J(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),J(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[L(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[F(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),W(`disabled`,[B(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),L(`closable`,`padding-right: 8px;`),L(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),L(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),L(`left, right`,`
 flex-direction: column; 
 `,[F(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),J(`tabs-wrapper`,`
 flex-direction: column;
 `),J(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[J(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),L(`top`,[L(`card-type`,[J(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),F(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),J(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[L(`active`,`
 border-bottom: 1px solid #0000;
 `)]),J(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),J(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),L(`left`,[L(`card-type`,[J(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),F(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),J(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[L(`active`,`
 border-right: 1px solid #0000;
 `)]),J(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),J(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),L(`right`,[L(`card-type`,[J(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),F(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),J(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[L(`active`,`
 border-left: 1px solid #0000;
 `)]),J(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),J(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),L(`bottom`,[L(`card-type`,[J(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),F(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),J(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[L(`active`,`
 border-top: 1px solid #0000;
 `)]),J(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),J(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),ze=Pe,Be=h({name:`Tabs`,props:Object.assign(Object.assign({},le.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=ce(e),a=le(`Tabs`,`-tabs`,Re,ae,e,n),o=I(null),s=I(null),l=I(null),u=I(null),d=I(null),f=I(null),h=I(!0),g=I(!0),_=re(e,[`labelSize`,`size`]),v=S(()=>_.value?_.value:i?.value?.Tabs?.size||`medium`),y=re(e,[`activeName`,`value`]),x=I(y.value??e.defaultValue??(t.default?ne(t.default())[0]?.props?.name:null)),C=m(y,x),w={id:0},ee=S(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});me(C,()=>{w.id=0,O(),k()});function T(){let{value:e}=C;return e===null?null:o.value?.querySelector(`[data-name="${e}"]`)}function te(t){if(e.type===`card`)return;let{value:r}=s;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(D([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(D([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function E(){if(e.type===`card`)return;let{value:t}=s;t&&(t.style.opacity=`0`)}function D(e){let{value:t}=s;if(t)for(let n of e)t.style[n]=``}function O(){if(e.type===`card`)return;let t=T();t?te(t):E()}function k(){let e=d.value?.$el;if(!e)return;let t=T();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let A=I(null),j=0,M=null;function N(e){let t=A.value;if(t){j=e.getBoundingClientRect().height;let n=`${j}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};M?(r(),M(),M=null):M=r}}function P(e){let t=A.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(j,n)}px`};M?(M(),M=null,r()):M=r}}function F(){let t=A.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let L={value:[]},R=I(`next`);function z(e){let t=C.value,n=`next`;for(let r of L.value){if(r===t)break;if(r===e){n=`prev`;break}}R.value=n,ue(e)}function ue(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&p(n,t),r&&p(r,t),i&&p(i,t),x.value=t}function de(t){let{onClose:n}=e;n&&p(n,t)}let fe=!0;function B(){let{value:e}=s;if(!e)return;fe||=!1;let t=`transition-disabled`;e.classList.add(t),O(),e.classList.remove(t)}let H=I(null);function W({transitionDisabled:e}){let t=o.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=T();n&&H.value&&(H.value.style.width=`${n.offsetWidth}px`,H.value.style.height=`${n.offsetHeight}px`,H.value.style.transform=`translateX(${n.offsetLeft-ge(getComputedStyle(t).paddingLeft)}px)`,e&&H.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}me([C],()=>{e.type===`segment`&&ie(()=>{W({transitionDisabled:!1})})}),c(()=>{e.type===`segment`&&W({transitionDisabled:!0})});let G=0;function he(t){if(t.contentRect.width===0&&t.contentRect.height===0||G===t.contentRect.width)return;G=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(fe||e.justifyContent?.startsWith(`space`))&&B(),n!==`segment`){let{placement:t}=e;ye((t===`top`||t===`bottom`?d.value?.$el:f.value)||null)}}let K=ze(he,64);me([()=>e.justifyContent,()=>e.size],()=>{ie(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&B()})});let q=I(!1);function J(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!q.value)s===`top`||s===`bottom`?a<r&&(q.value=!0):o<i&&(q.value=!0);else{let{value:e}=u;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(q.value=!1):o-i>e.$el.offsetHeight&&(q.value=!1)}ye(d.value?.$el||null)}let ve=ze(J,64);function Y(){let{onAdd:t}=e;t&&t(),ie(()=>{let e=T(),{value:t}=d;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function ye(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;h.value=e<=0,g.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;h.value=e<=0,g.value=e+r>=n}}let X=ze(e=>{ye(e.target)},64);pe(Fe,{triggerRef:U(e,`trigger`),tabStyleRef:U(e,`tabStyle`),tabClassRef:U(e,`tabClass`),addTabStyleRef:U(e,`addTabStyle`),addTabClassRef:U(e,`addTabClass`),paneClassRef:U(e,`paneClass`),paneStyleRef:U(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:U(e,`type`),closableRef:U(e,`closable`),valueRef:C,tabChangeIdRef:w,onBeforeLeaveRef:U(e,`onBeforeLeave`),activateTab:z,handleClose:de,handleAdd:Y}),b(()=>{O(),k()}),_e(()=>{let{value:e}=l;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;h.value?e.classList.remove(r):e.classList.add(r),g.value?e.classList.remove(i):e.classList.add(i)});let be={syncBarPosition:()=>{O()}},xe=()=>{W({transitionDisabled:!0})},Z=S(()=>{let{value:t}=v,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:o,closeIconColorHover:s,closeIconColorPressed:c,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:y,closeIconSize:b,closeColorHover:x,closeColorPressed:S,closeBorderRadius:C,[V(`panePadding`,t)]:w,[V(`tabPadding`,r)]:ee,[V(`tabPaddingVertical`,r)]:T,[V(`tabGap`,r)]:te,[V(`tabGap`,`${r}Vertical`)]:E,[V(`tabTextColor`,n)]:D,[V(`tabTextColorActive`,n)]:ne,[V(`tabTextColorHover`,n)]:O,[V(`tabTextColorDisabled`,n)]:re,[V(`tabFontSize`,t)]:k},common:{cubicBezierEaseInOut:A}}=a.value;return{"--n-bezier":A,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":k,"--n-tab-text-color":D,"--n-tab-text-color-active":ne,"--n-tab-text-color-disabled":re,"--n-tab-text-color-hover":O,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":y,"--n-close-icon-size":b,"--n-close-color-hover":x,"--n-close-color-pressed":S,"--n-close-border-radius":C,"--n-close-icon-color":o,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":c,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":ee,"--n-tab-padding-vertical":T,"--n-tab-gap":te,"--n-tab-gap-vertical":E,"--n-pane-padding-left":oe(w,`left`),"--n-pane-padding-right":oe(w,`right`),"--n-pane-padding-top":oe(w,`top`),"--n-pane-padding-bottom":oe(w,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),Q=r?se(`tabs`,S(()=>`${v.value[0]}${e.type[0]}`),Z,e):void 0;return Object.assign({mergedClsPrefix:n,mergedValue:C,renderedNames:new Set,segmentCapsuleElRef:H,tabsPaneWrapperRef:A,tabsElRef:o,barElRef:s,addTabInstRef:u,xScrollInstRef:d,scrollWrapperElRef:l,addTabFixed:q,tabWrapperStyle:ee,handleNavResize:K,mergedSize:v,handleScroll:X,handleTabsResize:ve,cssVars:r?void 0:Z,themeClass:Q?.themeClass,animationDirection:R,renderNameListRef:L,yScrollElRef:f,handleSegmentResize:xe,onAnimationBeforeLeave:N,onAnimationEnter:P,onAnimationAfterEnter:F,onRender:Q?.onRender},be)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,$slots:{default:u,prefix:d,suffix:f}}=this;s?.();let p=u?ne(u()).filter(e=>e.type.__TAB_PANE__===!0):[],m=u?ne(u()).filter(e=>e.type.__TAB__===!0):[],h=!m.length,g=t===`card`,_=t===`segment`,v=!g&&!_&&this.justifyContent;o.value=[];let y=()=>{let t=G(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},v?null:G(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),h?p.map((e,t)=>(o.value.push(e.props.name),We(G(Le,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!v||v===`center`||v===`start`||v===`end`)}),e.children?{default:e.children.tab}:void 0)))):m.map((e,t)=>(o.value.push(e.props.name),We(t!==0&&!v?Ue(e):e))),!r&&i&&g?He(i,(h?p.length:m.length)!==0):null,v?null:G(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return G(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},g&&i?G(de,{onResize:this.handleTabsResize},{default:()=>t}):t,g?G(`div`,{class:`${e}-tabs-pad`}):null,g?null:G(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},b=_?`top`:n;return G(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,v&&`${e}-tabs--flex`,`${e}-tabs--${b}`],style:this.cssVars},G(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${b}`,`${e}-tabs-nav`]},R(d,t=>t&&G(`div`,{class:`${e}-tabs-nav__prefix`},t)),_?G(de,{onResize:this.handleSegmentResize},{default:()=>G(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},G(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},G(`div`,{class:`${e}-tabs-wrapper`},G(`div`,{class:`${e}-tabs-tab`}))),h?p.map((e,t)=>(o.value.push(e.props.name),G(Le,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):m.map((e,t)=>(o.value.push(e.props.name),t===0?e:Ue(e))))}):G(de,{onResize:this.handleNavResize},{default:()=>G(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(b)?G(Oe,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:y}):G(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},y()))}),r&&i&&g?He(i,!0):null,R(f,t=>t&&G(`div`,{class:`${e}-tabs-nav__suffix`},t))),h&&(this.animated&&(b===`top`||b===`bottom`)?G(`div`,{ref:`tabsPaneWrapperRef`,style:l,class:[`${e}-tabs-pane-wrapper`,c]},Ve(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ve(p,this.mergedValue,this.renderedNames)))}});function Ve(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?fe(e,[[u,c]]):e)}}),o?G(T,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function He(e,t){return G(Le,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function Ue(e){let t=_(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function We(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var Ge={class:`settings-section`},Ke=N(h({__name:`DisplaySettings`,setup(e){let t=Z(),n=f(),{t:r}=X();async function i(e){try{await t.saveSection(`display`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(K(),A(`section`,Ge,[j(Q,{label:z(r)(`settings.display.streaming`),hint:z(r)(`settings.display.streamingHint`)},{default:P(()=>[j(z(o),{value:z(t).display.streaming,"onUpdate:value":n[0]||=e=>i({streaming:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),j(Q,{label:z(r)(`settings.display.compact`),hint:z(r)(`settings.display.compactHint`)},{default:P(()=>[j(z(o),{value:z(t).display.compact,"onUpdate:value":n[1]||=e=>i({compact:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),j(Q,{label:z(r)(`settings.display.showReasoning`),hint:z(r)(`settings.display.showReasoningHint`)},{default:P(()=>[j(z(o),{value:z(t).display.show_reasoning,"onUpdate:value":n[2]||=e=>i({show_reasoning:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),j(Q,{label:z(r)(`settings.display.showCost`),hint:z(r)(`settings.display.showCostHint`)},{default:P(()=>[j(z(o),{value:z(t).display.show_cost,"onUpdate:value":n[3]||=e=>i({show_cost:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),j(Q,{label:z(r)(`settings.display.inlineDiffs`),hint:z(r)(`settings.display.inlineDiffsHint`)},{default:P(()=>[j(z(o),{value:z(t).display.inline_diffs,"onUpdate:value":n[4]||=e=>i({inline_diffs:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),j(Q,{label:z(r)(`settings.display.bellOnComplete`),hint:z(r)(`settings.display.bellOnCompleteHint`)},{default:P(()=>[j(z(o),{value:z(t).display.bell_on_complete,"onUpdate:value":n[5]||=e=>i({bell_on_complete:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),j(Q,{label:z(r)(`settings.display.busyInputMode`),hint:z(r)(`settings.display.busyInputModeHint`)},{default:P(()=>[j(z(o),{value:z(t).display.busy_input_mode===`interrupt`,"onUpdate:value":n[6]||=e=>i({busy_input_mode:e?`interrupt`:`off`})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-7e248ea3`]]),qe={class:`settings-section`},Je=N(h({__name:`AgentSettings`,setup(e){let t=Z(),n=f(),{t:r}=X();async function a(e){try{await t.saveSection(`agent`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(K(),A(`section`,qe,[j(Q,{label:z(r)(`settings.agent.maxTurns`),hint:z(r)(`settings.agent.maxTurnsHint`)},{default:P(()=>[j(z(i),{value:z(t).agent.max_turns,min:1,max:200,step:5,size:`small`,class:`input-sm`,"onUpdate:value":n[0]||=e=>e!=null&&a({max_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),j(Q,{label:z(r)(`settings.agent.gatewayTimeout`),hint:z(r)(`settings.agent.gatewayTimeoutHint`)},{default:P(()=>[j(z(i),{value:z(t).agent.gateway_timeout,min:60,max:7200,step:60,size:`small`,class:`input-sm`,"onUpdate:value":n[1]||=e=>e!=null&&a({gateway_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),j(Q,{label:z(r)(`settings.agent.restartDrainTimeout`),hint:z(r)(`settings.agent.restartDrainTimeoutHint`)},{default:P(()=>[j(z(i),{value:z(t).agent.restart_drain_timeout,min:10,max:300,step:10,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&a({restart_drain_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),j(Q,{label:z(r)(`settings.agent.toolEnforcement`),hint:z(r)(`settings.agent.toolEnforcementHint`)},{default:P(()=>[j(z(l),{value:z(t).agent.tool_use_enforcement||`auto`,options:[{label:z(r)(`settings.agent.auto`),value:`auto`},{label:z(r)(`settings.agent.always`),value:`always`},{label:z(r)(`settings.agent.never`),value:`never`}],size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>a({tool_use_enforcement:e}),"show-tooltip":!0},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-e6b6033d`]]),Ye={class:`settings-section`},Xe=N(h({__name:`MemorySettings`,setup(e){let t=Z(),n=f(),{t:r}=X();async function a(e){try{await t.saveSection(`memory`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(K(),A(`section`,Ye,[j(Q,{label:z(r)(`settings.memory.enabled`),hint:z(r)(`settings.memory.enabledHint`)},{default:P(()=>[j(z(o),{value:z(t).memory.memory_enabled,"onUpdate:value":n[0]||=e=>a({memory_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),j(Q,{label:z(r)(`settings.memory.userProfile`),hint:z(r)(`settings.memory.userProfileHint`)},{default:P(()=>[j(z(o),{value:z(t).memory.user_profile_enabled,"onUpdate:value":n[1]||=e=>a({user_profile_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),j(Q,{label:z(r)(`settings.memory.charLimit`),hint:z(r)(`settings.memory.charLimitHint`)},{default:P(()=>[j(z(i),{value:z(t).memory.memory_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&a({memory_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),j(Q,{label:z(r)(`settings.memory.userCharLimit`),hint:z(r)(`settings.memory.userCharLimitHint`)},{default:P(()=>[j(z(i),{value:z(t).memory.user_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>e!=null&&a({user_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0c8e2aa7`]]),Ze={class:`settings-section`},Qe=N(h({__name:`SessionSettings`,setup(e){let t=Z(),n=Ee(),r=f(),{t:a}=X();async function s(e){try{await t.saveSection(`session_reset`,e),r.success(a(`settings.saved`))}catch{r.error(a(`settings.saveFailed`))}}return(e,r)=>(K(),A(`section`,Ze,[j(Q,{label:z(a)(`settings.session.mode`),hint:z(a)(`settings.session.modeHint`)},{default:P(()=>[j(z(l),{value:z(t).sessionReset.mode||`both`,options:[{label:z(a)(`settings.session.modeBoth`),value:`both`},{label:z(a)(`settings.session.modeIdle`),value:`idle`},{label:z(a)(`settings.session.modeHourly`),value:`hourly`}],size:`small`,class:`input-md`,"onUpdate:value":r[0]||=e=>s({mode:e}),"show-tooltip":!0},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),j(Q,{label:z(a)(`settings.session.idleMinutes`),hint:z(a)(`settings.session.idleMinutesHint`)},{default:P(()=>[j(z(i),{value:z(t).sessionReset.idle_minutes,min:10,max:10080,step:30,size:`small`,class:`input-sm`,"onUpdate:value":r[1]||=e=>e!=null&&s({idle_minutes:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),j(Q,{label:z(a)(`settings.session.atHour`),hint:z(a)(`settings.session.atHourHint`)},{default:P(()=>[j(z(i),{value:z(t).sessionReset.at_hour,min:0,max:23,step:1,size:`small`,class:`input-sm`,"onUpdate:value":r[2]||=e=>e!=null&&s({at_hour:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),j(Q,{label:z(a)(`settings.session.liveMonitorHumanOnly`),hint:z(a)(`settings.session.liveMonitorHumanOnlyHint`)},{default:P(()=>[j(z(o),{value:z(n).humanOnly,"onUpdate:value":r[3]||=e=>z(n).setHumanOnly(e)},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-c994f4ae`]]),$e={class:`workspace-settings`},et={key:0,class:`workspace-list`},tt={class:`workspace-info`},nt={class:`workspace-name`},rt=[`title`],it={key:1,class:`workspace-form`},at={class:`form-row`},ot={class:`form-row`},st=N(h({__name:`WorkspaceSettings`,setup(e){let{t}=X(),n=f(),r=I([]),i=I(!1),o=I(!1),l=I(``),u=I(``),p=I(null);async function m(){i.value=!0;try{r.value=await Ce()}finally{i.value=!1}}c(m);function h(){l.value=``,u.value=``,o.value=!1,p.value=null}async function g(){let e=l.value.trim(),i=u.value.trim();if(!(!e||!i))try{if(p.value){let a=await Se(p.value,{name:e,path:i}),o=r.value.findIndex(e=>e.id===p.value);o>=0&&(r.value[o]=a),n.success(t(`common.saved`))}else{let a=await we(e,i);r.value.push(a),n.success(t(`common.saved`))}h()}catch(e){let r=e?.message||``;r.includes(`409`)||r.includes(`already exists`)?n.error(t(`settings.workspace.nameExists`)):r.includes(`400`)||r.includes(`does not exist`)?n.error(t(`settings.workspace.pathNotExists`)):n.error(t(`common.saveFailed`))}}function _(e){p.value=e.id,l.value=e.name,u.value=e.path,o.value=!0}async function v(e){await Te(e)?(r.value=r.value.filter(t=>t.id!==e),n.success(t(`common.saved`))):n.error(t(`common.deleteFailed`))}return(e,n)=>(K(),A(`section`,$e,[o.value?(K(),A(`div`,it,[D(`div`,at,[D(`label`,null,Y(z(t)(`settings.workspace.name`)),1),j(z(x),{value:l.value,"onUpdate:value":n[1]||=e=>l.value=e,size:`small`,placeholder:z(t)(`settings.workspace.namePlaceholder`),onKeydown:ue(g,[`enter`])},null,8,[`value`,`placeholder`])]),D(`div`,ot,[D(`label`,null,Y(z(t)(`settings.workspace.path`)),1),j(z(x),{value:u.value,"onUpdate:value":n[2]||=e=>u.value=e,size:`small`,placeholder:z(t)(`settings.workspace.pathPlaceholder`),onKeydown:ue(g,[`enter`])},null,8,[`value`,`placeholder`])]),j(z(a),{size:`small`},{default:P(()=>[j(z(w),{size:`small`,type:`primary`,disabled:!l.value.trim()||!u.value.trim(),onClick:g},{default:P(()=>[k(Y(p.value?z(t)(`common.update`):z(t)(`common.create`)),1)]),_:1},8,[`disabled`]),j(z(w),{size:`small`,onClick:h},{default:P(()=>[k(Y(z(t)(`common.cancel`)),1)]),_:1})]),_:1})])):(K(),A(`div`,et,[r.value.length===0&&!i.value?(K(),xe(z(y),{key:0,description:z(t)(`settings.workspace.empty`)},null,8,[`description`])):d(``,!0),(K(!0),A(E,null,he(r.value,e=>(K(),A(`div`,{key:e.id,class:`workspace-item`},[D(`div`,tt,[D(`span`,nt,Y(e.name),1),D(`span`,{class:`workspace-path`,title:e.path},Y(e.path),9,rt)]),j(z(a),{size:`small`},{default:P(()=>[j(z(w),{size:`tiny`,quaternary:``,onClick:t=>_(e)},{default:P(()=>[k(Y(z(t)(`common.edit`)),1)]),_:1},8,[`onClick`]),j(z(s),{onPositiveClick:t=>v(e.id)},{trigger:P(()=>[j(z(w),{size:`tiny`,quaternary:``,type:`error`},{default:P(()=>[k(Y(z(t)(`common.delete`)),1)]),_:1})]),default:P(()=>[k(` `+Y(z(t)(`settings.workspace.deleteConfirm`)),1)]),_:1},8,[`onPositiveClick`])]),_:2},1024)]))),128)),j(z(w),{class:`add-btn`,dashed:``,type:`primary`,size:`small`,onClick:n[0]||=e=>{o.value=!0,p.value=null}},{default:P(()=>[k(` + `+Y(z(t)(`settings.workspace.add`)),1)]),_:1})]))]))}}),[[`__scopeId`,`data-v-d6989927`]]),ct={class:`settings-view`},lt={class:`page-header`},ut={class:`header-title`},dt={class:`settings-content`},ft=N(h({__name:`SettingsView`,setup(e){let t=Z(),{t:n}=X();return c(()=>{t.fetchSettings()}),(e,r)=>(K(),A(`div`,ct,[D(`header`,lt,[D(`h2`,ut,Y(z(n)(`settings.title`)),1)]),D(`div`,dt,[j(z(H),{show:z(t).loading||z(t).saving,size:`large`,description:z(n)(`common.loading`)},{default:P(()=>[j(z(Be),{type:`line`,animated:``},{default:P(()=>[j(z($),{name:`display`,tab:z(n)(`settings.tabs.display`)},{default:P(()=>[j(Ke)]),_:1},8,[`tab`]),j(z($),{name:`agent`,tab:z(n)(`settings.tabs.agent`)},{default:P(()=>[j(Je)]),_:1},8,[`tab`]),j(z($),{name:`memory`,tab:z(n)(`settings.tabs.memory`)},{default:P(()=>[j(Xe)]),_:1},8,[`tab`]),j(z($),{name:`session`,tab:z(n)(`settings.tabs.session`)},{default:P(()=>[j(Qe)]),_:1},8,[`tab`]),j(z($),{name:`workspace`,tab:z(n)(`settings.tabs.workspace`)},{default:P(()=>[j(st)]),_:1},8,[`tab`])]),_:1})]),_:1},8,[`show`,`description`])])]))}}),[[`__scopeId`,`data-v-fced8bb3`]]);export{ft as default};