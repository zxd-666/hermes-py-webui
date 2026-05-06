import{n as e,t}from"./FormItem-ELX5_gkN.js";import{t as n}from"./InputNumber-CmS3U0xO.js";import{t as r}from"./Switch-iQVmx_si.js";import{$r as i,F as a,Ir as o,Jr as s,K as c,Nr as l,O as u,Oi as d,Or as f,R as p,Si as m,Ti as h,Wr as g,Xr as _,Zr as v,_ as y,bi as b,br as x,di as S,ei as C,f as w,k as T,li as E,pi as D,ri as O,ti as k,vi as A,vr as j,yn as M,yr as N,yt as P}from"./index-Cjkiv8U3.js";var F=N(`input-group`,`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[j(`>`,[N(`input`,[j(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),j(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),N(`button`,[j(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[x(`state-border, border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),j(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[x(`state-border, border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),j(`*`,[j(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[j(`>`,[N(`input`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),N(`base-selection`,[N(`base-selection-label`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),N(`base-selection-tags`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),x(`box-shadow, border, state-border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),j(`&:not(:first-child)`,`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[j(`>`,[N(`input`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),N(`base-selection`,[N(`base-selection-label`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),N(`base-selection-tags`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),x(`box-shadow, border, state-border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),I=k({name:`InputGroup`,props:{},setup(e){let{mergedClsPrefixRef:t}=M(e);return P(`-input-group`,F,t),{mergedClsPrefix:t}},render(){let{mergedClsPrefix:e}=this;return O(`div`,{class:`${e}-input-group`},this.$slots)}});async function L(){return(await l(`/api/hermes/gateways`)).gateways}async function R(e){return(await l(`/api/hermes/gateways/${e}/start`,{method:`POST`})).gateway}async function z(e){await l(`/api/hermes/gateways/${e}/stop`,{method:`POST`})}async function B(e,t){return(await l(`/api/hermes/gateways/${e}/settings`,{method:`PUT`,body:JSON.stringify(t)})).gateway}var V=o(`gateways`,()=>{let e=m([]),t=m(!1);async function n(){t.value=!0;try{let t=await L();e.value=Array.isArray(t)?t:Object.values(t||{})}finally{t.value=!1}}async function r(n){t.value=!0;try{await R(n);for(let t=0;t<15;t++){await new Promise(e=>setTimeout(e,500));let t=await L();if(e.value=Array.isArray(t)?t:Object.values(t||{}),e.value.find(e=>e.profile===n)?.running)return!0}return!1}finally{t.value=!1}}async function i(n){t.value=!0;try{await z(n);for(let t=0;t<10;t++){await new Promise(e=>setTimeout(e,500));let t=await L();if(e.value=Array.isArray(t)?t:Object.values(t||{}),!e.value.find(e=>e.profile===n)?.running)return!0}return!1}finally{t.value=!1}}async function a(t,n){let r=await B(t,n),i=e.value.findIndex(e=>e.profile===t);i>=0&&(e.value[i]=r)}return{gateways:e,loading:t,fetchStatus:n,start:r,stop:i,updateSettings:a}}),H={class:`gateways-view`},U={class:`page-header`},W={class:`header-title`},G={class:`gateways-content`},K={key:0,class:`empty-state`},q={key:1,class:`gateway-list`},J={class:`gateway-info`},Y={class:`gateway-name`},X={class:`gateway-meta`},Z={class:`meta-item`},Q={key:0,class:`meta-item`},$={class:`gateway-actions`},ee=[`title`],te={class:`pii-label`},ne=w(k({__name:`GatewaysView`,setup(o){let{t:l}=f(),x=u(),w=V(),O=m(!1),k=m(``),j=b({mode:`both`,idle_minutes:1440,at_hour:4});function M(e){k.value=e.profile,j.mode=e.session_reset?.mode||`both`,j.idle_minutes=e.session_reset?.idle_minutes||1440,j.at_hour=e.session_reset?.at_hour??4,O.value=!0}async function N(){try{await w.updateSettings(k.value,{session_reset:{mode:j.mode,idle_minutes:j.idle_minutes,at_hour:j.at_hour}}),x.success(l(`settings.saved`)),O.value=!1}catch{x.error(l(`settings.saveFailed`))}}E(()=>{w.fetchStatus()});async function P(e,t){try{t?await w.stop(e)?x.success(`${l(`gateways.stopped`)}: ${e}`):x.error(`${e} ${l(`gateways.stopFailed`)}`):await w.start(e)?x.success(`${l(`gateways.started`)}: ${e}`):x.error(`${e} ${l(`gateways.startFailed`)}`)}catch(e){x.error(e.message)}}async function F(e,t){try{await w.updateSettings(e,{privacy:{redact_pii:t}})}catch(e){x.error(e.message)}}return(o,u)=>(S(),v(`div`,H,[s(`header`,U,[s(`h2`,W,d(h(l)(`gateways.title`)),1)]),s(`div`,G,[C(h(y),{show:h(w).loading,size:`large`},{default:A(()=>[h(w).gateways.length===0?(S(),v(`div`,K,d(h(l)(`common.noData`)),1)):(S(),v(`div`,q,[(S(!0),v(g,null,D(h(w).gateways,e=>(S(),v(`div`,{key:e.profile,class:`gateway-card`},[s(`div`,J,[s(`div`,Y,[i(d(e.profile)+` `,1),C(h(c),{type:e.running?`success`:`default`,size:`tiny`,round:``,class:`status-tag`},{default:A(()=>[i(d(e.running?h(l)(`gateways.running`):h(l)(`gateways.stopped`)),1)]),_:2},1032,[`type`])]),s(`div`,X,[s(`span`,Z,d(e.host)+`:`+d(e.port),1),e.pid?(S(),v(`span`,Q,`PID: `+d(e.pid),1)):_(``,!0)])]),s(`div`,$,[s(`div`,{class:`pii-toggle`,title:h(l)(`gateways.piiToggleHint`)},[s(`span`,te,d(h(l)(`settings.privacy.redactPii`)),1),C(h(r),{size:`small`,value:e.redact_pii,"onUpdate:value":t=>F(e.profile,t)},null,8,[`value`,`onUpdate:value`])],8,ee),C(h(p),{size:`small`,quaternary:``,onClick:t=>M(e)},{default:A(()=>[i(d(h(l)(`gateways.sessionSettings`)),1)]),_:1},8,[`onClick`]),C(h(p),{size:`small`,type:e.running?`warning`:`primary`,round:``,onClick:t=>P(e.profile,e.running)},{default:A(()=>[i(d(e.running?h(l)(`common.stop`):h(l)(`common.start`)),1)]),_:2},1032,[`type`,`onClick`])])]))),128))]))]),_:1},8,[`show`])]),C(h(T),{show:O.value,"onUpdate:show":u[4]||=e=>O.value=e,preset:`dialog`,title:h(l)(`gateways.sessionSettings`),"show-icon":!1,style:{width:`420px`}},{action:A(()=>[C(h(p),{size:`small`,onClick:u[3]||=e=>O.value=!1},{default:A(()=>[i(d(h(l)(`common.cancel`)),1)]),_:1}),C(h(p),{size:`small`,type:`primary`,onClick:N},{default:A(()=>[i(d(h(l)(`common.save`)),1)]),_:1})]),default:A(()=>[C(h(e),{"label-placement":`left`,"label-width":`110`},{default:A(()=>[C(h(t),{label:h(l)(`settings.session.mode`)},{default:A(()=>[C(h(a),{value:j.mode,"onUpdate:value":u[0]||=e=>j.mode=e,options:[{label:h(l)(`settings.session.modeBoth`),value:`both`},{label:h(l)(`settings.session.modeIdle`),value:`idle`},{label:h(l)(`settings.session.modeHourly`),value:`hourly`}],size:`small`},null,8,[`value`,`options`])]),_:1},8,[`label`]),C(h(t),{label:h(l)(`settings.session.idleMinutes`)},{default:A(()=>[C(h(n),{value:j.idle_minutes,"onUpdate:value":u[1]||=e=>j.idle_minutes=e,min:10,max:10080,step:30,size:`small`,style:{width:`100%`}},null,8,[`value`])]),_:1},8,[`label`]),C(h(t),{label:h(l)(`settings.session.atHour`)},{default:A(()=>[C(h(I),null,{default:A(()=>[C(h(n),{value:j.at_hour,"onUpdate:value":u[2]||=e=>j.at_hour=e,min:0,max:23,step:1,size:`small`,style:{width:`100%`}},null,8,[`value`])]),_:1})]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`])]))}}),[[`__scopeId`,`data-v-1e30fa48`]]);export{ne as default};