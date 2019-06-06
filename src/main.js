// 入口js

import Vue from 'vue'
import App from './App.vue'

import router from './router/index.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.options.root = 'http://www.liulongbin.top:3005';
//全局设置post时候表单数据格式组织形式
Vue.http.options.emulateJSON = true

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './lib/css/mui.min.css'
import './lib/css/icons-extra.css'

import moment from 'moment'

Vue.filter('dateFormat', function(datastr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(datastr).format(pattern)
})




new Vue({
    el: "#app",
    render: h => h(App),
    router,
})