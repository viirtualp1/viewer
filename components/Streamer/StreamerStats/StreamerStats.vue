<template>
  <streamer-card>
    <streamer-card-title>Состояние</streamer-card-title>

    <streamer-card-text>Здоровье - {{ hp }}%</streamer-card-text>
    <streamer-card-text>Вода - {{ water }}%</streamer-card-text>
    <streamer-card-text>Еда - {{ food }}%</streamer-card-text>
    <streamer-card-text>Энергия - {{ energy }}%</streamer-card-text>
  </streamer-card>
</template>

<script setup lang="ts">
import { useHeroStatsStoreRefs } from "@/stores/hero-stats";

import StreamerCard from "@/components/Streamer/StreamerCard/StreamerCard.vue";
import StreamerCardText from "@/components/Streamer/StreamerCard/StreamerCardText/StreamerCardText.vue";
import StreamerCardTitle from "@/components/Streamer/StreamerCard/StreamerCardTitle/StreamerCardTitle.vue";

const { hp, food, water, energy } = useHeroStatsStoreRefs();
</script>

<style scoped lang="scss"></style>
