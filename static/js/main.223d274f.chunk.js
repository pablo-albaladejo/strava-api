(this["webpackJsonpstrava-api"]=this["webpackJsonpstrava-api"]||[]).push([[0],{31:function(e,t,n){e.exports=n(49)},42:function(e,t,n){},43:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(14),r=n.n(c),i=n(7),l=n(10),s=n(27),u=n(28),E=n.n(u),p=n(22),d=n(11);function _(e){return{type:"SET_AUTH",payload:e}}var m={token:null};var f=Object(i.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_AUTH":return Object(d.a)(Object(d.a)({},e),{},{token:a.token});default:return e}}}),h=n(8),b={key:"".concat(h.a,"-").concat(h.b),storage:E.a},v=Object(p.a)(b,f),T=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c)(),O=Object(i.d)(v,T),C=Object(p.b)(O),P=function(e){var t=e.children;return o.a.createElement(l.a,{store:O},o.a.createElement(s.a,{loading:null,persistor:C},t))},R=(n(42),n(12)),S=n(2),A=(n(43),function(e){var t=e.children;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"body"},t)),o.a.createElement("div",{className:"footer"},o.a.createElement("div",{className:"footerItems"},o.a.createElement("span",null,"Pablo Albaladejo Mestre"))))}),j=function(){return o.a.createElement(A,null,o.a.createElement("h1",null,"ERROR"))},I=function(){var e=Object(l.c)((function(e){return e.auth}));return o.a.createElement(A,null,JSON.stringify(e))},g=Object({NODE_ENV:"production",PUBLIC_URL:"https://pablo-albaladejo.github.io/strava-api",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_CLIENT_ID:"52599",REACT_APP_CLIENT_SECRET:"7ce68fca4d39b1bcab9e4ff7fc6d26b2e4ffcd24",REACT_APP_REDIRECT_URI:"https://pablo-albaladejo.github.io/strava-api/#/token"}),N=g.REACT_APP_CLIENT_ID,w=g.REACT_APP_REDIRECT_URI,k=function(){return o.a.createElement(A,null,o.a.createElement("div",{className:"App"},o.a.createElement("a",{href:"https://www.strava.com/oauth/authorize?client_id=".concat(N,"&response_type=code&redirect_uri=").concat(encodeURIComponent(w),"&approval_prompt=force&scope=").concat(encodeURIComponent("read,activity:read"))},"Please, log in")))},y=n(29),D=n.n(y),U=n(19),L=n.n(U),x=n(30),W="POST",H=function(e){var t=e.clientID,n=e.clientSecret,a=e.code;return new Promise((function(e,o){(function(e){var t=e.baseUrl,n=e.endPoint,a=e.method,o=e.token,c=void 0===o?null:o,r=e.body,i=void 0===r?null:r,l=e.params,s=void 0===l?null:l,u=e.headers,E=void 0===u?null:u;return new Promise((function(e,o){var r={Accept:"application/json","Content-Type":"application/json"};c&&(r.Authorization="Bearer ".concat(c));var l={method:a,headers:Object(d.a)(Object(d.a)({},r),E),body:i?JSON.stringify(i):null},u=s?"?"+Object.keys(s).map((function(e){return e+"="+s[e]})).join("&"):"",p="".concat(t).concat(n||"").concat(u);console.log(h.a+"::api::request",{opts:l,uri:p}),fetch(p,l).then((function(t){t.ok?t.json().then((function(t){console.log(h.a+"::api::jsonResponse",t),e(t)})).catch(o):t.json().then((function(e){console.log(h.a+"::api::errJson",e),o({status:t.status,error:e.error?e.error:e})})).catch(o)})).catch((function(e){console.log(h.a+"::api::error",e),o(e)}))}))})({baseUrl:"https://www.strava.com/",endPoint:"oauth/token",method:W,body:{client_id:t,client_secret:n,code:a}}).then((function(t){e(t)})).catch((function(e){o(e)}))}))},J=Object({NODE_ENV:"production",PUBLIC_URL:"https://pablo-albaladejo.github.io/strava-api",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_CLIENT_ID:"52599",REACT_APP_CLIENT_SECRET:"7ce68fca4d39b1bcab9e4ff7fc6d26b2e4ffcd24",REACT_APP_REDIRECT_URI:"https://pablo-albaladejo.github.io/strava-api/#/token"}),K=J.REACT_APP_CLIENT_ID,B=J.REACT_APP_CLIENT_SECRET,M=function(){var e=Object(l.b)(),t=Object(S.g)().push;function n(){return(n=Object(x.a)(L.a.mark((function n(a){var o;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,H({clientID:K,clientSecret:B,code:a});case 2:o=n.sent,e(_({token:o})),t("/home");case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return{getToken:function(e){return n.apply(this,arguments)}}},V=function(e){var t=e.location.search,n=D.a.parse(t).code,c=M().getToken;return Object(a.useEffect)((function(){c(n)}),[n,c]),o.a.createElement(A,null,"token: ".concat(n))},z=function(){return o.a.createElement(R.b,null,o.a.createElement(S.d,null,o.a.createElement(S.b,{exact:!0,path:"/",component:k}),o.a.createElement(S.b,{exact:!0,path:"/token",component:V}),o.a.createElement(S.b,{exact:!0,path:"/home",component:I}),o.a.createElement(S.b,{exact:!0,path:"/error",component:j}),o.a.createElement(S.a,{to:"/error"})))};n(48);var X=function(){return o.a.createElement(R.a,null,o.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(P,null,o.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('{"a":"strava-api","b":"0.1.0"}')}},[[31,1,2]]]);