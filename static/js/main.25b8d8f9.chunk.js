(this.webpackJsonpsamplev1=this.webpackJsonpsamplev1||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(2),l=n.n(i),s=(n(13),n(5)),o=n(3),c=n(4),u=n(7),m=n(6),p=(n(14),n(15),function(e){return r.a.createElement("ul",null,e.list.map((function(t){return r.a.createElement("li",{id:t,key:t},t,r.a.createElement("span",{onClick:function(t){return e.removeItem(t)},className:"x"},"X"))})))}),h=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={username:"",pass:"",auth:!1,list:["item1","item2","item3","item4","item5","item6"]},e.authentication=function(t){t.preventDefault(),"peopler"===e.state.username&&"interview"===e.state.pass?e.setState({auth:!0}):alert("wrong pin/username")},e.removeItem=function(t){alert("are you sure! delete anyway ? ");var n=e.state.list.findIndex((function(e){return e===t.target.parentElement.id})),a=Object(s.a)(e.state.list);a.splice(n,1),e.setState({list:a})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"hello,"),this.state.auth?r.a.createElement("div",null,r.a.createElement(p,{removeItem:this.removeItem,list:this.state.list}),r.a.createElement("button",{onClick:function(){return e.setState({auth:!1,username:"",pass:""})}},"sign out")):r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{onChange:function(t){return e.setState({username:t.target.value})},type:"text",placeholder:"user name"}),r.a.createElement("input",{onChange:function(t){return e.setState({pass:t.target.value})},type:"password",placeholder:"password"}),r.a.createElement("input",{onClick:this.authentication,type:"submit",value:"submit"})))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.25b8d8f9.chunk.js.map