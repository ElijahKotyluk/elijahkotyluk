<template>
  <v-layout row>
    <v-flex xs12 class="text-xs-center">
      <base-icon icon-name="linked-in" strokeColor="rgba(0, 91, 103, 1)"><linkedin-icon /></base-icon>
      <base-icon icon-name="git-kraken" strokeColor="rgba(0, 91, 103, 1)"><git-kraken-icon /></base-icon>
      <base-icon icon-name="twitter" strokeColor="rgba(216, 144, 255, 1)"><twitter-icon /></base-icon>
    </v-flex>
  </v-layout>
</template>

<script>
import BaseIcon from '~/components/icons/BaseIcon.vue';
import LinkedinIcon from '~/components/icons/LinkedinIcon.vue';
import GitKrakenIcon from '~/components/icons/GitKrakenIcon.vue';
import TwitterIcon from '~/components/icons/TwitterIcon.vue';

export default {
  name: 'SocialBar',
  data () {
    return {}
  },
  components: {
    BaseIcon,
    LinkedinIcon,
    GitKrakenIcon,
    TwitterIcon
  }
}

</script>
