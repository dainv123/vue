import Vue from 'vue';
import Vuex from 'vuex';
import Authen from './modules/authen';
Vue.use(Vuex);

const state = {
  dataTest: []
};

const getters = {
  //
};

const mutations = {
  //
};

const actions = {
  //
};

const modules = {
  Authen
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
});

export default store;
