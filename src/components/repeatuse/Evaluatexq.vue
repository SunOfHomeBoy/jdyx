<template>
	<div class="JD_Evaluatexq_wrap">
		<div class="JD_Evaluatexq_content JD_Evaluatexq_header">
			<x-header title="评价详情" :left-options="leftcontent"><a slot="right"><img src="../../../src/assets/img/login/seek2_icon.png" style="width:.4rem;height:.4rem;"/></a></x-header>
		</div>
		<div class="JD_Evaluatexq_main">
			<pull-to :bottom-load-method="loadmore"  :bottom-config="{pullText: '上拉加载',triggerText: '释放更新',loadingText: '加载中...',doneText: '加载完成',failText: '加载失败',loadedStayTime: 400,stayDistance: 50,triggerDistance: 70}" >
				<div class="JD_evaluate_obj">
					<div>
						<img src='../../../src/assets/img/login/tx.png'/>
					</div>
					<div>
						<p><b>看电影</b><span class="JD_isapprove">已认证</span></p>
						<p>21</p>
					</div>
					<div>
						<span class="JD_like"></span><i>20</i>
					</div>
				</div>
				<div class="JD_evaluate_list">
					<ul>
						<template v-for="i in 10">
							<li>
								<div>
									<p class="JD_title">
										<img src="../../../src/assets/img/login/tx.png" class="JD_listImg"/>李**
									</p>
									<p class="JD_content">
										我喜欢看电影，无论什么类型的电影都可以接受，什么都可以接受
									</p>
								</div>
								<div>
									2017-10-10
								</div>
							</li>
						</template>
					</ul>
					
				</div>
			</pull-to>
		</div>
	</div>
</template>
<script>
import { XHeader} from 'vux'
import PullTo from 'vue-pull-to'
import {api} from '../../utils'
export default {
  components: {
  	XHeader,
  	PullTo
  },
  created () {
  	//从全局变量中获取到全部职位
  	this.alljobs=jdyxData.rcssalljobs;
  	var pageParam=this.pageparams;
  	api('/share/listParttime', pageParam, callback => {
	  	var data=callback.data.items;
	  	this.rcgx_contens=data;
	})
  	
  },
  data () {
    return {
    	leftcontent: {showBack: true,backText:''}
    }
  },
  methods: {
    loadmore (loaded) {
    	
    }
    
  },
  computed: {
  	
  }
}
</script>
<style>
@import '../../stylesheet/reset.less';
.JD_Evaluatexq_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
	
}
.JD_Evaluatexq_header{
	width:100%;
	color:#fff;
	z-index:90;
}
.JD_Evaluatexq_wrap .vux-header{
	background:#2A7DAD !important;
}
.JD_Evaluatexq_header .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.28rem !important;
	
}
.JD_Evaluatexq_main{
	width:100%;
	height:100%;
}
div.JD_evaluate_obj{
	display:flex;
	height:1.2rem;
	border-bottom:.01rem solid #DFDFDF;
	padding:.2rem 0;
	padding-left:.4rem;
}
div.JD_evaluate_obj>div:nth-child(1){
	flex-grow:0.2;
}
div.JD_evaluate_obj>div:nth-child(1) img{
	width:1.2rem;
	height:1.2rem;
}
div.JD_evaluate_obj>div:nth-child(2){
	font-size:.23rem;
	flex-grow:0.8;
	display:flex;
	flex-direction: column;
	justify-content:space-between;
	padding:.1rem 0;
}
div.JD_evaluate_obj>div:nth-child(2) b{
	font-size:.32rem;
}
div.JD_evaluate_obj>div:nth-child(2) .JD_isapprove{
	color:#2a7dad;
	font-size:.23rem;
	border:1px solid #2a7dad;
	padding:0.02rem 0.06rem;
	border-radius: 0.2rem;
	vertical-align:middle;
}
div.JD_evaluate_obj>div:nth-child(3){
	flex-grow:0.2;
	font-size:.23rem;
	display:flex;
	align-items: center;
}
div.JD_evaluate_obj>div:nth-child(3) i{
	display:block;
}
div.JD_evaluate_obj>div:nth-child(3) span.JD_like{
	display:block;
	width: .4rem;
	height: .4rem;
	margin-right: 0.22rem;
	background-size: 10%;
	background:url('../../../src/assets/img/photo/fav.svg') no-repeat;
}
div.JD_evaluate_list li{
	border-bottom:.1rem solid #F5F5F5;
	font-size:.23rem;
	display:flex;
	color:#979797;
	padding:.2rem;
}
div.JD_evaluate_list li .JD_title{
	display:flex;
	align-items: center;
	color:#414141;
}
div.JD_evaluate_list li .JD_content{
	line-height: .4rem;
	padding-top:.2rem;
}
div.JD_evaluate_list li>div:nth-child(2){
	width:2rem;
	text-align: center;
}
div.JD_evaluate_list li .JD_listImg{
	width:.6rem;
	height:.6rem;
	margin-right:.2rem;
}

</style>