(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb7b0a60"],{"16ff":function(t,e,s){"use strict";s("ce22")},2375:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spinner"},[s("div",{staticClass:"bouncing-loader"},[s("div"),s("div"),s("div")])])}],i=(s("b434"),s("2877")),n={},c=Object(i["a"])(n,r,a,!1,null,"6c5d302b",null);e["a"]=c.exports},7156:function(t,e,s){var r=s("1626"),a=s("861d"),i=s("d2bb");t.exports=function(t,e,s){var n,c;return i&&r(n=e.constructor)&&n!==s&&a(c=n.prototype)&&c!==s.prototype&&i(t,c),t}},b434:function(t,e,s){"use strict";s("ec88")},c5d4:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACBSURBVHgB7ZfBCcAgDEV/O0FH6EhuoJtnBN2gTcCDFD0USn4PefDE48N4CfCerFZV1AQSFnENVhB4RpgCZ2YRputoVhEFjkRERETEryPSIsJLUfPWLye4tF2PA3yaHQXc0VQMf3EVk0GgIGIiJmIixj+GstfMYgRESg+w1/hsr7kBqEzC/SDE/soAAAAASUVORK5CYII="},cbea:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"menu col-3"},[r("Menu")],1),r("div",{staticClass:"follow-ship col-6"},[r("div",{staticClass:"page-title position-relative"},[r("router-link",{attrs:{to:"/user-profile/"+t.user.id}},[r("img",{staticClass:"back-arrow position-absolute",attrs:{src:s("c5d4"),alt:""}})]),r("div",{staticClass:"title-item main-text"},[t._v(t._s(t.user.name))]),r("div",{staticClass:"title-item sub-text"},[t._v(t._s(t.user.tweetCount)+" 推文")])],1),r("div",[r("ul",{staticClass:"nav nav-tab mt-4"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/user-profile/"+t.user.id+"/followers"}},[t._v(" 跟隨者 ")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/user-profile/"+t.user.id+"/followings"}},[t._v(" 正在跟隨 ")])],1)])]),r("router-view",{attrs:{"user-id":t.user.id}})],1),r("div",{staticClass:"col-3 popular-user mh-100"},[r("PopularUser")],1)])},a=[],i=s("1da1"),n=(s("96cf"),s("fb62")),c=s("0bf5"),o=s("1602"),u=s("2fa3"),l={components:{Menu:n["a"],PopularUser:c["a"]},created:function(){var t=this.$route.params.userId;this.fetchUser(t)},data:function(){return{user:{}}},methods:{fetchUser:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var r,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,o["a"].getUser({userId:t});case 3:r=s.sent,a=r.data,e.user=a,s.next=11;break;case 8:s.prev=8,s.t0=s["catch"](0),u["a"].fire({icon:"error",title:"無法取得資料，請稍後再試"});case 11:case"end":return s.stop()}}),s,null,[[0,8]])})))()}}},A=l,f=(s("16ff"),s("2877")),v=Object(f["a"])(A,r,a,!1,null,"14195c84",null);e["default"]=v.exports},ce22:function(t,e,s){},ec88:function(t,e,s){}}]);
//# sourceMappingURL=chunk-bb7b0a60.48935475.js.map