import{n as e,t}from"./FormItem-De4XOvv-.js";import{t as n}from"./InputNumber-C5BfJpoJ.js";import{t as r}from"./Switch-DRMrDDAU.js";import{$r as i,Ci as a,Cr as o,F as s,Ir as c,K as l,O as u,Oi as d,R as f,Sr as p,Ti as m,Zr as h,_ as g,ei as _,f as v,fi as y,gi as b,ii as x,ji as S,jr as C,k as w,mi as T,ni as E,oi as D,qr as O,ri as k,wr as A,xi as j,yn as M,yt as N,zr as P}from"./index-DD08L3rh.js";var F=o(`input-group`,`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[p(`>`,[o(`input`,[p(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),p(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),o(`button`,[p(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[A(`state-border, border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),p(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[A(`state-border, border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),p(`*`,[p(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[p(`>`,[o(`input`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),o(`base-selection`,[o(`base-selection-label`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),o(`base-selection-tags`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),A(`box-shadow, border, state-border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),p(`&:not(:first-child)`,`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[p(`>`,[o(`input`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),o(`base-selection`,[o(`base-selection-label`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),o(`base-selection-tags`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),A(`box-shadow, border, state-border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),I=x({name:`InputGroup`,props:{},setup(e){let{mergedClsPrefixRef:t}=M(e);return N(`-input-group`,F,t),{mergedClsPrefix:t}},render(){let{mergedClsPrefix:e}=this;return D(`div`,{class:`${e}-input-group`},this.$slots)}});async function L(){return(await c(`/api/hermes/gateways`)).gateways}async function R(e){return(await c(`/api/hermes/gateways/${e}/start`,{method:`POST`})).gateway}async function z(e){await c(`/api/hermes/gateways/${e}/stop`,{method:`POST`})}async function B(e,t){return(await c(`/api/hermes/gateways/${e}/settings`,{method:`PUT`,body:JSON.stringify(t)})).gateway}var V=P(`gateways`,()=>{let e=m([]),t=m(!1);async function n(){t.value=!0;try{let t=await L();e.value=Array.isArray(t)?t:Object.values(t||{})}finally{t.value=!1}}async function r(n){t.value=!0;try{await R(n);for(let t=0;t<15;t++){await new Promise(e=>setTimeout(e,500));let t=await L();if(e.value=Array.isArray(t)?t:Object.values(t||{}),e.value.find(e=>e.profile===n)?.running)return!0}return!1}finally{t.value=!1}}async function i(n){t.value=!0;try{await z(n);for(let t=0;t<10;t++){await new Promise(e=>setTimeout(e,500));let t=await L();if(e.value=Array.isArray(t)?t:Object.values(t||{}),!e.value.find(e=>e.profile===n)?.running)return!0}return!1}finally{t.value=!1}}async function a(t,n){let r=await B(t,n),i=e.value.findIndex(e=>e.profile===t);i>=0&&(e.value[i]=r)}return{gateways:e,loading:t,fetchStatus:n,start:r,stop:i,updateSettings:a}}),H={class:`gateways-view`},U={class:`page-header`},W={class:`header-title`},G={class:`gateways-content`},K={key:0,class:`empty-state`},q={key:1,class:`gateway-list`},J={class:`gateway-info`},Y={class:`gateway-name`},X={class:`gateway-meta`},Z={class:`meta-item`},Q={key:0,class:`meta-item`},$={class:`gateway-actions`},ee={class:`pii-toggle`,title:`自动检测并隐藏敏感信息（密码、密钥等）`},te={class:`pii-label`},ne=v(x({__name:`GatewaysView`,setup(o){let{t:c}=C(),p=u(),v=V(),x=m(!1),D=m(``),A=a({mode:`both`,idle_minutes:1440,at_hour:4});function M(e){D.value=e.profile,A.mode=e.session_reset?.mode||`both`,A.idle_minutes=e.session_reset?.idle_minutes||1440,A.at_hour=e.session_reset?.at_hour??4,x.value=!0}async function N(){try{await v.updateSettings(D.value,{session_reset:{mode:A.mode,idle_minutes:A.idle_minutes,at_hour:A.at_hour}}),p.success(c(`settings.saved`)),x.value=!1}catch{p.error(c(`settings.saveFailed`))}}y(()=>{v.fetchStatus()});async function P(e,t){try{t?await v.stop(e)?p.success(`${c(`gateways.stopped`)}: ${e}`):p.error(`${e} ${c(`gateways.stopFailed`)}`):await v.start(e)?p.success(`${c(`gateways.started`)}: ${e}`):p.error(`${e} ${c(`gateways.startFailed`)}`)}catch(e){p.error(e.message)}}async function F(e,t){try{await v.updateSettings(e,{privacy:{redact_pii:t}})}catch(e){p.error(e.message)}}return(a,o)=>(T(),_(`div`,H,[h(`header`,U,[h(`h2`,W,S(d(c)(`gateways.title`)),1)]),h(`div`,G,[k(d(g),{show:d(v).loading,size:`large`},{default:j(()=>[d(v).gateways.length===0?(T(),_(`div`,K,S(d(c)(`common.noData`)),1)):(T(),_(`div`,q,[(T(!0),_(O,null,b(d(v).gateways,e=>(T(),_(`div`,{key:e.profile,class:`gateway-card`},[h(`div`,J,[h(`div`,Y,[E(S(e.profile)+` `,1),k(d(l),{type:e.running?`success`:`default`,size:`tiny`,round:``,class:`status-tag`},{default:j(()=>[E(S(e.running?d(c)(`gateways.running`):d(c)(`gateways.stopped`)),1)]),_:2},1032,[`type`])]),h(`div`,X,[h(`span`,Z,S(e.host)+`:`+S(e.port),1),e.pid?(T(),_(`span`,Q,`PID: `+S(e.pid),1)):i(``,!0)])]),h(`div`,$,[h(`div`,ee,[h(`span`,te,S(d(c)(`settings.privacy.redactPii`)),1),k(d(r),{size:`small`,value:e.redact_pii,"onUpdate:value":t=>F(e.profile,t)},null,8,[`value`,`onUpdate:value`])]),k(d(f),{size:`small`,quaternary:``,onClick:t=>M(e)},{default:j(()=>[E(S(d(c)(`gateways.sessionSettings`)),1)]),_:1},8,[`onClick`]),k(d(f),{size:`small`,type:e.running?`warning`:`primary`,round:``,onClick:t=>P(e.profile,e.running)},{default:j(()=>[E(S(e.running?d(c)(`common.stop`):d(c)(`common.start`)),1)]),_:2},1032,[`type`,`onClick`])])]))),128))]))]),_:1},8,[`show`])]),k(d(w),{show:x.value,"onUpdate:show":o[4]||=e=>x.value=e,preset:`dialog`,title:d(c)(`gateways.sessionSettings`),"show-icon":!1,style:{width:`420px`}},{action:j(()=>[k(d(f),{size:`small`,onClick:o[3]||=e=>x.value=!1},{default:j(()=>[E(S(d(c)(`common.cancel`)),1)]),_:1}),k(d(f),{size:`small`,type:`primary`,onClick:N},{default:j(()=>[E(S(d(c)(`common.save`)),1)]),_:1})]),default:j(()=>[k(d(e),{"label-placement":`left`,"label-width":`110`},{default:j(()=>[k(d(t),{label:d(c)(`settings.session.mode`)},{default:j(()=>[k(d(s),{value:A.mode,"onUpdate:value":o[0]||=e=>A.mode=e,options:[{label:d(c)(`settings.session.modeBoth`),value:`both`},{label:d(c)(`settings.session.modeIdle`),value:`idle`},{label:d(c)(`settings.session.modeHourly`),value:`hourly`}],size:`small`},null,8,[`value`,`options`])]),_:1},8,[`label`]),k(d(t),{label:d(c)(`settings.session.idleMinutes`)},{default:j(()=>[k(d(n),{value:A.idle_minutes,"onUpdate:value":o[1]||=e=>A.idle_minutes=e,min:10,max:10080,step:30,size:`small`,style:{width:`100%`}},null,8,[`value`])]),_:1},8,[`label`]),k(d(t),{label:d(c)(`settings.session.atHour`)},{default:j(()=>[k(d(I),null,{default:j(()=>[k(d(n),{value:A.at_hour,"onUpdate:value":o[2]||=e=>A.at_hour=e,min:0,max:23,step:1,size:`small`,style:{width:`100%`}},null,8,[`value`])]),_:1})]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`])]))}}),[[`__scopeId`,`data-v-d3172a33`]]);export{ne as default};