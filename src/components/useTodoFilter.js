import { computed, onMounted, onUnmounted, ref } from "vue"
import { filter, generateId } from '../utils/todoStorage'

const validHash = ['all', 'active', 'completed']

export default function useTodoFilter(todoRef) {

  let activeHashRef = ref('all')

  const handleHashChange = () => {
    const hash = location.hash.replace(/#\/?/, '')
    if(validHash.includes(hash)) {
      location.hash = hash
      activeHashRef.value = hash
    } else {
      location.hash = ''
      activeHashRef.value = 'all'
    }
  }

  onMounted(() => {
    window.addEventListener('hashchange', handleHashChange)
  })

  onUnmounted(() => {
    window.removeEventListener("hashchange", handleHashChange);
  })

  const filterTodos = computed(() => {
    return filter(todoRef.value, activeHashRef.value)
  })

  const activeTodoNum = computed(() => {
    return filter(todoRef.value, 'active').length
  })

  const compeletedTodoNum = computed(() => {
    return filter(todoRef.value, 'compeleted').length
  })


  return {
    activeHashRef,
    filterTodos,
    activeTodoNum,
    compeletedTodoNum
  }
}