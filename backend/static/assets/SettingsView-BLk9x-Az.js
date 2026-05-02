import{S as e}from"./_baseFor-DyDN1Ubb.js";import{n as t,t as n}from"./now-Cv-rOPzR.js";import{t as r}from"./Add-CtCIWeTX.js";import{t as i}from"./InputNumber-BAO6l50o.js";import{t as a}from"./Space-jPwKwt-L.js";import{t as o}from"./Switch-BpiVGBC_.js";import{t as s}from"./Popconfirm-D8CMXYHK.js";import{A as c,An as l,Br as u,C as d,Cn as f,En as p,Fn as m,Fr as h,Gr as g,Hr as _,Jr as v,K as y,Kn as b,Kr as x,L as S,Lr as C,Mr as w,N as T,Nn as E,Pn as D,Rr as O,Un as k,Vr as A,Wn as ee,Wr as j,Xr as M,Yr as N,Zr as te,_ as ne,_n as re,bn as ie,c as P,ci as ae,dr as F,ei as oe,fn as se,fr as I,ft as ce,gi as L,hr as R,ii as le,ir as ue,jr as de,kr as fe,li as z,mi as B,mr as V,ni as H,or as U,p as pe,pi as W,pn as me,pr as G,qn as he,ri as ge,si as _e,tt as K,ui as ve,ur as q,ut as ye,wn as J,yi as Y,yn as be,yr as X,zr as Z}from"./index-_epVTX4A.js";import{t as Q}from"./settings-COPP7DQx.js";import{t as $}from"./SettingRow-DfqTy9JG.js";import{i as xe,n as Se,r as Ce,t as we}from"./workspaces-Cizu79z6.js";var Te=E(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[E(`&::-webkit-scrollbar`,{width:0,height:0})]),Ee=x({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=W(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=m();return Te.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:D,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return v(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),De=`Expected a function`,Oe=Math.max,ke=Math.min;function Ae(r,i,a){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof r!=`function`)throw TypeError(De);i=t(i)||0,e(a)&&(p=!!a.leading,m=`maxWait`in a,c=m?Oe(t(a.maxWait)||0,i):c,h=`trailing`in a?!!a.trailing:h);function g(e){var t=o,n=s;return o=s=void 0,f=e,l=r.apply(n,t),l}function _(e){return f=e,u=setTimeout(b,i),p?g(e):l}function v(e){var t=e-d,n=e-f,r=i-t;return m?ke(r,c-n):r}function y(e){var t=e-d,n=e-f;return d===void 0||t>=i||t<0||m&&n>=c}function b(){var e=n();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function C(){return u===void 0?l:x(n())}function w(){var e=n(),t=y(e);if(o=arguments,s=this,d=e,t){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,i),g(d)}return u===void 0&&(u=setTimeout(b,i)),l}return w.cancel=S,w.flush=C,w}var je=`Expected a function`;function Me(t,n,r){var i=!0,a=!0;if(typeof t!=`function`)throw TypeError(je);return e(r)&&(i=`leading`in r?!!r.leading:i,a=`trailing`in r?!!r.trailing:a),Ae(t,n,{leading:i,maxWait:n,trailing:a})}var Ne=k(`n-tabs`),Pe={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Fe=x({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:Pe,slots:Object,setup(e){let t=N(Ne,null);return t||p(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return v(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Ie=x({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},ie(Pe,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=N(Ne);return{trigger:d,mergedClosable:O(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:i,label:a,tab:o,value:s,mergedClosable:c,trigger:l,$slots:{default:u}}=this,d=a??o;return v(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?v(`div`,{class:`${t}-tabs-tab-pad`}):null,v(`div`,Object.assign({key:n,"data-name":n,"data-disabled":i?!0:void 0},M({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,i&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),v(`span`,{class:`${t}-tabs-tab__label`},e?v(h,null,v(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),v(ye,{clsPrefix:t},{default:()=>v(r,null)})):u?u():typeof d==`object`?d:be(d??n)),c&&this.type===`card`?v(K,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:i}):null))}}),Le=F(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[G(`segment-type`,[F(`tabs-rail`,[q(`&.transition-disabled`,[F(`tabs-capsule`,`
 transition: none;
 `)])])]),G(`top`,[F(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),G(`left`,[F(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),G(`left, right`,`
 flex-direction: row;
 `,[F(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),F(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),G(`right`,`
 flex-direction: row-reverse;
 `,[F(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),F(`tabs-bar`,`
 left: 0;
 `)]),G(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[F(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),F(`tabs-bar`,`
 top: 0;
 `)]),F(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[F(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),F(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[F(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[G(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),q(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),G(`flex`,[F(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[F(`tabs-wrapper`,`
 width: 100%;
 `,[F(`tabs-tab`,`
 margin-right: 0;
 `)])])]),F(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[I(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),I(`prefix`,`padding-right: 16px;`),I(`suffix`,`padding-left: 16px;`)]),G(`top, bottom`,[q(`>`,[F(`tabs-nav`,[F(`tabs-nav-scroll-wrapper`,[q(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),q(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),G(`shadow-start`,[q(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),G(`shadow-end`,[q(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),G(`left, right`,[F(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),q(`>`,[F(`tabs-nav`,[F(`tabs-nav-scroll-wrapper`,[q(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),q(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),G(`shadow-start`,[q(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),G(`shadow-end`,[q(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),F(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[F(`tabs-nav-y-scroll`,`
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
 `)]),F(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),F(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),F(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),F(`tabs-tab`,`
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
 `,[G(`disabled`,{cursor:`not-allowed`}),I(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),I(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),F(`tabs-bar`,`
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
 `),G(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),F(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),F(`tab-pane`,`
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
 `)]),F(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),G(`line-type, bar-type`,[F(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[q(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),G(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),G(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),F(`tabs-nav`,[G(`line-type`,[G(`top`,[I(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),F(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),F(`tabs-bar`,`
 bottom: -1px;
 `)]),G(`left`,[I(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),F(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),F(`tabs-bar`,`
 right: -1px;
 `)]),G(`right`,[I(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),F(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),F(`tabs-bar`,`
 left: -1px;
 `)]),G(`bottom`,[I(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),F(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),F(`tabs-bar`,`
 top: -1px;
 `)]),I(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),F(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),F(`tabs-bar`,`
 border-radius: 0;
 `)]),G(`card-type`,[I(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),F(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),F(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),F(`tabs-tab`,`
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
 `,[I(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),V(`disabled`,[q(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),G(`closable`,`padding-right: 8px;`),G(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),G(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),G(`left, right`,`
 flex-direction: column; 
 `,[I(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),F(`tabs-wrapper`,`
 flex-direction: column;
 `),F(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[F(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),G(`top`,[G(`card-type`,[F(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),I(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),F(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[G(`active`,`
 border-bottom: 1px solid #0000;
 `)]),F(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),F(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),G(`left`,[G(`card-type`,[F(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),I(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),F(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[G(`active`,`
 border-right: 1px solid #0000;
 `)]),F(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),F(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),G(`right`,[G(`card-type`,[F(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),I(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),F(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[G(`active`,`
 border-left: 1px solid #0000;
 `)]),F(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),F(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),G(`bottom`,[G(`card-type`,[F(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),I(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),F(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[G(`active`,`
 border-top: 1px solid #0000;
 `)]),F(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),F(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Re=Me,ze=x({name:`Tabs`,props:Object.assign(Object.assign({},ce.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=me(e),a=ce(`Tabs`,`-tabs`,Le,ne,e,n),o=W(null),s=W(null),c=W(null),l=W(null),u=W(null),d=W(null),p=W(!0),m=W(!0),h=ee(e,[`labelSize`,`size`]),g=O(()=>h.value?h.value:i?.value?.Tabs?.size||`medium`),_=ee(e,[`activeName`,`value`]),v=W(_.value??e.defaultValue??(t.default?f(t.default())[0]?.props?.name:null)),y=b(_,v),x={id:0},S=O(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});_e(y,()=>{x.id=0,D(),k()});function C(){let{value:e}=y;return e===null?null:o.value?.querySelector(`[data-name="${e}"]`)}function w(t){if(e.type===`card`)return;let{value:r}=s;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(E([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(E([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function T(){if(e.type===`card`)return;let{value:t}=s;t&&(t.style.opacity=`0`)}function E(e){let{value:t}=s;if(t)for(let n of e)t.style[n]=``}function D(){if(e.type===`card`)return;let t=C();t?w(t):T()}function k(){let e=u.value?.$el;if(!e)return;let t=C();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let A=W(null),j=0,M=null;function N(e){let t=A.value;if(t){j=e.getBoundingClientRect().height;let n=`${j}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};M?(r(),M(),M=null):M=r}}function re(e){let t=A.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(j,n)}px`};M?(M(),M=null,r()):M=r}}function ie(){let t=A.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let P={value:[]},F=W(`next`);function I(e){let t=y.value,n=`next`;for(let r of P.value){if(r===t)break;if(r===e){n=`prev`;break}}F.value=n,L(e)}function L(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&J(n,t),r&&J(r,t),i&&J(i,t),v.value=t}function le(t){let{onClose:n}=e;n&&J(n,t)}let de=!0;function fe(){let{value:e}=s;if(!e)return;de||=!1;let t=`transition-disabled`;e.classList.add(t),D(),e.classList.remove(t)}let z=W(null);function V({transitionDisabled:e}){let t=o.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=C();n&&z.value&&(z.value.style.width=`${n.offsetWidth}px`,z.value.style.height=`${n.offsetHeight}px`,z.value.style.transform=`translateX(${n.offsetLeft-ue(getComputedStyle(t).paddingLeft)}px)`,e&&z.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}_e([y],()=>{e.type===`segment`&&te(()=>{V({transitionDisabled:!1})})}),oe(()=>{e.type===`segment`&&V({transitionDisabled:!0})});let H=0;function pe(t){if(t.contentRect.width===0&&t.contentRect.height===0||H===t.contentRect.width)return;H=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(de||e.justifyContent?.startsWith(`space`))&&fe(),n!==`segment`){let{placement:t}=e;Y((t===`top`||t===`bottom`?u.value?.$el:d.value)||null)}}let G=Re(pe,64);_e([()=>e.justifyContent,()=>e.size],()=>{te(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&fe()})});let K=W(!1);function ve(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!K.value)s===`top`||s===`bottom`?a<r&&(K.value=!0):o<i&&(K.value=!0);else{let{value:e}=l;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(K.value=!1):o-i>e.$el.offsetHeight&&(K.value=!1)}Y(u.value?.$el||null)}let q=Re(ve,64);function ye(){let{onAdd:t}=e;t&&t(),te(()=>{let e=C(),{value:t}=u;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function Y(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;p.value=e<=0,m.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;p.value=e<=0,m.value=e+r>=n}}let be=Re(e=>{Y(e.target)},64);ge(Ne,{triggerRef:B(e,`trigger`),tabStyleRef:B(e,`tabStyle`),tabClassRef:B(e,`tabClass`),addTabStyleRef:B(e,`addTabStyle`),addTabClassRef:B(e,`addTabClass`),paneClassRef:B(e,`paneClass`),paneStyleRef:B(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:B(e,`type`),closableRef:B(e,`closable`),valueRef:y,tabChangeIdRef:x,onBeforeLeaveRef:B(e,`onBeforeLeave`),activateTab:I,handleClose:le,handleAdd:ye}),he(()=>{D(),k()}),ae(()=>{let{value:e}=c;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;p.value?e.classList.remove(r):e.classList.add(r),m.value?e.classList.remove(i):e.classList.add(i)});let X={syncBarPosition:()=>{D()}},Z=()=>{V({transitionDisabled:!0})},Q=O(()=>{let{value:t}=g,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:o,closeIconColorHover:s,closeIconColorPressed:c,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:_,tabColorSegment:v,closeSize:y,closeIconSize:b,closeColorHover:x,closeColorPressed:S,closeBorderRadius:C,[R(`panePadding`,t)]:w,[R(`tabPadding`,r)]:T,[R(`tabPaddingVertical`,r)]:E,[R(`tabGap`,r)]:D,[R(`tabGap`,`${r}Vertical`)]:O,[R(`tabTextColor`,n)]:k,[R(`tabTextColorActive`,n)]:A,[R(`tabTextColorHover`,n)]:ee,[R(`tabTextColorDisabled`,n)]:j,[R(`tabFontSize`,t)]:M},common:{cubicBezierEaseInOut:N}}=a.value;return{"--n-bezier":N,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":M,"--n-tab-text-color":k,"--n-tab-text-color-active":A,"--n-tab-text-color-disabled":j,"--n-tab-text-color-hover":ee,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":y,"--n-close-icon-size":b,"--n-close-color-hover":x,"--n-close-color-pressed":S,"--n-close-border-radius":C,"--n-close-icon-color":o,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":c,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":T,"--n-tab-padding-vertical":E,"--n-tab-gap":D,"--n-tab-gap-vertical":O,"--n-pane-padding-left":U(w,`left`),"--n-pane-padding-right":U(w,`right`),"--n-pane-padding-top":U(w,`top`),"--n-pane-padding-bottom":U(w,`bottom`),"--n-font-weight-strong":_,"--n-tab-color-segment":v}}),$=r?se(`tabs`,O(()=>`${g.value[0]}${e.type[0]}`),Q,e):void 0;return Object.assign({mergedClsPrefix:n,mergedValue:y,renderedNames:new Set,segmentCapsuleElRef:z,tabsPaneWrapperRef:A,tabsElRef:o,barElRef:s,addTabInstRef:l,xScrollInstRef:u,scrollWrapperElRef:c,addTabFixed:K,tabWrapperStyle:S,handleNavResize:G,mergedSize:g,handleScroll:be,handleTabsResize:q,cssVars:r?void 0:Q,themeClass:$?.themeClass,animationDirection:F,renderNameListRef:P,yScrollElRef:d,handleSegmentResize:Z,onAnimationBeforeLeave:N,onAnimationEnter:re,onAnimationAfterEnter:ie,onRender:$?.onRender},X)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:u,$slots:{default:d,prefix:p,suffix:m}}=this;s?.();let h=d?f(d()).filter(e=>e.type.__TAB_PANE__===!0):[],g=d?f(d()).filter(e=>e.type.__TAB__===!0):[],_=!g.length,y=t===`card`,b=t===`segment`,x=!y&&!b&&this.justifyContent;o.value=[];let S=()=>{let t=v(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},x?null:v(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),_?h.map((e,t)=>(o.value.push(e.props.name),Ue(v(Ie,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!x||x===`center`||x===`start`||x===`end`)}),e.children?{default:e.children.tab}:void 0)))):g.map((e,t)=>(o.value.push(e.props.name),Ue(t!==0&&!x?He(e):e))),!r&&i&&y?Ve(i,(_?h.length:g.length)!==0):null,x?null:v(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return v(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},y&&i?v(l,{onResize:this.handleTabsResize},{default:()=>t}):t,y?v(`div`,{class:`${e}-tabs-pad`}):null,y?null:v(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},C=b?`top`:n;return v(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,x&&`${e}-tabs--flex`,`${e}-tabs--${C}`],style:this.cssVars},v(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${C}`,`${e}-tabs-nav`]},re(p,t=>t&&v(`div`,{class:`${e}-tabs-nav__prefix`},t)),b?v(l,{onResize:this.handleSegmentResize},{default:()=>v(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},v(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},v(`div`,{class:`${e}-tabs-wrapper`},v(`div`,{class:`${e}-tabs-tab`}))),_?h.map((e,t)=>(o.value.push(e.props.name),v(Ie,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):g.map((e,t)=>(o.value.push(e.props.name),t===0?e:He(e))))}):v(l,{onResize:this.handleNavResize},{default:()=>v(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(C)?v(Ee,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:S}):v(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},S()))}),r&&i&&y?Ve(i,!0):null,re(m,t=>t&&v(`div`,{class:`${e}-tabs-nav__suffix`},t))),_&&(this.animated&&(C===`top`||C===`bottom`)?v(`div`,{ref:`tabsPaneWrapperRef`,style:u,class:[`${e}-tabs-pane-wrapper`,c]},Be(h,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Be(h,this.mergedValue,this.renderedNames)))}});function Be(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?ve(e,[[de,c]]):e)}}),o?v(fe,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function Ve(e,t){return v(Ie,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function He(e){let t=C(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Ue(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var We={class:`settings-section`},Ge=P(x({__name:`DisplaySettings`,setup(e){let t=Q(),n=d(),{t:r}=X();async function i(e){try{await t.saveSection(`display`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(H(),_(`section`,We,[g($,{label:L(r)(`settings.display.streaming`),hint:L(r)(`settings.display.streamingHint`)},{default:z(()=>[g(L(o),{value:L(t).display.streaming,"onUpdate:value":n[0]||=e=>i({streaming:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g($,{label:L(r)(`settings.display.compact`),hint:L(r)(`settings.display.compactHint`)},{default:z(()=>[g(L(o),{value:L(t).display.compact,"onUpdate:value":n[1]||=e=>i({compact:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g($,{label:L(r)(`settings.display.showReasoning`),hint:L(r)(`settings.display.showReasoningHint`)},{default:z(()=>[g(L(o),{value:L(t).display.show_reasoning,"onUpdate:value":n[2]||=e=>i({show_reasoning:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g($,{label:L(r)(`settings.display.showCost`),hint:L(r)(`settings.display.showCostHint`)},{default:z(()=>[g(L(o),{value:L(t).display.show_cost,"onUpdate:value":n[3]||=e=>i({show_cost:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g($,{label:L(r)(`settings.display.inlineDiffs`),hint:L(r)(`settings.display.inlineDiffsHint`)},{default:z(()=>[g(L(o),{value:L(t).display.inline_diffs,"onUpdate:value":n[4]||=e=>i({inline_diffs:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g($,{label:L(r)(`settings.display.bellOnComplete`),hint:L(r)(`settings.display.bellOnCompleteHint`)},{default:z(()=>[g(L(o),{value:L(t).display.bell_on_complete,"onUpdate:value":n[5]||=e=>i({bell_on_complete:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g($,{label:L(r)(`settings.display.busyInputMode`),hint:L(r)(`settings.display.busyInputModeHint`)},{default:z(()=>[g(L(o),{value:L(t).display.busy_input_mode===`interrupt`,"onUpdate:value":n[6]||=e=>i({busy_input_mode:e?`interrupt`:`off`})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-7e248ea3`]]),Ke={class:`settings-section`},qe=P(x({__name:`AgentSettings`,setup(e){let t=Q(),n=d(),{t:r}=X();async function a(e){try{await t.saveSection(`agent`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(H(),_(`section`,Ke,[g($,{label:L(r)(`settings.agent.maxTurns`),hint:L(r)(`settings.agent.maxTurnsHint`)},{default:z(()=>[g(L(i),{value:L(t).agent.max_turns,min:1,max:200,step:5,size:`small`,class:`input-sm`,"onUpdate:value":n[0]||=e=>e!=null&&a({max_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g($,{label:L(r)(`settings.agent.gatewayTimeout`),hint:L(r)(`settings.agent.gatewayTimeoutHint`)},{default:z(()=>[g(L(i),{value:L(t).agent.gateway_timeout,min:60,max:7200,step:60,size:`small`,class:`input-sm`,"onUpdate:value":n[1]||=e=>e!=null&&a({gateway_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g($,{label:L(r)(`settings.agent.restartDrainTimeout`),hint:L(r)(`settings.agent.restartDrainTimeoutHint`)},{default:z(()=>[g(L(i),{value:L(t).agent.restart_drain_timeout,min:10,max:300,step:10,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&a({restart_drain_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g($,{label:L(r)(`settings.agent.toolEnforcement`),hint:L(r)(`settings.agent.toolEnforcementHint`)},{default:z(()=>[g(L(c),{value:L(t).agent.tool_use_enforcement||`auto`,options:[{label:L(r)(`settings.agent.auto`),value:`auto`},{label:L(r)(`settings.agent.always`),value:`always`},{label:L(r)(`settings.agent.never`),value:`never`}],size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>a({tool_use_enforcement:e}),"show-tooltip":!0},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-e6b6033d`]]),Je={class:`settings-section`},Ye=P(x({__name:`MemorySettings`,setup(e){let t=Q(),n=d(),{t:r}=X();async function a(e){try{await t.saveSection(`memory`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(H(),_(`section`,Je,[g($,{label:L(r)(`settings.memory.enabled`),hint:L(r)(`settings.memory.enabledHint`)},{default:z(()=>[g(L(o),{value:L(t).memory.memory_enabled,"onUpdate:value":n[0]||=e=>a({memory_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g($,{label:L(r)(`settings.memory.userProfile`),hint:L(r)(`settings.memory.userProfileHint`)},{default:z(()=>[g(L(o),{value:L(t).memory.user_profile_enabled,"onUpdate:value":n[1]||=e=>a({user_profile_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g($,{label:L(r)(`settings.memory.charLimit`),hint:L(r)(`settings.memory.charLimitHint`)},{default:z(()=>[g(L(i),{value:L(t).memory.memory_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&a({memory_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),g($,{label:L(r)(`settings.memory.userCharLimit`),hint:L(r)(`settings.memory.userCharLimitHint`)},{default:z(()=>[g(L(i),{value:L(t).memory.user_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>e!=null&&a({user_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0c8e2aa7`]]),Xe={class:`workspace-settings`},Ze={key:0,class:`workspace-list`},Qe={class:`workspace-info`},$e={class:`workspace-name`},et=[`title`],tt={key:1,class:`workspace-form`},nt={class:`form-row`},rt={class:`form-row`},it=P(x({__name:`WorkspaceSettings`,setup(e){let{t}=X(),n=d(),r=W([]),i=W(!1),o=W(!1),c=W(``),l=W(``),f=W(null);async function p(){i.value=!0;try{r.value=await Ce()}finally{i.value=!1}}oe(p);function m(){c.value=``,l.value=``,o.value=!1,f.value=null}async function v(){let e=c.value.trim(),i=l.value.trim();if(!(!e||!i))try{if(f.value){let a=await xe(f.value,{name:e,path:i}),o=r.value.findIndex(e=>e.id===f.value);o>=0&&(r.value[o]=a),n.success(t(`common.saved`))}else{let a=await we(e,i);r.value.push(a),n.success(t(`common.saved`))}m()}catch(e){let r=e?.message||``;r.includes(`409`)||r.includes(`already exists`)?n.error(t(`settings.workspace.nameExists`)):r.includes(`400`)||r.includes(`does not exist`)?n.error(t(`settings.workspace.pathNotExists`)):n.error(t(`common.saveFailed`))}}function b(e){f.value=e.id,c.value=e.name,l.value=e.path,o.value=!0}async function x(e){await Se(e)?(r.value=r.value.filter(t=>t.id!==e),n.success(t(`common.saved`))):n.error(t(`common.deleteFailed`))}return(e,n)=>(H(),_(`section`,Xe,[o.value?(H(),_(`div`,tt,[Z(`div`,nt,[Z(`label`,null,Y(L(t)(`settings.workspace.name`)),1),g(L(S),{value:c.value,"onUpdate:value":n[1]||=e=>c.value=e,size:`small`,placeholder:L(t)(`settings.workspace.namePlaceholder`),onKeydown:w(v,[`enter`])},null,8,[`value`,`placeholder`])]),Z(`div`,rt,[Z(`label`,null,Y(L(t)(`settings.workspace.path`)),1),g(L(S),{value:l.value,"onUpdate:value":n[2]||=e=>l.value=e,size:`small`,placeholder:L(t)(`settings.workspace.pathPlaceholder`),onKeydown:w(v,[`enter`])},null,8,[`value`,`placeholder`])]),g(L(a),{size:`small`},{default:z(()=>[g(L(T),{size:`small`,type:`primary`,disabled:!c.value.trim()||!l.value.trim(),onClick:v},{default:z(()=>[j(Y(f.value?L(t)(`common.update`):L(t)(`common.create`)),1)]),_:1},8,[`disabled`]),g(L(T),{size:`small`,onClick:m},{default:z(()=>[j(Y(L(t)(`common.cancel`)),1)]),_:1})]),_:1})])):(H(),_(`div`,Ze,[r.value.length===0&&!i.value?(H(),u(L(y),{key:0,description:L(t)(`settings.workspace.empty`)},null,8,[`description`])):A(``,!0),(H(!0),_(h,null,le(r.value,e=>(H(),_(`div`,{key:e.id,class:`workspace-item`},[Z(`div`,Qe,[Z(`span`,$e,Y(e.name),1),Z(`span`,{class:`workspace-path`,title:e.path},Y(e.path),9,et)]),g(L(a),{size:`small`},{default:z(()=>[g(L(T),{size:`tiny`,quaternary:``,onClick:t=>b(e)},{default:z(()=>[j(Y(L(t)(`common.edit`)),1)]),_:1},8,[`onClick`]),g(L(s),{onPositiveClick:t=>x(e.id)},{trigger:z(()=>[g(L(T),{size:`tiny`,quaternary:``,type:`error`},{default:z(()=>[j(Y(L(t)(`common.delete`)),1)]),_:1})]),default:z(()=>[j(` `+Y(L(t)(`settings.workspace.deleteConfirm`)),1)]),_:1},8,[`onPositiveClick`])]),_:2},1024)]))),128)),g(L(T),{class:`add-btn`,dashed:``,type:`primary`,size:`small`,onClick:n[0]||=e=>{o.value=!0,f.value=null}},{default:z(()=>[j(` + `+Y(L(t)(`settings.workspace.add`)),1)]),_:1})]))]))}}),[[`__scopeId`,`data-v-d6989927`]]),at={class:`settings-view`},ot={class:`page-header`},st={class:`header-title`},ct={class:`settings-content`},lt=P(x({__name:`SettingsView`,setup(e){let t=Q(),{t:n}=X();return oe(()=>{t.fetchSettings()}),(e,r)=>(H(),_(`div`,at,[Z(`header`,ot,[Z(`h2`,st,Y(L(n)(`settings.title`)),1)]),Z(`div`,ct,[g(L(pe),{show:L(t).loading||L(t).saving,size:`large`,description:L(n)(`common.loading`)},{default:z(()=>[g(L(ze),{type:`line`,animated:``},{default:z(()=>[g(L(Fe),{name:`display`,tab:L(n)(`settings.tabs.display`)},{default:z(()=>[g(Ge)]),_:1},8,[`tab`]),g(L(Fe),{name:`agent`,tab:L(n)(`settings.tabs.agent`)},{default:z(()=>[g(qe)]),_:1},8,[`tab`]),g(L(Fe),{name:`memory`,tab:L(n)(`settings.tabs.memory`)},{default:z(()=>[g(Ye)]),_:1},8,[`tab`]),g(L(Fe),{name:`workspace`,tab:L(n)(`settings.tabs.workspace`)},{default:z(()=>[g(it)]),_:1},8,[`tab`])]),_:1})]),_:1},8,[`show`,`description`])])]))}}),[[`__scopeId`,`data-v-4e6130f6`]]);export{lt as default};