import{C as e,I as t,M as n,P as r,Q as i,R as a,W as o,Z as s,b as c,et as l,ft as u,g as d,lt as f,p,q as m,w as h,z as g}from"./router-DEmVazot.js";import{C as _,I as v,L as y,N as b,P as x,R as S,c as C,h as ee,m as te,w,x as T,z as E}from"./browser-CGEW97i3.js";import{h as D,m as O,x as ne}from"./Popover-Ce1b1w44.js";import{h as k,l as A,p as re,s as j}from"./Scrollbar-D8kFsLvS.js";import{n as ie,o as M}from"./fade-in-scale-up.cssr-CZEBBegv.js";import{i as ae}from"./Suffix-C4UnrFcO.js";import{t as oe}from"./use-compitable-D3ZYO7Hm.js";import{i as N,n as se}from"./warn-CBw6BA0d.js";import{O as P}from"./isArrayLikeObject-C0_Vq7cl.js";import{n as F,t as I}from"./now-FDJXmm8t.js";import{t as L}from"./Add-Dd1Y9X2T.js";import{t as R}from"./Close-BrlKaKT5.js";import{q as z,y as ce}from"./index-0ZZjwDxd.js";var B=O(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[O(`&::-webkit-scrollbar`,{width:0,height:0})]),le=n({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=f(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=w();return B.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:D,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return r(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),ue=`Expected a function`,de=Math.max,V=Math.min;function H(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,f=!0;if(typeof e!=`function`)throw TypeError(ue);t=F(t)||0,P(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?de(F(n.maxWait)||0,t):a,f=`trailing`in n?!!n.trailing:f);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function m(e){return l=e,s=setTimeout(_,t),u?p(e):o}function h(e){var n=e-c,r=e-l,i=t-n;return d?V(i,a-r):i}function g(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function _(){var e=I();if(g(e))return v(e);s=setTimeout(_,h(e))}function v(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function y(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function b(){return s===void 0?o:v(I())}function x(){var e=I(),n=g(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return m(c);if(d)return clearTimeout(s),s=setTimeout(_,t),p(c)}return s===void 0&&(s=setTimeout(_,t)),o}return x.cancel=y,x.flush=b,x}var fe=`Expected a function`;function pe(e,t,n){var r=!0,i=!0;if(typeof e!=`function`)throw TypeError(fe);return P(n)&&(r=`leading`in n?!!n.leading:r,i=`trailing`in n?!!n.trailing:i),H(e,t,{leading:r,maxWait:t,trailing:i})}var U=N(`n-tabs`),W={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},G=n({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:W,slots:Object,setup(e){let n=t(U,null);return n||se(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return r(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),K=n({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},z(W,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:n,valueRef:r,typeRef:i,closableRef:a,tabStyleRef:o,addTabStyleRef:s,tabClassRef:c,addTabClassRef:l,tabChangeIdRef:u,onBeforeLeaveRef:d,triggerRef:f,handleAdd:p,activateTab:m,handleClose:g}=t(U);return{trigger:f,mergedClosable:h(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?a.value:t}),style:o,addStyle:s,tabClass:c,addTabClass:l,clsPrefix:n,value:r,type:i,handleClose(t){t.stopPropagation(),!e.disabled&&g(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){p();return}let{name:t}=e,n=++u.id;if(t!==r.value){let{value:i}=d;i?Promise.resolve(i(e.name,r.value)).then(e=>{e&&u.id===n&&m(t)}):m(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:i,label:o,tab:s,value:l,mergedClosable:u,trigger:d,$slots:{default:f}}=this,p=o??s;return r(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?r(`div`,{class:`${t}-tabs-tab-pad`}):null,r(`div`,Object.assign({key:n,"data-name":n,"data-disabled":i?!0:void 0},a({class:[`${t}-tabs-tab`,l===n&&`${t}-tabs-tab--active`,i&&`${t}-tabs-tab--disabled`,u&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:d===`click`?this.activateTab:void 0,onMouseenter:d===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),r(`span`,{class:`${t}-tabs-tab__label`},e?r(c,null,r(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),r(j,{clsPrefix:t},{default:()=>r(L,null)})):f?f():typeof p==`object`?p:ie(p??n)),u&&this.type===`card`?r(R,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:i}):null))}}),me=x(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[y(`segment-type`,[x(`tabs-rail`,[b(`&.transition-disabled`,[x(`tabs-capsule`,`
 transition: none;
 `)])])]),y(`top`,[x(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),y(`left`,[x(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),y(`left, right`,`
 flex-direction: row;
 `,[x(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),x(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),y(`right`,`
 flex-direction: row-reverse;
 `,[x(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),x(`tabs-bar`,`
 left: 0;
 `)]),y(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[x(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),x(`tabs-bar`,`
 top: 0;
 `)]),x(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[x(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),x(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[x(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[y(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),b(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),y(`flex`,[x(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[x(`tabs-wrapper`,`
 width: 100%;
 `,[x(`tabs-tab`,`
 margin-right: 0;
 `)])])]),x(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[v(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),v(`prefix`,`padding-right: 16px;`),v(`suffix`,`padding-left: 16px;`)]),y(`top, bottom`,[b(`>`,[x(`tabs-nav`,[x(`tabs-nav-scroll-wrapper`,[b(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),b(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),y(`shadow-start`,[b(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),y(`shadow-end`,[b(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),y(`left, right`,[x(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),b(`>`,[x(`tabs-nav`,[x(`tabs-nav-scroll-wrapper`,[b(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),b(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),y(`shadow-start`,[b(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),y(`shadow-end`,[b(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),x(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[x(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[b(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),b(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),x(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),x(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),x(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),x(`tabs-tab`,`
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
 `,[y(`disabled`,{cursor:`not-allowed`}),v(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),v(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),x(`tabs-bar`,`
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
 `,[b(`&.transition-disabled`,`
 transition: none;
 `),y(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),x(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),x(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[b(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),b(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),b(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),b(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),b(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),x(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),y(`line-type, bar-type`,[x(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[b(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),y(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),y(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),x(`tabs-nav`,[y(`line-type`,[y(`top`,[v(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x(`tabs-bar`,`
 bottom: -1px;
 `)]),y(`left`,[v(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),x(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),x(`tabs-bar`,`
 right: -1px;
 `)]),y(`right`,[v(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),x(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),x(`tabs-bar`,`
 left: -1px;
 `)]),y(`bottom`,[v(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),x(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),x(`tabs-bar`,`
 top: -1px;
 `)]),v(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),x(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),x(`tabs-bar`,`
 border-radius: 0;
 `)]),y(`card-type`,[v(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),x(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),x(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),x(`tabs-tab`,`
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
 `,[y(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[v(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),S(`disabled`,[b(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),y(`closable`,`padding-right: 8px;`),y(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),y(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),y(`left, right`,`
 flex-direction: column; 
 `,[v(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),x(`tabs-wrapper`,`
 flex-direction: column;
 `),x(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[x(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),y(`top`,[y(`card-type`,[x(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),v(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[y(`active`,`
 border-bottom: 1px solid #0000;
 `)]),x(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),y(`left`,[y(`card-type`,[x(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),v(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),x(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[y(`active`,`
 border-right: 1px solid #0000;
 `)]),x(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),x(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),y(`right`,[y(`card-type`,[x(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),v(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),x(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[y(`active`,`
 border-left: 1px solid #0000;
 `)]),x(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),x(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),y(`bottom`,[y(`card-type`,[x(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),v(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),x(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[y(`active`,`
 border-top: 1px solid #0000;
 `)]),x(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),x(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),q=pe,J=n({name:`Tabs`,props:Object.assign(Object.assign({},C.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:a}=ee(e),c=C(`Tabs`,`-tabs`,me,ce,e,n),l=f(null),d=f(null),p=f(null),v=f(null),y=f(null),b=f(null),x=f(!0),S=f(!0),w=oe(e,[`labelSize`,`size`]),T=h(()=>w.value?w.value:a?.value?.Tabs?.size||`medium`),D=oe(e,[`activeName`,`value`]),O=f(D.value??e.defaultValue??(t.default?M(t.default())[0]?.props?.name:null)),A=ae(D,O),j={id:0},ie=h(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});s(A,()=>{j.id=0,I(),L()});function N(){let{value:e}=A;return e===null?null:l.value?.querySelector(`[data-name="${e}"]`)}function se(t){if(e.type===`card`)return;let{value:r}=d;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(F([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(F([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function P(){if(e.type===`card`)return;let{value:t}=d;t&&(t.style.opacity=`0`)}function F(e){let{value:t}=d;if(t)for(let n of e)t.style[n]=``}function I(){if(e.type===`card`)return;let t=N();t?se(t):P()}function L(){let e=y.value?.$el;if(!e)return;let t=N();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let R=f(null),z=0,B=null;function le(e){let t=R.value;if(t){z=e.getBoundingClientRect().height;let n=`${z}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};B?(r(),B(),B=null):B=r}}function ue(e){let t=R.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(z,n)}px`};B?(B(),B=null,r()):B=r}}function de(){let t=R.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let V={value:[]},H=f(`next`);function fe(e){let t=A.value,n=`next`;for(let r of V.value){if(r===t)break;if(r===e){n=`prev`;break}}H.value=n,pe(e)}function pe(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&_(n,t),r&&_(r,t),i&&_(i,t),O.value=t}function W(t){let{onClose:n}=e;n&&_(n,t)}let G=!0;function K(){let{value:e}=d;if(!e)return;G||=!1;let t=`transition-disabled`;e.classList.add(t),I(),e.classList.remove(t)}let J=f(null);function Y({transitionDisabled:e}){let t=l.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=N();n&&J.value&&(J.value.style.width=`${n.offsetWidth}px`,J.value.style.height=`${n.offsetHeight}px`,J.value.style.transform=`translateX(${n.offsetLeft-re(getComputedStyle(t).paddingLeft)}px)`,e&&J.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}s([A],()=>{e.type===`segment`&&g(()=>{Y({transitionDisabled:!1})})}),o(()=>{e.type===`segment`&&Y({transitionDisabled:!0})});let X=0;function Z(t){if(t.contentRect.width===0&&t.contentRect.height===0||X===t.contentRect.width)return;X=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(G||e.justifyContent?.startsWith(`space`))&&K(),n!==`segment`){let{placement:t}=e;ve((t===`top`||t===`bottom`?y.value?.$el:b.value)||null)}}let Q=q(Z,64);s([()=>e.justifyContent,()=>e.size],()=>{g(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&K()})});let $=f(!1);function he(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!$.value)s===`top`||s===`bottom`?a<r&&($.value=!0):o<i&&($.value=!0);else{let{value:e}=v;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&($.value=!1):o-i>e.$el.offsetHeight&&($.value=!1)}ve(y.value?.$el||null)}let ge=q(he,64);function _e(){let{onAdd:t}=e;t&&t(),g(()=>{let e=N(),{value:t}=y;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function ve(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;x.value=e<=0,S.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;x.value=e<=0,S.value=e+r>=n}}let ye=q(e=>{ve(e.target)},64);m(U,{triggerRef:u(e,`trigger`),tabStyleRef:u(e,`tabStyle`),tabClassRef:u(e,`tabClass`),addTabStyleRef:u(e,`addTabStyle`),addTabClassRef:u(e,`addTabClass`),paneClassRef:u(e,`paneClass`),paneStyleRef:u(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:u(e,`type`),closableRef:u(e,`closable`),valueRef:A,tabChangeIdRef:j,onBeforeLeaveRef:u(e,`onBeforeLeave`),activateTab:fe,handleClose:W,handleAdd:_e}),ne(()=>{I(),L()}),i(()=>{let{value:e}=p;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;x.value?e.classList.remove(r):e.classList.add(r),S.value?e.classList.remove(i):e.classList.add(i)});let be={syncBarPosition:()=>{I()}},xe=()=>{Y({transitionDisabled:!0})},Se=h(()=>{let{value:t}=T,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:y,closeColorHover:b,closeColorPressed:x,closeBorderRadius:S,[E(`panePadding`,t)]:C,[E(`tabPadding`,r)]:ee,[E(`tabPaddingVertical`,r)]:te,[E(`tabGap`,r)]:w,[E(`tabGap`,`${r}Vertical`)]:D,[E(`tabTextColor`,n)]:O,[E(`tabTextColorActive`,n)]:ne,[E(`tabTextColorHover`,n)]:A,[E(`tabTextColorDisabled`,n)]:re,[E(`tabFontSize`,t)]:j},common:{cubicBezierEaseInOut:ie}}=c.value;return{"--n-bezier":ie,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":j,"--n-tab-text-color":O,"--n-tab-text-color-active":ne,"--n-tab-text-color-disabled":re,"--n-tab-text-color-hover":A,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":v,"--n-close-icon-size":y,"--n-close-color-hover":b,"--n-close-color-pressed":x,"--n-close-border-radius":S,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":ee,"--n-tab-padding-vertical":te,"--n-tab-gap":w,"--n-tab-gap-vertical":D,"--n-pane-padding-left":k(C,`left`),"--n-pane-padding-right":k(C,`right`),"--n-pane-padding-top":k(C,`top`),"--n-pane-padding-bottom":k(C,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),Ce=r?te(`tabs`,h(()=>`${T.value[0]}${e.type[0]}`),Se,e):void 0;return Object.assign({mergedClsPrefix:n,mergedValue:A,renderedNames:new Set,segmentCapsuleElRef:J,tabsPaneWrapperRef:R,tabsElRef:l,barElRef:d,addTabInstRef:v,xScrollInstRef:y,scrollWrapperElRef:p,addTabFixed:$,tabWrapperStyle:ie,handleNavResize:Q,mergedSize:T,handleScroll:ye,handleTabsResize:ge,cssVars:r?void 0:Se,themeClass:Ce?.themeClass,animationDirection:H,renderNameListRef:V,yScrollElRef:b,handleSegmentResize:xe,onAnimationBeforeLeave:le,onAnimationEnter:ue,onAnimationAfterEnter:de,onRender:Ce?.onRender},be)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:i,addable:a,mergedSize:o,renderNameListRef:s,onRender:c,paneWrapperClass:l,paneWrapperStyle:u,$slots:{default:d,prefix:f,suffix:p}}=this;c?.();let m=d?M(d()).filter(e=>e.type.__TAB_PANE__===!0):[],h=d?M(d()).filter(e=>e.type.__TAB__===!0):[],g=!h.length,_=t===`card`,v=t===`segment`,y=!_&&!v&&this.justifyContent;s.value=[];let b=()=>{let t=r(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},y?null:r(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),g?m.map((e,t)=>(s.value.push(e.props.name),Q(r(K,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!y||y===`center`||y===`start`||y===`end`)}),e.children?{default:e.children.tab}:void 0)))):h.map((e,t)=>(s.value.push(e.props.name),Q(t!==0&&!y?Z(e):e))),!i&&a&&_?X(a,(g?m.length:h.length)!==0):null,y?null:r(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return r(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},_&&a?r(A,{onResize:this.handleTabsResize},{default:()=>t}):t,_?r(`div`,{class:`${e}-tabs-pad`}):null,_?null:r(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},x=v?`top`:n;return r(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${o}-size`,y&&`${e}-tabs--flex`,`${e}-tabs--${x}`],style:this.cssVars},r(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${x}`,`${e}-tabs-nav`]},T(f,t=>t&&r(`div`,{class:`${e}-tabs-nav__prefix`},t)),v?r(A,{onResize:this.handleSegmentResize},{default:()=>r(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},r(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},r(`div`,{class:`${e}-tabs-wrapper`},r(`div`,{class:`${e}-tabs-tab`}))),g?m.map((e,t)=>(s.value.push(e.props.name),r(K,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):h.map((e,t)=>(s.value.push(e.props.name),t===0?e:Z(e))))}):r(A,{onResize:this.handleNavResize},{default:()=>r(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(x)?r(le,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:b}):r(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},b()))}),i&&a&&_?X(a,!0):null,T(p,t=>t&&r(`div`,{class:`${e}-tabs-nav__suffix`},t))),g&&(this.animated&&(x===`top`||x===`bottom`)?r(`div`,{ref:`tabsPaneWrapperRef`,style:u,class:[`${e}-tabs-pane-wrapper`,l]},Y(m,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Y(m,this.mergedValue,this.renderedNames)))}});function Y(e,t,n,i,a,o,s){let c=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,s=t===r;if(e.key!==void 0&&(e.key=r),s||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);c.push(t?l(e,[[d,s]]):e)}}),s?r(p,{name:`${s}-transition`,onBeforeLeave:i,onEnter:a,onAfterEnter:o},{default:()=>c}):c}function X(e,t){return r(K,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function Z(t){let n=e(t);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function Q(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}export{G as n,J as t};