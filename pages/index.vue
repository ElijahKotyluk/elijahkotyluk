<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card
        width="350"
        color="rgba(0, 0, 0, 0)"
        elevation="0">

        <!-- Avatar -->
        <v-layout column align-center>
          <v-avatar class="elevation-12 mt-5 mb-1 intro-zoom"
                    size="185"
                    id="avatar">
            <img src="../static/me.png" alt="avatar" />
          </v-avatar>

          <div class="text-xs-center mt-4 intro-zoom">
            <p class="subheading">
              developer - 26 - Davis, CA
            </p>
          </div>
        </v-layout>

        <!-- Social Links -->
        <div class="text-xs-center mt-2 mb-5 intro-zoom">
          <a href="https://www.linkedin.com/in/elijahkotyluk"
             class="pa-2 social-link"
             target="_blank">
            <fa :icon="['fab', 'linkedin']" style="font-size: 36px" />
          </a>
          <a href="https://twitter.com/ElijahDavidK"
             class="pa-2 social-link"
             target="_blank">
            <fa :icon="['fab', 'twitter']" style="font-size: 36px" />
          </a>
          <a href="https://github.com/ElijahKotyluk"
             class="pa-2 social-link"
             target="_blank">
            <fa :icon="['fab', 'gitkraken']" style="font-size: 36px"/>
          </a>
        </div>

        <typewriter />
      </v-card>

      <div class="text-xs-center mt-5 intro-zoom">
        <v-btn
          color="rgba(12, 183, 207, .5)"
          flat
          nuxt
          to="/blog"
        >My Blog</v-btn>
        <p>
          This site is powered by:
        </p>
        <nuxt-logo />
        <vuetify-logo />
      </div>

    </v-flex>
  </v-layout>
</template>

<script>
import NuxtLogo from '~/components/animations/NuxtLogo.vue';
import VuetifyLogo from '~/components/animations/VuetifyLogo.vue';
import Typewriter from '~/components/animations/Typewriter.vue';

export default {
  components: {
    NuxtLogo,
    VuetifyLogo,
    Typewriter
  }
}
</script>

<style>
@keyframes zoom-in-out {
    0% {
        transform: scale(.3, .3);
    }
    50% {
        transform: scale(1.1, 1.1);
    }
    100% {
        transform: scale(1, 1);
    }
}

.intro-zoom {
	animation: zoom-in-out 1.5s;
}

.social-link {
  color: rgba(0, 0, 0, 0.6);
}
</style>
