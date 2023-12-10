<template>
  <streamer-card>
    <streamer-card-title>Задания</streamer-card-title>

    <streamer-card-text v-for="(task, idx) in tasks" :key="idx">
      {{ formatDate(task.date) }} → {{ task.title }}
    </streamer-card-text>
  </streamer-card>
</template>

<script setup lang="ts">
import { formatDate } from '@/utils/Date'
import { useTasksStoreRefs } from '@/stores/tasks'
import {
  StreamerCard,
  StreamerCardText,
  StreamerCardTitle,
} from '@/components/Streamer'

const { tasks } = useTasksStoreRefs()
</script>
