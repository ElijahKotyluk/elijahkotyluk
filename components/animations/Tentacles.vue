<template>
  <canvas id="tentacles">
  </canvas>
</template>

<script>
import tentacles from '~/plugins/tentacles.js';

export default {
  name: 'Tentacles',
  mounted() {
    tentacles();
  }
}
</script>

<style lang="scss" scoped>
#tentacles {
  top: 0px;
  left: 0px;
	width: 100%;
	height: 100%;
	cursor: pointer;
	position: absolute;
  background-size: cover;
	background: "rgba(0, 0, 0, 0)";
}
</style>
