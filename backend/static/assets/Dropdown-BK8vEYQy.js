import{t as e}from"./ChevronRight-CuM1Kad7.js";import{An as t,Bn as n,Cn as r,Dn as i,Dr as a,E as o,En as s,G as c,Gn as l,Gr as u,H as d,Hn as f,In as p,Jn as m,Jr as h,Ln as g,Lr as _,Pr as v,Qr as y,U as b,Vn as x,W as S,X as C,Xn as w,Yr as T,Zn as E,Zr as D,di as O,dn as k,dr as A,fi as j,fn as M,fr as N,ft as P,k as ee,lr as F,mr as I,ni as L,oi as R,pi as z,pr as B,q as te,qn as V,qr as H,sr as U,ui as ne,ur as W,vn as G,xn as re,zn as K}from"./index-NkDzDpQ9.js";function ie(e={},t){let n=ne({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:i}=e,a=e=>{switch(e.key){case`Control`:n.ctrl=!0;break;case`Meta`:n.command=!0,n.win=!0;break;case`Shift`:n.shift=!0;break;case`Tab`:n.tab=!0;break}r!==void 0&&Object.keys(r).forEach(t=>{if(t!==e.key)return;let n=r[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},o=e=>{switch(e.key){case`Control`:n.ctrl=!1;break;case`Meta`:n.command=!1,n.win=!1;break;case`Shift`:n.shift=!1;break;case`Tab`:n.tab=!1;break}i!==void 0&&Object.keys(i).forEach(t=>{if(t!==e.key)return;let n=i[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},s=()=>{(t===void 0||t.value)&&(E(`keydown`,document,a),E(`keyup`,document,o)),t!==void 0&&R(t,e=>{e?(E(`keydown`,document,a),E(`keyup`,document,o)):(w(`keydown`,document,a),w(`keyup`,document,o))})};return V()?(D(s),y(()=>{(t===void 0||t.value)&&(w(`keydown`,document,a),w(`keyup`,document,o))})):s(),O(n)}function ae(e,t,n){if(!t)return e;let r=j(e.value),i=null;return R(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function oe(e){return t=>{t?e.value=t.$el:e.value=null}}var q=f(`n-dropdown-menu`),J=f(`n-dropdown`),Y=f(`n-dropdown-option`),X=u({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return H(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),se=u({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=h(q),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=h(J);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:o}=this.tmNode,s=H(`div`,Object.assign({class:`${e}-dropdown-option`},r?.(o)),H(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},H(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},G(o.icon)),H(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(o):G(o.title??o[this.labelField])),H(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:o}):s}}),ce=W(`icon`,`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[N(`color-transition`,{transition:`color .3s var(--n-bezier)`}),N(`depth`,{color:`var(--n-color)`},[F(`svg`,{opacity:`var(--n-opacity)`,transition:`opacity .3s var(--n-bezier)`})]),F(`svg`,{height:`1em`,width:`1em`})]),Z=u({_n_icon__:!0,name:`Icon`,inheritAttrs:!1,props:Object.assign(Object.assign({},P.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=M(e),r=P(`Icon`,`-icon`,ce,o,e,t),a=_(()=>{let{depth:t}=e,{common:{cubicBezierEaseInOut:n},self:i}=r.value;if(t!==void 0){let{color:e,[`opacity${t}Depth`]:r}=i;return{"--n-bezier":n,"--n-color":e,"--n-opacity":r}}return{"--n-bezier":n,"--n-color":``,"--n-opacity":``}}),s=n?k(`icon`,_(()=>`${e.depth||`d`}`),a,e):void 0;return{mergedClsPrefix:t,mergedStyle:_(()=>{let{size:t,color:n}=e;return{fontSize:i(t),color:n}}),cssVars:n?void 0:a,themeClass:s?.themeClass,onRender:s?.onRender}},render(){let{$parent:e,depth:t,mergedClsPrefix:n,component:r,onRender:i,themeClass:a}=this;return e?.$options?._n_icon__&&s(`icon`,"don't wrap `n-icon` inside `n-icon`"),i?.(),H(`i`,T(this.$attrs,{role:`img`,class:[`${n}-icon`,a,{[`${n}-icon--depth`]:t,[`${n}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?H(r):this.$slots)}});function Q(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function le(e){return e.type===`group`}function $(e){return e.type===`divider`}function ue(e){return e.type===`render`}var de=u({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=h(J),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:a,activeKeyPathRef:o,animatedRef:s,mergedShowRef:c,renderLabelRef:l,renderIconRef:u,labelFieldRef:d,childrenFieldRef:f,renderOptionRef:p,nodePropsRef:g,menuPropsRef:v}=t,y=h(Y,null),b=h(q),x=h(K),S=_(()=>e.tmNode.rawNode),C=_(()=>{let{value:t}=f;return Q(e.tmNode.rawNode,t)}),w=_(()=>{let{disabled:t}=e.tmNode;return t}),T=ae(_(()=>{if(!C.value)return!1;let{key:t,disabled:o}=e.tmNode;if(o)return!1;let{value:s}=n,{value:c}=r,{value:l}=i,{value:u}=a;return s===null?c===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,_(()=>r.value===null&&!s.value)),E=_(()=>!!y?.enteringSubmenuRef.value),D=j(!1);L(Y,{enteringSubmenuRef:D});function O(){D.value=!0}function k(){D.value=!1}function A(){let{parentKey:t,tmNode:a}=e;a.disabled||c.value&&(i.value=t,r.value=null,n.value=a.key)}function M(){let{tmNode:t}=e;t.disabled||c.value&&n.value!==t.key&&A()}function N(t){if(e.tmNode.disabled||!c.value)return;let{relatedTarget:r}=t;r&&!U({target:r},`dropdownOption`)&&!U({target:r},`scrollbarRail`)&&(n.value=null)}function P(){let{value:n}=C,{tmNode:r}=e;c.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:d,renderLabel:l,renderIcon:u,siblingHasIcon:b.showIconRef,siblingHasSubmenu:b.hasSubmenuRef,menuProps:v,popoverBody:x,animated:s,mergedShowSubmenu:_(()=>T.value&&!E.value),rawNode:S,hasSubmenu:C,pending:m(()=>{let{value:t}=a,{key:n}=e.tmNode;return t.includes(n)}),childActive:m(()=>{let{value:t}=o,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:m(()=>{let{value:t}=o,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:w,renderOption:p,nodeProps:g,handleClick:P,handleMouseMove:M,handleMouseEnter:A,handleMouseLeave:N,handleSubmenuBeforeEnter:O,handleSubmenuAfterEnter:k}},render(){let{animated:n,rawNode:r,mergedShowSubmenu:i,clsPrefix:o,siblingHasIcon:s,siblingHasSubmenu:c,renderLabel:l,renderIcon:u,renderOption:d,nodeProps:f,props:m,scrollable:h}=this,_=null;if(i){let e=this.menuProps?.call(this,r,r.children);_=H(me,Object.assign({},e,{clsPrefix:o,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let v={class:[`${o}-dropdown-option-body`,this.pending&&`${o}-dropdown-option-body--pending`,this.active&&`${o}-dropdown-option-body--active`,this.childActive&&`${o}-dropdown-option-body--child-active`,this.mergedDisabled&&`${o}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},y=f?.(r),b=H(`div`,Object.assign({class:[`${o}-dropdown-option`,y?.class],"data-dropdown-option":!0},y),H(`div`,T(v,m),[H(`div`,{class:[`${o}-dropdown-option-body__prefix`,s&&`${o}-dropdown-option-body__prefix--show-icon`]},[u?u(r):G(r.icon)]),H(`div`,{"data-dropdown-option":!0,class:`${o}-dropdown-option-body__label`},l?l(r):G(r[this.labelField]??r.title)),H(`div`,{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__suffix`,c&&`${o}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?H(Z,null,{default:()=>H(e,null)}):null)]),this.hasSubmenu?H(g,null,{default:()=>[H(p,null,{default:()=>H(`div`,{class:`${o}-dropdown-offset-container`},H(t,{show:this.mergedShowSubmenu,placement:this.placement,to:h&&this.popoverBody||void 0,teleportDisabled:!h},{default:()=>H(`div`,{class:`${o}-dropdown-menu-wrapper`},n?H(a,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>_}):_)}))})]}):null);return d?d({node:b,option:r}):b}}),fe=u({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:r}=e;return H(v,null,H(se,{clsPrefix:n,tmNode:e,key:e.key}),r?.map(e=>{let{rawNode:r}=e;return r.show===!1?null:$(r)?H(X,{clsPrefix:n,key:e.key}):e.isGroup?(s(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):H(de,{clsPrefix:n,tmNode:e,parentKey:t,key:e.key})}))}}),pe=u({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return H(`div`,t,[e?.()])}}),me=u({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:t,childrenFieldRef:r}=h(J);L(q,{showIconRef:_(()=>{let n=t.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>n?n(e):e.icon);let{rawNode:t}=e;return n?n(t):t.icon})}),hasSubmenuRef:_(()=>{let{value:t}=r;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>Q(e,t));let{rawNode:n}=e;return Q(n,t)})})});let i=j(null);return L(n,null),L(x,null),L(K,i),{bodyRef:i}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:ue(i)?H(pe,{tmNode:r,key:r.key}):$(i)?H(X,{clsPrefix:t,key:r.key}):le(i)?H(fe,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):H(de,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return H(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?H(C,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?S({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),he=W(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[c(),W(`dropdown-option`,`
 position: relative;
 `,[F(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[F(`&::before`,`
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
 `,[F(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),B(`disabled`,[N(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[A(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),F(`&::before`,`background-color: var(--n-option-color-hover);`)]),N(`active`,`
 color: var(--n-option-text-color-active);
 `,[A(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),F(`&::before`,`background-color: var(--n-option-color-active);`)]),N(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[A(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),N(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),N(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[A(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[N(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),A(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[N(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),W(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),A(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),A(`suffix`,`
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
 `,[N(`has-submenu`,`
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
 `),F(`>`,[W(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),B(`scrollable`,`
 padding: var(--n-padding);
 `),N(`scrollable`,[A(`content`,`
 padding: var(--n-padding);
 `)])]),ge={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},_e=Object.keys(b),ve=u({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},b),ge),P.props),setup(e){let t=j(!1),n=l(z(e,`show`),t),i=_(()=>{let{keyField:t,childrenField:n}=e;return te(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),a=_(()=>i.value.treeNodes),o=j(null),s=j(null),c=j(null),u=_(()=>o.value??s.value??c.value??null),d=_(()=>i.value.getPath(u.value).keyPath),f=_(()=>i.value.getPath(e.value).keyPath),p=m(()=>e.keyboard&&n.value);ie({keydown:{ArrowUp:{prevent:!0,handler:D},ArrowRight:{prevent:!0,handler:E},ArrowDown:{prevent:!0,handler:O},ArrowLeft:{prevent:!0,handler:T},Enter:{prevent:!0,handler:A},Escape:w}},p);let{mergedClsPrefixRef:h,inlineThemeDisabled:g,mergedComponentPropsRef:v}=M(e),y=_(()=>e.size||v?.value?.Dropdown?.size||`medium`),b=P(`Dropdown`,`-dropdown`,he,ee,e,h);L(J,{labelFieldRef:z(e,`labelField`),childrenFieldRef:z(e,`childrenField`),renderLabelRef:z(e,`renderLabel`),renderIconRef:z(e,`renderIcon`),hoverKeyRef:o,keyboardKeyRef:s,lastToggledSubmenuKeyRef:c,pendingKeyPathRef:d,activeKeyPathRef:f,animatedRef:z(e,`animated`),mergedShowRef:n,nodePropsRef:z(e,`nodeProps`),renderOptionRef:z(e,`renderOption`),menuPropsRef:z(e,`menuProps`),doSelect:x,doUpdateShow:S}),R(n,t=>{!e.animated&&!t&&C()});function x(t,n){let{onSelect:i}=e;i&&r(i,t,n)}function S(n){let{"onUpdate:show":i,onUpdateShow:a}=e;i&&r(i,n),a&&r(a,n),t.value=n}function C(){o.value=null,s.value=null,c.value=null}function w(){S(!1)}function T(){F(`left`)}function E(){F(`right`)}function D(){F(`up`)}function O(){F(`down`)}function A(){let e=N();e?.isLeaf&&n.value&&(x(e.key,e.rawNode),S(!1))}function N(){let{value:e}=i,{value:t}=u;return!e||t===null?null:e.getNode(t)??null}function F(e){let{value:t}=u,{value:{getFirstAvailableNode:n}}=i,r=null;if(t===null){let e=n();e!==null&&(r=e.key)}else{let t=N();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(r=n.key)}}r!==null&&(o.value=null,s.value=r)}let B=_(()=>{let{inverted:t}=e,n=y.value,{common:{cubicBezierEaseInOut:r},self:i}=b.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:c,[I(`optionIconSuffixWidth`,n)]:l,[I(`optionSuffixWidth`,n)]:u,[I(`optionIconPrefixWidth`,n)]:d,[I(`optionPrefixWidth`,n)]:f,[I(`fontSize`,n)]:p,[I(`optionHeight`,n)]:m,[I(`optionIconSize`,n)]:h}=i,g={"--n-bezier":r,"--n-font-size":p,"--n-padding":a,"--n-border-radius":s,"--n-option-height":m,"--n-option-prefix-width":f,"--n-option-icon-prefix-width":d,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":l,"--n-option-icon-size":h,"--n-divider-color":o,"--n-option-opacity-disabled":c};return t?(g[`--n-color`]=i.colorInverted,g[`--n-option-color-hover`]=i.optionColorHoverInverted,g[`--n-option-color-active`]=i.optionColorActiveInverted,g[`--n-option-text-color`]=i.optionTextColorInverted,g[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,g[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,g[`--n-prefix-color`]=i.prefixColorInverted,g[`--n-suffix-color`]=i.suffixColorInverted,g[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(g[`--n-color`]=i.color,g[`--n-option-color-hover`]=i.optionColorHover,g[`--n-option-color-active`]=i.optionColorActive,g[`--n-option-text-color`]=i.optionTextColor,g[`--n-option-text-color-hover`]=i.optionTextColorHover,g[`--n-option-text-color-active`]=i.optionTextColorActive,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,g[`--n-prefix-color`]=i.prefixColor,g[`--n-suffix-color`]=i.suffixColor,g[`--n-group-header-text-color`]=i.groupHeaderTextColor),g}),V=g?k(`dropdown`,_(()=>`${y.value[0]}${e.inverted?`i`:``}`),B,e):void 0;return{mergedClsPrefix:h,mergedTheme:b,mergedSize:y,tmNodes:a,mergedShow:n,handleAfterLeave:()=>{e.animated&&C()},doUpdateShow:S,cssVars:g?void 0:B,themeClass:V?.themeClass,onRender:V?.onRender}},render(){let e=(e,t,n,r,i)=>{var a;let{mergedClsPrefix:o,menuProps:s}=this;(a=this.onRender)==null||a.call(this);let c=s?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},l={ref:oe(t),class:[e,`${o}-dropdown`,`${o}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:o,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:i};return H(me,T(this.$attrs,l,c))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return H(d,Object.assign({},re(this.$props,_e),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{Z as n,ve as t};