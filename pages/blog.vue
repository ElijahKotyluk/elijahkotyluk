<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <p class="display-1 font-weight-light mt-3 mb-5">
          My Blog
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
          title: 'Blog-post-1',
          date: '3/23/2019',
          to: '/posts/testone',
          description: 'This is my sample blog description to test out the layout of this static page.'
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
