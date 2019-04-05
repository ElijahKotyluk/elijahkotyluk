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
            <img src="../static/photos/me.png" alt="avatar" />
          </v-avatar>

          <div class="text-xs-center mt-4">
            <p class="subheading">
              developer - 26 - Davis, CA
            </p>
          </div>
        </v-layout>

        <!-- Social Links -->
        <social-bar />
      </v-card>

      <div class="text-xs-center mt-3">
        <v-btn
          class="mb-4"
          color="rgba(12, 183, 207, .2)"
          nuxt
          to="/blog"
          >
          My Blog
        </v-btn>
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
import SocialBar from '~/components/widgets/SocialBar.vue';

export default {
  components: {
    NuxtLogo,
    SocialBar,
    VuetifyLogo
  }
}
</script>

<style lang="scss">

.social-link {
  color: black;
}

.fab-linkedin g g path {
  stroke: white;
  stroke-width: 2;
}

svg.svg-inline--fa:hover {
  color: rgba(0, 0, 0, 1);
}
</style>
