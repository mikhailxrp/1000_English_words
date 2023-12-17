<script>
export default {
  name: 'CardComponent',
};
</script>

<template>
  <div class="row justify-content-center align-items-center">
    <div class="card border-warning mb-3 mt-5" style="max-width: 600px">
      <div class="card-header text-center">Слово</div>
      <div class="card-body">
        <h5 class="card-title text-center">ТУТ БУДЕТ СЛОВО</h5>
        <div class="btn-wrapper">
          <button type="button" class="btn btn-outline-success">Знаю</button>
          <button type="button" class="btn btn-outline-danger">Не знаю</button>
        </div>
      </div>
    </div>
  </div>
</template>
