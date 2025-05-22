import { inboxTasks } from "./saveTaskTo"

function addInboxContent() {
  const inboxContainer = document.querySelector(".inboxContainer")
  inboxContainer.innerHTML = ""

  // Create title div
  const title = document.createElement("div")
  title.classList.add("title")
  title.textContent = "Inbox"

  // Same title to inbox
  inboxContainer.appendChild(title)

  inboxTasks.forEach((taskData) => {
    const taskDiv = document.createElement("div")
    taskDiv.classList.add("task")

    // build out task DOM using taskData
    const description = document.createElement("div")
    description.textContent = taskData.description

    taskDiv.appendChild(description)
    inboxContainer.appendChild(taskDiv)
  })
}

export { addInboxContent }
