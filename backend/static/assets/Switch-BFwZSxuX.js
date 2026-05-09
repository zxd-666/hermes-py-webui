import{Cr as e,Mn as t,Sn as n,Sr as r,Ti as i,Tn as a,Tr as o,Yr as s,_r as c,_t as l,ai as u,at as d,bn as f,br as p,bt as m,dr as h,mr as g,nr as _,ri as v,st as y,ut as b,w as x,wi as S,wr as C,xn as w,xr as T,yn as E}from"./index-CL_eAu9l.js";function D(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e;return Object.assign(Object.assign({},x),{iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${h(t,{alpha:.2})}`})}var O={name:`Switch`,common:d,self:D},k=T(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[r(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),r(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),r(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),T(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[b({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),r(`checked, unchecked`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),r(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),r(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),p(`&:focus`,[r(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),e(`round`,[r(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[r(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),C(`disabled`,[C(`icon`,[e(`rubber-band`,[e(`pressed`,[r(`rail`,[r(`button`,`max-width: var(--n-button-width-pressed);`)])]),r(`rail`,[p(`&:active`,[r(`button`,`max-width: var(--n-button-width-pressed);`)])]),e(`active`,[e(`pressed`,[r(`rail`,[r(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),r(`rail`,[p(`&:active`,[r(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),e(`active`,[r(`rail`,[r(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),r(`rail`,`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[r(`button-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[b()]),r(`button`,`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),e(`active`,[r(`rail`,`background-color: var(--n-rail-color-active);`)]),e(`loading`,[r(`rail`,`
 cursor: wait;
 `)]),e(`disabled`,[r(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},m.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=v({name:`Switch`,props:A,slots:Object,setup(e){j===void 0&&(j=typeof CSS<`u`?CSS.supports===void 0?!1:CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:a}=w(e),l=m(`Switch`,`-switch`,k,O,e,n),u=E(e,{mergedSize(t){return e.size===void 0?t?t.mergedSize.value:a?.value?.Switch?.size||`medium`:e.size}}),{mergedSizeRef:d,mergedDisabledRef:p}=u,h=S(e.defaultValue),v=_(i(e,`value`),h),y=s(()=>v.value===e.checkedValue),b=S(!1),x=S(!1),C=s(()=>{let{railStyle:t}=e;if(t)return t({focused:x.value,checked:y.value})});function T(n){let{"onUpdate:value":r,onChange:i,onUpdateValue:a}=e,{nTriggerFormInput:o,nTriggerFormChange:s}=u;r&&t(r,n),a&&t(a,n),i&&t(i,n),h.value=n,o(),s()}function D(){let{nTriggerFormFocus:e}=u;e()}function A(){let{nTriggerFormBlur:e}=u;e()}function M(){e.loading||p.value||(v.value===e.checkedValue?T(e.uncheckedValue):T(e.checkedValue))}function N(){x.value=!0,D()}function P(){x.value=!1,A(),b.value=!1}function F(t){e.loading||p.value||t.key===` `&&(v.value===e.checkedValue?T(e.uncheckedValue):T(e.checkedValue),b.value=!1)}function I(t){e.loading||p.value||t.key===` `&&(t.preventDefault(),b.value=!0)}let L=s(()=>{let{value:e}=d,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:i,buttonColor:a,boxShadowFocus:s,loadingColor:u,textColor:f,iconColor:p,[o(`buttonHeight`,e)]:m,[o(`buttonWidth`,e)]:h,[o(`buttonWidthPressed`,e)]:_,[o(`railHeight`,e)]:v,[o(`railWidth`,e)]:y,[o(`railBorderRadius`,e)]:b,[o(`buttonBorderRadius`,e)]:x},common:{cubicBezierEaseInOut:S}}=l.value,C,w,T;return j?(C=`calc((${v} - ${m}) / 2)`,w=`max(${v}, ${m})`,T=`max(${y}, calc(${y} + ${m} - ${v}))`):(C=c((g(v)-g(m))/2),w=c(Math.max(g(v),g(m))),T=g(v)>g(m)?y:c(g(y)+g(m)-g(v))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":i,"--n-button-color":a,"--n-button-width":h,"--n-button-width-pressed":_,"--n-button-height":m,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":b,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":v,"--n-rail-width":y,"--n-width":T,"--n-box-shadow-focus":s,"--n-loading-color":u,"--n-text-color":f,"--n-icon-color":p}}),R=r?f(`switch`,s(()=>d.value[0]),L,e):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:C,pressed:b,mergedClsPrefix:n,mergedValue:v,checked:y,mergedDisabled:p,cssVars:r?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:r,mergedRailStyle:i,onRender:o,$slots:s}=this;o?.();let{checked:c,unchecked:d,icon:f,"checked-icon":p,"unchecked-icon":m}=s,h=!(n(f)&&n(p)&&n(m));return u(`div`,{role:`switch`,"aria-checked":r,class:[`${e}-switch`,this.themeClass,h&&`${e}-switch--icon`,r&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},u(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:i},a(c,t=>a(d,n=>t||n?u(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},u(`div`,{class:`${e}-switch__rail-placeholder`},u(`div`,{class:`${e}-switch__button-placeholder`}),t),u(`div`,{class:`${e}-switch__rail-placeholder`},u(`div`,{class:`${e}-switch__button-placeholder`}),n)):null)),u(`div`,{class:`${e}-switch__button`},a(f,t=>a(p,n=>a(m,r=>u(l,null,{default:()=>this.loading?u(y,Object.assign({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(n||t)?u(`div`,{class:`${e}-switch__button-icon`,key:n?`checked-icon`:`icon`},n||t):!this.checked&&(r||t)?u(`div`,{class:`${e}-switch__button-icon`,key:r?`unchecked-icon`:`icon`},r||t):null})))),a(c,t=>t&&u(`div`,{key:`checked`,class:`${e}-switch__checked`},t)),a(d,t=>t&&u(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},t)))))}});export{M as t};