(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,a){e.exports={form:"FormVideogame_form__1ndD4",page:"FormVideogame_page__3bFE8",asterisco:"FormVideogame_asterisco__2zROc",enviar:"FormVideogame_enviar__2Lbxd",select:"FormVideogame_select__c9Lxe",textDescription:"FormVideogame_textDescription__3gCvm"}},15:function(e,t,a){e.exports={menu:"NavBar_menu__1isk8",div:"NavBar_div__3Ra9W",link:"NavBar_link__HystU",img:"NavBar_img__1E-im",logo:"NavBar_logo__3W5k2",button:"NavBar_button__VcIMk"}},19:function(e,t,a){e.exports={container:"CardVideogame_container__3t28n",genres:"CardVideogame_genres__1HHjY",text:"CardVideogame_text__2bBSu",img:"CardVideogame_img__2zKCT",detail:"CardVideogame_detail__kT9s9",name:"CardVideogame_name__3BE-Y"}},27:function(e,t,a){e.exports={container:"Landing_container__BUiRG",paragraph:"Landing_paragraph__lR3O-",button:"Landing_button__2-H3R",shakefix:"Landing_shakefix__Hn8Hq"}},32:function(e,t,a){e.exports={button:"FilterGenres_button__f58NR",genres:"FilterGenres_genres__3kSti"}},4:function(e,t,a){e.exports={container:"Home_container__2-sfd",gameNotFound:"Home_gameNotFound__2aF2-",btnNotFound:"Home_btnNotFound__3JLXH",btnImgContainer:"Home_btnImgContainer__1-9t4",input:"Home_input__1oQTY",order:"Home_order__2yLWw",home:"Home_home__1_JKR",lateral:"Home_lateral__3UfEV",filters:"Home_filters__3eqh_",titles:"Home_titles__3lHXV",items:"Home_items__2Qq_F",bars:"Home_bars__2panH",paging:"Home_paging__2j-s5",loader:"Home_loader__hW_5W",fade458:"Home_fade458__FPfVU",bar1:"Home_bar1__1CZlk",bar2:"Home_bar2__3YX_w",bar3:"Home_bar3__2gUVm",bar4:"Home_bar4__1JBBj",bar5:"Home_bar5__2Pdcs",bar6:"Home_bar6__1PUPG",bar7:"Home_bar7__11kWY",bar8:"Home_bar8__2TPru",bar9:"Home_bar9__6qtTS",bar10:"Home_bar10__3EOTb",bar11:"Home_bar11__rVwnZ",bar12:"Home_bar12__2XYF2",all:"Home_all__1oCkC",pageNumberTop:"Home_pageNumberTop__wxrWM",pageNumberButton:"Home_pageNumberButton__P5dJD",font:"Home_font__2SeIc"}},42:function(e,t,a){},43:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(23),c=a.n(r),s=(a(42),a(43),a(14)),i=a(3),o=a(27),l=a.n(o),j=a(9),b=a(13),d=a(18),u="GET_ALL_VIDEOGAMES",m="FIND_VIDEOGAME",O="VIDEOGAME_DETAIL",_="GET_GENRES",g="GET_ALL_PLATFORMS",p="FILTER_BY_GENRES",h="FILTER_BY_ORIGIN",x="ORDER_BY_NAME",f="ORDER_BY_RATING",v=a(56).a.create({baseURL:"http://localhost:3001",headers:{Accept:"application/json","Content-Type":"application/json"}}),N=function(){return function(){var e=Object(d.a)(Object(b.a)().mark((function e(t){var a,n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/videogames");case 2:return a=e.sent,n=a.data,e.abrupt("return",t({type:u,payload:n}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){return function(){var e=Object(d.a)(Object(b.a)().mark((function e(t){var a,n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/genres");case 2:return a=e.sent,n=a.data,e.abrupt("return",t({type:_,payload:n}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){return function(t){return t({type:p,payload:e})}},D=a(0),V=function(){var e=Object(j.b)(),t=Object(i.f)();return Object(D.jsxs)("div",{className:l.a.container,children:[Object(D.jsx)("div",{children:Object(D.jsxs)("p",{className:l.a.paragraph,children:["Welcome to Press Start! my video game page for the Individual Project stage! I hope you find everything you are looking for. At this website, you will find a lot of information about the world of Gamming. You will also be able to create your own videogames and share them with the with the community.",Object(D.jsx)("br",{})," Thank you for visiting us, we hope you enjoy browsing our website!",Object(D.jsx)("br",{})," Lets go, just press start to initiate the game.",Object(D.jsx)("br",{})," Made by Jon Pereyra with \u2764\ufe0f"]})}),Object(D.jsx)(s.b,{to:"/home",children:Object(D.jsx)("input",{type:"button",className:l.a.button,onClick:function(a){return function(a){a.preventDefault(),e(N()),t("/home")}(a)}})})]})},C=a(8),E=a(15),F=a.n(E),H=function(){return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("nav",{className:F.a.menu,children:[Object(D.jsx)("div",{className:F.a.logo,children:Object(D.jsxs)(s.c,{to:"/",style:{textDecoration:"none",color:"aliceblue"},children:[" ","VIDEOGAMES",Object(D.jsx)("img",{className:F.a.img,src:"https://1.bp.blogspot.com/-nZWHxn-N72Q/XIafjdKz3HI/AAAAAAAAImo/dldCM94NHqw6r50tC9v-UnTt9xHocb7eACK4BGAYYCw/s1600/icon%2Bgame%2Bvideo.png",alt:"logo"})]})}),Object(D.jsx)("button",{className:F.a.button,children:Object(D.jsx)(s.c,{to:"/home",className:F.a.link,children:Object(D.jsx)("div",{className:F.a.div,children:" HOME"})})}),Object(D.jsx)("button",{className:F.a.button,children:Object(D.jsx)(s.c,{to:"/create",className:F.a.link,children:Object(D.jsx)("div",{className:F.a.div,children:" CREATE VIDEOGAME "})})})]})})},k=a(37),A=a(32),R=a.n(A),T=function(e){var t=e.setPage,a=Object(j.c)((function(e){return e.errorFilter})),r=Object(j.c)((function(e){return e.genres})),c=Object(j.b)(),s=Object(n.useState)([]),i=Object(C.a)(s,2),o=i[0],l=i[1];Object(n.useEffect)((function(){c(y())}),[c]);return Object(D.jsx)("div",{children:Object(D.jsxs)("label",{htmlFor:"genres",children:["Genres:",Object(D.jsx)("br",{}),a&&Object(D.jsx)("span",{children:"No videogames"}),Object(D.jsxs)("select",{id:"genres",onChange:function(e){return function(e){e.preventDefault(),o.includes(e.target.value)||(l(o.concat(e.target.value)),c(w([e.target.value].concat(Object(k.a)(o)))),t(1))}(e)},className:R.a.genres,children:[Object(D.jsx)("option",{children:"All "}),r.map((function(e){return Object(D.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),Object(D.jsx)("span",{children:Object(D.jsx)("button",{className:R.a.button,onClick:function(e){return function(e){e.preventDefault(),l([]),c(w([]))}(e)},children:"x"})}),Object(D.jsx)("br",{}),o.length>0&&o.map((function(e){return Object(D.jsxs)("span",{children:["\xb7 ",e," ",Object(D.jsx)("br",{})]},e)}))]})})},S=function(e){var t=e.setPage,a=Object(j.b)(),n=function(e){var n;e.preventDefault(),a((n=e.target.value,function(e){return e({type:h,payload:n})})),t(1)};return Object(D.jsxs)("div",{children:[Object(D.jsx)("label",{htmlFor:"origin",children:"Origin: "}),Object(D.jsx)("br",{}),Object(D.jsxs)("select",{id:"origin",onChange:function(e){return n(e)},style:{width:"100%"},children:[Object(D.jsx)("option",{value:"select",children:"All"}),Object(D.jsx)("option",{value:"api",children:"Api"}),Object(D.jsx)("option",{value:"db",children:"Database"})]})]})},L=a(19),I=a.n(L),B=function(e){return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("div",{className:I.a.textCard,children:Object(D.jsxs)(s.c,{to:"/".concat(e.id),className:I.a.container,children:[Object(D.jsxs)("div",{className:I.a.genres,children:[Object(D.jsx)("div",{className:I.a.name,children:e.name.toUpperCase()||e.genre||e.background_image}),Object(D.jsx)("div",{className:I.a.text,children:Object(D.jsx)("ul",{children:e.genres.map((function(e){return Object(D.jsxs)("li",{children:[" ",e]},e)}))})})]}),Object(D.jsx)("img",{src:e.background_image,alt:"error",className:I.a.img})]})})})},G=a(4),P=a.n(G),Y=function(){for(var e=Object(j.c)((function(e){return e.videogamesAux})),t=Object(j.c)((function(e){return e.videogames})),a=Object(j.b)(),r=Object(n.useState)(""),c=Object(C.a)(r,2),s=c[0],i=c[1],o=Object(n.useState)(""),l=Object(C.a)(o,2),u=l[0],O=l[1],_=Object(n.useState)(1),g=Object(C.a)(_,2),p=g[0],h=g[1],y=15*p,w=y-15,V=e.slice(w,y),E=Math.ceil(e.length/15),F=[],k=1;k<=E;k++)F.push([k]);Object(n.useEffect)((function(){0===t.length&&a(N())}),[a,t]);var A=function(e,t){e?h(e[0]):p!==E&&"+"===t?h(p+1):1!==p&&"-"===t&&h(p-1)},R=function(e){var t;i(e.target.id),a((t=e.target.id,function(e){return e({type:x,payload:t})}))},L=function(e){var t;O(e.target.id),a((t=e.target.id,function(e){return e({type:f,payload:t})}))},I=function(e){var t;a((t=e.target.value,function(){var e=Object(d.a)(Object(b.a)().mark((function e(a){var n,r;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.get("/videogames?name=".concat(t));case 3:return n=e.sent,r=n.data,e.abrupt("return",a({type:m,payload:r}));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",alert(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),h(1)};return Object(D.jsxs)("div",{className:P.a.home,children:[Object(D.jsx)(H,{}),Object(D.jsxs)("div",{className:P.a.filters,children:[Object(D.jsxs)("nav",{className:P.a.lateral,children:[Object(D.jsxs)("label",{htmlFor:"search",children:["Search Videogame:",Object(D.jsx)("input",{id:"search",type:"search",placeholder:"Videogame Name...",onChange:function(e){return I(e)},className:P.a.bars})]}),Object(D.jsxs)("div",{className:P.a.filters,children:[Object(D.jsx)("div",{className:P.a.titles,children:"Filters"}),Object(D.jsx)(T,{setPage:h}),Object(D.jsx)(S,{setPage:h})]}),Object(D.jsxs)("div",{className:P.a.items,children:[Object(D.jsx)("div",{className:P.a.titles,children:"Orders"}),Object(D.jsx)("span",{children:"Name"}),Object(D.jsxs)("div",{className:P.a.order,children:[Object(D.jsxs)("label",{htmlFor:"asc",className:P.a.input,children:[Object(D.jsx)("input",{type:"radio",name:"orderName",id:"asc",checked:"asc"===s,onChange:function(e){return R(e)}}),"A - Z"]}),Object(D.jsxs)("label",{htmlFor:"des",className:P.a.input,children:[Object(D.jsx)("input",{type:"radio",name:"orderName",id:"des",checked:"des"===s,onChange:function(e){return R(e)}}),"Z - A"]})]}),Object(D.jsx)("span",{children:"Rating"}),Object(D.jsxs)("div",{className:P.a.order,children:[Object(D.jsxs)("label",{htmlFor:"up",children:[Object(D.jsx)("input",{type:"radio",id:"up",name:"orderRating",checked:"up"===u,onChange:function(e){return L(e)}}),"Ascending"]}),Object(D.jsxs)("label",{htmlFor:"down",children:[Object(D.jsx)("input",{type:"radio",id:"down",name:"orderRating",checked:"down"===u,onChange:function(e){return L(e)}}),"Descending"]})]})]})]}),Object(D.jsx)("div",{className:P.a.number,children:e.length>0&&Object(D.jsxs)("div",{className:P.a.paging,children:[F.length>1&&Object(D.jsx)("button",{id:"-",onClick:function(e){return A(null,e.target.id)},className:P.a.font,children:"PREV"}),F.map((function(e){return Object(D.jsx)("button",{onClick:function(){return A(e)},className:P.a.font,children:e},e)})),F.length>1&&Object(D.jsx)("button",{id:"+",onClick:function(e){return A(null,e.target.id)},className:P.a.font,children:"NEXT"})]})}),V&&Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{className:P.a.pageNumberTop,children:["page: ",p]}),Object(D.jsx)("div",{className:P.a.container,children:V.map((function(e){return Object(D.jsx)(B,{id:e.id,name:e.name,background_image:e.background_image,genres:e.genres},e.id)}))})]}),0===t.length&&Object(D.jsx)("div",{className:P.a.all,children:Object(D.jsxs)("div",{className:P.a.loader,children:[Object(D.jsx)("div",{className:P.a.bar1}),Object(D.jsx)("div",{className:P.a.bar2}),Object(D.jsx)("div",{className:P.a.bar3}),Object(D.jsx)("div",{className:P.a.bar4}),Object(D.jsx)("div",{className:P.a.bar5}),Object(D.jsx)("div",{className:P.a.bar6}),Object(D.jsx)("div",{className:P.a.bar7}),Object(D.jsx)("div",{className:P.a.bar8}),Object(D.jsx)("div",{className:P.a.bar9}),Object(D.jsx)("div",{className:P.a.bar10}),Object(D.jsx)("div",{className:P.a.bar11}),Object(D.jsx)("div",{className:P.a.bar12})]})}),t.length>0&&0===V.length&&Object(D.jsx)("div",{className:P.a.all,children:Object(D.jsxs)("div",{className:P.a.btnImgContainer,children:[Object(D.jsx)("img",{className:P.a.gameNotFound,src:"https://scontent.ffdo1-1.fna.fbcdn.net/v/t39.30808-6/337812544_1241291423148253_3893825842201335811_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=0qknrTnytHMAX_eLZZ2&_nc_ht=scontent.ffdo1-1.fna&oh=00_AfCUOJdhsuf_C1U40nUlvTGl6Szazw7TE8mFDBwUgw2abw&oe=6427902A",alt:"gameNotFound"}),Object(D.jsxs)("button",{className:P.a.btnNotFound,onClick:function(){return window.location.reload()},children:[" ","YES"," "]})]})})]})]})},U=a(7),M=a.n(U),X=function(){var e=Object(j.b)(),t=Object(i.g)(),a=Object(j.c)((function(e){return e.detail}));return Object(n.useEffect)((function(){var a;e((a=t.id,function(){var e=Object(d.a)(Object(b.a)().mark((function e(t){var n,r;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/videogames/".concat(a));case 2:return n=e.sent,r=n.data,e.abrupt("return",t({type:O,payload:r}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[t.id]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(H,{}),Object(D.jsx)("div",{className:M.a.page,children:Object.keys(a).length?Object(D.jsx)("div",{className:M.a.card,children:Object(D.jsxs)("div",{className:M.a.game,children:[Object(D.jsxs)("div",{className:M.a.detail,children:[Object(D.jsx)("span",{className:M.a.name,children:a.name.toUpperCase()}),Object(D.jsxs)("div",{className:M.a.items,children:[Object(D.jsxs)("div",{className:M.a.list,children:[Object(D.jsx)("span",{children:"Genres: "}),Object(D.jsx)("br",{}),Object(D.jsx)("div",{children:a.genres.map((function(e){var t,a;return Object(D.jsxs)("div",{children:["\xb7 ",null!==(a=e.name)&&void 0!==a?a:e]},null!==(t=e.name)&&void 0!==t?t:e)}))})]}),Object(D.jsxs)("div",{className:M.a.list,children:[Object(D.jsx)("span",{children:"Platforms: "}),Object(D.jsx)("br",{}),Object(D.jsx)("div",{className:M.a.genres_platforms,children:a.platforms.map((function(e){return Object(D.jsxs)("div",{children:["\xb7 ",e," "]},e)}))})]})]}),Object(D.jsxs)("div",{children:["Rating: ",a.rating,Object(D.jsx)("br",{}),"Released: ",a.released]}),Object(D.jsxs)("div",{className:M.a.description,children:[Object(D.jsx)("span",{children:"Description: "}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("span",{children:decodeURI(a.description).split("<p>").join(" ").split("</p>").join("").split("<br />").join("")})]})]}),Object(D.jsx)("div",{children:Object(D.jsx)("img",{src:a.background_image,alt:"error",className:M.a.img})})]})}):Object(D.jsx)("div",{className:M.a.all,children:Object(D.jsxs)("div",{className:M.a.loader,children:[Object(D.jsx)("div",{className:M.a.bar1}),Object(D.jsx)("div",{className:M.a.bar2}),Object(D.jsx)("div",{className:M.a.bar3}),Object(D.jsx)("div",{className:M.a.bar4}),Object(D.jsx)("div",{className:M.a.bar5}),Object(D.jsx)("div",{className:M.a.bar6}),Object(D.jsx)("div",{className:M.a.bar7}),Object(D.jsx)("div",{className:M.a.bar8}),Object(D.jsx)("div",{className:M.a.bar9}),Object(D.jsx)("div",{className:M.a.bar10}),Object(D.jsx)("div",{className:M.a.bar11}),Object(D.jsx)("div",{className:M.a.bar12})]})})})]})},W=a(6),z=a(12),J=a.n(z),Z=function(){var e=Object(i.f)(),t=Object(j.c)((function(e){return e.genres})),a=Object(j.c)((function(e){return e.platforms})),r=Object(j.b)(),c=Object(n.useState)([]),s=Object(C.a)(c,2),o=s[0],l=s[1],m=Object(n.useState)({}),O=Object(C.a)(m,2),_=O[0],p=O[1],h=Object(n.useState)([]),x=Object(C.a)(h,2),f=x[0],N=x[1],w=Object(n.useState)({}),V=Object(C.a)(w,2),E=V[0];V[1];Object(n.useEffect)((function(){r(y()),r(function(){var e=Object(d.a)(Object(b.a)().mark((function e(t){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.get("/platforms").then((function(e){return e.data})).then((function(e){return t({type:g,data:e})})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[r]);var F=function(t){return t.preventDefault(),r(function(e){return function(){var t=Object(d.a)(Object(b.a)().mark((function t(a){var n,r;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.post("/videogames",e);case 3:return n=t.sent,v.get("/videogames").then((function(e){return e.data})).then((function(e){return a({type:u,payload:e})})),r=n,t.abrupt("return",alert(r.data));case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",alert(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(_)),e("/home")},k=function(e){!function(e){e.target.value.length>250?E.name="The name characters are way to many":E.name=null}(e),p(Object(W.a)(Object(W.a)({},_),{},{name:e.target.value}))},A=function(e){!function(e){/[1-5]/.test(e.target.value)?E.rating=null:E.rating="Rate the game with numbers between 1 and 5."}(e),p(Object(W.a)(Object(W.a)({},_),{},{rating:e.target.value})),console.log(_)},R=function(e){!function(e){e.target.value?E.description=null:E.description="Player! You must write a description."}(e),p(Object(W.a)(Object(W.a)({},_),{},{description:e.target.value}))},T=function(e){l(o.filter((function(t){return t!==e.target.value}))),1===o.length&&(E.genres="The game must have at least one genre.")},S=function(e){e.preventDefault(),N(f.filter((function(t){return t!==e.target.value}))),1===f.length&&(E.platforms="The game must have at least one platform.")};return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(H,{}),Object(D.jsx)("div",{className:J.a.page,children:Object(D.jsxs)("form",{onSubmit:function(e){return F(e)},className:J.a.form,children:[Object(D.jsxs)("label",{htmlFor:"name",children:["Name ",Object(D.jsx)("span",{className:J.a.asterisco,children:"*"})]}),E.name&&Object(D.jsx)("span",{className:J.a.asterisco,children:E.name}),Object(D.jsx)("input",{type:"text",id:"name",onChange:function(e){return k(e)}}),Object(D.jsxs)("label",{htmlFor:"platforms",children:["Platforms",Object(D.jsx)("br",{}),Object(D.jsxs)("select",{id:"platforms",onChange:function(e){!function(e){e.preventDefault(),E.platforms=null,f.includes(e.target.value)&&"platforms"!==e.target.value&&(f.push(e.target.value),p(Object(W.a)(Object(W.a)({},_),{},{platforms:f})))}(e)},children:[Object(D.jsx)("option",{value:"platforms",children:"Select platforms..."}),a.length>0&&a.map((function(e){return Object(D.jsx)("option",{value:e,children:e},e)}))]})]}),f.length>0&&f.map((function(e){return Object(D.jsxs)("span",{children:["\xb7 ",e,Object(D.jsx)("button",{value:e,onClick:function(e){return S(e)},children:"x"},e)]},e)})),Object(D.jsxs)("label",{htmlFor:"released",children:["Released ",Object(D.jsx)("span",{className:J.a.asterisco,children:"*"})]}),E.released&&Object(D.jsx)("span",{className:J.a.asterisco,children:E.released}),Object(D.jsx)("input",{type:"text",id:"released",onChange:function(e){return function(e){p(Object(W.a)(Object(W.a)({},_),{},{released:e.target.value}))}(e)}}),Object(D.jsx)("label",{htmlFor:"background_image",children:"Background Image"}),Object(D.jsx)("input",{type:"text",id:"image",onChange:function(e){return function(e){p(Object(W.a)(Object(W.a)({},_),{},{image:e.target.value}))}(e)}}),Object(D.jsx)("label",{htmlFor:"rating",children:"Rating:"}),E.rating&&Object(D.jsx)("span",{className:J.a.asterisco,children:E.rating}),Object(D.jsx)("input",{type:"number",id:"rating",onChange:function(e){return A(e)},min:"1",max:"5",placeholder:"1-5"}),Object(D.jsxs)("label",{htmlFor:"genres",children:["Genres",Object(D.jsx)("span",{className:J.a.asterisco,children:"*"})]}),E.genres&&Object(D.jsxs)("span",{className:J.a.asterisco,children:[" ",E.genres," "]}),Object(D.jsxs)("select",{className:J.a.select,id:"genres",onChange:function(e){return function(e){e.preventDefault(),E.genres=null,f.includes(e.target.value)||"select_genres"===e.target.value||(o.push(e.target.value),p(Object(W.a)(Object(W.a)({},_),{},{genres:o})))}(e)},children:[Object(D.jsx)("option",{value:"select_genres",children:"Select genres..."}),t.length>0&&t.map((function(e){return Object(D.jsx)("option",{value:e.name,children:e.name},e.name)}))]}),o.length>0&&o.map((function(e){return Object(D.jsxs)("span",{children:["\xb7 ",e,Object(D.jsx)("button",{value:e,onClick:function(e){return T(e)},children:"x"})]},e)})),Object(D.jsxs)("label",{htmlFor:"description",children:["Description",Object(D.jsx)("span",{className:J.a.asterisco,children:"*"})]}),E.description&&Object(D.jsx)("span",{className:J.a.asterisco,children:E.description}),Object(D.jsx)("textarea",{className:J.a.textDescription,id:"description",placeholder:"Describe the videogame...",onChange:function(e){return R(e)},rows:"10",cols:"30"}),Object(D.jsx)("span",{className:J.a.asterisco,children:E.error}),!E.name&&!E.rating&&!E.description&&!E.platforms&&!E.genres&&Object(D.jsx)("input",{className:J.a.enviar,type:"submit",style:{cursor:"pointer"}})]})})]})},q=function(){return Object(D.jsx)(s.a,{children:Object(D.jsxs)(i.c,{children:[Object(D.jsx)(i.a,{exact:!0,path:"/",element:Object(D.jsx)(V,{})}),Object(D.jsx)(i.a,{exact:!0,path:"/home",element:Object(D.jsx)(Y,{})}),Object(D.jsx)(i.a,{exact:!0,path:"/:id",element:Object(D.jsx)(X,{})}),Object(D.jsx)(i.a,{exact:!0,path:"/create",element:Object(D.jsx)(Z,{})})]})})},K=a(28),Q={videogames:[],videogamesAux:[],detail:{},genres:[],platforms:[],errorFilter:!1},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0,a=e.videogamesAux,n=e.videogames;switch(t.type){case u:return Object(W.a)(Object(W.a)({},e),{},{videogames:t.payload,videogamesAux:t.payload,orderedAux:t.payload});case m:return Object(W.a)(Object(W.a)({},e),{},{videogamesAux:t.payload});case O:return Object(W.a)(Object(W.a)({},e),{},{detail:t.payload});case _:return Object(W.a)(Object(W.a)({},e),{},{genres:t.payload});case g:return Object(W.a)(Object(W.a)({},e),{},{platforms:t.data});case p:var r=n;return t.payload.length>0&&(r=a.filter((function(e){var a=[];return t.payload.forEach((function(t){e.genres.includes(t)||a.push(t)})),!a.length}))),Object(W.a)(Object(W.a)({},e),{},{videogamesAux:r});case h:var c=a.filter((function(e){return"db"===t.payload?"string"===typeof e.id:"api"!==t.payload||"number"===typeof e.id}));return Object(W.a)(Object(W.a)({},e),{},{videogamesAux:c});case x:var s=a.sort((function(e,a){return"asc"===t.payload?e.name.toLowerCase()<a.name.toLowerCase()?-1:0:a.name.toLowerCase()<e.name.toLowerCase()?-1:0}));return Object(W.a)(Object(W.a)({},e),{},{videogamesAux:s});case f:var i=a.sort((function(e,a){return"up"===t.payload?a.rating-e.rating:e.rating-a.rating}));return Object(W.a)(Object(W.a)({},e),{},{videogamesAux:i});default:return Object(W.a)({},e)}},ee=a(36),te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.b,ae=Object(K.c)($,te(Object(K.a)(ee.a)));c.a.render(Object(D.jsx)(j.a,{store:ae,children:Object(D.jsx)(q,{tab:"home"})}),document.getElementById("root"))},7:function(e,t,a){e.exports={detail:"VideogameDetail_detail__AvVRS",game:"VideogameDetail_game__3jSAm",img:"VideogameDetail_img__1V_0k",card:"VideogameDetail_card__1heHx",page:"VideogameDetail_page__vRYFy",genres_platforms:"VideogameDetail_genres_platforms__xznZG",name:"VideogameDetail_name__23Vb_",items:"VideogameDetail_items__34fxb",description:"VideogameDetail_description__1NzL9",list:"VideogameDetail_list__aLcYS",loader:"VideogameDetail_loader__3UKX2",fade458:"VideogameDetail_fade458__3PL-a",bar1:"VideogameDetail_bar1__3sI14",bar2:"VideogameDetail_bar2__3zps_",bar3:"VideogameDetail_bar3__2yams",bar4:"VideogameDetail_bar4__B7OLQ",bar5:"VideogameDetail_bar5__3vOjj",bar6:"VideogameDetail_bar6__2EwdR",bar7:"VideogameDetail_bar7__XVavY",bar8:"VideogameDetail_bar8__3ihou",bar9:"VideogameDetail_bar9__2YRgR",bar10:"VideogameDetail_bar10__1tntT",bar11:"VideogameDetail_bar11__2ww85",bar12:"VideogameDetail_bar12__1N3fv",all:"VideogameDetail_all__COG4-"}}},[[53,1,2]]]);
//# sourceMappingURL=main.4d0b4aa1.chunk.js.map