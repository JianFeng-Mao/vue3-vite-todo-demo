import { ref } from "vue"


export default function useTodoRemove(todoRef) {
  const removeTodo = (todo) => {
    todoRef.value = todoRef.value.filter(item => item.id !== todo.id);
  }

  const clearCompleted = () => {
    todoRef.value = todoRef.value.filter(todo => !todo.completed)
  }

  return {
    removeTodo,
    clearCompleted
  }
}