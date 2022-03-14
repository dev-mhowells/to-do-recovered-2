import { clearPage, projectClasses } from ".";
import { currentProject } from ".";
import { Task } from ".";
import { tasksArray } from ".";
import { taskModalContainer } from ".";
import { prjGridTasks } from ".";

export const taskModalInit = function () {
  const getTaskName = function () {
    const taskName = document.getElementById("task-name").value;
    return taskName;
  };

  const getTaskDescription = function () {
    const taskDescription = document.getElementById("task-description").value;
    return taskDescription;
  };

  const getImportant = function () {
    const important = document.getElementById("important");
    const importantValue = important.checked ? "important" : "not important";
    return importantValue;
  };

  const createTask = function () {
    const newTask = new Task(
      getTaskName(),
      getTaskDescription(),
      getImportant()
    );
    tasksArray.push(newTask);
  };

  const addNewTaskBtn = document.getElementById("add-new-task");

  addNewTaskBtn.addEventListener("click", function () {
    createTask();
    console.log(tasksArray);
    clearPage(prjGridTasks);
    taskModalContainer.style.display = "none";

    const taskNameOutput = document.createElement("div");
    const taskDescriptionOutput = document.createElement("div");
    const taskImportantOutput = document.createElement("div");

    taskNameOutput.textContent = getTaskName();
    prjGridTasks.appendChild(taskNameOutput);

    taskDescriptionOutput.textContent = getTaskDescription();
    prjGridTasks.appendChild(taskDescriptionOutput);

    taskImportantOutput.textContent = getImportant();
    prjGridTasks.appendChild(taskImportantOutput);
  });
};

//   addNewTaskBtn.addEventListener("click", function () {
//     const taskName = document.getElementById("task-name").value;
//     const taskDescription = document.getElementById("task-description").value;
//     const important = document.getElementById("important");
//     const importantValue = important.checked ? "important" : "not important";
//     console.log(
//       taskName,
//       taskDescription,
//       importantValue,
//       projectClasses[currentProject].projectTitle
//     );
//   });
// };
