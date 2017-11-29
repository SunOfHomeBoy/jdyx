<template>
	<div class="banben_wrap">
		<div class="banben_content rzdw2_header">
			<x-header title="版本更新"  :left-options="{showBack:true,backText:''}"></x-header>
		</div>
		<div class="banben_content banben_main">
				<dl style="width:2.4rem;height:3.5rem;">
					<dt style="height:3rem;">
						<img src="http://i4.cfimg.com/611341/3b144d497446f9c2.png" style="width:2.4rem;height:3rem;"/>
					</dt>
					<dd style="font-size:0.23rem;color:#414141;text-align: center;">
						版本号 V1.0
					</dd>
				</dl>
			
		</div><!--中间主体-->
	    <div class="banben_content banben_foot">
	    	<p style="width:100%;text-align: center;font-size:0.23rem;color:#424242;font-family:'PingFang-SC-Regular'">已是最新版本</p>
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
@import '../../../stylesheet/reset.less';
.banben_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
	overflow:hidden;
}
.banben_content{
	width:100%;
}
div.banben_header{
	width:100%;

}
.banben_wrap .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.28rem !important;
}
.banben_wrap .vux-header{
	background: #2A7DAD !important;
}
div.banben_main{
	height:100%;
	overflow:auto;
	display:flex;
}
div.banben_main>dl{
	position:absolute;
	left:50%;
	top:50%;
	margin-left:-1.2rem;
	margin-top:-1.75rem;
}
div.banben_foot{
	height:0.59rem;position:absolute;bottom:0;
}
</style>
