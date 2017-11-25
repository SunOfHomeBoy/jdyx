<template>
	<div class="selcity_wrap">
		<div class="selcity_content selcity_header">
			<x-header :left-options="{showBack:true,backText: ''}">选择城市</x-header>
		</div>
	    <div class="selcity_main">
	    	<div class="cuurlocation">
	    		<p style="height:.8rem;line-height:.8rem;color:#949494;font-size:0.25rem;">当前定位</p>
	    		<ul>
	    			<li>
	    				<span class="district">北京</span>
	    			</li>
	    		</ul>
	    	</div>
	    	<div class="hotlocation">
	    		<p style="height:.8rem;line-height:.8rem;color:#949494;font-size:0.25rem;">热门地区</p>
	    		<ul>
	    			<li class="district">广州</li class="district"><li class="district">广州</li><li class="district">广州</li><li class="district">广州</li><li class="district">广州</li>
	    			<li class="district">广州</li class="district"><li class="district">广州</li><li class="district">广州</li><li class="district">广州</li><li class="district">广州</li>
	    			<li class="district">广州</li class="district"><li class="district">广州</li><li class="district">广州</li><li class="district">广州</li><li class="district">广州</li>
	    			<li class="district">广州</li class="district"><li class="district">广州</li><li class="district">广州</li><li class="district">广州</li><li class="district">广州</li>
	    		</ul>
	    	</div>
	    	<div class="otherlocation">
	    		<p style="height:.8rem;line-height:.8rem;color:#949494;font-size:0.25rem;">其他地区</p>
	    		<ul>
	    			<li class="district">广州</li class="district"><li class="district">广州</li><li class="district">广州</li><li class="district">广州</li><li class="district">广州</li>
	    			<li class="district">广州</li class="district"><li class="district">广州</li><li class="district">广州</li><li class="district">广州</li><li class="district">广州</li>
	    			<li class="district">广州</li class="district"><li class="district">广州</li><li class="district">广州</li><li class="district">广州</li><li class="district">广州</li>
	    			<li class="district">广州</li class="district"><li class="district">广州</li><li class="district">广州</li><li class="district">广州</li><li class="district">广州</li>
	    		</ul>
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
  ready () {
  },
  methods: {
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
@import '../../stylesheet/reset.less';

.selcity_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction: column;
	overflow:hidden;
	/*justify-content:space-between;*/
}
.selcity_content{
	width:100%;
}
div.selcity_header{
	/*height:3.8rem;*/
}
.selcity_wrap .vux-header{

	background: #2A7DAD !important;
}
.selcity_wrap .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.28rem !important;
}
div.selcity_main{
	font-size:0.23rem;
	padding-left:.2rem;
	overflow:auto;
}
.hotlocation ul{
	display:flex;
}
.selcity_main ul{
	display:flex;
	flex-wrap:wrap;
}
.district{
	display:block;
	border:1px solid #cacaca;
	padding:0.15rem .5rem 0.15rem .5rem;
	color:#414141; 
	font-size:0.23rem;
	border-radius:0.2rem;
	margin-right:.2rem;
	margin-bottom:0.2rem;
}
</style>
