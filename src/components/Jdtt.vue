<template>
	<div class="jdtt_wrap">
		<div class="jdtt_content jdtt_header">
			<x-header :left-options="{showBack:true,backText:''}">京典头条</x-header>
		</div>
		<div class="jdtt_content jdtt_main">
			<div class="jdtt_main_tab">
				<div class="header">
					<scroller lock-y :scrollbar-x=false>
						<div class="box1">
				        	<template v-for="(it,index) in tabs">
								<div :class="['box1-item',{active:isactive==index}]" @click="clicktabsFn(index)">
									{{it.name}}
								</div>
							</template>
				        </div>
					</scroller>
				</div>
			</div>
			<div class="jdtt_main_contains">
				<pull-to :bottom-load-method="loadmore" @bottom-state-change="changebottomfn" :bottom-config="{pullText: '上拉加载',triggerText: '释放更新',loadingText: '加载中...',doneText: '加载完成',failText: '加载失败',loadedStayTime: 400,stayDistance: 50,triggerDistance: 70}" >
					<div>
						<div class="jdtt_main_contains_img">
							<img src="../../src/assets/img/login/jdtt_png.png"/>
						</div>
						<ul>
							<template v-for="(item,index) in jdtt_contents">
								<li>
							<!--	<router-link  :to="{name:'Jdttxq',params:{id:item.id}}">-->
									<dl>
										<dt>
											<img src="../../src/assets/img/photo/02.jpg" style="width:2rem;height:2rem;"/>
										</dt>
										<dd>
											<h4>{{item.title}}</h4>
											<p>
												{{item.description}}
											</p>
											<p>
												{{item.publish}}
											</p>
										</dd>
									</dl>
								<!--</router-link>-->
								</li>
							</template>
						</ul>
					</div>
				</pull-to>
			</div>
		</div>
  	</div>
  	
</template>

<script>
import { XHeader, Scroller} from 'vux'
import {api} from '../utils'
import PullTo from 'vue-pull-to'
export default {
  components: {
    XHeader,
    Scroller,
    PullTo
  },
  created () {
  	/*var bb=document.getElementsByClassName('weui_tab_bd')[0];
  	bb.style.paddingBottom=0;
  	bb.style.overflow='hidden';*/
  	var o={"articleType": "knowledge","articleLang": "cn","begin": this.pageparam.index,"limit":this.pageparam.limit}
  	api('/article/listNews', o, callback => {
  		var zspxdata=callback.data.items;
  		this.jdtt_contents=zspxdata;
       
    })
  },
  data () {
    return {
    	index: 0,
    	isactive: 0,
    	tabs: [{name:'京典头条'},{name:'京典新闻'},{name:'京典国际'},{name:'京典公益'}],
    	jdtt_contents:[],
    	pageparam:{index:1,limit:10}
    }
  },
  methods: {
  	clicktabsFn (index){
  		this.isactive=index;
  		var pinjie=index+1;
  		var knowstr="news#0"+pinjie;
  		var o={"articleType": knowstr,"articleLang": "cn","begin": 1,"limit":this.pageparam.limit};
  		//切换请求
	  	api('/article/listNews', o, callback => {
	  		var zspxdata=callback.data.items;
	  		this.jdtt_contents=zspxdata;
	    })
  	},
  	loadmore (loaded){//底部上拉时执行的方法
  		this.pageparam.index++;//页数增加
  		var pinjie=this.isactive+1;
  		var knowstr="news#0"+pinjie;
  		var o={"articleType": knowstr,"articleLang": "cn","begin": this.pageparam.index,"limit":this.pageparam.limit};
  		api('/article/listNews', o, callback => {
	  		var zspxdata=callback.data.items;
	  		for(let i=0;i<zspxdata.length;i++){
	  			this.jdtt_contents.push(zspxdata[i]);
	  		}
	  		
	  		loaded('done');
	    })
  	},
  	changebottomfn (state) {
  		if (state === 'pull' || state === 'trigger') {
          this.iconLink = '#icon-arrow-bottom';
        } else if (state === 'loading') {
          this.iconLink = '#icon-loading';
        } else if (state === 'loaded-done') {
          this.iconLink = '#icon-finish';
        }
    },
  }
}
</script>

<style lang="less">
@import '../stylesheet/reset.less';
.jdtt_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
	
}
.jdtt_header{
	width:100%;
	
}
.vux-header{
	
	background:#2a7dad !important;
}
.jdtt_wrap .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.28rem !important;
}
/*主体*/
div.jdtt_main{
	height: calc(100% - 4rem);
}
div.jdtt_main_contains{
	height:95%;
	
}
div.jdtt_main_contains ul{
	padding-left:.2rem;
	margin-top:.2rem;
}
div.jdtt_main_contains ul li{
	border-bottom:1px solid #bbbbbb;
	padding:.3rem 0;
}
div.jdtt_main_contains ul li:not(:first-child){
	margin-top:.1rem;
}
div.jdtt_main_contains ul li dl{
	display:flex;
}
div.jdtt_main_contains ul li dt{
	width:2rem;
	height:2rem;
	display:flex;
	align-items:center;
}
div.jdtt_main_contains ul li dt img{
	display:block;
}
div.jdtt_main_contains ul li dd{
	display:flex;
	flex-direction:column;
	font-size:0.23rem;
	color:#bbbbbb;
	margin-left:.2rem;
	justify-content:space-between;
}
div.jdtt_main_contains ul li dd h4{
	font-size:.3rem;
	color:#414141;
	
}
div.jdtt_main_contains_img{
	width:100%;
	
}
div.jdtt_main_contains_img img{
	width:100%;
	
}

header,div{
	box-sizing: border-box;
}
.header{
	width: 100%;
	height: 50px;
	background-color: #fff;
	overflow: hidden;
}
.box1 {
    height: 50px;
    position: relative;
    width:100%;
    display:flex;
}
.box1 .box1-item {
  flex-grow:1;
  height: 50px;
  display:inline-block;
  margin-left: 15px;
  text-align: center;
  line-height: 50px;
  color:#AFAFAF;
  font-size:0.23rem;
}
.box1 .box1-item.active{
	color: #414141;
}
.box1-item:first-child {
  margin-left: 0;
}
	/*.f-toh{
		overflow: scroll;
		white-space: nowrap;
		-webkit-overflow-scrolling: touch;
	}
	.f-hideScrollBar{
		display: flex;
		display: -webkit-flex;
		box-sizing: content-box;
		height: 100%;
		width: 100%;
		overflow-y: hidden; 
		padding-bottom: 15px;
	}
	.header{
		width: 100%;
		height: 50px;
		background-color: #fff;
		overflow: hidden;
	}
	.header .item{
		flex-shrink: 0;
		-webkit-flex-shrink: 0;
		width: 25%;
		height: 100%;
		color: #AFAFAF;
		line-height: 50px;
		text-align: center;
		text-transform: uppercase;
	}
	.header .item.active{
	
		color: #414141;
	}*/
	/*.header .item:not(:last-child){
		border-right: 1px solid rgba(0,0,0,.2);
	}*/
</style>
