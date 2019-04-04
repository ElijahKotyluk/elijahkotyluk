<template>
    <v-flex xs12 md6 lg6>
      <v-hover>
        <v-card class="my-5 mx-4 box grow card-border"
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 20 : 6}`"
                :to="to"
                nuxt
                >
          <v-img
            :src="img"
            aspect-ratio="2.75"
            ></v-img>

          <v-card-title primary-title>
            <p class="headline mb-0"> {{ title }} </p>
          </v-card-title>

          <v-card-text>
            <p> {{ description }} </p>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <p>
              Go to post...
            </p>
          </v-card-actions>
        </v-card>
      </v-hover>
    </v-flex>
</template>

<script>
export default {
  name: 'BlogPostCard',
  props: {
      img: '',
      title: '',
      date: '',
      to: '',
      description: ''
  },
  data () {
    return {

    }
  }
}
</script>

<style>
.grow:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.card-border:hover {
  border-style: solid;
  border-width: thick;
  border-color: rgba(0, 0, 0, .7);
  color: black;
}
</style>
