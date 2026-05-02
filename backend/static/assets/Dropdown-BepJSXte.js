import{t as e}from"./ChevronRight-D9iDRPpv.js";import{$r as t,A as n,Bn as r,D as i,Dn as a,Fr as o,G as s,Hn as c,J as l,Jn as u,Jr as d,K as f,Kn as p,Kr as m,Ln as h,On as g,Or as _,Qn as v,Qr as y,Rn as b,Rr as x,Sn as S,U as C,Un as w,Vn as T,W as E,Xr as D,Yn as O,Yr as k,Z as A,Zn as j,cr as M,di as N,dr as P,fi as F,fn as I,fr as L,hr as R,jn as ee,mi as z,mr as te,pi as B,pn as V,pr as H,pt as U,ri as W,si as G,ur as K,wn as q,yn as J}from"./index-l0jp4Q5E.js";function ne(e={},n){let r=N({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:i,keyup:a}=e,o=e=>{switch(e.key){case`Control`:r.ctrl=!0;break;case`Meta`:r.command=!0,r.win=!0;break;case`Shift`:r.shift=!0;break;case`Tab`:r.tab=!0;break}i!==void 0&&Object.keys(i).forEach(t=>{if(t!==e.key)return;let n=i[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},s=e=>{switch(e.key){case`Control`:r.ctrl=!1;break;case`Meta`:r.command=!1,r.win=!1;break;case`Shift`:r.shift=!1;break;case`Tab`:r.tab=!1;break}a!==void 0&&Object.keys(a).forEach(t=>{if(t!==e.key)return;let n=a[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},c=()=>{(n===void 0||n.value)&&(v(`keydown`,document,o),v(`keyup`,document,s)),n!==void 0&&G(n,e=>{e?(v(`keydown`,document,o),v(`keyup`,document,s)):(j(`keydown`,document,o),j(`keyup`,document,s))})};return u()?(y(c),t(()=>{(n===void 0||n.value)&&(j(`keydown`,document,o),j(`keyup`,document,s))})):c(),F(r)}function re(e,t,n){if(!t)return e;let r=B(e.value),i=null;return G(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function ie(e){return t=>{t?e.value=t.$el:e.value=null}}var Y=w(`n-dropdown-menu`),X=w(`n-dropdown`),Z=w(`n-dropdown-option`),Q=m({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return d(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),ae=m({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=k(Y),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=k(X);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:o}=this.tmNode,s=d(`div`,Object.assign({class:`${e}-dropdown-option`},r?.(o)),d(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},d(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},J(o.icon)),d(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(o):J(o.title??o[this.labelField])),d(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:o}):s}}),oe=P(`icon`,`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[H(`color-transition`,{transition:`color .3s var(--n-bezier)`}),H(`depth`,{color:`var(--n-color)`},[K(`svg`,{opacity:`var(--n-opacity)`,transition:`opacity .3s var(--n-bezier)`})]),K(`svg`,{height:`1em`,width:`1em`})]),se=m({_n_icon__:!0,name:`Icon`,inheritAttrs:!1,props:Object.assign(Object.assign({},U.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=V(e),r=U(`Icon`,`-icon`,oe,i,e,t),a=x(()=>{let{depth:t}=e,{common:{cubicBezierEaseInOut:n},self:i}=r.value;if(t!==void 0){let{color:e,[`opacity${t}Depth`]:r}=i;return{"--n-bezier":n,"--n-color":e,"--n-opacity":r}}return{"--n-bezier":n,"--n-color":``,"--n-opacity":``}}),o=n?I(`icon`,x(()=>`${e.depth||`d`}`),a,e):void 0;return{mergedClsPrefix:t,mergedStyle:x(()=>{let{size:t,color:n}=e;return{fontSize:g(t),color:n}}),cssVars:n?void 0:a,themeClass:o?.themeClass,onRender:o?.onRender}},render(){let{$parent:e,depth:t,mergedClsPrefix:n,component:r,onRender:i,themeClass:o}=this;return e?.$options?._n_icon__&&a(`icon`,"don't wrap `n-icon` inside `n-icon`"),i?.(),d(`i`,D(this.$attrs,{role:`img`,class:[`${n}-icon`,o,{[`${n}-icon--depth`]:t,[`${n}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?d(r):this.$slots)}});function $(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function ce(e){return e.type===`group`}function le(e){return e.type===`divider`}function ue(e){return e.type===`render`}var de=m({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=k(X),{hoverKeyRef:n,keyboardKeyRef:i,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:o,activeKeyPathRef:s,animatedRef:c,mergedShowRef:l,renderLabelRef:u,renderIconRef:d,labelFieldRef:f,childrenFieldRef:p,renderOptionRef:m,nodePropsRef:h,menuPropsRef:g}=t,_=k(Z,null),v=k(Y),y=k(r),b=x(()=>e.tmNode.rawNode),S=x(()=>{let{value:t}=p;return $(e.tmNode.rawNode,t)}),C=x(()=>{let{disabled:t}=e.tmNode;return t}),w=re(x(()=>{if(!S.value)return!1;let{key:t,disabled:r}=e.tmNode;if(r)return!1;let{value:s}=n,{value:c}=i,{value:l}=a,{value:u}=o;return s===null?c===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,x(()=>i.value===null&&!c.value)),T=x(()=>!!_?.enteringSubmenuRef.value),E=B(!1);W(Z,{enteringSubmenuRef:E});function D(){E.value=!0}function A(){E.value=!1}function j(){let{parentKey:t,tmNode:r}=e;r.disabled||l.value&&(a.value=t,i.value=null,n.value=r.key)}function N(){let{tmNode:t}=e;t.disabled||l.value&&n.value!==t.key&&j()}function P(t){if(e.tmNode.disabled||!l.value)return;let{relatedTarget:r}=t;r&&!M({target:r},`dropdownOption`)&&!M({target:r},`scrollbarRail`)&&(n.value=null)}function F(){let{value:n}=S,{tmNode:r}=e;l.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:f,renderLabel:u,renderIcon:d,siblingHasIcon:v.showIconRef,siblingHasSubmenu:v.hasSubmenuRef,menuProps:g,popoverBody:y,animated:c,mergedShowSubmenu:x(()=>w.value&&!T.value),rawNode:b,hasSubmenu:S,pending:O(()=>{let{value:t}=o,{key:n}=e.tmNode;return t.includes(n)}),childActive:O(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:O(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:C,renderOption:m,nodeProps:h,handleClick:F,handleMouseMove:N,handleMouseEnter:j,handleMouseLeave:P,handleSubmenuBeforeEnter:D,handleSubmenuAfterEnter:A}},render(){let{animated:t,rawNode:n,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:o,renderLabel:s,renderIcon:c,renderOption:l,nodeProps:u,props:f,scrollable:p}=this,m=null;if(r){let e=this.menuProps?.call(this,n,n.children);m=d(me,Object.assign({},e,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let g={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},v=u?.(n),y=d(`div`,Object.assign({class:[`${i}-dropdown-option`,v?.class],"data-dropdown-option":!0},v),d(`div`,D(g,f),[d(`div`,{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[c?c(n):J(n.icon)]),d(`div`,{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},s?s(n):J(n[this.labelField]??n.title)),d(`div`,{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,o&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(se,null,{default:()=>d(e,null)}):null)]),this.hasSubmenu?d(b,null,{default:()=>[d(h,null,{default:()=>d(`div`,{class:`${i}-dropdown-offset-container`},d(ee,{show:this.mergedShowSubmenu,placement:this.placement,to:p&&this.popoverBody||void 0,teleportDisabled:!p},{default:()=>d(`div`,{class:`${i}-dropdown-menu-wrapper`},t?d(_,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>m}):m)}))})]}):null);return l?l({node:y,option:n}):y}}),fe=m({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:r}=e;return d(o,null,d(ae,{clsPrefix:n,tmNode:e,key:e.key}),r?.map(e=>{let{rawNode:r}=e;return r.show===!1?null:le(r)?d(Q,{clsPrefix:n,key:e.key}):e.isGroup?(a(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):d(de,{clsPrefix:n,tmNode:e,parentKey:t,key:e.key})}))}}),pe=m({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return d(`div`,t,[e?.()])}}),me=m({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:t,childrenFieldRef:n}=k(X);W(Y,{showIconRef:x(()=>{let n=t.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>n?n(e):e.icon);let{rawNode:t}=e;return n?n(t):t.icon})}),hasSubmenuRef:x(()=>{let{value:t}=n;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>$(e,t));let{rawNode:n}=e;return $(n,t)})})});let i=B(null);return W(T,null),W(c,null),W(r,i),{bodyRef:i}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:ue(i)?d(pe,{tmNode:r,key:r.key}):le(i)?d(Q,{clsPrefix:t,key:r.key}):ce(i)?d(fe,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):d(de,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return d(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?d(A,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?s({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),he=P(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[f(),P(`dropdown-option`,`
 position: relative;
 `,[K(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[K(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),P(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[K(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),te(`disabled`,[H(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[L(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),K(`&::before`,`background-color: var(--n-option-color-hover);`)]),H(`active`,`
 color: var(--n-option-text-color-active);
 `,[L(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),K(`&::before`,`background-color: var(--n-option-color-active);`)]),H(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[L(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),H(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),H(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[L(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[H(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),L(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[H(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),P(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),L(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),L(`suffix`,`
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
 `),P(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),P(`dropdown-menu`,`pointer-events: all;`)]),P(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),P(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),P(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),K(`>`,[P(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),te(`scrollable`,`
 padding: var(--n-padding);
 `),H(`scrollable`,[L(`content`,`
 padding: var(--n-padding);
 `)])]),ge={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},_e=Object.keys(E),ve=m({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},E),ge),U.props),setup(e){let t=B(!1),r=p(z(e,`show`),t),i=x(()=>{let{keyField:t,childrenField:n}=e;return l(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),a=x(()=>i.value.treeNodes),o=B(null),s=B(null),c=B(null),u=x(()=>o.value??s.value??c.value??null),d=x(()=>i.value.getPath(u.value).keyPath),f=x(()=>i.value.getPath(e.value).keyPath),m=O(()=>e.keyboard&&r.value);ne({keydown:{ArrowUp:{prevent:!0,handler:D},ArrowRight:{prevent:!0,handler:E},ArrowDown:{prevent:!0,handler:k},ArrowLeft:{prevent:!0,handler:T},Enter:{prevent:!0,handler:A},Escape:w}},m);let{mergedClsPrefixRef:h,inlineThemeDisabled:g,mergedComponentPropsRef:_}=V(e),v=x(()=>e.size||_?.value?.Dropdown?.size||`medium`),y=U(`Dropdown`,`-dropdown`,he,n,e,h);W(X,{labelFieldRef:z(e,`labelField`),childrenFieldRef:z(e,`childrenField`),renderLabelRef:z(e,`renderLabel`),renderIconRef:z(e,`renderIcon`),hoverKeyRef:o,keyboardKeyRef:s,lastToggledSubmenuKeyRef:c,pendingKeyPathRef:d,activeKeyPathRef:f,animatedRef:z(e,`animated`),mergedShowRef:r,nodePropsRef:z(e,`nodeProps`),renderOptionRef:z(e,`renderOption`),menuPropsRef:z(e,`menuProps`),doSelect:b,doUpdateShow:S}),G(r,t=>{!e.animated&&!t&&C()});function b(t,n){let{onSelect:r}=e;r&&q(r,t,n)}function S(n){let{"onUpdate:show":r,onUpdateShow:i}=e;r&&q(r,n),i&&q(i,n),t.value=n}function C(){o.value=null,s.value=null,c.value=null}function w(){S(!1)}function T(){M(`left`)}function E(){M(`right`)}function D(){M(`up`)}function k(){M(`down`)}function A(){let e=j();e?.isLeaf&&r.value&&(b(e.key,e.rawNode),S(!1))}function j(){let{value:e}=i,{value:t}=u;return!e||t===null?null:e.getNode(t)??null}function M(e){let{value:t}=u,{value:{getFirstAvailableNode:n}}=i,r=null;if(t===null){let e=n();e!==null&&(r=e.key)}else{let t=j();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(r=n.key)}}r!==null&&(o.value=null,s.value=r)}let N=x(()=>{let{inverted:t}=e,n=v.value,{common:{cubicBezierEaseInOut:r},self:i}=y.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:c,[R(`optionIconSuffixWidth`,n)]:l,[R(`optionSuffixWidth`,n)]:u,[R(`optionIconPrefixWidth`,n)]:d,[R(`optionPrefixWidth`,n)]:f,[R(`fontSize`,n)]:p,[R(`optionHeight`,n)]:m,[R(`optionIconSize`,n)]:h}=i,g={"--n-bezier":r,"--n-font-size":p,"--n-padding":a,"--n-border-radius":s,"--n-option-height":m,"--n-option-prefix-width":f,"--n-option-icon-prefix-width":d,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":l,"--n-option-icon-size":h,"--n-divider-color":o,"--n-option-opacity-disabled":c};return t?(g[`--n-color`]=i.colorInverted,g[`--n-option-color-hover`]=i.optionColorHoverInverted,g[`--n-option-color-active`]=i.optionColorActiveInverted,g[`--n-option-text-color`]=i.optionTextColorInverted,g[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,g[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,g[`--n-prefix-color`]=i.prefixColorInverted,g[`--n-suffix-color`]=i.suffixColorInverted,g[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(g[`--n-color`]=i.color,g[`--n-option-color-hover`]=i.optionColorHover,g[`--n-option-color-active`]=i.optionColorActive,g[`--n-option-text-color`]=i.optionTextColor,g[`--n-option-text-color-hover`]=i.optionTextColorHover,g[`--n-option-text-color-active`]=i.optionTextColorActive,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,g[`--n-prefix-color`]=i.prefixColor,g[`--n-suffix-color`]=i.suffixColor,g[`--n-group-header-text-color`]=i.groupHeaderTextColor),g}),P=g?I(`dropdown`,x(()=>`${v.value[0]}${e.inverted?`i`:``}`),N,e):void 0;return{mergedClsPrefix:h,mergedTheme:y,mergedSize:v,tmNodes:a,mergedShow:r,handleAfterLeave:()=>{e.animated&&C()},doUpdateShow:S,cssVars:g?void 0:N,themeClass:P?.themeClass,onRender:P?.onRender}},render(){let e=(e,t,n,r,i)=>{var a;let{mergedClsPrefix:o,menuProps:s}=this;(a=this.onRender)==null||a.call(this);let c=s?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},l={ref:ie(t),class:[e,`${o}-dropdown`,`${o}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:o,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:i};return d(me,D(this.$attrs,l,c))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(C,Object.assign({},S(this.$props,_e),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{se as n,ve as t};