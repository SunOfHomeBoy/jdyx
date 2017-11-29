<template>
	<div class="JD_evaluate_wrap">
		<div class="JD_evaluate_content JD_evaluate_header">
			<x-header :left-options="{showBack:true,backText: ''}">我要评价<a slot="right">提交</a></x-header>
		</div>
		<div class="JD_evaluate_content JD_evaluate_main">
			<group>
				<x-textarea :placeholder="$t('对于京典一线的评价')" :show-counter="false" :rows="1" :height="200"></x-textarea>
			</group>
		</div>	
  	</div>
  	
</template>

<script>
import { XHeader, GroupTitle, XButton, Divider, Grid, GridItem, Group, XTextarea } from 'vux'

export default {
  components: {
  	XHeader,
    GroupTitle,
    XButton,
    Divider,
    Grid,
    GridItem,
    Group,
    XTextarea
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
@import '../../stylesheet/reset.less';
.JD_evaluate_wrap input::-webkit-input-placeholder{
	color:#BEBEBE;
	font-size:0.29rem;
}

.JD_evaluate_wrap .vux-header{
	background: #2A7DAD !important;
}
.JD_evaluate_wrap  .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.28rem !important;
}
.JD_evaluate_wrap .vux-x-textarea{
	border:0.01rem solid #C5C5C5;
}
.JD_evaluate_wrap{
	width:100%;
	height:100%;
}
.JD_evaluate_header{
	width:100%;
	
}
.JD_evaluate_main{
	width:95%;
	margin:auto;
	margin-top:.4rem;
}
</style>