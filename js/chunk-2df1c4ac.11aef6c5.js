(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2df1c4ac"],{"06eb":function(t,e,r){"use strict";r("d9b8")},"0bf5":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ms-0",attrs:{id:"popular-user"}},[r("div",{staticClass:"title menu-text w-100"},[t._v("Popular")]),t.isLoading?r("Spinner"):t._e(),t._l(t.users,(function(e){return r("div",{key:e.id,staticClass:"user d-flex align-items-center"},[r("div",{},[r("router-link",{attrs:{to:{name:"user-profile",params:{userId:e.id}}}},[r("img",{staticClass:"avatar",attrs:{src:e.avatar,alt:"",width:"50px"}})])],1),r("div",{staticClass:"account d-flex flex-column me-auto"},[r("span",{staticClass:"text-name"},[t._v(t._s(e.name))]),r("span",{staticClass:"text-account"},[t._v("@"+t._s(e.account))])]),r("div",{staticClass:"follow"},[e.isFollowed?r("button",{staticClass:"btn-following",on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.deleteFollowing(e.id)}}},[t._v(" 正在跟隨 ")]):r("button",{staticClass:"btn-follow",on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.addFollowing(e.id)}}},[t._v(" 跟隨 ")])])])}))],2)},a=[],n=r("5530"),i=r("1da1"),o=(r("96cf"),r("d9e2"),r("d81d"),r("2375")),c=r("1602"),u={components:{Spinner:o["a"]},data:function(){return{users:[],isLoading:!0,alertMsg:"",alertStatus:!1}},created:function(){this.fetchTopUsers()},methods:{alertShow:function(){var t=this,e=r("7b17"),s=document.querySelector("#alert");e.Alert.getInstance(s),setTimeout((function(){t.alertStatus=!1}),2e3)},fetchTopUsers:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].getTopUsers();case 3:if(r=e.sent,s=r.data,"error"!==s.status){e.next=7;break}throw new Error(s.message);case 7:t.users=s.data,t.isLoading=!1,e.next=16;break;case 11:e.prev=11,e.t0=e["catch"](0),t.alertMsg=e.t0.response.data.message,t.alertStatus="error",t.alertShow();case 16:case"end":return e.stop()}}),e,null,[[0,11]])})))()},addFollowing:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c["a"].addFollowing({id:t});case 3:if(s=r.sent,a=s.data,"success"===a.status){r.next=7;break}throw new Error(a.message);case 7:e.users=e.users.map((function(e){return e.id!==t?e:Object(n["a"])(Object(n["a"])({},e),{},{isFollowed:!0})})),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log(r.t0.response.data.message);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteFollowing:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c["a"].deleteFollowing({followingId:t});case 3:if(s=r.sent,a=s.data,"success"===a.status){r.next=7;break}throw new Error(a.message);case 7:e.users=e.users.map((function(e){return e.id!==t?e:Object(n["a"])(Object(n["a"])({},e),{},{isFollowed:!1})})),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log(r.t0.response.data.message);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},l=u,d=(r("e070"),r("2877")),f=Object(d["a"])(l,s,a,!1,null,"2b27d769",null);e["a"]=f.exports},"24bd":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF2SURBVHgBzZiBkcIgEEW/V0FKSAlXAiXYAXRkOsh15HXAdRA78NiROA4QwwIbfDPrjErYNwsJECBGubi4sC7ulXF1MbsY0YDBi92F4uJzFMtdBeVeK1okKVm5VCVZjIlOLB5zsXhIPGek57ICgzkhVyv2yoBYcuJ0EM69M9qjEBchm7D8Egw1eWoFtYsFj6poCOSpEdTBtYtEntILNdJ3/xZLZruIEsGUHIV5c43xYstOuwiuYIlcFRzBw+WAfMEuckCeYDc5YF9wS046LOU+JaROwXdqOKIPt6+MRi03Dlxu9LE3xAZ9hvj5vMy5SbYkNQ4gR5Aw6CSZK0gYdJDkCBIGB0tyBQkDviT9l7NvRAvBLcl3+0Gb2S6iVDAlaSXy1AiukiS2t89rJii1chQJ0lL3F/z2jfaER9lfMKBDdDiPpA/uM6cDhfRWp/YAP/i+baL/EUwmlC/q3GC99lj5+Ndvq6RkJSc0mtujix+0qaj1YgqF/AMT2fbOKe1HBQAAAABJRU5ErkJggg=="},6783:function(t,e,r){"use strict";r("a4d3"),r("e01a");var s=r("2fa3");e["a"]={getTweets:function(){return s["b"].get("/tweets")},getOneTweet:function(t){var e=t.id;return s["b"].get("/tweets/".concat(e))},postTweet:function(t){var e=t.description;return s["b"].post("/tweets",{description:e})},getTweetReplies:function(t){var e=t.id;return s["b"].get("/tweets/".concat(e,"/replies"))},postTweetReply:function(t){var e=t.id,r=t.comment;return s["b"].post("/tweets/".concat(e,"/replies"),{comment:r})},addLike:function(t){var e=t.id;return s["b"].post("/tweets/".concat(e,"/like"))},deleteLike:function(t){var e=t.id;return s["b"].post("/tweets/".concat(e,"/unlike"))}}},"8d50":function(t,e,r){},"8f1f":function(t,e,r){},a7e0:function(t,e,r){t.exports=r.p+"img/UserProfileActive.008313ab.svg"},a92b:function(t,e,r){t.exports=r.p+"img/Setting.2ff65de4.svg"},ab36:function(t,e,r){var s=r("861d"),a=r("9112");t.exports=function(t,e){s(e)&&"cause"in e&&a(t,"cause",e.cause)}},b7d0:function(t,e,r){t.exports=r.p+"img/Menu.52b5f7af.svg"},b980:function(t,e,r){var s=r("d039"),a=r("5c6c");t.exports=!s((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",a(1,7)),7!==t.stack)}))},c466:function(t,e,r){t.exports=r.p+"img/SettingActive.df6893fe.svg"},c4dc:function(t,e,r){t.exports=r.p+"img/MenuActive.e19deed5.svg"},c770:function(t,e,r){var s=r("e330"),a=s("".replace),n=function(t){return String(Error(t).stack)}("zxcasd"),i=/\n\s*at [^:]*:[^\n]*/,o=i.test(n);t.exports=function(t,e){if(o&&"string"==typeof t)while(e--)t=a(t,i,"");return t}},d81d:function(t,e,r){"use strict";var s=r("23e7"),a=r("b727").map,n=r("1dde"),i=n("map");s({target:"Array",proto:!0,forced:!i},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},d9b8:function(t,e,r){},d9e2:function(t,e,r){var s=r("23e7"),a=r("da84"),n=r("2ba4"),i=r("e5cb"),o="WebAssembly",c=a[o],u=7!==Error("e",{cause:7}).cause,l=function(t,e){var r={};r[t]=i(t,e,u),s({global:!0,forced:u},r)},d=function(t,e){if(c&&c[t]){var r={};r[t]=i(o+"."+t,e,u),s({target:o,stat:!0,forced:u},r)}};l("Error",(function(t){return function(e){return n(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return n(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return n(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return n(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return n(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return n(t,this,arguments)}})),l("URIError",(function(t){return function(e){return n(t,this,arguments)}})),d("CompileError",(function(t){return function(e){return n(t,this,arguments)}})),d("LinkError",(function(t){return function(e){return n(t,this,arguments)}})),d("RuntimeError",(function(t){return function(e){return n(t,this,arguments)}}))},e01a:function(t,e,r){"use strict";var s=r("23e7"),a=r("83ab"),n=r("da84"),i=r("e330"),o=r("1a2d"),c=r("1626"),u=r("3a9b"),l=r("577e"),d=r("9bf2").f,f=r("e893"),m=n.Symbol,p=m&&m.prototype;if(a&&c(m)&&(!("description"in p)||void 0!==m().description)){var v={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=u(p,this)?new m(t):void 0===t?m():m(t);return""===t&&(v[e]=!0),e};f(g,m),g.prototype=p,p.constructor=g;var b="Symbol(test)"==String(m("test")),h=i(p.toString),w=i(p.valueOf),A=/^Symbol\((.*)\)[^)]+$/,x=i("".replace),C=i("".slice);d(p,"description",{configurable:!0,get:function(){var t=w(this),e=h(t);if(o(v,t))return"";var r=b?C(e,7,-1):x(e,A,"$1");return""===r?void 0:r}}),s({global:!0,forced:!0},{Symbol:g})}},e070:function(t,e,r){"use strict";r("8f1f")},e0f6:function(t,e,r){t.exports=r.p+"img/UserProfile.da93a574.svg"},e391:function(t,e,r){var s=r("577e");t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:s(t)}},e5cb:function(t,e,r){"use strict";var s=r("d066"),a=r("1a2d"),n=r("9112"),i=r("3a9b"),o=r("d2bb"),c=r("e893"),u=r("7156"),l=r("e391"),d=r("ab36"),f=r("c770"),m=r("b980"),p=r("c430");t.exports=function(t,e,r,v){var g=v?2:1,b=t.split("."),h=b[b.length-1],w=s.apply(null,b);if(w){var A=w.prototype;if(!p&&a(A,"cause")&&delete A.cause,!r)return w;var x=s("Error"),C=e((function(t,e){var r=l(v?e:t,void 0),s=v?new w(t):new w;return void 0!==r&&n(s,"message",r),m&&n(s,"stack",f(s.stack,2)),this&&i(A,this)&&u(s,this,C),arguments.length>g&&d(s,arguments[g]),s}));if(C.prototype=A,"Error"!==h&&(o?o(C,x):c(C,x,{name:!0})),c(C,w),!p)try{A.name!==h&&n(A,"name",h),A.constructor=C}catch(S){}return C}}},efa6:function(t,e,r){"use strict";r("8d50")},fb62:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex flex-column h-100 py-3 ms-auto",attrs:{id:"menu"}},[s("div",{staticClass:"logo ms-3"},[s("img",{attrs:{src:r("bca0"),width:"30px"}})]),s("div",{staticClass:"mb-auto"},[s("div",{staticClass:"ms-3 mb-4 lh-1"},[s("ul",[s("li",{staticClass:"menu-icon mb-4"},[s("router-link",{staticClass:"menu-text",attrs:{to:"/main"}},[s("img",{staticClass:"me-3",attrs:{src:t.mainUrl}}),t._v(" 首頁 ")])],1),s("li",{staticClass:"menu-icon mb-4"},[s("router-link",{staticClass:"menu-text",attrs:{to:{name:"user-profile",params:{userId:t.currentUser.id}}}},[s("img",{staticClass:"profile-icon",attrs:{src:t.userProfileUrl}}),t._v(" 個人資料 ")])],1),s("li",{staticClass:"menu-icon mb-4"},[s("router-link",{staticClass:"menu-text",attrs:{to:{name:"setting"}}},[s("img",{staticClass:"me-3",attrs:{src:t.settingUrl}}),t._v(" 設定 ")])],1)])]),s("button",{staticClass:"btn-active btn-tweet w-100",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#new-tweet-modal"}},[t._v(" 推文 ")])]),s("div",[s("button",{staticClass:"ms-3 d-flex align-items-center",on:{click:t.logout}},[t._m(0),s("a",{staticClass:"menu-text ms-2 logout"},[t._v("登出")])])]),s("NewTweetModal"),!1!==t.alertStatus?s("div",{staticClass:"alert d-flex fixed-top",attrs:{id:"alert",role:"alert"}},[s("div",{staticClass:"ms-2 mx-auto my-auto text-alert"},[t._v(t._s(t.alertMsg))]),s("div",{staticClass:"ms-auto"},["error"===t.alertStatus?s("img",{attrs:{src:r("ba0e")}}):"success"===t.alertStatus?s("img",{attrs:{src:r("08f6")}}):t._e()])]):t._e()],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"me-2"},[s("img",{staticClass:"d-block",attrs:{width:"20px",src:r("24bd")}})])}],n=r("5530"),i=(r("b0c0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"new-tweet-modal",tabindex:"-1","aria-labelledby":"newTweetModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body d-flex"},[s("div",{},[s("img",{staticClass:"avatar",attrs:{width:"50px",src:t.currentUser.avatar,alt:""}})]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"input-new-tweet mt-2",attrs:{rows:"2",cols:"35",placeholder:"有什麼新鮮事？"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),s("div",{staticClass:"modal-footer"},[t.isError?s("span",{staticClass:"text-danger"},[t._v(t._s(t.errorMsg))]):t._e(),s("button",{staticClass:"btn-active",attrs:{type:"submit",disabled:t.isProcessing},on:{click:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[t._v(" 推文 ")])])])]),!1!==t.alertStatus?s("div",{staticClass:"alert d-flex fixed-top",attrs:{id:"alert",role:"alert"}},[s("div",{staticClass:"ms-2 mx-auto my-auto text-alert"},[t._v(t._s(t.alertMsg))]),s("div",{staticClass:"ms-auto"},["error"===t.alertStatus?s("img",{attrs:{src:r("ba0e")}}):"success"===t.alertStatus?s("img",{attrs:{src:r("08f6")}}):t._e()])]):t._e()])}),o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-header"},[r("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])}],c=r("1da1"),u=(r("96cf"),r("a4d3"),r("e01a"),r("2f62")),l=r("6783"),d={name:"NewTweetModal",data:function(){return{description:"",isError:!1,errorMsg:"",isProcessing:!1,alertMsg:"",alertStatus:!1}},computed:Object(n["a"])({},Object(u["b"])(["currentUser","newTweets"])),methods:{alertShow:function(){var t=this,e=r("7b17"),s=document.querySelector("#alert");e.Alert.getInstance(s),setTimeout((function(){t.alertStatus=!1}),2e3)},hideModal:function(){var t=r("7b17"),e=document.querySelector("#new-tweet-modal"),s=t.Modal.getInstance(e);setTimeout((function(){s.hide()}),1e3)},handleSubmit:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.description){e.next=7;break}return t.isError=!0,t.errorMsg="內容不可空白",e.abrupt("return");case 7:if(!(t.description.length>140)){e.next=13;break}return t.isError=!0,t.errorMsg="字數不可超過 140 字",e.abrupt("return");case 13:t.isError=!1;case 14:return t.isProcessing=!0,e.next=17,l["a"].postTweet({description:t.description});case 17:r=e.sent,s=r.data,console.log(s),a={UserId:t.currentUser.id,description:t.description,replyCount:0,likeCount:0,createdAt:(new Date).toISOString(),User:{avatar:t.currentUser.avatar,name:t.currentUser.name,account:t.currentUser.account}},t.$store.commit("setNewTweet",a),t.alertMsg="推文成功",t.alertStatus="success",t.alertShow(),t.isProcessing=!1,t.description="",t.hideModal(),e.next=35;break;case 30:e.prev=30,e.t0=e["catch"](0),t.alertMsg=e.t0.response.data.message,t.alertStatus="error",t.alertShow();case 35:case"end":return e.stop()}}),e,null,[[0,30]])})))()}}},f=d,m=(r("06eb"),r("2877")),p=Object(m["a"])(f,i,o,!1,null,"5a8afb50",null),v=p.exports,g={name:"Menu",components:{NewTweetModal:v},data:function(){return{mainUrl:r("b7d0"),mainActiveUrl:r("c4dc"),userProfileUrl:r("e0f6"),userProfileActiveUrl:r("a7e0"),settingUrl:r("a92b"),settingActiveUrl:r("c466"),alertMsg:"",alertStatus:!1}},computed:Object(n["a"])({},Object(u["b"])(["currentUser","isAuthenticated","newTweets"])),methods:{alertShow:function(){var t=this,e=r("7b17"),s=document.querySelector("#alert");e.Alert.getInstance(s),setTimeout((function(){t.alertStatus=!1}),2e3)},logout:function(){this.$store.commit("revokeAuthentication"),this.$router.push("/login")}},mounted:function(){var t=this;localStorage.getItem("token")||(this.alertMsg="您尚未登入",this.alertStatus="error",this.alertShow(),setTimeout((function(){t.$router.push("/login")}),5e3))},created:function(){"/main"===this.$route.path&&(this.mainUrl=this.mainActiveUrl),"user-tweets"===this.$route.name&&(this.userProfileUrl=this.userProfileActiveUrl),"/setting"===this.$route.path&&(this.settingUrl=this.settingActiveUrl)}},b=g,h=(r("efa6"),Object(m["a"])(b,s,a,!1,null,null,null));e["a"]=h.exports}}]);
//# sourceMappingURL=chunk-2df1c4ac.11aef6c5.js.map