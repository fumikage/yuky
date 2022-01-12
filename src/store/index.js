import Vue from "vue";
import Vuex from "vuex";
import userModule from "./modules/user";
import notifyModule from "./modules/notify";

import createPersistedState from "vuex-persistedstate";
import NotifyPlugin from "./plugins/notify";

import notifier from "../tools/notifier";

import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user: userModule,
    notify: notifyModule,
  },
  plugins: [
    NotifyPlugin,
    createPersistedState({
      paths: ["user"],
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
    // createPersistedState({
    //     paths: [],
    //     storage: sessionStorage,
    // }),
  ],
});

notifier.attachStore(store);

export default store;
