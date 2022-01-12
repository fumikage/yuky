let STORE = null;

export default {
  attachStore(store) {
    STORE = store;
  },
  error(message) {
    STORE.dispatch(
      "notify/pushMessage",
      { type: "error", message },
      { root: true }
    );
  },
  success(message) {
    STORE.dispatch(
      "notify/pushMessage",
      { type: "success", message },
      { root: true }
    );
  },
};
