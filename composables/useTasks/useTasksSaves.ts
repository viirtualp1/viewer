import { Days } from '@/services/Tasks'
import { TaskType } from '@/types/Task'
import { useGameStatsStoreRefs } from '@/stores/game-stats'
import { useTasksStore } from '@/stores/tasks'

export function useTasksSaves() {
  const { setTask, setTasks } = useTasksStore()
  const { day, date } = useGameStatsStoreRefs()

  function setTaskFromLocalStorage() {
    const tasks = Days[day.value - 1].tasks
    const task =
      tasks.find((task: TaskType) => {
        return (
          task.date.hours === date.value.hours &&
          task.date.minutes === date.value.minutes
        )
      }) || tasks[0]

    setTask(task)
    setTasks(tasks)
  }

  return {
    setTaskFromLocalStorage,
  }
}
