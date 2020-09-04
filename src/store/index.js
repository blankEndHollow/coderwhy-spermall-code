import Vue from "vue"
import Vuex from "vuex"

import mutations from "./drow/mutations"
import actions from "./drow/actions"
import getters from "./drow/getters"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
      cartList:[],
    },
    
    mutations,
    actions,
    getters,
})
