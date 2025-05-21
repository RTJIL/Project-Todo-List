function addInboxContent() {
  const taskContent = document.querySelector(".taskContent")

  // Create inboxContainer
  const addInboxContainer = document.createElement("div")
  addInboxContainer.classList.add("inboxContainer")

  // Create title div
  const title = document.createElement("div")
  title.classList.add("title")
  title.textContent = "Inbox"

  // Create plus div
  const plus = document.createElement("div")
  plus.classList.add("plus")

  // Create horizontal bar
  const pBarHorizontal = document.createElement("div")
  pBarHorizontal.classList.add("pBar", "pHorizontal")

  // Create vertical bar
  const pBarVertical = document.createElement("div")
  pBarVertical.classList.add("pBar", "pVertical")

  // Nest bars to plus
  plus.appendChild(pBarHorizontal)
  plus.appendChild(pBarVertical)

  // Append plus to title
  title.appendChild(plus)

  // Same title to inbox 
  addInboxContainer.appendChild(title)

  taskContent.appendChild(addInboxContainer)
}

export { addInboxContent }
