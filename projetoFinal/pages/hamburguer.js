const mobileMenu = document.getElementById('mobile-menu');
const navMenus = document.getElementById('nav-menus');


mobileMenu.addEventListener('click', () => {
    navMenus.classList.toggle('active');

    const icon = mobileMenu.querySelector('i');
    if (navMenus.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});