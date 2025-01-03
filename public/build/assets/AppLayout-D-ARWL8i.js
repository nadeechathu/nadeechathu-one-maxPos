import{o as r,e as i,a as e,d as F,y as N,D as P,l as _,r as m,E as C,u as h,m as T,G as j,b as u,w as a,n as y,H as z,c as v,k as S,Z as D,g as p,t as w,f,F as x,h as L,i as $,z as B}from"./app-CKJ_Ve5M.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as O}from"./Banner-pU-z1LEI.js";const V={},I={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function R(l,n){return r(),i("svg",I,n[0]||(n[0]=[e("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),e("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1)]))}const G=E(V,[["render",R]]),H={class:"relative"},A={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(l){const n=l;let o=F(!1);const g=d=>{o.value&&d.key==="Escape"&&(o.value=!1)};N(()=>document.addEventListener("keydown",g)),P(()=>document.removeEventListener("keydown",g));const s=_(()=>({48:"w-48"})[n.width.toString()]),t=_(()=>n.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":n.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top");return(d,c)=>(r(),i("div",H,[e("div",{onClick:c[0]||(c[0]=M=>C(o)?o.value=!h(o):o=!h(o))},[m(d.$slots,"trigger")]),T(e("div",{class:"fixed inset-0 z-40",onClick:c[1]||(c[1]=M=>C(o)?o.value=!1:o=!1)},null,512),[[j,h(o)]]),u(z,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[T(e("div",{class:y(["absolute z-50 mt-2 rounded-md shadow-lg",[s.value,t.value]]),style:{display:"none"},onClick:c[2]||(c[2]=M=>C(o)?o.value=!1:o=!1)},[e("div",{class:y(["rounded-md ring-1 ring-black ring-opacity-5",l.contentClasses])},[m(d.$slots,"content")],2)],2),[[j,h(o)]])]),_:3})]))}},U={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out text-start hover:bg-gray-100 focus:outline-none focus:bg-gray-100"},Z=["href"],k={__name:"DropdownLink",props:{href:String,as:String},setup(l){return(n,o)=>(r(),i("div",null,[l.as=="button"?(r(),i("button",U,[m(n.$slots,"default")])):l.as=="a"?(r(),i("a",{key:1,href:l.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"},[m(n.$slots,"default")],8,Z)):(r(),v(h(S),{key:2,href:l.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"},{default:a(()=>[m(n.$slots,"default")]),_:3},8,["href"]))]))}},q={__name:"NavLink",props:{href:String,active:Boolean},setup(l){const n=l,o=_(()=>n.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(g,s)=>(r(),v(h(S),{href:l.href,class:y(o.value)},{default:a(()=>[m(g.$slots,"default")]),_:3},8,["href","class"]))}},b={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(l){const n=l,o=_(()=>n.active?"block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(g,s)=>(r(),i("div",null,[l.as=="button"?(r(),i("button",{key:0,class:y([o.value,"w-full text-start"])},[m(g.$slots,"default")],2)):(r(),v(h(S),{key:1,href:l.href,class:y(o.value)},{default:a(()=>[m(g.$slots,"default")]),_:3},8,["href","class"]))]))}},J={class:"min-h-screen bg-gray-100"},K={class:"bg-white border-b border-gray-100"},Q={class:"px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"},W={class:"flex justify-between h-16"},X={class:"flex"},Y={class:"flex items-center shrink-0"},ee={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},te={class:"hidden sm:flex sm:items-center sm:ms-6"},se={class:"relative ms-3"},re={class:"inline-flex rounded-md"},oe={type:"button",class:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50"},ne={class:"w-60"},ae=["onSubmit"],ie={class:"flex items-center"},le={key:0,class:"w-5 h-5 text-green-400 me-2",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},ue={class:"relative ms-3"},de={key:0,class:"flex text-sm transition border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300"},pe=["src","alt"],fe={key:1,class:"inline-flex rounded-md"},ge={type:"button",class:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50"},me={class:"flex items-center -me-2 sm:hidden"},he={class:"w-6 h-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},ce={class:"pt-2 pb-3 space-y-1"},ve={class:"pt-4 pb-1 border-t border-gray-200"},ye={class:"flex items-center px-4"},be={key:0,class:"shrink-0 me-3"},we=["src","alt"],ke={class:"text-base font-medium text-gray-800"},xe={class:"text-sm font-medium text-gray-500"},$e={class:"mt-3 space-y-1"},_e=["onSubmit"],Se={class:"flex items-center"},Ce={key:0,class:"w-5 h-5 text-green-400 me-2",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Me={key:0,class:"bg-white shadow"},Te={class:"px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8"},Ae={__name:"AppLayout",props:{title:String},setup(l){const n=F(!1),o=s=>{B.put(route("current-team.update"),{team_id:s.id},{preserveState:!1})},g=()=>{B.post(route("logout"))};return(s,t)=>(r(),i("div",null,[u(h(D),{title:l.title},null,8,["title"]),u(O),e("div",J,[e("nav",K,[e("div",Q,[e("div",W,[e("div",X,[e("div",Y,[u(h(S),{href:s.route("dashboard")},{default:a(()=>[u(G,{class:"block w-auto h-9"})]),_:1},8,["href"])]),e("div",ee,[u(q,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:a(()=>t[1]||(t[1]=[p(" Dashboard ")])),_:1},8,["href","active"])])]),e("div",te,[e("div",se,[s.$page.props.jetstream.hasTeamFeatures?(r(),v(A,{key:0,align:"right",width:"60"},{trigger:a(()=>[e("span",re,[e("button",oe,[p(w(s.$page.props.auth.user.current_team.name)+" ",1),t[2]||(t[2]=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1))])])]),content:a(()=>[e("div",ne,[t[8]||(t[8]=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1)),u(k,{href:s.route("teams.show",s.$page.props.auth.user.current_team)},{default:a(()=>t[3]||(t[3]=[p(" Team Settings ")])),_:1},8,["href"]),s.$page.props.jetstream.canCreateTeams?(r(),v(k,{key:0,href:s.route("teams.create")},{default:a(()=>t[4]||(t[4]=[p(" Create New Team ")])),_:1},8,["href"])):f("",!0),s.$page.props.auth.user.all_teams.length>1?(r(),i(x,{key:1},[t[6]||(t[6]=e("div",{class:"border-t border-gray-200"},null,-1)),t[7]||(t[7]=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1)),(r(!0),i(x,null,L(s.$page.props.auth.user.all_teams,d=>(r(),i("form",{key:d.id,onSubmit:$(c=>o(d),["prevent"])},[u(k,{as:"button"},{default:a(()=>[e("div",ie,[d.id==s.$page.props.auth.user.current_team_id?(r(),i("svg",le,t[5]||(t[5]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))):f("",!0),e("div",null,w(d.name),1)])]),_:2},1024)],40,ae))),128))],64)):f("",!0)])]),_:1})):f("",!0)]),e("div",ue,[u(A,{align:"right",width:"48"},{trigger:a(()=>[s.$page.props.jetstream.managesProfilePhotos?(r(),i("button",de,[e("img",{class:"object-cover w-8 h-8 rounded-full",src:s.$page.props.auth.user.profile_photo_url,alt:s.$page.props.auth.user.name},null,8,pe)])):(r(),i("span",fe,[e("button",ge,[p(w(s.$page.props.auth.user.name)+" ",1),t[9]||(t[9]=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1))])]))]),content:a(()=>[t[13]||(t[13]=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1)),u(k,{href:s.route("profile.show")},{default:a(()=>t[10]||(t[10]=[p(" Profile ")])),_:1},8,["href"]),s.$page.props.jetstream.hasApiFeatures?(r(),v(k,{key:0,href:s.route("api-tokens.index")},{default:a(()=>t[11]||(t[11]=[p(" API Tokens ")])),_:1},8,["href"])):f("",!0),t[14]||(t[14]=e("div",{class:"border-t border-gray-200"},null,-1)),e("form",{onSubmit:$(g,["prevent"])},[u(k,{as:"button"},{default:a(()=>t[12]||(t[12]=[p(" Log Out ")])),_:1})],32)]),_:1})])]),e("div",me,[e("button",{class:"inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500",onClick:t[0]||(t[0]=d=>n.value=!n.value)},[(r(),i("svg",he,[e("path",{class:y({hidden:n.value,"inline-flex":!n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:y({hidden:!n.value,"inline-flex":n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:y([{block:n.value,hidden:!n.value},"sm:hidden"])},[e("div",ce,[u(b,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:a(()=>t[15]||(t[15]=[p(" Dashboard ")])),_:1},8,["href","active"])]),e("div",ve,[e("div",ye,[s.$page.props.jetstream.managesProfilePhotos?(r(),i("div",be,[e("img",{class:"object-cover w-10 h-10 rounded-full",src:s.$page.props.auth.user.profile_photo_url,alt:s.$page.props.auth.user.name},null,8,we)])):f("",!0),e("div",null,[e("div",ke,w(s.$page.props.auth.user.name),1),e("div",xe,w(s.$page.props.auth.user.email),1)])]),e("div",$e,[u(b,{href:s.route("profile.show"),active:s.route().current("profile.show")},{default:a(()=>t[16]||(t[16]=[p(" Profile ")])),_:1},8,["href","active"]),s.$page.props.jetstream.hasApiFeatures?(r(),v(b,{key:0,href:s.route("api-tokens.index"),active:s.route().current("api-tokens.index")},{default:a(()=>t[17]||(t[17]=[p(" API Tokens ")])),_:1},8,["href","active"])):f("",!0),e("form",{method:"POST",onSubmit:$(g,["prevent"])},[u(b,{as:"button"},{default:a(()=>t[18]||(t[18]=[p(" Log Out ")])),_:1})],32),s.$page.props.jetstream.hasTeamFeatures?(r(),i(x,{key:1},[t[24]||(t[24]=e("div",{class:"border-t border-gray-200"},null,-1)),t[25]||(t[25]=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1)),u(b,{href:s.route("teams.show",s.$page.props.auth.user.current_team),active:s.route().current("teams.show")},{default:a(()=>t[19]||(t[19]=[p(" Team Settings ")])),_:1},8,["href","active"]),s.$page.props.jetstream.canCreateTeams?(r(),v(b,{key:0,href:s.route("teams.create"),active:s.route().current("teams.create")},{default:a(()=>t[20]||(t[20]=[p(" Create New Team ")])),_:1},8,["href","active"])):f("",!0),s.$page.props.auth.user.all_teams.length>1?(r(),i(x,{key:1},[t[22]||(t[22]=e("div",{class:"border-t border-gray-200"},null,-1)),t[23]||(t[23]=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1)),(r(!0),i(x,null,L(s.$page.props.auth.user.all_teams,d=>(r(),i("form",{key:d.id,onSubmit:$(c=>o(d),["prevent"])},[u(b,{as:"button"},{default:a(()=>[e("div",Se,[d.id==s.$page.props.auth.user.current_team_id?(r(),i("svg",Ce,t[21]||(t[21]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))):f("",!0),e("div",null,w(d.name),1)])]),_:2},1024)],40,_e))),128))],64)):f("",!0)],64)):f("",!0)])])],2)]),s.$slots.header?(r(),i("header",Me,[e("div",Te,[m(s.$slots,"header")])])):f("",!0),e("main",null,[m(s.$slots,"default")])])]))}};export{Ae as _};