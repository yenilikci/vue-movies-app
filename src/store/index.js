import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    searchRes: [],
    favouriteMovies: [],
    imdbID: null,
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
    setImdbID(state, payload) {
      state.imdbID = payload;
    },
  },
});

export default store;
