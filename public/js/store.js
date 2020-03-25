import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    name: "",
    pronouns: "",
    age: "",
    height: "",
    role: "",
    body: "",
    face: "",
    vibe: "",
    outfit1: "",
    outfit2: "",
    move: "",
    style: ["", "", ""],
    home: "",
    knownFor: "",
    ideal: "",
    flaw: "",
    dream: ""
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
