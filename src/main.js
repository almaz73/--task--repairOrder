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
  if (val == 0) {
    return "Бесплатно"
  } else {
    return val;
  }
})

Vue.filter('russ', function (val) {
  var newText="";
  switch (val.slice(-3)){
    case "Jan": newText = "январь"; break;
    case "Feb": newText = "февраль"; break;
    case "Mar": newText = "март"; break;
    case "Apr": newText = "апрель"; break;
    case "May": newText = "май"; break;
    case "Jun": newText = "июнь"; break;
    case "Jul": newText = "июль"; break;
    case "Avg": newText = "август"; break;
    case "Sen": newText = "сентябрь"; break;
    case "Oct": newText = "октябрь"; break;
    case "Nov": newText = "ноябрь"; break;
    case "Dec": newText = "декабрь"; break;
  }
  return val.slice(0,val.length-3)+newText
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
