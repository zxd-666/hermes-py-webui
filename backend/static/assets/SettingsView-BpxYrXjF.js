import{i as e,n as t}from"./warn-MV9BENh8.js";import{S as n}from"./_baseFor-tDInUmcl.js";import{n as r,t as i}from"./now-COM17VZc.js";import{t as a}from"./Add-P17FtES2.js";import{t as o}from"./InputNumber-57_YGorq.js";import{t as s}from"./Space-DbIEb07m.js";import{t as c}from"./Switch-C7S0-F6t.js";import{t as l}from"./Popconfirm-C9T3OM6j.js";import{$r as u,An as d,Bn as f,Br as p,Cn as m,Cr as h,Di as g,Dr as _,En as v,F as y,Fn as b,Gr as x,H as S,Jr as C,Kr as w,Lr as T,O as E,Qn as ee,Qr as D,R as O,Rn as k,Si as A,Sr as j,Tn as M,Ur as N,Xr as P,Yr as te,Z as ne,_ as re,_i as F,ai as ie,br as I,ci as ae,di as oe,ei as L,er as se,f as R,fi as ce,fr as le,gi as ue,gt as z,hi as de,i as B,ii as V,kn as fe,mr as H,ni as U,qr as W,ri as pe,st as G,tr as me,ui as K,vi as he,vn as ge,vr as q,vt as _e,wi as J,x as ve,xi as Y,xr as X,yn as ye,yr as Z,zn as be,zr as xe}from"./index-C-8-6diw.js";import{t as Q}from"./SettingRow-0uvGTNza.js";import{i as Se,n as Ce,r as we,t as Te}from"./workspaces-BULvGub0.js";var Ee=k(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[k(`&::-webkit-scrollbar`,{width:0,height:0})]),De=L({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=Y(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=f();return Ee.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:be,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return U(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Oe=`Expected a function`,ke=Math.max,Ae=Math.min;function je(e,t,a){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof e!=`function`)throw TypeError(Oe);t=r(t)||0,n(a)&&(p=!!a.leading,m=`maxWait`in a,c=m?ke(r(a.maxWait)||0,t):c,h=`trailing`in a?!!a.trailing:h);function g(t){var n=o,r=s;return o=s=void 0,f=t,l=e.apply(r,n),l}function _(e){return f=e,u=setTimeout(b,t),p?g(e):l}function v(e){var n=e-d,r=e-f,i=t-n;return m?Ae(i,c-r):i}function y(e){var n=e-d,r=e-f;return d===void 0||n>=t||n<0||m&&r>=c}function b(){var e=i();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function C(){return u===void 0?l:x(i())}function w(){var e=i(),n=y(e);if(o=arguments,s=this,d=e,n){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,t),g(d)}return u===void 0&&(u=setTimeout(b,t)),l}return w.cancel=S,w.flush=C,w}var Me=`Expected a function`;function Ne(e,t,r){var i=!0,a=!0;if(typeof e!=`function`)throw TypeError(Me);return n(r)&&(i=`leading`in r?!!r.leading:i,a=`trailing`in r?!!r.trailing:a),je(e,t,{leading:i,maxWait:t,trailing:a})}var Pe=e(`n-tabs`),Fe={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},$=L({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:Fe,slots:Object,setup(e){let n=pe(Pe,null);return n||t(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return U(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Ie=L({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},v(Fe,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=pe(Pe);return{trigger:d,mergedClosable:w(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:o,value:s,mergedClosable:c,trigger:l,$slots:{default:u}}=this,d=i??o;return U(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?U(`div`,{class:`${t}-tabs-tab-pad`}):null,U(`div`,Object.assign({key:n,"data-name":n,"data-disabled":r?!0:void 0},V({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),U(`span`,{class:`${t}-tabs-tab__label`},e?U(N,null,U(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),U(z,{clsPrefix:t},{default:()=>U(a,null)})):u?u():typeof d==`object`?d:M(d??n)),c&&this.type===`card`?U(G,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),Le=Z(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[X(`segment-type`,[Z(`tabs-rail`,[q(`&.transition-disabled`,[Z(`tabs-capsule`,`
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
 `),q(`&:hover`,`
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
 `,[I(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),I(`prefix`,`padding-right: 16px;`),I(`suffix`,`padding-left: 16px;`)]),X(`top, bottom`,[q(`>`,[Z(`tabs-nav`,[Z(`tabs-nav-scroll-wrapper`,[q(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),q(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),X(`shadow-start`,[q(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),X(`shadow-end`,[q(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),X(`left, right`,[Z(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),q(`>`,[Z(`tabs-nav`,[Z(`tabs-nav-scroll-wrapper`,[q(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),q(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),X(`shadow-start`,[q(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),X(`shadow-end`,[q(`&::after`,`
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
 `,[q(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),q(`&::before, &::after`,`
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
 `,[X(`disabled`,{cursor:`not-allowed`}),I(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),I(`label`,`
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
 `,[q(`&.transition-disabled`,`
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
 `,[q(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),q(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),q(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),q(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),q(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
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
 `,[q(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),X(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),X(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),Z(`tabs-nav`,[X(`line-type`,[X(`top`,[I(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-bar`,`
 bottom: -1px;
 `)]),X(`left`,[I(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-bar`,`
 right: -1px;
 `)]),X(`right`,[I(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-bar`,`
 left: -1px;
 `)]),X(`bottom`,[I(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-bar`,`
 top: -1px;
 `)]),I(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),Z(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),Z(`tabs-bar`,`
 border-radius: 0;
 `)]),X(`card-type`,[I(`prefix, suffix`,`
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
 `,[I(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),j(`disabled`,[q(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),X(`closable`,`padding-right: 8px;`),X(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),X(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),X(`left, right`,`
 flex-direction: column; 
 `,[I(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),Z(`tabs-wrapper`,`
 flex-direction: column;
 `),Z(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[Z(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),X(`top`,[X(`card-type`,[Z(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),I(`prefix, suffix`,`
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
 `)])]),X(`left`,[X(`card-type`,[Z(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),I(`prefix, suffix`,`
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
 `)])]),X(`right`,[X(`card-type`,[Z(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),I(`prefix, suffix`,`
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
 `)])]),X(`bottom`,[X(`card-type`,[Z(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),I(`prefix, suffix`,`
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
 `)])])])]),Re=Ne,ze=L({name:`Tabs`,props:Object.assign(Object.assign({},_e.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=ye(e),a=_e(`Tabs`,`-tabs`,Le,ve,e,n),o=Y(null),s=Y(null),c=Y(null),l=Y(null),u=Y(null),f=Y(null),p=Y(!0),m=Y(!0),g=ee(e,[`labelSize`,`size`]),_=w(()=>g.value?g.value:i?.value?.Tabs?.size||`medium`),v=ee(e,[`activeName`,`value`]),y=Y(v.value??e.defaultValue??(t.default?fe(t.default())[0]?.props?.name:null)),b=se(v,y),x={id:0},S=w(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});de(b,()=>{x.id=0,O(),k()});function C(){let{value:e}=b;return e===null?null:o.value?.querySelector(`[data-name="${e}"]`)}function T(t){if(e.type===`card`)return;let{value:r}=s;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(D([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(D([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function E(){if(e.type===`card`)return;let{value:t}=s;t&&(t.style.opacity=`0`)}function D(e){let{value:t}=s;if(t)for(let n of e)t.style[n]=``}function O(){if(e.type===`card`)return;let t=C();t?T(t):E()}function k(){let e=u.value?.$el;if(!e)return;let t=C();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let j=Y(null),M=0,N=null;function P(e){let t=j.value;if(t){M=e.getBoundingClientRect().height;let n=`${M}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};N?(r(),N(),N=null):N=r}}function te(e){let t=j.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(M,n)}px`};N?(N(),N=null,r()):N=r}}function ne(){let t=j.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let re={value:[]},F=Y(`next`);function I(e){let t=b.value,n=`next`;for(let r of re.value){if(r===t)break;if(r===e){n=`prev`;break}}F.value=n,L(e)}function L(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&d(n,t),r&&d(r,t),i&&d(i,t),y.value=t}function R(t){let{onClose:n}=e;n&&d(n,t)}let ce=!0;function z(){let{value:e}=s;if(!e)return;ce||=!1;let t=`transition-disabled`;e.classList.add(t),O(),e.classList.remove(t)}let B=Y(null);function V({transitionDisabled:e}){let t=o.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=C();n&&B.value&&(B.value.style.width=`${n.offsetWidth}px`,B.value.style.height=`${n.offsetHeight}px`,B.value.style.transform=`translateX(${n.offsetLeft-le(getComputedStyle(t).paddingLeft)}px)`,e&&B.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}de([b],()=>{e.type===`segment`&&ie(()=>{V({transitionDisabled:!1})})}),ae(()=>{e.type===`segment`&&V({transitionDisabled:!0})});let U=0;function W(t){if(t.contentRect.width===0&&t.contentRect.height===0||U===t.contentRect.width)return;U=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(ce||e.justifyContent?.startsWith(`space`))&&z(),n!==`segment`){let{placement:t}=e;J((t===`top`||t===`bottom`?u.value?.$el:f.value)||null)}}let pe=Re(W,64);de([()=>e.justifyContent,()=>e.size],()=>{ie(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&z()})});let G=Y(!1);function K(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!G.value)s===`top`||s===`bottom`?a<r&&(G.value=!0):o<i&&(G.value=!0);else{let{value:e}=l;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(G.value=!1):o-i>e.$el.offsetHeight&&(G.value=!1)}J(u.value?.$el||null)}let he=Re(K,64);function q(){let{onAdd:t}=e;t&&t(),ie(()=>{let e=C(),{value:t}=u;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function J(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;p.value=e<=0,m.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;p.value=e<=0,m.value=e+r>=n}}let X=Re(e=>{J(e.target)},64);oe(Pe,{triggerRef:A(e,`trigger`),tabStyleRef:A(e,`tabStyle`),tabClassRef:A(e,`tabClass`),addTabStyleRef:A(e,`addTabStyle`),addTabClassRef:A(e,`addTabClass`),paneClassRef:A(e,`paneClass`),paneStyleRef:A(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:A(e,`type`),closableRef:A(e,`closable`),valueRef:b,tabChangeIdRef:x,onBeforeLeaveRef:A(e,`onBeforeLeave`),activateTab:I,handleClose:R,handleAdd:q}),me(()=>{O(),k()}),ue(()=>{let{value:e}=c;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;p.value?e.classList.remove(r):e.classList.add(r),m.value?e.classList.remove(i):e.classList.add(i)});let Z={syncBarPosition:()=>{O()}},be=()=>{V({transitionDisabled:!0})},xe=w(()=>{let{value:t}=_,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:o,closeIconColorHover:s,closeIconColorPressed:c,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:g,fontWeightStrong:v,tabColorSegment:y,closeSize:b,closeIconSize:x,closeColorHover:S,closeColorPressed:C,closeBorderRadius:w,[h(`panePadding`,t)]:T,[h(`tabPadding`,r)]:E,[h(`tabPaddingVertical`,r)]:ee,[h(`tabGap`,r)]:D,[h(`tabGap`,`${r}Vertical`)]:O,[h(`tabTextColor`,n)]:k,[h(`tabTextColorActive`,n)]:A,[h(`tabTextColorHover`,n)]:j,[h(`tabTextColorDisabled`,n)]:M,[h(`tabFontSize`,t)]:N},common:{cubicBezierEaseInOut:P}}=a.value;return{"--n-bezier":P,"--n-color-segment":g,"--n-bar-color":i,"--n-tab-font-size":N,"--n-tab-text-color":k,"--n-tab-text-color-active":A,"--n-tab-text-color-disabled":M,"--n-tab-text-color-hover":j,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":b,"--n-close-icon-size":x,"--n-close-color-hover":S,"--n-close-color-pressed":C,"--n-close-border-radius":w,"--n-close-icon-color":o,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":c,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":E,"--n-tab-padding-vertical":ee,"--n-tab-gap":D,"--n-tab-gap-vertical":O,"--n-pane-padding-left":H(T,`left`),"--n-pane-padding-right":H(T,`right`),"--n-pane-padding-top":H(T,`top`),"--n-pane-padding-bottom":H(T,`bottom`),"--n-font-weight-strong":v,"--n-tab-color-segment":y}}),Q=r?ge(`tabs`,w(()=>`${_.value[0]}${e.type[0]}`),xe,e):void 0;return Object.assign({mergedClsPrefix:n,mergedValue:b,renderedNames:new Set,segmentCapsuleElRef:B,tabsPaneWrapperRef:j,tabsElRef:o,barElRef:s,addTabInstRef:l,xScrollInstRef:u,scrollWrapperElRef:c,addTabFixed:G,tabWrapperStyle:S,handleNavResize:pe,mergedSize:_,handleScroll:X,handleTabsResize:he,cssVars:r?void 0:xe,themeClass:Q?.themeClass,animationDirection:F,renderNameListRef:re,yScrollElRef:f,handleSegmentResize:be,onAnimationBeforeLeave:P,onAnimationEnter:te,onAnimationAfterEnter:ne,onRender:Q?.onRender},Z)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,$slots:{default:u,prefix:d,suffix:f}}=this;s?.();let p=u?fe(u()).filter(e=>e.type.__TAB_PANE__===!0):[],h=u?fe(u()).filter(e=>e.type.__TAB__===!0):[],g=!h.length,_=t===`card`,v=t===`segment`,y=!_&&!v&&this.justifyContent;o.value=[];let x=()=>{let t=U(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},y?null:U(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),g?p.map((e,t)=>(o.value.push(e.props.name),Ue(U(Ie,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!y||y===`center`||y===`start`||y===`end`)}),e.children?{default:e.children.tab}:void 0)))):h.map((e,t)=>(o.value.push(e.props.name),Ue(t!==0&&!y?He(e):e))),!r&&i&&_?Ve(i,(g?p.length:h.length)!==0):null,y?null:U(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return U(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},_&&i?U(b,{onResize:this.handleTabsResize},{default:()=>t}):t,_?U(`div`,{class:`${e}-tabs-pad`}):null,_?null:U(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},S=v?`top`:n;return U(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,y&&`${e}-tabs--flex`,`${e}-tabs--${S}`],style:this.cssVars},U(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${S}`,`${e}-tabs-nav`]},m(d,t=>t&&U(`div`,{class:`${e}-tabs-nav__prefix`},t)),v?U(b,{onResize:this.handleSegmentResize},{default:()=>U(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},U(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},U(`div`,{class:`${e}-tabs-wrapper`},U(`div`,{class:`${e}-tabs-tab`}))),g?p.map((e,t)=>(o.value.push(e.props.name),U(Ie,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):h.map((e,t)=>(o.value.push(e.props.name),t===0?e:He(e))))}):U(b,{onResize:this.handleNavResize},{default:()=>U(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(S)?U(De,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:x}):U(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},x()))}),r&&i&&_?Ve(i,!0):null,m(f,t=>t&&U(`div`,{class:`${e}-tabs-nav__suffix`},t))),g&&(this.animated&&(S===`top`||S===`bottom`)?U(`div`,{ref:`tabsPaneWrapperRef`,style:l,class:[`${e}-tabs-pane-wrapper`,c]},Be(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Be(p,this.mergedValue,this.renderedNames)))}});function Be(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?he(e,[[xe,c]]):e)}}),o?U(T,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function Ve(e,t){return U(Ie,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function He(e){let t=x(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Ue(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var We={class:`settings-section`},Ge=R(L({__name:`DisplaySettings`,setup(e){let t=B(),n=E(),{t:r}=_();async function i(e){try{await t.saveSection(`display`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(K(),P(`section`,We,[u(Q,{label:J(r)(`settings.display.streaming`),hint:J(r)(`settings.display.streamingHint`)},{default:F(()=>[u(J(c),{value:J(t).display.streaming,"onUpdate:value":n[0]||=e=>i({streaming:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),u(Q,{label:J(r)(`settings.display.compact`),hint:J(r)(`settings.display.compactHint`)},{default:F(()=>[u(J(c),{value:J(t).display.compact,"onUpdate:value":n[1]||=e=>i({compact:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),u(Q,{label:J(r)(`settings.display.showReasoning`),hint:J(r)(`settings.display.showReasoningHint`)},{default:F(()=>[u(J(c),{value:J(t).display.show_reasoning,"onUpdate:value":n[2]||=e=>i({show_reasoning:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),u(Q,{label:J(r)(`settings.display.showCost`),hint:J(r)(`settings.display.showCostHint`)},{default:F(()=>[u(J(c),{value:J(t).display.show_cost,"onUpdate:value":n[3]||=e=>i({show_cost:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),u(Q,{label:J(r)(`settings.display.bellOnComplete`),hint:J(r)(`settings.display.bellOnCompleteHint`)},{default:F(()=>[u(J(c),{value:J(t).display.bell_on_complete,"onUpdate:value":n[4]||=e=>i({bell_on_complete:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),u(Q,{label:J(r)(`settings.display.busyInputMode`),hint:J(r)(`settings.display.busyInputModeHint`)},{default:F(()=>[u(J(c),{value:J(t).display.busy_input_mode===`interrupt`,"onUpdate:value":n[5]||=e=>i({busy_input_mode:e?`interrupt`:`off`})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0d401d9f`]]),Ke={class:`settings-section`},qe=R(L({__name:`AgentSettings`,setup(e){let t=B(),n=E(),{t:r}=_();async function i(e){try{await t.saveSection(`agent`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(K(),P(`section`,Ke,[u(Q,{label:J(r)(`settings.agent.maxTurns`),hint:J(r)(`settings.agent.maxTurnsHint`)},{default:F(()=>[u(J(o),{value:J(t).agent.max_turns,min:1,max:200,step:5,size:`small`,class:`input-sm`,"onUpdate:value":n[0]||=e=>e!=null&&i({max_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),u(Q,{label:J(r)(`settings.agent.gatewayTimeout`),hint:J(r)(`settings.agent.gatewayTimeoutHint`)},{default:F(()=>[u(J(o),{value:J(t).agent.gateway_timeout,min:60,max:7200,step:60,size:`small`,class:`input-sm`,"onUpdate:value":n[1]||=e=>e!=null&&i({gateway_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),u(Q,{label:J(r)(`settings.agent.restartDrainTimeout`),hint:J(r)(`settings.agent.restartDrainTimeoutHint`)},{default:F(()=>[u(J(o),{value:J(t).agent.restart_drain_timeout,min:10,max:300,step:10,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({restart_drain_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),u(Q,{label:J(r)(`settings.agent.toolEnforcement`),hint:J(r)(`settings.agent.toolEnforcementHint`)},{default:F(()=>[u(J(y),{value:J(t).agent.tool_use_enforcement||`auto`,options:[{label:J(r)(`settings.agent.auto`),value:`auto`},{label:J(r)(`settings.agent.always`),value:`always`},{label:J(r)(`settings.agent.never`),value:`never`}],size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>i({tool_use_enforcement:e}),"show-tooltip":!0},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-e6b6033d`]]),Je={class:`settings-section`},Ye=R(L({__name:`MemorySettings`,setup(e){let t=B(),n=E(),{t:r}=_();async function i(e){try{await t.saveSection(`memory`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(K(),P(`section`,Je,[u(Q,{label:J(r)(`settings.memory.enabled`),hint:J(r)(`settings.memory.enabledHint`)},{default:F(()=>[u(J(c),{value:J(t).memory.memory_enabled,"onUpdate:value":n[0]||=e=>i({memory_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),u(Q,{label:J(r)(`settings.memory.userProfile`),hint:J(r)(`settings.memory.userProfileHint`)},{default:F(()=>[u(J(c),{value:J(t).memory.user_profile_enabled,"onUpdate:value":n[1]||=e=>i({user_profile_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),u(Q,{label:J(r)(`settings.memory.charLimit`),hint:J(r)(`settings.memory.charLimitHint`)},{default:F(()=>[u(J(o),{value:J(t).memory.memory_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({memory_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),u(Q,{label:J(r)(`settings.memory.userCharLimit`),hint:J(r)(`settings.memory.userCharLimitHint`)},{default:F(()=>[u(J(o),{value:J(t).memory.user_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>e!=null&&i({user_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0c8e2aa7`]]),Xe={class:`workspace-settings`},Ze={key:0,class:`workspace-list`},Qe={class:`workspace-info`},$e={class:`workspace-name`},et=[`title`],tt={key:1,class:`workspace-form`},nt={class:`form-row`},rt={class:`form-row`},it=R(L({__name:`WorkspaceSettings`,setup(e){let{t}=_(),n=E(),r=Y([]),i=Y(!1),a=Y(!1),o=Y(``),c=Y(``),d=Y(null);async function f(){i.value=!0;try{r.value=await we()}finally{i.value=!1}}ae(f);function m(){o.value=``,c.value=``,a.value=!1,d.value=null}async function h(){let e=o.value.trim(),i=c.value.trim();if(!(!e||!i))try{if(d.value){let a=await Se(d.value,{name:e,path:i}),o=r.value.findIndex(e=>e.id===d.value);o>=0&&(r.value[o]=a),n.success(t(`common.saved`))}else{let a=await Te(e,i);r.value.push(a),n.success(t(`common.saved`))}m()}catch(e){let r=e?.message||``;r.includes(`409`)||r.includes(`already exists`)?n.error(t(`settings.workspace.nameExists`)):r.includes(`400`)||r.includes(`does not exist`)?n.error(t(`settings.workspace.pathNotExists`)):n.error(t(`common.saveFailed`))}}function v(e){d.value=e.id,o.value=e.name,c.value=e.path,a.value=!0}async function y(e){await Ce(e)?(r.value=r.value.filter(t=>t.id!==e),n.success(t(`common.saved`))):n.error(t(`common.deleteFailed`))}return(e,n)=>(K(),P(`section`,Xe,[a.value?(K(),P(`div`,tt,[W(`div`,nt,[W(`label`,null,g(J(t)(`settings.workspace.name`)),1),u(J(S),{value:o.value,"onUpdate:value":n[1]||=e=>o.value=e,size:`small`,placeholder:J(t)(`settings.workspace.namePlaceholder`),onKeydown:p(h,[`enter`])},null,8,[`value`,`placeholder`])]),W(`div`,rt,[W(`label`,null,g(J(t)(`settings.workspace.path`)),1),u(J(S),{value:c.value,"onUpdate:value":n[2]||=e=>c.value=e,size:`small`,placeholder:J(t)(`settings.workspace.pathPlaceholder`),onKeydown:p(h,[`enter`])},null,8,[`value`,`placeholder`])]),u(J(s),{size:`small`},{default:F(()=>[u(J(O),{size:`small`,type:`primary`,disabled:!o.value.trim()||!c.value.trim(),onClick:h},{default:F(()=>[D(g(d.value?J(t)(`common.update`):J(t)(`common.create`)),1)]),_:1},8,[`disabled`]),u(J(O),{size:`small`,onClick:m},{default:F(()=>[D(g(J(t)(`common.cancel`)),1)]),_:1})]),_:1})])):(K(),P(`div`,Ze,[r.value.length===0&&!i.value?(K(),C(J(ne),{key:0,description:J(t)(`settings.workspace.empty`)},null,8,[`description`])):te(``,!0),(K(!0),P(N,null,ce(r.value,e=>(K(),P(`div`,{key:e.id,class:`workspace-item`},[W(`div`,Qe,[W(`span`,$e,g(e.name),1),W(`span`,{class:`workspace-path`,title:e.path},g(e.path),9,et)]),u(J(s),{size:`small`},{default:F(()=>[u(J(O),{size:`tiny`,quaternary:``,onClick:t=>v(e)},{default:F(()=>[D(g(J(t)(`common.edit`)),1)]),_:1},8,[`onClick`]),u(J(l),{"positive-text":J(t)(`common.confirm`),"negative-text":J(t)(`common.cancel`),onPositiveClick:t=>y(e.id)},{trigger:F(()=>[u(J(O),{size:`tiny`,quaternary:``,type:`error`},{default:F(()=>[D(g(J(t)(`common.delete`)),1)]),_:1})]),default:F(()=>[D(` `+g(J(t)(`settings.workspace.deleteConfirm`)),1)]),_:1},8,[`positive-text`,`negative-text`,`onPositiveClick`])]),_:2},1024)]))),128)),u(J(O),{class:`add-btn`,dashed:``,type:`primary`,size:`small`,onClick:n[0]||=e=>{a.value=!0,d.value=null}},{default:F(()=>[D(` + `+g(J(t)(`settings.workspace.add`)),1)]),_:1})]))]))}}),[[`__scopeId`,`data-v-b65db1e5`]]),at={class:`settings-view`},ot={class:`page-header`},st={class:`header-title`},ct={class:`settings-content`},lt=R(L({__name:`SettingsView`,setup(e){let t=B(),{t:n}=_();return ae(()=>{t.fetchSettings()}),(e,r)=>(K(),P(`div`,at,[W(`header`,ot,[W(`h2`,st,g(J(n)(`settings.title`)),1)]),W(`div`,ct,[u(J(re),{show:J(t).loading||J(t).saving,size:`large`,description:J(n)(`common.loading`)},{default:F(()=>[u(J(ze),{type:`line`,animated:``},{default:F(()=>[u(J($),{name:`display`,tab:J(n)(`settings.tabs.display`)},{default:F(()=>[u(Ge)]),_:1},8,[`tab`]),u(J($),{name:`agent`,tab:J(n)(`settings.tabs.agent`)},{default:F(()=>[u(qe)]),_:1},8,[`tab`]),u(J($),{name:`memory`,tab:J(n)(`settings.tabs.memory`)},{default:F(()=>[u(Ye)]),_:1},8,[`tab`]),u(J($),{name:`workspace`,tab:J(n)(`settings.tabs.workspace`)},{default:F(()=>[u(it)]),_:1},8,[`tab`])]),_:1})]),_:1},8,[`show`,`description`])])]))}}),[[`__scopeId`,`data-v-4e6130f6`]]);export{lt as default};