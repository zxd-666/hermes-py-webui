import{An as e,Cn as t,Cr as n,Di as r,Dr as i,Ei as a,Er as o,S as s,Sr as c,Tr as l,Zr as u,_n as d,ai as f,at as p,bn as m,ct as h,gr as g,ht as _,ir as v,pr as y,rt as b,si as x,vn as S,vt as C,wr as w,yn as T,yr as E}from"./index-anDDMxmj.js";function D(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e;return Object.assign(Object.assign({},s),{iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${y(t,{alpha:.2})}`})}var O={name:`Switch`,common:b,self:D},k=n(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[w(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),w(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),w(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),n(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[h({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),w(`checked, unchecked`,`
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
 `),w(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),w(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),c(`&:focus`,[w(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),l(`round`,[w(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[w(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),o(`disabled`,[o(`icon`,[l(`rubber-band`,[l(`pressed`,[w(`rail`,[w(`button`,`max-width: var(--n-button-width-pressed);`)])]),w(`rail`,[c(`&:active`,[w(`button`,`max-width: var(--n-button-width-pressed);`)])]),l(`active`,[l(`pressed`,[w(`rail`,[w(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),w(`rail`,[c(`&:active`,[w(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),l(`active`,[w(`rail`,[w(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),w(`rail`,`
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
 `,[w(`button-icon`,`
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
 `,[h()]),w(`button`,`
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
 `)]),l(`active`,[w(`rail`,`background-color: var(--n-rail-color-active);`)]),l(`loading`,[w(`rail`,`
 cursor: wait;
 `)]),l(`disabled`,[w(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},C.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=f({name:`Switch`,props:A,slots:Object,setup(t){j===void 0&&(j=typeof CSS<`u`?CSS.supports===void 0?!1:CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:n,inlineThemeDisabled:o,mergedComponentPropsRef:s}=T(t),c=C(`Switch`,`-switch`,k,O,t,n),l=d(t,{mergedSize(e){return t.size===void 0?e?e.mergedSize.value:s?.value?.Switch?.size||`medium`:t.size}}),{mergedSizeRef:f,mergedDisabledRef:p}=l,m=a(t.defaultValue),h=v(r(t,`value`),m),_=u(()=>h.value===t.checkedValue),y=a(!1),b=a(!1),x=u(()=>{let{railStyle:e}=t;if(e)return e({focused:b.value,checked:_.value})});function w(n){let{"onUpdate:value":r,onChange:i,onUpdateValue:a}=t,{nTriggerFormInput:o,nTriggerFormChange:s}=l;r&&e(r,n),a&&e(a,n),i&&e(i,n),m.value=n,o(),s()}function D(){let{nTriggerFormFocus:e}=l;e()}function A(){let{nTriggerFormBlur:e}=l;e()}function M(){t.loading||p.value||(h.value===t.checkedValue?w(t.uncheckedValue):w(t.checkedValue))}function N(){b.value=!0,D()}function P(){b.value=!1,A(),y.value=!1}function F(e){t.loading||p.value||e.key===` `&&(h.value===t.checkedValue?w(t.uncheckedValue):w(t.checkedValue),y.value=!1)}function I(e){t.loading||p.value||e.key===` `&&(e.preventDefault(),y.value=!0)}let L=u(()=>{let{value:e}=f,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:a,buttonColor:o,boxShadowFocus:s,loadingColor:l,textColor:u,iconColor:d,[i(`buttonHeight`,e)]:p,[i(`buttonWidth`,e)]:m,[i(`buttonWidthPressed`,e)]:h,[i(`railHeight`,e)]:_,[i(`railWidth`,e)]:v,[i(`railBorderRadius`,e)]:y,[i(`buttonBorderRadius`,e)]:b},common:{cubicBezierEaseInOut:x}}=c.value,S,C,w;return j?(S=`calc((${_} - ${p}) / 2)`,C=`max(${_}, ${p})`,w=`max(${v}, calc(${v} + ${p} - ${_}))`):(S=E((g(_)-g(p))/2),C=E(Math.max(g(_),g(p))),w=g(_)>g(p)?v:E(g(v)+g(p)-g(_))),{"--n-bezier":x,"--n-button-border-radius":b,"--n-button-box-shadow":a,"--n-button-color":o,"--n-button-width":m,"--n-button-width-pressed":h,"--n-button-height":p,"--n-height":C,"--n-offset":S,"--n-opacity-disabled":t,"--n-rail-border-radius":y,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":_,"--n-rail-width":v,"--n-width":w,"--n-box-shadow-focus":s,"--n-loading-color":l,"--n-text-color":u,"--n-icon-color":d}}),R=o?S(`switch`,u(()=>f.value[0]),L,t):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:x,pressed:y,mergedClsPrefix:n,mergedValue:h,checked:_,mergedDisabled:p,cssVars:o?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:n,checked:r,mergedRailStyle:i,onRender:a,$slots:o}=this;a?.();let{checked:s,unchecked:c,icon:l,"checked-icon":u,"unchecked-icon":d}=o,f=!(m(l)&&m(u)&&m(d));return x(`div`,{role:`switch`,"aria-checked":r,class:[`${e}-switch`,this.themeClass,f&&`${e}-switch--icon`,r&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},x(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:i},t(s,n=>t(c,t=>n||t?x(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},x(`div`,{class:`${e}-switch__rail-placeholder`},x(`div`,{class:`${e}-switch__button-placeholder`}),n),x(`div`,{class:`${e}-switch__rail-placeholder`},x(`div`,{class:`${e}-switch__button-placeholder`}),t)):null)),x(`div`,{class:`${e}-switch__button`},t(l,n=>t(u,r=>t(d,t=>x(_,null,{default:()=>this.loading?x(p,Object.assign({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(r||n)?x(`div`,{class:`${e}-switch__button-icon`,key:r?`checked-icon`:`icon`},r||n):!this.checked&&(t||n)?x(`div`,{class:`${e}-switch__button-icon`,key:t?`unchecked-icon`:`icon`},t||n):null})))),t(s,t=>t&&x(`div`,{key:`checked`,class:`${e}-switch__checked`},t)),t(c,t=>t&&x(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},t)))))}});export{M as t};