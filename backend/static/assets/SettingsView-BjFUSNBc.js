import{S as e}from"./_baseFor-DyDN1Ubb.js";import{n as t,t as n}from"./now-Bl8jkATz.js";import{t as r}from"./Add-BJBRxz25.js";import{t as i}from"./InputNumber-C5BfJpoJ.js";import{t as a}from"./Space-CGdSW7Om.js";import{t as o}from"./Switch-DRMrDDAU.js";import{t as s}from"./Popconfirm-BCmIIBjG.js";import{$r as c,An as l,Cn as u,Cr as d,Dr as f,Ei as p,En as m,Er as h,F as g,H as _,Hn as v,Mn as y,O as b,Oi as x,Qr as S,R as C,Rn as w,Si as T,Sr as E,Ti as D,Tn as O,Tr as k,Un as A,Ur as j,Vn as M,Vr as N,Wr as P,Xr as F,Yr as ee,Z as te,Zr as I,_ as ne,ar as re,bi as ie,ci as ae,ei as L,f as R,fi as oe,gi as se,gr as ce,gt as z,hi as le,i as B,ii as V,ir as ue,ji as H,jr as U,kn as de,li as fe,mi as W,ni as G,nr as pe,oi as K,qr as me,ri as q,si as J,st as he,tr as ge,vn as _e,vr as Y,vt as ve,wr as X,x as ye,xi as Z,yi as be,yn as xe}from"./index-DD08L3rh.js";import{t as Q}from"./SettingRow-BPj0Ay9f.js";import{i as Se,n as Ce,r as we,t as Te}from"./workspaces-DKrBhchJ.js";var Ee=M(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[M(`&::-webkit-scrollbar`,{width:0,height:0})]),De=V({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=D(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=A();return Ee.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:v,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return K(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Oe=`Expected a function`,ke=Math.max,Ae=Math.min;function je(r,i,a){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof r!=`function`)throw TypeError(Oe);i=t(i)||0,e(a)&&(p=!!a.leading,m=`maxWait`in a,c=m?ke(t(a.maxWait)||0,i):c,h=`trailing`in a?!!a.trailing:h);function g(e){var t=o,n=s;return o=s=void 0,f=e,l=r.apply(n,t),l}function _(e){return f=e,u=setTimeout(b,i),p?g(e):l}function v(e){var t=e-d,n=e-f,r=i-t;return m?Ae(r,c-n):r}function y(e){var t=e-d,n=e-f;return d===void 0||t>=i||t<0||m&&n>=c}function b(){var e=n();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function C(){return u===void 0?l:x(n())}function w(){var e=n(),t=y(e);if(o=arguments,s=this,d=e,t){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,i),g(d)}return u===void 0&&(u=setTimeout(b,i)),l}return w.cancel=S,w.flush=C,w}var Me=`Expected a function`;function Ne(t,n,r){var i=!0,a=!0;if(typeof t!=`function`)throw TypeError(Me);return e(r)&&(i=`leading`in r?!!r.leading:i,a=`trailing`in r?!!r.trailing:a),je(t,n,{leading:i,maxWait:n,trailing:a})}var Pe=ge(`n-tabs`),Fe={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},$=V({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:Fe,slots:Object,setup(e){let t=J(Pe,null);return t||y(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return K(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Ie=V({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},m(Fe,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=J(Pe);return{trigger:d,mergedClosable:F(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:i,label:a,tab:o,value:s,mergedClosable:c,trigger:l,$slots:{default:u}}=this,d=a??o;return K(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?K(`div`,{class:`${t}-tabs-tab-pad`}):null,K(`div`,Object.assign({key:n,"data-name":n,"data-disabled":i?!0:void 0},ae({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,i&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),K(`span`,{class:`${t}-tabs-tab__label`},e?K(me,null,K(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),K(z,{clsPrefix:t},{default:()=>K(r,null)})):u?u():typeof d==`object`?d:O(d??n)),c&&this.type===`card`?K(he,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:i}):null))}}),Le=d(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[k(`segment-type`,[d(`tabs-rail`,[E(`&.transition-disabled`,[d(`tabs-capsule`,`
 transition: none;
 `)])])]),k(`top`,[d(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),k(`left`,[d(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),k(`left, right`,`
 flex-direction: row;
 `,[d(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),d(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),k(`right`,`
 flex-direction: row-reverse;
 `,[d(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),d(`tabs-bar`,`
 left: 0;
 `)]),k(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[d(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),d(`tabs-bar`,`
 top: 0;
 `)]),d(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[d(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),d(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[d(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[k(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),E(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),k(`flex`,[d(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[d(`tabs-wrapper`,`
 width: 100%;
 `,[d(`tabs-tab`,`
 margin-right: 0;
 `)])])]),d(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[X(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),X(`prefix`,`padding-right: 16px;`),X(`suffix`,`padding-left: 16px;`)]),k(`top, bottom`,[E(`>`,[d(`tabs-nav`,[d(`tabs-nav-scroll-wrapper`,[E(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),E(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),k(`shadow-start`,[E(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),k(`shadow-end`,[E(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),k(`left, right`,[d(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),E(`>`,[d(`tabs-nav`,[d(`tabs-nav-scroll-wrapper`,[E(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),E(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),k(`shadow-start`,[E(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),k(`shadow-end`,[E(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),d(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[d(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[E(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),E(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),d(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),d(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),d(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),d(`tabs-tab`,`
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
 `,[k(`disabled`,{cursor:`not-allowed`}),X(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),X(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),d(`tabs-bar`,`
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
 `,[E(`&.transition-disabled`,`
 transition: none;
 `),k(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),d(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),d(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[E(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),E(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),E(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),E(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),E(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),d(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),k(`line-type, bar-type`,[d(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[E(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),k(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),k(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),d(`tabs-nav`,[k(`line-type`,[k(`top`,[X(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),d(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),d(`tabs-bar`,`
 bottom: -1px;
 `)]),k(`left`,[X(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),d(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),d(`tabs-bar`,`
 right: -1px;
 `)]),k(`right`,[X(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),d(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),d(`tabs-bar`,`
 left: -1px;
 `)]),k(`bottom`,[X(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),d(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),d(`tabs-bar`,`
 top: -1px;
 `)]),X(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),d(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),d(`tabs-bar`,`
 border-radius: 0;
 `)]),k(`card-type`,[X(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),d(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),d(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),d(`tabs-tab`,`
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
 `,[k(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[X(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),h(`disabled`,[E(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),k(`closable`,`padding-right: 8px;`),k(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),k(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),k(`left, right`,`
 flex-direction: column; 
 `,[X(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),d(`tabs-wrapper`,`
 flex-direction: column;
 `),d(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[d(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),k(`top`,[k(`card-type`,[d(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),X(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),d(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[k(`active`,`
 border-bottom: 1px solid #0000;
 `)]),d(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),d(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),k(`left`,[k(`card-type`,[d(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),X(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),d(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[k(`active`,`
 border-right: 1px solid #0000;
 `)]),d(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),d(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),k(`right`,[k(`card-type`,[d(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),X(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),d(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[k(`active`,`
 border-left: 1px solid #0000;
 `)]),d(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),d(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),k(`bottom`,[k(`card-type`,[d(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),X(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),d(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[k(`active`,`
 border-top: 1px solid #0000;
 `)]),d(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),d(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Re=Ne,ze=V({name:`Tabs`,props:Object.assign(Object.assign({},ve.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=xe(e),a=ve(`Tabs`,`-tabs`,Le,ye,e,n),o=D(null),s=D(null),c=D(null),u=D(null),d=D(null),m=D(null),h=D(!0),g=D(!0),_=pe(e,[`labelSize`,`size`]),v=F(()=>_.value?_.value:i?.value?.Tabs?.size||`medium`),y=pe(e,[`activeName`,`value`]),b=D(y.value??e.defaultValue??(t.default?de(t.default())[0]?.props?.name:null)),x=ue(y,b),S={id:0},C=F(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});be(x,()=>{S.id=0,k(),A()});function w(){let{value:e}=x;return e===null?null:o.value?.querySelector(`[data-name="${e}"]`)}function T(t){if(e.type===`card`)return;let{value:r}=s;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(O([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(O([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function E(){if(e.type===`card`)return;let{value:t}=s;t&&(t.style.opacity=`0`)}function O(e){let{value:t}=s;if(t)for(let n of e)t.style[n]=``}function k(){if(e.type===`card`)return;let t=w();t?T(t):E()}function A(){let e=d.value?.$el;if(!e)return;let t=w();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let j=D(null),M=0,N=null;function P(e){let t=j.value;if(t){M=e.getBoundingClientRect().height;let n=`${M}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};N?(r(),N(),N=null):N=r}}function ee(e){let t=j.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(M,n)}px`};N?(N(),N=null,r()):N=r}}function te(){let t=j.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let I={value:[]},ne=D(`next`);function ae(e){let t=x.value,n=`next`;for(let r of I.value){if(r===t)break;if(r===e){n=`prev`;break}}ne.value=n,L(e)}function L(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&l(n,t),r&&l(r,t),i&&l(i,t),b.value=t}function R(t){let{onClose:n}=e;n&&l(n,t)}let se=!0;function z(){let{value:e}=s;if(!e)return;se||=!1;let t=`transition-disabled`;e.classList.add(t),k(),e.classList.remove(t)}let B=D(null);function V({transitionDisabled:e}){let t=o.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=w();n&&B.value&&(B.value.style.width=`${n.offsetWidth}px`,B.value.style.height=`${n.offsetHeight}px`,B.value.style.transform=`translateX(${n.offsetLeft-ce(getComputedStyle(t).paddingLeft)}px)`,e&&B.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}be([x],()=>{e.type===`segment`&&fe(()=>{V({transitionDisabled:!1})})}),oe(()=>{e.type===`segment`&&V({transitionDisabled:!0})});let H=0;function U(t){if(t.contentRect.width===0&&t.contentRect.height===0||H===t.contentRect.width)return;H=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(se||e.justifyContent?.startsWith(`space`))&&z(),n!==`segment`){let{placement:t}=e;J((t===`top`||t===`bottom`?d.value?.$el:m.value)||null)}}let W=Re(U,64);be([()=>e.justifyContent,()=>e.size],()=>{fe(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&z()})});let G=D(!1);function K(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!G.value)s===`top`||s===`bottom`?a<r&&(G.value=!0):o<i&&(G.value=!0);else{let{value:e}=u;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(G.value=!1):o-i>e.$el.offsetHeight&&(G.value=!1)}J(d.value?.$el||null)}let me=Re(K,64);function q(){let{onAdd:t}=e;t&&t(),fe(()=>{let e=w(),{value:t}=d;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function J(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;h.value=e<=0,g.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;h.value=e<=0,g.value=e+r>=n}}let he=Re(e=>{J(e.target)},64);le(Pe,{triggerRef:p(e,`trigger`),tabStyleRef:p(e,`tabStyle`),tabClassRef:p(e,`tabClass`),addTabStyleRef:p(e,`addTabStyle`),addTabClassRef:p(e,`addTabClass`),paneClassRef:p(e,`paneClass`),paneStyleRef:p(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:p(e,`type`),closableRef:p(e,`closable`),valueRef:x,tabChangeIdRef:S,onBeforeLeaveRef:p(e,`onBeforeLeave`),activateTab:ae,handleClose:R,handleAdd:q}),re(()=>{k(),A()}),ie(()=>{let{value:e}=c;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;h.value?e.classList.remove(r):e.classList.add(r),g.value?e.classList.remove(i):e.classList.add(i)});let ge={syncBarPosition:()=>{k()}},X=()=>{V({transitionDisabled:!0})},Z=F(()=>{let{value:t}=v,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:o,closeIconColorHover:s,closeIconColorPressed:c,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:p,tabBorderRadius:m,tabFontWeightActive:h,colorSegment:g,fontWeightStrong:_,tabColorSegment:y,closeSize:b,closeIconSize:x,closeColorHover:S,closeColorPressed:C,closeBorderRadius:w,[f(`panePadding`,t)]:T,[f(`tabPadding`,r)]:E,[f(`tabPaddingVertical`,r)]:D,[f(`tabGap`,r)]:O,[f(`tabGap`,`${r}Vertical`)]:k,[f(`tabTextColor`,n)]:A,[f(`tabTextColorActive`,n)]:j,[f(`tabTextColorHover`,n)]:M,[f(`tabTextColorDisabled`,n)]:N,[f(`tabFontSize`,t)]:P},common:{cubicBezierEaseInOut:F}}=a.value;return{"--n-bezier":F,"--n-color-segment":g,"--n-bar-color":i,"--n-tab-font-size":P,"--n-tab-text-color":A,"--n-tab-text-color-active":j,"--n-tab-text-color-disabled":N,"--n-tab-text-color-hover":M,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":m,"--n-close-size":b,"--n-close-icon-size":x,"--n-close-color-hover":S,"--n-close-color-pressed":C,"--n-close-border-radius":w,"--n-close-icon-color":o,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":c,"--n-tab-color":l,"--n-tab-font-weight":p,"--n-tab-font-weight-active":h,"--n-tab-padding":E,"--n-tab-padding-vertical":D,"--n-tab-gap":O,"--n-tab-gap-vertical":k,"--n-pane-padding-left":Y(T,`left`),"--n-pane-padding-right":Y(T,`right`),"--n-pane-padding-top":Y(T,`top`),"--n-pane-padding-bottom":Y(T,`bottom`),"--n-font-weight-strong":_,"--n-tab-color-segment":y}}),Q=r?_e(`tabs`,F(()=>`${v.value[0]}${e.type[0]}`),Z,e):void 0;return Object.assign({mergedClsPrefix:n,mergedValue:x,renderedNames:new Set,segmentCapsuleElRef:B,tabsPaneWrapperRef:j,tabsElRef:o,barElRef:s,addTabInstRef:u,xScrollInstRef:d,scrollWrapperElRef:c,addTabFixed:G,tabWrapperStyle:C,handleNavResize:W,mergedSize:v,handleScroll:he,handleTabsResize:me,cssVars:r?void 0:Z,themeClass:Q?.themeClass,animationDirection:ne,renderNameListRef:I,yScrollElRef:m,handleSegmentResize:X,onAnimationBeforeLeave:P,onAnimationEnter:ee,onAnimationAfterEnter:te,onRender:Q?.onRender},ge)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,$slots:{default:d,prefix:f,suffix:p}}=this;s?.();let m=d?de(d()).filter(e=>e.type.__TAB_PANE__===!0):[],h=d?de(d()).filter(e=>e.type.__TAB__===!0):[],g=!h.length,_=t===`card`,v=t===`segment`,y=!_&&!v&&this.justifyContent;o.value=[];let b=()=>{let t=K(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},y?null:K(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),g?m.map((e,t)=>(o.value.push(e.props.name),Ue(K(Ie,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!y||y===`center`||y===`start`||y===`end`)}),e.children?{default:e.children.tab}:void 0)))):h.map((e,t)=>(o.value.push(e.props.name),Ue(t!==0&&!y?He(e):e))),!r&&i&&_?Ve(i,(g?m.length:h.length)!==0):null,y?null:K(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return K(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},_&&i?K(w,{onResize:this.handleTabsResize},{default:()=>t}):t,_?K(`div`,{class:`${e}-tabs-pad`}):null,_?null:K(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},x=v?`top`:n;return K(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,y&&`${e}-tabs--flex`,`${e}-tabs--${x}`],style:this.cssVars},K(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${x}`,`${e}-tabs-nav`]},u(f,t=>t&&K(`div`,{class:`${e}-tabs-nav__prefix`},t)),v?K(w,{onResize:this.handleSegmentResize},{default:()=>K(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},K(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},K(`div`,{class:`${e}-tabs-wrapper`},K(`div`,{class:`${e}-tabs-tab`}))),g?m.map((e,t)=>(o.value.push(e.props.name),K(Ie,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):h.map((e,t)=>(o.value.push(e.props.name),t===0?e:He(e))))}):K(w,{onResize:this.handleNavResize},{default:()=>K(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(x)?K(De,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:b}):K(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},b()))}),r&&i&&_?Ve(i,!0):null,u(p,t=>t&&K(`div`,{class:`${e}-tabs-nav__suffix`},t))),g&&(this.animated&&(x===`top`||x===`bottom`)?K(`div`,{ref:`tabsPaneWrapperRef`,style:l,class:[`${e}-tabs-pane-wrapper`,c]},Be(m,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Be(m,this.mergedValue,this.renderedNames)))}});function Be(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?T(e,[[j,c]]):e)}}),o?K(N,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function Ve(e,t){return K(Ie,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function He(e){let t=ee(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Ue(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var We={class:`settings-section`},Ge=R(V({__name:`DisplaySettings`,setup(e){let t=B(),n=b(),{t:r}=U();async function i(e){try{await t.saveSection(`display`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(W(),L(`section`,We,[q(Q,{label:x(r)(`settings.display.streaming`),hint:x(r)(`settings.display.streamingHint`)},{default:Z(()=>[q(x(o),{value:x(t).display.streaming,"onUpdate:value":n[0]||=e=>i({streaming:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),q(Q,{label:x(r)(`settings.display.compact`),hint:x(r)(`settings.display.compactHint`)},{default:Z(()=>[q(x(o),{value:x(t).display.compact,"onUpdate:value":n[1]||=e=>i({compact:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),q(Q,{label:x(r)(`settings.display.showReasoning`),hint:x(r)(`settings.display.showReasoningHint`)},{default:Z(()=>[q(x(o),{value:x(t).display.show_reasoning,"onUpdate:value":n[2]||=e=>i({show_reasoning:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),q(Q,{label:x(r)(`settings.display.showCost`),hint:x(r)(`settings.display.showCostHint`)},{default:Z(()=>[q(x(o),{value:x(t).display.show_cost,"onUpdate:value":n[3]||=e=>i({show_cost:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),q(Q,{label:x(r)(`settings.display.bellOnComplete`),hint:x(r)(`settings.display.bellOnCompleteHint`)},{default:Z(()=>[q(x(o),{value:x(t).display.bell_on_complete,"onUpdate:value":n[4]||=e=>i({bell_on_complete:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),q(Q,{label:x(r)(`settings.display.busyInputMode`),hint:x(r)(`settings.display.busyInputModeHint`)},{default:Z(()=>[q(x(o),{value:x(t).display.busy_input_mode===`interrupt`,"onUpdate:value":n[5]||=e=>i({busy_input_mode:e?`interrupt`:`off`})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0d401d9f`]]),Ke={class:`settings-section`},qe=R(V({__name:`AgentSettings`,setup(e){let t=B(),n=b(),{t:r}=U();async function a(e){try{await t.saveSection(`agent`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(W(),L(`section`,Ke,[q(Q,{label:x(r)(`settings.agent.maxTurns`),hint:x(r)(`settings.agent.maxTurnsHint`)},{default:Z(()=>[q(x(i),{value:x(t).agent.max_turns,min:1,max:200,step:5,size:`small`,class:`input-sm`,"onUpdate:value":n[0]||=e=>e!=null&&a({max_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),q(Q,{label:x(r)(`settings.agent.gatewayTimeout`),hint:x(r)(`settings.agent.gatewayTimeoutHint`)},{default:Z(()=>[q(x(i),{value:x(t).agent.gateway_timeout,min:60,max:7200,step:60,size:`small`,class:`input-sm`,"onUpdate:value":n[1]||=e=>e!=null&&a({gateway_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),q(Q,{label:x(r)(`settings.agent.restartDrainTimeout`),hint:x(r)(`settings.agent.restartDrainTimeoutHint`)},{default:Z(()=>[q(x(i),{value:x(t).agent.restart_drain_timeout,min:10,max:300,step:10,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&a({restart_drain_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),q(Q,{label:x(r)(`settings.agent.toolEnforcement`),hint:x(r)(`settings.agent.toolEnforcementHint`)},{default:Z(()=>[q(x(g),{value:x(t).agent.tool_use_enforcement||`auto`,options:[{label:x(r)(`settings.agent.auto`),value:`auto`},{label:x(r)(`settings.agent.always`),value:`always`},{label:x(r)(`settings.agent.never`),value:`never`}],size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>a({tool_use_enforcement:e}),"show-tooltip":!0},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-e6b6033d`]]),Je={class:`settings-section`},Ye=R(V({__name:`MemorySettings`,setup(e){let t=B(),n=b(),{t:r}=U();async function a(e){try{await t.saveSection(`memory`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(W(),L(`section`,Je,[q(Q,{label:x(r)(`settings.memory.enabled`),hint:x(r)(`settings.memory.enabledHint`)},{default:Z(()=>[q(x(o),{value:x(t).memory.memory_enabled,"onUpdate:value":n[0]||=e=>a({memory_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),q(Q,{label:x(r)(`settings.memory.userProfile`),hint:x(r)(`settings.memory.userProfileHint`)},{default:Z(()=>[q(x(o),{value:x(t).memory.user_profile_enabled,"onUpdate:value":n[1]||=e=>a({user_profile_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),q(Q,{label:x(r)(`settings.memory.charLimit`),hint:x(r)(`settings.memory.charLimitHint`)},{default:Z(()=>[q(x(i),{value:x(t).memory.memory_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&a({memory_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),q(Q,{label:x(r)(`settings.memory.userCharLimit`),hint:x(r)(`settings.memory.userCharLimitHint`)},{default:Z(()=>[q(x(i),{value:x(t).memory.user_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>e!=null&&a({user_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0c8e2aa7`]]),Xe={class:`workspace-settings`},Ze={key:0,class:`workspace-list`},Qe={class:`workspace-info`},$e={class:`workspace-name`},et=[`title`],tt={key:1,class:`workspace-form`},nt={class:`form-row`},rt={class:`form-row`},it=R(V({__name:`WorkspaceSettings`,setup(e){let{t}=U(),n=b(),r=D([]),i=D(!1),o=D(!1),l=D(``),u=D(``),d=D(null);async function f(){i.value=!0;try{r.value=await we()}finally{i.value=!1}}oe(f);function p(){l.value=``,u.value=``,o.value=!1,d.value=null}async function m(){let e=l.value.trim(),i=u.value.trim();if(!(!e||!i))try{if(d.value){let a=await Se(d.value,{name:e,path:i}),o=r.value.findIndex(e=>e.id===d.value);o>=0&&(r.value[o]=a),n.success(t(`common.saved`))}else{let a=await Te(e,i);r.value.push(a),n.success(t(`common.saved`))}p()}catch(e){let r=e?.message||``;r.includes(`409`)||r.includes(`already exists`)?n.error(t(`settings.workspace.nameExists`)):r.includes(`400`)||r.includes(`does not exist`)?n.error(t(`settings.workspace.pathNotExists`)):n.error(t(`common.saveFailed`))}}function h(e){d.value=e.id,l.value=e.name,u.value=e.path,o.value=!0}async function g(e){await Ce(e)?(r.value=r.value.filter(t=>t.id!==e),n.success(t(`common.saved`))):n.error(t(`common.deleteFailed`))}return(e,n)=>(W(),L(`section`,Xe,[o.value?(W(),L(`div`,tt,[I(`div`,nt,[I(`label`,null,H(x(t)(`settings.workspace.name`)),1),q(x(_),{value:l.value,"onUpdate:value":n[1]||=e=>l.value=e,size:`small`,placeholder:x(t)(`settings.workspace.namePlaceholder`),onKeydown:P(m,[`enter`])},null,8,[`value`,`placeholder`])]),I(`div`,rt,[I(`label`,null,H(x(t)(`settings.workspace.path`)),1),q(x(_),{value:u.value,"onUpdate:value":n[2]||=e=>u.value=e,size:`small`,placeholder:x(t)(`settings.workspace.pathPlaceholder`),onKeydown:P(m,[`enter`])},null,8,[`value`,`placeholder`])]),q(x(a),{size:`small`},{default:Z(()=>[q(x(C),{size:`small`,type:`primary`,disabled:!l.value.trim()||!u.value.trim(),onClick:m},{default:Z(()=>[G(H(d.value?x(t)(`common.update`):x(t)(`common.create`)),1)]),_:1},8,[`disabled`]),q(x(C),{size:`small`,onClick:p},{default:Z(()=>[G(H(x(t)(`common.cancel`)),1)]),_:1})]),_:1})])):(W(),L(`div`,Ze,[r.value.length===0&&!i.value?(W(),S(x(te),{key:0,description:x(t)(`settings.workspace.empty`)},null,8,[`description`])):c(``,!0),(W(!0),L(me,null,se(r.value,e=>(W(),L(`div`,{key:e.id,class:`workspace-item`},[I(`div`,Qe,[I(`span`,$e,H(e.name),1),I(`span`,{class:`workspace-path`,title:e.path},H(e.path),9,et)]),q(x(a),{size:`small`},{default:Z(()=>[q(x(C),{size:`tiny`,quaternary:``,onClick:t=>h(e)},{default:Z(()=>[G(H(x(t)(`common.edit`)),1)]),_:1},8,[`onClick`]),q(x(s),{"positive-text":x(t)(`common.confirm`),"negative-text":x(t)(`common.cancel`),onPositiveClick:t=>g(e.id)},{trigger:Z(()=>[q(x(C),{size:`tiny`,quaternary:``,type:`error`},{default:Z(()=>[G(H(x(t)(`common.delete`)),1)]),_:1})]),default:Z(()=>[G(` `+H(x(t)(`settings.workspace.deleteConfirm`)),1)]),_:1},8,[`positive-text`,`negative-text`,`onPositiveClick`])]),_:2},1024)]))),128)),q(x(C),{class:`add-btn`,dashed:``,type:`primary`,size:`small`,onClick:n[0]||=e=>{o.value=!0,d.value=null}},{default:Z(()=>[G(` + `+H(x(t)(`settings.workspace.add`)),1)]),_:1})]))]))}}),[[`__scopeId`,`data-v-b65db1e5`]]),at={class:`settings-view`},ot={class:`page-header`},st={class:`header-title`},ct={class:`settings-content`},lt=R(V({__name:`SettingsView`,setup(e){let t=B(),{t:n}=U();return oe(()=>{t.fetchSettings()}),(e,r)=>(W(),L(`div`,at,[I(`header`,ot,[I(`h2`,st,H(x(n)(`settings.title`)),1)]),I(`div`,ct,[q(x(ne),{show:x(t).loading||x(t).saving,size:`large`,description:x(n)(`common.loading`)},{default:Z(()=>[q(x(ze),{type:`line`,animated:``},{default:Z(()=>[q(x($),{name:`display`,tab:x(n)(`settings.tabs.display`)},{default:Z(()=>[q(Ge)]),_:1},8,[`tab`]),q(x($),{name:`agent`,tab:x(n)(`settings.tabs.agent`)},{default:Z(()=>[q(qe)]),_:1},8,[`tab`]),q(x($),{name:`memory`,tab:x(n)(`settings.tabs.memory`)},{default:Z(()=>[q(Ye)]),_:1},8,[`tab`]),q(x($),{name:`workspace`,tab:x(n)(`settings.tabs.workspace`)},{default:Z(()=>[q(it)]),_:1},8,[`tab`])]),_:1})]),_:1},8,[`show`,`description`])])]))}}),[[`__scopeId`,`data-v-4e6130f6`]]);export{lt as default};