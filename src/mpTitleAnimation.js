const listIcon = document.querySelector(".listIcon");
const projectsSection = document.querySelector(".projects");

function mpTitleAnimationGrow(section, icon) {
  section.style.maxHeight = section.scrollHeight + "px";
  section.style.opacity = "1";
  if (icon) icon.classList.add("rotated");
}

function mpTitleAnimationShrink(section, icon) {
  section.style.maxHeight = "0px";
  section.style.opacity = "0";
  if (icon) icon.classList.remove("rotated");
}

export { mpTitleAnimationGrow, mpTitleAnimationShrink }