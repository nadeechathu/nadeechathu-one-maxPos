import{d,e as c,b as a,u as o,a as e,t as m,w as y,n as b,g as v,F as x,h as _,f as k,o as u,Z as C,k as A}from"./app-CKJ_Ve5M.js";import{_ as N,F as D}from"./Footer-Cuz9hzP5.js";import{_ as M,a as T,b as B}from"./CategoryDeleteModel-BJC6rDZi.js";import{_ as E}from"./Banner-pU-z1LEI.js";import{H as l}from"./Permissions-jwKfH5xy.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./transition-Bd2hPjeG.js";const F={class:"flex flex-col items-center justify-start min-h-screen py-8 space-y-8 bg-gray-100 px-36"},V={class:"w-5/6 py-12 space-y-24"},j={class:"flex items-center justify-between float-end"},H={class:"text-3xl italic font-bold text-black"},O={class:"px-4 py-1 mr-3 text-white bg-black rounded-xl"},U={class:"flex w-full"},Y={class:"flex items-center w-full h-16 space-x-4 rounded-2xl"},I={class:"flex justify-end w-full"},L=["title"],S={key:0,class:"overflow-x-auto"},z={id:"CategoryTable",class:"w-full text-gray-700 bg-white border border-gray-300 rounded-lg shadow-md table-auto"},P={class:"text-[13px] font-normal"},R={class:"p-4 font-bold border-t border-gray-200"},Z={class:"p-4 italic border-t border-gray-200"},q={class:"p-4 text-center border-t border-gray-200"},G={class:"inline-flex items-center w-full space-x-3"},J=["title","disabled","onClick"],K=["title","disabled","onClick"],le={__name:"Index",props:{allcategories:Array,totalCategories:Number},setup(i){const h=r=>{n.value=r,g.value=!0},w=r=>{n.value=r,f.value=!0},p=d(!1),g=d(!1),f=d(!1),n=d(null);return $(document).ready(function(){let r=$("#CategoryTable").DataTable({dom:"Bfrtip",pageLength:10,buttons:[],columnDefs:[{targets:2,searchable:!1,orderable:!1}],initComplete:function(){let t=$("div.dataTables_filter input");t.attr("placeholder","Search ..."),t.on("keypress",function(s){s.which==13&&r.search(this.value).draw()})},language:{search:""}})}),(r,t)=>(u(),c(x,null,[a(o(C),{title:"Categories"}),a(E),e("div",F,[a(N),e("div",V,[e("div",j,[e("p",H,[e("span",O,m(i.totalCategories),1),t[4]||(t[4]=e("span",{class:"text-xl"},"/ Total Categories",-1))])]),e("div",U,[e("div",Y,[a(o(A),{href:"/"},{default:y(()=>t[5]||(t[5]=[e("img",{src:"/images/back-arrow.png",class:"w-14 h-14"},null,-1)])),_:1}),t[6]||(t[6]=e("p",{class:"text-4xl font-bold tracking-wide text-black uppercase"}," Categories ",-1))]),e("div",I,[e("p",{onClick:t[0]||(t[0]=()=>{o(l)(["Admin"])&&(p.value=!0)}),class:b(o(l)(["Admin"])?"px-12 py-4 text-2xl font-bold tracking-wider text-white uppercase bg-blue-600 rounded-xl":"px-12 py-4 text-2xl font-bold tracking-wider text-white uppercase bg-blue-600 cursor-not-allowed rounded-xl"),title:o(l)(["Admin"])?"":"You do not have permission to add more Categories"},t[7]||(t[7]=[e("i",{class:"pr-4 ri-add-circle-fill"},null,-1),v(" Add More Categories ")]),10,L)])]),i.allcategories&&i.allcategories.length>0?(u(),c("div",S,[e("table",z,[t[8]||(t[8]=e("thead",null,[e("tr",{class:"bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-[16px] text-white border-b border-blue-700"},[e("th",{class:"p-4 font-semibold tracking-wide text-left uppercase"}," Name "),e("th",{class:"p-4 font-semibold tracking-wide text-left uppercase"}," Parent Hierarchy "),e("th",{class:"p-4 font-semibold tracking-wide text-center uppercase"}," Actions ")])],-1)),e("tbody",P,[(u(!0),c(x,null,_(i.allcategories,s=>(u(),c("tr",{key:s.id,class:"transition duration-200 ease-in-out hover:bg-gray-200 hover:shadow-lg"},[e("td",R,m(s.name||"N/A"),1),e("td",Z,m(s.hierarchy_string||"N/A"),1),e("td",q,[e("div",G,[e("button",{class:b(o(l)(["Admin"])?"px-4 py-2 bg-green-500 text-white rounded-lg":"px-4 py-2 bg-green-400 text-white rounded-lg cursor-not-allowed"),title:o(l)(["Admin"])?"":"You do not have permission to edit",disabled:!o(l)(["Admin"]),onClick:()=>{o(l)(["Admin"])&&h(s)}}," Edit ",10,J),e("button",{class:b(o(l)(["Admin"])?"px-4 py-2 bg-red-500 text-white rounded-lg ml-2":"px-4 py-2 bg-red-400 text-white rounded-lg cursor-not-allowed ml-2"),title:o(l)(["Admin"])?"":"You do not have permission to delete",disabled:!o(l)(["Admin"]),onClick:()=>{o(l)(["Admin"])&&w(s)}}," Delete ",10,K)])])]))),128))])])])):k("",!0)])]),a(M,{categories:i.allcategories,open:p.value,"onUpdate:open":t[1]||(t[1]=s=>p.value=s)},null,8,["categories","open"]),a(T,{categories:i.allcategories,"selected-category":n.value,open:g.value,"onUpdate:open":t[2]||(t[2]=s=>g.value=s)},null,8,["categories","selected-category","open"]),a(B,{categories:i.allcategories,"selected-category":n.value,open:f.value,"onUpdate:open":t[3]||(t[3]=s=>f.value=s)},null,8,["categories","selected-category","open"]),a(D)],64))}};export{le as default};