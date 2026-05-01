const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/system-LgOM7o3G.js","assets/index-CnGJXrS6.js","assets/chunk-Dlc7tRH4.js","assets/preload-helper-DSXbuxSR.js","assets/_baseFor-DZI4VeME.js","assets/app-IxeQ4riv.js","assets/index-r38er_pj.css"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper-DSXbuxSR.js";import{n as t,t as n}from"./FormItem-mcbhYs2B.js";import{t as r}from"./get-slot-BOyFC3Im.js";import{S as i}from"./_baseFor-DZI4VeME.js";import{n as a,t as o}from"./now-CqJP4WZO.js";import{t as s}from"./Add-C-Gi2z6x.js";import{t as c}from"./InputNumber-COxDFTnv.js";import{t as l}from"./composables-F-Cvqt8l.js";import{t as u}from"./Switch-CHoTWwGS.js";import{t as d}from"./Popconfirm-nlkKRc9t.js";import{i as f}from"./system-LgOM7o3G.js";import{n as p}from"./app-IxeQ4riv.js";import{$r as m,Ar as h,Br as g,C as _,Dr as v,E as y,Fr as b,G as x,Gn as S,Hn as C,Hr as w,I as T,Ir as E,Jr as D,Kr as O,Lr as k,M as A,Mn as j,Nn as M,Nr as ee,On as te,Qr as ne,Rr as N,S as P,Sn as F,Sr as I,Ur as L,Vn as re,Wn as ie,Wr as R,Yr as ae,_i as z,_n as oe,ai as se,ci as ce,cr as B,d as le,di as V,dn as ue,dr as H,dt as de,ei as U,et as fe,f as pe,fi as W,fr as me,g as he,hi as ge,hn as _e,ii as ve,ir as ye,jn as be,k as xe,kr as Se,ln as Ce,lr as G,lt as we,mi as K,ni as Te,nr as Ee,oi as De,pr as q,pt as Oe,qn as ke,qr as Ae,si as J,t as je,ti as Me,u as Y,un as Ne,ur as X,vn as Pe,vr as Z,wn as Fe,xn as Ie,zr as Q}from"./index-CnGJXrS6.js";import{a as Le,n as Re,o as ze,r as Be,t as Ve}from"./auth-DxQ7J_uG.js";import{t as He}from"./settings-ErTSNTeO.js";import{t as $}from"./SettingRow-BBhzsKhn.js";import{t as Ue}from"./session-browser-prefs-BBZRgK_G.js";import{t as We}from"./clipboard-BulqpJ4r.js";import{t as Ge}from"./models-BlpW6zoi.js";var Ke=be(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[be(`&::-webkit-scrollbar`,{width:0,height:0})]),qe=R({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=V(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=M();return Ke.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:j,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return O(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Je=`Expected a function`,Ye=Math.max,Xe=Math.min;function Ze(e,t,n){var r,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof e!=`function`)throw TypeError(Je);t=a(t)||0,i(n)&&(p=!!n.leading,m=`maxWait`in n,c=m?Ye(a(n.maxWait)||0,t):c,h=`trailing`in n?!!n.trailing:h);function g(t){var n=r,i=s;return r=s=void 0,f=t,l=e.apply(i,n),l}function _(e){return f=e,u=setTimeout(b,t),p?g(e):l}function v(e){var n=e-d,r=e-f,i=t-n;return m?Xe(i,c-r):i}function y(e){var n=e-d,r=e-f;return d===void 0||n>=t||n<0||m&&r>=c}function b(){var e=o();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&r?g(e):(r=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,r=d=s=u=void 0}function C(){return u===void 0?l:x(o())}function w(){var e=o(),n=y(e);if(r=arguments,s=this,d=e,n){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,t),g(d)}return u===void 0&&(u=setTimeout(b,t)),l}return w.cancel=S,w.flush=C,w}var Qe=`Expected a function`;function $e(e,t,n){var r=!0,a=!0;if(typeof e!=`function`)throw TypeError(Qe);return i(n)&&(r=`leading`in n?!!n.leading:r,a=`trailing`in n?!!n.trailing:a),Ze(e,t,{leading:r,maxWait:t,trailing:a})}var et={name:String,value:{type:[String,Number,Boolean],default:`on`},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},tt=re(`n-radio-group`);function nt(e){let t=Ae(tt,null),{mergedClsPrefixRef:n,mergedComponentPropsRef:r}=ue(e),i=Ce(e,{mergedSize(n){let{size:i}=e;if(i!==void 0)return i;if(t){let{mergedSizeRef:{value:e}}=t;if(e!==void 0)return e}return n?n.mergedSize.value:r?.value?.Radio?.size||`medium`},mergedDisabled(n){return!!(e.disabled||t?.disabledRef.value||n?.disabled.value)}}),{mergedSizeRef:a,mergedDisabledRef:o}=i,s=V(null),c=V(null),l=V(e.defaultChecked),u=ie(W(e,`checked`),l),d=ke(()=>t?t.valueRef.value===e.value:u.value),f=ke(()=>{let{name:n}=e;if(n!==void 0)return n;if(t)return t.nameRef.value}),p=V(!1);function m(){if(t){let{doUpdateValue:n}=t,{value:r}=e;F(n,r)}else{let{onUpdateChecked:t,"onUpdate:checked":n}=e,{nTriggerFormInput:r,nTriggerFormChange:a}=i;t&&F(t,!0),n&&F(n,!0),r(),a(),l.value=!0}}function h(){o.value||d.value||m()}function g(){h(),s.value&&(s.value.checked=d.value)}function _(){p.value=!1}function v(){p.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:n,inputRef:s,labelRef:c,mergedName:f,mergedDisabled:o,renderSafeChecked:d,focus:p,mergedSize:a,handleRadioInputChange:g,handleRadioInputBlur:_,handleRadioInputFocus:v}}var rt=R({name:`RadioButton`,props:et,setup:nt,render(){let{mergedClsPrefix:e}=this;return O(`label`,{class:[`${e}-radio-button`,this.mergedDisabled&&`${e}-radio-button--disabled`,this.renderSafeChecked&&`${e}-radio-button--checked`,this.focus&&[`${e}-radio-button--focus`]]},O(`input`,{ref:`inputRef`,type:`radio`,class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),O(`div`,{class:`${e}-radio-button__state-border`}),_e(this.$slots.default,t=>!t&&!this.label?null:O(`div`,{ref:`labelRef`,class:`${e}-radio__label`},t||this.label)))}}),it=G(`radio-group`,`
 display: inline-block;
 font-size: var(--n-font-size);
`,[X(`splitor`,`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[H(`checked`,{backgroundColor:`var(--n-button-border-color-active)`}),H(`disabled`,{opacity:`var(--n-opacity-disabled)`})]),H(`button-group`,`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[G(`radio-button`,{height:`var(--n-height)`,lineHeight:`var(--n-height)`}),X(`splitor`,{height:`var(--n-height)`})]),G(`radio-button`,`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[G(`radio-input`,`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),X(`state-border`,`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),B(`&:first-child`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[X(`state-border`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),B(`&:last-child`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[X(`state-border`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),me(`disabled`,`
 cursor: pointer;
 `,[B(`&:hover`,[X(`state-border`,`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),me(`checked`,{color:`var(--n-button-text-color-hover)`})]),H(`focus`,[B(`&:not(:active)`,[X(`state-border`,{boxShadow:`var(--n-button-box-shadow-focus)`})])])]),H(`checked`,`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),H(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function at(e,t,n){let r=[],i=!1;for(let a=0;a<e.length;++a){let o=e[a],s=o.type?.name;s===`RadioButton`&&(i=!0);let c=o.props;if(s!==`RadioButton`){r.push(o);continue}if(a===0)r.push(o);else{let e=r[r.length-1].props,i=t===e.value,a=e.disabled,s=t===c.value,l=c.disabled,u=(i?2:0)+ +!a,d=(s?2:0)+ +!l,f={[`${n}-radio-group__splitor--disabled`]:a,[`${n}-radio-group__splitor--checked`]:i},p={[`${n}-radio-group__splitor--disabled`]:l,[`${n}-radio-group__splitor--checked`]:s},m=u<d?p:f;r.push(O(`div`,{class:[`${n}-radio-group__splitor`,m]}),o)}}return{children:r,isButtonGroup:i}}var ot=R({name:`RadioGroup`,props:Object.assign(Object.assign({},de.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),setup(e){let t=V(null),{mergedSizeRef:n,mergedDisabledRef:r,nTriggerFormChange:i,nTriggerFormInput:a,nTriggerFormBlur:o,nTriggerFormFocus:s}=Ce(e),{mergedClsPrefixRef:c,inlineThemeDisabled:l,mergedRtlRef:u}=ue(e),d=de(`Radio`,`-radio-group`,it,y,e,c),f=V(e.defaultValue),p=ie(W(e,`value`),f);function m(t){let{onUpdateValue:n,"onUpdate:value":r}=e;n&&F(n,t),r&&F(r,t),f.value=t,i(),a()}function h(e){let{value:n}=t;n&&(n.contains(e.relatedTarget)||s())}function g(e){let{value:n}=t;n&&(n.contains(e.relatedTarget)||o())}Me(tt,{mergedClsPrefixRef:c,nameRef:W(e,`name`),valueRef:p,disabledRef:r,mergedSizeRef:n,doUpdateValue:m});let _=Oe(`Radio`,u,c),v=E(()=>{let{value:e}=n,{common:{cubicBezierEaseInOut:t},self:{buttonBorderColor:r,buttonBorderColorActive:i,buttonBorderRadius:a,buttonBoxShadow:o,buttonBoxShadowFocus:s,buttonBoxShadowHover:c,buttonColor:l,buttonColorActive:u,buttonTextColor:f,buttonTextColorActive:p,buttonTextColorHover:m,opacityDisabled:h,[q(`buttonHeight`,e)]:g,[q(`fontSize`,e)]:_}}=d.value;return{"--n-font-size":_,"--n-bezier":t,"--n-button-border-color":r,"--n-button-border-color-active":i,"--n-button-border-radius":a,"--n-button-box-shadow":o,"--n-button-box-shadow-focus":s,"--n-button-box-shadow-hover":c,"--n-button-color":l,"--n-button-color-active":u,"--n-button-text-color":f,"--n-button-text-color-hover":m,"--n-button-text-color-active":p,"--n-height":g,"--n-opacity-disabled":h}}),b=l?Ne(`radio-group`,E(()=>n.value[0]),v,e):void 0;return{selfElRef:t,rtlEnabled:_,mergedClsPrefix:c,mergedValue:p,handleFocusout:g,handleFocusin:h,cssVars:l?void 0:v,themeClass:b?.themeClass,onRender:b?.onRender}},render(){var e;let{mergedValue:t,mergedClsPrefix:n,handleFocusin:i,handleFocusout:a}=this,{children:o,isButtonGroup:s}=at(Ie(r(this)),t,n);return(e=this.onRender)==null||e.call(this),O(`div`,{onFocusin:i,onFocusout:a,ref:`selfElRef`,class:[`${n}-radio-group`,this.rtlEnabled&&`${n}-radio-group--rtl`,this.themeClass,s&&`${n}-radio-group--button-group`],style:this.cssVars},o)}}),st=re(`n-tabs`),ct={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},lt=R({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:ct,slots:Object,setup(e){let t=Ae(st,null);return t||Fe(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return O(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),ut=R({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Pe(ct,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=Ae(st);return{trigger:d,mergedClosable:E(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:a,value:o,mergedClosable:c,trigger:l,$slots:{default:u}}=this,d=i??a;return O(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?O(`div`,{class:`${t}-tabs-tab-pad`}):null,O(`div`,Object.assign({key:n,"data-name":n,"data-disabled":r?!0:void 0},D({class:[`${t}-tabs-tab`,o===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),O(`span`,{class:`${t}-tabs-tab__label`},e?O(ee,null,O(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),O(we,{clsPrefix:t},{default:()=>O(s,null)})):u?u():typeof d==`object`?d:oe(d??n)),c&&this.type===`card`?O(fe,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),dt=G(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[H(`segment-type`,[G(`tabs-rail`,[B(`&.transition-disabled`,[G(`tabs-capsule`,`
 transition: none;
 `)])])]),H(`top`,[G(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),H(`left`,[G(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),H(`left, right`,`
 flex-direction: row;
 `,[G(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),G(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),H(`right`,`
 flex-direction: row-reverse;
 `,[G(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),G(`tabs-bar`,`
 left: 0;
 `)]),H(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[G(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),G(`tabs-bar`,`
 top: 0;
 `)]),G(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[G(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),G(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[G(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[H(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),B(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),H(`flex`,[G(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[G(`tabs-wrapper`,`
 width: 100%;
 `,[G(`tabs-tab`,`
 margin-right: 0;
 `)])])]),G(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[X(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),X(`prefix`,`padding-right: 16px;`),X(`suffix`,`padding-left: 16px;`)]),H(`top, bottom`,[B(`>`,[G(`tabs-nav`,[G(`tabs-nav-scroll-wrapper`,[B(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),B(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),H(`shadow-start`,[B(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),H(`shadow-end`,[B(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),H(`left, right`,[G(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),B(`>`,[G(`tabs-nav`,[G(`tabs-nav-scroll-wrapper`,[B(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),B(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),H(`shadow-start`,[B(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),H(`shadow-end`,[B(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),G(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[G(`tabs-nav-y-scroll`,`
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
 `)]),G(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),G(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),G(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),G(`tabs-tab`,`
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
 `,[H(`disabled`,{cursor:`not-allowed`}),X(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),X(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),G(`tabs-bar`,`
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
 `),H(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),G(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),G(`tab-pane`,`
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
 `)]),G(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),H(`line-type, bar-type`,[G(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[B(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),H(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),H(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),G(`tabs-nav`,[H(`line-type`,[H(`top`,[X(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),G(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),G(`tabs-bar`,`
 bottom: -1px;
 `)]),H(`left`,[X(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),G(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),G(`tabs-bar`,`
 right: -1px;
 `)]),H(`right`,[X(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),G(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),G(`tabs-bar`,`
 left: -1px;
 `)]),H(`bottom`,[X(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),G(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),G(`tabs-bar`,`
 top: -1px;
 `)]),X(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),G(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),G(`tabs-bar`,`
 border-radius: 0;
 `)]),H(`card-type`,[X(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),G(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),G(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),G(`tabs-tab`,`
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
 `,[H(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[X(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),me(`disabled`,[B(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),H(`closable`,`padding-right: 8px;`),H(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),H(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),H(`left, right`,`
 flex-direction: column; 
 `,[X(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),G(`tabs-wrapper`,`
 flex-direction: column;
 `),G(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[G(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),H(`top`,[H(`card-type`,[G(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),X(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),G(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[H(`active`,`
 border-bottom: 1px solid #0000;
 `)]),G(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),G(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),H(`left`,[H(`card-type`,[G(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),X(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),G(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[H(`active`,`
 border-right: 1px solid #0000;
 `)]),G(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),G(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),H(`right`,[H(`card-type`,[G(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),X(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),G(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[H(`active`,`
 border-left: 1px solid #0000;
 `)]),G(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),G(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),H(`bottom`,[H(`card-type`,[G(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),X(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),G(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[H(`active`,`
 border-top: 1px solid #0000;
 `)]),G(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),G(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),ft=$e,pt=R({name:`Tabs`,props:Object.assign(Object.assign({},de.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=ue(e),a=de(`Tabs`,`-tabs`,dt,he,e,n),o=V(null),s=V(null),c=V(null),l=V(null),u=V(null),d=V(null),f=V(!0),p=V(!0),m=C(e,[`labelSize`,`size`]),h=E(()=>m.value?m.value:i?.value?.Tabs?.size||`medium`),g=C(e,[`activeName`,`value`]),_=V(g.value??e.defaultValue??(t.default?Ie(t.default())[0]?.props?.name:null)),v=ie(g,_),y={id:0},b=E(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});se(v,()=>{y.id=0,O(),k()});function x(){let{value:e}=v;return e===null?null:o.value?.querySelector(`[data-name="${e}"]`)}function w(t){if(e.type===`card`)return;let{value:r}=s;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(D([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(D([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function T(){if(e.type===`card`)return;let{value:t}=s;t&&(t.style.opacity=`0`)}function D(e){let{value:t}=s;if(t)for(let n of e)t.style[n]=``}function O(){if(e.type===`card`)return;let t=x();t?w(t):T()}function k(){let e=u.value?.$el;if(!e)return;let t=x();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let A=V(null),j=0,M=null;function ee(e){let t=A.value;if(t){j=e.getBoundingClientRect().height;let n=`${j}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};M?(r(),M(),M=null):M=r}}function te(e){let t=A.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(j,n)}px`};M?(M(),M=null,r()):M=r}}function N(){let t=A.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let P={value:[]},I=V(`next`);function L(e){let t=v.value,n=`next`;for(let r of P.value){if(r===t)break;if(r===e){n=`prev`;break}}I.value=n,re(e)}function re(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&F(n,t),r&&F(r,t),i&&F(i,t),_.value=t}function R(t){let{onClose:n}=e;n&&F(n,t)}let z=!0;function oe(){let{value:e}=s;if(!e)return;z||=!1;let t=`transition-disabled`;e.classList.add(t),O(),e.classList.remove(t)}let ce=V(null);function B({transitionDisabled:e}){let t=o.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=x();n&&ce.value&&(ce.value.style.width=`${n.offsetWidth}px`,ce.value.style.height=`${n.offsetHeight}px`,ce.value.style.transform=`translateX(${n.offsetLeft-Ee(getComputedStyle(t).paddingLeft)}px)`,e&&ce.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}se([v],()=>{e.type===`segment`&&ae(()=>{B({transitionDisabled:!1})})}),ne(()=>{e.type===`segment`&&B({transitionDisabled:!0})});let le=0;function H(t){if(t.contentRect.width===0&&t.contentRect.height===0||le===t.contentRect.width)return;le=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(z||e.justifyContent?.startsWith(`space`))&&oe(),n!==`segment`){let{placement:t}=e;_e((t===`top`||t===`bottom`?u.value?.$el:d.value)||null)}}let U=ft(H,64);se([()=>e.justifyContent,()=>e.size],()=>{ae(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&oe()})});let fe=V(!1);function pe(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!fe.value)s===`top`||s===`bottom`?a<r&&(fe.value=!0):o<i&&(fe.value=!0);else{let{value:e}=l;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(fe.value=!1):o-i>e.$el.offsetHeight&&(fe.value=!1)}_e(u.value?.$el||null)}let me=ft(pe,64);function ge(){let{onAdd:t}=e;t&&t(),ae(()=>{let e=x(),{value:t}=u;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function _e(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;f.value=e<=0,p.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;f.value=e<=0,p.value=e+r>=n}}let ve=ft(e=>{_e(e.target)},64);Me(st,{triggerRef:W(e,`trigger`),tabStyleRef:W(e,`tabStyle`),tabClassRef:W(e,`tabClass`),addTabStyleRef:W(e,`addTabStyle`),addTabClassRef:W(e,`addTabClass`),paneClassRef:W(e,`paneClass`),paneStyleRef:W(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:W(e,`type`),closableRef:W(e,`closable`),valueRef:v,tabChangeIdRef:y,onBeforeLeaveRef:W(e,`onBeforeLeave`),activateTab:L,handleClose:R,handleAdd:ge}),S(()=>{O(),k()}),De(()=>{let{value:e}=c;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;f.value?e.classList.remove(r):e.classList.add(r),p.value?e.classList.remove(i):e.classList.add(i)});let be={syncBarPosition:()=>{O()}},xe=()=>{B({transitionDisabled:!0})},Se=E(()=>{let{value:t}=h,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:o,closeIconColorHover:s,closeIconColorPressed:c,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:g,fontWeightStrong:_,tabColorSegment:v,closeSize:y,closeIconSize:b,closeColorHover:x,closeColorPressed:S,closeBorderRadius:C,[q(`panePadding`,t)]:w,[q(`tabPadding`,r)]:T,[q(`tabPaddingVertical`,r)]:E,[q(`tabGap`,r)]:D,[q(`tabGap`,`${r}Vertical`)]:O,[q(`tabTextColor`,n)]:k,[q(`tabTextColorActive`,n)]:A,[q(`tabTextColorHover`,n)]:j,[q(`tabTextColorDisabled`,n)]:M,[q(`tabFontSize`,t)]:ee},common:{cubicBezierEaseInOut:te}}=a.value;return{"--n-bezier":te,"--n-color-segment":g,"--n-bar-color":i,"--n-tab-font-size":ee,"--n-tab-text-color":k,"--n-tab-text-color-active":A,"--n-tab-text-color-disabled":M,"--n-tab-text-color-hover":j,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":y,"--n-close-icon-size":b,"--n-close-color-hover":x,"--n-close-color-pressed":S,"--n-close-border-radius":C,"--n-close-icon-color":o,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":c,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":T,"--n-tab-padding-vertical":E,"--n-tab-gap":D,"--n-tab-gap-vertical":O,"--n-pane-padding-left":ye(w,`left`),"--n-pane-padding-right":ye(w,`right`),"--n-pane-padding-top":ye(w,`top`),"--n-pane-padding-bottom":ye(w,`bottom`),"--n-font-weight-strong":_,"--n-tab-color-segment":v}}),Ce=r?Ne(`tabs`,E(()=>`${h.value[0]}${e.type[0]}`),Se,e):void 0;return Object.assign({mergedClsPrefix:n,mergedValue:v,renderedNames:new Set,segmentCapsuleElRef:ce,tabsPaneWrapperRef:A,tabsElRef:o,barElRef:s,addTabInstRef:l,xScrollInstRef:u,scrollWrapperElRef:c,addTabFixed:fe,tabWrapperStyle:b,handleNavResize:U,mergedSize:h,handleScroll:ve,handleTabsResize:me,cssVars:r?void 0:Se,themeClass:Ce?.themeClass,animationDirection:I,renderNameListRef:P,yScrollElRef:d,handleSegmentResize:xe,onAnimationBeforeLeave:ee,onAnimationEnter:te,onAnimationAfterEnter:N,onRender:Ce?.onRender},be)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,$slots:{default:u,prefix:d,suffix:f}}=this;s?.();let p=u?Ie(u()).filter(e=>e.type.__TAB_PANE__===!0):[],m=u?Ie(u()).filter(e=>e.type.__TAB__===!0):[],h=!m.length,g=t===`card`,_=t===`segment`,v=!g&&!_&&this.justifyContent;o.value=[];let y=()=>{let t=O(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},v?null:O(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),h?p.map((e,t)=>(o.value.push(e.props.name),_t(O(ut,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!v||v===`center`||v===`start`||v===`end`)}),e.children?{default:e.children.tab}:void 0)))):m.map((e,t)=>(o.value.push(e.props.name),_t(t!==0&&!v?gt(e):e))),!r&&i&&g?ht(i,(h?p.length:m.length)!==0):null,v?null:O(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return O(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},g&&i?O(te,{onResize:this.handleTabsResize},{default:()=>t}):t,g?O(`div`,{class:`${e}-tabs-pad`}):null,g?null:O(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},b=_?`top`:n;return O(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,v&&`${e}-tabs--flex`,`${e}-tabs--${b}`],style:this.cssVars},O(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${b}`,`${e}-tabs-nav`]},_e(d,t=>t&&O(`div`,{class:`${e}-tabs-nav__prefix`},t)),_?O(te,{onResize:this.handleSegmentResize},{default:()=>O(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},O(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},O(`div`,{class:`${e}-tabs-wrapper`},O(`div`,{class:`${e}-tabs-tab`}))),h?p.map((e,t)=>(o.value.push(e.props.name),O(ut,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):m.map((e,t)=>(o.value.push(e.props.name),t===0?e:gt(e))))}):O(te,{onResize:this.handleNavResize},{default:()=>O(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(b)?O(qe,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:y}):O(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},y()))}),r&&i&&g?ht(i,!0):null,_e(f,t=>t&&O(`div`,{class:`${e}-tabs-nav__suffix`},t))),h&&(this.animated&&(b===`top`||b===`bottom`)?O(`div`,{ref:`tabsPaneWrapperRef`,style:l,class:[`${e}-tabs-pane-wrapper`,c]},mt(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):mt(p,this.mergedValue,this.renderedNames)))}});function mt(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?ce(e,[[Se,c]]):e)}}),o?O(v,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function ht(e,t){return O(ut,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function gt(e){let t=b(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function _t(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var vt={class:`settings-section`},yt=Y(R({__name:`DisplaySettings`,setup(e){let t=He(),n=P(),{t:r}=Z(),{mode:i,setMode:a}=le(),o=[{label:r(`settings.display.themeLight`),value:`light`},{label:r(`settings.display.themeDark`),value:`dark`},{label:r(`settings.display.themeSystem`),value:`system`}];async function s(e){try{await t.saveSection(`display`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}function c(e){let t=e;a(t),s({skin:t})}return(e,n)=>(U(),g(`section`,vt,[L($,{label:K(r)(`settings.display.theme`),hint:K(r)(`settings.display.themeHint`)},{default:J(()=>[L(K(xe),{value:K(i),options:o,size:`small`,"consistent-menu-width":!1,class:`input-sm`,"onUpdate:value":c},null,8,[`value`])]),_:1},8,[`label`,`hint`]),L($,{label:K(r)(`settings.display.streaming`),hint:K(r)(`settings.display.streamingHint`)},{default:J(()=>[L(K(u),{value:K(t).display.streaming,"onUpdate:value":n[0]||=e=>s({streaming:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),L($,{label:K(r)(`settings.display.compact`),hint:K(r)(`settings.display.compactHint`)},{default:J(()=>[L(K(u),{value:K(t).display.compact,"onUpdate:value":n[1]||=e=>s({compact:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),L($,{label:K(r)(`settings.display.showReasoning`),hint:K(r)(`settings.display.showReasoningHint`)},{default:J(()=>[L(K(u),{value:K(t).display.show_reasoning,"onUpdate:value":n[2]||=e=>s({show_reasoning:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),L($,{label:K(r)(`settings.display.showCost`),hint:K(r)(`settings.display.showCostHint`)},{default:J(()=>[L(K(u),{value:K(t).display.show_cost,"onUpdate:value":n[3]||=e=>s({show_cost:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),L($,{label:K(r)(`settings.display.inlineDiffs`),hint:K(r)(`settings.display.inlineDiffsHint`)},{default:J(()=>[L(K(u),{value:K(t).display.inline_diffs,"onUpdate:value":n[4]||=e=>s({inline_diffs:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),L($,{label:K(r)(`settings.display.bellOnComplete`),hint:K(r)(`settings.display.bellOnCompleteHint`)},{default:J(()=>[L(K(u),{value:K(t).display.bell_on_complete,"onUpdate:value":n[5]||=e=>s({bell_on_complete:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),L($,{label:K(r)(`settings.display.busyInputMode`),hint:K(r)(`settings.display.busyInputModeHint`)},{default:J(()=>[L(K(u),{value:K(t).display.busy_input_mode===`interrupt`,"onUpdate:value":n[6]||=e=>s({busy_input_mode:e?`interrupt`:`off`})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-e737ef30`]]),bt={class:`settings-section`},xt=Y(R({__name:`AgentSettings`,setup(e){let t=He(),n=P(),{t:r}=Z();async function i(e){try{await t.saveSection(`agent`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(U(),g(`section`,bt,[L($,{label:K(r)(`settings.agent.maxTurns`),hint:K(r)(`settings.agent.maxTurnsHint`)},{default:J(()=>[L(K(c),{value:K(t).agent.max_turns,min:1,max:200,step:5,size:`small`,class:`input-sm`,"onUpdate:value":n[0]||=e=>e!=null&&i({max_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),L($,{label:K(r)(`settings.agent.gatewayTimeout`),hint:K(r)(`settings.agent.gatewayTimeoutHint`)},{default:J(()=>[L(K(c),{value:K(t).agent.gateway_timeout,min:60,max:7200,step:60,size:`small`,class:`input-sm`,"onUpdate:value":n[1]||=e=>e!=null&&i({gateway_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),L($,{label:K(r)(`settings.agent.restartDrainTimeout`),hint:K(r)(`settings.agent.restartDrainTimeoutHint`)},{default:J(()=>[L(K(c),{value:K(t).agent.restart_drain_timeout,min:10,max:300,step:10,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({restart_drain_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),L($,{label:K(r)(`settings.agent.toolEnforcement`),hint:K(r)(`settings.agent.toolEnforcementHint`)},{default:J(()=>[L(K(xe),{value:K(t).agent.tool_use_enforcement||`auto`,options:[{label:K(r)(`settings.agent.auto`),value:`auto`},{label:K(r)(`settings.agent.always`),value:`always`},{label:K(r)(`settings.agent.never`),value:`never`}],size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>i({tool_use_enforcement:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-1f96245d`]]),St={class:`settings-section`},Ct=Y(R({__name:`MemorySettings`,setup(e){let t=He(),n=P(),{t:r}=Z();async function i(e){try{await t.saveSection(`memory`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(U(),g(`section`,St,[L($,{label:K(r)(`settings.memory.enabled`),hint:K(r)(`settings.memory.enabledHint`)},{default:J(()=>[L(K(u),{value:K(t).memory.memory_enabled,"onUpdate:value":n[0]||=e=>i({memory_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),L($,{label:K(r)(`settings.memory.userProfile`),hint:K(r)(`settings.memory.userProfileHint`)},{default:J(()=>[L(K(u),{value:K(t).memory.user_profile_enabled,"onUpdate:value":n[1]||=e=>i({user_profile_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),L($,{label:K(r)(`settings.memory.charLimit`),hint:K(r)(`settings.memory.charLimitHint`)},{default:J(()=>[L(K(c),{value:K(t).memory.memory_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({memory_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),L($,{label:K(r)(`settings.memory.userCharLimit`),hint:K(r)(`settings.memory.userCharLimitHint`)},{default:J(()=>[L(K(c),{value:K(t).memory.user_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>e!=null&&i({user_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0c8e2aa7`]]),wt={class:`settings-section`},Tt=Y(R({__name:`SessionSettings`,setup(e){let t=He(),n=Ue(),r=P(),{t:i}=Z();async function a(e){try{await t.saveSection(`session_reset`,e),r.success(i(`settings.saved`))}catch{r.error(i(`settings.saveFailed`))}}return(e,r)=>(U(),g(`section`,wt,[L($,{label:K(i)(`settings.session.mode`),hint:K(i)(`settings.session.modeHint`)},{default:J(()=>[L(K(xe),{value:K(t).sessionReset.mode||`both`,options:[{label:K(i)(`settings.session.modeBoth`),value:`both`},{label:K(i)(`settings.session.modeIdle`),value:`idle`},{label:K(i)(`settings.session.modeHourly`),value:`hourly`}],size:`small`,class:`input-md`,"onUpdate:value":r[0]||=e=>a({mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),L($,{label:K(i)(`settings.session.idleMinutes`),hint:K(i)(`settings.session.idleMinutesHint`)},{default:J(()=>[L(K(c),{value:K(t).sessionReset.idle_minutes,min:10,max:10080,step:30,size:`small`,class:`input-sm`,"onUpdate:value":r[1]||=e=>e!=null&&a({idle_minutes:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),L($,{label:K(i)(`settings.session.atHour`),hint:K(i)(`settings.session.atHourHint`)},{default:J(()=>[L(K(c),{value:K(t).sessionReset.at_hour,min:0,max:23,step:1,size:`small`,class:`input-sm`,"onUpdate:value":r[2]||=e=>e!=null&&a({at_hour:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),L($,{label:K(i)(`settings.session.liveMonitorHumanOnly`),hint:K(i)(`settings.session.liveMonitorHumanOnlyHint`)},{default:J(()=>[L(K(u),{value:K(n).humanOnly,"onUpdate:value":r[3]||=e=>K(n).setHumanOnly(e)},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-3514aeb7`]]),Et={class:`settings-section`},Dt=Y(R({__name:`PrivacySettings`,setup(e){let t=He(),n=P(),{t:r}=Z();async function i(e){try{await t.saveSection(`privacy`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(U(),g(`section`,Et,[L($,{label:K(r)(`settings.privacy.redactPii`),hint:K(r)(`settings.privacy.redactPiiHint`)},{default:J(()=>[L(K(u),{value:K(t).privacy.redact_pii,"onUpdate:value":n[0]||=e=>i({redact_pii:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-43145f27`]]);async function Ot(){return I(`/api/hermes/auth/copilot/start`,{method:`POST`})}async function kt(e){return I(`/api/hermes/auth/copilot/poll/${e}`)}async function At(){return I(`/api/hermes/auth/copilot/check-token`)}async function jt(){return I(`/api/hermes/auth/copilot/enable`,{method:`POST`})}async function Mt(){return I(`/api/hermes/auth/copilot/disable`,{method:`POST`})}var Nt=[{label:`Anthropic`,value:`anthropic`,base_url:`https://api.anthropic.com`,models:[`claude-opus-4-7`,`claude-opus-4-6`,`claude-sonnet-4-6`,`claude-opus-4-5-20251101`,`claude-sonnet-4-5-20250929`,`claude-opus-4-20250514`,`claude-sonnet-4-20250514`,`claude-haiku-4-5-20251001`]},{label:`Google AI Studio`,value:`gemini`,base_url:`https://generativelanguage.googleapis.com/v1beta/openai`,models:[`gemini-3.1-pro-preview`,`gemini-3-flash-preview`,`gemini-3.1-flash-lite-preview`,`gemini-2.5-pro`,`gemini-2.5-flash`,`gemini-2.5-flash-lite`,`gemma-4-31b-it`,`gemma-4-26b-it`]},{label:`DeepSeek`,value:`deepseek`,base_url:`https://api.deepseek.com`,models:[`deepseek-chat`,`deepseek-reasoner`]},{label:`Z.AI / GLM`,value:`zai`,base_url:`https://api.z.ai/api/paas/v4`,models:[`glm-5.1`,`glm-5`,`glm-5v-turbo`,`glm-5-turbo`,`glm-4.7`,`glm-4.5`,`glm-4.5-flash`]},{label:`Kimi for Coding`,value:`kimi-coding`,base_url:`https://api.kimi.com/coding/v1`,models:[`kimi-for-coding`,`kimi-k2.5`,`kimi-k2-thinking`,`kimi-k2-thinking-turbo`,`kimi-k2-turbo-preview`,`kimi-k2-0905-preview`]},{label:`Kimi for Coding (CN)`,value:`kimi-coding-cn`,base_url:`https://api.kimi.com/coding/v1`,models:[`kimi-k2.5`,`kimi-k2-thinking`,`kimi-k2-turbo-preview`,`kimi-k2-0905-preview`]},{label:`Moonshot`,value:`moonshot`,base_url:`https://api.moonshot.cn/v1`,models:[`kimi-k2.5`,`kimi-k2-thinking`,`kimi-k2-turbo-preview`,`kimi-k2-0905-preview`]},{label:`xAI`,value:`xai`,base_url:`https://api.x.ai/v1`,models:[`grok-4.20-reasoning`,`grok-4-1-fast-reasoning`]},{label:`MiniMax`,value:`minimax`,base_url:`https://api.minimax.io/anthropic/v1`,models:[`MiniMax-M2.7`,`MiniMax-M2.7-highspeed`,`MiniMax-M2.5`,`MiniMax-M2.5-highspeed`,`MiniMax-M2.1`,`MiniMax-M2.1-highspeed`,`MiniMax-M2`,`MiniMax-M2-highspeed`]},{label:`MiniMax (China)`,value:`minimax-cn`,base_url:`https://api.minimaxi.com/v1`,models:[`MiniMax-M2.7`,`MiniMax-M2.7-highspeed`,`MiniMax-M2.5`,`MiniMax-M2.5-highspeed`,`MiniMax-M2.1`,`MiniMax-M2.1-highspeed`,`MiniMax-M2`,`MiniMax-M2-highspeed`]},{label:`Alibaba Cloud`,value:`alibaba`,base_url:`https://dashscope-intl.aliyuncs.com/compatible-mode/v1`,models:[`qwen3.5-plus`,`qwen3-coder-plus`,`qwen3-coder-next`,`glm-5`,`glm-4.7`,`kimi-k2.5`,`MiniMax-M2.5`]},{label:`Alibaba Cloud (Coding Plan)`,value:`alibaba-coding-plan`,base_url:`https://coding-intl.dashscope.aliyuncs.com/v1`,models:[`qwen3.5-plus`,`qwen3-max-2026-01-23`,`qwen3-coder-next`,`qwen3-coder-plus`,`glm-5`,`glm-4.7`,`kimi-k2.5`,`MiniMax-M2.5`]},{label:`Hugging Face`,value:`huggingface`,base_url:`https://router.huggingface.co/v1`,models:[`Qwen/Qwen3.5-397B-A17B`,`Qwen/Qwen3.5-35B-A3B`,`deepseek-ai/DeepSeek-V3.2`,`moonshotai/Kimi-K2.5`,`MiniMaxAI/MiniMax-M2.5`,`zai-org/GLM-5`,`XiaomiMiMo/MiMo-V2-Flash`,`moonshotai/Kimi-K2-Thinking`]},{label:`Xiaomi MiMo`,value:`xiaomi`,base_url:`https://api.xiaomimimo.com/v1`,models:[`mimo-v2-pro`,`mimo-v2-omni`,`mimo-v2-flash`]},{label:`Kilo Code`,value:`kilocode`,base_url:`https://api.kilo.ai/api/gateway`,models:[`anthropic/claude-opus-4.6`,`anthropic/claude-sonnet-4.6`,`openai/gpt-5.4`,`google/gemini-3-pro-preview`,`google/gemini-3-flash-preview`]},{label:`Vercel AI Gateway`,value:`ai-gateway`,base_url:`https://ai-gateway.vercel.sh/v1`,models:[`anthropic/claude-opus-4.6`,`anthropic/claude-sonnet-4.6`,`anthropic/claude-sonnet-4.5`,`anthropic/claude-haiku-4.5`,`openai/gpt-5`,`openai/gpt-4.1`,`openai/gpt-4.1-mini`,`google/gemini-3-pro-preview`,`google/gemini-3-flash`,`google/gemini-2.5-pro`,`google/gemini-2.5-flash`,`deepseek/deepseek-v3.2`]},{label:`OpenCode Zen`,value:`opencode-zen`,base_url:`https://opencode.ai/zen/v1`,models:`gpt-5.4-pro,gpt-5.4,gpt-5.3-codex,gpt-5.3-codex-spark,gpt-5.2,gpt-5.2-codex,gpt-5.1,gpt-5.1-codex,gpt-5.1-codex-max,gpt-5.1-codex-mini,gpt-5,gpt-5-codex,gpt-5-nano,claude-opus-4-6,claude-opus-4-5,claude-opus-4-1,claude-sonnet-4-6,claude-sonnet-4-5,claude-sonnet-4,claude-haiku-4-5,claude-3-5-haiku,gemini-3.1-pro,gemini-3-pro,gemini-3-flash,minimax-m2.7,minimax-m2.5,minimax-m2.5-free,minimax-m2.1,glm-5,glm-4.7,glm-4.6,kimi-k2.5,kimi-k2-thinking,kimi-k2,qwen3-coder,big-pickle`.split(`,`)},{label:`OpenCode Go`,value:`opencode-go`,base_url:`https://opencode.ai/zen/go/v1`,models:[`glm-5.1`,`glm-5`,`kimi-k2.5`,`mimo-v2-pro`,`mimo-v2-omni`,`minimax-m2.7`,`minimax-m2.5`]},{label:`OpenAI Codex`,value:`openai-codex`,base_url:`https://chatgpt.com/backend-api/codex`,models:[`gpt-5.5`,`gpt-5.4-mini`,`gpt-5.4`,`gpt-5.3-codex`,`gpt-5.2-codex`,`gpt-5.1-codex-max`,`gpt-5.1-codex-mini`]},{label:`Arcee AI`,value:`arcee`,base_url:`https://api.arcee.ai/v1`,models:[`trinity-large-thinking`,`trinity-large-preview`,`trinity-mini`]},{label:`OpenRouter`,value:`openrouter`,base_url:`https://openrouter.ai/api/v1`,models:[]},{label:`GitHub Copilot`,value:`copilot`,base_url:`https://api.githubcopilot.com`,models:[`gpt-5.4`,`gpt-5.4-mini`,`gpt-5-mini`,`gpt-5.3-codex`,`gpt-5.2-codex`,`gpt-4.1`,`gpt-4o`,`gpt-4o-mini`,`claude-sonnet-4.6`,`claude-sonnet-4`,`claude-sonnet-4.5`,`claude-haiku-4.5`,`gemini-3.1-pro-preview`,`gemini-3-pro-preview`,`gemini-3-flash-preview`,`gemini-2.5-pro`,`grok-code-fast-1`]}];async function Pt(){return I(`/api/hermes/auth/codex/start`,{method:`POST`})}async function Ft(e){return I(`/api/hermes/auth/codex/poll/${e}`)}var It={class:`codex-login`},Lt={key:0,class:`codex-login__state`},Rt={key:1,class:`codex-login__state`},zt={class:`codex-login__hint`},Bt={class:`codex-login__code-text`},Vt={key:2,class:`codex-login__state codex-login__state--success`},Ht={key:3,class:`codex-login__state`},Ut={class:`codex-login__error`},Wt={key:4,class:`codex-login__state`},Gt={class:`codex-login__error`},Kt={class:`modal-footer`},qt=Y(R({__name:`CodexLoginModal`,emits:[`close`,`success`],setup(e,{emit:t}){let{t:n}=Z(),r=t,i=P(),a=V(!0),o=V(`idle`),s=V(``),c=V(``),l=V(``),u=V(``),d=null;async function f(){o.value=`loading`,u.value=``;try{let e=await Pt();s.value=e.user_code,c.value=e.verification_url,l.value=e.session_id,o.value=`waiting`,p()}catch(e){o.value=`error`;let t=e.message||``;try{let e=t.match(/\{[\s\S]*\}$/);e?u.value=JSON.parse(e[0]).error||t:u.value=t}catch{u.value=t}i.error(u.value)}}function p(){h(),d=setTimeout(async()=>{try{let e=await Ft(l.value);e.status===`pending`?p():e.status===`approved`?(o.value=`approved`,i.success(n(`models.codexApproved`)),setTimeout(()=>{a.value=!1,setTimeout(()=>r(`success`),200)},1e3)):e.status===`expired`?o.value=`expired`:e.status===`error`&&(o.value=`error`,u.value=e.error||`Unknown error`)}catch{p()}},3e3)}function h(){d&&=(clearTimeout(d),null)}function v(){h(),a.value=!1,setTimeout(()=>r(`close`),200)}async function y(){await We(s.value)?i.success(n(`models.codexCopyCode`)):i.error(n(`models.codexCopyCode`)+` ✗`)}function b(){window.open(c.value,`_blank`)}function x(){o.value=`idle`,s.value=``,c.value=``,l.value=``,u.value=``,f()}return m(()=>{h()}),f(),(e,t)=>{let i=ve(`NSpin`);return U(),N(K(_),{show:a.value,"onUpdate:show":t[0]||=e=>a.value=e,preset:`card`,title:K(n)(`models.codexLoginTitle`),style:{width:`min(440px, calc(100vw - 32px))`},"mask-closable":o.value!==`waiting`,onAfterLeave:t[1]||=e=>r(`close`)},{footer:J(()=>[k(`div`,Kt,[L(K(A),{disabled:o.value===`waiting`,onClick:v},{default:J(()=>[w(z(K(n)(`common.cancel`)),1)]),_:1},8,[`disabled`])])]),default:J(()=>[k(`div`,It,[o.value===`idle`||o.value===`loading`?(U(),g(`div`,Lt,[L(i,{size:`small`})])):o.value===`waiting`?(U(),g(`div`,Rt,[k(`p`,zt,z(K(n)(`models.codexWaiting`)),1),k(`div`,{class:`codex-login__code`,onClick:y},[k(`span`,Bt,z(s.value),1),t[2]||=k(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[k(`rect`,{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`}),k(`path`,{d:`M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1`})],-1)]),L(K(A),{type:`primary`,block:``,onClick:b},{icon:J(()=>[...t[3]||=[k(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[k(`path`,{d:`M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6`}),k(`polyline`,{points:`15 3 21 3 21 9`}),k(`line`,{x1:`10`,y1:`14`,x2:`21`,y2:`3`})],-1)]]),default:J(()=>[w(` `+z(K(n)(`models.codexOpenLink`)),1)]),_:1})])):o.value===`approved`?(U(),g(`div`,Vt,[t[4]||=k(`svg`,{width:`40`,height:`40`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[k(`path`,{d:`M22 11.08V12a10 10 0 11-5.93-9.14`}),k(`polyline`,{points:`22 4 12 14.01 9 11.01`})],-1),k(`p`,null,z(K(n)(`models.codexApproved`)),1)])):o.value===`expired`?(U(),g(`div`,Ht,[k(`p`,Ut,z(K(n)(`models.codexExpired`)),1),L(K(A),{size:`small`,onClick:x},{default:J(()=>[w(z(K(n)(`common.retry`)),1)]),_:1})])):o.value===`error`?(U(),g(`div`,Wt,[k(`p`,Gt,z(u.value),1),L(K(A),{size:`small`,onClick:x},{default:J(()=>[w(z(K(n)(`common.retry`)),1)]),_:1})])):Q(``,!0)])]),_:1},8,[`show`,`title`,`mask-closable`])}}}),[[`__scopeId`,`data-v-b8a659c8`]]);async function Jt(){return I(`/api/hermes/auth/nous/start`,{method:`POST`})}async function Yt(e){return I(`/api/hermes/auth/nous/poll/${e}`)}var Xt={class:`nous-login`},Zt={key:0,class:`nous-login__state`},Qt={key:1,class:`nous-login__state`},$t={class:`nous-login__hint`},en={class:`nous-login__code-text`},tn={key:2,class:`nous-login__state nous-login__state--success`},nn={key:3,class:`nous-login__state`},rn={class:`nous-login__error`},an={key:4,class:`nous-login__state`},on={class:`nous-login__error`},sn={class:`modal-footer`},cn=Y(R({__name:`NousLoginModal`,emits:[`close`,`success`],setup(e,{emit:t}){let{t:n}=Z(),r=t,i=P(),a=V(!0),o=V(`idle`),s=V(``),c=V(``),l=V(``),u=V(``),d=null;async function f(){o.value=`loading`,u.value=``;try{let e=await Jt();s.value=e.user_code,c.value=e.verification_url,l.value=e.session_id,o.value=`waiting`,p()}catch(e){o.value=`error`;let t=e.message||``;try{let e=t.match(/\{[\s\S]*\}$/);e?u.value=JSON.parse(e[0]).error||t:u.value=t}catch{u.value=t}i.error(u.value)}}function p(){h(),d=setTimeout(async()=>{try{let e=await Yt(l.value);e.status===`pending`?p():e.status===`approved`?(o.value=`approved`,i.success(n(`models.nousApproved`)),setTimeout(()=>{a.value=!1,setTimeout(()=>r(`success`),200)},1e3)):e.status===`expired`?o.value=`expired`:e.status===`denied`?(o.value=`error`,u.value=n(`models.nousDenied`)):e.status===`error`&&(o.value=`error`,u.value=e.error||`Unknown error`)}catch{p()}},3e3)}function h(){d&&=(clearTimeout(d),null)}function v(){h(),a.value=!1,setTimeout(()=>r(`close`),200)}async function y(){await We(s.value)?i.success(n(`models.nousCopyCode`)):i.error(n(`models.nousCopyCode`)+` ✗`)}function b(){window.open(c.value,`_blank`)}function x(){o.value=`idle`,s.value=``,c.value=``,l.value=``,u.value=``,f()}return m(()=>{h()}),f(),(e,t)=>(U(),N(K(_),{show:a.value,"onUpdate:show":t[0]||=e=>a.value=e,preset:`card`,title:K(n)(`models.nousLoginTitle`),style:{width:`min(440px, calc(100vw - 32px))`},"mask-closable":o.value!==`waiting`,onAfterLeave:t[1]||=e=>r(`close`)},{footer:J(()=>[k(`div`,sn,[L(K(A),{disabled:o.value===`waiting`,onClick:v},{default:J(()=>[w(z(K(n)(`common.cancel`)),1)]),_:1},8,[`disabled`])])]),default:J(()=>[k(`div`,Xt,[o.value===`idle`||o.value===`loading`?(U(),g(`div`,Zt,[L(K(pe),{size:`small`})])):o.value===`waiting`?(U(),g(`div`,Qt,[k(`p`,$t,z(K(n)(`models.nousWaiting`)),1),k(`div`,{class:`nous-login__code`,onClick:y},[k(`span`,en,z(s.value),1),t[2]||=k(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[k(`rect`,{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`}),k(`path`,{d:`M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1`})],-1)]),L(K(A),{type:`primary`,block:``,onClick:b},{icon:J(()=>[...t[3]||=[k(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[k(`path`,{d:`M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6`}),k(`polyline`,{points:`15 3 21 3 21 9`}),k(`line`,{x1:`10`,y1:`14`,x2:`21`,y2:`3`})],-1)]]),default:J(()=>[w(` `+z(K(n)(`models.nousOpenLink`)),1)]),_:1})])):o.value===`approved`?(U(),g(`div`,tn,[t[4]||=k(`svg`,{width:`40`,height:`40`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[k(`path`,{d:`M22 11.08V12a10 10 0 11-5.93-9.14`}),k(`polyline`,{points:`22 4 12 14.01 9 11.01`})],-1),k(`p`,null,z(K(n)(`models.nousApproved`)),1)])):o.value===`expired`?(U(),g(`div`,nn,[k(`p`,rn,z(K(n)(`models.nousExpired`)),1),L(K(A),{size:`small`,onClick:x},{default:J(()=>[w(z(K(n)(`common.retry`)),1)]),_:1})])):o.value===`error`?(U(),g(`div`,an,[k(`p`,on,z(u.value),1),L(K(A),{size:`small`,onClick:x},{default:J(()=>[w(z(K(n)(`common.retry`)),1)]),_:1})])):Q(``,!0)])]),_:1},8,[`show`,`title`,`mask-closable`]))}}),[[`__scopeId`,`data-v-13765003`]]),ln={class:`copilot-login`},un={key:0,class:`copilot-login__state`},dn={key:1,class:`copilot-login__state`},fn={class:`copilot-login__hint`},pn={class:`copilot-login__code-text`},mn={key:2,class:`copilot-login__state copilot-login__state--success`},hn={key:3,class:`copilot-login__state`},gn={class:`copilot-login__error`},_n={key:4,class:`copilot-login__state`},vn={class:`copilot-login__error`},yn={class:`modal-footer`},bn=Y(R({__name:`CopilotLoginModal`,emits:[`close`,`success`],setup(e,{emit:t}){let{t:n}=Z(),r=t,i=P(),a=V(!0),o=V(`idle`),s=V(``),c=V(``),l=V(``),u=V(``),d=null;async function f(){o.value=`loading`,u.value=``;try{let e=await Ot();s.value=e.user_code,c.value=e.verification_url,l.value=e.session_id,o.value=`waiting`,p()}catch(e){o.value=`error`;let t=e?.message||``;try{let e=t.match(/\{[\s\S]*\}$/);e?u.value=JSON.parse(e[0]).error||t:u.value=t}catch{u.value=t}i.error(u.value)}}function p(){h(),d=setTimeout(async()=>{try{let e=await kt(l.value);e.status===`pending`?p():e.status===`approved`?(o.value=`approved`,i.success(n(`models.copilotApproved`)),setTimeout(()=>{a.value=!1,setTimeout(()=>r(`success`),200)},1e3)):e.status===`expired`?o.value=`expired`:e.status===`denied`?(o.value=`error`,u.value=n(`models.copilotDenied`)):e.status===`error`&&(o.value=`error`,u.value=e.error||`Unknown error`)}catch{p()}},3e3)}function h(){d&&=(clearTimeout(d),null)}function v(){h(),a.value=!1,setTimeout(()=>r(`close`),200)}async function y(){await We(s.value)?i.success(n(`models.copilotCopyCode`)):i.error(n(`models.copilotCopyCode`)+` ✗`)}function b(){window.open(c.value,`_blank`)}function x(){o.value=`idle`,s.value=``,c.value=``,l.value=``,u.value=``,f()}return m(()=>{h()}),f(),(e,t)=>(U(),N(K(_),{show:a.value,"onUpdate:show":t[0]||=e=>a.value=e,preset:`card`,title:K(n)(`models.copilotLoginTitle`),style:{width:`min(440px, calc(100vw - 32px))`},"mask-closable":o.value!==`waiting`,onAfterLeave:t[1]||=e=>r(`close`)},{footer:J(()=>[k(`div`,yn,[L(K(A),{disabled:o.value===`waiting`,onClick:v},{default:J(()=>[w(z(K(n)(`common.cancel`)),1)]),_:1},8,[`disabled`])])]),default:J(()=>[k(`div`,ln,[o.value===`idle`||o.value===`loading`?(U(),g(`div`,un,[L(K(pe),{size:`small`})])):o.value===`waiting`?(U(),g(`div`,dn,[k(`p`,fn,z(K(n)(`models.copilotWaiting`)),1),k(`div`,{class:`copilot-login__code`,onClick:y},[k(`span`,pn,z(s.value),1),t[2]||=k(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[k(`rect`,{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`}),k(`path`,{d:`M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1`})],-1)]),L(K(A),{type:`primary`,block:``,onClick:b},{icon:J(()=>[...t[3]||=[k(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[k(`path`,{d:`M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6`}),k(`polyline`,{points:`15 3 21 3 21 9`}),k(`line`,{x1:`10`,y1:`14`,x2:`21`,y2:`3`})],-1)]]),default:J(()=>[w(` `+z(K(n)(`models.copilotOpenLink`)),1)]),_:1})])):o.value===`approved`?(U(),g(`div`,mn,[t[4]||=k(`svg`,{width:`40`,height:`40`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[k(`path`,{d:`M22 11.08V12a10 10 0 11-5.93-9.14`}),k(`polyline`,{points:`22 4 12 14.01 9 11.01`})],-1),k(`p`,null,z(K(n)(`models.copilotApproved`)),1)])):o.value===`expired`?(U(),g(`div`,hn,[k(`p`,gn,z(K(n)(`models.copilotExpired`)),1),L(K(A),{size:`small`,onClick:x},{default:J(()=>[w(z(K(n)(`common.retry`)),1)]),_:1})])):o.value===`error`?(U(),g(`div`,_n,[k(`p`,vn,z(u.value),1),L(K(A),{size:`small`,onClick:x},{default:J(()=>[w(z(K(n)(`common.retry`)),1)]),_:1})])):Q(``,!0)])]),_:1},8,[`show`,`title`,`mask-closable`]))}}),[[`__scopeId`,`data-v-fe3fcc7e`]]),xn={style:{display:`flex`,gap:`12px`}},Sn={style:{display:`flex`,gap:`8px`,width:`100%`}},Cn={class:`modal-footer`},wn=`openai-codex`,Tn=`nous`,En=`copilot`,Dn=`alibaba-coding-plan`,On=Y(R({__name:`ProviderFormModal`,props:{editProvider:{default:void 0}},emits:[`close`,`saved`],setup(r,{emit:i}){let{t:a}=Z(),o=r,s=E(()=>!!o.editProvider),u=i,d=Ge(),p=P(),m=l(),h=V(!0),g=V(!1),v=V(!1),y=V(!1),b=V(!1),x=V(!1),S=V(!1),C=V(`preset`),D=V(null),O=V([]),j=V({name:``,base_url:``,api_key:``,model:``,context_length:null}),M=V([]),ee={intl:`https://coding-intl.dashscope.aliyuncs.com/v1`,cn:`https://coding.dashscope.aliyuncs.com/v1`},te=E(()=>D.value===wn),F=E(()=>D.value===Tn),I=E(()=>D.value===En),re=E(()=>D.value===Dn),ie=V(`intl`),R=E(()=>O.value.map(e=>({label:e.name,value:e.id})));function ae(e){let t=e.replace(/^https?:\/\//,``).replace(/\/v1\/?$/,``).split(`/`)[0];return t.includes(`localhost`)||t.includes(`127.0.0.1`)?a(`models.local`,{host:t}):t.charAt(0).toUpperCase()+t.slice(1)}se(D,e=>{if(!s.value&&(j.value.model=``,ie.value=`intl`,e)){let t=O.value.find(t=>t.id===e);t&&(j.value.name=t.name,j.value.base_url=t.base_url);let n=Nt.find(t=>t.value===e);if(n&&n.models.length>0)M.value=n.models.map(e=>({label:e,value:e})),j.value.model=n.models[0];else{let t=d.allProviders.find(t=>t.provider===e);t?(M.value=t.models.map(e=>({label:e,value:e})),t.models.length>0&&(j.value.model=t.models[0])):M.value=[]}e===En&&de()}}),se(ie,e=>{re.value&&(j.value.base_url=ee[e])}),se(()=>j.value.base_url,e=>{C.value===`custom`&&e.trim()&&!j.value.name&&(j.value.name=ae(e.trim()))}),se(C,()=>{s.value||(M.value=[],j.value={name:``,base_url:``,api_key:``,model:``,context_length:null},D.value=null)}),ne(async()=>{if(d.providers.length===0&&d.fetchProviders(),O.value.length===0)try{O.value=await f()}catch{}if(o.editProvider){let e=o.editProvider;if(j.value.name=e.label,j.value.base_url=e.base_url,j.value.api_key=e.api_key||``,j.value.model=e.models.length>0?e.models[0]:``,e.provider.startsWith(`custom:`))C.value=`custom`,M.value=e.models.map(e=>({label:e,value:e}));else{C.value=`preset`,D.value=e.provider;let t=Nt.find(t=>t.value===e.provider);t&&t.models.length>0?M.value=t.models.map(e=>({label:e,value:e})):e.models.length>0&&(M.value=e.models.map(e=>({label:e,value:e})))}}});async function oe(){let{base_url:e}=j.value;if(!e.trim()){p.warning(a(`models.enterBaseUrl`));return}v.value=!0;try{let t=e.replace(/\/+$/,``),n=/\/v\d+\/?$/.test(t)?`${t}/models`:`${t}/v1/models`,r={};j.value.api_key.trim()&&(r.Authorization=`Bearer ${j.value.api_key.trim()}`);let i=await fetch(n,{headers:r,signal:AbortSignal.timeout(8e3)});if(!i.ok)throw Error(`HTTP ${i.status}`);let o=await i.json();if(!Array.isArray(o.data))throw Error(a(`models.unexpectedFormat`));M.value=o.data.map(e=>({label:e.id,value:e.id})),M.value.length>0&&!j.value.model&&(j.value.model=M.value[0].value),p.success(a(`models.foundModels`,{count:M.value.length}))}catch(e){p.error(a(`models.fetchFailed`)+`: `+e.message)}finally{v.value=!1}}async function ce(){if(s.value){if(!j.value.base_url.trim()){p.warning(a(`models.baseUrlRequired`));return}g.value=!0;try{let{updateProvider:t}=await e(async()=>{let{updateProvider:e}=await import(`./system-LgOM7o3G.js`).then(e=>e.o);return{updateProvider:e}},__vite__mapDeps([0,1,2,3,4,5,6]));await t(o.editProvider.provider,{name:j.value.name.trim(),base_url:j.value.base_url.trim(),model:j.value.model,...j.value.api_key.trim()?{api_key:j.value.api_key.trim()}:{}}),p.success(a(`models.providerUpdated`)),u(`saved`)}catch(e){p.error(e.message)}finally{g.value=!1}return}if(C.value===`preset`&&!D.value){p.warning(a(`models.selectProviderRequired`));return}if(te.value){y.value=!0;return}if(F.value){b.value=!0;return}if(I.value){de();return}if(C.value===`preset`&&D.value){let e=d.allProviders.find(e=>e.provider===D.value);if(e){p.warning(a(`models.providerAlreadyExists`,{name:e.label}));return}}if(!j.value.base_url.trim()){p.warning(a(`models.baseUrlRequired`));return}if(!j.value.api_key.trim()){p.warning(a(`models.apiKeyRequired`));return}if(!j.value.model){p.warning(a(`models.modelRequired`));return}g.value=!0;try{let e=C.value===`preset`?D.value:null,t=j.value.context_length??void 0;await d.addProvider({name:j.value.name.trim(),base_url:j.value.base_url.trim(),api_key:j.value.api_key.trim(),model:j.value.model,context_length:t,providerKey:e}),p.success(a(`models.providerAdded`)),u(`saved`)}catch(e){p.error(e.message)}finally{g.value=!1}}async function B(){y.value=!1,p.success(a(`models.providerAdded`)),u(`saved`)}async function le(){b.value=!1,p.success(a(`models.providerAdded`)),u(`saved`)}async function ue(){x.value=!1,p.success(a(`models.providerAdded`)),u(`saved`)}function H(e){return e===`env`?a(`models.copilotAddSourceEnv`):e===`gh-cli`?a(`models.copilotAddSourceGhCli`):e===`apps-json`?a(`models.copilotAddSourceAppsJson`):``}async function de(){if(!S.value){S.value=!0;try{let e=await At();if(e.has_token){let t=H(e.source);m.success({title:a(`models.copilotAddDetectedTitle`),content:t?`${a(`models.copilotAddDetected`)}\n\n${t}`:a(`models.copilotAddDetected`),positiveText:a(`common.add`),negativeText:a(`common.cancel`),onPositiveClick:async()=>{try{await jt(),p.success(a(`models.providerAdded`)),u(`saved`)}catch(e){p.error(e?.message??String(e))}},onNegativeClick:()=>{D.value=null},onClose:()=>{D.value=null}})}else x.value=!0}catch(e){p.error(e?.message??String(e)),D.value=null}finally{S.value=!1}}}function fe(){x.value=!1,D.value=null}function pe(){h.value=!1,setTimeout(()=>u(`close`),200)}return(e,r)=>(U(),N(K(_),{show:h.value,"onUpdate:show":r[11]||=e=>h.value=e,preset:`card`,title:s.value?K(a)(`models.editProvider`):K(a)(`models.addProvider`),style:{width:`min(520px, calc(100vw - 32px))`},"mask-closable":!g.value&&!y.value&&!b.value&&!x.value,onAfterLeave:r[12]||=e=>u(`close`)},{footer:J(()=>[k(`div`,Cn,[L(K(A),{onClick:pe},{default:J(()=>[w(z(K(a)(`common.cancel`)),1)]),_:1}),L(K(A),{type:`primary`,loading:g.value,onClick:ce},{default:J(()=>[w(z(s.value?K(a)(`common.save`):K(a)(`common.add`)),1)]),_:1},8,[`loading`])])]),default:J(()=>[L(K(t),{"label-placement":`top`},{default:J(()=>[L(K(n),{label:K(a)(`models.providerType`)},{default:J(()=>[k(`div`,xn,[L(K(A),{type:C.value===`preset`?`primary`:`default`,size:`small`,disabled:s.value,onClick:r[0]||=e=>C.value=`preset`},{default:J(()=>[w(z(K(a)(`models.preset`)),1)]),_:1},8,[`type`,`disabled`]),L(K(A),{type:C.value===`custom`?`primary`:`default`,size:`small`,disabled:s.value,onClick:r[1]||=e=>C.value=`custom`},{default:J(()=>[w(z(K(a)(`models.custom`)),1)]),_:1},8,[`type`,`disabled`])])]),_:1},8,[`label`]),C.value===`preset`?(U(),N(K(n),{key:0,label:K(a)(`models.selectProvider`),required:``},{default:J(()=>[L(K(xe),{value:D.value,"onUpdate:value":r[2]||=e=>D.value=e,options:R.value,placeholder:K(a)(`models.chooseProvider`),disabled:s.value,filterable:``},null,8,[`value`,`options`,`placeholder`,`disabled`])]),_:1},8,[`label`])):Q(``,!0),C.value===`custom`&&!te.value&&!F.value?(U(),N(K(n),{key:1,label:K(a)(`models.name`)},{default:J(()=>[L(K(T),{value:j.value.name,"onUpdate:value":r[3]||=e=>j.value.name=e,placeholder:K(a)(`models.autoGeneratedName`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`])):Q(``,!0),re.value?(U(),N(K(n),{key:2,label:K(a)(`models.region`)},{default:J(()=>[L(K(ot),{value:ie.value,"onUpdate:value":r[4]||=e=>ie.value=e},{default:J(()=>[L(K(rt),{value:`intl`},{default:J(()=>[w(z(K(a)(`models.regionIntl`)),1)]),_:1}),L(K(rt),{value:`cn`},{default:J(()=>[w(z(K(a)(`models.regionCn`)),1)]),_:1})]),_:1},8,[`value`])]),_:1},8,[`label`])):Q(``,!0),!te.value&&!F.value?(U(),N(K(n),{key:3,label:K(a)(`models.baseUrl`),required:``},{default:J(()=>[L(K(T),{value:j.value.base_url,"onUpdate:value":r[5]||=e=>j.value.base_url=e,placeholder:K(a)(`models.baseUrlPlaceholder`),disabled:C.value===`preset`},null,8,[`value`,`placeholder`,`disabled`])]),_:1},8,[`label`])):Q(``,!0),!te.value&&!F.value?(U(),N(K(n),{key:4,label:K(a)(`models.apiKey`)},{default:J(()=>[L(K(T),{value:j.value.api_key,"onUpdate:value":r[6]||=e=>j.value.api_key=e,type:`password`,"show-password-on":`click`,placeholder:K(a)(`models.apiKeyPlaceholder`),autocomplete:`off`},null,8,[`value`,`placeholder`])]),_:1},8,[`label`])):Q(``,!0),L(K(n),{label:K(a)(`models.defaultModel`),required:``},{default:J(()=>[k(`div`,Sn,[L(K(xe),{value:j.value.model,"onUpdate:value":r[7]||=e=>j.value.model=e,options:M.value,filterable:``,tag:``,placeholder:K(a)(`models.selectOrInput`),style:{flex:`1`}},null,8,[`value`,`options`,`placeholder`]),C.value===`custom`||s.value||C.value===`preset`&&M.value.length===0?(U(),N(K(A),{key:0,loading:v.value,onClick:oe},{default:J(()=>[w(z(K(a)(`common.fetch`)),1)]),_:1},8,[`loading`])):Q(``,!0)])]),_:1},8,[`label`]),C.value===`custom`&&!s.value?(U(),N(K(n),{key:5,label:K(a)(`models.contextLength`)},{default:J(()=>[L(K(c),{value:j.value.context_length,"onUpdate:value":r[8]||=e=>j.value.context_length=e,placeholder:K(a)(`models.contextLengthPlaceholder`),min:0,clearable:``,style:{width:`100%`}},null,8,[`value`,`placeholder`])]),_:1},8,[`label`])):Q(``,!0)]),_:1}),y.value?(U(),N(qt,{key:0,onClose:r[9]||=e=>y.value=!1,onSuccess:B})):Q(``,!0),b.value?(U(),N(cn,{key:1,onClose:r[10]||=e=>b.value=!1,onSuccess:le})):Q(``,!0),x.value?(U(),N(bn,{key:2,onClose:fe,onSuccess:ue})):Q(``,!0)]),_:1},8,[`show`,`title`,`mask-closable`]))}}),[[`__scopeId`,`data-v-b2a6b97b`]]),kn={class:`provider-card`},An={class:`card-header`},jn={class:`provider-name`},Mn={class:`card-body`},Nn={class:`info-row`},Pn={class:`info-label`},Fn={class:`info-value mono`},In={class:`info-row`},Ln={class:`info-label`},Rn={class:`info-value mono`},zn={class:`info-row models-row`},Bn={class:`info-label`},Vn={class:`info-value models-count`},Hn={class:`info-row`},Un={class:`info-label`},Wn={class:`models-list`},Gn=[`title`,`onClick`],Kn={key:0,class:`model-tag model-tag-more`},qn={class:`card-actions`},Jn=Y(R({__name:`ProviderCard`,props:{provider:{}},setup(e){let t=e,{t:n}=Z(),r=Ge(),i=p(),a=je(),o=P(),s=l(),c=E(()=>t.provider.provider.startsWith(`custom:`)),u=E(()=>t.provider.provider===`copilot`),d=E(()=>t.provider.label),f=V(!1),m=V(!1),h=V(!1),_=E(()=>!!t.provider.api_key);async function v(){h.value=!1,await Promise.all([r.fetchProviders(),i.loadModels()])}async function y(e){m.value=!0;try{await r.setDefaultModel(e,t.provider.provider),o.success(n(`models.defaultSet`,{model:e}))}catch(e){o.error(e.message)}finally{m.value=!1}}async function b(){let e=``;if(u.value)try{let t=await At();t.source===`env`?e=n(`models.copilotDeleteHintEnv`):t.source===`gh-cli`?e=n(`models.copilotDeleteHintGhCli`):t.source===`apps-json`&&(e=n(`models.copilotDeleteHintAppsJson`))}catch{}s.warning({title:n(`models.deleteProvider`),content:u.value&&e?`${n(`models.deleteConfirm`,{name:d.value})}\n\n${e}`:n(`models.deleteConfirm`,{name:d.value}),positiveText:n(`common.delete`),negativeText:n(`common.cancel`),onPositiveClick:async()=>{f.value=!0;try{if(u.value?(await Mt(),a.clearProviderFromSessions(`copilot`),await Promise.all([r.fetchProviders(),i.loadModels()])):await r.removeProvider(t.provider.provider),!i.selectedModel&&i.modelGroups.length>0){let e=i.modelGroups.find(e=>e.models.length>0);e&&await i.switchModel(e.models[0],e.provider)}o.success(n(`models.providerDeleted`))}catch(e){o.error(e.message)}finally{f.value=!1}}})}return(t,i)=>(U(),g(ee,null,[k(`div`,kn,[k(`div`,An,[k(`h3`,jn,z(d.value),1),k(`span`,{class:ge([`type-badge`,c.value?`custom`:`builtin`])},z(c.value?K(n)(`models.customType`):K(n)(`models.builtIn`)),3)]),k(`div`,Mn,[k(`div`,Nn,[k(`span`,Pn,z(K(n)(`models.provider`)),1),k(`code`,Fn,z(e.provider.provider),1)]),k(`div`,In,[k(`span`,Ln,z(K(n)(`models.baseUrl`)),1),k(`code`,Rn,z(e.provider.base_url),1)]),k(`div`,zn,[k(`span`,Bn,z(K(n)(`models.models`)),1),k(`span`,Vn,z(e.provider.models.length)+` `+z(K(n)(`models.count`)),1)]),k(`div`,Hn,[k(`span`,Un,z(K(n)(`models.apiKey`)),1),k(`span`,{class:ge([`info-value`,{"has-key":_.value}])},z(_.value?`••••••••`:`—`),3)]),k(`div`,Wn,[(U(!0),g(ee,null,Te(e.provider.models.slice(0,20),e=>(U(),g(`span`,{key:e,class:ge([`model-tag`,{"model-tag-default":e===K(r).defaultModel}]),title:e===K(r).defaultModel?K(n)(`models.currentDefault`):K(n)(`models.clickToSetDefault`),onClick:t=>e!==K(r).defaultModel&&y(e)},z(e),11,Gn))),128)),e.provider.models.length>20?(U(),g(`span`,Kn,` +`+z(e.provider.models.length-20)+` `+z(K(n)(`models.more`)),1)):Q(``,!0)])]),k(`div`,qn,[L(K(A),{size:`tiny`,quaternary:``,onClick:i[0]||=e=>h.value=!0},{default:J(()=>[w(z(K(n)(`common.edit`)),1)]),_:1}),L(K(A),{size:`tiny`,quaternary:``,type:`error`,loading:f.value,onClick:b},{default:J(()=>[w(z(K(n)(`common.delete`)),1)]),_:1},8,[`loading`])])]),h.value?(U(),N(On,{key:0,"edit-provider":e.provider,onClose:i[1]||=e=>h.value=!1,onSaved:v},null,8,[`edit-provider`])):Q(``,!0)],64))}}),[[`__scopeId`,`data-v-0943fb13`]]),Yn={key:0,class:`empty-state`},Xn={key:1,class:`providers-grid`},Zn=Y(R({__name:`ProvidersPanel`,setup(e){let{t}=Z(),n=Ge();return(e,r)=>K(n).providers.length===0?(U(),g(`div`,Yn,[r[0]||=k(`svg`,{width:`48`,height:`48`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1`,class:`empty-icon`},[k(`path`,{d:`M12 2L2 7l10 5 10-5-10-5z`}),k(`path`,{d:`M2 17l10 5 10-5`}),k(`path`,{d:`M2 12l10 5 10-5`})],-1),k(`p`,null,z(K(t)(`models.noProviders`)),1)])):(U(),g(`div`,Xn,[(U(!0),g(ee,null,Te(K(n).providers,e=>(U(),N(Jn,{key:e.provider,provider:e},null,8,[`provider`]))),128))]))}}),[[`__scopeId`,`data-v-76eec30b`]]),Qn={class:`settings-section`},$n={class:`section-header`},er={class:`section-title`},tr={key:0,class:`empty-hint`},nr=Y(R({__name:`ModelSettings`,setup(e){let{t}=Z(),n=Ge(),r=p(),i=V(!1);ne(async()=>{try{await At()}catch{}n.providers.length===0&&n.fetchProviders()});function a(){i.value=!0}function o(){i.value=!1}async function s(){await n.fetchProviders(),r.loadModels(),o()}return(e,r)=>(U(),g(ee,null,[k(`section`,Qn,[k(`div`,$n,[k(`h3`,er,z(K(t)(`settings.models.providerManagement`)),1),L(K(A),{type:`primary`,size:`small`,onClick:a},{icon:J(()=>[...r[0]||=[k(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[k(`line`,{x1:`12`,y1:`5`,x2:`12`,y2:`19`}),k(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`})],-1)]]),default:J(()=>[w(` `+z(K(t)(`models.addProvider`)),1)]),_:1})]),L(K(pe),{show:K(n).loading&&K(n).providers.length===0},{default:J(()=>[K(n).providers.length===0?(U(),g(`div`,tr,[L(K(x),{description:K(t)(`settings.models.noProviders`)},null,8,[`description`])])):Q(``,!0),L(Zn)]),_:1},8,[`show`])]),i.value?(U(),N(On,{key:0,onClose:o,onSaved:s})):Q(``,!0)],64))}}),[[`__scopeId`,`data-v-ca43ad47`]]),rr={class:`account-settings`},ir={class:`section-desc`},ar={key:0,class:`action-row`},or={class:`action-label`},sr={key:1,class:`configured-section`},cr={class:`action-row`},lr={class:`action-label`},ur={class:`action-buttons`},dr=Y(R({__name:`AccountSettings`,setup(e){let{t:r}=Z(),i=P(),a=V(!1),o=V(null),s=V(!1),c=V(!1),l=V(``),u=V(``),f=V(``),p=V(!1),m=V(``),v=V(``),y=V(``),b=V(!1),x=V(``),S=V(``);ne(async()=>{try{let e=await Be();a.value=e.hasPasswordLogin,o.value=e.username}catch{}});async function C(){if(u.value!==f.value){i.error(r(`login.passwordMismatch`));return}if(u.value.length<6){i.error(r(`login.passwordTooShort`));return}s.value=!0;try{await ze(l.value,u.value),a.value=!0,o.value=l.value,c.value=!1,l.value=``,u.value=``,f.value=``,i.success(r(`login.setupSuccess`))}catch(e){i.error(e.message||r(`common.saveFailed`))}finally{s.value=!1}}async function E(){if(v.value!==y.value){i.error(r(`login.passwordMismatch`));return}if(v.value.length<6){i.error(r(`login.passwordTooShort`));return}s.value=!0;try{await Ve(m.value,v.value),p.value=!1,m.value=``,v.value=``,y.value=``,i.success(r(`login.passwordChanged`))}catch(e){i.error(e.message||r(`common.saveFailed`))}finally{s.value=!1}}async function D(){if(S.value.trim().length<2){i.error(r(`login.usernameTooShort`));return}s.value=!0;try{await Re(x.value,S.value.trim()),o.value=S.value.trim(),b.value=!1,x.value=``,S.value=``,i.success(r(`login.usernameChanged`))}catch(e){i.error(e.message||r(`common.saveFailed`))}finally{s.value=!1}}async function O(){s.value=!0;try{await Le(),a.value=!1,o.value=null,i.success(r(`login.passwordRemoved`))}catch(e){i.error(e.message||r(`common.saveFailed`))}finally{s.value=!1}}function j(){l.value=``,u.value=``,f.value=``,c.value=!0}function M(){m.value=``,v.value=``,y.value=``,p.value=!0}function ee(){x.value=``,S.value=``,b.value=!0}return(e,i)=>(U(),g(`div`,rr,[k(`p`,ir,z(K(r)(`login.setupDescription`)),1),a.value?(U(),g(`div`,sr,[k(`div`,cr,[k(`span`,lr,z(K(r)(`login.passwordLoginConfigured`,{username:o.value})),1),k(`div`,ur,[L(K(A),{onClick:M},{default:J(()=>[w(z(K(r)(`login.changePassword`)),1)]),_:1}),L(K(A),{onClick:ee},{default:J(()=>[w(z(K(r)(`login.changeUsername`)),1)]),_:1}),L(K(d),{onPositiveClick:O},{trigger:J(()=>[L(K(A),{type:`error`,ghost:``,loading:s.value},{default:J(()=>[w(z(K(r)(`login.removePasswordLogin`)),1)]),_:1},8,[`loading`])]),default:J(()=>[w(` `+z(K(r)(`login.removeConfirm`)),1)]),_:1})])])])):(U(),g(`div`,ar,[k(`span`,or,z(K(r)(`login.passwordLoginNotConfigured`)),1),L(K(A),{type:`primary`,onClick:j},{default:J(()=>[w(z(K(r)(`login.setupPassword`)),1)]),_:1})])),L(K(_),{show:c.value,"onUpdate:show":i[4]||=e=>c.value=e,preset:`dialog`,title:K(r)(`login.setupPassword`)},{action:J(()=>[L(K(A),{onClick:i[3]||=e=>c.value=!1},{default:J(()=>[w(z(K(r)(`common.cancel`)),1)]),_:1}),L(K(A),{type:`primary`,loading:s.value,onClick:C},{default:J(()=>[w(z(K(r)(`common.save`)),1)]),_:1},8,[`loading`])]),default:J(()=>[L(K(t),{"label-placement":`top`},{default:J(()=>[L(K(n),{label:K(r)(`login.username`)},{default:J(()=>[L(K(T),{value:l.value,"onUpdate:value":i[0]||=e=>l.value=e,placeholder:K(r)(`login.usernamePlaceholder`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),L(K(n),{label:K(r)(`login.newPassword`)},{default:J(()=>[L(K(T),{value:u.value,"onUpdate:value":i[1]||=e=>u.value=e,type:`password`,"show-password-on":`click`,placeholder:K(r)(`login.passwordPlaceholder`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),L(K(n),{label:K(r)(`login.confirmPassword`)},{default:J(()=>[L(K(T),{value:f.value,"onUpdate:value":i[2]||=e=>f.value=e,type:`password`,"show-password-on":`click`,placeholder:K(r)(`login.confirmPassword`),onKeyup:h(C,[`enter`])},null,8,[`value`,`placeholder`])]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`]),L(K(_),{show:p.value,"onUpdate:show":i[9]||=e=>p.value=e,preset:`dialog`,title:K(r)(`login.changePassword`)},{action:J(()=>[L(K(A),{onClick:i[8]||=e=>p.value=!1},{default:J(()=>[w(z(K(r)(`common.cancel`)),1)]),_:1}),L(K(A),{type:`primary`,loading:s.value,onClick:E},{default:J(()=>[w(z(K(r)(`common.save`)),1)]),_:1},8,[`loading`])]),default:J(()=>[L(K(t),{"label-placement":`top`},{default:J(()=>[L(K(n),{label:K(r)(`login.currentPassword`)},{default:J(()=>[L(K(T),{value:m.value,"onUpdate:value":i[5]||=e=>m.value=e,type:`password`,"show-password-on":`click`,placeholder:K(r)(`login.currentPassword`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),L(K(n),{label:K(r)(`login.newPassword`)},{default:J(()=>[L(K(T),{value:v.value,"onUpdate:value":i[6]||=e=>v.value=e,type:`password`,"show-password-on":`click`,placeholder:K(r)(`login.newPassword`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),L(K(n),{label:K(r)(`login.confirmPassword`)},{default:J(()=>[L(K(T),{value:y.value,"onUpdate:value":i[7]||=e=>y.value=e,type:`password`,"show-password-on":`click`,placeholder:K(r)(`login.confirmPassword`),onKeyup:h(E,[`enter`])},null,8,[`value`,`placeholder`])]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`]),L(K(_),{show:b.value,"onUpdate:show":i[13]||=e=>b.value=e,preset:`dialog`,title:K(r)(`login.changeUsername`)},{action:J(()=>[L(K(A),{onClick:i[12]||=e=>b.value=!1},{default:J(()=>[w(z(K(r)(`common.cancel`)),1)]),_:1}),L(K(A),{type:`primary`,loading:s.value,onClick:D},{default:J(()=>[w(z(K(r)(`common.save`)),1)]),_:1},8,[`loading`])]),default:J(()=>[L(K(t),{"label-placement":`top`},{default:J(()=>[L(K(n),{label:K(r)(`login.currentPassword`)},{default:J(()=>[L(K(T),{value:x.value,"onUpdate:value":i[10]||=e=>x.value=e,type:`password`,"show-password-on":`click`,placeholder:K(r)(`login.currentPassword`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),L(K(n),{label:K(r)(`login.newUsername`)},{default:J(()=>[L(K(T),{value:S.value,"onUpdate:value":i[11]||=e=>S.value=e,placeholder:K(r)(`login.usernamePlaceholder`),onKeyup:h(D,[`enter`])},null,8,[`value`,`placeholder`])]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`])]))}}),[[`__scopeId`,`data-v-79bc4876`]]),fr={class:`settings-view`},pr={class:`page-header`},mr={class:`header-title`},hr={class:`settings-content`},gr=Y(R({__name:`SettingsView`,setup(e){let t=He(),{t:n}=Z();return ne(()=>{t.fetchSettings()}),(e,r)=>(U(),g(`div`,fr,[k(`header`,pr,[k(`h2`,mr,z(K(n)(`settings.title`)),1)]),k(`div`,hr,[L(K(pe),{show:K(t).loading||K(t).saving,size:`large`,description:K(n)(`common.loading`)},{default:J(()=>[L(K(pt),{type:`line`,animated:``},{default:J(()=>[L(K(lt),{name:`account`,tab:K(n)(`settings.tabs.account`)},{default:J(()=>[L(dr)]),_:1},8,[`tab`]),L(K(lt),{name:`display`,tab:K(n)(`settings.tabs.display`)},{default:J(()=>[L(yt)]),_:1},8,[`tab`]),L(K(lt),{name:`agent`,tab:K(n)(`settings.tabs.agent`)},{default:J(()=>[L(xt)]),_:1},8,[`tab`]),L(K(lt),{name:`memory`,tab:K(n)(`settings.tabs.memory`)},{default:J(()=>[L(Ct)]),_:1},8,[`tab`]),L(K(lt),{name:`session`,tab:K(n)(`settings.tabs.session`)},{default:J(()=>[L(Tt)]),_:1},8,[`tab`]),L(K(lt),{name:`privacy`,tab:K(n)(`settings.tabs.privacy`)},{default:J(()=>[L(Dt)]),_:1},8,[`tab`]),L(K(lt),{name:`models`,tab:K(n)(`settings.tabs.models`)},{default:J(()=>[L(nr)]),_:1},8,[`tab`])]),_:1})]),_:1},8,[`show`,`description`])])]))}}),[[`__scopeId`,`data-v-6bfbe8eb`]]);export{gr as default};