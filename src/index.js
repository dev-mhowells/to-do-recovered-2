import "./style.css";
// import { projectsGridPage } from "./projects-grid-page";
import { modalFunction } from "./modal";
import { initNav } from "./nav";

// ------------------------DOM----------------------------------

const main = document.getElementById("main");
export const rightSide = document.getElementById("right-side");
const addProjectBtn = document.getElementById("add-project"); // In Nav
export const projectsGrid = document.createElement("div");
const modal_container = document.getElementById("modal-container");

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
    this.todos = [];
  }
}

addProjectBtn.addEventListener("click", openModal);

modalFunction();
initNav();
