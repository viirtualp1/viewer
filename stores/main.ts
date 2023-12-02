import { defineStore, storeToRefs } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',
  state: () => {
    return {
      backgroundImageIndex: 0,
    }
  },
  actions: {
    setBackgroundImageIndex(value: number) {
      this.backgroundImageIndex = value
    },
  },
  getters: {
    getBackgroundImageIndex: (state) => state.backgroundImageIndex,
  },
})

export const useMainStoreRefs = () => storeToRefs(useMainStore())
