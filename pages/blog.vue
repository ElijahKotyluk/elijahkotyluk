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

import TestOne from '~/static/markdownFiles/testone.md';
// <div class="dynamic-markdown-content" v-html="content" />

export default {
  components: {
    BlogPostCard
  },
  data () {
    return {
      content: TestOne,
      posts: [
        {
          img: require('~/static/nuxt.png'),
          title: 'Markdown blog with Nuxt:',
          date: '3/23/2019',
          to: '/posts/testone',
          description: 'In my first blog post I will show you how to create a static blog site with Nuxt and markdown files.'
        },
        {
          img: require('~/static/nuxt.png'),
          title: 'Blog-post-2',
          date: '4/2/2019',
          to: '/posts/testtwo',
          description: 'This is my sample blog description to test out the layout of this static page.'
        }
      ]
    }
  }
}
</script>
