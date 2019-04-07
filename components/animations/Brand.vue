<template>
  <div class="text-container">
      <span class="reg-text">elijahkotyluk</span>
      <span class="letter">.</span><span class="letter letter-2">c</span><span class="letter letter-3">o</span><span class="letter letter-4">m</span><span
  </div>
</template>

<script>
export default {
  name: 'Brand',
  data() {
    return {
      elements: []
    }
  },
  methods: {
    addClass(elements, myClass) {

      // If no elements, do nothing.
      if (!elements) { return; }

      // Get chose elements.
      if (typeof(elements) === 'string') {
        elements = document.querySelectorAll(element);
      }

      else if (elements.tagName) {
        this.elements = [elements];
      }

      for(let i = 0; i < this.elements.length; i++) {
        if ( (' '+this.elements[i].className+' ').indexOf(' '+myClass+' ') < 0 ) {

          // add class
          this.elements[i].className += ' ' + myClass;
        }
      }
    }
  },
  mounted() {
    setTimeout(() => {
        let letter = document.querySelector('.letter');
        let letter2 = document.querySelector('.letter-2');
        let letter3 = document.querySelector('.letter-3');
        let letter4 = document.querySelector('.letter-4');
        let regText = document.querySelector('.reg-text');

        this.addClass(letter4, 'loaded');
        this.addClass(letter3, 'loaded');
        this.addClass(letter2, 'loaded');
        this.addClass(letter, 'loaded');
        this.addClass(regText, 'loaded');

    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
$fadeUp: 100px;
$fallDown: -200px;
$delay: 50ms;
$duration: 5s;

.text-container {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    letter-spacing: 4px;
    font-size: 28px;
    -webkit-font-smoothing: antialiased;
    text-align: center;
}

span {
    display: inline-block;
}

.reg-text {
    transform: translateY($fadeUp);
    opacity: 0;

    transition: transform $duration/1.5 ease-out, opacity $duration ease;

    &.loaded {
        opacity: 1;
        transform: translateY(0);
    }
}

.letter {
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
