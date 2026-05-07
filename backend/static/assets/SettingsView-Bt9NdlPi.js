import{i as e,n as t}from"./warn-MV9BENh8.js";import{S as n}from"./_baseFor-tDInUmcl.js";import{n as r,t as i}from"./now-CXa7IcML.js";import{t as a}from"./Add-CX_FtN77.js";import{t as o}from"./InputNumber-C_7Vjtxk.js";import{i as s,n as c,r as l,t as u}from"./ProvidersPanel-DzHIQRuY.js";import{t as d}from"./Space-BowxYRgU.js";import{t as f}from"./Switch-D19hfKXJ.js";import{t as p}from"./Popconfirm-Mq_G4i28.js";import{$n as m,An as h,Bn as g,Ci as _,Cr as v,Di as y,Dn as b,Ei as x,En as ee,Gr as S,Hr as C,I as w,In as T,Jr as E,Q as te,Qr as D,S as ne,Sr as O,U as k,Vn as A,Vr as j,Xr as M,Yr as N,Zr as P,_ as re,_i as ie,_t as ae,ai as oe,bi as se,bn as ce,br as F,ct as le,ei as I,fi as L,hr as ue,i as R,ii as z,jn as de,k as B,ki as V,kr as H,mi as fe,ni as U,nr as pe,oi as me,p as W,pi as he,pr as ge,qr as _e,si as ve,ti as G,tr as ye,ui as be,v as xe,vi as Se,wi as K,wn as Ce,wr as q,xr as J,yi as Y,yn as we,yr as X,yt as Te,z as Z,zn as Ee,zr as De}from"./index-Cbnhqdt7.js";import{t as Q}from"./SettingRow-Bl7ud2j5.js";import{a as Oe,i as ke,n as Ae,r as je,t as Me}from"./session-browser-prefs-Bi4Avhew.js";var Ne=Ee(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[Ee(`&::-webkit-scrollbar`,{width:0,height:0})]),Pe=U({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=_(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=A();return Ne.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:g,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return z(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Fe=`Expected a function`,Ie=Math.max,Le=Math.min;function Re(e,t,a){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof e!=`function`)throw TypeError(Fe);t=r(t)||0,n(a)&&(p=!!a.leading,m=`maxWait`in a,c=m?Ie(r(a.maxWait)||0,t):c,h=`trailing`in a?!!a.trailing:h);function g(t){var n=o,r=s;return o=s=void 0,f=t,l=e.apply(r,n),l}function _(e){return f=e,u=setTimeout(b,t),p?g(e):l}function v(e){var n=e-d,r=e-f,i=t-n;return m?Le(i,c-r):i}function y(e){var n=e-d,r=e-f;return d===void 0||n>=t||n<0||m&&r>=c}function b(){var e=i();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function ee(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function S(){return u===void 0?l:x(i())}function C(){var e=i(),n=y(e);if(o=arguments,s=this,d=e,n){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,t),g(d)}return u===void 0&&(u=setTimeout(b,t)),l}return C.cancel=ee,C.flush=S,C}var ze=`Expected a function`;function Be(e,t,r){var i=!0,a=!0;if(typeof e!=`function`)throw TypeError(ze);return n(r)&&(i=`leading`in r?!!r.leading:i,a=`trailing`in r?!!r.trailing:a),Re(e,t,{leading:i,maxWait:t,trailing:a})}var Ve=e(`n-tabs`),He={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},$=U({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:He,slots:Object,setup(e){let n=oe(Ve,null);return n||t(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return z(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Ue=U({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},b(He,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=oe(Ve);return{trigger:d,mergedClosable:E(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:o,value:s,mergedClosable:c,trigger:l,$slots:{default:u}}=this,d=i??o;return z(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?z(`div`,{class:`${t}-tabs-tab-pad`}):null,z(`div`,Object.assign({key:n,"data-name":n,"data-disabled":r?!0:void 0},me({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),z(`span`,{class:`${t}-tabs-tab__label`},e?z(S,null,z(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),z(ae,{clsPrefix:t},{default:()=>z(a,null)})):u?u():typeof d==`object`?d:ee(d??n)),c&&this.type===`card`?z(le,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),We=F(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[O(`segment-type`,[F(`tabs-rail`,[X(`&.transition-disabled`,[F(`tabs-capsule`,`
 transition: none;
 `)])])]),O(`top`,[F(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),O(`left`,[F(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),O(`left, right`,`
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
 `)]),O(`right`,`
 flex-direction: row-reverse;
 `,[F(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),F(`tabs-bar`,`
 left: 0;
 `)]),O(`bottom`,`
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
 `,[O(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),X(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),O(`flex`,[F(`tabs-nav`,`
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
 `,[J(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),J(`prefix`,`padding-right: 16px;`),J(`suffix`,`padding-left: 16px;`)]),O(`top, bottom`,[X(`>`,[F(`tabs-nav`,[F(`tabs-nav-scroll-wrapper`,[X(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),X(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),O(`shadow-start`,[X(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),O(`shadow-end`,[X(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),O(`left, right`,[F(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),X(`>`,[F(`tabs-nav`,[F(`tabs-nav-scroll-wrapper`,[X(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),X(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),O(`shadow-start`,[X(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),O(`shadow-end`,[X(`&::after`,`
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
 `,[X(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),X(`&::before, &::after`,`
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
 `,[O(`disabled`,{cursor:`not-allowed`}),J(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),J(`label`,`
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
 `,[X(`&.transition-disabled`,`
 transition: none;
 `),O(`disabled`,`
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
 `,[X(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),X(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),X(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),X(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),X(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),F(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),O(`line-type, bar-type`,[F(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[X(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),O(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),O(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),F(`tabs-nav`,[O(`line-type`,[O(`top`,[J(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),F(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),F(`tabs-bar`,`
 bottom: -1px;
 `)]),O(`left`,[J(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),F(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),F(`tabs-bar`,`
 right: -1px;
 `)]),O(`right`,[J(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),F(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),F(`tabs-bar`,`
 left: -1px;
 `)]),O(`bottom`,[J(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),F(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),F(`tabs-bar`,`
 top: -1px;
 `)]),J(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),F(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),F(`tabs-bar`,`
 border-radius: 0;
 `)]),O(`card-type`,[J(`prefix, suffix`,`
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
 `,[O(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[J(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),v(`disabled`,[X(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),O(`closable`,`padding-right: 8px;`),O(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),O(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),O(`left, right`,`
 flex-direction: column; 
 `,[J(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),F(`tabs-wrapper`,`
 flex-direction: column;
 `),F(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[F(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),O(`top`,[O(`card-type`,[F(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),J(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),F(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[O(`active`,`
 border-bottom: 1px solid #0000;
 `)]),F(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),F(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),O(`left`,[O(`card-type`,[F(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),J(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),F(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[O(`active`,`
 border-right: 1px solid #0000;
 `)]),F(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),F(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),O(`right`,[O(`card-type`,[F(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),J(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),F(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[O(`active`,`
 border-left: 1px solid #0000;
 `)]),F(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),F(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),O(`bottom`,[O(`card-type`,[F(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),J(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),F(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[O(`active`,`
 border-top: 1px solid #0000;
 `)]),F(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),F(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Ge=Be,Ke=U({name:`Tabs`,props:Object.assign(Object.assign({},Te.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=ce(e),a=Te(`Tabs`,`-tabs`,We,ne,e,n),o=_(null),s=_(null),c=_(null),l=_(null),u=_(null),d=_(null),f=_(!0),p=_(!0),g=m(e,[`labelSize`,`size`]),v=E(()=>g.value?g.value:i?.value?.Tabs?.size||`medium`),y=m(e,[`activeName`,`value`]),b=_(y.value??e.defaultValue??(t.default?h(t.default())[0]?.props?.name:null)),x=ye(y,b),ee={id:0},S=E(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});ie(x,()=>{ee.id=0,D(),O()});function C(){let{value:e}=x;return e===null?null:o.value?.querySelector(`[data-name="${e}"]`)}function w(t){if(e.type===`card`)return;let{value:r}=s;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(te([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(te([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function T(){if(e.type===`card`)return;let{value:t}=s;t&&(t.style.opacity=`0`)}function te(e){let{value:t}=s;if(t)for(let n of e)t.style[n]=``}function D(){if(e.type===`card`)return;let t=C();t?w(t):T()}function O(){let e=u.value?.$el;if(!e)return;let t=C();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let k=_(null),A=0,j=null;function M(e){let t=k.value;if(t){A=e.getBoundingClientRect().height;let n=`${A}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};j?(r(),j(),j=null):j=r}}function N(e){let t=k.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(A,n)}px`};j?(j(),j=null,r()):j=r}}function P(){let t=k.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let re={value:[]},ae=_(`next`);function oe(e){let t=x.value,n=`next`;for(let r of re.value){if(r===t)break;if(r===e){n=`prev`;break}}ae.value=n,se(e)}function se(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&de(n,t),r&&de(r,t),i&&de(i,t),b.value=t}function F(t){let{onClose:n}=e;n&&de(n,t)}let le=!0;function I(){let{value:e}=s;if(!e)return;le||=!1;let t=`transition-disabled`;e.classList.add(t),D(),e.classList.remove(t)}let L=_(null);function R({transitionDisabled:e}){let t=o.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=C();n&&L.value&&(L.value.style.width=`${n.offsetWidth}px`,L.value.style.height=`${n.offsetHeight}px`,L.value.style.transform=`translateX(${n.offsetLeft-ge(getComputedStyle(t).paddingLeft)}px)`,e&&L.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}ie([x],()=>{e.type===`segment`&&ve(()=>{R({transitionDisabled:!1})})}),be(()=>{e.type===`segment`&&R({transitionDisabled:!0})});let z=0;function B(t){if(t.contentRect.width===0&&t.contentRect.height===0||z===t.contentRect.width)return;z=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(le||e.justifyContent?.startsWith(`space`))&&I(),n!==`segment`){let{placement:t}=e;W((t===`top`||t===`bottom`?u.value?.$el:d.value)||null)}}let V=Ge(B,64);ie([()=>e.justifyContent,()=>e.size],()=>{ve(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&I()})});let H=_(!1);function fe(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!H.value)s===`top`||s===`bottom`?a<r&&(H.value=!0):o<i&&(H.value=!0);else{let{value:e}=l;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(H.value=!1):o-i>e.$el.offsetHeight&&(H.value=!1)}W(u.value?.$el||null)}let U=Ge(fe,64);function me(){let{onAdd:t}=e;t&&t(),ve(()=>{let e=C(),{value:t}=u;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function W(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;f.value=e<=0,p.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;f.value=e<=0,p.value=e+r>=n}}let _e=Ge(e=>{W(e.target)},64);he(Ve,{triggerRef:K(e,`trigger`),tabStyleRef:K(e,`tabStyle`),tabClassRef:K(e,`tabClass`),addTabStyleRef:K(e,`addTabStyle`),addTabClassRef:K(e,`addTabClass`),paneClassRef:K(e,`paneClass`),paneStyleRef:K(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:K(e,`type`),closableRef:K(e,`closable`),valueRef:x,tabChangeIdRef:ee,onBeforeLeaveRef:K(e,`onBeforeLeave`),activateTab:oe,handleClose:F,handleAdd:me}),pe(()=>{D(),O()}),Se(()=>{let{value:e}=c;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;f.value?e.classList.remove(r):e.classList.add(r),p.value?e.classList.remove(i):e.classList.add(i)});let G={syncBarPosition:()=>{D()}},xe=()=>{R({transitionDisabled:!0})},Ce=E(()=>{let{value:t}=v,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:o,closeIconColorHover:s,closeIconColorPressed:c,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:y,closeIconSize:b,closeColorHover:x,closeColorPressed:ee,closeBorderRadius:S,[q(`panePadding`,t)]:C,[q(`tabPadding`,r)]:w,[q(`tabPaddingVertical`,r)]:T,[q(`tabGap`,r)]:E,[q(`tabGap`,`${r}Vertical`)]:te,[q(`tabTextColor`,n)]:D,[q(`tabTextColorActive`,n)]:ne,[q(`tabTextColorHover`,n)]:O,[q(`tabTextColorDisabled`,n)]:k,[q(`tabFontSize`,t)]:A},common:{cubicBezierEaseInOut:j}}=a.value;return{"--n-bezier":j,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":A,"--n-tab-text-color":D,"--n-tab-text-color-active":ne,"--n-tab-text-color-disabled":k,"--n-tab-text-color-hover":O,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":y,"--n-close-icon-size":b,"--n-close-color-hover":x,"--n-close-color-pressed":ee,"--n-close-border-radius":S,"--n-close-icon-color":o,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":c,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":w,"--n-tab-padding-vertical":T,"--n-tab-gap":E,"--n-tab-gap-vertical":te,"--n-pane-padding-left":ue(C,`left`),"--n-pane-padding-right":ue(C,`right`),"--n-pane-padding-top":ue(C,`top`),"--n-pane-padding-bottom":ue(C,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),J=r?we(`tabs`,E(()=>`${v.value[0]}${e.type[0]}`),Ce,e):void 0;return Object.assign({mergedClsPrefix:n,mergedValue:x,renderedNames:new Set,segmentCapsuleElRef:L,tabsPaneWrapperRef:k,tabsElRef:o,barElRef:s,addTabInstRef:l,xScrollInstRef:u,scrollWrapperElRef:c,addTabFixed:H,tabWrapperStyle:S,handleNavResize:V,mergedSize:v,handleScroll:_e,handleTabsResize:U,cssVars:r?void 0:Ce,themeClass:J?.themeClass,animationDirection:ae,renderNameListRef:re,yScrollElRef:d,handleSegmentResize:xe,onAnimationBeforeLeave:M,onAnimationEnter:N,onAnimationAfterEnter:P,onRender:J?.onRender},G)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,$slots:{default:u,prefix:d,suffix:f}}=this;s?.();let p=u?h(u()).filter(e=>e.type.__TAB_PANE__===!0):[],m=u?h(u()).filter(e=>e.type.__TAB__===!0):[],g=!m.length,_=t===`card`,v=t===`segment`,y=!_&&!v&&this.justifyContent;o.value=[];let b=()=>{let t=z(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},y?null:z(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),g?p.map((e,t)=>(o.value.push(e.props.name),Xe(z(Ue,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!y||y===`center`||y===`start`||y===`end`)}),e.children?{default:e.children.tab}:void 0)))):m.map((e,t)=>(o.value.push(e.props.name),Xe(t!==0&&!y?Ye(e):e))),!r&&i&&_?Je(i,(g?p.length:m.length)!==0):null,y?null:z(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return z(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},_&&i?z(T,{onResize:this.handleTabsResize},{default:()=>t}):t,_?z(`div`,{class:`${e}-tabs-pad`}):null,_?null:z(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},x=v?`top`:n;return z(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,y&&`${e}-tabs--flex`,`${e}-tabs--${x}`],style:this.cssVars},z(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${x}`,`${e}-tabs-nav`]},Ce(d,t=>t&&z(`div`,{class:`${e}-tabs-nav__prefix`},t)),v?z(T,{onResize:this.handleSegmentResize},{default:()=>z(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},z(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},z(`div`,{class:`${e}-tabs-wrapper`},z(`div`,{class:`${e}-tabs-tab`}))),g?p.map((e,t)=>(o.value.push(e.props.name),z(Ue,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):m.map((e,t)=>(o.value.push(e.props.name),t===0?e:Ye(e))))}):z(T,{onResize:this.handleNavResize},{default:()=>z(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(x)?z(Pe,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:b}):z(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},b()))}),r&&i&&_?Je(i,!0):null,Ce(f,t=>t&&z(`div`,{class:`${e}-tabs-nav__suffix`},t))),g&&(this.animated&&(x===`top`||x===`bottom`)?z(`div`,{ref:`tabsPaneWrapperRef`,style:l,class:[`${e}-tabs-pane-wrapper`,c]},qe(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):qe(p,this.mergedValue,this.renderedNames)))}});function qe(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?se(e,[[j,c]]):e)}}),o?z(De,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function Je(e,t){return z(Ue,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function Ye(e){let t=_e(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Xe(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var Ze={class:`settings-section`},Qe=W(U({__name:`DisplaySettings`,setup(e){let t=R(),n=B(),{t:r}=H();async function i(e){try{await t.saveSection(`display`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(L(),D(`section`,Ze,[G(Q,{label:x(r)(`settings.display.streaming`),hint:x(r)(`settings.display.streamingHint`)},{default:Y(()=>[G(x(f),{value:x(t).display.streaming,"onUpdate:value":n[0]||=e=>i({streaming:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.display.compact`),hint:x(r)(`settings.display.compactHint`)},{default:Y(()=>[G(x(f),{value:x(t).display.compact,"onUpdate:value":n[1]||=e=>i({compact:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.display.showReasoning`),hint:x(r)(`settings.display.showReasoningHint`)},{default:Y(()=>[G(x(f),{value:x(t).display.show_reasoning,"onUpdate:value":n[2]||=e=>i({show_reasoning:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.display.showCost`),hint:x(r)(`settings.display.showCostHint`)},{default:Y(()=>[G(x(f),{value:x(t).display.show_cost,"onUpdate:value":n[3]||=e=>i({show_cost:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.display.bellOnComplete`),hint:x(r)(`settings.display.bellOnCompleteHint`)},{default:Y(()=>[G(x(f),{value:x(t).display.bell_on_complete,"onUpdate:value":n[4]||=e=>i({bell_on_complete:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.display.busyInputMode`),hint:x(r)(`settings.display.busyInputModeHint`)},{default:Y(()=>[G(x(f),{value:x(t).display.busy_input_mode===`interrupt`,"onUpdate:value":n[5]||=e=>i({busy_input_mode:e?`interrupt`:`off`})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0d401d9f`]]),$e={class:`settings-section`},et={class:`config-block`},tt={class:`config-block-title`},nt={class:`config-block`},rt={class:`config-block-title`},it=W(U({__name:`AgentSettings`,setup(e){let t=R(),n=B(),{t:r}=H();async function i(e){try{await t.saveSection(`agent`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}async function a(e){try{await t.saveSection(`delegation`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(L(),D(`section`,$e,[N(`div`,et,[N(`h4`,tt,V(x(r)(`settings.agent.basic`,`基础`)),1),G(Q,{label:x(r)(`settings.agent.maxTurns`),hint:x(r)(`settings.agent.maxTurnsHint`)},{default:Y(()=>[G(x(o),{value:x(t).agent.max_turns,min:1,max:200,step:5,size:`small`,class:`input-sm`,"onUpdate:value":n[0]||=e=>e!=null&&i({max_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.agent.gatewayTimeout`),hint:x(r)(`settings.agent.gatewayTimeoutHint`)},{default:Y(()=>[G(x(o),{value:x(t).agent.gateway_timeout,min:60,max:7200,step:60,size:`small`,class:`input-sm`,"onUpdate:value":n[1]||=e=>e!=null&&i({gateway_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.agent.restartDrainTimeout`),hint:x(r)(`settings.agent.restartDrainTimeoutHint`)},{default:Y(()=>[G(x(o),{value:x(t).agent.restart_drain_timeout,min:10,max:300,step:10,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({restart_drain_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.agent.toolEnforcement`),hint:x(r)(`settings.agent.toolEnforcementHint`)},{default:Y(()=>[G(x(w),{value:x(t).agent.tool_use_enforcement||`auto`,options:[{label:x(r)(`settings.agent.auto`),value:`auto`},{label:x(r)(`settings.agent.always`),value:`always`},{label:x(r)(`settings.agent.never`),value:`never`}],size:`small`,class:`input-sm`,"show-tooltip":!0,"onUpdate:value":n[3]||=e=>i({tool_use_enforcement:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`])]),N(`div`,nt,[N(`h4`,rt,V(x(r)(`settings.agent.delegation`,`委托`)),1),G(Q,{label:x(r)(`settings.agent.maxConcurrentChildren`),hint:x(r)(`settings.agent.maxConcurrentChildrenHint`)},{default:Y(()=>[G(x(o),{value:x(t).delegation.max_concurrent_children,min:1,max:10,step:1,size:`small`,class:`input-sm`,"onUpdate:value":n[4]||=e=>e!=null&&a({max_concurrent_children:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.agent.maxSpawnDepth`),hint:x(r)(`settings.agent.maxSpawnDepthHint`)},{default:Y(()=>[G(x(o),{value:x(t).delegation.max_spawn_depth,min:1,max:5,step:1,size:`small`,class:`input-sm`,"onUpdate:value":n[5]||=e=>e!=null&&a({max_spawn_depth:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.agent.orchestratorEnabled`),hint:x(r)(`settings.agent.orchestratorEnabledHint`)},{default:Y(()=>[G(x(f),{value:x(t).delegation.orchestrator_enabled,"onUpdate:value":n[6]||=e=>a({orchestrator_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])])]))}}),[[`__scopeId`,`data-v-4dde7a12`]]),at={class:`settings-section`},ot={class:`config-block`},st={class:`config-block-title`},ct={class:`config-block`},lt={class:`config-block-title`},ut={class:`config-block`},dt={class:`config-block-title`},ft=W(U({__name:`SessionSettings`,setup(e){let t=R(),n=Me(),r=B(),{t:i}=H();async function a(e){try{await t.saveSection(`session_reset`,e),r.success(i(`settings.saved`))}catch{r.error(i(`settings.saveFailed`))}}async function s(e){try{await t.saveSection(`sessions`,e),r.success(i(`settings.saved`))}catch{r.error(i(`settings.saveFailed`))}}return(e,r)=>(L(),D(`section`,at,[N(`div`,ot,[N(`h4`,st,V(x(i)(`settings.session.resetPolicy`,`重置策略`)),1),G(Q,{label:x(i)(`settings.session.mode`),hint:x(i)(`settings.session.modeHint`)},{default:Y(()=>[G(x(w),{value:x(t).sessionReset.mode||`both`,options:[{label:x(i)(`settings.session.modeBoth`),value:`both`},{label:x(i)(`settings.session.modeIdle`),value:`idle`},{label:x(i)(`settings.session.modeHourly`),value:`hourly`}],size:`small`,class:`input-md`,"onUpdate:value":r[0]||=e=>a({mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(i)(`settings.session.idleMinutes`),hint:x(i)(`settings.session.idleMinutesHint`)},{default:Y(()=>[G(x(o),{value:x(t).sessionReset.idle_minutes,min:10,max:10080,step:30,size:`small`,class:`input-sm`,"onUpdate:value":r[1]||=e=>e!=null&&a({idle_minutes:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(i)(`settings.session.atHour`),hint:x(i)(`settings.session.atHourHint`)},{default:Y(()=>[G(x(o),{value:x(t).sessionReset.at_hour,min:0,max:23,step:1,size:`small`,class:`input-sm`,"onUpdate:value":r[2]||=e=>e!=null&&a({at_hour:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]),N(`div`,ct,[N(`h4`,lt,V(x(i)(`settings.session.liveMonitor`,`实时监看`)),1),G(Q,{label:x(i)(`settings.session.liveMonitorHumanOnly`),hint:x(i)(`settings.session.liveMonitorHumanOnlyHint`)},{default:Y(()=>[G(x(f),{value:x(n).humanOnly,"onUpdate:value":r[3]||=e=>x(n).setHumanOnly(e)},null,8,[`value`])]),_:1},8,[`label`,`hint`])]),N(`div`,ut,[N(`h4`,dt,V(x(i)(`settings.session.retention`,`保留`)),1),G(Q,{label:x(i)(`settings.session.retentionDays`),hint:x(i)(`settings.session.retentionDaysHint`)},{default:Y(()=>[G(x(o),{value:x(t).sessions.retention_days,min:1,max:365,step:1,size:`small`,class:`input-sm`,"onUpdate:value":r[4]||=e=>e!=null&&s({retention_days:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(i)(`settings.session.autoPrune`),hint:x(i)(`settings.session.autoPruneHint`)},{default:Y(()=>[G(x(f),{value:x(t).sessions.auto_prune,"onUpdate:value":r[5]||=e=>s({auto_prune:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(i)(`settings.session.vacuumAfterPrune`),hint:x(i)(`settings.session.vacuumAfterPruneHint`)},{default:Y(()=>[G(x(f),{value:x(t).sessions.vacuum_after_prune,"onUpdate:value":r[6]||=e=>s({vacuum_after_prune:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])])]))}}),[[`__scopeId`,`data-v-eb1104c9`]]),pt={class:`settings-section`},mt={class:`config-block`},ht={class:`section-header`},gt={class:`section-title`},_t={key:0,class:`empty-hint`},vt={class:`config-block`},yt={class:`section-header`},bt={class:`section-title`},xt={key:0,class:`configured-badge`},St={class:`auxiliary-list`},Ct=[`onClick`],wt={class:`auxiliary-icon`},Tt={class:`auxiliary-label`},Et={class:`auxiliary-model-preview`},Dt={key:0,class:`auxiliary-card-body`},Ot={class:`config-block`},kt={class:`section-title`},At=W(U({__name:`ModelSettings`,setup(e){let{t}=H(),n=s(),r=R(),i=re(),a=B(),d=_(!1),f=[{key:`compression`,icon:`📦`},{key:`flush_memories`,icon:`🧹`},{key:`mcp`,icon:`🔌`},{key:`session_search`,icon:`🔍`},{key:`skills_hub`,icon:`📚`},{key:`title_generation`,icon:`✏️`},{key:`vision`,icon:`👁️`},{key:`web_extract`,icon:`🌐`},{key:`approval`,icon:`✅`}],p=_(new Set);function m(e){p.value.has(e)?p.value.delete(e):p.value.add(e)}function h(e){return r.auxiliary[e]||{}}let g=E(()=>i.modelGroups.map(e=>({label:e.label,value:e.provider})));function v(e){let t=i.modelGroups.find(t=>t.provider===e);return t?t.models:[]}async function b(e,n){let i=v(n)[0]||``;try{await r.saveSection(`auxiliary`,{[e]:{provider:n,model:i,base_url:``,api_key:``}}),a.success(t(`settings.saved`))}catch{a.error(t(`settings.saveFailed`))}}async function ee(e,n){let i=h(e);try{await r.saveSection(`auxiliary`,{[e]:{provider:i.provider||``,model:n}}),a.success(t(`settings.saved`))}catch{a.error(t(`settings.saveFailed`))}}async function C(e,n,i){try{await r.saveSection(`auxiliary`,{[e]:{[n]:i}}),a.success(t(`settings.saved`))}catch{a.error(t(`settings.saveFailed`))}}let T=E(()=>g.value),ne=E(()=>{let e=r.fallbackModel?.provider;return e?v(e).map(e=>({label:e,value:e})):[]});async function O(e){let n=v(e)[0]||``;try{await r.saveSection(`fallback_model`,{provider:e,model:n}),a.success(t(`settings.saved`))}catch{a.error(t(`settings.saveFailed`))}}async function k(e){try{await r.saveSection(`fallback_model`,{model:e}),a.success(t(`settings.saved`))}catch{a.error(t(`settings.saveFailed`))}}let A=E(()=>f.filter(e=>r.auxiliary[e.key]?.model).length);be(async()=>{try{await l()}catch{}n.providers.length===0&&n.fetchProviders(),i.modelGroups.length===0&&i.loadModels()});function j(){d.value=!0}function ie(){d.value=!1}async function ae(){await n.fetchProviders(),i.loadModels(),ie()}return(e,i)=>(L(),D(S,null,[N(`section`,pt,[N(`div`,mt,[N(`div`,ht,[N(`h4`,gt,V(x(t)(`settings.models.providerManagement`)),1),G(x(Z),{type:`primary`,size:`small`,onClick:j},{icon:Y(()=>[...i[4]||=[N(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[N(`line`,{x1:`12`,y1:`5`,x2:`12`,y2:`19`}),N(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`})],-1)]]),default:Y(()=>[I(` `+V(x(t)(`models.addProvider`)),1)]),_:1})]),G(x(xe),{show:x(n).loading&&x(n).providers.length===0},{default:Y(()=>[x(n).providers.length===0?(L(),D(`div`,_t,[G(x(te),{description:x(t)(`settings.models.noProviders`)},null,8,[`description`])])):P(``,!0),G(u)]),_:1},8,[`show`])]),N(`div`,vt,[N(`div`,yt,[N(`h4`,bt,[I(V(x(t)(`settings.auxiliary.title`))+` `,1),A.value>0?(L(),D(`span`,xt,V(A.value)+`/`+V(f.length),1)):P(``,!0)])]),N(`div`,St,[(L(),D(S,null,fe(f,e=>N(`div`,{key:e.key,class:y([`auxiliary-card`,{expanded:p.value.has(e.key)}])},[N(`div`,{class:`auxiliary-card-header`,onClick:t=>m(e.key)},[N(`span`,wt,V(e.icon),1),N(`span`,Tt,V(x(t)(`settings.auxiliary.${e.key}`)),1),N(`span`,Et,V(h(e.key).model||`—`),1),(L(),D(`svg`,{class:y([`chevron`,{rotated:p.value.has(e.key)}]),width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[...i[5]||=[N(`polyline`,{points:`9 18 15 12 9 6`},null,-1)]],2))],8,Ct),p.value.has(e.key)?(L(),D(`div`,Dt,[G(Q,{label:x(t)(`settings.auxiliary.provider`)},{default:Y(()=>[G(x(w),{value:h(e.key).provider||void 0,options:g.value,size:`small`,filterable:!0,"show-tooltip":!0,clearable:``,placeholder:x(t)(`settings.auxiliary.selectProvider`),style:{"max-width":`200px`},"onUpdate:value":t=>t&&b(e.key,t),onClear:()=>C(e.key,`provider`,``)},null,8,[`value`,`options`,`placeholder`,`onUpdate:value`,`onClear`])]),_:2},1032,[`label`]),G(Q,{label:x(t)(`settings.auxiliary.model`)},{default:Y(()=>[G(x(w),{value:h(e.key).model||void 0,options:v(h(e.key).provider||``).map(e=>({label:e,value:e})),size:`small`,filterable:!0,"show-tooltip":!0,clearable:``,disabled:!h(e.key).provider,placeholder:h(e.key).provider?x(t)(`settings.auxiliary.selectModel`):x(t)(`settings.auxiliary.selectProviderFirst`),style:{"max-width":`200px`},"onUpdate:value":t=>t&&ee(e.key,t),onClear:()=>C(e.key,`model`,``)},null,8,[`value`,`options`,`disabled`,`placeholder`,`onUpdate:value`,`onClear`])]),_:2},1032,[`label`]),G(Q,{label:x(t)(`settings.auxiliary.timeout`),hint:x(t)(`settings.auxiliary.timeoutHint`)},{default:Y(()=>[G(x(o),{value:h(e.key).timeout,min:5,max:300,step:5,size:`small`,class:`input-sm`,"onUpdate:value":t=>t!=null&&C(e.key,`timeout`,t)},null,8,[`value`,`onUpdate:value`])]),_:2},1032,[`label`,`hint`]),e.key===`session_search`?(L(),M(Q,{key:0,label:x(t)(`settings.auxiliary.maxConcurrency`),hint:x(t)(`settings.auxiliary.maxConcurrencyHint`)},{default:Y(()=>[G(x(o),{value:h(e.key).max_concurrency,min:1,max:10,step:1,size:`small`,class:`input-sm`,"onUpdate:value":t=>t!=null&&C(e.key,`max_concurrency`,t)},null,8,[`value`,`onUpdate:value`])]),_:2},1032,[`label`,`hint`])):P(``,!0),e.key===`vision`?(L(),M(Q,{key:1,label:x(t)(`settings.auxiliary.downloadTimeout`),hint:x(t)(`settings.auxiliary.downloadTimeoutHint`)},{default:Y(()=>[G(x(o),{value:h(e.key).download_timeout,min:5,max:120,step:5,size:`small`,class:`input-sm`,"onUpdate:value":t=>t!=null&&C(e.key,`download_timeout`,t)},null,8,[`value`,`onUpdate:value`])]),_:2},1032,[`label`,`hint`])):P(``,!0),e.key===`approval`?(L(),M(Q,{key:2,label:x(t)(`settings.auxiliary.apiMode`),hint:x(t)(`settings.auxiliary.apiModeHint`)},{default:Y(()=>[G(x(w),{value:h(e.key).api_mode||`chat_completions`,options:[{label:x(t)(`settings.auxiliary.chatCompletions`),value:`chat_completions`},{label:x(t)(`settings.auxiliary.responses`),value:`responses`}],size:`small`,class:`input-sm`,"show-tooltip":!0,"onUpdate:value":t=>C(e.key,`api_mode`,t)},null,8,[`value`,`options`,`onUpdate:value`])]),_:2},1032,[`label`,`hint`])):P(``,!0)])):P(``,!0)],2)),64))])]),N(`div`,Ot,[N(`h4`,kt,V(x(t)(`settings.fallback.title`)),1),G(Q,{label:x(t)(`settings.fallback.provider`)},{default:Y(()=>[G(x(w),{value:x(r).fallbackModel?.provider||void 0,options:T.value,size:`small`,filterable:!0,"show-tooltip":!0,clearable:``,placeholder:x(t)(`settings.auxiliary.selectProvider`),style:{"max-width":`200px`},"onUpdate:value":i[0]||=e=>e&&O(e),onClear:i[1]||=async()=>{try{await x(r).saveSection(`fallback_model`,{provider:``,model:``}),x(a).success(x(t)(`settings.saved`))}catch{x(a).error(x(t)(`settings.saveFailed`))}}},null,8,[`value`,`options`,`placeholder`])]),_:1},8,[`label`]),G(Q,{label:x(t)(`settings.fallback.model`)},{default:Y(()=>[G(x(w),{value:x(r).fallbackModel?.model||void 0,options:ne.value,size:`small`,filterable:!0,"show-tooltip":!0,clearable:``,disabled:!x(r).fallbackModel?.provider,placeholder:x(r).fallbackModel?.provider?x(t)(`settings.auxiliary.selectModel`):x(t)(`settings.auxiliary.selectProviderFirst`),style:{"max-width":`200px`},"onUpdate:value":i[2]||=e=>e&&k(e),onClear:i[3]||=async()=>{try{await x(r).saveSection(`fallback_model`,{model:``}),x(a).success(x(t)(`settings.saved`))}catch{x(a).error(x(t)(`settings.saveFailed`))}}},null,8,[`value`,`options`,`disabled`,`placeholder`])]),_:1},8,[`label`])])]),d.value?(L(),M(c,{key:0,onClose:ie,onSaved:ae})):P(``,!0)],64))}}),[[`__scopeId`,`data-v-d15bd42f`]]),jt={class:`settings-section`},Mt={class:`config-block`},Nt={class:`config-block-title`},Pt={class:`config-block`},Ft={class:`config-block-title`},It=W(U({__name:`MemorySettings`,setup(e){let t=R(),n=B(),{t:r}=H();async function i(e){try{await t.saveSection(`memory`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(L(),D(`section`,jt,[N(`div`,Mt,[N(`div`,Nt,V(x(r)(`settings.memory.basic`,`基础`)),1),G(Q,{label:x(r)(`settings.memory.enabled`),hint:x(r)(`settings.memory.enabledHint`)},{default:Y(()=>[G(x(f),{value:x(t).memory.memory_enabled,"onUpdate:value":n[0]||=e=>i({memory_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.memory.userProfile`),hint:x(r)(`settings.memory.userProfileHint`)},{default:Y(()=>[G(x(f),{value:x(t).memory.user_profile_enabled,"onUpdate:value":n[1]||=e=>i({user_profile_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.memory.charLimit`),hint:x(r)(`settings.memory.charLimitHint`)},{default:Y(()=>[G(x(o),{value:x(t).memory.memory_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({memory_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.memory.userCharLimit`),hint:x(r)(`settings.memory.userCharLimitHint`)},{default:Y(()=>[G(x(o),{value:x(t).memory.user_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>e!=null&&i({user_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]),N(`div`,Pt,[N(`div`,Ft,V(x(r)(`settings.memory.advanced`,`高级`)),1),G(Q,{label:x(r)(`settings.memory.nudgeInterval`),hint:x(r)(`settings.memory.nudgeIntervalHint`)},{default:Y(()=>[G(x(o),{value:x(t).memory.nudge_interval,min:1,max:50,step:1,size:`small`,class:`input-sm`,"onUpdate:value":n[4]||=e=>e!=null&&i({nudge_interval:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.memory.retrievalThreshold`),hint:x(r)(`settings.memory.retrievalThresholdHint`)},{default:Y(()=>[G(x(o),{value:x(t).memory.retrieval_threshold,min:0,max:1,step:.05,size:`small`,class:`input-sm`,"onUpdate:value":n[5]||=e=>e!=null&&i({retrieval_threshold:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.memory.maxMemoryEntries`),hint:x(r)(`settings.memory.maxMemoryEntriesHint`)},{default:Y(()=>[G(x(o),{value:x(t).memory.max_memory_entries,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[6]||=e=>e!=null&&i({max_memory_entries:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.memory.flushMinTurns`),hint:x(r)(`settings.memory.flushMinTurnsHint`)},{default:Y(()=>[G(x(o),{value:x(t).memory.flush_min_turns,min:1,max:50,step:1,size:`small`,class:`input-sm`,"onUpdate:value":n[7]||=e=>e!=null&&i({flush_min_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])])]))}}),[[`__scopeId`,`data-v-e0643033`]]),Lt={class:`settings-section`},Rt={class:`config-block`},zt={class:`config-block-title`},Bt={class:`config-block`},Vt={class:`config-block-title`},Ht={class:`config-block`},Ut={class:`config-block-title`},Wt=W(U({__name:`SafetyApprovalSettings`,setup(e){let t=R(),n=B(),{t:r}=H();async function i(e){try{await t.saveSection(`approvals`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}async function a(e){try{await t.saveSection(`human_delay`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}async function s(e){try{await t.saveSection(`security`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(L(),D(`section`,Lt,[N(`div`,Rt,[N(`h4`,zt,V(x(r)(`settings.approvals.approvalMode`)),1),G(Q,{label:x(r)(`settings.approvals.mode`),hint:x(r)(`settings.approvals.modeHint`)},{default:Y(()=>[G(x(w),{value:x(t).approvals.mode||`manual`,options:[{label:x(r)(`settings.approvals.manual`),value:`manual`},{label:x(r)(`settings.approvals.autoOff`),value:`auto-off`}],size:`small`,class:`input-sm`,"onUpdate:value":n[0]||=e=>i({mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.approvals.cronMode`),hint:x(r)(`settings.approvals.cronModeHint`)},{default:Y(()=>[G(x(w),{value:x(t).approvals.cron_mode||`deny`,options:[{label:x(r)(`settings.approvals.deny`),value:`deny`},{label:x(r)(`settings.approvals.allow`),value:`allow`},{label:x(r)(`settings.approvals.manual`),value:`manual`}],size:`small`,class:`input-sm`,"onUpdate:value":n[1]||=e=>i({cron_mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.approvals.timeout`),hint:x(r)(`settings.approvals.timeoutHint`)},{default:Y(()=>[G(x(o),{value:x(t).approvals.timeout,min:10,max:600,step:10,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&i({timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]),N(`div`,Bt,[N(`h4`,Vt,V(x(r)(`settings.humanDelay.humanDelay`)),1),G(Q,{label:x(r)(`settings.humanDelay.mode`),hint:x(r)(`settings.humanDelay.modeHint`)},{default:Y(()=>[G(x(w),{value:x(t).humanDelay.mode||`off`,options:[{label:x(r)(`settings.humanDelay.off`),value:`off`},{label:x(r)(`settings.humanDelay.random`),value:`random`}],size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>a({mode:e})},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.humanDelay.minMs`),hint:x(r)(`settings.humanDelay.minMsHint`)},{default:Y(()=>[G(x(o),{value:x(t).humanDelay.min_ms,min:100,max:5e3,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[4]||=e=>e!=null&&a({min_ms:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.humanDelay.maxMs`),hint:x(r)(`settings.humanDelay.maxMsHint`)},{default:Y(()=>[G(x(o),{value:x(t).humanDelay.max_ms,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[5]||=e=>e!=null&&a({max_ms:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]),N(`div`,Ht,[N(`h4`,Ut,V(x(r)(`settings.security.securityBlock`)),1),G(Q,{label:x(r)(`settings.security.redactSecrets`),hint:x(r)(`settings.security.redactSecretsHint`)},{default:Y(()=>[G(x(f),{value:x(t).security.redact_secrets,"onUpdate:value":n[6]||=e=>s({redact_secrets:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),G(Q,{label:x(r)(`settings.security.allowPrivateUrls`),hint:x(r)(`settings.security.allowPrivateUrlsHint`)},{default:Y(()=>[G(x(f),{value:x(t).security.allow_private_urls,"onUpdate:value":n[7]||=e=>s({allow_private_urls:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])])]))}}),[[`__scopeId`,`data-v-90756d57`]]),Gt={class:`workspace-settings`},Kt={key:0,class:`workspace-list`},qt={class:`workspace-info`},Jt={class:`workspace-name`},Yt=[`title`],Xt={key:1,class:`workspace-form`},Zt={class:`form-row`},Qt={class:`form-row`},$t=W(U({__name:`WorkspaceSettings`,setup(e){let{t}=H(),n=B(),r=_([]),i=_(!1),a=_(!1),o=_(``),s=_(``),c=_(null);async function l(){i.value=!0;try{r.value=await ke()}finally{i.value=!1}}be(l);function u(){o.value=``,s.value=``,a.value=!1,c.value=null}async function f(){let e=o.value.trim(),i=s.value.trim();if(!(!e||!i))try{if(c.value){let a=await Oe(c.value,{name:e,path:i}),o=r.value.findIndex(e=>e.id===c.value);o>=0&&(r.value[o]=a),n.success(t(`common.saved`))}else{let a=await Ae(e,i);r.value.push(a),n.success(t(`common.saved`))}u()}catch(e){let r=e?.message||``;r.includes(`409`)||r.includes(`already exists`)?n.error(t(`settings.workspace.nameExists`)):r.includes(`400`)||r.includes(`does not exist`)?n.error(t(`settings.workspace.pathNotExists`)):n.error(t(`common.saveFailed`))}}function m(e){c.value=e.id,o.value=e.name,s.value=e.path,a.value=!0}async function h(e){await je(e)?(r.value=r.value.filter(t=>t.id!==e),n.success(t(`common.saved`))):n.error(t(`common.deleteFailed`))}return(e,n)=>(L(),D(`section`,Gt,[a.value?(L(),D(`div`,Xt,[N(`div`,Zt,[N(`label`,null,V(x(t)(`settings.workspace.name`)),1),G(x(k),{value:o.value,"onUpdate:value":n[1]||=e=>o.value=e,size:`small`,placeholder:x(t)(`settings.workspace.namePlaceholder`),onKeydown:C(f,[`enter`])},null,8,[`value`,`placeholder`])]),N(`div`,Qt,[N(`label`,null,V(x(t)(`settings.workspace.path`)),1),G(x(k),{value:s.value,"onUpdate:value":n[2]||=e=>s.value=e,size:`small`,placeholder:x(t)(`settings.workspace.pathPlaceholder`),onKeydown:C(f,[`enter`])},null,8,[`value`,`placeholder`])]),G(x(d),{size:`small`},{default:Y(()=>[G(x(Z),{size:`small`,type:`primary`,disabled:!o.value.trim()||!s.value.trim(),onClick:f},{default:Y(()=>[I(V(c.value?x(t)(`common.update`):x(t)(`common.create`)),1)]),_:1},8,[`disabled`]),G(x(Z),{size:`small`,onClick:u},{default:Y(()=>[I(V(x(t)(`common.cancel`)),1)]),_:1})]),_:1})])):(L(),D(`div`,Kt,[r.value.length===0&&!i.value?(L(),M(x(te),{key:0,description:x(t)(`settings.workspace.empty`)},null,8,[`description`])):P(``,!0),(L(!0),D(S,null,fe(r.value,e=>(L(),D(`div`,{key:e.id,class:`workspace-item`},[N(`div`,qt,[N(`span`,Jt,V(e.name),1),N(`span`,{class:`workspace-path`,title:e.path},V(e.path),9,Yt)]),G(x(d),{size:`small`},{default:Y(()=>[G(x(Z),{size:`tiny`,quaternary:``,onClick:t=>m(e)},{default:Y(()=>[I(V(x(t)(`common.edit`)),1)]),_:1},8,[`onClick`]),G(x(p),{"positive-text":x(t)(`common.confirm`),"negative-text":x(t)(`common.cancel`),onPositiveClick:t=>h(e.id)},{trigger:Y(()=>[G(x(Z),{size:`tiny`,quaternary:``,type:`error`},{default:Y(()=>[I(V(x(t)(`common.delete`)),1)]),_:1})]),default:Y(()=>[I(` `+V(x(t)(`settings.workspace.deleteConfirm`)),1)]),_:1},8,[`positive-text`,`negative-text`,`onPositiveClick`])]),_:2},1024)]))),128)),G(x(Z),{class:`add-btn`,dashed:``,type:`primary`,size:`small`,onClick:n[0]||=e=>{a.value=!0,c.value=null}},{default:Y(()=>[I(` + `+V(x(t)(`settings.workspace.add`)),1)]),_:1})]))]))}}),[[`__scopeId`,`data-v-b65db1e5`]]),en={class:`settings-view`},tn={class:`page-header`},nn={class:`header-title`},rn={class:`settings-content`},an=W(U({__name:`SettingsView`,setup(e){let t=R(),{t:n}=H();return be(()=>{t.fetchSettings()}),(e,r)=>(L(),D(`div`,en,[N(`header`,tn,[N(`h2`,nn,V(x(n)(`settings.title`)),1)]),N(`div`,rn,[G(x(xe),{show:x(t).loading||x(t).saving,size:`large`,description:x(n)(`common.loading`)},{default:Y(()=>[G(x(Ke),{type:`line`,animated:``},{default:Y(()=>[G(x($),{name:`display`,tab:x(n)(`settings.tabs.display`)},{default:Y(()=>[G(Qe)]),_:1},8,[`tab`]),G(x($),{name:`agent`,tab:x(n)(`settings.tabs.agent`)},{default:Y(()=>[G(it)]),_:1},8,[`tab`]),G(x($),{name:`session`,tab:x(n)(`settings.tabs.session`)},{default:Y(()=>[G(ft)]),_:1},8,[`tab`]),G(x($),{name:`model`,tab:x(n)(`settings.tabs.model`)},{default:Y(()=>[G(At)]),_:1},8,[`tab`]),G(x($),{name:`memory`,tab:x(n)(`settings.tabs.memory`)},{default:Y(()=>[G(It)]),_:1},8,[`tab`]),G(x($),{name:`safety`,tab:x(n)(`settings.tabs.safety`)},{default:Y(()=>[G(Wt)]),_:1},8,[`tab`]),G(x($),{name:`workspace`,tab:x(n)(`settings.tabs.workspace`)},{default:Y(()=>[G($t)]),_:1},8,[`tab`])]),_:1})]),_:1},8,[`show`,`description`])])]))}}),[[`__scopeId`,`data-v-b55ee083`]]);export{an as default};