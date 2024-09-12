const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('#navBar');
const navLinks = document.querySelector('#navlinks');

function openMenu(){
    sideMenu.style.transform = 'translatex(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform = 'translatex(16rem)';
}
window.addEventListener('scroll', ()=>{
if(scrollY > 50){
    navBar.classList.add('bg-white','bg-opacity-50','shadow-sm','backdrop-blur-lg');
    navLinks.classList.remove('bg-white','shadow-sm',' bg-opacity-50');
}else{
    navBar.classList.remove('bg-white','bg-opacity-50','shadow-sm','backdrop-blur-lg');
}
})
