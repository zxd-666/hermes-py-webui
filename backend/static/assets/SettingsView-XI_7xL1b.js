import{n as e,t}from"./FormItem-AUYVPV_1.js";import{S as n}from"./_baseFor-DyDN1Ubb.js";import{n as r,t as i}from"./now-DCfkkkFv.js";import{t as a}from"./Add-Bm6iHVtB.js";import{t as o}from"./InputNumber-DKs0DS38.js";import{t as s}from"./Space-DdELGAbp.js";import{t as c}from"./Switch-DC9kCUwI.js";import{t as l}from"./Popconfirm-VFhi_apr.js";import{A as u,Br as d,C as f,Cn as p,Fr as m,Gn as h,Gr as g,Hn as _,Hr as v,Jr as y,K as b,Kn as x,Kr as S,L as C,Lr as w,Mn as T,Mr as E,N as D,Nn as O,Pn as k,Rr as A,Sn as j,Tn as M,Un as ee,Vr as N,Wr as P,Xr as te,Yr as ne,Zr as re,_ as ie,ar as ae,c as F,ci as oe,dn as se,dr as I,ei as ce,f as le,fn as ue,fr as L,ft as de,gi as R,gn as fe,ii as pe,jr as me,kn as z,kr as he,li as B,lr as V,mi as H,mr as U,ni as W,p as G,pi as K,pr as ge,ri as _e,rr as ve,si as ye,tt as be,ui as xe,ur as q,ut as Se,vn as Ce,w as we,yi as J,yn as Te,yr as Y,zr as X}from"./index-B-VdYolr.js";import{a as Ee,n as De,o as Oe,r as ke,t as Ae}from"./auth-O_cxHu5e.js";import{t as Z}from"./settings-BjQNwInl.js";import{t as Q}from"./SettingRow-BgpaBdq6.js";import{a as je,i as Me,n as Ne,r as Pe,t as Fe}from"./session-browser-prefs-09h3iqJV.js";var Ie=T(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[T(`&::-webkit-scrollbar`,{width:0,height:0})]),Le=S({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=K(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=k();return Ie.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:O,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return y(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Re=`Expected a function`,ze=Math.max,Be=Math.min;function Ve(e,t,a){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof e!=`function`)throw TypeError(Re);t=r(t)||0,n(a)&&(p=!!a.leading,m=`maxWait`in a,c=m?ze(r(a.maxWait)||0,t):c,h=`trailing`in a?!!a.trailing:h);function g(t){var n=o,r=s;return o=s=void 0,f=t,l=e.apply(r,n),l}function _(e){return f=e,u=setTimeout(b,t),p?g(e):l}function v(e){var n=e-d,r=e-f,i=t-n;return m?Be(i,c-r):i}function y(e){var n=e-d,r=e-f;return d===void 0||n>=t||n<0||m&&r>=c}function b(){var e=i();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function C(){return u===void 0?l:x(i())}function w(){var e=i(),n=y(e);if(o=arguments,s=this,d=e,n){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,t),g(d)}return u===void 0&&(u=setTimeout(b,t)),l}return w.cancel=S,w.flush=C,w}var He=`Expected a function`;function Ue(e,t,r){var i=!0,a=!0;if(typeof e!=`function`)throw TypeError(He);return n(r)&&(i=`leading`in r?!!r.leading:i,a=`trailing`in r?!!r.trailing:a),Ve(e,t,{leading:i,maxWait:t,trailing:a})}var We=_(`n-tabs`),Ge={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},$=S({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:Ge,slots:Object,setup(e){let t=ne(We,null);return t||M(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return y(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Ke=S({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Te(Ge,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=ne(We);return{trigger:d,mergedClosable:A(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:o,value:s,mergedClosable:c,trigger:l,$slots:{default:u}}=this,d=i??o;return y(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?y(`div`,{class:`${t}-tabs-tab-pad`}):null,y(`div`,Object.assign({key:n,"data-name":n,"data-disabled":r?!0:void 0},te({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),y(`span`,{class:`${t}-tabs-tab__label`},e?y(m,null,y(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),y(Se,{clsPrefix:t},{default:()=>y(a,null)})):u?u():typeof d==`object`?d:Ce(d??n)),c&&this.type===`card`?y(be,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),qe=q(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[L(`segment-type`,[q(`tabs-rail`,[V(`&.transition-disabled`,[q(`tabs-capsule`,`
 transition: none;
 `)])])]),L(`top`,[q(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),L(`left`,[q(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),L(`left, right`,`
 flex-direction: row;
 `,[q(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),q(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),L(`right`,`
 flex-direction: row-reverse;
 `,[q(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),q(`tabs-bar`,`
 left: 0;
 `)]),L(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[q(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),q(`tabs-bar`,`
 top: 0;
 `)]),q(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[q(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),q(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[q(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[L(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),V(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),L(`flex`,[q(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[q(`tabs-wrapper`,`
 width: 100%;
 `,[q(`tabs-tab`,`
 margin-right: 0;
 `)])])]),q(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[I(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),I(`prefix`,`padding-right: 16px;`),I(`suffix`,`padding-left: 16px;`)]),L(`top, bottom`,[V(`>`,[q(`tabs-nav`,[q(`tabs-nav-scroll-wrapper`,[V(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),V(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),L(`shadow-start`,[V(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),L(`shadow-end`,[V(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),L(`left, right`,[q(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),V(`>`,[q(`tabs-nav`,[q(`tabs-nav-scroll-wrapper`,[V(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),V(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),L(`shadow-start`,[V(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),L(`shadow-end`,[V(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),q(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[q(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[V(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),V(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),q(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),q(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),q(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),q(`tabs-tab`,`
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
 `,[L(`disabled`,{cursor:`not-allowed`}),I(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),I(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),q(`tabs-bar`,`
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
 `,[V(`&.transition-disabled`,`
 transition: none;
 `),L(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),q(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),q(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[V(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),V(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),V(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),V(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),V(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),q(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),L(`line-type, bar-type`,[q(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[V(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),L(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),L(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),q(`tabs-nav`,[L(`line-type`,[L(`top`,[I(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),q(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),q(`tabs-bar`,`
 bottom: -1px;
 `)]),L(`left`,[I(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),q(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),q(`tabs-bar`,`
 right: -1px;
 `)]),L(`right`,[I(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),q(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),q(`tabs-bar`,`
 left: -1px;
 `)]),L(`bottom`,[I(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),q(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),q(`tabs-bar`,`
 top: -1px;
 `)]),I(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),q(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),q(`tabs-bar`,`
 border-radius: 0;
 `)]),L(`card-type`,[I(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),q(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),q(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),q(`tabs-tab`,`
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
 `,[I(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),ge(`disabled`,[V(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),L(`closable`,`padding-right: 8px;`),L(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),L(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),L(`left, right`,`
 flex-direction: column; 
 `,[I(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),q(`tabs-wrapper`,`
 flex-direction: column;
 `),q(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[q(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),L(`top`,[L(`card-type`,[q(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),I(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),q(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[L(`active`,`
 border-bottom: 1px solid #0000;
 `)]),q(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),q(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),L(`left`,[L(`card-type`,[q(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),I(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),q(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[L(`active`,`
 border-right: 1px solid #0000;
 `)]),q(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),q(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),L(`right`,[L(`card-type`,[q(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),I(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),q(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[L(`active`,`
 border-left: 1px solid #0000;
 `)]),q(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),q(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),L(`bottom`,[L(`card-type`,[q(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),I(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),q(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[L(`active`,`
 border-top: 1px solid #0000;
 `)]),q(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),q(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Je=Ue,Ye=S({name:`Tabs`,props:Object.assign(Object.assign({},de.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=ue(e),a=de(`Tabs`,`-tabs`,qe,ie,e,n),o=K(null),s=K(null),c=K(null),l=K(null),u=K(null),d=K(null),f=K(!0),m=K(!0),g=ee(e,[`labelSize`,`size`]),_=A(()=>g.value?g.value:i?.value?.Tabs?.size||`medium`),v=ee(e,[`activeName`,`value`]),y=K(v.value??e.defaultValue??(t.default?j(t.default())[0]?.props?.name:null)),b=h(v,y),S={id:0},C=A(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});ye(b,()=>{S.id=0,O(),k()});function w(){let{value:e}=b;return e===null?null:o.value?.querySelector(`[data-name="${e}"]`)}function T(t){if(e.type===`card`)return;let{value:r}=s;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(D([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(D([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function E(){if(e.type===`card`)return;let{value:t}=s;t&&(t.style.opacity=`0`)}function D(e){let{value:t}=s;if(t)for(let n of e)t.style[n]=``}function O(){if(e.type===`card`)return;let t=w();t?T(t):E()}function k(){let e=u.value?.$el;if(!e)return;let t=w();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let M=K(null),N=0,P=null;function te(e){let t=M.value;if(t){N=e.getBoundingClientRect().height;let n=`${N}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};P?(r(),P(),P=null):P=r}}function ne(e){let t=M.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(N,n)}px`};P?(P(),P=null,r()):P=r}}function F(){let t=M.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let I={value:[]},le=K(`next`);function L(e){let t=b.value,n=`next`;for(let r of I.value){if(r===t)break;if(r===e){n=`prev`;break}}le.value=n,R(e)}function R(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&p(n,t),r&&p(r,t),i&&p(i,t),y.value=t}function fe(t){let{onClose:n}=e;n&&p(n,t)}let pe=!0;function me(){let{value:e}=s;if(!e)return;pe||=!1;let t=`transition-disabled`;e.classList.add(t),O(),e.classList.remove(t)}let z=K(null);function he({transitionDisabled:e}){let t=o.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=w();n&&z.value&&(z.value.style.width=`${n.offsetWidth}px`,z.value.style.height=`${n.offsetHeight}px`,z.value.style.transform=`translateX(${n.offsetLeft-ve(getComputedStyle(t).paddingLeft)}px)`,e&&z.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}ye([b],()=>{e.type===`segment`&&re(()=>{he({transitionDisabled:!1})})}),ce(()=>{e.type===`segment`&&he({transitionDisabled:!0})});let B=0;function V(t){if(t.contentRect.width===0&&t.contentRect.height===0||B===t.contentRect.width)return;B=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(pe||e.justifyContent?.startsWith(`space`))&&me(),n!==`segment`){let{placement:t}=e;q((t===`top`||t===`bottom`?u.value?.$el:d.value)||null)}}let W=Je(V,64);ye([()=>e.justifyContent,()=>e.size],()=>{re(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&me()})});let G=K(!1);function ge(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!G.value)s===`top`||s===`bottom`?a<r&&(G.value=!0):o<i&&(G.value=!0);else{let{value:e}=l;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(G.value=!1):o-i>e.$el.offsetHeight&&(G.value=!1)}q(u.value?.$el||null)}let be=Je(ge,64);function xe(){let{onAdd:t}=e;t&&t(),re(()=>{let e=w(),{value:t}=u;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function q(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;f.value=e<=0,m.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;f.value=e<=0,m.value=e+r>=n}}let Se=Je(e=>{q(e.target)},64);_e(We,{triggerRef:H(e,`trigger`),tabStyleRef:H(e,`tabStyle`),tabClassRef:H(e,`tabClass`),addTabStyleRef:H(e,`addTabStyle`),addTabClassRef:H(e,`addTabClass`),paneClassRef:H(e,`paneClass`),paneStyleRef:H(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:H(e,`type`),closableRef:H(e,`closable`),valueRef:b,tabChangeIdRef:S,onBeforeLeaveRef:H(e,`onBeforeLeave`),activateTab:L,handleClose:fe,handleAdd:xe}),x(()=>{O(),k()}),oe(()=>{let{value:e}=c;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;f.value?e.classList.remove(r):e.classList.add(r),m.value?e.classList.remove(i):e.classList.add(i)});let Ce={syncBarPosition:()=>{O()}},we=()=>{he({transitionDisabled:!0})},J=A(()=>{let{value:t}=_,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:o,closeIconColorHover:s,closeIconColorPressed:c,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:v,closeSize:y,closeIconSize:b,closeColorHover:x,closeColorPressed:S,closeBorderRadius:C,[U(`panePadding`,t)]:w,[U(`tabPadding`,r)]:T,[U(`tabPaddingVertical`,r)]:E,[U(`tabGap`,r)]:D,[U(`tabGap`,`${r}Vertical`)]:O,[U(`tabTextColor`,n)]:k,[U(`tabTextColorActive`,n)]:A,[U(`tabTextColorHover`,n)]:j,[U(`tabTextColorDisabled`,n)]:M,[U(`tabFontSize`,t)]:ee},common:{cubicBezierEaseInOut:N}}=a.value;return{"--n-bezier":N,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":ee,"--n-tab-text-color":k,"--n-tab-text-color-active":A,"--n-tab-text-color-disabled":M,"--n-tab-text-color-hover":j,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":y,"--n-close-icon-size":b,"--n-close-color-hover":x,"--n-close-color-pressed":S,"--n-close-border-radius":C,"--n-close-icon-color":o,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":c,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":T,"--n-tab-padding-vertical":E,"--n-tab-gap":D,"--n-tab-gap-vertical":O,"--n-pane-padding-left":ae(w,`left`),"--n-pane-padding-right":ae(w,`right`),"--n-pane-padding-top":ae(w,`top`),"--n-pane-padding-bottom":ae(w,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":v}}),Te=r?se(`tabs`,A(()=>`${_.value[0]}${e.type[0]}`),J,e):void 0;return Object.assign({mergedClsPrefix:n,mergedValue:b,renderedNames:new Set,segmentCapsuleElRef:z,tabsPaneWrapperRef:M,tabsElRef:o,barElRef:s,addTabInstRef:l,xScrollInstRef:u,scrollWrapperElRef:c,addTabFixed:G,tabWrapperStyle:C,handleNavResize:W,mergedSize:_,handleScroll:Se,handleTabsResize:be,cssVars:r?void 0:J,themeClass:Te?.themeClass,animationDirection:le,renderNameListRef:I,yScrollElRef:d,handleSegmentResize:we,onAnimationBeforeLeave:te,onAnimationEnter:ne,onAnimationAfterEnter:F,onRender:Te?.onRender},Ce)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,$slots:{default:u,prefix:d,suffix:f}}=this;s?.();let p=u?j(u()).filter(e=>e.type.__TAB_PANE__===!0):[],m=u?j(u()).filter(e=>e.type.__TAB__===!0):[],h=!m.length,g=t===`card`,_=t===`segment`,v=!g&&!_&&this.justifyContent;o.value=[];let b=()=>{let t=y(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},v?null:y(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),h?p.map((e,t)=>(o.value.push(e.props.name),$e(y(Ke,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!v||v===`center`||v===`start`||v===`end`)}),e.children?{default:e.children.tab}:void 0)))):m.map((e,t)=>(o.value.push(e.props.name),$e(t!==0&&!v?Qe(e):e))),!r&&i&&g?Ze(i,(h?p.length:m.length)!==0):null,v?null:y(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return y(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},g&&i?y(z,{onResize:this.handleTabsResize},{default:()=>t}):t,g?y(`div`,{class:`${e}-tabs-pad`}):null,g?null:y(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},x=_?`top`:n;return y(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,v&&`${e}-tabs--flex`,`${e}-tabs--${x}`],style:this.cssVars},y(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${x}`,`${e}-tabs-nav`]},fe(d,t=>t&&y(`div`,{class:`${e}-tabs-nav__prefix`},t)),_?y(z,{onResize:this.handleSegmentResize},{default:()=>y(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},y(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},y(`div`,{class:`${e}-tabs-wrapper`},y(`div`,{class:`${e}-tabs-tab`}))),h?p.map((e,t)=>(o.value.push(e.props.name),y(Ke,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):m.map((e,t)=>(o.value.push(e.props.name),t===0?e:Qe(e))))}):y(z,{onResize:this.handleNavResize},{default:()=>y(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(x)?y(Le,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:b}):y(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},b()))}),r&&i&&g?Ze(i,!0):null,fe(f,t=>t&&y(`div`,{class:`${e}-tabs-nav__suffix`},t))),h&&(this.animated&&(x===`top`||x===`bottom`)?y(`div`,{ref:`tabsPaneWrapperRef`,style:l,class:[`${e}-tabs-pane-wrapper`,c]},Xe(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Xe(p,this.mergedValue,this.renderedNames)))}});function Xe(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?xe(e,[[me,c]]):e)}}),o?y(he,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function Ze(e,t){return y(Ke,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function Qe(e){let t=w(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function $e(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var et={class:`settings-section`},tt=F(S({__name:`DisplaySettings`,setup(e){let t=Z(),n=f(),{t:r}=Y(),{mode:i,setMode:a}=le(),o=[{label:r(`settings.display.themeLight`),value:`light`},{label:r(`settings.display.themeDark`),value:`dark`},{label:r(`settings.display.themeSystem`),value:`system`}];async function s(e){try{await t.saveSection(`display`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}function l(e){let t=e;a(t),s({skin:t})}return(e,n)=>(W(),v(`section`,et,[g(Q,{label:R(r)(`settings.display.theme`),hint:R(r)(`settings.display.themeHint`)},{default:B(()=>[g(R(u),{value:R(i),options:o,size:`small`,"consistent-menu-width":!1,class:`input-sm`,"onUpdate:value":l},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g(Q,{label:R(r)(`settings.display.streaming`),hint:R(r)(`settings.display.streamingHint`)},{default:B(()=>[g(R(c),{value:R(t).display.streaming,"onUpdate:value":n[0]||=e=>s({streaming:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g(Q,{label:R(r)(`settings.display.compact`),hint:R(r)(`settings.display.compactHint`)},{default:B(()=>[g(R(c),{value:R(t).display.compact,"onUpdate:value":n[1]||=e=>s({compact:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g(Q,{label:R(r)(`settings.display.showReasoning`),hint:R(r)(`settings.display.showReasoningHint`)},{default:B(()=>[g(R(c),{value:R(t).display.show_reasoning,"onUpdate:value":n[2]||=e=>s({show_reasoning:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g(Q,{label:R(r)(`settings.display.showCost`),hint:R(r)(`settings.display.showCostHint`)},{default:B(()=>[g(R(c),{value:R(t).display.show_cost,"onUpdate:value":n[3]||=e=>s({show_cost:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g(Q,{label:R(r)(`settings.display.inlineDiffs`),hint:R(r)(`settings.display.inlineDiffsHint`)},{default:B(()=>[g(R(c),{value:R(t).display.inline_diffs,"onUpdate:value":n[4]||=e=>s({inline_diffs:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g(Q,{label:R(r)(`settings.display.bellOnComplete`),hint:R(r)(`settings.display.bellOnCompleteHint`)},{default:B(()=>[g(R(c),{value:R(t).display.bell_on_complete,"onUpdate:value":n[5]||=e=>s({bell_on_complete:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g(Q,{label:R(r)(`settings.display.busyInputMode`),hint:R(r)(`settings.display.busyInputModeHint`)},{default:B(()=>[g(R(c),{value:R(t).display.busy_input_mode===`interrupt`,"onUpdate:value":n[6]||=e=>s({busy_input_mode:e?`interrupt`:`off`})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-e737ef30`]]),nt={class:`settings-section`},rt=F(S({__name:`AgentSettings`,setup(e){let t=Z(),n=f(),{t:r}=Y();async function i(e){try{await t.saveSection(`agent`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(W(),v(`section`,nt,[g(Q,{label:R(r)(`settings.agent.maxTurns`),hint:R(r)(`settings.agent.maxTurnsHint`)},{default:B(()=>[g(R(o),{value:R(t).agent.max_turns,min:1,max:200,step:5,size:`small`,class:`input-sm`,"onUpdate:value":n[0]||=e=>e!=null&&i({max_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g(Q,{label:R(r)(`settings.agent.gatewayTimeout`),hint:R(r)(`settings.agent.gatewayTimeoutHint`)},{default:B(()=>[g(R(o),{value:R(t).agent.gateway_timeout,min:60,max:7200,step:60,size:`small`,class:`input-sm`,"onUpdate:value":n[1]||=e=>e!=null&&i({gateway_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g(Q,{label:R(r)(`settings.agent.restartDrainTimeout`),hint:R(r)(`settings.agent.restartDrainTimeoutHint`)},{default:B(()=>[g(R(o),{value:R(t).agent.restart_drain_timeout,min:10,max:300,step:10,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({restart_drain_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g(Q,{label:R(r)(`settings.agent.toolEnforcement`),hint:R(r)(`settings.agent.toolEnforcementHint`)},{default:B(()=>[g(R(u),{value:R(t).agent.tool_use_enforcement||`auto`,options:[{label:R(r)(`settings.agent.auto`),value:`auto`},{label:R(r)(`settings.agent.always`),value:`always`},{label:R(r)(`settings.agent.never`),value:`never`}],size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>i({tool_use_enforcement:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-1f96245d`]]),it={class:`settings-section`},at=F(S({__name:`MemorySettings`,setup(e){let t=Z(),n=f(),{t:r}=Y();async function i(e){try{await t.saveSection(`memory`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(W(),v(`section`,it,[g(Q,{label:R(r)(`settings.memory.enabled`),hint:R(r)(`settings.memory.enabledHint`)},{default:B(()=>[g(R(c),{value:R(t).memory.memory_enabled,"onUpdate:value":n[0]||=e=>i({memory_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g(Q,{label:R(r)(`settings.memory.userProfile`),hint:R(r)(`settings.memory.userProfileHint`)},{default:B(()=>[g(R(c),{value:R(t).memory.user_profile_enabled,"onUpdate:value":n[1]||=e=>i({user_profile_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g(Q,{label:R(r)(`settings.memory.charLimit`),hint:R(r)(`settings.memory.charLimitHint`)},{default:B(()=>[g(R(o),{value:R(t).memory.memory_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({memory_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g(Q,{label:R(r)(`settings.memory.userCharLimit`),hint:R(r)(`settings.memory.userCharLimitHint`)},{default:B(()=>[g(R(o),{value:R(t).memory.user_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>e!=null&&i({user_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0c8e2aa7`]]),ot={class:`settings-section`},st=F(S({__name:`SessionSettings`,setup(e){let t=Z(),n=Fe(),r=f(),{t:i}=Y();async function a(e){try{await t.saveSection(`session_reset`,e),r.success(i(`settings.saved`))}catch{r.error(i(`settings.saveFailed`))}}return(e,r)=>(W(),v(`section`,ot,[g(Q,{label:R(i)(`settings.session.mode`),hint:R(i)(`settings.session.modeHint`)},{default:B(()=>[g(R(u),{value:R(t).sessionReset.mode||`both`,options:[{label:R(i)(`settings.session.modeBoth`),value:`both`},{label:R(i)(`settings.session.modeIdle`),value:`idle`},{label:R(i)(`settings.session.modeHourly`),value:`hourly`}],size:`small`,class:`input-md`,"onUpdate:value":r[0]||=e=>a({mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),g(Q,{label:R(i)(`settings.session.idleMinutes`),hint:R(i)(`settings.session.idleMinutesHint`)},{default:B(()=>[g(R(o),{value:R(t).sessionReset.idle_minutes,min:10,max:10080,step:30,size:`small`,class:`input-sm`,"onUpdate:value":r[1]||=e=>e!=null&&a({idle_minutes:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g(Q,{label:R(i)(`settings.session.atHour`),hint:R(i)(`settings.session.atHourHint`)},{default:B(()=>[g(R(o),{value:R(t).sessionReset.at_hour,min:0,max:23,step:1,size:`small`,class:`input-sm`,"onUpdate:value":r[2]||=e=>e!=null&&a({at_hour:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g(Q,{label:R(i)(`settings.session.liveMonitorHumanOnly`),hint:R(i)(`settings.session.liveMonitorHumanOnlyHint`)},{default:B(()=>[g(R(c),{value:R(n).humanOnly,"onUpdate:value":r[3]||=e=>R(n).setHumanOnly(e)},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-3514aeb7`]]),ct={class:`workspace-settings`},lt={key:0,class:`workspace-list`},ut={class:`workspace-info`},dt={class:`workspace-name`},ft=[`title`],pt={key:1,class:`workspace-form`},mt={class:`form-row`},ht={class:`form-row`},gt=F(S({__name:`WorkspaceSettings`,setup(e){let{t}=Y(),n=f(),r=K([]),i=K(!1),a=K(!1),o=K(``),c=K(``),u=K(null);async function p(){i.value=!0;try{r.value=await Me()}finally{i.value=!1}}ce(p);function h(){o.value=``,c.value=``,a.value=!1,u.value=null}async function _(){let e=o.value.trim(),i=c.value.trim();if(!(!e||!i))try{if(u.value){let a=await je(u.value,{name:e,path:i}),o=r.value.findIndex(e=>e.id===u.value);o>=0&&(r.value[o]=a),n.success(t(`common.saved`))}else{let a=await Ne(e,i);r.value.push(a),n.success(t(`common.saved`))}h()}catch(e){let r=e?.message||``;r.includes(`409`)||r.includes(`already exists`)?n.error(t(`settings.workspace.nameExists`)):r.includes(`400`)||r.includes(`does not exist`)?n.error(t(`settings.workspace.pathNotExists`)):n.error(t(`common.saveFailed`))}}function y(e){u.value=e.id,o.value=e.name,c.value=e.path,a.value=!0}async function x(e){await Pe(e)?(r.value=r.value.filter(t=>t.id!==e),n.success(t(`common.saved`))):n.error(t(`common.deleteFailed`))}return(e,n)=>(W(),v(`section`,ct,[a.value?(W(),v(`div`,pt,[X(`div`,mt,[X(`label`,null,J(R(t)(`settings.workspace.name`)),1),g(R(C),{value:o.value,"onUpdate:value":n[1]||=e=>o.value=e,size:`small`,placeholder:R(t)(`settings.workspace.namePlaceholder`),onKeydown:E(_,[`enter`])},null,8,[`value`,`placeholder`])]),X(`div`,ht,[X(`label`,null,J(R(t)(`settings.workspace.path`)),1),g(R(C),{value:c.value,"onUpdate:value":n[2]||=e=>c.value=e,size:`small`,placeholder:R(t)(`settings.workspace.pathPlaceholder`),onKeydown:E(_,[`enter`])},null,8,[`value`,`placeholder`])]),g(R(s),{size:`small`},{default:B(()=>[g(R(D),{size:`small`,type:`primary`,disabled:!o.value.trim()||!c.value.trim(),onClick:_},{default:B(()=>[P(J(u.value?R(t)(`common.update`):R(t)(`common.create`)),1)]),_:1},8,[`disabled`]),g(R(D),{size:`small`,onClick:h},{default:B(()=>[P(J(R(t)(`common.cancel`)),1)]),_:1})]),_:1})])):(W(),v(`div`,lt,[r.value.length===0&&!i.value?(W(),d(R(b),{key:0,description:R(t)(`settings.workspace.empty`)},null,8,[`description`])):N(``,!0),(W(!0),v(m,null,pe(r.value,e=>(W(),v(`div`,{key:e.id,class:`workspace-item`},[X(`div`,ut,[X(`span`,dt,J(e.name),1),X(`span`,{class:`workspace-path`,title:e.path},J(e.path),9,ft)]),g(R(s),{size:`small`},{default:B(()=>[g(R(D),{size:`tiny`,quaternary:``,onClick:t=>y(e)},{default:B(()=>[P(J(R(t)(`common.edit`)),1)]),_:1},8,[`onClick`]),g(R(l),{onPositiveClick:t=>x(e.id)},{trigger:B(()=>[g(R(D),{size:`tiny`,quaternary:``,type:`error`},{default:B(()=>[P(J(R(t)(`common.delete`)),1)]),_:1})]),default:B(()=>[P(` `+J(R(t)(`settings.workspace.deleteConfirm`)),1)]),_:1},8,[`onPositiveClick`])]),_:2},1024)]))),128)),g(R(D),{class:`add-btn`,dashed:``,type:`primary`,size:`small`,onClick:n[0]||=e=>{a.value=!0,u.value=null}},{default:B(()=>[P(` + `+J(R(t)(`settings.workspace.add`)),1)]),_:1})]))]))}}),[[`__scopeId`,`data-v-d6989927`]]),_t={class:`settings-section`},vt=F(S({__name:`PrivacySettings`,setup(e){let t=Z(),n=f(),{t:r}=Y();async function i(e){try{await t.saveSection(`privacy`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(W(),v(`section`,_t,[g(Q,{label:R(r)(`settings.privacy.redactPii`),hint:R(r)(`settings.privacy.redactPiiHint`)},{default:B(()=>[g(R(c),{value:R(t).privacy.redact_pii,"onUpdate:value":n[0]||=e=>i({redact_pii:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-43145f27`]]),yt={class:`account-settings`},bt={class:`section-desc`},xt={key:0,class:`action-row`},St={class:`action-label`},Ct={key:1,class:`configured-section`},wt={class:`action-row`},Tt={class:`action-label`},Et={class:`action-buttons`},Dt=F(S({__name:`AccountSettings`,setup(n){let{t:r}=Y(),i=f(),a=K(!1),o=K(null),s=K(!1),c=K(!1),u=K(``),d=K(``),p=K(``),m=K(!1),h=K(``),_=K(``),y=K(``),b=K(!1),x=K(``),S=K(``);ce(async()=>{try{let e=await ke();a.value=e.hasPasswordLogin,o.value=e.username}catch{}});async function w(){if(d.value!==p.value){i.error(r(`login.passwordMismatch`));return}if(d.value.length<6){i.error(r(`login.passwordTooShort`));return}s.value=!0;try{await Oe(u.value,d.value),a.value=!0,o.value=u.value,c.value=!1,u.value=``,d.value=``,p.value=``,i.success(r(`login.setupSuccess`))}catch(e){i.error(e.message||r(`common.saveFailed`))}finally{s.value=!1}}async function T(){if(_.value!==y.value){i.error(r(`login.passwordMismatch`));return}if(_.value.length<6){i.error(r(`login.passwordTooShort`));return}s.value=!0;try{await Ae(h.value,_.value),m.value=!1,h.value=``,_.value=``,y.value=``,i.success(r(`login.passwordChanged`))}catch(e){i.error(e.message||r(`common.saveFailed`))}finally{s.value=!1}}async function O(){if(S.value.trim().length<2){i.error(r(`login.usernameTooShort`));return}s.value=!0;try{await De(x.value,S.value.trim()),o.value=S.value.trim(),b.value=!1,x.value=``,S.value=``,i.success(r(`login.usernameChanged`))}catch(e){i.error(e.message||r(`common.saveFailed`))}finally{s.value=!1}}async function k(){s.value=!0;try{await Ee(),a.value=!1,o.value=null,i.success(r(`login.passwordRemoved`))}catch(e){i.error(e.message||r(`common.saveFailed`))}finally{s.value=!1}}function A(){u.value=``,d.value=``,p.value=``,c.value=!0}function j(){h.value=``,_.value=``,y.value=``,m.value=!0}function M(){x.value=``,S.value=``,b.value=!0}return(n,i)=>(W(),v(`div`,yt,[X(`p`,bt,J(R(r)(`login.setupDescription`)),1),a.value?(W(),v(`div`,Ct,[X(`div`,wt,[X(`span`,Tt,J(R(r)(`login.passwordLoginConfigured`,{username:o.value})),1),X(`div`,Et,[g(R(D),{onClick:j},{default:B(()=>[P(J(R(r)(`login.changePassword`)),1)]),_:1}),g(R(D),{onClick:M},{default:B(()=>[P(J(R(r)(`login.changeUsername`)),1)]),_:1}),g(R(l),{onPositiveClick:k},{trigger:B(()=>[g(R(D),{type:`error`,ghost:``,loading:s.value},{default:B(()=>[P(J(R(r)(`login.removePasswordLogin`)),1)]),_:1},8,[`loading`])]),default:B(()=>[P(` `+J(R(r)(`login.removeConfirm`)),1)]),_:1})])])])):(W(),v(`div`,xt,[X(`span`,St,J(R(r)(`login.passwordLoginNotConfigured`)),1),g(R(D),{type:`primary`,onClick:A},{default:B(()=>[P(J(R(r)(`login.setupPassword`)),1)]),_:1})])),g(R(we),{show:c.value,"onUpdate:show":i[4]||=e=>c.value=e,preset:`dialog`,title:R(r)(`login.setupPassword`)},{action:B(()=>[g(R(D),{onClick:i[3]||=e=>c.value=!1},{default:B(()=>[P(J(R(r)(`common.cancel`)),1)]),_:1}),g(R(D),{type:`primary`,loading:s.value,onClick:w},{default:B(()=>[P(J(R(r)(`common.save`)),1)]),_:1},8,[`loading`])]),default:B(()=>[g(R(e),{"label-placement":`top`},{default:B(()=>[g(R(t),{label:R(r)(`login.username`)},{default:B(()=>[g(R(C),{value:u.value,"onUpdate:value":i[0]||=e=>u.value=e,placeholder:R(r)(`login.usernamePlaceholder`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),g(R(t),{label:R(r)(`login.newPassword`)},{default:B(()=>[g(R(C),{value:d.value,"onUpdate:value":i[1]||=e=>d.value=e,type:`password`,"show-password-on":`click`,placeholder:R(r)(`login.passwordPlaceholder`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),g(R(t),{label:R(r)(`login.confirmPassword`)},{default:B(()=>[g(R(C),{value:p.value,"onUpdate:value":i[2]||=e=>p.value=e,type:`password`,"show-password-on":`click`,placeholder:R(r)(`login.confirmPassword`),onKeyup:E(w,[`enter`])},null,8,[`value`,`placeholder`])]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`]),g(R(we),{show:m.value,"onUpdate:show":i[9]||=e=>m.value=e,preset:`dialog`,title:R(r)(`login.changePassword`)},{action:B(()=>[g(R(D),{onClick:i[8]||=e=>m.value=!1},{default:B(()=>[P(J(R(r)(`common.cancel`)),1)]),_:1}),g(R(D),{type:`primary`,loading:s.value,onClick:T},{default:B(()=>[P(J(R(r)(`common.save`)),1)]),_:1},8,[`loading`])]),default:B(()=>[g(R(e),{"label-placement":`top`},{default:B(()=>[g(R(t),{label:R(r)(`login.currentPassword`)},{default:B(()=>[g(R(C),{value:h.value,"onUpdate:value":i[5]||=e=>h.value=e,type:`password`,"show-password-on":`click`,placeholder:R(r)(`login.currentPassword`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),g(R(t),{label:R(r)(`login.newPassword`)},{default:B(()=>[g(R(C),{value:_.value,"onUpdate:value":i[6]||=e=>_.value=e,type:`password`,"show-password-on":`click`,placeholder:R(r)(`login.newPassword`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),g(R(t),{label:R(r)(`login.confirmPassword`)},{default:B(()=>[g(R(C),{value:y.value,"onUpdate:value":i[7]||=e=>y.value=e,type:`password`,"show-password-on":`click`,placeholder:R(r)(`login.confirmPassword`),onKeyup:E(T,[`enter`])},null,8,[`value`,`placeholder`])]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`]),g(R(we),{show:b.value,"onUpdate:show":i[13]||=e=>b.value=e,preset:`dialog`,title:R(r)(`login.changeUsername`)},{action:B(()=>[g(R(D),{onClick:i[12]||=e=>b.value=!1},{default:B(()=>[P(J(R(r)(`common.cancel`)),1)]),_:1}),g(R(D),{type:`primary`,loading:s.value,onClick:O},{default:B(()=>[P(J(R(r)(`common.save`)),1)]),_:1},8,[`loading`])]),default:B(()=>[g(R(e),{"label-placement":`top`},{default:B(()=>[g(R(t),{label:R(r)(`login.currentPassword`)},{default:B(()=>[g(R(C),{value:x.value,"onUpdate:value":i[10]||=e=>x.value=e,type:`password`,"show-password-on":`click`,placeholder:R(r)(`login.currentPassword`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),g(R(t),{label:R(r)(`login.newUsername`)},{default:B(()=>[g(R(C),{value:S.value,"onUpdate:value":i[11]||=e=>S.value=e,placeholder:R(r)(`login.usernamePlaceholder`),onKeyup:E(O,[`enter`])},null,8,[`value`,`placeholder`])]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`])]))}}),[[`__scopeId`,`data-v-79bc4876`]]),Ot={class:`settings-view`},kt={class:`page-header`},At={class:`header-title`},jt={class:`settings-content`},Mt=F(S({__name:`SettingsView`,setup(e){let t=Z(),{t:n}=Y();return ce(()=>{t.fetchSettings()}),(e,r)=>(W(),v(`div`,Ot,[X(`header`,kt,[X(`h2`,At,J(R(n)(`settings.title`)),1)]),X(`div`,jt,[g(R(G),{show:R(t).loading||R(t).saving,size:`large`,description:R(n)(`common.loading`)},{default:B(()=>[g(R(Ye),{type:`line`,animated:``},{default:B(()=>[g(R($),{name:`account`,tab:R(n)(`settings.tabs.account`)},{default:B(()=>[g(Dt)]),_:1},8,[`tab`]),g(R($),{name:`display`,tab:R(n)(`settings.tabs.display`)},{default:B(()=>[g(tt)]),_:1},8,[`tab`]),g(R($),{name:`agent`,tab:R(n)(`settings.tabs.agent`)},{default:B(()=>[g(rt)]),_:1},8,[`tab`]),g(R($),{name:`memory`,tab:R(n)(`settings.tabs.memory`)},{default:B(()=>[g(at)]),_:1},8,[`tab`]),g(R($),{name:`session`,tab:R(n)(`settings.tabs.session`)},{default:B(()=>[g(st)]),_:1},8,[`tab`]),g(R($),{name:`workspace`,tab:R(n)(`settings.tabs.workspace`)},{default:B(()=>[g(gt)]),_:1},8,[`tab`]),g(R($),{name:`privacy`,tab:R(n)(`settings.tabs.privacy`)},{default:B(()=>[g(vt)]),_:1},8,[`tab`])]),_:1})]),_:1},8,[`show`,`description`])])]))}}),[[`__scopeId`,`data-v-03afb3bd`]]);export{Mt as default};