<template>
  <v-app dark>
    <toolbar :title="title" />

    <stars />
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from '~/components/toolbar/Toolbar.vue';
import Stars from '~/components/animations/Stars.vue';

export default {
  components: {
    Stars,
    Toolbar
  },
  data() {
    return {
      title: 'elijahkotyluk.com'
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log(this);
  }
}
</script>

<style>
</style>
