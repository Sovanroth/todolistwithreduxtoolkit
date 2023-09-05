import { createSlice } from "@reduxjs/toolkit";
import { taskList } from "./TaskData";

const userSlice = createSlice({
  name: "tasks",
  initialState: taskList,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, name } = action.payload;
      const ut = state.find((task) => task.id == id);
      if (ut) {
        ut.name = name;
      }
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      const ut = state.find((task) => task.id == id);
      if (ut) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addTask, updateTask, deleteTask } = userSlice.actions;
export default userSlice.reducer;
