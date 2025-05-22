// editTask.js
import { addInboxContent } from "./addInboxContent"
import { inboxTasks } from "./saveTaskTo"
import { cancelAddTask } from "./cancelAddTask"

function editTaskForm(taskData, taskId) {
  const container = document.querySelector(".popup")
  container.innerHTML = "" // Clear any existing form
  container.classList.add("hidden")

  const editForm = document.createElement("form")
  editForm.setAttribute("action", "#")

  function createFormRow(labelText, inputElement) {
    const div = document.createElement("div")
    div.classList.add("formRow")

    const label = document.createElement("label")
    label.textContent = labelText
    label.setAttribute("for", inputElement.id)

    div.appendChild(label)
    div.appendChild(inputElement)

    return div
  }

  // Description
  const descriptionInput = document.createElement("input")
  descriptionInput.type = "text"
  descriptionInput.id = "description"
  descriptionInput.required = true
  descriptionInput.classList.add("data", "description")
  descriptionInput.setAttribute("autocomplete", "off")
  descriptionInput.value = taskData.description

  const descriptionRow = createFormRow("Description", descriptionInput)

  // Due Date
  const dueDateInput = document.createElement("input")
  dueDateInput.type = "date"
  dueDateInput.id = "date"
  dueDateInput.classList.add("data", "date")
  dueDateInput.value = taskData.date

  const dueDateRow = createFormRow("Due Date", dueDateInput)

  // Priority
  const prioritySelect = document.createElement("select")
  prioritySelect.id = "priority"
  prioritySelect.classList.add("data", "priority")

  const priorityOptions = [
    { value: "low", text: "Low" },
    { value: "medium", text: "Medium" },
    { value: "high", text: "High" },
  ]

  priorityOptions.forEach((optData) => {
    const option = document.createElement("option")
    option.value = optData.value
    option.textContent = optData.text
    if (taskData.priority === optData.value) option.selected = true
    prioritySelect.appendChild(option)
  })

  const priorityRow = createFormRow("Priority", prioritySelect)

  // Buttons
  const buttonDiv = document.createElement("div")
  buttonDiv.classList.add("form-buttons")

  const submitBtn = document.createElement("button")
  submitBtn.type = "submit"
  submitBtn.textContent = "Save"

  const cancelBtn = document.createElement("button")
  cancelBtn.type = "button"
  cancelBtn.id = "cancel"
  cancelBtn.textContent = "Cancel"

  buttonDiv.appendChild(submitBtn)
  buttonDiv.appendChild(cancelBtn)

  // Add to Form
  editForm.appendChild(descriptionRow)
  editForm.appendChild(dueDateRow)
  editForm.appendChild(priorityRow)
  editForm.appendChild(buttonDiv)

  container.appendChild(editForm)

  // Cancel button logic
  cancelAddTask();

  // Submit and update task logic
  editForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const updatedTask = {
      ...taskData,
      description: descriptionInput.value,
      date: dueDateInput.value,
      priority: prioritySelect.value,
    }

    // Update task in array (assuming inboxTasks is accessible)
    const taskIndex = inboxTasks.findIndex((task) => task.id === taskId)
    if (taskIndex !== -1) {
      inboxTasks[taskIndex] = updatedTask
      localStorage.setItem("inboxTasks", JSON.stringify(inboxTasks))
    }

    container.innerHTML = ""
    container.classList.remove("hidden")
    document.querySelector(".popup").innerHTML = ""
    addInboxContent()
  })
}

export { editTaskForm }