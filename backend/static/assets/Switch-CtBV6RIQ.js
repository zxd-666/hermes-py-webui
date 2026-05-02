import{Jr as e,Kn as t,Kr as n,Q as r,Rr as i,_n as a,dn as o,dr as s,et as c,fn as l,fr as u,hr as d,ir as f,mi as p,mn as m,mr as h,pi as g,pn as _,pr as v,pt as y,rt as b,sr as x,tr as S,ur as C,ut as w,wn as T,y as E}from"./index-l0jp4Q5E.js";function D(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e;return Object.assign(Object.assign({},E),{iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${S(t,{alpha:.2})}`})}var O={name:`Switch`,common:r,self:D},k=s(`switch`,`
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
 `),s(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[b({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),u(`checked, unchecked`,`
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
 `),C(`&:focus`,[u(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),v(`round`,[u(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[u(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),h(`disabled`,[h(`icon`,[v(`rubber-band`,[v(`pressed`,[u(`rail`,[u(`button`,`max-width: var(--n-button-width-pressed);`)])]),u(`rail`,[C(`&:active`,[u(`button`,`max-width: var(--n-button-width-pressed);`)])]),v(`active`,[v(`pressed`,[u(`rail`,[u(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),u(`rail`,[C(`&:active`,[u(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),v(`active`,[u(`rail`,[u(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),u(`rail`,`
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
 `,[b()]),u(`button`,`
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
 `)]),v(`active`,[u(`rail`,`background-color: var(--n-rail-color-active);`)]),v(`loading`,[u(`rail`,`
 cursor: wait;
 `)]),v(`disabled`,[u(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},y.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=n({name:`Switch`,props:A,slots:Object,setup(e){j===void 0&&(j=typeof CSS<`u`?CSS.supports===void 0?!1:CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:a}=_(e),s=y(`Switch`,`-switch`,k,O,e,n),c=o(e,{mergedSize(t){return e.size===void 0?t?t.mergedSize.value:a?.value?.Switch?.size||`medium`:e.size}}),{mergedSizeRef:u,mergedDisabledRef:m}=c,h=g(e.defaultValue),v=t(p(e,`value`),h),b=i(()=>v.value===e.checkedValue),S=g(!1),C=g(!1),w=i(()=>{let{railStyle:t}=e;if(t)return t({focused:C.value,checked:b.value})});function E(t){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=e,{nTriggerFormInput:a,nTriggerFormChange:o}=c;n&&T(n,t),i&&T(i,t),r&&T(r,t),h.value=t,a(),o()}function D(){let{nTriggerFormFocus:e}=c;e()}function A(){let{nTriggerFormBlur:e}=c;e()}function M(){e.loading||m.value||(v.value===e.checkedValue?E(e.uncheckedValue):E(e.checkedValue))}function N(){C.value=!0,D()}function P(){C.value=!1,A(),S.value=!1}function F(t){e.loading||m.value||t.key===` `&&(v.value===e.checkedValue?E(e.uncheckedValue):E(e.checkedValue),S.value=!1)}function I(t){e.loading||m.value||t.key===` `&&(t.preventDefault(),S.value=!0)}let L=i(()=>{let{value:e}=u,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:i,buttonColor:a,boxShadowFocus:o,loadingColor:c,textColor:l,iconColor:p,[d(`buttonHeight`,e)]:m,[d(`buttonWidth`,e)]:h,[d(`buttonWidthPressed`,e)]:g,[d(`railHeight`,e)]:_,[d(`railWidth`,e)]:v,[d(`railBorderRadius`,e)]:y,[d(`buttonBorderRadius`,e)]:b},common:{cubicBezierEaseInOut:S}}=s.value,C,w,T;return j?(C=`calc((${_} - ${m}) / 2)`,w=`max(${_}, ${m})`,T=`max(${v}, calc(${v} + ${m} - ${_}))`):(C=x((f(_)-f(m))/2),w=x(Math.max(f(_),f(m))),T=f(_)>f(m)?v:x(f(v)+f(m)-f(_))),{"--n-bezier":S,"--n-button-border-radius":b,"--n-button-box-shadow":i,"--n-button-color":a,"--n-button-width":h,"--n-button-width-pressed":g,"--n-button-height":m,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":y,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":_,"--n-rail-width":v,"--n-width":T,"--n-box-shadow-focus":o,"--n-loading-color":c,"--n-text-color":l,"--n-icon-color":p}}),R=r?l(`switch`,i(()=>u.value[0]),L,e):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:w,pressed:S,mergedClsPrefix:n,mergedValue:v,checked:b,mergedDisabled:m,cssVars:r?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:t,mergedDisabled:n,checked:r,mergedRailStyle:i,onRender:o,$slots:s}=this;o?.();let{checked:l,unchecked:u,icon:d,"checked-icon":f,"unchecked-icon":p}=s,h=!(m(d)&&m(f)&&m(p));return e(`div`,{role:`switch`,"aria-checked":r,class:[`${t}-switch`,this.themeClass,h&&`${t}-switch--icon`,r&&`${t}-switch--active`,n&&`${t}-switch--disabled`,this.round&&`${t}-switch--round`,this.loading&&`${t}-switch--loading`,this.pressed&&`${t}-switch--pressed`,this.rubberBand&&`${t}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},e(`div`,{class:`${t}-switch__rail`,"aria-hidden":`true`,style:i},a(l,n=>a(u,r=>n||r?e(`div`,{"aria-hidden":!0,class:`${t}-switch__children-placeholder`},e(`div`,{class:`${t}-switch__rail-placeholder`},e(`div`,{class:`${t}-switch__button-placeholder`}),n),e(`div`,{class:`${t}-switch__rail-placeholder`},e(`div`,{class:`${t}-switch__button-placeholder`}),r)):null)),e(`div`,{class:`${t}-switch__button`},a(d,n=>a(f,r=>a(p,i=>e(w,null,{default:()=>this.loading?e(c,Object.assign({key:`loading`,clsPrefix:t,strokeWidth:20},this.spinProps)):this.checked&&(r||n)?e(`div`,{class:`${t}-switch__button-icon`,key:r?`checked-icon`:`icon`},r||n):!this.checked&&(i||n)?e(`div`,{class:`${t}-switch__button-icon`,key:i?`unchecked-icon`:`icon`},i||n):null})))),a(l,n=>n&&e(`div`,{key:`checked`,class:`${t}-switch__checked`},n)),a(u,n=>n&&e(`div`,{key:`unchecked`,class:`${t}-switch__unchecked`},n)))))}});export{M as t};