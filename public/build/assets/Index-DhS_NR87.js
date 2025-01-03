import{T as h,o as d,c as A,w as i,b as n,u as s,a as e,i as S,l as B,x as E,g as M,m as b,q as g,e as c,t as u,f as v,d as w,F as _,h as U,Z as j,k as V,n as C}from"./app-CKJ_Ve5M.js";import{_ as q,F as z}from"./Footer-Cuz9hzP5.js";import{h as k,G as N,Y as D,S as T,V as O}from"./transition-Bd2hPjeG.js";import{_ as F}from"./Banner-pU-z1LEI.js";import{H as f}from"./Permissions-jwKfH5xy.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const L={class:"fixed inset-0 z-10 flex items-center justify-center"},Y={class:"mt-6 space-x-4"},I={__name:"CustomerDeleteModel",props:{open:{type:Boolean,required:!0},selectedCustomer:{type:Object,default:null}},emits:["update:open"],setup(r,{emit:y}){const x=()=>{new Audio("/sounds/click-sound.mp3").play()},p=y,o=h({}),m=()=>{var l;(l=r.selectedCustomer)!=null&&l.id&&o.delete(`/customers/${r.selectedCustomer.id}`,{onSuccess:()=>{p("update:open",!1)},onError:t=>{console.error("Delete failed:",t)}})};return(l,t)=>(d(),A(s(T),{as:"template",show:r.open},{default:i(()=>[n(s(D),{class:"relative z-10",onClose:t[2]||(t[2]=a=>l.$emit("update:open",!1))},{default:i(()=>[n(s(k),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>t[3]||(t[3]=[e("div",{class:"fixed inset-0 transition-opacity bg-opacity-75"},null,-1)])),_:1}),e("div",L,[n(s(k),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:i(()=>[n(s(N),{class:"bg-white border-1 border-gray-600 rounded-[20px] shadow-xl max-w-md w-full p-6 text-center"},{default:i(()=>[t[4]||(t[4]=e("p",{class:"text-[15px] text-center text-gray-700"}," Are you sure you want to delete this Customer? This action cannot be undone. ",-1)),e("div",Y,[e("button",{class:"px-6 py-2 text-[15px] text-gray-700 bg-gray-300 rounded hover:bg-gray-400",onClick:t[0]||(t[0]=()=>{x(),p("update:open",!1)})}," Cancel "),e("button",{class:"px-6 py-2 text-[15px] text-white bg-red-600 rounded hover:bg-red-700",onClick:t[1]||(t[1]=S(()=>{x(),m()},["prevent"]))}," Delete ")])]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"]))}},P={class:"fixed inset-0 z-10 flex items-center justify-center"},G={class:"mt-6 space-y-4 text-left"},H={class:"flex items-center gap-8 mt-6"},R={class:"w-full"},Z={key:0,class:"mt-4 text-red-500"},J={class:"w-full"},K={key:0,class:"mt-4 text-red-500"},Q={class:"flex items-center gap-8 mt-6"},W={class:"w-full"},X={key:0,class:"mt-4 text-red-500"},ee={class:"w-full"},te={key:0,class:"mt-4 text-red-500"},se={class:"flex items-center gap-8 mt-6"},oe={class:"w-full"},le={key:0,class:"mt-4 text-red-500"},ae={class:"mt-6 space-x-4"},ne={__name:"CustomerUpdateModel",props:{open:{type:Boolean,required:!0},customer:{type:Array,required:!0},selectedCustomer:{type:Object,default:null}},emits:["update:open"],setup(r,{emit:y}){const x=()=>{new Audio("/sounds/click-sound.mp3").play()},p=y,o=h({name:"",email:"",phone:"",address:"",loyalty_points:0});B(()=>customers.filter(l=>{var t;return l.id!==((t=r.selectedCustomer)==null?void 0:t.id)})),E(()=>r.selectedCustomer,l=>{l&&(o.name=l.name||"",o.email=l.email||"",o.phone=l.phone||"",o.address=l.address||"",o.loyalty_points=l.loyalty_points||0)},{immediate:!0});const m=()=>{o.put(`/customers/${r.selectedCustomer.id}`,{onSuccess:()=>{o.reset(),p("update:open",!1)}})};return(l,t)=>(d(),A(s(T),{as:"template",show:r.open},{default:i(()=>[n(s(D),{class:"relative z-10",onClose:t[7]||(t[7]=a=>l.$emit("update:open",!1))},{default:i(()=>[n(s(k),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>t[8]||(t[8]=[e("div",{class:"fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"},null,-1)])),_:1}),e("div",P,[n(s(k),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:i(()=>[n(s(N),{class:"bg-black border-4 border-blue-600 rounded-[20px] shadow-xl w-5/6 lg:w-3/6 p-6 text-center"},{default:i(()=>[n(s(O),{class:"text-xl font-bold text-white"},{default:i(()=>t[9]||(t[9]=[M(" Edit Customer ")])),_:1}),e("form",{onSubmit:S(m,["prevent"])},[e("div",G,[e("div",H,[e("div",R,[e("div",null,[t[10]||(t[10]=e("label",{class:"block text-sm font-medium text-gray-300"}," Customer Name: ",-1)),b(e("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>s(o).name=a),type:"text",id:"name",required:"",class:"w-full px-4 py-2 mt-2 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-600"},null,512),[[g,s(o).name]]),s(o).errors.name?(d(),c("span",Z,u(s(o).errors.name),1)):v("",!0)])]),e("div",J,[e("div",null,[t[11]||(t[11]=e("label",{class:"block text-sm font-medium text-gray-300"}," Customer Phone: ",-1)),b(e("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>s(o).phone=a),type:"text",id:"phone",class:"w-full px-4 py-2 mt-2 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-600"},null,512),[[g,s(o).phone]]),s(o).errors.phone?(d(),c("span",K,u(s(o).errors.phone),1)):v("",!0)])])]),e("div",Q,[e("div",W,[e("div",null,[t[12]||(t[12]=e("label",{class:"block text-sm font-medium text-gray-300"}," Customer Email: ",-1)),b(e("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>s(o).email=a),type:"text",id:"email",class:"w-full px-4 py-2 mt-2 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-600"},null,512),[[g,s(o).email]]),s(o).errors.email?(d(),c("span",X,u(s(o).errors.email),1)):v("",!0)])]),e("div",ee,[e("div",null,[t[13]||(t[13]=e("label",{class:"block text-sm font-medium text-gray-300"}," Customer Address: ",-1)),b(e("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>s(o).address=a),type:"text",id:"address",class:"w-full px-4 py-2 mt-2 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-600"},null,512),[[g,s(o).address]]),s(o).errors.address?(d(),c("span",te,u(s(o).errors.address),1)):v("",!0)])])]),e("div",se,[e("div",oe,[e("div",null,[t[14]||(t[14]=e("label",{class:"block text-sm font-medium text-gray-300"}," Customer Loyalty Points: ",-1)),b(e("input",{"onUpdate:modelValue":t[4]||(t[4]=a=>s(o).loyalty_points=a),type:"text",id:"loyalty_points",class:"w-full px-4 py-2 mt-2 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-600"},null,512),[[g,s(o).loyalty_points]]),s(o).errors.loyalty_points?(d(),c("span",le,u(s(o).errors.loyalty_points),1)):v("",!0)])]),t[15]||(t[15]=e("div",{class:"w-full"},null,-1))])]),e("div",ae,[e("button",{class:"px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700",type:"submit",onClick:t[5]||(t[5]=()=>{x()})}," Save "),e("button",{class:"px-4 py-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400",onClick:t[6]||(t[6]=()=>{x(),p("update:open",!1)}),type:"button"}," Cancel ")])],32)]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"]))}},re={class:"flex flex-col items-center justify-start min-h-screen py-8 space-y-8 bg-gray-100 px-36"},de={class:"w-5/6 py-12 space-y-24"},ie={class:"flex items-center justify-between"},ue={class:"flex items-center space-x-4"},ce={class:"flex items-center"},pe={class:"text-3xl italic font-bold text-black"},me={class:"px-4 py-1 mr-3 text-white bg-black rounded-xl"},fe={key:0,class:"overflow-x-auto"},xe={id:"CustomerTable",class:"w-full text-gray-700 bg-white border border-gray-300 rounded-lg shadow-md table-auto"},ye={class:"text-[13px] font-normal"},be={class:"p-4 font-bold border-t border-gray-200"},ge={class:"p-4 border-t border-gray-200"},ve={class:"p-4 border-t border-gray-200"},ke={class:"p-4 border-t border-gray-200"},we={class:"p-4 border-t border-gray-200"},he={class:"p-4 text-center border-t border-gray-200"},_e={class:"inline-flex items-center w-full space-x-3"},Ce=["title","disabled","onClick"],$e=["title","disabled","onClick"],Ae={key:1,class:"col-span-4 text-center text-blue-500"},Me={__name:"Index",props:{allcustomers:Array,totalCustomers:Array},setup(r){h({});const y=l=>{console.log("Opening edit modal for customer:",l),m.value=l,p.value=!0},x=l=>{m.value=l,o.value=!0},p=w(!1),o=w(!1),m=w(null);return $(document).ready(function(){$("#CustomerTable").DataTable({dom:"Bfrtip",pageLength:10,buttons:[],columnDefs:[{targets:[4],searchable:!1,orderable:!1}],initComplete:function(){let l=$("div.dataTables_filter input");l.attr("placeholder","Search ..."),l.off("keyup"),l.on("keypress",function(t){})},language:{search:""}})}),(l,t)=>(d(),c(_,null,[n(s(j),{title:"Customers"}),n(F),e("div",re,[n(q),e("div",de,[e("div",ie,[e("div",ue,[n(s(V),{href:"/"},{default:i(()=>t[2]||(t[2]=[e("img",{src:"/images/back-arrow.png",class:"w-14 h-14",alt:"Back"},null,-1)])),_:1}),t[3]||(t[3]=e("p",{class:"text-4xl font-bold tracking-wide text-black uppercase"}," Customers ",-1))]),e("div",ce,[e("p",pe,[e("span",me,u(r.totalCustomers.length),1),t[4]||(t[4]=e("span",{class:"text-xl"},"/ Total Customers",-1))])])]),r.allcustomers&&r.allcustomers.length>0?(d(),c("div",fe,[e("table",xe,[t[5]||(t[5]=e("thead",null,[e("tr",{class:"bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-[16px] text-white border-b border-blue-700"},[e("th",{class:"p-4 font-semibold tracking-wide text-left uppercase"}," Name "),e("th",{class:"p-4 font-semibold tracking-wide text-left uppercase"}," Contact "),e("th",{class:"p-4 font-semibold tracking-wide text-left uppercase"}," Email "),e("th",{class:"p-4 font-semibold tracking-wide text-left uppercase"}," Address "),e("th",{class:"p-4 font-semibold tracking-wide text-left uppercase"}," L/Points "),e("th",{class:"p-4 font-semibold tracking-wide text-center uppercase"}," Actions ")])],-1)),e("tbody",ye,[(d(!0),c(_,null,U(r.allcustomers,a=>(d(),c("tr",{key:a.id,class:"transition duration-200 ease-in-out hover:bg-gray-200 hover:shadow-lg"},[e("td",be,u(a.name||"N/A"),1),e("td",ge,u(a.phone||"N/A"),1),e("td",ve,u(a.email||"N/A"),1),e("td",ke,u(a.address||"N/A"),1),e("td",we,u(a.loyalty_points||"N/A"),1),e("td",he,[e("div",_e,[e("button",{class:C(s(f)(["Admin"])?"px-4 py-2 bg-green-500 text-white rounded-lg":"px-4 py-2 bg-green-400 text-white rounded-lg cursor-not-allowed"),title:s(f)(["Admin"])?"":"You do not have permission to edit",disabled:!s(f)(["Admin"]),onClick:()=>{s(f)(["Admin"])&&y(a)}}," Edit ",10,Ce),e("button",{class:C(s(f)(["Admin"])?"px-4 py-2 bg-red-500 text-white rounded-lg ml-2":"px-4 py-2 bg-red-400 text-white rounded-lg cursor-not-allowed ml-2"),title:s(f)(["Admin"])?"":"You do not have permission to delete",disabled:!s(f)(["Admin"]),onClick:()=>{s(f)(["Admin"])&&x(a)}}," Delete ",10,$e)])])]))),128))])])])):(d(),c("div",Ae,t[6]||(t[6]=[e("p",{class:"text-center text-red-500 text-[17px]"}," No customers available ",-1)])))])]),n(z),n(ne,{customer:r.allcustomers,"selected-customer":m.value,open:p.value,"onUpdate:open":t[0]||(t[0]=a=>p.value=a)},null,8,["customer","selected-customer","open"]),n(I,{customer:r.allcustomers,"selected-customer":m.value,open:o.value,"onUpdate:open":t[1]||(t[1]=a=>o.value=a)},null,8,["customer","selected-customer","open"])],64))}};export{Me as default};