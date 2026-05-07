import{C as e,Ci as t,Cr as n,Jr as r,Sr as i,bn as a,br as o,gr as s,gt as c,ii as l,it as u,jn as d,lt as f,ni as p,ot as m,pr as h,tr as g,ur as _,vn as v,wi as y,wn as b,wr as x,xn as S,xr as C,yn as w,yr as T,yt as E}from"./index-Cbnhqdt7.js";function D(t){let{primaryColor:n,opacityDisabled:r,borderRadius:i,textColor3:a}=t;return Object.assign(Object.assign({},e),{iconColor:a,textColor:`white`,loadingColor:n,opacityDisabled:r,railColor:`rgba(0, 0, 0, .14)`,railColorActive:n,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:i,railBorderRadiusMedium:i,railBorderRadiusLarge:i,buttonBorderRadiusSmall:i,buttonBorderRadiusMedium:i,buttonBorderRadiusLarge:i,boxShadowFocus:`0 0 0 2px ${_(n,{alpha:.2})}`})}var O={name:`Switch`,common:u,self:D},k=o(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[C(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),C(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),C(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),o(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[f({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),C(`checked, unchecked`,`
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
 `),C(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),C(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),T(`&:focus`,[C(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),i(`round`,[C(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[C(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),n(`disabled`,[n(`icon`,[i(`rubber-band`,[i(`pressed`,[C(`rail`,[C(`button`,`max-width: var(--n-button-width-pressed);`)])]),C(`rail`,[T(`&:active`,[C(`button`,`max-width: var(--n-button-width-pressed);`)])]),i(`active`,[i(`pressed`,[C(`rail`,[C(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),C(`rail`,[T(`&:active`,[C(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),i(`active`,[C(`rail`,[C(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),C(`rail`,`
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
 `,[C(`button-icon`,`
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
 `,[f()]),C(`button`,`
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
 `)]),i(`active`,[C(`rail`,`background-color: var(--n-rail-color-active);`)]),i(`loading`,[C(`rail`,`
 cursor: wait;
 `)]),i(`disabled`,[C(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},E.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=p({name:`Switch`,props:A,slots:Object,setup(e){j===void 0&&(j=typeof CSS<`u`?CSS.supports===void 0?!1:CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:n,inlineThemeDisabled:i,mergedComponentPropsRef:o}=a(e),c=E(`Switch`,`-switch`,k,O,e,n),l=v(e,{mergedSize(t){return e.size===void 0?t?t.mergedSize.value:o?.value?.Switch?.size||`medium`:e.size}}),{mergedSizeRef:u,mergedDisabledRef:f}=l,p=t(e.defaultValue),m=g(y(e,`value`),p),_=r(()=>m.value===e.checkedValue),b=t(!1),S=t(!1),C=r(()=>{let{railStyle:t}=e;if(t)return t({focused:S.value,checked:_.value})});function T(t){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=e,{nTriggerFormInput:a,nTriggerFormChange:o}=l;n&&d(n,t),i&&d(i,t),r&&d(r,t),p.value=t,a(),o()}function D(){let{nTriggerFormFocus:e}=l;e()}function A(){let{nTriggerFormBlur:e}=l;e()}function M(){e.loading||f.value||(m.value===e.checkedValue?T(e.uncheckedValue):T(e.checkedValue))}function N(){S.value=!0,D()}function P(){S.value=!1,A(),b.value=!1}function F(t){e.loading||f.value||t.key===` `&&(m.value===e.checkedValue?T(e.uncheckedValue):T(e.checkedValue),b.value=!1)}function I(t){e.loading||f.value||t.key===` `&&(t.preventDefault(),b.value=!0)}let L=r(()=>{let{value:e}=u,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:i,buttonColor:a,boxShadowFocus:o,loadingColor:l,textColor:d,iconColor:f,[x(`buttonHeight`,e)]:p,[x(`buttonWidth`,e)]:m,[x(`buttonWidthPressed`,e)]:g,[x(`railHeight`,e)]:_,[x(`railWidth`,e)]:v,[x(`railBorderRadius`,e)]:y,[x(`buttonBorderRadius`,e)]:b},common:{cubicBezierEaseInOut:S}}=c.value,C,w,T;return j?(C=`calc((${_} - ${p}) / 2)`,w=`max(${_}, ${p})`,T=`max(${v}, calc(${v} + ${p} - ${_}))`):(C=s((h(_)-h(p))/2),w=s(Math.max(h(_),h(p))),T=h(_)>h(p)?v:s(h(v)+h(p)-h(_))),{"--n-bezier":S,"--n-button-border-radius":b,"--n-button-box-shadow":i,"--n-button-color":a,"--n-button-width":m,"--n-button-width-pressed":g,"--n-button-height":p,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":y,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":_,"--n-rail-width":v,"--n-width":T,"--n-box-shadow-focus":o,"--n-loading-color":l,"--n-text-color":d,"--n-icon-color":f}}),R=i?w(`switch`,r(()=>u.value[0]),L,e):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:C,pressed:b,mergedClsPrefix:n,mergedValue:m,checked:_,mergedDisabled:f,cssVars:i?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:r,onRender:i,$slots:a}=this;i?.();let{checked:o,unchecked:s,icon:u,"checked-icon":d,"unchecked-icon":f}=a,p=!(S(u)&&S(d)&&S(f));return l(`div`,{role:`switch`,"aria-checked":n,class:[`${e}-switch`,this.themeClass,p&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},l(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:r},b(o,t=>b(s,n=>t||n?l(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},l(`div`,{class:`${e}-switch__rail-placeholder`},l(`div`,{class:`${e}-switch__button-placeholder`}),t),l(`div`,{class:`${e}-switch__rail-placeholder`},l(`div`,{class:`${e}-switch__button-placeholder`}),n)):null)),l(`div`,{class:`${e}-switch__button`},b(u,t=>b(d,n=>b(f,r=>l(c,null,{default:()=>this.loading?l(m,Object.assign({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(n||t)?l(`div`,{class:`${e}-switch__button-icon`,key:n?`checked-icon`:`icon`},n||t):!this.checked&&(r||t)?l(`div`,{class:`${e}-switch__button-icon`,key:r?`unchecked-icon`:`icon`},r||t):null})))),b(o,t=>t&&l(`div`,{key:`checked`,class:`${e}-switch__checked`},t)),b(s,t=>t&&l(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},t)))))}});export{M as t};