(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[11],{654:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(656);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,i=!1,c=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(a){i=!0,c=a}finally{try{n||null==o.return||o.return()}finally{if(i)throw c}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},656:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(657);function i(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},657:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},660:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(657);var i=r(656);function c(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},882:function(e,t,r){"use strict";r.r(t);var n=r(660),i=r(654),c=r(1),s=r(653),o=(r(655),r(17)),a=function(e){return Object(o.jsx)(s.O,{children:Object(o.jsx)(s.n,{lg:6,children:Object(o.jsxs)(s.i,{children:[Object(o.jsxs)(s.m,{className:"text-muted",children:["Identifiant de l'utilisateur : ",e.user.id]}),Object(o.jsx)(s.j,{children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[" Nom : ",e.user.lastName]}),Object(o.jsxs)("li",{children:[" Pr\xe9nom : ",e.user.firstName]}),Object(o.jsxs)("li",{children:[" Email : ",e.user.email]}),Object(o.jsxs)("li",{children:[" Droit d'acc\xe8s : ",e.user.role]}),Object(o.jsxs)("li",{children:[" Cr\xe9\xe9 le : ",e.user.createdAt]}),Object(o.jsxs)("li",{children:[" Derni\xe8re modification : ",e.user.updatedAt]})]})})]})})})};t.default=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),r=t[0],l=t[1],u=function(e){switch(e){case 0:return"success";case 1:return"primary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}},d=function(e){switch(e){case 1:return"Admin";case 0:return"Super Admin";default:return"Admin"}},f=function(e){switch(e){case 0:return"Homme";case 1:return"Femme";default:return"Autre"}},j=Object(c.useState)([]),b=Object(i.a)(j,2),h=b[0],m=b[1];return Object(c.useEffect)((function(){fetch("http://localhost:8080/api/users/").then((function(e){return e.json()})).then((function(e){return m(e)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("a",{href:"/#/users/create",children:Object(o.jsx)(s.f,{variant:"outline",color:"success",children:"Ajouter"})}),Object(o.jsx)(s.r,{items:h,fields:[{key:"id",label:"ID",_style:{width:"2%"}},{key:"firstName",label:"Pr\xe9nom",_style:{width:"20%"}},{key:"lastName",label:"Nom",_style:{width:"20%"}},{key:"email",label:"Email",_style:{width:"20%"}},{key:"sexe",label:"Sexe",_style:{width:"10%"}},{key:"role",_style:{width:"10%"}},{key:"createdAt",label:"Date de cr\xe9ation",_style:{width:"10%"}},{key:"show_details",label:"",_style:{width:"1%"},sorter:!1,filter:!1}],columnFilter:!0,tableFilter:!0,footer:!0,itemsPerPageSelect:!0,itemsPerPage:5,hover:!0,sorter:!0,pagination:!0,scopedSlots:{role:function(e){return Object(o.jsx)("td",{children:Object(o.jsx)(s.b,{color:u(e.role),children:d(e.role)})})},sexe:function(e){return Object(o.jsx)("td",{children:Object(o.jsx)(s.b,{color:"secondary",children:f(e.sexe)})})},show_details:function(e,t){return Object(o.jsx)("td",{className:"py-2",children:Object(o.jsx)(s.f,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){!function(e,t){var i=r.indexOf(e),c=r.slice();-1!==i?c.splice(i,1):c=[].concat(Object(n.a)(r),[e]),l(c)}(t,e.id)},children:r.includes(t)?"Cacher":"Voir"})})},details:function(e,t){return Object(o.jsxs)(s.o,{show:r.includes(t),children:[Object(o.jsx)(a,{user:e}),Object(o.jsxs)(s.j,{children:[Object(o.jsx)("a",{href:"/#/users/edit/".concat(e.id),children:Object(o.jsx)(s.f,{size:"sm",color:"info",children:"Modifier"})}),Object(o.jsx)(s.f,{size:"sm",color:"danger",className:"ml-1",onClick:function(){!function(e){if(window.confirm("Confirmer la suppression")){fetch("http://localhost:8080/api/users/"+e,{method:"DELETE"}).then((function(e){return console.log(e)}));var t=h.filter((function(t){return t.id!==e}));m(t)}}(e.id)},children:"Suprimmer"})]})]})}}})]})}}}]);
//# sourceMappingURL=11.e56303f0.chunk.js.map