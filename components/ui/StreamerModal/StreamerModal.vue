<template>
  <Transition name="streamer-modal">
    <div v-if="modelValue" class="streamer-modal">
      <div class="streamer-modal__container">
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
</template>

<script setup>
const props = defineProps({
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
