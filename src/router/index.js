import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home.vue";
import Movie from "@/views/Movie.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home
    },
    {
      path: "/movie",
      redirect: "/"
    },
    {
      name: "Movie",
      path: "/movie/:movie_id",
      component: Movie,
      props: true
    },    
  ]
});
