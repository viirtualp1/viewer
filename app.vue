<template>
  <div class="app" :style="appStyles">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useBackground } from "@/composables/useBackground";

const { appStyles } = useBackground();
</script>

<style lang="scss">
.app {
  width: 100%;
  height: 100%;
}
</style>
