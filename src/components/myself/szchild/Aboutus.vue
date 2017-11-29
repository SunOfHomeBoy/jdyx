<template>
	<div class="aboutus_wrap">
		<div class="aboutus_content aboutus_header">
			<x-header title="关于我们"  :left-options="{showBack:true,backText:''}"></x-header>
		</div>
		<div class="aboutus_content aboutus_main">
				<dl style="width:2.4rem;margin:auto;margin-top:.4rem;">
					<dt style="height:3rem;">
						<img src="../../../../src/assets/img/login/gywm_tx.png" style="width:2.4rem;height:3rem;"/>
					</dt>
					<dd style="font-size:0.23rem;color:#414141;text-align: center;margin-top:.1rem;">
						版本号 V1.0
					</dd>
				</dl>
				<div class="direction" style="padding:0 .2rem;text-indent: .5rem;line-height:.6rem;margin-top:1rem;font-size:.23rem;">
					京典一线网络技术（北京）有限公司成立于2014年 12月2日，总投资8.9亿元。是一家专业为各行业提供各 类人力资源服务的企业，包括境内、境外人力资源派遣 业务流程外包、人力资源供应、代理企业组建专业团队 管理咨询培训、劳动事务代理、员工后勤服务、学生实 习管理、劳动法律法规政策咨询等人力资源服务一体化 的企业，同时从事接收、托管企、事业单位离退休、内 退人员的日常服务、管理及费用代发服务工作。
				</div>
		</div><!--中间主体-->
  	</div>
</template>

<script>
import { XHeader, GroupTitle, XButton, Divider, Grid, GridItem, Tabbar, TabbarItem, Group, Cell, XInput } from 'vux'


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
  ready () {
  },
  methods: {
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
@import '../../../stylesheet/reset.less';

.aboutus_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
	overflow:hidden;
}
.aboutus_content{
	width:100%;
}
div.aboutus_header{
	width:100%;
}
.aboutus_wrap  .vux-header{
	background: #2A7DAD !important;
}
.aboutus_wrap .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.28rem !important;
}
div.aboutus_main{
	height:100%;
	overflow:auto;
}
div.aboutus_foot{
	height:2rem !important;
}


</style>
