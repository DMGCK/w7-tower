import{r as M,c as T,a as y,o as l,b as d,d as a,e as f,F as O,f as H,S as I,t as p,g as b,u as N,h as K,n as W,i as Y,j as G,k as J,l as Q,m as X,p as Z,w as S,q as P,s as L,v as $,x as ee,y as te,z as E,A as w,B as oe,C as ne}from"./vendor.e00ce540.js";const ae=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};ae();const i=M({user:{},account:{},events:[],activeEvent:{},activeTickets:[],comments:[]});var g=(n,e)=>{for(const[t,o]of e)n[t]=o;return n};const se={name:"App",setup(){return{appState:T(()=>i)}}},re={class:"container bg-white"};function ce(n,e,t,o,s,r){const c=y("Navbar"),v=y("router-view");return l(),d(O,null,[a("header",null,[f(c)]),a("main",null,[a("div",re,[f(v)])])],64)}var ie=g(se,[["render",ce]]);const le={props:{creator:{type:Object,required:!0}}},de={class:"att-cont"},ue=["src","title"];function me(n,e,t,o,s,r){return l(),d("div",de,[a("img",{class:"attendee",src:t.creator.account.picture,title:t.creator.account.name,alt:"Account picture"},null,8,ue)])}var _e=g(le,[["render",me]]),ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_e});const q=window.location.origin.includes("localhost"),R=q?"http://localhost:3000":"",pe="dev-ir407zip.us.auth0.com",ge="uXjiaF1TzMZojtAiclclDDpN668OHJmw",he="https://camerondev.com",m=H.create({baseURL:R,timeout:8e3});class fe{async postComment(e){const t=await m.post("api/comments",e);console.log("-PostCOmment-",t.data),i.comments=[t.data,...i.comments]}async removeComment(e){await m.delete(`api/comments/${e}`),i.comments=i.comments.filter(t=>t.id!=e)}}const be=new fe;class h{static async confirm(e="Are you sure?",t="You won't be able to revert this!",o="warning",s="Yes, delete it!"){try{return!!(await I.fire({title:e,text:t,icon:o,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:s})).isConfirmed}catch{return!1}}static toast(e="Warning!",t="warning",o="top-end",s=3e3,r=!0){I.fire({title:e,icon:t,position:o,timer:s,timerProgressBar:r,toast:!0,showConfirmButton:!1})}static error(e){var t;if(e.isAxiosError){const{response:o}=e;this.toast(((t=o.data.error)==null?void 0:t.message)||o.data.message,"error")}else this.toast(e.message||e,"error")}static success(e="Success!"){this.toast(e,"success")}}const ye={props:{comment:{type:Object,required:!0}},setup(n){return{account:T(()=>i.account),async removeComment(){try{await be.removeComment(n.comment.id),h.toast("Deleted Comment")}catch(e){console.error(e),h.toast(e,"error")}}}}},Ee={class:"elevation-2 border border-secondary my-2 mx-1 rounded bg-white"},we={class:"d-flex"},ke={class:"my-4 px-3 align-middle fw-bold"},Te={class:"d-flex justify-content-between"},Ae={class:"p-2"},Ce={class:"d-flex"},xe={class:"my-3"};function Se(n,e,t,o,s,r){const c=y("Creator");return l(),d("div",Ee,[a("div",we,[f(c,{creator:t.comment.creator},null,8,["creator"]),a("span",ke,p(t.comment.creator.name),1)]),a("div",Te,[a("div",Ae,p(t.comment.body),1),a("div",Ce,[a("p",xe,p(new Date(t.comment.createdAt).toLocaleDateString()),1),o.account.id==t.comment.creatorId?(l(),d("div",{key:0,onClick:e[0]||(e[0]=(...v)=>o.removeComment&&o.removeComment(...v)),title:"Remove comment",class:"btn btn-danger m-2"}," Remove Comment")):b("",!0)])])])}var $e=g(ye,[["render",Se]]),De=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$e});const Oe={props:{creator:{type:Object,required:!0}}},Ie={class:"my-2 px-2"},Ne=["src","title"];function Pe(n,e,t,o,s,r){return l(),d("div",Ie,[a("img",{class:"creator",src:t.creator.picture,alt:"Creator Picture",title:t.creator.name},null,8,Ne)])}var Le=g(Oe,[["render",Pe],["__scopeId","data-v-456a48ea"]]),qe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Le});class Re{async getAll(e={}){const t=await m.get("api/events");console.log(t.data),i.events=t.data}async getOne(e){if(!e)return;const t=await m.get(`api/events/${e}`);console.log(t.data),i.activeEvent=t.data}async getTicketsByEvent(e){if(!e)return;const t=await m.get(`api/events/${e}/tickets`);return console.log("tickets",t.data),i.activeTickets=t.data,t.data}async getEventsByAccount(e){if(!e)return!0;const t=await m.get("account/tickets");return console.log("-getEventsByAccount-",t.data),i.events=t.data.map(o=>o.event),i.activeTickets=t.data,t.data}async getCommentsByEvent(e){if(!e)return;const t=await m.get(`api/events/${e}/comments`);console.log("-comments-",t.data),i.comments=t.data}async attendEvent(e,t){const o=await this.getEventsByAccount(t);let s=o==null?void 0:o.find(c=>c.eventId==e);if(console.log(o,s,e),(s==null?void 0:s.eventId)!=null)return h.toast("You Already Have a Ticket","error");this.getTicketsByEvent(e);const r=await m.post("api/tickets",{eventId:e,accountId:t});console.log("-attendEvent-",r.data),i.activeTickets=[r.data,...i.activeTickets],i.activeEvent.capacity-=1}async createEvent(e,t){e.creatorId=t;const o=await m.post("api/events",e);return console.log("-createEvent-",o.data),i.events=[o.data,...i.events],o.data.id}async cancelEvent(e){const t=await m.delete(`api/events/${e}`);console.log(t.data);const o=i.events.find(s=>s.id==e);o.isCancelled=!0}async removeTicket(e,t){const o=await this.getTicketsByEvent(e);console.log(o);let s=o.find(c=>c.accountId==t);if(!s)return;const r=await m.delete(`api/tickets/${s.id}`);console.log("-deleting ticket-",r.data),i.activeTickets=i.activeTickets.filter(c=>c.id!=s.id)}}const D=new Re;const je={props:{event:{type:Object,required:!0}},setup(n){const e=N();return{route:K(),getDetails(){console.log(n.event.id),e.push({name:"Event Details",params:{id:n.event.id}})},async removeTicket(){try{console.log(n.event.id),D.removeTicket(n.event.id,i.account.id),h.toast("Deleted Ticket"),D.getEventsByAccount(i.account.id)}catch(o){console.error(o),h.toast(o,"error")}}}}},Be={class:"col-4 event"},Ve={class:"p-3 over-top"},Fe={class:"p-3 ml-4 bottom-text"},Ue={key:0},ze={key:1},Me={key:2},He={class:"d-flex flex-column p-1 px-3"};function Ke(n,e,t,o,s,r){return l(),d("div",Be,[a("div",{class:Y(t.event.isCanceled?"border border-danger":"")},[a("div",{onClick:e[0]||(e[0]=(...c)=>o.getDetails&&o.getDetails(...c)),class:"elevation-2 m-1 selectable"},[a("div",{class:"over-container",style:W({"background-image":`url(${t.event.coverImg})`})},[a("h3",Ve,p(t.event.name),1)],4),a("div",Fe,[t.event.isCanceled?b("",!0):(l(),d("p",Ue,"When: "+p(new Date(t.event.startDate).toLocaleDateString()),1)),a("p",null,"Where: "+p(t.event.location),1),t.event.isCanceled?(l(),d("p",ze,"This Event is Cancelled")):b("",!0),t.event.isCanceled?b("",!0):(l(),d("p",Me,p(t.event.capacity)+" Tickets Available",1))])]),a("div",He,[o.route.name=="About"&&t.event.id?(l(),d("div",{key:0,onClick:e[1]||(e[1]=c=>o.removeTicket()),class:"btn btn-danger"},"Remove Ticket")):b("",!0)])],2)])}var We=g(je,[["render",Ke],["__scopeId","data-v-3b5a55f6"]]),Ye=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:We});const Ge="modulepreload",j={},Je="/",C=function(e,t){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=`${Je}${o}`,o in j)return;j[o]=!0;const s=o.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":Ge,s||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),s)return new Promise((v,u)=>{c.addEventListener("load",v),c.addEventListener("error",u)})})).then(()=>e())};function Qe(n){switch(n){case"./pages/AboutPage.vue":return C(()=>import("./AboutPage.abcd5653.js"),["assets/AboutPage.abcd5653.js","assets/vendor.e00ce540.js"]);case"./pages/AccountPage.vue":return C(()=>import("./AccountPage.d60c2255.js"),["assets/AccountPage.d60c2255.js","assets/AccountPage.5aa902f8.css","assets/vendor.e00ce540.js"]);case"./pages/EventDetails.vue":return C(()=>import("./EventDetails.c6d9e061.js"),["assets/EventDetails.c6d9e061.js","assets/EventDetails.77acd384.css","assets/vendor.e00ce540.js"]);case"./pages/HomePage.vue":return C(()=>import("./HomePage.f6a7ff29.js"),["assets/HomePage.f6a7ff29.js","assets/HomePage.7da4d89e.css","assets/vendor.e00ce540.js"]);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+n)))})}}function x(n){return()=>Qe(`./pages/${n}.vue`)}const Xe=[{path:"/",name:"Home",component:x("HomePage")},{path:"/about",name:"About",component:x("AboutPage")},{path:"/account",name:"Account",component:x("AccountPage"),beforeEnter:Q},{path:"/eventDetails/:id",name:"Event Details",component:x("EventDetails"),beforeEnter:X}],B=G({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:J(),routes:Xe});function A(n,e){if(q)console[n](`[${n}] :: ${new Date().toLocaleTimeString()} :: `,...e);else{switch(n){case"log":case"assert":return}console[n](`[${n}] :: ${new Date().toLocaleTimeString()} :: `,...e)}}const k={log(){A("log",arguments)},error(){A("error",arguments)},warn(){A("warn",arguments)},assert(){A("assert",arguments)},trace(){A("trace",arguments)}};class Ze{async getAccount(){try{const e=await m.get("/account");i.account=e.data}catch(e){k.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}}const et=new Ze,tt={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class ot{constructor(e=!1,t=R){}on(e,t){var o;return(o=this.socket)==null||o.on(e,t.bind(this)),this}onConnected(e){k.log("[SOCKET_CONNECTION]",e),this.connected=!0,this.playback()}onAuthenticated(e){k.log("[SOCKET_AUTHENTICATED]",e),this.authenticated=!0,this.playback()}authenticate(e){var t;(t=this.socket)==null||t.emit(tt.authenticate,e)}onError(e){k.error("[SOCKET_ERROR]",e)}enqueue(e,t){k.log("[ENQUEING_ACTION]",{action:e,payload:t}),this.queue.push({action:e,payload:t})}playback(){k.log("[SOCKET_PLAYBACK]");const e=[...this.queue];this.queue=[],e.forEach(t=>{this.emit(t.action,t.payload)})}emit(e,t=void 0){if(this.requiresAuth&&!this.authenticated)return this.enqueue(e,t);if(!this.connected)return this.enqueue(e,t);this.socket.emit(e,t)}}class nt extends ot{constructor(){super();this.on("error",this.onError)}onError(e){h.toast(e.message,"error")}}const V=new nt,_=Z({domain:pe,clientId:ge,audience:he,useRefreshTokens:!0,onRedirectCallback:n=>{B.push(n&&n.targetUrl?n.targetUrl:window.location.pathname)}});_.on(_.AUTH_EVENTS.AUTHENTICATED,async function(){m.defaults.headers.authorization=_.bearer,m.interceptors.request.use(at),i.user=_.user,await et.getAccount(),V.authenticate(_.bearer)});async function at(n){if(!_.isAuthenticated)return n;const e=_.identity.exp*1e3,t=e<Date.now(),o=e<Date.now()+1e3*60*60*12;return t?await _.loginWithPopup():o&&(await _.getTokenSilently(),m.defaults.headers.authorization=_.bearer,V.authenticate(_.bearer)),n}const st={setup(){return{user:T(()=>i.user),account:T(()=>i.account),async login(){_.loginWithPopup()},async logout(){_.logout({returnTo:window.location.origin})}}}},F=n=>(P("data-v-63f33d38"),n=n(),L(),n),rt={class:"navbar-text"},ct={key:1,class:"dropdown my-2 my-lg-0"},it={class:"dropdown-toggle selectable","data-bs-toggle":"dropdown","aria-expanded":"false",id:"authDropdown"},lt={key:0},dt=["src"],ut={class:"mx-3 text-success lighten-30"},mt={class:"dropdown-menu p-0 list-group w-100","aria-labelledby":"authDropdown"},_t=F(()=>a("div",{class:"list-group-item list-group-item-action hoverable"}," Manage Account ",-1)),vt=F(()=>a("i",{class:"mdi mdi-logout"},null,-1)),pt=$(" logout "),gt=[vt,pt];function ht(n,e,t,o,s,r){const c=y("router-link");return l(),d("span",rt,[o.user.isAuthenticated?(l(),d("div",ct,[a("div",it,[o.account.picture?(l(),d("div",lt,[a("img",{src:o.account.picture,alt:"account photo",height:"40",class:"rounded"},null,8,dt),a("span",ut,p(o.account.name),1)])):b("",!0)]),a("div",mt,[f(c,{to:{name:"Account"}},{default:S(()=>[_t]),_:1}),a("div",{class:"list-group-item list-group-item-action hoverable text-danger",onClick:e[1]||(e[1]=(...v)=>o.logout&&o.logout(...v))},gt)])])):(l(),d("button",{key:0,class:"btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0",title:"Login Button",onClick:e[0]||(e[0]=(...v)=>o.login&&o.login(...v))}," Login "))])}var ft=g(st,[["render",ht],["__scopeId","data-v-63f33d38"]]),bt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ft});const yt={setup(){const n=N(),e=ee({});return{eventForm:e,account:T(()=>i.account),async createEvent(){console.log(e.value);try{const t=await D.createEvent(e.value,this.account.id);h.toast("Created Event"),n.push({name:"Event Details",params:{id:t}})}catch(t){console.error(t),h.toast(t,"error")}}}}},U=n=>(P("data-v-54ad380a"),n=n(),L(),n),Et={class:"navbar navbar-expand-lg navbar-dark bg-dark px-3"},wt=$(" The Tower "),kt=U(()=>a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1)),Tt={class:"collapse navbar-collapse",id:"navbarText"},At={class:"navbar-nav me-auto"},Ct=$(" Account "),xt={class:"d-flex"},St={key:0,title:"Create An Event",class:"btn btn-info m-2","data-bs-toggle":"modal","data-bs-target":"#modelId"},$t={class:"modal fade",id:"modelId",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},Dt={class:"modal-dialog modal-lg",role:"document"},Ot={class:"modal-content"},It={class:"modal-body"},Nt=U(()=>a("h1",null,"Create An Event",-1)),Pt={class:"mb-3"},Lt={class:"mb-3"},qt={class:"mb-3"},Rt={class:"mb-3"},jt={class:"mb-3"},Bt={class:"mb-3"},Vt=oe('<label class="mx-2" for="cars" data-v-54ad380a>Choose an event type: </label><select id="cars" name="cars" data-v-54ad380a><option value="concert" data-v-54ad380a>concert</option><option value="convention" data-v-54ad380a>convention</option><option value="sport" data-v-54ad380a>sport</option><option value="digital" data-v-54ad380a>digital</option></select><br data-v-54ad380a><br data-v-54ad380a><button type="submit" title="Submit form" class="btn btn-primary" data-v-54ad380a>Submit</button>',5);function Ft(n,e,t,o,s,r){const c=y("router-link"),v=y("Login");return l(),d(O,null,[a("nav",Et,[f(c,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:S(()=>[wt]),_:1}),kt,a("div",Tt,[a("ul",At,[a("li",null,[f(c,{to:{name:"About"},title:"Account Tab",class:"btn text-success lighten-30 selectable text-uppercase"},{default:S(()=>[Ct]),_:1})])]),a("div",xt,[o.account.id?(l(),d("div",St,"Create an Event ")):b("",!0),f(v)])])]),a("div",$t,[a("div",Dt,[a("div",Ot,[a("div",It,[a("form",{onSubmit:e[6]||(e[6]=te((...u)=>o.createEvent&&o.createEvent(...u),["prevent"]))},[Nt,a("div",Pt,[E(a("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=u=>o.eventForm.name=u),required:"",class:"form-control",name:"eventName",id:"eventName","aria-describedby":"helpId",placeholder:"Event Name"},null,512),[[w,o.eventForm.name]])]),a("div",Lt,[E(a("textarea",{"onUpdate:modelValue":e[1]||(e[1]=u=>o.eventForm.description=u),required:"",class:"form-control",name:"description",id:"description",placeholder:"Description",rows:"3"},null,512),[[w,o.eventForm.description]])]),a("div",qt,[E(a("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=u=>o.eventForm.location=u),required:"",class:"form-control",name:"location",id:"location","aria-describedby":"helpId",placeholder:"Location"},null,512),[[w,o.eventForm.location]])]),a("div",Rt,[E(a("input",{type:"number","onUpdate:modelValue":e[3]||(e[3]=u=>o.eventForm.capacity=u),required:"",class:"form-control",name:"capacity",id:"capacity","aria-describedby":"helpId",placeholder:"capacity"},null,512),[[w,o.eventForm.capacity]])]),a("div",jt,[E(a("input",{type:"date","onUpdate:modelValue":e[4]||(e[4]=u=>o.eventForm.startDate=u),required:"",class:"form-control",name:"startDate",id:"startDate","aria-describedby":"helpId",placeholder:"startDate"},null,512),[[w,o.eventForm.startDate]])]),a("div",Bt,[E(a("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=u=>o.eventForm.coverImg=u),required:"",class:"form-control",name:"coverImg",id:"coverImg","aria-describedby":"helpId",placeholder:"coverImg"},null,512),[[w,o.eventForm.coverImg]])]),Vt],32)])])])])],64)}var Ut=g(yt,[["render",Ft],["__scopeId","data-v-54ad380a"]]),zt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ut});const Mt={},Ht=a("button",{type:"button",class:"btn btn-primary btn-lg","data-bs-toggle":"modal","data-bs-target":"#modelId"}," Launch ",-1),Kt=[Ht];function Wt(n,e,t,o,s,r){return l(),d("div",null,Kt)}var Yt=g(Mt,[["render",Wt]]),Gt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Yt});function Jt(n){Object.entries({"./components/Attendee.vue":ve,"./components/Comment.vue":De,"./components/Creator.vue":qe,"./components/Event.vue":Ye,"./components/Login.vue":bt,"./components/Navbar.vue":zt,"./components/NewEventModal.vue":Gt}).forEach(([t,o])=>{const s=o.name||t.substr(t.lastIndexOf("/")+1).replace(/\.\w+$/,"");n.component(s,o.default)})}const z=ne(ie);Jt(z);z.use(B).mount("#app");export{i as A,h as P,g as _,be as c,D as e};