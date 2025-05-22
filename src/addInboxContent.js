// addInboxContent.js
import { inboxTasks } from "./saveTaskTo"
import { editTaskForm } from "./editTask"
import { getInboxTasks, removeTask } from "./taskStorage.js"

function addInboxContent() {
  const tasks = getInboxTasks()
  const inboxContainer = document.querySelector(".inboxContainer")
  inboxContainer.innerHTML = ""

  // Create title div
  const title = document.createElement("div")
  title.classList.add("title")
  title.textContent = "Inbox"

  // Same title to inbox
  inboxContainer.appendChild(title)

  inboxTasks.forEach(taskData => {
    const inboxContainer = document.querySelector(".inboxContainer")

  // Create task div
  const taskDiv = document.createElement("div")
  taskDiv.classList.add("task")

  // Create checkcircle with priority color
  const checkCircle = document.createElement("div")
  checkCircle.classList.add("checkCircle")

  if (taskData.priority === "low") {
    checkCircle.classList.add("greenPriority")
  } else if (taskData.priority === "medium") {
    checkCircle.classList.add("yellowPriority")
  } else if (taskData.priority === "high") {
    checkCircle.classList.add("redPriority")
  }

  checkCircle.addEventListener("click", function () {
    taskDiv.remove()
    removeTask(tasks.id)

    /* inboxTasks = inboxTasks.filter((task) => task.id !== taskData.id) // remove from array

    localStorage.setItem("inboxTasks", JSON.stringify(inboxTasks)) */
  })

  // Create task description field with Due Date
  const taskTxt = document.createElement("div")
  taskTxt.classList.add("taskTxt")

  // Create Description div inside taskTxt
  const taskDescription = document.createElement("div")
  taskDescription.classList.add("taskDescription")
  taskDescription.textContent = taskData.description

  // Add Due Date inside task description
  const dueDate = document.createElement("div")
  dueDate.classList.add("due")
  dueDate.textContent = taskData.date ? `Due: ${taskData.date}` : ""

  // Create Icons at the end of task
  const rewriteIcon = document.createElement("div")
  rewriteIcon.classList.add("rewriteIcon")
  rewriteIcon.id = "button"

  rewriteIcon.addEventListener("click", () => {
  editTaskForm(taskData, taskData.id)
})

  const deleteIcon = document.createElement("div")
  deleteIcon.classList.add("deleteIcon")
  deleteIcon.id = "button"

  deleteIcon.addEventListener("click", function () {
    taskDiv.remove()

    removeTask(tasks.id)

    /* inboxTasks = inboxTasks.filter((task) => task.id !== taskData.id) // remove from array

    localStorage.setItem("inboxTasks", JSON.stringify(inboxTasks)) */
  })

  // Appending all that stuff step by step

  // taskDescription, Due Date inside taskTxt
  taskTxt.appendChild(taskDescription)
  taskTxt.appendChild(dueDate)

  // checkCircle, taskTxt, rewriteIcon, deleteIcon inside taskDiv
  taskDiv.appendChild(checkCircle)
  taskDiv.appendChild(taskTxt)
  taskDiv.appendChild(rewriteIcon)
  taskDiv.appendChild(deleteIcon)

  // Append whole thing to inboxContainer
  inboxContainer.appendChild(taskDiv)
  })
}

export { addInboxContent }
