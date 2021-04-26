const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navlinks');
const searchBtn = document.querySelector('.searchBtn');
const bookingForm = document.querySelector('.bookingForm');
const closeBtn = document.querySelector('.closeBtn');
const header = document.querySelector('header');
const navDock = document.querySelector('.navDock');



burger.addEventListener('click', ()=>{
    if(bookingForm.classList.contains('showBookingForm')){
        bookingForm.classList.toggle('showBookingForm');
        burger.classList.toggle('toggle');
        return;
    }
    burger.classList.toggle('toggle');
    navLinks.classList.toggle('showNav');
    header.classList.toggle('open-header');
    navDock.classList.toggle('show-navDock');
})

searchBtn.addEventListener('click', ()=>{
    bookingForm.classList.toggle('showBookingForm');
    setTimeout(()=>{
        closeBtn.classList.toggle('cross');
    },200)
    if(bookingForm.classList.contains('showBookingForm')){
        burger.classList.toggle('toggle');
    }
})
 