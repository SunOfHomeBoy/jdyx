<template>
	<div class="editresume_wrap">
		<div class="editresume_content editresume_header">
			<x-header :left-options="{showBack:false}">入职定位</x-header>
		</div>
		<div class="editresume_content editresume_main">
			<div class="viewfulltimefile">
				<div class="trans"></div>
				<div class="smallbox"><router-link :to="{name:'Rcssxq',params:{id:1001,name:'121'}}">查看全职档案</router-link></div>
			</div>
			<div class="viewparttimefile">
				<div class="trans"></div>
				<div class="smallbox"><router-link :to="{name:'Rcgxxq',params:{id:1001,name:'121'}}">查看兼职档案</router-link></div>
			</div>
		</div>
  	</div>
  	
</template>
<script>
import { XHeader} from 'vux'
export default {
  components: {
    XHeader
  },
  data () {
    return {
    	index: 0
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
.editresume_wrap input::-webkit-input-placeholder{
	color:#BEBEBE;
	font-size:0.29rem;
}
.editresume_wrap .vux-header{
	background: #2A7DAD !important;
}
.editresume_wrap .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.25rem !important;
	
}
.editresume_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
	
}
.editresume_header{
	width:100%;
	

}
div.editresume_main{
	height: 100%;
	display:flex;
	flex-direction:column;
}
div.editresume_foot{
	width:100%;
	height:4rem;
	position: absolute;
	bottom:0;
}
div.viewfulltimefile{
	height:50%;
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
	width:4rem;
	height:1.5rem;
	position:absolute;
	left:50%;
	top:50%;
	margin-left:-2rem;
	margin-top:-0.75rem;
	background: #FFFFFF;
	opacity:0.8;
	border:0.1rem solid #C3C3C3;
	border-radius:0.2rem;
	text-align: center;
	line-height: 1.5rem;
	font-size:.5rem;
	
}
div.viewfulltimefile .smallbox a{
	color:#2A7DAD;
}
div.viewparttimefile{
	height:50%;
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
	width:4rem;
	height:1.5rem;
	position:absolute;
	left:50%;
	top:50%;
	margin-left:-2rem;
	margin-top:-0.75rem;
	background: #FFFFFF;
	opacity:0.8;
	border:0.1rem solid #C3C3C3;
	border-radius:0.2rem;
	text-align: center;
	line-height: 1.5rem;
	font-size:.5rem;
	
}
div.viewparttimefile .smallbox a{
	color:#2A7DAD;
}
</style>