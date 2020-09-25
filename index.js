// Create a new task by adding a new object
// A new task will be created as incomplete
const newTask = (title, desc) => {
  task = {
    title: title,
    description: desc,
    complete: false,

    // marks the task as complete
    completeTask: function() {
      this['complete'] = true;
    },

    // prints out whether the task is completed
    logTaskState: function() {
      console.log(`${this['title']} has${this['complete'] ? " " : " not "}been completed`);
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take out the 💩💩"); // task 0
const task2 = newTask("Do Laundry", "😨"); // task 1
const tasks = [task1, task2];
// console.log(tasks);

task1.logTaskState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logTaskState(); // Clean Cat Litter has been completed
