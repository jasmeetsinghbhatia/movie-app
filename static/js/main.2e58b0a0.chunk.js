(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{15:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),i=c(7),s=c.n(i),o=(c(15),c(9)),l=c(6),j=c.n(l),d=c(8),u=c(4),v=function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{className:"mr-2",children:"Add to Favorites"}),Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"red",class:"bi bi-heart-fill",viewBox:"0 0 16 16",children:Object(n.jsx)("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})]})},h=function(e){var t=e.FavoriteComponent;return Object(n.jsx)(n.Fragment,{children:e.movies.map((function(c,a){return Object(n.jsxs)("div",{className:"image-container d-flex jutify-content-start m-3",children:[Object(n.jsx)("img",{src:c.Poster,alt:"movie"}),Object(n.jsx)("div",{onClick:function(){return e.handleFavoritesClick(c)},className:"overlay d-flex align-items-center justify-center",children:Object(n.jsx)(t,{})})]})}))})},m=function(e){return Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("h1",{children:e.heading})})},b=(c(17),c(18),function(e){return Object(n.jsx)("div",{className:"col col-sm-4",children:Object(n.jsx)("input",{className:"form-control",onChange:function(t){return e.setSearchValue(t.target.value)},placeholder:"type to search"})})}),O=function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{className:"mr-2",children:"Remove from Favorites"}),Object(n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-square",viewBox:"0 0 16 16",children:[Object(n.jsx)("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(n.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})]})};var f=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],i=Object(a.useState)([]),s=Object(u.a)(i,2),l=s[0],f=s[1],x=Object(a.useState)("2021"),p=Object(u.a)(x,2),g=p[0],w=p[1],S=Object({NODE_ENV:"production",PUBLIC_URL:"/movie-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APIKey,C=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="http://www.omdbapi.com/?s=".concat(t,"&apikey=").concat(S),e.next=3,fetch(c);case 3:return n=e.sent,e.next=6,n.json();case 6:(a=e.sent).Search&&r(a.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){C(g)}),[g]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-movie-app-favorites"));f(e)}),[]);var F=function(e){localStorage.setItem("react-movie-app-favorites",JSON.stringify(e))};return Object(n.jsxs)("div",{className:"container-fluid movie-app",children:[Object(n.jsxs)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:[Object(n.jsx)(m,{heading:"Movies"}),Object(n.jsx)(b,{searchValue:g,setSearchValue:w})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(h,{movies:c,handleFavoritesClick:function(e){var t=[].concat(Object(o.a)(l),[e]);f(t),F(t)},FavoriteComponent:v})}),Object(n.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:Object(n.jsx)(m,{heading:"Favorites"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(h,{movies:l,handleFavoritesClick:function(e){var t=l.filter((function(t){return t.imdbID!==e.imdbID}));f(t),F(t)},FavoriteComponent:O})})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),x()}},[[19,1,2]]]);
//# sourceMappingURL=main.2e58b0a0.chunk.js.map