import{i as e,n as t}from"./warn-MV9BENh8.js";import{S as n}from"./_baseFor-tDInUmcl.js";import{n as r,t as i}from"./now-CPQh7Bt5.js";import{t as a}from"./Add-B453vGHX.js";import{t as o}from"./InputNumber-D3XyoBml.js";import{t as s}from"./Space-CC91Wsih.js";import{t as c}from"./Switch-DjlSXZxx.js";import{t as l}from"./Popconfirm-D6IDTgOP.js";import{$ as u,$r as d,A as f,Ai as p,Ar as m,B as h,Bn as g,Br as _,C as v,Cr as y,Di as b,Dn as x,Hn as S,Hr as C,Jr as w,Kr as T,L as E,Ln as D,Mn as O,On as k,Qr as A,Sr as j,Ti as M,Tn as N,Tr as P,Ur as F,Vn as ee,W as I,Xr as L,Yr as R,Zr as te,ai as z,bi as B,bn as ne,br as V,bt as re,ci as ie,di as ae,er as oe,gr as se,hi as ce,i as H,jn as le,lt as U,m as W,mi as ue,mr as de,ni as G,nr as fe,oi as pe,pi as K,ri as q,rr as me,si as he,ti as J,vi as ge,vt as Y,wi as X,wr as _e,xi as ve,xn as ye,xr as Z,y as be,yi as xe}from"./index-mOD_yK-p.js";import{t as Q}from"./SettingRow-WFQ-dglv.js";import{a as Se,i as Ce,n as we,r as Te,t as Ee}from"./session-browser-prefs-CskYeEbc.js";var De=g(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[g(`&::-webkit-scrollbar`,{width:0,height:0})]),Oe=q({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=X(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=S();return De.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:ee,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return z(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),ke=`Expected a function`,Ae=Math.max,je=Math.min;function Me(e,t,a){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof e!=`function`)throw TypeError(ke);t=r(t)||0,n(a)&&(p=!!a.leading,m=`maxWait`in a,c=m?Ae(r(a.maxWait)||0,t):c,h=`trailing`in a?!!a.trailing:h);function g(t){var n=o,r=s;return o=s=void 0,f=t,l=e.apply(r,n),l}function _(e){return f=e,u=setTimeout(b,t),p?g(e):l}function v(e){var n=e-d,r=e-f,i=t-n;return m?je(i,c-r):i}function y(e){var n=e-d,r=e-f;return d===void 0||n>=t||n<0||m&&r>=c}function b(){var e=i();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function C(){return u===void 0?l:x(i())}function w(){var e=i(),n=y(e);if(o=arguments,s=this,d=e,n){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,t),g(d)}return u===void 0&&(u=setTimeout(b,t)),l}return w.cancel=S,w.flush=C,w}var Ne=`Expected a function`;function Pe(e,t,r){var i=!0,a=!0;if(typeof e!=`function`)throw TypeError(Ne);return n(r)&&(i=`leading`in r?!!r.leading:i,a=`trailing`in r?!!r.trailing:a),Me(e,t,{leading:i,maxWait:t,trailing:a})}var Fe=e(`n-tabs`),Ie={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},$=q({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:Ie,slots:Object,setup(e){let n=pe(Fe,null);return n||t(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return z(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Le=q({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},k(Ie,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=pe(Fe);return{trigger:d,mergedClosable:R(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:o,value:s,mergedClosable:c,trigger:l,$slots:{default:u}}=this,d=i??o;return z(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?z(`div`,{class:`${t}-tabs-tab-pad`}):null,z(`div`,Object.assign({key:n,"data-name":n,"data-disabled":r?!0:void 0},he({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),z(`span`,{class:`${t}-tabs-tab__label`},e?z(T,null,z(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),z(Y,{clsPrefix:t},{default:()=>z(a,null)})):u?u():typeof d==`object`?d:x(d??n)),c&&this.type===`card`?z(U,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),Re=Z(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[y(`segment-type`,[Z(`tabs-rail`,[V(`&.transition-disabled`,[Z(`tabs-capsule`,`
 transition: none;
 `)])])]),y(`top`,[Z(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),y(`left`,[Z(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),y(`left, right`,`
 flex-direction: row;
 `,[Z(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),Z(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),y(`right`,`
 flex-direction: row-reverse;
 `,[Z(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),Z(`tabs-bar`,`
 left: 0;
 `)]),y(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[Z(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),Z(`tabs-bar`,`
 top: 0;
 `)]),Z(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[Z(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),Z(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Z(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[y(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),V(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),y(`flex`,[Z(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[Z(`tabs-wrapper`,`
 width: 100%;
 `,[Z(`tabs-tab`,`
 margin-right: 0;
 `)])])]),Z(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[j(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),j(`prefix`,`padding-right: 16px;`),j(`suffix`,`padding-left: 16px;`)]),y(`top, bottom`,[V(`>`,[Z(`tabs-nav`,[Z(`tabs-nav-scroll-wrapper`,[V(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),V(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),y(`shadow-start`,[V(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),y(`shadow-end`,[V(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),y(`left, right`,[Z(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),V(`>`,[Z(`tabs-nav`,[Z(`tabs-nav-scroll-wrapper`,[V(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),V(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),y(`shadow-start`,[V(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),y(`shadow-end`,[V(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),Z(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[Z(`tabs-nav-y-scroll`,`
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
 `)]),Z(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),Z(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),Z(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),Z(`tabs-tab`,`
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
 `,[y(`disabled`,{cursor:`not-allowed`}),j(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),j(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),Z(`tabs-bar`,`
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
 `),y(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),Z(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),Z(`tab-pane`,`
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
 `)]),Z(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),y(`line-type, bar-type`,[Z(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[V(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),y(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),y(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),Z(`tabs-nav`,[y(`line-type`,[y(`top`,[j(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-bar`,`
 bottom: -1px;
 `)]),y(`left`,[j(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-bar`,`
 right: -1px;
 `)]),y(`right`,[j(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-bar`,`
 left: -1px;
 `)]),y(`bottom`,[j(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-bar`,`
 top: -1px;
 `)]),j(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),Z(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),Z(`tabs-bar`,`
 border-radius: 0;
 `)]),y(`card-type`,[j(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),Z(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),Z(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),Z(`tabs-tab`,`
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
 `,[j(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),_e(`disabled`,[V(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),y(`closable`,`padding-right: 8px;`),y(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),y(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),y(`left, right`,`
 flex-direction: column; 
 `,[j(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),Z(`tabs-wrapper`,`
 flex-direction: column;
 `),Z(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[Z(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),y(`top`,[y(`card-type`,[Z(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),j(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[y(`active`,`
 border-bottom: 1px solid #0000;
 `)]),Z(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),y(`left`,[y(`card-type`,[Z(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),j(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[y(`active`,`
 border-right: 1px solid #0000;
 `)]),Z(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),y(`right`,[y(`card-type`,[Z(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),j(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[y(`active`,`
 border-left: 1px solid #0000;
 `)]),Z(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),y(`bottom`,[y(`card-type`,[Z(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),j(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[y(`active`,`
 border-top: 1px solid #0000;
 `)]),Z(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),ze=Pe,Be=q({name:`Tabs`,props:Object.assign(Object.assign({},re.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=ye(e),a=re(`Tabs`,`-tabs`,Re,v,e,n),o=X(null),s=X(null),c=X(null),l=X(null),u=X(null),d=X(null),f=X(!0),p=X(!0),m=oe(e,[`labelSize`,`size`]),h=R(()=>m.value?m.value:i?.value?.Tabs?.size||`medium`),g=oe(e,[`activeName`,`value`]),_=X(g.value??e.defaultValue??(t.default?le(t.default())[0]?.props?.name:null)),y=fe(g,_),b={id:0},x=R(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});ge(y,()=>{b.id=0,E(),D()});function S(){let{value:e}=y;return e===null?null:o.value?.querySelector(`[data-name="${e}"]`)}function C(t){if(e.type===`card`)return;let{value:r}=s;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(T([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(T([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function w(){if(e.type===`card`)return;let{value:t}=s;t&&(t.style.opacity=`0`)}function T(e){let{value:t}=s;if(t)for(let n of e)t.style[n]=``}function E(){if(e.type===`card`)return;let t=S();t?C(t):w()}function D(){let e=u.value?.$el;if(!e)return;let t=S();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let k=X(null),A=0,j=null;function N(e){let t=k.value;if(t){A=e.getBoundingClientRect().height;let n=`${A}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};j?(r(),j(),j=null):j=r}}function F(e){let t=k.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(A,n)}px`};j?(j(),j=null,r()):j=r}}function ee(){let t=k.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let I={value:[]},L=X(`next`);function te(e){let t=y.value,n=`next`;for(let r of I.value){if(r===t)break;if(r===e){n=`prev`;break}}L.value=n,z(e)}function z(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&O(n,t),r&&O(r,t),i&&O(i,t),_.value=t}function B(t){let{onClose:n}=e;n&&O(n,t)}let V=!0;function ce(){let{value:e}=s;if(!e)return;V||=!1;let t=`transition-disabled`;e.classList.add(t),E(),e.classList.remove(t)}let H=X(null);function U({transitionDisabled:e}){let t=o.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=S();n&&H.value&&(H.value.style.width=`${n.offsetWidth}px`,H.value.style.height=`${n.offsetHeight}px`,H.value.style.transform=`translateX(${n.offsetLeft-de(getComputedStyle(t).paddingLeft)}px)`,e&&H.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}ge([y],()=>{e.type===`segment`&&ie(()=>{U({transitionDisabled:!1})})}),ae(()=>{e.type===`segment`&&U({transitionDisabled:!0})});let W=0;function G(t){if(t.contentRect.width===0&&t.contentRect.height===0||W===t.contentRect.width)return;W=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(V||e.justifyContent?.startsWith(`space`))&&ce(),n!==`segment`){let{placement:t}=e;Y((t===`top`||t===`bottom`?u.value?.$el:d.value)||null)}}let pe=ze(G,64);ge([()=>e.justifyContent,()=>e.size],()=>{ie(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&ce()})});let K=X(!1);function q(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!K.value)s===`top`||s===`bottom`?a<r&&(K.value=!0):o<i&&(K.value=!0);else{let{value:e}=l;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(K.value=!1):o-i>e.$el.offsetHeight&&(K.value=!1)}Y(u.value?.$el||null)}let he=ze(q,64);function J(){let{onAdd:t}=e;t&&t(),ie(()=>{let e=S(),{value:t}=u;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function Y(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;f.value=e<=0,p.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;f.value=e<=0,p.value=e+r>=n}}let _e=ze(e=>{Y(e.target)},64);ue(Fe,{triggerRef:M(e,`trigger`),tabStyleRef:M(e,`tabStyle`),tabClassRef:M(e,`tabClass`),addTabStyleRef:M(e,`addTabStyle`),addTabClassRef:M(e,`addTabClass`),paneClassRef:M(e,`paneClass`),paneStyleRef:M(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:M(e,`type`),closableRef:M(e,`closable`),valueRef:y,tabChangeIdRef:b,onBeforeLeaveRef:M(e,`onBeforeLeave`),activateTab:te,handleClose:B,handleAdd:J}),me(()=>{E(),D()}),xe(()=>{let{value:e}=c;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;f.value?e.classList.remove(r):e.classList.add(r),p.value?e.classList.remove(i):e.classList.add(i)});let ve={syncBarPosition:()=>{E()}},Z=()=>{U({transitionDisabled:!0})},be=R(()=>{let{value:t}=h,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:o,closeIconColorHover:s,closeIconColorPressed:c,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:g,fontWeightStrong:_,tabColorSegment:v,closeSize:y,closeIconSize:b,closeColorHover:x,closeColorPressed:S,closeBorderRadius:C,[P(`panePadding`,t)]:w,[P(`tabPadding`,r)]:T,[P(`tabPaddingVertical`,r)]:E,[P(`tabGap`,r)]:D,[P(`tabGap`,`${r}Vertical`)]:O,[P(`tabTextColor`,n)]:k,[P(`tabTextColorActive`,n)]:A,[P(`tabTextColorHover`,n)]:j,[P(`tabTextColorDisabled`,n)]:M,[P(`tabFontSize`,t)]:N},common:{cubicBezierEaseInOut:F}}=a.value;return{"--n-bezier":F,"--n-color-segment":g,"--n-bar-color":i,"--n-tab-font-size":N,"--n-tab-text-color":k,"--n-tab-text-color-active":A,"--n-tab-text-color-disabled":M,"--n-tab-text-color-hover":j,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":y,"--n-close-icon-size":b,"--n-close-color-hover":x,"--n-close-color-pressed":S,"--n-close-border-radius":C,"--n-close-icon-color":o,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":c,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":T,"--n-tab-padding-vertical":E,"--n-tab-gap":D,"--n-tab-gap-vertical":O,"--n-pane-padding-left":se(w,`left`),"--n-pane-padding-right":se(w,`right`),"--n-pane-padding-top":se(w,`top`),"--n-pane-padding-bottom":se(w,`bottom`),"--n-font-weight-strong":_,"--n-tab-color-segment":v}}),Q=r?ne(`tabs`,R(()=>`${h.value[0]}${e.type[0]}`),be,e):void 0;return Object.assign({mergedClsPrefix:n,mergedValue:y,renderedNames:new Set,segmentCapsuleElRef:H,tabsPaneWrapperRef:k,tabsElRef:o,barElRef:s,addTabInstRef:l,xScrollInstRef:u,scrollWrapperElRef:c,addTabFixed:K,tabWrapperStyle:x,handleNavResize:pe,mergedSize:h,handleScroll:_e,handleTabsResize:he,cssVars:r?void 0:be,themeClass:Q?.themeClass,animationDirection:L,renderNameListRef:I,yScrollElRef:d,handleSegmentResize:Z,onAnimationBeforeLeave:N,onAnimationEnter:F,onAnimationAfterEnter:ee,onRender:Q?.onRender},ve)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,$slots:{default:u,prefix:d,suffix:f}}=this;s?.();let p=u?le(u()).filter(e=>e.type.__TAB_PANE__===!0):[],m=u?le(u()).filter(e=>e.type.__TAB__===!0):[],h=!m.length,g=t===`card`,_=t===`segment`,v=!g&&!_&&this.justifyContent;o.value=[];let y=()=>{let t=z(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},v?null:z(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),h?p.map((e,t)=>(o.value.push(e.props.name),We(z(Le,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!v||v===`center`||v===`start`||v===`end`)}),e.children?{default:e.children.tab}:void 0)))):m.map((e,t)=>(o.value.push(e.props.name),We(t!==0&&!v?Ue(e):e))),!r&&i&&g?He(i,(h?p.length:m.length)!==0):null,v?null:z(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return z(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},g&&i?z(D,{onResize:this.handleTabsResize},{default:()=>t}):t,g?z(`div`,{class:`${e}-tabs-pad`}):null,g?null:z(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},b=_?`top`:n;return z(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,v&&`${e}-tabs--flex`,`${e}-tabs--${b}`],style:this.cssVars},z(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${b}`,`${e}-tabs-nav`]},N(d,t=>t&&z(`div`,{class:`${e}-tabs-nav__prefix`},t)),_?z(D,{onResize:this.handleSegmentResize},{default:()=>z(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},z(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},z(`div`,{class:`${e}-tabs-wrapper`},z(`div`,{class:`${e}-tabs-tab`}))),h?p.map((e,t)=>(o.value.push(e.props.name),z(Le,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):m.map((e,t)=>(o.value.push(e.props.name),t===0?e:Ue(e))))}):z(D,{onResize:this.handleNavResize},{default:()=>z(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(b)?z(Oe,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:y}):z(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},y()))}),r&&i&&g?He(i,!0):null,N(f,t=>t&&z(`div`,{class:`${e}-tabs-nav__suffix`},t))),h&&(this.animated&&(b===`top`||b===`bottom`)?z(`div`,{ref:`tabsPaneWrapperRef`,style:l,class:[`${e}-tabs-pane-wrapper`,c]},Ve(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ve(p,this.mergedValue,this.renderedNames)))}});function Ve(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?ve(e,[[C,c]]):e)}}),o?z(_,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function He(e,t){return z(Le,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function Ue(e){let t=w(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function We(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var Ge={class:`settings-section`},Ke=W(q({__name:`DisplaySettings`,setup(e){let t=H(),n=f(),{t:r}=m();async function i(e){try{await t.saveSection(`display`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(K(),d(`section`,Ge,[G(Q,{label:b(r)(`settings.display.streaming`),hint:b(r)(`settings.display.streamingHint`)},{default:B(()=>[G(b(c),{value:b(t).display.streaming,"onUpdate:value":n[0]||=e=>i({streaming:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.display.compact`),hint:b(r)(`settings.display.compactHint`)},{default:B(()=>[G(b(c),{value:b(t).display.compact,"onUpdate:value":n[1]||=e=>i({compact:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.display.showReasoning`),hint:b(r)(`settings.display.showReasoningHint`)},{default:B(()=>[G(b(c),{value:b(t).display.show_reasoning,"onUpdate:value":n[2]||=e=>i({show_reasoning:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.display.showCost`),hint:b(r)(`settings.display.showCostHint`)},{default:B(()=>[G(b(c),{value:b(t).display.show_cost,"onUpdate:value":n[3]||=e=>i({show_cost:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.display.bellOnComplete`),hint:b(r)(`settings.display.bellOnCompleteHint`)},{default:B(()=>[G(b(c),{value:b(t).display.bell_on_complete,"onUpdate:value":n[4]||=e=>i({bell_on_complete:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.display.busyInputMode`),hint:b(r)(`settings.display.busyInputModeHint`)},{default:B(()=>[G(b(c),{value:b(t).display.busy_input_mode===`interrupt`,"onUpdate:value":n[5]||=e=>i({busy_input_mode:e?`interrupt`:`off`})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0d401d9f`]]),qe={class:`settings-section`},Je={class:`config-block`},Ye={class:`config-block-title`},Xe={class:`config-block`},Ze={class:`config-block-title`},Qe=W(q({__name:`AgentSettings`,setup(e){let t=H(),n=f(),{t:r}=m();async function i(e){try{await t.saveSection(`agent`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}async function a(e){try{await t.saveSection(`delegation`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(K(),d(`section`,qe,[L(`div`,Je,[L(`h4`,Ye,p(b(r)(`settings.agent.basic`,`基础`)),1),G(Q,{label:b(r)(`settings.agent.maxTurns`),hint:b(r)(`settings.agent.maxTurnsHint`)},{default:B(()=>[G(b(o),{value:b(t).agent.max_turns,min:1,max:200,step:5,size:`small`,class:`input-sm`,"onUpdate:value":n[0]||=e=>e!=null&&i({max_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.agent.gatewayTimeout`),hint:b(r)(`settings.agent.gatewayTimeoutHint`)},{default:B(()=>[G(b(o),{value:b(t).agent.gateway_timeout,min:60,max:7200,step:60,size:`small`,class:`input-sm`,"onUpdate:value":n[1]||=e=>e!=null&&i({gateway_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.agent.restartDrainTimeout`),hint:b(r)(`settings.agent.restartDrainTimeoutHint`)},{default:B(()=>[G(b(o),{value:b(t).agent.restart_drain_timeout,min:10,max:300,step:10,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({restart_drain_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.agent.toolEnforcement`),hint:b(r)(`settings.agent.toolEnforcementHint`)},{default:B(()=>[G(b(E),{value:b(t).agent.tool_use_enforcement||`auto`,options:[{label:b(r)(`settings.agent.auto`),value:`auto`},{label:b(r)(`settings.agent.always`),value:`always`},{label:b(r)(`settings.agent.never`),value:`never`}],size:`small`,class:`input-sm`,"show-tooltip":!0,"onUpdate:value":n[3]||=e=>i({tool_use_enforcement:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`])]),L(`div`,Xe,[L(`h4`,Ze,p(b(r)(`settings.agent.delegation`,`委托`)),1),G(Q,{label:b(r)(`settings.agent.maxConcurrentChildren`),hint:b(r)(`settings.agent.maxConcurrentChildrenHint`)},{default:B(()=>[G(b(o),{value:b(t).delegation.max_concurrent_children,min:1,max:10,step:1,size:`small`,class:`input-sm`,"onUpdate:value":n[4]||=e=>e!=null&&a({max_concurrent_children:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.agent.maxSpawnDepth`),hint:b(r)(`settings.agent.maxSpawnDepthHint`)},{default:B(()=>[G(b(o),{value:b(t).delegation.max_spawn_depth,min:1,max:5,step:1,size:`small`,class:`input-sm`,"onUpdate:value":n[5]||=e=>e!=null&&a({max_spawn_depth:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.agent.orchestratorEnabled`),hint:b(r)(`settings.agent.orchestratorEnabledHint`)},{default:B(()=>[G(b(c),{value:b(t).delegation.orchestrator_enabled,"onUpdate:value":n[6]||=e=>a({orchestrator_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])])]))}}),[[`__scopeId`,`data-v-4dde7a12`]]),$e={class:`settings-section`},et={class:`config-block`},tt={class:`config-block-title`},nt={class:`config-block`},rt={class:`config-block-title`},it={class:`config-block`},at={class:`config-block-title`},ot=W(q({__name:`SessionSettings`,setup(e){let t=H(),n=Ee(),r=f(),{t:i}=m();async function a(e){try{await t.saveSection(`session_reset`,e),r.success(i(`settings.saved`))}catch{r.error(i(`settings.saveFailed`))}}async function s(e){try{await t.saveSection(`sessions`,e),r.success(i(`settings.saved`))}catch{r.error(i(`settings.saveFailed`))}}return(e,r)=>(K(),d(`section`,$e,[L(`div`,et,[L(`h4`,tt,p(b(i)(`settings.session.resetPolicy`,`重置策略`)),1),G(Q,{label:b(i)(`settings.session.mode`),hint:b(i)(`settings.session.modeHint`)},{default:B(()=>[G(b(E),{value:b(t).sessionReset.mode||`both`,options:[{label:b(i)(`settings.session.modeBoth`),value:`both`},{label:b(i)(`settings.session.modeIdle`),value:`idle`},{label:b(i)(`settings.session.modeHourly`),value:`hourly`}],size:`small`,class:`input-md`,"onUpdate:value":r[0]||=e=>a({mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(i)(`settings.session.idleMinutes`),hint:b(i)(`settings.session.idleMinutesHint`)},{default:B(()=>[G(b(o),{value:b(t).sessionReset.idle_minutes,min:10,max:10080,step:30,size:`small`,class:`input-sm`,"onUpdate:value":r[1]||=e=>e!=null&&a({idle_minutes:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(i)(`settings.session.atHour`),hint:b(i)(`settings.session.atHourHint`)},{default:B(()=>[G(b(o),{value:b(t).sessionReset.at_hour,min:0,max:23,step:1,size:`small`,class:`input-sm`,"onUpdate:value":r[2]||=e=>e!=null&&a({at_hour:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]),L(`div`,nt,[L(`h4`,rt,p(b(i)(`settings.session.liveMonitor`,`实时监看`)),1),G(Q,{label:b(i)(`settings.session.liveMonitorHumanOnly`),hint:b(i)(`settings.session.liveMonitorHumanOnlyHint`)},{default:B(()=>[G(b(c),{value:b(n).humanOnly,"onUpdate:value":r[3]||=e=>b(n).setHumanOnly(e)},null,8,[`value`])]),_:1},8,[`label`,`hint`])]),L(`div`,it,[L(`h4`,at,p(b(i)(`settings.session.retention`,`保留`)),1),G(Q,{label:b(i)(`settings.session.retentionDays`),hint:b(i)(`settings.session.retentionDaysHint`)},{default:B(()=>[G(b(o),{value:b(t).sessions.retention_days,min:1,max:365,step:1,size:`small`,class:`input-sm`,"onUpdate:value":r[4]||=e=>e!=null&&s({retention_days:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(i)(`settings.session.autoPrune`),hint:b(i)(`settings.session.autoPruneHint`)},{default:B(()=>[G(b(c),{value:b(t).sessions.auto_prune,"onUpdate:value":r[5]||=e=>s({auto_prune:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(i)(`settings.session.vacuumAfterPrune`),hint:b(i)(`settings.session.vacuumAfterPruneHint`)},{default:B(()=>[G(b(c),{value:b(t).sessions.vacuum_after_prune,"onUpdate:value":r[6]||=e=>s({vacuum_after_prune:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])])]))}}),[[`__scopeId`,`data-v-eb1104c9`]]),st={class:`settings-section`},ct={class:`config-block`},lt={class:`config-block-title`},ut={class:`config-block`},dt={class:`config-block-title`},ft=W(q({__name:`MemorySettings`,setup(e){let t=H(),n=f(),{t:r}=m();async function i(e){try{await t.saveSection(`memory`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(K(),d(`section`,st,[L(`div`,ct,[L(`div`,lt,p(b(r)(`settings.memory.basic`,`基础`)),1),G(Q,{label:b(r)(`settings.memory.enabled`),hint:b(r)(`settings.memory.enabledHint`)},{default:B(()=>[G(b(c),{value:b(t).memory.memory_enabled,"onUpdate:value":n[0]||=e=>i({memory_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.memory.userProfile`),hint:b(r)(`settings.memory.userProfileHint`)},{default:B(()=>[G(b(c),{value:b(t).memory.user_profile_enabled,"onUpdate:value":n[1]||=e=>i({user_profile_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.memory.charLimit`),hint:b(r)(`settings.memory.charLimitHint`)},{default:B(()=>[G(b(o),{value:b(t).memory.memory_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({memory_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.memory.userCharLimit`),hint:b(r)(`settings.memory.userCharLimitHint`)},{default:B(()=>[G(b(o),{value:b(t).memory.user_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>e!=null&&i({user_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]),L(`div`,ut,[L(`div`,dt,p(b(r)(`settings.memory.advanced`,`高级`)),1),G(Q,{label:b(r)(`settings.memory.nudgeInterval`),hint:b(r)(`settings.memory.nudgeIntervalHint`)},{default:B(()=>[G(b(o),{value:b(t).memory.nudge_interval,min:1,max:50,step:1,size:`small`,class:`input-sm`,"onUpdate:value":n[4]||=e=>e!=null&&i({nudge_interval:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.memory.retrievalThreshold`),hint:b(r)(`settings.memory.retrievalThresholdHint`)},{default:B(()=>[G(b(o),{value:b(t).memory.retrieval_threshold,min:0,max:1,step:.05,size:`small`,class:`input-sm`,"onUpdate:value":n[5]||=e=>e!=null&&i({retrieval_threshold:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.memory.maxMemoryEntries`),hint:b(r)(`settings.memory.maxMemoryEntriesHint`)},{default:B(()=>[G(b(o),{value:b(t).memory.max_memory_entries,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[6]||=e=>e!=null&&i({max_memory_entries:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.memory.flushMinTurns`),hint:b(r)(`settings.memory.flushMinTurnsHint`)},{default:B(()=>[G(b(o),{value:b(t).memory.flush_min_turns,min:1,max:50,step:1,size:`small`,class:`input-sm`,"onUpdate:value":n[7]||=e=>e!=null&&i({flush_min_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])])]))}}),[[`__scopeId`,`data-v-e0643033`]]),pt={class:`settings-section`},mt={class:`config-block`},ht={class:`config-block-title`},gt={class:`config-block`},_t={class:`config-block-title`},vt={class:`config-block`},yt={class:`config-block-title`},bt=W(q({__name:`SafetyApprovalSettings`,setup(e){let t=H(),n=f(),{t:r}=m();async function i(e){try{await t.saveSection(`approvals`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}async function a(e){try{await t.saveSection(`human_delay`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}async function s(e){try{await t.saveSection(`security`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(K(),d(`section`,pt,[L(`div`,mt,[L(`h4`,ht,p(b(r)(`settings.approvals.approvalMode`)),1),G(Q,{label:b(r)(`settings.approvals.mode`),hint:b(r)(`settings.approvals.modeHint`)},{default:B(()=>[G(b(E),{value:b(t).approvals.mode||`manual`,options:[{label:b(r)(`settings.approvals.manual`),value:`manual`},{label:b(r)(`settings.approvals.autoOff`),value:`auto-off`}],size:`small`,class:`input-sm`,"onUpdate:value":n[0]||=e=>i({mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.approvals.cronMode`),hint:b(r)(`settings.approvals.cronModeHint`)},{default:B(()=>[G(b(E),{value:b(t).approvals.cron_mode||`deny`,options:[{label:b(r)(`settings.approvals.deny`),value:`deny`},{label:b(r)(`settings.approvals.allow`),value:`allow`},{label:b(r)(`settings.approvals.manual`),value:`manual`}],size:`small`,class:`input-sm`,"onUpdate:value":n[1]||=e=>i({cron_mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.approvals.timeout`),hint:b(r)(`settings.approvals.timeoutHint`)},{default:B(()=>[G(b(o),{value:b(t).approvals.timeout,min:10,max:600,step:10,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]),L(`div`,gt,[L(`h4`,_t,p(b(r)(`settings.humanDelay.humanDelay`)),1),G(Q,{label:b(r)(`settings.humanDelay.mode`),hint:b(r)(`settings.humanDelay.modeHint`)},{default:B(()=>[G(b(E),{value:b(t).humanDelay.mode||`off`,options:[{label:b(r)(`settings.humanDelay.off`),value:`off`},{label:b(r)(`settings.humanDelay.random`),value:`random`}],size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>a({mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.humanDelay.minMs`),hint:b(r)(`settings.humanDelay.minMsHint`)},{default:B(()=>[G(b(o),{value:b(t).humanDelay.min_ms,min:100,max:5e3,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[4]||=e=>e!=null&&a({min_ms:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.humanDelay.maxMs`),hint:b(r)(`settings.humanDelay.maxMsHint`)},{default:B(()=>[G(b(o),{value:b(t).humanDelay.max_ms,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[5]||=e=>e!=null&&a({max_ms:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]),L(`div`,vt,[L(`h4`,yt,p(b(r)(`settings.security.securityBlock`)),1),G(Q,{label:b(r)(`settings.security.redactSecrets`),hint:b(r)(`settings.security.redactSecretsHint`)},{default:B(()=>[G(b(c),{value:b(t).security.redact_secrets,"onUpdate:value":n[6]||=e=>s({redact_secrets:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:b(r)(`settings.security.allowPrivateUrls`),hint:b(r)(`settings.security.allowPrivateUrlsHint`)},{default:B(()=>[G(b(c),{value:b(t).security.allow_private_urls,"onUpdate:value":n[7]||=e=>s({allow_private_urls:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])])]))}}),[[`__scopeId`,`data-v-90756d57`]]),xt={class:`workspace-settings`},St={key:0,class:`workspace-list`},Ct={class:`workspace-info`},wt={class:`workspace-name`},Tt=[`title`],Et={key:1,class:`workspace-form`},Dt={class:`form-row`},Ot={class:`form-row`},kt=W(q({__name:`WorkspaceSettings`,setup(e){let{t}=m(),n=f(),r=X([]),i=X(!1),a=X(!1),o=X(``),c=X(``),g=X(null);async function _(){i.value=!0;try{r.value=await Ce()}finally{i.value=!1}}ae(_);function v(){o.value=``,c.value=``,a.value=!1,g.value=null}async function y(){let e=o.value.trim(),i=c.value.trim();if(!(!e||!i))try{if(g.value){let a=await Se(g.value,{name:e,path:i}),o=r.value.findIndex(e=>e.id===g.value);o>=0&&(r.value[o]=a),n.success(t(`common.saved`))}else{let a=await we(e,i);r.value.push(a),n.success(t(`common.saved`))}v()}catch(e){let r=e?.message||``;r.includes(`409`)||r.includes(`already exists`)?n.error(t(`settings.workspace.nameExists`)):r.includes(`400`)||r.includes(`does not exist`)?n.error(t(`settings.workspace.pathNotExists`)):n.error(t(`common.saveFailed`))}}function x(e){g.value=e.id,o.value=e.name,c.value=e.path,a.value=!0}async function S(e){await Te(e)?(r.value=r.value.filter(t=>t.id!==e),n.success(t(`common.saved`))):n.error(t(`common.deleteFailed`))}return(e,n)=>(K(),d(`section`,xt,[a.value?(K(),d(`div`,Et,[L(`div`,Dt,[L(`label`,null,p(b(t)(`settings.workspace.name`)),1),G(b(I),{value:o.value,"onUpdate:value":n[1]||=e=>o.value=e,size:`small`,placeholder:b(t)(`settings.workspace.namePlaceholder`),onKeydown:F(y,[`enter`])},null,8,[`value`,`placeholder`])]),L(`div`,Ot,[L(`label`,null,p(b(t)(`settings.workspace.path`)),1),G(b(I),{value:c.value,"onUpdate:value":n[2]||=e=>c.value=e,size:`small`,placeholder:b(t)(`settings.workspace.pathPlaceholder`),onKeydown:F(y,[`enter`])},null,8,[`value`,`placeholder`])]),G(b(s),{size:`small`},{default:B(()=>[G(b(h),{size:`small`,type:`primary`,disabled:!o.value.trim()||!c.value.trim(),onClick:y},{default:B(()=>[J(p(g.value?b(t)(`common.update`):b(t)(`common.create`)),1)]),_:1},8,[`disabled`]),G(b(h),{size:`small`,onClick:v},{default:B(()=>[J(p(b(t)(`common.cancel`)),1)]),_:1})]),_:1})])):(K(),d(`div`,St,[r.value.length===0&&!i.value?(K(),te(b(u),{key:0,description:b(t)(`settings.workspace.empty`)},null,8,[`description`])):A(``,!0),(K(!0),d(T,null,ce(r.value,e=>(K(),d(`div`,{key:e.id,class:`workspace-item`},[L(`div`,Ct,[L(`span`,wt,p(e.name),1),L(`span`,{class:`workspace-path`,title:e.path},p(e.path),9,Tt)]),G(b(s),{size:`small`},{default:B(()=>[G(b(h),{size:`tiny`,quaternary:``,onClick:t=>x(e)},{default:B(()=>[J(p(b(t)(`common.edit`)),1)]),_:1},8,[`onClick`]),G(b(l),{"positive-text":b(t)(`common.confirm`),"negative-text":b(t)(`common.cancel`),onPositiveClick:t=>S(e.id)},{trigger:B(()=>[G(b(h),{size:`tiny`,quaternary:``,type:`error`},{default:B(()=>[J(p(b(t)(`common.delete`)),1)]),_:1})]),default:B(()=>[J(` `+p(b(t)(`settings.workspace.deleteConfirm`)),1)]),_:1},8,[`positive-text`,`negative-text`,`onPositiveClick`])]),_:2},1024)]))),128)),G(b(h),{class:`add-btn`,dashed:``,type:`primary`,size:`small`,onClick:n[0]||=e=>{a.value=!0,g.value=null}},{default:B(()=>[J(` + `+p(b(t)(`settings.workspace.add`)),1)]),_:1})]))]))}}),[[`__scopeId`,`data-v-b65db1e5`]]),At={class:`settings-view`},jt={class:`page-header`},Mt={class:`header-title`},Nt={class:`settings-content`},Pt=W(q({__name:`SettingsView`,setup(e){let t=H(),{t:n}=m();return ae(()=>{t.fetchSettings()}),(e,r)=>(K(),d(`div`,At,[L(`header`,jt,[L(`h2`,Mt,p(b(n)(`settings.title`)),1)]),L(`div`,Nt,[G(b(be),{show:b(t).loading||b(t).saving,size:`large`,description:b(n)(`common.loading`)},{default:B(()=>[G(b(Be),{type:`line`,animated:``},{default:B(()=>[G(b($),{name:`display`,tab:b(n)(`settings.tabs.display`)},{default:B(()=>[G(Ke)]),_:1},8,[`tab`]),G(b($),{name:`agent`,tab:b(n)(`settings.tabs.agent`)},{default:B(()=>[G(Qe)]),_:1},8,[`tab`]),G(b($),{name:`session`,tab:b(n)(`settings.tabs.session`)},{default:B(()=>[G(ot)]),_:1},8,[`tab`]),G(b($),{name:`memory`,tab:b(n)(`settings.tabs.memory`)},{default:B(()=>[G(ft)]),_:1},8,[`tab`]),G(b($),{name:`safety`,tab:b(n)(`settings.tabs.safety`)},{default:B(()=>[G(bt)]),_:1},8,[`tab`]),G(b($),{name:`workspace`,tab:b(n)(`settings.tabs.workspace`)},{default:B(()=>[G(kt)]),_:1},8,[`tab`])]),_:1})]),_:1},8,[`show`,`description`])])]))}}),[[`__scopeId`,`data-v-215990b2`]]);export{Pt as default};