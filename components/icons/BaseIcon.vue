<template>
    <svg xmlns="http://www.w3.org/2000/svg"
      :font-size="fontSize"
      :width="width"
      :height="height"
      viewBox="0 0 592 512"
      :aria-labelledby="iconName"
      role="presentation"
    >
      <title :id="iconName" lang="en">{{ iconName }} icon</title>
      <g :fill="iconColor" :stroke="strokeColor" :stroke-width="strokeWidth">
        <slot />
      </g>
    </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'git-kraken'
    },
    fontSize: {
      type: [String],
      default: '34px'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'rgba(0, 0, 0, 1)'
    },
    strokeColor: {
      type: String,
      default: 'rgba(255, 255, 255, 1)'
    },
    strokeWidth: {
      type: [Number, String],
      default: 7
    }
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
  height: 1em;
  width: 1.1875em;
  vertical-align: -.125em;
  margin-bottom: -2px;
}

:hover {
  stroke: rgba(147, 7, 7, 1);
}
</style>
