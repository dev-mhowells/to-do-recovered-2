import { clearPage } from ".";
import { Project } from ".";
import { projectClasses } from ".";
import { closeModal } from ".";
import { projectsGrid } from ".";
import { projectsGridPage } from "./projects-grid-page";

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

  const getDueDate = function () {
    const dueDateInput = document.getElementById("date").value;
    return dueDateInput;
  };

  const getPriority = function () {
    const priorityInput = document.querySelector(
      'input[name="priority"]:checked'
    ).value;
    return priorityInput;
  };

  // This function actually just creates a new class from the input and adds to array
  const createProjectSummary = function () {
    const newProject = new Project(
      getTitle(),
      getDescription(),
      getDueDate(),
      getPriority()
    );
    projectClasses.push(newProject);
  };

  createBtn.addEventListener("click", function () {
    closeModal();
    // CLEAR RIGHT SIDE
    clearPage(projectsGrid);
    // ACTUALLY JUST CREATES CLASS AND ADDS TO ARRAY
    createProjectSummary();
    // CREATE AND POPULATE PROJECTS GRID
    projectsGridPage();
  });
};
