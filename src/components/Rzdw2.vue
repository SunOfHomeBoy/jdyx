<template>
	<div class="rzdw2_wrap"><!--全职-->
		<div class="rzdw2_content rzdw2_header">
			<x-header title="入职定位" :left-options="{showBack: false}"><a slot="right" @click="savefn">保存</a></x-header>
		</div>
		<div class="rzdw2_content rzdw2_main">
			<dl class="sztx_a">
				<dt>
					<img src="../../src/assets/img/login/sztx_03.png" class="sztx_img"/>
				</dt>
				<dd>设置头像</dd>
			</dl>
			<div class="rzdw2_allinputs"><!--所有的表单元素start-->
				<group>
					<popup-picker title="档案类别" :data="listdangan" v-model="params.sort" :placeholder="$t('请选择')" confirm-text="确认" cancel-text="取消">
			      	<template slot="title">
			          <span>
			            <span class="demo-icon demo-icon-big" style="font-size:.3rem;vertical-align:middle;"><em style="display:inline-block;border-radius:50%;width:0.12rem;height:0.12rem;background:#FD9292;margin-right:0.4rem;position:absolute;left:-.3rem;top:50%;margin-top:-0.06rem"></em></span>
            			<span style="vertical-align:middle;font-size:.3rem;">档案类别</span>
			          </span>
			        </template>
			      </popup-picker>
			      <div class="rzdw2_options rzdw2_options_name">
			      	<span class="ro_name">姓名</span>
			      	<span class="ro_value"><input type="text" placeholder="请填写" v-model="params.name"/></span>
			      </div>
			      <popup-picker title="性别" :data="listsex" v-model="params.sex" :placeholder="$t('请选择')" confirm-text="确认" cancel-text="取消">
			      	<template slot="title">
			          <span>
			            <span class="demo-icon demo-icon-big" style="font-size:.3rem;vertical-align:middle;"><em style="display:inline-block;border-radius:50%;width:0.12rem;height:0.12rem;background:#FD9292;margin-right:0.4rem;position:absolute;left:-.3rem;top:50%;margin-top:-0.06rem"></em></span>
            			<span style="vertical-align:middle;font-size:.3rem;">性别</span>
			          </span>
			        </template>
			      </popup-picker>
			      
			      <!--<x-input :is-type="be2333" placeholder="请填写" style="position:relative;">
			        <a slot="restricted-label" style="width:1rem;display:flex;align-items:center;width:8rem;"><em style="display:inline-block;border-radius:50%;width:0.5rem;height:0.5rem;background:#FD9292;margin-right:0.8rem;"></em><span style="display:inline-block;font-size:1.5rem;">性别</span></a>
			        <a slot="right" style="display:flex;align-items: center;position:absolute;right:3px;top:18px;"><img src="../img/photo/right_jt.svg" style="width:1rem;height:1rem;display:inline-block;"/></a>
			        <a slot="label" style="position:absolute;right:0;top:0;width:100%;height:100%;">
			        	<input type="checkbox" style="" v-model="sexdialog" @click="educationfn" style="width:100%;height:100%;opacity:0;"/>
			        </a>
			        
			      </x-input>-->
			      <div style="position:relative;margin-left:.4rem;">
			      	<em style="display:inline-block;border-radius:50%;width:0.12rem;height:0.12rem;background:#FD9292;position:absolute;left:-.3rem;top:45%;"></em>
			      	<group>
				      	<datetime v-model="params.birthday" :title="$t('出生年月')" confirm-text="确认" cancel-text="取消"></datetime>
				  		</group>
			      </div>
			      <div class="rzdw2_options rzdw2_options_address">
			      	<span class="ro_name">居住城市</span>
			      	<span class="ro_value"><input type="text" placeholder="请填写" v-model="params.address"/></span>
			      </div>
			      <div class="rzdw2_options rzdw2_options_phone">
			      	<span class="ro_name">手机号码</span>
			      	<span class="ro_value"><input type="text" placeholder="请填写" v-model="params.phone"/></span>
			      </div>
			      <div class="rzdw2_options rzdw2_options_email">
			      	<span class="ro_name">电子邮箱</span>
			      	<span class="ro_value"><input type="text" placeholder="请填写" v-model="params.email"/></span>
			      </div>
			      <div class="rzdw2_options rzdw2_options_email">
			      	<span class="ro_name">账户信息</span>
			      	<span class="ro_value"><input type="text" placeholder="请填写" v-model="params.accountmsg"/></span>
			      </div>
			      <div class="rzdw2_options rzdw2_options_skill">
			      	<span class="ro_name">工作经历</span>
			      	<span class="ro_value"><input type="text" placeholder="请填写" v-model="params.workexperience"/></span>
			      </div>
			      <div class="rzdw2_options rzdw2_options_skill">
			      	<span class="ro_name">培训经历</span>
			      	<span class="ro_value"><input type="text" placeholder="请填写" v-model="params.peixunxperience"/></span>
			      </div>
			      <div class="rzdw2_options rzdw2_options_skill">
			      	<span class="ro_name">教育经历</span>
			      	<span class="ro_value"><input type="text" placeholder="请填写" v-model="params.eduxperience"/></span>
			      </div>
			      <div class="rzdw2_options rzdw2_options_skill">
			      	<span class="ro_name">期望工作地点</span>
			      	<span class="ro_value"><input type="text" placeholder="请填写" v-model="params.workaddress"/></span>
			      </div>
			      <div class="rzdw2_options rzdw2_options_skill">
			      	<span class="ro_name">期望从事行业</span>
			      	<span class="ro_value"><input type="text" placeholder="请填写" v-model="params.hangye"/></span>
			      </div>
			      <popup-picker title="工作状态" :data="statuslist" v-model="params.sex" :placeholder="$t('请选择')" confirm-text="确认" cancel-text="取消">
			      	<template slot="title">
			          <span>
			            <span class="demo-icon demo-icon-big" style="font-size:.3rem;vertical-align:middle;"><em style="display:inline-block;border-radius:50%;width:0.12rem;height:0.12rem;background:#FD9292;margin-right:0.4rem;position:absolute;left:-.3rem;top:50%;margin-top:-0.06rem"></em></span>
            			<span style="vertical-align:middle;">工作状态</span>
			          </span>
			        </template>
			      </popup-picker>
			    
				</group>
			</div><!--所有的表单元素end-->
		</div><!--中间主体-->
	  
  	</div>
</template>

<script>
import { XHeader, GroupTitle, XButton, Divider, Grid, GridItem, Tabbar, TabbarItem, Group, Cell, XInput, Datetime, PopupPicker, Picker } from 'vux'

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
    savefn () {
    	console.log(this.params);
    }
  },
  data () {
    return {
      isactivesex: 0,
      sexdialog: false,
      listdangan: [['档案一','档案二']],
      sexs: ['男','女'],
      listsex: [['男', '女']],
      title1:'性别',
      filesort:[['方式1','方式2']],
      fuwuwaylist:[['方式1','方式2']],//服务方式
      statuslist:[['舒适','难受']],
      params:{
      	sort:['请选择'],
      	name:'',
      	sex:['请选择'],
      	birthday:'请选择',
      	address:'',
      	phone:'',
      	email:'',
      	accountmsg:'',
      	workexperience:'',
      	peixunxperience:'',
      	eduxperience:'',
      	workaddress:'',
      	hangye:'',
      	status:['请选择']
      }
    }
  }
}
</script>

<style lang="less">
@import '../stylesheet/reset.less';
.rzdw2_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
}
.rzdw2_content{
	width:100%;
}

div.rzdw2_header{
	width:100%;
	color:#fff;
}
.rzdw2_wrap .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.28rem !important;
}
div.rzdw2_main{
	height:100%;
	overflow:auto;
}
div.rzdw2_foot{
	height:4.5rem;
}
dl.sztx_a{
	width:2rem;
	margin:auto;
	margin-top:.4rem;
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
div.rzdw2_allinputs{
	margin-right:.2rem;
	margin-left:.2rem;
}




.rzdw2_wrap .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:0.28rem !important;
}
.rzdw2_wrap .vux-header-right{
	font-family: 'PingFangSC-Light' !important;
	font-size:0.21rem !important;
}
.rzdw2_wrap .vux-header-right a{
	color:#fff !important;
}
.rzdw2_wrap .vux-header{
	background: #2A7DAD !important;
}
.rzdw2_wrap .weui-cell{
	padding-left: 0px !important;
}
.rzdw2_wrap .weui-label{
	color:#414141;
	font-size:0.29rem;
}
.rzdw2_wrap .vux-label{
	color:#414141;
	font-size:0.29rem;
}
.rzdw2_wrap .weui-cell__ft{
	font-family: 'PingFangSC-Light' !important;
	font-size:0.23rem !important;
}
.rzdw2_wrap .weui-cell:before,.rzdw2_wrap .weui-cells:before{
	border:0  !important;
}
.rzdw2_wrap .weui-cell_access .weui-cell__ft{
	padding-right:0px !important;
}
.rzdw2_wrap .weui-cell_access .weui-cell__ft:after{
	border-color:#4D90E7 !important;
	right:-12px  !important;
}
.rzdw2_wrap .weui-cell__hd{
	
}
.rzdw2_wrap .weui-cell{
	border-bottom:1px solid #CACACA;
}
.rzdw2_wrap .weui-cells,.rzdw2_wrap .vux-no-group-title{
	margin-top:0 !important;
}
.rzdw2_wrap .vux-no-group-title p{
	font-size:.3rem;
}
.rzdw2_wrap .weui-btn_default{
	background:#2A7DAD !important;
	border-radius:0 !important;
	font-size:1.5rem !important;
	color:#fff !important;
}
.rzdw2_wrap .weui-dialog{
	top:100.8% !important;
}
.dialog_topcontent{
	background:#fff;
}
.dialog_topcontent li{
	height:3.5rem;
	text-align: left;
	line-height:3.5rem;
	padding-left:2rem;
}
.dialog_topcontent li:not(:last-child){
	border-bottom:1px solid #E7E7E7;
}
.dialog_topcontent li.active{
	color:#2A7DAD;
	background:url('../../src/assets/img/photo/checked.svg') no-repeat 95% 1rem;
	background-size:5%;
}
.rzdw2_wrap .weui-label{
	font-size:1.5rem !important;
	color:#000 !important;
	
}
.rzdw2_wrap .vux-cell-value{
	font-size:0.23rem;
}
.rzdw2_wrap .vux-cell-box:before{
	border-top:0 !important;
}
.rzdw2_wrap .rzdw2_wrap .weui_cells:after{
	border-bottom:0 !important;
}
.rzdw2_wrap .rzdw2_wrap .weui_cells:before{
	border-top:0 !important;
}
.rzdw2_wrap .weui_cell_primary{
	font-size:1.3rem;
	color:#9F9F9F;
}
.rzdw2_wrap input::-webkit-input-placeholder{
	color:#9F9F9F;
	font-size:.23rem;
	font-family: 'PingFangSC-Light';
	text-align: right;
	padding-right:0.3rem;
}
.rzdw2_wrap .weui_cell_ft{
	font-size:1.3rem;
	color:#9F9F9F;
}
.rzdw2_wrap .vux-cell-box{
	padding-left:.4rem;
}
/*新的样式*/
.rzdw2_options{
	display:flex;
	height:1rem;
	align-items:center;
	margin-left:.4rem;
	border-bottom:1px solid #ccc;
	position:relative;
}
.rzdw2_options>span{
	display:block;
}
.rzdw2_options>span.ro_name{
	width:7rem;
	height:1rem;
	line-height: 1rem;
	font-size:.3rem;
	
}
.rzdw2_options>span.ro_value{
	width:100%;
}
.rzdw2_options>span.ro_value input{
	width:100%;
	outline: none;
	height:1rem;
	bordeR:0;
	font-size:0.23rem;
	padding-right:.3rem;
}

.rzdw2_options:before{
	content:'';
	width:0.12rem;
	height:0.12rem;
	position:absolute;
	left:-.3rem;
	top:50%;
	border-radius:50%;
	margin-top:-0.06rem;
}
.rzdw2_options_name:before{
	background:#6BC2F9;
}
.rzdw2_options_photo:before{
	background:#FD9292;
}
.rzdw2_options_address:before{
	background:#A785E5;
}
.rzdw2_options_phone:before{
	background:#00CC74;
}
.rzdw2_options_email:before{
	background:#00CC74;
}
.rzdw2_options_skill:before{
	background:#6BC2F9;
}
.rzdw2_options_price:before{
	background:#6BC2F9;
}
.rzdw2_options_goodat:before{
	background:#FD9292;
}
.rzdw2_options_introduce:before{
	background:#6BC2F9;
}
</style>
