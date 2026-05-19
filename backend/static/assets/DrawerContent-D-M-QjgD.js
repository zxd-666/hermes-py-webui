import{H as e,I as t,M as n,P as r,Q as i,R as a,Z as o,et as s,f as c,ft as l,g as u,lt as d,q as f,w as p}from"./router-DaMSVozv.js";import{C as m,E as h,I as g,L as _,N as v,P as y,c as b,d as x,h as S,m as C,u as w}from"./browser-DXJzY62A.js";import{a as T,t as E}from"./Scrollbar-C4f8v3J7.js";import{b as D,d as O,f as k,g as A,h as j,l as M,s as N,u as P,y as F}from"./fade-in-scale-up.cssr-DcmjIaWq.js";import{i as I}from"./Suffix-DEVETRSb.js";import{n as L}from"./warn-CBw6BA0d.js";import{t as R}from"./format-length-y6AQVvqt.js";import{t as z}from"./Close-BAgXl0N_.js";import{T as B,X as V,Y as H}from"./index-Bh-u9Xnf.js";var U=n({name:`NDrawerContent`,inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(n){let r=d(!!n.show),a=d(null),s=t(D),c=0,l=``,m=null,h=d(!1),g=d(!1),_=p(()=>n.placement===`top`||n.placement===`bottom`),{mergedClsPrefixRef:v,mergedRtlRef:y}=S(n),b=x(`Drawer`,y,v),C=L,w=e=>{g.value=!0,c=_.value?e.clientY:e.clientX,l=document.body.style.cursor,document.body.style.cursor=_.value?`ns-resize`:`ew-resize`,document.body.addEventListener(`mousemove`,I),document.body.addEventListener(`mouseleave`,C),document.body.addEventListener(`mouseup`,L)},T=()=>{m!==null&&(window.clearTimeout(m),m=null),g.value?h.value=!0:m=window.setTimeout(()=>{h.value=!0},300)},E=()=>{m!==null&&(window.clearTimeout(m),m=null),h.value=!1},{doUpdateHeight:O,doUpdateWidth:M}=s,N=e=>{let{maxWidth:t}=n;if(t&&e>t)return t;let{minWidth:r}=n;return r&&e<r?r:e},P=e=>{let{maxHeight:t}=n;if(t&&e>t)return t;let{minHeight:r}=n;return r&&e<r?r:e};function I(e){if(g.value)if(_.value){let t=a.value?.offsetHeight||0,r=c-e.clientY;t+=n.placement===`bottom`?r:-r,t=P(t),O(t),c=e.clientY}else{let t=a.value?.offsetWidth||0,r=c-e.clientX;t+=n.placement===`right`?r:-r,t=N(t),M(t),c=e.clientX}}function L(){g.value&&(c=0,g.value=!1,document.body.style.cursor=l,document.body.removeEventListener(`mousemove`,I),document.body.removeEventListener(`mouseup`,L),document.body.removeEventListener(`mouseleave`,C))}i(()=>{n.show&&(r.value=!0)}),o(()=>n.show,e=>{e||L()}),e(()=>{L()});let R=p(()=>{let{show:e}=n,t=[[u,e]];return n.showMask||t.push([k,n.onClickoutside,void 0,{capture:!0}]),t});function z(){var e;r.value=!1,(e=n.onAfterLeave)==null||e.call(n)}return H(p(()=>n.blockScroll&&r.value)),f(F,a),f(j,null),f(A,null),{bodyRef:a,rtlEnabled:b,mergedClsPrefix:s.mergedClsPrefixRef,isMounted:s.isMountedRef,mergedTheme:s.mergedThemeRef,displayed:r,transitionName:p(()=>({right:`slide-in-from-right-transition`,left:`slide-in-from-left-transition`,top:`slide-in-from-top-transition`,bottom:`slide-in-from-bottom-transition`})[n.placement]),handleAfterLeave:z,bodyDirectives:R,handleMousedownResizeTrigger:w,handleMouseenterResizeTrigger:T,handleMouseleaveResizeTrigger:E,isDragging:g,isHoverOnResizeTrigger:h}},render(){let{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective===`show`||this.displayed||this.show?s(r(`div`,{role:`none`},r(M,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>r(c,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>s(r(`div`,a(this.$attrs,{role:`dialog`,ref:`bodyRef`,"aria-modal":`true`,class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?r(`div`,{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?r(`div`,{class:[`${t}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:`none`},e):r(E,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${t}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[u,this.displayDirective===`if`||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:W,cubicBezierEaseOut:G}=w;function K({duration:e=`0.3s`,leaveDuration:t=`0.2s`,name:n=`slide-in-from-bottom`}={}){return[v(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${W}`}),v(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${G}`}),v(`&.${n}-transition-enter-to`,{transform:`translateY(0)`}),v(`&.${n}-transition-enter-from`,{transform:`translateY(100%)`}),v(`&.${n}-transition-leave-from`,{transform:`translateY(0)`}),v(`&.${n}-transition-leave-to`,{transform:`translateY(100%)`})]}var{cubicBezierEaseIn:q,cubicBezierEaseOut:J}=w;function Y({duration:e=`0.3s`,leaveDuration:t=`0.2s`,name:n=`slide-in-from-left`}={}){return[v(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${q}`}),v(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${J}`}),v(`&.${n}-transition-enter-to`,{transform:`translateX(0)`}),v(`&.${n}-transition-enter-from`,{transform:`translateX(-100%)`}),v(`&.${n}-transition-leave-from`,{transform:`translateX(0)`}),v(`&.${n}-transition-leave-to`,{transform:`translateX(-100%)`})]}var{cubicBezierEaseIn:X,cubicBezierEaseOut:Z}=w;function Q({duration:e=`0.3s`,leaveDuration:t=`0.2s`,name:n=`slide-in-from-right`}={}){return[v(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${X}`}),v(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${Z}`}),v(`&.${n}-transition-enter-to`,{transform:`translateX(0)`}),v(`&.${n}-transition-enter-from`,{transform:`translateX(100%)`}),v(`&.${n}-transition-leave-from`,{transform:`translateX(0)`}),v(`&.${n}-transition-leave-to`,{transform:`translateX(100%)`})]}var{cubicBezierEaseIn:$,cubicBezierEaseOut:ee}=w;function te({duration:e=`0.3s`,leaveDuration:t=`0.2s`,name:n=`slide-in-from-top`}={}){return[v(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${$}`}),v(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${ee}`}),v(`&.${n}-transition-enter-to`,{transform:`translateY(0)`}),v(`&.${n}-transition-enter-from`,{transform:`translateY(-100%)`}),v(`&.${n}-transition-leave-from`,{transform:`translateY(0)`}),v(`&.${n}-transition-leave-to`,{transform:`translateY(-100%)`})]}var ne=v([y(`drawer`,`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Q(),Y(),te(),K(),_(`unselectable`,`
 user-select: none; 
 -webkit-user-select: none;
 `),_(`native-scrollbar`,[y(`drawer-content-wrapper`,`
 overflow: auto;
 height: 100%;
 `)]),g(`resize-trigger`,`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[_(`hover`,`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),y(`drawer-content-wrapper`,`
 box-sizing: border-box;
 `),y(`drawer-content`,`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[_(`native-scrollbar`,[y(`drawer-body-content-wrapper`,`
 height: 100%;
 overflow: auto;
 `)]),y(`drawer-body`,`
 flex: 1 0 0;
 overflow: hidden;
 `),y(`drawer-body-content-wrapper`,`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),y(`drawer-header`,`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[g(`main`,`
 flex: 1;
 `),g(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),y(`drawer-footer`,`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),_(`right-placement`,`
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[g(`resize-trigger`,`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),_(`left-placement`,`
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[g(`resize-trigger`,`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),_(`top-placement`,`
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[g(`resize-trigger`,`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),_(`bottom-placement`,`
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `,[g(`resize-trigger`,`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),v(`body`,[v(`>`,[y(`drawer-container`,`
 position: fixed;
 `)])]),y(`drawer-container`,`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[v(`> *`,`
 pointer-events: all;
 `)]),y(`drawer-mask`,`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[_(`invisible`,`
 background-color: rgba(0, 0, 0, 0)
 `),T({enterDuration:`0.2s`,leaveDuration:`0.2s`,enterCubicBezier:`var(--n-bezier-in)`,leaveCubicBezier:`var(--n-bezier-out)`})])]),re=n({name:`Drawer`,inheritAttrs:!1,props:Object.assign(Object.assign({},b.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:`right`},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:`if`},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),setup(e){let{mergedClsPrefixRef:t,namespaceRef:n,inlineThemeDisabled:r}=S(e),i=h(),a=b(`Drawer`,`-drawer`,ne,B,e,t),o=d(e.defaultWidth),s=d(e.defaultHeight),c=I(l(e,`width`),o),u=I(l(e,`height`),s),g=p(()=>{let{placement:t}=e;return t===`top`||t===`bottom`?``:R(c.value)}),_=p(()=>{let{placement:t}=e;return t===`left`||t===`right`?``:R(u.value)}),v=t=>{let{onUpdateWidth:n,"onUpdate:width":r}=e;n&&m(n,t),r&&m(r,t),o.value=t},y=t=>{let{onUpdateHeight:n,"onUpdate:width":r}=e;n&&m(n,t),r&&m(r,t),s.value=t},x=p(()=>[{width:g.value,height:_.value},e.drawerStyle||``]);function w(t){let{onMaskClick:n,maskClosable:r}=e;r&&k(!1),n&&n(t)}function T(e){w(e)}let E=V();function O(t){var n;(n=e.onEsc)==null||n.call(e),e.show&&e.closeOnEsc&&N(t)&&(E.value||k(!1))}function k(t){let{onHide:n,onUpdateShow:r,"onUpdate:show":i}=e;r&&m(r,t),i&&m(i,t),n&&!t&&m(n,t)}f(D,{isMountedRef:i,mergedThemeRef:a,mergedClsPrefixRef:t,doUpdateShow:k,doUpdateHeight:y,doUpdateWidth:v});let A=p(()=>{let{common:{cubicBezierEaseInOut:e,cubicBezierEaseIn:t,cubicBezierEaseOut:n},self:{color:r,textColor:i,boxShadow:o,lineHeight:s,headerPadding:c,footerPadding:l,borderRadius:u,bodyPadding:d,titleFontSize:f,titleTextColor:p,titleFontWeight:m,headerBorderBottom:h,footerBorderTop:g,closeIconColor:_,closeIconColorHover:v,closeIconColorPressed:y,closeColorHover:b,closeColorPressed:x,closeIconSize:S,closeSize:C,closeBorderRadius:w,resizableTriggerColorHover:T}}=a.value;return{"--n-line-height":s,"--n-color":r,"--n-border-radius":u,"--n-text-color":i,"--n-box-shadow":o,"--n-bezier":e,"--n-bezier-out":n,"--n-bezier-in":t,"--n-header-padding":c,"--n-body-padding":d,"--n-footer-padding":l,"--n-title-text-color":p,"--n-title-font-size":f,"--n-title-font-weight":m,"--n-header-border-bottom":h,"--n-footer-border-top":g,"--n-close-icon-color":_,"--n-close-icon-color-hover":v,"--n-close-icon-color-pressed":y,"--n-close-size":C,"--n-close-color-hover":b,"--n-close-color-pressed":x,"--n-close-icon-size":S,"--n-close-border-radius":w,"--n-resize-trigger-color-hover":T}}),j=r?C(`drawer`,void 0,A,e):void 0;return{mergedClsPrefix:t,namespace:n,mergedBodyStyle:x,handleOutsideClick:T,handleMaskClick:w,handleEsc:O,mergedTheme:a,cssVars:r?void 0:A,themeClass:j?.themeClass,onRender:j?.onRender,isMounted:i}},render(){let{mergedClsPrefix:e}=this;return r(P,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)==null||t.call(this),s(r(`div`,{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:`none`},this.showMask?r(c,{name:`fade-in-transition`,appear:this.isMounted},{default:()=>this.show?r(`div`,{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask===`transparent`&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,r(U,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[O,{zIndex:this.zIndex,enabled:this.show}]])}})}}),ie=n({name:`DrawerContent`,props:{title:String,headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],bodyClass:String,bodyStyle:[Object,String],bodyContentClass:String,bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},slots:Object,setup(){let e=t(D,null);e||L(`drawer-content`,"`n-drawer-content` must be placed inside `n-drawer`.");let{doUpdateShow:n}=e;function r(){n(!1)}return{handleCloseClick:r,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){let{title:e,mergedClsPrefix:t,nativeScrollbar:n,mergedTheme:i,bodyClass:a,bodyStyle:o,bodyContentClass:s,bodyContentStyle:c,headerClass:l,headerStyle:u,footerClass:d,footerStyle:f,scrollbarProps:p,closable:m,$slots:h}=this;return r(`div`,{role:`none`,class:[`${t}-drawer-content`,n&&`${t}-drawer-content--native-scrollbar`]},h.header||e||m?r(`div`,{class:[`${t}-drawer-header`,l],style:u,role:`none`},r(`div`,{class:`${t}-drawer-header__main`,role:`heading`,"aria-level":`1`},h.header===void 0?e:h.header()),m&&r(z,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,n?r(`div`,{class:[`${t}-drawer-body`,a],style:o,role:`none`},r(`div`,{class:[`${t}-drawer-body-content-wrapper`,s],style:c,role:`none`},h)):r(E,Object.assign({themeOverrides:i.peerOverrides.Scrollbar,theme:i.peers.Scrollbar},p,{class:`${t}-drawer-body`,contentClass:[`${t}-drawer-body-content-wrapper`,s],contentStyle:c}),h),h.footer?r(`div`,{class:[`${t}-drawer-footer`,d],style:f,role:`none`},h.footer()):null)}});export{re as n,ie as t};