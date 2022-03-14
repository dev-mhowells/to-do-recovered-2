import "./style.css";
// import { projectsGridPage } from "./projects-grid-page";
import { modalFunction } from "./modal";
import { initNav } from "./nav";
import { taskModalInit } from "./task-modal";

// ------------------------DOM----------------------------------

const main = document.getElementById("main");
export const rightSide = document.getElementById("right-side");
const addProjectBtn = document.getElementById("add-project"); // In Nav
export const projectsGrid = document.createElement("div");
const modal_container = document.getElementById("modal-container");

export const taskModalContainer = document.getElementById(
  "tasks-modal-container"
);

export const prjGridTasks = document.createElement("div"); // NEW GRID
// ---------------------------MAIN FUNCTIONS---------------------------------------

// CLEAR
export const clearPage = function (element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

// OPEN CLOSE MODAL
const openModal = function () {
  modal_container.style.display = "flex";
  console.log("testing");
};

export const closeModal = function () {
  modal_container.style.display = "none";
};

// ----------------------PROJECTS GRID TRACKING -------------------------------

export const projectClasses = [];
export let currentProject = 0; // TRACKS CURRENT PROJECT IN ADD TASK BUTTON MODIFIED AS BUTTON CREATED, STORED BY IT.

export class Project {
  constructor(projectTitle, projectDescription, dueDate, priority) {
    this.projectTitle = projectTitle;
    this.projectDescription = projectDescription;
    this.dueDate = dueDate;
    this.priority = priority;
    // this.todos = [];
  }
}

export const tasksArray = [];

export class Task {
  constructor(taskName, taskDescription, important) {
    this.taskName = taskName;
    this.taskDescription = taskDescription;
    this.important = important;
  }
}

addProjectBtn.addEventListener("click", openModal);

modalFunction();
initNav();
taskModalInit();
