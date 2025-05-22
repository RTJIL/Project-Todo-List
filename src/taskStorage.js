// taskStorage.js
let inboxTasks = JSON.parse(localStorage.getItem("inboxTasks")) || []

function getInboxTasks() {
  return inboxTasks
}

function addTask(task) {
  inboxTasks.push(task)
  localStorage.setItem("inboxTasks", JSON.stringify(inboxTasks))
}

function updateTask(index, updatedTask) {
  inboxTasks[index] = updatedTask
  localStorage.setItem("inboxTasks", JSON.stringify(inboxTasks))
}

function removeTask(index) {
  inboxTasks.splice(index, 1)
  localStorage.setItem("inboxTasks", JSON.stringify(inboxTasks))
}

export { getInboxTasks, addTask, updateTask, removeTask }
