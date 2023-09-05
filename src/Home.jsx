import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TaskForm from "./TaskForm";
import { Link } from "react-router-dom";
import { deleteTask } from "./TaskReducer";

export default function Home() {
  const [task, setTask] = React.useState([]);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask({ id: id }));
  };

  const handleGetItem = () => {
    let item = localStorage.getItem("tasks") || null;
    // console.log("item: ", item);
    let newList = item ? JSON.parse(item) : [];
    setTask(newList);
  };

  const deleteFindId = (deleteId) => {
    let item = localStorage.getItem("tasks") || null;
    console.log("item: ", item);
    let newList = item ? JSON.parse(item) : [];
    console.log("newlist:", newList);
    const list = newList.filter((f) => f.id !== deleteId);
    localStorage.setItem("tasks", JSON.stringify(list));
  };

  React.useEffect(() => {
    handleGetItem();
  }, [task]);

  return (
    <div>
      {/* {JSON.stringify(task)} */}
      <TaskForm></TaskForm>
      <List
        dense
        sx={{
          width: "100%",
          maxWidth: "70%",
          bgcolor: "background.paper",
          ml: 30,
          mt: 5,
        }}
      >
        {task?.map((task, index) => {
          return (
            <ListItem sx={{ mt: 2 }} key={index} disablePadding>
              <ListItemButton>
                <ListItemText id={task.id} primary={task.name} />
              </ListItemButton>
              <div>
                <Button variant="contained" disableElevation>
                  <Link to={`/edit/${task.id}`}>Edit</Link>
                </Button>
                <Button
                  onClick={() => deleteFindId(task.id)}
                  sx={{ ml: 1 }}
                  variant="contained"
                  disableElevation
                >
                  Delete
                </Button>
              </div>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
