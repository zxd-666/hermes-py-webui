import{$n as e,An as t,Cr as n,Di as r,Dr as i,Ei as a,Er as o,Fn as s,J as c,Jr as l,Kn as u,Nn as d,On as f,P as p,Q as m,Qn as h,Sr as g,Ti as _,Tn as v,Tr as y,Vr as b,X as x,Y as S,Zn as C,Zr as w,ai as T,bi as E,br as D,ci as O,di as k,fi as A,gi as j,ir as M,j as N,li as P,lr as F,nt as I,or as L,q as R,qn as z,si as B,sr as V,tr as H,ur as U,vn as W,vt as G,wi as ee,wr as K,yn as q,zn as te}from"./index-BE3n8Noj.js";function ne(e={},t){let n=ee({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:i}=e,a=e=>{switch(e.key){case`Control`:n.ctrl=!0;break;case`Meta`:n.command=!0,n.win=!0;break;case`Shift`:n.shift=!0;break;case`Tab`:n.tab=!0;break}r!==void 0&&Object.keys(r).forEach(t=>{if(t!==e.key)return;let n=r[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},o=e=>{switch(e.key){case`Control`:n.ctrl=!1;break;case`Meta`:n.command=!1,n.win=!1;break;case`Shift`:n.shift=!1;break;case`Tab`:n.tab=!1;break}i!==void 0&&Object.keys(i).forEach(t=>{if(t!==e.key)return;let n=i[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},s=()=>{(t===void 0||t.value)&&(U(`keydown`,document,a),U(`keyup`,document,o)),t!==void 0&&E(t,e=>{e?(U(`keydown`,document,a),U(`keyup`,document,o)):(F(`keydown`,document,a),F(`keyup`,document,o))})};return L()?(k(s),A(()=>{(t===void 0||t.value)&&(F(`keydown`,document,a),F(`keyup`,document,o))})):s(),_(n)}function re(e,t,n){if(!t)return e;let r=a(e.value),i=null;return E(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function ie(e){return t=>{t?e.value=t.$el:e.value=null}}var J=T({name:`ChevronRight`,render(){return B(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},B(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`}))}}),Y=H(`n-dropdown-menu`),X=H(`n-dropdown`),Z=H(`n-dropdown-option`),Q=T({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return B(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),ae=T({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=O(Y),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=O(X);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:o}=this.tmNode,s=B(`div`,Object.assign({class:`${e}-dropdown-option`},r?.(o)),B(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},B(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},v(o.icon)),B(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(o):v(o.title??o[this.labelField])),B(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:o}):s}}),oe=n(`icon`,`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[y(`color-transition`,{transition:`color .3s var(--n-bezier)`}),y(`depth`,{color:`var(--n-color)`},[g(`svg`,{opacity:`var(--n-opacity)`,transition:`opacity .3s var(--n-bezier)`})]),g(`svg`,{height:`1em`,width:`1em`})]),se=T({_n_icon__:!0,name:`Icon`,inheritAttrs:!1,props:Object.assign(Object.assign({},G.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=q(e),r=G(`Icon`,`-icon`,oe,N,e,t),i=w(()=>{let{depth:t}=e,{common:{cubicBezierEaseInOut:n},self:i}=r.value;if(t!==void 0){let{color:e,[`opacity${t}Depth`]:r}=i;return{"--n-bezier":n,"--n-color":e,"--n-opacity":r}}return{"--n-bezier":n,"--n-color":``,"--n-opacity":``}}),a=n?W(`icon`,w(()=>`${e.depth||`d`}`),i,e):void 0;return{mergedClsPrefix:t,mergedStyle:w(()=>{let{size:t,color:n}=e;return{fontSize:s(t),color:n}}),cssVars:n?void 0:i,themeClass:a?.themeClass,onRender:a?.onRender}},render(){let{$parent:e,depth:t,mergedClsPrefix:n,component:r,onRender:i,themeClass:a}=this;return e?.$options?._n_icon__&&d(`icon`,"don't wrap `n-icon` inside `n-icon`"),i?.(),B(`i`,P(this.$attrs,{role:`img`,class:[`${n}-icon`,a,{[`${n}-icon--depth`]:t,[`${n}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?B(r):this.$slots)}});function $(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function ce(e){return e.type===`group`}function le(e){return e.type===`divider`}function ue(e){return e.type===`render`}var de=T({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=O(X),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:o,activeKeyPathRef:s,animatedRef:c,mergedShowRef:l,renderLabelRef:u,renderIconRef:d,labelFieldRef:f,childrenFieldRef:p,renderOptionRef:m,nodePropsRef:h,menuPropsRef:g}=t,_=O(Z,null),v=O(Y),y=O(C),b=w(()=>e.tmNode.rawNode),x=w(()=>{let{value:t}=p;return $(e.tmNode.rawNode,t)}),S=w(()=>{let{disabled:t}=e.tmNode;return t}),T=re(w(()=>{if(!x.value)return!1;let{key:t,disabled:a}=e.tmNode;if(a)return!1;let{value:s}=n,{value:c}=r,{value:l}=i,{value:u}=o;return s===null?c===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,w(()=>r.value===null&&!c.value)),E=w(()=>!!_?.enteringSubmenuRef.value),k=a(!1);j(Z,{enteringSubmenuRef:k});function A(){k.value=!0}function M(){k.value=!1}function N(){let{parentKey:t,tmNode:a}=e;a.disabled||l.value&&(i.value=t,r.value=null,n.value=a.key)}function P(){let{tmNode:t}=e;t.disabled||l.value&&n.value!==t.key&&N()}function F(t){if(e.tmNode.disabled||!l.value)return;let{relatedTarget:r}=t;r&&!D({target:r},`dropdownOption`)&&!D({target:r},`scrollbarRail`)&&(n.value=null)}function I(){let{value:n}=x,{tmNode:r}=e;l.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:f,renderLabel:u,renderIcon:d,siblingHasIcon:v.showIconRef,siblingHasSubmenu:v.hasSubmenuRef,menuProps:g,popoverBody:y,animated:c,mergedShowSubmenu:w(()=>T.value&&!E.value),rawNode:b,hasSubmenu:x,pending:V(()=>{let{value:t}=o,{key:n}=e.tmNode;return t.includes(n)}),childActive:V(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:V(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:S,renderOption:m,nodeProps:h,handleClick:I,handleMouseMove:P,handleMouseEnter:N,handleMouseLeave:F,handleSubmenuBeforeEnter:A,handleSubmenuAfterEnter:M}},render(){let{animated:e,rawNode:t,mergedShowSubmenu:n,clsPrefix:r,siblingHasIcon:i,siblingHasSubmenu:a,renderLabel:o,renderIcon:s,renderOption:c,nodeProps:l,props:d,scrollable:f}=this,p=null;if(n){let e=this.menuProps?.call(this,t,t.children);p=B(me,Object.assign({},e,{clsPrefix:r,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let m={class:[`${r}-dropdown-option-body`,this.pending&&`${r}-dropdown-option-body--pending`,this.active&&`${r}-dropdown-option-body--active`,this.childActive&&`${r}-dropdown-option-body--child-active`,this.mergedDisabled&&`${r}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},h=l?.(t),g=B(`div`,Object.assign({class:[`${r}-dropdown-option`,h?.class],"data-dropdown-option":!0},h),B(`div`,P(m,d),[B(`div`,{class:[`${r}-dropdown-option-body__prefix`,i&&`${r}-dropdown-option-body__prefix--show-icon`]},[s?s(t):v(t.icon)]),B(`div`,{"data-dropdown-option":!0,class:`${r}-dropdown-option-body__label`},o?o(t):v(t[this.labelField]??t.title)),B(`div`,{"data-dropdown-option":!0,class:[`${r}-dropdown-option-body__suffix`,a&&`${r}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?B(se,null,{default:()=>B(J,null)}):null)]),this.hasSubmenu?B(z,null,{default:()=>[B(u,null,{default:()=>B(`div`,{class:`${r}-dropdown-offset-container`},B(te,{show:this.mergedShowSubmenu,placement:this.placement,to:f&&this.popoverBody||void 0,teleportDisabled:!f},{default:()=>B(`div`,{class:`${r}-dropdown-menu-wrapper`},e?B(b,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>p}):p)}))})]}):null);return c?c({node:g,option:t}):g}}),fe=T({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:r}=e;return B(l,null,B(ae,{clsPrefix:n,tmNode:e,key:e.key}),r?.map(e=>{let{rawNode:r}=e;return r.show===!1?null:le(r)?B(Q,{clsPrefix:n,key:e.key}):e.isGroup?(d(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):B(de,{clsPrefix:n,tmNode:e,parentKey:t,key:e.key})}))}}),pe=T({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return B(`div`,t,[e?.()])}}),me=T({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(t){let{renderIconRef:n,childrenFieldRef:r}=O(X);j(Y,{showIconRef:w(()=>{let e=n.value;return t.tmNodes.some(t=>{if(t.isGroup)return t.children?.some(({rawNode:t})=>e?e(t):t.icon);let{rawNode:n}=t;return e?e(n):n.icon})}),hasSubmenuRef:w(()=>{let{value:e}=r;return t.tmNodes.some(t=>{if(t.isGroup)return t.children?.some(({rawNode:t})=>$(t,e));let{rawNode:n}=t;return $(n,e)})})});let i=a(null);return j(h,null),j(e,null),j(C,i),{bodyRef:i}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:ue(i)?B(pe,{tmNode:r,key:r.key}):le(i)?B(Q,{clsPrefix:t,key:r.key}):ce(i)?B(fe,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):B(de,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return B(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?B(I,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?S({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),he=n(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[x(),n(`dropdown-option`,`
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
 `)]),n(`dropdown-option-body`,`
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
 `),o(`disabled`,[y(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[K(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),g(`&::before`,`background-color: var(--n-option-color-hover);`)]),y(`active`,`
 color: var(--n-option-text-color-active);
 `,[K(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),g(`&::before`,`background-color: var(--n-option-color-active);`)]),y(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[K(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),y(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),y(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[K(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[y(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),K(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[y(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),n(`icon`,`
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
 `,[y(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),n(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),n(`dropdown-menu`,`pointer-events: all;`)]),n(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),n(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),n(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),g(`>`,[n(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),o(`scrollable`,`
 padding: var(--n-padding);
 `),y(`scrollable`,[K(`content`,`
 padding: var(--n-padding);
 `)])]),ge={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},_e=Object.keys(c),ve=T({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},c),ge),G.props),setup(e){let n=a(!1),o=M(r(e,`show`),n),s=w(()=>{let{keyField:t,childrenField:n}=e;return m(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),c=w(()=>s.value.treeNodes),l=a(null),u=a(null),d=a(null),f=w(()=>l.value??u.value??d.value??null),h=w(()=>s.value.getPath(f.value).keyPath),g=w(()=>s.value.getPath(e.value).keyPath),_=V(()=>e.keyboard&&o.value);ne({keydown:{ArrowUp:{prevent:!0,handler:N},ArrowRight:{prevent:!0,handler:A},ArrowDown:{prevent:!0,handler:P},ArrowLeft:{prevent:!0,handler:k},Enter:{prevent:!0,handler:F},Escape:O}},_);let{mergedClsPrefixRef:v,inlineThemeDisabled:y,mergedComponentPropsRef:b}=q(e),x=w(()=>e.size||b?.value?.Dropdown?.size||`medium`),S=G(`Dropdown`,`-dropdown`,he,p,e,v);j(X,{labelFieldRef:r(e,`labelField`),childrenFieldRef:r(e,`childrenField`),renderLabelRef:r(e,`renderLabel`),renderIconRef:r(e,`renderIcon`),hoverKeyRef:l,keyboardKeyRef:u,lastToggledSubmenuKeyRef:d,pendingKeyPathRef:h,activeKeyPathRef:g,animatedRef:r(e,`animated`),mergedShowRef:o,nodePropsRef:r(e,`nodeProps`),renderOptionRef:r(e,`renderOption`),menuPropsRef:r(e,`menuProps`),doSelect:C,doUpdateShow:T}),E(o,t=>{!e.animated&&!t&&D()});function C(n,r){let{onSelect:i}=e;i&&t(i,n,r)}function T(r){let{"onUpdate:show":i,onUpdateShow:a}=e;i&&t(i,r),a&&t(a,r),n.value=r}function D(){l.value=null,u.value=null,d.value=null}function O(){T(!1)}function k(){L(`left`)}function A(){L(`right`)}function N(){L(`up`)}function P(){L(`down`)}function F(){let e=I();e?.isLeaf&&o.value&&(C(e.key,e.rawNode),T(!1))}function I(){let{value:e}=s,{value:t}=f;return!e||t===null?null:e.getNode(t)??null}function L(e){let{value:t}=f,{value:{getFirstAvailableNode:n}}=s,r=null;if(t===null){let e=n();e!==null&&(r=e.key)}else{let t=I();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(r=n.key)}}r!==null&&(l.value=null,u.value=r)}let R=w(()=>{let{inverted:t}=e,n=x.value,{common:{cubicBezierEaseInOut:r},self:a}=S.value,{padding:o,dividerColor:s,borderRadius:c,optionOpacityDisabled:l,[i(`optionIconSuffixWidth`,n)]:u,[i(`optionSuffixWidth`,n)]:d,[i(`optionIconPrefixWidth`,n)]:f,[i(`optionPrefixWidth`,n)]:p,[i(`fontSize`,n)]:m,[i(`optionHeight`,n)]:h,[i(`optionIconSize`,n)]:g}=a,_={"--n-bezier":r,"--n-font-size":m,"--n-padding":o,"--n-border-radius":c,"--n-option-height":h,"--n-option-prefix-width":p,"--n-option-icon-prefix-width":f,"--n-option-suffix-width":d,"--n-option-icon-suffix-width":u,"--n-option-icon-size":g,"--n-divider-color":s,"--n-option-opacity-disabled":l};return t?(_[`--n-color`]=a.colorInverted,_[`--n-option-color-hover`]=a.optionColorHoverInverted,_[`--n-option-color-active`]=a.optionColorActiveInverted,_[`--n-option-text-color`]=a.optionTextColorInverted,_[`--n-option-text-color-hover`]=a.optionTextColorHoverInverted,_[`--n-option-text-color-active`]=a.optionTextColorActiveInverted,_[`--n-option-text-color-child-active`]=a.optionTextColorChildActiveInverted,_[`--n-prefix-color`]=a.prefixColorInverted,_[`--n-suffix-color`]=a.suffixColorInverted,_[`--n-group-header-text-color`]=a.groupHeaderTextColorInverted):(_[`--n-color`]=a.color,_[`--n-option-color-hover`]=a.optionColorHover,_[`--n-option-color-active`]=a.optionColorActive,_[`--n-option-text-color`]=a.optionTextColor,_[`--n-option-text-color-hover`]=a.optionTextColorHover,_[`--n-option-text-color-active`]=a.optionTextColorActive,_[`--n-option-text-color-child-active`]=a.optionTextColorChildActive,_[`--n-prefix-color`]=a.prefixColor,_[`--n-suffix-color`]=a.suffixColor,_[`--n-group-header-text-color`]=a.groupHeaderTextColor),_}),z=y?W(`dropdown`,w(()=>`${x.value[0]}${e.inverted?`i`:``}`),R,e):void 0;return{mergedClsPrefix:v,mergedTheme:S,mergedSize:x,tmNodes:c,mergedShow:o,handleAfterLeave:()=>{e.animated&&D()},doUpdateShow:T,cssVars:y?void 0:R,themeClass:z?.themeClass,onRender:z?.onRender}},render(){let e=(e,t,n,r,i)=>{var a;let{mergedClsPrefix:o,menuProps:s}=this;(a=this.onRender)==null||a.call(this);let c=s?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},l={ref:ie(t),class:[e,`${o}-dropdown`,`${o}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:o,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:i};return B(me,P(this.$attrs,l,c))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return B(R,Object.assign({},f(this.$props,_e),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{se as n,J as r,ve as t};