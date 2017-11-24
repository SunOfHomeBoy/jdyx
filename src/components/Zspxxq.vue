<template>
	<div class="zspxxq_wrap">
		<div class="zspx_content zspx_header">
			<x-header :left-options="{showBack:true,backText: ''}">知识培训</x-header>
		</div>
		<div class="zspxxq_content zspxxq_main">
			<div class="title">
				俞永福:我们正在经历数据觉醒的时代
			</div>
			<div class="time">
				2017.2.12
			</div>
			<div class="picture">
				<img src="../../src/assets/img/login/jdtt_png.png" style="width:100%;"/>
			</div>
			<div class="direction">
				文字描述文字描述文字描述文字描述文字描述 文字描述文字描述文字描述文字描述文字描述文字 描述文字描述文字描述文字描述文字描述文字描述 文字描述文字描述文字描述文字描述。文字描述文 字描述。 文字描述文字描述文字描述文字描述文字描述 文字描述文字描述文字描述文字描述文字描述文字 描述文字描述文字。
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
    	isactive: 0,
    	tabs: [{name:'职场认证'},{name:'考试认证'},{name:'互联网'},{name:'兴趣特长'},{name:'职场认证'},{name:'兴趣特长'},{name:'职场认证'}]
    }
  },
  methods: {
  	clicktabsFn (index){
  		console.log(index,event);
  		const $ele=event.srcElement || event.target;
  		this.isactive=index;
  	}
  }
}
</script>

<style lang="less">
@import '../stylesheet/reset.less';
.zspxxq_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
	font-size:1.3rem;
}
.zspxxq_header{
	width:100%;
}
.zspxxq_wrap .vux-header{
	background:#2a7dad !important;
}

/*主体*/
div.zspxxq_main{
	padding:0 1rem;
}
div.zspxxq_main .title{
	font-size:1.2rem;
	color:#2A7DAD;
}
div.zspxxq_main .time{
	color:#8D8D8D;
	font-size:.8rem;
}
div.zspxxq_main .direction{
	font-size: .8rem;
	color:#414141;
	text-indent: 2rem;
}
	
</style>
