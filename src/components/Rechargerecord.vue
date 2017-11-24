<template>
	<div class="rechargerecord_wrap">
		<div class="rechargerecord_content rechargerecord_header">
			<x-header :left-options="{showBack:true,backText:''}">充值记录</x-header>
		</div>
		<div class="rechargerecord_content rechargerecord_main">
			<ul class="reccord_content">
				<li>
					<div class="reccord_content_left">
						<span>微信充值到账</span>
						<span>2017-08-11 07:45:38</span>
					</div>
					<div class="reccord_content_right">
						+ 70.00
					</div>
				</li>
				<li>
					<div class="reccord_content_left">
						<span>微信充值到账</span>
						<span>2017-08-11 07:45:38</span>
					</div>
					<div class="reccord_content_right" style="color:#414141;">
						- 70.00
					</div>
				</li>
				<li>
					<div class="reccord_content_left">
						<span>微信充值到账</span>
						<span>2017-08-11 07:45:38</span>
					</div>
					<div class="reccord_content_right">
						+ 70.00
					</div>
				</li>
				<li>
					<div class="reccord_content_left">
						<span>微信充值到账</span>
						<span>2017-08-11 07:45:38</span>
					</div>
					<div class="reccord_content_right" style="color:#414141;">
						- 70.00
					</div>
				</li>
			</ul>
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
    }
  },
  methods: {
  	onItemClick (index) {
  		console.log(index);
  		
  	}
  }
}
</script>

<style lang="less">
@import '../stylesheet/reset.less';
.rechargerecord_wrap input::-webkit-input-placeholder{
	color:#BEBEBE;
	font-size:0.29rem;
}
.rechargerecord_wrap .vux-header{
	background: #2A7DAD !important;
}
.personaldata_wrap{
	width:100%;
	height:100%;
}
.personaldata_header{
	width:100%;
	/*height:0.96rem;*/
}
.personaldata_header .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.28rem !important;
	
}
.reccord_content{
	padding-left:.2rem;
}
.reccord_content li{
	height:1rem;
	border-bottom:1px solid #eaeaea;
	display:flex;
	justify-content:space-between;
}
div.reccord_content_left{
	display:flex;
	flex-direction:column;
	justify-content:center;
	
}
div.reccord_content_left>span{
	display:block;
}
div.reccord_content_left>span:nth-child(1){
	color:#424242;
	font-size:.28rem;
	
}
div.reccord_content_left>span:nth-child(2){
	color:#B4B4B4;
	font-size:0.23rem;
}
div.reccord_content_right{
	line-height: 1rem;
	padding-right:.2rem;
	color:#2A7DAD;
	font-size:.3rem;
}
</style>