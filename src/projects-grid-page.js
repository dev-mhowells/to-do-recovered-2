import { clearPage } from ".";
import { rightSide } from ".";

export const projectsGrid = document.createElement("div");
export const createProjectsGrid = function () {
  clearPage(rightSide);
  projectsGrid.classList.add("projects-grid");
  rightSide.appendChild(projectsGrid);
};
