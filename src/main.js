import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial);
Vue.config.productionTip = false

Vue.material.locale.dateFormat = 'yyyy年MM月dd號'

// change multiple options
Vue.material.locale = {
  ...Vue.material.locale,
    dateFormat: 'yyyy年MM月dd號',
    days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    shortDays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    shorterDays: ['日', '一', '二', '三', '四', '五', '六'],
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    shortMonths: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    shorterMonths: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
  
    firstDayOfAWeek: 1,
    cancel: '取消',
    confirm: '確認'
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
