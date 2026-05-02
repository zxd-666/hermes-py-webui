import{Cr as e,Dn as t,Kr as n,S as r,Si as i,Sr as a,_n as o,_t as s,br as c,ei as l,fr as u,gn as d,hr as f,it as p,lr as m,mt as h,ni as g,nt as _,st as v,tr as y,vn as b,vr as x,xi as S,xn as C,xr as w,yn as T,yr as E}from"./index-SDDKE4XE.js";function D(e){let{primaryColor:t,opacityDisabled:n,borderRadius:i,textColor3:a}=e;return Object.assign(Object.assign({},r),{iconColor:a,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:i,railBorderRadiusMedium:i,railBorderRadiusLarge:i,buttonBorderRadiusSmall:i,buttonBorderRadiusMedium:i,buttonBorderRadiusLarge:i,boxShadowFocus:`0 0 0 2px ${m(t,{alpha:.2})}`})}var O={name:`Switch`,common:_,self:D},k=E(`switch`,`
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
 `),E(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[v({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),c(`checked, unchecked`,`
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
 `),x(`&:focus`,[c(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),w(`round`,[c(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[c(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),a(`disabled`,[a(`icon`,[w(`rubber-band`,[w(`pressed`,[c(`rail`,[c(`button`,`max-width: var(--n-button-width-pressed);`)])]),c(`rail`,[x(`&:active`,[c(`button`,`max-width: var(--n-button-width-pressed);`)])]),w(`active`,[w(`pressed`,[c(`rail`,[c(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),c(`rail`,[x(`&:active`,[c(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),w(`active`,[c(`rail`,[c(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),c(`rail`,`
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
 `,[v()]),c(`button`,`
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
 `)]),w(`active`,[c(`rail`,`background-color: var(--n-rail-color-active);`)]),w(`loading`,[c(`rail`,`
 cursor: wait;
 `)]),w(`disabled`,[c(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},s.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=l({name:`Switch`,props:A,slots:Object,setup(r){j===void 0&&(j=typeof CSS<`u`?CSS.supports===void 0?!1:CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:a,inlineThemeDisabled:c,mergedComponentPropsRef:l}=b(r),p=s(`Switch`,`-switch`,k,O,r,a),m=d(r,{mergedSize(e){return r.size===void 0?e?e.mergedSize.value:l?.value?.Switch?.size||`medium`:r.size}}),{mergedSizeRef:h,mergedDisabledRef:g}=m,_=S(r.defaultValue),v=y(i(r,`value`),_),x=n(()=>v.value===r.checkedValue),C=S(!1),w=S(!1),T=n(()=>{let{railStyle:e}=r;if(e)return e({focused:w.value,checked:x.value})});function E(e){let{"onUpdate:value":n,onChange:i,onUpdateValue:a}=r,{nTriggerFormInput:o,nTriggerFormChange:s}=m;n&&t(n,e),a&&t(a,e),i&&t(i,e),_.value=e,o(),s()}function D(){let{nTriggerFormFocus:e}=m;e()}function A(){let{nTriggerFormBlur:e}=m;e()}function M(){r.loading||g.value||(v.value===r.checkedValue?E(r.uncheckedValue):E(r.checkedValue))}function N(){w.value=!0,D()}function P(){w.value=!1,A(),C.value=!1}function F(e){r.loading||g.value||e.key===` `&&(v.value===r.checkedValue?E(r.uncheckedValue):E(r.checkedValue),C.value=!1)}function I(e){r.loading||g.value||e.key===` `&&(e.preventDefault(),C.value=!0)}let L=n(()=>{let{value:t}=h,{self:{opacityDisabled:n,railColor:r,railColorActive:i,buttonBoxShadow:a,buttonColor:o,boxShadowFocus:s,loadingColor:c,textColor:l,iconColor:d,[e(`buttonHeight`,t)]:m,[e(`buttonWidth`,t)]:g,[e(`buttonWidthPressed`,t)]:_,[e(`railHeight`,t)]:v,[e(`railWidth`,t)]:y,[e(`railBorderRadius`,t)]:b,[e(`buttonBorderRadius`,t)]:x},common:{cubicBezierEaseInOut:S}}=p.value,C,w,T;return j?(C=`calc((${v} - ${m}) / 2)`,w=`max(${v}, ${m})`,T=`max(${y}, calc(${y} + ${m} - ${v}))`):(C=f((u(v)-u(m))/2),w=f(Math.max(u(v),u(m))),T=u(v)>u(m)?y:f(u(y)+u(m)-u(v))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":a,"--n-button-color":o,"--n-button-width":g,"--n-button-width-pressed":_,"--n-button-height":m,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":n,"--n-rail-border-radius":b,"--n-rail-color":r,"--n-rail-color-active":i,"--n-rail-height":v,"--n-rail-width":y,"--n-width":T,"--n-box-shadow-focus":s,"--n-loading-color":c,"--n-text-color":l,"--n-icon-color":d}}),R=c?o(`switch`,n(()=>h.value[0]),L,r):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:T,pressed:C,mergedClsPrefix:a,mergedValue:v,checked:x,mergedDisabled:g,cssVars:c?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:r,onRender:i,$slots:a}=this;i?.();let{checked:o,unchecked:s,icon:c,"checked-icon":l,"unchecked-icon":u}=a,d=!(T(c)&&T(l)&&T(u));return g(`div`,{role:`switch`,"aria-checked":n,class:[`${e}-switch`,this.themeClass,d&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},g(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:r},C(o,t=>C(s,n=>t||n?g(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},g(`div`,{class:`${e}-switch__rail-placeholder`},g(`div`,{class:`${e}-switch__button-placeholder`}),t),g(`div`,{class:`${e}-switch__rail-placeholder`},g(`div`,{class:`${e}-switch__button-placeholder`}),n)):null)),g(`div`,{class:`${e}-switch__button`},C(c,t=>C(l,n=>C(u,r=>g(h,null,{default:()=>this.loading?g(p,Object.assign({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(n||t)?g(`div`,{class:`${e}-switch__button-icon`,key:n?`checked-icon`:`icon`},n||t):!this.checked&&(r||t)?g(`div`,{class:`${e}-switch__button-icon`,key:r?`unchecked-icon`:`icon`},r||t):null})))),C(o,t=>t&&g(`div`,{key:`checked`,class:`${e}-switch__checked`},t)),C(s,t=>t&&g(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},t)))))}});export{M as t};