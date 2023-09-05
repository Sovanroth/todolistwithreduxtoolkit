import "./App.css";
import * as React from "react";
import Home from "./Home";
import TaskForm from "./TaskForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/edit/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
