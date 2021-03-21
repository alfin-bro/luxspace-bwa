const menuToggler = document.getElementById('menu-toggler');
menuToggler.addEventListener('click', function () {
    const nav = document.getElementById('menu');
    nav.classList.toggle('show')
})