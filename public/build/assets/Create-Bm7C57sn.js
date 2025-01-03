import{T as x,c as k,w as v,o as l,a as o,i as _,m as n,s as b,u as s,e as u,h as g,t as d,F as f,f as i,q as a}from"./app-CKJ_Ve5M.js";import{_ as w}from"./AdminLayout-CbSGR3dI.js";const q={class:"min-h-screen p-6 bg-gray-100"},S={class:"max-w-4xl min-h-screen p-6 mx-auto bg-gray-100"},C=["value"],V={key:0,class:"text-sm text-red-500"},z={key:0,class:"text-sm text-red-500"},U=["value"],B={key:0,class:"text-sm text-red-500"},P=["value"],A={key:0,class:"text-sm text-red-500"},F={key:0,class:"text-sm text-red-500"},D={key:0,class:"text-sm text-red-500"},M={key:0,class:"text-sm text-red-500"},N={key:0,class:"text-sm text-red-500"},E={key:0,class:"text-sm text-red-500"},L={__name:"Create",props:{products:Array,categories:Array,colors:Array,sizes:Array},setup(c){const r=x({category_id:null,name:"",size_id:"",color_id:"",cost_price:null,selling_price:null,stock_quantity:null,barcode:"",image:null}),p=m=>{r.image=m.target.files[0]},y=()=>{console.log("Form Data:",r),r.post("/products",{preserveScroll:!0,onSuccess:()=>{console.log("Product created successfully!"),r.reset()},onError:m=>{console.error("Form submission failed:",m)}})};return(m,e)=>(l(),k(w,null,{default:v(()=>[o("div",q,[o("div",S,[e[21]||(e[21]=o("h1",{class:"mb-6 text-2xl font-bold text-gray-800"},"Create Product",-1)),o("form",{onSubmit:_(y,["prevent"]),class:"space-y-6"},[o("div",null,[e[9]||(e[9]=o("label",{for:"category_id",class:"block text-sm font-medium text-gray-700"},"Category",-1)),n(o("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>s(r).category_id=t),id:"category_id",class:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200",required:""},[e[8]||(e[8]=o("option",{value:null,disabled:""},"Select Category",-1)),(l(!0),u(f,null,g(c.categories,t=>(l(),u("option",{key:t.id,value:t.id},d(t.name),9,C))),128))],512),[[b,s(r).category_id]]),s(r).errors.category_id?(l(),u("span",V,d(s(r).errors.category_id),1)):i("",!0)]),o("div",null,[e[10]||(e[10]=o("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"Name",-1)),n(o("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>s(r).name=t),type:"text",id:"name",required:"",class:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"},null,512),[[a,s(r).name]]),s(r).errors.name?(l(),u("span",z,d(s(r).errors.name),1)):i("",!0)]),o("div",null,[e[12]||(e[12]=o("label",{for:"size",class:"block text-sm font-medium text-gray-700"},"Size",-1)),n(o("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>s(r).size_id=t),id:"size",class:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"},[e[11]||(e[11]=o("option",{value:null,disabled:""},"Select Size",-1)),(l(!0),u(f,null,g(c.sizes,t=>(l(),u("option",{key:t.id,value:t.id},d(t.name),9,U))),128))],512),[[b,s(r).size_id]]),s(r).errors.size?(l(),u("span",B,d(s(r).errors.size),1)):i("",!0)]),o("div",null,[e[14]||(e[14]=o("label",{for:"color",class:"block text-sm font-medium text-gray-700"},"Color",-1)),n(o("select",{"onUpdate:modelValue":e[3]||(e[3]=t=>s(r).color_id=t),id:"color",class:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"},[e[13]||(e[13]=o("option",{value:null,disabled:""},"Select Color",-1)),(l(!0),u(f,null,g(c.colors,t=>(l(),u("option",{key:t.id,value:t.id},d(t.name),9,P))),128))],512),[[b,s(r).color_id]]),s(r).errors.color_id?(l(),u("span",A,d(s(r).errors.color_id),1)):i("",!0)]),o("div",null,[e[15]||(e[15]=o("label",{for:"cost_price",class:"block text-sm font-medium text-gray-700"},"Cost Price",-1)),n(o("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>s(r).cost_price=t),type:"number",step:"0.01",id:"cost_price",class:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200",required:""},null,512),[[a,s(r).cost_price]]),s(r).errors.cost_price?(l(),u("span",F,d(s(r).errors.cost_price),1)):i("",!0)]),o("div",null,[e[16]||(e[16]=o("label",{for:"selling_price",class:"block text-sm font-medium text-gray-700"},"Selling Price",-1)),n(o("input",{"onUpdate:modelValue":e[5]||(e[5]=t=>s(r).selling_price=t),type:"number",step:"0.01",id:"selling_price",class:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200",required:""},null,512),[[a,s(r).selling_price]]),s(r).errors.selling_price?(l(),u("span",D,d(s(r).errors.selling_price),1)):i("",!0)]),o("div",null,[e[17]||(e[17]=o("label",{for:"stock_quantity",class:"block text-sm font-medium text-gray-700"},"Stock Quantity",-1)),n(o("input",{"onUpdate:modelValue":e[6]||(e[6]=t=>s(r).stock_quantity=t),type:"number",id:"stock_quantity",class:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200",required:""},null,512),[[a,s(r).stock_quantity]]),s(r).errors.stock_quantity?(l(),u("span",M,d(s(r).errors.stock_quantity),1)):i("",!0)]),o("div",null,[e[18]||(e[18]=o("label",{for:"barcode",class:"block text-sm font-medium text-gray-700"},"Barcode",-1)),n(o("input",{"onUpdate:modelValue":e[7]||(e[7]=t=>s(r).barcode=t),type:"text",id:"barcode",class:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"},null,512),[[a,s(r).barcode]]),s(r).errors.barcode?(l(),u("span",N,d(s(r).errors.barcode),1)):i("",!0)]),o("div",null,[e[19]||(e[19]=o("label",{for:"image",class:"block text-sm font-medium text-gray-700"},"Product Image",-1)),o("input",{type:"file",id:"image",class:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200",onChange:p},null,32),s(r).errors.image?(l(),u("span",E,d(s(r).errors.image),1)):i("",!0)]),e[20]||(e[20]=o("div",null,[o("button",{type:"submit",class:"px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"}," Save ")],-1))],32)])])]),_:1}))}};export{L as default};
