const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navlinks');
const searchBtn = document.querySelector('.searchBtn');
const bookingForm = document.querySelector('.bookingForm');
const closeBtn = document.querySelector('.closeBtn');
const header = document.querySelector('header');
const navDock = document.querySelector('.navDock');
const langSelect = document.querySelector('.lang-select');
const languages = document.querySelector('.languages');


burger.addEventListener('click', ()=>{
    body.classList.toggle('scroll-disabled');
    if(searchBtn.classList.contains('expand-search')){
        searchBtn.classList.toggle('expand-search');
        burger.classList.toggle('toggle');
        bookingForm.classList.remove('showBookingForm');
        return;
    }
    burger.classList.toggle('toggle');
    navLinks.classList.toggle('showNav');
    header.classList.toggle('open-header');
    navDock.classList.toggle('show-navDock');
})

searchBtn.addEventListener('click', ()=>{
    if(searchBtn.classList.contains('expand-search')){
        return;
    }
    body.classList.toggle('scroll-disabled');
    searchBtn.classList.toggle('expand-search');
    burger.classList.toggle('toggle');
    bookingForm.classList.toggle('showBookingForm');
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})
 
langSelect.addEventListener('click', ()=>{
    languages.classList.toggle('display-languages');
})