(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Messagehistory"],{"00ea":function(t,e,s){},"01e4":function(t,e,s){"use strict";s("00ea")},"1ce3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"messagehistory"},[s("div",{staticClass:"head"},[s("van-nav-bar",{staticClass:"title",attrs:{title:"我的历史记录","left-text":"返回",fixed:"","left-arrow":""},on:{"click-left":function(e){return t.$router.replace("/message")}}})],1),t.msgArr.length>0?s("div",[s("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.msgArr,(function(e){return s("div",{key:e["message_id"],staticClass:"conters"},[s("div",{staticClass:"img"},[s("i",[s("img",{attrs:{src:""+e["user_head_url"],alt:""}})])]),s("div",{staticClass:"conter"},[s("div",{staticClass:"conterLeft"},[s("p",[s("span",{style:{color:"#00ff00"}},[t._v("·")]),s("b",[t._v("我发至：")]),s("i",[t._v(" "+t._s(e["GROUP_CONCAT(oao_user_detailed.username)"])+" ")])]),s("p",{staticClass:"partConter"},[t._v(" "+t._s(e.content)+" ")])]),s("div",{staticClass:"conterRight"},[s("div",{staticClass:"conterRightTime"},[t._v(" "+t._s(e["message_time"])+" ")])])])])})),0)],1):s("div",{staticClass:"messageNull"},[t._v(" 暂无工作通知 ")])])},i=[],r={name:"Maessage",data(){return{loading:!1,finished:!0,msgArr:[],listTotal:""}},mounted(){this.rander()},methods:{rander(){this.Toast.loading({message:"",forbidClick:!0,duration:0}),this.$axios.get({url:"message/myhistoryrmsg"}).then(t=>{if(console.log(t),0==t.code)for(let e=0;e<t.data.length;e++)t.data[e]["message_time"]=this.timestampToTime(t.data[e]["message_time"]),this.msgArr=t.data.reverse(),this.listTotal=t.list;else console.log(t.message);this.msgArr.length<this.listTotal&&(this.finished=!1),this.Toast.clear()})},timestampToTime(t){let e=new Date(t),s=e.getFullYear()+"-",a=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",i=(e.getDate()+1<10?"0"+e.getDate():e.getDate())+" ",r=(e.getHours()+1<10?"0"+e.getHours():e.getHours())+":",n=e.getMinutes()+1<10?"0"+e.getMinutes():e.getMinutes();return s+a+i+r+n},lookMessage(t){this.$router.push("/message/messagedetinfo?msgid="+t)},onLoad(){this.$axios.post({url:"message/history",data:{page:this.msgArr.length}}).then(t=>{if(t&&0==t.code){this.loading=!1;for(let e=0;e<t.data.length;e++)t.data[e]["message_time"]=this.timestampToTime(t.data[e]["message_time"]),this.msgArr.push(t.data[e]);this.msgArr.length>=this.listTotal&&(this.finished=!0)}else this.msgArr.length>=this.listTotal&&(this.finished=!0)})},createFile(){this.$router.push("/message/messagesend")}}},n=r,o=(s("01e4"),s("2877")),l=Object(o["a"])(n,a,i,!1,null,"422d8253",null);e["default"]=l.exports}}]);
//# sourceMappingURL=Messagehistory.8c8736ae.js.map