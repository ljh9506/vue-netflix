(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41bede94"],{"0418":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"header"}},[i("img",{staticClass:"logoImage",attrs:{src:t.image,alt:"logoImage"},on:{click:t.NavigateMain}}),i("nav",[i("ul",[i("li",{staticClass:"items"},[t._v("Home")]),i("li",{staticClass:"items"},[t._v("Series")]),i("li",{staticClass:"items"},[t._v("Film")]),i("li",{staticClass:"items",on:{click:t.NavigateCart}},[t._v("Cart "),i("p",[t._v(" "+t._s(this.$store.state.list.length)+" ")])])])]),t._m(0),i("div",{attrs:{id:"icons"}},[i("v-icon",{attrs:{name:"bell",scale:"1.3",color:"#e5e5e5"}}),i("v-icon",{attrs:{name:"user-circle",scale:"1.7",color:"#e5e5e5"}})],1)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"text-form"}},[i("form",[i("input",{attrs:{type:"text",placeholder:"검색어를 입력하세요."}})])])}],n=i("4dd3"),o=i.n(n),r=i("0874"),c={components:{"v-icon":r["a"]},data:function(){return{image:o.a}},methods:{NavigateMain:function(){this.$router.push({name:"Main"})},NavigateCart:function(){this.$router.push({name:"Cart"})}}},l=c,u=(i("8baf"),i("2877")),m=Object(u["a"])(l,a,s,!1,null,null,null);e["a"]=m.exports},"049f":function(t,e,i){"use strict";var a=i("22ca"),s=i.n(a);s.a},"22ca":function(t,e,i){},6860:function(t,e,i){},"8baf":function(t,e,i){"use strict";var a=i("6860"),s=i.n(a);s.a},b789:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Header"),i("div",{attrs:{id:"myListContainer"}},[i("div",{attrs:{id:"myListContent"}},[this.$store.state.list.length?t._l(this.$store.state.list,(function(e){return i("div",{key:e.imdbID,attrs:{id:"moviesSaved"}},[i("div",{attrs:{id:"normalColorImage"},on:{click:function(i){return t.showDetail(e.imdbID)}}},[i("img",{attrs:{src:e.Poster,id:"movieSaveImage"}})]),i("h4",{attrs:{id:"movieTitle"}},[t._v(" "+t._s(e.Title)+" ")]),i("div",{attrs:{id:"buttonsMyList"}},[i("button",{attrs:{id:"markToRemove",title:"Remove List"},on:{click:function(i){t.$store.commit("removeData",e),t.removeToast()}}},[i("v-icon",{attrs:{name:"trash",scale:"1.2",color:"#e50931"}})],1)])])})):i("h2",{attrs:{id:"empty"}},[t._v(" Cart List is Empty... ")])],2)])],1)},s=[],n=i("0874"),o=i("0418"),r={name:"MyList",data:function(){return{booleanMovie:!0}},components:{Header:o["a"],"v-icon":n["a"]},methods:{showDetail:function(t){this.$router.push({name:"Detail",params:{id:t}})},removeToast:function(){this.$toast.open({message:"Successfully Removed",type:"error",duration:3e3,dismissible:!0,queue:!0,position:"top-right"})},updateValues:function(){window.location.reload()}}},c=r,l=(i("049f"),i("2877")),u=Object(l["a"])(c,a,s,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-41bede94.378bf17f.js.map