import{$ as e,A as t,C as n,D as r,E as i,I as a,J as o,K as s,M as c,O as l,P as u,Q as d,R as f,T as p,W as m,Z as h,_ as g,_t as _,b as v,et as y,ft as b,g as x,j as S,lt as C,mt as w,p as T,q as E,r as D,w as O,z as k}from"./router-yvtxos1Q.js";import{C as A,I as j,L as M,N,P,R as ee,c as te,h as ne,m as re,w as F,x as I,z as L}from"./browser-BKQmHxtX.js";import{h as R,m as ie,o as ae,x as oe}from"./Popover-CNA7a6K0.js";import{h as z,l as B,p as se,s as ce}from"./Scrollbar-Dl-T0Hpl.js";import{n as le,o as ue}from"./fade-in-scale-up.cssr-CIdmzsjx.js";import{i as de}from"./Suffix-CCORhX3P.js";import{t as fe}from"./use-compitable-sM8vd-wW.js";import{i as pe,n as me}from"./warn-CBw6BA0d.js";import{t as V}from"./Button-DJR8YBZ4.js";import{O as H}from"./isArrayLikeObject-C1HKlhCU.js";import{n as U,t as W}from"./now-BA45W6Oo.js";import{t as G}from"./Add-D8l0kAQ3.js";import{t as he}from"./Close-AP_3pcoN.js";import{t as K}from"./InputNumber-BKQY5Pnb.js";import{t as ge}from"./Space-4F7ou99z.js";import{t as q}from"./Switch-18wVmu09.js";import{t as _e}from"./Popconfirm-B4DKbAo1.js";import{E as J,L as ve,N as Y,h as ye,i as X,m as Z,q as be,y as xe}from"./index-DGxgQQ9c.js";import{t as Q}from"./SettingRow-DpYjlzx1.js";import{a as Se,i as Ce,n as we,r as Te,t as Ee}from"./session-browser-prefs-C3QEqhfM.js";var De=ie(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[ie(`&::-webkit-scrollbar`,{width:0,height:0})]),Oe=c({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=C(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=F();return De.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:R,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return u(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),ke=`Expected a function`,Ae=Math.max,je=Math.min;function Me(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,f=!0;if(typeof e!=`function`)throw TypeError(ke);t=U(t)||0,H(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?Ae(U(n.maxWait)||0,t):a,f=`trailing`in n?!!n.trailing:f);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function m(e){return l=e,s=setTimeout(_,t),u?p(e):o}function h(e){var n=e-c,r=e-l,i=t-n;return d?je(i,a-r):i}function g(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function _(){var e=W();if(g(e))return v(e);s=setTimeout(_,h(e))}function v(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function y(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function b(){return s===void 0?o:v(W())}function x(){var e=W(),n=g(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return m(c);if(d)return clearTimeout(s),s=setTimeout(_,t),p(c)}return s===void 0&&(s=setTimeout(_,t)),o}return x.cancel=y,x.flush=b,x}var Ne=`Expected a function`;function Pe(e,t,n){var r=!0,i=!0;if(typeof e!=`function`)throw TypeError(Ne);return H(n)&&(r=`leading`in n?!!n.leading:r,i=`trailing`in n?!!n.trailing:i),Me(e,t,{leading:r,maxWait:t,trailing:i})}var Fe=pe(`n-tabs`),Ie={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},$=c({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:Ie,slots:Object,setup(e){let t=a(Fe,null);return t||me(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return u(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Le=c({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},be(Ie,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:o,addTabStyleRef:s,tabClassRef:c,addTabClassRef:l,tabChangeIdRef:u,onBeforeLeaveRef:d,triggerRef:f,handleAdd:p,activateTab:m,handleClose:h}=a(Fe);return{trigger:f,mergedClosable:O(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:o,addStyle:s,tabClass:c,addTabClass:l,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&h(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){p();return}let{name:t}=e,r=++u.id;if(t!==n.value){let{value:i}=d;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&u.id===r&&m(t)}):m(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:a,value:o,mergedClosable:s,trigger:c,$slots:{default:l}}=this,d=i??a;return u(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?u(`div`,{class:`${t}-tabs-tab-pad`}):null,u(`div`,Object.assign({key:n,"data-name":n,"data-disabled":r?!0:void 0},f({class:[`${t}-tabs-tab`,o===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,s&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:c===`click`?this.activateTab:void 0,onMouseenter:c===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),u(`span`,{class:`${t}-tabs-tab__label`},e?u(v,null,u(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),u(ce,{clsPrefix:t},{default:()=>u(G,null)})):l?l():typeof d==`object`?d:le(d??n)),s&&this.type===`card`?u(he,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),Re=P(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[M(`segment-type`,[P(`tabs-rail`,[N(`&.transition-disabled`,[P(`tabs-capsule`,`
 transition: none;
 `)])])]),M(`top`,[P(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),M(`left`,[P(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),M(`left, right`,`
 flex-direction: row;
 `,[P(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),P(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),M(`right`,`
 flex-direction: row-reverse;
 `,[P(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),P(`tabs-bar`,`
 left: 0;
 `)]),M(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[P(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),P(`tabs-bar`,`
 top: 0;
 `)]),P(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[P(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),P(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[P(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[M(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),N(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),M(`flex`,[P(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[P(`tabs-wrapper`,`
 width: 100%;
 `,[P(`tabs-tab`,`
 margin-right: 0;
 `)])])]),P(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[j(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),j(`prefix`,`padding-right: 16px;`),j(`suffix`,`padding-left: 16px;`)]),M(`top, bottom`,[N(`>`,[P(`tabs-nav`,[P(`tabs-nav-scroll-wrapper`,[N(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),N(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),M(`shadow-start`,[N(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),M(`shadow-end`,[N(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),M(`left, right`,[P(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),N(`>`,[P(`tabs-nav`,[P(`tabs-nav-scroll-wrapper`,[N(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),N(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),M(`shadow-start`,[N(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),M(`shadow-end`,[N(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),P(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[P(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[N(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),N(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),P(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),P(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),P(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),P(`tabs-tab`,`
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
 `,[M(`disabled`,{cursor:`not-allowed`}),j(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),j(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),P(`tabs-bar`,`
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
 `,[N(`&.transition-disabled`,`
 transition: none;
 `),M(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),P(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),P(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[N(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),N(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),N(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),N(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),N(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),P(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),M(`line-type, bar-type`,[P(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[N(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),M(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),M(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),P(`tabs-nav`,[M(`line-type`,[M(`top`,[j(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),P(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),P(`tabs-bar`,`
 bottom: -1px;
 `)]),M(`left`,[j(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),P(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),P(`tabs-bar`,`
 right: -1px;
 `)]),M(`right`,[j(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),P(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),P(`tabs-bar`,`
 left: -1px;
 `)]),M(`bottom`,[j(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),P(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),P(`tabs-bar`,`
 top: -1px;
 `)]),j(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),P(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),P(`tabs-bar`,`
 border-radius: 0;
 `)]),M(`card-type`,[j(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),P(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),P(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),P(`tabs-tab`,`
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
 `,[M(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[j(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),ee(`disabled`,[N(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),M(`closable`,`padding-right: 8px;`),M(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),M(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),M(`left, right`,`
 flex-direction: column; 
 `,[j(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),P(`tabs-wrapper`,`
 flex-direction: column;
 `),P(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[P(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),M(`top`,[M(`card-type`,[P(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),j(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),P(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[M(`active`,`
 border-bottom: 1px solid #0000;
 `)]),P(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),P(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),M(`left`,[M(`card-type`,[P(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),j(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),P(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[M(`active`,`
 border-right: 1px solid #0000;
 `)]),P(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),P(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),M(`right`,[M(`card-type`,[P(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),j(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),P(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[M(`active`,`
 border-left: 1px solid #0000;
 `)]),P(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),P(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),M(`bottom`,[M(`card-type`,[P(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),j(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),P(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[M(`active`,`
 border-top: 1px solid #0000;
 `)]),P(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),P(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),ze=Pe,Be=c({name:`Tabs`,props:Object.assign(Object.assign({},te.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=ne(e),a=te(`Tabs`,`-tabs`,Re,xe,e,n),o=C(null),s=C(null),c=C(null),l=C(null),u=C(null),f=C(null),p=C(!0),g=C(!0),_=fe(e,[`labelSize`,`size`]),v=O(()=>_.value?_.value:i?.value?.Tabs?.size||`medium`),y=fe(e,[`activeName`,`value`]),x=C(y.value??e.defaultValue??(t.default?ue(t.default())[0]?.props?.name:null)),S=de(y,x),w={id:0},T=O(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});h(S,()=>{w.id=0,P(),ee()});function D(){let{value:e}=S;return e===null?null:o.value?.querySelector(`[data-name="${e}"]`)}function j(t){if(e.type===`card`)return;let{value:r}=s;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(N([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(N([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function M(){if(e.type===`card`)return;let{value:t}=s;t&&(t.style.opacity=`0`)}function N(e){let{value:t}=s;if(t)for(let n of e)t.style[n]=``}function P(){if(e.type===`card`)return;let t=D();t?j(t):M()}function ee(){let e=u.value?.$el;if(!e)return;let t=D();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let F=C(null),I=0,R=null;function ie(e){let t=F.value;if(t){I=e.getBoundingClientRect().height;let n=`${I}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};R?(r(),R(),R=null):R=r}}function ae(e){let t=F.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(I,n)}px`};R?(R(),R=null,r()):R=r}}function B(){let t=F.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let ce={value:[]},le=C(`next`);function pe(e){let t=S.value,n=`next`;for(let r of ce.value){if(r===t)break;if(r===e){n=`prev`;break}}le.value=n,me(e)}function me(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&A(n,t),r&&A(r,t),i&&A(i,t),x.value=t}function V(t){let{onClose:n}=e;n&&A(n,t)}let H=!0;function U(){let{value:e}=s;if(!e)return;H||=!1;let t=`transition-disabled`;e.classList.add(t),P(),e.classList.remove(t)}let W=C(null);function G({transitionDisabled:e}){let t=o.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=D();n&&W.value&&(W.value.style.width=`${n.offsetWidth}px`,W.value.style.height=`${n.offsetHeight}px`,W.value.style.transform=`translateX(${n.offsetLeft-se(getComputedStyle(t).paddingLeft)}px)`,e&&W.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}h([S],()=>{e.type===`segment`&&k(()=>{G({transitionDisabled:!1})})}),m(()=>{e.type===`segment`&&G({transitionDisabled:!0})});let he=0;function K(t){if(t.contentRect.width===0&&t.contentRect.height===0||he===t.contentRect.width)return;he=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(H||e.justifyContent?.startsWith(`space`))&&U(),n!==`segment`){let{placement:t}=e;Y((t===`top`||t===`bottom`?u.value?.$el:f.value)||null)}}let ge=ze(K,64);h([()=>e.justifyContent,()=>e.size],()=>{k(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&U()})});let q=C(!1);function _e(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!q.value)s===`top`||s===`bottom`?a<r&&(q.value=!0):o<i&&(q.value=!0);else{let{value:e}=l;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(q.value=!1):o-i>e.$el.offsetHeight&&(q.value=!1)}Y(u.value?.$el||null)}let J=ze(_e,64);function ve(){let{onAdd:t}=e;t&&t(),k(()=>{let e=D(),{value:t}=u;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function Y(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;p.value=e<=0,g.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;p.value=e<=0,g.value=e+r>=n}}let ye=ze(e=>{Y(e.target)},64);E(Fe,{triggerRef:b(e,`trigger`),tabStyleRef:b(e,`tabStyle`),tabClassRef:b(e,`tabClass`),addTabStyleRef:b(e,`addTabStyle`),addTabClassRef:b(e,`addTabClass`),paneClassRef:b(e,`paneClass`),paneStyleRef:b(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:b(e,`type`),closableRef:b(e,`closable`),valueRef:S,tabChangeIdRef:w,onBeforeLeaveRef:b(e,`onBeforeLeave`),activateTab:pe,handleClose:V,handleAdd:ve}),oe(()=>{P(),ee()}),d(()=>{let{value:e}=c;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;p.value?e.classList.remove(r):e.classList.add(r),g.value?e.classList.remove(i):e.classList.add(i)});let X={syncBarPosition:()=>{P()}},Z=()=>{G({transitionDisabled:!0})},be=O(()=>{let{value:t}=v,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:o,closeIconColorHover:s,closeIconColorPressed:c,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:y,closeIconSize:b,closeColorHover:x,closeColorPressed:S,closeBorderRadius:C,[L(`panePadding`,t)]:w,[L(`tabPadding`,r)]:T,[L(`tabPaddingVertical`,r)]:E,[L(`tabGap`,r)]:D,[L(`tabGap`,`${r}Vertical`)]:O,[L(`tabTextColor`,n)]:k,[L(`tabTextColorActive`,n)]:A,[L(`tabTextColorHover`,n)]:j,[L(`tabTextColorDisabled`,n)]:M,[L(`tabFontSize`,t)]:N},common:{cubicBezierEaseInOut:P}}=a.value;return{"--n-bezier":P,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":N,"--n-tab-text-color":k,"--n-tab-text-color-active":A,"--n-tab-text-color-disabled":M,"--n-tab-text-color-hover":j,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":y,"--n-close-icon-size":b,"--n-close-color-hover":x,"--n-close-color-pressed":S,"--n-close-border-radius":C,"--n-close-icon-color":o,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":c,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":T,"--n-tab-padding-vertical":E,"--n-tab-gap":D,"--n-tab-gap-vertical":O,"--n-pane-padding-left":z(w,`left`),"--n-pane-padding-right":z(w,`right`),"--n-pane-padding-top":z(w,`top`),"--n-pane-padding-bottom":z(w,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),Q=r?re(`tabs`,O(()=>`${v.value[0]}${e.type[0]}`),be,e):void 0;return Object.assign({mergedClsPrefix:n,mergedValue:S,renderedNames:new Set,segmentCapsuleElRef:W,tabsPaneWrapperRef:F,tabsElRef:o,barElRef:s,addTabInstRef:l,xScrollInstRef:u,scrollWrapperElRef:c,addTabFixed:q,tabWrapperStyle:T,handleNavResize:ge,mergedSize:v,handleScroll:ye,handleTabsResize:J,cssVars:r?void 0:be,themeClass:Q?.themeClass,animationDirection:le,renderNameListRef:ce,yScrollElRef:f,handleSegmentResize:Z,onAnimationBeforeLeave:ie,onAnimationEnter:ae,onAnimationAfterEnter:B,onRender:Q?.onRender},X)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,$slots:{default:d,prefix:f,suffix:p}}=this;s?.();let m=d?ue(d()).filter(e=>e.type.__TAB_PANE__===!0):[],h=d?ue(d()).filter(e=>e.type.__TAB__===!0):[],g=!h.length,_=t===`card`,v=t===`segment`,y=!_&&!v&&this.justifyContent;o.value=[];let b=()=>{let t=u(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},y?null:u(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),g?m.map((e,t)=>(o.value.push(e.props.name),We(u(Le,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!y||y===`center`||y===`start`||y===`end`)}),e.children?{default:e.children.tab}:void 0)))):h.map((e,t)=>(o.value.push(e.props.name),We(t!==0&&!y?Ue(e):e))),!r&&i&&_?He(i,(g?m.length:h.length)!==0):null,y?null:u(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return u(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},_&&i?u(B,{onResize:this.handleTabsResize},{default:()=>t}):t,_?u(`div`,{class:`${e}-tabs-pad`}):null,_?null:u(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},x=v?`top`:n;return u(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,y&&`${e}-tabs--flex`,`${e}-tabs--${x}`],style:this.cssVars},u(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${x}`,`${e}-tabs-nav`]},I(f,t=>t&&u(`div`,{class:`${e}-tabs-nav__prefix`},t)),v?u(B,{onResize:this.handleSegmentResize},{default:()=>u(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},u(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},u(`div`,{class:`${e}-tabs-wrapper`},u(`div`,{class:`${e}-tabs-tab`}))),g?m.map((e,t)=>(o.value.push(e.props.name),u(Le,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):h.map((e,t)=>(o.value.push(e.props.name),t===0?e:Ue(e))))}):u(B,{onResize:this.handleNavResize},{default:()=>u(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(x)?u(Oe,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:b}):u(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},b()))}),r&&i&&_?He(i,!0):null,I(p,t=>t&&u(`div`,{class:`${e}-tabs-nav__suffix`},t))),g&&(this.animated&&(x===`top`||x===`bottom`)?u(`div`,{ref:`tabsPaneWrapperRef`,style:l,class:[`${e}-tabs-pane-wrapper`,c]},Ve(m,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ve(m,this.mergedValue,this.renderedNames)))}});function Ve(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?y(e,[[x,c]]):e)}}),o?u(T,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function He(e,t){return u(Le,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function Ue(e){let t=n(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function We(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var Ge={class:`settings-section`},Ke=Z(c({__name:`DisplaySettings`,setup(t){let n=X(),r=J(),{t:i}=D();async function a(e){try{await n.saveSection(`display`,e),r.success(i(`settings.saved`))}catch{r.error(i(`settings.saveFailed`))}}return(t,r)=>(s(),l(`section`,Ge,[S(Q,{label:w(i)(`settings.display.streaming`),hint:w(i)(`settings.display.streamingHint`)},{default:e(()=>[S(w(q),{value:w(n).display.streaming,"onUpdate:value":r[0]||=e=>a({streaming:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.display.compact`),hint:w(i)(`settings.display.compactHint`)},{default:e(()=>[S(w(q),{value:w(n).display.compact,"onUpdate:value":r[1]||=e=>a({compact:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.display.showReasoning`),hint:w(i)(`settings.display.showReasoningHint`)},{default:e(()=>[S(w(q),{value:w(n).display.show_reasoning,"onUpdate:value":r[2]||=e=>a({show_reasoning:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.display.showCost`),hint:w(i)(`settings.display.showCostHint`)},{default:e(()=>[S(w(q),{value:w(n).display.show_cost,"onUpdate:value":r[3]||=e=>a({show_cost:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.display.bellOnComplete`),hint:w(i)(`settings.display.bellOnCompleteHint`)},{default:e(()=>[S(w(q),{value:w(n).display.bell_on_complete,"onUpdate:value":r[4]||=e=>a({bell_on_complete:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.display.busyInputMode`),hint:w(i)(`settings.display.busyInputModeHint`)},{default:e(()=>[S(w(q),{value:w(n).display.busy_input_mode===`interrupt`,"onUpdate:value":r[5]||=e=>a({busy_input_mode:e?`interrupt`:`off`})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0d401d9f`]]),qe={class:`settings-section`},Je={class:`config-block`},Ye={class:`config-block-title`},Xe={class:`config-block`},Ze={class:`config-block-title`},Qe=Z(c({__name:`AgentSettings`,setup(t){let n=X(),r=J(),{t:i}=D();async function a(e){try{await n.saveSection(`agent`,e),r.success(i(`settings.saved`))}catch{r.error(i(`settings.saveFailed`))}}async function o(e){try{await n.saveSection(`delegation`,e),r.success(i(`settings.saved`))}catch{r.error(i(`settings.saveFailed`))}}return(t,r)=>(s(),l(`section`,qe,[p(`div`,Je,[p(`h4`,Ye,_(w(i)(`settings.agent.basic`,`基础`)),1),S(Q,{label:w(i)(`settings.agent.maxTurns`),hint:w(i)(`settings.agent.maxTurnsHint`)},{default:e(()=>[S(w(K),{value:w(n).agent.max_turns,min:1,max:200,step:5,size:`small`,class:`input-sm`,"onUpdate:value":r[0]||=e=>e!=null&&a({max_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.agent.gatewayTimeout`),hint:w(i)(`settings.agent.gatewayTimeoutHint`)},{default:e(()=>[S(w(K),{value:w(n).agent.gateway_timeout,min:60,max:7200,step:60,size:`small`,class:`input-sm`,"onUpdate:value":r[1]||=e=>e!=null&&a({gateway_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.agent.restartDrainTimeout`),hint:w(i)(`settings.agent.restartDrainTimeoutHint`)},{default:e(()=>[S(w(K),{value:w(n).agent.restart_drain_timeout,min:10,max:300,step:10,size:`small`,class:`input-sm`,"onUpdate:value":r[2]||=e=>e!=null&&a({restart_drain_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.agent.toolEnforcement`),hint:w(i)(`settings.agent.toolEnforcementHint`)},{default:e(()=>[S(w(Y),{value:w(n).agent.tool_use_enforcement||`auto`,options:[{label:w(i)(`settings.agent.auto`),value:`auto`},{label:w(i)(`settings.agent.always`),value:`always`},{label:w(i)(`settings.agent.never`),value:`never`}],size:`small`,class:`input-sm`,"show-tooltip":!0,"onUpdate:value":r[3]||=e=>a({tool_use_enforcement:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`])]),p(`div`,Xe,[p(`h4`,Ze,_(w(i)(`settings.agent.delegation`,`委托`)),1),S(Q,{label:w(i)(`settings.agent.maxConcurrentChildren`),hint:w(i)(`settings.agent.maxConcurrentChildrenHint`)},{default:e(()=>[S(w(K),{value:w(n).delegation.max_concurrent_children,min:1,max:10,step:1,size:`small`,class:`input-sm`,"onUpdate:value":r[4]||=e=>e!=null&&o({max_concurrent_children:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.agent.maxSpawnDepth`),hint:w(i)(`settings.agent.maxSpawnDepthHint`)},{default:e(()=>[S(w(K),{value:w(n).delegation.max_spawn_depth,min:1,max:5,step:1,size:`small`,class:`input-sm`,"onUpdate:value":r[5]||=e=>e!=null&&o({max_spawn_depth:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.agent.orchestratorEnabled`),hint:w(i)(`settings.agent.orchestratorEnabledHint`)},{default:e(()=>[S(w(q),{value:w(n).delegation.orchestrator_enabled,"onUpdate:value":r[6]||=e=>o({orchestrator_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])])]))}}),[[`__scopeId`,`data-v-4dde7a12`]]),$e={class:`settings-section`},et={class:`config-block`},tt={class:`config-block-title`},nt={class:`config-block`},rt={class:`config-block-title`},it={class:`config-block`},at={class:`config-block-title`},ot=Z(c({__name:`SessionSettings`,setup(t){let n=X(),r=Ee(),i=J(),{t:a}=D();async function o(e){try{await n.saveSection(`session_reset`,e),i.success(a(`settings.saved`))}catch{i.error(a(`settings.saveFailed`))}}async function c(e){try{await n.saveSection(`sessions`,e),i.success(a(`settings.saved`))}catch{i.error(a(`settings.saveFailed`))}}return(t,i)=>(s(),l(`section`,$e,[p(`div`,et,[p(`h4`,tt,_(w(a)(`settings.session.resetPolicy`,`重置策略`)),1),S(Q,{label:w(a)(`settings.session.mode`),hint:w(a)(`settings.session.modeHint`)},{default:e(()=>[S(w(Y),{value:w(n).sessionReset.mode||`both`,options:[{label:w(a)(`settings.session.modeBoth`),value:`both`},{label:w(a)(`settings.session.modeIdle`),value:`idle`},{label:w(a)(`settings.session.modeHourly`),value:`hourly`}],size:`small`,class:`input-md`,"onUpdate:value":i[0]||=e=>o({mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(a)(`settings.session.idleMinutes`),hint:w(a)(`settings.session.idleMinutesHint`)},{default:e(()=>[S(w(K),{value:w(n).sessionReset.idle_minutes,min:10,max:10080,step:30,size:`small`,class:`input-sm`,"onUpdate:value":i[1]||=e=>e!=null&&o({idle_minutes:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(a)(`settings.session.atHour`),hint:w(a)(`settings.session.atHourHint`)},{default:e(()=>[S(w(K),{value:w(n).sessionReset.at_hour,min:0,max:23,step:1,size:`small`,class:`input-sm`,"onUpdate:value":i[2]||=e=>e!=null&&o({at_hour:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]),p(`div`,nt,[p(`h4`,rt,_(w(a)(`settings.session.liveMonitor`,`实时监看`)),1),S(Q,{label:w(a)(`settings.session.liveMonitorHumanOnly`),hint:w(a)(`settings.session.liveMonitorHumanOnlyHint`)},{default:e(()=>[S(w(q),{value:w(r).humanOnly,"onUpdate:value":i[3]||=e=>w(r).setHumanOnly(e)},null,8,[`value`])]),_:1},8,[`label`,`hint`])]),p(`div`,it,[p(`h4`,at,_(w(a)(`settings.session.retention`,`保留`)),1),S(Q,{label:w(a)(`settings.session.retentionDays`),hint:w(a)(`settings.session.retentionDaysHint`)},{default:e(()=>[S(w(K),{value:w(n).sessions.retention_days,min:1,max:365,step:1,size:`small`,class:`input-sm`,"onUpdate:value":i[4]||=e=>e!=null&&c({retention_days:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(a)(`settings.session.autoPrune`),hint:w(a)(`settings.session.autoPruneHint`)},{default:e(()=>[S(w(q),{value:w(n).sessions.auto_prune,"onUpdate:value":i[5]||=e=>c({auto_prune:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(a)(`settings.session.vacuumAfterPrune`),hint:w(a)(`settings.session.vacuumAfterPruneHint`)},{default:e(()=>[S(w(q),{value:w(n).sessions.vacuum_after_prune,"onUpdate:value":i[6]||=e=>c({vacuum_after_prune:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])])]))}}),[[`__scopeId`,`data-v-eb1104c9`]]),st={class:`settings-section`},ct={class:`config-block`},lt={class:`config-block-title`},ut={class:`config-block`},dt={class:`config-block-title`},ft=Z(c({__name:`MemorySettings`,setup(t){let n=X(),r=J(),{t:i}=D();async function a(e){try{await n.saveSection(`memory`,e),r.success(i(`settings.saved`))}catch{r.error(i(`settings.saveFailed`))}}return(t,r)=>(s(),l(`section`,st,[p(`div`,ct,[p(`div`,lt,_(w(i)(`settings.memory.basic`,`基础`)),1),S(Q,{label:w(i)(`settings.memory.enabled`),hint:w(i)(`settings.memory.enabledHint`)},{default:e(()=>[S(w(q),{value:w(n).memory.memory_enabled,"onUpdate:value":r[0]||=e=>a({memory_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.memory.userProfile`),hint:w(i)(`settings.memory.userProfileHint`)},{default:e(()=>[S(w(q),{value:w(n).memory.user_profile_enabled,"onUpdate:value":r[1]||=e=>a({user_profile_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.memory.charLimit`),hint:w(i)(`settings.memory.charLimitHint`)},{default:e(()=>[S(w(K),{value:w(n).memory.memory_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":r[2]||=e=>e!=null&&a({memory_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.memory.userCharLimit`),hint:w(i)(`settings.memory.userCharLimitHint`)},{default:e(()=>[S(w(K),{value:w(n).memory.user_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":r[3]||=e=>e!=null&&a({user_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]),p(`div`,ut,[p(`div`,dt,_(w(i)(`settings.memory.advanced`,`高级`)),1),S(Q,{label:w(i)(`settings.memory.nudgeInterval`),hint:w(i)(`settings.memory.nudgeIntervalHint`)},{default:e(()=>[S(w(K),{value:w(n).memory.nudge_interval,min:1,max:50,step:1,size:`small`,class:`input-sm`,"onUpdate:value":r[4]||=e=>e!=null&&a({nudge_interval:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.memory.retrievalThreshold`),hint:w(i)(`settings.memory.retrievalThresholdHint`)},{default:e(()=>[S(w(K),{value:w(n).memory.retrieval_threshold,min:0,max:1,step:.05,size:`small`,class:`input-sm`,"onUpdate:value":r[5]||=e=>e!=null&&a({retrieval_threshold:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.memory.maxMemoryEntries`),hint:w(i)(`settings.memory.maxMemoryEntriesHint`)},{default:e(()=>[S(w(K),{value:w(n).memory.max_memory_entries,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":r[6]||=e=>e!=null&&a({max_memory_entries:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.memory.flushMinTurns`),hint:w(i)(`settings.memory.flushMinTurnsHint`)},{default:e(()=>[S(w(K),{value:w(n).memory.flush_min_turns,min:1,max:50,step:1,size:`small`,class:`input-sm`,"onUpdate:value":r[7]||=e=>e!=null&&a({flush_min_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])])]))}}),[[`__scopeId`,`data-v-e0643033`]]),pt={class:`settings-section`},mt={class:`config-block`},ht={class:`config-block-title`},gt={class:`config-block`},_t={class:`config-block-title`},vt={class:`config-block`},yt={class:`config-block-title`},bt=Z(c({__name:`SafetyApprovalSettings`,setup(t){let n=X(),r=J(),{t:i}=D();async function a(e){try{await n.saveSection(`approvals`,e),r.success(i(`settings.saved`))}catch{r.error(i(`settings.saveFailed`))}}async function o(e){try{await n.saveSection(`human_delay`,e),r.success(i(`settings.saved`))}catch{r.error(i(`settings.saveFailed`))}}async function c(e){try{await n.saveSection(`security`,e),r.success(i(`settings.saved`))}catch{r.error(i(`settings.saveFailed`))}}return(t,r)=>(s(),l(`section`,pt,[p(`div`,mt,[p(`h4`,ht,_(w(i)(`settings.approvals.approvalMode`)),1),S(Q,{label:w(i)(`settings.approvals.mode`),hint:w(i)(`settings.approvals.modeHint`)},{default:e(()=>[S(w(Y),{value:w(n).approvals.mode||`manual`,options:[{label:w(i)(`settings.approvals.manual`),value:`manual`},{label:w(i)(`settings.approvals.autoOff`),value:`auto-off`}],size:`small`,class:`input-sm`,"onUpdate:value":r[0]||=e=>a({mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.approvals.cronMode`),hint:w(i)(`settings.approvals.cronModeHint`)},{default:e(()=>[S(w(Y),{value:w(n).approvals.cron_mode||`deny`,options:[{label:w(i)(`settings.approvals.deny`),value:`deny`},{label:w(i)(`settings.approvals.allow`),value:`allow`},{label:w(i)(`settings.approvals.manual`),value:`manual`}],size:`small`,class:`input-sm`,"onUpdate:value":r[1]||=e=>a({cron_mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.approvals.timeout`),hint:w(i)(`settings.approvals.timeoutHint`)},{default:e(()=>[S(w(K),{value:w(n).approvals.timeout,min:10,max:600,step:10,size:`small`,class:`input-sm`,"onUpdate:value":r[2]||=e=>e!=null&&a({timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]),p(`div`,gt,[p(`h4`,_t,_(w(i)(`settings.humanDelay.humanDelay`)),1),S(Q,{label:w(i)(`settings.humanDelay.mode`),hint:w(i)(`settings.humanDelay.modeHint`)},{default:e(()=>[S(w(Y),{value:w(n).humanDelay.mode||`off`,options:[{label:w(i)(`settings.humanDelay.off`),value:`off`},{label:w(i)(`settings.humanDelay.random`),value:`random`}],size:`small`,class:`input-sm`,"onUpdate:value":r[3]||=e=>o({mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.humanDelay.minMs`),hint:w(i)(`settings.humanDelay.minMsHint`)},{default:e(()=>[S(w(K),{value:w(n).humanDelay.min_ms,min:100,max:5e3,step:100,size:`small`,class:`input-sm`,"onUpdate:value":r[4]||=e=>e!=null&&o({min_ms:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.humanDelay.maxMs`),hint:w(i)(`settings.humanDelay.maxMsHint`)},{default:e(()=>[S(w(K),{value:w(n).humanDelay.max_ms,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":r[5]||=e=>e!=null&&o({max_ms:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]),p(`div`,vt,[p(`h4`,yt,_(w(i)(`settings.security.securityBlock`)),1),S(Q,{label:w(i)(`settings.security.redactSecrets`),hint:w(i)(`settings.security.redactSecretsHint`)},{default:e(()=>[S(w(q),{value:w(n).security.redact_secrets,"onUpdate:value":r[6]||=e=>c({redact_secrets:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),S(Q,{label:w(i)(`settings.security.allowPrivateUrls`),hint:w(i)(`settings.security.allowPrivateUrlsHint`)},{default:e(()=>[S(w(q),{value:w(n).security.allow_private_urls,"onUpdate:value":r[7]||=e=>c({allow_private_urls:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])])]))}}),[[`__scopeId`,`data-v-90756d57`]]),xt={class:`workspace-settings`},St={key:0,class:`workspace-list`},Ct={class:`workspace-info`},wt={class:`workspace-name`},Tt=[`title`],Et={key:1,class:`workspace-form`},Dt={class:`form-row`},Ot={class:`form-row`},kt=Z(c({__name:`WorkspaceSettings`,setup(n){let{t:a}=D(),c=J(),u=C([]),d=C(!1),f=C(!1),h=C(``),y=C(``),b=C(null);async function x(){d.value=!0;try{u.value=await Ce()}finally{d.value=!1}}m(x);function T(){h.value=``,y.value=``,f.value=!1,b.value=null}async function E(){let e=h.value.trim(),t=y.value.trim();if(!(!e||!t))try{if(b.value){let n=await Se(b.value,{name:e,path:t}),r=u.value.findIndex(e=>e.id===b.value);r>=0&&(u.value[r]=n),c.success(a(`common.saved`))}else{let n=await we(e,t);u.value.push(n),c.success(a(`common.saved`))}T()}catch(e){let t=e?.message||``;t.includes(`409`)||t.includes(`already exists`)?c.error(a(`settings.workspace.nameExists`)):t.includes(`400`)||t.includes(`does not exist`)?c.error(a(`settings.workspace.pathNotExists`)):c.error(a(`common.saveFailed`))}}function O(e){b.value=e.id,h.value=e.name,y.value=e.path,f.value=!0}async function k(e){await Te(e)?(u.value=u.value.filter(t=>t.id!==e),c.success(a(`common.saved`))):c.error(a(`common.deleteFailed`))}return(n,c)=>(s(),l(`section`,xt,[f.value?(s(),l(`div`,Et,[p(`div`,Dt,[p(`label`,null,_(w(a)(`settings.workspace.name`)),1),S(w(ve),{value:h.value,"onUpdate:value":c[1]||=e=>h.value=e,size:`small`,placeholder:w(a)(`settings.workspace.namePlaceholder`),onKeydown:g(E,[`enter`])},null,8,[`value`,`placeholder`])]),p(`div`,Ot,[p(`label`,null,_(w(a)(`settings.workspace.path`)),1),S(w(ve),{value:y.value,"onUpdate:value":c[2]||=e=>y.value=e,size:`small`,placeholder:w(a)(`settings.workspace.pathPlaceholder`),onKeydown:g(E,[`enter`])},null,8,[`value`,`placeholder`])]),S(w(ge),{size:`small`},{default:e(()=>[S(w(V),{size:`small`,type:`primary`,disabled:!h.value.trim()||!y.value.trim(),onClick:E},{default:e(()=>[t(_(b.value?w(a)(`common.update`):w(a)(`common.create`)),1)]),_:1},8,[`disabled`]),S(w(V),{size:`small`,onClick:T},{default:e(()=>[t(_(w(a)(`common.cancel`)),1)]),_:1})]),_:1})])):(s(),l(`div`,St,[u.value.length===0&&!d.value?(s(),i(w(ae),{key:0,description:w(a)(`settings.workspace.empty`)},null,8,[`description`])):r(``,!0),(s(!0),l(v,null,o(u.value,n=>(s(),l(`div`,{key:n.id,class:`workspace-item`},[p(`div`,Ct,[p(`span`,wt,_(n.name),1),p(`span`,{class:`workspace-path`,title:n.path},_(n.path),9,Tt)]),S(w(ge),{size:`small`},{default:e(()=>[S(w(V),{size:`tiny`,quaternary:``,onClick:e=>O(n)},{default:e(()=>[t(_(w(a)(`common.edit`)),1)]),_:1},8,[`onClick`]),S(w(_e),{"positive-text":w(a)(`common.confirm`),"negative-text":w(a)(`common.cancel`),onPositiveClick:e=>k(n.id)},{trigger:e(()=>[S(w(V),{size:`tiny`,quaternary:``,type:`error`},{default:e(()=>[t(_(w(a)(`common.delete`)),1)]),_:1})]),default:e(()=>[t(` `+_(w(a)(`settings.workspace.deleteConfirm`)),1)]),_:1},8,[`positive-text`,`negative-text`,`onPositiveClick`])]),_:2},1024)]))),128)),S(w(V),{class:`add-btn`,dashed:``,type:`primary`,size:`small`,onClick:c[0]||=e=>{f.value=!0,b.value=null}},{default:e(()=>[t(` + `+_(w(a)(`settings.workspace.add`)),1)]),_:1})]))]))}}),[[`__scopeId`,`data-v-b65db1e5`]]),At={class:`settings-view`},jt={class:`page-header`},Mt={class:`header-title`},Nt={class:`settings-content`},Pt=Z(c({__name:`SettingsView`,setup(t){let n=X(),{t:r}=D();return m(()=>{n.fetchSettings()}),(t,i)=>(s(),l(`div`,At,[p(`header`,jt,[p(`h2`,Mt,_(w(r)(`settings.title`)),1)]),p(`div`,Nt,[S(w(ye),{show:w(n).loading||w(n).saving,size:`large`,description:w(r)(`common.loading`)},{default:e(()=>[S(w(Be),{type:`line`,animated:``},{default:e(()=>[S(w($),{name:`display`,tab:w(r)(`settings.tabs.display`)},{default:e(()=>[S(Ke)]),_:1},8,[`tab`]),S(w($),{name:`agent`,tab:w(r)(`settings.tabs.agent`)},{default:e(()=>[S(Qe)]),_:1},8,[`tab`]),S(w($),{name:`session`,tab:w(r)(`settings.tabs.session`)},{default:e(()=>[S(ot)]),_:1},8,[`tab`]),S(w($),{name:`memory`,tab:w(r)(`settings.tabs.memory`)},{default:e(()=>[S(ft)]),_:1},8,[`tab`]),S(w($),{name:`safety`,tab:w(r)(`settings.tabs.safety`)},{default:e(()=>[S(bt)]),_:1},8,[`tab`]),S(w($),{name:`workspace`,tab:w(r)(`settings.tabs.workspace`)},{default:e(()=>[S(kt)]),_:1},8,[`tab`])]),_:1})]),_:1},8,[`show`,`description`])])]))}}),[[`__scopeId`,`data-v-215990b2`]]);export{Pt as default};