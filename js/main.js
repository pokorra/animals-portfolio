const grid = document.querySelectorAll(".grid-activity");
const gridContainer = document.querySelector(".grid");

function toggleExpand() {
  const txtContainer = this.children[0];
  const descContainer = txtContainer.children[1];
  if (this.classList.contains("grid-activity-expanded")) {
    closeLeftOvers();
    descContainer.classList.remove("unhide");
  } else {
    closeLeftOvers();
    this.classList.add("grid-activity-expanded");
    descContainer.classList.add("unhide");
  }

  function closeLeftOvers() {
    grid.forEach((gridCard) => {
      gridCard.classList.remove("grid-activity-expanded");
      const tContainer = gridCard.children[0];
      const dContainer = tContainer.children[1];
      dContainer.classList.remove("unhide");
    });
  }
}

animateCSSGrid.wrapGrid(gridContainer, { duration: 500, stagger: 50 });

grid.forEach((gridCard) => gridCard.addEventListener("click", toggleExpand));
