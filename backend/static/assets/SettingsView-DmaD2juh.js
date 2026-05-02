import{n as e,t}from"./FormItem-kxFezNXb.js";import{S as n}from"./_baseFor-DyDN1Ubb.js";import{n as r,t as i}from"./now-DtewKIsU.js";import{t as a}from"./Add-C9--cbBh.js";import{t as o}from"./InputNumber-B5aJpbVt.js";import{t as s}from"./Space-8BbAfV5N.js";import{t as c}from"./Switch-CZDh0ls6.js";import{t as l}from"./Popconfirm-CCxDu5-0.js";import{An as u,Ar as d,Br as f,Cn as p,En as m,Fn as h,Gr as g,Hr as _,Ir as v,Kn as y,Kr as b,Mr as x,Nn as S,Nr as C,P as w,Pn as ee,Qr as T,R as E,Rr as D,T as O,Un as k,Ur as A,Vr as j,Wn as te,Xr as M,Yr as N,Zr as ne,_i as P,_n as re,ai as ie,bi as F,bn as ae,br as I,c as L,ci as oe,di as R,dr as z,dt as se,fn as ce,fr as B,hi as V,hr as H,ii as le,ir as ue,j as de,li as fe,m as U,mi as W,mr as pe,nt as me,or as he,p as ge,pn as _e,pr as G,pt as ve,q as ye,qn as be,qr as K,ri as q,ti as xe,ui as J,ur as Y,v as Se,w as X,wn as Ce,yn as we,zr as Te}from"./index-L-XpP097.js";import{a as Ee,n as De,o as Oe,r as ke,t as Ae}from"./auth-BgSlisry.js";import{t as Z}from"./settings-CvXCxyqu.js";import{t as Q}from"./SettingRow-CtAFBu_f.js";import{a as je,i as Me,n as Ne,r as Pe,t as Fe}from"./session-browser-prefs-BDJtFdBh.js";var Ie=S(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[S(`&::-webkit-scrollbar`,{width:0,height:0})]),Le=K({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=W(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=h();return Ie.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:ee,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return N(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Re=`Expected a function`,ze=Math.max,Be=Math.min;function Ve(e,t,a){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof e!=`function`)throw TypeError(Re);t=r(t)||0,n(a)&&(p=!!a.leading,m=`maxWait`in a,c=m?ze(r(a.maxWait)||0,t):c,h=`trailing`in a?!!a.trailing:h);function g(t){var n=o,r=s;return o=s=void 0,f=t,l=e.apply(r,n),l}function _(e){return f=e,u=setTimeout(b,t),p?g(e):l}function v(e){var n=e-d,r=e-f,i=t-n;return m?Be(i,c-r):i}function y(e){var n=e-d,r=e-f;return d===void 0||n>=t||n<0||m&&r>=c}function b(){var e=i();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function C(){return u===void 0?l:x(i())}function w(){var e=i(),n=y(e);if(o=arguments,s=this,d=e,n){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,t),g(d)}return u===void 0&&(u=setTimeout(b,t)),l}return w.cancel=S,w.flush=C,w}var He=`Expected a function`;function Ue(e,t,r){var i=!0,a=!0;if(typeof e!=`function`)throw TypeError(He);return n(r)&&(i=`leading`in r?!!r.leading:i,a=`trailing`in r?!!r.trailing:a),Ve(e,t,{leading:i,maxWait:t,trailing:a})}var We=k(`n-tabs`),Ge={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},$=K({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:Ge,slots:Object,setup(e){let t=M(We,null);return t||m(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return N(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Ke=K({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},ae(Ge,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=M(We);return{trigger:d,mergedClosable:Te(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:o,value:s,mergedClosable:c,trigger:l,$slots:{default:u}}=this,d=i??o;return N(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?N(`div`,{class:`${t}-tabs-tab-pad`}):null,N(`div`,Object.assign({key:n,"data-name":n,"data-disabled":r?!0:void 0},ne({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),N(`span`,{class:`${t}-tabs-tab__label`},e?N(v,null,N(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),N(se,{clsPrefix:t},{default:()=>N(a,null)})):u?u():typeof d==`object`?d:we(d??n)),c&&this.type===`card`?N(me,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),qe=z(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[G(`segment-type`,[z(`tabs-rail`,[Y(`&.transition-disabled`,[z(`tabs-capsule`,`
 transition: none;
 `)])])]),G(`top`,[z(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),G(`left`,[z(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),G(`left, right`,`
 flex-direction: row;
 `,[z(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),z(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),G(`right`,`
 flex-direction: row-reverse;
 `,[z(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),z(`tabs-bar`,`
 left: 0;
 `)]),G(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[z(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),z(`tabs-bar`,`
 top: 0;
 `)]),z(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[z(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),z(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[z(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[G(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),Y(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),G(`flex`,[z(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[z(`tabs-wrapper`,`
 width: 100%;
 `,[z(`tabs-tab`,`
 margin-right: 0;
 `)])])]),z(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[B(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),B(`prefix`,`padding-right: 16px;`),B(`suffix`,`padding-left: 16px;`)]),G(`top, bottom`,[Y(`>`,[z(`tabs-nav`,[z(`tabs-nav-scroll-wrapper`,[Y(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),Y(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),G(`shadow-start`,[Y(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),G(`shadow-end`,[Y(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),G(`left, right`,[z(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),Y(`>`,[z(`tabs-nav`,[z(`tabs-nav-scroll-wrapper`,[Y(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),Y(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),G(`shadow-start`,[Y(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),G(`shadow-end`,[Y(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),z(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[z(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[Y(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),Y(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),z(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),z(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),z(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),z(`tabs-tab`,`
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
 `,[G(`disabled`,{cursor:`not-allowed`}),B(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),B(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),z(`tabs-bar`,`
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
 `,[Y(`&.transition-disabled`,`
 transition: none;
 `),G(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),z(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),z(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[Y(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),Y(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),Y(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),Y(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),Y(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),z(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),G(`line-type, bar-type`,[z(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[Y(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),G(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),G(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),z(`tabs-nav`,[G(`line-type`,[G(`top`,[B(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),z(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),z(`tabs-bar`,`
 bottom: -1px;
 `)]),G(`left`,[B(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),z(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),z(`tabs-bar`,`
 right: -1px;
 `)]),G(`right`,[B(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),z(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),z(`tabs-bar`,`
 left: -1px;
 `)]),G(`bottom`,[B(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),z(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),z(`tabs-bar`,`
 top: -1px;
 `)]),B(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),z(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),z(`tabs-bar`,`
 border-radius: 0;
 `)]),G(`card-type`,[B(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),z(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),z(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),z(`tabs-tab`,`
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
 `,[G(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[B(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),pe(`disabled`,[Y(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),G(`closable`,`padding-right: 8px;`),G(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),G(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),G(`left, right`,`
 flex-direction: column; 
 `,[B(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),z(`tabs-wrapper`,`
 flex-direction: column;
 `),z(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[z(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),G(`top`,[G(`card-type`,[z(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),B(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),z(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[G(`active`,`
 border-bottom: 1px solid #0000;
 `)]),z(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),z(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),G(`left`,[G(`card-type`,[z(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),B(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),z(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[G(`active`,`
 border-right: 1px solid #0000;
 `)]),z(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),z(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),G(`right`,[G(`card-type`,[z(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),B(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),z(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[G(`active`,`
 border-left: 1px solid #0000;
 `)]),z(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),z(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),G(`bottom`,[G(`card-type`,[z(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),B(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),z(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[G(`active`,`
 border-top: 1px solid #0000;
 `)]),z(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),z(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Je=Ue,Ye=K({name:`Tabs`,props:Object.assign(Object.assign({},ve.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=_e(e),a=ve(`Tabs`,`-tabs`,qe,Se,e,n),o=W(null),s=W(null),c=W(null),l=W(null),u=W(null),d=W(null),f=W(!0),m=W(!0),h=te(e,[`labelSize`,`size`]),g=Te(()=>h.value?h.value:i?.value?.Tabs?.size||`medium`),_=te(e,[`activeName`,`value`]),v=W(_.value??e.defaultValue??(t.default?p(t.default())[0]?.props?.name:null)),b=y(_,v),x={id:0},S=Te(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});oe(b,()=>{x.id=0,D(),O()});function C(){let{value:e}=b;return e===null?null:o.value?.querySelector(`[data-name="${e}"]`)}function w(t){if(e.type===`card`)return;let{value:r}=s;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(E([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(E([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function ee(){if(e.type===`card`)return;let{value:t}=s;t&&(t.style.opacity=`0`)}function E(e){let{value:t}=s;if(t)for(let n of e)t.style[n]=``}function D(){if(e.type===`card`)return;let t=C();t?w(t):ee()}function O(){let e=u.value?.$el;if(!e)return;let t=C();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let k=W(null),A=0,j=null;function M(e){let t=k.value;if(t){A=e.getBoundingClientRect().height;let n=`${A}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};j?(r(),j(),j=null):j=r}}function N(e){let t=k.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(A,n)}px`};j?(j(),j=null,r()):j=r}}function ne(){let t=k.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let P={value:[]},re=W(`next`);function ie(e){let t=b.value,n=`next`;for(let r of P.value){if(r===t)break;if(r===e){n=`prev`;break}}re.value=n,F(e)}function F(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&Ce(n,t),r&&Ce(r,t),i&&Ce(i,t),v.value=t}function ae(t){let{onClose:n}=e;n&&Ce(n,t)}let I=!0;function L(){let{value:e}=s;if(!e)return;I||=!1;let t=`transition-disabled`;e.classList.add(t),D(),e.classList.remove(t)}let R=W(null);function z({transitionDisabled:e}){let t=o.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=C();n&&R.value&&(R.value.style.width=`${n.offsetWidth}px`,R.value.style.height=`${n.offsetHeight}px`,R.value.style.transform=`translateX(${n.offsetLeft-ue(getComputedStyle(t).paddingLeft)}px)`,e&&R.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}oe([b],()=>{e.type===`segment`&&T(()=>{z({transitionDisabled:!1})})}),xe(()=>{e.type===`segment`&&z({transitionDisabled:!0})});let se=0;function B(t){if(t.contentRect.width===0&&t.contentRect.height===0||se===t.contentRect.width)return;se=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(I||e.justifyContent?.startsWith(`space`))&&L(),n!==`segment`){let{placement:t}=e;G((t===`top`||t===`bottom`?u.value?.$el:d.value)||null)}}let de=Je(B,64);oe([()=>e.justifyContent,()=>e.size],()=>{T(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&L()})});let U=W(!1);function pe(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!U.value)s===`top`||s===`bottom`?a<r&&(U.value=!0):o<i&&(U.value=!0);else{let{value:e}=l;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(U.value=!1):o-i>e.$el.offsetHeight&&(U.value=!1)}G(u.value?.$el||null)}let me=Je(pe,64);function ge(){let{onAdd:t}=e;t&&t(),T(()=>{let e=C(),{value:t}=u;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function G(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;f.value=e<=0,m.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;f.value=e<=0,m.value=e+r>=n}}let ye=Je(e=>{G(e.target)},64);le(We,{triggerRef:V(e,`trigger`),tabStyleRef:V(e,`tabStyle`),tabClassRef:V(e,`tabClass`),addTabStyleRef:V(e,`addTabStyle`),addTabClassRef:V(e,`addTabClass`),paneClassRef:V(e,`paneClass`),paneStyleRef:V(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:V(e,`type`),closableRef:V(e,`closable`),valueRef:b,tabChangeIdRef:x,onBeforeLeaveRef:V(e,`onBeforeLeave`),activateTab:ie,handleClose:ae,handleAdd:ge}),be(()=>{D(),O()}),fe(()=>{let{value:e}=c;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;f.value?e.classList.remove(r):e.classList.add(r),m.value?e.classList.remove(i):e.classList.add(i)});let K={syncBarPosition:()=>{D()}},q=()=>{z({transitionDisabled:!0})},J=Te(()=>{let{value:t}=g,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:o,closeIconColorHover:s,closeIconColorPressed:c,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:_,tabColorSegment:v,closeSize:y,closeIconSize:b,closeColorHover:x,closeColorPressed:S,closeBorderRadius:C,[H(`panePadding`,t)]:w,[H(`tabPadding`,r)]:ee,[H(`tabPaddingVertical`,r)]:T,[H(`tabGap`,r)]:E,[H(`tabGap`,`${r}Vertical`)]:D,[H(`tabTextColor`,n)]:O,[H(`tabTextColorActive`,n)]:k,[H(`tabTextColorHover`,n)]:A,[H(`tabTextColorDisabled`,n)]:j,[H(`tabFontSize`,t)]:te},common:{cubicBezierEaseInOut:M}}=a.value;return{"--n-bezier":M,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":te,"--n-tab-text-color":O,"--n-tab-text-color-active":k,"--n-tab-text-color-disabled":j,"--n-tab-text-color-hover":A,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":y,"--n-close-icon-size":b,"--n-close-color-hover":x,"--n-close-color-pressed":S,"--n-close-border-radius":C,"--n-close-icon-color":o,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":c,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":ee,"--n-tab-padding-vertical":T,"--n-tab-gap":E,"--n-tab-gap-vertical":D,"--n-pane-padding-left":he(w,`left`),"--n-pane-padding-right":he(w,`right`),"--n-pane-padding-top":he(w,`top`),"--n-pane-padding-bottom":he(w,`bottom`),"--n-font-weight-strong":_,"--n-tab-color-segment":v}}),Y=r?ce(`tabs`,Te(()=>`${g.value[0]}${e.type[0]}`),J,e):void 0;return Object.assign({mergedClsPrefix:n,mergedValue:b,renderedNames:new Set,segmentCapsuleElRef:R,tabsPaneWrapperRef:k,tabsElRef:o,barElRef:s,addTabInstRef:l,xScrollInstRef:u,scrollWrapperElRef:c,addTabFixed:U,tabWrapperStyle:S,handleNavResize:de,mergedSize:g,handleScroll:ye,handleTabsResize:me,cssVars:r?void 0:J,themeClass:Y?.themeClass,animationDirection:re,renderNameListRef:P,yScrollElRef:d,handleSegmentResize:q,onAnimationBeforeLeave:M,onAnimationEnter:N,onAnimationAfterEnter:ne,onRender:Y?.onRender},K)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,$slots:{default:d,prefix:f,suffix:m}}=this;s?.();let h=d?p(d()).filter(e=>e.type.__TAB_PANE__===!0):[],g=d?p(d()).filter(e=>e.type.__TAB__===!0):[],_=!g.length,v=t===`card`,y=t===`segment`,b=!v&&!y&&this.justifyContent;o.value=[];let x=()=>{let t=N(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},b?null:N(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),_?h.map((e,t)=>(o.value.push(e.props.name),$e(N(Ke,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!b||b===`center`||b===`start`||b===`end`)}),e.children?{default:e.children.tab}:void 0)))):g.map((e,t)=>(o.value.push(e.props.name),$e(t!==0&&!b?Qe(e):e))),!r&&i&&v?Ze(i,(_?h.length:g.length)!==0):null,b?null:N(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return N(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},v&&i?N(u,{onResize:this.handleTabsResize},{default:()=>t}):t,v?N(`div`,{class:`${e}-tabs-pad`}):null,v?null:N(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},S=y?`top`:n;return N(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,b&&`${e}-tabs--flex`,`${e}-tabs--${S}`],style:this.cssVars},N(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${S}`,`${e}-tabs-nav`]},re(f,t=>t&&N(`div`,{class:`${e}-tabs-nav__prefix`},t)),y?N(u,{onResize:this.handleSegmentResize},{default:()=>N(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},N(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},N(`div`,{class:`${e}-tabs-wrapper`},N(`div`,{class:`${e}-tabs-tab`}))),_?h.map((e,t)=>(o.value.push(e.props.name),N(Ke,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):g.map((e,t)=>(o.value.push(e.props.name),t===0?e:Qe(e))))}):N(u,{onResize:this.handleNavResize},{default:()=>N(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(S)?N(Le,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:x}):N(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},x()))}),r&&i&&v?Ze(i,!0):null,re(m,t=>t&&N(`div`,{class:`${e}-tabs-nav__suffix`},t))),_&&(this.animated&&(S===`top`||S===`bottom`)?N(`div`,{ref:`tabsPaneWrapperRef`,style:l,class:[`${e}-tabs-pane-wrapper`,c]},Xe(h,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Xe(h,this.mergedValue,this.renderedNames)))}});function Xe(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?R(e,[[x,c]]):e)}}),o?N(d,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function Ze(e,t){return N(Ke,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function Qe(e){let t=D(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function $e(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var et={class:`settings-section`},tt=L(K({__name:`DisplaySettings`,setup(e){let t=Z(),n=X(),{t:r}=I(),{mode:i,setMode:a}=ge(),o=[{label:r(`settings.display.themeLight`),value:`light`},{label:r(`settings.display.themeDark`),value:`dark`},{label:r(`settings.display.themeSystem`),value:`system`}];async function s(e){try{await t.saveSection(`display`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}function l(e){let t=e;a(t),s({skin:t})}return(e,n)=>(q(),A(`section`,et,[b(Q,{label:P(r)(`settings.display.theme`),hint:P(r)(`settings.display.themeHint`)},{default:J(()=>[b(P(de),{value:P(i),options:o,size:`small`,"consistent-menu-width":!1,class:`input-sm`,"onUpdate:value":l},null,8,[`value`])]),_:1},8,[`label`,`hint`]),b(Q,{label:P(r)(`settings.display.streaming`),hint:P(r)(`settings.display.streamingHint`)},{default:J(()=>[b(P(c),{value:P(t).display.streaming,"onUpdate:value":n[0]||=e=>s({streaming:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),b(Q,{label:P(r)(`settings.display.compact`),hint:P(r)(`settings.display.compactHint`)},{default:J(()=>[b(P(c),{value:P(t).display.compact,"onUpdate:value":n[1]||=e=>s({compact:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),b(Q,{label:P(r)(`settings.display.showReasoning`),hint:P(r)(`settings.display.showReasoningHint`)},{default:J(()=>[b(P(c),{value:P(t).display.show_reasoning,"onUpdate:value":n[2]||=e=>s({show_reasoning:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),b(Q,{label:P(r)(`settings.display.showCost`),hint:P(r)(`settings.display.showCostHint`)},{default:J(()=>[b(P(c),{value:P(t).display.show_cost,"onUpdate:value":n[3]||=e=>s({show_cost:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),b(Q,{label:P(r)(`settings.display.inlineDiffs`),hint:P(r)(`settings.display.inlineDiffsHint`)},{default:J(()=>[b(P(c),{value:P(t).display.inline_diffs,"onUpdate:value":n[4]||=e=>s({inline_diffs:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),b(Q,{label:P(r)(`settings.display.bellOnComplete`),hint:P(r)(`settings.display.bellOnCompleteHint`)},{default:J(()=>[b(P(c),{value:P(t).display.bell_on_complete,"onUpdate:value":n[5]||=e=>s({bell_on_complete:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),b(Q,{label:P(r)(`settings.display.busyInputMode`),hint:P(r)(`settings.display.busyInputModeHint`)},{default:J(()=>[b(P(c),{value:P(t).display.busy_input_mode===`interrupt`,"onUpdate:value":n[6]||=e=>s({busy_input_mode:e?`interrupt`:`off`})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-e737ef30`]]),nt={class:`settings-section`},rt=L(K({__name:`AgentSettings`,setup(e){let t=Z(),n=X(),{t:r}=I();async function i(e){try{await t.saveSection(`agent`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(q(),A(`section`,nt,[b(Q,{label:P(r)(`settings.agent.maxTurns`),hint:P(r)(`settings.agent.maxTurnsHint`)},{default:J(()=>[b(P(o),{value:P(t).agent.max_turns,min:1,max:200,step:5,size:`small`,class:`input-sm`,"onUpdate:value":n[0]||=e=>e!=null&&i({max_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),b(Q,{label:P(r)(`settings.agent.gatewayTimeout`),hint:P(r)(`settings.agent.gatewayTimeoutHint`)},{default:J(()=>[b(P(o),{value:P(t).agent.gateway_timeout,min:60,max:7200,step:60,size:`small`,class:`input-sm`,"onUpdate:value":n[1]||=e=>e!=null&&i({gateway_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),b(Q,{label:P(r)(`settings.agent.restartDrainTimeout`),hint:P(r)(`settings.agent.restartDrainTimeoutHint`)},{default:J(()=>[b(P(o),{value:P(t).agent.restart_drain_timeout,min:10,max:300,step:10,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({restart_drain_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),b(Q,{label:P(r)(`settings.agent.toolEnforcement`),hint:P(r)(`settings.agent.toolEnforcementHint`)},{default:J(()=>[b(P(de),{value:P(t).agent.tool_use_enforcement||`auto`,options:[{label:P(r)(`settings.agent.auto`),value:`auto`},{label:P(r)(`settings.agent.always`),value:`always`},{label:P(r)(`settings.agent.never`),value:`never`}],size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>i({tool_use_enforcement:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-1f96245d`]]),it={class:`settings-section`},at=L(K({__name:`MemorySettings`,setup(e){let t=Z(),n=X(),{t:r}=I();async function i(e){try{await t.saveSection(`memory`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(q(),A(`section`,it,[b(Q,{label:P(r)(`settings.memory.enabled`),hint:P(r)(`settings.memory.enabledHint`)},{default:J(()=>[b(P(c),{value:P(t).memory.memory_enabled,"onUpdate:value":n[0]||=e=>i({memory_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),b(Q,{label:P(r)(`settings.memory.userProfile`),hint:P(r)(`settings.memory.userProfileHint`)},{default:J(()=>[b(P(c),{value:P(t).memory.user_profile_enabled,"onUpdate:value":n[1]||=e=>i({user_profile_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),b(Q,{label:P(r)(`settings.memory.charLimit`),hint:P(r)(`settings.memory.charLimitHint`)},{default:J(()=>[b(P(o),{value:P(t).memory.memory_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({memory_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),b(Q,{label:P(r)(`settings.memory.userCharLimit`),hint:P(r)(`settings.memory.userCharLimitHint`)},{default:J(()=>[b(P(o),{value:P(t).memory.user_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>e!=null&&i({user_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0c8e2aa7`]]),ot={class:`settings-section`},st=L(K({__name:`SessionSettings`,setup(e){let t=Z(),n=Fe(),r=X(),{t:i}=I();async function a(e){try{await t.saveSection(`session_reset`,e),r.success(i(`settings.saved`))}catch{r.error(i(`settings.saveFailed`))}}return(e,r)=>(q(),A(`section`,ot,[b(Q,{label:P(i)(`settings.session.mode`),hint:P(i)(`settings.session.modeHint`)},{default:J(()=>[b(P(de),{value:P(t).sessionReset.mode||`both`,options:[{label:P(i)(`settings.session.modeBoth`),value:`both`},{label:P(i)(`settings.session.modeIdle`),value:`idle`},{label:P(i)(`settings.session.modeHourly`),value:`hourly`}],size:`small`,class:`input-md`,"onUpdate:value":r[0]||=e=>a({mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),b(Q,{label:P(i)(`settings.session.idleMinutes`),hint:P(i)(`settings.session.idleMinutesHint`)},{default:J(()=>[b(P(o),{value:P(t).sessionReset.idle_minutes,min:10,max:10080,step:30,size:`small`,class:`input-sm`,"onUpdate:value":r[1]||=e=>e!=null&&a({idle_minutes:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),b(Q,{label:P(i)(`settings.session.atHour`),hint:P(i)(`settings.session.atHourHint`)},{default:J(()=>[b(P(o),{value:P(t).sessionReset.at_hour,min:0,max:23,step:1,size:`small`,class:`input-sm`,"onUpdate:value":r[2]||=e=>e!=null&&a({at_hour:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),b(Q,{label:P(i)(`settings.session.liveMonitorHumanOnly`),hint:P(i)(`settings.session.liveMonitorHumanOnlyHint`)},{default:J(()=>[b(P(c),{value:P(n).humanOnly,"onUpdate:value":r[3]||=e=>P(n).setHumanOnly(e)},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-3514aeb7`]]),ct={class:`workspace-settings`},lt={key:0,class:`workspace-list`},ut={class:`workspace-info`},dt={class:`workspace-name`},ft=[`title`],pt={key:1,class:`workspace-form`},mt={class:`form-row`},ht={class:`form-row`},gt=L(K({__name:`WorkspaceSettings`,setup(e){let{t}=I(),n=X(),r=W([]),i=W(!1),a=W(!1),o=W(``),c=W(``),u=W(null);async function d(){i.value=!0;try{r.value=await Me()}finally{i.value=!1}}xe(d);function p(){o.value=``,c.value=``,a.value=!1,u.value=null}async function m(){let e=o.value.trim(),i=c.value.trim();if(!(!e||!i))try{if(u.value){let a=await je(u.value,{name:e,path:i}),o=r.value.findIndex(e=>e.id===u.value);o>=0&&(r.value[o]=a),n.success(t(`common.saved`))}else{let a=await Ne(e,i);r.value.push(a),n.success(t(`common.saved`))}p()}catch(e){let r=e?.message||``;r.includes(`409`)||r.includes(`already exists`)?n.error(t(`settings.workspace.nameExists`)):r.includes(`400`)||r.includes(`does not exist`)?n.error(t(`settings.workspace.pathNotExists`)):n.error(t(`common.saveFailed`))}}function h(e){u.value=e.id,o.value=e.name,c.value=e.path,a.value=!0}async function y(e){await Pe(e)?(r.value=r.value.filter(t=>t.id!==e),n.success(t(`common.saved`))):n.error(t(`common.deleteFailed`))}return(e,n)=>(q(),A(`section`,ct,[a.value?(q(),A(`div`,pt,[f(`div`,mt,[f(`label`,null,F(P(t)(`settings.workspace.name`)),1),b(P(E),{value:o.value,"onUpdate:value":n[1]||=e=>o.value=e,size:`small`,placeholder:P(t)(`settings.workspace.namePlaceholder`),onKeydown:C(m,[`enter`])},null,8,[`value`,`placeholder`])]),f(`div`,ht,[f(`label`,null,F(P(t)(`settings.workspace.path`)),1),b(P(E),{value:c.value,"onUpdate:value":n[2]||=e=>c.value=e,size:`small`,placeholder:P(t)(`settings.workspace.pathPlaceholder`),onKeydown:C(m,[`enter`])},null,8,[`value`,`placeholder`])]),b(P(s),{size:`small`},{default:J(()=>[b(P(w),{size:`small`,type:`primary`,disabled:!o.value.trim()||!c.value.trim(),onClick:m},{default:J(()=>[g(F(u.value?P(t)(`common.update`):P(t)(`common.create`)),1)]),_:1},8,[`disabled`]),b(P(w),{size:`small`,onClick:p},{default:J(()=>[g(F(P(t)(`common.cancel`)),1)]),_:1})]),_:1})])):(q(),A(`div`,lt,[r.value.length===0&&!i.value?(q(),j(P(ye),{key:0,description:P(t)(`settings.workspace.empty`)},null,8,[`description`])):_(``,!0),(q(!0),A(v,null,ie(r.value,e=>(q(),A(`div`,{key:e.id,class:`workspace-item`},[f(`div`,ut,[f(`span`,dt,F(e.name),1),f(`span`,{class:`workspace-path`,title:e.path},F(e.path),9,ft)]),b(P(s),{size:`small`},{default:J(()=>[b(P(w),{size:`tiny`,quaternary:``,onClick:t=>h(e)},{default:J(()=>[g(F(P(t)(`common.edit`)),1)]),_:1},8,[`onClick`]),b(P(l),{onPositiveClick:t=>y(e.id)},{trigger:J(()=>[b(P(w),{size:`tiny`,quaternary:``,type:`error`},{default:J(()=>[g(F(P(t)(`common.delete`)),1)]),_:1})]),default:J(()=>[g(` `+F(P(t)(`settings.workspace.deleteConfirm`)),1)]),_:1},8,[`onPositiveClick`])]),_:2},1024)]))),128)),b(P(w),{class:`add-btn`,dashed:``,type:`primary`,size:`small`,onClick:n[0]||=e=>{a.value=!0,u.value=null}},{default:J(()=>[g(` + `+F(P(t)(`settings.workspace.add`)),1)]),_:1})]))]))}}),[[`__scopeId`,`data-v-d6989927`]]),_t={class:`settings-section`},vt=L(K({__name:`PrivacySettings`,setup(e){let t=Z(),n=X(),{t:r}=I();async function i(e){try{await t.saveSection(`privacy`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(q(),A(`section`,_t,[b(Q,{label:P(r)(`settings.privacy.redactPii`),hint:P(r)(`settings.privacy.redactPiiHint`)},{default:J(()=>[b(P(c),{value:P(t).privacy.redact_pii,"onUpdate:value":n[0]||=e=>i({redact_pii:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-43145f27`]]),yt={class:`account-settings`},bt={class:`section-desc`},xt={key:0,class:`action-row`},St={class:`action-label`},Ct={key:1,class:`configured-section`},wt={class:`action-row`},Tt={class:`action-label`},Et={class:`action-buttons`},Dt=L(K({__name:`AccountSettings`,setup(n){let{t:r}=I(),i=X(),a=W(!1),o=W(null),s=W(!1),c=W(!1),u=W(``),d=W(``),p=W(``),m=W(!1),h=W(``),_=W(``),v=W(``),y=W(!1),x=W(``),S=W(``);xe(async()=>{try{let e=await ke();a.value=e.hasPasswordLogin,o.value=e.username}catch{}});async function ee(){if(d.value!==p.value){i.error(r(`login.passwordMismatch`));return}if(d.value.length<6){i.error(r(`login.passwordTooShort`));return}s.value=!0;try{await Oe(u.value,d.value),a.value=!0,o.value=u.value,c.value=!1,u.value=``,d.value=``,p.value=``,i.success(r(`login.setupSuccess`))}catch(e){i.error(e.message||r(`common.saveFailed`))}finally{s.value=!1}}async function T(){if(_.value!==v.value){i.error(r(`login.passwordMismatch`));return}if(_.value.length<6){i.error(r(`login.passwordTooShort`));return}s.value=!0;try{await Ae(h.value,_.value),m.value=!1,h.value=``,_.value=``,v.value=``,i.success(r(`login.passwordChanged`))}catch(e){i.error(e.message||r(`common.saveFailed`))}finally{s.value=!1}}async function D(){if(S.value.trim().length<2){i.error(r(`login.usernameTooShort`));return}s.value=!0;try{await De(x.value,S.value.trim()),o.value=S.value.trim(),y.value=!1,x.value=``,S.value=``,i.success(r(`login.usernameChanged`))}catch(e){i.error(e.message||r(`common.saveFailed`))}finally{s.value=!1}}async function k(){s.value=!0;try{await Ee(),a.value=!1,o.value=null,i.success(r(`login.passwordRemoved`))}catch(e){i.error(e.message||r(`common.saveFailed`))}finally{s.value=!1}}function j(){u.value=``,d.value=``,p.value=``,c.value=!0}function te(){h.value=``,_.value=``,v.value=``,m.value=!0}function M(){x.value=``,S.value=``,y.value=!0}return(n,i)=>(q(),A(`div`,yt,[f(`p`,bt,F(P(r)(`login.setupDescription`)),1),a.value?(q(),A(`div`,Ct,[f(`div`,wt,[f(`span`,Tt,F(P(r)(`login.passwordLoginConfigured`,{username:o.value})),1),f(`div`,Et,[b(P(w),{onClick:te},{default:J(()=>[g(F(P(r)(`login.changePassword`)),1)]),_:1}),b(P(w),{onClick:M},{default:J(()=>[g(F(P(r)(`login.changeUsername`)),1)]),_:1}),b(P(l),{onPositiveClick:k},{trigger:J(()=>[b(P(w),{type:`error`,ghost:``,loading:s.value},{default:J(()=>[g(F(P(r)(`login.removePasswordLogin`)),1)]),_:1},8,[`loading`])]),default:J(()=>[g(` `+F(P(r)(`login.removeConfirm`)),1)]),_:1})])])])):(q(),A(`div`,xt,[f(`span`,St,F(P(r)(`login.passwordLoginNotConfigured`)),1),b(P(w),{type:`primary`,onClick:j},{default:J(()=>[g(F(P(r)(`login.setupPassword`)),1)]),_:1})])),b(P(O),{show:c.value,"onUpdate:show":i[4]||=e=>c.value=e,preset:`dialog`,title:P(r)(`login.setupPassword`)},{action:J(()=>[b(P(w),{onClick:i[3]||=e=>c.value=!1},{default:J(()=>[g(F(P(r)(`common.cancel`)),1)]),_:1}),b(P(w),{type:`primary`,loading:s.value,onClick:ee},{default:J(()=>[g(F(P(r)(`common.save`)),1)]),_:1},8,[`loading`])]),default:J(()=>[b(P(e),{"label-placement":`top`},{default:J(()=>[b(P(t),{label:P(r)(`login.username`)},{default:J(()=>[b(P(E),{value:u.value,"onUpdate:value":i[0]||=e=>u.value=e,placeholder:P(r)(`login.usernamePlaceholder`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),b(P(t),{label:P(r)(`login.newPassword`)},{default:J(()=>[b(P(E),{value:d.value,"onUpdate:value":i[1]||=e=>d.value=e,type:`password`,"show-password-on":`click`,placeholder:P(r)(`login.passwordPlaceholder`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),b(P(t),{label:P(r)(`login.confirmPassword`)},{default:J(()=>[b(P(E),{value:p.value,"onUpdate:value":i[2]||=e=>p.value=e,type:`password`,"show-password-on":`click`,placeholder:P(r)(`login.confirmPassword`),onKeyup:C(ee,[`enter`])},null,8,[`value`,`placeholder`])]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`]),b(P(O),{show:m.value,"onUpdate:show":i[9]||=e=>m.value=e,preset:`dialog`,title:P(r)(`login.changePassword`)},{action:J(()=>[b(P(w),{onClick:i[8]||=e=>m.value=!1},{default:J(()=>[g(F(P(r)(`common.cancel`)),1)]),_:1}),b(P(w),{type:`primary`,loading:s.value,onClick:T},{default:J(()=>[g(F(P(r)(`common.save`)),1)]),_:1},8,[`loading`])]),default:J(()=>[b(P(e),{"label-placement":`top`},{default:J(()=>[b(P(t),{label:P(r)(`login.currentPassword`)},{default:J(()=>[b(P(E),{value:h.value,"onUpdate:value":i[5]||=e=>h.value=e,type:`password`,"show-password-on":`click`,placeholder:P(r)(`login.currentPassword`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),b(P(t),{label:P(r)(`login.newPassword`)},{default:J(()=>[b(P(E),{value:_.value,"onUpdate:value":i[6]||=e=>_.value=e,type:`password`,"show-password-on":`click`,placeholder:P(r)(`login.newPassword`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),b(P(t),{label:P(r)(`login.confirmPassword`)},{default:J(()=>[b(P(E),{value:v.value,"onUpdate:value":i[7]||=e=>v.value=e,type:`password`,"show-password-on":`click`,placeholder:P(r)(`login.confirmPassword`),onKeyup:C(T,[`enter`])},null,8,[`value`,`placeholder`])]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`]),b(P(O),{show:y.value,"onUpdate:show":i[13]||=e=>y.value=e,preset:`dialog`,title:P(r)(`login.changeUsername`)},{action:J(()=>[b(P(w),{onClick:i[12]||=e=>y.value=!1},{default:J(()=>[g(F(P(r)(`common.cancel`)),1)]),_:1}),b(P(w),{type:`primary`,loading:s.value,onClick:D},{default:J(()=>[g(F(P(r)(`common.save`)),1)]),_:1},8,[`loading`])]),default:J(()=>[b(P(e),{"label-placement":`top`},{default:J(()=>[b(P(t),{label:P(r)(`login.currentPassword`)},{default:J(()=>[b(P(E),{value:x.value,"onUpdate:value":i[10]||=e=>x.value=e,type:`password`,"show-password-on":`click`,placeholder:P(r)(`login.currentPassword`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),b(P(t),{label:P(r)(`login.newUsername`)},{default:J(()=>[b(P(E),{value:S.value,"onUpdate:value":i[11]||=e=>S.value=e,placeholder:P(r)(`login.usernamePlaceholder`),onKeyup:C(D,[`enter`])},null,8,[`value`,`placeholder`])]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`])]))}}),[[`__scopeId`,`data-v-79bc4876`]]),Ot={class:`settings-view`},kt={class:`page-header`},At={class:`header-title`},jt={class:`settings-content`},Mt=L(K({__name:`SettingsView`,setup(e){let t=Z(),{t:n}=I();return xe(()=>{t.fetchSettings()}),(e,r)=>(q(),A(`div`,Ot,[f(`header`,kt,[f(`h2`,At,F(P(n)(`settings.title`)),1)]),f(`div`,jt,[b(P(U),{show:P(t).loading||P(t).saving,size:`large`,description:P(n)(`common.loading`)},{default:J(()=>[b(P(Ye),{type:`line`,animated:``},{default:J(()=>[b(P($),{name:`account`,tab:P(n)(`settings.tabs.account`)},{default:J(()=>[b(Dt)]),_:1},8,[`tab`]),b(P($),{name:`display`,tab:P(n)(`settings.tabs.display`)},{default:J(()=>[b(tt)]),_:1},8,[`tab`]),b(P($),{name:`agent`,tab:P(n)(`settings.tabs.agent`)},{default:J(()=>[b(rt)]),_:1},8,[`tab`]),b(P($),{name:`memory`,tab:P(n)(`settings.tabs.memory`)},{default:J(()=>[b(at)]),_:1},8,[`tab`]),b(P($),{name:`session`,tab:P(n)(`settings.tabs.session`)},{default:J(()=>[b(st)]),_:1},8,[`tab`]),b(P($),{name:`workspace`,tab:P(n)(`settings.tabs.workspace`)},{default:J(()=>[b(gt)]),_:1},8,[`tab`]),b(P($),{name:`privacy`,tab:P(n)(`settings.tabs.privacy`)},{default:J(()=>[b(vt)]),_:1},8,[`tab`])]),_:1})]),_:1},8,[`show`,`description`])])]))}}),[[`__scopeId`,`data-v-03afb3bd`]]);export{Mt as default};