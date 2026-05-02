import{n as e,t}from"./FormItem-_dHElEq4.js";import{t as n}from"./InputNumber-Ci_8AVOk.js";import{t as r}from"./Switch-DPSofxmP.js";import{$r as i,Di as a,Dr as o,F as s,Fr as c,G as l,L as u,Mr as d,O as f,Qr as p,Ur as m,Xr as h,Yr as g,_,_i as v,br as y,ci as b,ei as x,f as S,fi as C,k as w,ni as T,qr as E,ui as D,vn as O,vr as k,vt as A,wi as j,xi as M,yi as N,yr as P}from"./index-BxCBYSwf.js";var F=P(`input-group`,`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[k(`>`,[P(`input`,[k(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),k(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),P(`button`,[k(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[y(`state-border, border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),k(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[y(`state-border, border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),k(`*`,[k(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[k(`>`,[P(`input`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),P(`base-selection`,[P(`base-selection-label`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),P(`base-selection-tags`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),y(`box-shadow, border, state-border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),k(`&:not(:first-child)`,`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[k(`>`,[P(`input`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),P(`base-selection`,[P(`base-selection-label`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),P(`base-selection-tags`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),y(`box-shadow, border, state-border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),I=x({name:`InputGroup`,props:{},setup(e){let{mergedClsPrefixRef:t}=O(e);return A(`-input-group`,F,t),{mergedClsPrefix:t}},render(){let{mergedClsPrefix:e}=this;return T(`div`,{class:`${e}-input-group`},this.$slots)}});async function L(){return(await d(`/api/hermes/gateways`)).gateways}async function R(e){return(await d(`/api/hermes/gateways/${e}/start`,{method:`POST`})).gateway}async function z(e){await d(`/api/hermes/gateways/${e}/stop`,{method:`POST`})}async function B(e,t){return(await d(`/api/hermes/gateways/${e}/settings`,{method:`PUT`,body:JSON.stringify(t)})).gateway}var V=c(`gateways`,()=>{let e=M([]),t=M(!1);async function n(){t.value=!0;try{let t=await L();e.value=Array.isArray(t)?t:Object.values(t||{})}finally{t.value=!1}}async function r(n){t.value=!0;try{await R(n);for(let t=0;t<15;t++){await new Promise(e=>setTimeout(e,500));let t=await L();if(e.value=Array.isArray(t)?t:Object.values(t||{}),e.value.find(e=>e.profile===n)?.running)return!0}return!1}finally{t.value=!1}}async function i(n){t.value=!0;try{await z(n);for(let t=0;t<10;t++){await new Promise(e=>setTimeout(e,500));let t=await L();if(e.value=Array.isArray(t)?t:Object.values(t||{}),!e.value.find(e=>e.profile===n)?.running)return!0}return!1}finally{t.value=!1}}async function a(t,n){let r=await B(t,n),i=e.value.findIndex(e=>e.profile===t);i>=0&&(e.value[i]=r)}return{gateways:e,loading:t,fetchStatus:n,start:r,stop:i,updateSettings:a}}),H={class:`gateways-view`},U={class:`page-header`},W={class:`header-title`},G={class:`gateways-content`},K={key:0,class:`empty-state`},q={key:1,class:`gateway-list`},J={class:`gateway-info`},Y={class:`gateway-name`},X={class:`gateway-meta`},Z={class:`meta-item`},Q={key:0,class:`meta-item`},$={class:`gateway-actions`},ee={class:`pii-toggle`,title:`自动检测并隐藏敏感信息（密码、密钥等）`},te={class:`pii-label`},ne=S(x({__name:`GatewaysView`,setup(c){let{t:d}=o(),y=f(),x=V(),S=M(!1),T=M(``),O=N({mode:`both`,idle_minutes:1440,at_hour:4});function k(e){T.value=e.profile,O.mode=e.session_reset?.mode||`both`,O.idle_minutes=e.session_reset?.idle_minutes||1440,O.at_hour=e.session_reset?.at_hour??4,S.value=!0}async function A(){try{await x.updateSettings(T.value,{session_reset:{mode:O.mode,idle_minutes:O.idle_minutes,at_hour:O.at_hour}}),y.success(d(`settings.saved`)),S.value=!1}catch{y.error(d(`settings.saveFailed`))}}b(()=>{x.fetchStatus()});async function P(e,t){try{t?await x.stop(e)?y.success(`${d(`gateways.stopped`)}: ${e}`):y.error(`${e} ${d(`gateways.stopFailed`)}`):await x.start(e)?y.success(`${d(`gateways.started`)}: ${e}`):y.error(`${e} ${d(`gateways.startFailed`)}`)}catch(e){y.error(e.message)}}async function F(e,t){try{await x.updateSettings(e,{privacy:{redact_pii:t}})}catch(e){y.error(e.message)}}return(o,c)=>(D(),h(`div`,H,[E(`header`,U,[E(`h2`,W,a(j(d)(`gateways.title`)),1)]),E(`div`,G,[i(j(_),{show:j(x).loading,size:`large`},{default:v(()=>[j(x).gateways.length===0?(D(),h(`div`,K,a(j(d)(`common.noData`)),1)):(D(),h(`div`,q,[(D(!0),h(m,null,C(j(x).gateways,e=>(D(),h(`div`,{key:e.profile,class:`gateway-card`},[E(`div`,J,[E(`div`,Y,[p(a(e.profile)+` `,1),i(j(l),{type:e.running?`success`:`default`,size:`tiny`,round:``,class:`status-tag`},{default:v(()=>[p(a(e.running?j(d)(`gateways.running`):j(d)(`gateways.stopped`)),1)]),_:2},1032,[`type`])]),E(`div`,X,[E(`span`,Z,a(e.host)+`:`+a(e.port),1),e.pid?(D(),h(`span`,Q,`PID: `+a(e.pid),1)):g(``,!0)])]),E(`div`,$,[E(`div`,ee,[E(`span`,te,a(j(d)(`settings.privacy.redactPii`)),1),i(j(r),{size:`small`,value:e.redact_pii,"onUpdate:value":t=>F(e.profile,t)},null,8,[`value`,`onUpdate:value`])]),i(j(u),{size:`small`,quaternary:``,onClick:t=>k(e)},{default:v(()=>[p(a(j(d)(`gateways.sessionSettings`)),1)]),_:1},8,[`onClick`]),i(j(u),{size:`small`,type:e.running?`warning`:`primary`,round:``,onClick:t=>P(e.profile,e.running)},{default:v(()=>[p(a(e.running?j(d)(`common.stop`):j(d)(`common.start`)),1)]),_:2},1032,[`type`,`onClick`])])]))),128))]))]),_:1},8,[`show`])]),i(j(w),{show:S.value,"onUpdate:show":c[4]||=e=>S.value=e,preset:`dialog`,title:j(d)(`gateways.sessionSettings`),"show-icon":!1,style:{width:`420px`}},{action:v(()=>[i(j(u),{size:`small`,onClick:c[3]||=e=>S.value=!1},{default:v(()=>[p(a(j(d)(`common.cancel`)),1)]),_:1}),i(j(u),{size:`small`,type:`primary`,onClick:A},{default:v(()=>[p(a(j(d)(`common.save`)),1)]),_:1})]),default:v(()=>[i(j(e),{"label-placement":`left`,"label-width":`110`},{default:v(()=>[i(j(t),{label:j(d)(`settings.session.mode`)},{default:v(()=>[i(j(s),{value:O.mode,"onUpdate:value":c[0]||=e=>O.mode=e,options:[{label:j(d)(`settings.session.modeBoth`),value:`both`},{label:j(d)(`settings.session.modeIdle`),value:`idle`},{label:j(d)(`settings.session.modeHourly`),value:`hourly`}],size:`small`},null,8,[`value`,`options`])]),_:1},8,[`label`]),i(j(t),{label:j(d)(`settings.session.idleMinutes`)},{default:v(()=>[i(j(n),{value:O.idle_minutes,"onUpdate:value":c[1]||=e=>O.idle_minutes=e,min:10,max:10080,step:30,size:`small`,style:{width:`100%`}},null,8,[`value`])]),_:1},8,[`label`]),i(j(t),{label:j(d)(`settings.session.atHour`)},{default:v(()=>[i(j(I),null,{default:v(()=>[i(j(n),{value:O.at_hour,"onUpdate:value":c[2]||=e=>O.at_hour=e,min:0,max:23,step:1,size:`small`,style:{width:`100%`}},null,8,[`value`])]),_:1})]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`])]))}}),[[`__scopeId`,`data-v-d3172a33`]]);export{ne as default};