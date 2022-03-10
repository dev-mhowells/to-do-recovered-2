import "./style.css";
// import { projectPage } from "./project-page";
import { projectsGrid } from "./projects-grid-page";
import { createProjectsGrid } from "./projects-grid-page";
import { popProjectectsGrid } from "./projects-grid-page";
import { modalFunction } from "./modal";

// ------------------------DOM----------------------------------

const main = document.getElementById("main");
export const rightSide = document.getElementById("right-side");
const addProjectBtn = document.getElementById("add-project"); // In Nav

// const createBtn = document.getElementById("create"); // In modal

// CLEAR FUNCTIONS -------------------------------------------------------------

export const clearPage = function (element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

// ----------------------Projects GRID -------------------------------

export const projectClasses = [];
export let currentProject = 0; // TRACKS CURRENT PROJECT IN ADD TASK BUTTON MODIFIED AS BUTTON CREATED, STORED BY IT.

// -------------------- TASKS GRID --------------------------------

// projectPage(rightSide);

// TARGET MODAL -----------

const modal_container = document.getElementById("modal-container");

//-------------------------FUNCTIONS-------------------------------

// MODAL FUNCTIONS --------------------------------------------------------------
const openModal = function () {
  modal_container.style.display = "flex";
};

export const closeModal = function () {
  modal_container.style.display = "none";
};

// CLICK EVENTS -------------------------------------------------------------

addProjectBtn.addEventListener("click", openModal);

modalFunction();

export class Project {
  constructor(projectTitle, projectDescription, dueDate, priority) {
    this.projectTitle = projectTitle;
    this.projectDescription = projectDescription;
    this.dueDate = dueDate;
    this.priority = priority;
    this.todos = [];
  }
}

const allProjects = document.getElementById("all-projects");
allProjects.addEventListener("click", function () {
  console.log("test");
  createProjectsGrid();
  clearPage(projectsGrid);
  popProjectectsGrid();
});
