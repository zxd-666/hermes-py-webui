import{Bn as e,J as t,K as n,Qn as r,Vr as i,Yn as a,Z as o,an as s,ar as c,cn as l,cr as u,dn as d,g as f,ir as p,it as m,jr as h,oi as g,on as _,or as v,rr as y,si as b,sn as x,sr as S,st as C,tr as w,vn as T,zr as E}from"./index-Cr8k17hd.js";function D(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e;return Object.assign(Object.assign({},f),{iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${a(t,{alpha:.2})}`})}var O={name:`Switch`,common:n,self:D},k=p(`switch`,`
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
 `),p(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[o({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),c(`checked, unchecked`,`
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
 `),y(`&:focus`,[c(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),v(`round`,[c(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[c(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),S(`disabled`,[S(`icon`,[v(`rubber-band`,[v(`pressed`,[c(`rail`,[c(`button`,`max-width: var(--n-button-width-pressed);`)])]),c(`rail`,[y(`&:active`,[c(`button`,`max-width: var(--n-button-width-pressed);`)])]),v(`active`,[v(`pressed`,[c(`rail`,[c(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),c(`rail`,[y(`&:active`,[c(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),v(`active`,[c(`rail`,[c(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),c(`rail`,`
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
 `,[o()]),c(`button`,`
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
 `)]),v(`active`,[c(`rail`,`background-color: var(--n-rail-color-active);`)]),v(`loading`,[c(`rail`,`
 cursor: wait;
 `)]),v(`disabled`,[c(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},C.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=E({name:`Switch`,props:A,slots:Object,setup(t){j===void 0&&(j=typeof CSS<`u`?CSS.supports===void 0?!1:CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:n,inlineThemeDisabled:i,mergedComponentPropsRef:a}=x(t),o=C(`Switch`,`-switch`,k,O,t,n),c=s(t,{mergedSize(e){return t.size===void 0?e?e.mergedSize.value:a?.value?.Switch?.size||`medium`:t.size}}),{mergedSizeRef:l,mergedDisabledRef:d}=c,f=g(t.defaultValue),p=e(b(t,`value`),f),m=h(()=>p.value===t.checkedValue),v=g(!1),y=g(!1),S=h(()=>{let{railStyle:e}=t;if(e)return e({focused:y.value,checked:m.value})});function E(e){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=t,{nTriggerFormInput:a,nTriggerFormChange:o}=c;n&&T(n,e),i&&T(i,e),r&&T(r,e),f.value=e,a(),o()}function D(){let{nTriggerFormFocus:e}=c;e()}function A(){let{nTriggerFormBlur:e}=c;e()}function M(){t.loading||d.value||(p.value===t.checkedValue?E(t.uncheckedValue):E(t.checkedValue))}function N(){y.value=!0,D()}function P(){y.value=!1,A(),v.value=!1}function F(e){t.loading||d.value||e.key===` `&&(p.value===t.checkedValue?E(t.uncheckedValue):E(t.checkedValue),v.value=!1)}function I(e){t.loading||d.value||e.key===` `&&(e.preventDefault(),v.value=!0)}let L=h(()=>{let{value:e}=l,{self:{opacityDisabled:t,railColor:n,railColorActive:i,buttonBoxShadow:a,buttonColor:s,boxShadowFocus:c,loadingColor:d,textColor:f,iconColor:p,[u(`buttonHeight`,e)]:m,[u(`buttonWidth`,e)]:h,[u(`buttonWidthPressed`,e)]:g,[u(`railHeight`,e)]:_,[u(`railWidth`,e)]:v,[u(`railBorderRadius`,e)]:y,[u(`buttonBorderRadius`,e)]:b},common:{cubicBezierEaseInOut:x}}=o.value,S,C,T;return j?(S=`calc((${_} - ${m}) / 2)`,C=`max(${_}, ${m})`,T=`max(${v}, calc(${v} + ${m} - ${_}))`):(S=w((r(_)-r(m))/2),C=w(Math.max(r(_),r(m))),T=r(_)>r(m)?v:w(r(v)+r(m)-r(_))),{"--n-bezier":x,"--n-button-border-radius":b,"--n-button-box-shadow":a,"--n-button-color":s,"--n-button-width":h,"--n-button-width-pressed":g,"--n-button-height":m,"--n-height":C,"--n-offset":S,"--n-opacity-disabled":t,"--n-rail-border-radius":y,"--n-rail-color":n,"--n-rail-color-active":i,"--n-rail-height":_,"--n-rail-width":v,"--n-width":T,"--n-box-shadow-focus":c,"--n-loading-color":d,"--n-text-color":f,"--n-icon-color":p}}),R=i?_(`switch`,h(()=>l.value[0]),L,t):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:S,pressed:v,mergedClsPrefix:n,mergedValue:p,checked:m,mergedDisabled:d,cssVars:i?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:n,checked:r,mergedRailStyle:a,onRender:o,$slots:s}=this;o?.();let{checked:c,unchecked:u,icon:f,"checked-icon":p,"unchecked-icon":h}=s,g=!(l(f)&&l(p)&&l(h));return i(`div`,{role:`switch`,"aria-checked":r,class:[`${e}-switch`,this.themeClass,g&&`${e}-switch--icon`,r&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},i(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:a},d(c,t=>d(u,n=>t||n?i(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},i(`div`,{class:`${e}-switch__rail-placeholder`},i(`div`,{class:`${e}-switch__button-placeholder`}),t),i(`div`,{class:`${e}-switch__rail-placeholder`},i(`div`,{class:`${e}-switch__button-placeholder`}),n)):null)),i(`div`,{class:`${e}-switch__button`},d(f,n=>d(p,r=>d(h,a=>i(m,null,{default:()=>this.loading?i(t,Object.assign({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(r||n)?i(`div`,{class:`${e}-switch__button-icon`,key:r?`checked-icon`:`icon`},r||n):!this.checked&&(a||n)?i(`div`,{class:`${e}-switch__button-icon`,key:a?`unchecked-icon`:`icon`},a||n):null})))),d(c,t=>t&&i(`div`,{key:`checked`,class:`${e}-switch__checked`},t)),d(u,t=>t&&i(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},t)))))}});export{M as t};