<template>
  <canvas id="stars">
  </canvas>
</template>

<script>
import  outerSpace from '~/plugins/outerSpace.js';

export default {
  name: 'Stars',
  mounted() {
    outerSpace();
  }
}
</script>

<style lang="scss" scoped>
#stars {
  top: 0px;
  left: 0px;
	width: 100%;
	height: 100%;
	position: absolute;
  background-size: cover;
}
</style>
