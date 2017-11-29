<template>
	<div class="JD_teamzjrecord_wrap">
		<div class="JD_teamzjrecord_content JD_teamzjrecord_header">
			<x-header :left-options="{showBack:true,backText: ''}">组件记录</x-header>
		</div>
	    <div class="JD_teamzjrecord_main">
	    	<ul>
	    		<li>
	    			<span>
	    				单位名称：
	    			</span>
	    			<span>
	    				{{name}}
	    			</span>
	    		</li>
	    		<li>
	    			<span>
	    				需求人数：
	    			</span>
	    			<span>
	    				{{number}}
	    			</span>
	    		</li>
	    		
	    		<li>
	    			<span>
	    				用人时间：
	    			</span>
	    			<span>
	    				{{time}}
	    			</span>
	    		</li>
	    		<li>
	    			<span>
	    				项目预算：
	    			</span>
	    			<span>
	    				{{project}}
	    			</span>
	    		</li>
	    		<li>
	    			<span>
	    				联系电话：
	    			</span>
	    			<span>
	    				{{phone}}
	    			</span>
	    		</li>
	    		<li>
	    			<span>
	    				联系邮箱：
	    			</span>
	    			<span>
	    				{{email}}
	    			</span>
	    		</li>
	    		<li>
	    			<span>
	    				用人地点：
	    			</span>
	    			<span>
							{{address}}
	    			</span>
	    		</li>
	    		<li>
	    			<span>
	    				备注：
	    			</span>
	    			<span>
	    				{{remark}}
	    			</span>
	    		</li>
	    	</ul>
	    </div> 
	    <div class="teamzj_foot">
	    	
	    </div>
    </div>
</template>

<script>
import { XHeader } from "vux";

export default {
  components: {
    XHeader
  },
  ready() {},
  methods: {
    onSwiperItemIndexChange(index) {
      console.log("demo item change", index);
    }
  },
  data() {
    return {
      name: "四海日盛",
      number: "20",
      time: "2017年1月1日",
      project: "20万",
      phone: "15033336666",
			email: "123456789@123.com",
      address: "北京市通州区北京one",
      remark: "……"
    };
  }
};
</script>

<style lang="less">
@import "../../stylesheet/reset.less";
.JD_teamzjrecord_wrap .vux-header {
  background: #2a7dad !important;
}
.JD_teamzjrecord_wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /*justify-content:space-between;*/
}

.JD_teamzjrecord_wrap .vux-header .vux-header-title {
  font-family: "PingFangSC-Light" !important;
  font-size: 0.28rem !important;
}
.JD_teamzjrecord_main ul {
  padding-left: 0.2rem;
}
.JD_teamzjrecord_main ul li {
  border-bottom: 1px solid #ececec;
  display: flex;
  align-items: center;
  font-size: 0.23rem;
  padding: 0.5rem 0;
}
.JD_teamzjrecord_main ul li span:nth-child(1) {
  color: #000;
}
.JD_teamzjrecord_main ul li span:nth-child(2) {
  color: #414141;
}
</style>