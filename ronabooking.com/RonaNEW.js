const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navLinks');
const searchBtn = document.querySelector('.searchBtn');
const bookingForm = document.querySelector('.bookingForm');
const closeBtn = document.querySelector('.closeBtn');



burger.addEventListener('click', ()=>{
    if(bookingForm.classList.contains('showBookingForm')){
        bookingForm.classList.toggle('showBookingForm');
        burger.classList.toggle('toggle');
        return;
    }
    burger.classList.toggle('toggle');
    navLinks.classList.toggle('showNav');
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
 
/* OBSOLETE, INCORPORATED TO ONE OPEN/CLOSE BUTTON
closeBtn.addEventListener('click', ()=>{
    closeBtn.classList.toggle('cross');
    setTimeout(()=>{
        bookingForm.classList.toggle('showBookingForm');
    },200)
    
})
*/