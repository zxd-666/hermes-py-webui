import{$ as e,Jr as t,Kn as n,Kr as r,Rr as i,Z as a,_n as o,dn as s,dr as c,fn as l,fr as u,ft as d,hr as f,ir as p,lt as m,mi as h,mn as g,mr as _,nt as v,pi as y,pn as b,pr as x,sr as S,tr as C,ur as w,v as T,wn as E}from"./index-_epVTX4A.js";function D(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e;return Object.assign(Object.assign({},T),{iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${C(t,{alpha:.2})}`})}var O={name:`Switch`,common:a,self:D},k=c(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[u(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),u(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),u(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),c(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[v({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),u(`checked, unchecked`,`
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
 `),u(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),u(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),w(`&:focus`,[u(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),x(`round`,[u(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[u(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),_(`disabled`,[_(`icon`,[x(`rubber-band`,[x(`pressed`,[u(`rail`,[u(`button`,`max-width: var(--n-button-width-pressed);`)])]),u(`rail`,[w(`&:active`,[u(`button`,`max-width: var(--n-button-width-pressed);`)])]),x(`active`,[x(`pressed`,[u(`rail`,[u(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),u(`rail`,[w(`&:active`,[u(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),x(`active`,[u(`rail`,[u(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),u(`rail`,`
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
 `,[u(`button-icon`,`
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
 `,[v()]),u(`button`,`
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
 `)]),x(`active`,[u(`rail`,`background-color: var(--n-rail-color-active);`)]),x(`loading`,[u(`rail`,`
 cursor: wait;
 `)]),x(`disabled`,[u(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},d.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=r({name:`Switch`,props:A,slots:Object,setup(e){j===void 0&&(j=typeof CSS<`u`?CSS.supports===void 0?!1:CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:t,inlineThemeDisabled:r,mergedComponentPropsRef:a}=b(e),o=d(`Switch`,`-switch`,k,O,e,t),c=s(e,{mergedSize(t){return e.size===void 0?t?t.mergedSize.value:a?.value?.Switch?.size||`medium`:e.size}}),{mergedSizeRef:u,mergedDisabledRef:m}=c,g=y(e.defaultValue),_=n(h(e,`value`),g),v=i(()=>_.value===e.checkedValue),x=y(!1),C=y(!1),w=i(()=>{let{railStyle:t}=e;if(t)return t({focused:C.value,checked:v.value})});function T(t){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=e,{nTriggerFormInput:a,nTriggerFormChange:o}=c;n&&E(n,t),i&&E(i,t),r&&E(r,t),g.value=t,a(),o()}function D(){let{nTriggerFormFocus:e}=c;e()}function A(){let{nTriggerFormBlur:e}=c;e()}function M(){e.loading||m.value||(_.value===e.checkedValue?T(e.uncheckedValue):T(e.checkedValue))}function N(){C.value=!0,D()}function P(){C.value=!1,A(),x.value=!1}function F(t){e.loading||m.value||t.key===` `&&(_.value===e.checkedValue?T(e.uncheckedValue):T(e.checkedValue),x.value=!1)}function I(t){e.loading||m.value||t.key===` `&&(t.preventDefault(),x.value=!0)}let L=i(()=>{let{value:e}=u,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:i,buttonColor:a,boxShadowFocus:s,loadingColor:c,textColor:l,iconColor:d,[f(`buttonHeight`,e)]:m,[f(`buttonWidth`,e)]:h,[f(`buttonWidthPressed`,e)]:g,[f(`railHeight`,e)]:_,[f(`railWidth`,e)]:v,[f(`railBorderRadius`,e)]:y,[f(`buttonBorderRadius`,e)]:b},common:{cubicBezierEaseInOut:x}}=o.value,C,w,T;return j?(C=`calc((${_} - ${m}) / 2)`,w=`max(${_}, ${m})`,T=`max(${v}, calc(${v} + ${m} - ${_}))`):(C=S((p(_)-p(m))/2),w=S(Math.max(p(_),p(m))),T=p(_)>p(m)?v:S(p(v)+p(m)-p(_))),{"--n-bezier":x,"--n-button-border-radius":b,"--n-button-box-shadow":i,"--n-button-color":a,"--n-button-width":h,"--n-button-width-pressed":g,"--n-button-height":m,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":y,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":_,"--n-rail-width":v,"--n-width":T,"--n-box-shadow-focus":s,"--n-loading-color":c,"--n-text-color":l,"--n-icon-color":d}}),R=r?l(`switch`,i(()=>u.value[0]),L,e):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:w,pressed:x,mergedClsPrefix:t,mergedValue:_,checked:v,mergedDisabled:m,cssVars:r?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:n,mergedDisabled:r,checked:i,mergedRailStyle:a,onRender:s,$slots:c}=this;s?.();let{checked:l,unchecked:u,icon:d,"checked-icon":f,"unchecked-icon":p}=c,h=!(g(d)&&g(f)&&g(p));return t(`div`,{role:`switch`,"aria-checked":i,class:[`${n}-switch`,this.themeClass,h&&`${n}-switch--icon`,i&&`${n}-switch--active`,r&&`${n}-switch--disabled`,this.round&&`${n}-switch--round`,this.loading&&`${n}-switch--loading`,this.pressed&&`${n}-switch--pressed`,this.rubberBand&&`${n}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},t(`div`,{class:`${n}-switch__rail`,"aria-hidden":`true`,style:a},o(l,e=>o(u,r=>e||r?t(`div`,{"aria-hidden":!0,class:`${n}-switch__children-placeholder`},t(`div`,{class:`${n}-switch__rail-placeholder`},t(`div`,{class:`${n}-switch__button-placeholder`}),e),t(`div`,{class:`${n}-switch__rail-placeholder`},t(`div`,{class:`${n}-switch__button-placeholder`}),r)):null)),t(`div`,{class:`${n}-switch__button`},o(d,r=>o(f,i=>o(p,a=>t(m,null,{default:()=>this.loading?t(e,Object.assign({key:`loading`,clsPrefix:n,strokeWidth:20},this.spinProps)):this.checked&&(i||r)?t(`div`,{class:`${n}-switch__button-icon`,key:i?`checked-icon`:`icon`},i||r):!this.checked&&(a||r)?t(`div`,{class:`${n}-switch__button-icon`,key:a?`unchecked-icon`:`icon`},a||r):null})))),o(l,e=>e&&t(`div`,{key:`checked`,class:`${n}-switch__checked`},e)),o(u,e=>e&&t(`div`,{key:`unchecked`,class:`${n}-switch__unchecked`},e)))))}});export{M as t};