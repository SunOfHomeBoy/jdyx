<template>
	<div class="rzdw_wrap"><!--兼职-->
		<div class="rzdw_content rzdw_header">
			<x-header title="入职定位" :left-options="{showBack: true,backText: ''}"><a slot="right" @click="savefn">保存</a></x-header>
		</div>
		<div class="rzdw_content rzdw_main">
			<dl class="sztx_a">
				<dt>
					<img src="../../src/assets/img/login/sztx_03.png" class="sztx_img"/>
				</dt>
				<dd>设置头像</dd>
			</dl>
			<div class="rzdw_allinputs"><!--所有的表单元素start-->
				<group>
			      <div class="rzdw_options rzdw_options_name">
			      	<span class="ro_name">姓名</span>
			      	<span class="ro_value"><input type="text" placeholder="请填写" v-model="params.name"/></span>
			      </div>
			      <popup-picker :title="title1" :data="list1" v-model="params.sex" :placeholder="$t('请选择')" confirm-text="确认" cancel-text="取消">
			      	<template slot="title">
			          <span>
			            <span class="demo-icon demo-icon-big" style="font-size:20px;vertical-align:middle;"><em style="display:inline-block;border-radius:50%;width:0.12rem;height:0.12rem;background:#FD9292;margin-right:0.4rem;position:absolute;left:-0.3rem;top:50%;margin-top:-0.06rem"></em></span>
            			<span style="vertical-align:middle;">手机</span>
			          </span>
			        </template>
			      </popup-picker>
			      <div class="rzdw_options rzdw_options_photo">
			      	<span class="ro_name">照片</span>
			      	<span class="ro_value"><input type="text" placeholder="请填写" v-model="params.photo"/></span>
			      </div>
			      <div style="position:relative;margin-left:.4rem;">
			      	<em style="display:inline-block;border-radius:50%;width:0.12rem;height:0.12rem;background:#FD9292;position:absolute;left:-0.3rem;top:45%;"></em>
			      	<group>
				      <datetime v-model="params.birthday" :title="$t('出生年月')" confirm-text="确认" cancel-text="取消"></datetime>
				      
				  </group>
			      </div>
			      
			      <div class="rzdw_options rzdw_options_address">
			      	<span class="ro_name">居住城市</span>
			      	<span class="ro_value"><input type="text" placeholder="请填写" v-model="params.address"/></span>
			      </div>
			      <div class="rzdw_options rzdw_options_phone">
			      	<span class="ro_name">手机号码</span>
			      	<span class="ro_value"><input type="text" placeholder="请填写" v-model="params.phone"/></span>
			      </div>
			      <div class="rzdw_options rzdw_options_email">
			      	<span class="ro_name">电子邮箱</span>
			      	<span class="ro_value"><input type="text" placeholder="请填写" v-model="params.email"/></span>
			      </div>
			      <div class="rzdw_options rzdw_options_skill">
			      	<span class="ro_name">我的技能</span>
			      	<span class="ro_value"><input type="text" placeholder="请填写" v-model="params.skills"/></span>
			      </div>
			      <popup-picker title="服务方式" v-model="params.way" :data="fuwuwaylist" :placeholder="$t('请选择')" style="position:relative;" confirm-text="确认" cancel-text="取消">
			      	<template slot="title" slot-scope="props">
			          <span>
			          	<span><em style="display:inline-block;border-radius:50%;width:0.12rem;height:0.12rem;background:#FD9292;margin-right:0.4rem;position:absolute;left:-0.3rem;top:50%;margin-top:-0.06rem"></em></span>
			            <span style="vertical-align:middle;">服务方式</span>
			          </span>
			        </template>
			      </popup-picker>
			    
			    <div class="rzdw_options rzdw_options_price">
			      	<span class="ro_name">服务价格</span>
			      	<span class="ro_value"><input type="text" placeholder="请填写" v-model="params.price"/></span>
			      </div>
			      <div class="rzdw_options rzdw_options_goodat">
			      	<span class="ro_name">专业擅长</span>
			      	<span class="ro_value"><input type="text" placeholder="请填写" v-model="params.goodat"/></span>
			      </div>
			      <div class="rzdw_options rzdw_options_introduce">
			      	<span class="ro_name">服务介绍</span>
			      	<span class="ro_value"><input type="text" placeholder="请填写" v-model="params.introduce"/></span>
			      </div>
				</group>
			</div><!--所有的表单元素end-->
		</div><!--中间主体-->
	  
  	</div>
</template>

<script>
import { XHeader, GroupTitle, XButton, Divider, Grid, GridItem, Tabbar, TabbarItem, Group, Cell, XInput, Datetime, PopupPicker, Picker } from 'vux'
const imgList = [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]
const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))

export default {
  components: {
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
    Datetime,
    PopupPicker,
    Picker
  },
  ready () {
  },
  methods: {
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    },
    clicksexfn (index){
    	this.isactivesex=index;
    },
    savefn (event) {
    	console.log(this.params);
    	
    }
  },
  data () {
    return {
      demo03_list: demoList,
      isactivesex: 0,
      sexdialog: false,
      sexs: ['男','女'],
      list1: [['男', '女']],
      title1:'性别',
      fuwuwaylist:[['方式1','方式2']],//服务方式
      params:{
      	name:'任婷焕',
      	sex:['男'],
      	photo:'1212',
      	birthday:'2017-10-29',
      	address:'清河大街',
      	phone:'13051955341',
      	email:'191919919@qq.com',
      	skills:'技能一般',
      	way:['方式一'],
      	price:'12',
      	goodat:'212121212',
      	introduce:'2121'
      }
      
    }
  }
}
</script>

<style lang="less">
@import '../stylesheet/reset.less';
.rzdw_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
}
.rzdw_content{
	width:100%;
}

div.rzdw_header{
	width:100%;
	
}
.rzdw_wrap .vux-header{
	background: #2A7DAD !important;
}
.rzdw_wrap .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.28rem !important;
}
div.rzdw_main{
	height:100%;
	overflow:auto;   
}
div.rzdw_foot{
	height:4.5rem;
}
dl.sztx_a{
	width:2rem;
	height:2.5rem;
	margin-left:2.8rem;
	margin-top:.5rem;
	margin-bottom:.5rem;
}
dl.sztx_a img{
	display: inline-block;
	width:2rem;
	height:2rem;
}
dl.sztx_a>dt{
	width:2rem;
	height:2rem;
}
dl.sztx_a>dd{
	width:2rem;
	text-align: center;
	font-size:.23rem;
	color:#414141;
	font-family: 'PingFangSC-Light';
	margin-top:.2rem;
}
/*表单*/
div.rzdw_allinputs{
	margin-right:.2rem;
	margin-left:.2rem;
}






.rzdw_wrap .weui-cell{
	padding-left: 0px !important;
}
.rzdw_wrap .weui-label{
	color:#414141;
	font-size:0.29rem;
}
.rzdw_wrap .vux-label{
	color:#414141;
	font-size:0.29rem;
}
.rzdw_wrap .weui-cell__ft{
	font-family: 'PingFangSC-Light' !important;
	font-size:0.23rem !important;
}
.rzdw_wrap .weui-cell:before,.weui-cells:before{
	border:0  !important;
}
.rzdw_wrap .weui-cell_access .weui-cell__ft{
	padding-right:0px !important;
}
.rzdw_wrap .weui-cell_access .weui-cell__ft:after{
	border-color:#4D90E7 !important;
	right:-12px  !important;
}
.rzdw_wrap .weui-cell__hd{

	font-size:.3rem;
}
.rzdw_wrap .vux-popup-picker-placeholder{
	font-size:.8rem;
}
.rzdw_wrap .vux-cell-box{
	padding-left:.4rem;
}
.rzdw_wrap .weui-cell{
	border-bottom:1px solid #CACACA;
}
.rzdw_wrap .weui-cells,.vux-no-group-title{
	margin-top:0 !important;
}
.rzdw_wrap .vux-no-group-title p{
	font-size:.3rem;
}
.rzdw_wrap .weui-btn_default{
	background:#2A7DAD !important;
	border-radius:0 !important;
	font-size:1.5rem !important;
	color:#fff !important;
}
.rzdw_wrap .weui-dialog{
	top:100.8% !important;
}

.weui-label{
	font-size:1.5rem !important;
	color:#000 !important;
	
}
.vux-cell-value{
	font-size:0.3rem;
}
.rzdw_wrap  .vux-cell-box:before{
	border-top:0 !important;
}
.rzdw_wrap .weui_cells:after{
	border-bottom:0 !important;
}
.rzdw_wrap .weui_cells:before{
	border-top:0 !important;
}
.rzdw_wrap .weui_cell_primary{
	font-size:1.3rem;
	color:#9F9F9F;
}
.rzdw_wrap input::-webkit-input-placeholder{
	color:#9F9F9F;
	font-size:.23rem;
	font-family: 'PingFangSC-Light';
	text-align: right;
	padding-right:0.3rem;
}
.rzdw_wrap .weui_cell_ft{
	font-size:1.3rem;
	color:#9F9F9F;
}
/*新的样式*/
.rzdw_options{
	display:flex;
	height:1rem;
	align-items:center;
	margin-left: .4rem;
	border-bottom:1px solid #ccc;
	position:relative;
}
.rzdw_options>span{
	display:block;
}
.rzdw_options>span.ro_name{
	width:7rem;
	height:1rem;
	line-height: 1rem;
	font-size:.3rem;
	
}
.rzdw_options>span.ro_value{
	width:100%;
}
.rzdw_options>span.ro_value input{
	width:100%;
	outline: none;
	height:.98rem;
	bordeR:0;
	font-size:.3rem;
	padding-right: .3rem;
}
.rzdw_options:before{
	content:'';
	width:0.12rem;
	height:0.12rem;
	position:absolute;
	left:-0.3rem;
	top:50%;
	border-radius:50%;
	margin-top:-0.06rem;
}
.rzdw_options_name:before{
	background:#6BC2F9;
}
.rzdw_options_photo:before{
	background:#FD9292;
}
.rzdw_options_address:before{
	background:#A785E5;
}
.rzdw_options_phone:before{
	background:#00CC74;
}
.rzdw_options_email:before{
	background:#00CC74;
}
.rzdw_options_skill:before{
	background:#6BC2F9;
}
.rzdw_options_price:before{
	background:#6BC2F9;
}
.rzdw_options_goodat:before{
	background:#FD9292;
}
.rzdw_options_introduce:before{
	background:#6BC2F9;
}

</style>
