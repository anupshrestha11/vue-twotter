import { createStore } from "vuex";
import { UserModule } from "./User";
export default createStore({
  state: {},
  // * Mutations are function that effects the STATE
  mutations: {},
  // * Actions are function that you call throughtout your application that call mutations
  actions: {},
  modules: {
    User: UserModule,
  },
});
