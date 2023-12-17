<script>
import CardComponent from '../components/CardComponent.vue';
export default {
  name: 'TrainingPage',
  components: {
    CardComponent
  }
};
</script>

<template>
  <section class="training" style="margin-top: 100px">
    <div class="container">
      <p class="mt-3 text-center fs-5 text-muted" style="max-width: 700px; margin: auto">
        Если Вы знаете слово нажмите на кнопку "знаю" и оно отметится, если же Вам слово не известно нажмите кнопку "не
        знаю" и увидите перевод. Кнопка далее покажет следующее слово для изучения
      </p>
      <card-component></card-component>
      <button type="button" class="btn btn-primary next-btn mb-3">перейти к следующему слову</button>
    </div>
  </section>
</template>
