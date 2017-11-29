import * as utils from '../utils'
import setting from './setting'
import App from '../app'

//工具:子路由wrapper

import Szchild from "../components/Szchild.vue";
//首页
const Home = resolve => require(['../components/home/Home'], resolve)
const Selcity = resolve => require(['../components/home/Selcity'], resolve) //选择城市
//人才搜索
const Rcss = resolve => require(['../components/rcss/Rcss'], resolve)
const Rcssxq = resolve => require(['../components/rcss/Rcssxq'], resolve)
//人才共享
const Rcgx = resolve => require(['../components/rcgx/Rcgx'], resolve)
const Rcgxxq = resolve => require(['../components/rcgx/Rcgxxq'], resolve)
//入职定位
const Rzdw = resolve => require(['../components/repeatuse/Rzdw'], resolve)
const Rzdw2 = resolve => require(['../components/repeatuse/Rzdw2'], resolve)
//团队组建
const Teamzj = resolve => require(['../components/teamzj/Teamzj'], resolve)
const Zjrecord = resolve => require(['../components/teamzj/Zjrecord'], resolve) //组建记录
//京典头条
const Jdtt = resolve => require(['../components/jingdtt/Jdtt'], resolve)
//知识培训
// const Zspx = resolve => require(['../components/zspx/Zspx'], resolve) // 删除的组件
const Zspxxq = resolve => require(['../components/zspx/Zspxxq'], resolve)
//我的
const Myself = resolve => require(['../components/myself/Myself'], resolve)
const Hadview = resolve => require(['../components/myself/Hadview'], resolve) //已查看
const Byview = resolve => require(['../components/myself/Byview'], resolve) //被查看
const Personaldata = resolve => require(['../components/myself/Personaldata'], resolve) //个人信息
const Accountmsg = resolve => require(['../components/myself/Accountmsg'], resolve) //账户信息
const Importmoney = resolve => require(['../components/myself/szchild/Importmoney'], resolve) //提现
const Recharge = resolve => require(['../components/myself/szchild/Recharge'], resolve) //充值
const Rechargerecord = resolve => require(['../components/myself/szchild/Rechargerecord'], resolve) //充值记录
const Myfavourite = resolve => require(['../components/myself/Myfavourite'], resolve) //我的收藏
const Sz = resolve => require(['../components/myself/Sz'], resolve)
const Editpwd = resolve => require(['../components/myself/szchild/Editpwd'], resolve) //修改密码
const Banbenteam = resolve => require(['../components/myself/szchild/Banbenteam'], resolve) //版本更新
const Aboutus = resolve => require(['../components/myself/szchild/Aboutus'], resolve) //关于我们
const Help = resolve => require(['../components/myself/szchild/Help'], resolve) //帮助
//评价页面
const Evaluate = resolve => require(['../components/repeatuse/Evaluate'], resolve)
const Evaluatexq = resolve => require(['../components/repeatuse/Evaluatexq'], resolve)

//入职定位
const Editresume = resolve => require(['../components/rzdw/Editresume'], resolve)
const Selectbeforeresume = resolve => require(['../components/rzdw/Selectbeforeresume'], resolve)

//登录
const Login = resolve => require(['../components/login/Login'], resolve)
const Zhuce = resolve => require(['../components/login/Zhuce'], resolve)
const Findpwd = resolve => require(['../components/login/Findpwd'], resolve)
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
			name: "Rcssxq",
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
			name: 'Rcgxxq',
			component: Rcgxxq
		}, {
			path: 'Evaluatexq/:id',
			name: 'Evaluatexq',
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
	},{
		path: '/Jdtt',
		name: 'Jdtt',
		component: Jdtt
	},{
		path: '/Jdtt/:id',
		name: 'Zspxxq',
		component: Zspxxq
	},{
		path: '/Zspx',
		component: Jdtt
	}, {
		path: '/Zspx/:id',
		name: 'Zspxxq',
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
