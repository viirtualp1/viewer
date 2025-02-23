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
import { useHeroStatsStoreRefs } from '@/stores/hero-stats'
import {
  StreamerCard,
  StreamerCardTitle,
  StreamerCardText,
} from '@/components/Streamer/StreamerCard'

const { hp, food, water, energy } = useHeroStatsStoreRefs()
</script>
