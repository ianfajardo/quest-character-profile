import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    name: "",
    pronouns: "",
    age: "",
    height: "",
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    updateMessage(state, obj) {
      state[obj.name] = obj.message;
      console.log(obj);
    }
  }
});

export var data = {
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
  drawerToggle: true,
  roleOptions: [
    {value: 'The Fighter', text: "The Fighter"},
    {value: 'The Fighter', text: "The Fighter"}
  ]
}