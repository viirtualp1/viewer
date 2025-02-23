<template>
  <div class="index-page">
    <div class="index-page__row">
      <streamer-main />
      <streamer-tasks />
      <streamer-stats />
      <streamer-actions @open:roulette-modal="openRouletteModal" />
    </div>

    <roulette-modal ref="rouletteModalRef" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useHead } from 'nuxt/app'

import { useGameStatsSaves } from '@/composables/useGameStats'
import { useTasksSaves } from '@/composables/useTasks'
import { useHeroStatsSaves } from '@/composables/useHeroStats'

import { StreamerMain } from '@/components/Streamer/StreamerMain'
import { StreamerTasks } from '@/components/Streamer/StreamerTasks'
import { StreamerStats } from '@/components/Streamer/StreamerStats'
import { StreamerActions } from '@/components/Streamer/StreamerActions'
import { RouletteModal } from '@/components/Games/'

const setTaskFromLocalStorage = useTasksSaves()
const setGameStatsSaves = useGameStatsSaves()
const setHeroStatsSaves = useHeroStatsSaves()

const rouletteModalRef = ref<InstanceType<typeof RouletteModal>>()

function openRouletteModal() {
  rouletteModalRef.value?.open()
}

onMounted(() => {
  setHeroStatsSaves()
  setGameStatsSaves()
  setTaskFromLocalStorage()
})

useHead({
  title: 'Viewer - Симулятор стримера',
  meta: [{ name: 'description', content: 'Simulator streamer' }],
})
</script>

<style src="./IndexPage.scss" lang="scss"></style>
