<template>

    <div :key="$route.params.slug">
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              {{$route.params.slug}}
            </h1>
            <h2 class="subtitle">
              A dynamic markdown file
            </h2>
          </div>
        </div>
      </section>
      <div class="container">
        <div v-html="content.default" class="contentWrapper content"></div>
      </div>
    </div>



</template>

<script>
export default {
  async asyncData ({params}) {

    const fileContent = await import(`~/static/markdownFiles/${params.slug}.md`)

    return {
      content: fileContent
    }
  },
  transition: 'page'
}
</script>

<style lang="scss">
.page-enter-active {
  animation: acrossIn 1.5s ease-out both;
}
.page-leave-active {
  animation: acrossOut 1.7s ease-in both;
}
@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(100%, 0, 0);
    opacity: 0;
  }
}
</style>
