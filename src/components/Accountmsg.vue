<template>
	<div class="accountmsg_wrap">
		<div class="accountmsg_content accountmsg_header">
			<x-header :left-options="{showBack: true,backText:''}">账户信息<a slot="right" @click="morefn"><router-link to="/Myself/Accountmsg/Rechargerecord">记录</router-link></a></x-header>
		</div>
	    <div class="accountmsg_main">
	    	<div style="margin-top:.3rem;">
	    		<img src="../../src/assets/img/login/388238896781713958.png" style="width:2rem;height:2rem;display:block;margin:auto;"/>
	    	</div>
	    	<div style="text-align: center;margin-top:.1rem;color:#424242;font-size:.3rem;">
	    		我的零钱
	    	</div>
	    	<div style="text-align: center;">
	    		<div style="font-size:1rem;">￥59.00</div>
	    	</div>
	    	<div class="accountmsg_btn">
	    		<router-link to="/Myself/Accountmsg/Recharge">
	    			<button class="rechargebtn">充值</button>
	    		</router-link>
	    		<router-link to="/Myself/Accountmsg/Importmoney">
	    			<button class='drawbtn'>提现</button>
	    		</router-link>
	    	</div>
	    </div> 
    </div>
</template>

<script>
import { XHeader, GroupTitle, XButton, Divider, Grid, GridItem, Tabbar, TabbarItem, Group, Cell, XInput } from 'vux'


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
    XInput
  },
  created () {
  	
  },
  methods: {
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    },
    morefn () {
    	
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
@import '../stylesheet/reset.less';


.accountmsg_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction: column;
	overflow:hidden;
	/*justify-content:space-between;*/
}
.accountmsg_header{
	/*height:3.8rem;*/
}
.accountmsg_header .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.28rem !important;
	
}
.accountmsg_wrap .vux-header{
	background:#2A7DAD !important;
}
.accountmsg_content{
	width:100%;
}
div.accountmsg_main{
	font-size:0.23rem;
}
.accountmsg_btn{
	width:90%;
	margin:auto;
	margin-top:0.23rem;
	display:flex;
	flex-direction:column;
	align-items:center;
}
.accountmsg_btn>a{
	width:100%;
}
.accountmsg_btn button.rechargebtn{
	width:100%;
	height:1rem;
	background:#2a7dad;
	border:0;
	color:#fff;
	font-size: .23rem;
	border-radius:0.1rem;
}
.accountmsg_btn button.drawbtn{
	width:100%;
	height:1rem;
	background:#d7e3e3;
	border:1px solid #2a7dad;
	margin-top:0.5rem;
	font-size: .23rem;
	border-radius:0.1rem;
	color:#000;
}
</style>
