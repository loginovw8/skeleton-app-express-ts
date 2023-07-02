import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import IndexView from './components/Index.vue';
import ItemsView from './components/items/Items.vue';

const router = createRouter({
    routes: [
        {
            path: '/',
            component: IndexView,
            props: {
                title: 'Index',
            }
        },
        {
            path: '/items',
            component: ItemsView,
        }
    ],
    history: createWebHistory(),
});

const app = createApp(App);
app.use(router);
app.mount('#app');
