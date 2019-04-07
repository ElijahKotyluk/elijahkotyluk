<template>
  <div class="text-container">
      <span class="reg-text">elijahkotyluk</span><span class="letter">.</span><span class="letter">c</span><span class="letter">o</span><span class="letter">m</span>
  </div>
</template>

<script>
export default {
  name: 'Brand',
  data() {
    return {}
  },
  methods: {
    addClass(el, myClass) {

      // Check if el is an array
      if (el.length > 0) {

        // Use spread syntax to convert the html collection
        // into an array and add the loaded class to every item in el.
        [...el].forEach((i) => {
          i.classList.add('loaded');
        });
      }
      else {
        el.classList.add('loaded')
      }
    }
  },
  mounted() {
    setTimeout(() => {
        let letter = document.getElementsByClassName('letter');
        let regText = document.querySelector('.reg-text');

        this.addClass(letter, 'loaded');
        this.addClass(regText, 'loaded');

    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';

$fadeUp: 100px;
$fallDown: -200px;
$delay: 50ms;
$duration: 5s;

.text-container {
  top: 50%;
  left: 50%;
  width: 40%;
  font-size: 28px;
  position: absolute;
  text-align: center;
  color: $white-value;
  letter-spacing: 4px;
  transform: translate(-50%, -50%);
  -webkit-font-smoothing: antialiased;
}

span {
  display: inline-block;
}

.reg-text {
  font-weight: lighter;
  transform: translateY($fadeUp);
  opacity: 0;

  transition: transform $duration/4 ease-out, opacity $duration ease;

  &.loaded {
      opacity: 1;
      transform: translateY(0);
  }
}

.letter {
  font-weight: lighter;
  transition: transform $duration cubic-bezier(.43,.1,.57,.9), filter $duration ease, opacity $duration ease;
  opacity: 0;
  filter: blur(5px);

  &:nth-of-type(2) {
      transform: translateY($fallDown + 40px);
      transition-duration: $duration/2;
  }

  &:nth-of-type(3) {
      filter: blur(0);
      transform: translateY($fallDown + 30px);
      transition-duration: $duration/1.3;
  }

  &:nth-of-type(4) {
      transform: translateY($fallDown);
      transition-duration: $duration/1.5;
  }

  &:nth-of-type(5) {
      transform: translateY($fallDown + 50px);
      transition-duration: $duration/2;
  }

  &:nth-of-type(6) {
      filter: blur(0);
      transform: translateY($fallDown + 20px);
      transition-duration: $duration/2.3;
  }

  &.loaded {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
  }
}
</style>
