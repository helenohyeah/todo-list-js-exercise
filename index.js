// Arrays to keep track of each task's state

const taskTitles = [];
const taskComplete = [];
const taskDesc = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = (title, desc) => {
  task = {
    title: title,
    description: desc,
    complete: false
  };
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(taskIndex) {
  taskComplete[taskIndex] = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(taskIndex) {
  const title = taskTitles[taskIndex];
  const desc = taskDesc[taskIndex];
  const complete = taskComplete[taskIndex];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
  console.log(`${title} Description: ${desc}`);
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take out the 💩💩"); // task 0
const task2 = newTask("Do Laundry", "😨"); // task 1
const tasks = [task1, task2];
console.log(tasks);

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
