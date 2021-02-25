import Vue from 'vue'
import Index from './Index.vue'
import router from './router'
import ElementUI from 'element-ui';
import '../public/css/style/theme/index.css';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

Vue.use(ElementUI);
locale.use(lang)
export const EventService = new Vue();

Vue.config.productionTip = false

const App = new Vue({
  router,
  components: {
  },
  render: h => h(Index)
})

App.$mount('#app')