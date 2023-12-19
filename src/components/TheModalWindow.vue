<script>
export default {
  name: 'TheModalWindow',
  data(){
    return {
      enValue: '',
      ruValue: ''
    }
  },
  methods: {
    addWord(){
      this.$store.commit({
        type: 'addNewWord',
        enValue: this.enValue,
        ruValue: this.ruValue
      })
      this.enValue = '',
      this.ruValue = ''
      this.$store.commit('closeModal')
    }
  }
};
</script>

<template>
  <div class="modal-words">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Добавить слово</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        @click="this.$store.commit('closeModal')"
      ></button>
    </div>

    <form style="min-width: 320px" @submit.prevent>
      <div class="mb-3">
        <label for="englishWord" class="form-label">Введите новое слово для изучения</label>
        <input type="text" class="form-control" v-model="enValue" id="englishWord" aria-describedby="wordHelp" />
      </div>
      <div class="mb-3">
        <label for="translationWord" class="form-label">Перевод слова</label>
        <input type="text" class="form-control" v-model="ruValue" id="translationWord" />
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" @click="addWord">Добавить слово</button>
      </div>
    </form>
  </div>
</template>
