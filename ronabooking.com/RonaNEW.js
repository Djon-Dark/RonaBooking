const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navLinks');
const searchBtn = document.querySelector('.searchBtn');
const bookingForm = document.querySelector('.bookingForm');
const closeBtn = document.querySelector('.closeBtn');

burger.addEventListener('click', ()=>{
    burger.classList.toggle('toggle');
    navLinks.classList.toggle('showNav');
})

searchBtn.addEventListener('click', ()=>{
    bookingForm.classList.toggle('showBookingForm');
    setTimeout(()=>{
        closeBtn.classList.toggle('cross');
    },200)
    
})
 
closeBtn.addEventListener('click', ()=>{
    closeBtn.classList.toggle('cross');
    setTimeout(()=>{
        bookingForm.classList.toggle('showBookingForm');
    },200)
    
})