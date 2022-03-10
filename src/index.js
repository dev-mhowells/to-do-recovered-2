import "./style.css";
import { projectPage } from "./project-page";
import { projectsGrid } from "./projects-grid-page";
import { createProjectsGrid } from "./projects-grid-page";
import { createProjectSummary } from "./modal";

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
// export const projectsGrid = document.createElement("div");
// export const createProjectsGrid = function () {
//   clearPage(rightSide);
//   projectsGrid.classList.add("projects-grid");
//   rightSide.appendChild(projectsGrid);
// };

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

// createBtn.addEventListener("click", function () {
//   closeModal();
//   createProjectsGrid();
//   createProjectSummary();
// });

// POPULATE PROJECTS GRID -------------------------------------------------

export const popProjectectsGrid = function () {
  for (let i = 0; i < projectClasses.length; i++) {
    console.log(projectClasses[i]);

    const projectSummary = document.createElement("div");
    projectSummary.classList.add("project-summary");
    projectsGrid.appendChild(projectSummary);

    const projectTitleDisplay = document.createElement("h3");
    projectSummary.appendChild(projectTitleDisplay);
    projectTitleDisplay.textContent = projectClasses[i].projectTitle;

    const projectDescriptionDisplay = document.createElement("p");
    projectSummary.appendChild(projectDescriptionDisplay);
    projectDescriptionDisplay.textContent =
      projectClasses[i].projectDescription;

    const addTask = document.createElement("button");
    addTask.textContent = "Add Tasks";
    projectSummary.appendChild(addTask);

    addTask.addEventListener("click", function () {
      currentProject = i;
      console.log(currentProject);
      console.log(projectClasses[i]);
      clearPage(rightSide);
      projectPage(rightSide);
    });
  }
};

// GET INPUT --------------------------------------------------------------

// const getTitle = function () {
//   const projectTitleInput = document.getElementById("project-title").value;
//   return projectTitleInput;
// };

// const getDescription = function () {
//   const projectDescriptionInput = document.getElementById("description").value;
//   return projectDescriptionInput;
// };

// const createProjectSummary = function () {
//   // CLEAR RIGHT SIDE
//   clearPage(projectsGrid);
//   // CREATE NEW CLASS
//   const newProject = new Project(getTitle(), getDescription());
//   // ADD TO CLASS LIST
//   projectClasses.push(newProject);
//   // POPULATE PROJECTS GRID
//   popProjectectsGrid();
// };

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
