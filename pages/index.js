

window.onload = init;

function init() {

    var hamburgerLine = document.querySelector('.hamburger');
    hamburgerLine.onclick = () => {
        var navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('hide');
    }

}