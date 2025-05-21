function addTaskToInbox(desc, date, priority) {
  const inbox = document.querySelector(".inboxContainer .tasksArea")

  if (!inbox) return console.warn("Inbox not found")

  const taskDiv = document.createElement("div")
  taskDiv.classList.add("task")

  const checkCircle = document.createElement("div")
  checkCircle.classList.add("checkCircle", priority) // dynamic priority class

  const taskTxt = document.createElement("div")
  taskTxt.classList.add("taskTxt")
  taskTxt.textContent = desc

  const dueDiv = document.createElement("div")
  dueDiv.classList.add("due")
  dueDiv.textContent = `Due: ${date}`

  taskTxt.appendChild(dueDiv)

  const editIcon = document.createElement("div")
  editIcon.classList.add("rewriteIcon")

  const deleteIcon = document.createElement("div")
  deleteIcon.classList.add("deleteIcon")

  taskDiv.appendChild(checkCircle)
  taskDiv.appendChild(taskTxt)
  taskDiv.appendChild(editIcon)
  taskDiv.appendChild(deleteIcon)

  inbox.appendChild(taskDiv)
}
