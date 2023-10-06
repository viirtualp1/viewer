<template>
  <button class="streamer-button" :class="classes">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ButtonProps } from '@/types/Button'

const props = defineProps<ButtonProps>()

const classes = computed(() => {
  return [props.theme, { outlined: props.outlined }, props.size]
})
</script>

<style lang="scss" src="./StreamerButton.scss"></style>
