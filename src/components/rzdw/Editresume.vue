<template>
	<div class="JD_editresume_wrap">
		<div class="JD_editresume_content JD_editresume_header">
			<x-header :left-options="{showBack:false}">入职定位</x-header>
		</div>
		<div class="JD_editresume_content JD_editresume_main">
			<div class="JD_viewfulltimefile">
				<div class="JD_trans"></div>
				<div class="JD_smallbox"><router-link :to="{name:'Rcssxq',params:{id:1001,name:'121'}}">查看全职档案</router-link></div>
			</div>
			<div class="JD_viewparttimefile">
				<div class="JD_trans"></div>
				<div class="JD_smallbox"><router-link :to="{name:'Rcgxxq',params:{id:1001,name:'121'}}">查看兼职档案</router-link></div>
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
.JD_editresume_wrap input::-webkit-input-placeholder{
	color:#BEBEBE;
	font-size:0.29rem;
}
.JD_editresume_wrap .vux-header{
	background: #2A7DAD !important;
}
.JD_editresume_wrap .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.25rem !important;
	
}
.JD_editresume_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
	
}
.JD_editresume_header{
	width:100%;
	

}
div.JD_editresume_main{
	height: 100%;
	display:flex;
	flex-direction:column;
}
div.JD_editresume_foot{
	width:100%;
	height:4rem;
	position: absolute;
	bottom:0;
}
div.JD_viewfulltimefile{
	height:50%;
	background:url('http://i4.cfimg.com/611341/6342d711ae479079.png') no-repeat;
	background-size: cover;
	position:relative;
}
div.JD_viewfulltimefile .JD_trans{
	width:100%;
	height:100%;
	position:absolute;
	left:0;top:0;
	background:#414141;
	opacity:0.3607843137254902;

}
div.JD_viewfulltimefile .JD_smallbox{
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
div.JD_viewfulltimefile .JD_smallbox a{
	color:#2A7DAD;
}
div.JD_viewparttimefile{
	height:50%;
	background:url('http://i4.cfimg.com/611341/06330878c5c901f1.jpg') no-repeat;
	background-size: cover;
	position:relative;
}
div.JD_viewparttimefile .JD_trans{
	width:100%;
	height:100%;
	position:absolute;
	left:0;top:0;
	background:#414141;
	opacity:0.3607843137254902;

}
div.JD_viewparttimefile .JD_smallbox{
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
div.JD_viewparttimefile .JD_smallbox a{
	color:#2A7DAD;
}
</style>