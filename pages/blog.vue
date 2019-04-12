<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <p class="display-1 font-weight-medium mt-3 mb-5">
          Blog
        </p>
      </v-flex>

      <blog-post-card v-for="(post, i) in posts"
                      :key="post.i"
                      :img="post.img"
                      :title="post.title"
                      :date="post.date"
                      :to="post.to"
                      :description="post.description"/>
    </v-layout>
  </v-container>
</template>

<script>
import BlogPostCard from '~/components/blog/BlogPostCard.vue';

import NuxtBlogWithMd from '~/static/markdownFiles/nuxtblogwithmd.md';
// <div class="dynamic-markdown-content" v-html="content" />

export default {
  components: {
    BlogPostCard
  },
  data () {
    return {
      content: NuxtBlogWithMd,
      posts: [
        {
          img: require('~/static/photos/blogs/nuxtMDpost.png'),
          title: 'Markdown blog with Nuxt:',
          date: '3/23/2019',
          to: '/posts/nuxtblogwithmd',
          description: 'In my first blog post I will show you how to create a static blog site with Nuxt and markdown files.'
        },
        {
          img: require('~/static/photos/blogs/nuxtMDpost.png'),
          title: 'Blog-post-2',
          date: '4/2/2019',
          to: '/posts/testtwo',
          description: 'This is my sample blog description to test out the layout of this static page.'
        }
      ]
    }
  },
  transition: 'page'
}
</script>

<style lang="scss">
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
