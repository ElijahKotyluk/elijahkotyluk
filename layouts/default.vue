<template>
  <v-app dark>
    <v-toolbar
      color="rgba(0, 0, 0, 0)"
      elevation="0"
      fixed
      app
    >
      <v-toolbar-title class="site-title" v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      width="215"
      temporary
      fixed
    >
    <v-list-tile @click.native="right = !right">
      <v-list-tile-action>
        <v-icon light>compare_arrows</v-icon>
      </v-list-tile-action>
      <v-list-tile-title>Switch drawer</v-list-tile-title>
    </v-list-tile>
    <v-list>
      <v-list-tile
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title" />
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>

    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Blog',
          to: '/blog'
        },
        {
          icon: 'comment',
          title: 'Blog-post-1',
          to: '/posts/testone'
        },
        {
          icon: 'comment',
          title: 'Blog-post-2',
          to: '/posts/testtwo'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'elijahkotyluk.com'
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log(this);
  }
}
</script>

<style>
.site-title {
  -webkit-animation: flicker 2s infinite;
  text-align:center;
}

@-webkit-keyframes flicker
{
0% {opacity:0;}
9% {opacity:0;}
10% {opacity:.5;}
13% {opacity:0;}
20% {opacity:.5;}
25% {opacity:1;}
}
</style>
