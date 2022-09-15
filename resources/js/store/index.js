// import * as Vue from 'vue'
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './auth'

// Vue.use(Vuex)

export default createStore({
	// state: {
    // },
    // mutations: {
    // },
    // actions: {
    // },
    plugins:[
        createPersistedState()
    ],
    modules:{
        auth
    }
})
