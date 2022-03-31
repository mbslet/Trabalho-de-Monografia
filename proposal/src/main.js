import { createApp } from 'vue'
import App from './App.vue'
import "./assets/sass/layout.scss";
import router from './router'
import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import Button from 'primevue/button';



const app = createApp(App)
app.use(router).mount('#app')
app.use(PrimeVue);
app.component('Card', Card);
app.component('Button', Button);
