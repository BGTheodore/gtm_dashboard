(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[14],{704:function(e,t,o){"use strict";var r=o(44),a=o(161),n=(o(1),o(678)),s=o(689),c=o(17),l=function(e){var t=e.borderColor,o=e.backgroundColor,l=e.pointHoverBackgroundColor,i=e.dataPoints,d=e.label,b=e.pointed,j=Object(a.a)(e,["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"]),h=l||("transparent"!==o?o:t),p=[{data:i,borderColor:Object(n.getColor)(t),backgroundColor:Object(n.getColor)(o),pointBackgroundColor:Object(n.getColor)(h),pointHoverBackgroundColor:Object(n.getColor)(h),label:d}],x={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,i)-5,max:Math.max.apply(Math,i)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},O={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},m=function(){var e=b?x:O;return Object.assign({},e,{maintainAspectRatio:!1,legend:{display:!1}})}(),g=Object(n.deepObjectsMerge)(p,j.datasets||{}),u=Object(n.deepObjectsMerge)(m,j.options||{});return Object(c.jsx)(s.b,Object(r.a)(Object(r.a)({},j),{},{datasets:g,options:u,labels:d}))};l.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=l},880:function(e,t,o){"use strict";o.r(t);o(1);var r=o(653),a=o(655),n=o(704),s=o(44),c=o(161),l=o(678),i=o(689),d=o(17),b=function(e){var t=e.backgroundColor,o=e.pointHoverBackgroundColor,r=e.dataPoints,a=e.label,n=(e.pointed,Object(c.a)(e,["backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"])),b=[{data:r,backgroundColor:Object(l.getColor)(t),pointHoverBackgroundColor:Object(l.getColor)(o),label:a,barPercentage:.5,categoryPercentage:1}],j={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}};return Object(d.jsx)(i.a,Object(s.a)(Object(s.a)({},n),{},{datasets:b,options:j,labels:a}))};b.defaultProps={backgroundColor:"rgba(0,0,0,.2)",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"};var j=b;t.default=function(){return Object(d.jsxs)(r.O,{children:[Object(d.jsx)(r.n,{sm:"6",lg:"3",children:Object(d.jsx)(r.bb,{color:"gradient-primary",header:"9.823",text:"Members online",footerSlot:Object(d.jsx)(n.a,{pointed:!0,className:"c-chart-wrapper mt-3 mx-3",style:{height:"70px"},dataPoints:[65,59,84,84,51,55,40],pointHoverBackgroundColor:"primary",label:"Members",labels:"months"}),children:Object(d.jsxs)(r.s,{children:[Object(d.jsx)(r.v,{color:"transparent",children:Object(d.jsx)(a.a,{name:"cil-settings"})}),Object(d.jsxs)(r.u,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(r.t,{children:"Action"}),Object(d.jsx)(r.t,{children:"Another action"}),Object(d.jsx)(r.t,{children:"Something else here..."}),Object(d.jsx)(r.t,{disabled:!0,children:"Disabled action"})]})]})})}),Object(d.jsx)(r.n,{sm:"6",lg:"3",children:Object(d.jsx)(r.bb,{color:"gradient-info",header:"9.823",text:"Members online",footerSlot:Object(d.jsx)(n.a,{pointed:!0,className:"mt-3 mx-3",style:{height:"70px"},dataPoints:[1,18,9,17,34,22,11],pointHoverBackgroundColor:"info",options:{elements:{line:{tension:1e-5}}},label:"Members",labels:"months"}),children:Object(d.jsxs)(r.s,{children:[Object(d.jsx)(r.v,{caret:!1,color:"transparent",children:Object(d.jsx)(a.a,{name:"cil-location-pin"})}),Object(d.jsxs)(r.u,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(r.t,{children:"Action"}),Object(d.jsx)(r.t,{children:"Another action"}),Object(d.jsx)(r.t,{children:"Something else here..."}),Object(d.jsx)(r.t,{disabled:!0,children:"Disabled action"})]})]})})}),Object(d.jsx)(r.n,{sm:"6",lg:"3",children:Object(d.jsx)(r.bb,{color:"gradient-warning",header:"9.823",text:"Members online",footerSlot:Object(d.jsx)(n.a,{className:"mt-3",style:{height:"70px"},backgroundColor:"rgba(255,255,255,.2)",dataPoints:[78,81,80,45,34,12,40],options:{elements:{line:{borderWidth:2.5}}},pointHoverBackgroundColor:"warning",label:"Members",labels:"months"}),children:Object(d.jsxs)(r.s,{children:[Object(d.jsx)(r.v,{color:"transparent",children:Object(d.jsx)(a.a,{name:"cil-settings"})}),Object(d.jsxs)(r.u,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(r.t,{children:"Action"}),Object(d.jsx)(r.t,{children:"Another action"}),Object(d.jsx)(r.t,{children:"Something else here..."}),Object(d.jsx)(r.t,{disabled:!0,children:"Disabled action"})]})]})})}),Object(d.jsx)(r.n,{sm:"6",lg:"3",children:Object(d.jsx)(r.bb,{color:"gradient-danger",header:"9.823",text:"Members online",footerSlot:Object(d.jsx)(j,{className:"mt-3 mx-3",style:{height:"70px"},backgroundColor:"rgb(250, 152, 152)",label:"Members",labels:"months"}),children:Object(d.jsxs)(r.s,{children:[Object(d.jsx)(r.v,{caret:!0,className:"text-white",color:"transparent",children:Object(d.jsx)(a.a,{name:"cil-settings"})}),Object(d.jsxs)(r.u,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(r.t,{children:"Action"}),Object(d.jsx)(r.t,{children:"Another action"}),Object(d.jsx)(r.t,{children:"Something else here..."}),Object(d.jsx)(r.t,{disabled:!0,children:"Disabled action"})]})]})})})]})}}}]);
//# sourceMappingURL=14.741abed7.chunk.js.map