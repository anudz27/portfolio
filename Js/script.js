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
    navBar.classList.add('bg-white','bg-opacity-50','shadow-sm','backdrop-blur-lg', 'dark:bg-[#11001F]','dark:shadow-white/20');
    navLinks.classList.remove('bg-white','shadow-sm',' bg-opacity-50','dark:border','dark:border-white/70','dark:transition');
}else{
    navBar.classList.remove('bg-white','bg-opacity-50','shadow-sm','backdrop-blur-lg','dark:bg-[#11001F]','dark:shadow-white/20');
}   navLinks.classList.add('bg-white','shadow-sm',' bg-opacity-50','dark:border','dark:border-white/70','dark:transition');
})


// dark mode and light mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function toggleTheme() {
    document.documentElement.classList.toggle('dark')
    if (document.documentElement.classList.contains('dark')) {
     
      localStorage.theme = 'dark'
    } else {
     
      localStorage.theme = 'light'
    }
  }
  AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation should happen only once
});

function showEducation() {
  document.getElementById('educationSection').classList.remove('hidden');
  document.getElementById('volunteeringSection').classList.add('hidden');
  document.getElementById('educationBtn').classList.add('', 'text-white');
  document.getElementById('volunteeringBtn').classList.remove('bg-blue-500', 'text-white');
}

function showVolunteering() {
  document.getElementById('educationSection').classList.add('hidden');
  document.getElementById('volunteeringSection').classList.remove('hidden');
  document.getElementById('volunteeringBtn').classList.add('', 'text-white');
  document.getElementById('educationBtn').classList.remove('bg-blue-500', 'text-white');
}