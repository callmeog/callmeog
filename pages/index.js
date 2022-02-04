

window.onload = init;

function init() {

    hamburger.onclick = () => {
        var navLink = document.querySelector('.line');
        navLink.classList.toggle('hide');
    }

}