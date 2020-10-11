export const UserModule = {
  namespced: true,
  state: {
    user: null,
  },
  // * Mutations are function that effects the STATE
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  // * Actions are function that you call throughtout your application that call mutations
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
  },
};
