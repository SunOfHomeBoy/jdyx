<template>
	<div class="JD_rcssxq_wrap">
		<x-header title="菲菲" :left-options="{showBack:true,backText:''}" style="position:absolute;left:0;top:0;width:100%;background:none;" ref="myheader"><a slot="right" @click="morefn">更多</a></x-header>
		<div :class="[{JD_editmore:true,JD_editmoreanimat:isanimate}]">
			<ul>
				<li>
					<router-link to="/Rzdw2"><a class="JD_edit_f8">编辑</a></router-link>
				</li>
				<li @click="isfavfn" :class="{JD_defav:!hadfav,JD_bluefav:hadfav}">
					收藏
				</li>
			</ul>
		</div>
		<scroller lock-x :bounce=false @on-scroll="onScrollfn">
			<div class="JD_rcssxq_content">
			<div class="JD_rcssxq_header">
				<img src="../../../src/assets/img/login/jdtt_png.png" class="JD_headerbg"/>
				<img src="../../../src/assets/img/login/tx2.png" style="width:1.5rem;height:1.5rem;display:block;" class="JD_headerimg"/>
				
				
			</div>
			<div class="JD_rcssxq_main">
				<card :header="{title:'基本信息'}">
			      <div slot="content">
			      		<ul class="JD_stepmsg">
			      			<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <span class="JD_nature">姓名：</span>
	                            <span class="JD_value">zhangsan</span>
                        	</li>
                        	<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <span class="JD_nature">性别：</span>
	                            <span class="JD_value">男</span>
                        	</li>
                        	<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <span class="JD_nature">年龄：</span>
	                            <span class="JD_value">23</span>
                        	</li>
                        	<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <span class="JD_nature">现住：</span>
	                            <span class="JD_value">北京</span>
                        	</li>
                        	<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <span class="JD_nature">学历：</span>
	                            <span class="JD_value">本科</span>
                        	</li>
                        	<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <span class="JD_nature">学校：</span>
	                            <span class="JD_value">晋美工商</span>
                        	</li>
                        	<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <span class="JD_nature">专业：</span>
	                            <span class="JD_value">计算机</span>
                        	</li>
			      		</ul>
			      </div>
			    </card>
			    <card :header="{title:'联系方式'}">
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
			    <card :header="{title:'工作要求'}">
			      <div slot="content">
			      		<ul class="JD_stepmsg">
			      			<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <span class="JD_nature">期望城市：</span>
	                            <span class="JD_value">北京</span>
                        	</li>
                        	<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <span class="JD_nature">期望行业：</span>
	                            <span class="JD_value">互联网</span>
                        	</li>
                        	<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <span class="JD_nature">期望薪资：</span>
	                            <span class="JD_value">15-20k</span>
                        	</li>
                        	<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <span class="JD_nature">到岗时间：</span>
	                            <span class="JD_value">随时</span>
                        	</li>
                        	<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <span class="JD_nature">求职状态：</span>
	                            <span class="JD_value">已离职</span>
                        	</li>
                        	<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <span class="JD_nature">求职类型：</span>
	                            <span class="JD_value">全职</span>
                        	</li>
                        	<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <span class="JD_nature">工作经验：</span>
	                            <span class="JD_value">3年</span>
                        	</li>
                        	<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <span class="JD_nature">期望职位：</span>
	                            <span class="JD_value">文员、客服、前台</span>
                        	</li>
                        	
			      		</ul>
			      		
			      </div>
			    </card>
			    <card :header="{title:'培训经历'}">
			      <div slot="content">
			      		<ul class="JD_stepmsgmore">
			      			<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <div>
	                            	<span class="JD_time">2014年6月-2017年2月</span>
	                            	<span class="JD_value">高级人力资源师</span>
	                            	<span class="JD_direction">主要负责公司哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈啊哈...</span>
	                            </div>
                        	</li>
                        	<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <div>
	                            	<span class="JD_time">2014年6月-2017年2月</span>
	                            	<span class="JD_value">高级人力资源师</span>
	                            	<span class="JD_direction">主要负责公司哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈啊哈...</span>
	                            </div>
                        	</li>
                        	<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <div>
	                            	<span class="JD_time">2014年6月-2017年2月</span>
	                            	<span class="JD_value">高级人力资源师</span>
	                            	<span class="JD_direction">主要负责公司哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈啊哈...</span>
	                            </div>
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
			    <card :header="{title:'工作经历'}">
			      <div slot="content">
			      		<ul class="JD_stepmsgmore">
			      			<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <div>
	                            	<span class="JD_time">2014年6月-2017年2月</span>
	                            	<span class="JD_value">红红红火火人有限公司</span>
	                            	<span class="JD_direction">主要负责公司哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈啊哈...</span>
	                            </div>
                        	</li>
                        	<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <div>
	                            	<span class="JD_time">2014年6月-2017年2月</span>
	                            	<span class="JD_value">红红红火火人有限公司</span>
	                            	<span class="JD_direction">主要负责公司哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈啊哈...</span>
	                            </div>
                        	</li>
                        	<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <div>
	                            	<span class="JD_time">2014年6月-2017年2月</span>
	                            	<span class="JD_value">高级人力资源师</span>
	                            	<span class="JD_direction">主要负责公司哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈啊哈...</span>
	                            </div>
                        	</li>
			      		</ul>
			      		
			      </div>
			    </card>
			    <card :header="{title:'自我评价'}">
			      <div slot="content">
			      	<div class="JD_goodAt">
			      		私房拍摄、平面模特、礼仪模特、淘宝模特 手模、脚模、车展模特
			      	</div>
			      		
			      </div>
			    </card>
			     <card :header="{title:'企业评价'}">
			      <div slot="content">
			      		<ul class="JD_stepmsgmore">
			      			<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <div>
	                            	<span class="JD_time">2014年6月-2017年2月</span>
	                            	<span class="JD_value">红红红火火人有限公司</span>
	                            	<span class="JD_direction">在与他人合作学习和探究活动中，能选择自己擅长 的方式表述研究过程和结果；能主动提供自己的资 料和想法，具有无私精神...</span>
	                            </div>
                        	</li>
                        	<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <div>
	                            	<span class="JD_time">2014年6月-2017年2月</span>
	                            	<span class="JD_value">红红红火火人有限公司</span>
	                            	<span class="JD_direction">主要负责公司哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈啊哈...</span>
	                            </div>
                        	</li>
                        	<li class="JD_uk-clearfix JD_dot-color-1">
	                            <span class="JD_line"><em></em></span>
	                            <div>
	                            	<span class="JD_time">2014年6月-2017年2月</span>
	                            	<span class="JD_value">高级人力资源师</span>
	                            	<span class="JD_direction">主要负责公司哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈啊哈...</span>
	                            </div>
                        	</li>
			      		</ul>
			      		
			      </div>
			    </card>
			</div>
		</div><!--中间主体-->
		</scroller>
	    <div class="JD_rcssxq_foot">
	    	<div class="JD_foot_evaluate">
	    		<router-link to="/Evaluate">
	    			我要评价
	    		</router-link>
	    	</div>
	    	<div>
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
  ready () {
  },
  methods: {
  	morefn (){
  		if(this.isanimate){
  			this.isanimate=false;
  		}else{
   			this.isanimate=true;
  		}
  		this.$emit("userevent","this is a pencil");
  	},
  	isfavfn () {
  		let propId=this.$route.params.id;
  		if(this.hadfav){
  			api('/share/collectParttime',{id:propId}, callback => {
	    		var result=callback.data.result;
	    		if(result){
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
    	hadfav:false,
    	toasttitle:" ",//提示词语
    	showPositionValue:false//控制提示框
    }
  }
  
}
</script>

<style lang="less">
@import '../../stylesheet/reset.less';

.JD_rcssxq_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
	position:relative;
}
.JD_rcssxq_content{
	width:100%;
	height:100%;
	background:#f3f3f3;
	/*overflow-x:hidden;
	overflow-y: scroll;*/
}
.JD_rcssxq_wrap .vux-header{
	/*background:rgba(0,0,0,0) !important;*/
	z-index:9;
}
.JD_rcssxq_foot{
	height:1.1rem;
	display:flex;
	position:fixed;
	bottom:0;
	z-index:100;
	width:100%;
	font-size:.23rem;
}
.JD_rcssxq_foot .JD_foot_evaluate{
	background:#fff;
}
.JD_rcssxq_foot .JD_foot_evaluate a{
	color:#2A7DAD;
}
.JD_rcssxq_foot div{
	flex-grow:1;
	line-height: 1.1rem;
	text-align: center;
}
.JD_rcssxq_foot div:nth-child(2){
	background:#2A7DAD;
	color:#fff;
}
.JD_rcssxq_foot a{
	font-size:.23rem;
}
.JD_rcssxq_header{
	width:100%;
	height:4rem;
	position: relative;
}
.JD_rcssxq_header .JD_headerbg{
	width:100%;
	height:100%;
	display:block;
	-webkit-filter: blur(0.03rem);
}
.JD_rcssxq_header .JD_headerimg{
	position: absolute;
	left:50%;
	top:50%;
	margin-left:-0.75rem;
	margin-top:-0.75rem;
}
.JD_rcssxq_wrap .vux-header .vux-header-left .left-arrow:before{
	border-color:#fff !important;
}
.JD_rcssxq_main{
	padding-top:.1rem;
	height:100%;
}

.JD_rcssxq_wrap .weui-panel{
	width:95%;
	margin:auto;
	margin-top:.4rem;
	box-shadow:0 0 0.4rem #ccc;
}
.JD_rcssxq_wrap .weui-panel__hd{
	color:#414141 !important;
	font-size:.33rem !important;
}
.JD_rcssxq_wrap .weui-wepay-flow__bd{
	-webkit-align-items: start !important;
}
.JD_rcssxq_wrap .weui-wepay-flow, .weui-wepay-flow-auto{
	padding:1.5rem !important;
}
.JD_rcssxq_wrap .weui-wepay-flow__li .weui-wepay-flow__state,.JD_rcssxq_wrap .weui-wepay-flow__li{
	width:0.6rem !important;
	height:0.6rem !important;
}
.JD_rcssxq_wrap .weui-wepay-flow_vertical .weui-wepay-flow__line{
	width:0.1rem !important;
	margin-left:0.2rem !important;
}
.JD_stepmsg li{
	height:.7rem;
	line-height:.7rem;
	padding-left:.5rem;
	display:flex;
	position:relative;
	font-size:.23rem;
}
.JD_stepmsg li span{
	display:block;
}
.JD_stepmsg li span.JD_line{
	width:0.02rem;
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

.JD_skill{
	padding-left:.2rem;
	color:#878787;
}
.JD_skill li{
	padding:.2rem 0;
	font-size: .23rem;
}
.JD_goodAt{
	padding:.2rem;
	color:#878787;
	font-size: .23rem;
	
}
.JD_evaluate{
	padding:0 0 .2rem .2rem;
	color:#878787;
	font-size: .23rem;
}
.JD_evaluate li{
	display:flex;
	border-bottom: 1px solid #E5E5E5;
	padding-bottom: .2rem;
	padding-top: .2rem;
}
.JD_evaluate li .JD_e_title{
	color:#676767;
	font-size:.23rem;
}
.JD_evaluate li .JD_e_skill{
	color:#B5B5B5;
	font-size:.23rem;
}
.JD_evaluate li div:nth-child(2){
	padding-left:.2rem;
}
.JD_stepmsgmore{
	padding:0.3rem 0;
}
.JD_stepmsgmore li{
	height:3.5rem;
	line-height:.6rem;
	padding-left:.44rem;
	display:flex;
	position:relative;
	
}
.JD_stepmsgmore li span{
	display:block;
}
.JD_stepmsgmore li span.JD_line{
	
	height:100%;
	
}
.JD_stepmsgmore li span.JD_line em{
	display:block;
	width:0.02rem;
	height:100%;
	background:#EEE;
	
}
.JD_stepmsgmore li:before{
	content: "";
	display: block;
	position: absolute;
	top: 0rem;
	left: .4rem;
	margin-top: -0.02rem; 
	width: 0.12rem;
	height: 0.12rem;
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
	height:100%;
	bottom:0;
}
.JD_stepmsgmore li>div{
	margin-left:.2rem;
	margin-top:-0.2rem;
}
.JD_stepmsgmore .JD_time,.JD_stepmsgmore .JD_value{
	color:#414141;
	font-size:.25rem;
}

.JD_stepmsgmore .JD_direction{
	color:#878787;
	font-size:0.23rem;
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
/*.editmore ul li:nth-child(2){
	background:url('../../src/assets/img/login/collect2_icon.png') no-repeat left;
	background-size: 21%;
}*/
/*修改圆点*/
div.JD_circlediv{
	display:flex;
}
div.JD_circlediv div.JD_circledivleft{
	width:1px solid #EEE;
}
</style>
