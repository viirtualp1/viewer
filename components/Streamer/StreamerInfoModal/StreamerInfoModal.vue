<template>
  <streamer-modal v-model="isOpen" :width="450" class="streamer-info-modal">
    <template #header>
      <div class="streamer-info-modal__title"></div>
    </template>
    <template #body>
      <div class="streamer-info-modal__body"></div>
    </template>
    <template #footer>
      <div class="streamer-info-modal__footer"></div>
    </template>
  </streamer-modal>
</template>

<script setup lang="ts">
import { StreamerModal } from '@/components/ui'
import { useStreamerModal } from '@/composables/useStreamerModal'

const { isOpen, openModal } = useStreamerModal()

defineExpose({
  open: openModal,
})
</script>

<style src="./StreamerInfoModal.scss"></style>
