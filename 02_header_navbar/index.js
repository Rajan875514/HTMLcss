let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

// Close the navbar when a link is clicked (optional enhancement)
document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    }
});
