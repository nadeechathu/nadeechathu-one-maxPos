import{T as k,o as d,c as C,w as n,b as r,u as a,a as o,g as q,i as w,m as g,q as N,e as c,t as y,f as v,s as V,h,F as A,l as z,x as M}from"./app-CKJ_Ve5M.js";import{h as f,G as S,V as B,Y as $,S as _}from"./transition-Bd2hPjeG.js";const j={class:"fixed inset-0 z-10 flex items-center justify-center"},D={class:"mt-6 space-y-4 text-left"},E={key:0,class:"mt-4 text-red-500"},P=["value"],T={key:0,class:"mt-4 text-red-500"},U={class:"mt-6 space-x-4"},R={__name:"CategoryCreateModel",props:{open:{type:Boolean,required:!0},categories:{type:Array,required:!0}},emits:["update:open"],setup(l,{emit:x}){const p=()=>{new Audio("/sounds/click-sound.mp3").play()},m=x,s=k({name:"",parent_id:""}),b=()=>{s.post("/categories",{onSuccess:()=>{s.reset(),m("update:open",!1)}})};return(u,e)=>(d(),C(a(_),{as:"template",show:l.open},{default:n(()=>[r(a($),{class:"relative z-10",onClose:e[4]||(e[4]=t=>u.$emit("update:open",!1))},{default:n(()=>[r(a(f),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>e[5]||(e[5]=[o("div",{class:"fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"},null,-1)])),_:1}),o("div",j,[r(a(f),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:n(()=>[r(a(S),{class:"bg-black border-4 border-blue-600 rounded-[20px] shadow-xl max-w-md w-full p-6 text-center"},{default:n(()=>[r(a(B),{class:"text-xl font-bold text-white"},{default:n(()=>e[6]||(e[6]=[q("Add Category")])),_:1}),o("form",{onSubmit:w(b,["prevent"])},[o("div",D,[o("div",null,[e[7]||(e[7]=o("label",{class:"block text-sm font-medium text-gray-300"},"Category Name:",-1)),g(o("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>a(s).name=t),type:"text",id:"name",required:"",class:"w-full px-4 py-2 mt-2 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-600"},null,512),[[N,a(s).name]]),a(s).errors.name?(d(),c("span",E,y(a(s).errors.name),1)):v("",!0)]),o("div",null,[e[9]||(e[9]=o("label",{class:"block text-sm font-medium text-gray-300"},"Parent Category:",-1)),g(o("select",{"onUpdate:modelValue":e[1]||(e[1]=t=>a(s).parent_id=t),id:"parent_id",class:"w-full px-4 py-2 mt-2 text-black bg-white bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-blue-600"},[e[8]||(e[8]=o("option",{value:""},"No Parent",-1)),(d(!0),c(A,null,h(l.categories,t=>(d(),c("option",{key:t.id,value:t.id},y(t.hierarchy_string?t.hierarchy_string+" ----> "+t.name:t.name),9,P))),128))],512),[[V,a(s).parent_id]]),a(s).errors.parent_id?(d(),c("span",T,y(a(s).errors.parent_id),1)):v("",!0)])]),o("div",U,[o("button",{onClick:e[2]||(e[2]=()=>{p()}),class:"px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700",type:"submit"}," Save "),o("button",{onClick:e[3]||(e[3]=()=>{p(),m("update:open",!1)}),class:"px-4 py-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400",type:"button"}," Cancel ")])],32)]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"]))}},F={class:"fixed inset-0 z-10 flex items-center justify-center"},G={class:"mt-6 space-y-4 text-left"},O={key:0,class:"mt-4 text-red-500"},Y=["value"],I={key:0,class:"mt-4 text-red-500"},L={class:"mt-6 space-x-4"},W={__name:"CategoryEditModel",props:{open:{type:Boolean,required:!0},categories:{type:Array,required:!0},selectedCategory:{type:Object,default:null}},emits:["update:open"],setup(l,{emit:x}){const p=()=>{new Audio("/sounds/click-sound.mp3").play()},m=x,s=k({name:"",parent_id:""}),b=z(()=>l.categories.filter(e=>{var t;return e.id!==((t=l.selectedCategory)==null?void 0:t.id)}));M(()=>l.selectedCategory,e=>{var t;e&&(s.name=e.name||"",s.parent_id=((t=e.parent)==null?void 0:t.id)||"")},{immediate:!0});const u=()=>{s.put(`/categories/${l.selectedCategory.id}`,{onSuccess:()=>{s.reset(),m("update:open",!1)}})};return(e,t)=>(d(),C(a(_),{as:"template",show:l.open},{default:n(()=>[r(a($),{class:"relative z-10",onClose:t[4]||(t[4]=i=>e.$emit("update:open",!1))},{default:n(()=>[r(a(f),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>t[5]||(t[5]=[o("div",{class:"fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"},null,-1)])),_:1}),o("div",F,[r(a(f),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:n(()=>[r(a(S),{class:"bg-black border-4 border-blue-600 rounded-[20px] shadow-xl max-w-md w-full p-6 text-center"},{default:n(()=>[r(a(B),{class:"text-xl font-bold text-white"},{default:n(()=>t[6]||(t[6]=[q(" Edit Category ")])),_:1}),o("form",{onSubmit:w(u,["prevent"])},[o("div",G,[o("div",null,[t[7]||(t[7]=o("label",{class:"block text-sm font-medium text-gray-300"}," Category Name: ",-1)),g(o("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>a(s).name=i),type:"text",id:"name",required:"",class:"w-full px-4 py-2 mt-2 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-600"},null,512),[[N,a(s).name]]),a(s).errors.name?(d(),c("span",O,y(a(s).errors.name),1)):v("",!0)]),o("div",null,[t[9]||(t[9]=o("label",{class:"block text-sm font-medium text-gray-300"}," Parent Category: ",-1)),g(o("select",{"onUpdate:modelValue":t[1]||(t[1]=i=>a(s).parent_id=i),id:"parent_id",class:"w-full px-4 py-2 mt-2 text-black bg-white rounded-md focus:outline-none focus:ring focus:ring-blue-600"},[t[8]||(t[8]=o("option",{value:""},"No Parent",-1)),(d(!0),c(A,null,h(b.value,i=>(d(),c("option",{key:i.id,value:i.id},y(i.hierarchy_string?i.hierarchy_string+" ----> "+i.name:i.name),9,Y))),128))],512),[[V,a(s).parent_id]]),a(s).errors.parent_id?(d(),c("span",I,y(a(s).errors.parent_id),1)):v("",!0)])]),o("div",L,[o("button",{class:"px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700",type:"submit",onClick:t[2]||(t[2]=()=>{p()})}," Save "),o("button",{class:"px-4 py-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400",onClick:t[3]||(t[3]=()=>{p(),m("update:open",!1)}),type:"button"}," Cancel ")])],32)]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"]))}},H={class:"fixed inset-0 z-10 flex items-center justify-center"},J={class:"mt-6 space-x-4"},X={__name:"CategoryDeleteModel",props:{open:{type:Boolean,required:!0},selectedCategory:{type:Object,default:null}},emits:["update:open"],setup(l,{emit:x}){const p=()=>{new Audio("/sounds/click-sound.mp3").play()},m=x,s=k({}),b=()=>{var u;(u=l.selectedCategory)!=null&&u.id&&s.delete(`/categories/${l.selectedCategory.id}`,{onSuccess:()=>{m("update:open",!1)},onError:e=>{console.error("Delete failed:",e)}})};return(u,e)=>(d(),C(a(_),{as:"template",show:l.open},{default:n(()=>[r(a($),{class:"relative z-10",onClose:e[2]||(e[2]=t=>u.$emit("update:open",!1))},{default:n(()=>[r(a(f),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>e[3]||(e[3]=[o("div",{class:"fixed inset-0 transition-opacity bg-opacity-75"},null,-1)])),_:1}),o("div",H,[r(a(f),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:n(()=>[r(a(S),{class:"bg-white border-1 border-gray-600 rounded-[20px] shadow-xl max-w-md w-full p-6 text-center"},{default:n(()=>[e[4]||(e[4]=o("p",{class:"text-[15px] text-center text-gray-700"}," Are you sure you want to delete this category? This action cannot be undone. ",-1)),o("div",J,[o("button",{class:"px-6 py-2 text-[15px] text-gray-700 bg-gray-300 rounded hover:bg-gray-400",onClick:e[0]||(e[0]=()=>{p(),m("update:open",!1)})}," Cancel "),o("button",{class:"px-6 py-2 text-[15px] text-white bg-red-600 rounded hover:bg-red-700",onClick:e[1]||(e[1]=w(()=>{p(),b()},["prevent"]))}," Delete ")])]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"]))}};export{R as _,W as a,X as b};
