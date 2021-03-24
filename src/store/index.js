import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let list = window.localStorage.getItem('list');

export default new Vuex.Store({
  state: {
    list: list ? JSON.parse(list) : [],
  },

  mutations: {
    addToMyList(state, movie) {
      let existMovie = state.list.find(
        (current) => current.imdbID == movie.imdbID,
      );
      if (!existMovie) {
        state.list.push(movie);
      }
      this.commit('saveData');
    },

    saveData(state) {
      window.localStorage.setItem('list', JSON.stringify(state.list));
    },

    removeData(state, movie) {
      let index = state.list.indexOf(movie);
      state.list.splice(index, 1);
      this.commit('saveData');
    },
  },
});
