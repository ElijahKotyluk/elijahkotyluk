<template>
    <v-flex xs12 md6 lg6>
      <v-hover>
        <v-card class="my-5 mx-4"
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 18 : 2}`"
                >
          <v-img
            :src="img"
            aspect-ratio="2.75"
            ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0"> {{ title }} </h3>
              <div> {{ description }} </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn color="rgba(12, 183, 207, .5)"
                   :to="to"
                   nuxt
                   ripple
            >Read</v-btn>
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
