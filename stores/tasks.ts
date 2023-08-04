import { defineStore } from "pinia";
import { DateType } from "@/types/Date";

interface TaskType {
  title: string;
  description: string;
  date: DateType;
}

export const useTasksStore = defineStore({
  id: "tasks-store",
  state: () => {
    return {
      task: {
        title: "",
        description: "",
        date: {
          hours: 0,
          minutes: 0,
        },
      },
    };
  },
  actions: {
    setTask(task: TaskType) {
      this.task = task;
    },
  },
  getters: {
    getTask: (state) => state.task,
  },
});
