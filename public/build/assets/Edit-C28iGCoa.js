import{T as y,e as s,a as r,m as d,q as p,u as o,t as l,f as m,i as b,o as a}from"./app-CKJ_Ve5M.js";const c={key:0},g={key:0},k={__name:"Edit",props:{category:Object},setup(u){const n=u,t=y({name:n.category.name,description:n.category.description}),f=()=>{t.put(`/categories/${n.category.id}`)};return(v,e)=>(a(),s("div",null,[e[5]||(e[5]=r("h1",null,"Edit Category",-1)),r("form",{onSubmit:b(f,["prevent"])},[r("div",null,[e[2]||(e[2]=r("label",{for:"name"},"Name",-1)),d(r("input",{"onUpdate:modelValue":e[0]||(e[0]=i=>o(t).name=i),type:"text",id:"name",required:""},null,512),[[p,o(t).name]]),o(t).errors.name?(a(),s("span",c,l(o(t).errors.name),1)):m("",!0)]),r("div",null,[e[3]||(e[3]=r("label",{for:"description"},"Description",-1)),d(r("textarea",{"onUpdate:modelValue":e[1]||(e[1]=i=>o(t).description=i),id:"description"},null,512),[[p,o(t).description]]),o(t).errors.description?(a(),s("span",g,l(o(t).errors.description),1)):m("",!0)]),e[4]||(e[4]=r("button",{type:"submit"},"Update",-1))],32)]))}};export{k as default};