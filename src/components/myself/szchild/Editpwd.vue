<template>
	<div class="editpwd_wrap">
		<div class="editpwd_content editpwd_header">
			<x-header :left-options="{showBack: true,backText:''}">修改密码</x-header>
		</div>
		<div class="editpwd_content editpwd_main" >
			<group>
		      <x-input title="原密码" placeholder="请输入原密码"></x-input>
		      <x-input title="新密码" placeholder="请输入原密码" type="password"></x-input>
		      <x-input title="确认密码" placeholder="请输入原密码" type="password"></x-input>
		    </group>
		</div>
		<div style="width:90%;margin:auto;margin-top:1rem;">
			<x-button type="primary">确认</x-button>
		</div>
  	</div>
  	
</template>

<script>
import { XHeader, GroupTitle, XButton, Divider, Grid, GridItem, Group, XTextarea, Cell, XInput} from 'vux'

export default {
  components: {
  	XHeader,
    GroupTitle,
    XButton,
    Divider,
    Grid,
    GridItem,
    Group,
    XTextarea,
    Cell,
    XInput
  },
  data () {
    return {
    	index: 0,
    }
  },
  methods: {
  	onItemClick (index) {
  		console.log(index);
  		
  	}
  }
}
</script>

<style lang="less">
@import '../../../stylesheet/reset.less';
.editpwd_wrap{
	width:100%;
	height:100%;
}
.editpwd_header{
	width:100%;
}
.editpwd_wrap .vux-header{
	
	background: #2A7DAD !important;
}
.editpwd_wrap .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.28rem !important;
	
}
.editpwd_wrap .weui-input{
	font-size:0.23rem !important;
}
div.editpwd_btn{
	display:flex;
	justify-content:center;
	margin:0.61rem 0 0.95rem 0;
}
div.editpwd_btn>button{
	background:#2A7DAD;
	border-radius:0.05rem;
	border:0;
	color:#fff;
	text-align: center;
	width:7.1rem;
	height:5rem;
}
.editpwd_wrap .weui-label{
	font-size:.3rem;
}
.editpwd_wrap .weui-cells{
	margin-top:0 !important;
}
.editpwd_wrap .vux-no-group-title{
	margin-top:0 !important;
}
.editpwd_wrap .weui-btn_primary{
	background:#2A7DAD !important;
}

.editpwd_wrap .weui-btn_primary{
	background-color: #2A7DAD !important;
}
.editpwd_wrap .weui-cell{
	padding:.4rem .5rem !important;
}
</style>