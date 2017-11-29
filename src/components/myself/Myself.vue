<template>
	<div class="JD_myself_wrap">
		<div class="JD_myself_content JD_myself_header">
			<div class="JD_myself_header_top">
				<dl>
					<dt>
						<router-link  to="/Myself/Personaldata">
							<img src="../../../src/assets/img/login/tx2.png" style="width:1.5rem;height:1.5rem;display:block;"/>
						</router-link>
						
					</dt>
					<dd>
						{{userName}}
					</dd>
				</dl>
			</div>
			<div class="JD_myself_header_bottom">
				<div>
					<router-link to="/Myself/Hadview">
						<span style="text-align: center;">{{checked}}</span>
						<span>已查看</span>
					</router-link>
				</div>
				<div></div>
				<div>
					<router-link to="/Myself/Byview">
						<span style="text-align: center;">{{beViewed}}</span>
						<span>被查看</span>
					</router-link>
				</div>
			</div>
		</div>
		<div class="JD_myself_content JD_myself_main" >
			<group>
				<cell :title="$t('账户信息')" :link="{path:'/Myself/Accountmsg'}">
        			<img slot="icon"  style="display:block;margin-right:5px;width:.5rem;height:.5rem;" src="../../../src/assets/img/login/account information_icon.png">
      			</cell>
      			<cell :title="$t('我的收藏')" :link="{path:'/Myself/Myfavourite'}">
        			<img slot="icon"  style="display:block;margin-right:5px;width:.5rem;height:.5rem;" src="../../../src/assets/img/login/collect2_icon.png">
      			</cell>
      			<cell :title="$t('全职简历')" :link="{path:'/Myself/Accountmsg'}">
        			<img slot="icon"  style="display:block;margin-right:5px;width:.4rem;height:.5rem;" src="../../../src/assets/img/login/Full resume_icon.png">
      			</cell>
      			<cell :title="$t('兼职简历')" :link="{path:'/Myself/Accountmsg'}">
        			<img slot="icon"  style="display:block;margin-right:5px;width:.4rem;height:.5rem;" src="../../../src/assets/img/login/Part-time job resume_icon.png">
      			</cell>
      			<cell :title="$t('设置')" :link="{path:'/Myself/Sz'}">
        			<img slot="icon"  style="display:block;margin-right:5px;width:.5rem;height:.5rem;" src="../../../src/assets/img/login/set_icon.png">
      			</cell>
			</group>
		</div>	
  	</div>
  	
</template>

<script>
import { XHeader, GroupTitle, XButton, Divider, Grid, GridItem, Group, XTextarea, Cell } from 'vux'

export default {
  components: {
  	XHeader,
    GroupTitle,
    XButton,
    Divider,
    Grid,
    GridItem,
    Group,
    XTextarea,
    Cell
  },
  created () {
 
  },
  data () {
    return {
    	index: 0,
			userName:"球友07558",
			checked:"31",
			beViewed:"30"
     }
  },
  methods: {
  	onItemClick (index) {
  		console.log(index);
  		
  	}
  }
}
</script>

<style>
@import '../../stylesheet/reset.less';

.JD_myself_wrap input::-webkit-input-placeholder{
	color:#BEBEBE;
	font-size:0.29rem;
}
.JD_myself_wrap .JD_myself .vux-header{
	background: #2A7DAD !important;
}
.JD_myself_wrap{
	width:100%;
	height:100%;
}
.JD_myself_header{
	width:100%;
	background:url("../../../src/assets/img/login/zspx.png") no-repeat;
	background-size: cover;
	position:relative;
	
}
div.JD_myself_header_top{
	
}
div.JD_myself_header_top dl{
	width:1.5rem;
	
	margin:auto;
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	padding-top:1rem;
	padding-bottom:1.8rem;
}
div.JD_myself_header_top dl dt a{
	display:block;
	margin:auto;
	
}
div.JD_myself_header_top dd{
	font-size:.3rem;
	color:#2a7dad;
	text-shadow:#000 0.01rem 0.01rem 0.01rem;
	margin-top:.2rem;
	text-align: center;
}
div.JD_myself_header_bottom{
	width:100%;
	height:1rem;
	background:#484848;
	opacity:0.8;
	display:flex;
	align-items:center;
	color:#fff;
	position:absolute;
	bottom:0;
	left:0;
	font-size:0.23rem;
}
div.JD_myself_header_bottom>div span{
	color:#fff;
}
div.JD_myself_header_bottom>div:nth-child(1){
	display:flex;
	flex-direction:column;
	align-items:center;
	width:50%;
}
div.JD_myself_header_bottom>div:nth-child(1) span{
	display:block;
	
}
div.JD_myself_header_bottom>div:nth-child(2){
	width:0.0179rem;
	height:0.625rem;
	background:#fff;
}
div.JD_myself_header_bottom>div:nth-child(3){
	display:flex;
	flex-direction:column;
	align-items:center;
	width:50%;
}
div.JD_myself_header_bottom>div:nth-child(3) span{
	display:block;
}
.JD_myself_wrap .vux-label{
	font-size:0.3rem;
	padding-left:0.5rem;
}
.JD_myself_wrap .weui-cells:before{
	border-top:0 !important;
}
.JD_myself_wrap .weui-cell{
	padding:14px 15px !important;
}
</style>