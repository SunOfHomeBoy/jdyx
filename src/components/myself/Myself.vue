<template>
	<div class="myself_wrap">
		<div class="myself_content myself_header">
			<div class="myself_header_top">
				
				<dl>
					<dt>
						<router-link  to="/Myself/Personaldata">
							<img src="../../../src/assets/img/login/tx2.png" style="width:1.5rem;height:1.5rem;display:block;"/>
						</router-link>
						
					</dt>
					<dd>
						球友07558
					</dd>
				</dl>
			</div>
			<div class="myself_header_bottom">
				<div>
					<router-link to="/Myself/Hadview">
						<span style="text-align: center;">30</span>
						<span>已查看</span>
					</router-link>
				</div>
				<div></div>
				<div>
					<router-link to="/Myself/Byview">
						<span style="text-align: center;">30</span>
						<span>被查看</span>
					</router-link>
				</div>
			</div>
		</div>
		<div class="myself_content myself_main" >
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

.myself_wrap input::-webkit-input-placeholder{
	color:#BEBEBE;
	font-size:0.29rem;
}
.myself_wrap .myself .vux-header{
	background: #2A7DAD !important;
}
.myself_wrap{
	width:100%;
	height:100%;
}
.myself_header{
	width:100%;
	background:url("../../../src/assets/img/login/zspx.png") no-repeat;
	background-size: cover;
	position:relative;
	
}
div.myself_header_top{
	
}
div.myself_header_top dl{
	width:1.5rem;
	
	margin:auto;
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	padding-top:1rem;
	padding-bottom:1.8rem;
}
div.myself_header_top dl dt a{
	display:block;
	margin:auto;
	
}
div.myself_header_top dd{
	font-size:.3rem;
	color:#2a7dad;
	text-shadow:#000 0.01rem 0.01rem 0.01rem;
	margin-top:.2rem;
	text-align: center;
}
div.myself_header_bottom{
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
div.myself_header_bottom>div span{
	color:#fff;
}
div.myself_header_bottom>div:nth-child(1){
	display:flex;
	flex-direction:column;
	align-items:center;
	width:50%;
}
div.myself_header_bottom>div:nth-child(1) span{
	display:block;
	
}
div.myself_header_bottom>div:nth-child(2){
	width:0.0179rem;
	height:0.625rem;
	background:#fff;
}
div.myself_header_bottom>div:nth-child(3){
	display:flex;
	flex-direction:column;
	align-items:center;
	width:50%;
}
div.myself_header_bottom>div:nth-child(3) span{
	display:block;
}
.myself_wrap .vux-label{
	font-size:0.3rem;
	padding-left:0.5rem;
}
.myself_wrap .weui-cells:before{
	border-top:0 !important;
}
.myself_wrap .weui-cell{
	padding:14px 15px !important;
}
</style>