import{H as e,I as t,M as n,P as r,R as i,V as a,Z as o,b as s,ct as c,f as l,ft as u,lt as d,q as f,st as p,w as m}from"./router-DYvLsSoT.js";import{C as h,D as g,I as _,L as v,N as y,P as b,R as x,c as S,h as C,m as w,z as T}from"./browser-Bod5pI4P.js";import{S as E,_ as D,g as O,l as k,n as A,p as j,r as M,t as N}from"./Popover-BT-5204w.js";import{d as P,f as F,n as I}from"./Scrollbar-BRz-5ewP.js";import{g as L,h as R,n as z,r as B,t as V,x as ee,y as te}from"./fade-in-scale-up.cssr-dQuAkifQ.js";import{i as H}from"./Suffix-DfXuhHQ0.js";import{i as U,r as W}from"./warn-CBw6BA0d.js";import{t as ne}from"./Icon-BJhUiaB9.js";import{M as re}from"./index-Cl8Fkr9o.js";function ie(t={},n){let r=p({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:i,keyup:s}=t,l=e=>{switch(e.key){case`Control`:r.ctrl=!0;break;case`Meta`:r.command=!0,r.win=!0;break;case`Shift`:r.shift=!0;break;case`Tab`:r.tab=!0;break}i!==void 0&&Object.keys(i).forEach(t=>{if(t!==e.key)return;let n=i[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},u=e=>{switch(e.key){case`Control`:r.ctrl=!1;break;case`Meta`:r.command=!1,r.win=!1;break;case`Shift`:r.shift=!1;break;case`Tab`:r.tab=!1;break}s!==void 0&&Object.keys(s).forEach(t=>{if(t!==e.key)return;let n=s[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},d=()=>{(n===void 0||n.value)&&(F(`keydown`,document,l),F(`keyup`,document,u)),n!==void 0&&o(n,e=>{e?(F(`keydown`,document,l),F(`keyup`,document,u)):(P(`keydown`,document,l),P(`keyup`,document,u))})};return ee()?(a(d),e(()=>{(n===void 0||n.value)&&(P(`keydown`,document,l),P(`keyup`,document,u))})):d(),c(r)}function ae(e,t,n){if(!t)return e;let r=d(e.value),i=null;return o(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function oe(e){return t=>{t?e.value=t.$el:e.value=null}}var G=n({name:`ChevronRight`,render(){return r(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},r(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`}))}}),K=U(`n-dropdown-menu`),q=U(`n-dropdown`),J=U(`n-dropdown-option`),Y=n({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return r(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),se=n({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:n}=t(K),{renderLabelRef:r,labelFieldRef:i,nodePropsRef:a,renderOptionRef:o}=t(q);return{labelField:i,showIcon:e,hasSubmenu:n,renderLabel:r,nodeProps:a,renderOption:o}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:i,renderLabel:a,renderOption:o}=this,{rawNode:s}=this.tmNode,c=r(`div`,Object.assign({class:`${e}-dropdown-option`},i?.(s)),r(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},r(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},z(s.icon)),r(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},a?a(s):z(s.title??s[this.labelField])),r(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return o?o({node:c,option:s}):c}});function X(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function ce(e){return e.type===`group`}function Z(e){return e.type===`divider`}function le(e){return e.type===`render`}var Q=n({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let n=t(q),{hoverKeyRef:r,keyboardKeyRef:i,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:o,activeKeyPathRef:s,animatedRef:c,mergedShowRef:l,renderLabelRef:u,renderIconRef:p,labelFieldRef:h,childrenFieldRef:_,renderOptionRef:v,nodePropsRef:y,menuPropsRef:b}=n,x=t(J,null),S=t(K),C=t(R),w=m(()=>e.tmNode.rawNode),T=m(()=>{let{value:t}=_;return X(e.tmNode.rawNode,t)}),D=m(()=>{let{disabled:t}=e.tmNode;return t}),O=ae(m(()=>{if(!T.value)return!1;let{key:t,disabled:n}=e.tmNode;if(n)return!1;let{value:s}=r,{value:c}=i,{value:l}=a,{value:u}=o;return s===null?c===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,m(()=>i.value===null&&!c.value)),k=m(()=>!!x?.enteringSubmenuRef.value),A=d(!1);f(J,{enteringSubmenuRef:A});function j(){A.value=!0}function M(){A.value=!1}function N(){let{parentKey:t,tmNode:n}=e;n.disabled||l.value&&(a.value=t,i.value=null,r.value=n.key)}function P(){let{tmNode:t}=e;t.disabled||l.value&&r.value!==t.key&&N()}function F(t){if(e.tmNode.disabled||!l.value)return;let{relatedTarget:n}=t;n&&!E({target:n},`dropdownOption`)&&!E({target:n},`scrollbarRail`)&&(r.value=null)}function I(){let{value:t}=T,{tmNode:r}=e;l.value&&!t&&!r.disabled&&(n.doSelect(r.key,r.rawNode),n.doUpdateShow(!1))}return{labelField:h,renderLabel:u,renderIcon:p,siblingHasIcon:S.showIconRef,siblingHasSubmenu:S.hasSubmenuRef,menuProps:b,popoverBody:C,animated:c,mergedShowSubmenu:m(()=>O.value&&!k.value),rawNode:w,hasSubmenu:T,pending:g(()=>{let{value:t}=o,{key:n}=e.tmNode;return t.includes(n)}),childActive:g(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:g(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:D,renderOption:v,nodeProps:y,handleClick:I,handleMouseMove:P,handleMouseEnter:N,handleMouseLeave:F,handleSubmenuBeforeEnter:j,handleSubmenuAfterEnter:M}},render(){let{animated:e,rawNode:t,mergedShowSubmenu:n,clsPrefix:a,siblingHasIcon:o,siblingHasSubmenu:s,renderLabel:c,renderIcon:u,renderOption:d,nodeProps:f,props:p,scrollable:m}=this,h=null;if(n){let e=this.menuProps?.call(this,t,t.children);h=r($,Object.assign({},e,{clsPrefix:a,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let g={class:[`${a}-dropdown-option-body`,this.pending&&`${a}-dropdown-option-body--pending`,this.active&&`${a}-dropdown-option-body--active`,this.childActive&&`${a}-dropdown-option-body--child-active`,this.mergedDisabled&&`${a}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},_=f?.(t),v=r(`div`,Object.assign({class:[`${a}-dropdown-option`,_?.class],"data-dropdown-option":!0},_),r(`div`,i(g,p),[r(`div`,{class:[`${a}-dropdown-option-body__prefix`,o&&`${a}-dropdown-option-body__prefix--show-icon`]},[u?u(t):z(t.icon)]),r(`div`,{"data-dropdown-option":!0,class:`${a}-dropdown-option-body__label`},c?c(t):z(t[this.labelField]??t.title)),r(`div`,{"data-dropdown-option":!0,class:[`${a}-dropdown-option-body__suffix`,s&&`${a}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?r(ne,null,{default:()=>r(G,null)}):null)]),this.hasSubmenu?r(D,null,{default:()=>[r(O,null,{default:()=>r(`div`,{class:`${a}-dropdown-offset-container`},r(j,{show:this.mergedShowSubmenu,placement:this.placement,to:m&&this.popoverBody||void 0,teleportDisabled:!m},{default:()=>r(`div`,{class:`${a}-dropdown-menu-wrapper`},e?r(l,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>h}):h)}))})]}):null);return d?d({node:v,option:t}):v}}),ue=n({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:i}=e;return r(s,null,r(se,{clsPrefix:n,tmNode:e,key:e.key}),i?.map(e=>{let{rawNode:i}=e;return i.show===!1?null:Z(i)?r(Y,{clsPrefix:n,key:e.key}):e.isGroup?(W(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):r(Q,{clsPrefix:n,tmNode:e,parentKey:t,key:e.key})}))}}),de=n({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return r(`div`,t,[e?.()])}}),$=n({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:n,childrenFieldRef:r}=t(q);f(K,{showIconRef:m(()=>{let t=n.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>t?t(e):e.icon);let{rawNode:n}=e;return t?t(n):n.icon})}),hasSubmenuRef:m(()=>{let{value:t}=r;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>X(e,t));let{rawNode:n}=e;return X(n,t)})})});let i=d(null);return f(L,null),f(te,null),f(R,i),{bodyRef:i}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,i=this.tmNodes.map(i=>{let{rawNode:a}=i;return a.show===!1?null:le(a)?r(de,{tmNode:i,key:i.key}):Z(a)?r(Y,{clsPrefix:t,key:i.key}):ce(a)?r(ue,{clsPrefix:t,tmNode:i,parentKey:e,key:i.key}):r(Q,{clsPrefix:t,tmNode:i,parentKey:e,key:i.key,props:a.props,scrollable:n})});return r(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?r(I,{contentClass:`${t}-dropdown-menu__content`},{default:()=>i}):i,this.showArrow?M({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),fe=b(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[V(),b(`dropdown-option`,`
 position: relative;
 `,[y(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[y(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),b(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[y(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),x(`disabled`,[v(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[_(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),y(`&::before`,`background-color: var(--n-option-color-hover);`)]),v(`active`,`
 color: var(--n-option-text-color-active);
 `,[_(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),y(`&::before`,`background-color: var(--n-option-color-active);`)]),v(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[_(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),v(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),v(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[_(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[v(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),_(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[v(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),b(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),_(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),_(`suffix`,`
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
 `,[v(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),b(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),b(`dropdown-menu`,`pointer-events: all;`)]),b(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),b(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),b(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),y(`>`,[b(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),x(`scrollable`,`
 padding: var(--n-padding);
 `),v(`scrollable`,[_(`content`,`
 padding: var(--n-padding);
 `)])]),pe={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},me=Object.keys(A),he=n({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},A),pe),S.props),setup(e){let t=d(!1),n=H(u(e,`show`),t),r=m(()=>{let{keyField:t,childrenField:n}=e;return k(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),i=m(()=>r.value.treeNodes),a=d(null),s=d(null),c=d(null),l=m(()=>a.value??s.value??c.value??null),p=m(()=>r.value.getPath(l.value).keyPath),_=m(()=>r.value.getPath(e.value).keyPath),v=g(()=>e.keyboard&&n.value);ie({keydown:{ArrowUp:{prevent:!0,handler:F},ArrowRight:{prevent:!0,handler:P},ArrowDown:{prevent:!0,handler:I},ArrowLeft:{prevent:!0,handler:N},Enter:{prevent:!0,handler:L},Escape:M}},v);let{mergedClsPrefixRef:y,inlineThemeDisabled:b,mergedComponentPropsRef:x}=C(e),E=m(()=>e.size||x?.value?.Dropdown?.size||`medium`),D=S(`Dropdown`,`-dropdown`,fe,re,e,y);f(q,{labelFieldRef:u(e,`labelField`),childrenFieldRef:u(e,`childrenField`),renderLabelRef:u(e,`renderLabel`),renderIconRef:u(e,`renderIcon`),hoverKeyRef:a,keyboardKeyRef:s,lastToggledSubmenuKeyRef:c,pendingKeyPathRef:p,activeKeyPathRef:_,animatedRef:u(e,`animated`),mergedShowRef:n,nodePropsRef:u(e,`nodeProps`),renderOptionRef:u(e,`renderOption`),menuPropsRef:u(e,`menuProps`),doSelect:O,doUpdateShow:A}),o(n,t=>{!e.animated&&!t&&j()});function O(t,n){let{onSelect:r}=e;r&&h(r,t,n)}function A(n){let{"onUpdate:show":r,onUpdateShow:i}=e;r&&h(r,n),i&&h(i,n),t.value=n}function j(){a.value=null,s.value=null,c.value=null}function M(){A(!1)}function N(){z(`left`)}function P(){z(`right`)}function F(){z(`up`)}function I(){z(`down`)}function L(){let e=R();e?.isLeaf&&n.value&&(O(e.key,e.rawNode),A(!1))}function R(){let{value:e}=r,{value:t}=l;return!e||t===null?null:e.getNode(t)??null}function z(e){let{value:t}=l,{value:{getFirstAvailableNode:n}}=r,i=null;if(t===null){let e=n();e!==null&&(i=e.key)}else{let t=R();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(i=n.key)}}i!==null&&(a.value=null,s.value=i)}let B=m(()=>{let{inverted:t}=e,n=E.value,{common:{cubicBezierEaseInOut:r},self:i}=D.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:c,[T(`optionIconSuffixWidth`,n)]:l,[T(`optionSuffixWidth`,n)]:u,[T(`optionIconPrefixWidth`,n)]:d,[T(`optionPrefixWidth`,n)]:f,[T(`fontSize`,n)]:p,[T(`optionHeight`,n)]:m,[T(`optionIconSize`,n)]:h}=i,g={"--n-bezier":r,"--n-font-size":p,"--n-padding":a,"--n-border-radius":s,"--n-option-height":m,"--n-option-prefix-width":f,"--n-option-icon-prefix-width":d,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":l,"--n-option-icon-size":h,"--n-divider-color":o,"--n-option-opacity-disabled":c};return t?(g[`--n-color`]=i.colorInverted,g[`--n-option-color-hover`]=i.optionColorHoverInverted,g[`--n-option-color-active`]=i.optionColorActiveInverted,g[`--n-option-text-color`]=i.optionTextColorInverted,g[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,g[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,g[`--n-prefix-color`]=i.prefixColorInverted,g[`--n-suffix-color`]=i.suffixColorInverted,g[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(g[`--n-color`]=i.color,g[`--n-option-color-hover`]=i.optionColorHover,g[`--n-option-color-active`]=i.optionColorActive,g[`--n-option-text-color`]=i.optionTextColor,g[`--n-option-text-color-hover`]=i.optionTextColorHover,g[`--n-option-text-color-active`]=i.optionTextColorActive,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,g[`--n-prefix-color`]=i.prefixColor,g[`--n-suffix-color`]=i.suffixColor,g[`--n-group-header-text-color`]=i.groupHeaderTextColor),g}),V=b?w(`dropdown`,m(()=>`${E.value[0]}${e.inverted?`i`:``}`),B,e):void 0;return{mergedClsPrefix:y,mergedTheme:D,mergedSize:E,tmNodes:i,mergedShow:n,handleAfterLeave:()=>{e.animated&&j()},doUpdateShow:A,cssVars:b?void 0:B,themeClass:V?.themeClass,onRender:V?.onRender}},render(){let e=(e,t,n,a,o)=>{var s;let{mergedClsPrefix:c,menuProps:l}=this;(s=this.onRender)==null||s.call(this);let u=l?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},d={ref:oe(t),class:[e,`${c}-dropdown`,`${c}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:c,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:o};return r($,i(this.$attrs,d,u))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return r(N,Object.assign({},B(this.$props,me),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{G as n,he as t};