import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Input } from "@mui/base/Input";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "./TaskReducer";
import { isAction } from "@reduxjs/toolkit";

const Update = () => {
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks);
  const [field, setField] = useState({});
  // const existTask = tasks.filter((f) => f.id == id);
  // const { name } = existTask[""];
  const [eTask, setTask] = useState();
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // const deleteFindId = (deleteId) => {
  //   let item = localStorage.getItem("tasks") || null;
  //   console.log("item: ", item);
  //   let newList = item ? JSON.parse(item) : [];
  //   console.log('newlist:',newList)
  //   const list = newList.filter(f => f.id !== deleteId)
  //   localStorage.setItem('tasks', JSON.stringify(list))
  // }

  // const handleUpdate = (event) => {
  //   // event.preventDefault();
  //   // dispatch(
  //   //   updateTask({
  //   //     id: id,
  //   //     name: eTask,
  //   //   })
  //   // );

  //   // let newList = item ? JSON.parse(item) : [];
  //   // const list = newList.filter(f => f.id == event)
  //   // const item = JSON.parse(localStorage.getItem('tasks'));
  //   // Object.keys(event).forEach((key) => {
  //   //   item[key] = event[key]
  //   // });
  //   // localStorage.setItem('task', JSON.stringify(list));

  // //   let item = list.map((item) =>{
  // //     if(item.id ===updateId){
  // //         return {...item, text: updateText}
  // //     }
  // //     return item;
  // // })

  //   let item = localStorage.getItem("tasks") || null;
  //   let newList = item ? JSON.parse(item) : [];
  //   const list = newList.filter(f => f.id === event)

  //   // let newItem = list.map((newItem) => {
  //   //   if(newItem.id === )
  //   // })

  //   navigate("/");
  // };

  const handleGetItem = () => {
    let item = localStorage.getItem("tasks") || null;
    let list = item ? JSON.parse(item) : [];
    console.log("list =>", list);

    let updateItem = list?.find((item) => item.id == id);
    console.log("updateitem : ", updateItem);
    setField(updateItem);
  };

  const handleUpdate = (e, val) => {
    e.preventDefault();
    let updateItem = { ...field, name: val };
    setField(updateItem);

    let item = localStorage.getItem("tasks") || null;
    let list = item ? JSON.parse(item) : [];

    let newItem = list.map((newItem) => {
      if (newItem.id === field.id) {
        return field;
      }
      return newItem;
    });

    localStorage.setItem("tasks", JSON.stringify(newItem));

    console.log("update List:", newItem);
  };

  useEffect(() => {
    handleGetItem();
  }, []);

  return (
    <form onSubmit={handleUpdate}>
      <Input
        type="text"
        required
        name="task"
        placeholder="update task"
        value={field?.name}
        onChange={(e) => handleUpdate(e, e.target.value)}
      />
      <Button
        onClick={() => navigate("/")}
        type="submit"
        sx={{ mt: 2 }}
        variant="contained"
        disableElevation
      >
        Update Task
      </Button>
    </form>
  );
};

export default Update;
