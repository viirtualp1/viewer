<template>
  <button class="streamer-button" :class="classes">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ButtonProps } from '@/types/Button'

const props = defineProps<ButtonProps>()

const classes = computed(() => {
  return [
    props.theme,
    props.size,
    { outlined: props.outlined },
    { disabled: props.disabled },
  ]
})
</script>

<style lang="scss" src="./StreamerButton.scss"></style>
