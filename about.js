const menuList = document.querySelector('.menu-sec');
const menuIcon = document.querySelector('.menu');

menuIcon.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu')) {
    menuList.style.display = 'flex';
    menuIcon.style.display = 'none';
  }
});

menuList.addEventListener('click', (e) => {
  const clicked = e.target.classList.contains('links');
  if (clicked) {
    menuList.style.display = 'none';
    menuIcon.style.display = 'flex';
  }
});
