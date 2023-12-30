let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navlist.classList.toggle('open');
};
const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.box', { delay: 200, origin: 'top' });
sr.reveal('.content', { delay: 200, origin: 'top' });
sr.reveal('.about-text', { delay: 200, origin: 'top' });
sr.reveal('.social', { delay: 200, origin: 'top' });
