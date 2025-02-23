<template>
  <streamer-card>
    <streamer-card-title>Задания</streamer-card-title>

    <streamer-card-text v-for="(task, taskIdx) in tasks" :key="taskIdx">
      {{ formatDate(task.date) }} → {{ task.title }}
    </streamer-card-text>
  </streamer-card>
</template>

<script setup lang="ts">
import { formatDate } from '@/utils/date'
import { useTasksStoreRefs } from '@/stores/tasks'
import {
  StreamerCard,
  StreamerCardTitle,
  StreamerCardText,
} from '@/components/Streamer/StreamerCard'

const { tasks } = useTasksStoreRefs()
</script>
