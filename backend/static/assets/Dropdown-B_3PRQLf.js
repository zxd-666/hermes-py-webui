import{i as e,r as t}from"./warn-MV9BENh8.js";import{t as n}from"./Icon-CBVt54Ya.js";import{An as r,Ci as i,Cr as a,Dn as o,Gn as s,I as c,Kn as l,Kr as u,Mn as d,Q as f,Qn as p,Rn as m,Si as h,Sr as g,Ti as _,Tr as v,X as y,Xn as b,Y as x,Yr as S,Z as C,Zn as w,ai as T,ar as E,bn as D,br as O,bt as k,cr as A,et as j,ir as M,it as N,li as P,mi as F,nr as ee,oi as I,ri as L,si as R,sr as z,ui as te,vi as B,vr as V,wi as H,wr as U,xn as ne,xr as W,zr as re}from"./index-BQulFKfv.js";function ie(e={},t){let n=h({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:a}=e,o=e=>{switch(e.key){case`Control`:n.ctrl=!0;break;case`Meta`:n.command=!0,n.win=!0;break;case`Shift`:n.shift=!0;break;case`Tab`:n.tab=!0;break}r!==void 0&&Object.keys(r).forEach(t=>{if(t!==e.key)return;let n=r[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},s=e=>{switch(e.key){case`Control`:n.ctrl=!1;break;case`Meta`:n.command=!1,n.win=!1;break;case`Shift`:n.shift=!1;break;case`Tab`:n.tab=!1;break}a!==void 0&&Object.keys(a).forEach(t=>{if(t!==e.key)return;let n=a[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},c=()=>{(t===void 0||t.value)&&(A(`keydown`,document,o),A(`keyup`,document,s)),t!==void 0&&B(t,e=>{e?(A(`keydown`,document,o),A(`keyup`,document,s)):(z(`keydown`,document,o),z(`keyup`,document,s))})};return M()?(P(c),te(()=>{(t===void 0||t.value)&&(z(`keydown`,document,o),z(`keyup`,document,s))})):c(),i(n)}function ae(e,t,n){if(!t)return e;let r=H(e.value),i=null;return B(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function oe(e){return t=>{t?e.value=t.$el:e.value=null}}var G=L({name:`ChevronRight`,render(){return T(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},T(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`}))}}),K=e(`n-dropdown-menu`),q=e(`n-dropdown`),J=e(`n-dropdown-option`),Y=L({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return T(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),se=L({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=I(K),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=I(q);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:s}=this.tmNode,c=T(`div`,Object.assign({class:`${e}-dropdown-option`},r?.(s)),T(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},T(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},o(s.icon)),T(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):o(s.title??s[this.labelField])),T(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:c,option:s}):c}});function X(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function ce(e){return e.type===`group`}function Z(e){return e.type===`divider`}function le(e){return e.type===`render`}var Q=L({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=I(q),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:a,activeKeyPathRef:o,animatedRef:s,mergedShowRef:c,renderLabelRef:l,renderIconRef:u,labelFieldRef:d,childrenFieldRef:f,renderOptionRef:p,nodePropsRef:m,menuPropsRef:h}=t,g=I(J,null),_=I(K),v=I(b),y=S(()=>e.tmNode.rawNode),x=S(()=>{let{value:t}=f;return X(e.tmNode.rawNode,t)}),C=S(()=>{let{disabled:t}=e.tmNode;return t}),w=ae(S(()=>{if(!x.value)return!1;let{key:t,disabled:o}=e.tmNode;if(o)return!1;let{value:s}=n,{value:c}=r,{value:l}=i,{value:u}=a;return s===null?c===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,S(()=>r.value===null&&!s.value)),T=S(()=>!!g?.enteringSubmenuRef.value),D=H(!1);F(J,{enteringSubmenuRef:D});function O(){D.value=!0}function k(){D.value=!1}function A(){let{parentKey:t,tmNode:a}=e;a.disabled||c.value&&(i.value=t,r.value=null,n.value=a.key)}function j(){let{tmNode:t}=e;t.disabled||c.value&&n.value!==t.key&&A()}function M(t){if(e.tmNode.disabled||!c.value)return;let{relatedTarget:r}=t;r&&!V({target:r},`dropdownOption`)&&!V({target:r},`scrollbarRail`)&&(n.value=null)}function N(){let{value:n}=x,{tmNode:r}=e;c.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:d,renderLabel:l,renderIcon:u,siblingHasIcon:_.showIconRef,siblingHasSubmenu:_.hasSubmenuRef,menuProps:h,popoverBody:v,animated:s,mergedShowSubmenu:S(()=>w.value&&!T.value),rawNode:y,hasSubmenu:x,pending:E(()=>{let{value:t}=a,{key:n}=e.tmNode;return t.includes(n)}),childActive:E(()=>{let{value:t}=o,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:E(()=>{let{value:t}=o,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:C,renderOption:p,nodeProps:m,handleClick:N,handleMouseMove:j,handleMouseEnter:A,handleMouseLeave:M,handleSubmenuBeforeEnter:O,handleSubmenuAfterEnter:k}},render(){let{animated:e,rawNode:t,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:c,renderLabel:u,renderIcon:d,renderOption:f,nodeProps:p,props:h,scrollable:g}=this,_=null;if(r){let e=this.menuProps?.call(this,t,t.children);_=T($,Object.assign({},e,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let v={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},y=p?.(t),b=T(`div`,Object.assign({class:[`${i}-dropdown-option`,y?.class],"data-dropdown-option":!0},y),T(`div`,R(v,h),[T(`div`,{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[d?d(t):o(t.icon)]),T(`div`,{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},u?u(t):o(t[this.labelField]??t.title)),T(`div`,{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,c&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?T(n,null,{default:()=>T(G,null)}):null)]),this.hasSubmenu?T(l,null,{default:()=>[T(s,null,{default:()=>T(`div`,{class:`${i}-dropdown-offset-container`},T(m,{show:this.mergedShowSubmenu,placement:this.placement,to:g&&this.popoverBody||void 0,teleportDisabled:!g},{default:()=>T(`div`,{class:`${i}-dropdown-menu-wrapper`},e?T(re,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>_}):_)}))})]}):null);return f?f({node:b,option:t}):b}}),ue=L({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:n,clsPrefix:r}=this,{children:i}=e;return T(u,null,T(se,{clsPrefix:r,tmNode:e,key:e.key}),i?.map(e=>{let{rawNode:i}=e;return i.show===!1?null:Z(i)?T(Y,{clsPrefix:r,key:e.key}):e.isGroup?(t(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):T(Q,{clsPrefix:r,tmNode:e,parentKey:n,key:e.key})}))}}),de=L({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return T(`div`,t,[e?.()])}}),$=L({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:t,childrenFieldRef:n}=I(q);F(K,{showIconRef:S(()=>{let n=t.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>n?n(e):e.icon);let{rawNode:t}=e;return n?n(t):t.icon})}),hasSubmenuRef:S(()=>{let{value:t}=n;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>X(e,t));let{rawNode:n}=e;return X(n,t)})})});let r=H(null);return F(w,null),F(p,null),F(b,r),{bodyRef:r}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:le(i)?T(de,{tmNode:r,key:r.key}):Z(i)?T(Y,{clsPrefix:t,key:r.key}):ce(i)?T(ue,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):T(Q,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return T(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?T(N,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?C({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),fe=W(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[f(),W(`dropdown-option`,`
 position: relative;
 `,[O(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[O(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),W(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[O(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),U(`disabled`,[a(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[g(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),O(`&::before`,`background-color: var(--n-option-color-hover);`)]),a(`active`,`
 color: var(--n-option-text-color-active);
 `,[g(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),O(`&::before`,`background-color: var(--n-option-color-active);`)]),a(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[g(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),a(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),a(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[g(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[a(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),g(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[a(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),W(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),g(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),g(`suffix`,`
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
 `,[a(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),W(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),W(`dropdown-menu`,`pointer-events: all;`)]),W(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),W(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),W(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),O(`>`,[W(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),U(`scrollable`,`
 padding: var(--n-padding);
 `),a(`scrollable`,[g(`content`,`
 padding: var(--n-padding);
 `)])]),pe={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},me=Object.keys(y),he=L({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},y),pe),k.props),setup(e){let t=H(!1),n=ee(_(e,`show`),t),r=S(()=>{let{keyField:t,childrenField:n}=e;return j(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),i=S(()=>r.value.treeNodes),a=H(null),o=H(null),s=H(null),l=S(()=>a.value??o.value??s.value??null),u=S(()=>r.value.getPath(l.value).keyPath),f=S(()=>r.value.getPath(e.value).keyPath),p=E(()=>e.keyboard&&n.value);ie({keydown:{ArrowUp:{prevent:!0,handler:M},ArrowRight:{prevent:!0,handler:A},ArrowDown:{prevent:!0,handler:N},ArrowLeft:{prevent:!0,handler:O},Enter:{prevent:!0,handler:P},Escape:T}},p);let{mergedClsPrefixRef:m,inlineThemeDisabled:h,mergedComponentPropsRef:g}=ne(e),y=S(()=>e.size||g?.value?.Dropdown?.size||`medium`),b=k(`Dropdown`,`-dropdown`,fe,c,e,m);F(q,{labelFieldRef:_(e,`labelField`),childrenFieldRef:_(e,`childrenField`),renderLabelRef:_(e,`renderLabel`),renderIconRef:_(e,`renderIcon`),hoverKeyRef:a,keyboardKeyRef:o,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:u,activeKeyPathRef:f,animatedRef:_(e,`animated`),mergedShowRef:n,nodePropsRef:_(e,`nodeProps`),renderOptionRef:_(e,`renderOption`),menuPropsRef:_(e,`menuProps`),doSelect:x,doUpdateShow:C}),B(n,t=>{!e.animated&&!t&&w()});function x(t,n){let{onSelect:r}=e;r&&d(r,t,n)}function C(n){let{"onUpdate:show":r,onUpdateShow:i}=e;r&&d(r,n),i&&d(i,n),t.value=n}function w(){a.value=null,o.value=null,s.value=null}function T(){C(!1)}function O(){L(`left`)}function A(){L(`right`)}function M(){L(`up`)}function N(){L(`down`)}function P(){let e=I();e?.isLeaf&&n.value&&(x(e.key,e.rawNode),C(!1))}function I(){let{value:e}=r,{value:t}=l;return!e||t===null?null:e.getNode(t)??null}function L(e){let{value:t}=l,{value:{getFirstAvailableNode:n}}=r,i=null;if(t===null){let e=n();e!==null&&(i=e.key)}else{let t=I();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(i=n.key)}}i!==null&&(a.value=null,o.value=i)}let R=S(()=>{let{inverted:t}=e,n=y.value,{common:{cubicBezierEaseInOut:r},self:i}=b.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:c,[v(`optionIconSuffixWidth`,n)]:l,[v(`optionSuffixWidth`,n)]:u,[v(`optionIconPrefixWidth`,n)]:d,[v(`optionPrefixWidth`,n)]:f,[v(`fontSize`,n)]:p,[v(`optionHeight`,n)]:m,[v(`optionIconSize`,n)]:h}=i,g={"--n-bezier":r,"--n-font-size":p,"--n-padding":a,"--n-border-radius":s,"--n-option-height":m,"--n-option-prefix-width":f,"--n-option-icon-prefix-width":d,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":l,"--n-option-icon-size":h,"--n-divider-color":o,"--n-option-opacity-disabled":c};return t?(g[`--n-color`]=i.colorInverted,g[`--n-option-color-hover`]=i.optionColorHoverInverted,g[`--n-option-color-active`]=i.optionColorActiveInverted,g[`--n-option-text-color`]=i.optionTextColorInverted,g[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,g[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,g[`--n-prefix-color`]=i.prefixColorInverted,g[`--n-suffix-color`]=i.suffixColorInverted,g[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(g[`--n-color`]=i.color,g[`--n-option-color-hover`]=i.optionColorHover,g[`--n-option-color-active`]=i.optionColorActive,g[`--n-option-text-color`]=i.optionTextColor,g[`--n-option-text-color-hover`]=i.optionTextColorHover,g[`--n-option-text-color-active`]=i.optionTextColorActive,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,g[`--n-prefix-color`]=i.prefixColor,g[`--n-suffix-color`]=i.suffixColor,g[`--n-group-header-text-color`]=i.groupHeaderTextColor),g}),z=h?D(`dropdown`,S(()=>`${y.value[0]}${e.inverted?`i`:``}`),R,e):void 0;return{mergedClsPrefix:m,mergedTheme:b,mergedSize:y,tmNodes:i,mergedShow:n,handleAfterLeave:()=>{e.animated&&w()},doUpdateShow:C,cssVars:h?void 0:R,themeClass:z?.themeClass,onRender:z?.onRender}},render(){let e=(e,t,n,r,i)=>{var a;let{mergedClsPrefix:o,menuProps:s}=this;(a=this.onRender)==null||a.call(this);let c=s?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},l={ref:oe(t),class:[e,`${o}-dropdown`,`${o}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:o,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:i};return T($,R(this.$attrs,l,c))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return T(x,Object.assign({},r(this.$props,me),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{G as n,he as t};