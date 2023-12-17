import {createStore} from 'vuex'
import Card from '../assets/card.js';

export default createStore({
  state() {
    return{
      isActiveModal: false
    }
  },
  mutations: {
    addNewWord(state){
      state.isActiveModal = true
    },
    closeModal(state){
      state.isActiveModal = false
    }
  }
})