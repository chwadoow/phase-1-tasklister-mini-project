

document.addEventListener("DOMContentLoaded", () => {
  const newTaskPriority = document.getElementById("new-task-priority");
  const newTaskUl = document.getElementById("tasks");
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
    
    newTaskForm.addEventListener("submit", createNewTask);
});
const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};

const createNewTask = event => {
  event.preventDefault();
  const newTask = document.createElement("li");
  const newTaskDescription = document.getElementById("new-task-description");
  newTask.innerText = newTaskDescription.value;
  appendNewTask(newTask);
  event.target.reset();
};