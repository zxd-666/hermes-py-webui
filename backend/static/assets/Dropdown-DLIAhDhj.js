import{i as e,t}from"./create-EseJ7qR2.js";import{t as n}from"./ChevronRight-DvzBLPzk.js";import{B as r,Bn as i,D as a,Fn as o,G as s,Gn as c,Gr as l,H as u,Hn as d,Hr as f,In as p,Kn as m,Kr as h,Ln as g,Mn as _,Or as v,Pn as y,Sn as b,Tn as x,U as S,Un as C,Ur as w,V as T,Vr as E,Xr as D,ai as O,ar as k,cr as A,ei as j,gn as M,ii as N,ir as P,jn as F,jr as I,oi as L,on as R,or as z,pn as B,rr as V,si as H,sn as U,sr as W,st as G,vn as K,w as ee,xn as te,xr as ne,zr as q}from"./index-Cr8k17hd.js";function re(e={},t){let n=N({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:i}=e,a=e=>{switch(e.key){case`Control`:n.ctrl=!0;break;case`Meta`:n.command=!0,n.win=!0;break;case`Shift`:n.shift=!0;break;case`Tab`:n.tab=!0;break}r!==void 0&&Object.keys(r).forEach(t=>{if(t!==e.key)return;let n=r[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},o=e=>{switch(e.key){case`Control`:n.ctrl=!1;break;case`Meta`:n.command=!1,n.win=!1;break;case`Shift`:n.shift=!1;break;case`Tab`:n.tab=!1;break}i!==void 0&&Object.keys(i).forEach(t=>{if(t!==e.key)return;let n=i[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},s=()=>{(t===void 0||t.value)&&(m(`keydown`,document,a),m(`keyup`,document,o)),t!==void 0&&j(t,e=>{e?(m(`keydown`,document,a),m(`keyup`,document,o)):(c(`keydown`,document,a),c(`keyup`,document,o))})};return d()?(l(s),h(()=>{(t===void 0||t.value)&&(c(`keydown`,document,a),c(`keyup`,document,o))})):s(),O(n)}function ie(e,t,n){if(!t)return e;let r=L(e.value),i=null;return j(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function ae(e){return t=>{t?e.value=t.$el:e.value=null}}var J=g(`n-dropdown-menu`),Y=g(`n-dropdown`),X=g(`n-dropdown-option`),Z=q({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return E(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),oe=q({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=f(J),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=f(Y);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:o}=this.tmNode,s=E(`div`,Object.assign({class:`${e}-dropdown-option`},r?.(o)),E(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},E(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},B(o.icon)),E(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(o):B(o.title??o[this.labelField])),E(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:o}):s}}),se=P(`icon`,`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[z(`color-transition`,{transition:`color .3s var(--n-bezier)`}),z(`depth`,{color:`var(--n-color)`},[V(`svg`,{opacity:`var(--n-opacity)`,transition:`opacity .3s var(--n-bezier)`})]),V(`svg`,{height:`1em`,width:`1em`})]),ce=q({_n_icon__:!0,name:`Icon`,inheritAttrs:!1,props:Object.assign(Object.assign({},G.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=U(e),r=G(`Icon`,`-icon`,se,ee,e,t),i=I(()=>{let{depth:t}=e,{common:{cubicBezierEaseInOut:n},self:i}=r.value;if(t!==void 0){let{color:e,[`opacity${t}Depth`]:r}=i;return{"--n-bezier":n,"--n-color":e,"--n-opacity":r}}return{"--n-bezier":n,"--n-color":``,"--n-opacity":``}}),a=n?R(`icon`,I(()=>`${e.depth||`d`}`),i,e):void 0;return{mergedClsPrefix:t,mergedStyle:I(()=>{let{size:t,color:n}=e;return{fontSize:b(t),color:n}}),cssVars:n?void 0:i,themeClass:a?.themeClass,onRender:a?.onRender}},render(){let{$parent:e,depth:t,mergedClsPrefix:n,component:r,onRender:i,themeClass:a}=this;return e?.$options?._n_icon__&&te(`icon`,"don't wrap `n-icon` inside `n-icon`"),i?.(),E(`i`,w(this.$attrs,{role:`img`,class:[`${n}-icon`,a,{[`${n}-icon--depth`]:t,[`${n}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?E(r):this.$slots)}});function Q(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function le(e){return e.type===`group`}function ue(e){return e.type===`divider`}function de(e){return e.type===`render`}var fe=q({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(t){let n=f(Y),{hoverKeyRef:r,keyboardKeyRef:i,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:o,activeKeyPathRef:s,animatedRef:c,mergedShowRef:l,renderLabelRef:u,renderIconRef:d,labelFieldRef:p,childrenFieldRef:m,renderOptionRef:h,nodePropsRef:g,menuPropsRef:_}=n,v=f(X,null),b=f(J),x=f(y),S=I(()=>t.tmNode.rawNode),w=I(()=>{let{value:e}=m;return Q(t.tmNode.rawNode,e)}),T=I(()=>{let{disabled:e}=t.tmNode;return e}),E=ie(I(()=>{if(!w.value)return!1;let{key:e,disabled:n}=t.tmNode;if(n)return!1;let{value:s}=r,{value:c}=i,{value:l}=a,{value:u}=o;return s===null?c===null?l===null?!1:u.includes(e):u.includes(e)&&u[u.length-1]!==e:u.includes(e)}),300,I(()=>i.value===null&&!c.value)),O=I(()=>!!v?.enteringSubmenuRef.value),k=L(!1);D(X,{enteringSubmenuRef:k});function A(){k.value=!0}function j(){k.value=!1}function M(){let{parentKey:e,tmNode:n}=t;n.disabled||l.value&&(a.value=e,i.value=null,r.value=n.key)}function N(){let{tmNode:e}=t;e.disabled||l.value&&r.value!==e.key&&M()}function P(n){if(t.tmNode.disabled||!l.value)return;let{relatedTarget:i}=n;i&&!e({target:i},`dropdownOption`)&&!e({target:i},`scrollbarRail`)&&(r.value=null)}function F(){let{value:e}=w,{tmNode:r}=t;l.value&&!e&&!r.disabled&&(n.doSelect(r.key,r.rawNode),n.doUpdateShow(!1))}return{labelField:p,renderLabel:u,renderIcon:d,siblingHasIcon:b.showIconRef,siblingHasSubmenu:b.hasSubmenuRef,menuProps:_,popoverBody:x,animated:c,mergedShowSubmenu:I(()=>E.value&&!O.value),rawNode:S,hasSubmenu:w,pending:C(()=>{let{value:e}=o,{key:n}=t.tmNode;return e.includes(n)}),childActive:C(()=>{let{value:e}=s,{key:n}=t.tmNode,r=e.findIndex(e=>n===e);return r===-1?!1:r<e.length-1}),active:C(()=>{let{value:e}=s,{key:n}=t.tmNode,r=e.findIndex(e=>n===e);return r===-1?!1:r===e.length-1}),mergedDisabled:T,renderOption:h,nodeProps:g,handleClick:F,handleMouseMove:N,handleMouseEnter:M,handleMouseLeave:P,handleSubmenuBeforeEnter:A,handleSubmenuAfterEnter:j}},render(){let{animated:e,rawNode:t,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:o,renderLabel:s,renderIcon:c,renderOption:l,nodeProps:u,props:d,scrollable:f}=this,p=null;if(r){let e=this.menuProps?.call(this,t,t.children);p=E($,Object.assign({},e,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let m={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},h=u?.(t),g=E(`div`,Object.assign({class:[`${i}-dropdown-option`,h?.class],"data-dropdown-option":!0},h),E(`div`,w(m,d),[E(`div`,{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[c?c(t):B(t.icon)]),E(`div`,{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},s?s(t):B(t[this.labelField]??t.title)),E(`div`,{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,o&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?E(ce,null,{default:()=>E(n,null)}):null)]),this.hasSubmenu?E(_,null,{default:()=>[E(F,null,{default:()=>E(`div`,{class:`${i}-dropdown-offset-container`},E(x,{show:this.mergedShowSubmenu,placement:this.placement,to:f&&this.popoverBody||void 0,teleportDisabled:!f},{default:()=>E(`div`,{class:`${i}-dropdown-menu-wrapper`},e?E(ne,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>p}):p)}))})]}):null);return l?l({node:g,option:t}):g}}),pe=q({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:r}=e;return E(v,null,E(oe,{clsPrefix:n,tmNode:e,key:e.key}),r?.map(e=>{let{rawNode:r}=e;return r.show===!1?null:ue(r)?E(Z,{clsPrefix:n,key:e.key}):e.isGroup?(te(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):E(fe,{clsPrefix:n,tmNode:e,parentKey:t,key:e.key})}))}}),me=q({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return E(`div`,t,[e?.()])}}),$=q({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:t,childrenFieldRef:n}=f(Y);D(J,{showIconRef:I(()=>{let n=t.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>n?n(e):e.icon);let{rawNode:t}=e;return n?n(t):t.icon})}),hasSubmenuRef:I(()=>{let{value:t}=n;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>Q(e,t));let{rawNode:n}=e;return Q(n,t)})})});let r=L(null);return D(o,null),D(p,null),D(y,r),{bodyRef:r}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:de(i)?E(me,{tmNode:r,key:r.key}):ue(i)?E(Z,{clsPrefix:t,key:r.key}):le(i)?E(pe,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):E(fe,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return E(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?E(s,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?u({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),he=P(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[S(),P(`dropdown-option`,`
 position: relative;
 `,[V(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[V(`&::before`,`
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
 `,[V(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),W(`disabled`,[z(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[k(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),V(`&::before`,`background-color: var(--n-option-color-hover);`)]),z(`active`,`
 color: var(--n-option-text-color-active);
 `,[k(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),V(`&::before`,`background-color: var(--n-option-color-active);`)]),z(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[k(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),z(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),z(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[k(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[z(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),k(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[z(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),P(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),k(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),k(`suffix`,`
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
 `,[z(`has-submenu`,`
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
 `),V(`>`,[P(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),W(`scrollable`,`
 padding: var(--n-padding);
 `),z(`scrollable`,[k(`content`,`
 padding: var(--n-padding);
 `)])]),ge={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},_e=Object.keys(T),ve=q({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},T),ge),G.props),setup(e){let n=L(!1),r=i(H(e,`show`),n),o=I(()=>{let{keyField:n,childrenField:r}=e;return t(e.options,{getKey(e){return e[n]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[r]}})}),s=I(()=>o.value.treeNodes),c=L(null),l=L(null),u=L(null),d=I(()=>c.value??l.value??u.value??null),f=I(()=>o.value.getPath(d.value).keyPath),p=I(()=>o.value.getPath(e.value).keyPath),m=C(()=>e.keyboard&&r.value);re({keydown:{ArrowUp:{prevent:!0,handler:O},ArrowRight:{prevent:!0,handler:E},ArrowDown:{prevent:!0,handler:k},ArrowLeft:{prevent:!0,handler:T},Enter:{prevent:!0,handler:M},Escape:w}},m);let{mergedClsPrefixRef:h,inlineThemeDisabled:g,mergedComponentPropsRef:_}=U(e),v=I(()=>e.size||_?.value?.Dropdown?.size||`medium`),y=G(`Dropdown`,`-dropdown`,he,a,e,h);D(Y,{labelFieldRef:H(e,`labelField`),childrenFieldRef:H(e,`childrenField`),renderLabelRef:H(e,`renderLabel`),renderIconRef:H(e,`renderIcon`),hoverKeyRef:c,keyboardKeyRef:l,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:f,activeKeyPathRef:p,animatedRef:H(e,`animated`),mergedShowRef:r,nodePropsRef:H(e,`nodeProps`),renderOptionRef:H(e,`renderOption`),menuPropsRef:H(e,`menuProps`),doSelect:b,doUpdateShow:x}),j(r,t=>{!e.animated&&!t&&S()});function b(t,n){let{onSelect:r}=e;r&&K(r,t,n)}function x(t){let{"onUpdate:show":r,onUpdateShow:i}=e;r&&K(r,t),i&&K(i,t),n.value=t}function S(){c.value=null,l.value=null,u.value=null}function w(){x(!1)}function T(){P(`left`)}function E(){P(`right`)}function O(){P(`up`)}function k(){P(`down`)}function M(){let e=N();e?.isLeaf&&r.value&&(b(e.key,e.rawNode),x(!1))}function N(){let{value:e}=o,{value:t}=d;return!e||t===null?null:e.getNode(t)??null}function P(e){let{value:t}=d,{value:{getFirstAvailableNode:n}}=o,r=null;if(t===null){let e=n();e!==null&&(r=e.key)}else{let t=N();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(r=n.key)}}r!==null&&(c.value=null,l.value=r)}let F=I(()=>{let{inverted:t}=e,n=v.value,{common:{cubicBezierEaseInOut:r},self:i}=y.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:c,[A(`optionIconSuffixWidth`,n)]:l,[A(`optionSuffixWidth`,n)]:u,[A(`optionIconPrefixWidth`,n)]:d,[A(`optionPrefixWidth`,n)]:f,[A(`fontSize`,n)]:p,[A(`optionHeight`,n)]:m,[A(`optionIconSize`,n)]:h}=i,g={"--n-bezier":r,"--n-font-size":p,"--n-padding":a,"--n-border-radius":s,"--n-option-height":m,"--n-option-prefix-width":f,"--n-option-icon-prefix-width":d,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":l,"--n-option-icon-size":h,"--n-divider-color":o,"--n-option-opacity-disabled":c};return t?(g[`--n-color`]=i.colorInverted,g[`--n-option-color-hover`]=i.optionColorHoverInverted,g[`--n-option-color-active`]=i.optionColorActiveInverted,g[`--n-option-text-color`]=i.optionTextColorInverted,g[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,g[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,g[`--n-prefix-color`]=i.prefixColorInverted,g[`--n-suffix-color`]=i.suffixColorInverted,g[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(g[`--n-color`]=i.color,g[`--n-option-color-hover`]=i.optionColorHover,g[`--n-option-color-active`]=i.optionColorActive,g[`--n-option-text-color`]=i.optionTextColor,g[`--n-option-text-color-hover`]=i.optionTextColorHover,g[`--n-option-text-color-active`]=i.optionTextColorActive,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,g[`--n-prefix-color`]=i.prefixColor,g[`--n-suffix-color`]=i.suffixColor,g[`--n-group-header-text-color`]=i.groupHeaderTextColor),g}),z=g?R(`dropdown`,I(()=>`${v.value[0]}${e.inverted?`i`:``}`),F,e):void 0;return{mergedClsPrefix:h,mergedTheme:y,mergedSize:v,tmNodes:s,mergedShow:r,handleAfterLeave:()=>{e.animated&&S()},doUpdateShow:x,cssVars:g?void 0:F,themeClass:z?.themeClass,onRender:z?.onRender}},render(){let e=(e,t,n,r,i)=>{var a;let{mergedClsPrefix:o,menuProps:s}=this;(a=this.onRender)==null||a.call(this);let c=s?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},l={ref:ae(t),class:[e,`${o}-dropdown`,`${o}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:o,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:i};return E($,w(this.$attrs,l,c))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return E(r,Object.assign({},M(this.$props,_e),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{ce as n,ve as t};