<template>
  <div class="streamer-modal" :class="{ isOpen: value }">
    <div class="streamer-modal__overlay" />

    <div class="streamer-modal__heading">
      <slot name="title" />

      <streamer-button> X </streamer-button>
    </div>

    <div class="streamer-modal__body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { StreamerButton } from '@/components/ui'

defineProps({
  value: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" src="./StreamerModal.scss"></style>
