let hamburg = document.querySelector('.menu-icon-wrapper')
const mobileNavContainer = document.querySelector('#mobile-nav')
let hamburg2 = document.querySelector('.menu-icon')
hamburg.onclick = function() {
    hamburg2.classList.toggle('menu-icon-active')
    mobileNavContainer.classList.toggle('mobile-nav--active')
}


let menuIcon = document.querySelector('.menu-icon')
let mobileNav = document.querySelectorAll('.mobile-navigation-item')
for (nav of mobileNav) {
    nav.onclick = function() {
        mobileNavContainer.classList.remove('mobile-nav--active')
        menuIcon.classList.remove('menu-icon-active')
    }
}