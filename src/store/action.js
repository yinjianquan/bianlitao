import api from "./api"
export default {
	addNum({ commit, state }, dapa) {
		commit('REMBER_ANSWER', { dapa })
	},
  addRouter({ commit, state }, name) {
    commit('THIS_ROUTER',name )
	},
	addCketList({commit,state},data){
		api.ajaxGet('/ticket/list',data)
       .then(res => {
              console.log(res);
			  commit('CKET_LIST',res)
          })
        .catch(res =>{
          console.log(res);
        })
	},
	addDrawalList({commit,state},data){
		api.ajaxGet('/account/txrecord',data)
       .then(res => {
              console.log(res);
			  commit('CKET_LIST',res)
          })
        .catch(res =>{
          console.log(res);
        })
	},
  //点击返回
  goBack({commit,state},num){
    commit('N_NUM',num)
  },
  //点击导航栏
  selectIndex({commit,state},index){
    commit('SELECT_INDEX',index)
  }
}