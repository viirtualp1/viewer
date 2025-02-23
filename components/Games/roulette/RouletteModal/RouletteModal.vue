<template>
  <streamer-modal v-model="isOpen" :width="600" class="roulette-modal">
    <template #header>
      <div class="roulette-modal__title">Рулетка Лины</div>
    </template>
    <template #body>
      <div class="roulette-modal__body">
        <div class="roulette-modal__block">
          <div class="roulette-modal__subtitle">Рулетка предметов</div>
          <streamer-button class="roulette-modal__button" theme="warning">
            Крутить рулетку
          </streamer-button>
        </div>
        <div class="roulette-modal__block">
          <div class="roulette-modal__subtitle">Рулетка героев</div>
          <streamer-button
            class="roulette-modal__button"
            theme="warning"
            @click="rouletteHeroes"
          >
            Крутить рулетку
          </streamer-button>
        </div>
      </div>
    </template>
  </streamer-modal>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { StreamerModal, StreamerButton } from '@/components/ui'
import { useStreamerModal } from '@/composables/useStreamerModal'
import { useHeroesApi } from '@/composables/useHeroesApi'
import { getRandomNumber } from '@/services/random'
import { useOpenApiStore, useOpenApiStoreRefs } from '@/stores/openapi'

const { isOpen, openModal } = useStreamerModal()
const { fetchHeroes } = useOpenApiStore()
const { heroes } = useOpenApiStoreRefs()
const { getHeroName } = useHeroesApi()

async function rouletteHeroes() {
  const heroesIndex = getRandomNumber({
    min: 0,
    max: heroes.value.length - 1,
  })

  const heroName = getHeroName(heroes.value[heroesIndex])
  alert(heroName)
}

onMounted(fetchHeroes)

defineExpose({
  open: openModal,
})
</script>

<style src="./RouletteModal.scss"></style>
