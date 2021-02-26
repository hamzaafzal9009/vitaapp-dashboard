import Vue from "vue";
import Index from "./Index.vue";
import db from "./plugins/firebase";
import store from "./plugins/store";
import router from "./router";
import ElementUI from "element-ui";
import "../public/css/style/theme/index.css";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

import { firestorePlugin } from "vuefire";
import axios from "axios";
import VueAxios from "vue-axios";
import { mapMutations } from "vuex";

Vue.use(firestorePlugin);
Vue.use(ElementUI);
locale.use(lang);
Vue.use(VueAxios, axios);

export const EventService = new Vue();

Vue.config.productionTip = false;

const App = new Vue({
  router,
  db,
  store,
  components: {},
  render: (h) => h(Index),
});

App.$mount("#app");
