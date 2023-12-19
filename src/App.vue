<script>
import TehHeader from './components/TheHeader.vue'
import TheOverlay from './components/TheOverlay.vue';
import TheModalWindow from './components/TheModalWindow.vue'
export default {
  name: 'App',
  components: {
    TehHeader,
    TheOverlay,
    TheModalWindow
  },
  data(){
    return {
      isActive: false
    }
  }
}
</script>

<template>
  <teh-header></teh-header>
  <the-overlay :class="$store.getters.modalFlag ? 'visible' : ''"></the-overlay>
  <the-modal-window :class="$store.getters.modalFlag ? 'show' : ''"></the-modal-window>
  <router-view></router-view>
  
</template>

<style>
  @import url('./assets/style/style.css');
</style>
