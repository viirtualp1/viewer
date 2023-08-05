<template>
  <streamer-card>
    <streamer-button v-for="i in 4" :key="i" size="large">
      Button {{ i }}
    </streamer-button>
  </streamer-card>
</template>

<script setup lang="ts">
import StreamerCard from "@/components/Streamer/StreamerCard/StreamerCard.vue";
import StreamerButton from "@/components/ui/StreamerButton/StreamerButton.vue";
</script>
