import{An as e,Cn as t,Cr as n,Kr as r,S as i,Si as a,Sr as o,_n as s,at as c,bn as l,br as u,ct as d,ei as f,er as p,fr as m,hr as h,ht as g,lr as _,ni as v,rt as y,vn as b,vr as x,vt as S,xi as C,xr as w,yn as T,yr as E}from"./index-DUvWSgRJ.js";function D(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:a}=e;return Object.assign(Object.assign({},i),{iconColor:a,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${_(t,{alpha:.2})}`})}var O={name:`Switch`,common:y,self:D},k=E(`switch`,`
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
 `),E(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[d({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),u(`checked, unchecked`,`
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
 `),x(`&:focus`,[u(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),w(`round`,[u(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[u(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),o(`disabled`,[o(`icon`,[w(`rubber-band`,[w(`pressed`,[u(`rail`,[u(`button`,`max-width: var(--n-button-width-pressed);`)])]),u(`rail`,[x(`&:active`,[u(`button`,`max-width: var(--n-button-width-pressed);`)])]),w(`active`,[w(`pressed`,[u(`rail`,[u(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),u(`rail`,[x(`&:active`,[u(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),w(`active`,[u(`rail`,[u(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),u(`rail`,`
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
 `,[d()]),u(`button`,`
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
 `)]),w(`active`,[u(`rail`,`background-color: var(--n-rail-color-active);`)]),w(`loading`,[u(`rail`,`
 cursor: wait;
 `)]),w(`disabled`,[u(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},S.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=f({name:`Switch`,props:A,slots:Object,setup(t){j===void 0&&(j=typeof CSS<`u`?CSS.supports===void 0?!1:CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:i,inlineThemeDisabled:o,mergedComponentPropsRef:c}=T(t),l=S(`Switch`,`-switch`,k,O,t,i),u=s(t,{mergedSize(e){return t.size===void 0?e?e.mergedSize.value:c?.value?.Switch?.size||`medium`:t.size}}),{mergedSizeRef:d,mergedDisabledRef:f}=u,g=C(t.defaultValue),_=p(a(t,`value`),g),v=r(()=>_.value===t.checkedValue),y=C(!1),x=C(!1),w=r(()=>{let{railStyle:e}=t;if(e)return e({focused:x.value,checked:v.value})});function E(n){let{"onUpdate:value":r,onChange:i,onUpdateValue:a}=t,{nTriggerFormInput:o,nTriggerFormChange:s}=u;r&&e(r,n),a&&e(a,n),i&&e(i,n),g.value=n,o(),s()}function D(){let{nTriggerFormFocus:e}=u;e()}function A(){let{nTriggerFormBlur:e}=u;e()}function M(){t.loading||f.value||(_.value===t.checkedValue?E(t.uncheckedValue):E(t.checkedValue))}function N(){x.value=!0,D()}function P(){x.value=!1,A(),y.value=!1}function F(e){t.loading||f.value||e.key===` `&&(_.value===t.checkedValue?E(t.uncheckedValue):E(t.checkedValue),y.value=!1)}function I(e){t.loading||f.value||e.key===` `&&(e.preventDefault(),y.value=!0)}let L=r(()=>{let{value:e}=d,{self:{opacityDisabled:t,railColor:r,railColorActive:i,buttonBoxShadow:a,buttonColor:o,boxShadowFocus:s,loadingColor:c,textColor:u,iconColor:f,[n(`buttonHeight`,e)]:p,[n(`buttonWidth`,e)]:g,[n(`buttonWidthPressed`,e)]:_,[n(`railHeight`,e)]:v,[n(`railWidth`,e)]:y,[n(`railBorderRadius`,e)]:b,[n(`buttonBorderRadius`,e)]:x},common:{cubicBezierEaseInOut:S}}=l.value,C,w,T;return j?(C=`calc((${v} - ${p}) / 2)`,w=`max(${v}, ${p})`,T=`max(${y}, calc(${y} + ${p} - ${v}))`):(C=h((m(v)-m(p))/2),w=h(Math.max(m(v),m(p))),T=m(v)>m(p)?y:h(m(y)+m(p)-m(v))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":a,"--n-button-color":o,"--n-button-width":g,"--n-button-width-pressed":_,"--n-button-height":p,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":b,"--n-rail-color":r,"--n-rail-color-active":i,"--n-rail-height":v,"--n-rail-width":y,"--n-width":T,"--n-box-shadow-focus":s,"--n-loading-color":c,"--n-text-color":u,"--n-icon-color":f}}),R=o?b(`switch`,r(()=>d.value[0]),L,t):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:w,pressed:y,mergedClsPrefix:i,mergedValue:_,checked:v,mergedDisabled:f,cssVars:o?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:n,checked:r,mergedRailStyle:i,onRender:a,$slots:o}=this;a?.();let{checked:s,unchecked:u,icon:d,"checked-icon":f,"unchecked-icon":p}=o,m=!(l(d)&&l(f)&&l(p));return v(`div`,{role:`switch`,"aria-checked":r,class:[`${e}-switch`,this.themeClass,m&&`${e}-switch--icon`,r&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},v(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:i},t(s,n=>t(u,t=>n||t?v(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},v(`div`,{class:`${e}-switch__rail-placeholder`},v(`div`,{class:`${e}-switch__button-placeholder`}),n),v(`div`,{class:`${e}-switch__rail-placeholder`},v(`div`,{class:`${e}-switch__button-placeholder`}),t)):null)),v(`div`,{class:`${e}-switch__button`},t(d,n=>t(f,r=>t(p,t=>v(g,null,{default:()=>this.loading?v(c,Object.assign({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(r||n)?v(`div`,{class:`${e}-switch__button-icon`,key:r?`checked-icon`:`icon`},r||n):!this.checked&&(t||n)?v(`div`,{class:`${e}-switch__button-icon`,key:t?`unchecked-icon`:`icon`},t||n):null})))),t(s,t=>t&&v(`div`,{key:`checked`,class:`${e}-switch__checked`},t)),t(u,t=>t&&v(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},t)))))}});export{M as t};