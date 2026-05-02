import{$ as e,Cn as t,Gn as n,Gr as r,Lr as i,Z as a,dn as o,dr as s,er as c,fi as l,fn as u,fr as d,ft as f,gn as p,lr as m,lt as h,mr as g,nt as _,or as v,pi as y,pn as b,pr as x,qr as S,rr as C,un as w,ur as T,v as E}from"./index-mQJCJagR.js";function D(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e;return Object.assign(Object.assign({},E),{iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${c(t,{alpha:.2})}`})}var O={name:`Switch`,common:a,self:D},k=T(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[s(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),s(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),s(`button-placeholder`,`
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
 `,[_({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),s(`checked, unchecked`,`
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
 `),s(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),s(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),m(`&:focus`,[s(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),d(`round`,[s(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[s(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),x(`disabled`,[x(`icon`,[d(`rubber-band`,[d(`pressed`,[s(`rail`,[s(`button`,`max-width: var(--n-button-width-pressed);`)])]),s(`rail`,[m(`&:active`,[s(`button`,`max-width: var(--n-button-width-pressed);`)])]),d(`active`,[d(`pressed`,[s(`rail`,[s(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),s(`rail`,[m(`&:active`,[s(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),d(`active`,[s(`rail`,[s(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),s(`rail`,`
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
 `,[s(`button-icon`,`
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
 `,[_()]),s(`button`,`
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
 `)]),d(`active`,[s(`rail`,`background-color: var(--n-rail-color-active);`)]),d(`loading`,[s(`rail`,`
 cursor: wait;
 `)]),d(`disabled`,[s(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},f.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=r({name:`Switch`,props:A,slots:Object,setup(e){j===void 0&&(j=typeof CSS<`u`?CSS.supports===void 0?!1:CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:r,inlineThemeDisabled:a,mergedComponentPropsRef:s}=u(e),c=f(`Switch`,`-switch`,k,O,e,r),d=w(e,{mergedSize(t){return e.size===void 0?t?t.mergedSize.value:s?.value?.Switch?.size||`medium`:e.size}}),{mergedSizeRef:p,mergedDisabledRef:m}=d,h=l(e.defaultValue),_=n(y(e,`value`),h),b=i(()=>_.value===e.checkedValue),x=l(!1),S=l(!1),T=i(()=>{let{railStyle:t}=e;if(t)return t({focused:S.value,checked:b.value})});function E(n){let{"onUpdate:value":r,onChange:i,onUpdateValue:a}=e,{nTriggerFormInput:o,nTriggerFormChange:s}=d;r&&t(r,n),a&&t(a,n),i&&t(i,n),h.value=n,o(),s()}function D(){let{nTriggerFormFocus:e}=d;e()}function A(){let{nTriggerFormBlur:e}=d;e()}function M(){e.loading||m.value||(_.value===e.checkedValue?E(e.uncheckedValue):E(e.checkedValue))}function N(){S.value=!0,D()}function P(){S.value=!1,A(),x.value=!1}function F(t){e.loading||m.value||t.key===` `&&(_.value===e.checkedValue?E(e.uncheckedValue):E(e.checkedValue),x.value=!1)}function I(t){e.loading||m.value||t.key===` `&&(t.preventDefault(),x.value=!0)}let L=i(()=>{let{value:e}=p,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:i,buttonColor:a,boxShadowFocus:o,loadingColor:s,textColor:l,iconColor:u,[g(`buttonHeight`,e)]:d,[g(`buttonWidth`,e)]:f,[g(`buttonWidthPressed`,e)]:m,[g(`railHeight`,e)]:h,[g(`railWidth`,e)]:_,[g(`railBorderRadius`,e)]:y,[g(`buttonBorderRadius`,e)]:b},common:{cubicBezierEaseInOut:x}}=c.value,S,w,T;return j?(S=`calc((${h} - ${d}) / 2)`,w=`max(${h}, ${d})`,T=`max(${_}, calc(${_} + ${d} - ${h}))`):(S=v((C(h)-C(d))/2),w=v(Math.max(C(h),C(d))),T=C(h)>C(d)?_:v(C(_)+C(d)-C(h))),{"--n-bezier":x,"--n-button-border-radius":b,"--n-button-box-shadow":i,"--n-button-color":a,"--n-button-width":f,"--n-button-width-pressed":m,"--n-button-height":d,"--n-height":w,"--n-offset":S,"--n-opacity-disabled":t,"--n-rail-border-radius":y,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":h,"--n-rail-width":_,"--n-width":T,"--n-box-shadow-focus":o,"--n-loading-color":s,"--n-text-color":l,"--n-icon-color":u}}),R=a?o(`switch`,i(()=>p.value[0]),L,e):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:T,pressed:x,mergedClsPrefix:r,mergedValue:_,checked:b,mergedDisabled:m,cssVars:a?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:t,mergedDisabled:n,checked:r,mergedRailStyle:i,onRender:a,$slots:o}=this;a?.();let{checked:s,unchecked:c,icon:l,"checked-icon":u,"unchecked-icon":d}=o,f=!(b(l)&&b(u)&&b(d));return S(`div`,{role:`switch`,"aria-checked":r,class:[`${t}-switch`,this.themeClass,f&&`${t}-switch--icon`,r&&`${t}-switch--active`,n&&`${t}-switch--disabled`,this.round&&`${t}-switch--round`,this.loading&&`${t}-switch--loading`,this.pressed&&`${t}-switch--pressed`,this.rubberBand&&`${t}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},S(`div`,{class:`${t}-switch__rail`,"aria-hidden":`true`,style:i},p(s,e=>p(c,n=>e||n?S(`div`,{"aria-hidden":!0,class:`${t}-switch__children-placeholder`},S(`div`,{class:`${t}-switch__rail-placeholder`},S(`div`,{class:`${t}-switch__button-placeholder`}),e),S(`div`,{class:`${t}-switch__rail-placeholder`},S(`div`,{class:`${t}-switch__button-placeholder`}),n)):null)),S(`div`,{class:`${t}-switch__button`},p(l,n=>p(u,r=>p(d,i=>S(h,null,{default:()=>this.loading?S(e,Object.assign({key:`loading`,clsPrefix:t,strokeWidth:20},this.spinProps)):this.checked&&(r||n)?S(`div`,{class:`${t}-switch__button-icon`,key:r?`checked-icon`:`icon`},r||n):!this.checked&&(i||n)?S(`div`,{class:`${t}-switch__button-icon`,key:i?`unchecked-icon`:`icon`},i||n):null})))),p(s,e=>e&&S(`div`,{key:`checked`,class:`${t}-switch__checked`},e)),p(c,e=>e&&S(`div`,{key:`unchecked`,class:`${t}-switch__unchecked`},e)))))}});export{M as t};