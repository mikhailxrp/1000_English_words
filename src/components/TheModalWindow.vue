<script>
export default {
  name: 'TheModalWindow',
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

    <form style="min-width: 320px">
      <div class="mb-3">
        <label for="englishWord" class="form-label">Введите новое слово для изучения</label>
        <input type="text" class="form-control" id="englishWord" aria-describedby="wordHelp" />
      </div>
      <div class="mb-3">
        <label for="translationWord" class="form-label">Перевод слова</label>
        <input type="text" class="form-control" id="translationWord" />
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary">Добавить слово</button>
      </div>
    </form>
  </div>
</template>
