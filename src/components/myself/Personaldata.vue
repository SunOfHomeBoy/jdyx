<template>
	<div class="personaldata_wrap">
		<div class="personaldata_content personaldata_header">
			<x-header :left-options="{showBack:true,backText: ''}">个人资料</x-header>
		</div>
		<div class="personaldata_content personaldata_main">
			<ul class="personaldata_msg">
				<li>
					<span>头像</span>
					<span>
						<img src="../../../src/assets/img/login/tx3.png" class="touxiang_logo"/>
						<img src="../../../src/assets/img/photo/right_jt.svg" style="width:.5rem;height:.4rem;"/>
					</span>
				</li>
				<li>
					<span>昵称</span>
					<span>
						<span style="color:#2A7DAD;font-size:0.33rem;display:block;"><input type="text" class="nickname" v-model="params.nickname" @keyup="nicknamekeyupfn"/></span>
						<img src="../../../src/assets/img/photo/right_jt.svg" style="width:.5rem;height:.4rem;display:block;"/>
					</span>
				</li>
			</ul>
			<div class="intruduceme" style="padding-left:.2rem;padding-right:.2rem;margin-top:.4rem;overflow: hidden;">
				<textarea tyle="text" placeholder="用几句话介绍自己" style="width:94.5%;height:2.5rem;border:1px solid #EAEAEA; -webkit-appearance:none;border-radius:0;padding-left:.4rem;padding-top:.4rem;outline: none;font-size:.3rem;"></textarea>
			</div>
			<div style="width:90%;margin:auto;margin-top:1.5rem;">
				<x-button type="primary">保存</x-button>
			</div>
		</div>	
  	</div>
  	
</template>

<script>
import { XHeader, GroupTitle, XButton, Divider, Grid, GridItem, Tabbar, TabbarItem, Group, Cell, XInput, Tab, TabItem, Swiper, SwiperItem } from 'vux'

export default {
  components: {
    GroupTitle,
    XButton,
    Divider,
    Grid,
    GridItem,
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    XHeader,
    XInput,
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  },
  data () {
    return {
    	index: 0,
     	params:{
    		nickname:'小红'
    	}
    }
  },
  methods: {
  	onItemClick (index) {
  		console.log(index);
  		
  	},
  	nicknamekeyupfn (e) {
  		var nickval=this.params.nickname;
  		if(nickval.length>11){
  			alert("不能超过11个字符")
  		}
  		
  	}
  	
  }
}
</script>

<style lang="less">
@import '../../stylesheet/reset.less';
.personaldata_wrap input::-webkit-input-placeholder{
	color:#BEBEBE;
	font-size:0.23rem;
}
.personaldata_wrap .vux-header{
	background: #2A7DAD !important;
}
.personaldata_wrap{
	width:100%;
	height:100%;
	overflow:hidden;
	/*display:flex;
	flex-direction:column;*/
	
}
.personaldata_header{
	width:100%;
	
}
.personaldata_header .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.28rem !important;
	
}
.personaldata_msg{
	padding-left:.2rem;
}
.personaldata_msg li{
	height:1rem;
	border-bottom:1px solid #eaeaea;
	display:flex;
	justify-content:space-between;
	align-items:center;
}
.personaldata_msg .touxiang_logo{
	width:.6rem;
	height:.6rem;
	border:1px solid #2A7DAD;
	border-radius:50%;
}
.personaldata_msg li>span{
	display:block;
	font-size:.26rem;
}
.personaldata_msg li>span:nth-child(2){
	display:flex;
	justify-content:space-between;
	align-items:center;
}
.personaldata_msg li>span:nth-child(2)>img{
	display:block;
}
div.persondata_savebtn{
	width:6.99rem;
	margin:auto;
	margin-top:0.3rem;
}
div.persondata_savebtn button{
	border:0;
	width:100%;
	background:#2a7dad;
	height:1.01rem;
	font-size:0.23rem;
	color:#fff;
	border-radius: 0.06rem;
}
.personaldata_wrap .weui-btn_primary{
	background:#2A7DAD !important;
}
.personaldata_wrap input.nickname{
	outline: none;
	border:0;
	text-align: right;
}
</style>