import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin';
import pkg from './package';

// Vars needed for markdown content:
const dir = require('node-dir');
const fs = require('fs');
const routesArray = [];

const files = fs.readdirSync('./static/markdownFiles');

function createRoutesArray() {
  files.forEach(function (file) {
    let name = file.substr(0, file.lastIndexOf('.'));
    let route = '/posts/' + name
    routesArray.push(route)
  });
}

function getSlugs(post, index) {
  let slug = post.substr(0, post.lastIndexOf('.'));
  return `/posts/${slug}`
}

export default {
  mode: 'universal',

  // Page headers:
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  // Customize progress-bar color:
  loading: '~/components/animations/Loading.vue',

  // Global css:
  css: [
    '~/assets/style/app.styl',
    '~/assets/scss/main.scss'
  ],

  // Loaded before app mounts:
  plugins: [
    '@/plugins/vuetify'
  ],

  // Nuxt.js modules:
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['@nuxtjs/markdownit', { linkify: true }]
  ],

  // Axios module:
  axios: {},

  // Transitions:
  transition : {},

  // Generate static routes:
  generate: {
    routes: function() {
      return files.map(getSlugs)
    }
  },

  // Build config:
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
