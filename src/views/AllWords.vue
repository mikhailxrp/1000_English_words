<script>
import TheAllWords from '@/components/TheAllWords.vue';
import TheMarkedWords from '@/components/TheMarkedWords.vue';
import ToLearnWords from '@/components/ToLearnWords.vue'
export default {
  name: 'AllWords',
  data(){
    return{
      markedFlag: false,
      toLearnFlag: false
    }
  },
  components:{
    TheAllWords,
    TheMarkedWords,
    ToLearnWords
  },
    methods: {
    openModal(){
      this.$store.commit('openModal')
    },
    markedWords(){
      this.markedFlag = true
      this.toLearnFlag = false
    },
    toLearnWords(){
      this.$store.commit('learnWords')
      this.toLearnFlag = true
      this.markedFlag = false
    },
    allWords(){
      this.toLearnFlag = false
      this.markedFlag = false
    }
  },
};
</script>

<template>
  <section class="all-words mt-5">
    <div class="container">
      <the-marked-words v-if="markedFlag"></the-marked-words>
      <to-learn-words v-else-if="toLearnFlag"></to-learn-words>
      <the-all-words v-else></the-all-words>
      <div class="btn-wrapper-all-words">
        <button type="button" class="btn btn-outline-info" @click="allWords">все слова</button>
        <button type="button" class="btn btn-outline-success" @click="markedWords">выученные слова</button>
        <button type="button" class="btn btn-outline-danger" @click="toLearnWords">слова для заучивания</button>
        <button type="button" class="btn btn-outline-primary" @click="openModal">добавить слово</button>
      </div>
    </div>
  </section>
</template>
