<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input 
          class="new-todo" 
          autofocus="" 
          autocomplete="off" 
          placeholder="What needs to be done?"
          v-model="newTodoRef" 
          @keyup.enter="addTodo" 
          />
      </header>
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="checkAllTodo" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li 
            :class="['todo', { completed: item.completed, editing: item === curEditTodoRef }]"
            v-for="(item) in filterTodos"
            :key="item.id"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="item.completed" />
              <label @dblclick="editTodo(item)">{{ item.title }}</label>
              <button class="destroy" @click="removeTodo(item)"></button>
            </div>
            <input 
              v-model="item.title"
              @blur="saveTodo(item)"
              @keyup.enter="saveTodo(item)"
              @keyup.esc="cancelTodo(item)"
              class="edit"
              type="text" 
            />
          </li>
        </ul>
      </section>
      <footer class="footer" v-show="todoRef.length > 0">
        <span class="todo-count">
          <strong>{{ activeTodoNum }}</strong>
          <span>item{{activeTodoNum > 1 ? 's' : ''}} left</span>
        </span>
        <ul class="filters">
          <li><a href="#/all" :class="{selected: activeHashRef === 'all'}">All</a></li>
          <li><a href="#/active" :class="{selected: activeHashRef === 'active'}">Active</a></li>
          <li><a href="#/completed" :class="{selected: activeHashRef === 'completed'}">Completed</a></li>
        </ul>
        <button 
          class="clear-completed" 
          v-show="compeletedTodoNum > 0"
          @click="clearCompleted"
        >
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import useTodoAdd from './components/useTodoAdd'
import useTodoFilter from './components/useTodoFilter'
import useTodoList from './components/useTodoList'
import useTodoRemove from './components/useTodoRemove'
import useTodoEdit from './components/useTodoEdit'
export default {
  // 1. 任务列表
  // 2. 新增任务
  // 3. 列表筛选
  // 4. 修改任务
  // 5. 删除任务
  setup() {
    const { todoRef } = useTodoList()
    return {
      todoRef,
      ...useTodoAdd(todoRef),
      ...useTodoFilter(todoRef),
      ...useTodoRemove(todoRef),
      ...useTodoEdit(todoRef)
    };
  },
};
</script>
