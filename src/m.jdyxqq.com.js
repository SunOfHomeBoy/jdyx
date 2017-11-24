// Copyright 2017 The Haohaoxiuche Team Authors. All right reserved.
// Use of this source that is governed by a Apache-style
// license that can be found in the LICENSE file.
//
// 京典一线网络技术（北京）有限公司 京典一线人才资源库 前端页面系统
//
// @authors hjboss <hongjiangproject@gmail.com> 2017-10 $$
import Vue from 'vue'
import App from './app'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import routes from './config/routes'
import * as components from './components'
import * as utils from './utils'
import './stylesheet/normalize.less'
import './index.html'
import vuexI18n from 'vuex-i18n';

import './config/fontsize'
import store from './vuex/store'
Vue.use(vuexI18n.plugin, store);
const translationsEn = {
    "content": "This is some {type} content"
};
 
// translations can be kept in separate files for each language
// i.e. resources/i18n/de.json.
const translationsDe = {
    "My nice title": "Ein schöner Titel",
    "content": "Dies ist ein toller Inhalt"
};
 
// add translations directly to the application
Vue.i18n.add('en', translationsEn);
Vue.i18n.add('de', translationsDe);
 
// set the start locale to use
Vue.i18n.set('en');

(function () {
        jdyxData = jdyxData || {}

        Vue.config.debug = jdyxData.debug || false
        Vue.use(VueRouter)
        const router = new VueRouter({
                routes,
                mode: jdyxData.history ? 'history' : 'hash'
        })
		//
		/*let history = window.sessionStorage
		history.clear()
		let historyCount = history.getItem('count') * 1 || 0
		history.setItem('/', 0)*/
		
		/*const commit = store.commit || store.dispatch*/
		
        router.beforeEach(({
                path,
                meta
        }, from, next) => {
                let {
                        auth = false
                } = meta
              /*  console.log("daddad",meta);*/
                let state = Boolean(Object.keys(utils.auth()).length !== 0)
				/*console.log("-=",auth,"-state",state,"--path",path,"-=");*/
				
                if (auth && !state && /[a-zA-Z\-]{2,}\/Login$/i.test(path) === false) {//最后一个是监测不是login页面的
                        return next({
                                path: utils.uriPath('/Login')
                        })
                }

                next()
                
               /* const toIndex = history.getItem(path)
				const fromIndex = history.getItem(from.path)
				if (toIndex) {
				    if (toIndex > fromIndex || !fromIndex) {
				      commit('UPDATE_DIRECTION', 'forward')
				    } else {
				      commit('UPDATE_DIRECTION', 'reverse')
				    }
				} else {
				    ++historyCount
				    history.setItem('count', historyCount)
				    path !== '/' && history.setItem(path, historyCount)
				    commit('UPDATE_DIRECTION', 'forward')
				}*/
				
				/*setTimeout(next, 50)*/
        })

        Object.keys(components).forEach(key => {
                Vue.component(key.replace(/(\w)/, v => v.toUpperCase()), components[key])
        })
        new Vue({
        		store,
                router
        }).$mount('#jdyx-' + jdyxData.dom)
})()
