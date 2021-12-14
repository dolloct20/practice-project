import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'; 
// import store from './store'

const store = createStore({
    state() {
      return {
        user:{
          username: '',
          password: '',
          isLogin: false
        }
      }
    },
    mutations: {
      setUserData(state, { userData }) {
        state.user.username = userData.username;
        state.user.password = userData.password;
        state.user.isLogin = true;
      }
    }
  });

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
