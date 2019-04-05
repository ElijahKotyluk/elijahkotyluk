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
      default: '32px'
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
      default: 'none'
    },
    strokeColor: {
      type: String,
      default: 'white'
    },
    strokeWidth: {
      type: [Number, String],
      default: 3
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
</style>
