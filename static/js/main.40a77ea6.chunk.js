(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),s=(n(12),n(3)),i=n(4),l=n(6),u=n(5),h=(n(13),function(e){return a.a.createElement("div",null,a.a.createElement("h1",null,e.children.name))}),m=function(e){return a.a.createElement("div",{className:"cardlist"},e.monsters.map((function(e){return a.a.createElement(h,{key:e.id},e)})))},d=function(e){var t=e.placeHolder,n=e.handleChange;return a.a.createElement("input",{type:"search",placeholder:t,onChange:n})},f=(n(14),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).setSearchText=function(t){return e.setState({searchText:t.target.value})},e.state={monsters:[],searchText:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})})),console.log(this.props.msg)}},{key:"render",value:function(){var e=this,t=this.state.monsters.filter((function(t){return t.name.toLowerCase().includes(e.state.searchText.toLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement(d,{placeHolder:"Search Monsters",handleChange:this.setSearchText}),a.a.createElement(m,{monsters:t}))}}]),n}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,{msg:"hello"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.40a77ea6.chunk.js.map