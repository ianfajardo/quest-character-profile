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
import footer from "../components/footer.vue";

import Home from "../components/home.vue";
import Name from "../components/name.vue";
import Role from "../components/role.vue";
import Scene from "../components/scene.vue";
import Style from "../components/style.vue";

import CharSheet from "../components/charsheet.vue";

const routes = [
  { path: "/", component: Home, props: true },
  { path: "/name", component: Name, props: true },
  { path: "/role", component: Role, props: true },
  { path: "/scene", component: Scene, props: true },
  { path: "/style", component: Style, props: true },
  { path: "/charactersheet", component: CharSheet, props: true },
  { path: "*", component: Home }
];

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueRouter);

const router = new VueRouter({
  //mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

var app = new Vue({
  store,
  router: router,
  data: data,
  components: {
    'page-header': topHeader,
    'page-footer': footer
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
