import{$n as e,An as t,Br as n,Ci as r,Cr as i,Dr as a,Ei as o,Er as s,Fn as c,J as l,Kn as u,Nn as d,On as f,P as p,Q as m,Qn as h,Sr as g,Ti as _,Tn as v,Tr as y,X as b,Xr as x,Y as S,Zn as C,br as w,ci as T,di as E,hi as D,ii as O,ir as k,j as A,lr as j,nt as M,oi as N,or as P,q as F,qn as I,qr as L,si as R,sr as z,tr as B,ui as ee,ur as V,vn as H,vt as U,wi as te,wr as W,yi as G,yn as K,zn as ne}from"./index-BdpgKMaM.js";function re(e={},t){let n=r({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:i,keyup:a}=e,o=e=>{switch(e.key){case`Control`:n.ctrl=!0;break;case`Meta`:n.command=!0,n.win=!0;break;case`Shift`:n.shift=!0;break;case`Tab`:n.tab=!0;break}i!==void 0&&Object.keys(i).forEach(t=>{if(t!==e.key)return;let n=i[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},s=e=>{switch(e.key){case`Control`:n.ctrl=!1;break;case`Meta`:n.command=!1,n.win=!1;break;case`Shift`:n.shift=!1;break;case`Tab`:n.tab=!1;break}a!==void 0&&Object.keys(a).forEach(t=>{if(t!==e.key)return;let n=a[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},c=()=>{(t===void 0||t.value)&&(V(`keydown`,document,o),V(`keyup`,document,s)),t!==void 0&&G(t,e=>{e?(V(`keydown`,document,o),V(`keyup`,document,s)):(j(`keydown`,document,o),j(`keyup`,document,s))})};return P()?(ee(c),E(()=>{(t===void 0||t.value)&&(j(`keydown`,document,o),j(`keyup`,document,s))})):c(),te(n)}function ie(e,t,n){if(!t)return e;let r=_(e.value),i=null;return G(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function ae(e){return t=>{t?e.value=t.$el:e.value=null}}var q=O({name:`ChevronRight`,render(){return N(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},N(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`}))}}),J=B(`n-dropdown-menu`),Y=B(`n-dropdown`),X=B(`n-dropdown-option`),Z=O({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return N(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),oe=O({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=R(J),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=R(Y);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:o}=this.tmNode,s=N(`div`,Object.assign({class:`${e}-dropdown-option`},r?.(o)),N(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},N(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},v(o.icon)),N(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(o):v(o.title??o[this.labelField])),N(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:o}):s}}),se=i(`icon`,`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[y(`color-transition`,{transition:`color .3s var(--n-bezier)`}),y(`depth`,{color:`var(--n-color)`},[g(`svg`,{opacity:`var(--n-opacity)`,transition:`opacity .3s var(--n-bezier)`})]),g(`svg`,{height:`1em`,width:`1em`})]),Q=O({_n_icon__:!0,name:`Icon`,inheritAttrs:!1,props:Object.assign(Object.assign({},U.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=K(e),r=U(`Icon`,`-icon`,se,A,e,t),i=x(()=>{let{depth:t}=e,{common:{cubicBezierEaseInOut:n},self:i}=r.value;if(t!==void 0){let{color:e,[`opacity${t}Depth`]:r}=i;return{"--n-bezier":n,"--n-color":e,"--n-opacity":r}}return{"--n-bezier":n,"--n-color":``,"--n-opacity":``}}),a=n?H(`icon`,x(()=>`${e.depth||`d`}`),i,e):void 0;return{mergedClsPrefix:t,mergedStyle:x(()=>{let{size:t,color:n}=e;return{fontSize:c(t),color:n}}),cssVars:n?void 0:i,themeClass:a?.themeClass,onRender:a?.onRender}},render(){let{$parent:e,depth:t,mergedClsPrefix:n,component:r,onRender:i,themeClass:a}=this;return e?.$options?._n_icon__&&d(`icon`,"don't wrap `n-icon` inside `n-icon`"),i?.(),N(`i`,T(this.$attrs,{role:`img`,class:[`${n}-icon`,a,{[`${n}-icon--depth`]:t,[`${n}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?N(r):this.$slots)}});function $(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function ce(e){return e.type===`group`}function le(e){return e.type===`divider`}function ue(e){return e.type===`render`}var de=O({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=R(Y),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:a,activeKeyPathRef:o,animatedRef:s,mergedShowRef:c,renderLabelRef:l,renderIconRef:u,labelFieldRef:d,childrenFieldRef:f,renderOptionRef:p,nodePropsRef:m,menuPropsRef:h}=t,g=R(X,null),v=R(J),y=R(C),b=x(()=>e.tmNode.rawNode),S=x(()=>{let{value:t}=f;return $(e.tmNode.rawNode,t)}),T=x(()=>{let{disabled:t}=e.tmNode;return t}),E=ie(x(()=>{if(!S.value)return!1;let{key:t,disabled:o}=e.tmNode;if(o)return!1;let{value:s}=n,{value:c}=r,{value:l}=i,{value:u}=a;return s===null?c===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,x(()=>r.value===null&&!s.value)),O=x(()=>!!g?.enteringSubmenuRef.value),k=_(!1);D(X,{enteringSubmenuRef:k});function A(){k.value=!0}function j(){k.value=!1}function M(){let{parentKey:t,tmNode:a}=e;a.disabled||c.value&&(i.value=t,r.value=null,n.value=a.key)}function N(){let{tmNode:t}=e;t.disabled||c.value&&n.value!==t.key&&M()}function P(t){if(e.tmNode.disabled||!c.value)return;let{relatedTarget:r}=t;r&&!w({target:r},`dropdownOption`)&&!w({target:r},`scrollbarRail`)&&(n.value=null)}function F(){let{value:n}=S,{tmNode:r}=e;c.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:d,renderLabel:l,renderIcon:u,siblingHasIcon:v.showIconRef,siblingHasSubmenu:v.hasSubmenuRef,menuProps:h,popoverBody:y,animated:s,mergedShowSubmenu:x(()=>E.value&&!O.value),rawNode:b,hasSubmenu:S,pending:z(()=>{let{value:t}=a,{key:n}=e.tmNode;return t.includes(n)}),childActive:z(()=>{let{value:t}=o,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:z(()=>{let{value:t}=o,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:T,renderOption:p,nodeProps:m,handleClick:F,handleMouseMove:N,handleMouseEnter:M,handleMouseLeave:P,handleSubmenuBeforeEnter:A,handleSubmenuAfterEnter:j}},render(){let{animated:e,rawNode:t,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:o,renderLabel:s,renderIcon:c,renderOption:l,nodeProps:d,props:f,scrollable:p}=this,m=null;if(r){let e=this.menuProps?.call(this,t,t.children);m=N(me,Object.assign({},e,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let h={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},g=d?.(t),_=N(`div`,Object.assign({class:[`${i}-dropdown-option`,g?.class],"data-dropdown-option":!0},g),N(`div`,T(h,f),[N(`div`,{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[c?c(t):v(t.icon)]),N(`div`,{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},s?s(t):v(t[this.labelField]??t.title)),N(`div`,{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,o&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?N(Q,null,{default:()=>N(q,null)}):null)]),this.hasSubmenu?N(I,null,{default:()=>[N(u,null,{default:()=>N(`div`,{class:`${i}-dropdown-offset-container`},N(ne,{show:this.mergedShowSubmenu,placement:this.placement,to:p&&this.popoverBody||void 0,teleportDisabled:!p},{default:()=>N(`div`,{class:`${i}-dropdown-menu-wrapper`},e?N(n,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>m}):m)}))})]}):null);return l?l({node:_,option:t}):_}}),fe=O({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:r}=e;return N(L,null,N(oe,{clsPrefix:n,tmNode:e,key:e.key}),r?.map(e=>{let{rawNode:r}=e;return r.show===!1?null:le(r)?N(Z,{clsPrefix:n,key:e.key}):e.isGroup?(d(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):N(de,{clsPrefix:n,tmNode:e,parentKey:t,key:e.key})}))}}),pe=O({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return N(`div`,t,[e?.()])}}),me=O({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(t){let{renderIconRef:n,childrenFieldRef:r}=R(Y);D(J,{showIconRef:x(()=>{let e=n.value;return t.tmNodes.some(t=>{if(t.isGroup)return t.children?.some(({rawNode:t})=>e?e(t):t.icon);let{rawNode:n}=t;return e?e(n):n.icon})}),hasSubmenuRef:x(()=>{let{value:e}=r;return t.tmNodes.some(t=>{if(t.isGroup)return t.children?.some(({rawNode:t})=>$(t,e));let{rawNode:n}=t;return $(n,e)})})});let i=_(null);return D(h,null),D(e,null),D(C,i),{bodyRef:i}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:ue(i)?N(pe,{tmNode:r,key:r.key}):le(i)?N(Z,{clsPrefix:t,key:r.key}):ce(i)?N(fe,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):N(de,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return N(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?N(M,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?S({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),he=i(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[b(),i(`dropdown-option`,`
 position: relative;
 `,[g(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[g(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),i(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[g(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),s(`disabled`,[y(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[W(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),g(`&::before`,`background-color: var(--n-option-color-hover);`)]),y(`active`,`
 color: var(--n-option-text-color-active);
 `,[W(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),g(`&::before`,`background-color: var(--n-option-color-active);`)]),y(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[W(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),y(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),y(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[W(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[y(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),W(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[y(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),i(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),W(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),W(`suffix`,`
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
 `,[y(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),i(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),i(`dropdown-menu`,`pointer-events: all;`)]),i(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),i(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),i(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),g(`>`,[i(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),s(`scrollable`,`
 padding: var(--n-padding);
 `),y(`scrollable`,[W(`content`,`
 padding: var(--n-padding);
 `)])]),ge={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},_e=Object.keys(l),ve=O({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},l),ge),U.props),setup(e){let n=_(!1),r=k(o(e,`show`),n),i=x(()=>{let{keyField:t,childrenField:n}=e;return m(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),s=x(()=>i.value.treeNodes),c=_(null),l=_(null),u=_(null),d=x(()=>c.value??l.value??u.value??null),f=x(()=>i.value.getPath(d.value).keyPath),h=x(()=>i.value.getPath(e.value).keyPath),g=z(()=>e.keyboard&&r.value);re({keydown:{ArrowUp:{prevent:!0,handler:M},ArrowRight:{prevent:!0,handler:j},ArrowDown:{prevent:!0,handler:N},ArrowLeft:{prevent:!0,handler:A},Enter:{prevent:!0,handler:P},Escape:O}},g);let{mergedClsPrefixRef:v,inlineThemeDisabled:y,mergedComponentPropsRef:b}=K(e),S=x(()=>e.size||b?.value?.Dropdown?.size||`medium`),C=U(`Dropdown`,`-dropdown`,he,p,e,v);D(Y,{labelFieldRef:o(e,`labelField`),childrenFieldRef:o(e,`childrenField`),renderLabelRef:o(e,`renderLabel`),renderIconRef:o(e,`renderIcon`),hoverKeyRef:c,keyboardKeyRef:l,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:f,activeKeyPathRef:h,animatedRef:o(e,`animated`),mergedShowRef:r,nodePropsRef:o(e,`nodeProps`),renderOptionRef:o(e,`renderOption`),menuPropsRef:o(e,`menuProps`),doSelect:w,doUpdateShow:T}),G(r,t=>{!e.animated&&!t&&E()});function w(n,r){let{onSelect:i}=e;i&&t(i,n,r)}function T(r){let{"onUpdate:show":i,onUpdateShow:a}=e;i&&t(i,r),a&&t(a,r),n.value=r}function E(){c.value=null,l.value=null,u.value=null}function O(){T(!1)}function A(){I(`left`)}function j(){I(`right`)}function M(){I(`up`)}function N(){I(`down`)}function P(){let e=F();e?.isLeaf&&r.value&&(w(e.key,e.rawNode),T(!1))}function F(){let{value:e}=i,{value:t}=d;return!e||t===null?null:e.getNode(t)??null}function I(e){let{value:t}=d,{value:{getFirstAvailableNode:n}}=i,r=null;if(t===null){let e=n();e!==null&&(r=e.key)}else{let t=F();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(r=n.key)}}r!==null&&(c.value=null,l.value=r)}let L=x(()=>{let{inverted:t}=e,n=S.value,{common:{cubicBezierEaseInOut:r},self:i}=C.value,{padding:o,dividerColor:s,borderRadius:c,optionOpacityDisabled:l,[a(`optionIconSuffixWidth`,n)]:u,[a(`optionSuffixWidth`,n)]:d,[a(`optionIconPrefixWidth`,n)]:f,[a(`optionPrefixWidth`,n)]:p,[a(`fontSize`,n)]:m,[a(`optionHeight`,n)]:h,[a(`optionIconSize`,n)]:g}=i,_={"--n-bezier":r,"--n-font-size":m,"--n-padding":o,"--n-border-radius":c,"--n-option-height":h,"--n-option-prefix-width":p,"--n-option-icon-prefix-width":f,"--n-option-suffix-width":d,"--n-option-icon-suffix-width":u,"--n-option-icon-size":g,"--n-divider-color":s,"--n-option-opacity-disabled":l};return t?(_[`--n-color`]=i.colorInverted,_[`--n-option-color-hover`]=i.optionColorHoverInverted,_[`--n-option-color-active`]=i.optionColorActiveInverted,_[`--n-option-text-color`]=i.optionTextColorInverted,_[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,_[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,_[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,_[`--n-prefix-color`]=i.prefixColorInverted,_[`--n-suffix-color`]=i.suffixColorInverted,_[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(_[`--n-color`]=i.color,_[`--n-option-color-hover`]=i.optionColorHover,_[`--n-option-color-active`]=i.optionColorActive,_[`--n-option-text-color`]=i.optionTextColor,_[`--n-option-text-color-hover`]=i.optionTextColorHover,_[`--n-option-text-color-active`]=i.optionTextColorActive,_[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,_[`--n-prefix-color`]=i.prefixColor,_[`--n-suffix-color`]=i.suffixColor,_[`--n-group-header-text-color`]=i.groupHeaderTextColor),_}),R=y?H(`dropdown`,x(()=>`${S.value[0]}${e.inverted?`i`:``}`),L,e):void 0;return{mergedClsPrefix:v,mergedTheme:C,mergedSize:S,tmNodes:s,mergedShow:r,handleAfterLeave:()=>{e.animated&&E()},doUpdateShow:T,cssVars:y?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let e=(e,t,n,r,i)=>{var a;let{mergedClsPrefix:o,menuProps:s}=this;(a=this.onRender)==null||a.call(this);let c=s?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},l={ref:ae(t),class:[e,`${o}-dropdown`,`${o}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:o,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:i};return N(me,T(this.$attrs,l,c))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return N(F,Object.assign({},f(this.$props,_e),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{Q as n,q as r,ve as t};