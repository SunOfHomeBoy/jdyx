// Copyright 2017 The Haohaoxiuche Team Authors. All right reserved. Use of this
// source that is governed by a Apache-style license that can be found in the
// LICENSE file.
//
// 返回客户端登录用户基本信息
//
// @authors hjboss <hongjiangproject@gmail.com> 2017-10 $$
import json from './json'
import setting from '../config/setting'

export default function auth(parameters) {
        if (!parameters) {
                return json(sessionStorage.getItem(setting.authKey))
        }

        return sessionStorage.setItem(setting.authKey, json(parameters))
}
