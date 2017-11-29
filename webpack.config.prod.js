// Copyright 2017 The Haohaoxiuche Team Authors. All right reserved. Use of
// this source that is governed by a Apache-style license that can be found in
// the LICENSE file.
//
// Default Configures with Production is for building dist files.
//
// @authors hjboss <hongjiangproject@gmail.com> 2017-09 $$
const webpackConfigure = require('./webpack.config')

module.exports = webpackConfigure({
        entry: {
                'm.jdyxqq.com.init': './src/m.jdyxqq.com.init.js',
                'm.jdyxqq.com': './src/m.jdyxqq.com.js'
        }
})
