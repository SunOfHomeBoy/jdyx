<template>
	<div class="selectresume_wrap">
		<div class="selectresume_content editresume_header">
			<x-header :left-options="{backText: ''}">入职定位</x-header>
		</div>
		<div class="selectresume_content selectresume_main">
			<div class="viewfulltimefile">
				<div class="trans"></div>
				<div class="smallbox">编辑全职档案</div>
			</div>
			<div class="viewparttimefile">
				<div class="trans"></div>
				<div class="smallbox">编辑兼职档案</div>
			</div>
		</div>	
  	</div>
  	
</template>

<script>
import { XHeader } from 'vux'

export default {
  components: {
    XHeader
  },
  data () {
    return {
    	index: 0,
    	list: obj
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

.selectresume_wrap input::-webkit-input-placeholder{
	color:#BEBEBE;
	font-size:0.29rem;
}
.selectresume_wrap .vux-header{
	background: #2A7DAD !important;
}
.selectresume_wrap{
	width:100%;
	height:100%;
	/*display:flex;
	flex-direction:column;*/
	
}
.selectresume_header{
	width:100%;
	height:3.8rem;

}
div.selectresume_main{
	display:flex;
	flex-direction:column;
}

div.viewfulltimefile{
	height:20rem;
	background:url('http://i4.cfimg.com/611341/6342d711ae479079.png') no-repeat;
	background-size: cover;
	position:relative;
}
div.viewfulltimefile .trans{
	width:100%;
	height:100%;
	position:absolute;
	left:0;top:0;
	background:#414141;
	opacity:0.3607843137254902;

}
div.viewfulltimefile .smallbox{
	width:15rem;
	height:4.5rem;
	position:absolute;
	left:7.5rem;
	top:7rem;
	background: #FFFFFF;
	opacity:0.8;
	border:0.04rem solid #C3C3C3;
	border-radius:0.2rem;
	text-align: center;
	line-height: 4.5rem;
	font-size:3rem;
	color:#2A7DAD;
}
div.viewparttimefile{
	height:20rem;
	background:url('http://i4.cfimg.com/611341/06330878c5c901f1.jpg') no-repeat;
	background-size: cover;
	position:relative;
}
div.viewparttimefile .trans{
	width:100%;
	height:100%;
	position:absolute;
	left:0;top:0;
	background:#414141;
	opacity:0.3607843137254902;

}
div.viewparttimefile .smallbox{
	width:15rem;
	height:4.5rem;
	position:absolute;
	left:7.5rem;
	top:7rem;
	background: #FFFFFF;
	opacity:0.8;
	border:0.04rem solid #C3C3C3;
	border-radius:0.2rem;
	text-align: center;
	line-height: 4.5rem;
	font-sizE:3rem;
	color:#2A7DAD;
}
</style>