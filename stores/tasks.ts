import { defineStore, storeToRefs } from 'pinia'
import { TaskType } from '@/types/Task'

interface TasksStoreData {
  tasks: TaskType[]
  task: TaskType | null
}

export const useTasksStore = defineStore({
  id: 'tasks-store',
  state: (): TasksStoreData => {
    return {
      tasks: [],
      task: null,
    }
  },
  actions: {
    setTask(task: TaskType | null) {
      this.task = task
    },
    setTasks(tasks: TaskType[]) {
      this.tasks = tasks
    },
  },
  getters: {
    getTask: (state) => state.task,
    getTasks: (state) => state.tasks,
  },
})

export const useTasksStoreRefs = () => storeToRefs(useTasksStore())
