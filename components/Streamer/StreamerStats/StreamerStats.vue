<template>
  <StreamerCard>
    <StreamerCardTitle>Состояние</StreamerCardTitle>

    <StreamerCardText>Здоровье - {{ hp }}%</StreamerCardText>
    <StreamerCardText>Вода - {{ water }}%</StreamerCardText>
    <StreamerCardText>Еда - {{ food }}%</StreamerCardText>
    <StreamerCardText>Энергия - {{ energy }}%</StreamerCardText>
  </StreamerCard>
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
