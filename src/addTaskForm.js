import { cancelAddTask } from "./cancelAddTask"
import { saveTaskTo } from "./saveTaskTo"

function addTaskForm() {
  const container = document.querySelector(".popup")

  const addForm = document.createElement("form")
  addForm.setAttribute("action", "#")

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

  const descriptionRow = createFormRow("Description", descriptionInput)

  // Due date
  const dueDateInput = document.createElement("input")
  dueDateInput.type = "date"
  dueDateInput.id = "date"
  dueDateInput.classList.add("data", "date")

  const dueDateRow = createFormRow("Due Date", dueDateInput)

  // Priority
  const prioritySelect = document.createElement("select")
  prioritySelect.id = "priority"
  prioritySelect.classList.add("data", "priority")

  // Remember to use objects when creating selects
  const priorityOptions = [
    {
      value: "",
      text: "-- Select Priority --",
      disabled: true,
      selected: true,
      hidden: true, // 🧼 hides it from dropdown after selection
    },
    { value: "low", text: "Low" },
    { value: "medium", text: "Medium" },
    { value: "high", text: "High" },
  ]

  priorityOptions.forEach((optData) => {
    const option = document.createElement("option")
    option.value = optData.value
    option.textContent = optData.text

    if (optData.disabled) option.disabled = true
    if (optData.selected) option.selected = true
    if (optData.hidden) option.hidden = true

    prioritySelect.appendChild(option)
  })

  const priorityRow = createFormRow("Priority", prioritySelect)

  // Projects
  const projectSelect = document.createElement("select")
  projectSelect.id = "project"
  projectSelect.classList.add("data", "project")

  const projectOptions = [
    { value: "inbox", text: "-- Select Project --", disabled: true, selected: true },
    { value: "inbox", text: "Inbox" },
  ]

  projectOptions.forEach((optData) => {
    const option = document.createElement("option")
    option.value = optData.value
    option.textContent = optData.text
    if (optData.disabled) option.disabled = true
    if (optData.selected) option.selected = true
    projectSelect.appendChild(option)
  })

  const projectRow = createFormRow("Project", projectSelect)

  // Buttons
  const buttonDiv = document.createElement("div")
  buttonDiv.classList.add("form-buttons")

  const resetBtn = document.createElement("button")
  resetBtn.type = "reset"
  resetBtn.textContent = "Reset"

  const submitBtn = document.createElement("button")
  submitBtn.type = "submit"
  submitBtn.textContent = "Add"

  const cancelBtn = document.createElement("button")
  cancelBtn.type = "button"
  cancelBtn.id = "cancel"
  cancelBtn.textContent = "Cancel"

  buttonDiv.appendChild(resetBtn)
  buttonDiv.appendChild(submitBtn)
  buttonDiv.appendChild(cancelBtn)

  // Add to Form

  addForm.appendChild(descriptionRow)
  addForm.appendChild(dueDateRow)
  addForm.appendChild(priorityRow)
  addForm.appendChild(projectRow)
  addForm.appendChild(buttonDiv)

  container.appendChild(addForm)

  cancelAddTask()

  
addForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const taskData = {
    description: descriptionInput.value,
    date: dueDateInput.value,
    priority: prioritySelect.value ? prioritySelect.value : "low",
    project: projectSelect.value ? descriptionInput.value : "Inbox",
  }

  saveTaskTo(taskData)

  addForm.reset()
  container.innerHTML = ''
  container.classList.remove("hidden")
})
}

// export to index.js
export { addTaskForm }
