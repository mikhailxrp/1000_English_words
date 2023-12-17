<script>
export default {
  name: 'AllWords',
  methods: {
    addWord(){
      this.$store.commit('addNewWord')
    },
  },
};
</script>

<template>
  <section class="all-words mt-5">
    <div class="container">
      <div class="table caption-top">
        <caption>
          Список всех слов для изучения
        </caption>
        <div class="table-title">
          <p style="width: 50px; text-align: center">#</p>
          <p style="width: 100%; text-align: center">слово на английском</p>
          <p style="width: 100%; text-align: center">перевод</p>
        </div>
        <div class="table-body">
          <div class="table-row">
            <p style="width: 50px; text-align: center">1</p>
            <p style="width: 100%; text-align: center">title</p>
            <p style="width: 100%; text-align: center">заголовок</p>
          </div>
        </div>
      </div>

      <div class="btn-wrapper-all-words">
        <button type="button" class="btn btn-outline-success">выученные слова</button>
        <button type="button" class="btn btn-outline-danger" @click="show">слова для заучивания</button>
        <button type="button" class="btn btn-outline-primary" @click="addWord">добавить слово</button>
      </div>
    </div>
  </section>
</template>
