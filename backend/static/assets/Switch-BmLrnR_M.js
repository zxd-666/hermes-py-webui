import{M as e,P as t,ft as n,lt as r,w as i}from"./router-BOsjhtWz.js";import{C as a,I as o,L as s,N as c,O as l,P as u,R as d,a as f,c as p,h as m,m as h,n as g,o as _,p as v,r as y,v as b,x,z as S}from"./browser-CMDerXj_.js";import{g as C,p as w}from"./Scrollbar-B_QR4POP.js";import{i as T}from"./Suffix-zKgDHgRP.js";import{b as E}from"./index-CNgIJeER.js";function D(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e;return Object.assign(Object.assign({},E),{iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${l(t,{alpha:.2})}`})}var O={name:`Switch`,common:g,self:D},k=u(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[o(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),o(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),o(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),u(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[f({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),o(`checked, unchecked`,`
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
 `),o(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),o(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),c(`&:focus`,[o(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),s(`round`,[o(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[o(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),d(`disabled`,[d(`icon`,[s(`rubber-band`,[s(`pressed`,[o(`rail`,[o(`button`,`max-width: var(--n-button-width-pressed);`)])]),o(`rail`,[c(`&:active`,[o(`button`,`max-width: var(--n-button-width-pressed);`)])]),s(`active`,[s(`pressed`,[o(`rail`,[o(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),o(`rail`,[c(`&:active`,[o(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),s(`active`,[o(`rail`,[o(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),o(`rail`,`
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
 `,[o(`button-icon`,`
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
 `,[f()]),o(`button`,`
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
 `)]),s(`active`,[o(`rail`,`background-color: var(--n-rail-color-active);`)]),s(`loading`,[o(`rail`,`
 cursor: wait;
 `)]),s(`disabled`,[o(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},p.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=e({name:`Switch`,props:A,slots:Object,setup(e){j===void 0&&(j=typeof CSS<`u`?CSS.supports===void 0?!1:CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:t,inlineThemeDisabled:o,mergedComponentPropsRef:s}=m(e),c=p(`Switch`,`-switch`,k,O,e,t),l=v(e,{mergedSize(t){return e.size===void 0?t?t.mergedSize.value:s?.value?.Switch?.size||`medium`:e.size}}),{mergedSizeRef:u,mergedDisabledRef:d}=l,f=r(e.defaultValue),g=T(n(e,`value`),f),_=i(()=>g.value===e.checkedValue),y=r(!1),b=r(!1),x=i(()=>{let{railStyle:t}=e;if(t)return t({focused:b.value,checked:_.value})});function E(t){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=e,{nTriggerFormInput:o,nTriggerFormChange:s}=l;n&&a(n,t),i&&a(i,t),r&&a(r,t),f.value=t,o(),s()}function D(){let{nTriggerFormFocus:e}=l;e()}function A(){let{nTriggerFormBlur:e}=l;e()}function M(){e.loading||d.value||(g.value===e.checkedValue?E(e.uncheckedValue):E(e.checkedValue))}function N(){b.value=!0,D()}function P(){b.value=!1,A(),y.value=!1}function F(t){e.loading||d.value||t.key===` `&&(g.value===e.checkedValue?E(e.uncheckedValue):E(e.checkedValue),y.value=!1)}function I(t){e.loading||d.value||t.key===` `&&(t.preventDefault(),y.value=!0)}let L=i(()=>{let{value:e}=u,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:i,buttonColor:a,boxShadowFocus:o,loadingColor:s,textColor:l,iconColor:d,[S(`buttonHeight`,e)]:f,[S(`buttonWidth`,e)]:p,[S(`buttonWidthPressed`,e)]:m,[S(`railHeight`,e)]:h,[S(`railWidth`,e)]:g,[S(`railBorderRadius`,e)]:_,[S(`buttonBorderRadius`,e)]:v},common:{cubicBezierEaseInOut:y}}=c.value,b,x,T;return j?(b=`calc((${h} - ${f}) / 2)`,x=`max(${h}, ${f})`,T=`max(${g}, calc(${g} + ${f} - ${h}))`):(b=C((w(h)-w(f))/2),x=C(Math.max(w(h),w(f))),T=w(h)>w(f)?g:C(w(g)+w(f)-w(h))),{"--n-bezier":y,"--n-button-border-radius":v,"--n-button-box-shadow":i,"--n-button-color":a,"--n-button-width":p,"--n-button-width-pressed":m,"--n-button-height":f,"--n-height":x,"--n-offset":b,"--n-opacity-disabled":t,"--n-rail-border-radius":_,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":h,"--n-rail-width":g,"--n-width":T,"--n-box-shadow-focus":o,"--n-loading-color":s,"--n-text-color":l,"--n-icon-color":d}}),R=o?h(`switch`,i(()=>u.value[0]),L,e):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:x,pressed:y,mergedClsPrefix:t,mergedValue:g,checked:_,mergedDisabled:d,cssVars:o?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:n,checked:r,mergedRailStyle:i,onRender:a,$slots:o}=this;a?.();let{checked:s,unchecked:c,icon:l,"checked-icon":u,"unchecked-icon":d}=o,f=!(b(l)&&b(u)&&b(d));return t(`div`,{role:`switch`,"aria-checked":r,class:[`${e}-switch`,this.themeClass,f&&`${e}-switch--icon`,r&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},t(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:i},x(s,n=>x(c,r=>n||r?t(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},t(`div`,{class:`${e}-switch__rail-placeholder`},t(`div`,{class:`${e}-switch__button-placeholder`}),n),t(`div`,{class:`${e}-switch__rail-placeholder`},t(`div`,{class:`${e}-switch__button-placeholder`}),r)):null)),t(`div`,{class:`${e}-switch__button`},x(l,n=>x(u,r=>x(d,i=>t(_,null,{default:()=>this.loading?t(y,Object.assign({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(r||n)?t(`div`,{class:`${e}-switch__button-icon`,key:r?`checked-icon`:`icon`},r||n):!this.checked&&(i||n)?t(`div`,{class:`${e}-switch__button-icon`,key:i?`unchecked-icon`:`icon`},i||n):null})))),x(s,n=>n&&t(`div`,{key:`checked`,class:`${e}-switch__checked`},n)),x(c,n=>n&&t(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},n)))))}});export{M as t};