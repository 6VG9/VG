$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__list').toggleClass('active');
        $('body').toggleClass('lock');
    })
})

const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
console.log(mainElementWidth);
const VGLogo = document.querySelector('.header__title');
console.log(VGLogo);

if (mainElementWidth <= 767) {
    VGLogo.innerHTML = 'VG';
};