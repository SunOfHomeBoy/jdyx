import * as utils from '../utils'
import setting from './setting'
import App from '../app'

//工具:子路由wrapper

import Szchild from "../components/Szchild.vue";
//首页
import Home from '../components/home/Home'
import Selcity from '../components/home/Selcity' //选择城市
//人才搜索
import Rcss from '../components/rcss/Rcss'
import Rcssxq from '../components/rcss/Rcssxq'
//人才共享
import Rcgx from '../components/rcgx/Rcgx'
import Rcgxxq from '../components/rcgx/Rcgxxq'
//入职定位
import Rzdw from '../components/repeatuse/Rzdw'
import Rzdw2 from '../components/repeatuse/Rzdw2'
// //团队组建
import Teamzj from '../components/teamzj/Teamzj'
import Zjrecord from '../components/teamzj/Zjrecord' //组建记录
// //京典头条
import Jdtt from '../components/jingdtt/Jdtt'
// //知识培训
//import Zspx from '../components/zspx/Zspx' //删除组建
import Zspxxq from '../components/zspx/Zspxxq'
// //我的
import Myself from '../components/myself/Myself'
import Hadview from '../components/myself/Hadview' //已查看
import Byview from '../components/myself/Byview' //被查看
import Personaldata from '../components/myself/Personaldata'
import Accountmsg from '../components/myself/Accountmsg'
import Importmoney from '../components/myself/szchild/Importmoney' //提现
import Recharge from '../components/myself/szchild/Recharge' //充值
import Rechargerecord from '../components/myself/szchild/Rechargerecord' //充值记录
import Myfavourite from '../components/myself/Myfavourite' //我的收藏
import Sz from '../components/myself/Sz'
import Editpwd from '../components/myself/szchild/Editpwd' //修改密码
import Banbenteam from '../components/myself/szchild/Banbenteam' //版本更新
import Aboutus from '../components/myself/szchild/Aboutus' //关于我们
import Help from '../components/myself/szchild/Help' //帮助
// //评价页面
import Evaluate from '../components/repeatuse/Evaluate'
import Evaluatexq from '../components/repeatuse/Evaluatexq'


// //入职定位
import Editresume from '../components/rzdw/Editresume'
import Selectbeforeresume from '../components/rzdw/Selectbeforeresume'

// //登录
import Login from '../components/login/Login'
import Zhuce from '../components/login/Zhuce'
import Findpwd from '../components/login/Findpwd'
export default [{
	path: '/',
	component: App,
	children: [{
		path: '/',
		component: Home
	}, {
		path: '/Rcss',
		component: Szchild,
		children: [{
			path: '',
			component: Rcss
		}, {
			path: 'Rcssxq/:id',
			component: Rcssxq
		}]
	}, {
		path: '/Rcgx',
		component: Szchild,
		/*meta: {auth:true}*/
		children: [{
			path: '',
			component: Rcgx
		}, {
			path: 'Rcgxxq/:id',
			component: Rcgxxq
		}, {
			path: 'Evaluatexq/:id',
			component: Evaluatexq
		}]
	}, {
		path: '/Rzdw',
		component: Rzdw
	}, {
		path: '/Rzdw2',
		component: Rzdw2
	}, {
		path: '/Myself',
		component: Szchild,
		children: [{
				path: '',
				component: Myself,
				/*meta: {auth:true}*/
			},
			{
				path: 'Accountmsg',
				component: Szchild,
				children: [{
					path: '',
					component: Accountmsg
				}, {
					path: 'Recharge',
					component: Recharge
				}, {
					path: 'Importmoney',
					component: Importmoney
				}, {
					path: 'Rechargerecord',
					component: Rechargerecord
				}]
			}, {
				path: 'Myfavourite',
				component: Myfavourite
			}, {
				path: 'personaldata',
				component: Personaldata
			}, {
				path: 'Sz',
				component: Szchild,
				children: [{
						path: '',
						component: Sz,
					},
					{
						path: 'Aboutus',
						component: Aboutus
					},
					{
						path: 'Help',
						component: Help
					}, {
						path: 'Editpwd',
						component: Editpwd
					}, {
						path: 'Banbenteam',
						component: Banbenteam
					}
				]
			}, {
				path: 'Hadview',
				component: Hadview
			}, {
				path: 'Byview',
				component: Byview
			}
		]
	}, {
		path: '/Teamzj',
		component: Szchild,
		children: [{
				path: '',
				component: Teamzj,
			},
			{
				path: 'Zjrecord',
				component: Zjrecord
			}
		]
	}, {
		path: '/Jdtt',
		component: Jdtt
	}, {
		path: '/Jdtt/:id',
		component: Zspxxq
	}, {
		path: '/Zspx',
		component: Jdtt
	}, {
		path: '/Zspx/:id',
		component: Zspxxq
	}, {
		path: '/Evaluate',
		component: Evaluate
	}, {
		path: '/Selcity',
		component: Selcity
	}, {
		path: '/Editresume',
		component: Editresume
	}, {
		path: '/Selectbeforeresume',
		component: Selectbeforeresume
	}, {
		path: '/Login',
		component: Login
	}, {
		path: '/Zhuce',
		component: Zhuce
	}, {
		path: '/Findpwd',
		component: Findpwd
	}]
}]
