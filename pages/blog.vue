<template>
  <v-layout>
    <v-flex text-xs-center>
      <div v-html="content">

      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import TestOne from '~/static/markdownFiles/testone.md';

export default {
  data () {
    return {
      content: TestOne
    }
  }
}
</script>
