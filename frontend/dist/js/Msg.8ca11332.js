(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Msg"],{7734:function(e,a,s){"use strict";a["a"]={checkPhone(e){return!!/^1(3|4|5|6|7|8|9)\d{9}$/.test(e)},stampChangehHonurs:function(){let e=(new Date).getHours(),a=(new Date).getMinutes(),s=(new Date).getSeconds();return`${this.add0(e)}:${this.add0(a)}:${this.add0(s)}`},add0(e){return e<10?"0"+e:e},timeChangeDate(e){let a=new Date(e);return`${a.getFullYear()}-${a.getMonth()+1}-${a.getDate()}`}}},"79a9":function(e,a,s){"use strict";s("ef4f")},"904b":function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"mymsg"},[s("div",{staticClass:"head"},[s("van-nav-bar",{staticClass:"nav",attrs:{title:"我的资料","left-arrow":"",size:"18"},on:{"click-left":e.onClickLeft}})],1),s("div",{staticClass:"content"},[s("van-cell-group",{attrs:{title:" "}},[s("van-field",{staticClass:"head_img",attrs:{name:"uploader",label:"头像"},scopedSlots:e._u([{key:"input",fn:function(){return[s("van-uploader",{attrs:{"after-read":e.afterRead,"max-count":1,readonly:e.readonlys},model:{value:e.fileList,callback:function(a){e.fileList=a},expression:"fileList"}})]},proxy:!0}])}),s("van-field",{staticClass:"updata_read",attrs:{label:"姓名",readonly:""},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}),s("van-field",{staticClass:"updata_read",attrs:{label:"昵称",readonly:e.readonlys,maxlength:"6"},model:{value:e.nickname,callback:function(a){e.nickname=a},expression:"nickname"}}),1==e.sex?s("van-field",{staticClass:"updata_read",attrs:{label:"性别",value:"男",readonly:""}}):e._e(),2==e.sex?s("van-field",{staticClass:"updata_read",attrs:{label:"性别",value:"女",readonly:""}}):e._e(),s("van-field",{staticClass:"updata_read",attrs:{label:"地址",readonly:e.readonlys},model:{value:e.address,callback:function(a){e.address=a},expression:"address"}}),s("van-field",{staticClass:"updata_read",attrs:{label:"入职时间",readonly:""},model:{value:e.induction_time,callback:function(a){e.induction_time=a},expression:"induction_time"}}),s("van-field",{staticClass:"updata_read",attrs:{label:"个性签名",readonly:e.readonlys},model:{value:e.signature,callback:function(a){e.signature=a},expression:"signature"}}),s("van-field",{staticClass:"updata_read",attrs:{label:"邮箱",readonly:e.readonlys},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}})],1),1==e.readonlys?s("van-button",{staticClass:"ifobtn",attrs:{type:"info"},on:{click:e.updata_msg}},[e._v("修改信息")]):s("van-button",{staticClass:"ifobtn",attrs:{type:"info",plain:""},on:{click:e.complete_msg}},[e._v("修改完成")])],1)])},i=[],n=s("7734"),l={data(){return{username:"",nickname:"",sex:"",address:"",induction_time:"",signature:"",email:"",fileList:[],readonlys:!0,result:"",avatar_url:"",user_head_url:"",uese_img:""}},methods:{onClickLeft(){this.$router.push({path:"/myshow"})},afterRead(e){const a=new FormData;a.append("file",e.file),this.$axios.post({url:"/friends/ictures",data:a,headers:{"Content-Type":"multipart/form-data"}}).then(e=>{if(1==e.code){this.user_head_url=e.data[0];s("f121").baseURL,e.data[0]}})},updata_msg(){console.log("修改信息"),this.readonlys=!1},complete_msg(){console.log("完成修改"),console.log(this.user_head_url),this.result.address!=this.address||this.result.nickname!=this.nickname||this.result.signature!=this.signature||this.result.email!=this.email||this.result.user_head_url!=this.user_head_url?(this.Toast.loading({message:"修改中...",forbidClick:!0,duration:0}),this.$axios.post({url:"/user/upmessage",data:{nickname:this.nickname,address:this.address,signature:this.signature,email:this.email,headimg:this.user_head_url}}).then(e=>{this.Toast.clear(),"0"==e.code?(this.Toast.success("修改成功"),this.$router.push({path:"/myshow"})):"-2"==e.code||"-3"==e.code?(this.Toast.fail("数据格式有误，请检查数据是否补充完整"),this.readonlys=!1):(this.Toast.fail("修改失败"),this.readonlys=!1)})):this.Toast({message:"并未修改任何信息",position:"bottom"}),this.readonlys=!0}},mounted(){this.$axios.get({url:"/user/mymessage"}).then(e=>{if(this.result=e.message,console.log(e),"1"==e.code){this.username=e.message.username,this.nickname=e.message.nickname,this.sex=e.message.sex,this.address=e.message.address,this.email=e.message.email,this.user_head_url=e.message.user_head_url,this.induction_time=n["a"].timeChangeDate(e.message.induction_time),this.signature=e.message.signature;let a=e.message.user_head_url?e.message.user_head_url:"head.png";this.uese_img=s("f121").baseURL+"/imgs/temporary/"+a,this.fileList=[{url:this.uese_img}],this.Toast.clear()}else{if("-6"==e.code)return void this.Toast.fail("未获取到您的信息");if("-2"==e.code)return void this.Toast.fail("未获取到数据,请重试");if("-500"==e.code)return}})}},r=l,d=(s("79a9"),s("2877")),o=Object(d["a"])(r,t,i,!1,null,"57e39711",null);a["default"]=o.exports},ef4f:function(e,a,s){}}]);
//# sourceMappingURL=Msg.8ca11332.js.map