
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import "./dashboard.vue";







createApp(App).mount('#app')

const routes = [
    {
    path : '/',
    redirect : '/dashboard',
    component : DefaultLayout,
    meta : { requiresAuth : true },
    children : [
        {path : '/dashboard', name : 'Dashboard', component : Dashboard},
   
    ]
},

]



