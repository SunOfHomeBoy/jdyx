<template>
  <div style="height:100%;">
    <!-- <loading :show="isLoading" position="absolute"></loading> -->
    <loading :show="isLoading" position="absolute" text="加载中"></loading>
    <view-box ref="viewbox" :body-padding-bottom='50'>
      <!--header slot-->
     
      <!--default slot-->
      <transition :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
	      <router-view></router-view>
      </transition>
      <!--bottom slot-->
      <tabbar class="vux-demo-tabbar" icon-class="vux-center" v-show="!isTabbarDemo" slot="bottom">
        <tabbar-item :link="{path:'/'}" :selected="$route.path === '/'">
          <span class="demo-icon-22" slot="icon"><img src="../src/assets/img/login/home page_icon.png"/></span>
          <span class="demo-icon-22" slot="icon-active"><img src="../src/assets/img/login/home pagehei_icon.png"/></span>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/Rcss'}" :selected="$route.path === '/Rcss'">
          <span class="demo-icon-22" slot="icon"><img src="../src/assets/img/login/seek_icon.png"/></span>
          <span class="demo-icon-22" slot="icon-active"><img src="../src/assets/img/login/seekhei_icon.png"/></span>
          <span slot="label">人才搜索</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/Rcgx'}" :selected="$route.path === '/Rcgx'">
          <span class="demo-icon-22" slot="icon"><img src="../src/assets/img/login/sharehei_icon.png"/></span>
          <span class="demo-icon-22" slot="icon-active"><img src="../src/assets/img/login/share_icon.png"/></span>
          <span slot="label">人才共享</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/Editresume'}" :selected="$route.path === '/Editresume'">
        	<span class="demo-icon-22" slot="icon-active"><img src="../src/assets/img/login/locitionhei_icon.png"/></span>
          <span class="demo-icon-22" slot="icon"><img src="../src/assets/img/login/location_icon.png"/></span>
          <span slot="label">入职定位</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/Myself'}" :selected="$route.path === '/Myself'">
          <span class="demo-icon-22" slot="icon"><img src="../src/assets/img/login/my_icon.png"/></span>
          <span class="demo-icon-22" slot="icon-active"><img src="../src/assets/img/login/myhei_icon.png"/></span>
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
      <!--<div class="rcssxq_foot" v-show="!isbottomtwo">
	    	<div class="foot_evaluate">
	    		<router-link to="/Evaluate">
	    			我要评价
	    		</router-link>
	    	</div>
	    	<div>
	    		查看联系方式
	    	</div>
	    </div>-->
    </view-box>
  </div>
</template>

<script>
import { Swiper, SwiperItem, Tabbar, TabbarItem, Loading, ViewBox, XHeader, Grid, GridItem, Group, Cell } from 'vux'
import store from './vuex/store'

export default {
  components: {
    Swiper,
  	SwiperItem,
    Tabbar,
    TabbarItem,
    Loading,
    ViewBox,
    XHeader,
    Grid,
    GridItem,
    Group,
    Cell,
  },
  created () {
  	
  	
  },
  data () {
    return {
      routerTransition: {
        forward: 'slideRL',
        back: 'slideLR',
      },
      isbottomtwo:true,
      transitionName:"slide-right",
      enterAnimate:'',
      leaveAnimate:''
    }
  },
  methods: {
    scrollTop () {
      this.$refs.viewbox.$refs.viewboxbody.scrollTop = 0
    }
  },
  computed: {
    isTabbarDemo () {
			if(/Aboutus|Banbenteam|Rechargerecord|Login|Personaldata|Jdtt|Zspx|Zspxxq|Evaluate|Myfavourite|Editpwd|Hadview|Byview|Accountmsg|Zhuce|Sz|Rcgxxq|Rcssxq|Zjrecord|Selcity|Teamzj|Personaldata|Recharge|Help|Importmoney|Findpwd/.test(this.$route.path)){
					return true;
			}else{
					return false;
			}
   },
  },
  watch: {
  	'$route' (to, from) {
	    const toDepth = to.path.split('/').length
	    const fromDepth = from.path.split('/').length
	   /* if(toDepth === fromDepth) {
	    	
				return 
			}*/
	    if(toDepth > fromDepth){//往子页面跳转
	    	this.enterAnimate='animated fadeInRight';
	    	this.leaveAnimate='animated fadeOutRight'
	    }else if(toDepth === fromDepth){
	    	this.enterAnimate='animated'
	    	this.leaveAnimate='animated'
	    }else{
	    	this.enterAnimate='animated fadeInLeft';
	    	this.leaveAnimate='animated fadeOutLeft'
	    }
	    
			/*this.enterAnimate = toDepth > fromDepth
				? 'animated fadeInRight'
				: 'animated fadeInLeft'

			this.leaveAnimate = toDepth > fromDepth
				? 'animated fadeOutRight'
				: 'animated fadeOutLeft'
		*/
	  /*  this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'*/
	    
	  },
	  headerTransition () {
	  		console.log("方向",$store.state.direction);
	  },
	  isbottomtwo () {
    	if(/Accountmsg|Sz|Banbenteam|Aboutus|Evaluate|Myfavourite|Editpwd|Zspx|Jdtt|Zspx|Hadview|Rechargerecord|Zjrecord|Selcity|Teamzj|Personaldata|Recharge|Rcss|Rcgx|Myself|Editresume|Help|Importmoney|Home/.test(this.$route.path)){
    		return true;
    	}else{
    		return false;
    	}
   }
  },
  mounted(){
    
  }
}
</script>

<style lang="less">
@import './stylesheet/reset.less';
.vux-slider>.vux-swiper>.vux-swiper-item>a>.vux-img{
	background-size:100% 100% !important;
}
.jdyx_footer{
		width:100%;
		height: 1.2rem;
		border-top:1px #000 solid;
		font-size:0.48rem;
		line-height: 1.2rem;
		text-align: center;
		position: absolute;
		bottom: 0;
		z-index: 1;
}
.weui-tab__panel{
	overflow:hidden !important;
}

#vux-header{
  background-color:#2A7DAD;
}
/* v-r-transition, default is {forward: 'forward', back: 'back'}*/
.forward-enter, .forward-leave {
  transform: translate3d(-100%, 0, 0);
}
.back-enter, .back-leave {
  transform: translate3d(100%, 0, 0);
}
.demo-icon-22 {
  font-family: 'vux-demo';
  font-size: 22px;
  color: #888;
}
.weui_tabbar.vux-demo-tabbar {
  backdrop-filter: blur(10px);
  background-color: none;
  background: rgba(247, 247, 250, 0.5);
}
.vux-demo-tabbar .weui_bar_item_on .demo-icon-22 {
  color: #F70968;
}
.vux-demo-tabbar .weui_tabbar_item.weui_bar_item_on .weui_tabbar_label {
  color: #35495e;
}
.vux-demo-tabbar .weui_tabbar_item.weui_bar_item_on .vux-demo-tabbar-icon-home {
  color: rgb(53, 73, 94);
}
.demo-icon-22:before {
  content: attr(icon);
}
.vux-demo-tabbar-component {
  background-color: #F70968;
  color: #fff;
  border-radius: 7px;
  padding: 0 4px;
  line-height: 14px;
}
.weui_tabbar_icon + .weui_tabbar_label {
  margin-top: 0!important;
}
.vux-demo-header-box {
  z-index: 100;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
/*动画*/
.slide-right-enter-active{
	animation:popInRightceneter .5s forwards;
}
.slide-right-leave-active{
	animation:popInRightleave .5s forwards;
}


@keyframes popInRightceneter {
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popInRightleave {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(100%, 0, 0);
  }
}

.slide-left-enter-active{
	animation:popInLeftceneter .5s forwards;
}
.slide-left-leave-active{
	animation:popInLeftleave .5s forwards;
}
@keyframes popInLeftceneter {
  from {
    transform: translate3d(100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popInLeftleave {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}




/*pull-to组件的字体大小*/
p.default-text{
	font-size:.23rem;
}


.animated {
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    /*animation: 0.25s linear;*/
}
@keyframes fadeInRight {
    from {
        opacity: 1;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}
 
.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}


@keyframes fadeInLeft {
    from {
        opacity: 1;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
}

.fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
}

@keyframes fadeOutLeft {
    from {
        opacity: 1;
    }
    to {
        opacity: 1;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
}

.fadeOutLeft {
    -webkit-animation-name: fadeOutLeft;
    animation-name: fadeOutLeft;
}

@keyframes fadeOutRight {
    from {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
}

.fadeOutRight {
    -webkit-animation-name: fadeOutRight;
    animation-name: fadeOutRight;
}

/*loading*/
.weui-toast{
	width:2.3rem !important;
	min-height:.16rem !important;
}
</style>
