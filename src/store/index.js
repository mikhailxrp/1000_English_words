import { createStore } from 'vuex';
import Card from '../assets/card.js';
import request from '@/assets/api.js';

export default createStore({
  state() {
    return {
      isActiveModal: false,
      allWords: null,
      wordsLearned: [],
      wordsToLearn: [],
      countWords: 0,
    };
  },
  getters: {
    modalFlag(state) {
      return state.isActiveModal;
    },
    allWords(state) {
      return state.allWords;
    },
    wordForm(state) {
      return state.form;
    },
    countWords(state) {
      return state.countWords;
    },
    learned(state) {
      return state.wordsLearned;
    },
    toLearn(sate) {
      return sate.wordsToLearn;
    },
  },
  mutations: {
    openModal(state) {
      state.isActiveModal = true;
    },
    closeModal(state) {
      state.isActiveModal = false;
    },
    nextWord(state) {
      if (state.countWords < state.allWords.length - 1) {
        state.countWords++;
      } else if (state.countWords === state.allWords.length - 1) {
        state.countWords = 0;
      }
    },
    learnedWords(state) {
      state.wordsLearned = state.allWords.filter((word) => word.marked);
    },
    learnWords(state) {
      state.wordsToLearn = state.allWords.filter((word) => !word.marked);
    },
  },
  actions: {
    async getWords(context) {
      context.state.allWords = await request('http://localhost:3000/api/server/words', 'GET');
    },
    async learned(context) {
      context.state.allWords = await request('http://localhost:3000/api/server/words', 'GET');
      context.commit('learnedWords');
    },
    async learn(context) {
      context.state.allWords = await request('http://localhost:3000/api/server/words', 'GET');
      context.commit('learnWords');
    },
    async addNewWord(context, payload) {
      let word = new Card(Date.now(), payload.enValue, payload.ruValue);
      await request('http://localhost:3000/api/server/new-word', 'POST', word);
    },
  },
});
