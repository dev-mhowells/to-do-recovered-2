import "./style.css";
import { projectClasses } from ".";
import { currentProject } from ".";
import { taskModalContainer } from ".";
import { prjGridTasks } from ".";

export const projectPage = function (parent) {
  const eachPrjGrid = document.createElement("div");
  eachPrjGrid.classList.add("each-prj-grid");
  parent.appendChild(eachPrjGrid);

  const prjGridDate = document.createElement("div");
  prjGridDate.classList.add("prj-grid-date");
  eachPrjGrid.appendChild(prjGridDate);

  const prjGridTitle = document.createElement("div");
  prjGridTitle.classList.add("prj-grid-title");
  eachPrjGrid.appendChild(prjGridTitle);

  const prjGridPriority = document.createElement("div");
  prjGridPriority.classList.add("prj-grid-priority");
  eachPrjGrid.appendChild(prjGridPriority);

  const prjGridDesc = document.createElement("div");
  prjGridDesc.classList.add("prj-grid-description");
  eachPrjGrid.appendChild(prjGridDesc);

  // USES CLASS INFO TO POPULATE PAGE

  prjGridDate.textContent = projectClasses[currentProject].dueDate;
  prjGridTitle.textContent = projectClasses[currentProject].projectTitle;
  prjGridPriority.textContent = projectClasses[currentProject].priority;
  prjGridDesc.textContent = projectClasses[currentProject].projectDescription;

  // const prjGridTasks = document.createElement("div"); // NEW GRID
  prjGridTasks.classList.add("prj-grid-tasks");
  eachPrjGrid.appendChild(prjGridTasks);

  // TASKS GRID CONTENT -----------------------------------------
  const openTaskModalBtn = document.createElement("button");
  openTaskModalBtn.classList.add("prj-grid-add");
  eachPrjGrid.appendChild(openTaskModalBtn);
  openTaskModalBtn.textContent = "Add Task";

  openTaskModalBtn.addEventListener("click", function () {
    taskModalContainer.style.display = "flex";
    console.log("show task modal");
  });

  const prjtasksTitle = document.createElement("div");
  prjtasksTitle.classList.add("prj-tasks-title");
  eachPrjGrid.appendChild(prjtasksTitle);

  const prjtasks1 = document.createElement("div");
  prjtasks1.classList.add("prj-task");
  prjGridTasks.appendChild(prjtasks1);

  const prjtasks2 = document.createElement("div");
  prjtasks2.classList.add("prj-task");
  prjGridTasks.appendChild(prjtasks2);

  prjtasksTitle.textContent = "TASKS:";
  prjtasks1.textContent = "task 1";
  prjtasks2.textContent = "task 2";
};
