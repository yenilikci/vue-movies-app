import Vue from "vue";
import VueRouter from "vue-router";

import SearchByTitle from "../components/SearchByTitle.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/search",
      component: SearchByTitle,
    },
  ],
});
