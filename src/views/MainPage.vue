<script>
export default {
  name: 'MainPage',
};
</script>

<template>
  <section class="about-project mt-5" style="padding-top: 50px">
    <div class="row justify-content-center align-items-center">
      <div class="card col-sm-10 text-center border-info">
        <div class="card-header">Описание проекта карточки 1000 английских слов</div>
        <div class="card-body">
          <h5 class="card-title">Проект разработан на Vue.js / Express.js / postgreSQL</h5>
          <p class="card-text">
            "Карточки английских слов" - это проект, который помогает пользователям изучать английский язык через
            систему карточек с переводами. Каждая карточка содержит слово на английском и его перевод на родном языке
            пользователя. Пользователи могут учить новые слова, повторять их и отслеживать свой прогресс в изучении
            английского языка. С помощью этого проекта пользователи могут эффективно расширять свой словарный запас и
            улучшать навыки владения английским языком
          </p>
          <router-link to="/train" class="btn btn-primary">Учить слова</router-link>
        </div>
      </div>
    </div>
  </section>
</template>
