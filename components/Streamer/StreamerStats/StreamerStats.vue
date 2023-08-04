<script setup lang="ts">
import StreamerCard from "@/components/Streamer/StreamerCard/StreamerCard.vue";
</script>

<template>
  <streamer-card>
    <div v-for="i in 4" :key="i">stat {{ i }}</div>
  </streamer-card>
</template>

<style scoped lang="scss"></style>
