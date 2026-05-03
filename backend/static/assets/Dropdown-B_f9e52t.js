import{An as e,Cr as t,Dn as n,In as r,Ir as i,J as a,Jn as o,K as s,Kr as c,Mn as l,P as u,Qn as d,Si as f,Sn as p,Sr as m,Tn as h,Un as g,Ur as _,Wn as v,Xn as y,Y as b,Yn as x,Z as S,_n as C,_t as w,ar as T,bi as E,br as D,di as O,ei as k,gr as A,hi as j,ii as M,ir as N,j as P,ni as F,oi as I,or as L,q as R,ri as z,rr as B,si as ee,tr as te,tt as ne,vn as V,vr as H,xi as U,xr as W,yi as re,yr as G}from"./index-CYBVuOlc.js";function ie(e={},t){let n=re({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:i}=e,a=e=>{switch(e.key){case`Control`:n.ctrl=!0;break;case`Meta`:n.command=!0,n.win=!0;break;case`Shift`:n.shift=!0;break;case`Tab`:n.tab=!0;break}r!==void 0&&Object.keys(r).forEach(t=>{if(t!==e.key)return;let n=r[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},o=e=>{switch(e.key){case`Control`:n.ctrl=!1;break;case`Meta`:n.command=!1,n.win=!1;break;case`Shift`:n.shift=!1;break;case`Tab`:n.tab=!1;break}i!==void 0&&Object.keys(i).forEach(t=>{if(t!==e.key)return;let n=i[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},s=()=>{(t===void 0||t.value)&&(L(`keydown`,document,a),L(`keyup`,document,o)),t!==void 0&&j(t,e=>{e?(L(`keydown`,document,a),L(`keyup`,document,o)):(T(`keydown`,document,a),T(`keyup`,document,o))})};return B()?(I(s),ee(()=>{(t===void 0||t.value)&&(T(`keydown`,document,a),T(`keyup`,document,o))})):s(),E(n)}function ae(e,t,n){if(!t)return e;let r=U(e.value),i=null;return j(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function oe(e){return t=>{t?e.value=t.$el:e.value=null}}var se=k({name:`ChevronRight`,render(){return F(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},F(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`}))}}),K=d(`n-dropdown-menu`),q=d(`n-dropdown`),J=d(`n-dropdown-option`),Y=k({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return F(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),ce=k({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=z(K),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=z(q);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:o}=this.tmNode,s=F(`div`,Object.assign({class:`${e}-dropdown-option`},r?.(o)),F(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},F(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},p(o.icon)),F(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(o):p(o.title??o[this.labelField])),F(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:o}):s}}),le=G(`icon`,`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[W(`color-transition`,{transition:`color .3s var(--n-bezier)`}),W(`depth`,{color:`var(--n-color)`},[H(`svg`,{opacity:`var(--n-opacity)`,transition:`opacity .3s var(--n-bezier)`})]),H(`svg`,{height:`1em`,width:`1em`})]),X=k({_n_icon__:!0,name:`Icon`,inheritAttrs:!1,props:Object.assign(Object.assign({},w.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=V(e),r=w(`Icon`,`-icon`,le,P,e,t),i=c(()=>{let{depth:t}=e,{common:{cubicBezierEaseInOut:n},self:i}=r.value;if(t!==void 0){let{color:e,[`opacity${t}Depth`]:r}=i;return{"--n-bezier":n,"--n-color":e,"--n-opacity":r}}return{"--n-bezier":n,"--n-color":``,"--n-opacity":``}}),a=n?C(`icon`,c(()=>`${e.depth||`d`}`),i,e):void 0;return{mergedClsPrefix:t,mergedStyle:c(()=>{let{size:t,color:n}=e;return{fontSize:l(t),color:n}}),cssVars:n?void 0:i,themeClass:a?.themeClass,onRender:a?.onRender}},render(){let{$parent:t,depth:n,mergedClsPrefix:r,component:i,onRender:a,themeClass:o}=this;return t?.$options?._n_icon__&&e(`icon`,"don't wrap `n-icon` inside `n-icon`"),a?.(),F(`i`,M(this.$attrs,{role:`img`,class:[`${r}-icon`,o,{[`${r}-icon--depth`]:n,[`${r}-icon--color-transition`]:n!==void 0}],style:[this.cssVars,this.mergedStyle]}),i?F(i):this.$slots)}});function Z(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function ue(e){return e.type===`group`}function Q(e){return e.type===`divider`}function de(e){return e.type===`render`}var $=k({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=z(q),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:a,activeKeyPathRef:s,animatedRef:l,mergedShowRef:u,renderLabelRef:d,renderIconRef:f,labelFieldRef:p,childrenFieldRef:m,renderOptionRef:h,nodePropsRef:g,menuPropsRef:_}=t,v=z(J,null),y=z(K),b=z(o),x=c(()=>e.tmNode.rawNode),S=c(()=>{let{value:t}=m;return Z(e.tmNode.rawNode,t)}),C=c(()=>{let{disabled:t}=e.tmNode;return t}),w=ae(c(()=>{if(!S.value)return!1;let{key:t,disabled:o}=e.tmNode;if(o)return!1;let{value:s}=n,{value:c}=r,{value:l}=i,{value:u}=a;return s===null?c===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,c(()=>r.value===null&&!l.value)),T=c(()=>!!v?.enteringSubmenuRef.value),E=U(!1);O(J,{enteringSubmenuRef:E});function D(){E.value=!0}function k(){E.value=!1}function j(){let{parentKey:t,tmNode:a}=e;a.disabled||u.value&&(i.value=t,r.value=null,n.value=a.key)}function M(){let{tmNode:t}=e;t.disabled||u.value&&n.value!==t.key&&j()}function P(t){if(e.tmNode.disabled||!u.value)return;let{relatedTarget:r}=t;r&&!A({target:r},`dropdownOption`)&&!A({target:r},`scrollbarRail`)&&(n.value=null)}function F(){let{value:n}=S,{tmNode:r}=e;u.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:p,renderLabel:d,renderIcon:f,siblingHasIcon:y.showIconRef,siblingHasSubmenu:y.hasSubmenuRef,menuProps:_,popoverBody:b,animated:l,mergedShowSubmenu:c(()=>w.value&&!T.value),rawNode:x,hasSubmenu:S,pending:N(()=>{let{value:t}=a,{key:n}=e.tmNode;return t.includes(n)}),childActive:N(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:N(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:C,renderOption:h,nodeProps:g,handleClick:F,handleMouseMove:M,handleMouseEnter:j,handleMouseLeave:P,handleSubmenuBeforeEnter:D,handleSubmenuAfterEnter:k}},render(){let{animated:e,rawNode:t,mergedShowSubmenu:n,clsPrefix:a,siblingHasIcon:o,siblingHasSubmenu:s,renderLabel:c,renderIcon:l,renderOption:u,nodeProps:d,props:f,scrollable:m}=this,h=null;if(n){let e=this.menuProps?.call(this,t,t.children);h=F(me,Object.assign({},e,{clsPrefix:a,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let _={class:[`${a}-dropdown-option-body`,this.pending&&`${a}-dropdown-option-body--pending`,this.active&&`${a}-dropdown-option-body--active`,this.childActive&&`${a}-dropdown-option-body--child-active`,this.mergedDisabled&&`${a}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},y=d?.(t),b=F(`div`,Object.assign({class:[`${a}-dropdown-option`,y?.class],"data-dropdown-option":!0},y),F(`div`,M(_,f),[F(`div`,{class:[`${a}-dropdown-option-body__prefix`,o&&`${a}-dropdown-option-body__prefix--show-icon`]},[l?l(t):p(t.icon)]),F(`div`,{"data-dropdown-option":!0,class:`${a}-dropdown-option-body__label`},c?c(t):p(t[this.labelField]??t.title)),F(`div`,{"data-dropdown-option":!0,class:[`${a}-dropdown-option-body__suffix`,s&&`${a}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?F(X,null,{default:()=>F(se,null)}):null)]),this.hasSubmenu?F(v,null,{default:()=>[F(g,null,{default:()=>F(`div`,{class:`${a}-dropdown-offset-container`},F(r,{show:this.mergedShowSubmenu,placement:this.placement,to:m&&this.popoverBody||void 0,teleportDisabled:!m},{default:()=>F(`div`,{class:`${a}-dropdown-menu-wrapper`},e?F(i,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>h}):h)}))})]}):null);return u?u({node:b,option:t}):b}}),fe=k({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:t,parentKey:n,clsPrefix:r}=this,{children:i}=t;return F(_,null,F(ce,{clsPrefix:r,tmNode:t,key:t.key}),i?.map(t=>{let{rawNode:i}=t;return i.show===!1?null:Q(i)?F(Y,{clsPrefix:r,key:t.key}):t.isGroup?(e(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):F($,{clsPrefix:r,tmNode:t,parentKey:n,key:t.key})}))}}),pe=k({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return F(`div`,t,[e?.()])}}),me=k({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:t,childrenFieldRef:n}=z(q);O(K,{showIconRef:c(()=>{let n=t.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>n?n(e):e.icon);let{rawNode:t}=e;return n?n(t):t.icon})}),hasSubmenuRef:c(()=>{let{value:t}=n;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>Z(e,t));let{rawNode:n}=e;return Z(n,t)})})});let r=U(null);return O(x,null),O(y,null),O(o,r),{bodyRef:r}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:de(i)?F(pe,{tmNode:r,key:r.key}):Q(i)?F(Y,{clsPrefix:t,key:r.key}):ue(i)?F(fe,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):F($,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return F(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?F(ne,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?a({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),he=G(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[b(),G(`dropdown-option`,`
 position: relative;
 `,[H(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[H(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),G(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[H(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),m(`disabled`,[W(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[D(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),H(`&::before`,`background-color: var(--n-option-color-hover);`)]),W(`active`,`
 color: var(--n-option-text-color-active);
 `,[D(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),H(`&::before`,`background-color: var(--n-option-color-active);`)]),W(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[D(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),W(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),W(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[D(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[W(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),D(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[W(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),G(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),D(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),D(`suffix`,`
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
 `,[W(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),G(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),G(`dropdown-menu`,`pointer-events: all;`)]),G(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),G(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),G(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),H(`>`,[G(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),m(`scrollable`,`
 padding: var(--n-padding);
 `),W(`scrollable`,[D(`content`,`
 padding: var(--n-padding);
 `)])]),ge={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},_e=Object.keys(R),ve=k({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},R),ge),w.props),setup(e){let r=U(!1),i=te(f(e,`show`),r),a=c(()=>{let{keyField:t,childrenField:n}=e;return S(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),o=c(()=>a.value.treeNodes),s=U(null),l=U(null),d=U(null),p=c(()=>s.value??l.value??d.value??null),m=c(()=>a.value.getPath(p.value).keyPath),h=c(()=>a.value.getPath(e.value).keyPath),g=N(()=>e.keyboard&&i.value);ie({keydown:{ArrowUp:{prevent:!0,handler:P},ArrowRight:{prevent:!0,handler:M},ArrowDown:{prevent:!0,handler:F},ArrowLeft:{prevent:!0,handler:A},Enter:{prevent:!0,handler:I},Escape:k}},g);let{mergedClsPrefixRef:_,inlineThemeDisabled:v,mergedComponentPropsRef:y}=V(e),b=c(()=>e.size||y?.value?.Dropdown?.size||`medium`),x=w(`Dropdown`,`-dropdown`,he,u,e,_);O(q,{labelFieldRef:f(e,`labelField`),childrenFieldRef:f(e,`childrenField`),renderLabelRef:f(e,`renderLabel`),renderIconRef:f(e,`renderIcon`),hoverKeyRef:s,keyboardKeyRef:l,lastToggledSubmenuKeyRef:d,pendingKeyPathRef:m,activeKeyPathRef:h,animatedRef:f(e,`animated`),mergedShowRef:i,nodePropsRef:f(e,`nodeProps`),renderOptionRef:f(e,`renderOption`),menuPropsRef:f(e,`menuProps`),doSelect:T,doUpdateShow:E}),j(i,t=>{!e.animated&&!t&&D()});function T(t,r){let{onSelect:i}=e;i&&n(i,t,r)}function E(t){let{"onUpdate:show":i,onUpdateShow:a}=e;i&&n(i,t),a&&n(a,t),r.value=t}function D(){s.value=null,l.value=null,d.value=null}function k(){E(!1)}function A(){R(`left`)}function M(){R(`right`)}function P(){R(`up`)}function F(){R(`down`)}function I(){let e=L();e?.isLeaf&&i.value&&(T(e.key,e.rawNode),E(!1))}function L(){let{value:e}=a,{value:t}=p;return!e||t===null?null:e.getNode(t)??null}function R(e){let{value:t}=p,{value:{getFirstAvailableNode:n}}=a,r=null;if(t===null){let e=n();e!==null&&(r=e.key)}else{let t=L();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(r=n.key)}}r!==null&&(s.value=null,l.value=r)}let z=c(()=>{let{inverted:n}=e,r=b.value,{common:{cubicBezierEaseInOut:i},self:a}=x.value,{padding:o,dividerColor:s,borderRadius:c,optionOpacityDisabled:l,[t(`optionIconSuffixWidth`,r)]:u,[t(`optionSuffixWidth`,r)]:d,[t(`optionIconPrefixWidth`,r)]:f,[t(`optionPrefixWidth`,r)]:p,[t(`fontSize`,r)]:m,[t(`optionHeight`,r)]:h,[t(`optionIconSize`,r)]:g}=a,_={"--n-bezier":i,"--n-font-size":m,"--n-padding":o,"--n-border-radius":c,"--n-option-height":h,"--n-option-prefix-width":p,"--n-option-icon-prefix-width":f,"--n-option-suffix-width":d,"--n-option-icon-suffix-width":u,"--n-option-icon-size":g,"--n-divider-color":s,"--n-option-opacity-disabled":l};return n?(_[`--n-color`]=a.colorInverted,_[`--n-option-color-hover`]=a.optionColorHoverInverted,_[`--n-option-color-active`]=a.optionColorActiveInverted,_[`--n-option-text-color`]=a.optionTextColorInverted,_[`--n-option-text-color-hover`]=a.optionTextColorHoverInverted,_[`--n-option-text-color-active`]=a.optionTextColorActiveInverted,_[`--n-option-text-color-child-active`]=a.optionTextColorChildActiveInverted,_[`--n-prefix-color`]=a.prefixColorInverted,_[`--n-suffix-color`]=a.suffixColorInverted,_[`--n-group-header-text-color`]=a.groupHeaderTextColorInverted):(_[`--n-color`]=a.color,_[`--n-option-color-hover`]=a.optionColorHover,_[`--n-option-color-active`]=a.optionColorActive,_[`--n-option-text-color`]=a.optionTextColor,_[`--n-option-text-color-hover`]=a.optionTextColorHover,_[`--n-option-text-color-active`]=a.optionTextColorActive,_[`--n-option-text-color-child-active`]=a.optionTextColorChildActive,_[`--n-prefix-color`]=a.prefixColor,_[`--n-suffix-color`]=a.suffixColor,_[`--n-group-header-text-color`]=a.groupHeaderTextColor),_}),B=v?C(`dropdown`,c(()=>`${b.value[0]}${e.inverted?`i`:``}`),z,e):void 0;return{mergedClsPrefix:_,mergedTheme:x,mergedSize:b,tmNodes:o,mergedShow:i,handleAfterLeave:()=>{e.animated&&D()},doUpdateShow:E,cssVars:v?void 0:z,themeClass:B?.themeClass,onRender:B?.onRender}},render(){let e=(e,t,n,r,i)=>{var a;let{mergedClsPrefix:o,menuProps:s}=this;(a=this.onRender)==null||a.call(this);let c=s?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},l={ref:oe(t),class:[e,`${o}-dropdown`,`${o}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:o,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:i};return F(me,M(this.$attrs,l,c))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return F(s,Object.assign({},h(this.$props,_e),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{X as n,ve as t};