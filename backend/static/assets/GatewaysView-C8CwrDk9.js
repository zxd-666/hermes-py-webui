import{n as e,t}from"./FormItem-fERY8lla.js";import{t as n}from"./InputNumber-BKQXgaEJ.js";import{t as r}from"./Switch-BAnXA4Xy.js";import{Ci as i,Cr as a,Gr as o,Jr as s,Kr as c,N as l,Or as u,Qr as d,T as f,Ur as p,V as m,Xr as h,Yr as g,_i as _,bi as v,c as y,ci as b,gr as x,hi as S,hr as C,ii as w,j as T,jr as E,mn as D,mr as O,mt as k,oi as A,p as j,pi as M,w as N,zr as P}from"./index-DGKbwP2E.js";var F=C(`input-group`,`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[O(`>`,[C(`input`,[O(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),O(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),C(`button`,[O(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[x(`state-border, border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),O(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[x(`state-border, border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),O(`*`,[O(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[O(`>`,[C(`input`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),C(`base-selection`,[C(`base-selection-label`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),C(`base-selection-tags`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),x(`box-shadow, border, state-border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),O(`&:not(:first-child)`,`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[O(`>`,[C(`input`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),C(`base-selection`,[C(`base-selection-label`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),C(`base-selection-tags`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),x(`box-shadow, border, state-border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),I=h({name:`InputGroup`,props:{},setup(e){let{mergedClsPrefixRef:t}=D(e);return k(`-input-group`,F,t),{mergedClsPrefix:t}},render(){let{mergedClsPrefix:e}=this;return d(`div`,{class:`${e}-input-group`},this.$slots)}});async function L(){return(await u(`/api/hermes/gateways`)).gateways}async function R(e){return(await u(`/api/hermes/gateways/${e}/start`,{method:`POST`})).gateway}async function z(e){await u(`/api/hermes/gateways/${e}/stop`,{method:`POST`})}async function B(e,t){return(await u(`/api/hermes/gateways/${e}/settings`,{method:`PUT`,body:JSON.stringify(t)})).gateway}var V=E(`gateways`,()=>{let e=_([]),t=_(!1);async function n(){t.value=!0;try{let t=await L();e.value=Array.isArray(t)?t:Object.values(t||{})}finally{t.value=!1}}async function r(n){t.value=!0;try{await R(n);for(let t=0;t<15;t++){await new Promise(e=>setTimeout(e,500));let t=await L();if(e.value=Array.isArray(t)?t:Object.values(t||{}),e.value.find(e=>e.profile===n)?.running)return!0}return!1}finally{t.value=!1}}async function i(n){t.value=!0;try{await z(n);for(let t=0;t<10;t++){await new Promise(e=>setTimeout(e,500));let t=await L();if(e.value=Array.isArray(t)?t:Object.values(t||{}),!e.value.find(e=>e.profile===n)?.running)return!0}return!1}finally{t.value=!1}}async function a(t,n){let r=await B(t,n),i=e.value.findIndex(e=>e.profile===t);i>=0&&(e.value[i]=r)}return{gateways:e,loading:t,fetchStatus:n,start:r,stop:i,updateSettings:a}}),H={class:`gateways-view`},U={class:`page-header`},W={class:`header-title`},G={class:`gateways-content`},K={key:0,class:`empty-state`},q={key:1,class:`gateway-list`},J={class:`gateway-info`},Y={class:`gateway-name`},X={class:`gateway-meta`},Z={class:`meta-item`},Q={key:0,class:`meta-item`},$={class:`meta-item session-summary`},ee={class:`gateway-actions`},te={class:`pii-toggle`,title:`自动检测并隐藏敏感信息（密码、密钥等）`},ne={class:`pii-label`},re=y(h({__name:`GatewaysView`,setup(u){let{t:d}=a(),h=N(),y=V(),x=_(!1),C=_(``),E=S({mode:`both`,idle_minutes:1440,at_hour:4});function D(e){C.value=e.profile,E.mode=e.session_reset?.mode||`both`,E.idle_minutes=e.session_reset?.idle_minutes||1440,E.at_hour=e.session_reset?.at_hour??4,x.value=!0}async function O(){try{await y.updateSettings(C.value,{session_reset:{mode:E.mode,idle_minutes:E.idle_minutes,at_hour:E.at_hour}}),h.success(d(`settings.saved`)),x.value=!1}catch{h.error(d(`settings.saveFailed`))}}w(()=>{y.fetchStatus()});async function k(e,t){try{t?await y.stop(e)?h.success(`${d(`gateways.stopped`)}: ${e}`):h.error(`${e} ${d(`gateways.stopFailed`)}`):await y.start(e)?h.success(`${d(`gateways.started`)}: ${e}`):h.error(`${e} ${d(`gateways.startFailed`)}`)}catch(e){h.error(e.message)}}async function F(e,t){try{await y.updateSettings(e,{privacy:{redact_pii:t}})}catch(e){h.error(e.message)}}return(a,u)=>(A(),c(`div`,H,[p(`header`,U,[p(`h2`,W,i(v(d)(`gateways.title`)),1)]),p(`div`,G,[g(v(j),{show:v(y).loading,size:`large`},{default:M(()=>[v(y).gateways.length===0?(A(),c(`div`,K,i(v(d)(`common.noData`)),1)):(A(),c(`div`,q,[(A(!0),c(P,null,b(v(y).gateways,e=>(A(),c(`div`,{key:e.profile,class:`gateway-card`},[p(`div`,J,[p(`div`,Y,[s(i(e.profile)+` `,1),g(v(m),{type:e.running?`success`:`default`,size:`tiny`,round:``,class:`status-tag`},{default:M(()=>[s(i(e.running?v(d)(`gateways.running`):v(d)(`gateways.stopped`)),1)]),_:2},1032,[`type`])]),p(`div`,X,[p(`span`,Z,i(e.host)+`:`+i(e.port),1),e.pid?(A(),c(`span`,Q,`PID: `+i(e.pid),1)):o(``,!0),p(`span`,$,i(v(d)(`gateways.sessionReset`))+`: `+i(e.session_reset?.mode||`both`),1)])]),p(`div`,ee,[p(`div`,te,[p(`span`,ne,i(v(d)(`settings.privacy.redactPii`)),1),g(v(r),{size:`small`,value:e.redact_pii,"onUpdate:value":t=>F(e.profile,t)},null,8,[`value`,`onUpdate:value`])]),g(v(l),{size:`small`,quaternary:``,onClick:t=>D(e)},{default:M(()=>[s(i(v(d)(`gateways.sessionSettings`)),1)]),_:1},8,[`onClick`]),g(v(l),{size:`small`,type:e.running?`warning`:`primary`,round:``,onClick:t=>k(e.profile,e.running)},{default:M(()=>[s(i(e.running?v(d)(`common.stop`):v(d)(`common.start`)),1)]),_:2},1032,[`type`,`onClick`])])]))),128))]))]),_:1},8,[`show`])]),g(v(f),{show:x.value,"onUpdate:show":u[4]||=e=>x.value=e,preset:`dialog`,title:v(d)(`gateways.sessionSettings`),"show-icon":!1,style:{width:`420px`}},{action:M(()=>[g(v(l),{size:`small`,onClick:u[3]||=e=>x.value=!1},{default:M(()=>[s(i(v(d)(`common.cancel`)),1)]),_:1}),g(v(l),{size:`small`,type:`primary`,onClick:O},{default:M(()=>[s(i(v(d)(`common.save`)),1)]),_:1})]),default:M(()=>[g(v(e),{"label-placement":`left`,"label-width":`110`},{default:M(()=>[g(v(t),{label:v(d)(`settings.session.mode`)},{default:M(()=>[g(v(T),{value:E.mode,"onUpdate:value":u[0]||=e=>E.mode=e,options:[{label:v(d)(`settings.session.modeBoth`),value:`both`},{label:v(d)(`settings.session.modeIdle`),value:`idle`},{label:v(d)(`settings.session.modeHourly`),value:`hourly`}],size:`small`},null,8,[`value`,`options`])]),_:1},8,[`label`]),g(v(t),{label:v(d)(`settings.session.idleMinutes`)},{default:M(()=>[g(v(n),{value:E.idle_minutes,"onUpdate:value":u[1]||=e=>E.idle_minutes=e,min:10,max:10080,step:30,size:`small`,style:{width:`100%`}},null,8,[`value`])]),_:1},8,[`label`]),g(v(t),{label:v(d)(`settings.session.atHour`)},{default:M(()=>[g(v(I),null,{default:M(()=>[g(v(n),{value:E.at_hour,"onUpdate:value":u[2]||=e=>E.at_hour=e,min:0,max:23,step:1,size:`small`,style:{width:`100%`}},null,8,[`value`])]),_:1})]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`])]))}}),[[`__scopeId`,`data-v-5718da46`]]);export{re as default};