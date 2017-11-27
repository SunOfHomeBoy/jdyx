<template>
	<div class="JD_rzdw2_wrap"><!--全职-->
		<div class="JD_rzdw2_content JD_rzdw2_header">
			<x-header title="入职定位" :left-options="{showBack: true,backText: ''}"><a slot="right" @click="savefn">保存</a></x-header>
		</div>
		<div class="JD_rzdw2_content JD_rzdw2_main">
			<dl class="JD_sztx_a">
				<dt>
					<img src="../../../src/assets/img/login/sztx_03.png" class="JD_sztx_img"/>
				</dt>
				<dd>设置头像</dd>
			</dl>
			<div class="JD_rzdw2_allinputs"><!--所有的表单元素start-->
				<group>
					<popup-picker title="档案类别" :data="listdangan" v-model="params.sort" :placeholder="$t('请选择')" confirm-text="确认" cancel-text="取消">
			      	<template slot="title">
			          <span>
			            <span class="JD_font_8"><em class="JD_before_circle"></em></span>
            			<span class="JD_font_8">档案类别</span>
			          </span>
			        </template>
			      </popup-picker>
			      <div class="JD_rzdw2_options JD_rzdw2_options_name">
			      	<span class="JD_ro_name">姓名</span>
			      	<span class="JD_ro_value"><input type="text" placeholder="请填写" v-model="params.name"/></span>
			      </div>
			      <popup-picker title="性别" :data="listsex" v-model="params.sex" :placeholder="$t('请选择')" confirm-text="确认" cancel-text="取消">
			      	<template slot="title">
			          <span>
			            <span class="JD_font_8"><em class="JD_before_circle"></em></span>
            			<span class="JD_font_8">性别</span>
			          </span>
			        </template>
			      </popup-picker>
			      
			      <div style="position:relative;margin-left:.4rem;">
			      	<em class="JD_before_circle"></em>
			      	<group>
				      	<datetime v-model="params.birthday" :title="$t('出生年月')" confirm-text="确认" cancel-text="取消"></datetime>
				  		</group>
			      </div>
			      <div class="JD_rzdw2_options JD_rzdw2_options_address">
			      	<span class="JD_ro_name">居住城市</span>
			      	<span class="JD_ro_value"><input type="text" placeholder="请填写" v-model="params.address"/></span>
			      </div>
			      <div class="JD_rzdw2_options JD_rzdw2_options_phone">
			      	<span class="JD_ro_name">手机号码</span>
			      	<span class="JD_ro_value"><input type="text" placeholder="请填写" v-model="params.phone"/></span>
			      </div>
			      <div class="JD_rzdw2_options JD_rzdw2_options_email">
			      	<span class="JD_ro_name">电子邮箱</span>
			      	<span class="JD_ro_value"><input type="text" placeholder="请填写" v-model="params.email"/></span>
			      </div>
			      <div class="JD_rzdw2_options JD_rzdw2_options_email">
			      	<span class="JD_ro_name">账户信息</span>
			      	<span class="JD_ro_value"><input type="text" placeholder="请填写" v-model="params.accountmsg"/></span>
			      </div>
			      <div class="JD_rzdw2_options JD_rzdw2_options_skill">
			      	<span class="JD_ro_name">工作经历</span>
			      	<span class="JD_ro_value"><input type="text" placeholder="请填写" v-model="params.workexperience"/></span>
			      </div>
			      <div class="JD_rzdw2_options JD_rzdw2_options_skill">
			      	<span class="JD_ro_name">培训经历</span>
			      	<span class="JD_ro_value"><input type="text" placeholder="请填写" v-model="params.peixunxperience"/></span>
			      </div>
			      <div class="JD_rzdw2_options JD_rzdw2_options_skill">
			      	<span class="JD_ro_name">教育经历</span>
			      	<span class="JD_ro_value"><input type="text" placeholder="请填写" v-model="params.eduxperience"/></span>
			      </div>
			      <div class="JD_rzdw2_options JD_rzdw2_options_skill">
			      	<span class="JD_ro_name">期望工作地点</span>
			      	<span class="JD_ro_value"><input type="text" placeholder="请填写" v-model="params.workaddress"/></span>
			      </div>
			      <div class="JD_rzdw2_options JD_rzdw2_options_skill">
			      	<span class="JD_ro_name">期望从事行业</span>
			      	<span class="JD_ro_value"><input type="text" placeholder="请填写" v-model="params.hangye"/></span>
			      </div>
			      <popup-picker title="工作状态" :data="statuslist" v-model="params.sex" :placeholder="$t('请选择')" confirm-text="确认" cancel-text="取消">
			      	<template slot="title">
			          <span>
			            <span class="JD_font_8"><em class="JD_before_circle"></em></span>
            			<span class="JD_font_8">工作状态</span>
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
@import '../../stylesheet/reset.less';
.JD_rzdw2_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
}
.JD_rzdw2_content{
	width:100%;

}

div.JD_rzdw2_header{
	width:100%;
	color:#fff;
}
.JD_rzdw2_wrap .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.28rem !important;
}
div.JD_rzdw2_main{
	height:100%;
	overflow:auto;
}
div.JD_rzdw2_foot{
	height:4.5rem;
}
dl.JD_sztx_a{
	width:2rem;
	margin:auto;
	margin-top:.4rem;
}
dl.JD_sztx_a img{
	display: inline-block;
	width:2rem;
	height:2rem;
}
dl.JD_sztx_a>dt{
	width:2rem;
	height:2rem;
}
dl.JD_sztx_a>dd{
	width:2rem;
	text-align: center;
	font-size:.23rem;
	color:#414141;
	font-family: 'PingFangSC-Light';
	margin-top:.2rem;
}
/*表单*/
div.JD_rzdw2_allinputs{
	margin-right:.2rem;
	margin-left:.2rem;
}
div.JD_rzdw2_allinputs .JD_before_circle{
	display:inline-block;
	border-radius:50%;
	width:0.12rem;
	height:0.12rem;
	background:#FD9292;
	margin-right:0.4rem;
	position:absolute;
	left:-.3rem;
	top:50%;
	margin-top:-0.06rem
}
/*display:inline-block;border-radius:50%;width:0.12rem;height:0.12rem;background:#FD9292;position:absolute;left:-.3rem;top:45%;*/
div.JD_rzdw2_allinputs .JD_font_8{
	font-size:.3rem;
	vertical-align:middle;
}


.JD_rzdw2_wrap .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:0.28rem !important;
}
.JD_rzdw2_wrap .vux-header-right{
	font-family: 'PingFangSC-Light' !important;
	font-size:0.21rem !important;
}
.JD_rzdw2_wrap .vux-header-right a{
	color:#fff !important;
}
.JD_rzdw2_wrap .vux-header{
	background: #2A7DAD !important;
}
.JD_rzdw2_wrap .weui-cell{
	padding-left: 0px !important;
}
.JD_rzdw2_wrap .weui-label{
	color:#414141;
	font-size:0.29rem;
}
.JD_rzdw2_wrap .vux-label{
	color:#414141;
	font-size:0.29rem;
}
.JD_rzdw2_wrap .weui-cell__ft{
	font-family: 'PingFangSC-Light' !important;
	font-size:0.23rem !important;
}
.JD_rzdw2_wrap .weui-cell:before,.JD_rzdw2_wrap .weui-cells:before{
	border:0  !important;
}
.JD_rzdw2_wrap .weui-cell_access .weui-cell__ft{
	padding-right:0px !important;
}
.JD_rzdw2_wrap .weui-cell_access .weui-cell__ft:after{
	border-color:#4D90E7 !important;
	right:-12px  !important;
}
.JD_rzdw2_wrap .weui-cell__hd{
	
}
.JD_rzdw2_wrap .weui-cell{
	border-bottom:1px solid #CACACA;
}
.JD_rzdw2_wrap .weui-cells,.JD_rzdw2_wrap .vux-no-group-title{
	margin-top:0 !important;
}
.JD_rzdw2_wrap .vux-no-group-title p{
	font-size:.3rem;
}
.JD_rzdw2_wrap .weui-btn_default{
	background:#2A7DAD !important;
	border-radius:0 !important;
	font-size:1.5rem !important;
	color:#fff !important;
}
.JD_rzdw2_wrap .weui-dialog{
	top:100.8% !important;
}

.JD_rzdw2_wrap .weui-label{
	font-size:1.5rem !important;
	color:#000 !important;
	
}
.JD_rzdw2_wrap .vux-cell-value{
	font-size:0.23rem;
}
.JD_rzdw2_wrap .vux-cell-box:before{
	border-top:0 !important;
}
.JD_rzdw2_wrap .weui_cells:after{
	border-bottom:0 !important;
}
.JD_rzdw2_wrap .weui_cells:before{
	border-top:0 !important;
}
.JD_rzdw2_wrap .weui_cell_primary{
	font-size:1.3rem;
	color:#9F9F9F;
}
.JD_rzdw2_wrap input::-webkit-input-placeholder{
	color:#9F9F9F;
	font-size:.23rem;
	font-family: 'PingFangSC-Light';
	text-align: right;
	padding-right:0.3rem;
}
.JD_rzdw2_wrap .weui_cell_ft{
	font-size:1.3rem;
	color:#9F9F9F;
}
.JD_rzdw2_wrap .vux-cell-box{
	padding-left:.4rem;
}
/*新的样式*/
.JD_rzdw2_options{
	display:flex;
	height:1rem;
	align-items:center;
	margin-left:.4rem;
	border-bottom:1px solid #ccc;
	position:relative;
}
.JD_rzdw2_options>span{
	display:block;
}
.JD_rzdw2_options>span.JD_ro_name{
	width:7rem;
	height:1rem;
	line-height: 1rem;
	font-size:.3rem;
	
}
.JD_rzdw2_options>span.JD_ro_value{
	width:100%;
}
.JD_rzdw2_options>span.JD_ro_value input{
	width:100%;
	outline: none;
	height:.98rem;
	bordeR:0;
	font-size:0.23rem;
	padding-right:.3rem;
}

.JD_rzdw2_options:before{
	content:'';
	width:0.12rem;
	height:0.12rem;
	position:absolute;
	left:-.3rem;
	top:50%;
	border-radius:50%;
	margin-top:-0.06rem;
}
.JD_rzdw2_options_name:before{
	background:#6BC2F9;
}
.JD_rzdw2_options_photo:before{
	background:#FD9292;
}
.JD_rzdw2_options_address:before{
	background:#A785E5;
}
.JD_rzdw2_options_phone:before{
	background:#00CC74;
}
.JD_rzdw2_options_email:before{
	background:#00CC74;
}
.JD_rzdw2_options_skill:before{
	background:#6BC2F9;
}
.JD_rzdw2_options_price:before{
	background:#6BC2F9;
}
.JD_rzdw2_options_goodat:before{
	background:#FD9292;
}
.JD_rzdw2_options_introduce:before{
	background:#6BC2F9;
}
</style>
