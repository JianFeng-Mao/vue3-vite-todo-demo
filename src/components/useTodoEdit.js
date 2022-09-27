import { ref, computed } from "vue"


export default function useTodoEdit(todoRef) {
  const curEditTodoRef = ref(null)
  // 缓存当前选中项的title
  let originalTitle = ''

  const editTodo = (todo) => {
    originalTitle = todo.title
    curEditTodoRef.value = todo
  }

  const saveTodo = (todo) => {
    const index = todoRef.value.findIndex(item => item.id === todo.id)
    if(index > -1) {
      todoRef.value[index] = todo
    }
    originalTitle = null
  }

  const cancelTodo = (todo) => {
    const index = todoRef.value.findIndex(item => item.id === todo.id)
    if(index > -1) {
      todoRef.value[index].title = originalTitle
    }
    originalTitle = null
  }

  const checkAllTodo = computed({
    get() {
      var val = todoRef.value.length > 0 && todoRef.value.filter((it) => !it.completed).length === 0;
      return val;
    },
    set(checked) {
      todoRef.value.forEach((todo) => {
        todo.completed = checked;
      });
    },
  });

  return {
    editTodo,
    saveTodo,
    cancelTodo,
    checkAllTodo,
    curEditTodoRef
  }
}