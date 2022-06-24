"use strict";
document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // selecting elements from the DOM
  const addNewTask = document.getElementById("create-task-form");

  //an event listener on the new taskform button
  addNewTask.addEventListener("submit", createTask);
});
const createTask = (event) => {
  event.preventDefault();
  //stop resubmission
  const taskDescription = document.getElementById("new-task-description");
  const newTaskList = document.createElement("li");
  newTaskList.innerText = taskDescription.value;

  appendTask(newTaskList);
  event.target.reset();
};

const appendTask = (task) => {
  document.getElementById("tasks").appendChild(task);
};