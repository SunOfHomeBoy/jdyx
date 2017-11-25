<template>
	<div class="login_wrap">
		<div class="login_content login_header">
			<x-header :left-options="{showBack:true,backText:''}" style="position:absolute;left:0;top:0;width:100%;background:none;">
				<span slot="left" class="backhome">
					<router-link to="/">
						返回首页
					</router-link>
				
				</span>
			</x-header>
		</div>
		<div class="login_content login_main">
			<group>
				<x-input title="姓名" placeholder="请输入手机号码" :show-clear="false" placeholder-align="left" is-type="china-mobile" v-model="params.phone">
					<img slot="label" style="padding-left:.2rem;padding-right:.6rem;display:block;width: .4rem;height:.7rem;" src="http://i4.cfimg.com/611341/e44c41182b8e7e1a.png"/>
				</x-input>
				<x-input title="姓名" placeholder="请输入密码" type="password" :show-clear="false" placeholder-align="left" v-model="params.pwd">
					<img slot="label" style="padding-left:.2rem;padding-right:.6rem;display:block;width: .4rem;height:.5rem;" src="http://i4.cfimg.com/611341/3802563e344bc5f9.png"/>
				</x-input>
			</group>
			<!--<ul class="login_option">
				<li>
					<span>
						<img src="../img/login/cellphone_icon.png" style="width:0.33rem;height:0.57rem;margin-left:0.49rem;margin-top:0.17rem;"/>
					</span>
					<input type="text" class="photonum" placeholder="请输入手机号码"/>
				</li>
				<li>
					<span>
						<img src="../img/login/password_icon.png" style="width:0.39rem;height:0.46rem;margin-left:0.49rem;margin-top:0.17rem;"/>
					</span>
					<input type="text" class="passwardnum" placeholder="请输入密码"/>
				</li>
			</ul>-->
			<div class="set_option">
				<span>
					<router-link to="/Findpwd">
						忘记密码?
					</router-link>
				</span>
				<span>
					<router-link to="/Zhuce">
						个人注册!
					</router-link>
				</span>
				<span>
					企业注册!
				</span>
			</div>
			<div style="width:75%;margin:auto;margin-top:.4rem;" @click="loginbtnfn">
				<x-button type="primary">
					<span slot="default">
							登录
					</span>
				</x-button>
			</div>
			<div class="showshejiao">
				<divider>用社交平台登录</divider>
			</div>
			<div class="login_bottomthreelogo">
				<img src="../../../src/assets/img/photo/QQ.svg" style="display:block;width:.5rem;height:.5rem;"/>
				<img src="../../../src/assets/img/photo/wx.svg" style="display:block;width:.5rem;height:.5rem;margin:0 1em 0 1rem;"/>
				<img src="../../../src/assets/img/photo/wb.svg" style="display:block;width:.5rem;height:.5rem;"/>
			</div>
			<toast v-model="showPositionValue" type="text" :time="800" is-show-mask position="middle" width="2rem">{{toasttitle}}</toast>
		</div>	
  	</div>
  	
</template>

<script>
import { XHeader, GroupTitle, XButton, Divider, Grid, GridItem, Group, Cell, XInput, Toast } from 'vux'
import {api} from '../../utils'
export default {
  components: {
    GroupTitle,
    XButton,
    Divider,
    Grid,
    GridItem,
    Group,
    Cell,
    XHeader,
    XInput,
    Toast
  },
  data () {
    return {
    	index: 0,
    	params:{
    		phone:'',
    		pwd:''
    	},
    	obj:{'name':"rth"},
    	toasttitle:"此处不能为空",
    	showPositionValue:false
    }
  },
  methods: {
  	onItemClick (index) {
  		console.log(index);
  		
  	},
  	loginbtnfn () {
  		if(this.params.phone==""){
  			this.showPositionValue=true;
  			this.toasttitle="手机号码不能为空";
  			return;
  		}
  		if(this.params.pwd==""){
  			this.showPositionValue=true;
  			this.toasttitle="密码不能为空";
  			return;
  		}
  		
  		api('/service/signin', {}, callback => {
	  		var result=callback.data.result;
	  		if(result){
	  			this.$router.push({path:"/"});
	  		}
		})
  		/*if(this.params.phone==""){
  			return;
  		}
  		if(this.params.pwd==""){
  			return;
  		}
  		console.log(this.$router)*/
  		/*this.$router.back(-1);*/
  	}
  }
}
</script>

<style lang="less">
@import '../../stylesheet/reset.less';
.login_wrap input::-webkit-input-placeholder{
	color:#BEBEBE;
	font-size:0.29rem;
}
.login_wrap .weui-cell{

}
.login_wrap .weui-cells{
	margin:0 !important;
}
.login_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
	
}
.login_header{
	width:100%;
	height:4rem;
	background:url('http://i4.cfimg.com/611341/6342d711ae479079.png') no-repeat;
	background-size:cover;
	position:relative;
}
.login_wrap .vux-header{
	background:none  !important;
}
.login_wrap .vux-header .vux-header-back{
	color:#000 !important;
}
.login_wrap .vux-header .vux-header-left .left-arrow:before{
	border-color:#414141 !important;
}
div.smallheader{
	position:absolute;
	left:2%;
	top:10%;
	display:flex;
	align-items:center;
}
.login_main{
	padding:0 .2rem 0 .2rem;
}
ul.login_option{
	margin-top:0.64rem;
}
ul.login_option input{
	border:none;
	outline: 0;
	padding-left:0.67rem;
}
ul.login_option li{
	display:flex;
	flex-direction:row;
	align-items:center;
	border-bottom:1px solid #C6C6C6;
}
ul.login_option li span{
	display:block;
	width:1.31rem;
	height:0.93rem;
}
ul.login_option li:nth-child(2){
	padding-top:0.58rem;
}
div.set_option{
	width:90%;
	margin:auto;
	
	display:flex;
	justify-content:space-between;
	color:#BEBEBE;
	font-size:0.23rem;
	height:0.87rem;
	line-height:0.87rem;
}
div.set_option a{
	color:#BEBEBE;
}
div.set_option span{
	display:block;
}
.login_wrap .weui-btn_primary{
	background-color: #2A7DAD !important;
}
div.showshejiao{
	width:85%;
	margin:auto;
	margin-top:2rem;
	font-size:.23rem;
}

div.login_bottomthreelogo{
	display:flex;
	justify-content:center;
	align-items:center;
}
.login_wrap .weui-input{
	font-size: .23rem !important;
}
.login_wrap span.backhome a{
	padding-left:.4rem;
	color:#414141 !important;
}
.login_wrap .weui-cell{
	padding:.6rem .2rem;
}
</style>