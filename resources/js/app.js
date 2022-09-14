import './bootstrap';
import { createApp } from 'vue';
import routes from './routes'

import store from './store'

const app = createApp({
}).use(routes).use(store);

app.mount('#app');
