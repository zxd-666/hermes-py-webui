import{S as e}from"./_baseFor-DyDN1Ubb.js";import{n as t,t as n}from"./now-DmI6t_TH.js";import{t as r}from"./Add-CR31sMg3.js";import{t as i}from"./InputNumber-BRs-UnGf.js";import{t as a}from"./Space-aivXJwkq.js";import{t as o}from"./Switch-CzcPO_6F.js";import{t as s}from"./Popconfirm-BKHHrpoV.js";import{$n as c,$r as l,Bn as u,Br as d,Cn as f,Cr as p,Di as m,Dn as h,Dr as g,En as _,F as v,Fn as y,Gr as b,Jr as x,Kr as S,L as C,Lr as w,O as T,Qn as E,Qr as D,Rn as O,Si as k,Sn as A,Sr as j,Ur as M,V as N,X as P,Xr as F,Yr as ee,_ as te,_i as I,_n as ne,_t as re,ai as ie,br as L,ci as ae,di as oe,ei as R,f as z,fi as se,fr as ce,gi as le,hi as ue,ht as de,i as B,ii as fe,kn as V,mr as H,ni as U,nr as pe,ot as me,qr as W,ri as he,tr as ge,ui as G,vi as _e,vn as ve,vr as K,wi as q,x as ye,xi as J,xn as Y,xr as X,yr as Z,zn as be,zr as xe}from"./index-DeLwDLoy.js";import{t as Q}from"./SettingRow-Drf8pgKR.js";import{i as Se,n as Ce,r as we,t as Te}from"./workspaces-D_2yO3Di.js";var Ee=O(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[O(`&::-webkit-scrollbar`,{width:0,height:0})]),De=R({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=J(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=u();return Ee.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:be,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return U(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Oe=`Expected a function`,ke=Math.max,Ae=Math.min;function je(r,i,a){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof r!=`function`)throw TypeError(Oe);i=t(i)||0,e(a)&&(p=!!a.leading,m=`maxWait`in a,c=m?ke(t(a.maxWait)||0,i):c,h=`trailing`in a?!!a.trailing:h);function g(e){var t=o,n=s;return o=s=void 0,f=e,l=r.apply(n,t),l}function _(e){return f=e,u=setTimeout(b,i),p?g(e):l}function v(e){var t=e-d,n=e-f,r=i-t;return m?Ae(r,c-n):r}function y(e){var t=e-d,n=e-f;return d===void 0||t>=i||t<0||m&&n>=c}function b(){var e=n();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function C(){return u===void 0?l:x(n())}function w(){var e=n(),t=y(e);if(o=arguments,s=this,d=e,t){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,i),g(d)}return u===void 0&&(u=setTimeout(b,i)),l}return w.cancel=S,w.flush=C,w}var Me=`Expected a function`;function Ne(t,n,r){var i=!0,a=!0;if(typeof t!=`function`)throw TypeError(Me);return e(r)&&(i=`leading`in r?!!r.leading:i,a=`trailing`in r?!!r.trailing:a),je(t,n,{leading:i,maxWait:n,trailing:a})}var Pe=E(`n-tabs`),Fe={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},$=R({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:Fe,slots:Object,setup(e){let t=he(Pe,null);return t||V(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return U(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Ie=R({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},f(Fe,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=he(Pe);return{trigger:d,mergedClosable:S(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:i,label:a,tab:o,value:s,mergedClosable:c,trigger:l,$slots:{default:u}}=this,d=a??o;return U(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?U(`div`,{class:`${t}-tabs-tab-pad`}):null,U(`div`,Object.assign({key:n,"data-name":n,"data-disabled":i?!0:void 0},fe({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,i&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),U(`span`,{class:`${t}-tabs-tab__label`},e?U(M,null,U(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),U(de,{clsPrefix:t},{default:()=>U(r,null)})):u?u():typeof d==`object`?d:A(d??n)),c&&this.type===`card`?U(me,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:i}):null))}}),Le=Z(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[X(`segment-type`,[Z(`tabs-rail`,[K(`&.transition-disabled`,[Z(`tabs-capsule`,`
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
 `),K(`&:hover`,`
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
 `),L(`prefix`,`padding-right: 16px;`),L(`suffix`,`padding-left: 16px;`)]),X(`top, bottom`,[K(`>`,[Z(`tabs-nav`,[Z(`tabs-nav-scroll-wrapper`,[K(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),K(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),X(`shadow-start`,[K(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),X(`shadow-end`,[K(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),X(`left, right`,[Z(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),K(`>`,[Z(`tabs-nav`,[Z(`tabs-nav-scroll-wrapper`,[K(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),K(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),X(`shadow-start`,[K(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),X(`shadow-end`,[K(`&::after`,`
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
 `,[K(`&.transition-disabled`,`
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
 `)]),Z(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),X(`line-type, bar-type`,[Z(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[K(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),X(`active`,`
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
 `),j(`disabled`,[K(`&:hover`,`
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
 `)])])])]),Re=Ne,ze=R({name:`Tabs`,props:Object.assign(Object.assign({},re.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=ve(e),a=re(`Tabs`,`-tabs`,Le,ye,e,n),o=J(null),s=J(null),l=J(null),u=J(null),d=J(null),f=J(null),m=J(!0),g=J(!0),v=c(e,[`labelSize`,`size`]),y=S(()=>v.value?v.value:i?.value?.Tabs?.size||`medium`),b=c(e,[`activeName`,`value`]),x=J(b.value??e.defaultValue??(t.default?_(t.default())[0]?.props?.name:null)),C=ge(b,x),w={id:0},T=S(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});ue(C,()=>{w.id=0,j(),M()});function E(){let{value:e}=C;return e===null?null:o.value?.querySelector(`[data-name="${e}"]`)}function D(t){if(e.type===`card`)return;let{value:r}=s;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(A([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(A([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function O(){if(e.type===`card`)return;let{value:t}=s;t&&(t.style.opacity=`0`)}function A(e){let{value:t}=s;if(t)for(let n of e)t.style[n]=``}function j(){if(e.type===`card`)return;let t=E();t?D(t):O()}function M(){let e=d.value?.$el;if(!e)return;let t=E();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let N=J(null),P=0,F=null;function ee(e){let t=N.value;if(t){P=e.getBoundingClientRect().height;let n=`${P}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};F?(r(),F(),F=null):F=r}}function te(e){let t=N.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(P,n)}px`};F?(F(),F=null,r()):F=r}}function I(){let t=N.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let L={value:[]},R=J(`next`);function z(e){let t=C.value,n=`next`;for(let r of L.value){if(r===t)break;if(r===e){n=`prev`;break}}R.value=n,se(e)}function se(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&h(n,t),r&&h(r,t),i&&h(i,t),x.value=t}function de(t){let{onClose:n}=e;n&&h(n,t)}let B=!0;function fe(){let{value:e}=s;if(!e)return;B||=!1;let t=`transition-disabled`;e.classList.add(t),j(),e.classList.remove(t)}let V=J(null);function U({transitionDisabled:e}){let t=o.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=E();n&&V.value&&(V.value.style.width=`${n.offsetWidth}px`,V.value.style.height=`${n.offsetHeight}px`,V.value.style.transform=`translateX(${n.offsetLeft-ce(getComputedStyle(t).paddingLeft)}px)`,e&&V.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}ue([C],()=>{e.type===`segment`&&ie(()=>{U({transitionDisabled:!1})})}),ae(()=>{e.type===`segment`&&U({transitionDisabled:!0})});let me=0;function W(t){if(t.contentRect.width===0&&t.contentRect.height===0||me===t.contentRect.width)return;me=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(B||e.justifyContent?.startsWith(`space`))&&fe(),n!==`segment`){let{placement:t}=e;Y((t===`top`||t===`bottom`?d.value?.$el:f.value)||null)}}let he=Re(W,64);ue([()=>e.justifyContent,()=>e.size],()=>{ie(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&fe()})});let G=J(!1);function _e(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!G.value)s===`top`||s===`bottom`?a<r&&(G.value=!0):o<i&&(G.value=!0);else{let{value:e}=u;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(G.value=!1):o-i>e.$el.offsetHeight&&(G.value=!1)}Y(d.value?.$el||null)}let K=Re(_e,64);function q(){let{onAdd:t}=e;t&&t(),ie(()=>{let e=E(),{value:t}=d;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function Y(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;m.value=e<=0,g.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;m.value=e<=0,g.value=e+r>=n}}let X=Re(e=>{Y(e.target)},64);oe(Pe,{triggerRef:k(e,`trigger`),tabStyleRef:k(e,`tabStyle`),tabClassRef:k(e,`tabClass`),addTabStyleRef:k(e,`addTabStyle`),addTabClassRef:k(e,`addTabClass`),paneClassRef:k(e,`paneClass`),paneStyleRef:k(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:k(e,`type`),closableRef:k(e,`closable`),valueRef:C,tabChangeIdRef:w,onBeforeLeaveRef:k(e,`onBeforeLeave`),activateTab:z,handleClose:de,handleAdd:q}),pe(()=>{j(),M()}),le(()=>{let{value:e}=l;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;m.value?e.classList.remove(r):e.classList.add(r),g.value?e.classList.remove(i):e.classList.add(i)});let Z={syncBarPosition:()=>{j()}},be=()=>{U({transitionDisabled:!0})},xe=S(()=>{let{value:t}=y,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:o,closeIconColorHover:s,closeIconColorPressed:c,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:m,tabFontWeightActive:h,colorSegment:g,fontWeightStrong:_,tabColorSegment:v,closeSize:b,closeIconSize:x,closeColorHover:S,closeColorPressed:C,closeBorderRadius:w,[p(`panePadding`,t)]:T,[p(`tabPadding`,r)]:E,[p(`tabPaddingVertical`,r)]:D,[p(`tabGap`,r)]:O,[p(`tabGap`,`${r}Vertical`)]:k,[p(`tabTextColor`,n)]:A,[p(`tabTextColorActive`,n)]:j,[p(`tabTextColorHover`,n)]:M,[p(`tabTextColorDisabled`,n)]:N,[p(`tabFontSize`,t)]:P},common:{cubicBezierEaseInOut:F}}=a.value;return{"--n-bezier":F,"--n-color-segment":g,"--n-bar-color":i,"--n-tab-font-size":P,"--n-tab-text-color":A,"--n-tab-text-color-active":j,"--n-tab-text-color-disabled":N,"--n-tab-text-color-hover":M,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":m,"--n-close-size":b,"--n-close-icon-size":x,"--n-close-color-hover":S,"--n-close-color-pressed":C,"--n-close-border-radius":w,"--n-close-icon-color":o,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":c,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":h,"--n-tab-padding":E,"--n-tab-padding-vertical":D,"--n-tab-gap":O,"--n-tab-gap-vertical":k,"--n-pane-padding-left":H(T,`left`),"--n-pane-padding-right":H(T,`right`),"--n-pane-padding-top":H(T,`top`),"--n-pane-padding-bottom":H(T,`bottom`),"--n-font-weight-strong":_,"--n-tab-color-segment":v}}),Q=r?ne(`tabs`,S(()=>`${y.value[0]}${e.type[0]}`),xe,e):void 0;return Object.assign({mergedClsPrefix:n,mergedValue:C,renderedNames:new Set,segmentCapsuleElRef:V,tabsPaneWrapperRef:N,tabsElRef:o,barElRef:s,addTabInstRef:u,xScrollInstRef:d,scrollWrapperElRef:l,addTabFixed:G,tabWrapperStyle:T,handleNavResize:he,mergedSize:y,handleScroll:X,handleTabsResize:K,cssVars:r?void 0:xe,themeClass:Q?.themeClass,animationDirection:R,renderNameListRef:L,yScrollElRef:f,handleSegmentResize:be,onAnimationBeforeLeave:ee,onAnimationEnter:te,onAnimationAfterEnter:I,onRender:Q?.onRender},Z)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,$slots:{default:u,prefix:d,suffix:f}}=this;s?.();let p=u?_(u()).filter(e=>e.type.__TAB_PANE__===!0):[],m=u?_(u()).filter(e=>e.type.__TAB__===!0):[],h=!m.length,g=t===`card`,v=t===`segment`,b=!g&&!v&&this.justifyContent;o.value=[];let x=()=>{let t=U(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},b?null:U(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),h?p.map((e,t)=>(o.value.push(e.props.name),Ue(U(Ie,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!b||b===`center`||b===`start`||b===`end`)}),e.children?{default:e.children.tab}:void 0)))):m.map((e,t)=>(o.value.push(e.props.name),Ue(t!==0&&!b?He(e):e))),!r&&i&&g?Ve(i,(h?p.length:m.length)!==0):null,b?null:U(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return U(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},g&&i?U(y,{onResize:this.handleTabsResize},{default:()=>t}):t,g?U(`div`,{class:`${e}-tabs-pad`}):null,g?null:U(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},S=v?`top`:n;return U(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,b&&`${e}-tabs--flex`,`${e}-tabs--${S}`],style:this.cssVars},U(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${S}`,`${e}-tabs-nav`]},Y(d,t=>t&&U(`div`,{class:`${e}-tabs-nav__prefix`},t)),v?U(y,{onResize:this.handleSegmentResize},{default:()=>U(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},U(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},U(`div`,{class:`${e}-tabs-wrapper`},U(`div`,{class:`${e}-tabs-tab`}))),h?p.map((e,t)=>(o.value.push(e.props.name),U(Ie,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):m.map((e,t)=>(o.value.push(e.props.name),t===0?e:He(e))))}):U(y,{onResize:this.handleNavResize},{default:()=>U(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(S)?U(De,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:x}):U(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},x()))}),r&&i&&g?Ve(i,!0):null,Y(f,t=>t&&U(`div`,{class:`${e}-tabs-nav__suffix`},t))),h&&(this.animated&&(S===`top`||S===`bottom`)?U(`div`,{ref:`tabsPaneWrapperRef`,style:l,class:[`${e}-tabs-pane-wrapper`,c]},Be(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Be(p,this.mergedValue,this.renderedNames)))}});function Be(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?_e(e,[[xe,c]]):e)}}),o?U(w,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function Ve(e,t){return U(Ie,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function He(e){let t=b(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Ue(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var We={class:`settings-section`},Ge=z(R({__name:`DisplaySettings`,setup(e){let t=B(),n=T(),{t:r}=g();async function i(e){try{await t.saveSection(`display`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(G(),F(`section`,We,[l(Q,{label:q(r)(`settings.display.streaming`),hint:q(r)(`settings.display.streamingHint`)},{default:I(()=>[l(q(o),{value:q(t).display.streaming,"onUpdate:value":n[0]||=e=>i({streaming:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),l(Q,{label:q(r)(`settings.display.compact`),hint:q(r)(`settings.display.compactHint`)},{default:I(()=>[l(q(o),{value:q(t).display.compact,"onUpdate:value":n[1]||=e=>i({compact:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),l(Q,{label:q(r)(`settings.display.showReasoning`),hint:q(r)(`settings.display.showReasoningHint`)},{default:I(()=>[l(q(o),{value:q(t).display.show_reasoning,"onUpdate:value":n[2]||=e=>i({show_reasoning:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),l(Q,{label:q(r)(`settings.display.showCost`),hint:q(r)(`settings.display.showCostHint`)},{default:I(()=>[l(q(o),{value:q(t).display.show_cost,"onUpdate:value":n[3]||=e=>i({show_cost:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),l(Q,{label:q(r)(`settings.display.bellOnComplete`),hint:q(r)(`settings.display.bellOnCompleteHint`)},{default:I(()=>[l(q(o),{value:q(t).display.bell_on_complete,"onUpdate:value":n[4]||=e=>i({bell_on_complete:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),l(Q,{label:q(r)(`settings.display.busyInputMode`),hint:q(r)(`settings.display.busyInputModeHint`)},{default:I(()=>[l(q(o),{value:q(t).display.busy_input_mode===`interrupt`,"onUpdate:value":n[5]||=e=>i({busy_input_mode:e?`interrupt`:`off`})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0d401d9f`]]),Ke={class:`settings-section`},qe=z(R({__name:`AgentSettings`,setup(e){let t=B(),n=T(),{t:r}=g();async function a(e){try{await t.saveSection(`agent`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(G(),F(`section`,Ke,[l(Q,{label:q(r)(`settings.agent.maxTurns`),hint:q(r)(`settings.agent.maxTurnsHint`)},{default:I(()=>[l(q(i),{value:q(t).agent.max_turns,min:1,max:200,step:5,size:`small`,class:`input-sm`,"onUpdate:value":n[0]||=e=>e!=null&&a({max_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),l(Q,{label:q(r)(`settings.agent.gatewayTimeout`),hint:q(r)(`settings.agent.gatewayTimeoutHint`)},{default:I(()=>[l(q(i),{value:q(t).agent.gateway_timeout,min:60,max:7200,step:60,size:`small`,class:`input-sm`,"onUpdate:value":n[1]||=e=>e!=null&&a({gateway_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),l(Q,{label:q(r)(`settings.agent.restartDrainTimeout`),hint:q(r)(`settings.agent.restartDrainTimeoutHint`)},{default:I(()=>[l(q(i),{value:q(t).agent.restart_drain_timeout,min:10,max:300,step:10,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&a({restart_drain_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),l(Q,{label:q(r)(`settings.agent.toolEnforcement`),hint:q(r)(`settings.agent.toolEnforcementHint`)},{default:I(()=>[l(q(v),{value:q(t).agent.tool_use_enforcement||`auto`,options:[{label:q(r)(`settings.agent.auto`),value:`auto`},{label:q(r)(`settings.agent.always`),value:`always`},{label:q(r)(`settings.agent.never`),value:`never`}],size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>a({tool_use_enforcement:e}),"show-tooltip":!0},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-e6b6033d`]]),Je={class:`settings-section`},Ye=z(R({__name:`MemorySettings`,setup(e){let t=B(),n=T(),{t:r}=g();async function a(e){try{await t.saveSection(`memory`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(G(),F(`section`,Je,[l(Q,{label:q(r)(`settings.memory.enabled`),hint:q(r)(`settings.memory.enabledHint`)},{default:I(()=>[l(q(o),{value:q(t).memory.memory_enabled,"onUpdate:value":n[0]||=e=>a({memory_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),l(Q,{label:q(r)(`settings.memory.userProfile`),hint:q(r)(`settings.memory.userProfileHint`)},{default:I(()=>[l(q(o),{value:q(t).memory.user_profile_enabled,"onUpdate:value":n[1]||=e=>a({user_profile_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),l(Q,{label:q(r)(`settings.memory.charLimit`),hint:q(r)(`settings.memory.charLimitHint`)},{default:I(()=>[l(q(i),{value:q(t).memory.memory_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&a({memory_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),l(Q,{label:q(r)(`settings.memory.userCharLimit`),hint:q(r)(`settings.memory.userCharLimitHint`)},{default:I(()=>[l(q(i),{value:q(t).memory.user_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>e!=null&&a({user_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0c8e2aa7`]]),Xe={class:`workspace-settings`},Ze={key:0,class:`workspace-list`},Qe={class:`workspace-info`},$e={class:`workspace-name`},et=[`title`],tt={key:1,class:`workspace-form`},nt={class:`form-row`},rt={class:`form-row`},it=z(R({__name:`WorkspaceSettings`,setup(e){let{t}=g(),n=T(),r=J([]),i=J(!1),o=J(!1),c=J(``),u=J(``),f=J(null);async function p(){i.value=!0;try{r.value=await we()}finally{i.value=!1}}ae(p);function h(){c.value=``,u.value=``,o.value=!1,f.value=null}async function _(){let e=c.value.trim(),i=u.value.trim();if(!(!e||!i))try{if(f.value){let a=await Se(f.value,{name:e,path:i}),o=r.value.findIndex(e=>e.id===f.value);o>=0&&(r.value[o]=a),n.success(t(`common.saved`))}else{let a=await Te(e,i);r.value.push(a),n.success(t(`common.saved`))}h()}catch(e){let r=e?.message||``;r.includes(`409`)||r.includes(`already exists`)?n.error(t(`settings.workspace.nameExists`)):r.includes(`400`)||r.includes(`does not exist`)?n.error(t(`settings.workspace.pathNotExists`)):n.error(t(`common.saveFailed`))}}function v(e){f.value=e.id,c.value=e.name,u.value=e.path,o.value=!0}async function y(e){await Ce(e)?(r.value=r.value.filter(t=>t.id!==e),n.success(t(`common.saved`))):n.error(t(`common.deleteFailed`))}return(e,n)=>(G(),F(`section`,Xe,[o.value?(G(),F(`div`,tt,[W(`div`,nt,[W(`label`,null,m(q(t)(`settings.workspace.name`)),1),l(q(N),{value:c.value,"onUpdate:value":n[1]||=e=>c.value=e,size:`small`,placeholder:q(t)(`settings.workspace.namePlaceholder`),onKeydown:d(_,[`enter`])},null,8,[`value`,`placeholder`])]),W(`div`,rt,[W(`label`,null,m(q(t)(`settings.workspace.path`)),1),l(q(N),{value:u.value,"onUpdate:value":n[2]||=e=>u.value=e,size:`small`,placeholder:q(t)(`settings.workspace.pathPlaceholder`),onKeydown:d(_,[`enter`])},null,8,[`value`,`placeholder`])]),l(q(a),{size:`small`},{default:I(()=>[l(q(C),{size:`small`,type:`primary`,disabled:!c.value.trim()||!u.value.trim(),onClick:_},{default:I(()=>[D(m(f.value?q(t)(`common.update`):q(t)(`common.create`)),1)]),_:1},8,[`disabled`]),l(q(C),{size:`small`,onClick:h},{default:I(()=>[D(m(q(t)(`common.cancel`)),1)]),_:1})]),_:1})])):(G(),F(`div`,Ze,[r.value.length===0&&!i.value?(G(),x(q(P),{key:0,description:q(t)(`settings.workspace.empty`)},null,8,[`description`])):ee(``,!0),(G(!0),F(M,null,se(r.value,e=>(G(),F(`div`,{key:e.id,class:`workspace-item`},[W(`div`,Qe,[W(`span`,$e,m(e.name),1),W(`span`,{class:`workspace-path`,title:e.path},m(e.path),9,et)]),l(q(a),{size:`small`},{default:I(()=>[l(q(C),{size:`tiny`,quaternary:``,onClick:t=>v(e)},{default:I(()=>[D(m(q(t)(`common.edit`)),1)]),_:1},8,[`onClick`]),l(q(s),{"positive-text":q(t)(`common.confirm`),"negative-text":q(t)(`common.cancel`),onPositiveClick:t=>y(e.id)},{trigger:I(()=>[l(q(C),{size:`tiny`,quaternary:``,type:`error`},{default:I(()=>[D(m(q(t)(`common.delete`)),1)]),_:1})]),default:I(()=>[D(` `+m(q(t)(`settings.workspace.deleteConfirm`)),1)]),_:1},8,[`positive-text`,`negative-text`,`onPositiveClick`])]),_:2},1024)]))),128)),l(q(C),{class:`add-btn`,dashed:``,type:`primary`,size:`small`,onClick:n[0]||=e=>{o.value=!0,f.value=null}},{default:I(()=>[D(` + `+m(q(t)(`settings.workspace.add`)),1)]),_:1})]))]))}}),[[`__scopeId`,`data-v-b65db1e5`]]),at={class:`settings-view`},ot={class:`page-header`},st={class:`header-title`},ct={class:`settings-content`},lt=z(R({__name:`SettingsView`,setup(e){let t=B(),{t:n}=g();return ae(()=>{t.fetchSettings()}),(e,r)=>(G(),F(`div`,at,[W(`header`,ot,[W(`h2`,st,m(q(n)(`settings.title`)),1)]),W(`div`,ct,[l(q(te),{show:q(t).loading||q(t).saving,size:`large`,description:q(n)(`common.loading`)},{default:I(()=>[l(q(ze),{type:`line`,animated:``},{default:I(()=>[l(q($),{name:`display`,tab:q(n)(`settings.tabs.display`)},{default:I(()=>[l(Ge)]),_:1},8,[`tab`]),l(q($),{name:`agent`,tab:q(n)(`settings.tabs.agent`)},{default:I(()=>[l(qe)]),_:1},8,[`tab`]),l(q($),{name:`memory`,tab:q(n)(`settings.tabs.memory`)},{default:I(()=>[l(Ye)]),_:1},8,[`tab`]),l(q($),{name:`workspace`,tab:q(n)(`settings.tabs.workspace`)},{default:I(()=>[l(it)]),_:1},8,[`tab`])]),_:1})]),_:1},8,[`show`,`description`])])]))}}),[[`__scopeId`,`data-v-4e6130f6`]]);export{lt as default};