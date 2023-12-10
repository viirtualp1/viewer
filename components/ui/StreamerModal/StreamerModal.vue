<template>
  <Transition name="streamer-modal">
    <div v-if="modelValue" class="streamer-modal">
      <div class="streamer-modal__container">
        <div class="streamer-modal__header">
          <slot name="header" />

          <streamer-button icon>
            <img src="@/assets/images/icons/icon-close.svg" alt="close" />
          </streamer-button>
        </div>

        <div class="streamer-modal__body">
          <slot name="body" />
        </div>

        <div class="streamer-modal__footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { StreamerButton } from '@/components/ui'

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits({
  close: () => true,
})

function close() {
  emit('close')
}
</script>

<style lang="scss" src="./StreamerModal.scss"></style>
