// Targeting button and saving the query to var. This saves comp resources
var formEl = document.querySelector("#task-form");

// Targeting ul and saving query to var
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Fuction for add task button
var taskFormHandler = function (event) {
  event.preventDefault(); // prevents browser refresh on button click

  var taskNameInput = document.querySelector("input[name='task-name']").value; // targets value of user input on form

  var taskTypeInput = document.querySelector("select[name='task-type']").value; // targets value of task type from drop down
  console.log(taskTypeInput);

  if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
  }

  formEl.reset();

  //Package data as object
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
  };

  createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  // give it a class name
  taskInfoEl.className = "task-info";
  // add HTML content to div
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskDataObj.name +
    "</h3><span class='task-type'>" +
    taskDataObj.type +
    "</span>";

  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};

// Add Task Button
formEl.addEventListener("submit", taskFormHandler);
