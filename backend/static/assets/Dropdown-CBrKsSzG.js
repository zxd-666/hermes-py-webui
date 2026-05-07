import{i as e,r as t}from"./warn-MV9BENh8.js";import{t as n}from"./Icon-AWVFahQj.js";import{An as r,Ci as i,Cr as a,In as o,J as s,Jn as c,Lr as l,On as u,P as d,Q as f,Si as p,Sr as m,Tn as h,Un as g,Wn as _,Wr as v,X as y,Xn as b,Y as x,Yn as S,ai as C,ar as w,bi as T,br as E,ci as D,er as O,fi as k,gi as A,gr as j,ii as M,nr as N,nt as P,or as F,q as I,qr as L,ri as R,rr as z,si as B,ti as V,vn as ee,vr as H,vt as U,xi as te,xr as W,yn as ne,yr as G}from"./index-D8vnN-wq.js";function re(e={},t){let n=T({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:i}=e,a=e=>{switch(e.key){case`Control`:n.ctrl=!0;break;case`Meta`:n.command=!0,n.win=!0;break;case`Shift`:n.shift=!0;break;case`Tab`:n.tab=!0;break}r!==void 0&&Object.keys(r).forEach(t=>{if(t!==e.key)return;let n=r[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},o=e=>{switch(e.key){case`Control`:n.ctrl=!1;break;case`Meta`:n.command=!1,n.win=!1;break;case`Shift`:n.shift=!1;break;case`Tab`:n.tab=!1;break}i!==void 0&&Object.keys(i).forEach(t=>{if(t!==e.key)return;let n=i[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},s=()=>{(t===void 0||t.value)&&(F(`keydown`,document,a),F(`keyup`,document,o)),t!==void 0&&A(t,e=>{e?(F(`keydown`,document,a),F(`keyup`,document,o)):(w(`keydown`,document,a),w(`keyup`,document,o))})};return N()?(B(s),D(()=>{(t===void 0||t.value)&&(w(`keydown`,document,a),w(`keyup`,document,o))})):s(),te(n)}function ie(e,t,n){if(!t)return e;let r=p(e.value),i=null;return A(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function ae(e){return t=>{t?e.value=t.$el:e.value=null}}var K=V({name:`ChevronRight`,render(){return R(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},R(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`}))}}),q=e(`n-dropdown-menu`),J=e(`n-dropdown`),Y=e(`n-dropdown-option`),X=V({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return R(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),oe=V({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=M(q),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=M(J);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:o}=this.tmNode,s=R(`div`,Object.assign({class:`${e}-dropdown-option`},r?.(o)),R(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},R(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},h(o.icon)),R(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(o):h(o.title??o[this.labelField])),R(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:o}):s}});function Z(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function se(e){return e.type===`group`}function Q(e){return e.type===`divider`}function ce(e){return e.type===`render`}var $=V({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=M(J),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:a,activeKeyPathRef:o,animatedRef:s,mergedShowRef:l,renderLabelRef:u,renderIconRef:d,labelFieldRef:f,childrenFieldRef:m,renderOptionRef:h,nodePropsRef:g,menuPropsRef:_}=t,v=M(Y,null),y=M(q),b=M(c),x=L(()=>e.tmNode.rawNode),S=L(()=>{let{value:t}=m;return Z(e.tmNode.rawNode,t)}),C=L(()=>{let{disabled:t}=e.tmNode;return t}),w=ie(L(()=>{if(!S.value)return!1;let{key:t,disabled:o}=e.tmNode;if(o)return!1;let{value:s}=n,{value:c}=r,{value:l}=i,{value:u}=a;return s===null?c===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,L(()=>r.value===null&&!s.value)),T=L(()=>!!v?.enteringSubmenuRef.value),E=p(!1);k(Y,{enteringSubmenuRef:E});function D(){E.value=!0}function O(){E.value=!1}function A(){let{parentKey:t,tmNode:a}=e;a.disabled||l.value&&(i.value=t,r.value=null,n.value=a.key)}function N(){let{tmNode:t}=e;t.disabled||l.value&&n.value!==t.key&&A()}function P(t){if(e.tmNode.disabled||!l.value)return;let{relatedTarget:r}=t;r&&!j({target:r},`dropdownOption`)&&!j({target:r},`scrollbarRail`)&&(n.value=null)}function F(){let{value:n}=S,{tmNode:r}=e;l.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:f,renderLabel:u,renderIcon:d,siblingHasIcon:y.showIconRef,siblingHasSubmenu:y.hasSubmenuRef,menuProps:_,popoverBody:b,animated:s,mergedShowSubmenu:L(()=>w.value&&!T.value),rawNode:x,hasSubmenu:S,pending:z(()=>{let{value:t}=a,{key:n}=e.tmNode;return t.includes(n)}),childActive:z(()=>{let{value:t}=o,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:z(()=>{let{value:t}=o,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:C,renderOption:h,nodeProps:g,handleClick:F,handleMouseMove:N,handleMouseEnter:A,handleMouseLeave:P,handleSubmenuBeforeEnter:D,handleSubmenuAfterEnter:O}},render(){let{animated:e,rawNode:t,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:s,renderLabel:c,renderIcon:u,renderOption:d,nodeProps:f,props:p,scrollable:m}=this,v=null;if(r){let e=this.menuProps?.call(this,t,t.children);v=R(de,Object.assign({},e,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let y={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},b=f?.(t),x=R(`div`,Object.assign({class:[`${i}-dropdown-option`,b?.class],"data-dropdown-option":!0},b),R(`div`,C(y,p),[R(`div`,{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[u?u(t):h(t.icon)]),R(`div`,{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},c?c(t):h(t[this.labelField]??t.title)),R(`div`,{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?R(n,null,{default:()=>R(K,null)}):null)]),this.hasSubmenu?R(_,null,{default:()=>[R(g,null,{default:()=>R(`div`,{class:`${i}-dropdown-offset-container`},R(o,{show:this.mergedShowSubmenu,placement:this.placement,to:m&&this.popoverBody||void 0,teleportDisabled:!m},{default:()=>R(`div`,{class:`${i}-dropdown-menu-wrapper`},e?R(l,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>v}):v)}))})]}):null);return d?d({node:x,option:t}):x}}),le=V({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:n,clsPrefix:r}=this,{children:i}=e;return R(v,null,R(oe,{clsPrefix:r,tmNode:e,key:e.key}),i?.map(e=>{let{rawNode:i}=e;return i.show===!1?null:Q(i)?R(X,{clsPrefix:r,key:e.key}):e.isGroup?(t(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):R($,{clsPrefix:r,tmNode:e,parentKey:n,key:e.key})}))}}),ue=V({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return R(`div`,t,[e?.()])}}),de=V({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:t,childrenFieldRef:n}=M(J);k(q,{showIconRef:L(()=>{let n=t.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>n?n(e):e.icon);let{rawNode:t}=e;return n?n(t):t.icon})}),hasSubmenuRef:L(()=>{let{value:t}=n;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>Z(e,t));let{rawNode:n}=e;return Z(n,t)})})});let r=p(null);return k(S,null),k(b,null),k(c,r),{bodyRef:r}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:ce(i)?R(ue,{tmNode:r,key:r.key}):Q(i)?R(X,{clsPrefix:t,key:r.key}):se(i)?R(le,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):R($,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return R(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?R(P,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?x({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),fe=G(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[y(),G(`dropdown-option`,`
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
 `,[E(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),H(`&::before`,`background-color: var(--n-option-color-hover);`)]),W(`active`,`
 color: var(--n-option-text-color-active);
 `,[E(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),H(`&::before`,`background-color: var(--n-option-color-active);`)]),W(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[E(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),W(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),W(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[E(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[W(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),E(`prefix`,`
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
 `)]),E(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),E(`suffix`,`
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
 `),W(`scrollable`,[E(`content`,`
 padding: var(--n-padding);
 `)])]),pe={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},me=Object.keys(s),he=V({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},s),pe),U.props),setup(e){let t=p(!1),n=O(i(e,`show`),t),o=L(()=>{let{keyField:t,childrenField:n}=e;return f(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),s=L(()=>o.value.treeNodes),c=p(null),l=p(null),u=p(null),m=L(()=>c.value??l.value??u.value??null),h=L(()=>o.value.getPath(m.value).keyPath),g=L(()=>o.value.getPath(e.value).keyPath),_=z(()=>e.keyboard&&n.value);re({keydown:{ArrowUp:{prevent:!0,handler:M},ArrowRight:{prevent:!0,handler:j},ArrowDown:{prevent:!0,handler:N},ArrowLeft:{prevent:!0,handler:D},Enter:{prevent:!0,handler:P},Escape:E}},_);let{mergedClsPrefixRef:v,inlineThemeDisabled:y,mergedComponentPropsRef:b}=ne(e),x=L(()=>e.size||b?.value?.Dropdown?.size||`medium`),S=U(`Dropdown`,`-dropdown`,fe,d,e,v);k(J,{labelFieldRef:i(e,`labelField`),childrenFieldRef:i(e,`childrenField`),renderLabelRef:i(e,`renderLabel`),renderIconRef:i(e,`renderIcon`),hoverKeyRef:c,keyboardKeyRef:l,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:h,activeKeyPathRef:g,animatedRef:i(e,`animated`),mergedShowRef:n,nodePropsRef:i(e,`nodeProps`),renderOptionRef:i(e,`renderOption`),menuPropsRef:i(e,`menuProps`),doSelect:C,doUpdateShow:w}),A(n,t=>{!e.animated&&!t&&T()});function C(t,n){let{onSelect:i}=e;i&&r(i,t,n)}function w(n){let{"onUpdate:show":i,onUpdateShow:a}=e;i&&r(i,n),a&&r(a,n),t.value=n}function T(){c.value=null,l.value=null,u.value=null}function E(){w(!1)}function D(){I(`left`)}function j(){I(`right`)}function M(){I(`up`)}function N(){I(`down`)}function P(){let e=F();e?.isLeaf&&n.value&&(C(e.key,e.rawNode),w(!1))}function F(){let{value:e}=o,{value:t}=m;return!e||t===null?null:e.getNode(t)??null}function I(e){let{value:t}=m,{value:{getFirstAvailableNode:n}}=o,r=null;if(t===null){let e=n();e!==null&&(r=e.key)}else{let t=F();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(r=n.key)}}r!==null&&(c.value=null,l.value=r)}let R=L(()=>{let{inverted:t}=e,n=x.value,{common:{cubicBezierEaseInOut:r},self:i}=S.value,{padding:o,dividerColor:s,borderRadius:c,optionOpacityDisabled:l,[a(`optionIconSuffixWidth`,n)]:u,[a(`optionSuffixWidth`,n)]:d,[a(`optionIconPrefixWidth`,n)]:f,[a(`optionPrefixWidth`,n)]:p,[a(`fontSize`,n)]:m,[a(`optionHeight`,n)]:h,[a(`optionIconSize`,n)]:g}=i,_={"--n-bezier":r,"--n-font-size":m,"--n-padding":o,"--n-border-radius":c,"--n-option-height":h,"--n-option-prefix-width":p,"--n-option-icon-prefix-width":f,"--n-option-suffix-width":d,"--n-option-icon-suffix-width":u,"--n-option-icon-size":g,"--n-divider-color":s,"--n-option-opacity-disabled":l};return t?(_[`--n-color`]=i.colorInverted,_[`--n-option-color-hover`]=i.optionColorHoverInverted,_[`--n-option-color-active`]=i.optionColorActiveInverted,_[`--n-option-text-color`]=i.optionTextColorInverted,_[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,_[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,_[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,_[`--n-prefix-color`]=i.prefixColorInverted,_[`--n-suffix-color`]=i.suffixColorInverted,_[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(_[`--n-color`]=i.color,_[`--n-option-color-hover`]=i.optionColorHover,_[`--n-option-color-active`]=i.optionColorActive,_[`--n-option-text-color`]=i.optionTextColor,_[`--n-option-text-color-hover`]=i.optionTextColorHover,_[`--n-option-text-color-active`]=i.optionTextColorActive,_[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,_[`--n-prefix-color`]=i.prefixColor,_[`--n-suffix-color`]=i.suffixColor,_[`--n-group-header-text-color`]=i.groupHeaderTextColor),_}),B=y?ee(`dropdown`,L(()=>`${x.value[0]}${e.inverted?`i`:``}`),R,e):void 0;return{mergedClsPrefix:v,mergedTheme:S,mergedSize:x,tmNodes:s,mergedShow:n,handleAfterLeave:()=>{e.animated&&T()},doUpdateShow:w,cssVars:y?void 0:R,themeClass:B?.themeClass,onRender:B?.onRender}},render(){let e=(e,t,n,r,i)=>{var a;let{mergedClsPrefix:o,menuProps:s}=this;(a=this.onRender)==null||a.call(this);let c=s?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},l={ref:ae(t),class:[e,`${o}-dropdown`,`${o}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:o,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:i};return R(de,C(this.$attrs,l,c))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return R(I,Object.assign({},u(this.$props,me),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{K as n,he as t};