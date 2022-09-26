import { ref } from "vue"
import { generateId } from '../utils/todoStorage'

// 新增任务
export default function useTodoAdd(todoRef) {
  // 任务标题
  const newTodoRef = ref('')

  function addTodo() {
    const value = newTodoRef.value && newTodoRef.value.trim()
    if(!value) {
      return
    }
    const todo = {
      title: value,
      id: generateId(),
      completed: false
    }
    todoRef.value.push(todo)
    newTodoRef.value = ''
  }

  return {
    newTodoRef,
    addTodo
  }
}