import{Kn as e,Q as t,Yr as n,_n as r,dn as i,dr as a,et as o,fn as s,fr as c,hi as l,hr as u,ir as d,mi as f,mn as p,mr as m,pn as h,pr as g,pt as _,qr as v,rt as y,sr as b,tr as x,ur as S,ut as C,wn as w,y as T,zr as E}from"./index-ZxG_KDBl.js";function D(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e;return Object.assign(Object.assign({},T),{iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${x(t,{alpha:.2})}`})}var O={name:`Switch`,common:t,self:D},k=a(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[c(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),c(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),c(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),a(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[y({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),c(`checked, unchecked`,`
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
 `),c(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),c(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),S(`&:focus`,[c(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),g(`round`,[c(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[c(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),m(`disabled`,[m(`icon`,[g(`rubber-band`,[g(`pressed`,[c(`rail`,[c(`button`,`max-width: var(--n-button-width-pressed);`)])]),c(`rail`,[S(`&:active`,[c(`button`,`max-width: var(--n-button-width-pressed);`)])]),g(`active`,[g(`pressed`,[c(`rail`,[c(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),c(`rail`,[S(`&:active`,[c(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),g(`active`,[c(`rail`,[c(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),c(`rail`,`
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
 `,[c(`button-icon`,`
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
 `,[y()]),c(`button`,`
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
 `)]),g(`active`,[c(`rail`,`background-color: var(--n-rail-color-active);`)]),g(`loading`,[c(`rail`,`
 cursor: wait;
 `)]),g(`disabled`,[c(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},_.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=v({name:`Switch`,props:A,slots:Object,setup(t){j===void 0&&(j=typeof CSS<`u`?CSS.supports===void 0?!1:CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:a}=h(t),o=_(`Switch`,`-switch`,k,O,t,n),c=i(t,{mergedSize(e){return t.size===void 0?e?e.mergedSize.value:a?.value?.Switch?.size||`medium`:t.size}}),{mergedSizeRef:p,mergedDisabledRef:m}=c,g=f(t.defaultValue),v=e(l(t,`value`),g),y=E(()=>v.value===t.checkedValue),x=f(!1),S=f(!1),C=E(()=>{let{railStyle:e}=t;if(e)return e({focused:S.value,checked:y.value})});function T(e){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=t,{nTriggerFormInput:a,nTriggerFormChange:o}=c;n&&w(n,e),i&&w(i,e),r&&w(r,e),g.value=e,a(),o()}function D(){let{nTriggerFormFocus:e}=c;e()}function A(){let{nTriggerFormBlur:e}=c;e()}function M(){t.loading||m.value||(v.value===t.checkedValue?T(t.uncheckedValue):T(t.checkedValue))}function N(){S.value=!0,D()}function P(){S.value=!1,A(),x.value=!1}function F(e){t.loading||m.value||e.key===` `&&(v.value===t.checkedValue?T(t.uncheckedValue):T(t.checkedValue),x.value=!1)}function I(e){t.loading||m.value||e.key===` `&&(e.preventDefault(),x.value=!0)}let L=E(()=>{let{value:e}=p,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:i,buttonColor:a,boxShadowFocus:s,loadingColor:c,textColor:l,iconColor:f,[u(`buttonHeight`,e)]:m,[u(`buttonWidth`,e)]:h,[u(`buttonWidthPressed`,e)]:g,[u(`railHeight`,e)]:_,[u(`railWidth`,e)]:v,[u(`railBorderRadius`,e)]:y,[u(`buttonBorderRadius`,e)]:x},common:{cubicBezierEaseInOut:S}}=o.value,C,w,T;return j?(C=`calc((${_} - ${m}) / 2)`,w=`max(${_}, ${m})`,T=`max(${v}, calc(${v} + ${m} - ${_}))`):(C=b((d(_)-d(m))/2),w=b(Math.max(d(_),d(m))),T=d(_)>d(m)?v:b(d(v)+d(m)-d(_))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":i,"--n-button-color":a,"--n-button-width":h,"--n-button-width-pressed":g,"--n-button-height":m,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":y,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":_,"--n-rail-width":v,"--n-width":T,"--n-box-shadow-focus":s,"--n-loading-color":c,"--n-text-color":l,"--n-icon-color":f}}),R=r?s(`switch`,E(()=>p.value[0]),L,t):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:C,pressed:x,mergedClsPrefix:n,mergedValue:v,checked:y,mergedDisabled:m,cssVars:r?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:i,mergedRailStyle:a,onRender:s,$slots:c}=this;s?.();let{checked:l,unchecked:u,icon:d,"checked-icon":f,"unchecked-icon":m}=c,h=!(p(d)&&p(f)&&p(m));return n(`div`,{role:`switch`,"aria-checked":i,class:[`${e}-switch`,this.themeClass,h&&`${e}-switch--icon`,i&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},n(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:a},r(l,t=>r(u,r=>t||r?n(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},n(`div`,{class:`${e}-switch__rail-placeholder`},n(`div`,{class:`${e}-switch__button-placeholder`}),t),n(`div`,{class:`${e}-switch__rail-placeholder`},n(`div`,{class:`${e}-switch__button-placeholder`}),r)):null)),n(`div`,{class:`${e}-switch__button`},r(d,t=>r(f,i=>r(m,r=>n(C,null,{default:()=>this.loading?n(o,Object.assign({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(i||t)?n(`div`,{class:`${e}-switch__button-icon`,key:i?`checked-icon`:`icon`},i||t):!this.checked&&(r||t)?n(`div`,{class:`${e}-switch__button-icon`,key:r?`unchecked-icon`:`icon`},r||t):null})))),r(l,t=>t&&n(`div`,{key:`checked`,class:`${e}-switch__checked`},t)),r(u,t=>t&&n(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},t)))))}});export{M as t};