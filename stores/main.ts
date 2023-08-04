import { defineStore } from "pinia";

export const useMainStore = defineStore({
  id: "main",
  state: () => {
    return {
      backgroundImage: "default.png",
    };
  },
  actions: {
    setBackgroundImage(value: string) {
      this.backgroundImage = value;
    },
  },
  getters: {
    getBackgroundImage: (state) => state.backgroundImage,
  },
});
