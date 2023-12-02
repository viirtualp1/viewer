<template>
  <div class="index-page">
    <div class="index-page__row">
      <streamer-main />
      <streamer-tasks />
      <streamer-stats />
      <streamer-actions />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameStatsSaves } from '@/composables/useGameStats'
import { useTasksSaves } from '@/composables/useTasks'
import { useHeroStatsSaves } from '@/composables/useHeroStats'

import StreamerMain from '@/components/Streamer/StreamerMain/StreamerMain.vue'
import StreamerTasks from '@/components/Streamer/StreamerTasks/StreamerTasks.vue'
import StreamerStats from '@/components/Streamer/StreamerStats/StreamerStats.vue'
import StreamerActions from '@/components/Streamer/StreamerActions/StreamerActions.vue'

const { setTaskFromLocalStorage } = useTasksSaves()
const { setGameStatsSaves } = useGameStatsSaves()
const { setHeroStatsSaves } = useHeroStatsSaves()

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
