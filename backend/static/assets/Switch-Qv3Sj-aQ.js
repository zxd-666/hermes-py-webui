import{Cn as e,Hr as t,Q as n,Qr as r,Xr as i,Zn as a,_i as o,_n as s,_r as c,ar as l,cr as u,dr as d,et as f,fn as p,gr as m,hn as h,hr as g,mn as _,mr as v,pn as y,pt as b,rt as x,ut as S,v as C,vi as w,vr as T,yr as E}from"./index-CrmAR7sR.js";function D(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e;return Object.assign(Object.assign({},C),{iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${l(t,{alpha:.2})}`})}var O={name:`Switch`,common:n,self:D},k=g(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[m(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),m(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),m(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),g(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[x({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),m(`checked, unchecked`,`
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
 `),m(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),m(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),v(`&:focus`,[m(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),c(`round`,[m(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[m(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),T(`disabled`,[T(`icon`,[c(`rubber-band`,[c(`pressed`,[m(`rail`,[m(`button`,`max-width: var(--n-button-width-pressed);`)])]),m(`rail`,[v(`&:active`,[m(`button`,`max-width: var(--n-button-width-pressed);`)])]),c(`active`,[c(`pressed`,[m(`rail`,[m(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),m(`rail`,[v(`&:active`,[m(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),c(`active`,[m(`rail`,[m(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),m(`rail`,`
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
 `,[m(`button-icon`,`
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
 `,[x()]),m(`button`,`
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
 `)]),c(`active`,[m(`rail`,`background-color: var(--n-rail-color-active);`)]),c(`loading`,[m(`rail`,`
 cursor: wait;
 `)]),c(`disabled`,[m(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},b.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=i({name:`Switch`,props:A,slots:Object,setup(n){j===void 0&&(j=typeof CSS<`u`?CSS.supports===void 0?!1:CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:s}=_(n),c=b(`Switch`,`-switch`,k,O,n,r),l=p(n,{mergedSize(e){return n.size===void 0?e?e.mergedSize.value:s?.value?.Switch?.size||`medium`:n.size}}),{mergedSizeRef:f,mergedDisabledRef:m}=l,h=o(n.defaultValue),g=a(w(n,`value`),h),v=t(()=>g.value===n.checkedValue),x=o(!1),S=o(!1),C=t(()=>{let{railStyle:e}=n;if(e)return e({focused:S.value,checked:v.value})});function T(t){let{"onUpdate:value":r,onChange:i,onUpdateValue:a}=n,{nTriggerFormInput:o,nTriggerFormChange:s}=l;r&&e(r,t),a&&e(a,t),i&&e(i,t),h.value=t,o(),s()}function D(){let{nTriggerFormFocus:e}=l;e()}function A(){let{nTriggerFormBlur:e}=l;e()}function M(){n.loading||m.value||(g.value===n.checkedValue?T(n.uncheckedValue):T(n.checkedValue))}function N(){S.value=!0,D()}function P(){S.value=!1,A(),x.value=!1}function F(e){n.loading||m.value||e.key===` `&&(g.value===n.checkedValue?T(n.uncheckedValue):T(n.checkedValue),x.value=!1)}function I(e){n.loading||m.value||e.key===` `&&(e.preventDefault(),x.value=!0)}let L=t(()=>{let{value:e}=f,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:i,buttonColor:a,boxShadowFocus:o,loadingColor:s,textColor:l,iconColor:p,[E(`buttonHeight`,e)]:m,[E(`buttonWidth`,e)]:h,[E(`buttonWidthPressed`,e)]:g,[E(`railHeight`,e)]:_,[E(`railWidth`,e)]:v,[E(`railBorderRadius`,e)]:y,[E(`buttonBorderRadius`,e)]:b},common:{cubicBezierEaseInOut:x}}=c.value,S,C,w;return j?(S=`calc((${_} - ${m}) / 2)`,C=`max(${_}, ${m})`,w=`max(${v}, calc(${v} + ${m} - ${_}))`):(S=d((u(_)-u(m))/2),C=d(Math.max(u(_),u(m))),w=u(_)>u(m)?v:d(u(v)+u(m)-u(_))),{"--n-bezier":x,"--n-button-border-radius":b,"--n-button-box-shadow":i,"--n-button-color":a,"--n-button-width":h,"--n-button-width-pressed":g,"--n-button-height":m,"--n-height":C,"--n-offset":S,"--n-opacity-disabled":t,"--n-rail-border-radius":y,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":_,"--n-rail-width":v,"--n-width":w,"--n-box-shadow-focus":o,"--n-loading-color":s,"--n-text-color":l,"--n-icon-color":p}}),R=i?y(`switch`,t(()=>f.value[0]),L,n):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:C,pressed:x,mergedClsPrefix:r,mergedValue:g,checked:v,mergedDisabled:m,cssVars:i?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:i,onRender:a,$slots:o}=this;a?.();let{checked:c,unchecked:l,icon:u,"checked-icon":d,"unchecked-icon":p}=o,m=!(h(u)&&h(d)&&h(p));return r(`div`,{role:`switch`,"aria-checked":n,class:[`${e}-switch`,this.themeClass,m&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},r(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:i},s(c,t=>s(l,n=>t||n?r(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},r(`div`,{class:`${e}-switch__rail-placeholder`},r(`div`,{class:`${e}-switch__button-placeholder`}),t),r(`div`,{class:`${e}-switch__rail-placeholder`},r(`div`,{class:`${e}-switch__button-placeholder`}),n)):null)),r(`div`,{class:`${e}-switch__button`},s(u,t=>s(d,n=>s(p,i=>r(S,null,{default:()=>this.loading?r(f,Object.assign({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(n||t)?r(`div`,{class:`${e}-switch__button-icon`,key:n?`checked-icon`:`icon`},n||t):!this.checked&&(i||t)?r(`div`,{class:`${e}-switch__button-icon`,key:i?`unchecked-icon`:`icon`},i||t):null})))),s(c,t=>t&&r(`div`,{key:`checked`,class:`${e}-switch__checked`},t)),s(l,t=>t&&r(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},t)))))}});export{M as t};