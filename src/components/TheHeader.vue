<script>
export default {
  name: 'TheHeader',
};
</script>

<template>
  <header>
    <div class="container">
      <nav class="nav nav-pills justify-content-center flex-sm-row mt-2">
        <router-link to="/" class="flex-sm-fill text-sm-center nav-link">Главная</router-link>
        <router-link to="/train" class="flex-sm-fill text-sm-center nav-link">Тренажер</router-link>
        <router-link to="allWords" class="flex-sm-fill text-sm-center nav-link">Все слова</router-link>
      </nav>
    </div>
  </header>
</template>
