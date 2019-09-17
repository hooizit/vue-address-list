import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import AddCompany from "./views/AddCompany.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/add-company",
      name: "addCompany",
      component: AddCompany
    }
  ]
});
