<template>
  <div class="typer-text-container text-xs-center mt-3">
      <h1 id="typer-text">
        <span id="typer-text-content"></span>
      </h1>
  </div>
</template>

<script>
import theaterJS from 'theaterjs'

export default {
  name: 'Typewriter',
  mounted() {
    const theater = theaterJS();

    theater
    .on('type:start, erase:start', function () {
      theater.getCurrentActor().$element.classList.add('typer-text--typing')
    })
    .on('type:end, erase:end', function () {
      theater.getCurrentActor().$element.classList.remove('typer-text--typing')
    })
    .on('type:start, erase:start', function () {
      if (theater.getCurrentActor().name === 'typer-text') {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
    })

    theater.addActor('typer-text-content', { speed: .9, accuracy: 1 })
    theater.addScene('typer-text-content: Hi! I\'m Elijah Kotyluk,', 600, ' <br>a full-stack developer.', 600, function (done) { document.getElementById("typer-text").style.background = 'rgba(0, 0, 0, 0)'; done(); }, -21, 'Vue.js enthusiast.', 600,function (done) { document.getElementById("typer-text").style.background = 'rgba(0, 0, 0, 0)'; done(); }, -23, )

    theater.addScene(theater.replay.bind(theater))

  }
}
</script>

<style>
.typer-text-container {
  height: 100px;
}
</style>
