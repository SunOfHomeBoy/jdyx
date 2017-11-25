<template>
	<div class="rcss_wrap">
		<loading :show="isLoading" position="absolute" text="加载中"></loading>
		<div class="rcss_content rcss_header">
			<x-header title="人才搜索" :left-options="leftcontent"><a slot="right"><img src="http://i4.cfimg.com/611341/406f3ecc5960fa87.png" style="width:.4rem;height:.4rem;" @userevent="getVal"/></a></x-header>
			<div class="rcss_choices">
				<ul>
					<li>
						<span :class="{defaultimg:!showeducationdialog,imgrotatetop:showeducationdialog}">
							<em style="padding-right:.2rem;">学历</em><a></a>
							<input type="checkbox" class="hideinput" v-model="showeducationdialog" @click="educationfn"/>
						</span>
					</li>
					<li>
						<span :class="{defaultimg:!showexperiencedialog,imgrotatetop:showexperiencedialog}">
							<em style="padding-right:.2rem;">工作经验</em><a></a>
							<input type="checkbox" class="hideinput" v-model="showexperiencedialog" @click="experiencefn"/>
						</span>
						
					</li>
					<li>
						<span :class="{defaultimgmore:!showzhiweidialog,imgrotatetopmore:showzhiweidialog}">
							<em style="padding-right:.2rem;">全部职位</em><a style="height:.23rem;"></a>
							<input type="checkbox" class="hideinput" v-model="showzhiweidialog" @click="zhiweifn"/>
						</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="rcss_content rcss_main">
			<load-more :tip="$t('正在加载')" v-show="showloadmore"></load-more>
			<!--<scroller height="-150" lock-x ref="scrollerBottom" :use-pullup=true  >-->
			<pull-to :bottom-load-method="loadmore" :top-load-method="topload" :bottom-config="{pullText: '上拉加载',triggerText: '释放更新',loadingText: '加载中...',doneText: '加载完成',failText: '加载失败',loadedStayTime: 400,stayDistance: 50,triggerDistance: 70}" >
				<div class='rcss_alloptions'>
					<ul>
						<template v-for="(item,index) in rcssdata">
							<li>
								<div class="rcss_alloptions_img">
									<img src='../../../src/assets/img/login/tx.png'/>
								</div>
								<div class="rcss_alloptions_text">
									<p><b>{{item.name}}</b><span>{{item.job}}</span></p>
									<p>{{item.direct}} | {{item.experience}} | {{item.education}}</p>
									<p>薪资 ： {{item.pay}}</p>
								</div>
								<div class="rcss_alloptions_jt">
									<router-link :to="{name:'Rcssxq',params:{id:1001,name:'121'}}"><img src="../../../src/assets/img/photo/right_jt.svg" style="display:block;"/></router-link>
								</div>
							</li>
						</template>
					</ul>
				</div>
			</pull-to>
			<!--</scroller>-->
		</div><!--中间主体-->
	    <div class="popupsex" v-show="showmask">
	    	<ul :class="{dialog_topcontent:true,popupbottom4:showeducationdialog}" v-show='showeducationdialog'>
	        	<template v-for="(it,index) in educations">
	        		<li :class="{active:isactive==index}" @click="clickeducationfn(index)">
	        			<span>{{it}}</span>
	        		</li>
	        	</template>
	        </ul>
	        <ul :class="{dialog_topcontent:true,popupbottom5:showexperiencedialog}" v-show='showexperiencedialog' style="overflow:auto;">
	        	<template v-for="(it,index) in experiences">
	        		<li :class="{active:isactive2==index}" @click="clickexperiencefn(index)">
	        			<span>{{it}}</span>
	        		</li>
	        	</template>
	        </ul>
	        <div :class="{allselects:true,heightbottom6:showzhiweidialog}" v-show="showzhiweidialog">
	        	<scroller lock-x height="9rem">
	        		<div class="select_content">
	        			<template v-for="(item,index) in alljobs">
	        				<div class="title"><span>{{item.title}}</span><span><img src="../../../src/assets/img/photo/jt_bottom.svg" style="width:.3rem;height:.3rem;"/></span></div>
							<ul>
								<checker
								    v-model="selectedjobs"
								    type="checkbox"
								    default-item-class="demo5-item"
								    selected-item-class="demo5-item-selected"
								    >
								      <checker-item v-for="(children , c_index) in item.children" :key="children.id" :value="children.id">{{children.name}}</checker-item>
								</checker>
							</ul>
	        			</template>
						
					</div>
	        	</scroller>
				<div class="resetok">
					<span @click="resetfn">重置</span>
					<span @click="confirmjobfn">确认</span>
				</div>
			</div>
	    </div>
	   
  	</div>
</template>

<script>
import { XHeader, GroupTitle, XButton, Scroller, Checker, CheckerItem, LoadMore, Loading } from 'vux'
import {api} from '../../utils'
import PullTo from 'vue-pull-to'
export default {
  components: {
  	XHeader,
    GroupTitle,
    XButton,
    Scroller,
    Checker,
    CheckerItem,
    LoadMore,
    PullTo,
    Loading
  },
  created () {
  	this.alljobs=jdyxData.rcssalljobs;
  	let condition=this.pageParams;
  	api('/search/listResume', condition, callback => {
		this.isLoading=false;
  		var data=callback.data.items;
  		this.rcssdata=data;
	})
  },
  methods: {
    onSwiperItemIndexChange (index) {
     
    },
    educationfn (){//点击学历
    	this.showexperiencedialog=false;
    	this.showzhiweidialog=false;
    	
    },
    experiencefn (){//点击工作经验
    	this.showeducationdialog=false;
    	this.showzhiweidialog=false;
    },
    zhiweifn (){
    	this.showexperiencedialog=false;
    	this.showeducationdialog=false;
    },
    clickeducationfn (index){//点击选择学历
    	this.isactive=index;
    	//选择一个,去掉弹框
    	this.showexperiencedialog=false;
    	this.showeducationdialog=false;
    	this.showzhiweidialog=false;
    	//给searchparams赋值
    	this.searchparams.education=index;
    	this.showloadmore=true;
    	api('/search/listResume',this.searchparams, callback => {
    		this.showloadmore=false;
	  		var data=callback.data.items;
	  		this.rcssdata=data;
	  		
		})
    },
    clickexperiencefn (index){//点击选择工作经验
    	//选择一个,去掉弹框
    	this.showexperiencedialog=false;
    	this.showeducationdialog=false;
    	this.showzhiweidialog=false;
    	
    	this.isactive2=index;
    	//赋值
    	this.searchparams.workYears=index;
    	this.showloadmore=true;
    	api('/search/listResume',this.searchparams, callback => {
    		this.showloadmore=false;
	  		var data=callback.data.items;
	  		this.rcssdata=data;
	  		
		})
    },
    confirmjobfn (){//点击选择职位确定
    	//点击确定,去掉弹框
    	this.showexperiencedialog=false;
    	this.showeducationdialog=false;
    	this.showzhiweidialog=false;
    	
    	this.searchparams.alljob=this.selectedjobs;
    	this.showloadmore=true;
    	api('/search/listResume',this.searchparams, callback => {
    		this.showloadmore=false;
	  		var data=callback.data.items;
	  		this.rcssdata=data;
	  		
		})
    },
    resetfn () {//重置职位
    	this.selectedjobs=[];
    },
    loadmore (loaded) {
    	let condition;
    	this.pageParams.begins++;
    	condition=this.pageParams;
    	let obj=Object.assign(condition, this.searchparams);
    	api('/search/listResume', obj, callback => {
	  		let data=callback.data.items;
	  		for(let i=0;i<data.length;i++){
	  			this.rcssdata.push(data[i]);
	  		}
	  		loaded('done');
		})
    },
    topload (loaded) {
    	this.pageParams.begins=1;
    	let condition;
    	condition=this.pageParams;
    	let obj=Object.assign(condition, this.searchparams);
    	api('/search/listResume', obj , callback => {
		  	let data=callback.data.items;
		  	this.rcssdata=data;
		  	loaded('done');
		})
    },
    getVal (msg) {
    	console.log("-=-=",msg)
    }
   
  },
  data () {
    return {
      showeducationdialog: false,
      showexperiencedialog: false,
      showzhiweidialog: false,
      isactive: 0,//学历的高亮
      isactive2: 0,//工作经验的高亮
      educations:['不限','高中以下','高中','大专','本科','博士','硕士'],
      experiences:['全部','实习生','应届生','1年或以上','2年或以上','3年或以上','4年或以上','5年以上','6年或以上','8年或以上','10年或以上'],
      leftcontent:{showBack: false},
      rcssdata:[],//列表数据
      alljobs:[],//从全部变量获取到的全部职位数据
      selectedjobs:[],//用户选择的职位
      searchparams:{"education":0,"workYears":0,"alljob":" "},
      pageParams:{begins:1,limit:20},//分页条件
      showloadmore:false,
      isLoading:true,
    }
  },
  computed: {
  	showmask () {
  		if(this.showeducationdialog || this.showexperiencedialog || this.showzhiweidialog){
  			return true;
  		}else{
  			return false;
  		}
   	},
   
  }
  
}
</script>

<style lang="less">
@import '../../stylesheet/reset.less';
.rcss_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
}
.rcss_header{
	width:100%;
	color:#fff;
	z-index:90;
	height:2rem;
}
.rcss_wrap .vux-header{
	background:#2A7DAD !important;
	height:1rem;
}
.rcss_header .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.25rem !important;
}
.rcss_main{
	position:relative;
	height:85%;

}
div.rcss_choices p{
	font-size:.2rem;
}
div.rcss_choices{
	height:1rem;
	border-bottom:1px solid #e7e7e7;
	background:#fff;
}
div.rcss_choices>ul{
	height:100%;
	display:flex;
	flex-direction:row;
	align-items: center;
}
div.rcss_choices>ul li{
	flex-grow:1;
	height:.5rem;
}
div.rcss_choices>ul li span{
	height:.5rem;
	position:relative;
}
div.rcss_choices>ul li:nth-child(2) span{
	border-left:1px solid #cacaca;
	border-right:1px solid #cacaca;
}
div.rcss_choices>ul span{
	display:flex;
	font-size:0.2rem;
	
	justify-content:center;
	align-items:center;
}
div.rcss_choices>ul span em,div.rcgx_choices>ul span img{
	display:block;
	font-style:normal;
	color:#000;
}
div.rcss_choices .jt_x{
	display:inline-block;
	width:0.18rem;
	height:0.1rem;
	background:url('../../../src/assets/img/login/jt_x.svg')
}


.rcss_alloptions>ul{
	padding-left:0.25rem;
}
.rcss_alloptions li{
	
	border-bottom:1px solid #cacaca;
	display:flex;
	flex-direction:row;
	padding:.2rem 0;
}
.rcss_alloptions li div.rcss_alloptions_img{
	 flex-grow:0.8;
	 
}
.rcss_alloptions li div.rcss_alloptions_img>img{
	display: block;
	width:1.1rem;
	height:1.1rem;
	
}
.rcss_alloptions li div.rcss_alloptions_text{
	 flex-grow:3;
	 color:#979797;
	 font-size:0.2rem;
	 padding-left:0.3rem;
}
.rcss_alloptions li div.rcss_alloptions_text p:nth-child(1){
	
}
.rcss_alloptions li div.rcss_alloptions_text p:nth-child(2){
	margin-top:0.1rem;
	margin-bottom:0.1rem;
}
.rcss_alloptions li div.rcss_alloptions_text b{
	color:#000;
	font-size:.35rem;
	display:inline-block;
	margin-right:0.25rem;
	font-weight:normal;
}
.rcss_alloptions li div.rcss_alloptions_jt{
	 flex-grow:0.3;	 
}
/*
.rcss_wrap .weui_mask{
	top:7.3rem !important;
}
.rcss_wrap .weui_dialog{
	top:52.6% !important;
	height:100% !important;
	border-radius:0 !important;
	width:100% !important;
}*/
.dialog_topcontent{
	height:0;
	overflow:hidden;
	background:#fff;
	border-top:1px solid #fff;
	font-size:0.2rem;
}
.dialog_topcontent li{	
	text-align: left;
	padding:0.3rem 0 .3rem .2rem;
}
.dialog_topcontent li.active{
	color:#2A7DAD;
	background:url('../../../src/assets/img/photo/checked.svg') no-repeat right;
	background-size:5%;
}
.dialog_topcontent li:not(:last-child){
	border-bottom:0.01rem solid #E7E7E7;
}
.allselects{
	height:0;
	overflow:hidden;
	background:#fff;
	position:relative;
}
.select_content{
	overflow:auto;
}
.select_content .title{
	font-size:0.25rem;
	display:flex;
	flex-direction:row;
	justify-content:space-between;
	align-items:center;
	padding:.2rem;
}
.select_content ul{
	display:flex;
	flex-wrap:wrap;
	padding-left:.2rem;
	font-size: .24rem;
}
.select_content ul li{
	display:inline-block;
	width:1.48rem;
	height:.6rem;
	border:1px solid #cacaca;
	border-radius:0.15rem;
	margin-bottom:0.2rem;
	margin-right:0.2rem;
	text-align: center;
	line-height:.6rem;
	
}
div.resetok{
	display:flex;
	flex-direction:row;
	width:100%;
	border-top:1px solid #6d6d6d;
	position:absolute;
	bottom:0;
	left:0;
}
div.resetok span{
	display:block;
	flex-grow:1;
	text-align: center;
	line-height: 1.2rem;
	font-size:0.23rem;
	
}
div.resetok span:nth-child(1){
	color:#2a7dad;
	background:#fff;
}
div.resetok span:nth-child(2){
	background:#2a7dad;
	color:#fff;
}
.rcss_wrap .weui-mask{
	top:7.3rem !important;
}
.rcss_wrap .weui-dialog{
	top:63% !important;
	height:100% !important;
	border-radius:0 !important;
}
/*选择**/
.demo5-item {
  display:inline-block;
	width:1.48rem;
	height:.6rem;
	border:1px solid #cacaca;
	border-radius:0.15rem;
	margin-bottom:0.2rem;
	margin-right:0.2rem;
	text-align: center;
	line-height:.6rem;
}
.demo5-item-selected {
 /* background: #ffffff url(../assets/demo/checker/active.png) no-repeat right bottom;*/
  background: #2a7dad;
  color:#fff;
  border-color:#fff;
}
/*选项三个*/
.popupsex{
	width:100%;
	height: 100%;
	background:rgba(0,0,0,0.53);
	position:absolute;
	left:0;
	top:1.94rem;
}
.popupbottom4{
	animation:heightbottom4 .25s forwards;
}
@-webkit-keyframes heightbottom4{
	0%{
		height:0
	}
	100%{
		height:7rem
	}
}
.popupbottom5{
	animation:popupbottom5 .25s forwards;
}
@-webkit-keyframes popupbottom5{
	0%{
		height:0
	}
	100%{
		height:7rem
	}
}
.heightbottom6{
	animation:heightbottom6 .6s forwards;
}
@-webkit-keyframes heightbottom6{
	0%{
		height:0
	}
	100%{
		height:10rem
	}
}
.rcss_choices a{
	display:inline-block;
	width:.25rem;
	height:.2rem;
}
span.defaultimg a{
	background:url("http://i4.cfimg.com/611341/72bdb9ffd32c8ed2.png");
}
span.imgrotatetop a{
	background:url("http://i4.cfimg.com/611341/818308d6f045382c.png");
}
div.rcss_choices>ul span.imgrotatetop em{
	color:#2A7DAD;
}
span.defaultimgmore a{
	background:url("http://i2.cfimg.com/611341/0c98d477280e8680.png");
}
span.imgrotatetopmore a{
	background:url("http://i2.cfimg.com/611341/9fb5e3e9dad03180.png");
}
div.rcss_choices>ul span.imgrotatetopmore em{
	color:#2A7DAD;
}
/*.imgrotatetop{
	animation:showrotatetop .3s forwards;
}
@-webkit-keyframes showrotatetop{
	0%{
		transform:rotate(0deg)
	}
	100%{
		transform:rotate(180deg)
	}
}*/

.selcheck{
	width:100%;
	height:100%;
}
.hideinput{
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
	opacity:0;
}
</style>
