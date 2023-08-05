import { defineStore, storeToRefs } from "pinia";
import { HeroStats } from "@/types/Hero";

export const useHeroStatsStore = defineStore({
  id: "hero-stats-store",
  state: (): HeroStats => {
    return {
      hp: 100,
      energy: 100,
      water: 100,
      food: 100,
    };
  },
  actions: {
    setHp(value: number) {
      this.hp = value;
    },
    setEnergy(value: number) {
      this.energy = value;
    },
    setWater(value: number) {
      this.water = value;
    },
    setFood(value: number) {
      this.food = value;
    },
    setStats(value: HeroStats) {
      this.hp = value.hp;
      this.energy = value.energy;
      this.water = value.water;
      this.food = value.food;
    },
  },
  getters: {
    getHp: (state) => state.hp,
    getWater: (state) => state.water,
    getEnergy: (state) => state.energy,
    getFood: (state) => state.food,
    getStats: (state) => state,
  },
});

export const useHeroStatsStoreRefs = () => storeToRefs(useHeroStatsStore());
