(this["webpackJsonpreact-hw-02-phonebook"]=this["webpackJsonpreact-hw-02-phonebook"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={formContainer:"styles_formContainer__2EyJL",label:"styles_label__2fCB5",input:"styles_input__3xmw3",button:"styles_button__19nLJ"}},function(e,t,n){e.exports={formContainer:"styles_formContainer__1JZ2X",label:"styles_label__30GlO",input:"styles_input__2xLV7"}},function(e,t,n){e.exports={item:"styles_item__W5Y6E",button:"styles_button__3v9uK"}},,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),l=n.n(c),o=(n(17),n(11)),i=n(1),s=n(2),u=n(3),m=n(5),b=n(4),h=(n(18),n(21)),f=n(6),d=n.n(f),p=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChangeName=function(t){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{name:t.target.value}))},e.handleChangeNumber=function(t){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{number:t.target.value}))},e.handleSubmit=function(t){t.preventDefault(),e.props.onAdd({id:Object(h.a)(),name:e.state.name,number:e.state.number}),e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:d.a.formContainer},r.a.createElement("label",{className:d.a.label},"Name",r.a.createElement("input",{className:d.a.input,type:"text",value:this.state.name,onChange:function(t){return e.handleChangeName(t)}})),r.a.createElement("label",{className:d.a.label},"Number",r.a.createElement("input",{className:d.a.input,type:"text",value:this.state.number,onChange:function(t){return e.handleChangeNumber(t)}})),r.a.createElement("button",{className:d.a.button,disabled:!this.state.name||!this.state.number,onClick:function(t){return e.handleSubmit(t)}},"Add contact"))}}]),n}(a.Component);p.defaultProps={};var v=p,y=n(8),C=n.n(y),O=function(e){return r.a.createElement("li",{className:C.a.item},e.name,": ",e.number," ",r.a.createElement("button",{className:C.a.button,onClick:function(){return e.onDelete(e.id)}},"Delete"))},j=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={filter:""},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.contacts.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,this.props.contacts.map((function(t){return r.a.createElement(O,{onDelete:function(t){return e.props.onDelete(t)},key:t.id,id:t.id,name:t.name,number:t.number})})))))}}]),n}(a.Component),g=n(7),E=n.n(g),_=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={filter:""},e.handleChangeFilter=function(t){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{filter:t.target.value}),(function(){e.props.onFilter(e.state.filter)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:E.a.formContainer},r.a.createElement("label",{className:E.a.label},"Filter contacts by name",r.a.createElement("input",{className:E.a.input,type:"text",value:this.state.filter,onChange:function(t){return e.handleChangeFilter(t)}})))}}]),n}(a.Component);_.defaultProps={};var w=_,N=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.handleSubmit=function(t){e.state.contacts.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts")):e.setState(Object(i.a)(Object(i.a)({},e.state),{},{contacts:[].concat(Object(o.a)(e.state.contacts),[t])}))},e.handleDelete=function(t){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{contacts:e.state.contacts.filter((function(e){return e.id!==t}))}))},e}return Object(u.a)(n,[{key:"getFilteredContacts",value:function(){var e=this;return this.state.filter?this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e.state.filter.toLowerCase())})):this.state.contacts}},{key:"handleFilter",value:function(e){this.setState(Object(i.a)(Object(i.a)({},this.state),{},{filter:e}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(v,{onAdd:this.handleSubmit}),r.a.createElement("h1",null,"Contacts"),r.a.createElement(w,{onFilter:function(t){return e.handleFilter(t)}}),r.a.createElement(j,{onDelete:function(t){return e.handleDelete(t)},contacts:this.getFilteredContacts()}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.78b81101.chunk.js.map