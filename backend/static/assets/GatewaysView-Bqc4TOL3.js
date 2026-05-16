import{$ as e,A as t,D as n,J as r,K as i,M as a,O as o,P as s,T as c,W as l,_t as u,b as d,c as f,j as p,lt as m,mt as h,r as g,st as _}from"./router-CZZ0bHs6.js";import{n as v}from"./pinia-3mumug6_.js";import{I as y,N as b,P as x,h as S,l as C}from"./browser-CWKi5pLK.js";import{n as w,t as T}from"./FormItem-aXSOYBIr.js";import{t as E}from"./Button-DL7rUSCi.js";import{t as D}from"./InputNumber-B3s65MrJ.js";import{t as O}from"./Switch-B06mPztD.js";import{D as k,E as A,N as j,V as M,h as N,m as P}from"./index-B-zpvUZA.js";var F=x(`input-group`,`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[b(`>`,[x(`input`,[b(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),b(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),x(`button`,[b(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[y(`state-border, border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),b(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[y(`state-border, border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),b(`*`,[b(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[b(`>`,[x(`input`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),x(`base-selection`,[x(`base-selection-label`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),x(`base-selection-tags`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),y(`box-shadow, border, state-border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),b(`&:not(:first-child)`,`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[b(`>`,[x(`input`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),x(`base-selection`,[x(`base-selection-label`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),x(`base-selection-tags`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),y(`box-shadow, border, state-border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),I=a({name:`InputGroup`,props:{},setup(e){let{mergedClsPrefixRef:t}=S(e);return C(`-input-group`,F,t),{mergedClsPrefix:t}},render(){let{mergedClsPrefix:e}=this;return s(`div`,{class:`${e}-input-group`},this.$slots)}});async function L(){return(await f(`/api/hermes/gateways`)).gateways}async function R(e){return(await f(`/api/hermes/gateways/${e}/start`,{method:`POST`})).gateway}async function z(e){await f(`/api/hermes/gateways/${e}/stop`,{method:`POST`})}async function B(e,t){return(await f(`/api/hermes/gateways/${e}/settings`,{method:`PUT`,body:JSON.stringify(t)})).gateway}var V=v(`gateways`,()=>{let e=m([]),t=m(!1);async function n(){t.value=!0;try{let t=await L();e.value=Array.isArray(t)?t:Object.values(t||{})}finally{t.value=!1}}async function r(n){t.value=!0;try{await R(n);for(let t=0;t<15;t++){await new Promise(e=>setTimeout(e,500));let t=await L();if(e.value=Array.isArray(t)?t:Object.values(t||{}),e.value.find(e=>e.profile===n)?.running)return!0}return!1}finally{t.value=!1}}async function i(n){t.value=!0;try{await z(n);for(let t=0;t<10;t++){await new Promise(e=>setTimeout(e,500));let t=await L();if(e.value=Array.isArray(t)?t:Object.values(t||{}),!e.value.find(e=>e.profile===n)?.running)return!0}return!1}finally{t.value=!1}}async function a(t,n){let r=await B(t,n),i=e.value.findIndex(e=>e.profile===t);i>=0&&(e.value[i]=r)}return{gateways:e,loading:t,fetchStatus:n,start:r,stop:i,updateSettings:a}}),H={class:`gateways-view`},U={class:`page-header`},W={class:`header-title`},G={class:`gateways-content`},K={key:0,class:`empty-state`},q={key:1,class:`gateway-list`},J={class:`gateway-info`},Y={class:`gateway-name`},X={class:`gateway-meta`},Z={class:`meta-item`},Q={key:0,class:`meta-item`},$={class:`gateway-actions`},ee=[`title`],te={class:`pii-label`},ne=P(a({__name:`GatewaysView`,setup(a){let{t:s}=g(),f=A(),v=V(),y=m(!1),b=m(``),x=_({mode:`both`,idle_minutes:1440,at_hour:4});function S(e){b.value=e.profile,x.mode=e.session_reset?.mode||`both`,x.idle_minutes=e.session_reset?.idle_minutes||1440,x.at_hour=e.session_reset?.at_hour??4,y.value=!0}async function C(){try{await v.updateSettings(b.value,{session_reset:{mode:x.mode,idle_minutes:x.idle_minutes,at_hour:x.at_hour}}),f.success(s(`settings.saved`)),y.value=!1}catch{f.error(s(`settings.saveFailed`))}}l(()=>{v.fetchStatus()});async function P(e,t){try{t?await v.stop(e)?f.success(`${s(`gateways.stopped`)}: ${e}`):f.error(`${e} ${s(`gateways.stopFailed`)}`):await v.start(e)?f.success(`${s(`gateways.started`)}: ${e}`):f.error(`${e} ${s(`gateways.startFailed`)}`)}catch(e){f.error(e.message)}}async function F(e,t){try{await v.updateSettings(e,{privacy:{redact_pii:t}})}catch(e){f.error(e.message)}}return(a,l)=>(i(),o(`div`,H,[c(`header`,U,[c(`h2`,W,u(h(s)(`gateways.title`)),1)]),c(`div`,G,[p(h(N),{show:h(v).loading,size:`large`},{default:e(()=>[h(v).gateways.length===0?(i(),o(`div`,K,u(h(s)(`common.noData`)),1)):(i(),o(`div`,q,[(i(!0),o(d,null,r(h(v).gateways,r=>(i(),o(`div`,{key:r.profile,class:`gateway-card`},[c(`div`,J,[c(`div`,Y,[t(u(r.profile)+` `,1),p(h(M),{type:r.running?`success`:`default`,size:`tiny`,round:``,class:`status-tag`},{default:e(()=>[t(u(r.running?h(s)(`gateways.running`):h(s)(`gateways.stopped`)),1)]),_:2},1032,[`type`])]),c(`div`,X,[c(`span`,Z,u(r.host)+`:`+u(r.port),1),r.pid?(i(),o(`span`,Q,`PID: `+u(r.pid),1)):n(``,!0)])]),c(`div`,$,[c(`div`,{class:`pii-toggle`,title:h(s)(`gateways.piiToggleHint`)},[c(`span`,te,u(h(s)(`settings.privacy.redactPii`)),1),p(h(O),{size:`small`,value:r.redact_pii,"onUpdate:value":e=>F(r.profile,e)},null,8,[`value`,`onUpdate:value`])],8,ee),p(h(E),{size:`small`,quaternary:``,onClick:e=>S(r)},{default:e(()=>[t(u(h(s)(`gateways.sessionSettings`)),1)]),_:1},8,[`onClick`]),p(h(E),{size:`small`,type:r.running?`warning`:`primary`,round:``,onClick:e=>P(r.profile,r.running)},{default:e(()=>[t(u(r.running?h(s)(`common.stop`):h(s)(`common.start`)),1)]),_:2},1032,[`type`,`onClick`])])]))),128))]))]),_:1},8,[`show`])]),p(h(k),{show:y.value,"onUpdate:show":l[4]||=e=>y.value=e,preset:`dialog`,title:h(s)(`gateways.sessionSettings`),"show-icon":!1,style:{width:`420px`}},{action:e(()=>[p(h(E),{size:`small`,onClick:l[3]||=e=>y.value=!1},{default:e(()=>[t(u(h(s)(`common.cancel`)),1)]),_:1}),p(h(E),{size:`small`,type:`primary`,onClick:C},{default:e(()=>[t(u(h(s)(`common.save`)),1)]),_:1})]),default:e(()=>[p(h(w),{"label-placement":`left`,"label-width":`110`},{default:e(()=>[p(h(T),{label:h(s)(`settings.session.mode`)},{default:e(()=>[p(h(j),{value:x.mode,"onUpdate:value":l[0]||=e=>x.mode=e,options:[{label:h(s)(`settings.session.modeBoth`),value:`both`},{label:h(s)(`settings.session.modeIdle`),value:`idle`},{label:h(s)(`settings.session.modeHourly`),value:`hourly`}],size:`small`},null,8,[`value`,`options`])]),_:1},8,[`label`]),p(h(T),{label:h(s)(`settings.session.idleMinutes`)},{default:e(()=>[p(h(D),{value:x.idle_minutes,"onUpdate:value":l[1]||=e=>x.idle_minutes=e,min:10,max:10080,step:30,size:`small`,style:{width:`100%`}},null,8,[`value`])]),_:1},8,[`label`]),p(h(T),{label:h(s)(`settings.session.atHour`)},{default:e(()=>[p(h(I),null,{default:e(()=>[p(h(D),{value:x.at_hour,"onUpdate:value":l[2]||=e=>x.at_hour=e,min:0,max:23,step:1,size:`small`,style:{width:`100%`}},null,8,[`value`])]),_:1})]),_:1},8,[`label`])]),_:1})]),_:1},8,[`show`,`title`])]))}}),[[`__scopeId`,`data-v-1e30fa48`]]);export{ne as default};