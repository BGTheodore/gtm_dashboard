(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[15],{671:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(44),i=n(654),c=n(161),s=(n(1),n(653)),l=n(667),r=n(17),o=function(e){var t=e.label,n=e.type,o=e.options,u=Object(c.a)(e,["label","type","options"]),m=Object(l.d)(u),d=Object(i.a)(m,2),j=d[0],b=d[1];return Object(r.jsxs)("div",{className:"mb-2",children:[Object(r.jsx)("label",{htmlFor:j.name,children:t}),"textarea"==n?Object(r.jsx)("textarea",Object(a.a)(Object(a.a)({className:"form-control shadow-none ".concat(b.touched&&b.error&&"is-invalid"),placeholder:"Veuillez entrer la description...",rows:"6"},j),u)):"select"==n?Object(r.jsx)(s.P,Object(a.a)(Object(a.a)(Object(a.a)({name:t,className:"form-control shadow-none ".concat(b.touched&&b.error&&"is-invalid")},j),u),{},{children:o.map((function(e,t){return Object(r.jsx)("option",{value:e.id,children:e.nom},t)}))})):Object(r.jsx)("input",Object(a.a)(Object(a.a)({className:"form-control shadow-none ".concat(b.touched&&b.error&&"is-invalid")},j),u)),Object(r.jsx)(l.a,{component:"div",name:j.name,style:{position:"absolute",color:"red",fontSize:".6rem"}})]})}},864:function(e,t,n){"use strict";n.r(t);var a=n(44),i=n(654),c=n(1),s=n.n(c),l=n(667),r=n(671),o=n(688),u=n(653),m=n(17);t.default=function(e){var t=e.match;Object(c.useEffect)((function(){fetch("".concat("http://localhost:8080","/api/type_essais/")).then((function(e){return e.json()})).then((function(e){return k(e)})),fetch("".concat("http://localhost:8080","/api/institutions/")).then((function(e){return e.json()})).then((function(e){return w(e)})),t.params.id&&fetch("".concat("http://localhost:8080","/api/essais/")+t.params.id).then((function(e){return e.json()})).then((function(e){return v(e)}))}),[]);var n=Object(c.useState)({file:null}),d=Object(i.a)(n,2),j=d[0],b=d[1],p=Object(c.useState)(),h=Object(i.a)(p,3),O=h[0],x=void 0===O?{typeEssai:{id:null},institution:{id:null},position:{id:null},fichier:{id:null},motsCles:"",pdf:""}:O,f=h[1],g=(h[2],Object(c.useRef)(x));Object(c.useEffect)((function(){g.current=x}),[x]);Object(c.useRef)(null);var y=Object(c.useState)(null),C=Object(i.a)(y,2),z=C[0],v=C[1],E=Object(c.useState)([]),A=Object(i.a)(E,2),N=A[0],k=A[1],S=Object(c.useState)([]),M=Object(i.a)(S,2),V=M[0],w=M[1],q=s.a.useState({isActive:!1,status:"",message:""}),T=Object(i.a)(q,2),P=T[0],R=T[1],F=o.b({typeEssai:o.c().max(45,"Maximum 45 caract\xe8res").required("Champs obligatoire"),institution:o.c().max(45,"Maximum 45 caract\xe8res").required("Champs obligatoire"),latitude:o.a("Entrer un nombre").max(99999999,"Maximum 255 caract\xe8res").required("Champs obligatoire"),longitude:o.a("Entrer un nombre").max(99999999,"Maximum 255 caract\xe8res").required("Champs obligatoire"),altitude:o.a("Entrer un nombre").max(99999999,"Maximum 255 caract\xe8res").required("Champs obligatoire"),commentaire:o.c().max(255,"Maximum 255 caract\xe8res"),motsCles:o.c().max(255,"Maximum 255 caract\xe8res"),departement:o.c().max(255,"Maximum 255 caract\xe8res").required("Champs obligatoire"),commune:o.c().max(255,"Maximum 255 caract\xe8res").required("Champs obligatoire"),sectionCommunale:o.c().max(255,"Maximum 255 caract\xe8res").required("Champs obligatoire")}),L=function(e){var t=e.currentTarget.files[0];b({file:e.target.files[0]}),function(e,t){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){t(n.result)},n.onerror=function(e){console.log("Error: ",e)}}(t,(function(e){f(Object(a.a)(Object(a.a)({},x),{},{pdf:e.substr(e.indexOf(",")+1)}))}))};return Object(m.jsx)(l.c,{initialValues:z||{typeEssai:"",institution:"",latitude:"",longitude:"",altitude:"",departement:"",commume:"",sectionCommunale:"",commentaire:"",motsCles:"",pdf:""},enableReinitialize:!0,validationSchema:F,onSubmit:function(e){new Promise((function(e,t){console.log("First"),e()})).then((function(){return new Promise((function(t,n){console.log("Second"),f({typeEssai:{id:e.typeEssai},institution:{id:e.institution},position:{latitude:e.latitude,longitude:e.longitude,altitude:e.altitude,departement:e.departement,commune:e.commune,sectionCommunale:e.sectionCommunale},fichier:{id:1,nom:j.file.name,format:j.file.type,capacite:j.file.size},motsCles:e.motsCles,pdf:x.pdf}),f((function(e){return console.log(e),e})),t()}))})).then((function(){return new Promise((function(e,n){console.log("Third");var i={method:t.params.id?"PUT":"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(g.current)};t.params.id?fetch("".concat("http://localhost:8080","/api/essais/")+t.params.id,i).then((function(e){return e.json()})).then((function(e){return R(Object(a.a)(Object(a.a)({},P),{},{isActive:!0,message:"Op\xe9ration r\xe9ussie !"}))})):fetch("".concat("http://localhost:8080","/api/essais"),i).then((function(e){return e.json()})),e()}))})),setTimeout((function(){R(Object(a.a)(Object(a.a)({},P),{},{isActive:!1,message:""}))}),4e3)},children:function(e){return Object(m.jsx)("div",{children:Object(m.jsxs)(l.b,{children:[P.isActive?Object(m.jsx)(u.a,{color:"info",closeButton:!0,children:P.message}):"",Object(m.jsxs)(u.O,{children:[Object(m.jsx)(u.n,{xs:"12",sm:"6",children:Object(m.jsxs)(u.i,{children:[Object(m.jsxs)(u.m,{children:["Informations sur l'essai   ",t.params.id]}),Object(m.jsxs)(u.j,{children:[Object(m.jsxs)(u.z,{children:[Object(m.jsx)(r.a,{label:"Type d'essai*:",name:"typeEssai",type:"select",options:N,placeholder:"Entrer le type d'essai..."}),Object(m.jsx)(u.A,{className:"help-block",children:"Veuillez entrer le type d'essai"})]}),Object(m.jsxs)(u.z,{children:[Object(m.jsx)(r.a,{label:"Institution*:",name:"institution",type:"select",options:V,placeholder:"Entrer l'institution"}),Object(m.jsx)(u.A,{className:"help-block",children:"Veuillez entrer l'institution"})]}),Object(m.jsxs)(u.z,{children:[Object(m.jsx)(r.a,{label:"Latitude*:",name:"latitude",type:"text",placeholder:"Entrer la latitude",autoComplete:"latitude"}),Object(m.jsx)(u.A,{className:"help-block",children:"Veuillez entrer la latitude (ex: 76.23)"})]}),Object(m.jsxs)(u.z,{children:[Object(m.jsx)(r.a,{label:"Longitude*:",name:"longitude",type:"text",placeholder:"Entrer la longitude",autoComplete:"longitude"}),Object(m.jsx)(u.A,{className:"help-block",children:"Veuillez entrer la longitude (ex: -127.89)"})]}),Object(m.jsxs)(u.z,{children:[Object(m.jsx)(r.a,{label:"Altitude*:",name:"altitude",type:"text",placeholder:"Entrer l'altitude",autoComplete:"altitude"}),Object(m.jsx)(u.A,{className:"help-block",children:"Veuillez entrer l'altitude (ex: 45)"})]}),Object(m.jsxs)(u.z,{children:[Object(m.jsx)(r.a,{label:"D\xe9partement*:",name:"departement",type:"select",options:N,placeholder:"Entrer le d\xe9partement de l'essai..."}),Object(m.jsx)(u.A,{className:"help-block",children:"Veuillez entrer le d\xe9partement de l'essai"})]})]})]})}),Object(m.jsx)(u.n,{xs:"12",sm:"6",children:Object(m.jsxs)(u.i,{children:[Object(m.jsxs)(u.m,{children:["Informations sur l'essai   ",t.params.id]}),Object(m.jsxs)(u.j,{children:[Object(m.jsxs)(u.z,{children:[Object(m.jsx)(r.a,{label:"Commune*:",name:"commune",type:"select",options:N,placeholder:"Entrer la commune de l'essai..."}),Object(m.jsx)(u.A,{className:"help-block",children:"Veuillez entrer la commune de l'essai"})]}),Object(m.jsxs)(u.z,{children:[Object(m.jsx)(r.a,{label:"Section communale*:",name:"sectionCommunale",type:"select",options:N,placeholder:"Entrer la section communale de l'essai..."}),Object(m.jsx)(u.A,{className:"help-block",children:"Veuillez entrer la section communale de l'essai"})]}),Object(m.jsxs)(u.z,{children:[Object(m.jsx)(r.a,{label:"Mots cl\xe9s:",name:"motsCles",type:"textarea",placeholder:"Entrer les mots cl\xe9s",autoComplete:"motsCles"}),Object(m.jsx)(u.A,{className:"help-block",children:"Veuillez entrer les mots cl\xe9s"})]}),Object(m.jsxs)(u.z,{children:[Object(m.jsx)(r.a,{label:"Commentaires:",name:"commentaire",type:"textarea",placeholder:"Entrer les commentaires",autoComplete:"commentaire"}),Object(m.jsx)(u.A,{className:"help-block",children:"Veuillez entrer un commentaire"})]}),Object(m.jsx)(u.z,{row:!0,children:Object(m.jsxs)(u.n,{xs:"12",md:"12",children:[Object(m.jsx)("input",{id:"custom-file-input",type:"file",accept:"application/pdf,  application/vnd.ms-excel",onChange:function(e){return L(e)}}),Object(m.jsx)(u.L,{htmlFor:"custom-file-input",variant:"custom-file",children:j.file?j.file.name:"Choisir un fichier..."})]})})]}),Object(m.jsxs)(u.k,{children:[Object(m.jsxs)("button",{className:"btn btn-dark mt-3",type:"submit",children:[t.params.id?"Modifier":"Enregistrer"," "]}),Object(m.jsx)("button",{className:"btn btn-danger mt-3 ml-3",type:"reset",children:"R\xe9initialiser"})]})]})})]})]})})}})}}}]);
//# sourceMappingURL=15.89c787bf.chunk.js.map