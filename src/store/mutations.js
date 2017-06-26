const REMBER_ANSWER = 'REMBER_ANSWER'
const CKET_LIST = 'CKET_LIST'
const THIS_ROUTER = 'THIS_ROUTER'
const N_NUM = 'N_NUM'
const SELECT_INDEX = 'SELECT_INDEX'
export default {
	[REMBER_ANSWER](state, payload) {
		state.answerid[payload.dapa.name] = payload.dapa.input;
		debugger
	},
	[CKET_LIST](state, payload) {
		state.cketList = payload;
	},
	[THIS_ROUTER](state, payload) {
		state.routerName = payload;
	},
	[N_NUM](state, payload) {
		state.num = payload;
	},
	[SELECT_INDEX](state, payload) {
		state.defaultActive = payload;
	},
}