<script>
export default {
  name: 'TheAllWords',
};
</script>

<template>
  <div class="table caption-top" style="width: 100%">
    <p>Список всех слов для изучения</p>
    <div class="table-title">
      <p style="width: 50px; text-align: center">#</p>
      <p style="width: 100%; text-align: center">слово на английском</p>
      <p style="width: 100%; text-align: center">перевод</p>
    </div>
    <div class="table-body">
      <div class="table-row" v-for="(word, index) in $store.getters.allWords" :key="word.id">
        <p style="width: 50px; text-align: center">{{ index + 1 }}</p>
        <p style="width: 100%; text-align: center">{{ word.enText }}</p>
        <p style="width: 100%; text-align: center">{{ word.ruText }}</p>
      </div>
    </div>
  </div>
</template>
