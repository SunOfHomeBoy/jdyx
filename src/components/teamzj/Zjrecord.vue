<template>
	<div class="teamzjrecord_wrap">
		<div class="teamzjrecord_content teamzjrecord_header">
			<x-header :left-options="{showBack:true,backText: ''}">组件记录</x-header>
		</div>
	    <div class="teamzjrecord_main">
	    	<ul>
	    		<li>
	    			<span>
	    				单位名称：
	    			</span>
	    			<span>
	    				四海日盛
	    			</span>
	    		</li>
	    		<li>
	    			<span>
	    				需求人数：
	    			</span>
	    			<span>
	    				20人
	    			</span>
	    		</li>
	    		
	    		<li>
	    			<span>
	    				用人时间：
	    			</span>
	    			<span>
	    				2017年04年01日
	    			</span>
	    		</li>
	    		<li>
	    			<span>
	    				项目预算：
	    			</span>
	    			<span>
	    				20万
	    			</span>
	    		</li>
	    		<li>
	    			<span>
	    				联系电话：
	    			</span>
	    			<span>
	    				20万
	    			</span>
	    		</li>
	    		<li>
	    			<span>
	    				联系邮箱：
	    			</span>
	    			<span>
	    				19100010@qq.com
	    			</span>
	    		</li>
	    		<li>
	    			<span>
	    				用人地点：
	    			</span>
	    			<span>
	    				北京市通州区北京one
	    			</span>
	    		</li>
	    		<li>
	    			<span>
	    				备注：
	    			</span>
	    			<span>
	    				20万
	    			</span>
	    		</li>
	    	</ul>
	    </div> 
	    <div class="teamzj_foot">
	    	
	    </div>
    </div>
</template>

<script>
import { XHeader } from 'vux'


export default {
  components: {
    XHeader
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
.teamzjrecord_wrap .vux-header{
	background: #2A7DAD !important;
}
.teamzjrecord_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction: column;
	overflow:hidden;
	/*justify-content:space-between;*/
}

.teamzjrecord_wrap .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.28rem !important;
}
.teamzjrecord_main ul{
	padding-left:.2rem;
}
.teamzjrecord_main ul li{
	border-bottom:1px solid #ECECEC;
	display:flex;
	align-items:center;
	font-size:.23rem;
	padding: 0.5rem 0;
}
.teamzjrecord_main ul li span:nth-child(1){
	color:#000;
}
.teamzjrecord_main ul li span:nth-child(2){
	color:#414141;
}


</style>