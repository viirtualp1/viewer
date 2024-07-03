<template>
  <StreamerCard class="streamer-actions">
    <div
      v-for="(groupButtons, groupButtonsIdx) in buttons"
      :key="groupButtonsIdx"
      class="streamer-actions__group-buttons"
    >
      <StreamerButton
        v-for="(button, buttonIdx) in groupButtons"
        :key="buttonIdx"
        class="streamer-actions__button"
        size="large"
        :theme="button.theme"
      >
        {{ button.text }}
      </StreamerButton>
    </div>
  </StreamerCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { ButtonTheme } from '@/types/Button'

import { StreamerCard } from '@/components/Streamer/StreamerCard'
import { StreamerButton } from '@/components/ui/StreamerButton'

interface ButtonData {
  text: string
  theme: ButtonTheme
}

const buttons = computed<ButtonData[][]>(() => [
  [
    { text: 'Компьютер', theme: 'primary' },
    { text: 'Магазин "Twitch"', theme: 'primary' },
  ],

  [
    { text: 'Рулетка Лины', theme: 'primary' },
    { text: 'Угадай героя', theme: 'primary' },
    { text: 'Custom Hero Simulator', theme: 'primary' },
  ],

  [
    { text: 'Настройки', theme: 'primary' },
    { text: 'Вернуться в главное меню', theme: 'danger' },
  ],
])
</script>

<style lang="scss" src="./StreamerActions.scss"></style>
