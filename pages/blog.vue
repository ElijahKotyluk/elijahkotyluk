<template>
  <v-container>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <p class="display-1 font-weight-light mt-3 mb-5">
          My Blog
        </p>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs6 v-for="(blog, i) in blogs" :key="i">
        <v-hover>
          <v-card class="my-5 mx-2" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
              aspect-ratio="2.75"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ blog.title }}</h3>
                <div> {{ blog.description }} </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn color="rgba(12, 183, 207, .5)"
                     :to="blog.to"
                     nuxt
                     ripple
              >Read</v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TestOne from '~/static/markdownFiles/testone.md';
// <div class="dynamic-markdown-content" v-html="content" />

export default {
  data () {
    return {
      content: TestOne,
      blogs: [
        {
          title: 'Blog-post-1',
          date: '3/23/2019',
          to: '/posts/testone',
          description: 'This is my sample blog description to test out the layout of this static page.'
        },
        {
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
