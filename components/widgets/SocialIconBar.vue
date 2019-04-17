<template>
  <v-layout row>
    <v-flex xs12 class="text-xs-center">
      <a @mouseover="changeColor" href="https://github.com/ElijahKotyluk">
        <base-icon class="line-icon" icon-name="git-kraken" strokeColor="rgba(107, 143, 163, 1)"><git-kraken-icon /></base-icon>
      </a>
      <a @mouseover="changeColor" href="https://twitter.com/ElijahDavidK">
        <base-icon class="line-icon" icon-name="twitter" strokeColor="rgba(0, 164, 255, 1)"><twitter-icon /></base-icon>
      </a>
      <a @mouseover="changeColor" href="https://www.linkedin.com/in/elijahkotyluk">
        <base-icon class="line-icon" icon-name="linked-in" strokeColor="rgba(32, 70, 205, 1)"><linkedin-icon /></base-icon>
      </a>
    </v-flex>
  </v-layout>
</template>

<script>
import BaseIcon from '~/components/icons/BaseIcon.vue';
import LinkedinIcon from '~/components/icons/LinkedinIcon.vue';
import GitKrakenIcon from '~/components/icons/GitKrakenIcon.vue';
import TwitterIcon from '~/components/icons/TwitterIcon.vue';

export default {
  name: 'SocialIconBar',
  methods: {
    changeColor() {
      // Add change color method for hovering over anchor tag wrapping svg icons
    }
  },
  components: {
    BaseIcon,
    LinkedinIcon,
    GitKrakenIcon,
    TwitterIcon
  }
}

</script>

<style lang="scss">
</style>
