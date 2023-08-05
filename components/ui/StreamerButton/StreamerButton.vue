<template>
  <button class="streamer-button" :class="classes">
    <slot />
  </button>
</template>

<script setup lang="ts">
type ButtonThemeType = "primary" | "success" | "danger" | "warning";

interface Props {
  theme?: ButtonThemeType;
  outlined?: boolean;
}

const props = defineProps<Props>();

const classes = computed(() => {
  return [props.theme, { outlined: props.outlined }];
});
</script>

<style lang="scss" src="./StreamerButton.scss"></style>
