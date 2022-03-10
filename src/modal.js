import { clearPage } from ".";
import { Project } from ".";
import { projectClasses } from ".";
import { closeModal } from ".";
import { createProjectsGrid } from "./projects-grid-page";
import { projectsGrid } from "./projects-grid-page";
import { popProjectectsGrid } from "./projects-grid-page";

export const modalFunction = function () {
  const createBtn = document.getElementById("create"); // In modal

  const getTitle = function () {
    const projectTitleInput = document.getElementById("project-title").value;
    return projectTitleInput;
  };

  const getDescription = function () {
    const projectDescriptionInput =
      document.getElementById("description").value;
    return projectDescriptionInput;
  };

  export const createProjectSummary = function () {
    // CLEAR RIGHT SIDE
    clearPage(projectsGrid);
    // CREATE NEW CLASS
    const newProject = new Project(getTitle(), getDescription());
    // ADD TO CLASS LIST
    projectClasses.push(newProject);
    // POPULATE PROJECTS GRID
    popProjectectsGrid();
  };

  createBtn.addEventListener("click", function () {
    closeModal();
    createProjectsGrid();
    createProjectSummary();
  });
};
