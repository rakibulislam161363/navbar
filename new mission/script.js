const iconbar = document.querySelector('.icon');
const icon = iconbar.querySelector('i');

const list = document.querySelector('.link_container');

iconbar.addEventListener('click', e => {
  // toggle mana bodlano class er satha
  list.classList.toggle('open');

  const isopen = list.classList.contains('open');
  icon.setAttribute('class', isopen ? 'ri-close-line' : 'ri-menu-line');
});

list.addEventListener('click', e => {
  list.classList.remove('open');
  icon.setAttribute('class', 'ri-menu-line');
});

ScrollReveal().reveal('.reveal', {
  delay: 1000,
  distance: '50px',
  origin: 'right',
});

ScrollReveal().reveal();
