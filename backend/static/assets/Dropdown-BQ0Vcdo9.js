import{t as e}from"./ChevronRight-BKgTwEBb.js";import{$r as t,An as n,Bn as r,Cn as i,Dn as a,E as o,En as s,Fr as c,G as l,Gn as u,H as d,Hn as f,In as p,Jn as m,Jr as h,Kr as g,Ln as _,Or as v,Qr as y,Rr as b,U as x,Vn as S,W as C,X as w,Xn as T,Xr as E,Yr as D,Zn as O,di as k,dn as A,dr as j,fi as M,fn as N,fr as P,ft as F,k as ee,lr as I,mi as L,mr as R,pi as z,pr as B,q as te,qn as ne,ri as V,si as H,sr as U,ur as W,vn as G,xn as re,zn as K}from"./index-B-VdYolr.js";function ie(e={},n){let r=k({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:i,keyup:a}=e,o=e=>{switch(e.key){case`Control`:r.ctrl=!0;break;case`Meta`:r.command=!0,r.win=!0;break;case`Shift`:r.shift=!0;break;case`Tab`:r.tab=!0;break}i!==void 0&&Object.keys(i).forEach(t=>{if(t!==e.key)return;let n=i[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},s=e=>{switch(e.key){case`Control`:r.ctrl=!1;break;case`Meta`:r.command=!1,r.win=!1;break;case`Shift`:r.shift=!1;break;case`Tab`:r.tab=!1;break}a!==void 0&&Object.keys(a).forEach(t=>{if(t!==e.key)return;let n=a[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},c=()=>{(n===void 0||n.value)&&(O(`keydown`,document,o),O(`keyup`,document,s)),n!==void 0&&H(n,e=>{e?(O(`keydown`,document,o),O(`keyup`,document,s)):(T(`keydown`,document,o),T(`keyup`,document,s))})};return ne()?(y(c),t(()=>{(n===void 0||n.value)&&(T(`keydown`,document,o),T(`keyup`,document,s))})):c(),M(r)}function ae(e,t,n){if(!t)return e;let r=z(e.value),i=null;return H(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function oe(e){return t=>{t?e.value=t.$el:e.value=null}}var q=f(`n-dropdown-menu`),J=f(`n-dropdown`),Y=f(`n-dropdown-option`),X=g({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return h(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),se=g({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=D(q),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=D(J);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:o}=this.tmNode,s=h(`div`,Object.assign({class:`${e}-dropdown-option`},r?.(o)),h(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},h(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},G(o.icon)),h(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(o):G(o.title??o[this.labelField])),h(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:o}):s}}),ce=W(`icon`,`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[P(`color-transition`,{transition:`color .3s var(--n-bezier)`}),P(`depth`,{color:`var(--n-color)`},[I(`svg`,{opacity:`var(--n-opacity)`,transition:`opacity .3s var(--n-bezier)`})]),I(`svg`,{height:`1em`,width:`1em`})]),Z=g({_n_icon__:!0,name:`Icon`,inheritAttrs:!1,props:Object.assign(Object.assign({},F.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=N(e),r=F(`Icon`,`-icon`,ce,o,e,t),i=b(()=>{let{depth:t}=e,{common:{cubicBezierEaseInOut:n},self:i}=r.value;if(t!==void 0){let{color:e,[`opacity${t}Depth`]:r}=i;return{"--n-bezier":n,"--n-color":e,"--n-opacity":r}}return{"--n-bezier":n,"--n-color":``,"--n-opacity":``}}),s=n?A(`icon`,b(()=>`${e.depth||`d`}`),i,e):void 0;return{mergedClsPrefix:t,mergedStyle:b(()=>{let{size:t,color:n}=e;return{fontSize:a(t),color:n}}),cssVars:n?void 0:i,themeClass:s?.themeClass,onRender:s?.onRender}},render(){let{$parent:e,depth:t,mergedClsPrefix:n,component:r,onRender:i,themeClass:a}=this;return e?.$options?._n_icon__&&s(`icon`,"don't wrap `n-icon` inside `n-icon`"),i?.(),h(`i`,E(this.$attrs,{role:`img`,class:[`${n}-icon`,a,{[`${n}-icon--depth`]:t,[`${n}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?h(r):this.$slots)}});function Q(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function le(e){return e.type===`group`}function $(e){return e.type===`divider`}function ue(e){return e.type===`render`}var de=g({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=D(J),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:a,activeKeyPathRef:o,animatedRef:s,mergedShowRef:c,renderLabelRef:l,renderIconRef:u,labelFieldRef:d,childrenFieldRef:f,renderOptionRef:p,nodePropsRef:h,menuPropsRef:g}=t,_=D(Y,null),v=D(q),y=D(K),x=b(()=>e.tmNode.rawNode),S=b(()=>{let{value:t}=f;return Q(e.tmNode.rawNode,t)}),C=b(()=>{let{disabled:t}=e.tmNode;return t}),w=ae(b(()=>{if(!S.value)return!1;let{key:t,disabled:o}=e.tmNode;if(o)return!1;let{value:s}=n,{value:c}=r,{value:l}=i,{value:u}=a;return s===null?c===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,b(()=>r.value===null&&!s.value)),T=b(()=>!!_?.enteringSubmenuRef.value),E=z(!1);V(Y,{enteringSubmenuRef:E});function O(){E.value=!0}function k(){E.value=!1}function A(){let{parentKey:t,tmNode:a}=e;a.disabled||c.value&&(i.value=t,r.value=null,n.value=a.key)}function j(){let{tmNode:t}=e;t.disabled||c.value&&n.value!==t.key&&A()}function M(t){if(e.tmNode.disabled||!c.value)return;let{relatedTarget:r}=t;r&&!U({target:r},`dropdownOption`)&&!U({target:r},`scrollbarRail`)&&(n.value=null)}function N(){let{value:n}=S,{tmNode:r}=e;c.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:d,renderLabel:l,renderIcon:u,siblingHasIcon:v.showIconRef,siblingHasSubmenu:v.hasSubmenuRef,menuProps:g,popoverBody:y,animated:s,mergedShowSubmenu:b(()=>w.value&&!T.value),rawNode:x,hasSubmenu:S,pending:m(()=>{let{value:t}=a,{key:n}=e.tmNode;return t.includes(n)}),childActive:m(()=>{let{value:t}=o,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:m(()=>{let{value:t}=o,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:C,renderOption:p,nodeProps:h,handleClick:N,handleMouseMove:j,handleMouseEnter:A,handleMouseLeave:M,handleSubmenuBeforeEnter:O,handleSubmenuAfterEnter:k}},render(){let{animated:t,rawNode:r,mergedShowSubmenu:i,clsPrefix:a,siblingHasIcon:o,siblingHasSubmenu:s,renderLabel:c,renderIcon:l,renderOption:u,nodeProps:d,props:f,scrollable:m}=this,g=null;if(i){let e=this.menuProps?.call(this,r,r.children);g=h(me,Object.assign({},e,{clsPrefix:a,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let y={class:[`${a}-dropdown-option-body`,this.pending&&`${a}-dropdown-option-body--pending`,this.active&&`${a}-dropdown-option-body--active`,this.childActive&&`${a}-dropdown-option-body--child-active`,this.mergedDisabled&&`${a}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},b=d?.(r),x=h(`div`,Object.assign({class:[`${a}-dropdown-option`,b?.class],"data-dropdown-option":!0},b),h(`div`,E(y,f),[h(`div`,{class:[`${a}-dropdown-option-body__prefix`,o&&`${a}-dropdown-option-body__prefix--show-icon`]},[l?l(r):G(r.icon)]),h(`div`,{"data-dropdown-option":!0,class:`${a}-dropdown-option-body__label`},c?c(r):G(r[this.labelField]??r.title)),h(`div`,{"data-dropdown-option":!0,class:[`${a}-dropdown-option-body__suffix`,s&&`${a}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?h(Z,null,{default:()=>h(e,null)}):null)]),this.hasSubmenu?h(_,null,{default:()=>[h(p,null,{default:()=>h(`div`,{class:`${a}-dropdown-offset-container`},h(n,{show:this.mergedShowSubmenu,placement:this.placement,to:m&&this.popoverBody||void 0,teleportDisabled:!m},{default:()=>h(`div`,{class:`${a}-dropdown-menu-wrapper`},t?h(v,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>g}):g)}))})]}):null);return u?u({node:x,option:r}):x}}),fe=g({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:r}=e;return h(c,null,h(se,{clsPrefix:n,tmNode:e,key:e.key}),r?.map(e=>{let{rawNode:r}=e;return r.show===!1?null:$(r)?h(X,{clsPrefix:n,key:e.key}):e.isGroup?(s(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):h(de,{clsPrefix:n,tmNode:e,parentKey:t,key:e.key})}))}}),pe=g({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return h(`div`,t,[e?.()])}}),me=g({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:t,childrenFieldRef:n}=D(J);V(q,{showIconRef:b(()=>{let n=t.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>n?n(e):e.icon);let{rawNode:t}=e;return n?n(t):t.icon})}),hasSubmenuRef:b(()=>{let{value:t}=n;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>Q(e,t));let{rawNode:n}=e;return Q(n,t)})})});let i=z(null);return V(r,null),V(S,null),V(K,i),{bodyRef:i}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:ue(i)?h(pe,{tmNode:r,key:r.key}):$(i)?h(X,{clsPrefix:t,key:r.key}):le(i)?h(fe,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):h(de,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return h(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?h(w,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?C({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),he=W(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[l(),W(`dropdown-option`,`
 position: relative;
 `,[I(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[I(`&::before`,`
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
 `,[I(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),B(`disabled`,[P(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[j(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),I(`&::before`,`background-color: var(--n-option-color-hover);`)]),P(`active`,`
 color: var(--n-option-text-color-active);
 `,[j(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),I(`&::before`,`background-color: var(--n-option-color-active);`)]),P(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[j(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),P(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),P(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[j(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[P(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),j(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[P(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),W(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),j(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),j(`suffix`,`
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
 `,[P(`has-submenu`,`
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
 `),I(`>`,[W(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),B(`scrollable`,`
 padding: var(--n-padding);
 `),P(`scrollable`,[j(`content`,`
 padding: var(--n-padding);
 `)])]),ge={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},_e=Object.keys(x),ve=g({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},x),ge),F.props),setup(e){let t=z(!1),n=u(L(e,`show`),t),r=b(()=>{let{keyField:t,childrenField:n}=e;return te(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),a=b(()=>r.value.treeNodes),o=z(null),s=z(null),c=z(null),l=b(()=>o.value??s.value??c.value??null),d=b(()=>r.value.getPath(l.value).keyPath),f=b(()=>r.value.getPath(e.value).keyPath),p=m(()=>e.keyboard&&n.value);ie({keydown:{ArrowUp:{prevent:!0,handler:D},ArrowRight:{prevent:!0,handler:E},ArrowDown:{prevent:!0,handler:O},ArrowLeft:{prevent:!0,handler:T},Enter:{prevent:!0,handler:k},Escape:w}},p);let{mergedClsPrefixRef:h,inlineThemeDisabled:g,mergedComponentPropsRef:_}=N(e),v=b(()=>e.size||_?.value?.Dropdown?.size||`medium`),y=F(`Dropdown`,`-dropdown`,he,ee,e,h);V(J,{labelFieldRef:L(e,`labelField`),childrenFieldRef:L(e,`childrenField`),renderLabelRef:L(e,`renderLabel`),renderIconRef:L(e,`renderIcon`),hoverKeyRef:o,keyboardKeyRef:s,lastToggledSubmenuKeyRef:c,pendingKeyPathRef:d,activeKeyPathRef:f,animatedRef:L(e,`animated`),mergedShowRef:n,nodePropsRef:L(e,`nodeProps`),renderOptionRef:L(e,`renderOption`),menuPropsRef:L(e,`menuProps`),doSelect:x,doUpdateShow:S}),H(n,t=>{!e.animated&&!t&&C()});function x(t,n){let{onSelect:r}=e;r&&i(r,t,n)}function S(n){let{"onUpdate:show":r,onUpdateShow:a}=e;r&&i(r,n),a&&i(a,n),t.value=n}function C(){o.value=null,s.value=null,c.value=null}function w(){S(!1)}function T(){M(`left`)}function E(){M(`right`)}function D(){M(`up`)}function O(){M(`down`)}function k(){let e=j();e?.isLeaf&&n.value&&(x(e.key,e.rawNode),S(!1))}function j(){let{value:e}=r,{value:t}=l;return!e||t===null?null:e.getNode(t)??null}function M(e){let{value:t}=l,{value:{getFirstAvailableNode:n}}=r,i=null;if(t===null){let e=n();e!==null&&(i=e.key)}else{let t=j();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(i=n.key)}}i!==null&&(o.value=null,s.value=i)}let P=b(()=>{let{inverted:t}=e,n=v.value,{common:{cubicBezierEaseInOut:r},self:i}=y.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:c,[R(`optionIconSuffixWidth`,n)]:l,[R(`optionSuffixWidth`,n)]:u,[R(`optionIconPrefixWidth`,n)]:d,[R(`optionPrefixWidth`,n)]:f,[R(`fontSize`,n)]:p,[R(`optionHeight`,n)]:m,[R(`optionIconSize`,n)]:h}=i,g={"--n-bezier":r,"--n-font-size":p,"--n-padding":a,"--n-border-radius":s,"--n-option-height":m,"--n-option-prefix-width":f,"--n-option-icon-prefix-width":d,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":l,"--n-option-icon-size":h,"--n-divider-color":o,"--n-option-opacity-disabled":c};return t?(g[`--n-color`]=i.colorInverted,g[`--n-option-color-hover`]=i.optionColorHoverInverted,g[`--n-option-color-active`]=i.optionColorActiveInverted,g[`--n-option-text-color`]=i.optionTextColorInverted,g[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,g[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,g[`--n-prefix-color`]=i.prefixColorInverted,g[`--n-suffix-color`]=i.suffixColorInverted,g[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(g[`--n-color`]=i.color,g[`--n-option-color-hover`]=i.optionColorHover,g[`--n-option-color-active`]=i.optionColorActive,g[`--n-option-text-color`]=i.optionTextColor,g[`--n-option-text-color-hover`]=i.optionTextColorHover,g[`--n-option-text-color-active`]=i.optionTextColorActive,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,g[`--n-prefix-color`]=i.prefixColor,g[`--n-suffix-color`]=i.suffixColor,g[`--n-group-header-text-color`]=i.groupHeaderTextColor),g}),I=g?A(`dropdown`,b(()=>`${v.value[0]}${e.inverted?`i`:``}`),P,e):void 0;return{mergedClsPrefix:h,mergedTheme:y,mergedSize:v,tmNodes:a,mergedShow:n,handleAfterLeave:()=>{e.animated&&C()},doUpdateShow:S,cssVars:g?void 0:P,themeClass:I?.themeClass,onRender:I?.onRender}},render(){let e=(e,t,n,r,i)=>{var a;let{mergedClsPrefix:o,menuProps:s}=this;(a=this.onRender)==null||a.call(this);let c=s?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},l={ref:oe(t),class:[e,`${o}-dropdown`,`${o}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:o,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:i};return h(me,E(this.$attrs,l,c))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return h(d,Object.assign({},re(this.$props,_e),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{Z as n,ve as t};