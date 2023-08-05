<template>
  <button class="streamer-button" :class="classes">
    <slot />
  </button>
</template>

<script setup lang="ts">
type ButtonTheme = "primary" | "success" | "danger" | "warning";
type Size = "small" | "default" | "large";

interface Props {
  theme?: ButtonTheme;
  outlined?: boolean;
  size?: Size;
}

const props = defineProps<Props>();

const classes = computed(() => {
  return [props.theme, { outlined: props.outlined }, props.size];
});
</script>

<style lang="scss" src="./StreamerButton.scss"></style>
