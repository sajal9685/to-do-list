// Function to add a task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskTime = document.getElementById("taskTime");
    const taskText = taskInput.value.trim();
    const timeText = taskTime.value;
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    if (timeText === "") {
      alert("Please set a time for your task.");
      return;
    }
  
    const taskList = document.getElementById("taskList");
  
    // Create a new task element
    const taskItem = document.createElement("li");
  
    // Task details container
    const taskDetails = document.createElement("div");
    taskDetails.className = "task-details";
  
    // Task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.onclick = function () {
      this.parentNode.parentNode.classList.toggle("completed");
    };
  
    // Task time
    const taskTimeSpan = document.createElement("span");
    taskTimeSpan.textContent = `at ${timeText}`;
    taskTimeSpan.className = "task-time";
  
    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.onclick = function () {
      this.parentNode.remove();
    };
  
    // Append task text and time to the task details
    taskDetails.appendChild(taskSpan);
    taskDetails.appendChild(taskTimeSpan);
  
    // Append task details and delete button to task item
    taskItem.appendChild(taskDetails);
    taskItem.appendChild(deleteButton);
  
    // Add task to the list
    taskList.appendChild(taskItem);
  
    // Clear the input fields
    taskInput.value = "";
    taskTime.value = "";
  }
  