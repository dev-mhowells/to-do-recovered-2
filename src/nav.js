import { clearPage } from ".";
import { projectsGridPage } from "./projects-grid-page";
import { projectsGrid } from ".";

export const initNav = function () {
  const allProjects = document.getElementById("all-projects");
  allProjects.addEventListener("click", function () {
    console.log("hi");
    clearPage(projectsGrid);
    projectsGridPage();
  });
};
