import{i as e,n as t}from"./warn-MV9BENh8.js";import{S as n}from"./_baseFor-tDInUmcl.js";import{n as r,t as i}from"./now-BgLVx7Xj.js";import{t as a}from"./Add-Di0FXujF.js";import{t as o}from"./InputNumber-C4EZWrxR.js";import{t as s}from"./Space-BfdPYFlm.js";import{t as c}from"./Switch-B5uufVgO.js";import{t as l}from"./Popconfirm-DIq5Vz4U.js";import{$r as u,An as d,Bn as f,Br as p,Ci as m,Cn as h,Cr as g,En as _,F as v,Fn as y,H as b,Jr as x,Kr as S,O as C,Oi as w,Or as T,Qn as ee,R as E,Rn as D,Rr as O,Si as k,Sr as A,Ti as j,Tn as M,Vr as N,Wr as P,Xr as te,Yr as ne,Z as F,Zr as I,_ as re,_i as ie,ai as ae,br as L,di as R,ei as z,er as oe,f as B,fi as se,fr as ce,gi as V,gt as H,i as U,ii as le,kn as ue,li as de,mr as W,oi as fe,pi as pe,qr as G,ri as K,st as me,ti as q,tr as he,vi as J,vn as ge,vr as Y,vt as _e,x as ve,xr as X,yi as ye,yn as be,yr as Z,zn as xe}from"./index-DH95JMR1.js";import{t as Q}from"./SettingRow-BKxdAdOI.js";import{i as Se,n as Ce,r as we,t as Te}from"./workspaces-DAzBj3gc.js";var Ee=D(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[D(`&::-webkit-scrollbar`,{width:0,height:0})]),De=q({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=k(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=f();return Ee.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:xe,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return K(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Oe=`Expected a function`,ke=Math.max,Ae=Math.min;function je(e,t,a){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof e!=`function`)throw TypeError(Oe);t=r(t)||0,n(a)&&(p=!!a.leading,m=`maxWait`in a,c=m?ke(r(a.maxWait)||0,t):c,h=`trailing`in a?!!a.trailing:h);function g(t){var n=o,r=s;return o=s=void 0,f=t,l=e.apply(r,n),l}function _(e){return f=e,u=setTimeout(b,t),p?g(e):l}function v(e){var n=e-d,r=e-f,i=t-n;return m?Ae(i,c-r):i}function y(e){var n=e-d,r=e-f;return d===void 0||n>=t||n<0||m&&r>=c}function b(){var e=i();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function C(){return u===void 0?l:x(i())}function w(){var e=i(),n=y(e);if(o=arguments,s=this,d=e,n){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,t),g(d)}return u===void 0&&(u=setTimeout(b,t)),l}return w.cancel=S,w.flush=C,w}var Me=`Expected a function`;function Ne(e,t,r){var i=!0,a=!0;if(typeof e!=`function`)throw TypeError(Me);return n(r)&&(i=`leading`in r?!!r.leading:i,a=`trailing`in r?!!r.trailing:a),je(e,t,{leading:i,maxWait:t,trailing:a})}var Pe=e(`n-tabs`),Fe={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},$=q({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:Fe,slots:Object,setup(e){let n=le(Pe,null);return n||t(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return K(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Ie=q({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},_(Fe,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=le(Pe);return{trigger:d,mergedClosable:G(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:o,value:s,mergedClosable:c,trigger:l,$slots:{default:u}}=this,d=i??o;return K(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?K(`div`,{class:`${t}-tabs-tab-pad`}):null,K(`div`,Object.assign({key:n,"data-name":n,"data-disabled":r?!0:void 0},ae({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),K(`span`,{class:`${t}-tabs-tab__label`},e?K(P,null,K(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),K(H,{clsPrefix:t},{default:()=>K(a,null)})):u?u():typeof d==`object`?d:M(d??n)),c&&this.type===`card`?K(me,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),Le=Z(`tabs`,`
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
 `,[L(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),L(`prefix`,`padding-right: 16px;`),L(`suffix`,`padding-left: 16px;`)]),X(`top, bottom`,[Y(`>`,[Z(`tabs-nav`,[Z(`tabs-nav-scroll-wrapper`,[Y(`&::before`,`
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
 `,[X(`disabled`,{cursor:`not-allowed`}),L(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),L(`label`,`
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
 `),X(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),Z(`tabs-nav`,[X(`line-type`,[X(`top`,[L(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-bar`,`
 bottom: -1px;
 `)]),X(`left`,[L(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-bar`,`
 right: -1px;
 `)]),X(`right`,[L(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-bar`,`
 left: -1px;
 `)]),X(`bottom`,[L(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),Z(`tabs-bar`,`
 top: -1px;
 `)]),L(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),Z(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),Z(`tabs-bar`,`
 border-radius: 0;
 `)]),X(`card-type`,[L(`prefix, suffix`,`
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
 `,[L(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),A(`disabled`,[Y(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),X(`closable`,`padding-right: 8px;`),X(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),X(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),X(`left, right`,`
 flex-direction: column; 
 `,[L(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),Z(`tabs-wrapper`,`
 flex-direction: column;
 `),Z(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[Z(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),X(`top`,[X(`card-type`,[Z(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),L(`prefix, suffix`,`
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
 `)])]),X(`left`,[X(`card-type`,[Z(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),L(`prefix, suffix`,`
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
 `)])]),X(`right`,[X(`card-type`,[Z(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),L(`prefix, suffix`,`
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
 `)])]),X(`bottom`,[X(`card-type`,[Z(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),L(`prefix, suffix`,`
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
 `)])])])]),Re=Ne,ze=q({name:`Tabs`,props:Object.assign(Object.assign({},_e.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=be(e),a=_e(`Tabs`,`-tabs`,Le,ve,e,n),o=k(null),s=k(null),c=k(null),l=k(null),u=k(null),f=k(null),p=k(!0),h=k(!0),_=ee(e,[`labelSize`,`size`]),v=G(()=>_.value?_.value:i?.value?.Tabs?.size||`medium`),y=ee(e,[`activeName`,`value`]),b=k(y.value??e.defaultValue??(t.default?ue(t.default())[0]?.props?.name:null)),x=oe(y,b),S={id:0},C=G(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});V(x,()=>{S.id=0,O(),A()});function w(){let{value:e}=x;return e===null?null:o.value?.querySelector(`[data-name="${e}"]`)}function T(t){if(e.type===`card`)return;let{value:r}=s;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(D([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(D([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function E(){if(e.type===`card`)return;let{value:t}=s;t&&(t.style.opacity=`0`)}function D(e){let{value:t}=s;if(t)for(let n of e)t.style[n]=``}function O(){if(e.type===`card`)return;let t=w();t?T(t):E()}function A(){let e=u.value?.$el;if(!e)return;let t=w();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let j=k(null),M=0,N=null;function P(e){let t=j.value;if(t){M=e.getBoundingClientRect().height;let n=`${M}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};N?(r(),N(),N=null):N=r}}function te(e){let t=j.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(M,n)}px`};N?(N(),N=null,r()):N=r}}function ne(){let t=j.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let F={value:[]},I=k(`next`);function re(e){let t=x.value,n=`next`;for(let r of F.value){if(r===t)break;if(r===e){n=`prev`;break}}I.value=n,ae(e)}function ae(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&d(n,t),r&&d(r,t),i&&d(i,t),b.value=t}function L(t){let{onClose:n}=e;n&&d(n,t)}let R=!0;function z(){let{value:e}=s;if(!e)return;R||=!1;let t=`transition-disabled`;e.classList.add(t),O(),e.classList.remove(t)}let B=k(null);function H({transitionDisabled:e}){let t=o.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=w();n&&B.value&&(B.value.style.width=`${n.offsetWidth}px`,B.value.style.height=`${n.offsetHeight}px`,B.value.style.transform=`translateX(${n.offsetLeft-ce(getComputedStyle(t).paddingLeft)}px)`,e&&B.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}V([x],()=>{e.type===`segment`&&fe(()=>{H({transitionDisabled:!1})})}),de(()=>{e.type===`segment`&&H({transitionDisabled:!0})});let U=0;function le(t){if(t.contentRect.width===0&&t.contentRect.height===0||U===t.contentRect.width)return;U=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(R||e.justifyContent?.startsWith(`space`))&&z(),n!==`segment`){let{placement:t}=e;Y((t===`top`||t===`bottom`?u.value?.$el:f.value)||null)}}let pe=Re(le,64);V([()=>e.justifyContent,()=>e.size],()=>{fe(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&z()})});let K=k(!1);function me(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!K.value)s===`top`||s===`bottom`?a<r&&(K.value=!0):o<i&&(K.value=!0);else{let{value:e}=l;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(K.value=!1):o-i>e.$el.offsetHeight&&(K.value=!1)}Y(u.value?.$el||null)}let q=Re(me,64);function J(){let{onAdd:t}=e;t&&t(),fe(()=>{let e=w(),{value:t}=u;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function Y(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;p.value=e<=0,h.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;p.value=e<=0,h.value=e+r>=n}}let X=Re(e=>{Y(e.target)},64);se(Pe,{triggerRef:m(e,`trigger`),tabStyleRef:m(e,`tabStyle`),tabClassRef:m(e,`tabClass`),addTabStyleRef:m(e,`addTabStyle`),addTabClassRef:m(e,`addTabClass`),paneClassRef:m(e,`paneClass`),paneStyleRef:m(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:m(e,`type`),closableRef:m(e,`closable`),valueRef:x,tabChangeIdRef:S,onBeforeLeaveRef:m(e,`onBeforeLeave`),activateTab:re,handleClose:L,handleAdd:J}),he(()=>{O(),A()}),ie(()=>{let{value:e}=c;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;p.value?e.classList.remove(r):e.classList.add(r),h.value?e.classList.remove(i):e.classList.add(i)});let ye={syncBarPosition:()=>{O()}},Z=()=>{H({transitionDisabled:!0})},xe=G(()=>{let{value:t}=v,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:o,closeIconColorHover:s,closeIconColorPressed:c,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:_,tabColorSegment:y,closeSize:b,closeIconSize:x,closeColorHover:S,closeColorPressed:C,closeBorderRadius:w,[g(`panePadding`,t)]:T,[g(`tabPadding`,r)]:ee,[g(`tabPaddingVertical`,r)]:E,[g(`tabGap`,r)]:D,[g(`tabGap`,`${r}Vertical`)]:O,[g(`tabTextColor`,n)]:k,[g(`tabTextColorActive`,n)]:A,[g(`tabTextColorHover`,n)]:j,[g(`tabTextColorDisabled`,n)]:M,[g(`tabFontSize`,t)]:N},common:{cubicBezierEaseInOut:P}}=a.value;return{"--n-bezier":P,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":N,"--n-tab-text-color":k,"--n-tab-text-color-active":A,"--n-tab-text-color-disabled":M,"--n-tab-text-color-hover":j,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":b,"--n-close-icon-size":x,"--n-close-color-hover":S,"--n-close-color-pressed":C,"--n-close-border-radius":w,"--n-close-icon-color":o,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":c,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":ee,"--n-tab-padding-vertical":E,"--n-tab-gap":D,"--n-tab-gap-vertical":O,"--n-pane-padding-left":W(T,`left`),"--n-pane-padding-right":W(T,`right`),"--n-pane-padding-top":W(T,`top`),"--n-pane-padding-bottom":W(T,`bottom`),"--n-font-weight-strong":_,"--n-tab-color-segment":y}}),Q=r?ge(`tabs`,G(()=>`${v.value[0]}${e.type[0]}`),xe,e):void 0;return Object.assign({mergedClsPrefix:n,mergedValue:x,renderedNames:new Set,segmentCapsuleElRef:B,tabsPaneWrapperRef:j,tabsElRef:o,barElRef:s,addTabInstRef:l,xScrollInstRef:u,scrollWrapperElRef:c,addTabFixed:K,tabWrapperStyle:C,handleNavResize:pe,mergedSize:v,handleScroll:X,handleTabsResize:q,cssVars:r?void 0:xe,themeClass:Q?.themeClass,animationDirection:I,renderNameListRef:F,yScrollElRef:f,handleSegmentResize:Z,onAnimationBeforeLeave:P,onAnimationEnter:te,onAnimationAfterEnter:ne,onRender:Q?.onRender},ye)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,$slots:{default:u,prefix:d,suffix:f}}=this;s?.();let p=u?ue(u()).filter(e=>e.type.__TAB_PANE__===!0):[],m=u?ue(u()).filter(e=>e.type.__TAB__===!0):[],g=!m.length,_=t===`card`,v=t===`segment`,b=!_&&!v&&this.justifyContent;o.value=[];let x=()=>{let t=K(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},b?null:K(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),g?p.map((e,t)=>(o.value.push(e.props.name),Ue(K(Ie,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!b||b===`center`||b===`start`||b===`end`)}),e.children?{default:e.children.tab}:void 0)))):m.map((e,t)=>(o.value.push(e.props.name),Ue(t!==0&&!b?He(e):e))),!r&&i&&_?Ve(i,(g?p.length:m.length)!==0):null,b?null:K(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return K(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},_&&i?K(y,{onResize:this.handleTabsResize},{default:()=>t}):t,_?K(`div`,{class:`${e}-tabs-pad`}):null,_?null:K(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},S=v?`top`:n;return K(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,b&&`${e}-tabs--flex`,`${e}-tabs--${S}`],style:this.cssVars},K(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${S}`,`${e}-tabs-nav`]},h(d,t=>t&&K(`div`,{class:`${e}-tabs-nav__prefix`},t)),v?K(y,{onResize:this.handleSegmentResize},{default:()=>K(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},K(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},K(`div`,{class:`${e}-tabs-wrapper`},K(`div`,{class:`${e}-tabs-tab`}))),g?p.map((e,t)=>(o.value.push(e.props.name),K(Ie,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):m.map((e,t)=>(o.value.push(e.props.name),t===0?e:He(e))))}):K(y,{onResize:this.handleNavResize},{default:()=>K(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(S)?K(De,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:x}):K(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},x()))}),r&&i&&_?Ve(i,!0):null,h(f,t=>t&&K(`div`,{class:`${e}-tabs-nav__suffix`},t))),g&&(this.animated&&(S===`top`||S===`bottom`)?K(`div`,{ref:`tabsPaneWrapperRef`,style:l,class:[`${e}-tabs-pane-wrapper`,c]},Be(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Be(p,this.mergedValue,this.renderedNames)))}});function Be(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?ye(e,[[p,c]]):e)}}),o?K(O,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function Ve(e,t){return K(Ie,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function He(e){let t=S(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Ue(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var We={class:`settings-section`},Ge=B(q({__name:`DisplaySettings`,setup(e){let t=U(),n=C(),{t:r}=T();async function i(e){try{await t.saveSection(`display`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(R(),I(`section`,We,[z(Q,{label:j(r)(`settings.display.streaming`),hint:j(r)(`settings.display.streamingHint`)},{default:J(()=>[z(j(c),{value:j(t).display.streaming,"onUpdate:value":n[0]||=e=>i({streaming:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),z(Q,{label:j(r)(`settings.display.compact`),hint:j(r)(`settings.display.compactHint`)},{default:J(()=>[z(j(c),{value:j(t).display.compact,"onUpdate:value":n[1]||=e=>i({compact:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),z(Q,{label:j(r)(`settings.display.showReasoning`),hint:j(r)(`settings.display.showReasoningHint`)},{default:J(()=>[z(j(c),{value:j(t).display.show_reasoning,"onUpdate:value":n[2]||=e=>i({show_reasoning:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),z(Q,{label:j(r)(`settings.display.showCost`),hint:j(r)(`settings.display.showCostHint`)},{default:J(()=>[z(j(c),{value:j(t).display.show_cost,"onUpdate:value":n[3]||=e=>i({show_cost:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),z(Q,{label:j(r)(`settings.display.bellOnComplete`),hint:j(r)(`settings.display.bellOnCompleteHint`)},{default:J(()=>[z(j(c),{value:j(t).display.bell_on_complete,"onUpdate:value":n[4]||=e=>i({bell_on_complete:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),z(Q,{label:j(r)(`settings.display.busyInputMode`),hint:j(r)(`settings.display.busyInputModeHint`)},{default:J(()=>[z(j(c),{value:j(t).display.busy_input_mode===`interrupt`,"onUpdate:value":n[5]||=e=>i({busy_input_mode:e?`interrupt`:`off`})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0d401d9f`]]),Ke={class:`settings-section`},qe=B(q({__name:`AgentSettings`,setup(e){let t=U(),n=C(),{t:r}=T();async function i(e){try{await t.saveSection(`agent`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(R(),I(`section`,Ke,[z(Q,{label:j(r)(`settings.agent.maxTurns`),hint:j(r)(`settings.agent.maxTurnsHint`)},{default:J(()=>[z(j(o),{value:j(t).agent.max_turns,min:1,max:200,step:5,size:`small`,class:`input-sm`,"onUpdate:value":n[0]||=e=>e!=null&&i({max_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),z(Q,{label:j(r)(`settings.agent.gatewayTimeout`),hint:j(r)(`settings.agent.gatewayTimeoutHint`)},{default:J(()=>[z(j(o),{value:j(t).agent.gateway_timeout,min:60,max:7200,step:60,size:`small`,class:`input-sm`,"onUpdate:value":n[1]||=e=>e!=null&&i({gateway_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),z(Q,{label:j(r)(`settings.agent.restartDrainTimeout`),hint:j(r)(`settings.agent.restartDrainTimeoutHint`)},{default:J(()=>[z(j(o),{value:j(t).agent.restart_drain_timeout,min:10,max:300,step:10,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({restart_drain_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),z(Q,{label:j(r)(`settings.agent.toolEnforcement`),hint:j(r)(`settings.agent.toolEnforcementHint`)},{default:J(()=>[z(j(v),{value:j(t).agent.tool_use_enforcement||`auto`,options:[{label:j(r)(`settings.agent.auto`),value:`auto`},{label:j(r)(`settings.agent.always`),value:`always`},{label:j(r)(`settings.agent.never`),value:`never`}],size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>i({tool_use_enforcement:e}),"show-tooltip":!0},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-e6b6033d`]]),Je={class:`settings-section`},Ye=B(q({__name:`MemorySettings`,setup(e){let t=U(),n=C(),{t:r}=T();async function i(e){try{await t.saveSection(`memory`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(R(),I(`section`,Je,[z(Q,{label:j(r)(`settings.memory.enabled`),hint:j(r)(`settings.memory.enabledHint`)},{default:J(()=>[z(j(c),{value:j(t).memory.memory_enabled,"onUpdate:value":n[0]||=e=>i({memory_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),z(Q,{label:j(r)(`settings.memory.userProfile`),hint:j(r)(`settings.memory.userProfileHint`)},{default:J(()=>[z(j(c),{value:j(t).memory.user_profile_enabled,"onUpdate:value":n[1]||=e=>i({user_profile_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),z(Q,{label:j(r)(`settings.memory.charLimit`),hint:j(r)(`settings.memory.charLimitHint`)},{default:J(()=>[z(j(o),{value:j(t).memory.memory_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({memory_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),z(Q,{label:j(r)(`settings.memory.userCharLimit`),hint:j(r)(`settings.memory.userCharLimitHint`)},{default:J(()=>[z(j(o),{value:j(t).memory.user_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>e!=null&&i({user_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0c8e2aa7`]]),Xe={class:`workspace-settings`},Ze={key:0,class:`workspace-list`},Qe={class:`workspace-info`},$e={class:`workspace-name`},et=[`title`],tt={key:1,class:`workspace-form`},nt={class:`form-row`},rt={class:`form-row`},it=B(q({__name:`WorkspaceSettings`,setup(e){let{t}=T(),n=C(),r=k([]),i=k(!1),a=k(!1),o=k(``),c=k(``),d=k(null);async function f(){i.value=!0;try{r.value=await we()}finally{i.value=!1}}de(f);function p(){o.value=``,c.value=``,a.value=!1,d.value=null}async function m(){let e=o.value.trim(),i=c.value.trim();if(!(!e||!i))try{if(d.value){let a=await Se(d.value,{name:e,path:i}),o=r.value.findIndex(e=>e.id===d.value);o>=0&&(r.value[o]=a),n.success(t(`common.saved`))}else{let a=await Te(e,i);r.value.push(a),n.success(t(`common.saved`))}p()}catch(e){let r=e?.message||``;r.includes(`409`)||r.includes(`already exists`)?n.error(t(`settings.workspace.nameExists`)):r.includes(`400`)||r.includes(`does not exist`)?n.error(t(`settings.workspace.pathNotExists`)):n.error(t(`common.saveFailed`))}}function h(e){d.value=e.id,o.value=e.name,c.value=e.path,a.value=!0}async function g(e){await Ce(e)?(r.value=r.value.filter(t=>t.id!==e),n.success(t(`common.saved`))):n.error(t(`common.deleteFailed`))}return(e,n)=>(R(),I(`section`,Xe,[a.value?(R(),I(`div`,tt,[x(`div`,nt,[x(`label`,null,w(j(t)(`settings.workspace.name`)),1),z(j(b),{value:o.value,"onUpdate:value":n[1]||=e=>o.value=e,size:`small`,placeholder:j(t)(`settings.workspace.namePlaceholder`),onKeydown:N(m,[`enter`])},null,8,[`value`,`placeholder`])]),x(`div`,rt,[x(`label`,null,w(j(t)(`settings.workspace.path`)),1),z(j(b),{value:c.value,"onUpdate:value":n[2]||=e=>c.value=e,size:`small`,placeholder:j(t)(`settings.workspace.pathPlaceholder`),onKeydown:N(m,[`enter`])},null,8,[`value`,`placeholder`])]),z(j(s),{size:`small`},{default:J(()=>[z(j(E),{size:`small`,type:`primary`,disabled:!o.value.trim()||!c.value.trim(),onClick:m},{default:J(()=>[u(w(d.value?j(t)(`common.update`):j(t)(`common.create`)),1)]),_:1},8,[`disabled`]),z(j(E),{size:`small`,onClick:p},{default:J(()=>[u(w(j(t)(`common.cancel`)),1)]),_:1})]),_:1})])):(R(),I(`div`,Ze,[r.value.length===0&&!i.value?(R(),ne(j(F),{key:0,description:j(t)(`settings.workspace.empty`)},null,8,[`description`])):te(``,!0),(R(!0),I(P,null,pe(r.value,e=>(R(),I(`div`,{key:e.id,class:`workspace-item`},[x(`div`,Qe,[x(`span`,$e,w(e.name),1),x(`span`,{class:`workspace-path`,title:e.path},w(e.path),9,et)]),z(j(s),{size:`small`},{default:J(()=>[z(j(E),{size:`tiny`,quaternary:``,onClick:t=>h(e)},{default:J(()=>[u(w(j(t)(`common.edit`)),1)]),_:1},8,[`onClick`]),z(j(l),{"positive-text":j(t)(`common.confirm`),"negative-text":j(t)(`common.cancel`),onPositiveClick:t=>g(e.id)},{trigger:J(()=>[z(j(E),{size:`tiny`,quaternary:``,type:`error`},{default:J(()=>[u(w(j(t)(`common.delete`)),1)]),_:1})]),default:J(()=>[u(` `+w(j(t)(`settings.workspace.deleteConfirm`)),1)]),_:1},8,[`positive-text`,`negative-text`,`onPositiveClick`])]),_:2},1024)]))),128)),z(j(E),{class:`add-btn`,dashed:``,type:`primary`,size:`small`,onClick:n[0]||=e=>{a.value=!0,d.value=null}},{default:J(()=>[u(` + `+w(j(t)(`settings.workspace.add`)),1)]),_:1})]))]))}}),[[`__scopeId`,`data-v-b65db1e5`]]),at={class:`settings-view`},ot={class:`page-header`},st={class:`header-title`},ct={class:`settings-content`},lt=B(q({__name:`SettingsView`,setup(e){let t=U(),{t:n}=T();return de(()=>{t.fetchSettings()}),(e,r)=>(R(),I(`div`,at,[x(`header`,ot,[x(`h2`,st,w(j(n)(`settings.title`)),1)]),x(`div`,ct,[z(j(re),{show:j(t).loading||j(t).saving,size:`large`,description:j(n)(`common.loading`)},{default:J(()=>[z(j(ze),{type:`line`,animated:``},{default:J(()=>[z(j($),{name:`display`,tab:j(n)(`settings.tabs.display`)},{default:J(()=>[z(Ge)]),_:1},8,[`tab`]),z(j($),{name:`agent`,tab:j(n)(`settings.tabs.agent`)},{default:J(()=>[z(qe)]),_:1},8,[`tab`]),z(j($),{name:`memory`,tab:j(n)(`settings.tabs.memory`)},{default:J(()=>[z(Ye)]),_:1},8,[`tab`]),z(j($),{name:`workspace`,tab:j(n)(`settings.tabs.workspace`)},{default:J(()=>[z(it)]),_:1},8,[`tab`])]),_:1})]),_:1},8,[`show`,`description`])])]))}}),[[`__scopeId`,`data-v-4e6130f6`]]);export{lt as default};