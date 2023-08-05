import { defineStore, storeToRefs } from "pinia";
import { DateType } from "@/types/Date";
import { GameStats } from "@/types/Game";

export const useGameStatsStore = defineStore({
  id: "game-stats-store",
  state: (): GameStats => {
    return {
      day: 1,
      date: {
        hours: 8,
        minutes: 0,
      },
    };
  },
  actions: {
    setDay(value: number) {
      this.day = value;
    },
    setDate(value: DateType) {
      this.date = value;
    },
    setStats(value: GameStats) {
      this.day = value.day;
      this.date = value.date;
    },
  },
  getters: {
    getDay: (state) => state.day,
    getDate: (state) => state.date,
    getStats: (state) => state,
  },
});

export const useGameStatsStoreRefs = () => storeToRefs(useGameStatsStore());
