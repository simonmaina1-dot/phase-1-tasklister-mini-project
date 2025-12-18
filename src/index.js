// STEP 1: Select the form and task list from the DOM
const form = document.querySelector('#create-task-form');
const taskList = document.querySelector('#tasks');

// STEP 2: Add submit event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent page refresh

  // STEP 3: Get input value
  const taskDescription = event.target['new-task-description'].value;

  // STEP 4: Build the task and append to the list
  buildToDo(taskDescription);

  // Clear input after submission
  event.target.reset();
});

// STEP 4: Function to build a task item
function buildToDo(task) {
  const li = document.createElement('li');
  li.textContent = task;
  taskList.appendChild(li);
}
