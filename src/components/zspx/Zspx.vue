<template>
	<div class="JD_zspx_wrap">
		<div class="JD_zspx_content JD_zspx_header">
			<x-header :left-options="{showBack:true,backText: ''}">知识培训</x-header>
		</div>
		<div class="JD_zspx_content JD_zspx_main">
			<div class="JD_zspx_main_tab">
				<div class="JD_header">
					<!--<scroller lock-y :scrollbar-x=false>
						<div class="box1">
				        	<template v-for="(it,index) in tabs">
								<div :class="['box1-item',{active:isactive==index}]" @click="clicktabsFn(index)">
									{{it.name}}
								</div>
							</template>
				        </div>
					</scroller>-->
					<div class="JD_f-hideScrollBar f-toh">
						<template v-for="(it,index) in tabs">
							<div :class="['item',{active:isactive==index}]" :key="index" @click="clicktabsFn(index)">
								{{it.name}}
							</div>
						</template>
					</div>
				</div>
			</div>
			<div class="JD_zspx_main_contains">
				<!--<section v-for="(item,index) in list">-->
					<!--<scroller height="-170" lock-x ref="scrollerBottom" :use-pullup=true  @on-pullup-loading="loadmore">-->
					<pull-to :bottom-load-method="loadmore" @bottom-state-change="changebottomfn" :bottom-config="{pullText: '上拉加载',triggerText: '释放更新',loadingText: '加载中...',doneText: '加载完成',failText: '加载失败',loadedStayTime: 400,stayDistance: 50,triggerDistance: 70}" >
						<div>
							<div class="JD_zspx_main_contains_img">
								<img src="../../../src/assets/img/login/jdtt_png.png"/>
							</div>
							<ul>
								<template v-for="(item,index) in zspx_contents">
									<li>
									<!--<router-link  :to="{name:'Zspxxq',params:{id:item.articleID}}">-->
										<dl>
											<dt>
												<img :src="item.thumb" style="width:2rem;height:2rem;"/>
											</dt>
											<dd>
												<h4>{{item.title}}</h4>
												<p>
													{{item.description}}
												</p>
												<p>
													{{item.publish}}
												</p>
											</dd>
										</dl>
									<!--</router-link>-->
								</li>
								</template>
								
								
							</ul>
						</div>
						
					<!--</scroller>-->
					</pull-to>
				<!--</section>-->
				
			</div>
		</div>
  	</div>
  	
</template>

<script>
import {
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
  XInput,
  Tab,
  TabItem,
  Scroller
} from "vux";
import { api } from "../../utils";
import PullTo from "vue-pull-to";
export default {
  components: {
    GroupTitle,
    XButton,
    Divider,
    Grid,
    GridItem,
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    XHeader,
    XInput,
    Tab,
    TabItem,
    Scroller,
    PullTo
  },
  created() {
    var o = {
      articleType: "knowledge",
      articleLang: "cn",
      begin: this.pageparam.index,
      limit: this.pageparam.limit
    };
    api("/article/listKnowledge", o, callback => {
      var zspxdata = callback.data.items;
      this.zspx_contents = zspxdata;
    });
  },
  data() {
    return {
      index: 0,
      isactive: 0,
      tabs: [
        { name: "职场建议" },
        { name: "考试认证" },
        { name: "互联网" },
        { name: "兴趣特征" },
        { name: "兴趣爱好" }
      ],
      zspx_contents: [], //存储知识培训列表内容
      onFetching: false,
      pageparam: { index: 1, limit: 10 },
      iconLink: "" //上拉刷新的图标
    };
  },
  methods: {
    clicktabsFn(index) {
      //点击每个tab的时候
      this.isactive = index; //用于切换class
      var pinjie = index + 1;
      var knowstr = "knowledge#0" + pinjie;
      var o = {
        articleType: knowstr,
        articleLang: "cn",
        begin: 1,
        limit: this.pageparam.limit
      };
      //切换请求
      api("/article/listKnowledge", o, callback => {
        var zspxdata = callback.data.items;
        this.zspx_contents = zspxdata;
      });
    },
    loadmore(loaded) {
      this.pageparam.index++;
      var pinjie = this.isactive + 1;
      var knowstr = "knowledge#0" + pinjie;
      var o = {
        articleType: knowstr,
        articleLang: "cn",
        begin: this.pageparam.index,
        limit: this.pageparam.limit
      };
      api("/article/listKnowledge", o, callback => {
        var zspxdata = callback.data.items;
        for (let i = 0; i < zspxdata.length; i++) {
          this.zspx_contents.push(zspxdata[i]);
        }
        loaded("done");
      });
    },
    changebottomfn(state) {
      if (state === "pull" || state === "trigger") {
        this.iconLink = "#icon-arrow-bottom";
      } else if (state === "loading") {
        this.iconLink = "#icon-loading";
      } else if (state === "loaded-done") {
        this.iconLink = "#icon-finish";
      }
      /*if (this.onFetching) {
        // do nothing
      } else {
        this.onFetching = true;*/
      /*var pinjie=this.isactive+1;
  		var knowstr="knowledge#0"+pinjie;
  		var o={"articleType": knowstr,"articleLang": "cn","begin": 1,"limit":this.pageparam.limit};
  		
        api('/article/listKnowledge', o, callback => {
	  		var zspxdata=callback.data.items;
	  		for(let i=0;i<zspxdata.length-1;i++){
	  			this.zspx_contents.push(zspxdata[i]);
	  		}
	  		this.onFetching = false
	  		console.log(this.zspx_contents)
	       
	    })*/
      /*setTimeout(() => {
          this.zspx_contents.push({title:'语音助理战国时代谁有机会拿下...',content:'从IT到DT，各行各业都会进入一个新发展 周期，重视、投资数据......',time:'2017.01.02 13:30'})
          console.log(222222);
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset()
          })
          this.onFetching = false
        }, 1)*/
      //}
    }
  }
};
</script>

<style lang="less">
@import "../../stylesheet/reset.less";
.JD_zspx_wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.JD_zspx_header {
  width: 100%;
}
.JD_zspx_wrap .vux-header {
  background: #2a7dad !important;
}
.JD_zspx_wrap .vux-header .vux-header-title {
  font-family: "PingFangSC-Light" !important;
  font-size: 0.28rem !important;
}
/*主体*/
div.JD_zspx_main {
  height: calc(100% - 4rem);
}
div.JD_zspx_main_contains {
  height: 90%;
}
div.JD_zspx_main_contains ul {
  padding-left: 0.2rem;
  margin-top: 0.2rem;
}
div.JD_zspx_main_contains ul li {
  border-bottom: 1px solid #bbbbbb;
  padding: 0.3rem 0;
}
div.JD_zspx_main_contains ul li:not(:first-child) {
  margin-top: 0.1rem;
}
div.JD_zspx_main_contains ul li dl {
  display: flex;
}
div.JD_zspx_main_contains ul li dt {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
}
div.JD_zspx_main_contains ul li dt img {
  display: block;
}
div.JD_zspx_main_contains ul li dd {
  display: flex;
  flex-direction: column;
  font-size: 0.23rem;
  color: #bbbbbb;
  margin-left: 0.2rem;
  justify-content: space-between;
}
div.JD_zspx_main_contains ul li dd h4 {
  font-size: 0.3rem;
  color: #414141;
}
div.JD_zspx_main_contains_img {
  width: 100%;
}
div.JD_zspx_main_contains_img img {
  width: 100%;
}
header,
div {
  box-sizing: border-box;
}
/*.header{
	width: 100%;
	height: 50px;
	background-color: #fff;
	overflow: hidden;
}
.box1 {
  height: 50px;
  position: relative;
  width:100%;
  display:flex;
}
.box1 .box1-item {
  flex-grow:1;
  height: 50px;
  display:inline-block;
  margin-left: 15px;
  text-align: center;
  line-height: 50px;
  color:#AFAFAF;
  font-size:0.23rem;
}
.box1 .box1-item.active{
	color: #414141;
}
.box1-item:first-child {
  margin-left: 0;
}*/
.f-toh {
  overflow: scroll;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
.JD_f-hideScrollBar {
  display: flex;
  display: -webkit-flex;
  box-sizing: content-box;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  padding-bottom: 15px;
}
.JD_header {
  width: 100%;
  height: 50px;
  background-color: #fff;
  overflow: hidden;
}
.JD_header .item {
  flex-shrink: 0;
  -webkit-flex-shrink: 0;
  width: 25%;
  height: 100%;
  color: #afafaf;
  font-size: 0.23rem;
  line-height: 50px;
  text-align: center;
  text-transform: uppercase;
}
.JD_header .item.active {
  color: #414141;
}
/*.header .item:not(:last-child){
		border-right: 1px solid rgba(0,0,0,.2);
	}*/

.bottom-load-wrapper {
  line-height: 50px;
  text-align: center;
}
.icon-arrow {
  transition: 0.2s;
  transform: rotate(180deg);
}
.icon-loading {
  transform: rotate(0deg);
  animation-name: loading;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
