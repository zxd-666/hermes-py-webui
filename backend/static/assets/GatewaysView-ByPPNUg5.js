import{n as e,t}from"./FormItem-B0hd1Tvm.js";import{t as n}from"./InputNumber-CrwlywoF.js";import{t as r}from"./Switch-DhUo7Wx9.js";import{Br as i,Cr as a,Ei as o,F as s,Jr as c,K as l,Lr as u,Mi as d,O as f,Qr as p,R as m,Si as h,Sr as g,_,_i as v,ai as y,ei as b,f as x,hi as S,ii as C,jr as w,k as T,ki as E,pi as D,ri as O,si as k,ti as A,wi as j,wr as M,yn as N,yt as P}from"./index-D8_acDS4.js";var F=a(`input-group`,`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[g(`>`,[a(`input`,[g(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),g(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),a(`button`,[g(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[M(`state-border, border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),g(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[M(`state-border, border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),g(`*`,[g(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[g(`>`,[a(`input`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),a(`base-selection`,[a(`base-selection-label`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),a(`base-selection-tags`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),M(`box-shadow, border, state-border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),g(`&:not(:first-child)`,`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[g(`>`,[a(`input`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),a(`base-selection`,[a(`base-selection-label`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),a(`base-selection-tags`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),M(`box-shadow, border, state-border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),I=y({name:`InputGroup`,props:{},setup(e){let{mergedClsPrefixRef:t}=N(e);return P(`-input-group`,F,t),{mergedClsPrefix:t}},render(){let{mergedClsPrefix:e}=this;return k(`div`,{class:`${e}-input-group`},this.$slots)}});async function L(){return(await u(`/api/hermes/gateways`)).gateways}async function R(e){return(await u(`/api/hermes/gateways/${e}/start`,{method:`POST`})).gateway}async function z(e){await u(`/api/hermes/gateways/${e}/stop`,{method:`POST`})}async function B(e,t){return(await u(`/api/hermes/gateways/${e}/settings`,{method:`PUT`,body:JSON.stringify(t)})).gateway}var V=i(`gateways`,()=>{let e=o([]),t=o(!1);async function n(){t.value=!0;try{let t=await L();e.value=Array.isArray(t)?t:Object.values(t||{})}finally{t.value=!1}}async function r(n){t.value=!0;try{await R(n);for(let t=0;t<15;t++){await new Promise(e=>setTimeout(e,500));let t=await L();if(e.value=Array.isArray(t)?t:Object.values(t||{}),e.value.find(e=>e.profile===n)?.running)return!0}return!1}finally{t.value=!1}}async function i(n){t.value=!0;try{await z(n);for(let t=0;t<10;t++){await new Promise(e=>setTimeout(e,500));let t=await L();if(e.value=Array.isArray(t)?t:Object.values(t||{}),!e.value.find(e=>e.profile===n)?.running)return!0}return!1}finally{t.value=!1}}async function a(t,n){let r=await B(t,n),i=e.value.findIndex(e=>e.profile===t);i>=0&&(e.value[i]=r)}return{gateways:e,loading:t,fetchStatus:n,start:r,stop:i,updateSettings:a}}),H={class:`gateways-view`},U={class:`page-header`},W={class:`header-title`},G={class:`gateways-content`},K={key:0,class:`empty-state`},q={key:1,class:`gateway-list`},J={class:`gateway-info`},Y={class:`gateway-name`},X={class:`gateway-meta`},Z={class:`meta-item`},Q={key:0,class:`meta-item`},$={class:`gateway-actions`},ee={class:`pii-toggle`,title:`自动检测并隐藏敏感信息（密码、密钥等）`},te={class:`pii-label`},ne=x(y({__name:`GatewaysView`,setup(i){let{t:a}=w(),u=f(),g=V(),y=o(!1),x=o(``),k=j({mode:`both`,idle_minutes:1440,at_hour:4});function M(e){x.value=e.profile,k.mode=e.session_reset?.mode||`both`,k.idle_minutes=e.session_reset?.idle_minutes||1440,k.at_hour=e.session_reset?.at_hour??4,y.value=!0}async function N(){try{await g.updateSettings(x.value,{session_reset:{mode:k.mode,idle_minutes:k.idle_minutes,at_hour:k.at_hour}}),u.success(a(`settings.saved`)),y.value=!1}catch{u.error(a(`settings.saveFailed`))}}D(()=>{g.fetchStatus()});async function P(e,t){try{t?await g.stop(e)?u.success(`${a(`gateways.stopped`)}: ${e}`):u.error(`${e} ${a(`gateways.stopFailed`)}`):await g.start(e)?u.success(`${a(`gateways.started`)}: ${e}`):u.error(`${e} ${a(`gateways.startFailed`)}`)}catch(e){u.error(e.message)}}async function F(e,t){try{await g.updateSettings(e,{privacy:{redact_pii:t}})}catch(e){u.error(e.message)}}return(i,o)=>(S(),A(`div`,H,[p(`header`,U,[p(`h2`,W,d(E(a)(`gateways.title`)),1)]),p(`div`,G,[C(E(_),{show:E(g).loading,size:`large`},{default:h(()=>[E(g).gateways.length===0?(S(),A(`div`,K,d(E(a)(`common.noData`)),1)):(S(),A(`div`,q,[(S(!0),A(c,null,v(E(g).gateways,e=>(S(),A(`div`,{key:e.profile,class:`gateway-card`},[p(`div`,J,[p(`div`,Y,[O(d(e.profile)+` `,1),C(E(l),{type:e.running?`success`:`default`,size:`tiny`,round:``,class:`status-tag`},{default:h(()=>[O(d(e.running?E(a)(`gateways.running`):E(a)(`gateways.stopped`)),1)]),_:2},1032,[`type`])]),p(`div`,X,[p(`span`,Z,d(e.host)+`:`+d(e.port),1),e.pid?(S(),A(`span`,Q,`PID: `+d(e.pid),1)):b(``,!0)])]),p(`div`,$,[p(`div`,ee,[p(`span`,te,d(E(a)(`settings.privacy.redactPii`)),1),C(E(r),{size:`small`,value:e.redact_pii,"onUpdate:value":t=>F(e.profile,t)},null,8,[`value`,`onUpdate:value`])]),C(E(m),{size:`small`,quaternary:``,onClick:t=>M(e)},{default:h(()=>[O(d(E(a)(`gateways.sessionSettings`)),1)]),_:1},8,[`onClick`]),C(E(m),{size:`small`,type:e.running?`warning`:`primary`,round:``,onClick:t=>P(e.profile,e.running)},{default:h(()=>[O(d(e.running?E(a)(`common.stop`):E(a)(`common.start`)),1)]),_:2},1032,[`type`,`onClick`])])]))),128))]))]),_:1},8,[`show`])]),C(E(T),{show:y.value,"onUpdate:show":o[4]||=e=>y.value=e,preset:`dialog`,title:E(a)(`gateways.sessionSettings`),"show-icon":!1,style:{width:`420px`}},{action:h(()=>[C(E(m),{size:`small`,onClick:o[3]||=e=>y.value=!1},{default:h(()=>[O(d(E(a)(`common.cancel`)),1)]),_:1}),C(E(m),{size:`small`,type:`primary`,onClick:N},{default:h(()=>[O(d(E(a)(`common.save`)),1)]),_:1})]),default:h(()=>[C(E(e),{"label-placement":`left`,"label-width":`110`},{default:h(()=>[C(E(t),{label:E(a)(`settings.session.mode`)},{default:h(()=>[C(E(s),{value:k.mode,"onUpdate:value":o[0]||=e=>k.mode=e,options:[{label:E(a)(`settings.session.modeBoth`),value:`both`},{label:E(a)(`settings.session.modeIdle`),value:`idle`},{label:E(a)(`settings.session.modeHourly`),value:`hourly`}],size:`small`},null,8,[`value`,`options`])]),_:1},8,[`label`]),C(E(t),{label:E(a)(`settings.session.idleMinutes`)},{default:h(()=>[C(E(n),{value:k.idle_minutes,"onUpdate:value":o[1]||=e=>k.idle_minutes=e,min:10,max:10080,step:30,size:`small`,style:{width:`100%`}},null,8,[`value`])]),_:1},8,[`label`]),C(E(t),{label:E(a)(`settings.session.atHour`)},{default:h(()=>[C(E(I),null,{default:h(()=>[C(E(n),{value:k.at_hour,"onUpdate:value":o[2]||=e=>k.at_hour=e,min:0,max:23,step:1,size:`small`,style:{width:`100%`}},null,8,[`value`])]),_:1})]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`])]))}}),[[`__scopeId`,`data-v-d3172a33`]]);export{ne as default};