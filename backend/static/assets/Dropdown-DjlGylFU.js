import{i as e,r as t}from"./warn-MV9BENh8.js";import{t as n}from"./Icon-CCFYjqxp.js";import{An as r,Cr as i,In as a,Ir as o,J as s,Jn as c,Kr as l,On as u,P as d,Q as f,Si as p,Sr as m,Tn as h,Un as g,Ur as _,Wn as v,X as y,Xn as b,Y as x,Yn as S,ar as C,bi as w,br as T,di as E,ei as D,er as O,gr as k,hi as A,ii as j,ni as M,nr as N,nt as P,oi as F,or as I,q as L,ri as R,rr as z,si as ee,vn as te,vr as B,vt as V,xi as H,xr as U,yi as ne,yn as re,yr as W}from"./index-VQ3J1Smk.js";function ie(e={},t){let n=ne({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:i}=e,a=e=>{switch(e.key){case`Control`:n.ctrl=!0;break;case`Meta`:n.command=!0,n.win=!0;break;case`Shift`:n.shift=!0;break;case`Tab`:n.tab=!0;break}r!==void 0&&Object.keys(r).forEach(t=>{if(t!==e.key)return;let n=r[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},o=e=>{switch(e.key){case`Control`:n.ctrl=!1;break;case`Meta`:n.command=!1,n.win=!1;break;case`Shift`:n.shift=!1;break;case`Tab`:n.tab=!1;break}i!==void 0&&Object.keys(i).forEach(t=>{if(t!==e.key)return;let n=i[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},s=()=>{(t===void 0||t.value)&&(I(`keydown`,document,a),I(`keyup`,document,o)),t!==void 0&&A(t,e=>{e?(I(`keydown`,document,a),I(`keyup`,document,o)):(C(`keydown`,document,a),C(`keyup`,document,o))})};return N()?(F(s),ee(()=>{(t===void 0||t.value)&&(C(`keydown`,document,a),C(`keyup`,document,o))})):s(),w(n)}function ae(e,t,n){if(!t)return e;let r=H(e.value),i=null;return A(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function oe(e){return t=>{t?e.value=t.$el:e.value=null}}var G=D({name:`ChevronRight`,render(){return M(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},M(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`}))}}),K=e(`n-dropdown-menu`),q=e(`n-dropdown`),J=e(`n-dropdown-option`),Y=D({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return M(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),se=D({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=R(K),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=R(q);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:o}=this.tmNode,s=M(`div`,Object.assign({class:`${e}-dropdown-option`},r?.(o)),M(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},M(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},h(o.icon)),M(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(o):h(o.title??o[this.labelField])),M(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:o}):s}});function X(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function ce(e){return e.type===`group`}function Z(e){return e.type===`divider`}function le(e){return e.type===`render`}var Q=D({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=R(q),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:a,activeKeyPathRef:o,animatedRef:s,mergedShowRef:u,renderLabelRef:d,renderIconRef:f,labelFieldRef:p,childrenFieldRef:m,renderOptionRef:h,nodePropsRef:g,menuPropsRef:_}=t,v=R(J,null),y=R(K),b=R(c),x=l(()=>e.tmNode.rawNode),S=l(()=>{let{value:t}=m;return X(e.tmNode.rawNode,t)}),C=l(()=>{let{disabled:t}=e.tmNode;return t}),w=ae(l(()=>{if(!S.value)return!1;let{key:t,disabled:o}=e.tmNode;if(o)return!1;let{value:s}=n,{value:c}=r,{value:l}=i,{value:u}=a;return s===null?c===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,l(()=>r.value===null&&!s.value)),T=l(()=>!!v?.enteringSubmenuRef.value),D=H(!1);E(J,{enteringSubmenuRef:D});function O(){D.value=!0}function A(){D.value=!1}function j(){let{parentKey:t,tmNode:a}=e;a.disabled||u.value&&(i.value=t,r.value=null,n.value=a.key)}function M(){let{tmNode:t}=e;t.disabled||u.value&&n.value!==t.key&&j()}function N(t){if(e.tmNode.disabled||!u.value)return;let{relatedTarget:r}=t;r&&!k({target:r},`dropdownOption`)&&!k({target:r},`scrollbarRail`)&&(n.value=null)}function P(){let{value:n}=S,{tmNode:r}=e;u.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:p,renderLabel:d,renderIcon:f,siblingHasIcon:y.showIconRef,siblingHasSubmenu:y.hasSubmenuRef,menuProps:_,popoverBody:b,animated:s,mergedShowSubmenu:l(()=>w.value&&!T.value),rawNode:x,hasSubmenu:S,pending:z(()=>{let{value:t}=a,{key:n}=e.tmNode;return t.includes(n)}),childActive:z(()=>{let{value:t}=o,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:z(()=>{let{value:t}=o,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:C,renderOption:h,nodeProps:g,handleClick:P,handleMouseMove:M,handleMouseEnter:j,handleMouseLeave:N,handleSubmenuBeforeEnter:O,handleSubmenuAfterEnter:A}},render(){let{animated:e,rawNode:t,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:s,siblingHasSubmenu:c,renderLabel:l,renderIcon:u,renderOption:d,nodeProps:f,props:p,scrollable:m}=this,_=null;if(r){let e=this.menuProps?.call(this,t,t.children);_=M($,Object.assign({},e,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let y={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},b=f?.(t),x=M(`div`,Object.assign({class:[`${i}-dropdown-option`,b?.class],"data-dropdown-option":!0},b),M(`div`,j(y,p),[M(`div`,{class:[`${i}-dropdown-option-body__prefix`,s&&`${i}-dropdown-option-body__prefix--show-icon`]},[u?u(t):h(t.icon)]),M(`div`,{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},l?l(t):h(t[this.labelField]??t.title)),M(`div`,{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,c&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?M(n,null,{default:()=>M(G,null)}):null)]),this.hasSubmenu?M(v,null,{default:()=>[M(g,null,{default:()=>M(`div`,{class:`${i}-dropdown-offset-container`},M(a,{show:this.mergedShowSubmenu,placement:this.placement,to:m&&this.popoverBody||void 0,teleportDisabled:!m},{default:()=>M(`div`,{class:`${i}-dropdown-menu-wrapper`},e?M(o,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>_}):_)}))})]}):null);return d?d({node:x,option:t}):x}}),ue=D({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:n,clsPrefix:r}=this,{children:i}=e;return M(_,null,M(se,{clsPrefix:r,tmNode:e,key:e.key}),i?.map(e=>{let{rawNode:i}=e;return i.show===!1?null:Z(i)?M(Y,{clsPrefix:r,key:e.key}):e.isGroup?(t(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):M(Q,{clsPrefix:r,tmNode:e,parentKey:n,key:e.key})}))}}),de=D({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return M(`div`,t,[e?.()])}}),$=D({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:t,childrenFieldRef:n}=R(q);E(K,{showIconRef:l(()=>{let n=t.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>n?n(e):e.icon);let{rawNode:t}=e;return n?n(t):t.icon})}),hasSubmenuRef:l(()=>{let{value:t}=n;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>X(e,t));let{rawNode:n}=e;return X(n,t)})})});let r=H(null);return E(S,null),E(b,null),E(c,r),{bodyRef:r}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:le(i)?M(de,{tmNode:r,key:r.key}):Z(i)?M(Y,{clsPrefix:t,key:r.key}):ce(i)?M(ue,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):M(Q,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return M(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?M(P,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?x({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),fe=W(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[y(),W(`dropdown-option`,`
 position: relative;
 `,[B(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[B(`&::before`,`
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
 `,[B(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),m(`disabled`,[U(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[T(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),B(`&::before`,`background-color: var(--n-option-color-hover);`)]),U(`active`,`
 color: var(--n-option-text-color-active);
 `,[T(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),B(`&::before`,`background-color: var(--n-option-color-active);`)]),U(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[T(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),U(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),U(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[T(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[U(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),T(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[U(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),W(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),T(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),T(`suffix`,`
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
 `,[U(`has-submenu`,`
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
 `),B(`>`,[W(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),m(`scrollable`,`
 padding: var(--n-padding);
 `),U(`scrollable`,[T(`content`,`
 padding: var(--n-padding);
 `)])]),pe={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},me=Object.keys(s),he=D({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},s),pe),V.props),setup(e){let t=H(!1),n=O(p(e,`show`),t),a=l(()=>{let{keyField:t,childrenField:n}=e;return f(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),o=l(()=>a.value.treeNodes),s=H(null),c=H(null),u=H(null),m=l(()=>s.value??c.value??u.value??null),h=l(()=>a.value.getPath(m.value).keyPath),g=l(()=>a.value.getPath(e.value).keyPath),_=z(()=>e.keyboard&&n.value);ie({keydown:{ArrowUp:{prevent:!0,handler:M},ArrowRight:{prevent:!0,handler:j},ArrowDown:{prevent:!0,handler:N},ArrowLeft:{prevent:!0,handler:k},Enter:{prevent:!0,handler:P},Escape:D}},_);let{mergedClsPrefixRef:v,inlineThemeDisabled:y,mergedComponentPropsRef:b}=re(e),x=l(()=>e.size||b?.value?.Dropdown?.size||`medium`),S=V(`Dropdown`,`-dropdown`,fe,d,e,v);E(q,{labelFieldRef:p(e,`labelField`),childrenFieldRef:p(e,`childrenField`),renderLabelRef:p(e,`renderLabel`),renderIconRef:p(e,`renderIcon`),hoverKeyRef:s,keyboardKeyRef:c,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:h,activeKeyPathRef:g,animatedRef:p(e,`animated`),mergedShowRef:n,nodePropsRef:p(e,`nodeProps`),renderOptionRef:p(e,`renderOption`),menuPropsRef:p(e,`menuProps`),doSelect:C,doUpdateShow:w}),A(n,t=>{!e.animated&&!t&&T()});function C(t,n){let{onSelect:i}=e;i&&r(i,t,n)}function w(n){let{"onUpdate:show":i,onUpdateShow:a}=e;i&&r(i,n),a&&r(a,n),t.value=n}function T(){s.value=null,c.value=null,u.value=null}function D(){w(!1)}function k(){I(`left`)}function j(){I(`right`)}function M(){I(`up`)}function N(){I(`down`)}function P(){let e=F();e?.isLeaf&&n.value&&(C(e.key,e.rawNode),w(!1))}function F(){let{value:e}=a,{value:t}=m;return!e||t===null?null:e.getNode(t)??null}function I(e){let{value:t}=m,{value:{getFirstAvailableNode:n}}=a,r=null;if(t===null){let e=n();e!==null&&(r=e.key)}else{let t=F();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(r=n.key)}}r!==null&&(s.value=null,c.value=r)}let L=l(()=>{let{inverted:t}=e,n=x.value,{common:{cubicBezierEaseInOut:r},self:a}=S.value,{padding:o,dividerColor:s,borderRadius:c,optionOpacityDisabled:l,[i(`optionIconSuffixWidth`,n)]:u,[i(`optionSuffixWidth`,n)]:d,[i(`optionIconPrefixWidth`,n)]:f,[i(`optionPrefixWidth`,n)]:p,[i(`fontSize`,n)]:m,[i(`optionHeight`,n)]:h,[i(`optionIconSize`,n)]:g}=a,_={"--n-bezier":r,"--n-font-size":m,"--n-padding":o,"--n-border-radius":c,"--n-option-height":h,"--n-option-prefix-width":p,"--n-option-icon-prefix-width":f,"--n-option-suffix-width":d,"--n-option-icon-suffix-width":u,"--n-option-icon-size":g,"--n-divider-color":s,"--n-option-opacity-disabled":l};return t?(_[`--n-color`]=a.colorInverted,_[`--n-option-color-hover`]=a.optionColorHoverInverted,_[`--n-option-color-active`]=a.optionColorActiveInverted,_[`--n-option-text-color`]=a.optionTextColorInverted,_[`--n-option-text-color-hover`]=a.optionTextColorHoverInverted,_[`--n-option-text-color-active`]=a.optionTextColorActiveInverted,_[`--n-option-text-color-child-active`]=a.optionTextColorChildActiveInverted,_[`--n-prefix-color`]=a.prefixColorInverted,_[`--n-suffix-color`]=a.suffixColorInverted,_[`--n-group-header-text-color`]=a.groupHeaderTextColorInverted):(_[`--n-color`]=a.color,_[`--n-option-color-hover`]=a.optionColorHover,_[`--n-option-color-active`]=a.optionColorActive,_[`--n-option-text-color`]=a.optionTextColor,_[`--n-option-text-color-hover`]=a.optionTextColorHover,_[`--n-option-text-color-active`]=a.optionTextColorActive,_[`--n-option-text-color-child-active`]=a.optionTextColorChildActive,_[`--n-prefix-color`]=a.prefixColor,_[`--n-suffix-color`]=a.suffixColor,_[`--n-group-header-text-color`]=a.groupHeaderTextColor),_}),R=y?te(`dropdown`,l(()=>`${x.value[0]}${e.inverted?`i`:``}`),L,e):void 0;return{mergedClsPrefix:v,mergedTheme:S,mergedSize:x,tmNodes:o,mergedShow:n,handleAfterLeave:()=>{e.animated&&T()},doUpdateShow:w,cssVars:y?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let e=(e,t,n,r,i)=>{var a;let{mergedClsPrefix:o,menuProps:s}=this;(a=this.onRender)==null||a.call(this);let c=s?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},l={ref:oe(t),class:[e,`${o}-dropdown`,`${o}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:o,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:i};return M($,j(this.$attrs,l,c))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return M(L,Object.assign({},u(this.$props,me),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{G as n,he as t};