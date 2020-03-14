//css imports
import '../css/main.scss';

//js dependency imports
import $ from 'jquery';
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

var data = {
  name: '',
  pronouns: '',
  age: '',
  height: '',
  role: '',
  body: '',
  face: '',
  vibe: '',
  outfit: [''],
  move: '',
  home: '',
  knownFor: '',
  ideal: '',
  flaw: '',
  dream: '',
  counter: 0,
  timer: 4,
  message: "test",
  drawerToggle: true,
  roleOptions: [
    {value: 'The Fighter', text: "The Fighter"},
    {value: 'The Fighter', text: "The Fighter"}
  ]
}

var app = new Vue({
  el: '.app',
  data: data,
  methods: {
    updatePronouns: function (pronoun) {
      this.pronouns = pronoun;
    },
    toggleDrawer: function () {
      this.drawerToggle = !this.drawerToggle;
    },
    pageDrawerToggle: function() {
      if(this.drawerToggle === false) {
        this.drawerToggle = true;
      }
    }
  }
});
