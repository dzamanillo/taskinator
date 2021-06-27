// Targeting button and saving the query to var. This saves comp resources
var buttonEl = document.querySelector("#save-task");

// Targeting ul and saving query to var
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Fuction for add task button
var createTaskHandler = function () {
  var listItemEl = document.createElement("li"); // Create var for a new list item
  listItemEl.className = "task-item"; // gives list item a class
  listItemEl.textContent = "This is a new task"; // gives list item text
  tasksToDoEl.appendChild(listItemEl); // targets ul and adds new li of listItemEl to it
};

// Add Task Button
buttonEl.addEventListener("click", createTaskHandler);
