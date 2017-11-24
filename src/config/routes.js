import * as utils from '../utils'
import setting from './setting'
import App from '../app'

//工具:子路由wrapper
import ChildWrapper from "./ChildWrapper.vue";
import Szchild from "../components/Szchild.vue";
const Home = resolve => require(['../components/Home'], resolve)
const Rcss = resolve => require(['../components/Rcss'], resolve)
const Rcssxq = resolve => require(['../components/Rcssxq'], resolve)
const Rcgx = resolve => require(['../components/Rcgx'], resolve)
const Rcgxxq = resolve => require(['../components/Rcgxxq'], resolve)
const Rzdw = resolve => require(['../components/Rzdw'], resolve)
const Rzdw2 = resolve => require(['../components/Rzdw2'], resolve)
const Myself = resolve => require(['../components/Myself'], resolve)
const Teamzj = resolve => require(['../components/Teamzj'], resolve)
const Jdtt = resolve => require(['../components/Jdtt'], resolve)
const Zspx = resolve => require(['../components/Zspx'], resolve)
const Zspxxq = resolve => require(['../components/Zspxxq'], resolve)
const Accountmsg = resolve => require(['../components/Accountmsg'], resolve)
const Myfavourite = resolve => require(['../components/Myfavourite'], resolve)
const Sz = resolve => require(['../components/Sz'], resolve)
const Editpwd = resolve => require(['../components/Editpwd'], resolve)
const Banbenteam = resolve => require(['../components/Banbenteam'], resolve)
const Aboutus = resolve => require(['../components/Aboutus'], resolve)
const Hadview = resolve => require(['../components/Hadview'], resolve)
const Byview = resolve => require(['../components/Byview'], resolve)
const Rechargerecord = resolve => require(['../components/Rechargerecord'], resolve)
const Evaluate = resolve => require(['../components/Evaluate'], resolve)
const Zjrecord = resolve => require(['../components/Zjrecord'], resolve)
const Selcity = resolve => require(['../components/Selcity'], resolve)
const Editresume = resolve => require(['../components/Editresume'], resolve)
const Selectbeforeresume = resolve => require(['../components/Selectbeforeresume'], resolve)
const Help = resolve => require(['../components/Help'], resolve)
const Personaldata = resolve => require(['../components/Personaldata'], resolve)
const Recharge = resolve => require(['../components/Recharge'], resolve)
const Importmoney = resolve => require(['../components/Importmoney'], resolve)
const Login = resolve => require(['../components/Login'], resolve)
const Zhuce = resolve => require(['../components/Zhuce'], resolve)
const Evaluatexq = resolve => require(['../components/Evaluatexq'], resolve)
export default [{
	path: '/',
	component: App,
	children: [
		{
			path: '/',
			component: Home
		}, 
		{
			path: '/Rcss',
			component: ChildWrapper,
			children:[
				{
					path:'',
					component:Rcss
				},
				{
					path:'Rcssxq',
					component: Rcssxq
				}
			]
		},
		{
			path: '/Rcgx',
			component: ChildWrapper,
			/*meta: {auth:true}*/
			children:[
				{
				path:'',
					component:Rcgx
				},
				{
					path:'Rcgxxq/:id',
					name:'Rcgxxq',
					component: Rcgxxq
				},
				{
					path: 'Evaluatexq/:id',
					name:'Evaluatexq',
					component: Evaluatexq
				}
			]
		},
		{
			path: '/Rzdw',
			component: Rzdw
		},
		{
			path: '/Rzdw2',
			component: Rzdw2
		}, 
		{
			path: '/Myself',
			component: ChildWrapper,
			children: [
				{
					path: '',
					component: Myself,
					meta: {auth:true}
				},
				{
					path: 'Accountmsg',
					component: Szchild,
					children:[
						{
							path: '',
							component: Accountmsg
						},
						{
							path: 'Recharge',
							component: Recharge
						},
						{
							path: 'Importmoney',
							component: Importmoney
						},
						{
							path: 'Rechargerecord',
							component: Rechargerecord
						}
					]
				},
				{
					path: 'Myfavourite',
					component: Myfavourite
				},
				{
					path: 'personaldata',
					component: Personaldata
				},
				{
					path: 'Sz',
					component: Szchild,
					children: [
						{
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
						},
						{
							path: 'Editpwd',
							component: Editpwd
						},
						{
							path: 'Banbenteam',
							component: Banbenteam
						}
					]
				},
				{
					path: 'Hadview',
					component: Hadview
				},
				{
					path: 'Byview',
					component: Byview
				}
			]
		}, 
		{
			path: '/Teamzj',
			component: Szchild,
			children:[
				{
					path: '',
					component: Teamzj,
				},
				{
					path: 'Zjrecord',
					component: Zjrecord
				}
			]
		}, 
		{
			path: '/Jdtt',
			component: Jdtt
		}, 
		{
			path: '/Zspx',
			component: Zspx
		}, 
		{
			path: '/Zspxxq/:id',
			name: 'Zspxxq',
			component: Zspxxq
		},
		{
			path: '/Evaluate',
			component: Evaluate
		},
		{
			path: '/Selcity',
			component: Selcity
		},
		{
			path: '/Editresume',
			component: Editresume
		},
		{
			path: '/Selectbeforeresume',
			component: Selectbeforeresume
		},
		{
			path: '/Login',
			component: Login
		},
		{
			path: '/Zhuce',
			component: Zhuce
		}
	]
}]