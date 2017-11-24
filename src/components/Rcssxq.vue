
<template>
	<div class="rcssxq_wrap">
		<div class="rcssxq_content">
			<div class="rcssxq_header">
				<img src="../../src/assets/img/login/jdtt_png.png" class="headerbg"/>
				<img src="../../src/assets/img/login/tx2.png" style="width:1.5rem;height:1.5rem;display:block;" class="headerimg"/>
				<x-header title="菲菲" :left-options="{showBack:true,backText:''}" style="position:absolute;left:0;top:0;width:100%;background:none;"><a slot="right" @click="morefn">更多</a></x-header>
				<div :class="[{editmore:true,editmoreanimat:isanimate}]">
					<ul>
						<li>
							<router-link to="/Rzdw2"><a class="edit_f8">编辑</a></router-link>
						</li>
						<li>
							收藏
						</li>
					</ul>
				</div>
			</div>
			<div class="rcssxq_main">
				<card :header="{title:'基本信息'}">
			      <div slot="content" class="card-demo-flex card-demo-content01">
			      		<ul class="stepmsg">
			      			<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <span class="nature">姓名：</span>
	                            <span class="value">张三</span>
                        	</li>
                        	<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <span class="nature">性别：</span>
	                            <span class="value">男</span>
                        	</li>
                        	<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <span class="nature">年龄：</span>
	                            <span class="value">23</span>
                        	</li>
                        	<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <span class="nature">现住：</span>
	                            <span class="value">北京</span>
                        	</li>
                        	<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <span class="nature">学历：</span>
	                            <span class="value">本科</span>
                        	</li>
                        	<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <span class="nature">学校：</span>
	                            <span class="value">晋美工商</span>
                        	</li>
                        	<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <span class="nature">专业：</span>
	                            <span class="value">计算机</span>
                        	</li>
			      		</ul>
			      </div>
			    </card>
			    <card :header="{title:'联系方式'}">
			      <div slot="content" class="card-demo-flex card-demo-content01">
			      		<ul class="stepmsg">
			      			<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <span class="nature">电话：</span>
	                            <span class="value">13076756432</span>
                        	</li>
                        	<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <span class="nature">邮箱：</span>
	                            <span class="value">10210w929@16c.com</span>
                        	</li>
 			      		</ul>
			      </div>
			    </card>
			    <card :header="{title:'工作要求'}">
			      <div slot="content" class="card-demo-flex card-demo-content01">
			      		<ul class="stepmsg">
			      			<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <span class="nature">期望城市：</span>
	                            <span class="value">北京</span>
                        	</li>
                        	<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <span class="nature">期望行业：</span>
	                            <span class="value">互联网</span>
                        	</li>
                        	<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <span class="nature">期望薪资：</span>
	                            <span class="value">15-20k</span>
                        	</li>
                        	<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <span class="nature">到岗时间：</span>
	                            <span class="value">随时</span>
                        	</li>
                        	<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <span class="nature">求职状态：</span>
	                            <span class="value">已离职</span>
                        	</li>
                        	<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <span class="nature">求职类型：</span>
	                            <span class="value">全职</span>
                        	</li>
                        	<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <span class="nature">工作经验：</span>
	                            <span class="value">3年</span>
                        	</li>
                        	<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <span class="nature">期望职位：</span>
	                            <span class="value">文员、客服、前台</span>
                        	</li>
                        	
			      		</ul>
			      		
			      </div>
			    </card>
			    <card :header="{title:'培训经历'}">
			      <div slot="content" class="card-demo-flex card-demo-content01">
			      		<ul class="stepmsgmore">
			      			<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <div>
	                            	<span class="time">2014年6月-2017年2月</span>
	                            	<span class="value">高级人力资源师</span>
	                            	<span class="direction">主要负责公司哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈啊哈...</span>
	                            </div>
                        	</li>
                        	<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <div>
	                            	<span class="time">2014年6月-2017年2月</span>
	                            	<span class="value">高级人力资源师</span>
	                            	<span class="direction">主要负责公司哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈啊哈...</span>
	                            </div>
                        	</li>
                        	<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <div>
	                            	<span class="time">2014年6月-2017年2月</span>
	                            	<span class="value">高级人力资源师</span>
	                            	<span class="direction">主要负责公司哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈啊哈...</span>
	                            </div>
                        	</li>
			      		</ul>
			      		
			      </div>
			    </card>
			    <card :header="{title:'他的技能'}">
			      <div slot="content" class="card-demo-flex card-demo-content01">
			      		<ul class="skill">
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
			      <div slot="content" class="card-demo-flex card-demo-content01">
			      		<ul class="stepmsgmore">
			      			<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <div>
	                            	<span class="time">2014年6月-2017年2月</span>
	                            	<span class="value">红红红火火人有限公司</span>
	                            	<span class="direction">主要负责公司哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈啊哈...</span>
	                            </div>
                        	</li>
                        	<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <div>
	                            	<span class="time">2014年6月-2017年2月</span>
	                            	<span class="value">红红红火火人有限公司</span>
	                            	<span class="direction">主要负责公司哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈啊哈...</span>
	                            </div>
                        	</li>
                        	<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <div>
	                            	<span class="time">2014年6月-2017年2月</span>
	                            	<span class="value">高级人力资源师</span>
	                            	<span class="direction">主要负责公司哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈啊哈...</span>
	                            </div>
                        	</li>
			      		</ul>
			      		
			      </div>
			    </card>
			    <card :header="{title:'自我评价'}">
			      <div slot="content" class="card-demo-flex card-demo-content01">
			      	<div class="goodAt">
			      		私房拍摄、平面模特、礼仪模特、淘宝模特 手模、脚模、车展模特
			      	</div>
			      		
			      </div>
			    </card>
			     <card :header="{title:'企业评价'}">
			      <div slot="content" class="card-demo-flex card-demo-content01">
			      		<ul class="stepmsgmore">
			      			<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <div>
	                            	<span class="time">2014年6月-2017年2月</span>
	                            	<span class="value">红红红火火人有限公司</span>
	                            	<span class="direction">在与他人合作学习和探究活动中，能选择自己擅长 的方式表述研究过程和结果；能主动提供自己的资 料和想法，具有无私精神...</span>
	                            </div>
                        	</li>
                        	<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <div>
	                            	<span class="time">2014年6月-2017年2月</span>
	                            	<span class="value">红红红火火人有限公司</span>
	                            	<span class="direction">主要负责公司哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈啊哈...</span>
	                            </div>
                        	</li>
                        	<li class="uk-clearfix dot-color-1">
	                            <span class="line"><em></em></span>
	                            <div>
	                            	<span class="time">2014年6月-2017年2月</span>
	                            	<span class="value">高级人力资源师</span>
	                            	<span class="direction">主要负责公司哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈啊哈...</span>
	                            </div>
                        	</li>
			      		</ul>
			      		
			      </div>
			    </card>
			</div>
		</div><!--中间主体-->
	    <div class="rcssxq_foot">
	    	<div class="foot_evaluate">
	    		<router-link to="/Evaluate">
	    			我要评价
	    		</router-link>
	    	</div>
	    	<div>
	    		查看联系方式
	    	</div>
	    </div>
  	</div>
</template>

<script>
import { XHeader, GroupTitle, XButton, Divider, Grid, GridItem, Tabbar, TabbarItem, Group, Cell, Card, Flow, FlowState, FlowLine } from 'vux'


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
    FlowLine
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
  	}
  },
  data () {
    return {
    	isanimate:false
    }
  }
}
</script>

<style lang="less">
@import '../stylesheet/reset.less';

.rcssxq_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
}
.rcssxq_content{
	width:100%;
	height:100%;
	background:#f3f3f3;
	overflow-x:hidden;
	overflow-y: scroll;
}
.rcssxq_wrap .vux-header{
	background:rgba(0,0,0,0) !important;
}
.rcssxq_foot{
	height:1.1rem;
	display:flex;
	font-size:.23rem;
}
.rcssxq_foot div{
	flex-grow:1;
	line-height: 1.1rem;
	text-align: center;
}
.rcssxq_foot div:nth-child(2){
	background:#2A7DAD;
	color:#fff;
}
.rcssxq_foot a{
	font-size:.23rem;
}
.rcssxq_header{
	width:100%;
	height:4rem;
	position: relative;
}
.rcssxq_header .headerbg{
	width:100%;
	height:100%;
	display:block;
	-webkit-filter: blur(0.03rem);
}
.rcssxq_header .headerimg{
	position: absolute;
	left:50%;
	top:50%;
	margin-left:-0.75rem;
	margin-top:-0.75rem;
}
.rcssxq_wrap .vux-header .vux-header-left .left-arrow:before{
	border-color:#fff !important;
}
.rcssxq_main{
	padding-top:.1rem;
	height:100%;
}

.rcssxq_wrap .weui-panel{
	width:95%;
	margin:auto;
	margin-top:.4rem;
	box-shadow:0 0 0.4rem #ccc;
}
.rcssxq_wrap .weui-panel__hd{
	color:#414141 !important;
	font-size:.33rem !important;
}
.rcssxq_wrap .weui-wepay-flow__bd{
	-webkit-align-items: start !important;
}
.rcssxq_wrap .weui-wepay-flow, .weui-wepay-flow-auto{
	padding:1.5rem !important;
}
.rcssxq_wrap .weui-wepay-flow__li .weui-wepay-flow__state,.rcssxq_wrap .weui-wepay-flow__li{
	width:0.6rem !important;
	height:0.6rem !important;
}
.rcssxq_wrap .weui-wepay-flow_vertical .weui-wepay-flow__line{
	width:0.1rem !important;
	margin-left:0.2rem !important;
}
.stepmsg li{
	height:.7rem;
	line-height:.7rem;
	padding-left:.5rem;
	display:flex;
	position:relative;
	font-size:.23rem;
}
.stepmsg li span{
	display:block;
}
.stepmsg li span.line{
	width:0.02rem;
	height:100%;
	
}
.stepmsg li span.line em{
	display:block;
	width:0.02rem;
	height:100%;
	background:#EEE;
	
}
.stepmsg li:before{
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
.stepmsg li span.nature{
	margin-left:.15rem;
}
.stepmsg li span.nature,.stepmsg li span.value{
	color:#999;
}
.stepmsg li:nth-child(1) span.line{
	display:flex;
	align-items:flex-end;
}
.stepmsg li:last-child span.line{
	display:flex;
	align-items:flex-start;
}
.stepmsg li:nth-child(1) span.line em,.stepmsg li:last-child span.line em{
	height:50%;
	bottom:0;
}
.stepmsg li:nth-child(1):before{
	background: #6BC2F9;
}
.stepmsg li:nth-child(2):before{
	background: #FD9292;
}
.stepmsg li:nth-child(3):before{
	background: #F6E236;
}
.stepmsg li:nth-child(4):before{
	background: #A785E5;
}
.stepmsg li:nth-child(5):before{
	background: #00CC74;
}
.stepmsg li:nth-child(6):before{
	background: #6BC2F9;
}
.stepmsg li:nth-child(7):before{
	background: #FD9292;
}
.stepmsg li:nth-child(8):before{
	background: #FFA766;
}
.stepmsgmore li:nth-child(1):before{
	background: #6BC2F9;
}
.stepmsgmore li:nth-child(2):before{
	background: #FD9292;
}
.stepmsgmore li:nth-child(3):before{
	background: #F6E236;
}
.stepmsgmore li:nth-child(4):before{
	background: #A785E5;
}
.stepmsgmore li:nth-child(5):before{
	background: #00CC74;
}

.stepphotomsg{
	display:flex;
	padding:.2rem;
	
}
.stepphotomsg li{
	flex-grow:1;
	
}
.stepphotomsg span{
	font-size:.23rem;
}
.stepphotomsg li:nth-child(2){
	margin:0 0.8rem;
}
.skill{
	padding-left:.2rem;
	color:#878787;
}
.skill li{
	padding:.2rem 0;
	font-size: .23rem;
}
.goodAt{
	padding:.2rem;
	color:#878787;
	font-size: .23rem;
	
}
.evaluate{
	padding:0 0 .2rem .2rem;
	color:#878787;
	font-size: .23rem;
}
.evaluate li{
	display:flex;
	border-bottom: 1px solid #E5E5E5;
	padding-bottom: .2rem;
	padding-top: .2rem;
}
.evaluate li .e_title{
	color:#676767;
	font-size:.23rem;
}
.evaluate li .e_skill{
	color:#B5B5B5;
	font-size:.23rem;
}
.evaluate li div:nth-child(2){
	padding-left:.2rem;
}
.stepmsgmore{
	padding:0.3rem 0;
}
.stepmsgmore li{
	height:3.5rem;
	line-height:.6rem;
	padding-left:.44rem;
	display:flex;
	position:relative;
	
}
.stepmsgmore li span{
	display:block;
}
.stepmsgmore li span.line{
	
	height:100%;
	
}
.stepmsgmore li span.line em{
	display:block;
	width:0.02rem;
	height:100%;
	background:#EEE;
	
}
.stepmsgmore li:before{
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

.stepmsgmore li:nth-child(1) span.line{
	display:flex;
	align-items:flex-end;
}
.stepmsgmore li:last-child span.line{
	display:flex;
	align-items:flex-start;
}
.stepmsgmore li:nth-child(1) span.line em,.stepmsgmore li:last-child span.line em{
	height:100%;
	bottom:0;
}
.stepmsgmore li>div{
	margin-left:.2rem;
	margin-top:-0.2rem;
}
.stepmsgmore .time,.stepmsgmore .value{
	color:#414141;
	font-size:.25rem;
}

.stepmsgmore .direction{
	color:#878787;
	font-size:0.23rem;
}
.editmore{
	width:2.2rem;
	height:1.8rem;
	background:#fff;
	border-radius:0.2rem;
	position:absolute;
	right:.3rem;
	top:1rem;
	opacity:0;
	
}
.editmore a.edit_f8{
	color:#323232;
}
.editmoreanimat{
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
.editmore ul{
	position:relative;
	height:100%;
	padding:0 0.25rem;
}
.editmore ul li{
	height:.9rem;
	display:flex;
	font-size:.23rem;
	align-items: center;
	justify-content:center;
	padding-left:.2rem;
}
.editmore ul li:nth-child(1){
	border-bottom:1px solid #E5E5E5;
}
.editmore ul:before{
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
.editmore ul li:nth-child(1){
	background:url('../../src/assets/img/login/compile.png') no-repeat left;
	background-size: 21%;
}
.editmore ul li:nth-child(2){
	background:url('../../src/assets/img/login/collect2_icon.png') no-repeat left;
	background-size: 21%;
}
/*修改圆点*/
div.circlediv{
	display:flex;
}
div.circlediv div.circledivleft{
	width:1px solid #EEE;
}
</style>
