import{$n as e,Ir as t,Kr as n,Q as r,Sn as i,Wn as a,Wr as o,X as s,_ as c,ar as l,cr as u,ct as d,di as f,dn as p,dr as m,dt as h,fi as g,fn as _,fr as v,hn as y,ln as b,lr as x,nr as S,pr as C,tt as w,un as T,ur as E}from"./index-CnGJXrS6.js";function D(t){let{primaryColor:n,opacityDisabled:r,borderRadius:i,textColor3:a}=t;return Object.assign(Object.assign({},c),{iconColor:a,textColor:`white`,loadingColor:n,opacityDisabled:r,railColor:`rgba(0, 0, 0, .14)`,railColorActive:n,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:i,railBorderRadiusMedium:i,railBorderRadiusLarge:i,buttonBorderRadiusSmall:i,buttonBorderRadiusMedium:i,buttonBorderRadiusLarge:i,boxShadowFocus:`0 0 0 2px ${e(n,{alpha:.2})}`})}var O={name:`Switch`,common:s,self:D},k=x(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[E(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),E(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),E(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),x(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[w({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),E(`checked, unchecked`,`
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
 `),E(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),E(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),u(`&:focus`,[E(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),m(`round`,[E(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[E(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),v(`disabled`,[v(`icon`,[m(`rubber-band`,[m(`pressed`,[E(`rail`,[E(`button`,`max-width: var(--n-button-width-pressed);`)])]),E(`rail`,[u(`&:active`,[E(`button`,`max-width: var(--n-button-width-pressed);`)])]),m(`active`,[m(`pressed`,[E(`rail`,[E(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),E(`rail`,[u(`&:active`,[E(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),m(`active`,[E(`rail`,[E(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),E(`rail`,`
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
 `,[E(`button-icon`,`
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
 `,[w()]),E(`button`,`
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
 `)]),m(`active`,[E(`rail`,`background-color: var(--n-rail-color-active);`)]),m(`loading`,[E(`rail`,`
 cursor: wait;
 `)]),m(`disabled`,[E(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},h.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=o({name:`Switch`,props:A,slots:Object,setup(e){j===void 0&&(j=typeof CSS<`u`?CSS.supports===void 0?!1:CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:o}=p(e),s=h(`Switch`,`-switch`,k,O,e,n),c=b(e,{mergedSize(t){return e.size===void 0?t?t.mergedSize.value:o?.value?.Switch?.size||`medium`:e.size}}),{mergedSizeRef:u,mergedDisabledRef:d}=c,m=f(e.defaultValue),_=a(g(e,`value`),m),v=t(()=>_.value===e.checkedValue),y=f(!1),x=f(!1),w=t(()=>{let{railStyle:t}=e;if(t)return t({focused:x.value,checked:v.value})});function E(t){let{"onUpdate:value":n,onChange:r,onUpdateValue:a}=e,{nTriggerFormInput:o,nTriggerFormChange:s}=c;n&&i(n,t),a&&i(a,t),r&&i(r,t),m.value=t,o(),s()}function D(){let{nTriggerFormFocus:e}=c;e()}function A(){let{nTriggerFormBlur:e}=c;e()}function M(){e.loading||d.value||(_.value===e.checkedValue?E(e.uncheckedValue):E(e.checkedValue))}function N(){x.value=!0,D()}function P(){x.value=!1,A(),y.value=!1}function F(t){e.loading||d.value||t.key===` `&&(_.value===e.checkedValue?E(e.uncheckedValue):E(e.checkedValue),y.value=!1)}function I(t){e.loading||d.value||t.key===` `&&(t.preventDefault(),y.value=!0)}let L=t(()=>{let{value:e}=u,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:i,buttonColor:a,boxShadowFocus:o,loadingColor:c,textColor:d,iconColor:f,[C(`buttonHeight`,e)]:p,[C(`buttonWidth`,e)]:m,[C(`buttonWidthPressed`,e)]:h,[C(`railHeight`,e)]:g,[C(`railWidth`,e)]:_,[C(`railBorderRadius`,e)]:v,[C(`buttonBorderRadius`,e)]:y},common:{cubicBezierEaseInOut:b}}=s.value,x,w,T;return j?(x=`calc((${g} - ${p}) / 2)`,w=`max(${g}, ${p})`,T=`max(${_}, calc(${_} + ${p} - ${g}))`):(x=l((S(g)-S(p))/2),w=l(Math.max(S(g),S(p))),T=S(g)>S(p)?_:l(S(_)+S(p)-S(g))),{"--n-bezier":b,"--n-button-border-radius":y,"--n-button-box-shadow":i,"--n-button-color":a,"--n-button-width":m,"--n-button-width-pressed":h,"--n-button-height":p,"--n-height":w,"--n-offset":x,"--n-opacity-disabled":t,"--n-rail-border-radius":v,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":g,"--n-rail-width":_,"--n-width":T,"--n-box-shadow-focus":o,"--n-loading-color":c,"--n-text-color":d,"--n-icon-color":f}}),R=r?T(`switch`,t(()=>u.value[0]),L,e):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:w,pressed:y,mergedClsPrefix:n,mergedValue:_,checked:v,mergedDisabled:d,cssVars:r?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:i,mergedRailStyle:a,onRender:o,$slots:s}=this;o?.();let{checked:c,unchecked:l,icon:u,"checked-icon":f,"unchecked-icon":p}=s,m=!(_(u)&&_(f)&&_(p));return n(`div`,{role:`switch`,"aria-checked":i,class:[`${e}-switch`,this.themeClass,m&&`${e}-switch--icon`,i&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},n(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:a},y(c,t=>y(l,r=>t||r?n(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},n(`div`,{class:`${e}-switch__rail-placeholder`},n(`div`,{class:`${e}-switch__button-placeholder`}),t),n(`div`,{class:`${e}-switch__rail-placeholder`},n(`div`,{class:`${e}-switch__button-placeholder`}),r)):null)),n(`div`,{class:`${e}-switch__button`},y(u,t=>y(f,i=>y(p,a=>n(d,null,{default:()=>this.loading?n(r,Object.assign({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(i||t)?n(`div`,{class:`${e}-switch__button-icon`,key:i?`checked-icon`:`icon`},i||t):!this.checked&&(a||t)?n(`div`,{class:`${e}-switch__button-icon`,key:a?`unchecked-icon`:`icon`},a||t):null})))),y(c,t=>t&&n(`div`,{key:`checked`,class:`${e}-switch__checked`},t)),y(l,t=>t&&n(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},t)))))}});export{M as t};