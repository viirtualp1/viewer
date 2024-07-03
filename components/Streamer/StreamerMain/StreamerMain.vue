<template>
  <StreamerCard class="streamer-main">
    <button
      type="button"
      class="streamer-main__profile-button"
      @click="openModal"
    >
      <img
        src="@/assets/images/icon-streamer.jpg"
        alt="icon streamer"
        class="streamer-main__icon"
      />
    </button>

    <StreamerCardTitle>День {{ day }}</StreamerCardTitle>

    <StreamerCardTitle>
      {{ formattedDate }}
    </StreamerCardTitle>

    <StreamerCardText v-if="task" class="streamer-main__text">
      {{ task.description }}
    </StreamerCardText>

    <div class="hr" />

    <StreamerButton size="large" @click="completeTask(task)">
      Выполнить задание
    </StreamerButton>

    <StreamerModal v-model="isOpen" @close="closeModal" />
  </StreamerCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGameStatsStoreRefs } from '@/stores/game-stats'
import { useTasksStoreRefs } from '@/stores/tasks'
import { formatDate } from '@/utils/Date'
import { useTasks } from '@/composables/useTasks'
import { useStreamerModal } from '@/composables/useStreamerModal'
import {
  StreamerCard,
  StreamerCardTitle,
  StreamerCardText,
} from '@/components/Streamer/StreamerCard'
import { StreamerButton, StreamerModal } from '@/components/ui'

const { day, date } = useGameStatsStoreRefs()
const { task } = useTasksStoreRefs()
const { completeTask } = useTasks()

const { isOpen, openModal, closeModal } = useStreamerModal()

const formattedDate = computed(() => formatDate(date.value))
</script>

<style src="./StreamerMain.scss" lang="scss"></style>
