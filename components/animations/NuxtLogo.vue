<template>
  <div class="VueToNuxtLogo">
    <div class="Triangle Triangle--two"/>
    <div class="Triangle Triangle--one"/>
    <div class="Triangle Triangle--three"/>
    <div class="Triangle Triangle--four"/>
  </div>
</template>

<style>
.VueToNuxtLogo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  height: 57.6666666667px;
  width: 89.3333333333px;
  overflow: hidden;
}

.Triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.Triangle--one {
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 60px solid rgba(65, 184, 131, 0.25);
}

.Triangle--two {
  top: 10px;
  left: 11.6666666667px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 29.1666666667px solid transparent;
  border-right: 29.1666666667px solid transparent;
  border-bottom: 50px solid rgba(59, 128, 112, 0.5);
}

.Triangle--three {
  top: 20px;
  left: 11.6666666667px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 23.3333333333px solid transparent;
  border-right: 23.3333333333px solid transparent;
  border-bottom: 40px solid rgba(53, 73, 94, 0.25);
}

.Triangle--four {
  top: 40px;
  left: 23.3333333333px;
  animation: godown 0.5s linear forwards 3s;
  border-left: 11.6666666667px solid transparent;
  border-right: 11.6666666667px solid transparent;
  border-bottom: 20px solid rgba(0, 0, 0, 0.55);
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}
@keyframes godown {
  100% {
    top: 60px;
  }
}
@keyframes goright {
  100% {
    left: 23.3333333333px;
  }
}
</style>
