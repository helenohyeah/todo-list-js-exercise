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
function completeTask(taskId) {
  taskId['complete'] = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(taskId) {
  const title = taskId['title'];
  const desc = taskId['description'];
  const complete = taskId['complete'];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
  console.log(`${title} Description: ${desc}`);
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take out the 💩💩"); // task 0
const task2 = newTask("Do Laundry", "😨"); // task 1
const tasks = [task1, task2];
console.log(tasks);

logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed
