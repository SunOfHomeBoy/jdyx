// Copyright 2017 The Haohaoxiuche Team Authors. All right reserved.
// Use of this source that is governed by a Apache-style
// license that can be found in the LICENSE file.
//
// 定义前端页面的多语言版本
//
// @authors hjboss <hongjiangproject@gmail.com> 2017-10 $$
import cnLanguages from './cn'
import zhLanguages from './zh'
import enLanguages from './en'

let languages = {
        cn: cnLanguages,
        zh: zhLanguages,
        en: enLanguages
}

export function langType() {
        return (jdyxData.history ? window.location.pathname : window.location.hash).split('/')[1]
}

export function lang(name) {
        let code = langType()

        if (!name) {
                return languages[code] || {}
        }

        return languages[code][name]
}

export default lang
