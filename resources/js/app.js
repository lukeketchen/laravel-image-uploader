import './bootstrap';
import { createApp } from 'vue';
import routes from './routes'

const app = createApp({}).use(routes);

app.mount('#app');
