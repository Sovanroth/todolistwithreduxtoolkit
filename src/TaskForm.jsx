import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./TaskReducer";
import Button from "@mui/material/Button";
import { Input } from "@mui/base/Input";

const TaskForm = () => {
  // const initialState = JSON.parse(localStorage.getItem('task') || [])
  const [task, setTask] = useState([]);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem('task', JSON.stringify(task))
  // }, [task])

  const handleAddItemToStorage = (newItem) => {
    let item = localStorage.getItem("tasks") || null;
    console.log("item: ", item);
    let newList = item ? [...JSON.parse(item), newItem] : [newItem];
    console.log("new list:", newList);
    localStorage.setItem("tasks", JSON.stringify(newList));
  };

  const getLengthId = () => {
    let item = localStorage.getItem("tasks") || null;
    let list = item ? JSON.parse(item) : [];
    return parseInt(list.length) + 1;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let item = { id: getLengthId(), name: task };
    dispatch(addTask(item));
    handleAddItemToStorage(item);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        required
        name="task"
        placeholder="Add your task"
        onChange={(e) => setTask(e.target.value)}
      />
      <Button type="submit" sx={{ mt: 2 }} variant="contained" disableElevation>
        Add Task
      </Button>
    </form>
  );
};

export default TaskForm;
