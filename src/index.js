import "./style.css"
import { addTask } from "./addTask"
import { addInboxContent } from "./addInboxContent"

const popUp = document.querySelector('.popup')
const buttons = document.querySelectorAll(".button")
const taskContent = document.querySelector(".taskContent")

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains('addTask')) {
        addTask();
        popUp.classList.add('hidden')
    } else if (btn.classList.contains('inboxSection')) {
        taskContent.innerHTML = ""
        addInboxContent()
    } else if (btn.classList.contains('finishedSection')) {
        console.log("finished")
    } else if (btn.classList.contains('mpTitle')) {
        console.log("animation")
    } else if (btn.classList.contains('addProject')) {
        console.log("Project added successfuly")
    }
  })
})