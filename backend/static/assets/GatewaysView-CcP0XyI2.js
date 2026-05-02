import{n as e,t}from"./FormItem-4rAewlyk.js";import{t as n}from"./InputNumber-BAO6l50o.js";import{t as r}from"./Switch-BpiVGBC_.js";import{A as i,C as a,Dr as o,Fr as s,Gr as c,Hr as l,Jr as u,Kr as d,N as f,V as p,Vr as m,Wr as h,c as g,di as _,dr as v,ei as y,fr as b,gi as x,ii as S,li as C,ni as w,p as T,pi as E,pn as D,pt as O,ur as k,w as A,wr as j,yi as M,yr as N,zr as P}from"./index-_epVTX4A.js";var F=v(`input-group`,`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[k(`>`,[v(`input`,[k(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),k(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),v(`button`,[k(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[b(`state-border, border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),k(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[b(`state-border, border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),k(`*`,[k(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[k(`>`,[v(`input`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),v(`base-selection`,[v(`base-selection-label`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),v(`base-selection-tags`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),b(`box-shadow, border, state-border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),k(`&:not(:first-child)`,`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[k(`>`,[v(`input`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),v(`base-selection`,[v(`base-selection-label`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),v(`base-selection-tags`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),b(`box-shadow, border, state-border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),I=d({name:`InputGroup`,props:{},setup(e){let{mergedClsPrefixRef:t}=D(e);return O(`-input-group`,F,t),{mergedClsPrefix:t}},render(){let{mergedClsPrefix:e}=this;return u(`div`,{class:`${e}-input-group`},this.$slots)}});async function L(){return(await j(`/api/hermes/gateways`)).gateways}async function R(e){return(await j(`/api/hermes/gateways/${e}/start`,{method:`POST`})).gateway}async function z(e){await j(`/api/hermes/gateways/${e}/stop`,{method:`POST`})}async function B(e,t){return(await j(`/api/hermes/gateways/${e}/settings`,{method:`PUT`,body:JSON.stringify(t)})).gateway}var V=o(`gateways`,()=>{let e=E([]),t=E(!1);async function n(){t.value=!0;try{let t=await L();e.value=Array.isArray(t)?t:Object.values(t||{})}finally{t.value=!1}}async function r(n){t.value=!0;try{await R(n);for(let t=0;t<15;t++){await new Promise(e=>setTimeout(e,500));let t=await L();if(e.value=Array.isArray(t)?t:Object.values(t||{}),e.value.find(e=>e.profile===n)?.running)return!0}return!1}finally{t.value=!1}}async function i(n){t.value=!0;try{await z(n);for(let t=0;t<10;t++){await new Promise(e=>setTimeout(e,500));let t=await L();if(e.value=Array.isArray(t)?t:Object.values(t||{}),!e.value.find(e=>e.profile===n)?.running)return!0}return!1}finally{t.value=!1}}async function a(t,n){let r=await B(t,n),i=e.value.findIndex(e=>e.profile===t);i>=0&&(e.value[i]=r)}return{gateways:e,loading:t,fetchStatus:n,start:r,stop:i,updateSettings:a}}),H={class:`gateways-view`},U={class:`page-header`},W={class:`header-title`},G={class:`gateways-content`},K={key:0,class:`empty-state`},q={key:1,class:`gateway-list`},J={class:`gateway-info`},Y={class:`gateway-name`},X={class:`gateway-meta`},Z={class:`meta-item`},Q={key:0,class:`meta-item`},$={class:`meta-item session-summary`},ee={class:`gateway-actions`},te={class:`pii-toggle`,title:`自动检测并隐藏敏感信息（密码、密钥等）`},ne={class:`pii-label`},re=g(d({__name:`GatewaysView`,setup(o){let{t:u}=N(),d=a(),g=V(),v=E(!1),b=E(``),D=_({mode:`both`,idle_minutes:1440,at_hour:4});function O(e){b.value=e.profile,D.mode=e.session_reset?.mode||`both`,D.idle_minutes=e.session_reset?.idle_minutes||1440,D.at_hour=e.session_reset?.at_hour??4,v.value=!0}async function k(){try{await g.updateSettings(b.value,{session_reset:{mode:D.mode,idle_minutes:D.idle_minutes,at_hour:D.at_hour}}),d.success(u(`settings.saved`)),v.value=!1}catch{d.error(u(`settings.saveFailed`))}}y(()=>{g.fetchStatus()});async function j(e,t){try{t?await g.stop(e)?d.success(`${u(`gateways.stopped`)}: ${e}`):d.error(`${e} ${u(`gateways.stopFailed`)}`):await g.start(e)?d.success(`${u(`gateways.started`)}: ${e}`):d.error(`${e} ${u(`gateways.startFailed`)}`)}catch(e){d.error(e.message)}}async function F(e,t){try{await g.updateSettings(e,{privacy:{redact_pii:t}})}catch(e){d.error(e.message)}}return(a,o)=>(w(),l(`div`,H,[P(`header`,U,[P(`h2`,W,M(x(u)(`gateways.title`)),1)]),P(`div`,G,[c(x(T),{show:x(g).loading,size:`large`},{default:C(()=>[x(g).gateways.length===0?(w(),l(`div`,K,M(x(u)(`common.noData`)),1)):(w(),l(`div`,q,[(w(!0),l(s,null,S(x(g).gateways,e=>(w(),l(`div`,{key:e.profile,class:`gateway-card`},[P(`div`,J,[P(`div`,Y,[h(M(e.profile)+` `,1),c(x(p),{type:e.running?`success`:`default`,size:`tiny`,round:``,class:`status-tag`},{default:C(()=>[h(M(e.running?x(u)(`gateways.running`):x(u)(`gateways.stopped`)),1)]),_:2},1032,[`type`])]),P(`div`,X,[P(`span`,Z,M(e.host)+`:`+M(e.port),1),e.pid?(w(),l(`span`,Q,`PID: `+M(e.pid),1)):m(``,!0),P(`span`,$,M(x(u)(`gateways.sessionReset`))+`: `+M(e.session_reset?.mode||`both`),1)])]),P(`div`,ee,[P(`div`,te,[P(`span`,ne,M(x(u)(`settings.privacy.redactPii`)),1),c(x(r),{size:`small`,value:e.redact_pii,"onUpdate:value":t=>F(e.profile,t)},null,8,[`value`,`onUpdate:value`])]),c(x(f),{size:`small`,quaternary:``,onClick:t=>O(e)},{default:C(()=>[h(M(x(u)(`gateways.sessionSettings`)),1)]),_:1},8,[`onClick`]),c(x(f),{size:`small`,type:e.running?`warning`:`primary`,round:``,onClick:t=>j(e.profile,e.running)},{default:C(()=>[h(M(e.running?x(u)(`common.stop`):x(u)(`common.start`)),1)]),_:2},1032,[`type`,`onClick`])])]))),128))]))]),_:1},8,[`show`])]),c(x(A),{show:v.value,"onUpdate:show":o[4]||=e=>v.value=e,preset:`dialog`,title:x(u)(`gateways.sessionSettings`),"show-icon":!1,style:{width:`420px`}},{action:C(()=>[c(x(f),{size:`small`,onClick:o[3]||=e=>v.value=!1},{default:C(()=>[h(M(x(u)(`common.cancel`)),1)]),_:1}),c(x(f),{size:`small`,type:`primary`,onClick:k},{default:C(()=>[h(M(x(u)(`common.save`)),1)]),_:1})]),default:C(()=>[c(x(e),{"label-placement":`left`,"label-width":`110`},{default:C(()=>[c(x(t),{label:x(u)(`settings.session.mode`)},{default:C(()=>[c(x(i),{value:D.mode,"onUpdate:value":o[0]||=e=>D.mode=e,options:[{label:x(u)(`settings.session.modeBoth`),value:`both`},{label:x(u)(`settings.session.modeIdle`),value:`idle`},{label:x(u)(`settings.session.modeHourly`),value:`hourly`}],size:`small`},null,8,[`value`,`options`])]),_:1},8,[`label`]),c(x(t),{label:x(u)(`settings.session.idleMinutes`)},{default:C(()=>[c(x(n),{value:D.idle_minutes,"onUpdate:value":o[1]||=e=>D.idle_minutes=e,min:10,max:10080,step:30,size:`small`,style:{width:`100%`}},null,8,[`value`])]),_:1},8,[`label`]),c(x(t),{label:x(u)(`settings.session.atHour`)},{default:C(()=>[c(x(I),null,{default:C(()=>[c(x(n),{value:D.at_hour,"onUpdate:value":o[2]||=e=>D.at_hour=e,min:0,max:23,step:1,size:`small`,style:{width:`100%`}},null,8,[`value`])]),_:1})]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`])]))}}),[[`__scopeId`,`data-v-5718da46`]]);export{re as default};