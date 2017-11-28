<template>
	<div class="JD_jdtt_wrap">
		<div class="JD_jdtt_content JD_jdtt_header">
			<x-header :left-options="{showBack:true,backText:''}">京典头条</x-header>
		</div>
		<div class="JD_jdtt_content JD_jdtt_main">
			<div class="JD_jdtt_main_tab">
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
					<div class="JD_f-hideScrollBar JD_f-toh">
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
							<img src="../../../src/assets/img/login/jdtt_png.png"/>
						</div>
						<ul>
							<li>
								<template v-for="(item,index) in jdtt_contents">
									<dl :key="index">
										<dt>
											<img src="../../../src/assets/img/photo/02.jpg" style="width:2rem;height:2rem;"/>
										</dt>
										<dd>
											<h4>{{item.title}}</h4>
											<p>{{item.description}}</p>
											<p>{{item.publish}}</p>
										</dd>
									</dl>
								</template>
							</li>
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
export default {
  components: {
    XHeader,
    Scroller,
    PullTo
  },
  created() {
    /*var bb=document.getElementsByClassName('weui_tab_bd')[0];
  	bb.style.paddingBottom=0;
  	bb.style.overflow='hidden';*/
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
      tabs: [
        { name: "京典头条" },
        { name: "京典新闻" },
        { name: "京典国际" },
        { name: "京典公益" },
        { name: "京典公益" }
      ],
      jdtt_contents: [],
      pageparam: { index: 1, limit: 10 }
    };
  },
  methods: {
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
  padding-left: 0.2rem;
  margin-top: 0.2rem;
}
div.JD_jdtt_main_contains ul li {
  border-bottom: 1px solid #bbbbbb;
  padding: 0.3rem 0;
}
div.JD_jdtt_main_contains ul li:not(:first-child) {
  margin-top: 0.1rem;
}
div.JD_jdtt_main_contains ul li dl {
  display: flex;
}
div.JD_jdtt_main_contains ul li dt {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
}
div.JD_jdtt_main_contains ul li dt img {
  display: block;
}
div.JD_jdtt_main_contains ul li dd {
  display: flex;
  flex-direction: column;
  font-size: 0.23rem;
  color: #bbbbbb;
  margin-left: 0.2rem;
  justify-content: space-between;
}
div.JD_jdtt_main_contains ul li dd h4 {
  font-size: 0.3rem;
  color: #414141;
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
