import { Days } from '@/services/Tasks'
import { useTasksStore, useTasksStoreRefs } from '@/stores/tasks'
import { TaskType } from '@/types/Task'
import { useGameStatsStore, useGameStatsStoreRefs } from '@/stores/game-stats'
import { useHeroStatsStore } from '@/stores/hero-stats'

export function useTasks() {
  const { setTask, setTasks } = useTasksStore()
  const { tasks } = useTasksStoreRefs()

  const { day } = useGameStatsStoreRefs()
  const { setDate, setDay } = useGameStatsStore()

  const { setEnergy } = useHeroStatsStore()

  function setNewDay() {
    const tasks = Days[day.value].tasks
    const task = tasks[0]

    if (!tasks) {
      return
    }

    setTasks(tasks)
    setTask(task)

    setDay(day.value + 1)
    setDate(task.date)

    setEnergy(100)
  }

  function completeTask(currentTask: TaskType | null) {
    if (!currentTask) {
      return
    }

    const currentTaskIndex = tasks.value.findIndex((task: TaskType) => {
      return (
        task.date.hours === currentTask.date.hours &&
        task.date.minutes === currentTask.date.minutes
      )
    })

    if (currentTaskIndex === -1) {
      return
    }

    if (currentTaskIndex === tasks.value.length - 1) {
      setNewDay()

      return
    }

    const nextTask = tasks.value[currentTaskIndex + 1]

    setTask(nextTask)
    setDate(nextTask.date)
  }

  return {
    completeTask,
    setNewDay,
  }
}
