import Vue from "vue";
import Router from "vue-router";

import Dashboard from "./components/Dashboard.vue";
import Login from "./components/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
  
    {
      path: "/login/:reason?",
      name: "Login",
      component: Login,
    },
    
    {
      path: "/*",
      redirect: "/login",
    },
  ],
});
