<template>
  <div class="jobs-container">
    <div class="task-container">
      <!-- Search bar -->
      <div class="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      <!-- Header -->
      <div class="header">
        <div class="header-left">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            alias.
          </h2>
          <button @click="showCreateTaskForm">Create Task</button>
          <CreateTaskForm
            v-if="isCreateTaskFormVisible"
            @task-created="onTaskCreated"
          />
        </div>
        <div class="header-right">
          <!-- Box for today's date -->
          <div class="today-box">
            <p>Today's Date</p>
            <p>{{ todayDate }}</p>
          </div>
        </div>
      </div>

      <!-- My Tasks Section -->
      <div class="my-tasks">
        <div class="my-tasks-header">
          <h2>My Tasks</h2>
          <a href="#">View All</a>
        </div>
        <!-- Weekly View -->
        <div class="weekly-view">
          <div class="day-box">
            <div class="week-days">
              <div
                v-for="day in weekDays"
                :key="day"
                :class="{ 'current-day': isToday(day) }"
              >
                {{ day }} <br />
              </div>
            </div>

            <!-- <div v-for="day in days" :key="day.date" class="day-box">
            <p>{{ day.date }}</p> -->
            <ul>
              <li v-for="task in tasks" :key="task._id">
                <div class="task-time">
                  <span>{{ getFormattedTime(task.due_date) }}</span>
                </div>
                <div class="task-title">
                  <span>{{ task.title }}</span
                  ><span class="material-symbols-rounded"> edit </span>
                  <p>{{ task.description }}</p>
                </div>
              </li>
            </ul>
          </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
    <div class="jobs">
      <h1 style="text-align: center">This is Jobs Page</h1>
      <div v-for="item in jobs" :key="item.id">
        <router-link :to="{ name: 'JobsDetail', params: { id: item.id } }"
          ><h2>
            {{ item.title }}
          </h2>
        </router-link>
      </div>
    </div>
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
    <div class="monthly-calendar">
      <h2>{{ monthYear }}</h2>
      <table>
        <thead>
          <tr>
            <th v-for="day in weekDays" :key="day">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="week in calendar" :key="week">
            <td
              v-for="day in week"
              :key="day.date"
              :class="{ 'other-month': day.otherMonth }"
            >
              {{ day.date }}
              <!-- You can add more content here for each day -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import CreateTaskForm from "../../components/Jobs/CreateTaskForm.vue";
import { getListTasks } from "../../utils/function.js";
import moment from "moment";
export default {
  name: "Jobs",
  components: {
    CreateTaskForm,
  },
  data() {
    return {
      tasks: [],
      jobs: [
        { title: "Làm màu", id: 1, description: "lorem" },
        { title: "Vẽ chuyện", id: 2, description: "lorem" },
        { title: "Sơn tường", id: 3, description: "lorem" },
      ],
      weekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      calendar: [],
      isCreateTaskFormVisible: false,
      currentDate: new Date(),
      todayDate: new Date().toLocaleDateString(),
      formattedTime: "",
      days: [
        {
          date: "Monday, 1 Jan",
          tasks: [
            { _id: "1", time: "09:00 AM", title: "Task 1" },
            { _id: "2", time: "02:00 PM", title: "Task 2" },
          ],
        },
        // Add other days here
      ],
    };
  },
  computed: {
    monthYear() {
      const options = { month: "long", year: "numeric" };
      return this.currentDate.toLocaleDateString("en-US", options);
    },
    dueDate() {
      const options = { month: "long", year: "numeric" };
      return this.currentDate.toLocaleDateString("en-US", options);
    },
  },
  watch: {
    currentDate() {
      this.generateCalendar();
    },
  },
  mounted() {
    this.fetchTasks();
    this.generateCalendar();
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
    generateCalendar() {
      const firstDay = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        1
      );
      const lastDay = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() + 1,
        0
      );
      const calendar = [];
      let currentRow = [];
      let currentDate = firstDay;

      while (currentDate <= lastDay) {
        if (currentRow.length === 7) {
          calendar.push([...currentRow]);
          currentRow = [];
        }

        currentRow.push({
          date: currentDate.getDate(),
          otherMonth: currentDate.getMonth() !== this.currentDate.getMonth(),
        });

        currentDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + 1
        );
      }

      calendar.push([...currentRow]);
      this.calendar = calendar;
    },
    getFormattedTime(dueDate) {
      const dateObject = new Date(dueDate);
      let hours = dateObject.getHours();
      const minutes = dateObject.getMinutes();
      const period = hours >= 12 ? "PM" : "AM";

      hours = hours % 12 || 12;

      return `${hours}:${minutes} ${period}`;
    },
    isToday(day) {
      const today = new Date().getDay();
      return this.weekDays[today] === day;
    },
    showCreateTaskForm() {
      this.isCreateTaskFormVisible = true;
    },
    onTaskCreated() {
      // Xử lý khi task được tạo thành công, có thể làm mới danh sách task, ẩn form, vv.
      this.isCreateTaskFormVisible = false;
      this.fetchTasks();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./Jobs.scss";
</style>
