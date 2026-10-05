import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Watch Lecture", category: "Lecture" },
    { id: 2, title: "Practice Code", category: "Practice" },
    { id: 3, title: "Save Project", category: "Project" }
  ]);

  const [name, setName] = useState("");

  useEffect(function() {
    console.log("Task list updated!");
    console.log("Total number of tasks:", tasks.length);
  }, [tasks]);

  function addNewTask() {
    if (name.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: name,
        category: "Other"
      }
    ]);

    setName("");
  }

  return React.createElement(
    "div",
    { className: "effect-page" },

    React.createElement("h1", null, "Task Monitor"),

    React.createElement("input", {
      value: name,
      placeholder: "Enter task",
      onChange: function(e) {
        setName(e.target.value);
      }
    }),

    React.createElement(
      "button",
      { onClick: addNewTask },
      "Add"
    ),

    React.createElement(
      "p",
      null,
      "Total Tasks: " + tasks.length
    )
  );
}

export default App;