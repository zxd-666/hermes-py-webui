import{n as e,t}from"./FormItem-C8pOS9ZW.js";import{t as n}from"./InputNumber-LSzZDtXh.js";import{t as r}from"./Switch-arN5ivAS.js";import{$r as i,Di as a,Dr as o,F as s,Fr as c,K as l,Mr as u,O as d,Qr as f,R as p,Ur as m,Xr as h,Yr as g,_,_i as v,br as y,ci as b,ei as x,f as S,fi as C,k as w,ni as T,qr as E,ui as D,vr as O,wi as k,xi as A,yi as j,yn as M,yr as N,yt as P}from"./index-VQ3J1Smk.js";var F=N(`input-group`,`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[O(`>`,[N(`input`,[O(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),O(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),N(`button`,[O(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[y(`state-border, border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),O(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[y(`state-border, border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),O(`*`,[O(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[O(`>`,[N(`input`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),N(`base-selection`,[N(`base-selection-label`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),N(`base-selection-tags`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),y(`box-shadow, border, state-border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),O(`&:not(:first-child)`,`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[O(`>`,[N(`input`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),N(`base-selection`,[N(`base-selection-label`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),N(`base-selection-tags`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),y(`box-shadow, border, state-border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),I=x({name:`InputGroup`,props:{},setup(e){let{mergedClsPrefixRef:t}=M(e);return P(`-input-group`,F,t),{mergedClsPrefix:t}},render(){let{mergedClsPrefix:e}=this;return T(`div`,{class:`${e}-input-group`},this.$slots)}});async function L(){return(await u(`/api/hermes/gateways`)).gateways}async function R(e){return(await u(`/api/hermes/gateways/${e}/start`,{method:`POST`})).gateway}async function z(e){await u(`/api/hermes/gateways/${e}/stop`,{method:`POST`})}async function B(e,t){return(await u(`/api/hermes/gateways/${e}/settings`,{method:`PUT`,body:JSON.stringify(t)})).gateway}var V=c(`gateways`,()=>{let e=A([]),t=A(!1);async function n(){t.value=!0;try{let t=await L();e.value=Array.isArray(t)?t:Object.values(t||{})}finally{t.value=!1}}async function r(n){t.value=!0;try{await R(n);for(let t=0;t<15;t++){await new Promise(e=>setTimeout(e,500));let t=await L();if(e.value=Array.isArray(t)?t:Object.values(t||{}),e.value.find(e=>e.profile===n)?.running)return!0}return!1}finally{t.value=!1}}async function i(n){t.value=!0;try{await z(n);for(let t=0;t<10;t++){await new Promise(e=>setTimeout(e,500));let t=await L();if(e.value=Array.isArray(t)?t:Object.values(t||{}),!e.value.find(e=>e.profile===n)?.running)return!0}return!1}finally{t.value=!1}}async function a(t,n){let r=await B(t,n),i=e.value.findIndex(e=>e.profile===t);i>=0&&(e.value[i]=r)}return{gateways:e,loading:t,fetchStatus:n,start:r,stop:i,updateSettings:a}}),H={class:`gateways-view`},U={class:`page-header`},W={class:`header-title`},G={class:`gateways-content`},K={key:0,class:`empty-state`},q={key:1,class:`gateway-list`},J={class:`gateway-info`},Y={class:`gateway-name`},X={class:`gateway-meta`},Z={class:`meta-item`},Q={key:0,class:`meta-item`},$={class:`gateway-actions`},ee={class:`pii-toggle`,title:`自动检测并隐藏敏感信息（密码、密钥等）`},te={class:`pii-label`},ne=S(x({__name:`GatewaysView`,setup(c){let{t:u}=o(),y=d(),x=V(),S=A(!1),T=A(``),O=j({mode:`both`,idle_minutes:1440,at_hour:4});function M(e){T.value=e.profile,O.mode=e.session_reset?.mode||`both`,O.idle_minutes=e.session_reset?.idle_minutes||1440,O.at_hour=e.session_reset?.at_hour??4,S.value=!0}async function N(){try{await x.updateSettings(T.value,{session_reset:{mode:O.mode,idle_minutes:O.idle_minutes,at_hour:O.at_hour}}),y.success(u(`settings.saved`)),S.value=!1}catch{y.error(u(`settings.saveFailed`))}}b(()=>{x.fetchStatus()});async function P(e,t){try{t?await x.stop(e)?y.success(`${u(`gateways.stopped`)}: ${e}`):y.error(`${e} ${u(`gateways.stopFailed`)}`):await x.start(e)?y.success(`${u(`gateways.started`)}: ${e}`):y.error(`${e} ${u(`gateways.startFailed`)}`)}catch(e){y.error(e.message)}}async function F(e,t){try{await x.updateSettings(e,{privacy:{redact_pii:t}})}catch(e){y.error(e.message)}}return(o,c)=>(D(),h(`div`,H,[E(`header`,U,[E(`h2`,W,a(k(u)(`gateways.title`)),1)]),E(`div`,G,[i(k(_),{show:k(x).loading,size:`large`},{default:v(()=>[k(x).gateways.length===0?(D(),h(`div`,K,a(k(u)(`common.noData`)),1)):(D(),h(`div`,q,[(D(!0),h(m,null,C(k(x).gateways,e=>(D(),h(`div`,{key:e.profile,class:`gateway-card`},[E(`div`,J,[E(`div`,Y,[f(a(e.profile)+` `,1),i(k(l),{type:e.running?`success`:`default`,size:`tiny`,round:``,class:`status-tag`},{default:v(()=>[f(a(e.running?k(u)(`gateways.running`):k(u)(`gateways.stopped`)),1)]),_:2},1032,[`type`])]),E(`div`,X,[E(`span`,Z,a(e.host)+`:`+a(e.port),1),e.pid?(D(),h(`span`,Q,`PID: `+a(e.pid),1)):g(``,!0)])]),E(`div`,$,[E(`div`,ee,[E(`span`,te,a(k(u)(`settings.privacy.redactPii`)),1),i(k(r),{size:`small`,value:e.redact_pii,"onUpdate:value":t=>F(e.profile,t)},null,8,[`value`,`onUpdate:value`])]),i(k(p),{size:`small`,quaternary:``,onClick:t=>M(e)},{default:v(()=>[f(a(k(u)(`gateways.sessionSettings`)),1)]),_:1},8,[`onClick`]),i(k(p),{size:`small`,type:e.running?`warning`:`primary`,round:``,onClick:t=>P(e.profile,e.running)},{default:v(()=>[f(a(e.running?k(u)(`common.stop`):k(u)(`common.start`)),1)]),_:2},1032,[`type`,`onClick`])])]))),128))]))]),_:1},8,[`show`])]),i(k(w),{show:S.value,"onUpdate:show":c[4]||=e=>S.value=e,preset:`dialog`,title:k(u)(`gateways.sessionSettings`),"show-icon":!1,style:{width:`420px`}},{action:v(()=>[i(k(p),{size:`small`,onClick:c[3]||=e=>S.value=!1},{default:v(()=>[f(a(k(u)(`common.cancel`)),1)]),_:1}),i(k(p),{size:`small`,type:`primary`,onClick:N},{default:v(()=>[f(a(k(u)(`common.save`)),1)]),_:1})]),default:v(()=>[i(k(e),{"label-placement":`left`,"label-width":`110`},{default:v(()=>[i(k(t),{label:k(u)(`settings.session.mode`)},{default:v(()=>[i(k(s),{value:O.mode,"onUpdate:value":c[0]||=e=>O.mode=e,options:[{label:k(u)(`settings.session.modeBoth`),value:`both`},{label:k(u)(`settings.session.modeIdle`),value:`idle`},{label:k(u)(`settings.session.modeHourly`),value:`hourly`}],size:`small`},null,8,[`value`,`options`])]),_:1},8,[`label`]),i(k(t),{label:k(u)(`settings.session.idleMinutes`)},{default:v(()=>[i(k(n),{value:O.idle_minutes,"onUpdate:value":c[1]||=e=>O.idle_minutes=e,min:10,max:10080,step:30,size:`small`,style:{width:`100%`}},null,8,[`value`])]),_:1},8,[`label`]),i(k(t),{label:k(u)(`settings.session.atHour`)},{default:v(()=>[i(k(I),null,{default:v(()=>[i(k(n),{value:O.at_hour,"onUpdate:value":c[2]||=e=>O.at_hour=e,min:0,max:23,step:1,size:`small`,style:{width:`100%`}},null,8,[`value`])]),_:1})]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`])]))}}),[[`__scopeId`,`data-v-d3172a33`]]);export{ne as default};