(this["webpackJsonpmuon-tokenomics-component"]=this["webpackJsonpmuon-tokenomics-component"]||[]).push([[0],{181:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(17),o=n.n(c),r=n(13),l=n(201),s=n(5),d=function(e){for(var t=(e+="").split("."),n=t[0],a=t.length>1?"."+t[1]:"",i=/(\d+)(\d{3})/;i.test(n);)n=n.replace(i,"$1,$2");return n+a},u=[{destination:"Seed Round",schedule:[18e4,72e4,189e4,306e4,657e4,1008e4,1359e4,18e6],backgroundColor:"#FDB3B3"},{destination:"Private Round 1",schedule:[27e4,135e4,27e5,54e5,135e5,216e5,27e6,27e6],backgroundColor:"#EAE1EE"},{destination:"Private Round 2",schedule:[45e4,18e5,315e4,45e5,9e6,9e6,9e6,9e6],backgroundColor:"#ECD9E2"},{destination:"Private Round 3",schedule:[6e6,6e6,6e6,6e6,6e6,6e6,6e6,6e6],backgroundColor:"#EED2D7"},{destination:"DEUS Community LGE",schedule:[2625e3,525e4,7875e3,105e5,105e5,105e5,105e5,105e5],backgroundColor:"#1DD3BD"},{destination:"Initial Liquidity",schedule:[525e4,105e5,105e5,105e5,105e5,105e5,105e5,105e5],backgroundColor:"#87142F"},{destination:"Ecosystem Incentives",schedule:[15e5,45e5,975e4,15e6,3075e4,465e5,6225e4,123e6],backgroundColor:"#5551FF"},{destination:"Team",schedule:[0,0,0,0,0,0,54e5,27e6],backgroundColor:"#4A398F"},{destination:"Project Development Fund",schedule:[33e4,33e4,33e4,33e4,33e4,33e4,693e4,33e6],backgroundColor:"#8535A0"}],b=[{value:0,text:h(0),label:"Launch"},{value:1,text:h(1),label:"1M"},{value:2,text:h(2),label:"2M"},{value:3,text:h(3),label:"3M"},{value:4,text:h(4),label:"6M"},{value:5,text:h(5),label:"9M"},{value:6,text:h(6),label:"1Y"}];function h(e){return d(u.map((function(t){return t.schedule[e]})).reduce((function(e,t){return e+t}),0))}n(79);var j=n(2),p=Object(s.a)({root:{color:"gray",margin:"7px"},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus, &:hover":{boxShadow:"0px 0px 0px 8px rgba(84, 199, 97, 0.16)"},"&$active":{boxShadow:"0px 0px 0px 12px rgba(84, 199, 97, 0.16)"}},active:{},track:{color:"#5551FF50",height:4,borderRadius:4},rail:{color:"#5551FF30",height:8,borderRadius:4}})(l.a);function m(e){var t=e.onSliderChange;return Object(j.jsx)("div",{className:"slider__container",children:Object(j.jsx)("div",{className:"slider__slider",children:Object(j.jsx)(p,{defaultValue:0,onChange:function(e,n){return t(n)},valueLabelDisplay:"off",step:1,marks:b,min:0,max:b.length-1})})})}var v=n(35);var x={legend:{display:!1},maintainAspectRatio:!1,tooltips:{enabled:!1},scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Token distribution over time"},stacked:!0}]},responsive:!0};function g(){return Object(j.jsx)("div",{className:"lines__container",children:Object(j.jsx)(v.Line,{data:{labels:b.map((function(e){return e.label})),datasets:u.map((function(e,t){return{label:e.destination,data:e.schedule,fill:!0,backgroundColor:e.backgroundColor,tension:0}}))},options:x,height:350,width:650})})}var f=n(67),O=n(68),k=n(200),_=n(202);n(181);var y=Object(s.a)({switchBase:{color:"#5551FF","&$checked":{color:"#5551FF"},"&$checked + $track":{backgroundColor:"#5551FF"}},checked:{},track:{}})(k.a);function C(e){var t=e.data,n=Object(a.useState)("percentages"),i=Object(r.a)(n,2),c=(i[0],i[1],Object(a.useState)("Show numbers")),o=Object(r.a)(c,2),l=o[0],s=o[1],u=Object(a.useState)(!0),b=Object(r.a)(u,2),h=b[0],p=b[1],m=Object(a.useState)({display:window.innerWidth>500,position:"chartArea",align:"center",title:!0}),x=Object(r.a)(m,2),g=x[0],k=x[1];Object(a.useEffect)((function(){var e=function(e,t){var n,a=arguments,i=this;return function(c){clearTimeout(n),n=setTimeout((function(t){n=null,e.apply(i,a)}),t)}}((function(){w(window.innerWidth)}),250);return window.addEventListener("resize",e),function(t){window.removeEventListener("resize",e)}}));var C=new(function(){function e(){Object(f.a)(this,e),this.labelMethod="percentages"}return Object(O.a)(e,[{key:"updateLabelMethod",value:function(e){return this.labelMethod=e}},{key:"getOptions",value:function(){var e=this;return{maintainAspectRatio:!0,animation:{duration:0},layout:{padding:{right:!0===g.display?-200:0,top:!0===g.display?0:10}},showAllTooltips:!0,tooltips:{callbacks:{label:function(t,n){var a=n.labels[t.index],i=n.datasets[t.datasetIndex].data[t.index];return"percentages"===e.labelMethod?function(e,t,n){var a=0;n.datasets[0].data.map((function(e){a+=e}));var i=(100*t/a).toFixed(1)+"%";return"".concat(e," - ").concat(i)}(a,i,n):function(e,t){return"".concat(e," - ").concat(d(t))}(a,i)}}}}}}]),e}()),w=function(e){k(e<500?{display:!1,position:"chartArea",align:"center",title:!0}:{display:!0,position:"chartArea",align:"center",title:!0})};return Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)("div",{className:"pie__toggle",children:Object(j.jsx)(_.a,{control:Object(j.jsx)(y,{size:"small",checked:h,onChange:function(e){e.target.checked?(C.updateLabelMethod("percentages"),s("Show numbers"),p(!0)):(C.updateLabelMethod("numbers"),s("Show percentages"),p(!1))}}),label:l})}),Object(j.jsx)(v.Pie,{data:t,options:C.getOptions(),legend:g,redraw:!0})]})}n(182);function w(e){var t=Object.assign({},e);return Object(j.jsx)("div",{className:"main__box",children:t.children})}n(183);function S(e){return{labels:u.map((function(e){return e.destination})),datasets:[{label:b[e].label,data:u.map((function(t){return t.schedule[e]})),backgroundColor:u.map((function(e){return e.backgroundColor}))}]}}function F(){var e=Object(a.useState)(S(0)),t=Object(r.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(b[0].label),o=Object(r.a)(c,2),l=o[0],s=o[1],d=Object(a.useState)(b[0].text),u=Object(r.a)(d,2),h=u[0],p=u[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"main__title",children:"Token Release Schedule"}),Object(j.jsxs)("div",{className:"main__charts row",children:[Object(j.jsx)("div",{className:"main__charts-pie col-lg-6 col-12",children:Object(j.jsx)(C,{data:n})}),Object(j.jsx)("div",{className:"main__charts-lines col-lg-6 col-12",children:Object(j.jsx)(g,{})})]}),Object(j.jsx)("div",{className:"main__slider",children:Object(j.jsx)(m,{onSliderChange:function(e){s(b[e].label),p(b[e].text),i(S(e))}})}),Object(j.jsx)("div",{className:"main__supply label",children:"Slide to see the Token Distribution at any given time"}),Object(j.jsx)("div",{className:"main__supply",children:Object(j.jsxs)(w,{children:[Object(j.jsxs)("div",{className:"main__supply-upper",children:[l," - Circulating Supply"]}),Object(j.jsx)("div",{className:"main__supply-under",children:h})]})})]})}var N=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(F,{})})};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))},79:function(e,t,n){}},[[184,1,2]]]);
//# sourceMappingURL=main.d4c02f03.chunk.js.map