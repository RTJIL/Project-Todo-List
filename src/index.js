import "./style.css"
import { addTask } from "./addTask"
import { addInboxContent } from "./addInboxContent"
import { mpTitleAnimationGrow, mpTitleAnimationShrink } from "./mpTitleAnimation"

const popUp = document.querySelector(".popup")
const buttons = document.querySelectorAll(".button")
const taskContent = document.querySelector(".taskContent")

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
      addTask()
      popUp.classList.add("hidden")
    } else if (btn.classList.contains("inboxSection")) {
      taskContent.innerHTML = ""
      addInboxContent()
    } else if (btn.classList.contains("finishedSection")) {
      console.log("finished")
    } else if (btn.classList.contains("mpTitle")) {
      console.log("animation")
    } else if (btn.classList.contains("addProject")) {
      console.log("Project added successfuly")
    } else if (btn.classList.contains("plus button")) {
      addTask()
      popUp.classList.add("hidden")
    }
  })
})
