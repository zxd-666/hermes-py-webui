import{t as e}from"./ChevronRight-B3kUVB1a.js";import{$r as t,Bn as n,Dn as r,E as i,Fr as a,G as o,H as s,Hn as c,Jn as l,Jr as u,Kn as d,Kr as f,Ln as p,On as m,Or as h,Qn as g,Qr as _,Rn as v,Rr as y,Sn as b,U as x,Un as S,Vn as C,W as w,X as T,Xr as E,Yn as D,Yr as O,Zn as k,cr as A,di as j,dr as M,fi as N,fn as P,fr as F,ft as I,hr as L,jn as ee,k as te,mi as R,mr as z,pi as B,pn as V,pr as H,q as ne,ri as U,si as W,ur as G,wn as K,yn as q}from"./index-_epVTX4A.js";function re(e={},n){let r=j({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:i,keyup:a}=e,o=e=>{switch(e.key){case`Control`:r.ctrl=!0;break;case`Meta`:r.command=!0,r.win=!0;break;case`Shift`:r.shift=!0;break;case`Tab`:r.tab=!0;break}i!==void 0&&Object.keys(i).forEach(t=>{if(t!==e.key)return;let n=i[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},s=e=>{switch(e.key){case`Control`:r.ctrl=!1;break;case`Meta`:r.command=!1,r.win=!1;break;case`Shift`:r.shift=!1;break;case`Tab`:r.tab=!1;break}a!==void 0&&Object.keys(a).forEach(t=>{if(t!==e.key)return;let n=a[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},c=()=>{(n===void 0||n.value)&&(g(`keydown`,document,o),g(`keyup`,document,s)),n!==void 0&&W(n,e=>{e?(g(`keydown`,document,o),g(`keyup`,document,s)):(k(`keydown`,document,o),k(`keyup`,document,s))})};return l()?(_(c),t(()=>{(n===void 0||n.value)&&(k(`keydown`,document,o),k(`keyup`,document,s))})):c(),N(r)}function ie(e,t,n){if(!t)return e;let r=B(e.value),i=null;return W(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function ae(e){return t=>{t?e.value=t.$el:e.value=null}}var J=S(`n-dropdown-menu`),Y=S(`n-dropdown`),X=S(`n-dropdown-option`),Z=f({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return u(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),oe=f({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=O(J),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=O(Y);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:o}=this.tmNode,s=u(`div`,Object.assign({class:`${e}-dropdown-option`},r?.(o)),u(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},u(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},q(o.icon)),u(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(o):q(o.title??o[this.labelField])),u(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:o}):s}}),se=M(`icon`,`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[H(`color-transition`,{transition:`color .3s var(--n-bezier)`}),H(`depth`,{color:`var(--n-color)`},[G(`svg`,{opacity:`var(--n-opacity)`,transition:`opacity .3s var(--n-bezier)`})]),G(`svg`,{height:`1em`,width:`1em`})]),Q=f({_n_icon__:!0,name:`Icon`,inheritAttrs:!1,props:Object.assign(Object.assign({},I.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=V(e),r=I(`Icon`,`-icon`,se,i,e,t),a=y(()=>{let{depth:t}=e,{common:{cubicBezierEaseInOut:n},self:i}=r.value;if(t!==void 0){let{color:e,[`opacity${t}Depth`]:r}=i;return{"--n-bezier":n,"--n-color":e,"--n-opacity":r}}return{"--n-bezier":n,"--n-color":``,"--n-opacity":``}}),o=n?P(`icon`,y(()=>`${e.depth||`d`}`),a,e):void 0;return{mergedClsPrefix:t,mergedStyle:y(()=>{let{size:t,color:n}=e;return{fontSize:m(t),color:n}}),cssVars:n?void 0:a,themeClass:o?.themeClass,onRender:o?.onRender}},render(){let{$parent:e,depth:t,mergedClsPrefix:n,component:i,onRender:a,themeClass:o}=this;return e?.$options?._n_icon__&&r(`icon`,"don't wrap `n-icon` inside `n-icon`"),a?.(),u(`i`,E(this.$attrs,{role:`img`,class:[`${n}-icon`,o,{[`${n}-icon--depth`]:t,[`${n}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),i?u(i):this.$slots)}});function $(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function ce(e){return e.type===`group`}function le(e){return e.type===`divider`}function ue(e){return e.type===`render`}var de=f({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=O(Y),{hoverKeyRef:r,keyboardKeyRef:i,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:o,activeKeyPathRef:s,animatedRef:c,mergedShowRef:l,renderLabelRef:u,renderIconRef:d,labelFieldRef:f,childrenFieldRef:p,renderOptionRef:m,nodePropsRef:h,menuPropsRef:g}=t,_=O(X,null),v=O(J),b=O(n),x=y(()=>e.tmNode.rawNode),S=y(()=>{let{value:t}=p;return $(e.tmNode.rawNode,t)}),C=y(()=>{let{disabled:t}=e.tmNode;return t}),w=ie(y(()=>{if(!S.value)return!1;let{key:t,disabled:n}=e.tmNode;if(n)return!1;let{value:s}=r,{value:c}=i,{value:l}=a,{value:u}=o;return s===null?c===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,y(()=>i.value===null&&!c.value)),T=y(()=>!!_?.enteringSubmenuRef.value),E=B(!1);U(X,{enteringSubmenuRef:E});function k(){E.value=!0}function j(){E.value=!1}function M(){let{parentKey:t,tmNode:n}=e;n.disabled||l.value&&(a.value=t,i.value=null,r.value=n.key)}function N(){let{tmNode:t}=e;t.disabled||l.value&&r.value!==t.key&&M()}function P(t){if(e.tmNode.disabled||!l.value)return;let{relatedTarget:n}=t;n&&!A({target:n},`dropdownOption`)&&!A({target:n},`scrollbarRail`)&&(r.value=null)}function F(){let{value:n}=S,{tmNode:r}=e;l.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:f,renderLabel:u,renderIcon:d,siblingHasIcon:v.showIconRef,siblingHasSubmenu:v.hasSubmenuRef,menuProps:g,popoverBody:b,animated:c,mergedShowSubmenu:y(()=>w.value&&!T.value),rawNode:x,hasSubmenu:S,pending:D(()=>{let{value:t}=o,{key:n}=e.tmNode;return t.includes(n)}),childActive:D(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:D(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:C,renderOption:m,nodeProps:h,handleClick:F,handleMouseMove:N,handleMouseEnter:M,handleMouseLeave:P,handleSubmenuBeforeEnter:k,handleSubmenuAfterEnter:j}},render(){let{animated:t,rawNode:n,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:o,renderLabel:s,renderIcon:c,renderOption:l,nodeProps:d,props:f,scrollable:m}=this,g=null;if(r){let e=this.menuProps?.call(this,n,n.children);g=u(me,Object.assign({},e,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let _={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},y=d?.(n),b=u(`div`,Object.assign({class:[`${i}-dropdown-option`,y?.class],"data-dropdown-option":!0},y),u(`div`,E(_,f),[u(`div`,{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[c?c(n):q(n.icon)]),u(`div`,{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},s?s(n):q(n[this.labelField]??n.title)),u(`div`,{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,o&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?u(Q,null,{default:()=>u(e,null)}):null)]),this.hasSubmenu?u(v,null,{default:()=>[u(p,null,{default:()=>u(`div`,{class:`${i}-dropdown-offset-container`},u(ee,{show:this.mergedShowSubmenu,placement:this.placement,to:m&&this.popoverBody||void 0,teleportDisabled:!m},{default:()=>u(`div`,{class:`${i}-dropdown-menu-wrapper`},t?u(h,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>g}):g)}))})]}):null);return l?l({node:b,option:n}):b}}),fe=f({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:i}=e;return u(a,null,u(oe,{clsPrefix:n,tmNode:e,key:e.key}),i?.map(e=>{let{rawNode:i}=e;return i.show===!1?null:le(i)?u(Z,{clsPrefix:n,key:e.key}):e.isGroup?(r(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):u(de,{clsPrefix:n,tmNode:e,parentKey:t,key:e.key})}))}}),pe=f({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return u(`div`,t,[e?.()])}}),me=f({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:t,childrenFieldRef:r}=O(Y);U(J,{showIconRef:y(()=>{let n=t.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>n?n(e):e.icon);let{rawNode:t}=e;return n?n(t):t.icon})}),hasSubmenuRef:y(()=>{let{value:t}=r;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>$(e,t));let{rawNode:n}=e;return $(n,t)})})});let i=B(null);return U(C,null),U(c,null),U(n,i),{bodyRef:i}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:ue(i)?u(pe,{tmNode:r,key:r.key}):le(i)?u(Z,{clsPrefix:t,key:r.key}):ce(i)?u(fe,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):u(de,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return u(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?u(T,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?w({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),he=M(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[o(),M(`dropdown-option`,`
 position: relative;
 `,[G(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[G(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),M(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[G(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),z(`disabled`,[H(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[F(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),G(`&::before`,`background-color: var(--n-option-color-hover);`)]),H(`active`,`
 color: var(--n-option-text-color-active);
 `,[F(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),G(`&::before`,`background-color: var(--n-option-color-active);`)]),H(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[F(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),H(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),H(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[F(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[H(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),F(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[H(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),M(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),F(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),F(`suffix`,`
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
 `,[H(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),M(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),M(`dropdown-menu`,`pointer-events: all;`)]),M(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),M(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),M(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),G(`>`,[M(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),z(`scrollable`,`
 padding: var(--n-padding);
 `),H(`scrollable`,[F(`content`,`
 padding: var(--n-padding);
 `)])]),ge={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},_e=Object.keys(x),ve=f({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},x),ge),I.props),setup(e){let t=B(!1),n=d(R(e,`show`),t),r=y(()=>{let{keyField:t,childrenField:n}=e;return ne(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),i=y(()=>r.value.treeNodes),a=B(null),o=B(null),s=B(null),c=y(()=>a.value??o.value??s.value??null),l=y(()=>r.value.getPath(c.value).keyPath),u=y(()=>r.value.getPath(e.value).keyPath),f=D(()=>e.keyboard&&n.value);re({keydown:{ArrowUp:{prevent:!0,handler:T},ArrowRight:{prevent:!0,handler:w},ArrowDown:{prevent:!0,handler:E},ArrowLeft:{prevent:!0,handler:C},Enter:{prevent:!0,handler:O},Escape:S}},f);let{mergedClsPrefixRef:p,inlineThemeDisabled:m,mergedComponentPropsRef:h}=V(e),g=y(()=>e.size||h?.value?.Dropdown?.size||`medium`),_=I(`Dropdown`,`-dropdown`,he,te,e,p);U(Y,{labelFieldRef:R(e,`labelField`),childrenFieldRef:R(e,`childrenField`),renderLabelRef:R(e,`renderLabel`),renderIconRef:R(e,`renderIcon`),hoverKeyRef:a,keyboardKeyRef:o,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:l,activeKeyPathRef:u,animatedRef:R(e,`animated`),mergedShowRef:n,nodePropsRef:R(e,`nodeProps`),renderOptionRef:R(e,`renderOption`),menuPropsRef:R(e,`menuProps`),doSelect:v,doUpdateShow:b}),W(n,t=>{!e.animated&&!t&&x()});function v(t,n){let{onSelect:r}=e;r&&K(r,t,n)}function b(n){let{"onUpdate:show":r,onUpdateShow:i}=e;r&&K(r,n),i&&K(i,n),t.value=n}function x(){a.value=null,o.value=null,s.value=null}function S(){b(!1)}function C(){A(`left`)}function w(){A(`right`)}function T(){A(`up`)}function E(){A(`down`)}function O(){let e=k();e?.isLeaf&&n.value&&(v(e.key,e.rawNode),b(!1))}function k(){let{value:e}=r,{value:t}=c;return!e||t===null?null:e.getNode(t)??null}function A(e){let{value:t}=c,{value:{getFirstAvailableNode:n}}=r,i=null;if(t===null){let e=n();e!==null&&(i=e.key)}else{let t=k();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(i=n.key)}}i!==null&&(a.value=null,o.value=i)}let j=y(()=>{let{inverted:t}=e,n=g.value,{common:{cubicBezierEaseInOut:r},self:i}=_.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:c,[L(`optionIconSuffixWidth`,n)]:l,[L(`optionSuffixWidth`,n)]:u,[L(`optionIconPrefixWidth`,n)]:d,[L(`optionPrefixWidth`,n)]:f,[L(`fontSize`,n)]:p,[L(`optionHeight`,n)]:m,[L(`optionIconSize`,n)]:h}=i,v={"--n-bezier":r,"--n-font-size":p,"--n-padding":a,"--n-border-radius":s,"--n-option-height":m,"--n-option-prefix-width":f,"--n-option-icon-prefix-width":d,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":l,"--n-option-icon-size":h,"--n-divider-color":o,"--n-option-opacity-disabled":c};return t?(v[`--n-color`]=i.colorInverted,v[`--n-option-color-hover`]=i.optionColorHoverInverted,v[`--n-option-color-active`]=i.optionColorActiveInverted,v[`--n-option-text-color`]=i.optionTextColorInverted,v[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,v[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,v[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,v[`--n-prefix-color`]=i.prefixColorInverted,v[`--n-suffix-color`]=i.suffixColorInverted,v[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(v[`--n-color`]=i.color,v[`--n-option-color-hover`]=i.optionColorHover,v[`--n-option-color-active`]=i.optionColorActive,v[`--n-option-text-color`]=i.optionTextColor,v[`--n-option-text-color-hover`]=i.optionTextColorHover,v[`--n-option-text-color-active`]=i.optionTextColorActive,v[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,v[`--n-prefix-color`]=i.prefixColor,v[`--n-suffix-color`]=i.suffixColor,v[`--n-group-header-text-color`]=i.groupHeaderTextColor),v}),M=m?P(`dropdown`,y(()=>`${g.value[0]}${e.inverted?`i`:``}`),j,e):void 0;return{mergedClsPrefix:p,mergedTheme:_,mergedSize:g,tmNodes:i,mergedShow:n,handleAfterLeave:()=>{e.animated&&x()},doUpdateShow:b,cssVars:m?void 0:j,themeClass:M?.themeClass,onRender:M?.onRender}},render(){let e=(e,t,n,r,i)=>{var a;let{mergedClsPrefix:o,menuProps:s}=this;(a=this.onRender)==null||a.call(this);let c=s?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},l={ref:ae(t),class:[e,`${o}-dropdown`,`${o}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:o,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:i};return u(me,E(this.$attrs,l,c))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return u(s,Object.assign({},b(this.$props,_e),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{Q as n,ve as t};