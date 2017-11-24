<template>
	<div class="findpwd_wrap">
		<div class="findpwd_content findpwd_header">
			<x-header :left-options="{showBack:true,backText: ''}">注册账号</x-header>
		</div>
	    <div class="findpwd_main">
	    	<group>
				<x-input title="新密码" placeholder="请输入手机号码" :show-clear="false" placeholder-align="left" is-type="china-mobile" v-model="params.mobile">
				</x-input>
				<x-input title="确认密码" placeholder="请输入验证码" :show-clear="false" placeholder-align="left" v-model="params.captcha">
					<a slot="right" style="color:#2a7dad;font-size:0.23rem;padding-right:0.2rem;">获取验证码</a>
				</x-input>
			</group>
			
	    </div> 
	   <div style="width:75%;margin:auto;margin-top:.6rem;" @click="signupfn">
	    	<x-button type="primary" text="确定"></x-button>
	    </div>
    </div>
</template>

<script>
import { XHeader, GroupTitle, XButton, Divider, Grid, GridItem, Tabbar, TabbarItem, Group, Cell, XInput, Checker, CheckerItem } from 'vux'
import {api} from '../utils'
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
    Checker,
    CheckerItem
  },
  ready () {
  },
  methods: {
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    },
    signupfn () {
    	
    	api('/service/signup', this.params, callback => {
	  		var result=callback.data.result;
	  		if(result){
	  			this.$router.push({path:"/"});
	  		}
		})
    }
  },
  data () {
    return {
      params:{
      	registerType:"Person",
      	mobileArea:"86",
      	mobile:"",
      	password:"",
      	confirm:"",
      	captcha:"",
      	encrypt:"XXXXXX",
      	enterpriseType: 1,
      	enterpriseName:"京典一线网络技术（北京）有限公司",
      	username:"hr"
      }
    }
  }
}
</script>

<style lang="less">
@import '../stylesheet/reset.less';
.findpwd_wrap ::-webkit-input-placeholder{
	font-size:.23rem;
	color:#E5E5E5;
}
.findpwd_wrap{
	width:100%;
	height:100%;
}
.findpwd_content{
	width:100%;
}
.findpwd_wrap .vux-header{
	background: #2A7DAD !important;
}
.findpwd_wrap .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.28rem !important;
}
.findpwd_wrap .weui-btn_primary{
	background-color: #2A7DAD !important;
}
.findpwd_wrap .weui-input{
	color:#A6A6A6 !important;
	font-size: 0.23rem !important;
	font-family: 'PingFangSC-Light' !important;
}
.findpwd_wrap .weui-cells:before{
	border-top:0 !important;
}
.findpwd_wrap .weui-cells{
	margin-top:0 !important;
}
.findpwd_wrap .vux-no-group-title{
	margin-top:0 !important;
}
.findpwd_wrap .weui-cell{
	padding-top:.6rem !important;
}
.findpwd_wrap .weui-input{
	padding-left:.2rem;
}
.findpwd_wrap  .weui-label{
	color:#424242;
	font-size:.3rem;
}
</style>
