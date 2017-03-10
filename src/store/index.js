/**
 * Created by hzj on 2017/3/10.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)
const state = {
  count: 0
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

// 热部署
if(module.hot){
  module.hot.accept(['./getters','./actions','./mutations'], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store
