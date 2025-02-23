<template>
  <streamer-card class="streamer-actions">
    <div
      v-for="(groupButtons, groupButtonsIdx) in buttons"
      :key="groupButtonsIdx"
      class="streamer-actions__group-buttons"
    >
      <streamer-button
        v-for="(button, buttonIdx) in groupButtons"
        :key="buttonIdx"
        class="streamer-actions__button"
        size="large"
        :theme="button.theme"
        :disabled="button.isDisabled"
        @click="button.onClick"
      >
        {{ button.text }}
      </streamer-button>
    </div>
  </streamer-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ButtonTheme } from '@/types/Button'
import { useHeroStatsStoreRefs } from '@/stores/hero-stats'
import { useGameStatsStoreRefs } from '@/stores/game-stats'
import { StreamerCard } from '@/components/Streamer'
import { StreamerButton } from '@/components/ui'

interface ButtonData {
  text: string
  theme: ButtonTheme
  isDisabled: boolean
  onClick?: () => void
}

const emit = defineEmits<{
  (e: 'open:roulette-modal'): void
}>()

const { hp, energy, food, water } = useHeroStatsStoreRefs()
const { date } = useGameStatsStoreRefs()

const isEnoughHeroStats = computed(() => {
  return (
    hp.value > 50 && energy.value > 50 && food.value > 50 && water.value > 50
  )
})

const isStreamingTime = computed(() => {
  const { hours } = date.value

  return hours >= 20 && hours <= 2
})

const buttons = computed<ButtonData[][]>(() => [
  [
    {
      text: 'Компьютер',
      theme: 'primary',
      isDisabled: false,
    },
    {
      text: 'Магазин "Twitch"',
      theme: 'primary',
      isDisabled: false,
    },
  ],
  [
    {
      text: 'Рулетка Лины',
      theme: 'primary',
      isDisabled: !isEnoughHeroStats.value,
      onClick: () => emit('open:roulette-modal'),
    },
    {
      text: 'Угадай героя',
      theme: 'primary',
      isDisabled: !isEnoughHeroStats.value,
    },
    {
      text: 'Custom Hero Simulator',
      theme: 'primary',
      isDisabled: !isEnoughHeroStats.value,
    },
    {
      text: 'Трансляция',
      theme: 'primary',
      isDisabled: !isStreamingTime.value,
    },
  ],
  [
    {
      text: 'Настройки',
      theme: 'primary',
      isDisabled: false,
    },
    {
      text: 'Вернуться в главное меню',
      theme: 'danger',
      isDisabled: false,
    },
  ],
])
</script>

<style lang="scss" src="./StreamerActions.scss"></style>
