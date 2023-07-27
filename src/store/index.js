import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    user: null,
    reposes: null,
    error: null,
  },
  mutations: {
    getUser(state, paylod) {
      state.user = paylod;
    },
    getRepos(state, paylod) {
      state.reposes = paylod;
    },
    error(state, paylod) {
      state.error = paylod;
    },
  },
  actions: {
    async getUser(context, user) {
      try {
        let response = await axios.get(`https://api.github.com/users/${user}`);
        context.commit("getUser", response);

        let reposes = await axios.get(
          `https://api.github.com/users/${user}/repos`
        );
        context.commit("getRepos", reposes);
      } catch (error) {
        context.commit("error", "Такого ользователя нету");
      }
    },
  },
  getters: {},
});
