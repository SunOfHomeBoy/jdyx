<template>
	<div class="zc_wrap">
		<div class="zc_content zc_header">
			<x-header :left-options="{showBack:true,backText: ''}">注册账号</x-header>
		</div>
	    <div class="zc_main">
	    	<group>
				<x-input title="姓名" placeholder="请输入手机号码" :show-clear="false" placeholder-align="left" is-type="china-mobile" v-model="params.mobile">
					<img slot="label" style="padding-left:.2rem;padding-right:.4rem;display:block;width:.4rem;height:.8rem;" src="http://i4.cfimg.com/611341/e44c41182b8e7e1a.png"/>
				</x-input>
				<x-input title="姓名" placeholder="请输入验证码" :show-clear="false" placeholder-align="left" v-model="params.captcha">
					<img slot="label" style="padding-left:.2rem;padding-right:.4rem;display:block;width: .4rem;height:.5rem;" src="http://i4.cfimg.com/611341/9bcad1fdbefcbbe4.png"/>
					<a slot="right" style="color:#2a7dad;font-size:0.23rem;padding-right:0.2rem;">获取验证码</a>
				</x-input>
				<x-input title="姓名" placeholder="请输入您的密码（6-16位）" type="password" :show-clear="false" placeholder-align="left" :min="6" :max="16" v-model="params.password">
					<img slot="label" style="padding-left:.2rem;padding-right:.4rem;display:block;width: .4rem;height:.5rem;" src="http://i4.cfimg.com/611341/6eceb837125e00db.png"/>
				</x-input>
				<x-input title="姓名" placeholder="请确认您的密码" type="password" :show-clear="false" placeholder-align="left" :equal-with="password" v-model="params.confirm">
					<img slot="label" style="padding-left:.2rem;padding-right:.4rem;display:block;width: .4rem;height:.5rem;" src="http://i4.cfimg.com/611341/94a8031fe476d419.png"/>
				</x-input>
			</group>
			<div style="margin-top:.5rem;height:.4rem;">
				<label class="mycheck">
					<div>
						<input type="checkbox"/>
						<i>
							
						</i>
					</div>
					我同意京典一线<a> 《用户协议》</a>
				</label>
				
			</div>
	    </div> 
	    <div style="width:75%;margin:auto;margin-top:2.6rem;" @click="signupfn">
	    	<x-button type="primary" text="注册"></x-button>
	    </div>
    </div>
</template>

<script>
import { XHeader, GroupTitle, XButton, Divider, Grid, GridItem, Tabbar, TabbarItem, Group, Cell, XInput, Checker, CheckerItem } from 'vux'
import {api} from '../../utils'
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
@import '../../stylesheet/reset.less';
.zc_wrap ::-webkit-input-placeholder{
	font-size:.3rem;
	color:#A6A6A6;
}
.zc_wrap{
	width:100%;
	height:100%;
}
.zc_content{
	width:100%;
}
.zc_wrap .vux-header{
	background: #2A7DAD !important;
}
.zc_wrap .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.28rem !important;
}
.zc_wrap .weui-btn_primary{
	background-color: #2A7DAD !important;
}
.zc_wrap .weui-input{
	color:#A6A6A6 !important;
	font-size: 0.23rem !important;
	font-family: 'PingFangSC-Light' !important;
}
.zc_wrap .weui-cells:before{
	border-top:0 !important;
}
.zc_wrap .weui-cells{
	margin-top:0 !important;
}
.zc_wrap .vux-no-group-title{
	margin-top:0 !important;
}
.zc_wrap .weui-cell{
	padding-top:.6rem !important;
}
.zc_wrap .weui-input{
	padding-left:.2rem;
}

.mycheck{
	display:flex;
	align-items:center;
	padding-left:.4rem;
	color:#B1B1B1;
	font-size:0.23rem;
}
.mycheck a{
	color:#49494A;
}
.mycheck>div:nth-child(1){
	width:.4rem;
	height:.4rem;
	margin-right:.6rem;
	
	position:relative;
}
.mycheck>div:nth-child(1) i{
	display:block;
	width:100%;
	height:100%;
	border:1px solid #ccc;
	border-radius:0.1rem;
	
}
.mycheck input{
	width:100%;
	height:100%;
	position:absolute;
	left:-999999rem;
}
.mycheck input:checked+i{
	background:url('http://i4.cfimg.com/611341/f3dfc674dcb418bd.png') no-repeat;
	background-size: 100%;
	border:1px solid #fff;
}
</style>
