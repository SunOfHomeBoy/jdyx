<template>
	<div class="JD_fv_wrap">
		<div class="JD_fv_content JD_fv_header">
			<x-header :left-options="{showBack:true,backText:''}">
				<span style="block;float:left;margin-left:25%;">我的收藏</span>
			    <span style="display:block;float:left;position:relative;">
			   	  <img src="http://i1.cfimg.com/611341/071b63d3b0b4c50e.png" style="margin-top:0.25rem;margin-left:.1rem;" :class="{imgrotatetop:showDialogStyle}"/>
			   	  <input type="checkbox" v-model="showDialogStyle" style="position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;" />
			    </span>
			</x-header>
		</div>
		<div class="JD_fv_content JD_fv_main">
			<div class="JD_fv_main_contains">
					<ul>
						<li>
							<dl>
								<dt>
									<img :src="imgSrc" style="width:1.8rem;height:1.8rem;"/>
								</dt>
								<dd>
									<h4>{{title}}</h4>
									<p>
										{{content}}
									</p>
									<p>
										{{time}}
									</p>
								</dd>
							</dl>
						</li>
						
					</ul>
				
			</div>
		</div>
		<div class="JD_popupsex" v-show="showDialogStyle">
			<div :class="{favourite_trans:true,popupbottomfav:showDialogStyle}">
				<ul class="JD_dialog_topcontentfav">
		        	<template v-for="(it,index) in favtype">
		        		<li :class="{active:isactive==index}" @click="selfavoritetype(index)" :key="index">
		        			<span>{{it}}</span>
		        		</li>
		        	</template>
		        </ul>
			</div>
		</div>
  	</div>
  	
</template>

<script>
import { XHeader, GroupTitle, XButton, Divider } from 'vux'
import {api} from '../../utils'
import PullTo from 'vue-pull-to';
import imgSrc from '../../../src/assets/img/photo/02.jpg';

export default {
  components: {
  	XHeader,
    GroupTitle,
    XButton,
    Divider,
    PullTo
  },
  created () {
  	api('/search/listResume', {}, callback => {
	  		var data=callback.data.items;
	  		this.rcssdata=data;
	})
  },
  data () {
    return {
			title:"语音助理战国时代谁有机会拿下...",
			content:"从IT到DT，各行各业都会进入一个新发展 周期，重视、投资数据......",
			time:"2017.01.02 13:30",
			index: 0,
			imgSrc:imgSrc,
    	isactive: 0,
    	showDialogStyle: false,
    	isrotate: false,
    	favtype:['全职收藏','兼职收藏','全职收藏','兼职收藏','全职收藏','兼职收藏'],
    	isactive:0,
    	favdata:[],
    	pageParams:{begins:1,limit:20}
    }
  },
  methods: {
  	selfavoritetype (index){
		this.isactive=index;
  	},
  	showdialogfn (e){
  		var me=e.srcElement || e.target;
  		if(this.showDialogStyle){
  			this.isrotate=false;
  		}else{
  			this.isrotate=true;
  		}
  		
  	}
  }
}
</script>

<style lang="less">
@import '../../stylesheet/reset.less';

.JD_fv_wrap{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
	
}
.JD_fv_header{
	width:100%;
	/*height:3.8rem;*/
}
.JD_fv_header .vux-header{
	background:#2a7dad !important;
}
.JD_fv_header .vux-header .vux-header-title{
	font-family: 'PingFangSC-Light' !important;
	font-size:.28rem !important;
	
}
/*主体*/
div.JD_fv_main{
	position:relative;
}

div.JD_fv_main_contains ul{
	padding-left:.2rem;
	margin-top:.2rem;
	
}
div.JD_fv_main_contains ul p{
	font-size:0.23rem;
}
div.JD_fv_main_contains ul li{
	border-bottom:1px solid #bbbbbb;
	height:2rem;
}
div.JD_fv_main_contains ul li:not(:first-child){
	margin-top:.2rem;
}
div.JD_fv_main_contains ul li dl{
	display:flex;
}
div.JD_fv_main_contains ul li dt{
	width:1.8rem;
	height:1.8rem;
	display:flex;
	align-items:center;
}
div.JD_fv_main_contains ul li dt img{
	display:block;
}
div.JD_fv_main_contains ul li dd{
	display:flex;
	flex-direction:column;
	font-size:0.23rem;
	color:#bbbbbb;
	margin-left:.4rem;
	justify-content:space-between;

}
div.JD_fv_main_contains ul li dd h4{
	font-size:0.3rem;
	color:#414141;
	height:.4rem;
	line-height:.4rem;
}
div.JD_fv_main_contains_img{
	height:13rem;
}
div.JD_fv_main_contains_img img{
	height:13rem;
}

    header,div{
		box-sizing: border-box;
	}
	.f-toh{
		overflow: scroll;
		white-space: nowrap;
		-webkit-overflow-scrolling: touch;
	}
	.f-hideScrollBar{
		display: flex;
		display: -webkit-flex;
		box-sizing: content-box;
		height: 100%;
		width: 100%;
		overflow-y: hidden; 
		padding-bottom: 15px;
	}
	.JD_header{
		width: 100%;
		height: 50px;
		background-color: #fff;
		overflow: hidden;
	}
	.header .item{
		flex-shrink: 0;
		-webkit-flex-shrink: 0;
		width: 25%;
		height: 100%;
		color: #AFAFAF;
		line-height: 50px;
		text-align: center;
		text-transform: uppercase;
	}
	.JD_header .item.active{
	
		color: #414141;
	}
	/*.header .item:not(:last-child){
		border-right: 1px solid rgba(0,0,0,.2);
	}*/
/*遮罩层*/
.JD_popupsex{
	width:100%;
	height: 100%;
	background:rgba(0,0,0,0.53);
	position:absolute;
	left:0;
	top:.87rem;
}
.favourite_trans{
	
	width:100%;
	height:0;
	overflow:hidden;
}
.JD_dialog_topcontentfav{
	width:100%;
	background:#fff;
	padding:0 .2rem 0 .2rem;
}
.JD_dialog_topcontentfav li{
	border-bottom:1px solid #CACACA;
	height:.8rem;
	line-height:.8rem;
	font-family: 'PingFangSC-Light';
	font-size:.23rem;
	padding-right:4rem;
}
.JD_dialog_topcontentfav li.active{
	color:#2A7DAD;
	background:url('../../../src/assets/img/photo/checked.svg') no-repeat 95% 1rem;
	background-size:5%;
}
.imgrotatetop{
	animation:showrotatetop .3s forwards;
}
@-webkit-keyframes showrotatetop{
	0%{
		transform:rotate(0deg)
	}
	100%{
		transform:rotate(180deg)
	}
}
.imgrotatebottom{
	animation:showrotatebottom .3s forwards;
}
@-webkit-keyframes showrotatebottom{
	0%{
		transform:rotate(0deg)
	}
	100%{
		transform:rotate(-180deg)
	}
}
.popupbottomfav{
	animation:popupbottomfav .5s forwards;
}
@-webkit-keyframes popupbottomfav{
	0%{
		height:0
	}
	100%{
		height:10rem
	}
}
</style>
