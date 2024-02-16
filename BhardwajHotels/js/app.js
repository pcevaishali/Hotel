// CLOSE THE NAV WHEN NAVLNKS ARE CLICKED (MOBILE ONLY)
let navList = document.querySelector('.nav-list');
let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function () {
        navList.style.left = '-100%';
    })
});

// TESTIMONIAL SLIDER
$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false
});

//for rooms
function press1(event) {
    let loc = window.location.origin + '/rooms.html';
    console.log('abcd',loc);
     window.open(loc, '_self');
}
//for restaurants
function press2(event) {
    let loc1 = window.location.origin + '/restaurant.html';
    console.log('abcd',loc1);
     window.open(loc1, '_self');
}