import{n as e,t}from"./FormItem-Dq9tJy5s.js";import{t as n}from"./InputNumber-C_7Vjtxk.js";import{t as r}from"./Switch-D19hfKXJ.js";import{A as i,Ci as a,Ei as o,Gr as s,I as c,Lr as l,Pr as u,Qr as d,Yr as f,Zr as p,bn as m,br as h,bt as g,ei as _,fi as v,ii as y,k as b,ki as x,kr as S,mi as C,ni as w,p as T,q as E,ti as D,ui as O,v as k,xi as A,xr as j,yi as M,yr as N,z as P}from"./index-Cbnhqdt7.js";var F=h(`input-group`,`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[N(`>`,[h(`input`,[N(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),N(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),h(`button`,[N(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[j(`state-border, border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),N(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[j(`state-border, border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),N(`*`,[N(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[N(`>`,[h(`input`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),h(`base-selection`,[h(`base-selection-label`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),h(`base-selection-tags`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),j(`box-shadow, border, state-border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),N(`&:not(:first-child)`,`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[N(`>`,[h(`input`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),h(`base-selection`,[h(`base-selection-label`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),h(`base-selection-tags`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),j(`box-shadow, border, state-border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),I=w({name:`InputGroup`,props:{},setup(e){let{mergedClsPrefixRef:t}=m(e);return g(`-input-group`,F,t),{mergedClsPrefix:t}},render(){let{mergedClsPrefix:e}=this;return y(`div`,{class:`${e}-input-group`},this.$slots)}});async function L(){return(await u(`/api/hermes/gateways`)).gateways}async function R(e){return(await u(`/api/hermes/gateways/${e}/start`,{method:`POST`})).gateway}async function z(e){await u(`/api/hermes/gateways/${e}/stop`,{method:`POST`})}async function B(e,t){return(await u(`/api/hermes/gateways/${e}/settings`,{method:`PUT`,body:JSON.stringify(t)})).gateway}var V=l(`gateways`,()=>{let e=a([]),t=a(!1);async function n(){t.value=!0;try{let t=await L();e.value=Array.isArray(t)?t:Object.values(t||{})}finally{t.value=!1}}async function r(n){t.value=!0;try{await R(n);for(let t=0;t<15;t++){await new Promise(e=>setTimeout(e,500));let t=await L();if(e.value=Array.isArray(t)?t:Object.values(t||{}),e.value.find(e=>e.profile===n)?.running)return!0}return!1}finally{t.value=!1}}async function i(n){t.value=!0;try{await z(n);for(let t=0;t<10;t++){await new Promise(e=>setTimeout(e,500));let t=await L();if(e.value=Array.isArray(t)?t:Object.values(t||{}),!e.value.find(e=>e.profile===n)?.running)return!0}return!1}finally{t.value=!1}}async function o(t,n){let r=await B(t,n),i=e.value.findIndex(e=>e.profile===t);i>=0&&(e.value[i]=r)}return{gateways:e,loading:t,fetchStatus:n,start:r,stop:i,updateSettings:o}}),H={class:`gateways-view`},U={class:`page-header`},W={class:`header-title`},G={class:`gateways-content`},K={key:0,class:`empty-state`},q={key:1,class:`gateway-list`},J={class:`gateway-info`},Y={class:`gateway-name`},X={class:`gateway-meta`},Z={class:`meta-item`},Q={key:0,class:`meta-item`},$={class:`gateway-actions`},ee=[`title`],te={class:`pii-label`},ne=T(w({__name:`GatewaysView`,setup(l){let{t:u}=S(),m=b(),h=V(),g=a(!1),y=a(``),w=A({mode:`both`,idle_minutes:1440,at_hour:4});function T(e){y.value=e.profile,w.mode=e.session_reset?.mode||`both`,w.idle_minutes=e.session_reset?.idle_minutes||1440,w.at_hour=e.session_reset?.at_hour??4,g.value=!0}async function j(){try{await h.updateSettings(y.value,{session_reset:{mode:w.mode,idle_minutes:w.idle_minutes,at_hour:w.at_hour}}),m.success(u(`settings.saved`)),g.value=!1}catch{m.error(u(`settings.saveFailed`))}}O(()=>{h.fetchStatus()});async function N(e,t){try{t?await h.stop(e)?m.success(`${u(`gateways.stopped`)}: ${e}`):m.error(`${e} ${u(`gateways.stopFailed`)}`):await h.start(e)?m.success(`${u(`gateways.started`)}: ${e}`):m.error(`${e} ${u(`gateways.startFailed`)}`)}catch(e){m.error(e.message)}}async function F(e,t){try{await h.updateSettings(e,{privacy:{redact_pii:t}})}catch(e){m.error(e.message)}}return(a,l)=>(v(),d(`div`,H,[f(`header`,U,[f(`h2`,W,x(o(u)(`gateways.title`)),1)]),f(`div`,G,[D(o(k),{show:o(h).loading,size:`large`},{default:M(()=>[o(h).gateways.length===0?(v(),d(`div`,K,x(o(u)(`common.noData`)),1)):(v(),d(`div`,q,[(v(!0),d(s,null,C(o(h).gateways,e=>(v(),d(`div`,{key:e.profile,class:`gateway-card`},[f(`div`,J,[f(`div`,Y,[_(x(e.profile)+` `,1),D(o(E),{type:e.running?`success`:`default`,size:`tiny`,round:``,class:`status-tag`},{default:M(()=>[_(x(e.running?o(u)(`gateways.running`):o(u)(`gateways.stopped`)),1)]),_:2},1032,[`type`])]),f(`div`,X,[f(`span`,Z,x(e.host)+`:`+x(e.port),1),e.pid?(v(),d(`span`,Q,`PID: `+x(e.pid),1)):p(``,!0)])]),f(`div`,$,[f(`div`,{class:`pii-toggle`,title:o(u)(`gateways.piiToggleHint`)},[f(`span`,te,x(o(u)(`settings.privacy.redactPii`)),1),D(o(r),{size:`small`,value:e.redact_pii,"onUpdate:value":t=>F(e.profile,t)},null,8,[`value`,`onUpdate:value`])],8,ee),D(o(P),{size:`small`,quaternary:``,onClick:t=>T(e)},{default:M(()=>[_(x(o(u)(`gateways.sessionSettings`)),1)]),_:1},8,[`onClick`]),D(o(P),{size:`small`,type:e.running?`warning`:`primary`,round:``,onClick:t=>N(e.profile,e.running)},{default:M(()=>[_(x(e.running?o(u)(`common.stop`):o(u)(`common.start`)),1)]),_:2},1032,[`type`,`onClick`])])]))),128))]))]),_:1},8,[`show`])]),D(o(i),{show:g.value,"onUpdate:show":l[4]||=e=>g.value=e,preset:`dialog`,title:o(u)(`gateways.sessionSettings`),"show-icon":!1,style:{width:`420px`}},{action:M(()=>[D(o(P),{size:`small`,onClick:l[3]||=e=>g.value=!1},{default:M(()=>[_(x(o(u)(`common.cancel`)),1)]),_:1}),D(o(P),{size:`small`,type:`primary`,onClick:j},{default:M(()=>[_(x(o(u)(`common.save`)),1)]),_:1})]),default:M(()=>[D(o(e),{"label-placement":`left`,"label-width":`110`},{default:M(()=>[D(o(t),{label:o(u)(`settings.session.mode`)},{default:M(()=>[D(o(c),{value:w.mode,"onUpdate:value":l[0]||=e=>w.mode=e,options:[{label:o(u)(`settings.session.modeBoth`),value:`both`},{label:o(u)(`settings.session.modeIdle`),value:`idle`},{label:o(u)(`settings.session.modeHourly`),value:`hourly`}],size:`small`},null,8,[`value`,`options`])]),_:1},8,[`label`]),D(o(t),{label:o(u)(`settings.session.idleMinutes`)},{default:M(()=>[D(o(n),{value:w.idle_minutes,"onUpdate:value":l[1]||=e=>w.idle_minutes=e,min:10,max:10080,step:30,size:`small`,style:{width:`100%`}},null,8,[`value`])]),_:1},8,[`label`]),D(o(t),{label:o(u)(`settings.session.atHour`)},{default:M(()=>[D(o(I),null,{default:M(()=>[D(o(n),{value:w.at_hour,"onUpdate:value":l[2]||=e=>w.at_hour=e,min:0,max:23,step:1,size:`small`,style:{width:`100%`}},null,8,[`value`])]),_:1})]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`])]))}}),[[`__scopeId`,`data-v-1e30fa48`]]);export{ne as default};