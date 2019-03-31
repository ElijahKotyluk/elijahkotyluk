<template>
  <div class="typer-text-container">
      <h1 id="typer-text">
        <span id="typer-text-content"></span>
      </h1>
  </div>
</template>

<script>
import theaterJS from 'theaterjs'

export default {
  name: 'TyperText',
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
    theater.addScene('typer-text-content: Hi! I\'m <a target="_blank" href="https://twitter.com/ElijahDavidK">Elijah Kotyluk</a>', 600, ', <br>a full-stack developer.', 600, function (done) { document.getElementById("typer-text").style.background = 'rgba(0, 0, 0, 0)'; done(); }, -21, 'Vue.js enthusiast.', 600,function (done) { document.getElementById("typer-text").style.background = 'rgba(0, 0, 0, 0)'; done(); })

    theater.addScene(theater.replay.bind(theater))

  }
}
</script>
