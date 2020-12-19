const grid = document.querySelectorAll('.grid-activity');
const gridContainer = document.querySelector('.grid');

function toggleExpand(){
    this.classList.toggle('grid-activity-expanded');
}

animateCSSGrid.wrapGrid(gridContainer, {duration: 600});

grid.forEach(gridCard => gridCard.addEventListener('click', toggleExpand));