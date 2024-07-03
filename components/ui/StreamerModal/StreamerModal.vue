<template>
  <Teleport to="body">
    <Transition name="streamer-modal">
      <div v-if="modelValue" class="streamer-modal">
        <div ref="streamerModalRef" class="streamer-modal__container">
          <div class="streamer-modal__header">
            <slot name="header">header</slot>
          </div>

          <div class="streamer-modal__body">
            <slot name="body">default body</slot>
          </div>

          <div class="streamer-modal__footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="close">OK</button>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

defineProps<{ modelValue: boolean }>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const streamerModalRef = ref()

function close() {
  emit('close')
}

onClickOutside(streamerModalRef, close)
</script>

<style lang="scss" src="./StreamerModal.scss"></style>
