import { projectClasses } from ".";
import { currentProject } from ".";

export const taskModalInit = function () {
  const addNewTaskBtn = document.getElementById("add-new-task");
  addNewTaskBtn.addEventListener("click", function () {
    const taskName = document.getElementById("task-name").value;
    const taskDescription = document.getElementById("task-description").value;
    const important = document.getElementById("important");
    const importantValue = important.checked ? "important" : "not important";
    console.log(
      taskName,
      taskDescription,
      importantValue,
      projectClasses[currentProject].projectTitle
    );
  });
};
