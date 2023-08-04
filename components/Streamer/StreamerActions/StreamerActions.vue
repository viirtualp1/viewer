<script setup lang="ts">
import StreamerCard from "@/components/Streamer/StreamerCard/StreamerCard.vue";
</script>

<template>
  <streamer-card>
    <button v-for="i in 5" :key="i">{{ i }}</button>
  </streamer-card>
</template>

<style scoped lang="scss"></style>
