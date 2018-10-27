import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const components = {
  home: () => import("../page/home")
};
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: components.home
    }
  ]
});
