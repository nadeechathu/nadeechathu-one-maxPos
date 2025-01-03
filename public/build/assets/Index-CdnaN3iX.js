import{T as w,o as m,c as z,w as i,b as l,u as s,a as e,g as S,i as h,m as D,q as j,e as b,t as g,f as N,x as B,d as v,n as k,F as M,h as V,Z as E,k as O}from"./app-CKJ_Ve5M.js";import{_ as U,F as Y}from"./Footer-Cuz9hzP5.js";import{h as y,G as C,V as T,Y as _,S as A}from"./transition-Bd2hPjeG.js";import{_ as F}from"./Banner-pU-z1LEI.js";import{H as u}from"./Permissions-jwKfH5xy.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const I={class:"fixed inset-0 z-10 flex items-center justify-center"},G={class:"mt-6 space-y-4 text-left"},H={key:0,class:"mt-4 text-red-500"},L={class:"mt-6 space-x-4"},R={__name:"SizeCreateModel",props:{open:{type:Boolean,required:!0},sizes:{type:Array,required:!0}},emits:["update:open"],setup(d,{emit:x}){const p=()=>{new Audio("/sounds/click-sound.mp3").play()},r=x,a=w({name:""}),f=()=>{a.post("/sizes",{onSuccess:()=>{a.reset(),r("update:open",!1)}})};return(n,t)=>(m(),z(s(A),{as:"template",show:d.open},{default:i(()=>[l(s(_),{class:"relative z-10",onClose:t[3]||(t[3]=o=>n.$emit("update:open",!1))},{default:i(()=>[l(s(y),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>t[4]||(t[4]=[e("div",{class:"fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"},null,-1)])),_:1}),e("div",I,[l(s(y),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:i(()=>[l(s(C),{class:"bg-black border-4 border-blue-600 rounded-[20px] shadow-xl max-w-md w-full p-6 text-center"},{default:i(()=>[l(s(T),{class:"text-xl font-bold text-white"},{default:i(()=>t[5]||(t[5]=[S("Add Size")])),_:1}),e("form",{onSubmit:h(f,["prevent"])},[e("div",G,[e("div",null,[t[6]||(t[6]=e("label",{class:"block text-sm font-medium text-gray-300"},"Size Name:",-1)),D(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s(a).name=o),type:"text",id:"name",required:"",class:"w-full px-4 py-2 mt-2 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-600"},null,512),[[j,s(a).name]]),s(a).errors.name?(m(),b("span",H,g(s(a).errors.name),1)):N("",!0)])]),e("div",L,[e("button",{onClick:t[1]||(t[1]=()=>{p()}),class:"px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700",type:"submit"}," Save "),e("button",{onClick:t[2]||(t[2]=()=>{p(),r("update:open",!1)}),class:"px-4 py-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400",type:"button"}," Cancel ")])],32)]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"]))}},Z={class:"fixed inset-0 z-10 flex items-center justify-center"},J={class:"mt-6 space-x-4"},K={__name:"SizeDeleteModel",props:{open:{type:Boolean,required:!0},selectedSize:{type:Object,default:null}},emits:["update:open"],setup(d,{emit:x}){const p=()=>{new Audio("/sounds/click-sound.mp3").play()},r=x,a=w({}),f=()=>{var n;(n=d.selectedSize)!=null&&n.id&&a.delete(`/sizes/${d.selectedSize.id}`,{onSuccess:()=>{r("update:open",!1)},onError:t=>{console.error("Delete failed:",t)}})};return(n,t)=>(m(),z(s(A),{as:"template",show:d.open},{default:i(()=>[l(s(_),{class:"relative z-10",onClose:t[2]||(t[2]=o=>n.$emit("update:open",!1))},{default:i(()=>[l(s(y),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>t[3]||(t[3]=[e("div",{class:"fixed inset-0 transition-opacity bg-opacity-75"},null,-1)])),_:1}),e("div",Z,[l(s(y),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:i(()=>[l(s(C),{class:"bg-white border-1 border-gray-600 rounded-[20px] shadow-xl max-w-md w-full p-6 text-center"},{default:i(()=>[t[4]||(t[4]=e("p",{class:"text-[15px] text-center text-gray-700"}," Are you sure you want to delete this Size? This action cannot be undone. ",-1)),e("div",J,[e("button",{class:"px-6 py-2 text-[15px] text-gray-700 bg-gray-300 rounded hover:bg-gray-400",onClick:t[0]||(t[0]=()=>{p(),r("update:open",!1)})}," Cancel "),e("button",{class:"px-6 py-2 text-[15px] text-white bg-red-600 rounded hover:bg-red-700",onClick:t[1]||(t[1]=h(()=>{p(),f()},["prevent"]))}," Delete ")])]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"]))}},P={class:"fixed inset-0 z-10 flex items-center justify-center"},Q={class:"mt-6 space-y-4 text-left"},W={class:"flex items-center gap-8 mt-6"},X={class:"w-full"},ee={key:0,class:"mt-4 text-red-500"},te={class:"mt-6 space-x-4"},se={__name:"SizeUpdateModel",props:{open:{type:Boolean,required:!0},Size:{type:Array,required:!0},selectedSize:{type:Object,default:null}},emits:["update:open"],setup(d,{emit:x}){const p=()=>{new Audio("/sounds/click-sound.mp3").play()},r=x,a=w({name:""});B(()=>d.selectedSize,n=>{n&&(a.name=n.name||"")},{immediate:!0});const f=()=>{a.put(`/sizes/${d.selectedSize.id}`,{onSuccess:()=>{a.reset(),r("update:open",!1)}})};return(n,t)=>(m(),z(s(A),{as:"template",show:d.open},{default:i(()=>[l(s(_),{class:"relative z-10",onClose:t[3]||(t[3]=o=>n.$emit("update:open",!1))},{default:i(()=>[l(s(y),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>t[4]||(t[4]=[e("div",{class:"fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"},null,-1)])),_:1}),e("div",P,[l(s(y),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:i(()=>[l(s(C),{class:"bg-black border-4 border-blue-600 rounded-[20px] shadow-xl max-w-md w-full p-6 text-center"},{default:i(()=>[l(s(T),{class:"text-xl font-bold text-white"},{default:i(()=>t[5]||(t[5]=[S(" Edit Size ")])),_:1}),e("form",{onSubmit:h(f,["prevent"])},[e("div",Q,[e("div",W,[e("div",X,[e("div",null,[t[6]||(t[6]=e("label",{class:"block text-sm font-medium text-gray-300"}," Size Name: ",-1)),D(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s(a).name=o),type:"text",id:"name",required:"",class:"w-full px-4 py-2 mt-2 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-600"},null,512),[[j,s(a).name]]),s(a).errors.name?(m(),b("span",ee,g(s(a).errors.name),1)):N("",!0)])])]),e("div",te,[e("button",{class:"px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700",type:"submit",onClick:t[1]||(t[1]=()=>{p()})}," Save "),e("button",{class:"px-4 py-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400",onClick:t[2]||(t[2]=()=>{p(),r("update:open",!1)}),type:"button"}," Cancel ")])])],32)]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"]))}},oe={class:"flex flex-col items-center justify-start min-h-screen py-8 space-y-8 bg-gray-100 px-36"},le={class:"w-5/6 py-12 space-y-24"},ae={class:"flex items-center justify-between"},ne={class:"text-3xl italic font-bold text-black"},ie={class:"px-4 py-1 mr-3 text-white bg-black rounded-xl"},de={class:"flex w-full"},re={class:"flex items-center w-full h-16 space-x-4 rounded-2xl"},ue={class:"flex justify-end w-full"},pe=["title"],ce={key:0,class:"overflow-x-auto"},me={id:"SizeTable",class:"w-full text-gray-700 bg-white border border-gray-300 rounded-lg shadow-md table-auto"},fe={class:"px-6 py-3 text- first-letter:"},xe={class:"px-6 py-3"},be={class:"px-6 py-3 text-"},ye=["title","disabled","onClick"],ge=["title","disabled","onClick"],ve={key:1,class:"col-span-4 text-center text-blue-500"},Ce={__name:"Index",props:{allsize:Array,totalSize:Number},setup(d){const x=t=>{console.log("Opening edit modal for size:",t),n.value=t,a.value=!0},p=t=>{n.value=t,f.value=!0};w({});const r=v(!1),a=v(!1),f=v(!1),n=v(null);return $(document).ready(function(){$("#SizeTable").DataTable({dom:"Bfrtip",pageLength:10,buttons:[],columnDefs:[{targets:[2],searchable:!1,orderable:!1}],initComplete:function(){let t=$("div.dataTables_filter input");t.attr("placeholder","Search ..."),t.off("keyup"),t.on("keypress",function(o){})},language:{search:""}})}),(t,o)=>(m(),b(M,null,[l(s(E),{title:"Sizes"}),l(F),e("div",oe,[l(U),e("div",le,[e("div",ae,[o[5]||(o[5]=e("div",{class:"flex items-center justify-center space-x-4"},null,-1)),e("p",ne,[e("span",ie,g(d.allsize.length),1),o[4]||(o[4]=e("span",{class:"text-xl"},"/ Total Sizes",-1))])]),e("div",de,[e("div",re,[l(s(O),{href:"/"},{default:i(()=>o[6]||(o[6]=[e("img",{src:"/images/back-arrow.png",class:"w-14 h-14"},null,-1)])),_:1}),o[7]||(o[7]=e("p",{class:"text-4xl font-bold tracking-wide text-black uppercase"}," sizes ",-1))]),e("div",ue,[e("p",{onClick:o[0]||(o[0]=()=>{s(u)(["Admin"])&&(r.value=!0)}),class:k(s(u)(["Admin"])?"px-12 py-4 text-2xl font-bold tracking-wider text-white uppercase bg-blue-600 rounded-xl":"px-12 py-4 text-2xl font-bold tracking-wider text-white uppercase bg-blue-600 cursor-not-allowed rounded-xl"),title:s(u)(["Admin"])?"":"You do not have permission to add more sizes"},o[8]||(o[8]=[e("i",{class:"pr-4 ri-add-circle-fill"},null,-1),S(" Add More Size ")]),10,pe)])]),d.allsize&&d.allsize.length>0?(m(),b("div",ce,[e("table",me,[o[9]||(o[9]=e("thead",null,[e("tr",{class:"bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-[16px] text-white border-b border-blue-700"},[e("th",{class:"p-4 font-semibold tracking-wide uppercase"},"#"),e("th",{class:"p-4 font-semibold tracking-wide uppercase"},"Name"),e("th",{class:"p-4 font-semibold tracking-wide uppercase"},"Actions")])],-1)),e("tbody",null,[(m(!0),b(M,null,V(d.allsize,(c,q)=>(m(),b("tr",{key:c.id,class:"hover:bg-gray-200"},[e("td",fe,g(q+1),1),e("td",xe,g(c.name),1),e("td",be,[e("button",{class:k(s(u)(["Admin"])?"px-4 py-2 bg-green-500 text-white rounded-lg":"px-4 py-2 bg-green-400 text-white rounded-lg cursor-not-allowed"),title:s(u)(["Admin"])?"":"You do not have permission to edit",disabled:!s(u)(["Admin"]),onClick:()=>{s(u)(["Admin"])&&x(c)}}," Edit ",10,ye),e("button",{class:k(s(u)(["Admin"])?"px-4 py-2 bg-red-500 text-white rounded-lg ml-2":"px-4 py-2 bg-red-400 text-white rounded-lg cursor-not-allowed ml-2"),title:s(u)(["Admin"])?"":"You do not have permission to delete",disabled:!s(u)(["Admin"]),onClick:()=>{s(u)(["Admin"])&&p(c)}}," Delete ",10,ge)])]))),128))])])])):(m(),b("div",ve,o[10]||(o[10]=[e("p",{class:"text-center text-red-500 text-[17px]"}," No suppliers available ",-1)])))])]),l(R,{sizes:d.allsize,open:r.value,"onUpdate:open":o[1]||(o[1]=c=>r.value=c)},null,8,["sizes","open"]),l(se,{sizes:d.allsize,open:a.value,"onUpdate:open":o[2]||(o[2]=c=>a.value=c),"selected-size":n.value},null,8,["sizes","open","selected-size"]),l(K,{sizes:d.allsize,"selected-size":n.value,open:f.value,"onUpdate:open":o[3]||(o[3]=c=>f.value=c)},null,8,["sizes","selected-size","open"]),l(Y)],64))}};export{Ce as default};