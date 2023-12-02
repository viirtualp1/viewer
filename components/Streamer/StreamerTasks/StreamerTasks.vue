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

import StreamerCard from '@/components/Streamer/StreamerCard/StreamerCard.vue'
import StreamerCardText from '@/components/Streamer/StreamerCard/StreamerCardText/StreamerCardText.vue'
import StreamerCardTitle from '@/components/Streamer/StreamerCard/StreamerCardTitle/StreamerCardTitle.vue'

const { tasks } = useTasksStoreRefs()
</script>

<style scoped lang="scss"></style>
