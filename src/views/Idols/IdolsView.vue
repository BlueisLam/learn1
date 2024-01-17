<template>
  <h1 class="page-title">this is Idols Page</h1>
  <div class="todo-list">
    <h2>To-Do List</h2>
    <ul>
      <li v-for="task in tasks" :key="task._id" class="task-item">
        <strong>{{ task.title }}</strong>
        <p>{{ task.description }}</p>
        <p>Due Date: {{ format_date(task.due_date) }}</p>
        <p>Priority: {{ task.priority }}</p>
        <p>Status: {{ task.status }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getListTasks } from "../../utils/function.js";
import axios from "axios";
import moment from 'moment'
export default {
  data() {
    return {
      tasks: [],
    };
  },
  mounted() {
    this.fetchTasks();
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await getListTasks();
        this.tasks = response.data;
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("MM-DD-YYYY");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./IdolsView.scss";
</style>
