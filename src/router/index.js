import Vue from "vue";
import VueRouter from "vue-router";

import SearchByTitle from "../components/SearchByTitle.vue";
import FavouriteMovies from "../components/FavouriteMovies.vue";
import MovieDetail from "../components/MovieDetail.vue";
import ReviewPage from "../components/ReviewPage.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/search",
      component: SearchByTitle,
    },
    {
      path: "/favourite",
      component: FavouriteMovies,
    },
    {
      path: "/detail",
      component: MovieDetail,
    },
    {
      path: "/review",
      component: ReviewPage,
    },
  ],
});
