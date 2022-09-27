const LOCAL_KEY = 'todo_mvc'

export function generateId() {
  return Date.now() + Math.random().toString().substr(2, 4)
}

export function saveStorage(todos) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todos))
}

export function fetch() {
  const storageTodos = localStorage.getItem(LOCAL_KEY);
  if(storageTodos) {
    return JSON.parse(storageTodos)
  }
  return []
}

export function removeStorage() {
  localStorage.removeItem(LOCAL_KEY)
}

export function filter(todos, type) {
  if(type === 'active') {
    return todos.filter(todo => !todo.completed)
  } else if(type === 'completed') {
    return todos.filter(todo => todo.completed)
  } else {
    return todos;
  }
}