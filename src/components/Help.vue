<template>
	<div class="help_wrap">
		<div class="help_content help_header">
			<x-header title="帮助反馈"  :left-options="{showBack:true,backText:''}"></x-header>
		</div>
		<div class="help_content help_main">
			<ul>
				<li>
					<div class="li_title" @click="questionfn">
						<span>常见问题</span>
						<span>
							<img src="../../src/assets/img/photo/jt_bt2.svg" style="" :class="{imgrotatetop:istop,imgrotatebottom:isbottom}" />
						</span>
					</div>
					<div :class="{transition_question:true,tans_top:istop,tans_bottom:isbottom}">
						<ol>
							<li style="margin-top:.1rem;">
								<p>
									1、怎么填写简历
								</p>
								<p>
									从入职定位进入，按照要求进行信息的填写，带有*的是必填项！！！！
								</p>
							</li>
							<li style="margin-bottom:.1rem;">
								<p>
									1、怎么填写简历
								</p>
								<p>
									从入职定位进入，按照要求进行信息的填写，带有*的是必填项！！！！
								</p>
							</li>
						</ol>
					</div>
				</li>
				<li>
					<div class="li_title">
						<span>问卷调查</span>
						<span>
							<img src="../../src/assets/img/photo/jt_bt2.svg" style="" :class="{imgrotatetop:istop2,imgrotatebottom:isbottom2}"/>
						</span>
					</div>
				</li>
				<li>
					<div class="li_title" @click="userfn">
						<span>用户反馈</span>
						<span>
							<img src="../../src/assets/img/photo/jt_bt2.svg" style="" :class="{imgrotatetop:istop3,imgrotatebottom:isbottom3}"/>
						</span>
					</div>
					<div :class="{transition_user:true,tans_top3:istop3,tans_bottom3:isbottom3}">
						<group>
					      <x-textarea :placeholder="$t('随便写点什么')" :height="100"></x-textarea>
					  </group>
					    <x-button>提交</x-button>
					</div>
				</li>
			</ul>
			
		</div><!--中间主体-->
  	</div>
</template>
<script>
import { XHeader, GroupTitle, XButton, Grid, GridItem, Group, XInput, XTextarea } from 'vux'


export default {
  components: {
    GroupTitle,
    XButton,
    Grid,
    GridItem,
    Group,
    XHeader,
    XInput,
    XTextarea
  },
  ready () {
  },
  methods: {
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    },
    questionfn () {
    	var getnextdiv=document.getElementsByClassName('transition_question')[0];
    	if(!this.istop){
    		this.istop=true;
    		this.isbottom=false;
    	}else{
    		this.istop=false;
    		this.isbottom=true;
    	}
    },
    userfn () {
    	if(!this.istop3){
    		this.istop3=true;
    		this.isbottom3=false;
    	}else{
    		this.istop3=false;
    		this.isbottom3=true;
    	}
    }
  },
  data () {
    return {
    	istop:false,
    	isbottom:false,
    	istop3:false,
    	isbottom3:false
    }
  }
}
</script>
<style lang="less">
@import '../stylesheet/reset.less';
.help_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
	overflow:hidden;
}
.help_content{
	width:100%;
}
div.help_header{
	width:100%;
}
.help_wrap .vux-header{
	background:#2A7DAD !important;
}
.help_wrap .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.28rem !important;
}
.transition_question{
	max-height:0;
	overflow:hidden;
	background:#f8f8f8;
	font-size:0.23rem;
	margin-left:-.2rem;
	padding-left:.2rem;
	
}
.help_main>ul>li{
	padding:.3rem 0;
	padding-left:.2rem;
}
.li_title{
	display:flex;
	justify-content:space-between;
	align-items:center;

	padding:0.2rem .2rem 0.2rem 0;
	font-size:.3rem;
	border-bottom:1px solid #eaeaea;
}
.li_title>span{
	display:block;
}
.imgrotatetop{
	animation:showrotatetop .3s forwards;
}
@-webkit-keyframes showrotatetop{
	0%{
		transform:rotate(0deg)
	}
	100%{
		transform:rotate(180deg)
	}
}
.imgrotatebottom{
	animation:showrotatebottom .3s forwards;
}
@-webkit-keyframes showrotatebottom{
	0%{
		transform:rotate(180deg)
	}
	100%{
		transform:rotate(0deg)
	}
}
.tans_top{
	animation:heighttop 3s forwards;
}
@-webkit-keyframes heighttop{
	0%{
		max-height:0
	}
	100%{
		max-height:6rem
	}
}
.tans_bottom{
	animation:heightbottom .5s forwards;
}
@-webkit-keyframes heightbottom{
	0%{
		max-height:6rem
	}
	100%{
		max-height:0
	}
}
.transition_user{
	height:0;
	overflow:hidden;
	background:#f8f8f8;
	margin-left:-.2rem;
	padding-left:.2rem;
}
.tans_top3{
	animation:heighttop3 .8s forwards;
}
@-webkit-keyframes heighttop3{
	0%{
		height:0
	}
	100%{
		height:5rem
	}
}
.tans_bottom3{
	animation:heightbottom3 .4s forwards;
}
@-webkit-keyframes heightbottom3{
	0%{
		height:5rem
	}
	100%{
		height:0
	}
}
.help_main .weui-btn_default{
	background:#2A7DAD !important;
	color:#fff !important;
	margin-top:1rem;
}
</style>
