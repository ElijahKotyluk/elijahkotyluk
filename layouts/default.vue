<template>
  <v-app dark>
    <v-toolbar
      fixed
      app
    >
      <v-toolbar-title class="toolbar-title font-weight-light" v-text="title" />
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
          nuxt
          ripple
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-list-group prepend-icon="insert_drive_file">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Blog Posts</v-list-tile-title>
            </v-list-tile>
          </template>

            <v-list-tile
              v-for="(blog, i) in blogs"
              :key="i"
              :to="blog.to"
              nuxt
              ripple
            >
              <v-list-tile-action>
                <v-icon v-text="blog.icon"></v-icon>
              </v-list-tile-action>

              <v-list-tile-title v-text="blog.title"></v-list-tile-title>
            </v-list-tile>
        </v-list-group>
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
        }
      ],
      blogs: [
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
</style>
