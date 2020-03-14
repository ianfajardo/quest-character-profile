//css imports
import "../css/main.scss";

//js dependency imports
import $ from "jquery";
import Vue from "vue";
import VueRouter from "vue-router";

import { store, data } from "./store";

import "es6-promise/auto";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import topHeader from "../components/topHeader.vue";

import Home from "../components/home.vue";
import Name from "../components/name.vue";

const routes = [
  { path: "/", component: Home, props: true },
  { path: "/name", component: Name, props: true },
  { path: "*", component: Home }
];

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueRouter);

const router = new VueRouter({
  //mode: 'history',
  routes
});

var app = new Vue({
  store,
  router: router,
  data: data,
  components: {
    'top-header': topHeader
  },
  methods: {
    updatePronouns: function(pronoun) {
      this.pronouns = pronoun;
    },
    toggleDrawer: function() {
      this.drawerToggle = !this.drawerToggle;
    },
    pageDrawerToggle: function() {
      if (this.drawerToggle === false) {
        this.drawerToggle = true;
      }
    }
  }
}).$mount("#app");
