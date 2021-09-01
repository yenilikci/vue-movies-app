import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    searchRes: [],
    favouriteMovies: [],
  },
  mutations: {
    setSearchRes(state, payload) {
      state.searchRes = payload;
    },
    setFavouriteMovies(state, payload) {
      state.favouriteMovies.unshift(payload);
    },
    deleteFavouriteMovie(state, value) {
      state.favouriteMovies.splice(value, 1);
    },
  },
});

export default store;
