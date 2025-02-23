import { defineStore, storeToRefs } from 'pinia'
import { HeroData } from '@/services/Hero'
import { getHeroes } from '~/services/opendota'

interface OpenApiStoreData {
  heroes: HeroData[]
  pending: boolean
}

export const useOpenApiStore = defineStore({
  id: 'open-api-store',
  state: (): OpenApiStoreData => {
    return {
      heroes: [],
      pending: false,
    }
  },
  actions: {
    setHeroes(heroes: HeroData[]) {
      this.heroes = heroes
    },
    async fetchHeroes() {
      this.pending = true

      try {
        this.setHeroes(await getHeroes())
      } catch (err) {
        console.error(err)
        return []
      } finally {
        this.pending = false
      }
    },
  },
  getters: {
    getHeroes: (state) => state.heroes,
  },
})

export const useOpenApiStoreRefs = () => storeToRefs(useOpenApiStore())
