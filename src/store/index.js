import Vue from 'vue'
import Vuex from 'vuex'
import photosModule from './photosModule'

Vue.use(Vuex)
export default new Vuex.Store({
modules:{
    photos:photosModule
}
})