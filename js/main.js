const grid = document.querySelectorAll('.grid-activity');
const gridContainer = document.querySelector('.grid');

function toggleExpand(){
    this.classList.toggle('grid-activity-expanded');
    const txtContainer = this.children[0];
    const descContainer = txtContainer.children[1];
    descContainer.classList.toggle('unhide');
}

animateCSSGrid.wrapGrid(gridContainer, {duration: 500, stagger: 50});

grid.forEach(gridCard => gridCard.addEventListener('click', toggleExpand));