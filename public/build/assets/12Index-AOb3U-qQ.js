import{C as t,p as o,a as r,b as s,B as n,c as l,L as c,d as i}from"./index-CAcoJPTt.js";import{_ as p}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{O as d,Y as _,e as u,b as m,o as f}from"./app-CKJ_Ve5M.js";t.register(o,r,s,n,l,c);const h=d({name:"ChartPage",components:{Bar:i},data(){return{chartData:{labels:["January","February","March","April","May"],datasets:[{label:"Sales",backgroundColor:"#42A5F5",data:[65,59,80,81,56]}]},chartOptions:{responsive:!0,plugins:{title:{display:!0,text:"Monthly Sales Data"},tooltip:{mode:"index",intersect:!1}},scales:{y:{beginAtZero:!0}}}}}}),g={class:"chart-container"};function b(a,y,B,C,v,x){const e=_("Bar");return f(),u("div",g,[m(e,{data:a.chartData,options:a.chartOptions},null,8,["data","options"])])}const A=p(h,[["render",b],["__scopeId","data-v-58f1100a"]]);export{A as default};
