function addInboxContent() {
  const taskContent = document.querySelector(".taskContent")

  // Create inboxContainer
  const addInboxContainer = document.createElement("div")
  addInboxContainer.classList.add("inboxContainer")

  // Create title div
  const title = document.createElement("div")
  title.classList.add("title")
  title.textContent = "Inbox"

  // Same title to inbox 
  addInboxContainer.appendChild(title)

  taskContent.appendChild(addInboxContainer)
}

export { addInboxContent }
