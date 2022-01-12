export default {
  namespaced: true,
  state: {
    messages: [],
    currentMessage: null,
  },
  getters: {
    hasMessageUnsent(state) {
      return state.messages.length;
    },
  },
  actions: {
    pushMessage({ commit, state }, payload) {
      if (!state.currentMessage) {
        commit("newMessage", payload);
      } else {
        commit("push", payload);
      }
    },
    ackMessage({ commit, state }) {
      const message = state.messages.shift();
      if (message) {
        commit("newMessage", message);
      } else {
        commit("clearMessage");
      }
    },
  },
  mutations: {
    push(state, payload) {
      state.messages.push(payload);
    },
    newMessage(state, payload) {
      state.currentMessage = payload;
    },
    clearMessage(state) {
      state.currentMessage = null;
    },
  },
};
