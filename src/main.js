// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import AsyncComputed from 'vue-async-computed'
import VueRouter from 'vue-router'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

Vue.use(AsyncComputed)
Vue.use(VueRouter)
Vue.use(VueMoment, {
  moment,
})

Vue.config.productionTip = false

Vue.filter('filterMoney', function (val) {
  if (val === 0) {
    return "Бесплатно"
  } else {
    return val;
  }
})

Vue.filter('russ', function (val) {
  let arrTemp = []
  arrTemp["Jan"] = "янв";
  arrTemp["Feb"] = "фев";
  arrTemp["Mar"] = "мар";
  arrTemp["Apr"] = "апр";
  arrTemp["May"] = "май";
  arrTemp["Jun"] = "июн";
  arrTemp["Jul"] = "июл";
  arrTemp["Avg"] = "авг";
  arrTemp["Sen"] = "сен";
  arrTemp["Oct"] = "окт";
  arrTemp["Nov"] = "ноя";
  arrTemp["Dec"] = "дек";
  return val.slice(0,val.length-3)+arrTemp[val.slice(-3)]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
