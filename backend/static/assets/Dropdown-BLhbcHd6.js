import{$n as e,$r as t,A as n,Bn as r,Cn as i,D as a,En as o,G as s,Gn as c,H as l,Hr as u,Jn as d,Kn as f,Mn as p,Mr as m,On as h,Qr as g,U as _,W as v,Wn as y,Xr as b,Z as x,Zn as S,_i as C,_r as w,di as T,ei as E,er as D,fr as O,gi as k,gr as A,hi as j,hr as M,mn as N,mr as P,ni as F,nr as I,pn as L,pt as R,q as ee,ri as z,si as B,tr as V,vi as H,vn as U,vr as W,xn as te,yr as G,zn as ne,zr as re}from"./index-BfZL1xYO.js";function ie(t={},n){let r=j({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:i,keyup:a}=t,o=e=>{switch(e.key){case`Control`:r.ctrl=!0;break;case`Meta`:r.command=!0,r.win=!0;break;case`Shift`:r.shift=!0;break;case`Tab`:r.tab=!0;break}i!==void 0&&Object.keys(i).forEach(t=>{if(t!==e.key)return;let n=i[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},s=e=>{switch(e.key){case`Control`:r.ctrl=!1;break;case`Meta`:r.command=!1,r.win=!1;break;case`Shift`:r.shift=!1;break;case`Tab`:r.tab=!1;break}a!==void 0&&Object.keys(a).forEach(t=>{if(t!==e.key)return;let n=a[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},c=()=>{(n===void 0||n.value)&&(I(`keydown`,document,o),I(`keyup`,document,s)),n!==void 0&&T(n,e=>{e?(I(`keydown`,document,o),I(`keyup`,document,s)):(V(`keydown`,document,o),V(`keyup`,document,s))})};return e()?(F(c),z(()=>{(n===void 0||n.value)&&(V(`keydown`,document,o),V(`keyup`,document,s))})):c(),k(r)}function ae(e,t,n){if(!t)return e;let r=C(e.value),i=null;return T(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function oe(e){return t=>{t?e.value=t.$el:e.value=null}}var se=b({name:`ChevronRight`,render(){return g(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},g(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`}))}}),K=d(`n-dropdown-menu`),q=d(`n-dropdown`),J=d(`n-dropdown-option`),Y=b({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return g(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),ce=b({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:n}=t(K),{renderLabelRef:r,labelFieldRef:i,nodePropsRef:a,renderOptionRef:o}=t(q);return{labelField:i,showIcon:e,hasSubmenu:n,renderLabel:r,nodeProps:a,renderOption:o}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:o}=this.tmNode,s=g(`div`,Object.assign({class:`${e}-dropdown-option`},r?.(o)),g(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},g(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},U(o.icon)),g(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(o):U(o.title??o[this.labelField])),g(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:o}):s}}),le=M(`icon`,`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[w(`color-transition`,{transition:`color .3s var(--n-bezier)`}),w(`depth`,{color:`var(--n-color)`},[P(`svg`,{opacity:`var(--n-opacity)`,transition:`opacity .3s var(--n-bezier)`})]),P(`svg`,{height:`1em`,width:`1em`})]),X=b({_n_icon__:!0,name:`Icon`,inheritAttrs:!1,props:Object.assign(Object.assign({},R.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=N(e),r=R(`Icon`,`-icon`,le,a,e,t),i=u(()=>{let{depth:t}=e,{common:{cubicBezierEaseInOut:n},self:i}=r.value;if(t!==void 0){let{color:e,[`opacity${t}Depth`]:r}=i;return{"--n-bezier":n,"--n-color":e,"--n-opacity":r}}return{"--n-bezier":n,"--n-color":``,"--n-opacity":``}}),o=n?L(`icon`,u(()=>`${e.depth||`d`}`),i,e):void 0;return{mergedClsPrefix:t,mergedStyle:u(()=>{let{size:t,color:n}=e;return{fontSize:h(t),color:n}}),cssVars:n?void 0:i,themeClass:o?.themeClass,onRender:o?.onRender}},render(){let{$parent:e,depth:t,mergedClsPrefix:n,component:r,onRender:i,themeClass:a}=this;return e?.$options?._n_icon__&&o(`icon`,"don't wrap `n-icon` inside `n-icon`"),i?.(),g(`i`,E(this.$attrs,{role:`img`,class:[`${n}-icon`,a,{[`${n}-icon--depth`]:t,[`${n}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?g(r):this.$slots)}});function Z(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function ue(e){return e.type===`group`}function Q(e){return e.type===`divider`}function de(e){return e.type===`render`}var $=b({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let n=t(q),{hoverKeyRef:r,keyboardKeyRef:i,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:o,activeKeyPathRef:s,animatedRef:c,mergedShowRef:l,renderLabelRef:d,renderIconRef:f,labelFieldRef:p,childrenFieldRef:m,renderOptionRef:h,nodePropsRef:g,menuPropsRef:_}=n,v=t(J,null),b=t(K),x=t(y),S=u(()=>e.tmNode.rawNode),w=u(()=>{let{value:t}=m;return Z(e.tmNode.rawNode,t)}),T=u(()=>{let{disabled:t}=e.tmNode;return t}),E=ae(u(()=>{if(!w.value)return!1;let{key:t,disabled:n}=e.tmNode;if(n)return!1;let{value:s}=r,{value:c}=i,{value:l}=a,{value:u}=o;return s===null?c===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,u(()=>i.value===null&&!c.value)),k=u(()=>!!v?.enteringSubmenuRef.value),A=C(!1);B(J,{enteringSubmenuRef:A});function j(){A.value=!0}function M(){A.value=!1}function N(){let{parentKey:t,tmNode:n}=e;n.disabled||l.value&&(a.value=t,i.value=null,r.value=n.key)}function P(){let{tmNode:t}=e;t.disabled||l.value&&r.value!==t.key&&N()}function F(t){if(e.tmNode.disabled||!l.value)return;let{relatedTarget:n}=t;n&&!O({target:n},`dropdownOption`)&&!O({target:n},`scrollbarRail`)&&(r.value=null)}function I(){let{value:t}=w,{tmNode:r}=e;l.value&&!t&&!r.disabled&&(n.doSelect(r.key,r.rawNode),n.doUpdateShow(!1))}return{labelField:p,renderLabel:d,renderIcon:f,siblingHasIcon:b.showIconRef,siblingHasSubmenu:b.hasSubmenuRef,menuProps:_,popoverBody:x,animated:c,mergedShowSubmenu:u(()=>E.value&&!k.value),rawNode:S,hasSubmenu:w,pending:D(()=>{let{value:t}=o,{key:n}=e.tmNode;return t.includes(n)}),childActive:D(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:D(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:T,renderOption:h,nodeProps:g,handleClick:I,handleMouseMove:P,handleMouseEnter:N,handleMouseLeave:F,handleSubmenuBeforeEnter:j,handleSubmenuAfterEnter:M}},render(){let{animated:e,rawNode:t,mergedShowSubmenu:n,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:o,renderLabel:s,renderIcon:c,renderOption:l,nodeProps:u,props:d,scrollable:f}=this,h=null;if(n){let e=this.menuProps?.call(this,t,t.children);h=g(me,Object.assign({},e,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let _={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},v=u?.(t),y=g(`div`,Object.assign({class:[`${i}-dropdown-option`,v?.class],"data-dropdown-option":!0},v),g(`div`,E(_,d),[g(`div`,{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[c?c(t):U(t.icon)]),g(`div`,{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},s?s(t):U(t[this.labelField]??t.title)),g(`div`,{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,o&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?g(X,null,{default:()=>g(se,null)}):null)]),this.hasSubmenu?g(r,null,{default:()=>[g(ne,null,{default:()=>g(`div`,{class:`${i}-dropdown-offset-container`},g(p,{show:this.mergedShowSubmenu,placement:this.placement,to:f&&this.popoverBody||void 0,teleportDisabled:!f},{default:()=>g(`div`,{class:`${i}-dropdown-menu-wrapper`},e?g(m,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>h}):h)}))})]}):null);return l?l({node:y,option:t}):y}}),fe=b({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:r}=e;return g(re,null,g(ce,{clsPrefix:n,tmNode:e,key:e.key}),r?.map(e=>{let{rawNode:r}=e;return r.show===!1?null:Q(r)?g(Y,{clsPrefix:n,key:e.key}):e.isGroup?(o(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):g($,{clsPrefix:n,tmNode:e,parentKey:t,key:e.key})}))}}),pe=b({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return g(`div`,t,[e?.()])}}),me=b({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:n,childrenFieldRef:r}=t(q);B(K,{showIconRef:u(()=>{let t=n.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>t?t(e):e.icon);let{rawNode:n}=e;return t?t(n):n.icon})}),hasSubmenuRef:u(()=>{let{value:t}=r;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>Z(e,t));let{rawNode:n}=e;return Z(n,t)})})});let i=C(null);return B(c,null),B(f,null),B(y,i),{bodyRef:i}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:de(i)?g(pe,{tmNode:r,key:r.key}):Q(i)?g(Y,{clsPrefix:t,key:r.key}):ue(i)?g(fe,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):g($,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return g(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?g(x,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?v({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),he=M(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[s(),M(`dropdown-option`,`
 position: relative;
 `,[P(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[P(`&::before`,`
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
 `,[P(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),W(`disabled`,[w(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[A(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),P(`&::before`,`background-color: var(--n-option-color-hover);`)]),w(`active`,`
 color: var(--n-option-text-color-active);
 `,[A(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),P(`&::before`,`background-color: var(--n-option-color-active);`)]),w(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[A(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),w(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),w(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[A(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[w(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),A(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[w(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),M(`icon`,`
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
 `,[w(`has-submenu`,`
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
 `),P(`>`,[M(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),W(`scrollable`,`
 padding: var(--n-padding);
 `),w(`scrollable`,[A(`content`,`
 padding: var(--n-padding);
 `)])]),ge={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},_e=Object.keys(_),ve=b({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},_),ge),R.props),setup(e){let t=C(!1),r=S(H(e,`show`),t),a=u(()=>{let{keyField:t,childrenField:n}=e;return ee(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),o=u(()=>a.value.treeNodes),s=C(null),c=C(null),l=C(null),d=u(()=>s.value??c.value??l.value??null),f=u(()=>a.value.getPath(d.value).keyPath),p=u(()=>a.value.getPath(e.value).keyPath),m=D(()=>e.keyboard&&r.value);ie({keydown:{ArrowUp:{prevent:!0,handler:A},ArrowRight:{prevent:!0,handler:k},ArrowDown:{prevent:!0,handler:j},ArrowLeft:{prevent:!0,handler:O},Enter:{prevent:!0,handler:M},Escape:E}},m);let{mergedClsPrefixRef:h,inlineThemeDisabled:g,mergedComponentPropsRef:_}=N(e),v=u(()=>e.size||_?.value?.Dropdown?.size||`medium`),y=R(`Dropdown`,`-dropdown`,he,n,e,h);B(q,{labelFieldRef:H(e,`labelField`),childrenFieldRef:H(e,`childrenField`),renderLabelRef:H(e,`renderLabel`),renderIconRef:H(e,`renderIcon`),hoverKeyRef:s,keyboardKeyRef:c,lastToggledSubmenuKeyRef:l,pendingKeyPathRef:f,activeKeyPathRef:p,animatedRef:H(e,`animated`),mergedShowRef:r,nodePropsRef:H(e,`nodeProps`),renderOptionRef:H(e,`renderOption`),menuPropsRef:H(e,`menuProps`),doSelect:b,doUpdateShow:x}),T(r,t=>{!e.animated&&!t&&w()});function b(t,n){let{onSelect:r}=e;r&&i(r,t,n)}function x(n){let{"onUpdate:show":r,onUpdateShow:a}=e;r&&i(r,n),a&&i(a,n),t.value=n}function w(){s.value=null,c.value=null,l.value=null}function E(){x(!1)}function O(){F(`left`)}function k(){F(`right`)}function A(){F(`up`)}function j(){F(`down`)}function M(){let e=P();e?.isLeaf&&r.value&&(b(e.key,e.rawNode),x(!1))}function P(){let{value:e}=a,{value:t}=d;return!e||t===null?null:e.getNode(t)??null}function F(e){let{value:t}=d,{value:{getFirstAvailableNode:n}}=a,r=null;if(t===null){let e=n();e!==null&&(r=e.key)}else{let t=P();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(r=n.key)}}r!==null&&(s.value=null,c.value=r)}let I=u(()=>{let{inverted:t}=e,n=v.value,{common:{cubicBezierEaseInOut:r},self:i}=y.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:c,[G(`optionIconSuffixWidth`,n)]:l,[G(`optionSuffixWidth`,n)]:u,[G(`optionIconPrefixWidth`,n)]:d,[G(`optionPrefixWidth`,n)]:f,[G(`fontSize`,n)]:p,[G(`optionHeight`,n)]:m,[G(`optionIconSize`,n)]:h}=i,g={"--n-bezier":r,"--n-font-size":p,"--n-padding":a,"--n-border-radius":s,"--n-option-height":m,"--n-option-prefix-width":f,"--n-option-icon-prefix-width":d,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":l,"--n-option-icon-size":h,"--n-divider-color":o,"--n-option-opacity-disabled":c};return t?(g[`--n-color`]=i.colorInverted,g[`--n-option-color-hover`]=i.optionColorHoverInverted,g[`--n-option-color-active`]=i.optionColorActiveInverted,g[`--n-option-text-color`]=i.optionTextColorInverted,g[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,g[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,g[`--n-prefix-color`]=i.prefixColorInverted,g[`--n-suffix-color`]=i.suffixColorInverted,g[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(g[`--n-color`]=i.color,g[`--n-option-color-hover`]=i.optionColorHover,g[`--n-option-color-active`]=i.optionColorActive,g[`--n-option-text-color`]=i.optionTextColor,g[`--n-option-text-color-hover`]=i.optionTextColorHover,g[`--n-option-text-color-active`]=i.optionTextColorActive,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,g[`--n-prefix-color`]=i.prefixColor,g[`--n-suffix-color`]=i.suffixColor,g[`--n-group-header-text-color`]=i.groupHeaderTextColor),g}),z=g?L(`dropdown`,u(()=>`${v.value[0]}${e.inverted?`i`:``}`),I,e):void 0;return{mergedClsPrefix:h,mergedTheme:y,mergedSize:v,tmNodes:o,mergedShow:r,handleAfterLeave:()=>{e.animated&&w()},doUpdateShow:x,cssVars:g?void 0:I,themeClass:z?.themeClass,onRender:z?.onRender}},render(){let e=(e,t,n,r,i)=>{var a;let{mergedClsPrefix:o,menuProps:s}=this;(a=this.onRender)==null||a.call(this);let c=s?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},l={ref:oe(t),class:[e,`${o}-dropdown`,`${o}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:o,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:i};return g(me,E(this.$attrs,l,c))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return g(l,Object.assign({},te(this.$props,_e),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{X as n,ve as t};