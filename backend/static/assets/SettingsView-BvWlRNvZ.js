import{S as e}from"./_baseFor-DyDN1Ubb.js";import{n as t,t as n}from"./now-RCMWJal9.js";import{t as r}from"./Add-BhwAfhgh.js";import{t as i}from"./InputNumber-BgXbwBFD.js";import{t as a}from"./Space-BNQ4IknR.js";import{t as o}from"./Switch-CtBV6RIQ.js";import{t as s}from"./Popconfirm-DKU_yJIV.js";import{An as c,Br as l,Cn as u,En as d,Fn as f,Fr as p,Gr as m,Hr as h,Jr as g,Kn as _,Kr as v,Lr as y,Mr as b,Nn as x,P as S,Pn as C,R as w,Rr as T,Un as ee,Vr as E,Wn as te,Wr as D,Xr as O,Yr as k,Zr as ne,_n as A,bn as j,c as M,ci as re,dr as N,dt as ie,ei as ae,fn as oe,fr as P,gi as F,hr as I,ii as se,ir as ce,j as le,jr as ue,kr as de,li as L,m as R,mi as z,mr as B,ni as V,nt as fe,or as H,pi as U,pn as pe,pr as W,pt as me,q as G,qn as he,ri as ge,si as _e,ui as ve,ur as K,v as ye,w as q,wn as be,yi as J,yn as xe,yr as Y,zr as X}from"./index-l0jp4Q5E.js";import{t as Z}from"./settings-B79n-MYs.js";import{t as Q}from"./SettingRow-Dq_lRjKO.js";import{a as Se,i as Ce,n as we,r as Te,t as Ee}from"./session-browser-prefs-BpvSnJ1v.js";var De=x(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[x(`&::-webkit-scrollbar`,{width:0,height:0})]),Oe=v({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=U(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=f();return De.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:C,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return g(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),ke=`Expected a function`,Ae=Math.max,je=Math.min;function Me(r,i,a){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof r!=`function`)throw TypeError(ke);i=t(i)||0,e(a)&&(p=!!a.leading,m=`maxWait`in a,c=m?Ae(t(a.maxWait)||0,i):c,h=`trailing`in a?!!a.trailing:h);function g(e){var t=o,n=s;return o=s=void 0,f=e,l=r.apply(n,t),l}function _(e){return f=e,u=setTimeout(b,i),p?g(e):l}function v(e){var t=e-d,n=e-f,r=i-t;return m?je(r,c-n):r}function y(e){var t=e-d,n=e-f;return d===void 0||t>=i||t<0||m&&n>=c}function b(){var e=n();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function C(){return u===void 0?l:x(n())}function w(){var e=n(),t=y(e);if(o=arguments,s=this,d=e,t){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,i),g(d)}return u===void 0&&(u=setTimeout(b,i)),l}return w.cancel=S,w.flush=C,w}var Ne=`Expected a function`;function Pe(t,n,r){var i=!0,a=!0;if(typeof t!=`function`)throw TypeError(Ne);return e(r)&&(i=`leading`in r?!!r.leading:i,a=`trailing`in r?!!r.trailing:a),Me(t,n,{leading:i,maxWait:n,trailing:a})}var Fe=ee(`n-tabs`),Ie={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},$=v({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:Ie,slots:Object,setup(e){let t=k(Fe,null);return t||d(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return g(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Le=v({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},j(Ie,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=k(Fe);return{trigger:d,mergedClosable:T(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:i,label:a,tab:o,value:s,mergedClosable:c,trigger:l,$slots:{default:u}}=this,d=a??o;return g(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?g(`div`,{class:`${t}-tabs-tab-pad`}):null,g(`div`,Object.assign({key:n,"data-name":n,"data-disabled":i?!0:void 0},O({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,i&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),g(`span`,{class:`${t}-tabs-tab__label`},e?g(p,null,g(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),g(ie,{clsPrefix:t},{default:()=>g(r,null)})):u?u():typeof d==`object`?d:xe(d??n)),c&&this.type===`card`?g(fe,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:i}):null))}}),Re=N(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[W(`segment-type`,[N(`tabs-rail`,[K(`&.transition-disabled`,[N(`tabs-capsule`,`
 transition: none;
 `)])])]),W(`top`,[N(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),W(`left`,[N(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),W(`left, right`,`
 flex-direction: row;
 `,[N(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),N(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),W(`right`,`
 flex-direction: row-reverse;
 `,[N(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),N(`tabs-bar`,`
 left: 0;
 `)]),W(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[N(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),N(`tabs-bar`,`
 top: 0;
 `)]),N(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[N(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),N(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[N(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[W(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),K(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),W(`flex`,[N(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[N(`tabs-wrapper`,`
 width: 100%;
 `,[N(`tabs-tab`,`
 margin-right: 0;
 `)])])]),N(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[P(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),P(`prefix`,`padding-right: 16px;`),P(`suffix`,`padding-left: 16px;`)]),W(`top, bottom`,[K(`>`,[N(`tabs-nav`,[N(`tabs-nav-scroll-wrapper`,[K(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),K(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),W(`shadow-start`,[K(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),W(`shadow-end`,[K(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),W(`left, right`,[N(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),K(`>`,[N(`tabs-nav`,[N(`tabs-nav-scroll-wrapper`,[K(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),K(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),W(`shadow-start`,[K(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),W(`shadow-end`,[K(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),N(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[N(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[K(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),K(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),N(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),N(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),N(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),N(`tabs-tab`,`
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
 `,[W(`disabled`,{cursor:`not-allowed`}),P(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),P(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),N(`tabs-bar`,`
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
 `,[K(`&.transition-disabled`,`
 transition: none;
 `),W(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),N(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),N(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[K(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),K(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),K(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),K(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),K(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),N(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),W(`line-type, bar-type`,[N(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[K(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),W(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),W(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),N(`tabs-nav`,[W(`line-type`,[W(`top`,[P(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),N(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),N(`tabs-bar`,`
 bottom: -1px;
 `)]),W(`left`,[P(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),N(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),N(`tabs-bar`,`
 right: -1px;
 `)]),W(`right`,[P(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),N(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),N(`tabs-bar`,`
 left: -1px;
 `)]),W(`bottom`,[P(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),N(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),N(`tabs-bar`,`
 top: -1px;
 `)]),P(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),N(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),N(`tabs-bar`,`
 border-radius: 0;
 `)]),W(`card-type`,[P(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),N(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),N(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),N(`tabs-tab`,`
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
 `,[W(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[P(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),B(`disabled`,[K(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),W(`closable`,`padding-right: 8px;`),W(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),W(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),W(`left, right`,`
 flex-direction: column; 
 `,[P(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),N(`tabs-wrapper`,`
 flex-direction: column;
 `),N(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[N(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),W(`top`,[W(`card-type`,[N(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),P(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),N(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[W(`active`,`
 border-bottom: 1px solid #0000;
 `)]),N(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),N(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),W(`left`,[W(`card-type`,[N(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),P(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),N(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[W(`active`,`
 border-right: 1px solid #0000;
 `)]),N(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),N(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),W(`right`,[W(`card-type`,[N(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),P(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),N(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[W(`active`,`
 border-left: 1px solid #0000;
 `)]),N(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),N(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),W(`bottom`,[W(`card-type`,[N(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),P(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),N(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[W(`active`,`
 border-top: 1px solid #0000;
 `)]),N(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),N(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),ze=Pe,Be=v({name:`Tabs`,props:Object.assign(Object.assign({},me.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=pe(e),a=me(`Tabs`,`-tabs`,Re,ye,e,n),o=U(null),s=U(null),c=U(null),l=U(null),d=U(null),f=U(null),p=U(!0),m=U(!0),h=te(e,[`labelSize`,`size`]),g=T(()=>h.value?h.value:i?.value?.Tabs?.size||`medium`),v=te(e,[`activeName`,`value`]),y=U(v.value??e.defaultValue??(t.default?u(t.default())[0]?.props?.name:null)),b=_(v,y),x={id:0},S=T(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});_e(b,()=>{x.id=0,D(),O()});function C(){let{value:e}=b;return e===null?null:o.value?.querySelector(`[data-name="${e}"]`)}function w(t){if(e.type===`card`)return;let{value:r}=s;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(E([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(E([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function ee(){if(e.type===`card`)return;let{value:t}=s;t&&(t.style.opacity=`0`)}function E(e){let{value:t}=s;if(t)for(let n of e)t.style[n]=``}function D(){if(e.type===`card`)return;let t=C();t?w(t):ee()}function O(){let e=d.value?.$el;if(!e)return;let t=C();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let k=U(null),A=0,j=null;function M(e){let t=k.value;if(t){A=e.getBoundingClientRect().height;let n=`${A}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};j?(r(),j(),j=null):j=r}}function N(e){let t=k.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(A,n)}px`};j?(j(),j=null,r()):j=r}}function ie(){let t=k.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let P={value:[]},F=U(`next`);function se(e){let t=b.value,n=`next`;for(let r of P.value){if(r===t)break;if(r===e){n=`prev`;break}}F.value=n,le(e)}function le(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&be(n,t),r&&be(r,t),i&&be(i,t),y.value=t}function ue(t){let{onClose:n}=e;n&&be(n,t)}let de=!0;function L(){let{value:e}=s;if(!e)return;de||=!1;let t=`transition-disabled`;e.classList.add(t),D(),e.classList.remove(t)}let R=U(null);function B({transitionDisabled:e}){let t=o.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=C();n&&R.value&&(R.value.style.width=`${n.offsetWidth}px`,R.value.style.height=`${n.offsetHeight}px`,R.value.style.transform=`translateX(${n.offsetLeft-ce(getComputedStyle(t).paddingLeft)}px)`,e&&R.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}_e([b],()=>{e.type===`segment`&&ne(()=>{B({transitionDisabled:!1})})}),ae(()=>{e.type===`segment`&&B({transitionDisabled:!0})});let V=0;function fe(t){if(t.contentRect.width===0&&t.contentRect.height===0||V===t.contentRect.width)return;V=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(de||e.justifyContent?.startsWith(`space`))&&L(),n!==`segment`){let{placement:t}=e;J((t===`top`||t===`bottom`?d.value?.$el:f.value)||null)}}let W=ze(fe,64);_e([()=>e.justifyContent,()=>e.size],()=>{ne(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&L()})});let G=U(!1);function ve(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!G.value)s===`top`||s===`bottom`?a<r&&(G.value=!0):o<i&&(G.value=!0);else{let{value:e}=l;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(G.value=!1):o-i>e.$el.offsetHeight&&(G.value=!1)}J(d.value?.$el||null)}let K=ze(ve,64);function q(){let{onAdd:t}=e;t&&t(),ne(()=>{let e=C(),{value:t}=d;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function J(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;p.value=e<=0,m.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;p.value=e<=0,m.value=e+r>=n}}let xe=ze(e=>{J(e.target)},64);ge(Fe,{triggerRef:z(e,`trigger`),tabStyleRef:z(e,`tabStyle`),tabClassRef:z(e,`tabClass`),addTabStyleRef:z(e,`addTabStyle`),addTabClassRef:z(e,`addTabClass`),paneClassRef:z(e,`paneClass`),paneStyleRef:z(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:z(e,`type`),closableRef:z(e,`closable`),valueRef:b,tabChangeIdRef:x,onBeforeLeaveRef:z(e,`onBeforeLeave`),activateTab:se,handleClose:ue,handleAdd:q}),he(()=>{D(),O()}),re(()=>{let{value:e}=c;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;p.value?e.classList.remove(r):e.classList.add(r),m.value?e.classList.remove(i):e.classList.add(i)});let Y={syncBarPosition:()=>{D()}},X=()=>{B({transitionDisabled:!0})},Z=T(()=>{let{value:t}=g,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:o,closeIconColorHover:s,closeIconColorPressed:c,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:_,tabColorSegment:v,closeSize:y,closeIconSize:b,closeColorHover:x,closeColorPressed:S,closeBorderRadius:C,[I(`panePadding`,t)]:w,[I(`tabPadding`,r)]:T,[I(`tabPaddingVertical`,r)]:ee,[I(`tabGap`,r)]:E,[I(`tabGap`,`${r}Vertical`)]:te,[I(`tabTextColor`,n)]:D,[I(`tabTextColorActive`,n)]:O,[I(`tabTextColorHover`,n)]:k,[I(`tabTextColorDisabled`,n)]:ne,[I(`tabFontSize`,t)]:A},common:{cubicBezierEaseInOut:j}}=a.value;return{"--n-bezier":j,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":A,"--n-tab-text-color":D,"--n-tab-text-color-active":O,"--n-tab-text-color-disabled":ne,"--n-tab-text-color-hover":k,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":y,"--n-close-icon-size":b,"--n-close-color-hover":x,"--n-close-color-pressed":S,"--n-close-border-radius":C,"--n-close-icon-color":o,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":c,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":T,"--n-tab-padding-vertical":ee,"--n-tab-gap":E,"--n-tab-gap-vertical":te,"--n-pane-padding-left":H(w,`left`),"--n-pane-padding-right":H(w,`right`),"--n-pane-padding-top":H(w,`top`),"--n-pane-padding-bottom":H(w,`bottom`),"--n-font-weight-strong":_,"--n-tab-color-segment":v}}),Q=r?oe(`tabs`,T(()=>`${g.value[0]}${e.type[0]}`),Z,e):void 0;return Object.assign({mergedClsPrefix:n,mergedValue:b,renderedNames:new Set,segmentCapsuleElRef:R,tabsPaneWrapperRef:k,tabsElRef:o,barElRef:s,addTabInstRef:l,xScrollInstRef:d,scrollWrapperElRef:c,addTabFixed:G,tabWrapperStyle:S,handleNavResize:W,mergedSize:g,handleScroll:xe,handleTabsResize:K,cssVars:r?void 0:Z,themeClass:Q?.themeClass,animationDirection:F,renderNameListRef:P,yScrollElRef:f,handleSegmentResize:X,onAnimationBeforeLeave:M,onAnimationEnter:N,onAnimationAfterEnter:ie,onRender:Q?.onRender},Y)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:l,paneWrapperStyle:d,$slots:{default:f,prefix:p,suffix:m}}=this;s?.();let h=f?u(f()).filter(e=>e.type.__TAB_PANE__===!0):[],_=f?u(f()).filter(e=>e.type.__TAB__===!0):[],v=!_.length,y=t===`card`,b=t===`segment`,x=!y&&!b&&this.justifyContent;o.value=[];let S=()=>{let t=g(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},x?null:g(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),v?h.map((e,t)=>(o.value.push(e.props.name),We(g(Le,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!x||x===`center`||x===`start`||x===`end`)}),e.children?{default:e.children.tab}:void 0)))):_.map((e,t)=>(o.value.push(e.props.name),We(t!==0&&!x?Ue(e):e))),!r&&i&&y?He(i,(v?h.length:_.length)!==0):null,x?null:g(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return g(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},y&&i?g(c,{onResize:this.handleTabsResize},{default:()=>t}):t,y?g(`div`,{class:`${e}-tabs-pad`}):null,y?null:g(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},C=b?`top`:n;return g(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,x&&`${e}-tabs--flex`,`${e}-tabs--${C}`],style:this.cssVars},g(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${C}`,`${e}-tabs-nav`]},A(p,t=>t&&g(`div`,{class:`${e}-tabs-nav__prefix`},t)),b?g(c,{onResize:this.handleSegmentResize},{default:()=>g(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},g(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},g(`div`,{class:`${e}-tabs-wrapper`},g(`div`,{class:`${e}-tabs-tab`}))),v?h.map((e,t)=>(o.value.push(e.props.name),g(Le,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):_.map((e,t)=>(o.value.push(e.props.name),t===0?e:Ue(e))))}):g(c,{onResize:this.handleNavResize},{default:()=>g(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(C)?g(Oe,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:S}):g(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},S()))}),r&&i&&y?He(i,!0):null,A(m,t=>t&&g(`div`,{class:`${e}-tabs-nav__suffix`},t))),v&&(this.animated&&(C===`top`||C===`bottom`)?g(`div`,{ref:`tabsPaneWrapperRef`,style:d,class:[`${e}-tabs-pane-wrapper`,l]},Ve(h,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ve(h,this.mergedValue,this.renderedNames)))}});function Ve(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?ve(e,[[ue,c]]):e)}}),o?g(de,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function He(e,t){return g(Le,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function Ue(e){let t=y(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function We(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var Ge={class:`settings-section`},Ke=M(v({__name:`DisplaySettings`,setup(e){let t=Z(),n=q(),{t:r}=Y();async function i(e){try{await t.saveSection(`display`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(V(),h(`section`,Ge,[m(Q,{label:F(r)(`settings.display.streaming`),hint:F(r)(`settings.display.streamingHint`)},{default:L(()=>[m(F(o),{value:F(t).display.streaming,"onUpdate:value":n[0]||=e=>i({streaming:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),m(Q,{label:F(r)(`settings.display.compact`),hint:F(r)(`settings.display.compactHint`)},{default:L(()=>[m(F(o),{value:F(t).display.compact,"onUpdate:value":n[1]||=e=>i({compact:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),m(Q,{label:F(r)(`settings.display.showReasoning`),hint:F(r)(`settings.display.showReasoningHint`)},{default:L(()=>[m(F(o),{value:F(t).display.show_reasoning,"onUpdate:value":n[2]||=e=>i({show_reasoning:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),m(Q,{label:F(r)(`settings.display.showCost`),hint:F(r)(`settings.display.showCostHint`)},{default:L(()=>[m(F(o),{value:F(t).display.show_cost,"onUpdate:value":n[3]||=e=>i({show_cost:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),m(Q,{label:F(r)(`settings.display.inlineDiffs`),hint:F(r)(`settings.display.inlineDiffsHint`)},{default:L(()=>[m(F(o),{value:F(t).display.inline_diffs,"onUpdate:value":n[4]||=e=>i({inline_diffs:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),m(Q,{label:F(r)(`settings.display.bellOnComplete`),hint:F(r)(`settings.display.bellOnCompleteHint`)},{default:L(()=>[m(F(o),{value:F(t).display.bell_on_complete,"onUpdate:value":n[5]||=e=>i({bell_on_complete:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),m(Q,{label:F(r)(`settings.display.busyInputMode`),hint:F(r)(`settings.display.busyInputModeHint`)},{default:L(()=>[m(F(o),{value:F(t).display.busy_input_mode===`interrupt`,"onUpdate:value":n[6]||=e=>i({busy_input_mode:e?`interrupt`:`off`})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-7e248ea3`]]),qe={class:`settings-section`},Je=M(v({__name:`AgentSettings`,setup(e){let t=Z(),n=q(),{t:r}=Y();async function a(e){try{await t.saveSection(`agent`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(V(),h(`section`,qe,[m(Q,{label:F(r)(`settings.agent.maxTurns`),hint:F(r)(`settings.agent.maxTurnsHint`)},{default:L(()=>[m(F(i),{value:F(t).agent.max_turns,min:1,max:200,step:5,size:`small`,class:`input-sm`,"onUpdate:value":n[0]||=e=>e!=null&&a({max_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),m(Q,{label:F(r)(`settings.agent.gatewayTimeout`),hint:F(r)(`settings.agent.gatewayTimeoutHint`)},{default:L(()=>[m(F(i),{value:F(t).agent.gateway_timeout,min:60,max:7200,step:60,size:`small`,class:`input-sm`,"onUpdate:value":n[1]||=e=>e!=null&&a({gateway_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),m(Q,{label:F(r)(`settings.agent.restartDrainTimeout`),hint:F(r)(`settings.agent.restartDrainTimeoutHint`)},{default:L(()=>[m(F(i),{value:F(t).agent.restart_drain_timeout,min:10,max:300,step:10,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&a({restart_drain_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),m(Q,{label:F(r)(`settings.agent.toolEnforcement`),hint:F(r)(`settings.agent.toolEnforcementHint`)},{default:L(()=>[m(F(le),{value:F(t).agent.tool_use_enforcement||`auto`,options:[{label:F(r)(`settings.agent.auto`),value:`auto`},{label:F(r)(`settings.agent.always`),value:`always`},{label:F(r)(`settings.agent.never`),value:`never`}],size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>a({tool_use_enforcement:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-1f96245d`]]),Ye={class:`settings-section`},Xe=M(v({__name:`MemorySettings`,setup(e){let t=Z(),n=q(),{t:r}=Y();async function a(e){try{await t.saveSection(`memory`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(V(),h(`section`,Ye,[m(Q,{label:F(r)(`settings.memory.enabled`),hint:F(r)(`settings.memory.enabledHint`)},{default:L(()=>[m(F(o),{value:F(t).memory.memory_enabled,"onUpdate:value":n[0]||=e=>a({memory_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),m(Q,{label:F(r)(`settings.memory.userProfile`),hint:F(r)(`settings.memory.userProfileHint`)},{default:L(()=>[m(F(o),{value:F(t).memory.user_profile_enabled,"onUpdate:value":n[1]||=e=>a({user_profile_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),m(Q,{label:F(r)(`settings.memory.charLimit`),hint:F(r)(`settings.memory.charLimitHint`)},{default:L(()=>[m(F(i),{value:F(t).memory.memory_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&a({memory_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),m(Q,{label:F(r)(`settings.memory.userCharLimit`),hint:F(r)(`settings.memory.userCharLimitHint`)},{default:L(()=>[m(F(i),{value:F(t).memory.user_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>e!=null&&a({user_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0c8e2aa7`]]),Ze={class:`settings-section`},Qe=M(v({__name:`SessionSettings`,setup(e){let t=Z(),n=Ee(),r=q(),{t:a}=Y();async function s(e){try{await t.saveSection(`session_reset`,e),r.success(a(`settings.saved`))}catch{r.error(a(`settings.saveFailed`))}}return(e,r)=>(V(),h(`section`,Ze,[m(Q,{label:F(a)(`settings.session.mode`),hint:F(a)(`settings.session.modeHint`)},{default:L(()=>[m(F(le),{value:F(t).sessionReset.mode||`both`,options:[{label:F(a)(`settings.session.modeBoth`),value:`both`},{label:F(a)(`settings.session.modeIdle`),value:`idle`},{label:F(a)(`settings.session.modeHourly`),value:`hourly`}],size:`small`,class:`input-md`,"onUpdate:value":r[0]||=e=>s({mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),m(Q,{label:F(a)(`settings.session.idleMinutes`),hint:F(a)(`settings.session.idleMinutesHint`)},{default:L(()=>[m(F(i),{value:F(t).sessionReset.idle_minutes,min:10,max:10080,step:30,size:`small`,class:`input-sm`,"onUpdate:value":r[1]||=e=>e!=null&&s({idle_minutes:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),m(Q,{label:F(a)(`settings.session.atHour`),hint:F(a)(`settings.session.atHourHint`)},{default:L(()=>[m(F(i),{value:F(t).sessionReset.at_hour,min:0,max:23,step:1,size:`small`,class:`input-sm`,"onUpdate:value":r[2]||=e=>e!=null&&s({at_hour:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),m(Q,{label:F(a)(`settings.session.liveMonitorHumanOnly`),hint:F(a)(`settings.session.liveMonitorHumanOnlyHint`)},{default:L(()=>[m(F(o),{value:F(n).humanOnly,"onUpdate:value":r[3]||=e=>F(n).setHumanOnly(e)},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-3514aeb7`]]),$e={class:`workspace-settings`},et={key:0,class:`workspace-list`},tt={class:`workspace-info`},nt={class:`workspace-name`},rt=[`title`],it={key:1,class:`workspace-form`},at={class:`form-row`},ot={class:`form-row`},st=M(v({__name:`WorkspaceSettings`,setup(e){let{t}=Y(),n=q(),r=U([]),i=U(!1),o=U(!1),c=U(``),u=U(``),d=U(null);async function f(){i.value=!0;try{r.value=await Ce()}finally{i.value=!1}}ae(f);function g(){c.value=``,u.value=``,o.value=!1,d.value=null}async function _(){let e=c.value.trim(),i=u.value.trim();if(!(!e||!i))try{if(d.value){let a=await Se(d.value,{name:e,path:i}),o=r.value.findIndex(e=>e.id===d.value);o>=0&&(r.value[o]=a),n.success(t(`common.saved`))}else{let a=await we(e,i);r.value.push(a),n.success(t(`common.saved`))}g()}catch(e){let r=e?.message||``;r.includes(`409`)||r.includes(`already exists`)?n.error(t(`settings.workspace.nameExists`)):r.includes(`400`)||r.includes(`does not exist`)?n.error(t(`settings.workspace.pathNotExists`)):n.error(t(`common.saveFailed`))}}function v(e){d.value=e.id,c.value=e.name,u.value=e.path,o.value=!0}async function y(e){await Te(e)?(r.value=r.value.filter(t=>t.id!==e),n.success(t(`common.saved`))):n.error(t(`common.deleteFailed`))}return(e,n)=>(V(),h(`section`,$e,[o.value?(V(),h(`div`,it,[X(`div`,at,[X(`label`,null,J(F(t)(`settings.workspace.name`)),1),m(F(w),{value:c.value,"onUpdate:value":n[1]||=e=>c.value=e,size:`small`,placeholder:F(t)(`settings.workspace.namePlaceholder`),onKeydown:b(_,[`enter`])},null,8,[`value`,`placeholder`])]),X(`div`,ot,[X(`label`,null,J(F(t)(`settings.workspace.path`)),1),m(F(w),{value:u.value,"onUpdate:value":n[2]||=e=>u.value=e,size:`small`,placeholder:F(t)(`settings.workspace.pathPlaceholder`),onKeydown:b(_,[`enter`])},null,8,[`value`,`placeholder`])]),m(F(a),{size:`small`},{default:L(()=>[m(F(S),{size:`small`,type:`primary`,disabled:!c.value.trim()||!u.value.trim(),onClick:_},{default:L(()=>[D(J(d.value?F(t)(`common.update`):F(t)(`common.create`)),1)]),_:1},8,[`disabled`]),m(F(S),{size:`small`,onClick:g},{default:L(()=>[D(J(F(t)(`common.cancel`)),1)]),_:1})]),_:1})])):(V(),h(`div`,et,[r.value.length===0&&!i.value?(V(),l(F(G),{key:0,description:F(t)(`settings.workspace.empty`)},null,8,[`description`])):E(``,!0),(V(!0),h(p,null,se(r.value,e=>(V(),h(`div`,{key:e.id,class:`workspace-item`},[X(`div`,tt,[X(`span`,nt,J(e.name),1),X(`span`,{class:`workspace-path`,title:e.path},J(e.path),9,rt)]),m(F(a),{size:`small`},{default:L(()=>[m(F(S),{size:`tiny`,quaternary:``,onClick:t=>v(e)},{default:L(()=>[D(J(F(t)(`common.edit`)),1)]),_:1},8,[`onClick`]),m(F(s),{onPositiveClick:t=>y(e.id)},{trigger:L(()=>[m(F(S),{size:`tiny`,quaternary:``,type:`error`},{default:L(()=>[D(J(F(t)(`common.delete`)),1)]),_:1})]),default:L(()=>[D(` `+J(F(t)(`settings.workspace.deleteConfirm`)),1)]),_:1},8,[`onPositiveClick`])]),_:2},1024)]))),128)),m(F(S),{class:`add-btn`,dashed:``,type:`primary`,size:`small`,onClick:n[0]||=e=>{o.value=!0,d.value=null}},{default:L(()=>[D(` + `+J(F(t)(`settings.workspace.add`)),1)]),_:1})]))]))}}),[[`__scopeId`,`data-v-d6989927`]]),ct={class:`settings-view`},lt={class:`page-header`},ut={class:`header-title`},dt={class:`settings-content`},ft=M(v({__name:`SettingsView`,setup(e){let t=Z(),{t:n}=Y();return ae(()=>{t.fetchSettings()}),(e,r)=>(V(),h(`div`,ct,[X(`header`,lt,[X(`h2`,ut,J(F(n)(`settings.title`)),1)]),X(`div`,dt,[m(F(R),{show:F(t).loading||F(t).saving,size:`large`,description:F(n)(`common.loading`)},{default:L(()=>[m(F(Be),{type:`line`,animated:``},{default:L(()=>[m(F($),{name:`display`,tab:F(n)(`settings.tabs.display`)},{default:L(()=>[m(Ke)]),_:1},8,[`tab`]),m(F($),{name:`agent`,tab:F(n)(`settings.tabs.agent`)},{default:L(()=>[m(Je)]),_:1},8,[`tab`]),m(F($),{name:`memory`,tab:F(n)(`settings.tabs.memory`)},{default:L(()=>[m(Xe)]),_:1},8,[`tab`]),m(F($),{name:`session`,tab:F(n)(`settings.tabs.session`)},{default:L(()=>[m(Qe)]),_:1},8,[`tab`]),m(F($),{name:`workspace`,tab:F(n)(`settings.tabs.workspace`)},{default:L(()=>[m(st)]),_:1},8,[`tab`])]),_:1})]),_:1},8,[`show`,`description`])])]))}}),[[`__scopeId`,`data-v-fced8bb3`]]);export{ft as default};