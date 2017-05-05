import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movie:[],
    name:''
  },
  mutations:{
  	add (state,newMovie) {
  		state.movie = newMovie
  	},
  	name (state,name) {
  		state.name = name
  	}
  }
})

export default store