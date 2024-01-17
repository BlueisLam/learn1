<template>
  <div class="overlay" >
    <form @submit.prevent="createTask">
      <label for="title">Title:</label>
      <input type="text" v-model="newTask.title" required />

      <label for="description">Description:</label>
      <textarea v-model="newTask.description" required></textarea>

      <label for="dueDate">Due Date:</label>
      <input type="datetime-local" v-model="newTask.due_date" required />

      <label for="priority">Priority:</label>
      <select v-model="newTask.priority" required>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <div class="button-container">
          <button type="button" class="cancel-button" @click="cancelTask">Cancel</button>
          <button type="submit" class="create-button">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
import { createTask } from "../../utils/function.js";

export default {
  data() {
    return {
    isTaskFormVisible: true,
      newTask: {
        title: "",
        description: "",
        due_date: "",
        priority: "low",
        status: "pending",
        user_id: "string",
      },
    };
  },
  methods: {
    async createTask() {
      try {
        await createTask(this.newTask);

        this.newTask = {
          title: "",
          description: "",
          due_date: "",
          priority: "low",
          status: "pending",
        };

        this.$emit("task-created");
      } catch (error) {
        console.error("Error creating task:", error);
      }
    },
    cancelTask() {
      this.$emit("task-created");
      this.newTask = {
        title: "",
        description: "",
        due_date: "",
        priority: "low",
        status: "pending",
      };
    },
  },
};
</script>
<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

form {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: #fff;
  z-index: 1001;
}
/* form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
} */

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input,
textarea,
select {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.button-container {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }

  .create-button,
  .cancel-button {
    width: 48%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
  }

  .create-button {
    background-color: var(--black);
    color: #fff;
  }

  .cancel-button {
    background-color: #e0e0e0;
    color: var(--black);
  }

  .create-button:hover,
  .cancel-button:hover {
    opacity: 0.8;
  }
</style>
