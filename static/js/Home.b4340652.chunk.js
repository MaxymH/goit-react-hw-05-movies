"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[268],{574:function(r,t,e){e.d(t,{fO:function(){return f},t2:function(){return o},tx:function(){return m},wW:function(){return c},zv:function(){return p}});var n=e(5861),a=e(7757),i=e.n(a),u=e(4569),s=e.n(u)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"48e59f58a9185405f58e5b1089c8261f"}}),c=function(){var r=(0,n.Z)(i().mark((function r(){var t,e;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/trending/movie/week");case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(i().mark((function r(t){var e,n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/movie/".concat(t),{params:{language:"en - US"}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(i().mark((function r(t){var e,n,a,u=arguments;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=u.length>1&&void 0!==u[1]?u[1]:1,r.next=3,s.get("/search/movie",{params:{page:e,language:"en - US",include_adult:!1,query:t}});case 3:return n=r.sent,a=n.data,r.abrupt("return",a);case 6:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(i().mark((function r(t){var e,n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/movie/".concat(t,"/credits"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),m=function(){var r=(0,n.Z)(i().mark((function r(t){var e,n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/movie/".concat(t,"/reviews"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},9412:function(r,t,e){e.d(t,{Z:function(){return m}});var n=e(8683),a=e(6871),i=e(3504),u="moviesItem_item__pARg+",s="moviesItem_image__FO7fy",c="moviesItem_title__kRCPi",o=e(184);var f=function(r){var t=r.original_name,e=r.original_title,n=r.id,a=r.poster_path,f=r.from,p=a?"https://image.tmdb.org/t/p/w500".concat(a):"https://upload.wikimedia.org/wikipedia/commons/9/9c/Volodymyr_Zelensky_Official_portrait.jpg",m=t||e;return(0,o.jsx)("li",{className:u,children:(0,o.jsxs)(i.rU,{state:{from:f},to:"/movies/".concat(n),children:[(0,o.jsx)("img",{src:p,alt:m,className:s}),(0,o.jsx)("p",{className:c,children:m})]})},n)},p="moviesList_list__AXKgV";var m=function(r){var t=r.items,e=(0,a.TH)(),i=t.map((function(r){return(0,o.jsx)(f,(0,n.Z)((0,n.Z)({},r),{},{from:e}),r.id)}));return(0,o.jsx)("ul",{className:p,children:i})}},4687:function(r,t,e){e.r(t),e.d(t,{default:function(){return l}});var n=e(8683),a=e(5861),i=e(8152),u=e(7757),s=e.n(u),c=e(9412),o=e(2791),f=e(574),p=e(184),m=function(){var r=(0,o.useState)({items:[],isLoading:!1,error:null}),t=(0,i.Z)(r,2),e=t[0],u=t[1];(0,o.useEffect)((function(){var r=function(){var r=(0,a.Z)(s().mark((function r(){var t,e;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u((function(r){return(0,n.Z)((0,n.Z)({},r),{},{isLoading:!0})})),r.next=3,(0,f.wW)();case 3:t=r.sent,e=t.results;try{u((function(r){return(0,n.Z)((0,n.Z)({},r),{},{items:e,isLoading:!1})}))}catch(d){u((function(t){return(0,n.Z)((0,n.Z)({},t),{},{error:d.message,isLoading:!1})}))}case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[]);var m=e.items,l=e.isLoading,d=e.error;return(0,p.jsxs)(p.Fragment,{children:[l&&(0,p.jsx)("p",{children:"Loading..."}),d&&(0,p.jsx)("p",{children:d}),(0,p.jsx)(c.Z,{items:m})]})},l=function(){return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(m,{})})}}}]);
//# sourceMappingURL=Home.b4340652.chunk.js.map