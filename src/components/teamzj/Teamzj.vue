<template>
	<div class="JD_teamzj_wrap">
		<div class="JD_teamzj_content teamzj_header">
			<x-header :left-options="{showBack:true,backText: ''}">团队组建
				<a slot="right">
					<router-link to="/Teamzj/Zjrecord">组建记录</router-link>
				</a>
			</x-header>
		</div>
	    <div class="JD_teamzj_main">
	    	<div class="JD_teamzj_main_01">
	    		<img :src="JD_teamzj_main_01" style="width:100%;height:100%;"/>
	    	</div>
	    	<div class="JD_teamzj_main_02">
	    		<p><img :src="JD_teamzj_main_02" style="width:.8rem;height:.5rem;"/></p>
	    		<div style="font-size:.3rem;color:#000;padding:0.1rem 0;">{{title}}</div>
	    		<div style="font-size:0.23rem;line-height: .4rem;">{{description}}</div>
	    	</div>
	    	<div class="JD_teamzj_main_03">
	    		<p>
	    			<img :src="JD_teamzj_main_03" style="width:.8rem;height:.5rem;"/>
	    		</p>
	    		<div style="font-size:.3rem;color:#000;padding:0.1rem 0;">企业需求</div>
	    		<div class="JD_teamjz_inputs" style="margin-left:-10px;">
						<group placeholder-align='left'>
							<x-input title="单位名称" placeholder="请在此处填写单位名称" placeholder-align="left" v-model="params.name"   required></x-input>
							<x-input title="需求人数" placeholder="请在此处填写需求人数" placeholder-align="left" v-model="params.peoplenum" required></x-input>
							<x-input title="用人时间" placeholder="请在此处填写用人时间"  placeholder-align="left" v-model="params.employtime" required></x-input>
							<x-input title="项目预算" placeholder="请在此处填写项目预算" placeholder-align="left" v-model="params.projectbudget" required></x-input>
							<x-input title="联系电话" placeholder="请在此处填写联系电话"  placeholder-align="left" v-model="params.telephone" is-type="china-mobile"></x-input>
							<x-input title="联系邮箱" placeholder="请在此处填写联系邮箱" placeholder-align="left" v-model="params.email" is-type="email"></x-input>
							<x-input title="用人地点" placeholder="请在此处填写用人地点"  placeholder-align="left" v-model="params.address" required></x-input>
							<x-input title="备注" placeholder="请在此处填写备注" placeholder-align="left" v-model="params.remark"></x-input>
						</group>
	    		</div>
	    	</div>
	    	<toast v-model="showPositionValue" type="text" :time="800" is-show-mask position="middle" width="2rem">{{toasttitle}}</toast>
	    </div> 
	    <div class="teamzj_foot">
	    	<button @click="submitfn">
	    		确认提交
	    	</button>
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
  Toast
} from "vux";

import { api } from "../../utils";
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
    Toast
  },
  ready() {},
  methods: {
    onSwiperItemIndexChange(index) {
      console.log("demo item change", index);
    },
    validName(value) {
      let bb = value.length <= 0 ? false : true;
      console.log(value.length == 0);
      return {
        valid: bb,
        msg: "wowow"
      };
    },
    validTel(value) {
      var tt = /^1[3|4|5|7|8]{1}\d{9}$/.test(value);
      return {
        valid: tt,
        msg: "wowow"
      };
    },
    blurnamefn() {
      console.log(2434);
      this.showPositionValue = true;
      this.toasttitle = "此处不能为空";
    },
    submitfn() {
      var parameters = this.params;
      for (let i in parameters) {
        console.log(i);
        if (parameters[i] == "") {
					this.showPositionValue = true;
						for (let j in this.validname) {
							if (j == i) {
								this.toasttitle = this.validname[j] + "不能为空";
							}
						}
          return false;
        } else {
          if (i == "telephone") {
            let vp = /^1[3|4|5|7|8]{1}\d{9}$/.test(parameters[i]);
            if (!vp) {
              this.showPositionValue = true;
              this.toasttitle = "手机格式不对";
              return false;
            }
          } else if (i == "email") {
            var ve = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(
              parameters[i]
            );
            if (!ve) {
              this.showPositionValue = true;
              this.toasttitle = "邮箱格式不对";
              return false;
            }
          }
        }
      }
      api("/team/addTeam", parameters, callback => {
        var zspxdata = callback.data.items;
      });
    }
  },
  data() {
    return {
      params: {
        name: "",
        peoplenum: "",
        employtime: "",
        projectbudget: "",
        telephone: "",
        email: "",
        address: "",
        remark: ""
      },
      title: "京典一线团队组建",
      description: "京典一线全球人的平台，庞大的服务团队，为您提供全球最好的服务。京典一线全球人的平台，庞大的服务团队，为您提供全球最好的服务。京典一线全球人的平台，庞大的服务团队，为您提供全球最好的服务。京典一线全球人的平台",
      JD_teamzj_main_01: require("../../../src/assets/img/login/zspx.png"),
      JD_teamzj_main_02: require("../../../src/assets/img/login/tdzj1.png"),
      JD_teamzj_main_03: require("../../../src/assets/img/login/tdzj2.png"),
      toasttitle: "",
      showPositionValue: false,
      validname: {
        name: "单位名称",
        peoplenum: "需求人数",
        employtime: "用人时间",
        projectbudget: "项目预算",
        telephone: "联系电话",
        email: "邮箱",
        address: "用人地点"
      }
    };
  }
};
</script>

<style lang="less">
@import "../../stylesheet/reset.less";
.JD_teamzj_wrap .weui-label {
  font-size: 0.23rem !important;
  color: #000 !important;
}
.JD_teamzj_wrap .input::-webkit-input-placeholder {
  color: #c0c0c0;
  font-size: 0.23rem;
}
.JD_teamzj_wrap .weui-input {
  font-size: 0.23rem !important;
}
.JD_teamzj_wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /*justify-content:space-between;*/
}
.sz_content {
  width: 100%;
}
.JD_teamzj_wrap .vux-header {
  background: #2a7dad !important;
}
.JD_teamzj_wrap .vux-header .vux-header-title {
  font-family: "PingFangSC-Light" !important;
  font-size: 0.28rem !important;
}
.JD_teamzj_main {
  height: 100%;
  overflow: auto;
}
div.JD_teamzj_main_02,
div.JD_teamzj_main_03 {
  font-size: 0.23rem;
  color: #676767;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  margin-top: 0.2rem;
}

.teamzj_foot {
  width: 100%;
  height: 1rem;
  position: absolute;
  bottom: 0;
  font-size: 0.3rem;
}
.teamzj_foot > button {
  width: 100%;
  height: 100%;
  display: block;
  background: #2a7dad;
  color: #fff;
  border: 0;
}
</style>
