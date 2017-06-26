import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'


Vue.use(Vuex)

const state = {
	level: '第一周',
	answerid: {},
	cketList:"",
	routerName:"",
	num:1,
	defaultActive:1
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})