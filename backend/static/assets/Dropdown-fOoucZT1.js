import{i as e,r as t}from"./warn-MV9BENh8.js";import{t as n}from"./Icon-CMWbmgda.js";import{$ as r,Ci as i,Cr as a,En as o,F as s,Gn as c,Gr as l,J as u,Jr as d,Ln as f,Rr as p,Si as m,Sr as h,Wn as g,X as _,Xn as v,Y as y,Yn as b,Z as x,Zn as S,_i as C,_r as w,ai as T,bn as E,br as D,ci as O,ii as k,ir as A,jn as j,kn as M,li as N,ni as P,oi as F,or as I,pi as L,rr as R,rt as ee,sr as z,tr as te,wi as B,wr as V,xi as ne,xr as H,yn as re,yr as U,yt as W}from"./index-Cbnhqdt7.js";function ie(e={},t){let n=ne({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:i}=e,a=e=>{switch(e.key){case`Control`:n.ctrl=!0;break;case`Meta`:n.command=!0,n.win=!0;break;case`Shift`:n.shift=!0;break;case`Tab`:n.tab=!0;break}r!==void 0&&Object.keys(r).forEach(t=>{if(t!==e.key)return;let n=r[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},o=e=>{switch(e.key){case`Control`:n.ctrl=!1;break;case`Meta`:n.command=!1,n.win=!1;break;case`Shift`:n.shift=!1;break;case`Tab`:n.tab=!1;break}i!==void 0&&Object.keys(i).forEach(t=>{if(t!==e.key)return;let n=i[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},s=()=>{(t===void 0||t.value)&&(z(`keydown`,document,a),z(`keyup`,document,o)),t!==void 0&&C(t,e=>{e?(z(`keydown`,document,a),z(`keyup`,document,o)):(I(`keydown`,document,a),I(`keyup`,document,o))})};return R()?(O(s),N(()=>{(t===void 0||t.value)&&(I(`keydown`,document,a),I(`keyup`,document,o))})):s(),m(n)}function ae(e,t,n){if(!t)return e;let r=i(e.value),a=null;return C(e,e=>{a!==null&&window.clearTimeout(a),e===!0?n&&!n.value?r.value=!0:a=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function oe(e){return t=>{t?e.value=t.$el:e.value=null}}var G=P({name:`ChevronRight`,render(){return k(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},k(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`}))}}),K=e(`n-dropdown-menu`),q=e(`n-dropdown`),J=e(`n-dropdown-option`),Y=P({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return k(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),se=P({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=T(K),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=T(q);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:s}=this.tmNode,c=k(`div`,Object.assign({class:`${e}-dropdown-option`},r?.(s)),k(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},k(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},o(s.icon)),k(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):o(s.title??s[this.labelField])),k(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:c,option:s}):c}});function X(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function ce(e){return e.type===`group`}function Z(e){return e.type===`divider`}function le(e){return e.type===`render`}var Q=P({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=T(q),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:o,activeKeyPathRef:s,animatedRef:c,mergedShowRef:l,renderLabelRef:u,renderIconRef:f,labelFieldRef:p,childrenFieldRef:m,renderOptionRef:h,nodePropsRef:g,menuPropsRef:_}=t,v=T(J,null),y=T(K),x=T(b),S=d(()=>e.tmNode.rawNode),C=d(()=>{let{value:t}=m;return X(e.tmNode.rawNode,t)}),E=d(()=>{let{disabled:t}=e.tmNode;return t}),D=ae(d(()=>{if(!C.value)return!1;let{key:t,disabled:i}=e.tmNode;if(i)return!1;let{value:s}=n,{value:c}=r,{value:l}=a,{value:u}=o;return s===null?c===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,d(()=>r.value===null&&!c.value)),O=d(()=>!!v?.enteringSubmenuRef.value),k=i(!1);L(J,{enteringSubmenuRef:k});function j(){k.value=!0}function M(){k.value=!1}function N(){let{parentKey:t,tmNode:i}=e;i.disabled||l.value&&(a.value=t,r.value=null,n.value=i.key)}function P(){let{tmNode:t}=e;t.disabled||l.value&&n.value!==t.key&&N()}function F(t){if(e.tmNode.disabled||!l.value)return;let{relatedTarget:r}=t;r&&!w({target:r},`dropdownOption`)&&!w({target:r},`scrollbarRail`)&&(n.value=null)}function I(){let{value:n}=C,{tmNode:r}=e;l.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:p,renderLabel:u,renderIcon:f,siblingHasIcon:y.showIconRef,siblingHasSubmenu:y.hasSubmenuRef,menuProps:_,popoverBody:x,animated:c,mergedShowSubmenu:d(()=>D.value&&!O.value),rawNode:S,hasSubmenu:C,pending:A(()=>{let{value:t}=o,{key:n}=e.tmNode;return t.includes(n)}),childActive:A(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:A(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:E,renderOption:h,nodeProps:g,handleClick:I,handleMouseMove:P,handleMouseEnter:N,handleMouseLeave:F,handleSubmenuBeforeEnter:j,handleSubmenuAfterEnter:M}},render(){let{animated:e,rawNode:t,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:s,renderLabel:l,renderIcon:u,renderOption:d,nodeProps:m,props:h,scrollable:_}=this,v=null;if(r){let e=this.menuProps?.call(this,t,t.children);v=k($,Object.assign({},e,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let y={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},b=m?.(t),x=k(`div`,Object.assign({class:[`${i}-dropdown-option`,b?.class],"data-dropdown-option":!0},b),k(`div`,F(y,h),[k(`div`,{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[u?u(t):o(t.icon)]),k(`div`,{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},l?l(t):o(t[this.labelField]??t.title)),k(`div`,{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?k(n,null,{default:()=>k(G,null)}):null)]),this.hasSubmenu?k(c,null,{default:()=>[k(g,null,{default:()=>k(`div`,{class:`${i}-dropdown-offset-container`},k(f,{show:this.mergedShowSubmenu,placement:this.placement,to:_&&this.popoverBody||void 0,teleportDisabled:!_},{default:()=>k(`div`,{class:`${i}-dropdown-menu-wrapper`},e?k(p,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>v}):v)}))})]}):null);return d?d({node:x,option:t}):x}}),ue=P({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:n,clsPrefix:r}=this,{children:i}=e;return k(l,null,k(se,{clsPrefix:r,tmNode:e,key:e.key}),i?.map(e=>{let{rawNode:i}=e;return i.show===!1?null:Z(i)?k(Y,{clsPrefix:r,key:e.key}):e.isGroup?(t(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):k(Q,{clsPrefix:r,tmNode:e,parentKey:n,key:e.key})}))}}),de=P({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return k(`div`,t,[e?.()])}}),$=P({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:t,childrenFieldRef:n}=T(q);L(K,{showIconRef:d(()=>{let n=t.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>n?n(e):e.icon);let{rawNode:t}=e;return n?n(t):t.icon})}),hasSubmenuRef:d(()=>{let{value:t}=n;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>X(e,t));let{rawNode:n}=e;return X(n,t)})})});let r=i(null);return L(v,null),L(S,null),L(b,r),{bodyRef:r}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:le(i)?k(de,{tmNode:r,key:r.key}):Z(i)?k(Y,{clsPrefix:t,key:r.key}):ce(i)?k(ue,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):k(Q,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return k(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?k(ee,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?_({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),fe=D(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[x(),D(`dropdown-option`,`
 position: relative;
 `,[U(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[U(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),D(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[U(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),a(`disabled`,[h(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[H(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),U(`&::before`,`background-color: var(--n-option-color-hover);`)]),h(`active`,`
 color: var(--n-option-text-color-active);
 `,[H(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),U(`&::before`,`background-color: var(--n-option-color-active);`)]),h(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[H(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),h(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),h(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[H(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[h(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),H(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[h(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),D(`icon`,`
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
 `,[h(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),D(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),D(`dropdown-menu`,`pointer-events: all;`)]),D(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),D(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),D(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),U(`>`,[D(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),a(`scrollable`,`
 padding: var(--n-padding);
 `),h(`scrollable`,[H(`content`,`
 padding: var(--n-padding);
 `)])]),pe={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},me=Object.keys(y),he=P({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},y),pe),W.props),setup(e){let t=i(!1),n=te(B(e,`show`),t),a=d(()=>{let{keyField:t,childrenField:n}=e;return r(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),o=d(()=>a.value.treeNodes),c=i(null),l=i(null),u=i(null),f=d(()=>c.value??l.value??u.value??null),p=d(()=>a.value.getPath(f.value).keyPath),m=d(()=>a.value.getPath(e.value).keyPath),h=A(()=>e.keyboard&&n.value);ie({keydown:{ArrowUp:{prevent:!0,handler:k},ArrowRight:{prevent:!0,handler:O},ArrowDown:{prevent:!0,handler:M},ArrowLeft:{prevent:!0,handler:D},Enter:{prevent:!0,handler:N},Escape:T}},h);let{mergedClsPrefixRef:g,inlineThemeDisabled:_,mergedComponentPropsRef:v}=E(e),y=d(()=>e.size||v?.value?.Dropdown?.size||`medium`),b=W(`Dropdown`,`-dropdown`,fe,s,e,g);L(q,{labelFieldRef:B(e,`labelField`),childrenFieldRef:B(e,`childrenField`),renderLabelRef:B(e,`renderLabel`),renderIconRef:B(e,`renderIcon`),hoverKeyRef:c,keyboardKeyRef:l,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:p,activeKeyPathRef:m,animatedRef:B(e,`animated`),mergedShowRef:n,nodePropsRef:B(e,`nodeProps`),renderOptionRef:B(e,`renderOption`),menuPropsRef:B(e,`menuProps`),doSelect:x,doUpdateShow:S}),C(n,t=>{!e.animated&&!t&&w()});function x(t,n){let{onSelect:r}=e;r&&j(r,t,n)}function S(n){let{"onUpdate:show":r,onUpdateShow:i}=e;r&&j(r,n),i&&j(i,n),t.value=n}function w(){c.value=null,l.value=null,u.value=null}function T(){S(!1)}function D(){F(`left`)}function O(){F(`right`)}function k(){F(`up`)}function M(){F(`down`)}function N(){let e=P();e?.isLeaf&&n.value&&(x(e.key,e.rawNode),S(!1))}function P(){let{value:e}=a,{value:t}=f;return!e||t===null?null:e.getNode(t)??null}function F(e){let{value:t}=f,{value:{getFirstAvailableNode:n}}=a,r=null;if(t===null){let e=n();e!==null&&(r=e.key)}else{let t=P();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(r=n.key)}}r!==null&&(c.value=null,l.value=r)}let I=d(()=>{let{inverted:t}=e,n=y.value,{common:{cubicBezierEaseInOut:r},self:i}=b.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:c,[V(`optionIconSuffixWidth`,n)]:l,[V(`optionSuffixWidth`,n)]:u,[V(`optionIconPrefixWidth`,n)]:d,[V(`optionPrefixWidth`,n)]:f,[V(`fontSize`,n)]:p,[V(`optionHeight`,n)]:m,[V(`optionIconSize`,n)]:h}=i,g={"--n-bezier":r,"--n-font-size":p,"--n-padding":a,"--n-border-radius":s,"--n-option-height":m,"--n-option-prefix-width":f,"--n-option-icon-prefix-width":d,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":l,"--n-option-icon-size":h,"--n-divider-color":o,"--n-option-opacity-disabled":c};return t?(g[`--n-color`]=i.colorInverted,g[`--n-option-color-hover`]=i.optionColorHoverInverted,g[`--n-option-color-active`]=i.optionColorActiveInverted,g[`--n-option-text-color`]=i.optionTextColorInverted,g[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,g[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,g[`--n-prefix-color`]=i.prefixColorInverted,g[`--n-suffix-color`]=i.suffixColorInverted,g[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(g[`--n-color`]=i.color,g[`--n-option-color-hover`]=i.optionColorHover,g[`--n-option-color-active`]=i.optionColorActive,g[`--n-option-text-color`]=i.optionTextColor,g[`--n-option-text-color-hover`]=i.optionTextColorHover,g[`--n-option-text-color-active`]=i.optionTextColorActive,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,g[`--n-prefix-color`]=i.prefixColor,g[`--n-suffix-color`]=i.suffixColor,g[`--n-group-header-text-color`]=i.groupHeaderTextColor),g}),R=_?re(`dropdown`,d(()=>`${y.value[0]}${e.inverted?`i`:``}`),I,e):void 0;return{mergedClsPrefix:g,mergedTheme:b,mergedSize:y,tmNodes:o,mergedShow:n,handleAfterLeave:()=>{e.animated&&w()},doUpdateShow:S,cssVars:_?void 0:I,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let e=(e,t,n,r,i)=>{var a;let{mergedClsPrefix:o,menuProps:s}=this;(a=this.onRender)==null||a.call(this);let c=s?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},l={ref:oe(t),class:[e,`${o}-dropdown`,`${o}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:o,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:i};return k($,F(this.$attrs,l,c))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return k(u,Object.assign({},M(this.$props,me),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{G as n,he as t};