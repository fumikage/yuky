import userService from "../../services/user";
import APIError from "../../tools/APIError";
import notifier from "../../tools/notifier";
import authService from "../../services/auth";

export default {
  namespaced: true,
  state: {
    status: {
      loggingIn: false,
      loggedIn: false,
    },
    user: null,
    create_user: { mail: false },
    access_token: null,
    refresh_token: null,
  },
  getter: {},
  actions: {
    async checkMail(context, { mail }) {
      try {
        let validate = await userService.checkMail(mail);
        return validate;
      } catch (error) {
        APIError.handle(error);
      }
    },

    async create(context, { user, password }) {
      try {
        const userdata = await userService.create(
          user.mail,
          password,
          user.phone,
          user.lastName,
          user.firstName,
          user.birthday,
          user.sex
        );
        notifier.success(`Utilisateur créer`);
        return userdata;
      } catch (error) {
        APIError.handle(error);
      }
    },

    async login({ commit }, { mail, password }) {
      commit("loginRequest", { mail });
      try {
        const data = await authService.login(mail, password);
        commit("loginSuccess", data);
        notifier.success(
          `Connecté<br/>Bienvenue ${data.user.firstName} &#x1F603`
        );
        return true;
      } catch (error) {
        commit("loginFailure");
        APIError.handle(error);
      }
    },
  },

  mutations: {
    mailChecked(state, { mail }) {
      state.create_user.mail = mail;
    },
    loginRequest(state, user) {
      state.status.loggingIn = true;
      state.status.loggedIn = false;
      state.user = user;
    },
    loginSuccess(state, { user, access_token, refresh_token }) {
      state.status.loggingIn = false;
      state.status.loggedIn = true;
      state.user = user;
      state.access_token = access_token;
      state.refresh_token = refresh_token;
    },
    loginFailure(state) {
      state.status.loggingIn = false;
      state.status.loggedIn = false;
      state.user = null;
      state.access_token = null;
      state.refresh_token = null;
    },
  },
};
