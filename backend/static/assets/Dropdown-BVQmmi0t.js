import{t as e}from"./Icon-C9OitOII.js";import{$n as t,An as n,Br as r,Ci as i,Cr as a,Dr as o,Ei as s,Er as c,J as l,Kn as u,Nn as d,On as f,P as p,Q as m,Qn as h,Sr as g,Ti as _,Tn as v,Tr as y,X as b,Xr as x,Y as S,Zn as C,br as w,ci as T,di as E,hi as D,ii as O,ir as k,lr as A,nt as j,oi as M,or as N,q as P,qn as F,qr as I,si as L,sr as R,tr as z,ui as ee,ur as B,vn as te,vt as V,wi as ne,wr as H,yi as U,yn as W,zn as re}from"./index-tDZNAGtH.js";function ie(e={},t){let n=i({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:a}=e,o=e=>{switch(e.key){case`Control`:n.ctrl=!0;break;case`Meta`:n.command=!0,n.win=!0;break;case`Shift`:n.shift=!0;break;case`Tab`:n.tab=!0;break}r!==void 0&&Object.keys(r).forEach(t=>{if(t!==e.key)return;let n=r[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},s=e=>{switch(e.key){case`Control`:n.ctrl=!1;break;case`Meta`:n.command=!1,n.win=!1;break;case`Shift`:n.shift=!1;break;case`Tab`:n.tab=!1;break}a!==void 0&&Object.keys(a).forEach(t=>{if(t!==e.key)return;let n=a[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},c=()=>{(t===void 0||t.value)&&(B(`keydown`,document,o),B(`keyup`,document,s)),t!==void 0&&U(t,e=>{e?(B(`keydown`,document,o),B(`keyup`,document,s)):(A(`keydown`,document,o),A(`keyup`,document,s))})};return N()?(ee(c),E(()=>{(t===void 0||t.value)&&(A(`keydown`,document,o),A(`keyup`,document,s))})):c(),ne(n)}function ae(e,t,n){if(!t)return e;let r=_(e.value),i=null;return U(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function oe(e){return t=>{t?e.value=t.$el:e.value=null}}var G=O({name:`ChevronRight`,render(){return M(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},M(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`}))}}),K=z(`n-dropdown-menu`),q=z(`n-dropdown`),J=z(`n-dropdown-option`),Y=O({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return M(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),se=O({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=L(K),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=L(q);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:o}=this.tmNode,s=M(`div`,Object.assign({class:`${e}-dropdown-option`},r?.(o)),M(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},M(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},v(o.icon)),M(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(o):v(o.title??o[this.labelField])),M(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:o}):s}});function X(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function ce(e){return e.type===`group`}function Z(e){return e.type===`divider`}function le(e){return e.type===`render`}var Q=O({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=L(q),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:a,activeKeyPathRef:o,animatedRef:s,mergedShowRef:c,renderLabelRef:l,renderIconRef:u,labelFieldRef:d,childrenFieldRef:f,renderOptionRef:p,nodePropsRef:m,menuPropsRef:h}=t,g=L(J,null),v=L(K),y=L(C),b=x(()=>e.tmNode.rawNode),S=x(()=>{let{value:t}=f;return X(e.tmNode.rawNode,t)}),T=x(()=>{let{disabled:t}=e.tmNode;return t}),E=ae(x(()=>{if(!S.value)return!1;let{key:t,disabled:o}=e.tmNode;if(o)return!1;let{value:s}=n,{value:c}=r,{value:l}=i,{value:u}=a;return s===null?c===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,x(()=>r.value===null&&!s.value)),O=x(()=>!!g?.enteringSubmenuRef.value),k=_(!1);D(J,{enteringSubmenuRef:k});function A(){k.value=!0}function j(){k.value=!1}function M(){let{parentKey:t,tmNode:a}=e;a.disabled||c.value&&(i.value=t,r.value=null,n.value=a.key)}function N(){let{tmNode:t}=e;t.disabled||c.value&&n.value!==t.key&&M()}function P(t){if(e.tmNode.disabled||!c.value)return;let{relatedTarget:r}=t;r&&!w({target:r},`dropdownOption`)&&!w({target:r},`scrollbarRail`)&&(n.value=null)}function F(){let{value:n}=S,{tmNode:r}=e;c.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:d,renderLabel:l,renderIcon:u,siblingHasIcon:v.showIconRef,siblingHasSubmenu:v.hasSubmenuRef,menuProps:h,popoverBody:y,animated:s,mergedShowSubmenu:x(()=>E.value&&!O.value),rawNode:b,hasSubmenu:S,pending:R(()=>{let{value:t}=a,{key:n}=e.tmNode;return t.includes(n)}),childActive:R(()=>{let{value:t}=o,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:R(()=>{let{value:t}=o,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:T,renderOption:p,nodeProps:m,handleClick:F,handleMouseMove:N,handleMouseEnter:M,handleMouseLeave:P,handleSubmenuBeforeEnter:A,handleSubmenuAfterEnter:j}},render(){let{animated:t,rawNode:n,mergedShowSubmenu:i,clsPrefix:a,siblingHasIcon:o,siblingHasSubmenu:s,renderLabel:c,renderIcon:l,renderOption:d,nodeProps:f,props:p,scrollable:m}=this,h=null;if(i){let e=this.menuProps?.call(this,n,n.children);h=M($,Object.assign({},e,{clsPrefix:a,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let g={class:[`${a}-dropdown-option-body`,this.pending&&`${a}-dropdown-option-body--pending`,this.active&&`${a}-dropdown-option-body--active`,this.childActive&&`${a}-dropdown-option-body--child-active`,this.mergedDisabled&&`${a}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},_=f?.(n),y=M(`div`,Object.assign({class:[`${a}-dropdown-option`,_?.class],"data-dropdown-option":!0},_),M(`div`,T(g,p),[M(`div`,{class:[`${a}-dropdown-option-body__prefix`,o&&`${a}-dropdown-option-body__prefix--show-icon`]},[l?l(n):v(n.icon)]),M(`div`,{"data-dropdown-option":!0,class:`${a}-dropdown-option-body__label`},c?c(n):v(n[this.labelField]??n.title)),M(`div`,{"data-dropdown-option":!0,class:[`${a}-dropdown-option-body__suffix`,s&&`${a}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?M(e,null,{default:()=>M(G,null)}):null)]),this.hasSubmenu?M(F,null,{default:()=>[M(u,null,{default:()=>M(`div`,{class:`${a}-dropdown-offset-container`},M(re,{show:this.mergedShowSubmenu,placement:this.placement,to:m&&this.popoverBody||void 0,teleportDisabled:!m},{default:()=>M(`div`,{class:`${a}-dropdown-menu-wrapper`},t?M(r,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>h}):h)}))})]}):null);return d?d({node:y,option:n}):y}}),ue=O({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:r}=e;return M(I,null,M(se,{clsPrefix:n,tmNode:e,key:e.key}),r?.map(e=>{let{rawNode:r}=e;return r.show===!1?null:Z(r)?M(Y,{clsPrefix:n,key:e.key}):e.isGroup?(d(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):M(Q,{clsPrefix:n,tmNode:e,parentKey:t,key:e.key})}))}}),de=O({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return M(`div`,t,[e?.()])}}),$=O({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:n,childrenFieldRef:r}=L(q);D(K,{showIconRef:x(()=>{let t=n.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>t?t(e):e.icon);let{rawNode:n}=e;return t?t(n):n.icon})}),hasSubmenuRef:x(()=>{let{value:t}=r;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>X(e,t));let{rawNode:n}=e;return X(n,t)})})});let i=_(null);return D(h,null),D(t,null),D(C,i),{bodyRef:i}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:le(i)?M(de,{tmNode:r,key:r.key}):Z(i)?M(Y,{clsPrefix:t,key:r.key}):ce(i)?M(ue,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):M(Q,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return M(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?M(j,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?S({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),fe=a(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[b(),a(`dropdown-option`,`
 position: relative;
 `,[g(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[g(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),a(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[g(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),c(`disabled`,[y(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[H(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),g(`&::before`,`background-color: var(--n-option-color-hover);`)]),y(`active`,`
 color: var(--n-option-text-color-active);
 `,[H(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),g(`&::before`,`background-color: var(--n-option-color-active);`)]),y(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[H(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),y(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),y(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[H(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[y(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),H(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[y(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),a(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),H(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),H(`suffix`,`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[y(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),a(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),a(`dropdown-menu`,`pointer-events: all;`)]),a(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),a(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),a(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),g(`>`,[a(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),c(`scrollable`,`
 padding: var(--n-padding);
 `),y(`scrollable`,[H(`content`,`
 padding: var(--n-padding);
 `)])]),pe={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},me=Object.keys(l),he=O({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},l),pe),V.props),setup(e){let t=_(!1),r=k(s(e,`show`),t),i=x(()=>{let{keyField:t,childrenField:n}=e;return m(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),a=x(()=>i.value.treeNodes),c=_(null),l=_(null),u=_(null),d=x(()=>c.value??l.value??u.value??null),f=x(()=>i.value.getPath(d.value).keyPath),h=x(()=>i.value.getPath(e.value).keyPath),g=R(()=>e.keyboard&&r.value);ie({keydown:{ArrowUp:{prevent:!0,handler:M},ArrowRight:{prevent:!0,handler:j},ArrowDown:{prevent:!0,handler:N},ArrowLeft:{prevent:!0,handler:A},Enter:{prevent:!0,handler:P},Escape:O}},g);let{mergedClsPrefixRef:v,inlineThemeDisabled:y,mergedComponentPropsRef:b}=W(e),S=x(()=>e.size||b?.value?.Dropdown?.size||`medium`),C=V(`Dropdown`,`-dropdown`,fe,p,e,v);D(q,{labelFieldRef:s(e,`labelField`),childrenFieldRef:s(e,`childrenField`),renderLabelRef:s(e,`renderLabel`),renderIconRef:s(e,`renderIcon`),hoverKeyRef:c,keyboardKeyRef:l,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:f,activeKeyPathRef:h,animatedRef:s(e,`animated`),mergedShowRef:r,nodePropsRef:s(e,`nodeProps`),renderOptionRef:s(e,`renderOption`),menuPropsRef:s(e,`menuProps`),doSelect:w,doUpdateShow:T}),U(r,t=>{!e.animated&&!t&&E()});function w(t,r){let{onSelect:i}=e;i&&n(i,t,r)}function T(r){let{"onUpdate:show":i,onUpdateShow:a}=e;i&&n(i,r),a&&n(a,r),t.value=r}function E(){c.value=null,l.value=null,u.value=null}function O(){T(!1)}function A(){I(`left`)}function j(){I(`right`)}function M(){I(`up`)}function N(){I(`down`)}function P(){let e=F();e?.isLeaf&&r.value&&(w(e.key,e.rawNode),T(!1))}function F(){let{value:e}=i,{value:t}=d;return!e||t===null?null:e.getNode(t)??null}function I(e){let{value:t}=d,{value:{getFirstAvailableNode:n}}=i,r=null;if(t===null){let e=n();e!==null&&(r=e.key)}else{let t=F();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(r=n.key)}}r!==null&&(c.value=null,l.value=r)}let L=x(()=>{let{inverted:t}=e,n=S.value,{common:{cubicBezierEaseInOut:r},self:i}=C.value,{padding:a,dividerColor:s,borderRadius:c,optionOpacityDisabled:l,[o(`optionIconSuffixWidth`,n)]:u,[o(`optionSuffixWidth`,n)]:d,[o(`optionIconPrefixWidth`,n)]:f,[o(`optionPrefixWidth`,n)]:p,[o(`fontSize`,n)]:m,[o(`optionHeight`,n)]:h,[o(`optionIconSize`,n)]:g}=i,_={"--n-bezier":r,"--n-font-size":m,"--n-padding":a,"--n-border-radius":c,"--n-option-height":h,"--n-option-prefix-width":p,"--n-option-icon-prefix-width":f,"--n-option-suffix-width":d,"--n-option-icon-suffix-width":u,"--n-option-icon-size":g,"--n-divider-color":s,"--n-option-opacity-disabled":l};return t?(_[`--n-color`]=i.colorInverted,_[`--n-option-color-hover`]=i.optionColorHoverInverted,_[`--n-option-color-active`]=i.optionColorActiveInverted,_[`--n-option-text-color`]=i.optionTextColorInverted,_[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,_[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,_[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,_[`--n-prefix-color`]=i.prefixColorInverted,_[`--n-suffix-color`]=i.suffixColorInverted,_[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(_[`--n-color`]=i.color,_[`--n-option-color-hover`]=i.optionColorHover,_[`--n-option-color-active`]=i.optionColorActive,_[`--n-option-text-color`]=i.optionTextColor,_[`--n-option-text-color-hover`]=i.optionTextColorHover,_[`--n-option-text-color-active`]=i.optionTextColorActive,_[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,_[`--n-prefix-color`]=i.prefixColor,_[`--n-suffix-color`]=i.suffixColor,_[`--n-group-header-text-color`]=i.groupHeaderTextColor),_}),z=y?te(`dropdown`,x(()=>`${S.value[0]}${e.inverted?`i`:``}`),L,e):void 0;return{mergedClsPrefix:v,mergedTheme:C,mergedSize:S,tmNodes:a,mergedShow:r,handleAfterLeave:()=>{e.animated&&E()},doUpdateShow:T,cssVars:y?void 0:L,themeClass:z?.themeClass,onRender:z?.onRender}},render(){let e=(e,t,n,r,i)=>{var a;let{mergedClsPrefix:o,menuProps:s}=this;(a=this.onRender)==null||a.call(this);let c=s?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},l={ref:oe(t),class:[e,`${o}-dropdown`,`${o}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:o,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:i};return M($,T(this.$attrs,l,c))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return M(P,Object.assign({},f(this.$props,me),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{G as n,he as t};