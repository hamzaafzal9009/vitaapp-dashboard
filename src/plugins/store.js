import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Sidebar_drawer: null,
    Customizer_drawer: false,
    SidebarColor: "white", //Change Sidebar Color || 'white', | "#2b2b2b" | "rgb(44, 59, 164)" | "rgb(96, 44, 164)" | "rgb(151, 210, 219)" | "rgb(77, 86, 100)"
    SidebarBg: "",
    navbarColor: "primary",
    setHorizontalLayout: false, // Horizontal layout
    notify: {
      color: 'green',
      message: '',
      display: '',
    },
    showOverlay: false,
  },
  mutations: {
    SET_SIDEBAR_DRAWER(state, payload) {
      state.Sidebar_drawer = payload;
    },
    SET_CUSTOMIZER_DRAWER(state, payload) {
      state.Customizer_drawer = payload;
    },
    SET_SIDEBAR_COLOR(state, payload) {
      state.SidebarColor = payload;
    },
    SET_NAVBAR_COLOR(state, payload) {
      state.navbarColor = payload;
    },
    SET_LAYOUT(state, payload) {
      state.setHorizontalLayout = payload;
    },
    setNotifyMessage (state, payload) {
      state.notify = {
        display: true,
        color: 'green',
        message: payload
      }
    },
    setNotifyError (state, payload) {
      state.notify = {
        display: true,
        color: 'red',
        message: payload
      }
    },
    setShowOverlay (state, payload) {
      state.showOverlay = payload
    },
  },
  actions: {},
  getters: {
    getNotifyMessage (state) {
      return state.notify
    },
    getShowOverLay (state) {
      return state.showOverlay;
    }
  },
});
