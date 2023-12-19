<script>
import request from '@/assets/api';
export default {
  name: 'CardComponent',
  data() {
    return {
      knowFlag: false,
      words: this.$store.getters.allWords,
    };
  },
  props: {
    id: String,
    en_text: String,
    ru_text: String,
    marked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    notKnowWord() {
      this.knowFlag = true;
    },
   async knowWord(id) {
      let word = this.$store.state.allWords.find((word) => (word.id === id ? (word.marked = true) : false));
      await request(`http://localhost:3000/api/server/words/${id}`, 'PUT', word)
      this.$store.commit('learnedWords');
      this.$store.commit('nextWord');
    },
  },
};
</script>

<template>
  <div class="row justify-content-center align-items-center">
    <div class="card border-warning mb-3 mt-5" style="max-width: 500px">
      <div class="card-header text-center">Слово</div>
      <div class="card-body">
        <h5 class="card-title text-center" v-if="knowFlag">{{ ru_text }}</h5>
        <h5 class="card-title text-center" v-else>{{ en_text }}</h5>
        <div class="btn-wrapper">
          <button type="button" class="btn btn-outline-success" @click="knowWord(id)">Знаю</button>
          <button type="button" class="btn btn-outline-danger" @click="notKnowWord">Не знаю</button>
        </div>
      </div>
    </div>
  </div>
</template>
