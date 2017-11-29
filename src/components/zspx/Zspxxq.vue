<template>
	<div class="JD_zspxxq_wrap">
		<div class="JD_zspx_content JD_zspx_header">
			<x-header :left-options="{showBack:true,backText: ''}">{{titleName}}</x-header>
		</div>
		<div class="JD_zspxxq_content JD_zspxxq_main">
			<div class="title">
				{{title}}
			</div>
			<div class="time">
				{{time}}
			</div>
			<div class="picture">
				<img src="../../../src/assets/img/login/jdtt_png.png" style="width:100%;"/>
			</div>
			<div class="direction">
				{{description}}
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
  Swiper,
  SwiperItem
} from "vux";

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
    Swiper,
    SwiperItem
  },
  data() {
    return {
      curUrl: "",
      titleName: "",
      index: 0,
      isactive: 0,
      title: "俞永福:我们正在经历数据觉醒的时代",
      description:
        "文字描述文字描述文字描述文字描述文字描述 文字描述文字描述文字描述文字描述文字描述文字 描述文字描述文字描述文字描述文字描述文字描述 文字描述文字描述文字描述文字描述。文字描述文 字描述。 文字描述文字描述文字描述文字描述文字描述 文字描述文字描述文字描述文字描述文字描述文字 描述文字描述文字。",
      time: "2017.2.12",
      tabs: [
        { name: "职场认证" },
        { name: "考试认证" },
        { name: "互联网" },
        { name: "兴趣特长" },
        { name: "职场认证" },
        { name: "兴趣特长" },
        { name: "职场认证" }
      ]
    };
  },
  created() {
    this.consoleRouter(); // 检索当前路由并赋值
    // this.redirection(); // 路由重定向
    this.routerReg();
  },
  methods: {
    // 打印当前路由 并赋值
    consoleRouter() {
      console.log(this.$router);
      let curPath = this.$router.history.current.path;
      this.curUrl = curPath;
    },
    // 判断路由 并根据路由加载不同数据
    routerReg() {
      let jdttReg = /Jdtt/;
      let zspxReg = /Zspx/;
      let str = this.curUrl;
      if (jdttReg.test(str)) {
        this.titleName = "经典头条";
      } else if (zspxReg.test(str)) {
        this.titleName = "知识培训";
      } else {
        console.log("我没有识别到路由。。。");
      }
    },
    clicktabsFn(index) {
      console.log(index, event);
      const $ele = event.srcElement || event.target;
      this.isactive = index;
    }
  }
};
</script>

<style lang="less">
@import "../../stylesheet/reset.less";
.JD_zspxxq_wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
}
.JD_zspxxq_header {
  width: 100%;
}
.JD_zspxxq_wrap .vux-header {
  font-size: 0.28rem !important;
  background: #2a7dad !important;
}

/*主体*/
div.JD_zspxxq_main {
  overflow: auto;
  padding: 0 1rem;
}
div.JD_zspxxq_main .title {
  font-size: 1.2rem;
  color: #2a7dad;
}
div.JD_zspxxq_main .time {
  color: #8d8d8d;
  font-size: 0.8rem;
}
div.JD_zspxxq_main .direction {
  font-size: 0.8rem;
  color: #414141;
  text-indent: 2rem;
}
</style>
