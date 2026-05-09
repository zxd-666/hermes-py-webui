import{n as e,t}from"./FormItem-CQJ1OfxR.js";import{t as n}from"./InputNumber-CI2ozvJK.js";import{t as r}from"./Switch-BFwZSxuX.js";import{$r as i,A as a,Ai as o,Ar as s,B as c,Di as l,Fr as u,J as d,Kr as f,L as p,Qr as m,Rr as h,Si as g,Sr as _,Xr as v,ai as y,bi as b,br as x,di as S,hi as C,j as w,m as T,ni as E,pi as D,ri as O,ti as k,wi as A,xn as j,xr as M,xt as N,y as P}from"./index-CL_eAu9l.js";var F=M(`input-group`,`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[x(`>`,[M(`input`,[x(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),x(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),M(`button`,[x(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[_(`state-border, border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),x(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[_(`state-border, border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),x(`*`,[x(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[x(`>`,[M(`input`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),M(`base-selection`,[M(`base-selection-label`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),M(`base-selection-tags`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),_(`box-shadow, border, state-border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),x(`&:not(:first-child)`,`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[x(`>`,[M(`input`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),M(`base-selection`,[M(`base-selection-label`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),M(`base-selection-tags`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),_(`box-shadow, border, state-border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),I=O({name:`InputGroup`,props:{},setup(e){let{mergedClsPrefixRef:t}=j(e);return N(`-input-group`,F,t),{mergedClsPrefix:t}},render(){let{mergedClsPrefix:e}=this;return y(`div`,{class:`${e}-input-group`},this.$slots)}});async function L(){return(await u(`/api/hermes/gateways`)).gateways}async function R(e){return(await u(`/api/hermes/gateways/${e}/start`,{method:`POST`})).gateway}async function z(e){await u(`/api/hermes/gateways/${e}/stop`,{method:`POST`})}async function B(e,t){return(await u(`/api/hermes/gateways/${e}/settings`,{method:`PUT`,body:JSON.stringify(t)})).gateway}var V=h(`gateways`,()=>{let e=A([]),t=A(!1);async function n(){t.value=!0;try{let t=await L();e.value=Array.isArray(t)?t:Object.values(t||{})}finally{t.value=!1}}async function r(n){t.value=!0;try{await R(n);for(let t=0;t<15;t++){await new Promise(e=>setTimeout(e,500));let t=await L();if(e.value=Array.isArray(t)?t:Object.values(t||{}),e.value.find(e=>e.profile===n)?.running)return!0}return!1}finally{t.value=!1}}async function i(n){t.value=!0;try{await z(n);for(let t=0;t<10;t++){await new Promise(e=>setTimeout(e,500));let t=await L();if(e.value=Array.isArray(t)?t:Object.values(t||{}),!e.value.find(e=>e.profile===n)?.running)return!0}return!1}finally{t.value=!1}}async function a(t,n){let r=await B(t,n),i=e.value.findIndex(e=>e.profile===t);i>=0&&(e.value[i]=r)}return{gateways:e,loading:t,fetchStatus:n,start:r,stop:i,updateSettings:a}}),H={class:`gateways-view`},U={class:`page-header`},W={class:`header-title`},G={class:`gateways-content`},K={key:0,class:`empty-state`},q={key:1,class:`gateway-list`},J={class:`gateway-info`},Y={class:`gateway-name`},X={class:`gateway-meta`},Z={class:`meta-item`},Q={key:0,class:`meta-item`},$={class:`gateway-actions`},ee=[`title`],te={class:`pii-label`},ne=T(O({__name:`GatewaysView`,setup(u){let{t:h}=s(),_=a(),y=V(),x=A(!1),T=A(``),O=g({mode:`both`,idle_minutes:1440,at_hour:4});function j(e){T.value=e.profile,O.mode=e.session_reset?.mode||`both`,O.idle_minutes=e.session_reset?.idle_minutes||1440,O.at_hour=e.session_reset?.at_hour??4,x.value=!0}async function M(){try{await y.updateSettings(T.value,{session_reset:{mode:O.mode,idle_minutes:O.idle_minutes,at_hour:O.at_hour}}),_.success(h(`settings.saved`)),x.value=!1}catch{_.error(h(`settings.saveFailed`))}}S(()=>{y.fetchStatus()});async function N(e,t){try{t?await y.stop(e)?_.success(`${h(`gateways.stopped`)}: ${e}`):_.error(`${e} ${h(`gateways.stopFailed`)}`):await y.start(e)?_.success(`${h(`gateways.started`)}: ${e}`):_.error(`${e} ${h(`gateways.startFailed`)}`)}catch(e){_.error(e.message)}}async function F(e,t){try{await y.updateSettings(e,{privacy:{redact_pii:t}})}catch(e){_.error(e.message)}}return(a,s)=>(D(),i(`div`,H,[v(`header`,U,[v(`h2`,W,o(l(h)(`gateways.title`)),1)]),v(`div`,G,[E(l(P),{show:l(y).loading,size:`large`},{default:b(()=>[l(y).gateways.length===0?(D(),i(`div`,K,o(l(h)(`common.noData`)),1)):(D(),i(`div`,q,[(D(!0),i(f,null,C(l(y).gateways,e=>(D(),i(`div`,{key:e.profile,class:`gateway-card`},[v(`div`,J,[v(`div`,Y,[k(o(e.profile)+` `,1),E(l(d),{type:e.running?`success`:`default`,size:`tiny`,round:``,class:`status-tag`},{default:b(()=>[k(o(e.running?l(h)(`gateways.running`):l(h)(`gateways.stopped`)),1)]),_:2},1032,[`type`])]),v(`div`,X,[v(`span`,Z,o(e.host)+`:`+o(e.port),1),e.pid?(D(),i(`span`,Q,`PID: `+o(e.pid),1)):m(``,!0)])]),v(`div`,$,[v(`div`,{class:`pii-toggle`,title:l(h)(`gateways.piiToggleHint`)},[v(`span`,te,o(l(h)(`settings.privacy.redactPii`)),1),E(l(r),{size:`small`,value:e.redact_pii,"onUpdate:value":t=>F(e.profile,t)},null,8,[`value`,`onUpdate:value`])],8,ee),E(l(c),{size:`small`,quaternary:``,onClick:t=>j(e)},{default:b(()=>[k(o(l(h)(`gateways.sessionSettings`)),1)]),_:1},8,[`onClick`]),E(l(c),{size:`small`,type:e.running?`warning`:`primary`,round:``,onClick:t=>N(e.profile,e.running)},{default:b(()=>[k(o(e.running?l(h)(`common.stop`):l(h)(`common.start`)),1)]),_:2},1032,[`type`,`onClick`])])]))),128))]))]),_:1},8,[`show`])]),E(l(w),{show:x.value,"onUpdate:show":s[4]||=e=>x.value=e,preset:`dialog`,title:l(h)(`gateways.sessionSettings`),"show-icon":!1,style:{width:`420px`}},{action:b(()=>[E(l(c),{size:`small`,onClick:s[3]||=e=>x.value=!1},{default:b(()=>[k(o(l(h)(`common.cancel`)),1)]),_:1}),E(l(c),{size:`small`,type:`primary`,onClick:M},{default:b(()=>[k(o(l(h)(`common.save`)),1)]),_:1})]),default:b(()=>[E(l(e),{"label-placement":`left`,"label-width":`110`},{default:b(()=>[E(l(t),{label:l(h)(`settings.session.mode`)},{default:b(()=>[E(l(p),{value:O.mode,"onUpdate:value":s[0]||=e=>O.mode=e,options:[{label:l(h)(`settings.session.modeBoth`),value:`both`},{label:l(h)(`settings.session.modeIdle`),value:`idle`},{label:l(h)(`settings.session.modeHourly`),value:`hourly`}],size:`small`},null,8,[`value`,`options`])]),_:1},8,[`label`]),E(l(t),{label:l(h)(`settings.session.idleMinutes`)},{default:b(()=>[E(l(n),{value:O.idle_minutes,"onUpdate:value":s[1]||=e=>O.idle_minutes=e,min:10,max:10080,step:30,size:`small`,style:{width:`100%`}},null,8,[`value`])]),_:1},8,[`label`]),E(l(t),{label:l(h)(`settings.session.atHour`)},{default:b(()=>[E(l(I),null,{default:b(()=>[E(l(n),{value:O.at_hour,"onUpdate:value":s[2]||=e=>O.at_hour=e,min:0,max:23,step:1,size:`small`,style:{width:`100%`}},null,8,[`value`])]),_:1})]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`])]))}}),[[`__scopeId`,`data-v-1e30fa48`]]);export{ne as default};