function getInboxTasks() {
  const storedTasks = localStorage.getItem("inboxTasks")
  return storedTasks ? JSON.parse(storedTasks) : []
}

export { getInboxTasks }