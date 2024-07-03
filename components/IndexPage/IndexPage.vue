<template>
  <div class="index-page">
    <div class="index-page__row">
      <StreamerMain />
      <StreamerTasks />
      <StreamerStats />
      <StreamerActions />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from 'nuxt/app'

import { useGameStatsSaves } from '@/composables/useGameStats'
import { useTasksSaves } from '@/composables/useTasks'
import { useHeroStatsSaves } from '@/composables/useHeroStats'

import { StreamerMain } from '@/components/Streamer/StreamerMain'
import { StreamerTasks } from '@/components/Streamer/StreamerTasks'
import { StreamerStats } from '@/components/Streamer/StreamerStats'
import { StreamerActions } from '@/components/Streamer/StreamerActions'

const setTaskFromLocalStorage = useTasksSaves()
const setGameStatsSaves = useGameStatsSaves()
const setHeroStatsSaves = useHeroStatsSaves()

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
