import { clearPage } from ".";
import { rightSide } from ".";
import { projectClasses } from ".";
import { currentProject } from ".";
import { projectsGrid } from ".";
import { projectPage } from "./project-page";

// export const projectsGrid = document.createElement("div");
const createProjectsGrid = function () {
  clearPage(rightSide);
  projectsGrid.classList.add("projects-grid");
  rightSide.appendChild(projectsGrid);
};

const popProjectectsGrid = function () {
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

export const projectsGridPage = function () {
  createProjectsGrid();
  popProjectectsGrid();
};
