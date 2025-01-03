import{T as h,o as i,c as A,w as d,b as n,u as s,a as e,g as _,i as N,m as y,q as v,e as u,t as p,f as g,x as D,d as S,n as C,F as I,h as V,Z as E,k as T}from"./app-CKJ_Ve5M.js";import{_ as B,F as z}from"./Footer-Cuz9hzP5.js";import{h as w,G as U,V as M,Y as j,S as q}from"./transition-Bd2hPjeG.js";import{_ as O}from"./Banner-pU-z1LEI.js";import{H as x}from"./Permissions-jwKfH5xy.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const Y={class:"fixed inset-0 z-10 flex items-center justify-center"},F={class:"grid grid-cols-2 gap-6 mt-6 text-left"},G={key:0,class:"mt-4 text-red-500"},H={key:0,class:"mt-4 text-red-500"},L={key:0,class:"mt-4 text-red-500"},P={key:0,class:"mt-4 text-red-500"},R={class:"col-span-2"},Z={key:0,class:"mt-2 text-red-500"},J={class:"mt-6 space-x-4 text-center"},K={__name:"SupplierCreateModel",props:{open:{type:Boolean,required:!0}},emits:["update:open"],setup(r,{emit:k}){const f=()=>{new Audio("/sounds/click-sound.mp3").play()},m=k,l=h({name:"",contact:"",email:"",address:"",image:null}),b=o=>{l.image=o.target.files[0]},c=()=>{l.post("/suppliers",{onSuccess:()=>{l.reset(),m("update:open",!1)}})};return(o,t)=>(i(),A(s(q),{as:"template",show:r.open},{default:d(()=>[n(s(j),{class:"relative z-10",onClose:t[6]||(t[6]=a=>o.$emit("update:open",!1))},{default:d(()=>[n(s(w),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:d(()=>t[7]||(t[7]=[e("div",{class:"fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"},null,-1)])),_:1}),e("div",Y,[n(s(w),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:d(()=>[n(s(U),{class:"bg-black border-4 border-blue-600 rounded-[20px] shadow-xl w-5/6 lg:w-3/6 p-10 text-center"},{default:d(()=>[n(s(M),{class:"text-xl font-bold text-white"},{default:d(()=>t[8]||(t[8]=[_(" Add Supplier ")])),_:1}),e("form",{onSubmit:N(c,["prevent"]),enctype:"multipart/form-data"},[e("div",F,[e("div",null,[t[9]||(t[9]=e("label",{class:"block text-sm font-medium text-gray-300"}," Supplier Name: ",-1)),y(e("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>s(l).name=a),type:"text",id:"name",required:"",class:"w-full px-4 py-2 mt-2 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-600"},null,512),[[v,s(l).name]]),s(l).errors.name?(i(),u("span",G,p(s(l).errors.name),1)):g("",!0)]),e("div",null,[t[10]||(t[10]=e("label",{class:"block text-sm font-medium text-gray-300"}," Contact: ",-1)),y(e("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>s(l).contact=a),type:"text",id:"contact",required:"",oninput:"this.value = this.value.replace(/[^0-9]/g, '');",class:"w-full px-4 py-2 mt-2 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-600"},null,512),[[v,s(l).contact]]),s(l).errors.contact?(i(),u("span",H,p(s(l).errors.contact),1)):g("",!0)]),e("div",null,[t[11]||(t[11]=e("label",{class:"block text-sm font-medium text-gray-300"}," Email: ",-1)),y(e("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>s(l).email=a),type:"email",id:"email",required:"",class:"w-full px-4 py-2 mt-2 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-600"},null,512),[[v,s(l).email]]),s(l).errors.email?(i(),u("span",L,p(s(l).errors.email),1)):g("",!0)]),e("div",null,[t[12]||(t[12]=e("label",{class:"block text-sm font-medium text-gray-300"}," Address: ",-1)),y(e("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>s(l).address=a),type:"text",id:"address",required:"",class:"w-full px-4 py-2 mt-2 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-600"},null,512),[[v,s(l).address]]),s(l).errors.address?(i(),u("span",P,p(s(l).errors.address),1)):g("",!0)]),e("div",R,[t[13]||(t[13]=e("label",{class:"block text-sm font-medium text-gray-300"}," Supplier Image: ",-1)),e("input",{type:"file",id:"image",onChange:b,class:"w-full px-4 py-2 mt-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-blue-600"},null,32),s(l).errors.image?(i(),u("span",Z,p(s(l).errors.image),1)):g("",!0)])]),e("div",J,[e("button",{onClick:t[4]||(t[4]=()=>{f()}),class:"px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700",type:"submit"}," Save "),e("button",{class:"px-4 py-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400",onClick:t[5]||(t[5]=()=>{f(),m("update:open",!1)})}," Cancel ")])],32)]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"]))}},Q={class:"fixed inset-0 z-10 flex items-center justify-center"},W={class:"flex justify-center mt-6 space-x-4"},X={__name:"SupplierDeleteModel",props:{open:{type:Boolean,required:!0},selectedSupplier:{type:Object,default:null}},emits:["update:open"],setup(r,{emit:k}){const f=()=>{new Audio("/sounds/click-sound.mp3").play()},m=k,l=h({}),b=()=>{var c;(c=r.selectedSupplier)!=null&&c.id&&l.delete(`/suppliers/${r.selectedSupplier.id}`,{onSuccess:()=>{m("update:open",!1)},onError:o=>{console.error("Delete failed:",o)}})};return(c,o)=>(i(),A(s(q),{as:"template",show:r.open},{default:d(()=>[n(s(j),{class:"relative z-10",onClose:o[2]||(o[2]=t=>c.$emit("update:open",!1))},{default:d(()=>[n(s(w),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:d(()=>o[3]||(o[3]=[e("div",{class:"fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"},null,-1)])),_:1}),e("div",Q,[n(s(w),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:d(()=>[n(s(U),{class:"bg-white border border-gray-600 rounded-[20px] shadow-xl max-w-md w-full p-6 text-center"},{default:d(()=>[o[4]||(o[4]=e("p",{class:"text-[15px] text-center text-gray-700"}," Are you sure you want to delete this Supplier? This action cannot be undone. ",-1)),e("div",W,[e("button",{class:"px-6 py-2 text-[15px] text-gray-700 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-200",onClick:o[0]||(o[0]=()=>{f(),m("update:open",!1)})}," Cancel "),e("button",{class:"px-6 py-2 text-[15px] text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300",onClick:o[1]||(o[1]=N(()=>{f(),b()},["prevent"]))}," Delete ")])]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"]))}},ee={class:"fixed inset-0 z-10 flex items-center justify-center"},te={class:"grid grid-cols-2 gap-6 mt-6 text-left"},se={key:0,class:"mt-4 text-red-500"},le={key:0,class:"mt-4 text-red-500"},oe={key:0,class:"mt-4 text-red-500"},ae={key:0,class:"mt-4 text-red-500"},ne={class:"w-full"},re={class:"w-full md:w-6/12"},ie={class:"mt-2"},de=["src"],ue={key:1,class:"text-sm text-gray-500"},pe={key:0,class:"mt-2 text-red-500"},ce={class:"mt-6 space-x-4 text-center"},me={__name:"SupplierUpdateModel",props:{open:{type:Boolean,required:!0},selectedSupplier:{type:Object,default:null}},emits:["update:open"],setup(r,{emit:k}){const f=k,m=()=>{new Audio("/sounds/click-sound.mp3").play()},l=h({name:"",contact:"",email:"",address:"",image:null}),b=o=>{l.image=o.target.files[0]};D(()=>r.selectedSupplier,o=>{o?(l.name=o.name||"",l.contact=o.contact||"",l.email=o.email||"",l.address=o.address||"",l.image=null):l.reset()},{immediate:!0});const c=()=>{r.selectedSupplier&&r.selectedSupplier.id?l.post(`/suppliers/${r.selectedSupplier.id}`,{onSuccess:()=>{l.reset(),f("update:open",!1)}}):l.post("/suppliers",{onSuccess:()=>{l.reset(),f("update:open",!1)}})};return(o,t)=>(i(),A(s(q),{as:"template",show:r.open},{default:d(()=>[n(s(j),{class:"relative z-10",onClose:t[6]||(t[6]=a=>o.$emit("update:open",!1))},{default:d(()=>[n(s(w),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:d(()=>t[7]||(t[7]=[e("div",{class:"fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"},null,-1)])),_:1}),e("div",ee,[n(s(w),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:d(()=>[n(s(U),{class:"bg-black border-4 border-blue-600 rounded-[20px] shadow-xl w-5/6 lg:w-3/6 p-10 text-center"},{default:d(()=>[n(s(M),{class:"text-xl font-bold text-white"},{default:d(()=>t[8]||(t[8]=[_(" Edit Supplier ")])),_:1}),e("form",{onSubmit:N(c,["prevent"]),enctype:"multipart/form-data"},[e("div",te,[e("div",null,[t[9]||(t[9]=e("label",{class:"block text-sm font-medium text-gray-300"}," Supplier Name: ",-1)),y(e("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>s(l).name=a),type:"text",id:"name",required:"",class:"w-full px-4 py-2 mt-2 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-600"},null,512),[[v,s(l).name]]),s(l).errors.name?(i(),u("span",se,p(s(l).errors.name),1)):g("",!0)]),e("div",null,[t[10]||(t[10]=e("label",{class:"block text-sm font-medium text-gray-300"}," Contact: ",-1)),y(e("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>s(l).contact=a),type:"text",id:"contact",required:"",oninput:"this.value = this.value.replace(/[^0-9]/g, '');",class:"w-full px-4 py-2 mt-2 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-600"},null,512),[[v,s(l).contact]]),s(l).errors.contact?(i(),u("span",le,p(s(l).errors.contact),1)):g("",!0)]),e("div",null,[t[11]||(t[11]=e("label",{class:"block text-sm font-medium text-gray-300"}," Email: ",-1)),y(e("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>s(l).email=a),type:"email",id:"email",required:"",class:"w-full px-4 py-2 mt-2 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-600"},null,512),[[v,s(l).email]]),s(l).errors.email?(i(),u("span",oe,p(s(l).errors.email),1)):g("",!0)]),e("div",null,[t[12]||(t[12]=e("label",{class:"block text-sm font-medium text-gray-300"}," Address: ",-1)),y(e("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>s(l).address=a),type:"text",id:"address",required:"",class:"w-full px-4 py-2 mt-2 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-600"},null,512),[[v,s(l).address]]),s(l).errors.address?(i(),u("span",ae,p(s(l).errors.address),1)):g("",!0)]),e("div",ne,[t[14]||(t[14]=e("label",{for:"image",class:"block text-sm font-medium text-gray-300"},"Image:",-1)),e("div",re,[t[13]||(t[13]=e("label",{class:"block text-sm font-medium text-white"}," Supplier Image:",-1)),e("div",ie,[r.selectedSupplier.image?(i(),u("img",{key:0,src:`/${r.selectedSupplier.image}`,alt:"Product Image",class:"rounded-lg"},null,8,de)):(i(),u("p",ue," No image available "))])]),e("input",{type:"file",id:"image",onChange:b,class:"w-full px-4 py-2 mt-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-blue-600"},null,32),s(l).errors.image?(i(),u("span",pe,p(s(l).errors.image),1)):g("",!0)])]),e("div",ce,[e("button",{class:"px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700",type:"submit",onClick:t[4]||(t[4]=()=>{m()})}," Save "),e("button",{class:"px-4 py-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400",onClick:t[5]||(t[5]=()=>{m(),f("update:open",!1)})}," Cancel ")])],32)]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"]))}},fe={class:"flex flex-col items-center justify-start min-h-screen py-8 space-y-8 bg-gray-100 px-36"},xe={class:"w-5/6 py-12 space-y-24"},ge={class:"flex items-center justify-between"},be={class:"text-3xl italic font-bold text-black"},ye={class:"px-4 py-1 mr-3 text-white bg-black rounded-xl"},ve={class:"flex w-full"},ke={class:"flex items-center w-full h-16 space-x-4 rounded-2xl"},we={class:"flex justify-end w-full"},Se=["title"],$e={key:0,class:"overflow-x-auto"},he={id:"SupplierTable",class:"w-full text-gray-700 bg-white border border-gray-300 rounded-lg shadow-md table-auto"},Ce={class:"text-[13px] font-normal"},Ae={class:"p-4 font-bold border-t border-gray-200"},_e={class:"p-4 border-t border-gray-200"},Ne={class:"p-4 border-t border-gray-200"},Ue=["src"],je={class:"p-4 border-t border-gray-200"},qe={class:"p-4 border-t border-gray-200"},Ie={class:"p-4 text-center border-t border-gray-200"},Me={class:"inline-flex items-center w-full space-x-3"},De=["title","disabled","onClick"],Ve=["title","disabled","onClick"],Ee={key:1,class:"col-span-4 text-center text-blue-500"},Ge={__name:"Index",props:{allsuppliers:Array,totalSuppliers:Number},setup(r){const k=o=>{console.log("Opening edit modal for supplier:",o),c.value=o,l.value=!0},f=o=>{c.value=o,b.value=!0};h({});const m=S(!1),l=S(!1),b=S(!1),c=S(null);return $(document).ready(function(){$("#SupplierTable").DataTable({dom:"Bfrtip",pageLength:10,buttons:[],columnDefs:[{targets:[1,2,3,5],searchable:!1,orderable:!1}],initComplete:function(){let o=$("div.dataTables_filter input");o.attr("placeholder","Search ..."),o.off("keyup"),o.on("keypress",function(t){})},language:{search:""}})}),(o,t)=>(i(),u(I,null,[n(s(E),{title:"Suppliers"}),n(O),e("div",fe,[n(B),e("div",xe,[e("div",ge,[t[5]||(t[5]=e("div",{class:"flex items-center justify-center space-x-4"},null,-1)),e("p",be,[e("span",ye,p(r.allsuppliers.length),1),t[4]||(t[4]=e("span",{class:"text-xl"},"/ Total Suppliers",-1))])]),e("div",ve,[e("div",ke,[n(s(T),{href:"/"},{default:d(()=>t[6]||(t[6]=[e("img",{src:"/images/back-arrow.png",class:"w-14 h-14"},null,-1)])),_:1}),t[7]||(t[7]=e("p",{class:"text-4xl font-bold tracking-wide text-black uppercase"}," Suppliers ",-1))]),e("div",we,[e("p",{onClick:t[0]||(t[0]=()=>{s(x)(["Admin"])&&(m.value=!0)}),class:C(s(x)(["Admin"])?"px-12 py-4 text-2xl font-bold tracking-wider text-white uppercase bg-blue-600 rounded-xl":"px-12 py-4 text-2xl font-bold tracking-wider text-white uppercase bg-blue-600 cursor-not-allowed rounded-xl"),title:s(x)(["Admin"])?"":"You do not have permission to add more Color"},t[8]||(t[8]=[e("i",{class:"pr-4 ri-add-circle-fill"},null,-1),_(" Add More Suppliers ")]),10,Se)])]),r.allsuppliers&&r.allsuppliers.length>0?(i(),u("div",$e,[e("table",he,[t[9]||(t[9]=e("thead",null,[e("tr",{class:"bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-[16px] text-white border-b border-blue-700"},[e("th",{class:"p-4 font-semibold tracking-wide text-left uppercase"}," Name "),e("th",{class:"p-4 font-semibold tracking-wide text-left uppercase"}," Contact "),e("th",{class:"p-4 font-semibold tracking-wide text-left uppercase"}," Image "),e("th",{class:"p-4 font-semibold tracking-wide text-left uppercase"}," Email "),e("th",{class:"p-4 font-semibold tracking-wide text-left uppercase"}," Address "),e("th",{class:"p-4 font-semibold tracking-wide text-center uppercase"}," Actions ")])],-1)),e("tbody",Ce,[(i(!0),u(I,null,V(r.allsuppliers,a=>(i(),u("tr",{key:a.id,class:"transition duration-200 ease-in-out hover:bg-gray-200 hover:shadow-lg"},[e("td",Ae,p(a.name||"N/A"),1),e("td",_e,p(a.contact||"N/A"),1),e("td",Ne,[e("img",{src:a.image?`/${a.image}`:"/images/placeholder.jpg",alt:"Supplier Image",class:"object-cover rounded-md shadow h-15 w-15"},null,8,Ue)]),e("td",je,p(a.email||"N/A"),1),e("td",qe,p(a.address||"N/A"),1),e("td",Ie,[e("div",Me,[e("button",{class:C(s(x)(["Admin"])?"px-4 py-2 bg-green-500 text-white rounded-lg":"px-4 py-2 bg-green-400 text-white rounded-lg cursor-not-allowed"),title:s(x)(["Admin"])?"":"You do not have permission to edit",disabled:!s(x)(["Admin"]),onClick:()=>{s(x)(["Admin"])&&k(a)}}," Edit ",10,De),e("button",{class:C(s(x)(["Admin"])?"px-4 py-2 bg-red-500 text-white rounded-lg ml-2":"px-4 py-2 bg-red-400 text-white rounded-lg cursor-not-allowed ml-2"),title:s(x)(["Admin"])?"":"You do not have permission to delete",disabled:!s(x)(["Admin"]),onClick:()=>{s(x)(["Admin"])&&f(a)}}," Delete ",10,Ve)])])]))),128))])])])):(i(),u("div",Ee,t[10]||(t[10]=[e("p",{class:"text-center text-red-500 text-[17px]"}," No suppliers available ",-1)])))])]),n(K,{suppliers:r.allsuppliers,open:m.value,"onUpdate:open":t[1]||(t[1]=a=>m.value=a)},null,8,["suppliers","open"]),n(X,{suppliers:r.allsuppliers,"selected-supplier":c.value,open:b.value,"onUpdate:open":t[2]||(t[2]=a=>b.value=a)},null,8,["suppliers","selected-supplier","open"]),n(me,{suppliers:r.allsuppliers,open:l.value,"onUpdate:open":t[3]||(t[3]=a=>l.value=a),"selected-supplier":c.value},null,8,["suppliers","open","selected-supplier"]),n(z)],64))}};export{Ge as default};
