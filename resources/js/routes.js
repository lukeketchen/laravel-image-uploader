import {createRouter, createWebHistory} from 'vue-router';

import Home from './components/Home';
import Profile from './components/Profile';
import UploadImage from './components/UploadImage.vue';

export default createRouter({
	   history: createWebHistory(),
	   routes: [
		   	{
			   path: '/',
			   component: Home
		   	},
		   	{
			   path: '/profile',
			   component: Profile,
			   name: 'profile'
		   	},
			{
			   path: '/upload',
			   component: UploadImage,
			   name: 'upload'
		   	}
	   ],
})
