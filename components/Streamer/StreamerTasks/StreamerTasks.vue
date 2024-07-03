<template>
  <StreamerCard>
    <StreamerCardTitle>Задания</StreamerCardTitle>

    <StreamerCardText v-for="(task, taskIdx) in tasks" :key="taskIdx">
      {{ formatDate(task.date) }} → {{ task.title }}
    </StreamerCardText>
  </StreamerCard>
</template>

<script setup lang="ts">
import { formatDate } from '@/utils/Date'
import { useTasksStoreRefs } from '@/stores/tasks'
import {
  StreamerCard,
  StreamerCardTitle,
  StreamerCardText,
} from '@/components/Streamer/StreamerCard'

const { tasks } = useTasksStoreRefs()
</script>
