import{t as e}from"./ChevronRight-BVL6bZB7.js";import{Bn as t,En as n,Er as r,Fn as i,H as a,In as o,Ir as s,Jr as c,K as l,Kn as u,Kr as d,Nr as f,O as p,Rn as m,Sn as h,T as g,Tn as _,U as v,V as y,Vn as b,W as x,Wn as S,Wr as C,Xn as w,Xr as T,Y as E,Yn as D,Zr as O,_n as k,ai as A,bn as j,cr as M,di as N,dn as P,dr as F,dt as I,fi as L,fr as R,kn as z,li as ee,lr as B,or as V,pr as H,qn as U,qr as W,ti as G,ui as te,un as ne,ur as K,zn as re}from"./index-CnGJXrS6.js";function ie(e={},t){let n=ee({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:i}=e,a=e=>{switch(e.key){case`Control`:n.ctrl=!0;break;case`Meta`:n.command=!0,n.win=!0;break;case`Shift`:n.shift=!0;break;case`Tab`:n.tab=!0;break}r!==void 0&&Object.keys(r).forEach(t=>{if(t!==e.key)return;let n=r[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},o=e=>{switch(e.key){case`Control`:n.ctrl=!1;break;case`Meta`:n.command=!1,n.win=!1;break;case`Shift`:n.shift=!1;break;case`Tab`:n.tab=!1;break}i!==void 0&&Object.keys(i).forEach(t=>{if(t!==e.key)return;let n=i[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},s=()=>{(t===void 0||t.value)&&(w(`keydown`,document,a),w(`keyup`,document,o)),t!==void 0&&A(t,e=>{e?(w(`keydown`,document,a),w(`keyup`,document,o)):(D(`keydown`,document,a),D(`keyup`,document,o))})};return u()?(T(s),O(()=>{(t===void 0||t.value)&&(D(`keydown`,document,a),D(`keyup`,document,o))})):s(),te(n)}function ae(e,t,n){if(!t)return e;let r=N(e.value),i=null;return A(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function oe(e){return t=>{t?e.value=t.$el:e.value=null}}var q=b(`n-dropdown-menu`),J=b(`n-dropdown`),Y=b(`n-dropdown-option`),X=C({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return d(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),se=C({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=W(q),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=W(J);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:o}=this.tmNode,s=d(`div`,Object.assign({class:`${e}-dropdown-option`},r?.(o)),d(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},d(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},k(o.icon)),d(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(o):k(o.title??o[this.labelField])),d(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:o}):s}}),ce=B(`icon`,`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[F(`color-transition`,{transition:`color .3s var(--n-bezier)`}),F(`depth`,{color:`var(--n-color)`},[M(`svg`,{opacity:`var(--n-opacity)`,transition:`opacity .3s var(--n-bezier)`})]),M(`svg`,{height:`1em`,width:`1em`})]),Z=C({_n_icon__:!0,name:`Icon`,inheritAttrs:!1,props:Object.assign(Object.assign({},I.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:r}=P(e),i=I(`Icon`,`-icon`,ce,g,e,t),a=s(()=>{let{depth:t}=e,{common:{cubicBezierEaseInOut:n},self:r}=i.value;if(t!==void 0){let{color:e,[`opacity${t}Depth`]:i}=r;return{"--n-bezier":n,"--n-color":e,"--n-opacity":i}}return{"--n-bezier":n,"--n-color":``,"--n-opacity":``}}),o=r?ne(`icon`,s(()=>`${e.depth||`d`}`),a,e):void 0;return{mergedClsPrefix:t,mergedStyle:s(()=>{let{size:t,color:r}=e;return{fontSize:n(t),color:r}}),cssVars:r?void 0:a,themeClass:o?.themeClass,onRender:o?.onRender}},render(){let{$parent:e,depth:t,mergedClsPrefix:n,component:r,onRender:i,themeClass:a}=this;return e?.$options?._n_icon__&&_(`icon`,"don't wrap `n-icon` inside `n-icon`"),i?.(),d(`i`,c(this.$attrs,{role:`img`,class:[`${n}-icon`,a,{[`${n}-icon--depth`]:t,[`${n}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?d(r):this.$slots)}});function Q(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function le(e){return e.type===`group`}function ue(e){return e.type===`divider`}function de(e){return e.type===`render`}var $=C({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=W(J),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:a,activeKeyPathRef:o,animatedRef:c,mergedShowRef:l,renderLabelRef:u,renderIconRef:d,labelFieldRef:f,childrenFieldRef:p,renderOptionRef:h,nodePropsRef:g,menuPropsRef:_}=t,v=W(Y,null),y=W(q),b=W(m),x=s(()=>e.tmNode.rawNode),S=s(()=>{let{value:t}=p;return Q(e.tmNode.rawNode,t)}),C=s(()=>{let{disabled:t}=e.tmNode;return t}),w=ae(s(()=>{if(!S.value)return!1;let{key:t,disabled:o}=e.tmNode;if(o)return!1;let{value:s}=n,{value:c}=r,{value:l}=i,{value:u}=a;return s===null?c===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,s(()=>r.value===null&&!c.value)),T=s(()=>!!v?.enteringSubmenuRef.value),E=N(!1);G(Y,{enteringSubmenuRef:E});function D(){E.value=!0}function O(){E.value=!1}function k(){let{parentKey:t,tmNode:a}=e;a.disabled||l.value&&(i.value=t,r.value=null,n.value=a.key)}function A(){let{tmNode:t}=e;t.disabled||l.value&&n.value!==t.key&&k()}function j(t){if(e.tmNode.disabled||!l.value)return;let{relatedTarget:r}=t;r&&!V({target:r},`dropdownOption`)&&!V({target:r},`scrollbarRail`)&&(n.value=null)}function M(){let{value:n}=S,{tmNode:r}=e;l.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:f,renderLabel:u,renderIcon:d,siblingHasIcon:y.showIconRef,siblingHasSubmenu:y.hasSubmenuRef,menuProps:_,popoverBody:b,animated:c,mergedShowSubmenu:s(()=>w.value&&!T.value),rawNode:x,hasSubmenu:S,pending:U(()=>{let{value:t}=a,{key:n}=e.tmNode;return t.includes(n)}),childActive:U(()=>{let{value:t}=o,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:U(()=>{let{value:t}=o,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:C,renderOption:h,nodeProps:g,handleClick:M,handleMouseMove:A,handleMouseEnter:k,handleMouseLeave:j,handleSubmenuBeforeEnter:D,handleSubmenuAfterEnter:O}},render(){let{animated:t,rawNode:n,mergedShowSubmenu:a,clsPrefix:s,siblingHasIcon:l,siblingHasSubmenu:u,renderLabel:f,renderIcon:p,renderOption:m,nodeProps:h,props:g,scrollable:_}=this,v=null;if(a){let e=this.menuProps?.call(this,n,n.children);v=d(me,Object.assign({},e,{clsPrefix:s,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let y={class:[`${s}-dropdown-option-body`,this.pending&&`${s}-dropdown-option-body--pending`,this.active&&`${s}-dropdown-option-body--active`,this.childActive&&`${s}-dropdown-option-body--child-active`,this.mergedDisabled&&`${s}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},b=h?.(n),x=d(`div`,Object.assign({class:[`${s}-dropdown-option`,b?.class],"data-dropdown-option":!0},b),d(`div`,c(y,g),[d(`div`,{class:[`${s}-dropdown-option-body__prefix`,l&&`${s}-dropdown-option-body__prefix--show-icon`]},[p?p(n):k(n.icon)]),d(`div`,{"data-dropdown-option":!0,class:`${s}-dropdown-option-body__label`},f?f(n):k(n[this.labelField]??n.title)),d(`div`,{"data-dropdown-option":!0,class:[`${s}-dropdown-option-body__suffix`,u&&`${s}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(Z,null,{default:()=>d(e,null)}):null)]),this.hasSubmenu?d(o,null,{default:()=>[d(i,null,{default:()=>d(`div`,{class:`${s}-dropdown-offset-container`},d(z,{show:this.mergedShowSubmenu,placement:this.placement,to:_&&this.popoverBody||void 0,teleportDisabled:!_},{default:()=>d(`div`,{class:`${s}-dropdown-menu-wrapper`},t?d(r,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>v}):v)}))})]}):null);return m?m({node:x,option:n}):x}}),fe=C({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:r}=e;return d(f,null,d(se,{clsPrefix:n,tmNode:e,key:e.key}),r?.map(e=>{let{rawNode:r}=e;return r.show===!1?null:ue(r)?d(X,{clsPrefix:n,key:e.key}):e.isGroup?(_(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):d($,{clsPrefix:n,tmNode:e,parentKey:t,key:e.key})}))}}),pe=C({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return d(`div`,t,[e?.()])}}),me=C({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:n,childrenFieldRef:r}=W(J);G(q,{showIconRef:s(()=>{let t=n.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>t?t(e):e.icon);let{rawNode:n}=e;return t?t(n):n.icon})}),hasSubmenuRef:s(()=>{let{value:t}=r;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>Q(e,t));let{rawNode:n}=e;return Q(n,t)})})});let i=N(null);return G(re,null),G(t,null),G(m,i),{bodyRef:i}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:de(i)?d(pe,{tmNode:r,key:r.key}):ue(i)?d(X,{clsPrefix:t,key:r.key}):le(i)?d(fe,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):d($,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return d(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?d(E,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?v({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),he=B(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[x(),B(`dropdown-option`,`
 position: relative;
 `,[M(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[M(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),B(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[M(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),R(`disabled`,[F(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[K(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),M(`&::before`,`background-color: var(--n-option-color-hover);`)]),F(`active`,`
 color: var(--n-option-text-color-active);
 `,[K(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),M(`&::before`,`background-color: var(--n-option-color-active);`)]),F(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[K(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),F(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),F(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[K(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[F(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),K(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[F(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),B(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),K(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),K(`suffix`,`
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
 `,[F(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),B(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),B(`dropdown-menu`,`pointer-events: all;`)]),B(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),B(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),B(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),M(`>`,[B(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),R(`scrollable`,`
 padding: var(--n-padding);
 `),F(`scrollable`,[K(`content`,`
 padding: var(--n-padding);
 `)])]),ge={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},_e=Object.keys(a),ve=C({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},a),ge),I.props),setup(e){let t=N(!1),n=S(L(e,`show`),t),r=s(()=>{let{keyField:t,childrenField:n}=e;return l(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),i=s(()=>r.value.treeNodes),a=N(null),o=N(null),c=N(null),u=s(()=>a.value??o.value??c.value??null),d=s(()=>r.value.getPath(u.value).keyPath),f=s(()=>r.value.getPath(e.value).keyPath),m=U(()=>e.keyboard&&n.value);ie({keydown:{ArrowUp:{prevent:!0,handler:O},ArrowRight:{prevent:!0,handler:D},ArrowDown:{prevent:!0,handler:k},ArrowLeft:{prevent:!0,handler:E},Enter:{prevent:!0,handler:j},Escape:T}},m);let{mergedClsPrefixRef:g,inlineThemeDisabled:_,mergedComponentPropsRef:v}=P(e),y=s(()=>e.size||v?.value?.Dropdown?.size||`medium`),b=I(`Dropdown`,`-dropdown`,he,p,e,g);G(J,{labelFieldRef:L(e,`labelField`),childrenFieldRef:L(e,`childrenField`),renderLabelRef:L(e,`renderLabel`),renderIconRef:L(e,`renderIcon`),hoverKeyRef:a,keyboardKeyRef:o,lastToggledSubmenuKeyRef:c,pendingKeyPathRef:d,activeKeyPathRef:f,animatedRef:L(e,`animated`),mergedShowRef:n,nodePropsRef:L(e,`nodeProps`),renderOptionRef:L(e,`renderOption`),menuPropsRef:L(e,`menuProps`),doSelect:x,doUpdateShow:C}),A(n,t=>{!e.animated&&!t&&w()});function x(t,n){let{onSelect:r}=e;r&&h(r,t,n)}function C(n){let{"onUpdate:show":r,onUpdateShow:i}=e;r&&h(r,n),i&&h(i,n),t.value=n}function w(){a.value=null,o.value=null,c.value=null}function T(){C(!1)}function E(){F(`left`)}function D(){F(`right`)}function O(){F(`up`)}function k(){F(`down`)}function j(){let e=M();e?.isLeaf&&n.value&&(x(e.key,e.rawNode),C(!1))}function M(){let{value:e}=r,{value:t}=u;return!e||t===null?null:e.getNode(t)??null}function F(e){let{value:t}=u,{value:{getFirstAvailableNode:n}}=r,i=null;if(t===null){let e=n();e!==null&&(i=e.key)}else{let t=M();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(i=n.key)}}i!==null&&(a.value=null,o.value=i)}let R=s(()=>{let{inverted:t}=e,n=y.value,{common:{cubicBezierEaseInOut:r},self:i}=b.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:c,[H(`optionIconSuffixWidth`,n)]:l,[H(`optionSuffixWidth`,n)]:u,[H(`optionIconPrefixWidth`,n)]:d,[H(`optionPrefixWidth`,n)]:f,[H(`fontSize`,n)]:p,[H(`optionHeight`,n)]:m,[H(`optionIconSize`,n)]:h}=i,g={"--n-bezier":r,"--n-font-size":p,"--n-padding":a,"--n-border-radius":s,"--n-option-height":m,"--n-option-prefix-width":f,"--n-option-icon-prefix-width":d,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":l,"--n-option-icon-size":h,"--n-divider-color":o,"--n-option-opacity-disabled":c};return t?(g[`--n-color`]=i.colorInverted,g[`--n-option-color-hover`]=i.optionColorHoverInverted,g[`--n-option-color-active`]=i.optionColorActiveInverted,g[`--n-option-text-color`]=i.optionTextColorInverted,g[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,g[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,g[`--n-prefix-color`]=i.prefixColorInverted,g[`--n-suffix-color`]=i.suffixColorInverted,g[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(g[`--n-color`]=i.color,g[`--n-option-color-hover`]=i.optionColorHover,g[`--n-option-color-active`]=i.optionColorActive,g[`--n-option-text-color`]=i.optionTextColor,g[`--n-option-text-color-hover`]=i.optionTextColorHover,g[`--n-option-text-color-active`]=i.optionTextColorActive,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,g[`--n-prefix-color`]=i.prefixColor,g[`--n-suffix-color`]=i.suffixColor,g[`--n-group-header-text-color`]=i.groupHeaderTextColor),g}),z=_?ne(`dropdown`,s(()=>`${y.value[0]}${e.inverted?`i`:``}`),R,e):void 0;return{mergedClsPrefix:g,mergedTheme:b,mergedSize:y,tmNodes:i,mergedShow:n,handleAfterLeave:()=>{e.animated&&w()},doUpdateShow:C,cssVars:_?void 0:R,themeClass:z?.themeClass,onRender:z?.onRender}},render(){let e=(e,t,n,r,i)=>{var a;let{mergedClsPrefix:o,menuProps:s}=this;(a=this.onRender)==null||a.call(this);let l=s?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},u={ref:oe(t),class:[e,`${o}-dropdown`,`${o}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:o,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:i};return d(me,c(this.$attrs,u,l))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(y,Object.assign({},j(this.$props,_e),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{Z as n,ve as t};