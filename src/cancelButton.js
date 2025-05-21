function cancelAddTask() {
  const cancelButton = document.querySelector("#cancel")
  const popUp = document.querySelector(".popup")
  const form = popUp.querySelector("form");

  if (cancelButton && form) {
    cancelButton.addEventListener("click", () => {
      popUp.classList.remove("hidden");
      if(form) {
        form.remove();
      }
    });
  }
}

export { cancelAddTask }