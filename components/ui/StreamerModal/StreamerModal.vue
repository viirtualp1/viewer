<template>
  <Teleport to="body">
    <Transition name="streamer-modal">
      <div v-if="currentModelValue" class="streamer-modal">
        <div
          ref="streamerModalRef"
          class="streamer-modal__container"
          :style="{ width: `${width}px` }"
        >
          <div class="streamer-modal__header">
            <slot name="header" />
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
  </Teleport>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { onClickOutside, useVModel } from '@vueuse/core'

const props = defineProps<{
  modelValue: boolean
  width?: number
}>()

const emit = defineEmits<{
  (e: 'update:model-value'): void
}>()

const currentModelValue = useVModel(props, 'modelValue', emit)

const streamerModalRef = ref()

function close() {
  currentModelValue.value = false
}

onClickOutside(streamerModalRef, close)
</script>

<style lang="scss" src="./StreamerModal.scss"></style>
