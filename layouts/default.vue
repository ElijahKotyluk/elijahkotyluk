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
      isIndex: true,
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
