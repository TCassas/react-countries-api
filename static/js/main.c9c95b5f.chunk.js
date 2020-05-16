(this["webpackJsonpapi-countries"]=this["webpackJsonpapi-countries"]||[]).push([[0],{15:function(e,t,a){},26:function(e,t,a){e.exports=a(41)},31:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),l=(a(15),a(6));a(31);var i=function(e){return r.a.createElement("nav",{className:"container"},r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:"search-countrie",style:e.lightMode?null:{boxShadow:"0px 0px 5px 2px rgba(43, 57, 69, 0.62)",backgroundColor:"hsl(209, 23%, 22%)"}},r.a.createElement("ion-icon",{name:"search-outline"}),r.a.createElement("input",{type:"text",placeholder:"Search for a country...",name:"countrieSearch",value:e.countrieSearch,onChange:e.handleChange,style:e.lightMode?null:{backgroundColor:"hsl(209, 23%, 22%)",color:"white"}})),r.a.createElement("select",{style:e.lightMode?null:{boxShadow:"0px 0px 5px 2px rgba(43, 57, 69, 0.62)",backgroundColor:"hsl(209, 23%, 22%)",color:"white"},onClick:e.handleRegion},r.a.createElement("option",{value:""},"Filter by region"),r.a.createElement("option",{value:"africa"},"Africa"),r.a.createElement("option",{value:"americas"},"America"),r.a.createElement("option",{value:"asia"},"Asia"),r.a.createElement("option",{value:"europe"},"Europe"),r.a.createElement("option",{value:"oceania"},"Oceania"))))};var u=function(e){function t(e){return e?{color:"black"}:{color:"white"}}return r.a.createElement("header",null,r.a.createElement("div",{className:"shadow",style:e.lightMode?{backgroundColor:"white"}:{backgroundColor:"hsl(209, 23%, 22%)"}},r.a.createElement("div",{className:"pre-nav container"},r.a.createElement("h1",{style:t(e.lightMode)},"Where in the world?"),r.a.createElement("button",{onClick:e.handleClick,style:t(e.lightMode)},r.a.createElement("ion-icon",{name:"moon-outline",style:t(e.lightMode)}),"Dark Mode"))))},s=a(18),m=a(19),p=a(25),h=a(24),d=a(20),E=a(12),f=a(21),g=a.n(f);function b(){var e=Object(d.a)(["\n  display: block;\n  margin: 50px auto 0 auto;\n  border-color: black;\n"]);return b=function(){return e},e}var v=Object(E.css)(b()),N=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={loading:!0},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sweet-loading"},r.a.createElement(g.a,{css:v,size:50,color:this.props.spinnerColor,loading:this.state.loading}))}}]),a}(r.a.Component),k=a(8);var j=function(e){return r.a.createElement("div",{className:"countrie",style:e.lightMode?null:{boxShadow:"0px 0px 5px 2px rgba(43, 57, 69, 0.5)",backgroundColor:"hsl(209, 23%, 22%)",color:"white"}},r.a.createElement("div",{style:{backgroundImage:"url(".concat(e.countrie.flag,")"),backgroundSize:"cover",backgroundPosition:"center"},className:"countrie-flag"}),r.a.createElement("div",{className:"countrie-info"},r.a.createElement("p",{className:"countrie-name"},r.a.createElement(k.b,{to:"/countries/".concat(e.countrie.name),style:e.lightMode?null:{color:"white"}},e.countrie.name)),r.a.createElement("p",null,r.a.createElement("span",{className:"countrie-propertie"},"Population:")," ",e.countrie.population),r.a.createElement("p",null,r.a.createElement("span",{className:"countrie-propertie"},"Region:")," ",e.countrie.region),r.a.createElement("p",null,r.a.createElement("span",{className:"countrie-propertie"},"Capital:")," ",e.countrie.capital)))};var C=function(e){return r.a.createElement("section",{className:"container countries"},e.countries.map((function(t){return r.a.createElement(j,{countrie:t,key:t.numericCode,lightMode:e.lightMode})})))},w=a(5);var x=function(e){var t,a=Object(n.useState)({}),o=Object(l.a)(a,2),c=o[0],i=o[1],u=Object(n.useState)(!0),s=Object(l.a)(u,2),m=s[0],p=s[1],h=Object(w.f)().id;return Object(n.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/name/".concat(h,"?fullText=true")).then((function(e){return e.json()})).then((function(e){i(e[0]),p(!m)}))}),[]),r.a.createElement("div",{className:"detailed-countrie container"},r.a.createElement("div",{className:"back-button"},r.a.createElement(k.b,{to:"/",style:e.lightMode?{backgroundColor:"white"}:{boxShadow:"0px 0px 5px 7px rgba(43, 57, 69, 0.5)",backgroundColor:"hsl(209, 23%, 22%)",color:"white"}},r.a.createElement("p",null,r.a.createElement("ion-icon",{name:"arrow-back-outline"})," Back"))),m?r.a.createElement(N,{loader:"MoonLoader",spinnerColor:e.lightMode?"#000000":"#ffffff"}):c?r.a.createElement("div",{className:"countrie-details",style:e.lightMode?null:{color:"white"}},r.a.createElement("div",{className:"countrie-details_flag"},r.a.createElement("img",{src:c.flag,alt:c.name+"'s flag'",title:c.name+" flag"})),r.a.createElement("div",{className:"countrie-details_data"},r.a.createElement("h1",{className:"countrie-name"},c.name),r.a.createElement("div",null,r.a.createElement("div",{className:"leftInfo"},r.a.createElement("p",null,r.a.createElement("span",{className:"countrie-propertie"},"Native name: "),c.nativeName),r.a.createElement("p",null,r.a.createElement("span",{className:"countrie-propertie"},"Population: "),c.population),r.a.createElement("p",null,r.a.createElement("span",{className:"countrie-propertie"},"Region: "),c.region),r.a.createElement("p",null,r.a.createElement("span",{className:"countrie-propertie"},"Sub region: "),c.subregion),r.a.createElement("p",null,r.a.createElement("span",{className:"countrie-propertie"},"Capital: "),c.capital)),r.a.createElement("div",{className:"rightInfo"},r.a.createElement("p",null,r.a.createElement("span",{className:"countrie-propertie"},"Top level domain: "),c.topLevelDomain),r.a.createElement("p",null,r.a.createElement("span",{className:"countrie-propertie"},"Currencies: "),c.currencies[0].code," (",c.currencies[0].name,")"),r.a.createElement("p",null,r.a.createElement("span",{className:"countrie-propertie"},"Languages: "),c.languages[0].name))),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("span",{className:"countrie-propertie countrie-borders"},"Border Countries: ")),r.a.createElement("span",null,(t=c.borders,t.map((function(e){return e+" "}))).map((function(e){return e})))))):"Country not found")};var y=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),s=Object(l.a)(c,2),m=s[0],p=s[1],h=Object(n.useState)(!0),d=Object(l.a)(h,2),E=d[0],f=d[1],g=Object(n.useState)(!0),b=Object(l.a)(g,2),v=b[0],j=b[1];return Object(n.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){o(e),j(!v)}))}),[]),r.a.createElement(k.a,null,r.a.createElement("div",{className:E?"App":"darkApp"},r.a.createElement(u,{handleClick:function(e){f(!E)},lightMode:E}),r.a.createElement("div",{className:"background"},r.a.createElement(w.c,null,r.a.createElement(w.a,{path:"/",exact:!0},r.a.createElement(i,{handleChange:function(e){p(e.target.value)},handleSubmit:function(e){e.preventDefault(),console.log("https://restcountries.eu/rest/v2/name/".concat(m)),m.length>0?fetch("https://restcountries.eu/rest/v2/name/".concat(m)).then((function(e){return e.json()})).then((function(e){return o(e)})):fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){return o(e)}))},countrieSearch:m,lightMode:E,handleRegion:function(e){""!==e.target.value?fetch("https://restcountries.eu/rest/v2/region/".concat(e.target.value)).then((function(e){return e.json()})).then((function(e){return o(e)})):fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){return o(e)}))}}),v?r.a.createElement(N,{loader:"MoonLoader",spinnerColor:E?"#000000":"#ffffff"}):a.length>0?r.a.createElement(C,{countries:a,lightMode:E}):"Country not found"),r.a.createElement(w.a,{path:"/countries/:id"},r.a.createElement(x,{lightMode:E}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.c9c95b5f.chunk.js.map