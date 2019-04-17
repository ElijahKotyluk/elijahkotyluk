<template>
  <v-toolbar app flat color="rgba(0, 0, 0, 0)">
    <brand />

    <v-spacer></v-spacer>

    <toolbar-menu />
  </v-toolbar>
</template>

<script>
import Brand from './Brand.vue';
import ToolbarMenu from './ToolbarMenu.vue';

export default {
  name: 'Toolbar',
  props: ['title'],
  data () {
    return {
    }
  },
  components: {
    Brand,
    ToolbarMenu
  }
}
</script>

<style lang="scss">
.v-toolbar__content {
  padding-left: 0px;
  padding-right: 0px;
}

</style>
