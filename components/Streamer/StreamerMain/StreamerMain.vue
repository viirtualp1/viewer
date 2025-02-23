<template>
  <streamer-card class="streamer-main">
    <button
      type="button"
      class="streamer-main__profile-button"
      @click="openStreamerModal"
    >
      <img
        src="@/assets/images/icon-streamer.jpg"
        class="streamer-main__icon"
        alt="icon streamer"
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

    <streamer-button size="large" @click="completeTask(task)">
      Выполнить задание
    </streamer-button>

    <streamer-info-modal ref="streamerInfoModalRef" />
  </streamer-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useGameStatsStoreRefs } from '@/stores/game-stats'
import { useTasksStoreRefs } from '@/stores/tasks'
import { formatDate } from '@/utils/date'
import { useTasks } from '@/composables/useTasks'
import {
  StreamerCard,
  StreamerCardTitle,
  StreamerCardText,
} from '@/components/Streamer/StreamerCard'
import { StreamerInfoModal } from '@/components/Streamer'
import { StreamerButton } from '@/components/ui'

const { day, date } = useGameStatsStoreRefs()
const { task } = useTasksStoreRefs()
const { completeTask } = useTasks()

const streamerInfoModalRef = ref<InstanceType<typeof StreamerInfoModal>>()

const formattedDate = computed(() => formatDate(date.value))

function openStreamerModal() {
  streamerInfoModalRef.value?.open()
}
</script>

<style src="./StreamerMain.scss" lang="scss"></style>
