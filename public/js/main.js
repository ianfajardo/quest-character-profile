//css imports
import '../css/main.scss';

//js dependency imports
import $ from 'jquery';
import Vue from 'vue'
import VueTippy from 'vue-tippy'

Vue.use(VueTippy);

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
  message: "test"
}

var app = new Vue({
  el: '.app',
  data: data
});
