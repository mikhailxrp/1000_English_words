<script>
import CardComponent from '../components/CardComponent.vue';
export default {
  name: 'TrainingPage',
  components: {
    CardComponent,
  },
  data() {
    return {
      words: this.$store.getters.allWords,
    };
  },
  methods: {
    nextWord() {
      this.$store.commit('nextWord');
    },
  },
};
</script>

<template>
  <section class="training" style="margin-top: 100px">
    <div class="container">
      <p class="mt-3 text-center fs-5 text-muted" style="max-width: 700px; margin: auto">
        Если Вы знаете слово нажмите на кнопку "знаю" и оно отметится, если же Вам слово не известно нажмите кнопку "не
        знаю" и увидите перевод. Кнопка далее покажет следующее слово для изучения
      </p>
      <div class="card-wrapper">
        <div class="v-card-carousel">
          <div v-for="(word, index) in words" :key="word.id" style="max-width: 500px">
            <transition name="fade">
              <card-component
                :en_text="word.en_text"
                :ru_text="word.ru_text"
                :id="word.id"
                :marked="word.marked"
                v-if="index === this.$store.getters.countWords"
              ></card-component>
            </transition>
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-primary next-btn mb-3" @click="nextWord">перейти к следующему слову</button>
    </div>
  </section>
</template>

<style>
.card-wrapper {
  margin: auto;
  max-width: 480px;
  overflow: hidden;
}
.v-card-carousel {
  display: flex;
  justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
