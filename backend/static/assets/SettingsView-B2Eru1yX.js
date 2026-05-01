import{n as e,t}from"./FormItem-nvVQJtZw.js";import{S as n}from"./_baseFor-tDInUmcl.js";import{n as r,t as i}from"./now-CHNoL5hg.js";import{t as a}from"./Add-BhwELfr4.js";import{t as o}from"./InputNumber-CKXai95N.js";import{t as s}from"./Switch-DiXI01jE.js";import{t as c}from"./Popconfirm-CukieRjd.js";import{s as l}from"./app-BmNaZqUL.js";import{Ar as u,Bn as d,Dn as f,F as p,Fr as m,Hr as h,Ln as g,Lr as _,Mr as v,O as y,On as b,Or as x,Pr as S,Qn as C,Rn as w,Rr as T,S as ee,Sr as E,Tr as D,Ur as O,Vn as te,Vr as k,W as A,Wr as ne,X as j,Xr as re,Yr as M,Zr as ie,_n as ae,ar as N,at as oe,bn as se,cr as P,d as ce,dn as le,ei as ue,er as de,fi as F,h as fe,ir as I,j as L,jr as R,kn as z,l as B,li as V,mn as pe,ni as H,oi as U,on as me,or as W,pn as he,pr as G,qr as ge,ri as _e,rr as K,si as q,sn as ve,sr as ye,st as be,ti as xe,u as Se,ui as Ce,vn as we,wn as J,wr as Te,x as Y,zr as X}from"./index-DCI5sCFN.js";import{a as Ee,n as De,o as Oe,r as ke,t as Ae}from"./auth-BGtB1MkB.js";import{t as Z}from"./settings-f8i3oMcX.js";import{t as Q}from"./SettingRow-aYJPvIPO.js";import{t as je}from"./session-browser-prefs-DBnxIOHm.js";import{t as Me}from"./models-B_5Zep92.js";var Ne=f(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[f(`&::-webkit-scrollbar`,{width:0,height:0})]),Pe=X({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=U(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=z();return Ne.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:b,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return k(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Fe=`Expected a function`,Ie=Math.max,Le=Math.min;function Re(e,t,a){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof e!=`function`)throw TypeError(Fe);t=r(t)||0,n(a)&&(p=!!a.leading,m=`maxWait`in a,c=m?Ie(r(a.maxWait)||0,t):c,h=`trailing`in a?!!a.trailing:h);function g(t){var n=o,r=s;return o=s=void 0,f=t,l=e.apply(r,n),l}function _(e){return f=e,u=setTimeout(b,t),p?g(e):l}function v(e){var n=e-d,r=e-f,i=t-n;return m?Le(i,c-r):i}function y(e){var n=e-d,r=e-f;return d===void 0||n>=t||n<0||m&&r>=c}function b(){var e=i();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function C(){return u===void 0?l:x(i())}function w(){var e=i(),n=y(e);if(o=arguments,s=this,d=e,n){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,t),g(d)}return u===void 0&&(u=setTimeout(b,t)),l}return w.cancel=S,w.flush=C,w}var ze=`Expected a function`;function Be(e,t,r){var i=!0,a=!0;if(typeof e!=`function`)throw TypeError(ze);return n(r)&&(i=`leading`in r?!!r.leading:i,a=`trailing`in r?!!r.trailing:a),Re(e,t,{leading:i,maxWait:t,trailing:a})}var Ve=g(`n-tabs`),He={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},$=X({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:He,slots:Object,setup(e){let t=h(Ve,null);return t||se(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return k(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Ue=X({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},pe(He,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=h(Ve);return{trigger:d,mergedClosable:R(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:o,value:s,mergedClosable:c,trigger:l,$slots:{default:u}}=this,d=i??o;return k(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?k(`div`,{class:`${t}-tabs-tab-pad`}):null,k(`div`,Object.assign({key:n,"data-name":n,"data-disabled":r?!0:void 0},O({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),k(`span`,{class:`${t}-tabs-tab__label`},e?k(x,null,k(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),k(oe,{clsPrefix:t},{default:()=>k(a,null)})):u?u():typeof d==`object`?d:he(d??n)),c&&this.type===`card`?k(j,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),We=I(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[W(`segment-type`,[I(`tabs-rail`,[K(`&.transition-disabled`,[I(`tabs-capsule`,`
 transition: none;
 `)])])]),W(`top`,[I(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),W(`left`,[I(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),W(`left, right`,`
 flex-direction: row;
 `,[I(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),I(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),W(`right`,`
 flex-direction: row-reverse;
 `,[I(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),I(`tabs-bar`,`
 left: 0;
 `)]),W(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[I(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),I(`tabs-bar`,`
 top: 0;
 `)]),I(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[I(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),I(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[I(`tabs-tab`,`
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
 `)])])]),W(`flex`,[I(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[I(`tabs-wrapper`,`
 width: 100%;
 `,[I(`tabs-tab`,`
 margin-right: 0;
 `)])])]),I(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[N(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),N(`prefix`,`padding-right: 16px;`),N(`suffix`,`padding-left: 16px;`)]),W(`top, bottom`,[K(`>`,[I(`tabs-nav`,[I(`tabs-nav-scroll-wrapper`,[K(`&::before`,`
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
 `)])])])])]),W(`left, right`,[I(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),K(`>`,[I(`tabs-nav`,[I(`tabs-nav-scroll-wrapper`,[K(`&::before`,`
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
 `)])])])])]),I(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[I(`tabs-nav-y-scroll`,`
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
 `)]),I(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),I(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),I(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),I(`tabs-tab`,`
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
 `,[W(`disabled`,{cursor:`not-allowed`}),N(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),N(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),I(`tabs-bar`,`
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
 `)]),I(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),I(`tab-pane`,`
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
 `)]),I(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),W(`line-type, bar-type`,[I(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[K(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),W(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),W(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),I(`tabs-nav`,[W(`line-type`,[W(`top`,[N(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),I(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),I(`tabs-bar`,`
 bottom: -1px;
 `)]),W(`left`,[N(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),I(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),I(`tabs-bar`,`
 right: -1px;
 `)]),W(`right`,[N(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),I(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),I(`tabs-bar`,`
 left: -1px;
 `)]),W(`bottom`,[N(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),I(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),I(`tabs-bar`,`
 top: -1px;
 `)]),N(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),I(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),I(`tabs-bar`,`
 border-radius: 0;
 `)]),W(`card-type`,[N(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),I(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),I(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),I(`tabs-tab`,`
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
 `,[N(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),ye(`disabled`,[K(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),W(`closable`,`padding-right: 8px;`),W(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),W(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),W(`left, right`,`
 flex-direction: column; 
 `,[N(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),I(`tabs-wrapper`,`
 flex-direction: column;
 `),I(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[I(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),W(`top`,[W(`card-type`,[I(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),N(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),I(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[W(`active`,`
 border-bottom: 1px solid #0000;
 `)]),I(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),I(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),W(`left`,[W(`card-type`,[I(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),N(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),I(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[W(`active`,`
 border-right: 1px solid #0000;
 `)]),I(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),I(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),W(`right`,[W(`card-type`,[I(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),N(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),I(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[W(`active`,`
 border-left: 1px solid #0000;
 `)]),I(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),I(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),W(`bottom`,[W(`card-type`,[I(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),N(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),I(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[W(`active`,`
 border-top: 1px solid #0000;
 `)]),I(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),I(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Ge=Be,Ke=X({name:`Tabs`,props:Object.assign(Object.assign({},be.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=ve(e),a=be(`Tabs`,`-tabs`,We,fe,e,n),o=U(null),s=U(null),c=U(null),l=U(null),u=U(null),f=U(null),p=U(!0),m=U(!0),h=w(e,[`labelSize`,`size`]),g=R(()=>h.value?h.value:i?.value?.Tabs?.size||`medium`),_=w(e,[`activeName`,`value`]),v=U(_.value??e.defaultValue??(t.default?ae(t.default())[0]?.props?.name:null)),y=d(_,v),b={id:0},x=R(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});ue(y,()=>{b.id=0,D(),O()});function S(){let{value:e}=y;return e===null?null:o.value?.querySelector(`[data-name="${e}"]`)}function T(t){if(e.type===`card`)return;let{value:r}=s;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(E([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(E([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function ee(){if(e.type===`card`)return;let{value:t}=s;t&&(t.style.opacity=`0`)}function E(e){let{value:t}=s;if(t)for(let n of e)t.style[n]=``}function D(){if(e.type===`card`)return;let t=S();t?T(t):ee()}function O(){let e=u.value?.$el;if(!e)return;let t=S();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let k=U(null),A=0,j=null;function M(e){let t=k.value;if(t){A=e.getBoundingClientRect().height;let n=`${A}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};j?(r(),j(),j=null):j=r}}function ie(e){let t=k.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(A,n)}px`};j?(j(),j=null,r()):j=r}}function N(){let t=k.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let oe={value:[]},se=U(`next`);function ce(e){let t=y.value,n=`next`;for(let r of oe.value){if(r===t)break;if(r===e){n=`prev`;break}}se.value=n,le(e)}function le(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&we(n,t),r&&we(r,t),i&&we(i,t),v.value=t}function F(t){let{onClose:n}=e;n&&we(n,t)}let I=!0;function L(){let{value:e}=s;if(!e)return;I||=!1;let t=`transition-disabled`;e.classList.add(t),D(),e.classList.remove(t)}let z=U(null);function B({transitionDisabled:e}){let t=o.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=S();n&&z.value&&(z.value.style.width=`${n.offsetWidth}px`,z.value.style.height=`${n.offsetHeight}px`,z.value.style.transform=`translateX(${n.offsetLeft-C(getComputedStyle(t).paddingLeft)}px)`,e&&z.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}ue([y],()=>{e.type===`segment`&&ne(()=>{B({transitionDisabled:!1})})}),ge(()=>{e.type===`segment`&&B({transitionDisabled:!0})});let V=0;function pe(t){if(t.contentRect.width===0&&t.contentRect.height===0||V===t.contentRect.width)return;V=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(I||e.justifyContent?.startsWith(`space`))&&L(),n!==`segment`){let{placement:t}=e;K((t===`top`||t===`bottom`?u.value?.$el:f.value)||null)}}let H=Ge(pe,64);ue([()=>e.justifyContent,()=>e.size],()=>{ne(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&L()})});let W=U(!1);function he(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!W.value)s===`top`||s===`bottom`?a<r&&(W.value=!0):o<i&&(W.value=!0);else{let{value:e}=l;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(W.value=!1):o-i>e.$el.offsetHeight&&(W.value=!1)}K(u.value?.$el||null)}let G=Ge(he,64);function _e(){let{onAdd:t}=e;t&&t(),ne(()=>{let e=S(),{value:t}=u;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function K(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;p.value=e<=0,m.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;p.value=e<=0,m.value=e+r>=n}}let ye=Ge(e=>{K(e.target)},64);re(Ve,{triggerRef:q(e,`trigger`),tabStyleRef:q(e,`tabStyle`),tabClassRef:q(e,`tabClass`),addTabStyleRef:q(e,`addTabStyle`),addTabClassRef:q(e,`addTabClass`),paneClassRef:q(e,`paneClass`),paneStyleRef:q(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:q(e,`type`),closableRef:q(e,`closable`),valueRef:y,tabChangeIdRef:b,onBeforeLeaveRef:q(e,`onBeforeLeave`),activateTab:ce,handleClose:F,handleAdd:_e}),te(()=>{D(),O()}),xe(()=>{let{value:e}=c;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;p.value?e.classList.remove(r):e.classList.add(r),m.value?e.classList.remove(i):e.classList.add(i)});let Se={syncBarPosition:()=>{D()}},Ce=()=>{B({transitionDisabled:!0})},J=R(()=>{let{value:t}=g,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:o,closeIconColorHover:s,closeIconColorPressed:c,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:_,tabColorSegment:v,closeSize:y,closeIconSize:b,closeColorHover:x,closeColorPressed:S,closeBorderRadius:C,[P(`panePadding`,t)]:w,[P(`tabPadding`,r)]:T,[P(`tabPaddingVertical`,r)]:ee,[P(`tabGap`,r)]:E,[P(`tabGap`,`${r}Vertical`)]:D,[P(`tabTextColor`,n)]:O,[P(`tabTextColorActive`,n)]:te,[P(`tabTextColorHover`,n)]:k,[P(`tabTextColorDisabled`,n)]:A,[P(`tabFontSize`,t)]:ne},common:{cubicBezierEaseInOut:j}}=a.value;return{"--n-bezier":j,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":ne,"--n-tab-text-color":O,"--n-tab-text-color-active":te,"--n-tab-text-color-disabled":A,"--n-tab-text-color-hover":k,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":y,"--n-close-icon-size":b,"--n-close-color-hover":x,"--n-close-color-pressed":S,"--n-close-border-radius":C,"--n-close-icon-color":o,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":c,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":T,"--n-tab-padding-vertical":ee,"--n-tab-gap":E,"--n-tab-gap-vertical":D,"--n-pane-padding-left":de(w,`left`),"--n-pane-padding-right":de(w,`right`),"--n-pane-padding-top":de(w,`top`),"--n-pane-padding-bottom":de(w,`bottom`),"--n-font-weight-strong":_,"--n-tab-color-segment":v}}),Te=r?me(`tabs`,R(()=>`${g.value[0]}${e.type[0]}`),J,e):void 0;return Object.assign({mergedClsPrefix:n,mergedValue:y,renderedNames:new Set,segmentCapsuleElRef:z,tabsPaneWrapperRef:k,tabsElRef:o,barElRef:s,addTabInstRef:l,xScrollInstRef:u,scrollWrapperElRef:c,addTabFixed:W,tabWrapperStyle:x,handleNavResize:H,mergedSize:g,handleScroll:ye,handleTabsResize:G,cssVars:r?void 0:J,themeClass:Te?.themeClass,animationDirection:se,renderNameListRef:oe,yScrollElRef:f,handleSegmentResize:Ce,onAnimationBeforeLeave:M,onAnimationEnter:ie,onAnimationAfterEnter:N,onRender:Te?.onRender},Se)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,$slots:{default:u,prefix:d,suffix:f}}=this;s?.();let p=u?ae(u()).filter(e=>e.type.__TAB_PANE__===!0):[],m=u?ae(u()).filter(e=>e.type.__TAB__===!0):[],h=!m.length,g=t===`card`,_=t===`segment`,v=!g&&!_&&this.justifyContent;o.value=[];let y=()=>{let t=k(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},v?null:k(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),h?p.map((e,t)=>(o.value.push(e.props.name),Xe(k(Ue,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!v||v===`center`||v===`start`||v===`end`)}),e.children?{default:e.children.tab}:void 0)))):m.map((e,t)=>(o.value.push(e.props.name),Xe(t!==0&&!v?Ye(e):e))),!r&&i&&g?Je(i,(h?p.length:m.length)!==0):null,v?null:k(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return k(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},g&&i?k(J,{onResize:this.handleTabsResize},{default:()=>t}):t,g?k(`div`,{class:`${e}-tabs-pad`}):null,g?null:k(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},b=_?`top`:n;return k(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,v&&`${e}-tabs--flex`,`${e}-tabs--${b}`],style:this.cssVars},k(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${b}`,`${e}-tabs-nav`]},le(d,t=>t&&k(`div`,{class:`${e}-tabs-nav__prefix`},t)),_?k(J,{onResize:this.handleSegmentResize},{default:()=>k(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},k(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},k(`div`,{class:`${e}-tabs-wrapper`},k(`div`,{class:`${e}-tabs-tab`}))),h?p.map((e,t)=>(o.value.push(e.props.name),k(Ue,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):m.map((e,t)=>(o.value.push(e.props.name),t===0?e:Ye(e))))}):k(J,{onResize:this.handleNavResize},{default:()=>k(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(b)?k(Pe,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:y}):k(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},y()))}),r&&i&&g?Je(i,!0):null,le(f,t=>t&&k(`div`,{class:`${e}-tabs-nav__suffix`},t))),h&&(this.animated&&(b===`top`||b===`bottom`)?k(`div`,{ref:`tabsPaneWrapperRef`,style:l,class:[`${e}-tabs-pane-wrapper`,c]},qe(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):qe(p,this.mergedValue,this.renderedNames)))}});function qe(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?_e(e,[[Te,c]]):e)}}),o?k(E,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function Je(e,t){return k(Ue,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function Ye(e){let t=u(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Xe(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var Ze={class:`settings-section`},Qe=B(X({__name:`DisplaySettings`,setup(e){let t=Z(),n=Y(),{t:r}=G(),{mode:i,setMode:a}=Se(),o=[{label:r(`settings.display.themeLight`),value:`light`},{label:r(`settings.display.themeDark`),value:`dark`},{label:r(`settings.display.themeSystem`),value:`system`}];async function c(e){try{await t.saveSection(`display`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}function l(e){let t=e;a(t),c({skin:t})}return(e,n)=>(M(),m(`section`,Ze,[T(Q,{label:V(r)(`settings.display.theme`),hint:V(r)(`settings.display.themeHint`)},{default:H(()=>[T(V(y),{value:V(i),options:o,size:`small`,"consistent-menu-width":!1,class:`input-sm`,"onUpdate:value":l},null,8,[`value`])]),_:1},8,[`label`,`hint`]),T(Q,{label:V(r)(`settings.display.streaming`),hint:V(r)(`settings.display.streamingHint`)},{default:H(()=>[T(V(s),{value:V(t).display.streaming,"onUpdate:value":n[0]||=e=>c({streaming:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),T(Q,{label:V(r)(`settings.display.compact`),hint:V(r)(`settings.display.compactHint`)},{default:H(()=>[T(V(s),{value:V(t).display.compact,"onUpdate:value":n[1]||=e=>c({compact:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),T(Q,{label:V(r)(`settings.display.showReasoning`),hint:V(r)(`settings.display.showReasoningHint`)},{default:H(()=>[T(V(s),{value:V(t).display.show_reasoning,"onUpdate:value":n[2]||=e=>c({show_reasoning:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),T(Q,{label:V(r)(`settings.display.showCost`),hint:V(r)(`settings.display.showCostHint`)},{default:H(()=>[T(V(s),{value:V(t).display.show_cost,"onUpdate:value":n[3]||=e=>c({show_cost:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),T(Q,{label:V(r)(`settings.display.inlineDiffs`),hint:V(r)(`settings.display.inlineDiffsHint`)},{default:H(()=>[T(V(s),{value:V(t).display.inline_diffs,"onUpdate:value":n[4]||=e=>c({inline_diffs:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),T(Q,{label:V(r)(`settings.display.bellOnComplete`),hint:V(r)(`settings.display.bellOnCompleteHint`)},{default:H(()=>[T(V(s),{value:V(t).display.bell_on_complete,"onUpdate:value":n[5]||=e=>c({bell_on_complete:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),T(Q,{label:V(r)(`settings.display.busyInputMode`),hint:V(r)(`settings.display.busyInputModeHint`)},{default:H(()=>[T(V(s),{value:V(t).display.busy_input_mode===`interrupt`,"onUpdate:value":n[6]||=e=>c({busy_input_mode:e?`interrupt`:`off`})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-e737ef30`]]),$e={class:`settings-section`},et=B(X({__name:`AgentSettings`,setup(e){let t=Z(),n=Y(),{t:r}=G();async function i(e){try{await t.saveSection(`agent`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(M(),m(`section`,$e,[T(Q,{label:V(r)(`settings.agent.maxTurns`),hint:V(r)(`settings.agent.maxTurnsHint`)},{default:H(()=>[T(V(o),{value:V(t).agent.max_turns,min:1,max:200,step:5,size:`small`,class:`input-sm`,"onUpdate:value":n[0]||=e=>e!=null&&i({max_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),T(Q,{label:V(r)(`settings.agent.gatewayTimeout`),hint:V(r)(`settings.agent.gatewayTimeoutHint`)},{default:H(()=>[T(V(o),{value:V(t).agent.gateway_timeout,min:60,max:7200,step:60,size:`small`,class:`input-sm`,"onUpdate:value":n[1]||=e=>e!=null&&i({gateway_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),T(Q,{label:V(r)(`settings.agent.restartDrainTimeout`),hint:V(r)(`settings.agent.restartDrainTimeoutHint`)},{default:H(()=>[T(V(o),{value:V(t).agent.restart_drain_timeout,min:10,max:300,step:10,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({restart_drain_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),T(Q,{label:V(r)(`settings.agent.toolEnforcement`),hint:V(r)(`settings.agent.toolEnforcementHint`)},{default:H(()=>[T(V(y),{value:V(t).agent.tool_use_enforcement||`auto`,options:[{label:V(r)(`settings.agent.auto`),value:`auto`},{label:V(r)(`settings.agent.always`),value:`always`},{label:V(r)(`settings.agent.never`),value:`never`}],size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>i({tool_use_enforcement:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-1f96245d`]]),tt={class:`settings-section`},nt=B(X({__name:`MemorySettings`,setup(e){let t=Z(),n=Y(),{t:r}=G();async function i(e){try{await t.saveSection(`memory`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(M(),m(`section`,tt,[T(Q,{label:V(r)(`settings.memory.enabled`),hint:V(r)(`settings.memory.enabledHint`)},{default:H(()=>[T(V(s),{value:V(t).memory.memory_enabled,"onUpdate:value":n[0]||=e=>i({memory_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),T(Q,{label:V(r)(`settings.memory.userProfile`),hint:V(r)(`settings.memory.userProfileHint`)},{default:H(()=>[T(V(s),{value:V(t).memory.user_profile_enabled,"onUpdate:value":n[1]||=e=>i({user_profile_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),T(Q,{label:V(r)(`settings.memory.charLimit`),hint:V(r)(`settings.memory.charLimitHint`)},{default:H(()=>[T(V(o),{value:V(t).memory.memory_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({memory_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),T(Q,{label:V(r)(`settings.memory.userCharLimit`),hint:V(r)(`settings.memory.userCharLimitHint`)},{default:H(()=>[T(V(o),{value:V(t).memory.user_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>e!=null&&i({user_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0c8e2aa7`]]),rt={class:`settings-section`},it=B(X({__name:`SessionSettings`,setup(e){let t=Z(),n=je(),r=Y(),{t:i}=G();async function a(e){try{await t.saveSection(`session_reset`,e),r.success(i(`settings.saved`))}catch{r.error(i(`settings.saveFailed`))}}return(e,r)=>(M(),m(`section`,rt,[T(Q,{label:V(i)(`settings.session.mode`),hint:V(i)(`settings.session.modeHint`)},{default:H(()=>[T(V(y),{value:V(t).sessionReset.mode||`both`,options:[{label:V(i)(`settings.session.modeBoth`),value:`both`},{label:V(i)(`settings.session.modeIdle`),value:`idle`},{label:V(i)(`settings.session.modeHourly`),value:`hourly`}],size:`small`,class:`input-md`,"onUpdate:value":r[0]||=e=>a({mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),T(Q,{label:V(i)(`settings.session.idleMinutes`),hint:V(i)(`settings.session.idleMinutesHint`)},{default:H(()=>[T(V(o),{value:V(t).sessionReset.idle_minutes,min:10,max:10080,step:30,size:`small`,class:`input-sm`,"onUpdate:value":r[1]||=e=>e!=null&&a({idle_minutes:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),T(Q,{label:V(i)(`settings.session.atHour`),hint:V(i)(`settings.session.atHourHint`)},{default:H(()=>[T(V(o),{value:V(t).sessionReset.at_hour,min:0,max:23,step:1,size:`small`,class:`input-sm`,"onUpdate:value":r[2]||=e=>e!=null&&a({at_hour:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),T(Q,{label:V(i)(`settings.session.liveMonitorHumanOnly`),hint:V(i)(`settings.session.liveMonitorHumanOnlyHint`)},{default:H(()=>[T(V(s),{value:V(n).humanOnly,"onUpdate:value":r[3]||=e=>V(n).setHumanOnly(e)},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-3514aeb7`]]),at={class:`settings-section`},ot=B(X({__name:`PrivacySettings`,setup(e){let t=Z(),n=Y(),{t:r}=G();async function i(e){try{await t.saveSection(`privacy`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(M(),m(`section`,at,[T(Q,{label:V(r)(`settings.privacy.redactPii`),hint:V(r)(`settings.privacy.redactPiiHint`)},{default:H(()=>[T(V(s),{value:V(t).privacy.redact_pii,"onUpdate:value":n[0]||=e=>i({redact_pii:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-43145f27`]]),st={class:`settings-section`},ct={key:0,class:`empty-hint`},lt={class:`provider-header`},ut={class:`provider-name`},dt={key:0,class:`provider-fields`},ft={class:`field-row`},pt={key:1,class:`provider-fields`},mt={class:`field-row`},ht=B(X({__name:`ModelSettings`,setup(e){let{t}=G(),n=Me(),r=Y(),i=U(null),a=U({});ge(()=>{n.providers.length===0&&n.fetchProviders()});let o=e=>e.startsWith(`custom:`);function s(e){if(!(e in a.value)){let t=n.providers.find(t=>t.provider===e);a.value[e]=t?.api_key||``}return a.value[e]}async function c(e){let a=s(e);if(!a.trim()){r.warning(t(`settings.models.apiKeyPlaceholder`));return}i.value=e;try{await l(e,{api_key:a.trim()}),r.success(t(`settings.models.saved`)),await n.fetchProviders()}catch(e){r.error(e.message||t(`settings.models.saveFailed`))}finally{i.value=null}}async function u(e){let a=s(e);i.value=e;try{await l(e,{api_key:a.trim()}),r.success(t(`settings.models.saved`)),await n.fetchProviders()}catch(e){r.error(e.message||t(`settings.models.saveFailed`))}finally{i.value=null}}return(e,r)=>(M(),m(`section`,st,[T(V(ce),{show:V(n).loading},{default:H(()=>[V(n).providers.length===0?(M(),m(`div`,ct,[T(V(A),{description:V(t)(`settings.models.noProviders`)},null,8,[`description`])])):S(``,!0),(M(!0),m(x,null,ie(V(n).providers,e=>(M(),m(`div`,{key:e.provider,class:`provider-section`},[v(`div`,lt,[v(`h4`,ut,F(e.label),1),v(`span`,{class:Ce([`type-badge`,o(e.provider)?`custom`:`builtin`])},F(o(e.provider)?V(t)(`models.customType`):V(t)(`models.builtIn`)),3)]),o(e.provider)?(M(),m(`div`,pt,[v(`div`,mt,[T(V(p),{value:s(e.provider),type:`password`,"show-password-on":`click`,placeholder:V(t)(`settings.models.apiKeyPlaceholder`),autocomplete:`off`,"onUpdate:value":t=>a.value[e.provider]=t},null,8,[`value`,`placeholder`,`onUpdate:value`]),T(V(L),{type:`primary`,size:`small`,loading:i.value===e.provider,onClick:t=>u(e.provider)},{default:H(()=>[_(F(V(t)(`settings.models.save`)),1)]),_:1},8,[`loading`,`onClick`])])])):(M(),m(`div`,dt,[v(`div`,ft,[T(V(p),{value:s(e.provider),type:`password`,"show-password-on":`click`,placeholder:V(t)(`settings.models.apiKeyPlaceholder`),autocomplete:`off`,"onUpdate:value":t=>a.value[e.provider]=t},null,8,[`value`,`placeholder`,`onUpdate:value`]),T(V(L),{type:`primary`,size:`small`,loading:i.value===e.provider,onClick:t=>c(e.provider)},{default:H(()=>[_(F(V(t)(`settings.models.save`)),1)]),_:1},8,[`loading`,`onClick`])])]))]))),128))]),_:1},8,[`show`])]))}}),[[`__scopeId`,`data-v-c28727b7`]]),gt={class:`account-settings`},_t={class:`section-desc`},vt={key:0,class:`action-row`},yt={class:`action-label`},bt={key:1,class:`configured-section`},xt={class:`action-row`},St={class:`action-label`},Ct={class:`action-buttons`},wt=B(X({__name:`AccountSettings`,setup(n){let{t:r}=G(),i=Y(),a=U(!1),o=U(null),s=U(!1),l=U(!1),u=U(``),d=U(``),f=U(``),h=U(!1),g=U(``),y=U(``),b=U(``),x=U(!1),S=U(``),C=U(``);ge(async()=>{try{let e=await ke();a.value=e.hasPasswordLogin,o.value=e.username}catch{}});async function w(){if(d.value!==f.value){i.error(r(`login.passwordMismatch`));return}if(d.value.length<6){i.error(r(`login.passwordTooShort`));return}s.value=!0;try{await Oe(u.value,d.value),a.value=!0,o.value=u.value,l.value=!1,u.value=``,d.value=``,f.value=``,i.success(r(`login.setupSuccess`))}catch(e){i.error(e.message||r(`common.saveFailed`))}finally{s.value=!1}}async function E(){if(y.value!==b.value){i.error(r(`login.passwordMismatch`));return}if(y.value.length<6){i.error(r(`login.passwordTooShort`));return}s.value=!0;try{await Ae(g.value,y.value),h.value=!1,g.value=``,y.value=``,b.value=``,i.success(r(`login.passwordChanged`))}catch(e){i.error(e.message||r(`common.saveFailed`))}finally{s.value=!1}}async function O(){if(C.value.trim().length<2){i.error(r(`login.usernameTooShort`));return}s.value=!0;try{await De(S.value,C.value.trim()),o.value=C.value.trim(),x.value=!1,S.value=``,C.value=``,i.success(r(`login.usernameChanged`))}catch(e){i.error(e.message||r(`common.saveFailed`))}finally{s.value=!1}}async function te(){s.value=!0;try{await Ee(),a.value=!1,o.value=null,i.success(r(`login.passwordRemoved`))}catch(e){i.error(e.message||r(`common.saveFailed`))}finally{s.value=!1}}function k(){u.value=``,d.value=``,f.value=``,l.value=!0}function A(){g.value=``,y.value=``,b.value=``,h.value=!0}function ne(){S.value=``,C.value=``,x.value=!0}return(n,i)=>(M(),m(`div`,gt,[v(`p`,_t,F(V(r)(`login.setupDescription`)),1),a.value?(M(),m(`div`,bt,[v(`div`,xt,[v(`span`,St,F(V(r)(`login.passwordLoginConfigured`,{username:o.value})),1),v(`div`,Ct,[T(V(L),{onClick:A},{default:H(()=>[_(F(V(r)(`login.changePassword`)),1)]),_:1}),T(V(L),{onClick:ne},{default:H(()=>[_(F(V(r)(`login.changeUsername`)),1)]),_:1}),T(V(c),{onPositiveClick:te},{trigger:H(()=>[T(V(L),{type:`error`,ghost:``,loading:s.value},{default:H(()=>[_(F(V(r)(`login.removePasswordLogin`)),1)]),_:1},8,[`loading`])]),default:H(()=>[_(` `+F(V(r)(`login.removeConfirm`)),1)]),_:1})])])])):(M(),m(`div`,vt,[v(`span`,yt,F(V(r)(`login.passwordLoginNotConfigured`)),1),T(V(L),{type:`primary`,onClick:k},{default:H(()=>[_(F(V(r)(`login.setupPassword`)),1)]),_:1})])),T(V(ee),{show:l.value,"onUpdate:show":i[4]||=e=>l.value=e,preset:`dialog`,title:V(r)(`login.setupPassword`)},{action:H(()=>[T(V(L),{onClick:i[3]||=e=>l.value=!1},{default:H(()=>[_(F(V(r)(`common.cancel`)),1)]),_:1}),T(V(L),{type:`primary`,loading:s.value,onClick:w},{default:H(()=>[_(F(V(r)(`common.save`)),1)]),_:1},8,[`loading`])]),default:H(()=>[T(V(e),{"label-placement":`top`},{default:H(()=>[T(V(t),{label:V(r)(`login.username`)},{default:H(()=>[T(V(p),{value:u.value,"onUpdate:value":i[0]||=e=>u.value=e,placeholder:V(r)(`login.usernamePlaceholder`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),T(V(t),{label:V(r)(`login.newPassword`)},{default:H(()=>[T(V(p),{value:d.value,"onUpdate:value":i[1]||=e=>d.value=e,type:`password`,"show-password-on":`click`,placeholder:V(r)(`login.passwordPlaceholder`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),T(V(t),{label:V(r)(`login.confirmPassword`)},{default:H(()=>[T(V(p),{value:f.value,"onUpdate:value":i[2]||=e=>f.value=e,type:`password`,"show-password-on":`click`,placeholder:V(r)(`login.confirmPassword`),onKeyup:D(w,[`enter`])},null,8,[`value`,`placeholder`])]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`]),T(V(ee),{show:h.value,"onUpdate:show":i[9]||=e=>h.value=e,preset:`dialog`,title:V(r)(`login.changePassword`)},{action:H(()=>[T(V(L),{onClick:i[8]||=e=>h.value=!1},{default:H(()=>[_(F(V(r)(`common.cancel`)),1)]),_:1}),T(V(L),{type:`primary`,loading:s.value,onClick:E},{default:H(()=>[_(F(V(r)(`common.save`)),1)]),_:1},8,[`loading`])]),default:H(()=>[T(V(e),{"label-placement":`top`},{default:H(()=>[T(V(t),{label:V(r)(`login.currentPassword`)},{default:H(()=>[T(V(p),{value:g.value,"onUpdate:value":i[5]||=e=>g.value=e,type:`password`,"show-password-on":`click`,placeholder:V(r)(`login.currentPassword`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),T(V(t),{label:V(r)(`login.newPassword`)},{default:H(()=>[T(V(p),{value:y.value,"onUpdate:value":i[6]||=e=>y.value=e,type:`password`,"show-password-on":`click`,placeholder:V(r)(`login.newPassword`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),T(V(t),{label:V(r)(`login.confirmPassword`)},{default:H(()=>[T(V(p),{value:b.value,"onUpdate:value":i[7]||=e=>b.value=e,type:`password`,"show-password-on":`click`,placeholder:V(r)(`login.confirmPassword`),onKeyup:D(E,[`enter`])},null,8,[`value`,`placeholder`])]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`]),T(V(ee),{show:x.value,"onUpdate:show":i[13]||=e=>x.value=e,preset:`dialog`,title:V(r)(`login.changeUsername`)},{action:H(()=>[T(V(L),{onClick:i[12]||=e=>x.value=!1},{default:H(()=>[_(F(V(r)(`common.cancel`)),1)]),_:1}),T(V(L),{type:`primary`,loading:s.value,onClick:O},{default:H(()=>[_(F(V(r)(`common.save`)),1)]),_:1},8,[`loading`])]),default:H(()=>[T(V(e),{"label-placement":`top`},{default:H(()=>[T(V(t),{label:V(r)(`login.currentPassword`)},{default:H(()=>[T(V(p),{value:S.value,"onUpdate:value":i[10]||=e=>S.value=e,type:`password`,"show-password-on":`click`,placeholder:V(r)(`login.currentPassword`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),T(V(t),{label:V(r)(`login.newUsername`)},{default:H(()=>[T(V(p),{value:C.value,"onUpdate:value":i[11]||=e=>C.value=e,placeholder:V(r)(`login.usernamePlaceholder`),onKeyup:D(O,[`enter`])},null,8,[`value`,`placeholder`])]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`])]))}}),[[`__scopeId`,`data-v-79bc4876`]]),Tt={class:`settings-view`},Et={class:`page-header`},Dt={class:`header-title`},Ot={class:`settings-content`},kt=B(X({__name:`SettingsView`,setup(e){let t=Z(),{t:n}=G();return ge(()=>{t.fetchSettings()}),(e,r)=>(M(),m(`div`,Tt,[v(`header`,Et,[v(`h2`,Dt,F(V(n)(`settings.title`)),1)]),v(`div`,Ot,[T(V(ce),{show:V(t).loading||V(t).saving,size:`large`,description:V(n)(`common.loading`)},{default:H(()=>[T(V(Ke),{type:`line`,animated:``},{default:H(()=>[T(V($),{name:`account`,tab:V(n)(`settings.tabs.account`)},{default:H(()=>[T(wt)]),_:1},8,[`tab`]),T(V($),{name:`display`,tab:V(n)(`settings.tabs.display`)},{default:H(()=>[T(Qe)]),_:1},8,[`tab`]),T(V($),{name:`agent`,tab:V(n)(`settings.tabs.agent`)},{default:H(()=>[T(et)]),_:1},8,[`tab`]),T(V($),{name:`memory`,tab:V(n)(`settings.tabs.memory`)},{default:H(()=>[T(nt)]),_:1},8,[`tab`]),T(V($),{name:`session`,tab:V(n)(`settings.tabs.session`)},{default:H(()=>[T(it)]),_:1},8,[`tab`]),T(V($),{name:`privacy`,tab:V(n)(`settings.tabs.privacy`)},{default:H(()=>[T(ot)]),_:1},8,[`tab`]),T(V($),{name:`models`,tab:V(n)(`settings.tabs.models`)},{default:H(()=>[T(ht)]),_:1},8,[`tab`])]),_:1})]),_:1},8,[`show`,`description`])])]))}}),[[`__scopeId`,`data-v-6bfbe8eb`]]);export{kt as default};