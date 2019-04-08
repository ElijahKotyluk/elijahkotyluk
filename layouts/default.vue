<template>
  <v-app dark>
    <toolbar :title="title" />

    <background />

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from '~/components/toolbar/Toolbar.vue';
import Background from '~/components/animations/background.vue';

export default {
  components: {
    Toolbar,
    Background
  },
  data() {
    return {
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Blog',
          to: '/blog'
        }
      ],
      blogs: [
        {
          icon: 'comment',
          title: 'Blog-post-1',
          to: '/posts/testone'
        },
        {
          icon: 'comment',
          title: 'Blog-post-2',
          to: '/posts/testtwo'
        }
      ],
      right: true,
      rightDrawer: false,
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
