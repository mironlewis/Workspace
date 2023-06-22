let notCont = document.querySelector('.notification-container');

document.querySelector('#gmail').addEventListener('click', () => {
    notCont.style.display = 'block';
    setTimeout(() => {
        notCont.style.display = 'none';
    }, 10000);
});