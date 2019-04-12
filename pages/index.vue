<template>
  <v-container fill-height>
    <tentacles />
    <v-layout
      column
      justify-center
      align-center
      >
      <v-flex xs12 sm6 md6 xl6>
        <v-container class="circle">
          <about />
        </v-container>
      </v-flex>
    </v-layout>

  </v-container>

</template>

<script>
import About from '~/components/sections/About.vue';
import Tentacles from '~/components/animations/Tentacles.vue';

export default {
  components: {
    About,
    Tentacles
  },
  transition: 'page'
}
</script>

<style lang="scss">
.circle {
  border-radius: 50%;
}
.page-enter-active {
  animation: acrossIn 1.5s ease-out both;
}
.page-leave-active {
  animation: acrossOut 1.7s ease-in both;
}
@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(100%, 0, 0);
    opacity: 0;
  }
}
</style>
