<template>
	<div class="recharge_wrap">
		<div class="recharge_content recharge_header">
			<x-header :left-options="{showBack: true,backText:''}">充值</x-header>
		</div>
	    <div class="recharge_main">
	    	<div class="bank">
	    		<div class="bank_logo">
	    			<img src="" />
	    		</div>
	    		<div class="bank_intro">
	    			<span>{{params.title}}</span>
	    			<span>{{params.content}}</span>
	    		</div>
	    		<div class="bank_right_jt">
	    			<img src="../../src/assets/img/photo/right_jt.svg" style="width:.7rem;height:.8rem;"/>
	    		</div>
	    		<input type="checkbox" v-model="showbank"/>
	    	</div>
	    	<p style="margin-top:.2rem;margin-bottom:0.2rem;padding-left:.2rem;font-size:.23rem;">充值金额</p>
	    	<div class="money">
	    		<input type="text" placeholder="请输入金额" id="importmoney" @keyup="moneykeyupfn" v-model="money"/>
	    	</div>
	    	<p style="color:#adadad;padding:0.3rem 0 .2rem .3rem;font-size:.23rem;">
	    		单笔充值金额不可大于20,000
	    	</p>
	    	<div style="padding:0 .2rem;">
	    		<button :class="{nextbtn:true,nextbtnoften:isactive,nextbtnblue:!isactive}">下一步</button>
	    	</div>
	    	
		    <div v-transfer-dom>
		      <popup v-model="showbank">
		        <!-- group already has a top border, so we need to hide header's bottom border-->
		        <popup-header
		        left-text="取消"
		        right-text="完成"
		        title="请选择银行"
		        :show-bottom-border="false"
		        @on-click-left="cancelfn"
		        @on-click-right="donefn"></popup-header>
		        <group gutter="0">
		          <radio :options="cardkinds" v-model="valuebank"></radio>
		        </group>
		      </popup>
		    </div>
	    </div> 
	   
    </div>
</template>

<script>
import { XHeader, PopupHeader, Popup, TransferDom, Group, XSwitch, Radio } from 'vux'


export default {
  components: {
  	XHeader,
    PopupHeader,
    Popup,
    Group,
    XSwitch,
    Radio
  },
  created () {
  	
  },
  mounted (){
  	var autofocusel=document.getElementById("importmoney");
  	autofocusel.focus();
  },
  methods: {
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    },
    cancelfn (){
    	this.showbank=false;
    },
    donefn () {
    	this.showbank=false;
    	
    },
    moneykeyupfn (){
    	if(this.money!==""){
    		this.isactive=false;
    	}else{
    		this.isactive=true;
    	}
    }
  },
  data () {
    return {
    	showbank: false,//控制银行是否弹出
    	cardkinds:['工商','建行'],
    	valuebank:'',//选择银行的值
    	params:{
    		path:'',
    		title:'中国建设银行',
    		content:'尾号5751 储蓄卡'
    	},
    	money:'',
    	isactive:true
    }
  },
  watch:{
  	valuebank:function(){
  		if(this.valuebank=='工商'){
  			this.params={
  				path:'',
	    		title:'中国工商银行',
	    		content:'尾号5751 储蓄卡'
  			}
  		}else if(this.valuebank=='建行'){
  			this.params={
  				path:'',
	    		title:'中国建行银行',
	    		content:'尾号5751 储蓄卡'
  			}
  		}
  		
  	}
  }
}
</script>

<style lang="less">
@import '../stylesheet/reset.less';
.recharge_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction: column;
	overflow:hidden;
	/*justify-content:space-between;*/
}
.recharge_header{
	
}
.recharge_wrap .vux-header{
	background:#2A7DAD !important;
}
.recharge_wrap .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.28rem !important;
}
.recharge_content{
	width:100%;
	
}
div.recharge_main{
	height:100%;
	font-size:0.29rem;
	background:#f7f7f7;
}
.bank{
	display:flex;
	background:#fff;
	margin-top:.3rem;
	position:relative;
	padding:.2rem 0;
}
.bank input{
	position:absolute;
	left:0;
	top:0;
	width:100%;
	height:100%;
	opacity:0;
}
.bank .bank_logo{
	flex-grow:1;
}
.bank .bank_intro{
	flex-grow:3;
	display:flex;
	flex-direction:column;
}
.bank .bank_intro>span{
	display:block;
}
.bank .bank_intro>span:nth-child(1){
	font-weight:bold;
	font-size:.3rem;
}
.bank .bank_intro>span:nth-child(2){
	color:#777777;
	font-size:.23rem;
}
.bank .bank_right_jt{
	flex-grow:1;
	display:flex;
	align-items: center;
	justify-content:flex-end;
}
.bank .bank_right_jt>img{
	display:block;
	
}
div.money{
	width:100%;
}
div.money>input{
	width:100%;
	padding:.1rem 0;
	border:0;
	outline: none;
	height:1rem;
	padding-left:1rem;
}
div.money input::-webkit-input-placeholder{
	color:#adadad;
	font-size:.23rem;
}
button.nextbtn{
	width:100%;
	height:1rem;
	border:0;
	color:#fff;
	font-size: .3rem;
	border-radius:0.1rem;
}
.nextbtnoften{
	background:#dfdfdf;
}
.nextbtnblue{
	background:#2a7dad;
}
</style>
