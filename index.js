// ACCORDIOON

document.querySelectorAll('.accordion').forEach((acc) => {
    let accordionButton = acc.querySelector('#opener-accordion-button');
    accordionButton.addEventListener('click', () => {
        acc.lastElementChild.classList.toggle('content-accordion-active');
        accordionButton.classList.toggle('opener-accordion-button-active');
    });
});

// LIST GRID

let qubeSortBtn = document.getElementById('qube-sort');
let lineSortBtn = document.getElementById('line-sort');
let blockGrid = document.querySelector('.projects-block__grid');

lineSortBtn.addEventListener('click', () => {
    lineSortBtn.classList.add('sort-btn-active');
    qubeSortBtn.classList.remove('sort-btn-active');
    if (blockGrid.classList.contains('projects-block__grid__line')) {
        blockGrid.classList.add('projects-block__grid__line');
    } else {
        blockGrid.classList.add('projects-block__grid__line');
    };
});

qubeSortBtn.addEventListener('click', () => {
    lineSortBtn.classList.remove('sort-btn-active');
    qubeSortBtn.classList.add('sort-btn-active');
    if (blockGrid.classList.contains('projects-block__grid__line')) {
        blockGrid.classList.remove('projects-block__grid__line');
    } else {
        blockGrid.classList.remove('projects-block__grid__line');
    };
});
