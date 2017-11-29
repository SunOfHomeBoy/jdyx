<template>
	<div class="sz_wrap">
		<div class="sz_content sz_header">
			<x-header :left-options="{showBack: true,backText:''}">设置</x-header>
		</div>
	    <div class="sz_main">
	    	<group>
    		  <cell :title="$t('修改密码')"  :link="{path:'/Myself/Sz/Editpwd'}">
		        <img slot="icon"  style="display:block;margin-right:5px;width:.4rem;height：0.39rem;" src="../../../src/assets/img/login/to lock_icon.png">
		      </cell>
		      <cell :title="$t('版本更新')"  :link="{path:'/Myself/Sz/Banbenteam'}">
		        <img slot="icon"  style="display:block;margin-right:5px;width:.5rem;height：0.39rem;"  src="../../../src/assets/img/login/set_icon.png">
		      </cell>
		      <cell :title="$t('帮助反馈')"  :link="{path:'/Myself/Sz/Help'}">
		        <img slot="icon"  style="display:block;margin-right:5px;width:.4rem;height：0.39rem;"  src="../../../src/assets/img/login/Help feedback_icon.png">
		      </cell>
		      <cell :title="$t('关于我们')"  :link="{path:'/Myself/Sz/Aboutus'}">
		        <img slot="icon"  style="display:block;margin-right:5px;width:.4rem;height：0.39rem;" src="../../../src/assets/img/login/About Us_icon.png">
		      </cell>
		    </group>
	    </div> 
	    <div style="width:65%;margin:auto;margin-top:1rem;">
	    	<x-button type="primary" text="退出登录"></x-button>
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
  XInput
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
    XInput
  },
  created() {},
  mounted() {},
  methods: {
    onSwiperItemIndexChange(index) {}
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
@import "../../stylesheet/reset.less";
.sz_wrap {
  width: 100%;
  height: 100%;
}
.sz_content {
  width: 100%;
}
.sz_wrap .vux-header .vux-header-title {
  font-family: "PingFangSC-Light" !important;
  font-size: 0.28rem !important;
}
.vux-header {
  background: #2a7dad !important;
}

.weui-btn_primary {
  background-color: #2a7dad !important;
}

.sz_wrap .vux-label {
  font-size: 0.23rem;
  padding-left: 0.2rem;
  color: #424242;
}
.sz_wrap .weui-cells {
  border-top: 0 !important;
  margin-top: 0 !important;
}
.sz_wrap .weui_btn_primary {
  background: #2a7dad !important;
}
.sz_wrap .weui_cells {
  font-size: 0.23rem !important;
  color: #424242 !important;
}
.sz_wrap .weui_cell_primary {
  padding-left: 0.2rem;
}
.sz_wrap .vux-no-group-title {
  margin: 0 !important;
}

.sz_wrap .weui-cell {
  padding: 0.4rem 0.3rem !important;
}
</style>
