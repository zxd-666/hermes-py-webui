import{S as e}from"./_baseFor-DyDN1Ubb.js";import{n as t,t as n}from"./now-Bfs38kzc.js";import{t as r}from"./Add-KLNRL3SO.js";import{t as i}from"./InputNumber-BKQXgaEJ.js";import{t as a}from"./Space-CuupvP-e.js";import{t as o}from"./Switch-BAnXA4Xy.js";import{t as s}from"./Popconfirm-C-suWUK7.js";import{$r as c,Ci as l,Cn as u,Cr as d,Fn as f,Fr as p,Gr as m,Hr as h,In as g,Ir as _,Jn as v,Jr as y,K as b,Kr as x,L as S,N as C,Nr as w,Pn as T,Qn as ee,Qr as E,Sn as D,Tn as O,Ur as k,Vr as A,Wr as j,Xr as M,Yn as te,Yr as N,Zn as ne,_ as re,_i as P,_n as ie,_r as F,bi as I,c as L,ci as ae,cr as oe,di as se,dt as ce,ei as le,fi as ue,gr as R,hr as z,ii as B,j as V,jn as H,mi as de,mn as fe,mr as U,nt as pe,oi as W,p as me,pi as G,pn as he,pt as ge,si as _e,ti as ve,ur as K,vi as q,vn as ye,vr as J,w as Y,yn as be,yr as X,zr as xe}from"./index-DGKbwP2E.js";import{t as Z}from"./settings-DVUmFSRe.js";import{t as Q}from"./SettingRow-C3it9KN3.js";import{i as Se,n as Ce,r as we,t as Te}from"./workspaces-H3jyux07.js";var Ee=T(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[T(`&::-webkit-scrollbar`,{width:0,height:0})]),De=M({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=P(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=g();return Ee.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:f,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return E(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Oe=`Expected a function`,ke=Math.max,Ae=Math.min;function je(r,i,a){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof r!=`function`)throw TypeError(Oe);i=t(i)||0,e(a)&&(p=!!a.leading,m=`maxWait`in a,c=m?ke(t(a.maxWait)||0,i):c,h=`trailing`in a?!!a.trailing:h);function g(e){var t=o,n=s;return o=s=void 0,f=e,l=r.apply(n,t),l}function _(e){return f=e,u=setTimeout(b,i),p?g(e):l}function v(e){var t=e-d,n=e-f,r=i-t;return m?Ae(r,c-n):r}function y(e){var t=e-d,n=e-f;return d===void 0||t>=i||t<0||m&&n>=c}function b(){var e=n();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function C(){return u===void 0?l:x(n())}function w(){var e=n(),t=y(e);if(o=arguments,s=this,d=e,t){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,i),g(d)}return u===void 0&&(u=setTimeout(b,i)),l}return w.cancel=S,w.flush=C,w}var Me=`Expected a function`;function Ne(t,n,r){var i=!0,a=!0;if(typeof t!=`function`)throw TypeError(Me);return e(r)&&(i=`leading`in r?!!r.leading:i,a=`trailing`in r?!!r.trailing:a),je(t,n,{leading:i,maxWait:n,trailing:a})}var Pe=v(`n-tabs`),Fe={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},$=M({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:Fe,slots:Object,setup(e){let t=c(Pe,null);return t||O(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return E(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Ie=M({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},be(Fe,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:l,tabChangeIdRef:u,onBeforeLeaveRef:d,triggerRef:f,handleAdd:p,activateTab:m,handleClose:g}=c(Pe);return{trigger:f,mergedClosable:h(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:l,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&g(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){p();return}let{name:t}=e,r=++u.id;if(t!==n.value){let{value:i}=d;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&u.id===r&&m(t)}):m(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:i,label:a,tab:o,value:s,mergedClosable:c,trigger:l,$slots:{default:u}}=this,d=a??o;return E(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?E(`div`,{class:`${t}-tabs-tab-pad`}):null,E(`div`,Object.assign({key:n,"data-name":n,"data-disabled":i?!0:void 0},le({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,i&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),E(`span`,{class:`${t}-tabs-tab__label`},e?E(xe,null,E(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),E(ce,{clsPrefix:t},{default:()=>E(r,null)})):u?u():typeof d==`object`?d:ye(d??n)),c&&this.type===`card`?E(pe,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:i}):null))}}),Le=z(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[F(`segment-type`,[z(`tabs-rail`,[U(`&.transition-disabled`,[z(`tabs-capsule`,`
 transition: none;
 `)])])]),F(`top`,[z(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),F(`left`,[z(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),F(`left, right`,`
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
 `)]),F(`right`,`
 flex-direction: row-reverse;
 `,[z(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),z(`tabs-bar`,`
 left: 0;
 `)]),F(`bottom`,`
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
 `,[F(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),U(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),F(`flex`,[z(`tabs-nav`,`
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
 `,[R(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),R(`prefix`,`padding-right: 16px;`),R(`suffix`,`padding-left: 16px;`)]),F(`top, bottom`,[U(`>`,[z(`tabs-nav`,[z(`tabs-nav-scroll-wrapper`,[U(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),U(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),F(`shadow-start`,[U(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),F(`shadow-end`,[U(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),F(`left, right`,[z(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),U(`>`,[z(`tabs-nav`,[z(`tabs-nav-scroll-wrapper`,[U(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),U(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),F(`shadow-start`,[U(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),F(`shadow-end`,[U(`&::after`,`
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
 `,[U(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),U(`&::before, &::after`,`
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
 `,[F(`disabled`,{cursor:`not-allowed`}),R(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),R(`label`,`
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
 `,[U(`&.transition-disabled`,`
 transition: none;
 `),F(`disabled`,`
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
 `,[U(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),U(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),U(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),U(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),U(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),z(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),F(`line-type, bar-type`,[z(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[U(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),F(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),F(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),z(`tabs-nav`,[F(`line-type`,[F(`top`,[R(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),z(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),z(`tabs-bar`,`
 bottom: -1px;
 `)]),F(`left`,[R(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),z(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),z(`tabs-bar`,`
 right: -1px;
 `)]),F(`right`,[R(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),z(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),z(`tabs-bar`,`
 left: -1px;
 `)]),F(`bottom`,[R(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),z(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),z(`tabs-bar`,`
 top: -1px;
 `)]),R(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),z(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),z(`tabs-bar`,`
 border-radius: 0;
 `)]),F(`card-type`,[R(`prefix, suffix`,`
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
 `,[F(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[R(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),J(`disabled`,[U(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),F(`closable`,`padding-right: 8px;`),F(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),F(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),F(`left, right`,`
 flex-direction: column; 
 `,[R(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),z(`tabs-wrapper`,`
 flex-direction: column;
 `),z(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[z(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),F(`top`,[F(`card-type`,[z(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),R(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),z(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[F(`active`,`
 border-bottom: 1px solid #0000;
 `)]),z(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),z(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),F(`left`,[F(`card-type`,[z(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),R(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),z(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[F(`active`,`
 border-right: 1px solid #0000;
 `)]),z(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),z(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),F(`right`,[F(`card-type`,[z(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),R(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),z(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[F(`active`,`
 border-left: 1px solid #0000;
 `)]),z(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),z(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),F(`bottom`,[F(`card-type`,[z(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),R(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),z(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[F(`active`,`
 border-top: 1px solid #0000;
 `)]),z(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),z(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Re=Ne,ze=M({name:`Tabs`,props:Object.assign(Object.assign({},ge.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=fe(e),a=ge(`Tabs`,`-tabs`,Le,re,e,n),o=P(null),s=P(null),c=P(null),l=P(null),d=P(null),f=P(null),p=P(!0),m=P(!0),g=te(e,[`labelSize`,`size`]),_=h(()=>g.value?g.value:i?.value?.Tabs?.size||`medium`),v=te(e,[`activeName`,`value`]),y=P(v.value??e.defaultValue??(t.default?D(t.default())[0]?.props?.name:null)),b=ne(v,y),x={id:0},S=h(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});se(b,()=>{x.id=0,O(),k()});function C(){let{value:e}=b;return e===null?null:o.value?.querySelector(`[data-name="${e}"]`)}function w(t){if(e.type===`card`)return;let{value:r}=s;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(E([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(E([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function T(){if(e.type===`card`)return;let{value:t}=s;t&&(t.style.opacity=`0`)}function E(e){let{value:t}=s;if(t)for(let n of e)t.style[n]=``}function O(){if(e.type===`card`)return;let t=C();t?w(t):T()}function k(){let e=d.value?.$el;if(!e)return;let t=C();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let A=P(null),j=0,M=null;function N(e){let t=A.value;if(t){j=e.getBoundingClientRect().height;let n=`${j}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};M?(r(),M(),M=null):M=r}}function ie(e){let t=A.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(j,n)}px`};M?(M(),M=null,r()):M=r}}function F(){let t=A.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let I={value:[]},L=P(`next`);function ae(e){let t=b.value,n=`next`;for(let r of I.value){if(r===t)break;if(r===e){n=`prev`;break}}L.value=n,ce(e)}function ce(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&u(n,t),r&&u(r,t),i&&u(i,t),y.value=t}function le(t){let{onClose:n}=e;n&&u(n,t)}let R=!0;function z(){let{value:e}=s;if(!e)return;R||=!1;let t=`transition-disabled`;e.classList.add(t),O(),e.classList.remove(t)}let V=P(null);function H({transitionDisabled:e}){let t=o.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=C();n&&V.value&&(V.value.style.width=`${n.offsetWidth}px`,V.value.style.height=`${n.offsetHeight}px`,V.value.style.transform=`translateX(${n.offsetLeft-oe(getComputedStyle(t).paddingLeft)}px)`,e&&V.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}se([b],()=>{e.type===`segment`&&ve(()=>{H({transitionDisabled:!1})})}),B(()=>{e.type===`segment`&&H({transitionDisabled:!0})});let de=0;function U(t){if(t.contentRect.width===0&&t.contentRect.height===0||de===t.contentRect.width)return;de=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(R||e.justifyContent?.startsWith(`space`))&&z(),n!==`segment`){let{placement:t}=e;J((t===`top`||t===`bottom`?d.value?.$el:f.value)||null)}}let pe=Re(U,64);se([()=>e.justifyContent,()=>e.size],()=>{ve(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&z()})});let W=P(!1);function me(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!W.value)s===`top`||s===`bottom`?a<r&&(W.value=!0):o<i&&(W.value=!0);else{let{value:e}=l;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(W.value=!1):o-i>e.$el.offsetHeight&&(W.value=!1)}J(d.value?.$el||null)}let G=Re(me,64);function ye(){let{onAdd:t}=e;t&&t(),ve(()=>{let e=C(),{value:t}=d;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function J(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;p.value=e<=0,m.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;p.value=e<=0,m.value=e+r>=n}}let Y=Re(e=>{J(e.target)},64);_e(Pe,{triggerRef:q(e,`trigger`),tabStyleRef:q(e,`tabStyle`),tabClassRef:q(e,`tabClass`),addTabStyleRef:q(e,`addTabStyle`),addTabClassRef:q(e,`addTabClass`),paneClassRef:q(e,`paneClass`),paneStyleRef:q(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:q(e,`type`),closableRef:q(e,`closable`),valueRef:b,tabChangeIdRef:x,onBeforeLeaveRef:q(e,`onBeforeLeave`),activateTab:ae,handleClose:le,handleAdd:ye}),ee(()=>{O(),k()}),ue(()=>{let{value:e}=c;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;p.value?e.classList.remove(r):e.classList.add(r),m.value?e.classList.remove(i):e.classList.add(i)});let be={syncBarPosition:()=>{O()}},xe=()=>{H({transitionDisabled:!0})},Z=h(()=>{let{value:t}=_,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:o,closeIconColorHover:s,closeIconColorPressed:c,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:v,closeSize:y,closeIconSize:b,closeColorHover:x,closeColorPressed:S,closeBorderRadius:C,[X(`panePadding`,t)]:w,[X(`tabPadding`,r)]:T,[X(`tabPaddingVertical`,r)]:ee,[X(`tabGap`,r)]:E,[X(`tabGap`,`${r}Vertical`)]:D,[X(`tabTextColor`,n)]:O,[X(`tabTextColorActive`,n)]:k,[X(`tabTextColorHover`,n)]:A,[X(`tabTextColorDisabled`,n)]:j,[X(`tabFontSize`,t)]:M},common:{cubicBezierEaseInOut:te}}=a.value;return{"--n-bezier":te,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":M,"--n-tab-text-color":O,"--n-tab-text-color-active":k,"--n-tab-text-color-disabled":j,"--n-tab-text-color-hover":A,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":y,"--n-close-icon-size":b,"--n-close-color-hover":x,"--n-close-color-pressed":S,"--n-close-border-radius":C,"--n-close-icon-color":o,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":c,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":T,"--n-tab-padding-vertical":ee,"--n-tab-gap":E,"--n-tab-gap-vertical":D,"--n-pane-padding-left":K(w,`left`),"--n-pane-padding-right":K(w,`right`),"--n-pane-padding-top":K(w,`top`),"--n-pane-padding-bottom":K(w,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":v}}),Q=r?he(`tabs`,h(()=>`${_.value[0]}${e.type[0]}`),Z,e):void 0;return Object.assign({mergedClsPrefix:n,mergedValue:b,renderedNames:new Set,segmentCapsuleElRef:V,tabsPaneWrapperRef:A,tabsElRef:o,barElRef:s,addTabInstRef:l,xScrollInstRef:d,scrollWrapperElRef:c,addTabFixed:W,tabWrapperStyle:S,handleNavResize:pe,mergedSize:_,handleScroll:Y,handleTabsResize:G,cssVars:r?void 0:Z,themeClass:Q?.themeClass,animationDirection:L,renderNameListRef:I,yScrollElRef:f,handleSegmentResize:xe,onAnimationBeforeLeave:N,onAnimationEnter:ie,onAnimationAfterEnter:F,onRender:Q?.onRender},be)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,$slots:{default:u,prefix:d,suffix:f}}=this;s?.();let p=u?D(u()).filter(e=>e.type.__TAB_PANE__===!0):[],m=u?D(u()).filter(e=>e.type.__TAB__===!0):[],h=!m.length,g=t===`card`,_=t===`segment`,v=!g&&!_&&this.justifyContent;o.value=[];let y=()=>{let t=E(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},v?null:E(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),h?p.map((e,t)=>(o.value.push(e.props.name),Ue(E(Ie,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!v||v===`center`||v===`start`||v===`end`)}),e.children?{default:e.children.tab}:void 0)))):m.map((e,t)=>(o.value.push(e.props.name),Ue(t!==0&&!v?He(e):e))),!r&&i&&g?Ve(i,(h?p.length:m.length)!==0):null,v?null:E(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return E(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},g&&i?E(H,{onResize:this.handleTabsResize},{default:()=>t}):t,g?E(`div`,{class:`${e}-tabs-pad`}):null,g?null:E(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},b=_?`top`:n;return E(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,v&&`${e}-tabs--flex`,`${e}-tabs--${b}`],style:this.cssVars},E(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${b}`,`${e}-tabs-nav`]},ie(d,t=>t&&E(`div`,{class:`${e}-tabs-nav__prefix`},t)),_?E(H,{onResize:this.handleSegmentResize},{default:()=>E(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},E(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},E(`div`,{class:`${e}-tabs-wrapper`},E(`div`,{class:`${e}-tabs-tab`}))),h?p.map((e,t)=>(o.value.push(e.props.name),E(Ie,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):m.map((e,t)=>(o.value.push(e.props.name),t===0?e:He(e))))}):E(H,{onResize:this.handleNavResize},{default:()=>E(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(b)?E(De,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:y}):E(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},y()))}),r&&i&&g?Ve(i,!0):null,ie(f,t=>t&&E(`div`,{class:`${e}-tabs-nav__suffix`},t))),h&&(this.animated&&(b===`top`||b===`bottom`)?E(`div`,{ref:`tabsPaneWrapperRef`,style:l,class:[`${e}-tabs-pane-wrapper`,c]},Be(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Be(p,this.mergedValue,this.renderedNames)))}});function Be(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?de(e,[[p,c]]):e)}}),o?E(w,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function Ve(e,t){return E(Ie,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function He(e){let t=A(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Ue(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var We={class:`settings-section`},Ge=L(M({__name:`DisplaySettings`,setup(e){let t=Z(),n=Y(),{t:r}=d();async function i(e){try{await t.saveSection(`display`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(W(),x(`section`,We,[N(Q,{label:I(r)(`settings.display.streaming`),hint:I(r)(`settings.display.streamingHint`)},{default:G(()=>[N(I(o),{value:I(t).display.streaming,"onUpdate:value":n[0]||=e=>i({streaming:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),N(Q,{label:I(r)(`settings.display.compact`),hint:I(r)(`settings.display.compactHint`)},{default:G(()=>[N(I(o),{value:I(t).display.compact,"onUpdate:value":n[1]||=e=>i({compact:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),N(Q,{label:I(r)(`settings.display.showReasoning`),hint:I(r)(`settings.display.showReasoningHint`)},{default:G(()=>[N(I(o),{value:I(t).display.show_reasoning,"onUpdate:value":n[2]||=e=>i({show_reasoning:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),N(Q,{label:I(r)(`settings.display.showCost`),hint:I(r)(`settings.display.showCostHint`)},{default:G(()=>[N(I(o),{value:I(t).display.show_cost,"onUpdate:value":n[3]||=e=>i({show_cost:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),N(Q,{label:I(r)(`settings.display.inlineDiffs`),hint:I(r)(`settings.display.inlineDiffsHint`)},{default:G(()=>[N(I(o),{value:I(t).display.inline_diffs,"onUpdate:value":n[4]||=e=>i({inline_diffs:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),N(Q,{label:I(r)(`settings.display.bellOnComplete`),hint:I(r)(`settings.display.bellOnCompleteHint`)},{default:G(()=>[N(I(o),{value:I(t).display.bell_on_complete,"onUpdate:value":n[5]||=e=>i({bell_on_complete:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),N(Q,{label:I(r)(`settings.display.busyInputMode`),hint:I(r)(`settings.display.busyInputModeHint`)},{default:G(()=>[N(I(o),{value:I(t).display.busy_input_mode===`interrupt`,"onUpdate:value":n[6]||=e=>i({busy_input_mode:e?`interrupt`:`off`})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-7e248ea3`]]),Ke={class:`settings-section`},qe=L(M({__name:`AgentSettings`,setup(e){let t=Z(),n=Y(),{t:r}=d();async function a(e){try{await t.saveSection(`agent`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(W(),x(`section`,Ke,[N(Q,{label:I(r)(`settings.agent.maxTurns`),hint:I(r)(`settings.agent.maxTurnsHint`)},{default:G(()=>[N(I(i),{value:I(t).agent.max_turns,min:1,max:200,step:5,size:`small`,class:`input-sm`,"onUpdate:value":n[0]||=e=>e!=null&&a({max_turns:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),N(Q,{label:I(r)(`settings.agent.gatewayTimeout`),hint:I(r)(`settings.agent.gatewayTimeoutHint`)},{default:G(()=>[N(I(i),{value:I(t).agent.gateway_timeout,min:60,max:7200,step:60,size:`small`,class:`input-sm`,"onUpdate:value":n[1]||=e=>e!=null&&a({gateway_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),N(Q,{label:I(r)(`settings.agent.restartDrainTimeout`),hint:I(r)(`settings.agent.restartDrainTimeoutHint`)},{default:G(()=>[N(I(i),{value:I(t).agent.restart_drain_timeout,min:10,max:300,step:10,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&a({restart_drain_timeout:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),N(Q,{label:I(r)(`settings.agent.toolEnforcement`),hint:I(r)(`settings.agent.toolEnforcementHint`)},{default:G(()=>[N(I(V),{value:I(t).agent.tool_use_enforcement||`auto`,options:[{label:I(r)(`settings.agent.auto`),value:`auto`},{label:I(r)(`settings.agent.always`),value:`always`},{label:I(r)(`settings.agent.never`),value:`never`}],size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>a({tool_use_enforcement:e}),"show-tooltip":!0},null,8,[`value`,`options`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-e6b6033d`]]),Je={class:`settings-section`},Ye=L(M({__name:`MemorySettings`,setup(e){let t=Z(),n=Y(),{t:r}=d();async function a(e){try{await t.saveSection(`memory`,e),n.success(r(`settings.saved`))}catch{n.error(r(`settings.saveFailed`))}}return(e,n)=>(W(),x(`section`,Je,[N(Q,{label:I(r)(`settings.memory.enabled`),hint:I(r)(`settings.memory.enabledHint`)},{default:G(()=>[N(I(o),{value:I(t).memory.memory_enabled,"onUpdate:value":n[0]||=e=>a({memory_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),N(Q,{label:I(r)(`settings.memory.userProfile`),hint:I(r)(`settings.memory.userProfileHint`)},{default:G(()=>[N(I(o),{value:I(t).memory.user_profile_enabled,"onUpdate:value":n[1]||=e=>a({user_profile_enabled:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),N(Q,{label:I(r)(`settings.memory.charLimit`),hint:I(r)(`settings.memory.charLimitHint`)},{default:G(()=>[N(I(i),{value:I(t).memory.memory_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[2]||=e=>e!=null&&a({memory_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`]),N(Q,{label:I(r)(`settings.memory.userCharLimit`),hint:I(r)(`settings.memory.userCharLimitHint`)},{default:G(()=>[N(I(i),{value:I(t).memory.user_char_limit,min:100,max:1e4,step:100,size:`small`,class:`input-sm`,"onUpdate:value":n[3]||=e=>e!=null&&a({user_char_limit:e})},null,8,[`value`])]),_:1},8,[`label`,`hint`])]))}}),[[`__scopeId`,`data-v-0c8e2aa7`]]),Xe={class:`workspace-settings`},Ze={key:0,class:`workspace-list`},Qe={class:`workspace-info`},$e={class:`workspace-name`},et=[`title`],tt={key:1,class:`workspace-form`},nt={class:`form-row`},rt={class:`form-row`},it=L(M({__name:`WorkspaceSettings`,setup(e){let{t}=d(),n=Y(),r=P([]),i=P(!1),o=P(!1),c=P(``),u=P(``),f=P(null);async function p(){i.value=!0;try{r.value=await we()}finally{i.value=!1}}B(p);function h(){c.value=``,u.value=``,o.value=!1,f.value=null}async function g(){let e=c.value.trim(),i=u.value.trim();if(!(!e||!i))try{if(f.value){let a=await Se(f.value,{name:e,path:i}),o=r.value.findIndex(e=>e.id===f.value);o>=0&&(r.value[o]=a),n.success(t(`common.saved`))}else{let a=await Te(e,i);r.value.push(a),n.success(t(`common.saved`))}h()}catch(e){let r=e?.message||``;r.includes(`409`)||r.includes(`already exists`)?n.error(t(`settings.workspace.nameExists`)):r.includes(`400`)||r.includes(`does not exist`)?n.error(t(`settings.workspace.pathNotExists`)):n.error(t(`common.saveFailed`))}}function v(e){f.value=e.id,c.value=e.name,u.value=e.path,o.value=!0}async function w(e){await Ce(e)?(r.value=r.value.filter(t=>t.id!==e),n.success(t(`common.saved`))):n.error(t(`common.deleteFailed`))}return(e,n)=>(W(),x(`section`,Xe,[o.value?(W(),x(`div`,tt,[k(`div`,nt,[k(`label`,null,l(I(t)(`settings.workspace.name`)),1),N(I(S),{value:c.value,"onUpdate:value":n[1]||=e=>c.value=e,size:`small`,placeholder:I(t)(`settings.workspace.namePlaceholder`),onKeydown:_(g,[`enter`])},null,8,[`value`,`placeholder`])]),k(`div`,rt,[k(`label`,null,l(I(t)(`settings.workspace.path`)),1),N(I(S),{value:u.value,"onUpdate:value":n[2]||=e=>u.value=e,size:`small`,placeholder:I(t)(`settings.workspace.pathPlaceholder`),onKeydown:_(g,[`enter`])},null,8,[`value`,`placeholder`])]),N(I(a),{size:`small`},{default:G(()=>[N(I(C),{size:`small`,type:`primary`,disabled:!c.value.trim()||!u.value.trim(),onClick:g},{default:G(()=>[y(l(f.value?I(t)(`common.update`):I(t)(`common.create`)),1)]),_:1},8,[`disabled`]),N(I(C),{size:`small`,onClick:h},{default:G(()=>[y(l(I(t)(`common.cancel`)),1)]),_:1})]),_:1})])):(W(),x(`div`,Ze,[r.value.length===0&&!i.value?(W(),j(I(b),{key:0,description:I(t)(`settings.workspace.empty`)},null,8,[`description`])):m(``,!0),(W(!0),x(xe,null,ae(r.value,e=>(W(),x(`div`,{key:e.id,class:`workspace-item`},[k(`div`,Qe,[k(`span`,$e,l(e.name),1),k(`span`,{class:`workspace-path`,title:e.path},l(e.path),9,et)]),N(I(a),{size:`small`},{default:G(()=>[N(I(C),{size:`tiny`,quaternary:``,onClick:t=>v(e)},{default:G(()=>[y(l(I(t)(`common.edit`)),1)]),_:1},8,[`onClick`]),N(I(s),{onPositiveClick:t=>w(e.id)},{trigger:G(()=>[N(I(C),{size:`tiny`,quaternary:``,type:`error`},{default:G(()=>[y(l(I(t)(`common.delete`)),1)]),_:1})]),default:G(()=>[y(` `+l(I(t)(`settings.workspace.deleteConfirm`)),1)]),_:1},8,[`onPositiveClick`])]),_:2},1024)]))),128)),N(I(C),{class:`add-btn`,dashed:``,type:`primary`,size:`small`,onClick:n[0]||=e=>{o.value=!0,f.value=null}},{default:G(()=>[y(` + `+l(I(t)(`settings.workspace.add`)),1)]),_:1})]))]))}}),[[`__scopeId`,`data-v-d6989927`]]),at={class:`settings-view`},ot={class:`page-header`},st={class:`header-title`},ct={class:`settings-content`},lt=L(M({__name:`SettingsView`,setup(e){let t=Z(),{t:n}=d();return B(()=>{t.fetchSettings()}),(e,r)=>(W(),x(`div`,at,[k(`header`,ot,[k(`h2`,st,l(I(n)(`settings.title`)),1)]),k(`div`,ct,[N(I(me),{show:I(t).loading||I(t).saving,size:`large`,description:I(n)(`common.loading`)},{default:G(()=>[N(I(ze),{type:`line`,animated:``},{default:G(()=>[N(I($),{name:`display`,tab:I(n)(`settings.tabs.display`)},{default:G(()=>[N(Ge)]),_:1},8,[`tab`]),N(I($),{name:`agent`,tab:I(n)(`settings.tabs.agent`)},{default:G(()=>[N(qe)]),_:1},8,[`tab`]),N(I($),{name:`memory`,tab:I(n)(`settings.tabs.memory`)},{default:G(()=>[N(Ye)]),_:1},8,[`tab`]),N(I($),{name:`workspace`,tab:I(n)(`settings.tabs.workspace`)},{default:G(()=>[N(it)]),_:1},8,[`tab`])]),_:1})]),_:1},8,[`show`,`description`])])]))}}),[[`__scopeId`,`data-v-4e6130f6`]]);export{lt as default};