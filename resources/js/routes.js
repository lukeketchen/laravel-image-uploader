import {createRouter, createWebHistory} from 'vue-router';

import Profile from './components/Profile';
import ProfileLayout from './components/layouts/Profile';
import UploadImage from './components/UploadImage.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

import store from './store'

var router =  createRouter({
	   history: createWebHistory(),
	   routes: [
		   	{
			   path: '/',
			   component: ProfileLayout,
			    meta:{
					middleware:"auth"
				},
				children:[
					{
						name:"profile",
						path: '/',
						component: Profile,
						meta:{
							title:`Profile`
						}
					}
				]
		   	},
			{
			   path: '/upload',
			   component: UploadImage,
			   name: 'upload'
		   	},
		   	{
			   path: '/login',
			   component: Login,
			   name: 'login',
			   meta:{
					middleware:"guest",
					title:`Login`
				}
		   	},
		   	{
			   path: '/register',
			   component: Register,
			   name: 'register',
			   meta:{
					middleware:"guest",
					title:`Login`
				}
		   	},
	   ],
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} - ${process.env.MIX_APP_NAME}`
    if(to.meta.middleware=="guest"){
        if(store.state.auth.authenticated){
            next({name:"profile"})
        }
        next()
    }else{
        if(store.state.auth.authenticated){
            next()
        }else{
            next({name:"login"})
        }
    }
})

export default router;
