<template>
  <v-layout>
    <v-flex>
      <v-card v-for="(project, i) in projects" xs12 sm6 md6>
        <p>
          {{ project.title }}
        </p>
        <p>
          {{ project.description }}
        </p>
        <p>
          {{ project.stack }}
        </p>
        <a>
          {{ project.link }}
        </a>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      projects: [
        {
          title: 'bekn',
          description: 'social platform prototype.',
          stack: 'Vue.js, Firebase, Flask, NDB',
          link: 'link'
        },
        {
          title: 'vue-moment-calendar',
          description: 'event calendar made with vue and moment.',
          stack: 'Vue.js, Moment.js, Flask, NDB',
          link: 'https://vue-moment-calendar.appspot.com/'
        },
        {
          title: 'vue-weather-app',
          description: 'Simple weather application built with Vue.js.',
          stack: 'Vue.js & Vuetify',
          link: 'https://vue-openweather.appspot.com/'
        }
      ]
    }
  }
}
</script>
