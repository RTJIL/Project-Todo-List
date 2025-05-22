import "./style.css"
import { addTaskForm } from "./addTaskForm"
import { addInboxContent } from "./addInboxContent"
import { mpTitleAnimationGrow, mpTitleAnimationShrink } from "./mpTitleAnimation"

addInboxContent();

const popUp = document.querySelector(".popup")
const buttons = document.querySelectorAll(".button")
const inboxContainer = document.querySelector(".inboxContainer")

document.querySelector(".mpTitle").addEventListener("click", () => {
  const projectsSection = document.querySelector(".projects"); 
  const listIcon = document.querySelector(".listIcon"); 

  const isExpanded = projectsSection.style.maxHeight && projectsSection.style.maxHeight !== "0px";

  if (isExpanded) {
    mpTitleAnimationShrink(projectsSection, listIcon);
  } else {
    mpTitleAnimationGrow(projectsSection, listIcon);
  }
});

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("addTask")) {
      addTaskForm()
      popUp.classList.add("hidden")
    } else if (btn.classList.contains("inboxSection")) {
      inboxContainer.innerHTML = ""
      addInboxContent()
    } else if (btn.classList.contains("finishedSection")) {
      console.log("finished")
    } else if (btn.classList.contains("mpTitle")) {
      console.log("animation")
    } else if (btn.classList.contains("addProject")) {
      console.log("Project added successfuly")
    }
  })
})
