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
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li 
            class="todo" 
            :class="{ completed: item.completed }"
            v-for="(item) in todoRef"
            :key="item.id"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="item.completed" />
              <label>{{ item.title }}</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" type="text" />
          </li>
        </ul>
      </section>
      <footer class="footer">
        <span class="todo-count">
          <strong>3</strong>
          <span>items left</span>
        </span>
        <ul class="filters">
          <li><a href="#/all" class="selected">All</a></li>
          <li><a href="#/active" class="">Active</a></li>
          <li><a href="#/completed" class="">Completed</a></li>
        </ul>
        <button class="clear-completed" style="display: none">
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import useTodoAdd from './components/useTodoAdd';
import useTodoList from './components/useTodoList'
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
      ...useTodoAdd(todoRef)
    };
  },
};
</script>
