<template>
	<div class="JD_rcgx_wrap">
		<loading :show="isLoading" position="absolute" text="加载中"></loading>
		<div class="JD_rcgx_content JD_rcgx_header">
			<x-header title="人才共享" :left-options="leftcontent"><a slot="right"><img src="http://i4.cfimg.com/611341/406f3ecc5960fa87.png" style="width:.4rem;height:.4rem;"/></a></x-header>
			<div class="JD_rcgx_choices">
				<ul>
					<li>
						<span style="position:relative;" :class="{JD_defaultimg:!showsexdialog,JD_imgrotatetop:showsexdialog}">
							<em style="padding-right:0.2rem;">性别</em><a></a>
							<input type="checkbox" class="JD_hideinput" v-model="showsexdialog" @click="sexfn"/>
						</span>
					</li>
					<li>
						<span style="position:relative;" :class="{JD_defaultimg:!showagedialog,JD_imgrotatetop:showagedialog}">
							<em style="padding-right:0.2rem;">年龄</em><a></a>
							<input type="checkbox" class="JD_hideinput" v-model="showagedialog" @click="agefn"/>
						</span>
					</li>
					<li>
						<span style="position:relative;" :class="{JD_defaultimgmore:!showzhiweidialog,JD_imgrotatetopmore:showzhiweidialog}">
							<em style="padding-right:0.2rem;">全部职位</em><a style="height:.23rem;"></a>
							<input type="checkbox" class="JD_hideinput" v-model="showzhiweidialog" @click="zhiweifn"/>
						</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="JD_rcgx_content JD_rcgx_main" >
			<load-more :tip="$t('正在加载')" v-show="showloadmore"></load-more>
			<!--<scroller height="-150" lock-x ref="scrollerBottom" :use-pullup=true  >-->
			<pull-to :top-load-method="topload" :bottom-load-method="loadmore" :bottom-config="{pullText: '上拉加载',triggerText: '释放更新',loadingText: '加载中...',doneText: '加载完成',failText: '加载失败',loadedStayTime: 400,stayDistance: 50,triggerDistance: 70}" >
				<div class='JD_rcgx_alloptions'>
					<ul>
						<template v-for="(item,index) in rcgx_contens">
							<li>
								<div class="JD_rcgx_top">
									<div class="JD_rcgx_alloptions_img">
										<img src='../../../src/assets/img/login/tx.png'/>
									</div>
									<div class="JD_rcgx_alloptions_text">
										<p><b>{{item.title}}</b>  <span class="JD_isapprove">已认证</span></p>
										<p>{{item.direct}} {{item.name}}</p>
										<p>服务:<span style="color:#F86666;">{{item.count}}</span>/小时     距您:<span style="color:#F86666;">{{item.distance}}</span></p>
										<p>{{item.remark}}</p>
									</div>
									<div class="JD_rcgx_alloptions_jt">
										<!--<router-link to="/components/Rcgxxq/12"><img src="../../src/assets/img/photo/right_jt.svg" style="display:block;margin-top:5rem;"/></router-link>-->
										<router-link :to="{name:'Rcgxxq',params:{id:1001,name:'121'}}"><img src="../../../src/assets/img/photo/right_jt.svg" style="display:block;"/></router-link>
									</div>
								</div>
								<div class="JD_rcgx_bottom">
									<div class="JD_rcgx_like">
										<span :class="{JD_nolike:item.havelike==0,JD_havelike:item.havelike==1}" @click="clicklikefn"></span><i>20</i>
									</div>
									<div class="JD_rcgx_comment">
										<router-link :to="{name:'Evaluatexq',params:{id:111}}">
											<span></span><i>20</i>
										</router-link>
										
									</div>
									<div class="JD_rcgx_favorite">
										<span :class="{JD_nofav:item.havefav==0,JD_havefav:item.havefav==1}" :data-index="item.articleID" @click="clickfavfn"></span><i>20</i>
									</div>
								</div>
							</li>
						</template>
					</ul>
				</div>
			</pull-to>
			
		</div><!--中间主体-->
	    <div class="JD_popupsex" v-show="showmask">
	    	<ul :class="{JD_dialog_topcontent:true,JD_popupbottom:showsexdialog}" v-show='showsexdialog'>
	        	<template v-for="(it,index) in sexs">
	        		<li :class="{JD_active:isactive==index}" @click="clicksexfn(index)">
	        			<span>{{it}}</span>
	        		</li>
	        	</template>
	        </ul>
	        <ul :class="{JD_dialog_topcontent:true,JD_popupbottom1:showagedialog}" v-show='showagedialog'>
	        	<template v-for="(it,index) in ages">
	        		<li :class="{JD_active:isactive2==index}" @click="clickagefn(index)">
	        			<span>{{it}}</span>
	        		</li>
	        	</template>
	        </ul>
	        <div :class="{JD_allselects:true,JD_heightbottom2:showzhiweidialog}" v-show="showzhiweidialog">
	        	<scroller lock-x height="9rem">
	        		<div class="JD_select_content">
						<template v-for="(item,index) in alljobs">
	        				<div class="JD_title"><span>{{item.title}}</span><span><img src="../../../src/assets/img/photo/jt_bottom.svg" style="width:.3rem;height:.3rem;"/></span></div>
							<ul>
								<checker
								    v-model="selectedjobs"
								    type="checkbox"
								    default-item-class="JD_demo5-item"
								    selected-item-class="JD_demo5-item-selected"
								    >
								      <checker-item v-for="(children , c_index) in item.children" :key="children.id" :value="children.id">{{children.name}}</checker-item>
								</checker>
							</ul>
	        			</template>
					</div>
	        	</scroller>
				<div class="JD_resetok">
					<span @click="resetfn">重置</span>
					<span @click="confirmjobfn">确认</span>
				</div>
			</div>
	    </div>
	    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask position="middle" width="2rem">{{toasttitle}}</toast>
  	</div>
  	
</template>

<script>
import { XHeader, GroupTitle, XButton, Grid, GridItem, Group, Scroller, Checker, CheckerItem, LoadMore, Loading, Toast } from 'vux'
import PullTo from 'vue-pull-to'
import {api} from '../../utils'
export default {
  components: {
  	XHeader,
    GroupTitle,
    XButton,
    Grid,
    GridItem,
    Group,
    Scroller,
    LoadMore,
    Checker,
    CheckerItem,
    PullTo,
    Loading,
    Toast
  },
  created () {
  	//从全局变量中获取到全部职位
  	this.alljobs=jdyxData.rcssalljobs;
  	var pageParam=this.pageparams;
  	api('/share/listParttime', pageParam, callback => {
  		this.isLoading=false;
	  	var data=callback.data.items;
	  	this.rcgx_contens=data;
	})
  	
  },
  data () {
    return {
    	showagedialog: false,
    	showsexdialog: false,
    	showzhiweidialog: false,
    	sexs:['不限','男','女'],
    	ages:['不限','20-30','30-40','40-50'],
    	isactive: 0,
    	isactive2: 0,
    	leftcontent: {showBack: false,backText:''},
    	rcgx_contens:[],
    	showloadmore:false,
    	alljobs:[],//全部职位
    	selectedjobs:[],
    	searchparams:{"sex":0,"age":0,"alljob":" "},
    	pageparams:{"begins":1,"limit":20},
    	isLoading:true,
    	toasttitle:"",
    	showPositionValue:false
    }
  },
  methods: {
    sexfn (){
    	this.showagedialog=false;
    	this.showzhiweidialog=false;
    },
    agefn (){
    	this.showsexdialog=false;
    	this.showzhiweidialog=false;
    },
    zhiweifn (){
    	this.showsexdialog=false;
    	this.showagedialog=false;
    },
    clicksexfn (index){
    	this.isactive=index;
    	//去掉所有弹框
    	this.showsexdialog=false;
    	this.showagedialog=false;
    	this.showzhiweidialog=false;
    	//赋值
    	this.searchparams.sex=index;
    	this.showloadmore=true;
    	this.pageparams.begins=1;
    	api('/share/listParttime',this.searchparams, callback => {
    		this.showloadmore=false;
	  		var data=callback.data.items;
	  		this.rcgx_contens=data;
	  		
		})
    },
    clickagefn (index){
    	this.isactive2=index;
    	//去掉所有弹框
    	this.showsexdialog=false;
    	this.showagedialog=false;
    	this.showzhiweidialog=false;
    	//赋值
    	this.searchparams.age=index;
    	this.showloadmore=true;
    	api('/share/listParttime',this.searchparams, callback => {
    		this.showloadmore=false;
	  		var data=callback.data.items;
	  		this.rcgx_contens=data;
	  		
		})
    },
    confirmjobfn (){//点击选择职位确定
    	//点击确定,去掉弹框
    	this.showexperiencedialog=false;
    	this.showeducationdialog=false;
    	this.showzhiweidialog=false;
    	
    	this.searchparams.alljob=this.selectedjobs;
    	this.showloadmore=true;
    	api('/share/listParttime',this.searchparams, callback => {
    		this.showloadmore=false;
	  		var data=callback.data.items;
	  		this.rcssdata=data;
	  		
		})
    },
    resetfn () {//重置职位
    	this.selectedjobs=[];
    },
    loadmore (loaded){
    	this.pageparams.begins++;
    	api('/share/listParttime', this.pageparams, callback => {
	  		var data=callback.data.items;
	  		for(let i=0;i<data.length;i++){
	  			this.rcgx_contens.push(data[i]);
	  		}
	  		loaded('done');
		})
    },
    topload (loaded) {
    	this.pageparams.begins=1;
    	api('/share/listParttime', this.pageparams, callback => {
		  	var data=callback.data.items;
		  	this.rcgx_contens=data;
		  	loaded('done');
		})
    },
    clicklikefn (e){//点赞
    	var el=e.srcElement || e.target;
    	var propId=el.getAttribute("data-index");
    	var nextEl=el.nextSibling;
    	if(el.getAttribute("class").indexOf('JD_havelike')>-1){
    		this.showPositionValue=true;
    		this.toasttitle="已收藏";
    		/*api('/share/atParttime',{id:propId}, callback => {
	    		var result=callback.data.result;
	    		if(result){
	    			el.removeAttribute("class","havelike");
	    			el.setAttribute("class","nolike");
	    			nextEl.innerText=--nextEl.innerText;
	    		}
			})*/
    	}else{
    		api('/share/atParttime',{id:propId}, callback => {
	    		var result=callback.data.result;
	    		if(result){
	    			el.removeAttribute("class","JD_nolike");
	    			el.setAttribute("class","JD_havelike");
	    			nextEl.innerText=++nextEl.innerText;
	    		}
		  		
			})
    	}
    },
    clickfavfn (e) {
    	var el=e.srcElement || e.target;
    	var propId=el.getAttribute("data-index");
    	var nextEl=el.nextSibling;
    	if(el.getAttribute("class").indexOf('JD_havefav')>-1){
    		api('/share/collectParttime',{id:propId}, callback => {
	    		var result=callback.data.result;
	    		if(result){
	    			el.removeAttribute("class","JD_havefav");
	    			el.setAttribute("class","JD_nofav");
	    			nextEl.innerText=--nextEl.innerText;
	    		}
			})
    	}else{
    		api('/share/collectParttime',{id:propId}, callback => {
	    		var result=callback.data.result;
	    		if(result){
	    			el.removeAttribute("class","JD_nofav");
	    			el.setAttribute("class","JD_havefav");
	    			nextEl.innerText=++nextEl.innerText;
	    		}
		  		
			})
    	}
    	
    }
  },
  computed: {
  	showmask () {
  		if(this.showagedialog || this.showsexdialog || this.showzhiweidialog){
  			return true;
  		}else{
  			return false;
  		}
  	}
  }
}
</script>

<style lang="less">
@import '../../stylesheet/reset.less';
.JD_rcgx_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
	
}
.JD_rcgx_header{
	width:100%;
	height:2rem;
	color:#fff;
	z-index:90;
}
.JD_rcgx_wrap .vux-header{
	background:#2A7DAD !important;
	height:1rem;
}
.JD_rcgx_header .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.25rem !important;
	
}
.JD_rcgx_main{
	position:relative;
	height:85%;
	/*height:calc(100% - 1.81rem);
	overflow-y:scroll;
	overflow-x: hidden;*/
}
div.JD_rcgx_choices{
	height:1rem;
	border-bottom:1px solid #e7e7e7;
	color:#000;
	background:#fff;
}
div.JD_rcgx_choices>ul{
	height:100%;
	display:flex;
	flex-direction:row;
	align-items: center;
}
div.JD_rcgx_choices>ul li{
	flex-grow:1;
	height:.5rem;
}
div.JD_rcgx_choices>ul li span{
	height:.5rem;
}
div.JD_rcgx_choices>ul li:nth-child(2) span{
	border-left:1px solid #cacaca;
	border-right:1px solid #cacaca;
}
div.JD_rcgx_choices>ul span{
	display:flex;
	font-size:0.2rem;
	justify-content:center;
	align-items:center;
}
div.JD_rcgx_choices>ul span em,div.JD_rcgx_choices>ul span img{
	display:block;
	font-style:normal;
}
div.JD_rcgx_choices .JD_jt_x{
	display:inline-block;
	width:0.18rem;
	height:0.1rem;
	background:url('../../../src/assets/img/login/jt_x.svg')
}
.JD_rcgx_alloptions{
	font-size:0.8rem;
}
.JD_rcgx_alloptions li{
	padding-left:0.25rem;
	border-bottom:1px solid #cacaca;
	display:flex;
	flex-direction:column;
	padding-top:.1rem;
	
}
.JD_rcgx_alloptions li div.JD_rcgx_top{
	display:flex;
	flex-direction:row;
	padding-bottom:0.6rem;
}
.JD_rcgx_alloptions li div.JD_rcgx_alloptions_img{
	 flex-grow:0.8;
	 
}
.JD_rcgx_alloptions li div.JD_rcgx_alloptions_img>img{
	display: block;
	width:1.1rem;
	height:1.1rem;
	
}
.JD_rcgx_alloptions li div.JD_rcgx_alloptions_text{
	 flex-grow:2.5;
	 color:#979797;
	 font-size:0.2rem;
	 padding-left:0.3rem;
}
.JD_rcgx_alloptions li div.JD_rcgx_alloptions_text b{
	color:#000;
	font-size:0.4rem;
	font-weight:400;
}
.JD_rcgx_alloptions li div.JD_rcgx_alloptions_text .JD_isapprove{
	color:#2a7dad;
	font-size:.23rem;
	border:1px solid #2a7dad;
	padding:0.02rem 0.06rem;
	border-radius: 0.2rem;
	vertical-align:middle;
}
.JD_rcgx_alloptions li div.JD_rcgx_alloptions_text p{
	font-size:0.2rem;
}
.JD_rcgx_alloptions li div.JD_rcgx_alloptions_text p:nth-child(1){
	margin-top:0.22rem;
	margin-bottom:0.22rem;
}
.JD_rcgx_alloptions li div.JD_rcgx_alloptions_text p:nth-child(2),.JD_rcgx_alloptions li div.JD_rcgx_alloptions_text p:nth-child(3){
	color:#414141;
	margin-bottom:0.2rem;
}

.JD_rcgx_alloptions li div.JD_rcgx_alloptions_jt{
	 flex-grow:0.3;
	 padding-right:0.5rem;
	 display:flex;
	 align-items: center;
}
.JD_rcgx_alloptions li div.JD_rcgx_alloptions_jt>a{
	display:block;
}
.JD_rcgx_alloptions div.JD_rcgx_top{
	border-bottom:1px solid #e5e5e5;
}
.JD_rcgx_alloptions div.JD_rcgx_bottom{
	padding:0.2rem 0;
	display:flex;
	flex-direction:row;
}
.JD_rcgx_alloptions div.JD_rcgx_bottom>div{
	flex-grow:1;
}
.JD_rcgx_alloptions div.JD_rcgx_bottom>div.JD_rcgx_like,.JD_rcgx_alloptions div.JD_rcgx_bottom>div.JD_rcgx_comment a,.JD_rcgx_alloptions div.JD_rcgx_bottom>div.JD_rcgx_favorite{
	display:flex;
	align-items:center;
	padding-left:0.48rem;
	justify-content:center;
}
.JD_rcgx_alloptions div.JD_rcgx_bottom>div.JD_rcgx_like span{
	display:block;
	width:.4rem;
	height:.4rem;
	margin-right:0.22rem;
	background-size: 10%;
}
.JD_rcgx_alloptions div.JD_rcgx_bottom>div.JD_rcgx_like span.JD_nolike{
	
	background:url('../../../src/assets/img/photo/fav.svg') no-repeat;
	
}
.JD_rcgx_alloptions div.JD_rcgx_bottom>div.JD_rcgx_like span.JD_havelike{
	background:url('../../../src/assets/img/photo/favblue.svg') no-repeat;
}
.JD_rcgx_alloptions div.JD_rcgx_bottom>div.JD_rcgx_comment span{
	display:block;
	width:.42rem;
	height:.4rem;
	margin-right:0.22rem;
	background:url('../../../src/assets/img/login/comment_icon.png') no-repeat;
	background-size: cover;
}
.JD_rcgx_alloptions div.JD_rcgx_bottom>div.JD_rcgx_favorite span{
	display:block;
	width:.5rem;
	height:.4rem;
	margin-right:0.22rem;
	background-size: cover;
}
.JD_rcgx_alloptions div.JD_rcgx_bottom>div.JD_rcgx_favorite span.JD_nofav{
	background:url('../../../src/assets/img/photo/favourite.svg') no-repeat;
}
.JD_rcgx_alloptions div.JD_rcgx_bottom>div.JD_rcgx_favorite span.JD_havefav{
	background:url('../../../src/assets/img/photo/favouriteblue.svg') no-repeat;
}
.JD_rcgx_alloptions div.JD_rcgx_bottom>div.JD_rcgx_like i,.JD_rcgx_alloptions div.JD_rcgx_bottom>div.JD_rcgx_comment i,.JD_rcgx_alloptions div.JD_rcgx_bottom>div.JD_rcgx_favorite i{
	display:block;
	height:0.32rem;
	line-height:0.32rem;
	font-size:0.23rem;
	color:#b3b3b3;
}
/*遮罩层*/
.JD_dialog_topcontent{
	height:0;
	overflow:hidden;
	background:#fff;
	border-top:1px solid #fff;
	font-size:.2rem;
}
.JD_dialog_topcontent li{
	text-align: left;
	padding:0.3rem 0 .3rem .2rem;
}
.JD_dialog_topcontent li.JD_active{
	color:#2A7DAD;
	background:url('../../../src/assets/img/photo/checked.svg') no-repeat right;
	background-size:5%;
}
.JD_dialog_topcontent li:not(:last-child){
	border-bottom:0.01rem solid #E7E7E7;
}
div.JD_sexoptions li{
	height:0.69rem;
	position:relative;
	display:flex;
	justify-content:space-between;
	align-items:center;
	padding-left:0.26rem;
}
div.JD_sexoptions li:nth-child(2){
	border-top:1px solid #e7e7e7;
	border-bottom:1px solid #e7e7e7;
}
div.JD_sexoptions li input{
	position:absolute;
	left:0;top:0;
	width:100%;
	height:100%;
	opacity:0;
}
div.JD_sexoptions li span{
	display:block;
}
div.JD_sexoptions li input:checked+span{
	display:block;
	width:0.31rem;
	height:0.23rem;
	background:url('../../../src/assets/img/photo/checked.svg') no-repeat;
	background-size:cover;
	margin-right:0.37rem;
}

.JD_allselects{
	height:0;
	background:#fff;
	overflow:hidden;
	position:relative;
}
.JD_select_content .JD_title{
	font-size:0.25rem;
	display:flex;
	flex-direction:row;
	justify-content:space-between;
	align-items:center;
	padding:.2rem;
}
.JD_select_content ul{
	display:flex;
	flex-wrap:wrap;
	padding-left:.2rem;
	font-size: .24rem;
}
.JD_select_content ul li{
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
div.JD_resetok{
	display:flex;
	flex-direction:row;
	width:100%;
	border-top:1px solid #6d6d6d;
	position:absolute;
	bottom:0;
	left:0;
}
div.JD_resetok span{
	display:block;
	flex-grow:1;
	text-align: center;
	line-height: 1.2rem;
	font-size:0.23rem;
	
}
div.JD_resetok span:nth-child(1){
	color:#2a7dad;
	background:#fff;
}
div.JD_resetok span:nth-child(2){
	background:#2a7dad;
	color:#fff;
}
.JD_rcss_wrap .weui-mask{
	top:7.3rem !important;
}
.JD_rcss_wrap .weui-dialog{
	top:63% !important;
	height:100% !important;
	border-radius:0 !important;
}
/*选择全部职位**/
.JD_demo5-item {
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
.JD_demo5-item-selected {
 /* background: #ffffff url(../assets/demo/checker/active.png) no-repeat right bottom;*/
  background: #2a7dad;
  color:#fff;
  border-color:#fff;
}
/*选项三个*/
.JD_popupsex{
	width:100%;
	height: 100%;
	background:rgba(0,0,0,0.53);
	position:absolute;
	left:0;
	top:1.94rem;
}
.JD_popupbottom{
	animation:heightbottom0 .25s forwards;
}
@-webkit-keyframes heightbottom0{
	0%{
		height:0
	}
	100%{
		height:3.1rem
	}
}
.JD_popupbottom1{
	animation:heighttop1 .25s forwards;
}
@-webkit-keyframes heighttop1{
	0%{
		height:0
	}
	100%{
		height:4rem
	}
}
.JD_heightbottom2{
	animation:heightbottom2 .6s forwards;
}
@-webkit-keyframes heightbottom2{
	0%{
		height:0
	}
	100%{
		height:10rem
	}
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
.JD_rcgx_choices a{
	display:inline-block;
	width:.25rem;
	height:.2rem;
}
span.JD_defaultimg a{
	background:url("http://i4.cfimg.com/611341/72bdb9ffd32c8ed2.png");
}
span.JD_imgrotatetop a{
	background:url("http://i4.cfimg.com/611341/818308d6f045382c.png");
}
div.JD_rcgx_choices>ul span.imgrotatetop em{
	color:#2A7DAD;
}
span.JD_defaultimgmore a{
	background:url("http://i2.cfimg.com/611341/0c98d477280e8680.png");
}
span.JD_imgrotatetopmore a{
	background:url("http://i2.cfimg.com/611341/9fb5e3e9dad03180.png");
}
div.JD_rcgx_choices>ul span.JD_imgrotatetopmore em{
	color:#2A7DAD;
}
.JD_rcgx_wrap .JD_hideinput{
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
	opacity:0;
}
</style>
