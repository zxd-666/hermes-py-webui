import{H as e,I as t,M as n,P as r,f as i,ft as a,lt as o,p as s,w as c,z as l}from"./router-yvtxos1Q.js";import{C as u,D as d,I as f,L as p,N as m,O as h,P as g,R as _,T as v,a as y,c as b,d as x,h as S,k as C,l as w,m as T,n as E,o as D,p as O,r as k,t as A,u as j,v as M,x as N,z as P}from"./browser-BKQmHxtX.js";import{i as F}from"./warn-CBw6BA0d.js";function I(e){return e.replace(/#|\(|\)|,|\s|\./g,`_`)}var L=n({name:`FadeInExpandTransition`,props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:t}){function n(t){e.width?t.style.maxWidth=`${t.offsetWidth}px`:t.style.maxHeight=`${t.offsetHeight}px`,t.offsetWidth}function a(t){e.width?t.style.maxWidth=`0`:t.style.maxHeight=`0`,t.offsetWidth;let{onLeave:n}=e;n&&n()}function o(t){e.width?t.style.maxWidth=``:t.style.maxHeight=``;let{onAfterLeave:n}=e;n&&n()}function c(t){if(t.style.transition=`none`,e.width){let e=t.offsetWidth;t.style.maxWidth=`0`,t.offsetWidth,t.style.transition=``,t.style.maxWidth=`${e}px`}else if(e.reverse)t.style.maxHeight=`${t.offsetHeight}px`,t.offsetHeight,t.style.transition=``,t.style.maxHeight=`0`;else{let e=t.offsetHeight;t.style.maxHeight=`0`,t.offsetWidth,t.style.transition=``,t.style.maxHeight=`${e}px`}t.offsetWidth}function l(t){var n;e.width?t.style.maxWidth=``:e.reverse||(t.style.maxHeight=``),(n=e.onAfterEnter)==null||n.call(e)}return()=>{let{group:u,width:d,appear:f,mode:p}=e,m=u?s:i,h={name:d?`fade-in-width-expand-transition`:`fade-in-height-expand-transition`,appear:f,onEnter:c,onAfterEnter:l,onBeforeLeave:n,onLeave:a,onAfterLeave:o};return u||(h.mode=p),r(m,h,t)}}}),{cubicBezierEaseInOut:R}=j;function z({duration:e=`.2s`,delay:t=`.1s`}={}){return[m(`&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to`,{opacity:1}),m(`&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from`,`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),m(`&.fade-in-width-expand-transition-leave-active`,`
 overflow: hidden;
 transition:
 opacity ${e} ${R},
 max-width ${e} ${R} ${t},
 margin-left ${e} ${R} ${t},
 margin-right ${e} ${R} ${t};
 `),m(`&.fade-in-width-expand-transition-enter-active`,`
 overflow: hidden;
 transition:
 opacity ${e} ${R} ${t},
 max-width ${e} ${R},
 margin-left ${e} ${R},
 margin-right ${e} ${R};
 `)]}var B=g(`base-wave`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),V=n({name:`BaseWave`,props:{clsPrefix:{type:String,required:!0}},setup(t){w(`-base-wave`,B,a(t,`clsPrefix`));let n=o(null),r=o(!1),i=null;return e(()=>{i!==null&&window.clearTimeout(i)}),{active:r,selfRef:n,play(){i!==null&&(window.clearTimeout(i),r.value=!1,i=null),l(()=>{var e;(e=n.value)==null||e.offsetHeight,r.value=!0,i=window.setTimeout(()=>{r.value=!1,i=null},1e3)})}}},render(){let{clsPrefix:e}=this;return r(`div`,{ref:`selfRef`,"aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}});function H(e){return C(e,[255,255,255,.16])}function U(e){return C(e,[0,0,0,.12])}var W=F(`n-button-group`),G={paddingTiny:`0 6px`,paddingSmall:`0 10px`,paddingMedium:`0 14px`,paddingLarge:`0 18px`,paddingRoundTiny:`0 10px`,paddingRoundSmall:`0 14px`,paddingRoundMedium:`0 18px`,paddingRoundLarge:`0 22px`,iconMarginTiny:`6px`,iconMarginSmall:`6px`,iconMarginMedium:`6px`,iconMarginLarge:`6px`,iconSizeTiny:`14px`,iconSizeSmall:`18px`,iconSizeMedium:`18px`,iconSizeLarge:`20px`,rippleDuration:`.6s`};function K(e){let{heightTiny:t,heightSmall:n,heightMedium:r,heightLarge:i,borderRadius:a,fontSizeTiny:o,fontSizeSmall:s,fontSizeMedium:c,fontSizeLarge:l,opacityDisabled:u,textColor2:d,textColor3:f,primaryColorHover:p,primaryColorPressed:m,borderColor:h,primaryColor:g,baseColor:_,infoColor:v,infoColorHover:y,infoColorPressed:b,successColor:x,successColorHover:S,successColorPressed:C,warningColor:w,warningColorHover:T,warningColorPressed:E,errorColor:D,errorColorHover:O,errorColorPressed:k,fontWeight:A,buttonColor2:j,buttonColor2Hover:M,buttonColor2Pressed:N,fontWeightStrong:P}=e;return Object.assign(Object.assign({},G),{heightTiny:t,heightSmall:n,heightMedium:r,heightLarge:i,borderRadiusTiny:a,borderRadiusSmall:a,borderRadiusMedium:a,borderRadiusLarge:a,fontSizeTiny:o,fontSizeSmall:s,fontSizeMedium:c,fontSizeLarge:l,opacityDisabled:u,colorOpacitySecondary:`0.16`,colorOpacitySecondaryHover:`0.22`,colorOpacitySecondaryPressed:`0.28`,colorSecondary:j,colorSecondaryHover:M,colorSecondaryPressed:N,colorTertiary:j,colorTertiaryHover:M,colorTertiaryPressed:N,colorQuaternary:`#0000`,colorQuaternaryHover:M,colorQuaternaryPressed:N,color:`#0000`,colorHover:`#0000`,colorPressed:`#0000`,colorFocus:`#0000`,colorDisabled:`#0000`,textColor:d,textColorTertiary:f,textColorHover:p,textColorPressed:m,textColorFocus:p,textColorDisabled:d,textColorText:d,textColorTextHover:p,textColorTextPressed:m,textColorTextFocus:p,textColorTextDisabled:d,textColorGhost:d,textColorGhostHover:p,textColorGhostPressed:m,textColorGhostFocus:p,textColorGhostDisabled:d,border:`1px solid ${h}`,borderHover:`1px solid ${p}`,borderPressed:`1px solid ${m}`,borderFocus:`1px solid ${p}`,borderDisabled:`1px solid ${h}`,rippleColor:g,colorPrimary:g,colorHoverPrimary:p,colorPressedPrimary:m,colorFocusPrimary:p,colorDisabledPrimary:g,textColorPrimary:_,textColorHoverPrimary:_,textColorPressedPrimary:_,textColorFocusPrimary:_,textColorDisabledPrimary:_,textColorTextPrimary:g,textColorTextHoverPrimary:p,textColorTextPressedPrimary:m,textColorTextFocusPrimary:p,textColorTextDisabledPrimary:d,textColorGhostPrimary:g,textColorGhostHoverPrimary:p,textColorGhostPressedPrimary:m,textColorGhostFocusPrimary:p,textColorGhostDisabledPrimary:g,borderPrimary:`1px solid ${g}`,borderHoverPrimary:`1px solid ${p}`,borderPressedPrimary:`1px solid ${m}`,borderFocusPrimary:`1px solid ${p}`,borderDisabledPrimary:`1px solid ${g}`,rippleColorPrimary:g,colorInfo:v,colorHoverInfo:y,colorPressedInfo:b,colorFocusInfo:y,colorDisabledInfo:v,textColorInfo:_,textColorHoverInfo:_,textColorPressedInfo:_,textColorFocusInfo:_,textColorDisabledInfo:_,textColorTextInfo:v,textColorTextHoverInfo:y,textColorTextPressedInfo:b,textColorTextFocusInfo:y,textColorTextDisabledInfo:d,textColorGhostInfo:v,textColorGhostHoverInfo:y,textColorGhostPressedInfo:b,textColorGhostFocusInfo:y,textColorGhostDisabledInfo:v,borderInfo:`1px solid ${v}`,borderHoverInfo:`1px solid ${y}`,borderPressedInfo:`1px solid ${b}`,borderFocusInfo:`1px solid ${y}`,borderDisabledInfo:`1px solid ${v}`,rippleColorInfo:v,colorSuccess:x,colorHoverSuccess:S,colorPressedSuccess:C,colorFocusSuccess:S,colorDisabledSuccess:x,textColorSuccess:_,textColorHoverSuccess:_,textColorPressedSuccess:_,textColorFocusSuccess:_,textColorDisabledSuccess:_,textColorTextSuccess:x,textColorTextHoverSuccess:S,textColorTextPressedSuccess:C,textColorTextFocusSuccess:S,textColorTextDisabledSuccess:d,textColorGhostSuccess:x,textColorGhostHoverSuccess:S,textColorGhostPressedSuccess:C,textColorGhostFocusSuccess:S,textColorGhostDisabledSuccess:x,borderSuccess:`1px solid ${x}`,borderHoverSuccess:`1px solid ${S}`,borderPressedSuccess:`1px solid ${C}`,borderFocusSuccess:`1px solid ${S}`,borderDisabledSuccess:`1px solid ${x}`,rippleColorSuccess:x,colorWarning:w,colorHoverWarning:T,colorPressedWarning:E,colorFocusWarning:T,colorDisabledWarning:w,textColorWarning:_,textColorHoverWarning:_,textColorPressedWarning:_,textColorFocusWarning:_,textColorDisabledWarning:_,textColorTextWarning:w,textColorTextHoverWarning:T,textColorTextPressedWarning:E,textColorTextFocusWarning:T,textColorTextDisabledWarning:d,textColorGhostWarning:w,textColorGhostHoverWarning:T,textColorGhostPressedWarning:E,textColorGhostFocusWarning:T,textColorGhostDisabledWarning:w,borderWarning:`1px solid ${w}`,borderHoverWarning:`1px solid ${T}`,borderPressedWarning:`1px solid ${E}`,borderFocusWarning:`1px solid ${T}`,borderDisabledWarning:`1px solid ${w}`,rippleColorWarning:w,colorError:D,colorHoverError:O,colorPressedError:k,colorFocusError:O,colorDisabledError:D,textColorError:_,textColorHoverError:_,textColorPressedError:_,textColorFocusError:_,textColorDisabledError:_,textColorTextError:D,textColorTextHoverError:O,textColorTextPressedError:k,textColorTextFocusError:O,textColorTextDisabledError:d,textColorGhostError:D,textColorGhostHoverError:O,textColorGhostPressedError:k,textColorGhostFocusError:O,textColorGhostDisabledError:D,borderError:`1px solid ${D}`,borderHoverError:`1px solid ${O}`,borderPressedError:`1px solid ${k}`,borderFocusError:`1px solid ${O}`,borderDisabledError:`1px solid ${D}`,rippleColorError:D,waveOpacity:`0.6`,fontWeight:A,fontWeightStrong:P})}var q={name:`Button`,common:E,self:K},J=m([g(`button`,`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[p(`color`,[f(`border`,{borderColor:`var(--n-border-color)`}),p(`disabled`,[f(`border`,{borderColor:`var(--n-border-color-disabled)`})]),_(`disabled`,[m(`&:focus`,[f(`state-border`,{borderColor:`var(--n-border-color-focus)`})]),m(`&:hover`,[f(`state-border`,{borderColor:`var(--n-border-color-hover)`})]),m(`&:active`,[f(`state-border`,{borderColor:`var(--n-border-color-pressed)`})]),p(`pressed`,[f(`state-border`,{borderColor:`var(--n-border-color-pressed)`})])])]),p(`disabled`,{backgroundColor:`var(--n-color-disabled)`,color:`var(--n-text-color-disabled)`},[f(`border`,{border:`var(--n-border-disabled)`})]),_(`disabled`,[m(`&:focus`,{backgroundColor:`var(--n-color-focus)`,color:`var(--n-text-color-focus)`},[f(`state-border`,{border:`var(--n-border-focus)`})]),m(`&:hover`,{backgroundColor:`var(--n-color-hover)`,color:`var(--n-text-color-hover)`},[f(`state-border`,{border:`var(--n-border-hover)`})]),m(`&:active`,{backgroundColor:`var(--n-color-pressed)`,color:`var(--n-text-color-pressed)`},[f(`state-border`,{border:`var(--n-border-pressed)`})]),p(`pressed`,{backgroundColor:`var(--n-color-pressed)`,color:`var(--n-text-color-pressed)`},[f(`state-border`,{border:`var(--n-border-pressed)`})])]),p(`loading`,`cursor: wait;`),g(`base-wave`,`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[p(`active`,{zIndex:1,animationName:`button-wave-spread, button-wave-opacity`})]),v&&`MozBoxSizing`in document.createElement(`div`).style?m(`&::moz-focus-inner`,{border:0}):null,f(`border, state-border`,`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),f(`border`,`
 border: var(--n-border);
 `),f(`state-border`,`
 border: var(--n-border);
 border-color: #0000;
 z-index: 1;
 `),f(`icon`,`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[g(`icon-slot`,`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[y({top:`50%`,originalTransform:`translateY(-50%)`})]),z()]),f(`content`,`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[m(`~`,[f(`icon`,{margin:`var(--n-icon-margin)`,marginRight:0})])]),p(`block`,`
 display: flex;
 width: 100%;
 `),p(`dashed`,[f(`border, state-border`,{borderStyle:`dashed !important`})]),p(`disabled`,{cursor:`not-allowed`,opacity:`var(--n-opacity-disabled)`})]),m(`@keyframes button-wave-spread`,{from:{boxShadow:`0 0 0.5px 0 var(--n-ripple-color)`},to:{boxShadow:`0 0 0.5px 4.5px var(--n-ripple-color)`}}),m(`@keyframes button-wave-opacity`,{from:{opacity:`var(--n-wave-opacity)`},to:{opacity:0}})]),Y=n({name:`Button`,props:Object.assign(Object.assign({},b.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:`button`},type:{type:String,default:`default`},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:`left`},attrType:{type:String,default:`button`},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!A},spinProps:Object}),slots:Object,setup(e){let n=o(null),r=o(null),i=o(!1),a=d(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),s=t(W,{}),{inlineThemeDisabled:l,mergedClsPrefixRef:f,mergedRtlRef:p,mergedComponentPropsRef:m}=S(e),{mergedSizeRef:g}=O({},{defaultSize:`medium`,mergedSize:t=>{let{size:n}=e;if(n)return n;let{size:r}=s;if(r)return r;let{mergedSize:i}=t||{};return i?i.value:m?.value?.Button?.size||`medium`}}),_=c(()=>e.focusable&&!e.disabled),v=t=>{var r;_.value||t.preventDefault(),!e.nativeFocusBehavior&&(t.preventDefault(),!e.disabled&&_.value&&((r=n.value)==null||r.focus({preventScroll:!0})))},y=t=>{var n;if(!e.disabled&&!e.loading){let{onClick:i}=e;i&&u(i,t),e.text||(n=r.value)==null||n.play()}},C=t=>{switch(t.key){case`Enter`:if(!e.keyboard)return;i.value=!1}},w=t=>{switch(t.key){case`Enter`:if(!e.keyboard||e.loading){t.preventDefault();return}i.value=!0}},E=()=>{i.value=!1},D=b(`Button`,`-button`,J,q,e,f),k=x(`Button`,p,f),A=c(()=>{let{common:{cubicBezierEaseInOut:t,cubicBezierEaseOut:n},self:r}=D.value,{rippleDuration:i,opacityDisabled:a,fontWeight:o,fontWeightStrong:s}=r,c=g.value,{dashed:l,type:u,ghost:d,text:f,color:p,round:m,circle:_,textColor:v,secondary:y,tertiary:b,quaternary:x,strong:S}=e,C={"--n-font-weight":S?s:o},w={"--n-color":`initial`,"--n-color-hover":`initial`,"--n-color-pressed":`initial`,"--n-color-focus":`initial`,"--n-color-disabled":`initial`,"--n-ripple-color":`initial`,"--n-text-color":`initial`,"--n-text-color-hover":`initial`,"--n-text-color-pressed":`initial`,"--n-text-color-focus":`initial`,"--n-text-color-disabled":`initial`},T=u===`tertiary`,E=u===`default`,O=T?`default`:u;if(f){let e=v||p;w={"--n-color":`#0000`,"--n-color-hover":`#0000`,"--n-color-pressed":`#0000`,"--n-color-focus":`#0000`,"--n-color-disabled":`#0000`,"--n-ripple-color":`#0000`,"--n-text-color":e||r[P(`textColorText`,O)],"--n-text-color-hover":e?H(e):r[P(`textColorTextHover`,O)],"--n-text-color-pressed":e?U(e):r[P(`textColorTextPressed`,O)],"--n-text-color-focus":e?H(e):r[P(`textColorTextHover`,O)],"--n-text-color-disabled":e||r[P(`textColorTextDisabled`,O)]}}else if(d||l){let e=v||p;w={"--n-color":`#0000`,"--n-color-hover":`#0000`,"--n-color-pressed":`#0000`,"--n-color-focus":`#0000`,"--n-color-disabled":`#0000`,"--n-ripple-color":p||r[P(`rippleColor`,O)],"--n-text-color":e||r[P(`textColorGhost`,O)],"--n-text-color-hover":e?H(e):r[P(`textColorGhostHover`,O)],"--n-text-color-pressed":e?U(e):r[P(`textColorGhostPressed`,O)],"--n-text-color-focus":e?H(e):r[P(`textColorGhostHover`,O)],"--n-text-color-disabled":e||r[P(`textColorGhostDisabled`,O)]}}else if(y){let e=E?r.textColor:T?r.textColorTertiary:r[P(`color`,O)],t=p||e,n=u!==`default`&&u!==`tertiary`;w={"--n-color":n?h(t,{alpha:Number(r.colorOpacitySecondary)}):r.colorSecondary,"--n-color-hover":n?h(t,{alpha:Number(r.colorOpacitySecondaryHover)}):r.colorSecondaryHover,"--n-color-pressed":n?h(t,{alpha:Number(r.colorOpacitySecondaryPressed)}):r.colorSecondaryPressed,"--n-color-focus":n?h(t,{alpha:Number(r.colorOpacitySecondaryHover)}):r.colorSecondaryHover,"--n-color-disabled":r.colorSecondary,"--n-ripple-color":`#0000`,"--n-text-color":t,"--n-text-color-hover":t,"--n-text-color-pressed":t,"--n-text-color-focus":t,"--n-text-color-disabled":t}}else if(b||x){let e=E?r.textColor:T?r.textColorTertiary:r[P(`color`,O)],t=p||e;b?(w[`--n-color`]=r.colorTertiary,w[`--n-color-hover`]=r.colorTertiaryHover,w[`--n-color-pressed`]=r.colorTertiaryPressed,w[`--n-color-focus`]=r.colorSecondaryHover,w[`--n-color-disabled`]=r.colorTertiary):(w[`--n-color`]=r.colorQuaternary,w[`--n-color-hover`]=r.colorQuaternaryHover,w[`--n-color-pressed`]=r.colorQuaternaryPressed,w[`--n-color-focus`]=r.colorQuaternaryHover,w[`--n-color-disabled`]=r.colorQuaternary),w[`--n-ripple-color`]=`#0000`,w[`--n-text-color`]=t,w[`--n-text-color-hover`]=t,w[`--n-text-color-pressed`]=t,w[`--n-text-color-focus`]=t,w[`--n-text-color-disabled`]=t}else w={"--n-color":p||r[P(`color`,O)],"--n-color-hover":p?H(p):r[P(`colorHover`,O)],"--n-color-pressed":p?U(p):r[P(`colorPressed`,O)],"--n-color-focus":p?H(p):r[P(`colorFocus`,O)],"--n-color-disabled":p||r[P(`colorDisabled`,O)],"--n-ripple-color":p||r[P(`rippleColor`,O)],"--n-text-color":v||(p?r.textColorPrimary:T?r.textColorTertiary:r[P(`textColor`,O)]),"--n-text-color-hover":v||(p?r.textColorHoverPrimary:r[P(`textColorHover`,O)]),"--n-text-color-pressed":v||(p?r.textColorPressedPrimary:r[P(`textColorPressed`,O)]),"--n-text-color-focus":v||(p?r.textColorFocusPrimary:r[P(`textColorFocus`,O)]),"--n-text-color-disabled":v||(p?r.textColorDisabledPrimary:r[P(`textColorDisabled`,O)])};let k={"--n-border":`initial`,"--n-border-hover":`initial`,"--n-border-pressed":`initial`,"--n-border-focus":`initial`,"--n-border-disabled":`initial`};k=f?{"--n-border":`none`,"--n-border-hover":`none`,"--n-border-pressed":`none`,"--n-border-focus":`none`,"--n-border-disabled":`none`}:{"--n-border":r[P(`border`,O)],"--n-border-hover":r[P(`borderHover`,O)],"--n-border-pressed":r[P(`borderPressed`,O)],"--n-border-focus":r[P(`borderFocus`,O)],"--n-border-disabled":r[P(`borderDisabled`,O)]};let{[P(`height`,c)]:A,[P(`fontSize`,c)]:j,[P(`padding`,c)]:M,[P(`paddingRound`,c)]:N,[P(`iconSize`,c)]:F,[P(`borderRadius`,c)]:I,[P(`iconMargin`,c)]:L,waveOpacity:R}=r,z={"--n-width":_&&!f?A:`initial`,"--n-height":f?`initial`:A,"--n-font-size":j,"--n-padding":_||f?`initial`:m?N:M,"--n-icon-size":F,"--n-icon-margin":L,"--n-border-radius":f?`initial`:_||m?A:I};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":t,"--n-bezier-ease-out":n,"--n-ripple-duration":i,"--n-opacity-disabled":a,"--n-wave-opacity":R},C),w),k),z)}),j=l?T(`button`,c(()=>{let t=``,{dashed:n,type:r,ghost:i,text:a,color:o,round:s,circle:c,textColor:l,secondary:u,tertiary:d,quaternary:f,strong:p}=e;n&&(t+=`a`),i&&(t+=`b`),a&&(t+=`c`),s&&(t+=`d`),c&&(t+=`e`),u&&(t+=`f`),d&&(t+=`g`),f&&(t+=`h`),p&&(t+=`i`),o&&(t+=`j${I(o)}`),l&&(t+=`k${I(l)}`);let{value:m}=g;return t+=`l${m[0]}`,t+=`m${r[0]}`,t}),A,e):void 0;return{selfElRef:n,waveElRef:r,mergedClsPrefix:f,mergedFocusable:_,mergedSize:g,showBorder:a,enterPressed:i,rtlEnabled:k,handleMousedown:v,handleKeydown:w,handleBlur:E,handleKeyup:C,handleClick:y,customColorCssVars:c(()=>{let{color:t}=e;if(!t)return null;let n=H(t);return{"--n-border-color":t,"--n-border-color-hover":n,"--n-border-color-pressed":U(t),"--n-border-color-focus":n,"--n-border-color-disabled":t}}),cssVars:l?void 0:A,themeClass:j?.themeClass,onRender:j?.onRender}},render(){let{mergedClsPrefix:e,tag:t,onRender:n}=this;n?.();let i=N(this.$slots.default,t=>t&&r(`span`,{class:`${e}-button__content`},t));return r(t,{ref:`selfElRef`,class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement===`right`&&i,r(L,{width:!0},{default:()=>N(this.$slots.icon,t=>(this.loading||this.renderIcon||t)&&r(`span`,{class:`${e}-button__icon`,style:{margin:M(this.$slots.default)?`0`:``}},r(D,null,{default:()=>this.loading?r(k,Object.assign({clsPrefix:e,key:`loading`,class:`${e}-icon-slot`,strokeWidth:20},this.spinProps)):r(`div`,{key:`icon`,class:`${e}-icon-slot`,role:`none`},this.renderIcon?this.renderIcon():t)})))}),this.iconPlacement===`left`&&i,this.text?null:r(V,{ref:`waveElRef`,clsPrefix:e}),this.showBorder?r(`div`,{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?r(`div`,{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),X=Y;export{L as a,K as i,X as n,I as o,q as r,Y as t};