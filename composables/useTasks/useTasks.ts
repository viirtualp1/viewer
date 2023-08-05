import { useTasksStore } from "@/stores/tasks";
import { useGameStatsStoreRefs } from "@/stores/game-stats";
import { Days } from "@/services/Tasks/Tasks";
import { TaskType } from "@/types/Task";

export function useTasks() {
  const tasksStore = useTasksStore();
  const { day, date } = useGameStatsStoreRefs();

  const tasks = Days[day.value - 1].tasks;
  const task =
    tasks.find((task: TaskType) => {
      return (
        task.date.hours === date.value.hours &&
        task.date.minutes === date.value.minutes
      );
    }) || tasks[0];

  tasksStore.setTask(task);
  tasksStore.setTasks(tasks);
}
