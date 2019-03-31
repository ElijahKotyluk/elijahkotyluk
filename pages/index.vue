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
      <v-card>

        <div class="text-xs-center intro-zoom pt-2">
          <p class="display-1 pt-3">
            Elijah Kotyluk
          </p>
        </div>

        <!-- Avatar -->
        <v-layout column align-center>
          <v-avatar class="elevation-12 intro-zoom"
                    size="185"
                    id="avatar">
            <img src="../static/me.png" alt="avatar" />
          </v-avatar>
        </v-layout>

        <!-- Intro Name/Title -->
          <div class="text-xs-center mt-4 intro-zoom">
            <p class="subheading">
              developer - 26 - Davis, CA
            </p>
          </div>

          <typer-text />

        <!-- Social Links -->
          <div class="text-xs-center intro-zoom">
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

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            flat
            nuxt
            to="/blog"
          >My Blog</v-btn>
        </v-card-actions>
      </v-card>

      <div class="text-xs-center mt-5">
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
import TyperText from '~/components/animations/TyperText.vue';

export default {
  components: {
    NuxtLogo,
    VuetifyLogo,
    TyperText
  }
}
</script>
