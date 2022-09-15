import axios from 'axios'
import router from '../routes'


export default {
    namespaced: true,
    state:{
        authenticated:false,
        user:{}
    },
    getters:{
        authenticated(state){
            return state.authenticated
        },
        user(state){
            return state.user
        }
    },
    mutations:{
        SET_AUTHENTICATED (state, value) {
            state.authenticated = value
        },
        SET_USER (state, value) {
            state.user = value
        }
    },
    actions:{
        login({commit}, user){
            // return axios.get('/api/profile').then(({data})=>{
            return axios.get('/api/login', user).then(response=>{
                commit('SET_USER',user)
                commit('SET_AUTHENTICATED',true)
                router.push({name:'profile'})

				// TODO -
				// [ ] check why returning html not json as the data object
				// [-] might be CORS - not CORS issue
				//
				// console.log('auth login function');
				// console.log('check user - ', user);

            }).catch(({response:{data}})=>{
                commit('SET_USER',{})
                commit('SET_AUTHENTICATED',false)
            })
        },
        logout({commit}){
            commit('SET_USER',{})
            commit('SET_AUTHENTICATED',false)
        }
    }
}
