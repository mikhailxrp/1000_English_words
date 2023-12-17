<script>
export default {
  name: 'TheOverlay'
}
</script>

<template>
  <div class="overlay" @click="this.$store.commit('closeModal')">

  </div>
</template>