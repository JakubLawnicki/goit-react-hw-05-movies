"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[571],{571:function(e,r,n){n.r(r),n.d(r,{default:function(){return h}});var t=n(861),a=n(439),c=n(757),o=n.n(c),i=n(340),s="reviews_item__boRvd",u="reviews_reviews__oz0GH",v="reviews_separator__xRpjo",l=n(791),f=n(689),p=n(184),h=function(){var e=(0,f.UO)().movieId,r=(0,l.useState)([]),n=(0,a.Z)(r,2),c=n[0],h=n[1];return(0,l.useEffect)((function(){var r=function(){var r=(0,t.Z)(o().mark((function r(){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),{params:{language:"en-US",api_key:"c90cdec037818042646f6ab3cec9ea66"},headers:{accept:"application/json"}});case 3:n=r.sent,h(n.data.results),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching reviews:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:v}),(0,p.jsx)("ul",{className:u,children:null===c||void 0===c?void 0:c.map((function(e){return(0,p.jsxs)("li",{className:s,children:[(0,p.jsxs)("h2",{children:["Author: ",e.author]}),(0,p.jsx)("p",{children:e.content})]})}))})]})}},861:function(e,r,n){function t(e,r,n,t,a,c,o){try{var i=e[c](o),s=i.value}catch(u){return void n(u)}i.done?r(s):Promise.resolve(s).then(t,a)}function a(e){return function(){var r=this,n=arguments;return new Promise((function(a,c){var o=e.apply(r,n);function i(e){t(o,a,c,i,s,"next",e)}function s(e){t(o,a,c,i,s,"throw",e)}i(void 0)}))}}n.d(r,{Z:function(){return a}})}}]);
//# sourceMappingURL=571.6e3c2715.chunk.js.map