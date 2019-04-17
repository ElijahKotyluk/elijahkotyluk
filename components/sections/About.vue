<template>
  <v-card
    class="card-border"
    color="rgba(0, 0, 0, 1)"
    elevation="24"
    >
    <!-- Avatar -->
    <v-layout align-center justify-center>
      <v-avatar
        class="elevation-12 mt-5 mb-1"
        size="140"
        id="avatar"
        >
        <img src="../../static/photos/me.png" alt="avatar" />
      </v-avatar>
    </v-layout>

    <div class="text-xs-center mt-4">
      <p class="subheading">
        Developer - 26 - Davis, CA
      </p>

      <v-btn
        class="mb-4"
        color="rgba(12, 183, 207, .4)"
        to="/blog"
        nuxt
        >
        My Blog
      </v-btn>
    </div>

    <div class="text-xs-center">
      <p class="subheading px-3">
        <span class="title">Hello</span>, my name is <span class="title">Elijah</span>.
        I'm a <span class="title">Full-Stack engineer</span> living in California.
        I started coding a little over a year ago, and since then coding has become my passion and something I genuinely love doing. feel free to checkout any <a>Articles</a> I've
        written or any <a>Projects</a> I'm currently working on.
      </p>
    </div>

    <!-- Social Links -->
    <div class="text-xs-center my-3">
      <social-icon-bar />
    </div>

    <div class="text-xs-center mt-3">
      <p>
        This site is powered by:
      </p>
      <nuxt-logo />
      <vuetify-logo />
    </div>
  </v-card>
</template>

<script>
import NuxtLogo from '~/components/animations/NuxtLogo.vue';
import VuetifyLogo from '~/components/animations/VuetifyLogo.vue';
import SocialIconBar from '~/components/widgets/SocialIconBar.vue';


export default {
  name: 'About',
  components: {
    NuxtLogo,
    VuetifyLogo,
    SocialIconBar
  },
  data () { return {} }
}
</script>

<style lang="scss">
@import '~/assets/scss/main.scss';
</style>
