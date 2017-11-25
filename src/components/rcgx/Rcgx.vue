<template>
	<div class="rcgx_wrap">
		<loading :show="isLoading" position="absolute" text="加载中"></loading>
		<div class="rcgx_content rcgx_header">
			<x-header title="人才共享" :left-options="leftcontent"><a slot="right"><img src="http://i4.cfimg.com/611341/406f3ecc5960fa87.png" style="width:.4rem;height:.4rem;"/></a></x-header>
			<div class="rcgx_choices">
				<ul>
					<li>
						<span style="position:relative;" :class="{defaultimg:!showsexdialog,imgrotatetop:showsexdialog}">
							<em style="padding-right:0.2rem;">性别</em><a></a>
							<input type="checkbox" class="hideinput" v-model="showsexdialog" @click="sexfn"/>
						</span>
					</li>
					<li>
						<span style="position:relative;" :class="{defaultimg:!showagedialog,imgrotatetop:showagedialog}">
							<em style="padding-right:0.2rem;">年龄</em><a></a>
							<input type="checkbox" class="hideinput" v-model="showagedialog" @click="agefn"/>
						</span>
					</li>
					<li>
						<span style="position:relative;" :class="{defaultimgmore:!showzhiweidialog,imgrotatetopmore:showzhiweidialog}">
							<em style="padding-right:0.2rem;">全部职位</em><a style="height:.23rem;"></a>
							<input type="checkbox" class="hideinput" v-model="showzhiweidialog" @click="zhiweifn"/>
						</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="rcgx_content rcgx_main" >
			<load-more :tip="$t('正在加载')" v-show="showloadmore"></load-more>
			<!--<scroller height="-150" lock-x ref="scrollerBottom" :use-pullup=true  >-->
			<pull-to :top-load-method="topload" :bottom-load-method="loadmore" :bottom-config="{pullText: '上拉加载',triggerText: '释放更新',loadingText: '加载中...',doneText: '加载完成',failText: '加载失败',loadedStayTime: 400,stayDistance: 50,triggerDistance: 70}" >
				<div class='rcgx_alloptions'>
					<ul>
						<template v-for="(item,index) in rcgx_contens">
							<li>
								<div class="rcgx_top">
									<div class="rcgx_alloptions_img">
										<img src='../../../src/assets/img/login/tx.png'/>
									</div>
									<div class="rcgx_alloptions_text">
										<p><b>{{item.title}}</b>  <span class="isapprove">已认证</span></p>
										<p>{{item.direct}} {{item.name}}</p>
										<p>服务:<span style="color:#F86666;">{{item.count}}</span>/小时     距您:<span style="color:#F86666;">{{item.distance}}</span></p>
										<p>{{item.remark}}</p>
									</div>
									<div class="rcgx_alloptions_jt">
										<!--<router-link to="/components/Rcgxxq/12"><img src="../../src/assets/img/photo/right_jt.svg" style="display:block;margin-top:5rem;"/></router-link>-->
										<router-link :to="{name:'Rcgxxq',params:{id:1001,name:'121'}}"><img src="../../../src/assets/img/photo/right_jt.svg" style="display:block;"/></router-link>
									</div>
								</div>
								<div class="rcgx_bottom">
									<div class="rcgx_like">
										<span :class="{nolike:item.havelike==0,havelike:item.havelike==1}" @click="clicklikefn"></span><i>20</i>
									</div>
									<div class="rcgx_comment">
										<router-link :to="{name:'Evaluatexq',params:{id:111}}">
											<span></span><i>20</i>
										</router-link>
										
									</div>
									<div class="rcgx_favorite">
										<span :class="{nofav:item.havefav==0,havefav:item.havefav==1}" :data-index="item.articleID" @click="clickfavfn"></span><i>20</i>
									</div>
								</div>
							</li>
						</template>
					</ul>
				</div>
			</pull-to>
			
		</div><!--中间主体-->
	    <div class="popupsex" v-show="showmask">
	    	<ul :class="{dialog_topcontent:true,popupbottom:showsexdialog}" v-show='showsexdialog'>
	        	<template v-for="(it,index) in sexs">
	        		<li :class="{active:isactive==index}" @click="clicksexfn(index)">
	        			<span>{{it}}</span>
	        		</li>
	        	</template>
	        </ul>
	        <ul :class="{dialog_topcontent:true,popupbottom1:showagedialog}" v-show='showagedialog'>
	        	<template v-for="(it,index) in ages">
	        		<li :class="{active:isactive2==index}" @click="clickagefn(index)">
	        			<span>{{it}}</span>
	        		</li>
	        	</template>
	        </ul>
	        <div :class="{allselects:true,heightbottom2:showzhiweidialog}" v-show="showzhiweidialog">
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
    	if(el.getAttribute("class").indexOf('havelike')>-1){
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
	    			el.removeAttribute("class","nolike");
	    			el.setAttribute("class","havelike");
	    			nextEl.innerText=++nextEl.innerText;
	    		}
		  		
			})
    	}
    },
    clickfavfn (e) {
    	var el=e.srcElement || e.target;
    	var propId=el.getAttribute("data-index");
    	var nextEl=el.nextSibling;
    	if(el.getAttribute("class").indexOf('havefav')>-1){
    		api('/share/collectParttime',{id:propId}, callback => {
	    		var result=callback.data.result;
	    		if(result){
	    			el.removeAttribute("class","havefav");
	    			el.setAttribute("class","nofav");
	    			nextEl.innerText=--nextEl.innerText;
	    		}
			})
    	}else{
    		api('/share/collectParttime',{id:propId}, callback => {
	    		var result=callback.data.result;
	    		if(result){
	    			el.removeAttribute("class","nofav");
	    			el.setAttribute("class","havefav");
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
.rcgx_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
	
}
.rcgx_header{
	width:100%;
	height:2rem;
	color:#fff;
	z-index:90;
}
.rcgx_wrap .vux-header{
	background:#2A7DAD !important;
	height:1rem;
}
.rcgx_header .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.25rem !important;
	
}
.rcgx_main{
	position:relative;
	height:85%;
	/*height:calc(100% - 1.81rem);
	overflow-y:scroll;
	overflow-x: hidden;*/
}
div.rcgx_choices{
	height:1rem;
	border-bottom:1px solid #e7e7e7;
	color:#000;
	background:#fff;
}
div.rcgx_choices>ul{
	height:100%;
	display:flex;
	flex-direction:row;
	align-items: center;
}
div.rcgx_choices>ul li{
	flex-grow:1;
	height:.5rem;
}
div.rcgx_choices>ul li span{
	height:.5rem;
}
div.rcgx_choices>ul li:nth-child(2) span{
	border-left:1px solid #cacaca;
	border-right:1px solid #cacaca;
}
div.rcgx_choices>ul span{
	display:flex;
	font-size:0.2rem;
	justify-content:center;
	align-items:center;
}
div.rcgx_choices>ul span em,div.rcgx_choices>ul span img{
	display:block;
	font-style:normal;
}
div.rcgx_choices .jt_x{
	display:inline-block;
	width:0.18rem;
	height:0.1rem;
	background:url('../../../src/assets/img/login/jt_x.svg')
}
.rcgx_alloptions{
	font-size:0.8rem;
}
.rcgx_alloptions li{
	padding-left:0.25rem;
	border-bottom:1px solid #cacaca;
	display:flex;
	flex-direction:column;
	padding-top:.1rem;
	
}
.rcgx_alloptions li div.rcgx_top{
	display:flex;
	flex-direction:row;
	padding-bottom:0.6rem;
}
.rcgx_alloptions li div.rcgx_alloptions_img{
	 flex-grow:0.8;
	 
}
.rcgx_alloptions li div.rcgx_alloptions_img>img{
	display: block;
	width:1.1rem;
	height:1.1rem;
	
}
.rcgx_alloptions li div.rcgx_alloptions_text{
	 flex-grow:2.5;
	 color:#979797;
	 font-size:0.2rem;
	 padding-left:0.3rem;
}
.rcgx_alloptions li div.rcgx_alloptions_text b{
	color:#000;
	font-size:0.4rem;
	font-weight:400;
}
.rcgx_alloptions li div.rcgx_alloptions_text .isapprove{
	color:#2a7dad;
	font-size:.23rem;
	border:1px solid #2a7dad;
	padding:0.02rem 0.06rem;
	border-radius: 0.2rem;
	vertical-align:middle;
}
.rcgx_alloptions li div.rcgx_alloptions_text p{
	font-size:0.2rem;
}
.rcgx_alloptions li div.rcgx_alloptions_text p:nth-child(1){
	margin-top:0.22rem;
	margin-bottom:0.22rem;
}
.rcgx_alloptions li div.rcgx_alloptions_text p:nth-child(2),.rcgx_alloptions li div.rcgx_alloptions_text p:nth-child(3){
	color:#414141;
	margin-bottom:0.2rem;
}
.rcgx_alloptions li div.rcgx_alloptions_text p:nth-child(4){

}
.rcgx_alloptions li div.rcgx_alloptions_jt{
	 flex-grow:0.3;
	 padding-right:0.5rem;
	 display:flex;
	 align-items: center;
}
.rcgx_alloptions li div.rcgx_alloptions_jt>a{
	display:block;
}
.rcgx_alloptions div.rcgx_top{
	border-bottom:1px solid #e5e5e5;
}
.rcgx_alloptions div.rcgx_bottom{
	padding:0.2rem 0;
	display:flex;
	flex-direction:row;
}
.rcgx_alloptions div.rcgx_bottom>div{
	flex-grow:1;
}
.rcgx_alloptions div.rcgx_bottom>div.rcgx_like,.rcgx_alloptions div.rcgx_bottom>div.rcgx_comment a,.rcgx_alloptions div.rcgx_bottom>div.rcgx_favorite{
	display:flex;
	align-items:center;
	padding-left:0.48rem;
	justify-content:center;
}
.rcgx_alloptions div.rcgx_bottom>div.rcgx_like span{
	display:block;
	width:.4rem;
	height:.4rem;
	margin-right:0.22rem;
	background-size: 10%;
}
.rcgx_alloptions div.rcgx_bottom>div.rcgx_like span.nolike{
	
	background:url('../../../src/assets/img/photo/fav.svg') no-repeat;
	
}
.rcgx_alloptions div.rcgx_bottom>div.rcgx_like span.havelike{
	background:url('../../../src/assets/img/photo/favblue.svg') no-repeat;
}
.rcgx_alloptions div.rcgx_bottom>div.rcgx_comment span{
	display:block;
	width:.42rem;
	height:.4rem;
	margin-right:0.22rem;
	background:url('../../../src/assets/img/login/comment_icon.png') no-repeat;
	background-size: cover;
}
.rcgx_alloptions div.rcgx_bottom>div.rcgx_favorite span{
	display:block;
	width:.5rem;
	height:.4rem;
	margin-right:0.22rem;
	
	background-size: cover;
}
.rcgx_alloptions div.rcgx_bottom>div.rcgx_favorite span.nofav{
	background:url('../../../src/assets/img/photo/favourite.svg') no-repeat;
}
.rcgx_alloptions div.rcgx_bottom>div.rcgx_favorite span.havefav{
	background:url('../../../src/assets/img/photo/favouriteblue.svg') no-repeat;
}
.rcgx_alloptions div.rcgx_bottom>div.rcgx_like i,.rcgx_alloptions div.rcgx_bottom>div.rcgx_comment i,.rcgx_alloptions div.rcgx_bottom>div.rcgx_favorite i{
	display:block;
	height:0.32rem;
	line-height:0.32rem;
	font-size:0.23rem;
	color:#b3b3b3;
}
/*遮罩层*/
.dialog_topcontent{
	height:0;
	overflow:hidden;
	background:#fff;
	border-top:1px solid #fff;
	font-size:.2rem;
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
div.sexoptions li{
	height:0.69rem;
	position:relative;
	display:flex;
	justify-content:space-between;
	align-items:center;
	padding-left:0.26rem;
}
div.sexoptions li:nth-child(2){
	border-top:1px solid #e7e7e7;
	border-bottom:1px solid #e7e7e7;
}
div.sexoptions li input{
	position:absolute;
	left:0;top:0;
	width:100%;
	height:100%;
	opacity:0;
}
div.sexoptions li span{
	display:block;
}
div.sexoptions li input:checked+span{
	display:block;
	width:0.31rem;
	height:0.23rem;
	background:url('../../../src/assets/img/photo/checked.svg') no-repeat;
	background-size:cover;
	margin-right:0.37rem;
}

.allselects{
	height:0;
	background:#fff;
	overflow:hidden;
	position:relative;
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
/*选择全部职位**/
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
.popupbottom{
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
.popupbottom1{
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
.heightbottom2{
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
.rcgx_choices a{
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
div.rcgx_choices>ul span.imgrotatetop em{
	color:#2A7DAD;
}
span.defaultimgmore a{
	background:url("http://i2.cfimg.com/611341/0c98d477280e8680.png");
}
span.imgrotatetopmore a{
	background:url("http://i2.cfimg.com/611341/9fb5e3e9dad03180.png");
}
div.rcgx_choices>ul span.imgrotatetopmore em{
	color:#2A7DAD;
}
.rcgx_wrap .hideinput{
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
	opacity:0;
}
</style>
