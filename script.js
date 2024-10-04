const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', e => {
  navLinks.classList.toggle('open');



   
  // ul holo navlink nav link click hoba and class list button bodlaba
  // contains akta class er valu off kora ar akta class ar valu ad korba
  


  const isOpen = navLinks.classList.contains('open');

  // pothoma icon ar set attribute class poriborton kora 

  menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
}); 

navLinks.addEventListener('click', e => {
  navLinks.classList.remove('open');
  menuBtnIcon.setAttribute('class', 'ri-menu-line');
});
