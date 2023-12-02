<template>
  <streamer-card class="streamer-main">
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

    <streamer-card-title>День {{ day }}</streamer-card-title>
    <streamer-card-title>
      {{ formattedDate }}
    </streamer-card-title>

    <streamer-card-text v-if="task" class="streamer-main__text">
      {{ task.description }}
    </streamer-card-text>

    <div class="hr" />

    <streamer-button @click="completeTask(task)">
      Выполнить задание
    </streamer-button>

    <teleport to="body">
      <streamer-modal v-model="isOpen" @close="closeModal" />
    </teleport>
  </streamer-card>
</template>

<script setup lang="ts">
import { useTasks } from '@/composables/useTasks'

import { useGameStatsStoreRefs } from '@/stores/game-stats'
import { useTasksStoreRefs } from '@/stores/tasks'

import { formatDate } from '@/utils/Date'

import StreamerCard from '@/components/Streamer/StreamerCard/StreamerCard.vue'
import StreamerCardTitle from '@/components/Streamer/StreamerCard/StreamerCardTitle/StreamerCardTitle.vue'
import StreamerCardText from '@/components/Streamer/StreamerCard/StreamerCardText/StreamerCardText.vue'
import StreamerButton from '@/components/ui/StreamerButton/StreamerButton.vue'

import StreamerModal from '@/components/ui/StreamerModal/StreamerModal.vue'
import { useStreamerModal } from '@/composables/useStreamerModal/useStreamerModal'

const { day, date } = useGameStatsStoreRefs()
const { task } = useTasksStoreRefs()
const { completeTask } = useTasks()

const { isOpen, openModal, closeModal } = useStreamerModal()

const formattedDate = computed(() => formatDate(date.value))
</script>

<style src="./StreamerMain.scss" lang="scss"></style>
