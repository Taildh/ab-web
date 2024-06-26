$(document).ready(function () {
    // $('.scroll-link').click(function(e){
    //     e.preventDefault();
    //     var target = $(this).data('target');
    //     $('html, body').animate({
    //         scrollTop: $('#' + target).offset().top
    //     }, 500);
    // });

})

function scrollToCenter(id) {
    const element = document.getElementById(id);
    const elementRect = element.getBoundingClientRect();
    const elementHeight = elementRect.height;
    const viewportHeight = window.innerHeight;
    const offset = elementRect.top + window.pageYOffset - ((viewportHeight / 2) - (elementHeight / 2));
    console.log(offset);
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
}

// function toggleMenu () {
//     $(".nav").toggleClass("nav-active");
// }

const navSlide = () => {
    const toggleMenu = document.querySelector(".toggle-menu");
    const nav = document.querySelector('.nav');

    toggleMenu.addEventListener('click', function () {
        nav.classList.toggle("nav-active");

        toggleMenu.classList.toggle('close-toggle-menu');
    })
}

navSlide();


