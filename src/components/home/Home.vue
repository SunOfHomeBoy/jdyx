<template>
<div style="height:100%;">
	<div style="height:100%;overflow:auto;overflow-x:hidden;">
	<div>
		<div style="position:relative;">
        	<swiper :list="demo03_list" auto style="width:100%;margin:0 auto;" height="200px" dots-class="custom-bottom" dots-position="center"></swiper>
	    	<div class="JD_pos_lefttop">
		    		<div class="JD_first_selcity">
		    			<span>
		    				北京
		    			</span>
		    			<span>
		    				<router-link to="/Selcity">
		    					<img src="../../../src/assets/img/photo/jt_bt3.svg"/>
		    				</router-link>
		    			</span>
		    		</div>
		    		<div class="JD_first_search">
		    			<input type="text" placeholder="请输入岗位、商家名称" class="JD_firstsearch"/>
		    		</div>
		    </div>
    	</div>
	</div>
	<div>
		<div class="JD_content">
     	   <flexbox justify="center" align="center" style="margin-top:.5rem;">
		      <flexbox-item><div>
		      	<dl>
		      		<dt><router-link to="/Editresume"><img :src='sixdata[0].url' class="JD_home_moudle"/></router-link></dt>
		      		<dd class="JD_dlmoudle">{{sixdata[0].name}}</dd>
		      	</dl>
		      </div></flexbox-item>
		      <flexbox-item><div>
		      	<dl>
		      		<dt><router-link to="/Rcss"><img :src="sixdata[1].url" class="JD_home_moudle"/></router-link></dt>
		      		<dd class="JD_dlmoudle">{{sixdata[1].name}}</dd>
		      	</dl>
		      </div></flexbox-item>
		      <flexbox-item><div>
		      	<dl>
		      		<dt><router-link to="/Rcgx"><img :src="sixdata[2].url" class="JD_home_moudle"/></router-link></dt>
		      		<dd class="JD_dlmoudle">{{sixdata[2].name}}</dd>
		      	</dl>
		      </div></flexbox-item>
		    </flexbox>
		    <flexbox justify="center" align="center" style="margin-top:.5rem;margin-bottom:1rem">
		      <flexbox-item><div>
		      	<dl>
		      		<dt><router-link to="/Teamzj"><img :src="sixdata[3].url" class="JD_home_moudle"/></router-link></dt>
		      		<dd class="JD_dlmoudle">{{sixdata[3].name}}</dd>
		      	</dl>
		      </div></flexbox-item>
		      <flexbox-item><div>
		      	<dl>
		      		<dt><router-link to="/Jdtt"><img :src="sixdata[4].url" class="JD_home_moudle"/></router-link></dt>
		      		<dd class="JD_dlmoudle">{{sixdata[4].name}}</dd>
		      	</dl>
		      </div></flexbox-item>
		      <flexbox-item><div>
		      	<dl>
		      		<dt><router-link to="/Zspx"><img :src="sixdata[5].url" class="JD_home_moudle"/></router-link></dt>
		      		<dd class="JD_dlmoudle">{{sixdata[5].name}}</dd>
		      	</dl>
		      </div></flexbox-item>
		    </flexbox>
		    </div>
		    <div class="JD_content JD_jiange"></div>
		    <div class="JD_content">
		    	<p class="JD_showtext">大咖介绍</p>
		    	<p class="JD_underline"></p>
		    	<p class="JD_etext">Introduction to the first line of Beijing classic</p>
		    	<div class="JD_dakaimg">
		    		
		    	</div>
		    </div>
		    <!--<div class="content jiange"></div>-->
		    <div class="JD_content">
		    	<p class="JD_showtext">人才展示</p>
		    	<p class="JD_underline"></p>
		    	<p class="JD_etext">Exhibition of the first-line talents of jingdian</p>
		    	<!--<scroller  lock-x height="200px" ref="scrollerBottom" bounce :use-pullup=true :scroll-bottom-offst="200">-->
				    	<div class="JD_dakaimg">
				    		<group>
				    			<template v-for="(item,index) in telents">
				    				<cell :link="{name:'Rcgxxq',params:{id:item.id,name:'121'}}">
								        <img slot="icon"  style="display:block;margin-right:.2rem;width:1.1rem;height:1.1rem;" src="../../../src/assets/img/login/tx.png">
								        <span slot="title" style="font-size: .32rem;">{{item.name}}</span>
								        <span slot="inline-desc" style="font-size: .23rem;">{{item.introduces}}</span>
							  		</cell>
				    			</template>
				    		</group>
				    	</div>
		    	<!--</scroller>-->
		    </div>
	</div>
	</div>
</div>


</template>

<script>
import { GroupTitle, Grid, GridItem, Group, Cell, Swiper, SwiperItem, Flexbox, FlexboxItem, Scroller } from 'vux'
import {api} from '../../utils'
const imgList = [
  'http://i2.cfimg.com/611341/0a28b7f78ffe5866.jpg',
  'http://i2.cfimg.com/611341/83bdf32640c8ff27.jpg',
  'http://i2.cfimg.com/611341/37221ee190f59394.jpg'
]
const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))
export default {
  components: {
    GroupTitle,
    Grid,
    GridItem,
    Group,
    Cell,
    Swiper,
    SwiperItem,
    Flexbox,
    FlexboxItem,
    Scroller
  },
  created () {
  	api('/article/listKnowledge', {}, callback => {
        	console.log("-=-=-=-=-==-",callback.data.items);
    })
  },
  data () {
    return {
    	demo03_list:demoList,
    	bottomCount: 20,
    	telents:[{name:'任婷焕',introduces:'上海 三年经验 本科',id:'1'},{name:'任婷焕',introduces:'上海 三年经验 本科',id:'2'},{name:'任婷焕',introduces:'上海 三年经验 本科',id:'3'},{name:'任婷焕',introduces:'上海 三年经验 本科',id:'4'},{name:'任婷焕',introduces:'上海 三年经验 本科',id:'5'},{name:'任婷焕',introduces:'上海 三年经验 本科',id:'6'},{name:'任婷焕',introduces:'上海 三年经验 本科',id:'7'},],
    	sixdata:[
    	{"name":"入职定位","url":"http://i1.cfimg.com/611341/d01ef4f6cd4c63ac.png"},
    	{"name":"人才搜索","url":"http://i1.cfimg.com/611341/79203f1f14784e4a.png"},
    	{"name":"人才共享","url":"http://i1.cfimg.com/611341/fd70f22bc27955e4.png"},
    	{"name":"团队组建","url":"http://i1.cfimg.com/611341/8d526cee63efbbe5.png"},
    	{"name":"京典头条","url":"http://i1.cfimg.com/611341/15fd68ae000dbfd3.png"},
    	{"name":"知识培训","url":"http://i1.cfimg.com/611341/159f29f665749ae0.png"}]
    }
  },
  methods : {
  	onScrollBottom () {
  		console.log(1212);
      if (this.onFetching) {
        // do nothing
      } else {
        this.onFetching = true;
        alert(343)
        
        
      }
    }
  }
}

</script>

<style scoped>
@import '../../stylesheet/reset.less';
.jdxy_header{
	width:100%;
	height:16.5rem;
	border-bottom:1px #000 solid;
	font-size:0.48rem;
/*	line-height: 1.2rem;
*/	text-align: center;
	position: absolute;
	top:0;
	z-index: 1;
}
.jdxy_section{
	width:100%;
		height:1.2rem;
		font-size:0.48rem;
		line-height: 1.2rem;
		text-align: center;
		position: absolute;
		top:16.5rem;
		z-index: 1;
}
.badge-value{
  display: inline-block;
}
.center {
  margin-top: 15px;
  text-align: center;
}
.vux-notice {
  color: #666;
  line-height: 40px;
}
.vux-title {
  vertical-align: middle;
  text-align: center;
  color: #04BE02;
  display: inline-block;
  width: 75px;
  height: 75px;
  line-height: 75px;
  border-radius: 50%;
}
.content{
	width:100%;
	background:#fff;
	font-size:.8rem;
}
div.JD_jiange{
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
	font-size:0.2rem;t
	color:#414141;
	font-family:'PingFangSC-Regular';
}

.weui-cells:before{
	border:0 !important;
}
p.JD_underline,p.JD_showtext{
	text-align:center;
}
p.JD_showtext{
	color:#011e2e;
	font-size:.4rem;
	padding-top:0.3rem;
	font-family:"AdobeInvisFont";
}
p.JD_underline{
	width:1rem;
	height:0.02rem;
	margin:auto;
	background:#011e2e;
	margin-top:0.04rem;
	margin-bottom:0.08rem;
}
p.JD_etext{

	font-size:0.23rem;
	color:#011E2E;
	font-family:"AdobeInvisFont";
	text-align:center;
	
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
div.JD_first_selcity{
	display:flex;
	width:21%;
	height:.6rem;
	border:1px solid #fff;
	background:#000;
	opacity:0.333333;
	border-radius:1.2rem;
	justify-content:center;
	align-items: center;
}
div.JD_first_selcity span{
	display:block;
	color:#fff;
	
	font-size:0.23rem;
}
div.JD_first_selcity span:nth-child(1){
	margin-right:0.1rem;
	
}
div.JD_first_selcity span:nth-child(2){
	margin-left:0.1rem;
}
div.JD_first_selcity span:nth-child(2) img{
	width:.2rem;
	height:.2rem;
}
.JD_first_search{
	height:.6rem;
	width:60%;
	display:flex;
}
.JD_first_search input{
	border:1px solid #fff;
	background:#fff;
	border-radius:1.2rem;
	height:.6rem;
	line-height: .6rem;;
	width:100%;
	margin-left:5%;
	background:#fff url('http://i4.cfimg.com/611341/8a7acdc9e214effc.png') no-repeat 8% center;
	background-size:8%;
	outline:none;
	padding-left:18%;
	font-size:0.23rem;
}

.weui_cells:before{
	border-top:0 !important;
}
dd.JD_dlmoudle{
	text-align:center;
	margin-top:0.2rem;
	color:#414141;
	font-size:.2rem;
}
.JD_home_moudle{
	width:40%;
	display:block;
	margin:auto;
}
.JD_pos_lefttop{
	position:absolute;
	left:.1rem;
	top:.3rem;
	width:100%;
	display:flex;
}
</style>
