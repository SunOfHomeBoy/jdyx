<template>
	<div class="JD_rcgxxq_wrap">
		<x-header title="菲菲" :left-options="{showBack:true,backText:''}" style="position:absolute;left:0;top:0;width:100%;background:none;" ref="myheader"><a slot="right" @click="morefn">更多</a></x-header>
		<div :class="[{JD_editmore:true,JD_editmoreanimat:isanimate}]">
			<ul>
				<li>
					<router-link to="/Rzdw"><a class="JD_edit_f8">编辑</a></router-link>
				</li>
				<li @click="isfavfn" :class="{JD_defav:!hadfav,JD_bluefav:hadfav}">
					收藏
				</li>
			</ul>
		</div>
		<scroller lock-x :bounce=false @on-scroll="onScrollfn">
			<div class="JD_rcgxxq_content">
				<div class="JD_rcgxxq_header">
					<img src="../../../src/assets/img/login/jdtt_png.png" class="JD_headerbg"/>
					<img src="../../../src/assets/img/login/tx2.png" style="width:1.5rem;height:1.5rem;display:block;" class="JD_headerimg"/>
					
					
				</div>
				<div class="JD_rcgxxq_main">
					<card :header="{title:'基本信息'}">
				      <div slot="content">
				      		<ul class="JD_stepmsg">
				      			<li class="JD_uk-clearfix JD_dot-color-1">
		                            <span class="JD_line"><em></em></span>
		                            <span class="JD_nature">姓名：</span>
		                            <span class="JD_value">张三</span>
	                        	</li>
	                        	<li class="JD_uk-clearfix JD_dot-color-1">
		                            <span class="JD_line"><em></em></span>
		                            <span class="JD_nature">性别：</span>
		                            <span class="JD_value"></span>
	                        	</li>
	                        	<li class="JD_uk-clearfix JD_dot-color-1">
		                            <span class="JD_line"><em></em></span>
		                            <span class="JD_nature">年龄：</span>
		                            <span class="JD_value">23</span>
	                        	</li>
	                        	<li class="JD_uk-clearfix JD_dot-color-1">
		                            <span class="JD_line"><em></em></span>
		                            <span class="JD_nature">性别：</span>
		                            <span class="JD_value">男</span>
	                        	</li>
				      		</ul>
				      		
				      		<!--<flow orientation="vertical" style="height:250px;">
						      <flow-state><span slot="label">{{ $t('人才共享') }}</span></flow-state>
						      <flow-line></flow-line>
						
						      <flow-state title="已发货"></flow-state>
						      <flow-line></flow-line>
						
						      <flow-state title="待收货"></flow-state>
						      <flow-line></flow-line>
						
						      <flow-state title="完成"></flow-state>
						    </flow>-->
				      </div>
				    </card>
				    <card :header="{title:'联系方式'}" v-show="ishowphone">
				      <div slot="content">
				      		<ul class="JD_stepmsg">
				      			<li class="JD_uk-clearfix JD_dot-color-1">
		                            <span class="JD_line"><em></em></span>
		                            <span class="JD_nature">电话：</span>
		                            <span class="JD_value">13076756432</span>
	                        	</li>
	                        	<li class="JD_uk-clearfix JD_dot-color-1">
		                            <span class="JD_line"><em></em></span>
		                            <span class="JD_nature">邮箱：</span>
		                            <span class="JD_value">10210w929@16c.com</span>
	                        	</li>
	 			      		</ul>
				      </div>
				    </card>
				    <card :header="{title:'相册'}">
				      <div slot="content">
				      		<ul class="JD_stepphotomsg">
				      			<li class="JD_uk-photo">
		                        	<img src="../../../src/assets/img/login/tu1.png" style="width:2rem;height:3rem;"/>
	                        	</li>
	                        	<li class="JD_uk-photo">
		                        	<img src="../../../src/assets/img/login/tu1.png"  style="width:2rem;height:3rem;"/>
	                        	</li>
	                        	<li class="JD_uk-photo">
		                        	<img src="../../../src/assets/img/login/tu1.png" style="width:2rem;height:3rem;" />
	                        	</li>
	 			      		</ul>
				      </div>
				    </card>
				    <card :header="{title:'他的技能'}">
				      <div slot="content">
				      		<ul class="JD_skill">
				      			<li>
				      				<span>技能评价：中级 8级</span>
				      			</li>
				      			<li>
				      				<span>技能评价：中级 8级</span>
				      			</li>
				      			<li>
				      				<span>技能评价：中级 8级</span>
				      			</li>
				      		</ul>
				      </div>
				    </card>
				    <card :header="{title:'专业擅长'}">
				      <div slot="content">
				      	<div class="JD_goodAt">
				      		私房拍摄、平面模特、礼仪模特、淘宝模特 手模、脚模、车展模特
				      	</div>
				      		
				      </div>
				    </card>
				    <card :header="{title:'服务介绍'}">
				      <div slot="content">
				      	<div class="JD_goodAt">
				      		热爱互联网行业，关注行业动态学习能力强热爱互 联网行业，关注行业动态学习能力强对新事物充满 好奇工作态度认真负责，具有团队合作精神对新事 物充满好奇工作态度认真负责。
				      	</div>
				      </div>
				    </card>
				    <card :header="{title:'他的评价'}">
				      <div slot="content">
				      		<ul class="JD_evaluate">
				      			<li>
				      				<div>
				      					<img src="../../../src/assets/img/login/tx3.png" style="width:1.2rem;height:1.2rem;display:block;"/>
				      				</div>
				      				<div>
				      					<p class="JD_e_title">会飞的鱼</p>
				      					<p class="JD_e_skill">技能：优</p>
				      					<p class="JD_e_pingjia">
				      						评论描述评论描述评论描述评论描述！评 论描述评论描述评论描述评论描述评论描 述评论描述评论描述评论描述
				      					</p>
				      				</div>
				      			</li>
				      			<li>
				      				<div>
				      					<img src="../../../src/assets/img/login/tx3.png" style="width:1.2rem;height:1.2rem;display:block;"/>
				      				</div>
				      				<div>
				      					<p class="JD_e_title">会飞的鱼</p>
				      					<p class="JD_e_skill">技能：优</p>
				      					<p class="JD_e_pingjia">
				      						评论描述评论描述评论描述评论描述！评 论描述评论描述评论描述评论描述评论描 述评论描述评论描述评论描述
				      					</p>
				      				</div>
				      			</li>
				      		</ul>
				      </div>
				    </card>
				</div>
			</div><!--中间主体-->
		</scroller>
	    <div class="JD_rcssxq_foot" ref="myfoot">
	    	<div class="JD_foot_evaluate">
	    		<router-link to="/Evaluate">
	    			我要评价
	    		</router-link>
	    	</div>
	    	<div @click="viewphonefn">
	    		查看联系方式
	    	</div>
	    </div>
	    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask position="middle" width="2rem">{{toasttitle}}</toast>
  	</div>
</template>

<script>
import { XHeader, GroupTitle, XButton, Divider, Grid, GridItem, Tabbar, TabbarItem, Group, Cell, Card, Flow, FlowState, FlowLine, Toast, Scroller } from 'vux'
import {api} from '../../utils'
export default {
  components: {
  	XHeader,
    GroupTitle,
    XButton,
    Divider,
    Grid,
    GridItem,
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    Card,
    Flow,
    FlowState,
    FlowLine,
    Toast,
    Scroller
  },
  created () {
  	console.log('传过来的参数',this.$route.params);
  },
  methods: {
  	morefn (){
  		if(this.isanimate){
  			this.isanimate=false;
  		}else{
   			this.isanimate=true;
  		}
  	},
  	isfavfn () {
  		let propId=this.$route.params.id;
  		console.log(this.hadfav);
  		if(this.hadfav){
  			api('/share/collectParttime',{id:propId}, callback => {
	    		var result=callback.data.result;
	    		if(result){
	    			console.log(this.toasttitle);
	    			this.showPositionValue=true;
	    			this.toasttitle="取消收藏";
	    			this.hadfav=false;
	    		}
			})
  		}else{
  			api('/share/collectParttime',{id:propId}, callback => {
	    		var result=callback.data.result;
	    		if(result){
	    			this.showPositionValue=true;
	    			this.toasttitle="收藏成功";
	    			this.hadfav=true;
	    		}
			})
  		}
  	},
  	viewphonefn (){
   		api('/share/collectParttime',{}, callback => {
  			var result=callback.data.result;
  			if(result){
  				this.ishowphone=true;
  			}
  		})
  	},
  	onScrollfn (pos) {
  		/*var ff=document.getElementsByClassName("vux-header")[0];*/
  		var getele=this.$refs.myheader.$el;
  		if(pos.top>=155){//在滚动距离是155的时候，头部颜色变化
  			getele.style.background="#2a7dad";
  		}else{
  			getele.style.background="transparent";
  		}
  	}
  },
  data () {
    return {
    	isanimate:false,
    	ishowphone:false,//是否显示联系方式
    	showPositionValue:false,
    	hadfav:false,
    	toasttitle:""
    }
  }
}
</script>

<style lang="less">
@import '../../stylesheet/reset.less';
.JD_rcgxxq_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
}
.JD_rcgxxq_content{
	width:100%;
	height:100%;
	background:#f3f3f3;
	/*overflow:scroll;*/
}
.JD_rcgxxq_wrap .vux-header{
	/*background:rgba(0,0,0,0) !important;*/
	z-index:9;
}
.JD_rcgxxq_foot{
	height:3.85rem;
	display:flex;
}
.JD_rcgxxq_foot div{
	flex-grow:1;
	line-height: 3.85rem;
	text-align: center;
}
.JD_rcgxxq_foot div:nth-child(2){
	background:#2A7DAD;
	color:#fff;
}
.JD_rcgxxq_header{
	width:100%;
	height:4rem;
	/*background:url("../img/login/jdtt_png.png") no-repeat;
	-webkit-filter: blur(0.1rem);*/
	position: relative;
}
.JD_rcgxxq_header .JD_headerbg{
	width:100%;
	height:100%;
	display:block;
	-webkit-filter: blur(0.03rem);
}
.JD_rcgxxq_header .JD_headerimg{
	position: absolute;
	left:50%;
	top:50%;
	margin-left:-0.75rem;
	margin-top:-0.75rem;
}
.JD_rcgxxq_wrap .vux-header .vux-header-left .left-arrow:before{
	border-color:#fff !important;
}
.JD_rcgxxq_main{
	padding-top:.2rem;
	height:100%;
}

.JD_rcgxxq_wrap .weui-panel{
	width:95%;
	margin:auto;
	margin-top:.2rem;
	box-shadow:0 0 0.2rem #ccc;
}
.JD_rcgxxq_wrap .weui-panel__hd{
	color:#414141 !important;
	font-size:.33rem !important;
}
.JD_rcgxxq_wrap .weui-wepay-flow__bd{
	-webkit-align-items: start !important;
}
.JD_rcgxxq_wrap .weui-wepay-flow, .weui-wepay-flow-auto{
	padding:1.5rem !important;
}
.JD_rcgxxq_wrap .weui-wepay-flow__li .weui-wepay-flow__state,.JD_rcgxxq_wrap .weui-wepay-flow__li{
	width:0.6rem !important;
	height:0.6rem !important;
}
.JD_rcgxxq_wrap .weui-wepay-flow_vertical .weui-wepay-flow__line{
	width:0.1rem !important;
	margin-left:0.2rem !important;
}
.JD_stepmsg li{
	height:.7rem;
	line-height:.7rem;
	padding-left:.5rem;
	display:flex;
	position:relative;
	font-size:0.23rem;
}
.JD_stepmsg li span{
	display:block;
}
.JD_stepmsg li span.JD_line{

	height:100%;
}
.JD_stepmsg li span.JD_line em{
	display:block;
	width:0.02rem;
	height:100%;
	background:#EEE;
	
}
.JD_stepmsg li:before{
	content: "";
	display: block;
	position: absolute;
	top: .3rem;
	left: .44rem;
	margin-top: -0.02rem; 
	width: 0.12rem;
	height: 0.12rem;
	background: blue;
	border-radius: 50%; z-index: 2; 
}
.JD_stepmsg li span.JD_nature{
	margin-left:.15rem;
}
.JD_stepmsg li span.JD_nature,.JD_stepmsg li span.JD_value{
	color:#999;
}
.JD_stepmsg li:nth-child(1) span.JD_line{
	display:flex;
	align-items:flex-end;
}
.JD_stepmsg li:last-child span.JD_line{
	display:flex;
	align-items:flex-start;
}
.JD_stepmsg li:nth-child(1) span.JD_line em,.JD_stepmsg li:last-child span.JD_line em{
	height:50%;
	bottom:0;
}
.JD_stepmsg li:nth-child(1):before{
	background: #6BC2F9;
}
.JD_stepmsg li:nth-child(2):before{
	background: #FD9292;
}
.JD_stepmsg li:nth-child(3):before{
	background: #F6E236;
}
.JD_stepmsg li:nth-child(4):before{
	background: #A785E5;
}
.JD_stepmsg li:nth-child(5):before{
	background: #00CC74;
}
.JD_stepmsg li:nth-child(6):before{
	background: #6BC2F9;
}
.JD_stepmsg li:nth-child(7):before{
	background: #FD9292;
}
.JD_stepmsg li:nth-child(8):before{
	background: #FFA766;
}
.JD_stepmsgmore li:nth-child(1):before{
	background: #6BC2F9;
}
.JD_stepmsgmore li:nth-child(2):before{
	background: #FD9292;
}
.JD_stepmsgmore li:nth-child(3):before{
	background: #F6E236;
}
.JD_stepmsgmore li:nth-child(4):before{
	background: #A785E5;
}
.JD_stepmsgmore li:nth-child(5):before{
	background: #00CC74;
}

.JD_stepphotomsg{
	display:flex;
	padding:.2rem;
}
.JD_stepphotomsg li{
	flex-grow:1;
}
.JD_stepphotomsg li:nth-child(2){
	margin:0 0.3rem;
}
.JD_skill{
	padding-left:.2rem;
	color:#878787;
	
}
.JD_skill li{
	padding:.2rem 0;
	font-size:.23rem;
}
.JD_goodAt{
	color:#878787;
	font-size: .23rem;
	padding:.2rem;
}
.JD_evaluate{
	padding:0 0 .2rem .2rem;
	color:#878787;
	font-size: .23rem;
}
.JD_evaluate li{
	display:flex;
	border-bottom: 1px solid #E5E5E5;
	padding-bottom: 1rem;
	padding-top: .2rem;
}
.JD_evaluate li .JD_e_title{
	color:#676767;
	font-size:.23rem;
}
.JD_evaluate li .JD_e_skill{
	color:#B5B5B5;
	font-size:.23rem;
	padding:0.1rem 0;
}
.JD_evaluate li .JD_e_pingjia{
	color:#676767;
	font-size:.23rem;
}
.JD_evaluate li div:nth-child(2){
	padding-left:.2rem;
}
.JD_stepmsgmore li{
	height:12.5rem;
	line-height:2.6rem;
	padding-left:1.5rem;
	display:flex;
	position:relative;
	
}
.JD_stepmsgmore li span{
	display:block;
}
.JD_stepmsgmore li span.JD_line{
	width:0.1rem;
	height:100%;
	
}
.JD_stepmsgmore li span.JD_line em{
	display:block;
	width:0.09rem;
	height:100%;
	background:#EEE;
	
}
.JD_stepmsgmore li:before{
	content: "";
	display: block;
	position: absolute;
	top: 1rem;
	left: 1.3rem;
	margin-top: -0.02rem; 
	width: 0.4rem;
	height: 0.4rem;
	background: blue;
	border-radius: 50%; z-index: 2; 
}

.JD_stepmsgmore li:nth-child(1) span.JD_line{
	display:flex;
	align-items:flex-end;
}
.JD_stepmsgmore li:last-child span.JD_line{
	display:flex;
	align-items:flex-start;
}
.JD_stepmsgmore li:nth-child(1) span.JD_line em,.JD_stepmsgmore li:last-child span.JD_line em{
	height:90%;
	bottom:0;
}
.JD_stepmsgmore li>div{
	margin-left:1rem;
}
.JD_stepmsgmore .JD_time,.JD_stepmsgmore .JD_value{
	color:#414141;
	font-size:.8rem;
}
.JD_stepmsgmore .JD_direction{
	color:#878787;
}
.JD_editmore{
	width:2.2rem;
	height:1.8rem;
	background:#fff;
	border-radius:0.2rem;
	position:absolute;
	right:.3rem;
	top:1rem;
	z-index:9;
	box-shadow:0 0 .2rem .01rem #9E9E9E; 
	opacity:0;
	
}
.JD_editmore a.JD_edit_f8{
	color:#323232;
}
.JD_editmoreanimat{
	animation:mymove .5s forwards;
}
@keyframes mymove{
	0%{
		opacity:0;
	}
	100%{
		opacity:1;
	}
}
.JD_editmore ul{
	position:relative;
	height:100%;
	padding:0 0.25rem;
}
.JD_editmore ul li{
	height:.9rem;
	display:flex;
	font-size:.23rem;
	align-items: center;
	justify-content:center;
	padding-left:.2rem;
}
.JD_editmore ul li>a{
	display:block;
}
.JD_editmore ul li:nth-child(1){
	border-bottom:1px solid #E5E5E5;
}
.JD_editmore ul:before{
	content:'';
	width: 0;
    height: 0;
    border-left: 0.12rem solid transparent;
    border-right: 0.12rem solid transparent;
    border-bottom: 0.12rem solid #fff;
    position:absolute;
    right:.2rem;
    top:-0.1rem;
}
.JD_editmore ul li:nth-child(1){
	background:url('../../../src/assets/img/login/compile.png') no-repeat left;
	background-size: 21%;
}
.JD_editmore .JD_defav{
	background:url('http://i1.cfimg.com/611341/9e86500dd2b67b02.png') no-repeat left;
	color:#323232;
}
.JD_editmore .JD_bluefav{
	background:url('http://i4.cfimg.com/611341/f86b8cd018a043c6.png') no-repeat left;
	color:#2A7DAD;
}
.JD_editmore ul li .JD_edit_f8{
 	color:#323232;
}
/*修改圆点*/
div.JD_circlediv{
	display:flex;
}
div.JD_circlediv div.JD_circledivleft{
	width:1px solid #EEE;
}
/*底部*/
.JD_rcssxq_foot{
	height:1.1rem;
	display:flex;
	position:absolute;
	bottom:0;
	z-index:100;
	width:100%;
	font-size:.23rem;
}
.JD_rcssxq_foot .JD_foot_evaluate{
	background:#fff;
}
.JD_rcssxq_foot div{
	flex-grow:1;
	line-height: 1.1rem;
	text-align: center;
	
}
.JD_rcssxq_foot div a{
	color:#2A7DAD;
}
.JD_rcssxq_foot div:nth-child(2){
	background:#2A7DAD;
	color:#fff;
}
</style>