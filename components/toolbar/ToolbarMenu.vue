<template>
  <v-toolbar-items>
    <nuxt-link v-for="(item, i) in menu" :key="i"
       :to="item.to"
       class="hidden-xs-only font-weight-light subheading mt-3 mx-2 pr-3"
       >
         {{ item.title }}
     </nuxt-link>

     <v-menu class="hidden-sm-and-up pr-4">
       <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
       <v-list>
         <v-list-tile v-for="item in menu" :key="item.id" @click="$vuetify.goTo(item.id, { offset: -85 })">
           <v-list-tile-content>
             <v-list-tile-title>
               {{ item.title }}
             </v-list-tile-title>
           </v-list-tile-content>
         </v-list-tile>
       </v-list>
     </v-menu>
  </v-toolbar-items>

</template>

<script>
export default {
  name: 'ToolbarMenu',
  data () {
    return {
      menu: [
        {
          title: 'About',
          to: '/'
        },
        {
          title: 'Blog',
          to: '/blog'
        },
        {
          title: 'Timeline',
          to: '#timeline'
        }
      ]
    }
  }
}
</script>

<style>
</style>
