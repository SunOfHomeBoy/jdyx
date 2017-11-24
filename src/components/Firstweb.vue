<template>
	<div class="wrap">
		<div style="height:calc(100% - 53px);overflow:hidden;overflow-y:scroll;">
			<div class="content">
		    	<swiper :list="demo03_list" auto style="width:100%;margin:0 auto;" height="200px" dots-class="custom-bottom" dots-position="center"></swiper>
		    	<div style="position:absolute;left:1rem;top:1rem;display:flex;">
		    		<div class="first_selcity">
		    			<span>
		    				北京
		    			</span>
		    			<span>
		    				<img src="../img/photo/jt_bt3.svg" style="margin-top:0.55rem;width:2rem;height:1.2rem;"/>
		    			</span>
		    		</div>
		    		<div class="first_search">
		    			<input type="text" placeholder="请输入岗位、商家名称"/>
		    		</div>
		    	</div>
		    </div>
		    <div class="content">
		    	<grid>
			      <grid-item link="/component/cell" :label="$t('入职定位')">
			        <img slot="icon" src="../img/login/dw_icon.png">
			      </grid-item>
			      <grid-item :link="{ path: '/component/cell'}" :label="$t('人才搜索')">
			        <img slot="icon" src="../img/login/sousuo_icon.png">
			      </grid-item>
			      <grid-item link="/component/cell" >
			        <img slot="icon" src="../img/login/gx_icon.png">
			        <span slot="label">{{ $t('人才共享') }}</span>
			      </grid-item>
		    	</grid>
		    </div>
		    <div class="content bottomcell">
		    	<grid>
			      <grid-item link="/component/cell" :label="$t('团队组建')">
			        <img slot="icon" src="../img/login/td_icon.png">
			      </grid-item>
			      <grid-item :link="{ path: '/component/cell'}" :label="$t('经典头条')">
			        <img slot="icon" src="../img/login/jdtt_icon.png">
			      </grid-item>
			      <grid-item link="/component/cell" >
			        <img slot="icon" src="../img/login/zspx_icon.png">
			        <span slot="label">{{ $t('知识培训') }}</span>
			      </grid-item>
		    	</grid>
		    </div>
		    <div class="content jiange"></div>
		    <div class="content">
		    	<p class="showtext">大咖介绍</p>
		    	<p class="underline"></p>
		    	<p class="etext">Introduction to the first line of Beijing classic</p>
		    	<div class="dakaimg">
		    		<dl>
		    			<dt>
		    				<img src="" />
		    			</dt>
		    			<dd>
		    				
		    			</dd>
		    		</dl>
		    	</div>
		    	
		    </div>
		    <div class="content jiange"></div>
		    <div class="content">
		    	<p class="showtext">人才展示</p>
		    	<p class="underline"></p>
		    	<p class="etext">Exhibition of the first-line talents of jingdian</p>
		    	<div class="dakaimg">
		    		<group>
		    			<cell :title="$t('李小璐')" is-link inline-desc="上海  3年经验  本科">
				        <img slot="icon"  style="display:block;margin-right:2rem;width:4.5rem;" src="../img/login/tx.png">
				      </cell>
				      <cell :title="$t('马伯骞')" is-link inline-desc="ewewe">
				        <img slot="icon"  style="display:block;margin-right:2rem;width:4.5rem;"  src="../img/login/tx.png">
				      </cell>
				      <cell :title="$t('毛不易')" is-link inline-desc="ewewe">
				        <img slot="icon"  style="display:block;margin-right:2rem;width:4.5rem;"  src="../img/login/tx.png">
				      </cell>
				      <cell :title="$t('李小璐')" is-link inline-desc="上海  3年经验  本科">
				        <img slot="icon"  style="display:block;margin-right:2rem;width:4.5rem;" src="../img/login/tx.png">
				      </cell>
				      <cell :title="$t('马伯骞')" is-link inline-desc="ewewe">
				        <img slot="icon"  style="display:block;margin-right:2rem;width:4.5rem;"  src="../img/login/tx.png">
				      </cell>
				      <cell :title="$t('毛不易')" is-link inline-desc="ewewe">
				        <img slot="icon"  style="display:block;margin-right:2rem;width:4.5rem;"  src="../img/login/tx.png">
				      </cell>
		    		</group>
		    		
		    	</div>
		    		
		    </div>
		  </div> 
					<tabbar>
			      <tabbar-item>
			        <img slot="icon" src="../img/login/home page_icon.png">
			        <span slot="label">Wechat</span>
			      </tabbar-item>
			      <tabbar-item show-dot>
			        <img slot="icon" src="../img/login/seek_icon.png">
			        <span slot="label">Message</span>
			      </tabbar-item>
			      <tabbar-item selected link="/component/demo">
			        <img slot="icon" src="../img/login/sharehei_icon.png">
			        <span slot="label">Explore</span>
			      </tabbar-item>
			      <tabbar-item>
			        <img slot="icon" src="../img/login/location_icon.png">
			        <span slot="label">News</span>
			      </tabbar-item>
			      <tabbar-item>
			        <img slot="icon" src="../img/login/my_icon.png">
			        <span slot="label">News</span>
			      </tabbar-item>
			    </tabbar>
	      
  </div>
</template>

<script>
import { Swiper, GroupTitle, SwiperItem, XButton, Divider, Grid, GridItem, Tabbar, TabbarItem, Group, Cell } from 'vux'
const imgList = [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]
const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))
console.log(demoList);
export default {
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider,
    Grid,
    GridItem,
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  ready () {
  },
  methods: {
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    }
  },
  data () {
    return {
      demo03_list: demoList
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';


html,body{
	width:100%;
	height:100%;
	font-size:62.5%;
}
.wrap{
	width:100%;
	height:100%;
}
.content{
	width:100%;
}
div.jiange{
	background:#FBFAFF;
	height:0.25rem;
	border-top:1px solid #eaeaea;
	border-bottom:1px solid #eaeaea;
}
.weui-grid:before{
	border:none !important;
}
.weui-grid:after{
	border:none !important;
}
.weui-grids:before{
	border:none !important;
}
.weui-grids:after{
	border:none !important;
}
.weui-grid span{
	font-size:0.2rem;
	color:#414141;
	font-family:'PingFangSC-Regular';
}

.weui-cells:before{
	border:0 !important;
}
p.underline,p.showtext{
	text-align:center;
}
p.showtext{
	color:#011e2e;
	font-size:2rem;
	line-height:2rem;
	margin-top:0.8rem;
	font-family:"AdobeInvisFont";
}
p.underline{
	width:3rem;
	height:0.1rem;
	margin:auto;
	background:#011e2e;
	
}
p.etext{
	height:1.2rem;
	line-height: 1.2rem;
	font-size:0.8rem;
	color:#011E2E;
	font-family:"AdobeInvisFont";
	text-align:center;
	margin-top:0.7rem;
}
div.bottomcell a.weui-grid{
	padding:10px 20px;
}
.weui-grid__icon{
	width:4.5rem !important;
	height:4.5rem !important;
}
.vux-label{
	font-size:1.6rem;
}
.vux-label-desc{
	font-size:1.2rem !important;
}
div.first_selcity{
	display:flex;
	width:5rem;
	height:2.25rem;
	border:1px solid #fff;
	background:#000;
	opacity:0.333333;
	border-radius:1.2rem;
}
div.first_selcity span{
	display:block;
	color:#fff;
	margin-left:-0.2rem;
}
div.first_selcity span:nth-child(1){
	margin-left:0.8rem;
	margin-top:0.3rem;
}
.first_search input{
	border:1px solid #fff;
	background:#fff;
	border-radius:1.2rem;
	height:2.25rem;
	padding-left:5rem;
	width:16rem;
	margin-left:1rem;
	background:#fff url('../img/icons/search.png') no-repeat 2.5rem center;
	background-size:8%;
	outline:none;
}
input::-webkit-input-placeholder{
	color:#ABABAB;
	font-size:1.4rem;
}
</style>
