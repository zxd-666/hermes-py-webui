import{S as e}from"./_baseFor-DyDN1Ubb.js";import{n as t,t as n}from"./now-KVVq02tR.js";import{t as r}from"./Add-DnBo8rSS.js";import{t as i}from"./InputNumber-D6ISoac2.js";import{t as a}from"./Space-Dfzq08fK.js";import{t as o}from"./Switch-BQw5O8qn.js";import{t as s}from"./Popconfirm-BTHR1vfO.js";import{$r as c,An as l,Ci as u,Cn as d,Cr as f,Di as p,Dr as m,Ei as h,En as g,Er as _,F as v,Gr as y,H as b,Hn as x,Hr as S,Jr as C,Mi as w,Mn as T,O as E,Qr as D,R as O,Rn as k,Si as A,Sr as j,Tn as M,Tr as N,Un as ee,Vn as P,Wr as te,Xr as ne,Z as re,Zr as F,_ as ie,_i as ae,ai as I,ar as oe,bi as se,ci as L,ei as ce,f as R,gi as le,gr as ue,gt as z,hi as B,i as V,ii as H,ir as de,jr as U,ki as W,kn as fe,li as pe,nr as me,pi as G,ri as K,si as q,st as he,ti as J,tr as ge,ui as _e,vn as ve,vr as Y,vt as ye,wr as X,x as be,xi as xe,yn as Se}from"./index-BRrAfv8l.js";import{t as Z}from"./SettingRow-DGFlA-p_.js";import{i as Ce,n as we,r as Te,t as Ee}from"./workspaces-L2HTVjtp.js";var De=P(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[P(`&::-webkit-scrollbar`,{width:0,height:0})]),Oe=I({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=h(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=ee();return De.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:x,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return q(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),ke=`Expected a function`,Ae=Math.max,je=Math.min;function Me(r,i,a){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof r!=`function`)throw TypeError(ke);i=t(i)||0,e(a)&&(p=!!a.leading,m=`maxWait`in a,c=m?Ae(t(a.maxWait)||0,i):c,h=`trailing`in a?!!a.trailing:h);function g(e){var t=o,n=s;return o=s=void 0,f=e,l=r.apply(n,t),l}function _(e){return f=e,u=setTimeout(b,i),p?g(e):l}function v(e){var t=e-d,n=e-f,r=i-t;return m?je(r,c-n):r}function y(e){var t=e-d,n=e-f;return d===void 0||t>=i||t<0||m&&n>=c}function b(){var e=n();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function C(){return u===void 0?l:x(n())}function w(){var e=n(),t=y(e);if(o=arguments,s=this,d=e,t){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,i),g(d)}return u===void 0&&(u=setTimeout(b,i)),l}return w.cancel=S,w.flush=C,w}var Ne=`Expected a function`;function Pe(t,n,r){var i=!0,a=!0;if(typeof t!=`function`)throw TypeError(Ne);return e(r)&&(i=`leading`in r?!!r.leading:i,a=`trailing`in r?!!r.trailing:a),Me(t,n,{leading:i,maxWait:n,trailing:a})}var Fe=ge(`n-tabs`),Ie={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Q=I({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:Ie,slots:Object,setup(e){let t=L(Fe,null);return t||T(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return q(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Le=I({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},g(Ie,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=L(Fe);return{trigger:d,mergedClosable:F(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:i,label:a,tab:o,value:s,mergedClosable:c,trigger:l,$slots:{default:u}}=this,d=a??o;return q(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?q(`div`,{class:`${t}-tabs-tab-pad`}):null,q(`div`,Object.assign({key:n,"data-name":n,"data-disabled":i?!0:void 0},pe({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,i&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),q(`span`,{class:`${t}-tabs-tab__label`},e?q(C,null,q(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),q(z,{clsPrefix:t},{default:()=>q(r,null)})):u?u():typeof d==`object`?d:M(d??n)),c&&this.type===`card`?q(he,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:i}):null))}}),Re=f(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[N(`segment-type`,[f(`tabs-rail`,[j(`&.transition-disabled`,[f(`tabs-capsule`,`
 transition: none;
 `)])])]),N(`top`,[f(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),N(`left`,[f(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),N(`left, right`,`
 flex-direction: row;
 `,[f(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),f(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),N(`right`,`
 flex-direction: row-reverse;
 `,[f(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),f(`tabs-bar`,`
 left: 0;
 `)]),N(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[f(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),f(`tabs-bar`,`
 top: 0;
 `)]),f(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[f(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),f(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[f(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[N(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),j(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),N(`flex`,[f(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[f(`tabs-wrapper`,`
 width: 100%;
 `,[f(`tabs-tab`,`
 margin-right: 0;
 `)])])]),f(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[X(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),X(`prefix`,`padding-right: 16px;`),X(`suffix`,`padding-left: 16px;`)]),N(`top, bottom`,[j(`>`,[f(`tabs-nav`,[f(`tabs-nav-scroll-wrapper`,[j(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),j(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),N(`shadow-start`,[j(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),N(`shadow-end`,[j(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),N(`left, right`,[f(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),j(`>`,[f(`tabs-nav`,[f(`tabs-nav-scroll-wrapper`,[j(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),j(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),N(`shadow-start`,[j(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),N(`shadow-end`,[j(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),f(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[f(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[j(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),j(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),f(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),f(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),f(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),f(`tabs-tab`,`
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
 `,[N(`disabled`,{cursor:`not-allowed`}),X(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),X(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),f(`tabs-bar`,`
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
 `,[j(`&.transition-disabled`,`
 transition: none;
 `),N(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),f(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),f(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[j(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),j(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),j(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),j(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),j(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),f(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),N(`line-type, bar-type`,[f(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[j(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),N(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),N(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),f(`tabs-nav`,[N(`line-type`,[N(`top`,[X(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),f(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),f(`tabs-bar`,`
 bottom: -1px;
 `)]),N(`left`,[X(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),f(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),f(`tabs-bar`,`
 right: -1px;
 `)]),N(`right`,[X(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),f(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),f(`tabs-bar`,`
 left: -1px;
 `)]),N(`bottom`,[X(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),f(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),f(`tabs-bar`,`
 top: -1px;
 `)]),X(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),f(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),f(`tabs-bar`,`
 border-radius: 0;
 `)]),N(`card-type`,[X(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),f(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),f(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),f(`tabs-tab`,`
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
 `,[N(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[X(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),_(`disabled`,[j(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),N(`closable`,`padding-right: 8px;`),N(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),N(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),N(`left, right`,`
 flex-direction: column; 
 `,[X(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),f(`tabs-wrapper`,`
 flex-direction: column;
 `),f(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[f(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),N(`top`,[N(`card-type`,[f(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),X(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),f(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[N(`active`,`
 border-bottom: 1px solid #0000;
 `)]),f(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),f(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),N(`left`,[N(`card-type`,[f(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),X(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),f(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[N(`active`,`
 border-right: 1px solid #0000;
 `)]),f(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),f(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),N(`right`,[N(`card-type`,[f(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),X(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),f(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[N(`active`,`
 border-left: 1px solid #0000;
 `)]),f(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),f(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),N(`bottom`,[N(`card-type`,[f(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),X(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),f(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[N(`active`,`
 border-top: 1px solid #0000;
 `)]),f(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),f(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),$=Pe,ze=I({name:`Tabs`,props:Object.assign(Object.assign({},ye.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=Se(e),a=ye(`Tabs`,`-tabs`,Re,be,e,n),o=h(null),s=h(null),c=h(null),u=h(null),d=h(null),f=h(null),g=h(!0),_=h(!0),v=me(e,[`labelSize`,`size`]),y=F(()=>v.value?v.value:i?.value?.Tabs?.size||`medium`),b=me(e,[`activeName`,`value`]),x=h(b.value??e.defaultValue??(t.default?fe(t.default())[0]?.props?.name:null)),S=de(b,x),C={id:0},w=F(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});se(S,()=>{C.id=0,k(),A()});function T(){let{value:e}=S;return e===null?null:o.value?.querySelector(`[data-name="${e}"]`)}function E(t){if(e.type===`card`)return;let{value:r}=s;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(O([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(O([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function D(){if(e.type===`card`)return;let{value:t}=s;t&&(t.style.opacity=`0`)}function O(e){let{value:t}=s;if(t)for(let n of e)t.style[n]=``}function k(){if(e.type===`card`)return;let t=T();t?E(t):D()}function A(){let e=d.value?.$el;if(!e)return;let t=T();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let j=h(null),M=0,N=null;function ee(e){let t=j.value;if(t){M=e.getBoundingClientRect().height;let n=`${M}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};N?(r(),N(),N=null):N=r}}function P(e){let t=j.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(M,n)}px`};N?(N(),N=null,r()):N=r}}function te(){let t=j.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let ne={value:[]},re=h(`next`);function ie(e){let t=S.value,n=`next`;for(let r of ne.value){if(r===t)break;if(r===e){n=`prev`;break}}re.value=n,ae(e)}function ae(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&l(n,t),r&&l(r,t),i&&l(i,t),x.value=t}function I(t){let{onClose:n}=e;n&&l(n,t)}let L=!0;function ce(){let{value:e}=s;if(!e)return;L||=!1;let t=`transition-disabled`;e.classList.add(t),k(),e.classList.remove(t)}let R=h(null);function z({transitionDisabled:e}){let t=o.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=T();n&&R.value&&(R.value.style.width=`${n.offsetWidth}px`,R.value.style.height=`${n.offsetHeight}px`,R.value.style.transform=`translateX(${n.offsetLeft-ue(getComputedStyle(t).paddingLeft)}px)`,e&&R.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}se([S],()=>{e.type===`segment`&&_e(()=>{z({transitionDisabled:!1})})}),G(()=>{e.type===`segment`&&z({transitionDisabled:!0})});let B=0;function V(t){if(t.contentRect.width===0&&t.contentRect.height===0||B===t.contentRect.width)return;B=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(L||e.justifyContent?.startsWith(`space`))&&ce(),n!==`segment`){let{placement:t}=e;q((t===`top`||t===`bottom`?d.value?.$el:f.value)||null)}}let H=$(V,64);se([()=>e.justifyContent,()=>e.size],()=>{_e(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&ce()})});let U=h(!1);function W(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!U.value)s===`top`||s===`bottom`?a<r&&(U.value=!0):o<i&&(U.value=!0);else{let{value:e}=u;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(U.value=!1):o-i>e.$el.offsetHeight&&(U.value=!1)}q(d.value?.$el||null)}let pe=$(W,64);function K(){let{onAdd:t}=e;t&&t(),_e(()=>{let e=T(),{value:t}=d;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function q(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;g.value=e<=0,_.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;g.value=e<=0,_.value=e+r>=n}}let he=$(e=>{q(e.target)},64);le(Fe,{triggerRef:p(e,`trigger`),tabStyleRef:p(e,`tabStyle`),tabClassRef:p(e,`tabClass`),addTabStyleRef:p(e,`addTabStyle`),addTabClassRef:p(e,`addTabClass`),paneClassRef:p(e,`paneClass`),paneStyleRef:p(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:p(e,`type`),closableRef:p(e,`closable`),valueRef:S,tabChangeIdRef:C,onBeforeLeaveRef:p(e,`onBeforeLeave`),activateTab:ie,handleClose:I,handleAdd:K}),oe(()=>{k(),A()}),xe(()=>{let{value:e}=c;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;g.value?e.classList.remove(r):e.classList.add(r),_.value?e.classList.remove(i):e.classList.add(i)});let J={syncBarPosition:()=>{k()}},ge=()=>{z({transitionDisabled:!0})},X=F(()=>{let{value:t}=y,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:o,closeIconColorHover:s,closeIconColorPressed:c,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:h,colorSegment:g,fontWeightStrong:_,tabColorSegment:v,closeSize:b,closeIconSize:x,closeColorHover:S,closeColorPressed:C,closeBorderRadius:w,[m(`panePadding`,t)]:T,[m(`tabPadding`,r)]:E,[m(`tabPaddingVertical`,r)]:D,[m(`tabGap`,r)]:O,[m(`tabGap`,`${r}Vertical`)]:k,[m(`tabTextColor`,n)]:A,[m(`tabTextColorActive`,n)]:j,[m(`tabTextColorHover`,n)]:M,[m(`tabTextColorDisabled`,n)]:N,[m(`tabFontSize`,t)]:ee},common:{cubicBezierEaseInOut:P}}=a.value;return{"--n-bezier":P,"--n-color-segment":g,"--n-bar-color":i,"--n-tab-font-size":ee,"--n-tab-text-color":A,"--n-tab-text-color-active":j,"--n-tab-text-color-disabled":N,"--n-tab-text-color-hover":M,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":b,"--n-close-icon-size":x,"--n-close-color-hover":S,"--n-close-color-pressed":C,"--n-close-border-radius":w,"--n-close-icon-color":o,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":c,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":h,"--n-tab-padding":E,"--n-tab-padding-vertical":D,"--n-tab-gap":O,"--n-tab-gap-vertical":k,"--n-pane-padding-left":Y(T,`left`),"--n-pane-padding-right":Y(T,`right`),"--n-pane-padding-top":Y(T,`top`),"--n-pane-padding-bottom":Y(T,`bottom`),"--n-font-weight-strong":_,"--n-tab-color-segment":v}}),Z=r?ve(`tabs`,F(()=>`${y.value[0]}${e.type[0]}`),X,e):void 0;return Object.assign({mergedClsPrefix:n,mergedValue:S,renderedNames:new Set,segmentCapsuleElRef:R,tabsPaneWrapperRef:j,tabsElRef:o,barElRef:s,addTabInstRef:u,xScrollInstRef:d,scrollWrapperElRef:c,addTabFixed:U,tabWrapperStyle:w,handleNavResize:H,mergedSize:y,handleScroll:he,handleTabsResize:pe,cssVars:r?void 0:X,themeClass:Z?.themeClass,animationDirection:re,renderNameListRef:ne,yScrollElRef:f,handleSegmentResize:ge,onAnimationBeforeLeave:ee,onAnimationEnter:P,onAnimationAfterEnter:te,onRender:Z?.onRender},J)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,$slots:{default:u,prefix:f,suffix:p}}=this;s?.();let m=u?fe(u()).filter(e=>e.type.__TAB_PANE__===!0):[],h=u?fe(u()).filter(e=>e.type.__TAB__===!0):[],g=!h.length,_=t===`card`,v=t===`segment`,y=!_&&!v&&this.justifyContent;o.value=[];let b=()=>{let t=q(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},y?null:q(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),g?m.map((e,t)=>(o.value.push(e.props.name),Ue(q(Le,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!y||y===`center`||y===`start`||y===`end`)}),e.children?{default:e.children.tab}:void 0)))):h.map((e,t)=>(o.value.push(e.props.name),Ue(t!==0&&!y?He(e):e))),!r&&i&&_?Ve(i,(g?m.length:h.length)!==0):null,y?null:q(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return q(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},_&&i?q(k,{onResize:this.handleTabsResize},{default:()=>t}):t,_?q(`div`,{class:`${e}-tabs-pad`}):null,_?null:q(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},x=v?`top`:n;return q(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,y&&`${e}-tabs--flex`,`${e}-tabs--${x}`],style:this.cssVars},q(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${x}`,`${e}-tabs-nav`]},d(f,t=>t&&q(`div`,{class:`${e}-tabs-nav__prefix`},t)),v?q(k,{onResize:this.handleSegmentResize},{default:()=>q(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},q(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},q(`div`,{class:`${e}-tabs-wrapper`},q(`div`,{class:`${e}-tabs-tab`}))),g?m.map((e,t)=>(o.value.push(e.props.name),q(Le,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):h.map((e,t)=>(o.value.push(e.props.name),t===0?e:He(e))))}):q(k,{onResize:this.handleNavResize},{default:()=>q(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(x)?q(Oe,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:b}):q(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},b()))}),r&&i&&_?Ve(i,!0):null,d(p,t=>t&&q(`div`,{class:`${e}-tabs-nav__suffix`},t))),g&&(this.animated&&(x===`top`||x===`bottom`)?q(`div`,{ref:`tabsPaneWrapperRef`,style:l,class:[`${e}-tabs-pane-wrapper`,c]},Be(m,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Be(m,this.mergedValue,this.renderedNames)))}});function Be(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?u(e,[[te,c]]):e)}}),o?q(S,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function Ve(e,t){return q(Le,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function He(e){let t=ne(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Ue(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var We={class:`settings-section`},Ge=R(I({__name:`DisplaySettings`,setup(e){let t=V(),n=E(),{t:r}=U();async function i(e){try{await t.saveSection(`display`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(B(),J(`section`,We,[H(Z,{label:W(r)(`settings.display.streaming`),hint:W(r)(`settings.display.streamingHint`)},{default:A(()=>[H(W(o),{value:W(t).display.streaming,"onUpdate:value":n[0]||=e=>i({streaming:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),H(Z,{label:W(r)(`settings.display.compact`),hint:W(r)(`settings.display.compactHint`)},{default:A(()=>[H(W(o),{value:W(t).display.compact,"onUpdate:value":n[1]||=e=>i({compact:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),H(Z,{label:W(r)(`settings.display.showReasoning`),hint:W(r)(`settings.display.showReasoningHint`)},{default:A(()=>[H(W(o),{value:W(t).display.show_reasoning,"onUpdate:value":n[2]||=e=>i({show_reasoning:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),H(Z,{label:W(r)(`settings.display.showCost`),hint:W(r)(`settings.display.showCostHint`)},{default:A(()=>[H(W(o),{value:W(t).display.show_cost,"onUpdate:value":n[3]||=e=>i({show_cost:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),H(Z,{label:W(r)(`settings.display.bellOnComplete`),hint:W(r)(`settings.display.bellOnCompleteHint`)},{default:A(()=>[H(W(o),{value:W(t).display.bell_on_complete,"onUpdate:value":n[4]||=e=>i({bell_on_complete:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),H(Z,{label:W(r)(`settings.display.busyInputMode`),hint:W(r)(`settings.display.busyInputModeHint`)},{default:A(()=>[H(W(o),{value:W(t).display.busy_input_mode===`interrupt`,"onUpdate:value":n[5]||=e=>i({busy_input_mode:e?`interrupt`:`off`})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0d401d9f`]]),Ke={class:`settings-section`},qe=R(I({__name:`AgentSettings`,setup(e){let t=V(),n=E(),{t:r}=U();async function a(e){try{await t.saveSection(`agent`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(B(),J(`section`,Ke,[H(Z,{label:W(r)(`settings.agent.maxTurns`),hint:W(r)(`settings.agent.maxTurnsHint`)},{default:A(()=>[H(W(i),{value:W(t).agent.max_turns,min:1,max:200,step:5,size:`small`,class:`input-sm`,"onUpdate:value":n[0]||=e=>e!=null&&a({max_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),H(Z,{label:W(r)(`settings.agent.gatewayTimeout`),hint:W(r)(`settings.agent.gatewayTimeoutHint`)},{default:A(()=>[H(W(i),{value:W(t).agent.gateway_timeout,min:60,max:7200,step:60,size:`small`,class:`input-sm`,"onUpdate:value":n[1]||=e=>e!=null&&a({gateway_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),H(Z,{label:W(r)(`settings.agent.restartDrainTimeout`),hint:W(r)(`settings.agent.restartDrainTimeoutHint`)},{default:A(()=>[H(W(i),{value:W(t).agent.restart_drain_timeout,min:10,max:300,step:10,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&a({restart_drain_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),H(Z,{label:W(r)(`settings.agent.toolEnforcement`),hint:W(r)(`settings.agent.toolEnforcementHint`)},{default:A(()=>[H(W(v),{value:W(t).agent.tool_use_enforcement||`auto`,options:[{label:W(r)(`settings.agent.auto`),value:`auto`},{label:W(r)(`settings.agent.always`),value:`always`},{label:W(r)(`settings.agent.never`),value:`never`}],size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>a({tool_use_enforcement:e}),"show-tooltip":!0},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-e6b6033d`]]),Je={class:`settings-section`},Ye=R(I({__name:`MemorySettings`,setup(e){let t=V(),n=E(),{t:r}=U();async function a(e){try{await t.saveSection(`memory`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(B(),J(`section`,Je,[H(Z,{label:W(r)(`settings.memory.enabled`),hint:W(r)(`settings.memory.enabledHint`)},{default:A(()=>[H(W(o),{value:W(t).memory.memory_enabled,"onUpdate:value":n[0]||=e=>a({memory_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),H(Z,{label:W(r)(`settings.memory.userProfile`),hint:W(r)(`settings.memory.userProfileHint`)},{default:A(()=>[H(W(o),{value:W(t).memory.user_profile_enabled,"onUpdate:value":n[1]||=e=>a({user_profile_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),H(Z,{label:W(r)(`settings.memory.charLimit`),hint:W(r)(`settings.memory.charLimitHint`)},{default:A(()=>[H(W(i),{value:W(t).memory.memory_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&a({memory_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),H(Z,{label:W(r)(`settings.memory.userCharLimit`),hint:W(r)(`settings.memory.userCharLimitHint`)},{default:A(()=>[H(W(i),{value:W(t).memory.user_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>e!=null&&a({user_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0c8e2aa7`]]),Xe={class:`workspace-settings`},Ze={key:0,class:`workspace-list`},Qe={class:`workspace-info`},$e={class:`workspace-name`},et=[`title`],tt={key:1,class:`workspace-form`},nt={class:`form-row`},rt={class:`form-row`},it=R(I({__name:`WorkspaceSettings`,setup(e){let{t}=U(),n=E(),r=h([]),i=h(!1),o=h(!1),l=h(``),u=h(``),d=h(null);async function f(){i.value=!0;try{r.value=await Te()}finally{i.value=!1}}G(f);function p(){l.value=``,u.value=``,o.value=!1,d.value=null}async function m(){let e=l.value.trim(),i=u.value.trim();if(!(!e||!i))try{if(d.value){let a=await Ce(d.value,{name:e,path:i}),o=r.value.findIndex(e=>e.id===d.value);o>=0&&(r.value[o]=a),n.success(t(`common.saved`))}else{let a=await Ee(e,i);r.value.push(a),n.success(t(`common.saved`))}p()}catch(e){let r=e?.message||``;r.includes(`409`)||r.includes(`already exists`)?n.error(t(`settings.workspace.nameExists`)):r.includes(`400`)||r.includes(`does not exist`)?n.error(t(`settings.workspace.pathNotExists`)):n.error(t(`common.saveFailed`))}}function g(e){d.value=e.id,l.value=e.name,u.value=e.path,o.value=!0}async function _(e){await we(e)?(r.value=r.value.filter(t=>t.id!==e),n.success(t(`common.saved`))):n.error(t(`common.deleteFailed`))}return(e,n)=>(B(),J(`section`,Xe,[o.value?(B(),J(`div`,tt,[D(`div`,nt,[D(`label`,null,w(W(t)(`settings.workspace.name`)),1),H(W(b),{value:l.value,"onUpdate:value":n[1]||=e=>l.value=e,size:`small`,placeholder:W(t)(`settings.workspace.namePlaceholder`),onKeydown:y(m,[`enter`])},null,8,[`value`,`placeholder`])]),D(`div`,rt,[D(`label`,null,w(W(t)(`settings.workspace.path`)),1),H(W(b),{value:u.value,"onUpdate:value":n[2]||=e=>u.value=e,size:`small`,placeholder:W(t)(`settings.workspace.pathPlaceholder`),onKeydown:y(m,[`enter`])},null,8,[`value`,`placeholder`])]),H(W(a),{size:`small`},{default:A(()=>[H(W(O),{size:`small`,type:`primary`,disabled:!l.value.trim()||!u.value.trim(),onClick:m},{default:A(()=>[K(w(d.value?W(t)(`common.update`):W(t)(`common.create`)),1)]),_:1},8,[`disabled`]),H(W(O),{size:`small`,onClick:p},{default:A(()=>[K(w(W(t)(`common.cancel`)),1)]),_:1})]),_:1})])):(B(),J(`div`,Ze,[r.value.length===0&&!i.value?(B(),c(W(re),{key:0,description:W(t)(`settings.workspace.empty`)},null,8,[`description`])):ce(``,!0),(B(!0),J(C,null,ae(r.value,e=>(B(),J(`div`,{key:e.id,class:`workspace-item`},[D(`div`,Qe,[D(`span`,$e,w(e.name),1),D(`span`,{class:`workspace-path`,title:e.path},w(e.path),9,et)]),H(W(a),{size:`small`},{default:A(()=>[H(W(O),{size:`tiny`,quaternary:``,onClick:t=>g(e)},{default:A(()=>[K(w(W(t)(`common.edit`)),1)]),_:1},8,[`onClick`]),H(W(s),{"positive-text":W(t)(`common.confirm`),"negative-text":W(t)(`common.cancel`),onPositiveClick:t=>_(e.id)},{trigger:A(()=>[H(W(O),{size:`tiny`,quaternary:``,type:`error`},{default:A(()=>[K(w(W(t)(`common.delete`)),1)]),_:1})]),default:A(()=>[K(` `+w(W(t)(`settings.workspace.deleteConfirm`)),1)]),_:1},8,[`positive-text`,`negative-text`,`onPositiveClick`])]),_:2},1024)]))),128)),H(W(O),{class:`add-btn`,dashed:``,type:`primary`,size:`small`,onClick:n[0]||=e=>{o.value=!0,d.value=null}},{default:A(()=>[K(` + `+w(W(t)(`settings.workspace.add`)),1)]),_:1})]))]))}}),[[`__scopeId`,`data-v-b65db1e5`]]),at={class:`settings-view`},ot={class:`page-header`},st={class:`header-title`},ct={class:`settings-content`},lt=R(I({__name:`SettingsView`,setup(e){let t=V(),{t:n}=U();return G(()=>{t.fetchSettings()}),(e,r)=>(B(),J(`div`,at,[D(`header`,ot,[D(`h2`,st,w(W(n)(`settings.title`)),1)]),D(`div`,ct,[H(W(ie),{show:W(t).loading||W(t).saving,size:`large`,description:W(n)(`common.loading`)},{default:A(()=>[H(W(ze),{type:`line`,animated:``},{default:A(()=>[H(W(Q),{name:`display`,tab:W(n)(`settings.tabs.display`)},{default:A(()=>[H(Ge)]),_:1},8,[`tab`]),H(W(Q),{name:`agent`,tab:W(n)(`settings.tabs.agent`)},{default:A(()=>[H(qe)]),_:1},8,[`tab`]),H(W(Q),{name:`memory`,tab:W(n)(`settings.tabs.memory`)},{default:A(()=>[H(Ye)]),_:1},8,[`tab`]),H(W(Q),{name:`workspace`,tab:W(n)(`settings.tabs.workspace`)},{default:A(()=>[H(it)]),_:1},8,[`tab`])]),_:1})]),_:1},8,[`show`,`description`])])]))}}),[[`__scopeId`,`data-v-4e6130f6`]]);export{lt as default};