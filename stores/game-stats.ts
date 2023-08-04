import { defineStore } from "pinia";
import { DateType } from "@/types/Date";

export const useGameStatsStore = defineStore({
  id: "game-stats-store",
  state: () => {
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
  },
  getters: {
    getDay: (state) => state.day,
    getDate: (state) => state.date,
  },
});
