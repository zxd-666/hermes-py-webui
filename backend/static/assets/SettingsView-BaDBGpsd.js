import{i as e,n as t}from"./warn-MV9BENh8.js";import{S as n}from"./_baseFor-tDInUmcl.js";import{n as r,t as i}from"./now-BRrexGjX.js";import{t as a}from"./Add-ePoE6guO.js";import{t as o}from"./InputNumber-_DJVuELM.js";import{i as s,n as c,r as l,t as u}from"./ProvidersPanel-B5c9YD8_.js";import{t as d}from"./Space-CPyYBtly.js";import{t as f}from"./Switch-CllPinuE.js";import{t as p}from"./Popconfirm-Ekv3pdkb.js";import{$r as m,An as h,Bn as g,Br as _,Ci as v,Cn as y,Cr as b,Ei as x,En as S,F as C,Fn as w,H as T,Jr as E,Kr as ee,O as D,Oi as O,Or as k,Qn as te,R as A,Rn as j,Rr as ne,Si as M,Sr as re,Ti as N,Tn as ie,Vr as ae,Wr as P,Xr as F,Yr as I,Z as oe,Zr as L,_ as R,_i as se,ai as ce,br as z,di as B,ei as V,er as le,f as H,fi as ue,fr as de,g as fe,gi as pe,gt as me,i as U,ii as W,kn as he,li as ge,mr as _e,oi as ve,pi as ye,qr as G,ri as K,st as be,ti as q,tr as xe,vi as J,vn as Se,vr as Y,vt as Ce,x as we,xr as X,yi as Te,yn as Ee,yr as Z,zn as De}from"./index-D8vnN-wq.js";import{t as Q}from"./SettingRow-Cn6lU0BO.js";import{a as Oe,i as ke,n as Ae,r as je,t as Me}from"./session-browser-prefs-DtnfPZt-.js";var Ne=j(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[j(`&::-webkit-scrollbar`,{width:0,height:0})]),Pe=q({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=M(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=g();return Ne.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:De,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return K(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Fe=`Expected a function`,Ie=Math.max,Le=Math.min;function Re(e,t,a){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof e!=`function`)throw TypeError(Fe);t=r(t)||0,n(a)&&(p=!!a.leading,m=`maxWait`in a,c=m?Ie(r(a.maxWait)||0,t):c,h=`trailing`in a?!!a.trailing:h);function g(t){var n=o,r=s;return o=s=void 0,f=t,l=e.apply(r,n),l}function _(e){return f=e,u=setTimeout(b,t),p?g(e):l}function v(e){var n=e-d,r=e-f,i=t-n;return m?Le(i,c-r):i}function y(e){var n=e-d,r=e-f;return d===void 0||n>=t||n<0||m&&r>=c}function b(){var e=i();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function C(){return u===void 0?l:x(i())}function w(){var e=i(),n=y(e);if(o=arguments,s=this,d=e,n){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,t),g(d)}return u===void 0&&(u=setTimeout(b,t)),l}return w.cancel=S,w.flush=C,w}var ze=`Expected a function`;function Be(e,t,r){var i=!0,a=!0;if(typeof e!=`function`)throw TypeError(ze);return n(r)&&(i=`leading`in r?!!r.leading:i,a=`trailing`in r?!!r.trailing:a),Re(e,t,{leading:i,maxWait:t,trailing:a})}var Ve=e(`n-tabs`),He={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},$=q({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:He,slots:Object,setup(e){let n=W(Ve,null);return n||t(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return K(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Ue=q({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},S(He,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=W(Ve);return{trigger:d,mergedClosable:G(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:o,value:s,mergedClosable:c,trigger:l,$slots:{default:u}}=this,d=i??o;return K(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?K(`div`,{class:`${t}-tabs-tab-pad`}):null,K(`div`,Object.assign({key:n,"data-name":n,"data-disabled":r?!0:void 0},ce({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),K(`span`,{class:`${t}-tabs-tab__label`},e?K(P,null,K(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),K(me,{clsPrefix:t},{default:()=>K(a,null)})):u?u():typeof d==`object`?d:ie(d??n)),c&&this.type===`card`?K(be,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),We=Z(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[X(`segment-type`,[Z(`tabs-rail`,[Y(`&.transition-disabled`,[Z(`tabs-capsule`,`
 transition: none;
 `)])])]),X(`top`,[Z(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),X(`left`,[Z(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),X(`left, right`,`
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
 `)]),X(`right`,`
 flex-direction: row-reverse;
 `,[Z(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),Z(`tabs-bar`,`
 left: 0;
 `)]),X(`bottom`,`
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
 `,[X(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),Y(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),X(`flex`,[Z(`tabs-nav`,`
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
 `,[z(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),z(`prefix`,`padding-right: 16px;`),z(`suffix`,`padding-left: 16px;`)]),X(`top, bottom`,[Y(`>`,[Z(`tabs-nav`,[Z(`tabs-nav-scroll-wrapper`,[Y(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),Y(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),X(`shadow-start`,[Y(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),X(`shadow-end`,[Y(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),X(`left, right`,[Z(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),Y(`>`,[Z(`tabs-nav`,[Z(`tabs-nav-scroll-wrapper`,[Y(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),Y(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),X(`shadow-start`,[Y(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),X(`shadow-end`,[Y(`&::after`,`
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
 `,[X(`disabled`,{cursor:`not-allowed`}),z(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),z(`label`,`
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
 `,[Y(`&.transition-disabled`,`
 transition: none;
 `),X(`disabled`,`
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
 `)]),Z(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),X(`line-type, bar-type`,[Z(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[Y(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),X(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),X(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),Z(`tabs-nav`,[X(`line-type`,[X(`top`,[z(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-bar`,`
 bottom: -1px;
 `)]),X(`left`,[z(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-bar`,`
 right: -1px;
 `)]),X(`right`,[z(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-bar`,`
 left: -1px;
 `)]),X(`bottom`,[z(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-bar`,`
 top: -1px;
 `)]),z(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),Z(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),Z(`tabs-bar`,`
 border-radius: 0;
 `)]),X(`card-type`,[z(`prefix, suffix`,`
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
 `,[X(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[z(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),re(`disabled`,[Y(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),X(`closable`,`padding-right: 8px;`),X(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),X(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),X(`left, right`,`
 flex-direction: column; 
 `,[z(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),Z(`tabs-wrapper`,`
 flex-direction: column;
 `),Z(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[Z(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),X(`top`,[X(`card-type`,[Z(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),z(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[X(`active`,`
 border-bottom: 1px solid #0000;
 `)]),Z(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),X(`left`,[X(`card-type`,[Z(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),z(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[X(`active`,`
 border-right: 1px solid #0000;
 `)]),Z(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),X(`right`,[X(`card-type`,[Z(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),z(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[X(`active`,`
 border-left: 1px solid #0000;
 `)]),Z(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),X(`bottom`,[X(`card-type`,[Z(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),z(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[X(`active`,`
 border-top: 1px solid #0000;
 `)]),Z(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Ge=Be,Ke=q({name:`Tabs`,props:Object.assign(Object.assign({},Ce.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=Ee(e),a=Ce(`Tabs`,`-tabs`,We,we,e,n),o=M(null),s=M(null),c=M(null),l=M(null),u=M(null),d=M(null),f=M(!0),p=M(!0),m=te(e,[`labelSize`,`size`]),g=G(()=>m.value?m.value:i?.value?.Tabs?.size||`medium`),_=te(e,[`activeName`,`value`]),y=M(_.value??e.defaultValue??(t.default?he(t.default())[0]?.props?.name:null)),x=le(_,y),S={id:0},C=G(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});pe(x,()=>{S.id=0,D(),O()});function w(){let{value:e}=x;return e===null?null:o.value?.querySelector(`[data-name="${e}"]`)}function T(t){if(e.type===`card`)return;let{value:r}=s;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(ee([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(ee([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function E(){if(e.type===`card`)return;let{value:t}=s;t&&(t.style.opacity=`0`)}function ee(e){let{value:t}=s;if(t)for(let n of e)t.style[n]=``}function D(){if(e.type===`card`)return;let t=w();t?T(t):E()}function O(){let e=u.value?.$el;if(!e)return;let t=w();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let k=M(null),A=0,j=null;function ne(e){let t=k.value;if(t){A=e.getBoundingClientRect().height;let n=`${A}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};j?(r(),j(),j=null):j=r}}function re(e){let t=k.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(A,n)}px`};j?(j(),j=null,r()):j=r}}function N(){let t=k.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let ie={value:[]},ae=M(`next`);function P(e){let t=x.value,n=`next`;for(let r of ie.value){if(r===t)break;if(r===e){n=`prev`;break}}ae.value=n,F(e)}function F(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&h(n,t),r&&h(r,t),i&&h(i,t),y.value=t}function I(t){let{onClose:n}=e;n&&h(n,t)}let oe=!0;function L(){let{value:e}=s;if(!e)return;oe||=!1;let t=`transition-disabled`;e.classList.add(t),D(),e.classList.remove(t)}let R=M(null);function ce({transitionDisabled:e}){let t=o.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=w();n&&R.value&&(R.value.style.width=`${n.offsetWidth}px`,R.value.style.height=`${n.offsetHeight}px`,R.value.style.transform=`translateX(${n.offsetLeft-de(getComputedStyle(t).paddingLeft)}px)`,e&&R.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}pe([x],()=>{e.type===`segment`&&ve(()=>{ce({transitionDisabled:!1})})}),ge(()=>{e.type===`segment`&&ce({transitionDisabled:!0})});let z=0;function B(t){if(t.contentRect.width===0&&t.contentRect.height===0||z===t.contentRect.width)return;z=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(oe||e.justifyContent?.startsWith(`space`))&&L(),n!==`segment`){let{placement:t}=e;W((t===`top`||t===`bottom`?u.value?.$el:d.value)||null)}}let V=Ge(B,64);pe([()=>e.justifyContent,()=>e.size],()=>{ve(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&L()})});let H=M(!1);function fe(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!H.value)s===`top`||s===`bottom`?a<r&&(H.value=!0):o<i&&(H.value=!0);else{let{value:e}=l;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(H.value=!1):o-i>e.$el.offsetHeight&&(H.value=!1)}W(u.value?.$el||null)}let me=Ge(fe,64);function U(){let{onAdd:t}=e;t&&t(),ve(()=>{let e=w(),{value:t}=u;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function W(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;f.value=e<=0,p.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;f.value=e<=0,p.value=e+r>=n}}let ye=Ge(e=>{W(e.target)},64);ue(Ve,{triggerRef:v(e,`trigger`),tabStyleRef:v(e,`tabStyle`),tabClassRef:v(e,`tabClass`),addTabStyleRef:v(e,`addTabStyle`),addTabClassRef:v(e,`addTabClass`),paneClassRef:v(e,`paneClass`),paneStyleRef:v(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:v(e,`type`),closableRef:v(e,`closable`),valueRef:x,tabChangeIdRef:S,onBeforeLeaveRef:v(e,`onBeforeLeave`),activateTab:P,handleClose:I,handleAdd:U}),xe(()=>{D(),O()}),se(()=>{let{value:e}=c;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;f.value?e.classList.remove(r):e.classList.add(r),p.value?e.classList.remove(i):e.classList.add(i)});let K={syncBarPosition:()=>{D()}},be=()=>{ce({transitionDisabled:!0})},q=G(()=>{let{value:t}=g,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:o,closeIconColorHover:s,closeIconColorPressed:c,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:_,tabColorSegment:v,closeSize:y,closeIconSize:x,closeColorHover:S,closeColorPressed:C,closeBorderRadius:w,[b(`panePadding`,t)]:T,[b(`tabPadding`,r)]:E,[b(`tabPaddingVertical`,r)]:ee,[b(`tabGap`,r)]:D,[b(`tabGap`,`${r}Vertical`)]:O,[b(`tabTextColor`,n)]:k,[b(`tabTextColorActive`,n)]:te,[b(`tabTextColorHover`,n)]:A,[b(`tabTextColorDisabled`,n)]:j,[b(`tabFontSize`,t)]:ne},common:{cubicBezierEaseInOut:M}}=a.value;return{"--n-bezier":M,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":ne,"--n-tab-text-color":k,"--n-tab-text-color-active":te,"--n-tab-text-color-disabled":j,"--n-tab-text-color-hover":A,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":y,"--n-close-icon-size":x,"--n-close-color-hover":S,"--n-close-color-pressed":C,"--n-close-border-radius":w,"--n-close-icon-color":o,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":c,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":E,"--n-tab-padding-vertical":ee,"--n-tab-gap":D,"--n-tab-gap-vertical":O,"--n-pane-padding-left":_e(T,`left`),"--n-pane-padding-right":_e(T,`right`),"--n-pane-padding-top":_e(T,`top`),"--n-pane-padding-bottom":_e(T,`bottom`),"--n-font-weight-strong":_,"--n-tab-color-segment":v}}),J=r?Se(`tabs`,G(()=>`${g.value[0]}${e.type[0]}`),q,e):void 0;return Object.assign({mergedClsPrefix:n,mergedValue:x,renderedNames:new Set,segmentCapsuleElRef:R,tabsPaneWrapperRef:k,tabsElRef:o,barElRef:s,addTabInstRef:l,xScrollInstRef:u,scrollWrapperElRef:c,addTabFixed:H,tabWrapperStyle:C,handleNavResize:V,mergedSize:g,handleScroll:ye,handleTabsResize:me,cssVars:r?void 0:q,themeClass:J?.themeClass,animationDirection:ae,renderNameListRef:ie,yScrollElRef:d,handleSegmentResize:be,onAnimationBeforeLeave:ne,onAnimationEnter:re,onAnimationAfterEnter:N,onRender:J?.onRender},K)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,$slots:{default:u,prefix:d,suffix:f}}=this;s?.();let p=u?he(u()).filter(e=>e.type.__TAB_PANE__===!0):[],m=u?he(u()).filter(e=>e.type.__TAB__===!0):[],h=!m.length,g=t===`card`,_=t===`segment`,v=!g&&!_&&this.justifyContent;o.value=[];let b=()=>{let t=K(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},v?null:K(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),h?p.map((e,t)=>(o.value.push(e.props.name),Xe(K(Ue,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!v||v===`center`||v===`start`||v===`end`)}),e.children?{default:e.children.tab}:void 0)))):m.map((e,t)=>(o.value.push(e.props.name),Xe(t!==0&&!v?Ye(e):e))),!r&&i&&g?Je(i,(h?p.length:m.length)!==0):null,v?null:K(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return K(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},g&&i?K(w,{onResize:this.handleTabsResize},{default:()=>t}):t,g?K(`div`,{class:`${e}-tabs-pad`}):null,g?null:K(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},x=_?`top`:n;return K(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,v&&`${e}-tabs--flex`,`${e}-tabs--${x}`],style:this.cssVars},K(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${x}`,`${e}-tabs-nav`]},y(d,t=>t&&K(`div`,{class:`${e}-tabs-nav__prefix`},t)),_?K(w,{onResize:this.handleSegmentResize},{default:()=>K(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},K(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},K(`div`,{class:`${e}-tabs-wrapper`},K(`div`,{class:`${e}-tabs-tab`}))),h?p.map((e,t)=>(o.value.push(e.props.name),K(Ue,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):m.map((e,t)=>(o.value.push(e.props.name),t===0?e:Ye(e))))}):K(w,{onResize:this.handleNavResize},{default:()=>K(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(x)?K(Pe,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:b}):K(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},b()))}),r&&i&&g?Je(i,!0):null,y(f,t=>t&&K(`div`,{class:`${e}-tabs-nav__suffix`},t))),h&&(this.animated&&(x===`top`||x===`bottom`)?K(`div`,{ref:`tabsPaneWrapperRef`,style:l,class:[`${e}-tabs-pane-wrapper`,c]},qe(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):qe(p,this.mergedValue,this.renderedNames)))}});function qe(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?Te(e,[[_,c]]):e)}}),o?K(ne,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function Je(e,t){return K(Ue,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function Ye(e){let t=ee(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Xe(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var Ze={class:`settings-section`},Qe=H(q({__name:`DisplaySettings`,setup(e){let t=U(),n=D(),{t:r}=k();async function i(e){try{await t.saveSection(`display`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(B(),L(`section`,Ze,[V(Q,{label:N(r)(`settings.display.streaming`),hint:N(r)(`settings.display.streamingHint`)},{default:J(()=>[V(N(f),{value:N(t).display.streaming,"onUpdate:value":n[0]||=e=>i({streaming:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.display.compact`),hint:N(r)(`settings.display.compactHint`)},{default:J(()=>[V(N(f),{value:N(t).display.compact,"onUpdate:value":n[1]||=e=>i({compact:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.display.showReasoning`),hint:N(r)(`settings.display.showReasoningHint`)},{default:J(()=>[V(N(f),{value:N(t).display.show_reasoning,"onUpdate:value":n[2]||=e=>i({show_reasoning:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.display.showCost`),hint:N(r)(`settings.display.showCostHint`)},{default:J(()=>[V(N(f),{value:N(t).display.show_cost,"onUpdate:value":n[3]||=e=>i({show_cost:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.display.bellOnComplete`),hint:N(r)(`settings.display.bellOnCompleteHint`)},{default:J(()=>[V(N(f),{value:N(t).display.bell_on_complete,"onUpdate:value":n[4]||=e=>i({bell_on_complete:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.display.busyInputMode`),hint:N(r)(`settings.display.busyInputModeHint`)},{default:J(()=>[V(N(f),{value:N(t).display.busy_input_mode===`interrupt`,"onUpdate:value":n[5]||=e=>i({busy_input_mode:e?`interrupt`:`off`})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0d401d9f`]]),$e={class:`settings-section`},et={class:`config-block`},tt={class:`config-block-title`},nt={class:`config-block`},rt={class:`config-block-title`},it=H(q({__name:`AgentSettings`,setup(e){let t=U(),n=D(),{t:r}=k();async function i(e){try{await t.saveSection(`agent`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}async function a(e){try{await t.saveSection(`delegation`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(B(),L(`section`,$e,[E(`div`,et,[E(`h4`,tt,O(N(r)(`settings.agent.basic`,`基础`)),1),V(Q,{label:N(r)(`settings.agent.maxTurns`),hint:N(r)(`settings.agent.maxTurnsHint`)},{default:J(()=>[V(N(o),{value:N(t).agent.max_turns,min:1,max:200,step:5,size:`small`,class:`input-sm`,"onUpdate:value":n[0]||=e=>e!=null&&i({max_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.agent.gatewayTimeout`),hint:N(r)(`settings.agent.gatewayTimeoutHint`)},{default:J(()=>[V(N(o),{value:N(t).agent.gateway_timeout,min:60,max:7200,step:60,size:`small`,class:`input-sm`,"onUpdate:value":n[1]||=e=>e!=null&&i({gateway_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.agent.restartDrainTimeout`),hint:N(r)(`settings.agent.restartDrainTimeoutHint`)},{default:J(()=>[V(N(o),{value:N(t).agent.restart_drain_timeout,min:10,max:300,step:10,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({restart_drain_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.agent.toolEnforcement`),hint:N(r)(`settings.agent.toolEnforcementHint`)},{default:J(()=>[V(N(C),{value:N(t).agent.tool_use_enforcement||`auto`,options:[{label:N(r)(`settings.agent.auto`),value:`auto`},{label:N(r)(`settings.agent.always`),value:`always`},{label:N(r)(`settings.agent.never`),value:`never`}],size:`small`,class:`input-sm`,"show-tooltip":!0,"onUpdate:value":n[3]||=e=>i({tool_use_enforcement:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`])]),E(`div`,nt,[E(`h4`,rt,O(N(r)(`settings.agent.delegation`,`委托`)),1),V(Q,{label:N(r)(`settings.agent.maxConcurrentChildren`),hint:N(r)(`settings.agent.maxConcurrentChildrenHint`)},{default:J(()=>[V(N(o),{value:N(t).delegation.max_concurrent_children,min:1,max:10,step:1,size:`small`,class:`input-sm`,"onUpdate:value":n[4]||=e=>e!=null&&a({max_concurrent_children:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.agent.maxSpawnDepth`),hint:N(r)(`settings.agent.maxSpawnDepthHint`)},{default:J(()=>[V(N(o),{value:N(t).delegation.max_spawn_depth,min:1,max:5,step:1,size:`small`,class:`input-sm`,"onUpdate:value":n[5]||=e=>e!=null&&a({max_spawn_depth:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.agent.orchestratorEnabled`),hint:N(r)(`settings.agent.orchestratorEnabledHint`)},{default:J(()=>[V(N(f),{value:N(t).delegation.orchestrator_enabled,"onUpdate:value":n[6]||=e=>a({orchestrator_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])])]))}}),[[`__scopeId`,`data-v-4dde7a12`]]),at={class:`settings-section`},ot={class:`config-block`},st={class:`config-block-title`},ct={class:`config-block`},lt={class:`config-block-title`},ut={class:`config-block`},dt={class:`config-block-title`},ft=H(q({__name:`SessionSettings`,setup(e){let t=U(),n=Me(),r=D(),{t:i}=k();async function a(e){try{await t.saveSection(`session_reset`,e),r.success(i(`settings.saved`))}catch{r.error(i(`settings.saveFailed`))}}async function s(e){try{await t.saveSection(`sessions`,e),r.success(i(`settings.saved`))}catch{r.error(i(`settings.saveFailed`))}}return(e,r)=>(B(),L(`section`,at,[E(`div`,ot,[E(`h4`,st,O(N(i)(`settings.session.resetPolicy`,`重置策略`)),1),V(Q,{label:N(i)(`settings.session.mode`),hint:N(i)(`settings.session.modeHint`)},{default:J(()=>[V(N(C),{value:N(t).sessionReset.mode||`both`,options:[{label:N(i)(`settings.session.modeBoth`),value:`both`},{label:N(i)(`settings.session.modeIdle`),value:`idle`},{label:N(i)(`settings.session.modeHourly`),value:`hourly`}],size:`small`,class:`input-md`,"onUpdate:value":r[0]||=e=>a({mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(i)(`settings.session.idleMinutes`),hint:N(i)(`settings.session.idleMinutesHint`)},{default:J(()=>[V(N(o),{value:N(t).sessionReset.idle_minutes,min:10,max:10080,step:30,size:`small`,class:`input-sm`,"onUpdate:value":r[1]||=e=>e!=null&&a({idle_minutes:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(i)(`settings.session.atHour`),hint:N(i)(`settings.session.atHourHint`)},{default:J(()=>[V(N(o),{value:N(t).sessionReset.at_hour,min:0,max:23,step:1,size:`small`,class:`input-sm`,"onUpdate:value":r[2]||=e=>e!=null&&a({at_hour:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]),E(`div`,ct,[E(`h4`,lt,O(N(i)(`settings.session.liveMonitor`,`实时监看`)),1),V(Q,{label:N(i)(`settings.session.liveMonitorHumanOnly`),hint:N(i)(`settings.session.liveMonitorHumanOnlyHint`)},{default:J(()=>[V(N(f),{value:N(n).humanOnly,"onUpdate:value":r[3]||=e=>N(n).setHumanOnly(e)},null,8,[`value`])]),_:1},8,[`label`,`hint`])]),E(`div`,ut,[E(`h4`,dt,O(N(i)(`settings.session.retention`,`保留`)),1),V(Q,{label:N(i)(`settings.session.retentionDays`),hint:N(i)(`settings.session.retentionDaysHint`)},{default:J(()=>[V(N(o),{value:N(t).sessions.retention_days,min:1,max:365,step:1,size:`small`,class:`input-sm`,"onUpdate:value":r[4]||=e=>e!=null&&s({retention_days:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(i)(`settings.session.autoPrune`),hint:N(i)(`settings.session.autoPruneHint`)},{default:J(()=>[V(N(f),{value:N(t).sessions.auto_prune,"onUpdate:value":r[5]||=e=>s({auto_prune:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(i)(`settings.session.vacuumAfterPrune`),hint:N(i)(`settings.session.vacuumAfterPruneHint`)},{default:J(()=>[V(N(f),{value:N(t).sessions.vacuum_after_prune,"onUpdate:value":r[6]||=e=>s({vacuum_after_prune:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])])]))}}),[[`__scopeId`,`data-v-eb1104c9`]]),pt={class:`settings-section`},mt={class:`config-block`},ht={class:`section-header`},gt={class:`section-title`},_t={key:0,class:`empty-hint`},vt={class:`config-block`},yt={class:`section-header`},bt={class:`section-title`},xt={key:0,class:`configured-badge`},St={class:`auxiliary-list`},Ct=[`onClick`],wt={class:`auxiliary-icon`},Tt={class:`auxiliary-label`},Et={class:`auxiliary-model-preview`},Dt={key:0,class:`auxiliary-card-body`},Ot={class:`config-block`},kt={class:`section-title`},At=H(q({__name:`ModelSettings`,setup(e){let{t}=k(),n=s(),r=U(),i=fe(),a=D(),d=M(!1),f=[{key:`compression`,icon:`📦`},{key:`flush_memories`,icon:`🧹`},{key:`mcp`,icon:`🔌`},{key:`session_search`,icon:`🔍`},{key:`skills_hub`,icon:`📚`},{key:`title_generation`,icon:`✏️`},{key:`vision`,icon:`👁️`},{key:`web_extract`,icon:`🌐`},{key:`approval`,icon:`✅`}],p=M(new Set);function h(e){p.value.has(e)?p.value.delete(e):p.value.add(e)}function g(e){return r.auxiliary[e]||{}}let _=G(()=>i.modelGroups.map(e=>({label:e.label,value:e.provider})));function v(e){let t=i.modelGroups.find(t=>t.provider===e);return t?t.models:[]}async function y(e,n){let i=v(n)[0]||``;try{await r.saveSection(`auxiliary`,{[e]:{provider:n,model:i,base_url:``,api_key:``}}),a.success(t(`settings.saved`))}catch{a.error(t(`settings.saveFailed`))}}async function b(e,n){let i=g(e);try{await r.saveSection(`auxiliary`,{[e]:{provider:i.provider||``,model:n}}),a.success(t(`settings.saved`))}catch{a.error(t(`settings.saveFailed`))}}async function S(e,n,i){try{await r.saveSection(`auxiliary`,{[e]:{[n]:i}}),a.success(t(`settings.saved`))}catch{a.error(t(`settings.saveFailed`))}}let w=G(()=>_.value),T=G(()=>{let e=r.fallbackModel?.provider;return e?v(e).map(e=>({label:e,value:e})):[]});async function ee(e){let n=v(e)[0]||``;try{await r.saveSection(`fallback_model`,{provider:e,model:n}),a.success(t(`settings.saved`))}catch{a.error(t(`settings.saveFailed`))}}async function te(e){try{await r.saveSection(`fallback_model`,{model:e}),a.success(t(`settings.saved`))}catch{a.error(t(`settings.saveFailed`))}}let j=G(()=>f.filter(e=>r.auxiliary[e.key]?.model).length);ge(async()=>{try{await l()}catch{}n.providers.length===0&&n.fetchProviders(),i.modelGroups.length===0&&i.loadModels()});function ne(){d.value=!0}function re(){d.value=!1}async function ie(){await n.fetchProviders(),i.loadModels(),re()}return(e,i)=>(B(),L(P,null,[E(`section`,pt,[E(`div`,mt,[E(`div`,ht,[E(`h4`,gt,O(N(t)(`settings.models.providerManagement`)),1),V(N(A),{type:`primary`,size:`small`,onClick:ne},{icon:J(()=>[...i[4]||=[E(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[E(`line`,{x1:`12`,y1:`5`,x2:`12`,y2:`19`}),E(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`})],-1)]]),default:J(()=>[m(` `+O(N(t)(`models.addProvider`)),1)]),_:1})]),V(N(R),{show:N(n).loading&&N(n).providers.length===0},{default:J(()=>[N(n).providers.length===0?(B(),L(`div`,_t,[V(N(oe),{description:N(t)(`settings.models.noProviders`)},null,8,[`description`])])):F(``,!0),V(u)]),_:1},8,[`show`])]),E(`div`,vt,[E(`div`,yt,[E(`h4`,bt,[m(O(N(t)(`settings.auxiliary.title`))+` `,1),j.value>0?(B(),L(`span`,xt,O(j.value)+`/`+O(f.length),1)):F(``,!0)])]),E(`div`,St,[(B(),L(P,null,ye(f,e=>E(`div`,{key:e.key,class:x([`auxiliary-card`,{expanded:p.value.has(e.key)}])},[E(`div`,{class:`auxiliary-card-header`,onClick:t=>h(e.key)},[E(`span`,wt,O(e.icon),1),E(`span`,Tt,O(N(t)(`settings.auxiliary.${e.key}`)),1),E(`span`,Et,O(g(e.key).model||`—`),1),(B(),L(`svg`,{class:x([`chevron`,{rotated:p.value.has(e.key)}]),width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[...i[5]||=[E(`polyline`,{points:`9 18 15 12 9 6`},null,-1)]],2))],8,Ct),p.value.has(e.key)?(B(),L(`div`,Dt,[V(Q,{label:N(t)(`settings.auxiliary.provider`)},{default:J(()=>[V(N(C),{value:g(e.key).provider||void 0,options:_.value,size:`small`,filterable:!0,"show-tooltip":!0,clearable:``,placeholder:N(t)(`settings.auxiliary.selectProvider`),style:{"max-width":`200px`},"onUpdate:value":t=>t&&y(e.key,t),onClear:()=>S(e.key,`provider`,``)},null,8,[`value`,`options`,`placeholder`,`onUpdate:value`,`onClear`])]),_:2},1032,[`label`]),V(Q,{label:N(t)(`settings.auxiliary.model`)},{default:J(()=>[V(N(C),{value:g(e.key).model||void 0,options:v(g(e.key).provider||``).map(e=>({label:e,value:e})),size:`small`,filterable:!0,"show-tooltip":!0,clearable:``,disabled:!g(e.key).provider,placeholder:g(e.key).provider?N(t)(`settings.auxiliary.selectModel`):N(t)(`settings.auxiliary.selectProviderFirst`),style:{"max-width":`200px`},"onUpdate:value":t=>t&&b(e.key,t),onClear:()=>S(e.key,`model`,``)},null,8,[`value`,`options`,`disabled`,`placeholder`,`onUpdate:value`,`onClear`])]),_:2},1032,[`label`]),V(Q,{label:N(t)(`settings.auxiliary.timeout`),hint:N(t)(`settings.auxiliary.timeoutHint`)},{default:J(()=>[V(N(o),{value:g(e.key).timeout,min:5,max:300,step:5,size:`small`,class:`input-sm`,"onUpdate:value":t=>t!=null&&S(e.key,`timeout`,t)},null,8,[`value`,`onUpdate:value`])]),_:2},1032,[`label`,`hint`]),e.key===`session_search`?(B(),I(Q,{key:0,label:N(t)(`settings.auxiliary.maxConcurrency`),hint:N(t)(`settings.auxiliary.maxConcurrencyHint`)},{default:J(()=>[V(N(o),{value:g(e.key).max_concurrency,min:1,max:10,step:1,size:`small`,class:`input-sm`,"onUpdate:value":t=>t!=null&&S(e.key,`max_concurrency`,t)},null,8,[`value`,`onUpdate:value`])]),_:2},1032,[`label`,`hint`])):F(``,!0),e.key===`vision`?(B(),I(Q,{key:1,label:N(t)(`settings.auxiliary.downloadTimeout`),hint:N(t)(`settings.auxiliary.downloadTimeoutHint`)},{default:J(()=>[V(N(o),{value:g(e.key).download_timeout,min:5,max:120,step:5,size:`small`,class:`input-sm`,"onUpdate:value":t=>t!=null&&S(e.key,`download_timeout`,t)},null,8,[`value`,`onUpdate:value`])]),_:2},1032,[`label`,`hint`])):F(``,!0),e.key===`approval`?(B(),I(Q,{key:2,label:N(t)(`settings.auxiliary.apiMode`),hint:N(t)(`settings.auxiliary.apiModeHint`)},{default:J(()=>[V(N(C),{value:g(e.key).api_mode||`chat_completions`,options:[{label:N(t)(`settings.auxiliary.chatCompletions`),value:`chat_completions`},{label:N(t)(`settings.auxiliary.responses`),value:`responses`}],size:`small`,class:`input-sm`,"show-tooltip":!0,"onUpdate:value":t=>S(e.key,`api_mode`,t)},null,8,[`value`,`options`,`onUpdate:value`])]),_:2},1032,[`label`,`hint`])):F(``,!0)])):F(``,!0)],2)),64))])]),E(`div`,Ot,[E(`h4`,kt,O(N(t)(`settings.fallback.title`)),1),V(Q,{label:N(t)(`settings.fallback.provider`)},{default:J(()=>[V(N(C),{value:N(r).fallbackModel?.provider||void 0,options:w.value,size:`small`,filterable:!0,"show-tooltip":!0,clearable:``,placeholder:N(t)(`settings.auxiliary.selectProvider`),style:{"max-width":`200px`},"onUpdate:value":i[0]||=e=>e&&ee(e),onClear:i[1]||=async()=>{try{await N(r).saveSection(`fallback_model`,{provider:``,model:``}),N(a).success(N(t)(`settings.saved`))}catch{N(a).error(N(t)(`settings.saveFailed`))}}},null,8,[`value`,`options`,`placeholder`])]),_:1},8,[`label`]),V(Q,{label:N(t)(`settings.fallback.model`)},{default:J(()=>[V(N(C),{value:N(r).fallbackModel?.model||void 0,options:T.value,size:`small`,filterable:!0,"show-tooltip":!0,clearable:``,disabled:!N(r).fallbackModel?.provider,placeholder:N(r).fallbackModel?.provider?N(t)(`settings.auxiliary.selectModel`):N(t)(`settings.auxiliary.selectProviderFirst`),style:{"max-width":`200px`},"onUpdate:value":i[2]||=e=>e&&te(e),onClear:i[3]||=async()=>{try{await N(r).saveSection(`fallback_model`,{model:``}),N(a).success(N(t)(`settings.saved`))}catch{N(a).error(N(t)(`settings.saveFailed`))}}},null,8,[`value`,`options`,`disabled`,`placeholder`])]),_:1},8,[`label`])])]),d.value?(B(),I(c,{key:0,onClose:re,onSaved:ie})):F(``,!0)],64))}}),[[`__scopeId`,`data-v-d15bd42f`]]),jt={class:`settings-section`},Mt={class:`config-block`},Nt={class:`config-block-title`},Pt={class:`config-block`},Ft={class:`config-block-title`},It=H(q({__name:`MemorySettings`,setup(e){let t=U(),n=D(),{t:r}=k();async function i(e){try{await t.saveSection(`memory`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(B(),L(`section`,jt,[E(`div`,Mt,[E(`div`,Nt,O(N(r)(`settings.memory.basic`,`基础`)),1),V(Q,{label:N(r)(`settings.memory.enabled`),hint:N(r)(`settings.memory.enabledHint`)},{default:J(()=>[V(N(f),{value:N(t).memory.memory_enabled,"onUpdate:value":n[0]||=e=>i({memory_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.memory.userProfile`),hint:N(r)(`settings.memory.userProfileHint`)},{default:J(()=>[V(N(f),{value:N(t).memory.user_profile_enabled,"onUpdate:value":n[1]||=e=>i({user_profile_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.memory.charLimit`),hint:N(r)(`settings.memory.charLimitHint`)},{default:J(()=>[V(N(o),{value:N(t).memory.memory_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({memory_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.memory.userCharLimit`),hint:N(r)(`settings.memory.userCharLimitHint`)},{default:J(()=>[V(N(o),{value:N(t).memory.user_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>e!=null&&i({user_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]),E(`div`,Pt,[E(`div`,Ft,O(N(r)(`settings.memory.advanced`,`高级`)),1),V(Q,{label:N(r)(`settings.memory.nudgeInterval`),hint:N(r)(`settings.memory.nudgeIntervalHint`)},{default:J(()=>[V(N(o),{value:N(t).memory.nudge_interval,min:1,max:50,step:1,size:`small`,class:`input-sm`,"onUpdate:value":n[4]||=e=>e!=null&&i({nudge_interval:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.memory.retrievalThreshold`),hint:N(r)(`settings.memory.retrievalThresholdHint`)},{default:J(()=>[V(N(o),{value:N(t).memory.retrieval_threshold,min:0,max:1,step:.05,size:`small`,class:`input-sm`,"onUpdate:value":n[5]||=e=>e!=null&&i({retrieval_threshold:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.memory.maxMemoryEntries`),hint:N(r)(`settings.memory.maxMemoryEntriesHint`)},{default:J(()=>[V(N(o),{value:N(t).memory.max_memory_entries,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[6]||=e=>e!=null&&i({max_memory_entries:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.memory.flushMinTurns`),hint:N(r)(`settings.memory.flushMinTurnsHint`)},{default:J(()=>[V(N(o),{value:N(t).memory.flush_min_turns,min:1,max:50,step:1,size:`small`,class:`input-sm`,"onUpdate:value":n[7]||=e=>e!=null&&i({flush_min_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])])]))}}),[[`__scopeId`,`data-v-e0643033`]]),Lt={class:`settings-section`},Rt={class:`config-block`},zt={class:`config-block-title`},Bt={class:`config-block`},Vt={class:`config-block-title`},Ht={class:`config-block`},Ut={class:`config-block-title`},Wt=H(q({__name:`SafetyApprovalSettings`,setup(e){let t=U(),n=D(),{t:r}=k();async function i(e){try{await t.saveSection(`approvals`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}async function a(e){try{await t.saveSection(`human_delay`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}async function s(e){try{await t.saveSection(`security`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(B(),L(`section`,Lt,[E(`div`,Rt,[E(`h4`,zt,O(N(r)(`settings.approvals.approvalMode`)),1),V(Q,{label:N(r)(`settings.approvals.mode`),hint:N(r)(`settings.approvals.modeHint`)},{default:J(()=>[V(N(C),{value:N(t).approvals.mode||`manual`,options:[{label:N(r)(`settings.approvals.manual`),value:`manual`},{label:N(r)(`settings.approvals.autoOff`),value:`auto-off`}],size:`small`,class:`input-sm`,"onUpdate:value":n[0]||=e=>i({mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.approvals.cronMode`),hint:N(r)(`settings.approvals.cronModeHint`)},{default:J(()=>[V(N(C),{value:N(t).approvals.cron_mode||`deny`,options:[{label:N(r)(`settings.approvals.deny`),value:`deny`},{label:N(r)(`settings.approvals.allow`),value:`allow`},{label:N(r)(`settings.approvals.manual`),value:`manual`}],size:`small`,class:`input-sm`,"onUpdate:value":n[1]||=e=>i({cron_mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.approvals.timeout`),hint:N(r)(`settings.approvals.timeoutHint`)},{default:J(()=>[V(N(o),{value:N(t).approvals.timeout,min:10,max:600,step:10,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]),E(`div`,Bt,[E(`h4`,Vt,O(N(r)(`settings.humanDelay.humanDelay`)),1),V(Q,{label:N(r)(`settings.humanDelay.mode`),hint:N(r)(`settings.humanDelay.modeHint`)},{default:J(()=>[V(N(C),{value:N(t).humanDelay.mode||`off`,options:[{label:N(r)(`settings.humanDelay.off`),value:`off`},{label:N(r)(`settings.humanDelay.random`),value:`random`}],size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>a({mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.humanDelay.minMs`),hint:N(r)(`settings.humanDelay.minMsHint`)},{default:J(()=>[V(N(o),{value:N(t).humanDelay.min_ms,min:100,max:5e3,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[4]||=e=>e!=null&&a({min_ms:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.humanDelay.maxMs`),hint:N(r)(`settings.humanDelay.maxMsHint`)},{default:J(()=>[V(N(o),{value:N(t).humanDelay.max_ms,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[5]||=e=>e!=null&&a({max_ms:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]),E(`div`,Ht,[E(`h4`,Ut,O(N(r)(`settings.security.securityBlock`)),1),V(Q,{label:N(r)(`settings.security.redactSecrets`),hint:N(r)(`settings.security.redactSecretsHint`)},{default:J(()=>[V(N(f),{value:N(t).security.redact_secrets,"onUpdate:value":n[6]||=e=>s({redact_secrets:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),V(Q,{label:N(r)(`settings.security.allowPrivateUrls`),hint:N(r)(`settings.security.allowPrivateUrlsHint`)},{default:J(()=>[V(N(f),{value:N(t).security.allow_private_urls,"onUpdate:value":n[7]||=e=>s({allow_private_urls:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])])]))}}),[[`__scopeId`,`data-v-90756d57`]]),Gt={class:`workspace-settings`},Kt={key:0,class:`workspace-list`},qt={class:`workspace-info`},Jt={class:`workspace-name`},Yt=[`title`],Xt={key:1,class:`workspace-form`},Zt={class:`form-row`},Qt={class:`form-row`},$t=H(q({__name:`WorkspaceSettings`,setup(e){let{t}=k(),n=D(),r=M([]),i=M(!1),a=M(!1),o=M(``),s=M(``),c=M(null);async function l(){i.value=!0;try{r.value=await ke()}finally{i.value=!1}}ge(l);function u(){o.value=``,s.value=``,a.value=!1,c.value=null}async function f(){let e=o.value.trim(),i=s.value.trim();if(!(!e||!i))try{if(c.value){let a=await Oe(c.value,{name:e,path:i}),o=r.value.findIndex(e=>e.id===c.value);o>=0&&(r.value[o]=a),n.success(t(`common.saved`))}else{let a=await Ae(e,i);r.value.push(a),n.success(t(`common.saved`))}u()}catch(e){let r=e?.message||``;r.includes(`409`)||r.includes(`already exists`)?n.error(t(`settings.workspace.nameExists`)):r.includes(`400`)||r.includes(`does not exist`)?n.error(t(`settings.workspace.pathNotExists`)):n.error(t(`common.saveFailed`))}}function h(e){c.value=e.id,o.value=e.name,s.value=e.path,a.value=!0}async function g(e){await je(e)?(r.value=r.value.filter(t=>t.id!==e),n.success(t(`common.saved`))):n.error(t(`common.deleteFailed`))}return(e,n)=>(B(),L(`section`,Gt,[a.value?(B(),L(`div`,Xt,[E(`div`,Zt,[E(`label`,null,O(N(t)(`settings.workspace.name`)),1),V(N(T),{value:o.value,"onUpdate:value":n[1]||=e=>o.value=e,size:`small`,placeholder:N(t)(`settings.workspace.namePlaceholder`),onKeydown:ae(f,[`enter`])},null,8,[`value`,`placeholder`])]),E(`div`,Qt,[E(`label`,null,O(N(t)(`settings.workspace.path`)),1),V(N(T),{value:s.value,"onUpdate:value":n[2]||=e=>s.value=e,size:`small`,placeholder:N(t)(`settings.workspace.pathPlaceholder`),onKeydown:ae(f,[`enter`])},null,8,[`value`,`placeholder`])]),V(N(d),{size:`small`},{default:J(()=>[V(N(A),{size:`small`,type:`primary`,disabled:!o.value.trim()||!s.value.trim(),onClick:f},{default:J(()=>[m(O(c.value?N(t)(`common.update`):N(t)(`common.create`)),1)]),_:1},8,[`disabled`]),V(N(A),{size:`small`,onClick:u},{default:J(()=>[m(O(N(t)(`common.cancel`)),1)]),_:1})]),_:1})])):(B(),L(`div`,Kt,[r.value.length===0&&!i.value?(B(),I(N(oe),{key:0,description:N(t)(`settings.workspace.empty`)},null,8,[`description`])):F(``,!0),(B(!0),L(P,null,ye(r.value,e=>(B(),L(`div`,{key:e.id,class:`workspace-item`},[E(`div`,qt,[E(`span`,Jt,O(e.name),1),E(`span`,{class:`workspace-path`,title:e.path},O(e.path),9,Yt)]),V(N(d),{size:`small`},{default:J(()=>[V(N(A),{size:`tiny`,quaternary:``,onClick:t=>h(e)},{default:J(()=>[m(O(N(t)(`common.edit`)),1)]),_:1},8,[`onClick`]),V(N(p),{"positive-text":N(t)(`common.confirm`),"negative-text":N(t)(`common.cancel`),onPositiveClick:t=>g(e.id)},{trigger:J(()=>[V(N(A),{size:`tiny`,quaternary:``,type:`error`},{default:J(()=>[m(O(N(t)(`common.delete`)),1)]),_:1})]),default:J(()=>[m(` `+O(N(t)(`settings.workspace.deleteConfirm`)),1)]),_:1},8,[`positive-text`,`negative-text`,`onPositiveClick`])]),_:2},1024)]))),128)),V(N(A),{class:`add-btn`,dashed:``,type:`primary`,size:`small`,onClick:n[0]||=e=>{a.value=!0,c.value=null}},{default:J(()=>[m(` + `+O(N(t)(`settings.workspace.add`)),1)]),_:1})]))]))}}),[[`__scopeId`,`data-v-b65db1e5`]]),en={class:`settings-view`},tn={class:`page-header`},nn={class:`header-title`},rn={class:`settings-content`},an=H(q({__name:`SettingsView`,setup(e){let t=U(),{t:n}=k();return ge(()=>{t.fetchSettings()}),(e,r)=>(B(),L(`div`,en,[E(`header`,tn,[E(`h2`,nn,O(N(n)(`settings.title`)),1)]),E(`div`,rn,[V(N(R),{show:N(t).loading||N(t).saving,size:`large`,description:N(n)(`common.loading`)},{default:J(()=>[V(N(Ke),{type:`line`,animated:``},{default:J(()=>[V(N($),{name:`display`,tab:N(n)(`settings.tabs.display`)},{default:J(()=>[V(Qe)]),_:1},8,[`tab`]),V(N($),{name:`agent`,tab:N(n)(`settings.tabs.agent`)},{default:J(()=>[V(it)]),_:1},8,[`tab`]),V(N($),{name:`session`,tab:N(n)(`settings.tabs.session`)},{default:J(()=>[V(ft)]),_:1},8,[`tab`]),V(N($),{name:`model`,tab:N(n)(`settings.tabs.model`)},{default:J(()=>[V(At)]),_:1},8,[`tab`]),V(N($),{name:`memory`,tab:N(n)(`settings.tabs.memory`)},{default:J(()=>[V(It)]),_:1},8,[`tab`]),V(N($),{name:`safety`,tab:N(n)(`settings.tabs.safety`)},{default:J(()=>[V(Wt)]),_:1},8,[`tab`]),V(N($),{name:`workspace`,tab:N(n)(`settings.tabs.workspace`)},{default:J(()=>[V($t)]),_:1},8,[`tab`])]),_:1})]),_:1},8,[`show`,`description`])])]))}}),[[`__scopeId`,`data-v-b55ee083`]]);export{an as default};