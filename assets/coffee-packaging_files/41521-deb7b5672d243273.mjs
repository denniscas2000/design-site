"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[41521],{711344:(e,t,n)=>{n.d(t,{xR:()=>g,ZP:()=>v,vR:()=>m});var r=n(231486),a=n(226198),i=n(932046),o=n(867820),s=n(644035),u=n(67347);let l={".pinterdev.com":"pinterdev","playhouse-worker-www":"playhouse-worker-www","playhouse-worker-sterling":"playhouse-worker-sterling","playhouse-worker-analytics":"playhouse-worker-analytics"},c=["accounts-oauth.pinterest.com","analytics-latest.pinterest.com","analytics.pinterest.com","canary.pinterest.com","latest.pinterest.com","sss.www.pinterest.com","testing.pinterest.com","testing-k8s.pinterest.com","unknown","www.pinterest.com","www.pinterest.co.kr","www.pinterest.co.uk","www.pinterest.com.au","www.pinterest.com.mx"],d=/www\.pinterest\.[A-Za-z]{2}/,p=/[A-Za-z]{2}\.pinterest\.com/,f=()=>{let e=navigator&&navigator.userAgent.toLowerCase();if(e){if(e.indexOf("googlebot")>-1||e.indexOf("google web preview")>-1||e.indexOf("google page speed insights")>-1)return"google_bot";if(e.indexOf("msnbot")>-1||e.indexOf("bingbot")>-1)return"ms_bot";if(e.indexOf("applebot")>-1)return"apple_bot";if(e.indexOf("yahoo")>-1||e.indexOf("slurp")>-1)return"yahoo_bot";else if(e.indexOf("yandex")>-1)return"yandex"}},m=e=>{let{userAgent:t}=e;if(!t.isMobile&&!t.isTablet)return"desktop";switch(t.platform){case s.RL:return"iphone";case s.GW:return t.isTablet?"android_tablet":"android";case s.s4:return"ipad";default:return"mobile_other"}};function g(e){let t=c.indexOf(e)>-1||d.test(e)||p.test(e);if(t)return e;for(let t in l)if(Object.prototype.hasOwnProperty.call(l,t)&&e.indexOf(t)>-1)return l[t];return"other"}let h=({moduleName:e,pageType:t,requestContext:n})=>{let s;let l=m(n),c=n.isAuthenticated?"auth":"unauth",d=f(),p=(0,i.Z)(),h=(s=!1,r.U2(a.VL)||(r.t8(a.VL,"1",(0,r.kZ)(a.VL)),s=!0),s),v=document.domain||"unknown";h&&((0,o.My)(`traffic.${l}.${p}.${e}.${c}`),(0,o.My)(`traffic_subdomain.${v}.${p}.${e}.${c}`),(0,o.My)(`traffic_subdomain.${v}.${l}.${p}.${e}.${c}`),(0,o.My)(`traffic_subdomain.${v}.${l}.${c}`),(0,o.My)(`traffic_duplo.${l}.${p}.${e}.${c}`),d&&(0,o.My)(`traffic_bot.${d}.${e}`));let y={domain:g(v),referrer:p??"unknown",platform:l??"unknown",browser:n.userAgent.browserName??"unknown",bot_type:d??"none",page_type:t??"unknown",is_auth:c??"unknown",module:e??"unknown",moduleType:function(e){if(/.*Board(React)?Page(Wrapper)?$/.test(e))return"Board";if(/Closeup|.*Pin(Landing|React)?Page$/.test(e))return"Pin";if("HomePage"===e||"UnauthHomeReactPage"===e||"LoginPage"===e||"Signup"===e)return"Home";if(/.*ProfilePage(Container)?$/.test(e))return"Profile";if("TopicPage"===e||"UnauthTopicPage"===e)return"Topic";if(/.*TodayTab(Feed)?Page$/.test(e))return"TodayTab";if("UnauthTodayArticleFeedPage"===e||"TodayArticleFeedPage"===e)return"TodayArticle";else if(/.*Idea(s)?RootPage$/.test(e))return"IdeasRoot";else if(/.*Idea(s)?(Topic)?Page$/.test(e))return"Ideas";else if(/.*Video(s)?RootPage$/.test(e))return"VideosRoot";else if(/.*Video(s)?(Category)?Page$/.test(e))return"VideosCategory";else if(/.*ShoppingRootPage$/.test(e))return"ShoppingRoot";else if(/.*Shopping(Category)?Page$/.test(e))return"ShoppingCategory";else return"other"}(e??"unknown"),first_visit:h??"unknown"};(0,u.nP)("webapp.traffic",{sampleRate:.1,tags:y}),("google"===p||"other"===p)&&(0,u.nP)(`webapp.traffic.${l}.${p}`,{sampleRate:.1,tags:y})};function v({pageType:e,requestContext:t,route:n}){h({moduleName:{"/":"HomePage","/login":"LoginPage","/pin/:id":"Closeup","/:username":"ProfilePage","/:username/:slug":"BoardPage","/topics/:interest":"TopicPage","/today":"TodayTabPage","/today/:term/:title/:articleId":"TodayArticleFeedPage","/ideas":"IdeasRootPage","/ideas/:interest/:id":"IdeasPage","/videos":"VideosRootPage","/videos/:category/:id":"VideosCategoryPage","/shopping":"ShoppingRootPage","/shopping/:category/:id":"ShoppingCategoryPage"}[n]||"other",pageType:e,requestContext:t})}},873734:(e,t,n)=>{n.d(t,{cA:()=>Y,fM:()=>W,N5:()=>q});var r=n(667294),a=n(616550),i=n(991067),o=n(7789),s=n(534539),u=n(969853),l=n(45528),c=n(711344),d=n(31062),p=n(156381),f=n(311560),m=n(435851),g=n(69028);let h=({botType:e,browserName:t,deviceType:n,region:r})=>{let a=`pwtlogger.${e}.${n}`,i=["all",...r?[r.toLowerCase()]:[]];"OTHER"!==r&&i.push("ALL_EXCLUDING_OTHER");let o=[];"desktop"===n?("Chrome"===t||"Edge"===t||"Safari"===t||"Firefox"===t||"Opera"===t)&&(o=[t.toLowerCase().replace(/\s/g,"_")]):"phone"===n?("Chrome"===t||"Mobile Safari"===t||"Samsung Browser"===t||"Chrome WebView"===t||"GSA"===t)&&(o=[t.toLowerCase().replace(/\s/g,"_")]):"tablet"===n&&"Chrome"===t&&(o=[t.toLowerCase().replace(/\s/g,"_")]);let s=["all",...o],u=[];return i.forEach(e=>{s.forEach(t=>{u.push(`${a}.region_${e}.browser_${t}`)})}),u};var v=n(991565),y=n(893641);let w=e=>10*Math.round(e/10);var E=n(361115),_=n(67347);let T={pin_closeup:{LCP:"pin_closeup_lcp",INP:"pin_closeup_inp"},board:{LCP:"board_lcp",INP:"board_inp"},other_profile:{LCP:"other_profile_lcp",INP:"other_profile_inp"},topic:{LCP:"topic_lcp",INP:"topic_inp"}},b=["CA","GB","DE","FR","AU","JP","BR","MX","AU","IN"],S=({surface:e,pwtStaticContext:t})=>{switch(e){case"pin_closeup":return[(0,E.Uw)({isDesktop:"desktop"===t.deviceType,viewerType:t.isBot&&"bot"||t.isAuthenticated&&"auth"||"unauth"}),t.isAuthenticated?"web_eager_loadable_auth":"web_eager_loadable_unauth"];case"board":return[t.isAuthenticated?"web_eager_loadable_auth":"web_eager_loadable_unauth"];default:return[]}},L=({pwtStaticContext:e,surface:t})=>{let n=(0,d.Jx)({annotateExperiments:S({surface:t,pwtStaticContext:e}),annotateResourceTimingForSurface:t,annotateMarks:["initialAppLoad","RenderReactContainer",...e.isAuthenticated?[]:["firstClientRenderUnauthPageWrapper","mountUnauthPageWrapper"],..."pin_closeup"===t?["firstClientRenderCloseupPage","firstClientRenderCloseupImage"]:[]],name:T[t].LCP,pwtStaticContext:e}),r=(0,d.Jx)({name:T[t].INP,pwtStaticContext:e});return(e,t)=>{"LCP"===e?n.stop(t):"INP"===e&&r.stop(t)}},C=({pwtStaticContext:e,surface:t,getCurrentRoute:n})=>{let r=L({pwtStaticContext:e,surface:t}),{isAuthenticated:a,isBot:i,isSocialBot:o,deviceType:s,country:u,fullPath:d,browserName:E,osName:T}=e,S={},C=({name:l,value:p,metricDetails:w})=>{if(!S[l]){let L;S[l]=!0;let C=(0,m.Z)(e),P=`${C}.${t}.${l}`,$=`${C}.tags.${t}.${l}`;if(L="iOS"===T&&"Chrome"===E?"iOS_Chrome":"CrUX","LCPCount"===l)(0,_.QX)(`${P}.sum`,p,{sampleRate:1}),(0,_.nP)(`${P}.size`,{sampleRate:1});else{let e=(0,f.Z)(u),m=(0,g.Z)(d);if("INP"===l){if(w){let{rating:t,navigationType:r}=w,{interactionTime:i,interactionType:o,loadState:s}=w.attribution,u=(0,v.Z)(i),{path:l}=n(),d={isAuth:a,path:l,CrUXSegment:L,region:e,CWVBucket:t,eventTimeGroup:u,interactionType:o,loadState:s,navigationType:r,domain:(0,c.xR)(document.domain||"unknown")};if((0,_.LY)(`${P}`,p,{sampleRate:1}),(0,_.LY)(`${$}`,p,{sampleRate:1,tags:d}),"Chrome"===E&&w.attribution){let e=(0,y.b)(w);e&&(0,_.LY)(`${P}.INPBoundary`,p,{sampleRate:1,tags:{...d,INPBoundary:e}}),["inputDelay","processingDuration","presentationDelay"].forEach(e=>{(0,_.LY)(`${P}.${e}`,w.attribution[e],{sampleRate:1,tags:d})})}}}else"LCP"===l?((0,_.LY)(`${P}`,p,{sampleRate:1}),(0,_.LY)(`${$}`,p,{sampleRate:1,tags:{isAuth:a,CrUXSegment:L,region:e,...m&&{pinType:m}}})):"CLS"===l&&((0,_.LY)(`${P}`,100*p,{sampleRate:1}),(0,_.LY)(`${$}`,100*p,{sampleRate:1,tags:{isAuth:a,CrUXSegment:L,region:e}}));!a&&b.includes(u)&&h({botType:o&&"socialBot"||i&&"bot"||"nonbot",browserName:E,deviceType:s,region:e}).forEach(e=>{(0,_.LY)(`${e}.tags.growthSEO.${t}_${l}`,p,{sampleRate:1,tags:{country:u}})}),r(l,p)}}};(0,l.NO)(({value:e})=>{C({name:"LCPCount",value:(0,p.Kj)()}),C({name:"LCP",value:w(e)})}),(0,l.a4)(({value:e})=>{C({name:"FCP",value:e})}),(0,l.Yn)(e=>{C({name:"INP",value:e.value,metricDetails:e})}),(0,l.mw)(({value:e})=>{C({name:"CLS",value:e})})};var P=n(790348),$=n(543059),R=n(383434);let A=(0,R.XV)("LayoutShiftDebugger"),k=e=>e<=.1?"good":e<=.25?"adequate":"poor",O=e=>e instanceof HTMLElement&&e.dataset&&(e.dataset.layoutShiftBoundaryId||e.dataset.testId)||e.parentNode&&O(e.parentNode)||null,M=e=>Math.round(1e3*e),I=[],x=e=>{let t=Object.freeze({}),n=0;I.forEach(({value:e,shift:{sources:r},route:a,params:i,hadRecentNavigation:o,hadRecentScroll:s,isAuth:u})=>{if(n+=e,!r||!r.length)return;let l=e/r.length;r.forEach(({node:e})=>{let n=e?O(e)||"ROOT":"NODE_REMOVED",r=i&&i.scope?i.scope:"none",d={route:a,searchScope:r,boundaryId:n,hadRecentNavigation:o,hadRecentScroll:s,isAuth:u,domain:(0,c.xR)(document.domain||"unknown")},p=JSON.stringify(d);t={...t,[p]:{score:((t[p]||{}).score||0)+l,tags:d}}})}),Object.keys(t).forEach(n=>{let{score:r,tags:a}=t[n];(0,_.QX)(`${e}.shifts`,M(r),{sampleRate:1,tags:{...a}}),(0,_.LY)(`${e}.shifts`,M(r),{sampleRate:1,tags:{...a}})}),A("Debug CLS boundaries",n,t,I),I=[]},N=({staticContext:e,getCurrentRoute:t,getLastNavigationTime:n})=>{let r;let a=(0,d.Jx)({annotateMarks:["initialAppLoad","RenderReactContainer"],name:"cumulative_layout_shift",pwtStaticContext:e}),i=0,o=e=>{i=e.timeStamp};window.addEventListener("scroll",o),window.addEventListener("beforeunload",()=>{window.removeEventListener("scroll",o)});let s=`${(0,m.Z)(e)}.CLS`,u=()=>x(s),c=0,p=0,f=0;(0,l.mw)(({entries:a,value:o})=>{if(f=o||0,a.length){let{path:s,params:u}=t();r=n();let l=a[0].startTime,d=c!==l,f=d?a:a.slice(p);d&&(c=l),I=I.concat(f.map(t=>({value:o,shift:t,route:s,params:u,hadRecentNavigation:r>0&&r+500>t.startTime,hadRecentScroll:i>0&&i+500>t.startTime,isAuth:e.isAuthenticated}))),p=a.length}},!0);let g=setInterval(()=>{if(I.length){u();let e=k(f);(0,_.QX)(`${s}.${e}`,1,{sampleRate:1}),(0,_.LY)(`${s}.${e}`,1,{sampleRate:1}),a.stop(M(f))}},1e3);window.addEventListener("beforeunload",()=>{clearInterval(g),0===f&&a.abort("no_shifts_detected")})},D=null,B=(e,t)=>{let n,r=0,a=0,i=null,o=null,s=null,u=null,l=[],c=()=>{a+=1,s=window.requestAnimationFrame(c)},p=()=>{if(u){let n=l.some(e=>null!==i&&i-e>0&&i-e<=500),a=t(),{isAuthenticated:s}=e;if(n){let t=(0,d.Jx)({name:"scroll_session",pwtStaticContext:e});if(!t)return;let n={surface:a,isAuthenticated:s};if(null===i||null===o||0===r){if(null===i&&null===o)t.error("no_duration",n);else if(null==i)D=o,t.error("no_start",n);else if(null==o){let e;e=D&&i-D<750?"no_end.outside_window":"no_end.single_event",t.error(e,n)}else t.error("no_frames",n)}else{D=o;let e=o-i,u=e/r;0===u?t.error("zero_value",n):u<0?t.error("negative_value",n):(t.addBinaryAnnotation("surface",a,"STRING"),t.addBinaryAnnotation("isAuthenticated",s,"BOOL"),t.addBinaryAnnotation("duration_ms",e,"I32"),t.addBinaryAnnotation("total_frames_rendered",r,"I16"),t.stop(u))}}else(0,P.A9)("WARN.scroll_session.not_user",{tags:{isAuthenticated:s,surface:a}})}window.cancelAnimationFrame(s),r=0,a=0,l=[],o=null,i=null,u=null},f=({timeStamp:e})=>{n&&clearTimeout(n),n=setTimeout(p,500),null===u?(u=100*Math.random()<10)&&(s=window.requestAnimationFrame(c),i=e):u&&(o=e,r+=a,a=0)},m=({timeStamp:e})=>{l.push(e)};["wheel","pointerdown","keydown"].forEach(e=>{window.addEventListener(e,m,{passive:!0,capture:!0})}),window.addEventListener("scroll",f,{passive:!0}),window.addEventListener("pagehide",()=>{window.removeEventListener("scroll",f),["wheel","pointerdown","keydown"].forEach(e=>{window.removeEventListener(e,m)})})};var Z=n(22773),H=n(785893);let F=(0,r.createContext)(null),V=(0,r.createContext)(null),j=()=>{(0,P.A9)("totalSessionVolume"),window.performance?["clearMarks","clearMeasures","clearResourceTimings","getEntries","getEntriesByName","getEntriesByType","mark","measure","now","setResourceTimingBufferSize"].forEach(e=>{window.performance[e]||(0,P.A9)(`not_supported.window.performance.${e}`)}):(0,P.A9)("not_supported.window.performance"),window.PerformanceObserver||(0,P.A9)("not_supported.window.PerformanceObserer"),(0,u.v)()||(0,P.A9)("not_supported.grid_profiler")},U=()=>window.performance?.now?window.performance.now():null,z=e=>["/advertiser/"].reduce((t,n)=>e.includes(n)||t,!1);function Y({children:e,immutableLocation:t,resourceTimingCacheSize:n,routerHistoryAction:u,staticContext:l}){let c=(0,r.useRef)(null),d=(0,r.useRef)(null),f=(0,r.useRef)(t),m=(0,r.useRef)(!0),{path:g,params:h}=(0,a.$B)(),v=(0,r.useRef)(g),y=(0,r.useRef)(h),w=!l.isCachedRender&&(0,i.Z)(l.deviceType);(0,r.useEffect)(()=>{v.current=g},[g]),(0,r.useEffect)(()=>{y.current=h},[h]),(0,r.useEffect)(()=>{if((0,Z.X_)({size:n||1e3}),(0,p.UQ)(),j(),m.current=!1,w&&!o.is&&(l.disableScrollExperiment||B(l,()=>(0,s.Ng)(v.current)||v.current||"UNKNOWN_SURFACE"),"Chrome"===l.browserName)){N({staticContext:l,getCurrentRoute:()=>({path:v.current,params:y.current}),getLastNavigationTime:()=>d.current||0});let e=(0,s.e)(v.current);e&&C({pwtStaticContext:l,surface:e,getCurrentRoute:()=>({path:v.current})})}},[]);let E=z(t.pathname)?f.current.pathname!==t.pathname:f.current!==t;if(E){f.current=t,d.current=U();let{current:e}=d;if(!m.current){let t=!c.current;(0,P.A9)("routeStart",{tags:{action:u}}),(0,Z.Eg)(t),(0,p.Ux)(t),(0,p.on)(),(0,$.tl)();let{customBufferSize:n,defaultBufferSize:r}=(0,Z.LH)();e&&((0,P.A9)("routeStart.customBufferSize",{count:n}),(0,P.A9)("routeStart.defaultBufferSize",{count:r}),c.current={time:e,action:u})}}return(0,H.jsx)(F.Provider,{value:w?l:null,children:(0,H.jsx)(V.Provider,{value:c.current,children:e})})}let W=()=>(0,r.useContext)(V),q=()=>(0,r.useContext)(F)},534539:(e,t,n)=>{n.d(t,{Ng:()=>r,e:()=>a,nw:()=>i});let r=e=>{switch(e){case"/":return"homefeed";case"/pin/:id":case"/pin/:id/sent":return"pin_closeup";case"/pin/:id/visual-search":return"flashlight";case"/:username/:slug":return"board";case"/:username":return"other_profile";case"/search/:scope":return"search";case"/ideas/:interest/:id":return"topic";default:return null}},a=e=>{switch(e){case"/pin/:id":case"/pin/:id/sent":return"pin_closeup";case"/:username/:slug":return"board";case"/:username":return"other_profile";case"/ideas/:interest/:id":return"topic";default:return null}},i=e=>{let t=[{pattern:"/",name:"homefeed"},{pattern:"/pin/:id",name:"pin_closeup"},{pattern:"/pin/:id/sent",name:"pin_closeup"},{pattern:"/pin/:id/visual-search",name:"flashlight"},{pattern:"/search",name:"search_landing_page"},{pattern:"/search/:scope",name:"search_results"},{pattern:"/notifications",name:"notifications"},{pattern:"/settings",name:"settings_landing_page"},{pattern:"/settings/:tab",name:"settings_tab"},{pattern:"/:username/_created",name:"profile_created_tab"},{pattern:"/:username/_saved",name:"profile_saved_tab"},{pattern:"/:username/:slug",name:"board"},{pattern:"/:username",name:"profile"},{pattern:"/ideas/:interest/:id",name:"topic"}].find(t=>{if(!e)return"pathname_invalid";let n=t.pattern.split("/").filter(e=>""!==e),r=e.split("/").filter(e=>""!==e);if(n.length!==r.length)return!1;for(let e=0;e<n.length;e+=1)if(!n[e].startsWith(":")&&r[e]!==n[e])return!1;return!0});return t?t.name:"unknown"}},607150:(e,t,n)=>{n.d(t,{D3:()=>i,Hd:()=>u,jh:()=>s,rX:()=>o});var r=n(672115),a=n(156381);let i=e=>({...(0,r.Z)(e),domComplete:e.domComplete||0,domContentLoadedEventEnd:e.domContentLoadedEventEnd||0,domContentLoadedEventStart:e.domContentLoadedEventStart||0,domInteractive:e.domInteractive||0,loadEventEnd:e.loadEventEnd||0,loadEventStart:e.loadEventStart||0}),o=()=>{let{largestContentfulPaint:e}=(0,a.v2)();return{largestContentfulPaint:e||0}},s=(e,t)=>Object.keys(t).reduce((n,r)=>({...n,[`${e}${r}`]:t[r]}),{}),u=(e,t)=>Object.keys(e).reduce((n,r)=>t.includes(r)?{...n,[r]:e[r]}:n,Object.freeze({}))},672115:(e,t,n)=>{n.d(t,{Z:()=>r});let r=e=>({connectEnd:e.connectEnd||0,connectStart:e.connectStart||0,domainLookupEnd:e.domainLookupEnd||0,domainLookupStart:e.domainLookupStart||0,fetchStart:e.fetchStart||0,requestStart:e.requestStart||0,redirectEnd:e.redirectEnd||0,redirectStart:e.redirectStart||0,responseEnd:e.responseEnd||0,responseStart:e.responseStart||0,secureConnectionStart:e.secureConnectionStart||0,startTime:e.startTime||0,workerStart:e.workerStart||0,unloadEventStart:e.unloadEventStart||0,unloadEventEnd:e.unloadEventEnd||0})},505771:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(528961),a=n(672115),i=n(358864);let o=({category:e,isDeferred:t,isExternal:n})=>[e].concat(t?["deferred"]:[]).concat(n?["external"]:[]).join("_");function s(e,t){let{category:n,timing:s,isDeferred:u,isExternal:l,isVisuallyCompleteRequired:c}=e;return s.responseEnd&&("image"!==n||c)?{name:o(e),id:(0,i.Z)(),parentId:t,startTime:s.startTime,endTime:s.responseEnd,annotationMap:(0,a.Z)(s),binaryAnnotationMap:{category:(0,r.sk)(n),decodedBodySize:(0,r.cC)(s.decodedBodySize||0),initiatorType:(0,r.sk)(s.initiatorType),isDeferred:(0,r.qr)(u),isExternal:(0,r.qr)(l),name:(0,r.sk)(s.name),nextHopProtocol:(0,r.sk)(s.nextHopProtocol),transferSize:(0,r.cC)(s.transferSize||0)}}:null}},31062:(e,t,n)=>{n.d(t,{ku:()=>$,Jx:()=>L,PY:()=>P});var r=n(383434),a=n(790348),i=n(543059),o=n(607150),s=n(638089),u=n(860273),l=n(156381);let c=()=>(0,l.PJ)().reduce((e,{identifier:t,loadTime:n,renderTime:r})=>e[`${t}_loadTime`]?e[`${t}_dupe_loadTime`]?{...e,[`${t}_dupe_loadTime`]:n,[`${t}_dupe_renderTime`]:r}:e:{...e,[`${t}_loadTime`]:n,[`${t}_renderTime`]:r},Object.freeze({}));var d=n(672115),p=n(464609),f=n(22773);let m=e=>{let t=(0,f.y0)();return e.reduce((e,{name:n,match:r})=>t.filter(e=>r(e)).slice(0,2).reduce((e,t,r)=>({...e,...(0,o.jh)(`${n}${r?"_dupe1":""}_`,(0,d.Z)(t))}),e),Object.freeze({}))},g=e=>{if("pin_closeup"===e){let e=(0,p.Z)();return m([{name:"mainImage",match:({name:t})=>t===e},{name:"PinResource",match:({name:e})=>e.includes("PinResource")}])}return{}};var h=n(453821),v=n(558775),y=n(505771),w=n(69028),E=n(169213),_=n(358864);let T=(0,r.XV)("LightStopwatch"),b=()=>{let e=[],t=null;return window.PerformanceObserver&&(t=(0,E.Z)({entryTypes:["resource"]},t=>{(e=e.concat(t.getEntries())).length>1e3&&(e=e.slice(-1e3))})),{get:()=>e,disconnect:()=>{t&&t.disconnect()}}},S={},L=({annotateExperiments:e,annotateMarks:t,annotateResourceTimingForSurface:n,name:r,pwtStaticContext:l})=>{let d=b(),p=(0,w.Z)(l.fullPath),f=!0,m={...p?{pagePath:{value:p,type:"STRING"}}:{}};(0,a.A9)(`TIMING.${r}`,{tags:{isAuth:l.isAuthenticated}});let E={type:"stopwatch",name:r,navigationType:"initial_app_load"},L={abort:e=>{if(!f){(0,a.H)("duplicate_abort_action",{action:r});return}f=!1,(0,v.Z)({metricId:E,pwtStaticContext:l,result:{type:"ABORT",reason:e}})},error:(e,t)=>{let n={...t,action:r};if(!f){(0,a.H)("duplicate_error_action",n);return}e&&(0,a.H)(e,n),d&&d.disconnect(),f=!1},stop:p=>{if(!f){(0,a.H)("duplicate_stop_action",{action:r});return}f=!1,d.disconnect();let w=(0,_.Z)(),T=(0,u.Z)(),b=d.get(),S={type:"COMPLETE",traceId:(0,_.Z)(),startTime:0,endTime:p,spans:[{name:"network_resources",id:w,startTime:0,endTime:p,annotationMap:{},binaryAnnotationMap:{},parentId:null},...b.map(e=>(0,y.Z)((0,h.p)(e,[]),w)).filter(Boolean)],annotationMap:{...(0,o.jh)("resource_",n?g(n):{}),...(0,o.jh)("element_",c()),...(0,o.jh)("mark_",t&&t.length?(0,o.Hd)((0,i.gQ)(),t):{}),...(0,o.jh)("browser_",T?(0,o.D3)(T):{})},binaryAnnotationMap:(0,s.ng)({annotateExperiments:e,metricId:E,pwtStaticContext:l,performanceResourceTimings:b,binaryAnnotations:m})};(0,v.Z)({metricId:E,pwtStaticContext:l,result:S,isAuth:l.isAuthenticated})},addBinaryAnnotation:(e,t,n)=>{T(`adding binary annotation {${e}: ${String(t)}}`),m={...m,[e]:{value:t,type:n}}}};return S[r]=L,L},C=e=>S[e],P=e=>!!C(e),$=({stopwatchName:e,binaryAnnotationName:t,value:n,annotationType:r})=>{let a=C(e);a&&a.addBinaryAnnotation(t,n,r)}},991565:(e,t,n)=>{n.d(t,{Z:()=>r});let r=e=>e<100?"0-100ms":e<250?"100-250ms":e<500?"250-500ms":e<1e3?"500-1000ms":e<2e3?"1000-2000ms":e<3e3?"2000-3000ms":e<4e3?"3000-4000ms":e<5e3?"4000-5000ms":e<6e3?"5000-6000ms":e<7e3?"6000-7000ms":e<8e3?"7000-8000ms":e<9e3?"8000-9000ms":e<1e4?"9000-10000ms":e<15e3?"10000-15000ms":e<2e4?"15000-20000ms":e<25e3?"20000-25000ms":"25000+ms"},435851:(e,t,n)=>{n.d(t,{Z:()=>r});let r=e=>{let{deviceType:t,isBot:n,isSocialBot:r}=e;return`coreWebVitalsLite.v1.${r&&"socialBot"||n&&"bot"||"nonbot"}.${t}`}},69028:(e,t,n)=>{n.d(t,{Z:()=>r});function r(e){let t=e.split("?")[0]??"";if(!t.startsWith("/pin/"))return null;let n=t.split("/")[3];return n?"feedback"===n||"sent"===n?n:null:"default"}},893641:(e,t,n)=>{n.d(t,{V:()=>i,b:()=>a});let r=e=>e?e.tagName||null!==e.parentElement?"HTML"===e.tagName&&null===e.parentElement?"HTML":"BODY"===e.tagName&&e.parentElement?.tagName==="HTML"?"BODY":e.dataset.layoutShiftBoundaryID||e.dataset.testId?e.dataset.layoutShiftBoundaryID||e.dataset.testId:e.parentElement?r(e.parentElement):"NOT_A_NODE":"DOCUMENT":"NODE_REMOVED",a=e=>{let t=e.attribution.processedEventEntries.find(t=>t.startTime===e.attribution.interactionTime),n=t?t.target:null;return n?r(n):"NODE_REMOVED"},i=e=>e?r(e):"NODE_REMOVED"},464609:(e,t,n)=>{n.d(t,{Z:()=>a,f:()=>r});let r="closeupImage",a=()=>{if(!document.querySelector)return null;let e=document.querySelector('head>link[rel="preload"][as="image"][href^="https://i.pinimg.com/"]');return e instanceof HTMLLinkElement?e.href:null}},644035:(e,t,n)=>{n.d(t,{GW:()=>a,RL:()=>r,s4:()=>i});let r="ios",a="android",i="ipad"},45528:(e,t,n)=>{n.d(t,{NO:()=>eo,Yn:()=>er,a4:()=>k,mw:()=>R});var r,a,i=function(){return self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},o=function(e){if("loading"===document.readyState)return"loading";var t=i();if(t){if(e<t.domInteractive)return"loading";if(0===t.domContentLoadedEventStart||e<t.domContentLoadedEventStart)return"dom-interactive";if(0===t.domComplete||e<t.domComplete)return"dom-content-loaded"}return"complete"},s=function(e){var t=e.nodeName;return 1===e.nodeType?t.toLowerCase():t.toUpperCase().replace(/^#/,"")},u=function(e,t){var n="";try{for(;e&&9!==e.nodeType;){var r=e,a=r.id?"#"+r.id:s(r)+(r.classList&&r.classList.value&&r.classList.value.trim()&&r.classList.value.trim().length?"."+r.classList.value.trim().replace(/\s+/g,"."):"");if(n.length+a.length>(t||100)-1)return n||a;if(n=n?a+">"+n:a,r.id)break;e=r.parentNode}}catch(e){}return n},l=-1,c=function(){return l},d=function(e){addEventListener("pageshow",function(t){t.persisted&&(l=t.timeStamp,e(t))},!0)},p=function(){var e=i();return e&&e.activationStart||0},f=function(e,t){var n=i(),r="navigate";return c()>=0?r="back-forward-cache":n&&(document.prerendering||p()>0?r="prerender":document.wasDiscarded?r="restore":n.type&&(r=n.type.replace(/_/g,"-"))),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},m=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver(function(e){Promise.resolve().then(function(){t(e.getEntries())})});return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},g=function(e,t,n,r){var a,i;return function(o){var s;t.value>=0&&(o||r)&&((i=t.value-(a||0))||void 0===a)&&(a=t.value,t.delta=i,t.rating=(s=t.value)>n[1]?"poor":s>n[0]?"needs-improvement":"good",e(t))}},h=function(e){requestAnimationFrame(function(){return requestAnimationFrame(function(){return e()})})},v=function(e){document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState&&e()})},y=function(e){var t=!1;return function(){t||(e(),t=!0)}},w=-1,E=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},_=function(e){"hidden"===document.visibilityState&&w>-1&&(w="visibilitychange"===e.type?e.timeStamp:0,b())},T=function(){addEventListener("visibilitychange",_,!0),addEventListener("prerenderingchange",_,!0)},b=function(){removeEventListener("visibilitychange",_,!0),removeEventListener("prerenderingchange",_,!0)},S=function(){return w<0&&(w=E(),T(),d(function(){setTimeout(function(){w=E(),T()},0)})),{get firstHiddenTime(){return w}}},L=function(e){document.prerendering?addEventListener("prerenderingchange",function(){return e()},!0):e()},C=[1800,3e3],P=function(e,t){t=t||{},L(function(){var n,r=S(),a=f("FCP"),i=m("paint",function(e){e.forEach(function(e){"first-contentful-paint"===e.name&&(i.disconnect(),e.startTime<r.firstHiddenTime&&(a.value=Math.max(e.startTime-p(),0),a.entries.push(e),n(!0)))})});i&&(n=g(e,a,C,t.reportAllChanges),d(function(r){n=g(e,a=f("FCP"),C,t.reportAllChanges),h(function(){a.value=performance.now()-r.timeStamp,n(!0)})}))})},$=[.1,.25],R=function(e,t){var n,r;n=function(t){(function(e){if(e.entries.length){var t,n=e.entries.reduce(function(e,t){return e&&e.value>t.value?e:t});if(n&&n.sources&&n.sources.length){var r=(t=n.sources).find(function(e){return e.node&&1===e.node.nodeType})||t[0];if(r)return void(e.attribution={largestShiftTarget:u(r.node),largestShiftTime:n.startTime,largestShiftValue:n.value,largestShiftSource:r,largestShiftEntry:n,loadState:o(n.startTime)})}}e.attribution={}})(t),e(t)},r=(r=t)||{},P(y(function(){var e,t=f("CLS",0),a=0,i=[],o=function(n){n.forEach(function(e){if(!e.hadRecentInput){var t=i[0],n=i[i.length-1];a&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(a+=e.value,i.push(e)):(a=e.value,i=[e])}}),a>t.value&&(t.value=a,t.entries=i,e())},s=m("layout-shift",o);s&&(e=g(n,t,$,r.reportAllChanges),v(function(){o(s.takeRecords()),e(!0)}),d(function(){a=0,e=g(n,t=f("CLS",0),$,r.reportAllChanges),h(function(){return e()})}),setTimeout(e,0))}))},A=function(e){return e<=0||e>performance.now()},k=function(e,t){P(function(t){!function(e){if(e.entries.length){var t=i(),n=e.entries[e.entries.length-1];if(t){var r=t.responseStart;if(A(r))return;var a=Math.max(0,r-(t.activationStart||0));return void(e.attribution={timeToFirstByte:a,firstByteToFCP:e.value-a,loadState:o(e.entries[0].startTime),navigationEntry:t,fcpEntry:n})}}e.attribution={timeToFirstByte:0,firstByteToFCP:e.value,loadState:o(c())}}(t),e(t)},t)},O=0,M=1/0,I=0,x=function(e){e.forEach(function(e){e.interactionId&&(M=Math.min(M,e.interactionId),O=(I=Math.max(I,e.interactionId))?(I-M)/7+1:0)})},N=function(){"interactionCount"in performance||r||(r=m("event",x,{type:"event",buffered:!0,durationThreshold:0}))},D=[],B=new Map,Z=0,H=[],F=function(e){if(H.forEach(function(t){return t(e)}),e.interactionId||"first-input"===e.entryType){var t=D[D.length-1],n=B.get(e.interactionId);if(n||D.length<10||e.duration>t.latency){if(n)e.duration>n.latency?(n.entries=[e],n.latency=e.duration):e.duration===n.latency&&e.startTime===n.entries[0].startTime&&n.entries.push(e);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};B.set(r.id,r),D.push(r)}D.sort(function(e,t){return t.latency-e.latency}),D.length>10&&D.splice(10).forEach(function(e){return B.delete(e.id)})}}},V=function(e){var t=self.requestIdleCallback||self.setTimeout,n=-1;return e=y(e),"hidden"===document.visibilityState?e():(n=t(e),v(e)),n},j=[200,500],U=function(e,t){t=t||{},L(function(){N();var n,a,i=f("INP"),o=function(e){e.forEach(F);var t,n=(t=Math.min(D.length-1,Math.floor(((r?O:performance.interactionCount||0)-Z)/50)),D[t]);n&&n.latency!==i.value&&(i.value=n.latency,i.entries=n.entries,a())},s=m("event",o,{durationThreshold:null!==(n=t.durationThreshold)&&void 0!==n?n:40});a=g(e,i,j,t.reportAllChanges),s&&("PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&s.observe({type:"first-input",buffered:!0}),v(function(){o(s.takeRecords()),a(!0)}),d(function(){Z=0,D.length=0,B.clear(),a=g(e,i=f("INP"),j,t.reportAllChanges)}))})},z=[],Y=new Map,W=[],q=new WeakMap,X=-1,G=function(e){e.forEach(function(e){return z.push(e)})},J=function(){W=W.slice(-50);var e=new Set(W.concat(D.map(function(e){return q.get(e.entries[0])})));Y.forEach(function(t,n){e.has(n)||Y.delete(n)});var t=new Set;Y.forEach(function(e){en(e.startTime,e.processingEnd).forEach(function(e){t.add(e)})}),z=Array.from(t),X=-1};H.push(function(e){for(var t,n=e.startTime+e.duration,r=W.length-1;r>=0;r--)if(8>=Math.abs(n-(t=W[r]))){var a=Y.get(t);a.startTime=Math.min(e.startTime,a.startTime),a.processingStart=Math.min(e.processingStart,a.processingStart),a.processingEnd=Math.max(e.processingEnd,a.processingEnd),a.entries.push(e),n=t;break}n!==t&&(W.push(n),Y.set(n,{startTime:e.startTime,processingStart:e.processingStart,processingEnd:e.processingEnd,entries:[e]})),(e.interactionId||"first-input"===e.entryType)&&q.set(e,n),X<0&&(X=V(J))});var Q,K,ee,et,en=function(e,t){for(var n,r=[],a=0;n=z[a];a++)if(!(n.startTime+n.duration<e)){if(n.startTime>t)break;r.push(n)}return r},er=function(e,t){a||(a=m("long-animation-frame",G)),U(function(t){V(function(){var n,r,a,i,s,l,c,d,p,f;n=t.entries[0],r=q.get(n),a=Y.get(r),i=n.processingStart,s=a.processingEnd,l=a.entries.sort(function(e,t){return e.processingStart-t.processingStart}),c=en(n.startTime,s),d=t.entries.find(function(e){return e.target}),p=[n.startTime+n.duration,s].concat(c.map(function(e){return e.startTime+e.duration})),f=Math.max.apply(Math,p),t.attribution={interactionTarget:u(d&&d.target),interactionType:n.name.startsWith("key")?"keyboard":"pointer",interactionTime:n.startTime,nextPaintTime:f,processedEventEntries:l,longAnimationFrameEntries:c,inputDelay:i-n.startTime,processingDuration:s-i,presentationDelay:Math.max(f-s,0),loadState:o(n.startTime)},e(t)})},t)},ea=[2500,4e3],ei={},eo=function(e,t){var n,r;n=function(t){(function(e){if(e.entries.length){var t=i();if(t){var n=t.responseStart;if(A(n))return;var r=t.activationStart||0,a=e.entries[e.entries.length-1],o=a.url&&performance.getEntriesByType("resource").filter(function(e){return e.name===a.url})[0],s=Math.max(0,n-r),l=Math.max(s,o?(o.requestStart||o.startTime)-r:0),c=Math.max(l,o?o.responseEnd-r:0),d=Math.max(c,a.startTime-r),p={element:u(a.element),timeToFirstByte:s,resourceLoadDelay:l-s,resourceLoadDuration:c-l,elementRenderDelay:d-c,navigationEntry:t,lcpEntry:a};return a.url&&(p.url=a.url),o&&(p.lcpResourceEntry=o),void(e.attribution=p)}}e.attribution={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadDuration:0,elementRenderDelay:e.value}})(t),e(t)},r=(r=t)||{},L(function(){var e,t=S(),a=f("LCP"),i=function(n){var r=n[n.length-1];r&&r.startTime<t.firstHiddenTime&&(a.value=Math.max(r.startTime-p(),0),a.entries=[r],e())},o=m("largest-contentful-paint",i);if(o){e=g(n,a,ea,r.reportAllChanges);var s=y(function(){ei[a.id]||(i(o.takeRecords()),o.disconnect(),ei[a.id]=!0,e(!0))});["keydown","click"].forEach(function(e){addEventListener(e,function(){return V(s)},!0)}),v(s),d(function(t){e=g(n,a=f("LCP"),ea,r.reportAllChanges),h(function(){a.value=performance.now()-t.timeStamp,ei[a.id]=!0,e(!0)})})}})},es={passive:!0,capture:!0},eu=new Date,el=function(e,t){Q||(Q=t,K=e,ee=new Date,ep(removeEventListener),ec())},ec=function(){if(K>=0&&K<ee-eu){var e={entryType:"first-input",name:Q.type,target:Q.target,cancelable:Q.cancelable,startTime:Q.timeStamp,processingStart:Q.timeStamp+K};et.forEach(function(t){t(e)}),et=[]}},ed=function(e){if(e.cancelable){var t,n,r,a=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?(t=function(){el(a,e),r()},n=function(){r()},r=function(){removeEventListener("pointerup",t,es),removeEventListener("pointercancel",n,es)},addEventListener("pointerup",t,es),addEventListener("pointercancel",n,es)):el(a,e)}},ep=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(t){return e(t,ed,es)})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/41521-deb7b5672d243273.mjs.map