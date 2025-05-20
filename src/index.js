import "./style.css"

const buttons = document.querySelectorAll(".button")
buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains('addTask')) {
        console.log("task added")
    } else if (btn.classList.contains('inboxSection')) {
        console.log("inbox")
    } else if (btn.classList.contains('finishedSection')) {
        console.log("finished")
    } else if (btn.classList.contains('mpTitle')) {
        console.log("animation")
    } else if (btn.classList.contains('addProject')) {
        console.log("Project added successfuly")
    }
  })
})