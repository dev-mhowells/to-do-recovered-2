import { clearPage, projectClasses } from ".";
import { currentProject } from ".";
import { Task } from ".";
import { tasksArray } from ".";
import { taskModalContainer } from ".";
import { prjGridTasks } from ".";

export const popTasksGrid = function () {
  for (let i = 0; i < projectClasses[currentProject].todos.length; i++) {
    const taskNameOutput = document.createElement("div");
    const taskDescriptionOutput = document.createElement("div");
    const taskImportantOutput = document.createElement("div");

    taskNameOutput.textContent =
      projectClasses[currentProject].todos[i].taskName;
    prjGridTasks.appendChild(taskNameOutput);

    taskDescriptionOutput.textContent =
      projectClasses[currentProject].todos[i].taskDescription;
    prjGridTasks.appendChild(taskDescriptionOutput);

    taskImportantOutput.textContent =
      projectClasses[currentProject].todos[i].important;
    prjGridTasks.appendChild(taskImportantOutput);

    const deleteTaskBtn = document.createElement("button");
    prjGridTasks.appendChild(deleteTaskBtn);
  }
};

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
    tasksArray.push(newTask); // TEMPORARY

    projectClasses[currentProject].todos.push(newTask);
    console.log(projectClasses[currentProject].todos[0].taskName);
  };

  //   const popTasksGrid = function () {
  //     for (let i = 0; i < projectClasses[currentProject].todos.length; i++) {
  //       const taskNameOutput = document.createElement("div");
  //       const taskDescriptionOutput = document.createElement("div");
  //       const taskImportantOutput = document.createElement("div");

  //       taskNameOutput.textContent =
  //         projectClasses[currentProject].todos[i].taskName;
  //       prjGridTasks.appendChild(taskNameOutput);

  //       taskDescriptionOutput.textContent =
  //         projectClasses[currentProject].todos[i].taskDescription;
  //       prjGridTasks.appendChild(taskDescriptionOutput);

  //       taskImportantOutput.textContent =
  //         projectClasses[currentProject].todos[i].important;
  //       prjGridTasks.appendChild(taskImportantOutput);

  //       const deleteTaskBtn = document.createElement("button");
  //       prjGridTasks.appendChild(deleteTaskBtn);
  //     }
  //   };

  const addNewTaskBtn = document.getElementById("add-new-task");

  addNewTaskBtn.addEventListener("click", function () {
    createTask();
    // console.log(tasksArray);
    clearPage(prjGridTasks);
    taskModalContainer.style.display = "none";
    popTasksGrid();

    // const taskNameOutput = document.createElement("div");
    // const taskDescriptionOutput = document.createElement("div");
    // const taskImportantOutput = document.createElement("div");

    // taskNameOutput.textContent =
    //   projectClasses[currentProject].todos[0].taskName;
    // prjGridTasks.appendChild(taskNameOutput);

    // taskDescriptionOutput.textContent = getTaskDescription();
    // prjGridTasks.appendChild(taskDescriptionOutput);

    // taskImportantOutput.textContent = getImportant();
    // prjGridTasks.appendChild(taskImportantOutput);
  });
  const closeTaskBtn = document.querySelector(".close-task-modal");
  closeTaskBtn.addEventListener("click", function () {
    taskModalContainer.style.display = "none";
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
