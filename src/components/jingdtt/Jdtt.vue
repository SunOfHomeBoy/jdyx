<template>
	<div class="JD_jdtt_wrap">
		<div class="JD_jdtt_content JD_jdtt_header">
			<x-header :left-options="{showBack:true,backText:''}">{{title}}</x-header>
		</div>
		<div class="JD_jdtt_content JD_jdtt_main">
			<div class="JD_jdtt_main_tab">
				<div class="JD_header">
					<div class="JD_f-hideScrollBar JD_f-toh">
            <!-- 新闻title -->
						<template v-for="(it,index) in tabs">
							<div :class="['item',{active:isactive==index}]" :key="index" @click="clicktabsFn(index)">
								{{it.name}}
							</div>
						</template>
					</div>
				</div>
			</div>
			<div class="JD_jdtt_main_contains">
				<pull-to :bottom-load-method="loadmore" @bottom-state-change="changebottomfn" :bottom-config="{pullText: '上拉加载',triggerText: '释放更新',loadingText: '加载中...',doneText: '加载完成',failText: '加载失败',loadedStayTime: 400,stayDistance: 50,triggerDistance: 70}" >
					<div>
						<div class="JD_jdtt_main_contains_img">
              <!-- 此处banner存疑，可以动态加载 -->
							<img :src="jdttBanner"/>
						</div>
						<ul>
<!-- 
<template v-if="articles.length === 0">
      <p class="nocontent"><b>{{tags}}</b> 没有内容</p>
    </template>
    <template v-else>
      <li v-for="(item,ind) in articles" :key="ind" class="item">
        <ItemColumns :article="item"></ItemColumns>
      </li>
    </template> -->

              
              <template v-if="jdtt_contents === 0">
                <p class="nocontent"><b>{{tags}}</b>没有内容</p>
              </template>
              <template v-else>
                <li v-for="(item,index) in jdtt_contents" :key="index">
                  <!-- 路由挂载 -->
                  <router-link :to="`${componentName}/${item.articleID}`">
                    <dl>
                      <dt>
                        <!-- 图片的src必须动态请求 -->
                        <img :src="item.thumb" />  
                      </dt>
                      <dd>
                        <h4>{{item.title}}</h4>
                        <p class="des">{{item.description}}</p>
                        <p>{{item.publish}}</p>
                      </dd>
                    </dl>
                  </router-link>
                </li>
              </template>
						</ul>
					</div>
				</pull-to>
			</div>
		</div>
  	</div>
  	
</template>

<script>
import { XHeader, Scroller } from "vux";
import { api } from "../../utils";
import PullTo from "vue-pull-to";
import jdyxBaner from "../../../src/assets/img/login/jdtt_png.png";
export default {
  components: {
    XHeader,
    Scroller,
    PullTo
  },
  watch: {
    $router: function(to,from) {
     console.log(to,from);
      
    }
  },
  created() {
    /*var bb=document.getElementsByClassName('weui_tab_bd')[0];
  	bb.style.paddingBottom=0;
    bb.style.overflow='hidden';*/
    this.consoleRouter();
    var o = {
      articleType: "knowledge",
      articleLang: "cn",
      begin: this.pageparam.index,
      limit: this.pageparam.limit
    };
    api("/article/listNews", o, callback => {
      var zspxdata = callback.data.items;
      this.jdtt_contents = zspxdata;
      console.log(zspxdata);
    });
  },
  data() {
    return {
      index: 0,
      isactive: 0,
      title: "",
      tabs: [
        { name: "京典头条" },
        { name: "京典新闻" },
        { name: "京典国际" },
        { name: "京典公益" },
        { name: "京典公益" }
      ],
      componentName:'',
      jdttBanner: jdyxBaner,
      itemSrc: require("../../../src/assets/img/photo/02.jpg"),
      jdtt_contents: [],
      pageparam: { index: 1, limit: 10 }
    };
  },
  computed: {},
  methods: {
    consoleRouter(){
      console.log(this.$router.history.current.path);
      let curPath=this.$router.history.current.path;
      this.componentName = curPath;
    },
    clicktabsFn(index) {
      this.isactive = index;
      var pinjie = index + 1;
      var knowstr = "news#0" + pinjie;
      var o = {
        articleType: knowstr,
        articleLang: "cn",
        begin: 1,
        limit: this.pageparam.limit
      };
      //切换请求
      api("/article/listNews", o, callback => {
        var zspxdata = callback.data.items;
        this.jdtt_contents = zspxdata;
        console.log(zspxdata);
      });
    },
    loadmore(loaded) {
      //底部上拉时执行的方法
      this.pageparam.index++; //页数增加
      var pinjie = this.isactive + 1;
      var knowstr = "news#0" + pinjie;
      var o = {
        articleType: knowstr,
        articleLang: "cn",
        begin: this.pageparam.index,
        limit: this.pageparam.limit
      };
      api("/article/listNews", o, callback => {
        var zspxdata = callback.data.items;
        for (let i = 0; i < zspxdata.length; i++) {
          this.jdtt_contents.push(zspxdata[i]);
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
    }
  }
};
</script>

<style lang="less">
@import "../../stylesheet/reset.less";
.JD_jdtt_wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.JD_jdtt_header {
  width: 100%;
}
.vux-header {
  background: #2a7dad !important;
}
.JD_jdtt_wrap .vux-header .vux-header-title {
  font-family: "PingFangSC-Light" !important;
  font-size: 0.28rem !important;
}
/*主体*/
div.JD_jdtt_main {
  height: calc(100% - 4rem);
}
div.JD_jdtt_main_contains {
  height: 95%;
}
div.JD_jdtt_main_contains ul {
  padding-left: 0.24rem;
}
div.JD_jdtt_main_contains ul li {
  border-bottom: 1px solid #bbbbbb;
  padding: 0.2rem 0;
}
div.JD_jdtt_main_contains ul li:not(:first-child) {
  margin-top: 0.1rem;
}
div.JD_jdtt_main_contains ul li dl {
  display: flex;
  margin-bottom: 0.1rem;
}
div.JD_jdtt_main_contains ul li dt {
  // width: 2rem;
  // height: 2rem;
  width: 1.76rem;
  height: 1.6rem;
  display: flex;
  align-items: center;
}
div.JD_jdtt_main_contains ul li dt img {
  display: block;
  width: 100%;
  height: 100%;
}
div.JD_jdtt_main_contains ul li dd {
  display: block;
  flex-direction: column;
  color: #bbbbbb;
  margin-left: 0.25rem;
  justify-content: space-between;
}
div.JD_jdtt_main_contains ul li dd h4 {
  width: 4.52rem;
  height: 0.5rem;
  overflow: hidden;
  font-size: 0.3rem;
  font-weight: 500;
  color: #414141;
  line-height: 0.5rem;
  white-space: nowrap;
  word-break: keep-all;
}
div.JD_jdtt_main_contains ul li dd .des {
  // text-overflow: -o-ellipsis-lastline; // 兼容Opera写法
  overflow: hidden;
  width: 4.24rem;
  height: 0.64rem;
  font-size: 0.24rem;
  line-height: 0.32rem;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
div.JD_jdtt_main_contains ul li dd p:nth-of-type(2) {
  // -webkit-text-size-adjust:none !import;
  margin-top: 0.1rem;
  font-size: 0.16rem;
  -webkit-transform: scale(0.75);
  float: left;
}
div.JD_jdtt_main_contains_img {
  width: 100%;
}
div.JD_jdtt_main_contains_img img {
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
.JD_f-toh {
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
</style>
