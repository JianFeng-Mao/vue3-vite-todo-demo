import { reactive, ref, watchEffect } from 'vue'
import { fetch, saveStorage } from '../utils/todoStorage'

export default function useTodoList() {

  const todoRef = ref(fetch())
  watchEffect(() => {
    saveStorage(todoRef.value)
  })


  return {
    todoRef
  }
}