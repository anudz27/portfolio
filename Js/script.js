const sideMenu = document.querySelector('#sideMenu');

function openMenu(){
    sideMenu.style.transform = 'translatex(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform = 'translatex(16rem)';
}
