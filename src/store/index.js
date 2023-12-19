import { createStore } from 'vuex';
import Card from '../assets/card.js';

export default createStore({
  state() {
    return {
      isActiveModal: false,
      allWords: [
        {
          id: 1,
          enText: 'house',
          ruText: 'дом',
          marked: false,
        },
        {
          id: 2,
          enText: 'airplane',
          ruText: 'самолет',
          marked: false,
        },
        {
          id: 3,
          enText: 'mountain',
          ruText: 'гора',
          marked: false,
        },
      ],
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
    toLearn(sate){
      return sate.wordsToLearn
    }
  },
  mutations: {
    openModal(state) {
      state.isActiveModal = true;
    },
    closeModal(state) {
      state.isActiveModal = false;
    },
    addNewWord(state, payload) {
      let word = new Card(Date.now(), payload.enValue, payload.ruValue);
      state.allWords.push(word);
    },
    nextWord(state) {
      if (state.countWords < state.allWords.length - 1) {
        state.countWords++;
      } else if (state.countWords === state.allWords.length - 1) {
        state.countWords = 0;
      }
    },
    learnedWords(state) {
      state.wordsLearned = state.allWords.filter(word => word.marked)
    },
    learnWords(state){
      state.wordsToLearn = state.allWords.filter((word) => !word.marked);
    }
  },
});
