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
          <v-avatar class="elevation-12 mt-5 mb-1"
                    size="185"
                    id="avatar">
            <img src="../static/me.png" alt="avatar" />
          </v-avatar>

          <div class="text-xs-center mt-4">
            <p class="subheading">
              developer - 26 - Davis, CA
            </p>
          </div>
        </v-layout>

        <!-- Social Links -->
        <div class="text-xs-center mt-2 mb-5">
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
      </v-card>

      <div class="text-xs-center mt-3">
        <v-btn
          class="mb-4"
          color="rgba(12, 183, 207, .2)"
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

export default {
  components: {
    NuxtLogo,
    VuetifyLogo
  }
}
</script>

<style>

.social-link {
  color: rgba(202, 202, 202, 0.6);
}

svg.svg-inline--fa:hover {
  color: rgba(0, 0, 0, 1);
}
</style>
