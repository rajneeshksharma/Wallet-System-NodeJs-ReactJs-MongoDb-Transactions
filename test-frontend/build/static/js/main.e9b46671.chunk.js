(this["webpackJsonptest-frontend"]=this["webpackJsonptest-frontend"]||[]).push([[0],{127:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(22),s=a.n(r),l=(a(76),a(25)),i=a(10),o=a(140),j=a(139),d=a(143),b=a(6),u=a.n(b),h=a(2),O=a(11),x=a(12),p=a(144),m=a(67),v=a(134),f=a(21),g=a(23),I=a.n(g),y=a(35),S=a.n(y),w=a(65),C=a.n(w).a.create({baseURL:"".concat(window.location.protocol,"//").concat(window.location.host,"/api/v1")}),N=a(1);var T=function(){var e=Object(i.f)(),t=Object(c.useState)([]),a=Object(x.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)({page:1,limit:5,walletID:null}),l=Object(x.a)(s,2),o=l[0],j=l[1],d=Object(c.useState)([]),b=Object(x.a)(d,2),g=b[0],y=b[1],w=Object(c.useState)(1),T=Object(x.a)(w,2),k=T[0],D=T[1],E=Object(c.useState)(0),L=Object(x.a)(E,2),A=L[0],W=L[1];function F(e){return B.apply(this,arguments)}function B(){return(B=Object(O.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("/transactions?walletId=".concat(t.walletID,"&page=").concat(t.page,"&limit=").concat(t.limit,"&sortBy=","createdAt:desc"));case 3:a=e.sent,r(a.data.results),W(a.data.totalResults),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f.b.error("Internal Server Error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}Object(c.useEffect)((function(){var t=I.a.getWalletId();t?(j(Object(h.a)(Object(h.a)({},o),{},{walletID:t})),F(Object(h.a)(Object(h.a)({},o),{},{walletID:t}))):e.push("/setup")}),[]);var R=Object(c.useCallback)((function(e){D(e),j(Object(h.a)(Object(h.a)({},o),{},{page:e})),F(Object(h.a)(Object(h.a)({},o),{},{page:e}))}),[o]);return Object(c.useEffect)((function(){for(var e=[],t=function(t){e.push(Object(N.jsx)(p.a.Item,{active:t===k,onClick:function(){return R(t)},children:t},t))},a=1;a<=Math.round(A/5);a++)t(a);y(e)}),[A,k,R]),Object(N.jsxs)("div",{className:"center",children:[Object(N.jsx)("h3",{className:"text-center mb-5",children:"Wallet Transactions"}),Object(N.jsxs)("div",{children:["  ",Object(N.jsx)(m.a,{onClick:function(){e.push("/add")},children:"Add New Transaction"})," "]}),Array.isArray(n)&&n.length?Object(N.jsxs)("div",{children:[Object(N.jsxs)(v.a,{responsive:!0,children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Transaction ID"}),Object(N.jsx)("th",{children:"Amount"}),Object(N.jsx)("th",{children:"Type"}),Object(N.jsx)("th",{children:"Balance"}),Object(N.jsx)("th",{children:"Description"}),Object(N.jsx)("th",{children:"Created Date"})]})}),Object(N.jsx)("tbody",{children:n&&n.length&&n.map((function(e){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:e._id}),Object(N.jsx)("td",{children:S.a.currencyFormat(e.amount)}),Object(N.jsx)("td",{children:"CREDIT"===e.type?Object(N.jsx)("span",{className:"text-success",children:e.type}):Object(N.jsx)("span",{className:"text-danger",children:e.type})}),Object(N.jsx)("td",{children:S.a.currencyFormat(e.balance)}),Object(N.jsx)("td",{children:e.description?e.description:"-"}),Object(N.jsx)("td",{children:new Date(e.date).toLocaleString()})]},e._id)}))})]}),Object(N.jsx)("div",{className:"float-right",children:Object(N.jsx)(p.a,{children:g})})]}):Object(N.jsx)("div",{children:" No Transaction Found."})]})},k=a(142),D=a(135),E=a(68),L=a(136),A=a(69);var W=function(){var e=Object(i.f)(),t=Object(c.useState)(null),a=Object(x.a)(t,2),n=a[0],r=a[1];return Object(c.useEffect)((function(){var t=I.a.getWalletId();function a(){return(a=Object(O.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("/wallet/".concat(t));case 3:a=e.sent,r(a.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),f.b.error("Internal Server Error"),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}t?function(){a.apply(this,arguments)}():e.push("/setup")}),[e]),Object(N.jsxs)("div",{className:"center",children:[Object(N.jsx)("h3",{className:"text-center mb-5",children:"Wallet Details"}),n&&Object(N.jsxs)(k.a,{body:!0,children:[Object(N.jsxs)(D.a,{sm:9,md:9,children:[Object(N.jsx)(E.a,{children:Object(N.jsxs)(k.a.Title,{children:["Wallet ID: ",Object(N.jsx)("span",{children:n._id})]})}),Object(N.jsx)(E.a,{sm:3,md:3,children:Object(N.jsx)(m.a,{onClick:function(){e.push("/add")},children:"Add New Transaction"})})]}),Object(N.jsx)("hr",{}),Object(N.jsx)(k.a.Text,{children:Object(N.jsxs)(L.a,{className:"list-group-flush",children:[Object(N.jsxs)(A.a,{children:[Object(N.jsx)("b",{children:"Username"}),": ",n.name]}),Object(N.jsxs)(A.a,{children:[Object(N.jsx)("b",{children:"Current Balance"}),": ",S.a.currencyFormat(n.balance)]}),Object(N.jsxs)(A.a,{children:[Object(N.jsx)("b",{children:"Created Date"}),": ",new Date(n.date).toLocaleString()]})]})})]})]})},F=(a(127),a(128),a(141)),B=a(43);var R=function(){var e=Object(i.f)(),t=Object(B.a)(),a=t.register,c=t.handleSubmit,n=t.formState.errors,r=function(){var t=Object(O.a)(u.a.mark((function t(a){var c,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.post("/setup",{name:a.username,balance:a.balance?a.balance:0});case 3:(null===(n=t.sent)||void 0===n||null===(c=n.data)||void 0===c?void 0:c._id)?(I.a.setWalletId(n.data._id),e.push("/")):f.b.error("Internal Server Error"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),f.b.error("Internal Server Error");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"center",children:[Object(N.jsx)("h3",{className:"text-center",children:"Setup New Wallet"}),Object(N.jsxs)(F.a,{children:[Object(N.jsxs)(F.a.Group,{className:"mb-3",controlId:"username",children:[Object(N.jsx)(F.a.Label,{children:"Username"}),Object(N.jsx)(F.a.Control,Object(h.a)({size:"lg",type:"text",placeholder:"Enter username",name:"username"},a("username",{required:!0,maxLength:20,minLength:3}))),(null===n||void 0===n?void 0:n.username)&&Object(N.jsx)(F.a.Text,{className:"text-danger",children:"* Username is required and need to be 3-20 characters long."})]}),Object(N.jsxs)(F.a.Group,{className:"mb-3",controlId:"balance",children:[Object(N.jsx)(F.a.Label,{children:"Initial Balance"}),Object(N.jsx)(F.a.Control,Object(h.a)({type:"number",size:"lg",name:"balance",placeholder:"Enter initial balance"},a("balance")))," "]}),Object(N.jsx)(m.a,{variant:"primary",size:"lg",onClick:c(r),type:"submit",children:"Submit"})]})]})},_=a(137),z=a(138);var G=function(){var e=Object(i.f)(),t=Object(c.useState)("CREDIT"),a=Object(x.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(null),l=Object(x.a)(s,2),o=l[0],j=l[1],d=Object(B.a)(),b=d.register,p=d.handleSubmit,v=d.formState.errors;Object(c.useEffect)((function(){var t=I.a.getWalletId();t?j(t):e.push("/setup")}),[e]);var g=function(){var t=Object(O.a)(u.a.mark((function t(a){var c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c={amount:a.amount,type:n},a.description&&(c.description=a.description),t.next=5,C.post("/transact/".concat(o),c);case 5:r=t.sent,console.log("FORM DATA+++++==",{res:r.data}),r.data._id&&(I.a.setWalletId(r.data._id),e.push("/")),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),f.b.error("Internal Server Error",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"center",children:[Object(N.jsx)("h3",{className:"text-center",children:"Add New Debit/Credit Transaction "}),Object(N.jsxs)("p",{children:["Wallet ID : ",o]}),Object(N.jsxs)(F.a,{children:[Object(N.jsxs)(F.a.Group,{className:"mb-3",controlId:"amount",children:[Object(N.jsx)(F.a.Label,{children:"Amount"}),Object(N.jsx)(F.a.Control,Object(h.a)({size:"lg",type:"number",placeholder:"Enter amount",name:"amount"},b("amount",{required:!0,min:1}))),(null===v||void 0===v?void 0:v.amount)&&Object(N.jsx)(F.a.Text,{className:"text-danger",children:"* Amount is required and need to be more than 0."})]}),Object(N.jsxs)(F.a.Group,{className:"mb-3",controlId:"description",children:[Object(N.jsx)(F.a.Label,{children:"Description"}),Object(N.jsx)(F.a.Control,Object(h.a)({type:"text",size:"lg",name:"description",placeholder:"Enter description"},b("description")))," "]}),Object(N.jsx)(F.a.Group,{className:"mb-3",controlId:"type",children:Object(N.jsx)(_.a,{children:[{name:"Debit",value:"DEBIT"},{name:"Credit",value:"CREDIT"}].map((function(e,t){return Object(N.jsx)(z.a,{id:"radio-".concat(t),type:"radio",variant:t%2?"outline-success":"outline-danger",name:"radio",value:e.value,checked:n===e.value,onChange:function(e){return r(e.currentTarget.value)},children:e.name},t)}))})}),Object(N.jsx)(m.a,{variant:"primary",size:"lg",onClick:p(g),type:"submit",children:"Submit"})]})]})};a(129);var U=function(){return Object(N.jsxs)(l.a,{children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(o.a,{bg:"light",expand:"lg",children:Object(N.jsxs)(j.a,{children:[Object(N.jsx)(o.a.Brand,{children:"React-Test"}),Object(N.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(N.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(N.jsxs)(d.a,{className:"me-auto",children:[Object(N.jsx)(d.a.Link,{as:l.b,to:"/",children:"Wallet"}),Object(N.jsx)(d.a.Link,{as:l.b,to:"/transactions",children:"Transactions"})]})})]})}),Object(N.jsx)("div",{className:"main-border",children:Object(N.jsxs)(i.c,{children:[Object(N.jsx)(i.a,{path:"/transactions",children:Object(N.jsx)(T,{})}),Object(N.jsx)(i.a,{path:"/setup",children:Object(N.jsx)(R,{})}),Object(N.jsx)(i.a,{path:"/add",children:Object(N.jsx)(G,{})}),Object(N.jsx)(i.a,{path:"/",children:Object(N.jsx)(W,{})})]})})]}),Object(N.jsx)(f.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,145)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(U,{})}),document.getElementById("root")),q()},23:function(e,t,a){var c=a(78),n="my-secret-key@123";t.setWalletId=function(e){var t=c.AES.encrypt("".concat(e),"".concat(n)).toString();console.log(t),localStorage.setItem("walletId",t)},t.getWalletId=function(){return!!localStorage.getItem("walletId")&&c.AES.decrypt("".concat(localStorage.getItem("walletId")),"".concat(n)).toString(c.enc.Utf8)}},35:function(e,t){t.currencyFormat=function(e){return"$"+e.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}},76:function(e,t,a){},79:function(e,t){}},[[132,1,2]]]);
//# sourceMappingURL=main.e9b46671.chunk.js.map