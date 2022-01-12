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
    async checkMail({ commit }, { mail }) {
      try {
        let validate = await userService.checkMail(mail);
        if (validate === 1) {
          commit("mailChecked", { mail });
          console.log("test");
          notifier.success(
            `Parfait !<br/>${mail} est une adresse valide &#x1F603`
          );
        } else {
          notifier.error(`E-mail invalide, veuillez réessayer`);
        }

        return validate;
      } catch (error) {
        APIError.handle(error);
      }
    },
    async setName({ commit }, { firstName, lastName }) {
      commit("setName", { firstName, lastName });
    },
    async setBirthday({ commit }, { birthday }) {
      commit("setBirthday", { birthday });
    },
    async setSex({ commit }, { sex }) {
      commit("setSex", { sex });
    },
    async setPhone({ commit }, { phone }) {
      commit("setPhone", { phone });
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
    setName(state, { firstName, lastName }) {
      state.create_user.firstName = firstName;
      state.create_user.lastName = lastName;
    },
    setBirthday(state, { birthday }) {
      state.create_user.birthday = birthday;
    },
    setSex(state, { sex }) {
      state.create_user.sex = sex;
    },
    setPhone(state, { phone }) {
      state.create_user.phone = phone;
    },
  },
};
