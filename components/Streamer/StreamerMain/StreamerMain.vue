<template>
  <streamer-card class="streamer-main">
    <img
      src="@/assets/images/icon-streamer.jpg"
      alt="icon streamer"
      class="streamer-main__icon"
    />

    <streamer-card-title>День {{ day }}</streamer-card-title>
    <streamer-card-title>
      {{ formattedDate }}
    </streamer-card-title>

    <streamer-card-text v-if="task" class="streamer-main__text">
      {{ task.description }}
    </streamer-card-text>

    <div class="hr" />

    <streamer-button>Выполнить задание</streamer-button>
  </streamer-card>
</template>

<script setup lang="ts">
import { useGameStatsStoreRefs } from '@/stores/game-stats'
import { useTasksStoreRefs } from '@/stores/tasks'

import { formatDate } from '@/utils/Date'

import StreamerCard from '@/components/Streamer/StreamerCard/StreamerCard.vue'
import StreamerCardTitle from '@/components/Streamer/StreamerCard/StreamerCardTitle/StreamerCardTitle.vue'
import StreamerCardText from '@/components/Streamer/StreamerCard/StreamerCardText/StreamerCardText.vue'
import StreamerButton from '@/components/ui/StreamerButton/StreamerButton.vue'

const { day, date } = useGameStatsStoreRefs()
const { task } = useTasksStoreRefs()

const formattedDate = computed(() => formatDate(date.value))
</script>

<style src="./StreamerMain.scss" lang="scss"></style>
