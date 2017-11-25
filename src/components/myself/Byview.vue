<template>
	<div class="byview_wrap">
		<div class="byview_content byview_header">
			<x-header :left-options="{showBack:true,backText:''}">被查看</x-header>
		</div>
	    <div class="byview_main" style="height:100%;">
	    	<pull-to :bottom-load-method="loadmore" :bottom-config="{pullText: '上拉加载',triggerText: '释放更新',loadingText: '加载中...',doneText: '加载完成',failText: '加载失败',loadedStayTime: 400,stayDistance: 50,triggerDistance: 70}" >
		    	<group>
		    		<template v-for="(item,index) in lists">
		    			<cell  :link="{path:'/Rcgx/Rcgxxq/12'}">
			    		  	<span slot="title">{{ item.name }}</span>
			    		  	<span slot="inline-desc">{{ item.viewtime}}</span>
					        <img slot="icon" style="display:block;margin-right:2px;width:1.2rem;" src="../../../src/assets/img/login/tx.png">
					    </cell>
		    		</template>
	    		</group>
		    </pull-to>
		   
	    </div> 
    </div>
</template>

<script>
import { XHeader, GroupTitle, XButton, Divider, Grid, GridItem, Tabbar, TabbarItem, Group, Cell, XInput } from 'vux'
import {api} from '../../utils'
import PullTo from 'vue-pull-to'
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
    PullTo
  },
  created (){
  	api('/member/listWho', {}, callback => {
  		var hadviewdata=callback.data.items;
  		console.log(hadviewdata);
  		this.lists=hadviewdata;
       
    })
  },
  ready () {
  },
  methods: {
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    },
    loadmore (loaded) {
    	api('/member/listWho', {}, callback => {
	  		var hadviewdata=callback.data.items;
	  		for(let i=0;i<hadviewdata.length;i++){
	  			this.lists.push(hadviewdata[i]);
	  		}
       		loaded('done');
    	})
    }
  },
  data () {
    return {
    	jj: '11111111111111',
    	lists:[]
    }
  }
}
</script>

<style lang="less">
@import '../../stylesheet/reset.less';

.byview_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
}

.byview_wrap .vux-header{
	background: #2A7DAD !important;
}
.byview_wrap .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.28rem !important;
}
.byview_content{
	width:100%;
}
.byview_wrap .vux-cell-primary{
	padding-left:.2rem !important;
	padding-top:0.2rem;
}
.byview_wrap .weui-cells{
	margin-top:0 !important;
}
.byview_wrap .vux-label-desc{
	color:#ccc !important;
}
.byview_wrap .vux-label{
	font-size:.34rem;
}
.byview_wrap .weui-cells::before{
	border:0 !important;
}

</style>
