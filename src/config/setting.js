// Copyright 2017 The Haohaoxiuche Team Authors. All right reserved. Use of this
// source that is governed by a Apache-style license that can be found in the
// LICENSE file.
//
// 返回前端页面系统之客户端的常规配置项
//
// @authors hjboss <hongjiangproject@gmail.com> 2017-10 $$
const jdyxData = window.jdyxData || {}

export default {
        debug: jdyxData.debug || false,
        history: jdyxData.history || false,
        cache: jdyxData,
        appID: 'd272cb8bd50652c29bd458d0b5e76080',
        authKey: 'auth',
        pathAPI: jdyxData.debug
                ? 'http://127.0.0.1:10007/'
                : '/cgi-bin/ajax',
        pathSignin: '/Login',
        pathHome: '/' + (jdyxData.lang || 'cn'),
        languagesName: {
                cn: '简体中文',
                zh: '繁體中文',
                en: 'English',
                fr: 'France',
                es: 'España',
                ru: 'Россия'
        }
}
