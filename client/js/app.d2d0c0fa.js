(function(t){function e(e){for(var s,r,n=e[0],l=e[1],c=e[2],d=0,u=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);m&&m(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==o[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},o={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var m=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0a56":function(t,e,a){t.exports=a.p+"img/neondesktop.345ecba2.jpg"},1:function(t,e){},"3a12":function(t,e,a){t.exports=a.p+"img/racinggirl.3a1a4eed.jpg"},"3ffd":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand flashy neon red",attrs:{to:{name:"Home"}}},[t._v("Dcdr")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("div",{staticClass:"d-flex align-items-md-center w-100"},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}},[a("router-link",{staticClass:"nav-link text-light flashy neon blue",attrs:{to:{name:"Home"}}},[t._v("Home")])],1),a("li",{staticClass:"nav-item",class:{active:"Rooms"==t.$route.name}},[a("router-link",{staticClass:"nav-link text-light flashy neon blue",attrs:{to:{name:"Rooms"}}},[t._v("Create a Poll")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[a("router-link",{staticClass:"nav-link text-light flashy neon blue",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1):t._e(),a("li",{staticClass:"nav-item"},[a("form",{staticClass:"form-inline ml-3",on:{submit:t.setActiveRoom}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control neon blue",attrs:{type:"text",placeholder:"Join Room","aria-describedby":"helpId"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),a("button",{staticClass:"btn btn-primary mx-2 form-control flashy neon blue",attrs:{type:"submit"}},[t._v("Join!")])])])])]),a("div",{staticClass:"d-flex justify-content-end align-items-start h-100"},[a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-primary flashy neon blue",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-primary flashy neon blue",on:{click:t.login}},[t._v(" Login ")])])])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("3d20"),c=a.n(l);class m{static async addName(){try{let t=await c.a.fire({title:"Enter your name",input:"text",showCancelButton:!1,confirmButtonText:"Yes",allowOutsideClick:!1,inputValidator:t=>{if(!t)return"You need to write something!"}});return t}catch(t){}}static async confirmDelete(t="You won't be able to revert this!"){try{let t=await c.a.fire({title:"Are You Sure?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!"});return!!t.value}catch(e){}}}var d=a("bc3a"),u=a.n(d),h=a("335d"),p={name:"Navbar",data(){return{code:""}},computed:{profile(){return this.$store.state.profile}},methods:{async login(){await this.$auth.loginWithPopup(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})},async setActiveRoom(){if(this.$auth.isAuthenticated)this.$store.dispatch("setMyName",this.profile.name);else if(!this.$auth.isAuthenticated){let t=await m.addName();this.$store.dispatch("setMyName",t.value)}this.$store.dispatch("getRoomByCode",this.code),this.$router.push({name:"Room",params:{code:this.code}})}}},v=p,f=a("2877"),g=Object(f["a"])(v,r,n,!1,null,null,null),b=g.exports,y={name:"App",async beforeCreate(){this.$store.dispatch("initializeSocket"),await Object(h["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:b}},C=y,w=(a("5c0b"),Object(f["a"])(C,o,i,!1,null,null,null)),_=w.exports,$=a("8c4f"),x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"background container-fluid"},[s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-12 col-md-8"},[s("img",{staticClass:"card-img img-card-md-two",attrs:{src:a("a673"),alt:"Card image"}})]),s("div",{staticClass:"col-12 col-md-4"},[s("div",{staticClass:"card text-center border-0"},[s("div",{staticClass:"card-header bg-dark flashy neon red"},[s("h3",[t._v("Level Up Your Gaming Experience")])]),s("div",{staticClass:"card-body bg-dark"},[s("p",{staticClass:"neon blue"},[t._v("Don't Waste Time Deciding what to play.Match with your friends, find a game you all love, and get to the game faster.")])])])])]),s("div",{staticClass:"divider"}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-5"},[s("div",{staticClass:"card text-center border-0"},[s("div",{staticClass:"card-header bg-dark flashy neon red"},[s("h3",[t._v("Persistent Polls")])]),s("div",{staticClass:"card-body bg-dark neon blue"},[s("p",[t._v("Love the games you voted on last time, but want to create another poll? No problem your prior polls are saved to your account.")])])])]),s("div",{staticClass:"col-7 d-none d-md-block"},[s("img",{staticClass:"card-img img-card-md-one ",attrs:{src:a("99a2"),alt:"Card image"}})])]),s("div",{staticClass:"divider"}),s("div",{staticClass:"row "},[s("div",{staticClass:"col-3 d-none d-md-block"},[s("img",{staticClass:"img-fluid img-card-sm",attrs:{src:a("0a56")}})]),s("div",{staticClass:"col-3 d-none d-md-block"},[s("img",{staticClass:"img-fluid img-card-sm",attrs:{src:a("3a12")}})]),s("div",{staticClass:"col-3 d-none d-md-block"},[s("img",{staticClass:"img-fluid img-card-sm",attrs:{src:a("6026")}})]),s("div",{staticClass:"col-3 d-none d-md-block"},[s("img",{staticClass:"img-fluid img-card-sm",attrs:{src:a("e991")}})])]),s("div",{staticClass:"divider"})])}],P={name:"Home",mounted(){}},R=P,G=Object(f["a"])(R,x,k,!1,null,null,null),N=G.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid background"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 mt-5"},[a("div",{staticClass:"card border-0"},[a("img",{staticClass:"card-img-top",attrs:{src:t.profile.picture,alt:"Card image cap"}}),a("div",{staticClass:"card-body bg-dark"},[a("h5",{staticClass:"card-title flashy neon red"},[t._v("Welcome: "+t._s(t.profile.name))]),a("p",{staticClass:"card-text neon blue"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")]),a("p",{staticClass:"flashy neon green"},[t._v(t._s(t.profile.email))]),a("i",{staticClass:"fas fa-pen-alt",attrs:{"aria-hidden":"true"},on:{click:t.toggleEdit}}),t.editing?a("form",{staticClass:"form-inline",on:{submit:t.finishEdit}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"neon blue"},[t._v("New Profile Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.eProfile.name,expression:"eProfile.name"}],staticClass:"form-control m-3 neon blue",attrs:{type:"text",placeholder:"New Name"},domProps:{value:t.eProfile.name},on:{input:function(e){e.target.composing||t.$set(t.eProfile,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"neon blue"},[t._v("New Profile Picture:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.eProfile.picture,expression:"eProfile.picture"}],staticClass:"form-control m-1 neon blue",attrs:{type:"text",placeholder:"New Picture URL"},domProps:{value:t.eProfile.picture},on:{input:function(e){e.target.composing||t.$set(t.eProfile,"picture",e.target.value)}}}),a("button",{staticClass:"btn btn-primary mx-2 flashy neon blue",attrs:{type:"submit"}},[t._v("Submit")])])]):t._e()])])]),t._m(0)]),t._m(1)])},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 col-md-8 mt-5"},[s("div",{staticClass:"card bg-dark text-light p-4"},[s("img",{staticClass:"card-img profile-img-overlay",attrs:{src:a("99a2"),alt:"Card image"}}),s("div",{staticClass:"card-img-overlay"},[s("h5",{staticClass:"card-title flashy neon red"},[t._v("My Channel")]),s("p",{staticClass:"card-text neon blue"},[t._v("This is where I could potentially invite people to hang out and run polls. Also where I would receive messages or feeds if I was subscribed to those things.")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 my-5"},[a("div",{staticClass:"card bg-dark"},[a("div",{staticClass:"card-header flashy neon red"},[t._v(" My Previous Polls ")]),a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item bg-dark neon blue"},[t._v("Cras justo odio")]),a("li",{staticClass:"list-group-item bg-dark neon blue"},[t._v("Dapibus ac facilisis in")]),a("li",{staticClass:"list-group-item bg-dark neon blue"},[t._v("Vestibulum at eros")])])])])}],O={name:"Profile",computed:{profile(){return this.$store.state.profile}},data(){return{eProfile:{},editing:!1}},methods:{toggleEdit(){this.eProfile=this.profile,this.editing=!this.editing},finishEdit(){this.editing=!1,this.$store.dispatch("editProfile",this.eProfile)}}},M=O,A=(a("e065"),Object(f["a"])(M,j,E,!1,null,"3461dd68",null)),S=A.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid background"},[a("div",{staticClass:"divider-tiny"}),t.room?a("div",{staticClass:"row"},[a("div",{staticClass:"offset-3 col-6"},[a("div",{staticClass:"card bg-dark text-center"},[a("h1",{staticClass:"flashy neon red my-3"},[t._v(t._s(t.room.name))]),a("h4",{staticClass:"flasy neon green"},[t._v("Room Code: "+t._s(t.room.code))]),a("form",{staticClass:"justify-content-center",on:{submit:function(e){return e.preventDefault(),t.createGame(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newGame.name,expression:"newGame.name"}],staticClass:"col-10 m-1",attrs:{type:"text",placeholder:"Game name...",required:""},domProps:{value:t.newGame.name},on:{input:function(e){e.target.composing||t.$set(t.newGame,"name",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newGame.imgUrl,expression:"newGame.imgUrl"}],staticClass:"col-10 m-1",attrs:{type:"Url",placeholder:"Image url..."},domProps:{value:t.newGame.imgUrl},on:{input:function(e){e.target.composing||t.$set(t.newGame,"imgUrl",e.target.value)}}}),a("button",{staticClass:"btn btn-primary flashy neon blue m-1",attrs:{type:"submit"}},[t._v("Add a game")])]),a("button",{staticClass:"btn btn-primary m-2 flashy neon blue",attrs:{type:"button"},on:{click:this.startPoll}},[t._v(" Go! ")]),t._m(0),a("ul",t._l(t.room.names,(function(e){return a("li",{key:e,staticClass:"flashy neon purple"},[t._v(t._s(e))])})),0)])])]):a("div",[a("loading-component")],1),a("div",{staticClass:"divider-small"}),a("div",{staticClass:"row"},t._l(t.games,(function(t){return a("game-component",{key:t.id,staticClass:"col-2",attrs:{gameData:t}})})),1)])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"flashy neon red my-2"},[t._v("Participants")])])}],U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex loading-component justify-content-center m-2"},[a("canvas",{staticClass:"loading-animations",attrs:{id:"animationCanvas"}})])}],I={name:"loadingComponent",mounted(){for(let t=0;t<20;t++)this.scribbleAnimation(255,255,255,100*(Math.random()-.5),100*(Math.random()-.5))},data(){return{}},methods:{scribbleAnimation(t,e,a,s,o){let i=1,r=1,n=2,l=1,c=document.getElementById("animationCanvas"),m=c.getContext("2d"),d=t,u=e,h=a,p=s,v=o;d+=(Math.random()-.5)*r,d>255&&(d=255),d<0&&(d=0),u+=(Math.random()-.5)*r,u>255&&(u=255),u<0&&(u=0),h+=(Math.random()-.5)*r,h>255&&(h=255),h<0&&(h=0),p+=(Math.random()-.5)*n,p>c.width/2&&(p=c.width/2),p<-c.width/2&&(p=-c.width/2),v+=(Math.random()-.5)*n,v>c.height/2&&(v=c.height/2),v<-c.height/2&&(v=-c.height/2),m.fillStyle=`rgb(${d}, ${h}, ${u})`,m.fillRect(c.width/2+p,c.height/2+v,i,i),setTimeout(()=>{document.getElementById("animationCanvas")&&this.scribbleAnimation(d,u,h,p,v)},l)}}},V=I,H=Object(f["a"])(V,U,B,!1,null,null,null),L=H.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card bg-dark"},[a("h1",{staticClass:"flashy neon orange"},[t._v(t._s(t.gameData.name))]),a("img",{staticClass:"img-fluid",attrs:{src:t.gameData.imgUrl}}),a("h6",{staticClass:"flashy neon orange"},[t._v("Score: "+t._s(t.gameData.score))])])},Y=[],J={name:"game-component",props:["gameData"],data(){return{}}},q=J,z=Object(f["a"])(q,W,Y,!1,null,null,null),Q=z.exports,Z={name:"Room",data(){return{newGame:{}}},mounted(){this.$store.dispatch("getRoomByCode",this.$route.params.code),this.$store.dispatch("joinRoom",""+this.$route.params.code),this.$store.dispatch("addName",{addName:this.$store.state.name}),this.$store.dispatch("getGames",this.$route.params.code)},computed:{games(){return this.$store.state.games},room(){return this.$store.state.room},profile(){return this.$store.state.profile}},methods:{createGame(){this.newGame.roomId=this.room.id,this.$store.dispatch("createGame",this.newGame),this.newGame={}},startPoll(){this.$store.dispatch("startPoll",this.room.code),this.$store.dispatch("getGames",this.room.code)},async checkName(){if(this.$auth.isAuthenticated)this.$store.dispatch("addName",{id:this.room.id,addName:this.profile.name});else if(!this.$auth.isAuthenticated){let t=await m.addName();this.$store.dispatch("addName",{id:this.room.id,addName:t.value})}}},components:{loadingComponent:L,gameComponent:Q}},F=Z,K=(a("633e"),Object(f["a"])(F,D,T,!1,null,null,null)),X=K.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid background"},[a("div",{staticStyle:{height:"2vh"}}),t._m(0),a("div",{staticStyle:{height:"2vh"}}),a("div",{staticClass:"row"},[a("div",{staticClass:"offset-4 col-4 text-center"},[a("game-component",{staticStyle:{height:"40vh"},attrs:{gameData:this.winner}})],1)]),a("div",{staticStyle:{height:"5vh"}}),t._m(1),a("div",{staticStyle:{height:"5vh"}}),a("div",{staticClass:"row justify-content-center"},t._l(t.games,(function(t){return a("game-component",{key:t.id,staticClass:"col-10 text-center p-3",attrs:{gameData:t}})})),1),a("div",{staticStyle:{height:"10vh"}})])},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center"},[a("h1",{staticClass:" flashy neon red"},[t._v(" The winner is: ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",{staticClass:"flashy neon red text-center"},[t._v("Runners Up:")])])])}],at={name:"Results",computed:{games(){return this.$store.state.games.sort((function(t,e){return e.score-t.score}))},winner(){return this.games[0]}},mounted(){this.$store.dispatch("getGames",this.$route.params.code)},components:{gameComponent:Q}},st=at,ot=Object(f["a"])(st,tt,et,!1,null,null,null),it=ot.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid background"},[a("div",{staticClass:"divider-tiny"}),a("div",{staticClass:"row d-flex justify-content-around text-center"},[a("div",{staticClass:"col-1 align-self-center"},[a("button",{staticClass:"btn btn-primary flashy neon blue",attrs:{type:"button"},on:{click:t.voteUp}},[a("i",{staticClass:"far fa-thumbs-up "})])]),a("div",{staticClass:"col-8"},[a("game-component",{staticStyle:{height:"40vh"},attrs:{gameData:this.activeGame}})],1),a("div",{staticClass:"col-1 align-self-center"},[a("button",{staticClass:"btn btn-primary flashy neon blue",attrs:{type:"button"},on:{click:t.voteDown}},[a("i",{staticClass:"far fa-thumbs-down"})])])]),t._m(0)])},nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row text-center fixed-bottom my-3"},[a("div",{staticClass:"offset-4 col-4"},[a("button",{staticClass:"btn btn-warning flashy neon purple",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-times-circle"})])])])}],lt={name:"Vote",data(){return{index:0}},components:{gameComponent:Q},computed:{activeGame(){return this.$store.state.activeGame},games(){return this.$store.state.games},room(){return this.$store.state.room}},mounted(){this.$store.dispatch("startVote",this.$route.params.code)},methods:{voteUp(){this.activeGame.id||this.$store.dispatch("getGamebyID",this.games[this.index].id),this.$store.dispatch("upGame",{id:this.activeGame.id,code:this.$route.params.code}),this.getNext()},voteDown(){this.activeGame.id||this.$store.dispatch("getGamebyID",this.games[this.index].id),this.$store.dispatch("downGame",this.activeGame,this.$route.params.code),this.getNext()},getNext(){this.index++,this.index<this.games.length?this.$store.dispatch("getGamebyID",this.games[this.index].id):this.$router.push({name:"WaitResults",params:{code:this.$route.params.code}})}}},ct=lt,mt=Object(f["a"])(ct,rt,nt,!1,null,null,null),dt=mt.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid background"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"offset-1 col-10"},[a("div",{staticClass:"card text-center my-5 bg-dark"},[a("div",{staticClass:"card-header flashy neon red"},[t._v(" Create a New Poll ")]),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title flashy neon red"},[t._v("Create Room")]),a("form",{staticClass:"row justify-content-center",on:{submit:function(e){return e.preventDefault(),t.addRoom(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newRoom.name,expression:"newRoom.name"}],staticClass:"col-10 m-1 neon blue",attrs:{type:"text",placeholder:"New room name...",required:""},domProps:{value:t.newRoom.name},on:{input:function(e){e.target.composing||t.$set(t.newRoom,"name",e.target.value)}}}),a("button",{staticClass:"btn btn-primary flashy neon blue",attrs:{type:"submit"}},[t._v(" Go! ")])])])])])]),t._m(1)])},ht=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-11 col-md-8"},[a("div",{staticClass:"jumbotron mt-5 bg-dark text-center"},[a("h1",{staticClass:"display-4 flashy neon red"},[t._v("Create a Poll")]),a("p",{staticClass:"lead neon blue"},[t._v("Use this page to create a poll so you and your friends can get gaming quicker.")]),a("hr"),a("p",{staticClass:"neon blue"},[t._v("Check out the poll options down below.")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"offset-1 col-10"},[a("div",{staticClass:"card text-center my-5 bg-dark"},[a("div",{staticClass:"card-header flashy neon red"},[t._v(" My Previous Polls ")]),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title neon blue"},[t._v("Prior Profile Polls would go here.")]),a("p",{staticClass:"card-text neon blue"},[t._v("Supporting text may or may not get removed.")])])])])])}],pt={name:"Rooms",data(){return{newRoom:{name:""}}},computed:{activeroom(){return this.$store.state.room},profile(){return this.$store.state.profile},name(){return this.$store.state.name}},methods:{addRoom(){this.$store.dispatch("setMyName",this.profile.name),this.$store.dispatch("createRoom",this.newRoom)}},mounted(){this.$store.dispatch("joinRoom","default"),this.$store.dispatch("setMyName",this.profile.name)}},vt=pt,ft=Object(f["a"])(vt,ut,ht,!1,null,null,null),gt=ft.exports,bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid background"},[a("h1",{staticClass:" flashy neon red"},[t._v(" Awaiting results ")])])}],Ct={name:"WaitResults"},wt=Ct,_t=Object(f["a"])(wt,bt,yt,!1,null,null,null),$t=_t.exports;s["a"].use($["a"]);const xt=[{path:"/",name:"Home",component:N},{path:"/profile",name:"Profile",component:S,beforeEnter:h["b"]},{path:"/room/:code",name:"Room",component:X},{path:"/room",name:"Rooms",component:gt},{path:"/room/:code/results",name:"Results",component:it},{path:"/room/:code/waitresults",name:"WaitResults",component:$t},{path:"/room/:code/vote",name:"Vote",component:dt}],kt=new $["a"]({routes:xt});var Pt=kt,Rt=a("2f62");let Gt=location.host.includes("localhost")?"http://localhost:3000/":"/";const Nt=u.a.create({baseURL:Gt+"api",timeout:3e3,withCredentials:!0});var jt=a("8055"),Et=a.n(jt);let Ot={};const Mt={actions:{initializeSocket({commit:t,dispatch:e,state:a}){Ot=Et()("//localhost:3000"),Ot.on("CONNECTED",t=>{console.log(t.message+" sockets on")}),Ot.on("updateRoom",e=>{t("setRoom",e)}),Ot.on("joined room",t=>console.log(t)),Ot.on("new user",t=>console.log(t)),Ot.on("startPoll",t=>{Pt.push({name:"Vote",params:{code:t}})}),Ot.on("poll ended",t=>{Pt.push({name:"Results",params:{code:t}})})},joinRoom({commit:t,dispatch:e},a){Ot.emit("dispatch",{action:"JoinRoom",data:a})},leaveRoom({commit:t,dispatch:e},a){Ot.emit("disconnect",{action:"LeaveRoom",data:a})}}};s["a"].use(Rt["a"]);var At=new Rt["a"].Store({state:{profile:{},room:{},myRooms:[],games:[],activeGame:{},name:""},mutations:{setProfile(t,e){t.profile=e},setRoom(t,e){t.room=e},setMyRooms(t,e){t.myRooms=e},setGames(t,e){t.games=e},setActiveGame(t,e){t.activeGame=e},addGame(t,e){t.games.push(e),t.games=t.games},setMyName(t,e){t.name=e}},actions:{setBearer({},t){Nt.defaults.headers.authorization=t},resetBearer(){Nt.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await Nt.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}},async editProfile({commit:t},e){try{let a=await Nt.put("profile/"+e.id,e);t("setProfile",a.data)}catch(a){console.error(a)}},async getRoomByCode({commit:t},e){let a=await Nt.get("rooms/"+e);t("setRoom",a.data)},async getRooms({commit:t},e){try{let a=await Nt.get(`profile/${e}/rooms`);t("setMyRooms",a.data)}catch(a){console.error(a)}},async editRoom({commit:t},e){try{let a=await Nt.put("rooms"+e.id,e);t("setRoom",a.data)}catch(a){console.error(a)}},async deleteRoom({},t){try{await Nt.delete("rooms/"+t)}catch(e){console.error(e)}},async createRoom({commit:t,state:e},a){try{this.state.profile.email&&(a.creatorEmail=this.state.profile.email);let e=await Nt.post("rooms",a);t("setRoom",e.data),console.log(e),Pt.push({name:"Room",params:{code:e.data.code}})}catch(s){console.error(s)}},async addName({commit:t},e){try{if(this.state.room.names.includes(e.addName)||""==e.addName)return;await Nt.put(`rooms/${this.state.room.id}/names`,{addName:e.addName})}catch(a){}},async startPoll({},t){try{Nt.put(`rooms/${t}/start`)}catch(e){}},async getGamebyID({commit:t},e){try{let a=await Nt.get("games/"+e);t("setActiveGame",a.data)}catch(a){console.error(a)}},async getGames({commit:t,state:e},a){try{let e=await Nt.get(`rooms/${a}/games`);t("setGames",e.data)}catch(s){console.error(s)}},async editGame({commit:t},e){try{let a=await Nt.put("games"+e.id,e);t("editGame",a.data)}catch(a){console.error(a)}},async deleteGame({},t){try{await Nt.delete("games/"+t)}catch(e){console.error(e)}},async createGame({commit:t},e){try{let a=await Nt.post("games",e);t("addGame",a.data)}catch(a){console.error(a)}},async respond({},t){try{await Nt.post("responses",t)}catch(e){console.error(e)}},async upGame({commit:t,state:e},a){try{await Nt.put(`games/${a.id}/upvote`,{code:a.code})}catch(s){console.error(s)}},async downGame({commit:t,state:e},a,s){try{await Nt.put(`games/${a.id}/downvote`,s)}catch(o){console.error(o)}},setMyName({commit:t},e){t("setMyName",e)},async startVote({commit:t,state:e,dispatch:a},s){try{let e=await Nt.get(`rooms/${s}/games`);t("setGames",e.data),t("setActiveGame",e.data[0])}catch(o){console.error(o)}}},modules:{socketService:Mt}});const St="deciderapp.us.auth0.com",Dt="https://deciderapp",Tt="3tHh1A0HRx9ZMwTQVOrmRS92ejVj9AIA";s["a"].use(h["a"],{domain:St,clientId:Tt,audience:Dt,onRedirectCallback:t=>{Pt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:Pt,store:At,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),o=a.n(s);o.a},6026:function(t,e,a){t.exports=a.p+"img/neoncompguts.ff952789.jpg"},"633e":function(t,e,a){"use strict";var s=a("3ffd"),o=a.n(s);o.a},"94ab":function(t,e,a){},"99a2":function(t,e,a){t.exports=a.p+"img/gameon.75f1ef37.jpg"},"9c0c":function(t,e,a){},a673:function(t,e,a){t.exports=a.p+"img/neontogether.aecd5dc2.jpg"},e065:function(t,e,a){"use strict";var s=a("94ab"),o=a.n(s);o.a},e991:function(t,e,a){t.exports=a.p+"img/vrdude.4a31bfab.jpg"}});