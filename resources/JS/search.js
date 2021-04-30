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
const avatar = document.querySelector('.avatar');
const profilePage = document.querySelector('.profile-page');
const dockLang = document.querySelector('.dock-language');
const dockUser = document.querySelector('.dock-user');
const dockSearch = document.querySelector('.dock-search');

//BURGER
burger.addEventListener('click', ()=>{
    //body.classList.toggle('scroll-disabled');
    if(header.classList.contains('open-header-profile')){
        header.classList.toggle('open-header-profile');
        setTimeout(()=>{
           profilePage.classList.add('disabled');
           burger.classList.toggle('toggle');
           navLinks.classList.remove('disabled');
           navLinks.classList.toggle('showNav');
           header.classList.toggle('open-header');
        },200);
        return;
    }
    if(searchBtn.classList.contains('expand-search')){
        searchBtn.classList.toggle('expand-search');
        burger.classList.toggle('toggle');
        bookingForm.classList.remove('showBookingForm');
        return;
    } 
    if(languages.classList.contains('display-languages')){
        header.classList.toggle('open-header');
        setTimeout(()=>{
            languages.classList.toggle('display-languages');
            burger.classList.toggle('toggle');
            header.classList.toggle('open-header');
            navLinks.classList.remove('disabled');
            navLinks.classList.toggle('showNav');
        },200)
        return;
    }
    burger.classList.toggle('toggle');
    navLinks.classList.toggle('showNav');
    navLinks.classList.remove('disabled');
    header.classList.toggle('open-header');
    navDock.classList.add('show-navDock');
    profilePage.classList.add('disabled');
})

//LANGUAGE SELECTOR
langSelect.addEventListener('click', openLanguageSelect);
dockLang.addEventListener('click', openLanguageSelect);

function openLanguageSelect () {
    if(header.classList.contains('open-header-profile')){
        header.classList.toggle('open-header-profile');
        setTimeout(()=>{
            languages.classList.toggle('display-languages');
            profilePage.classList.add('disabled');
            header.classList.toggle('open-header');
        },200);
        return;
    }
    if(searchBtn.classList.contains('expand-search')){
        searchBtn.classList.remove('expand-search');
        burger.classList.remove('toggle');
        bookingForm.classList.remove('showBookingForm');
        setTimeout(()=>{
            languages.classList.toggle('display-languages');
            profilePage.classList.add('disabled');
            header.classList.toggle('open-header');
        },200)
        return;
    }
    if(burger.classList.contains('toggle')){
        burger.classList.toggle('toggle');
        navLinks.classList.toggle('showNav');
        header.classList.toggle('open-header');
        setTimeout(()=>{
            languages.classList.toggle('display-languages');
            header.classList.toggle('open-header');
            navLinks.classList.toggle('disabled');
        },200)
        return;
    }
    if(languages.classList.contains('display-languages')){
        header.classList.toggle('open-header');
        setTimeout(()=>{
            languages.classList.toggle('display-languages');
        },200)
        return;
    }
    languages.classList.toggle('display-languages');
    header.classList.toggle('open-header');
    navLinks.classList.toggle('disabled');
    profilePage.classList.add('disabled');

}

//PROFILE PAGE
avatar.addEventListener('click', openProfile);
dockUser.addEventListener('click', openProfile);

function openProfile(){
    if(searchBtn.classList.contains('expand-search')){
        searchBtn.classList.remove('expand-search');
        burger.classList.remove('toggle');
        bookingForm.classList.remove('showBookingForm');
        setTimeout(()=>{
            profilePage.classList.remove('disabled');
            header.classList.toggle('open-header-profile');
        },200)
        return;
    }
    if(burger.classList.contains('toggle')){
        header.classList.remove('open-header');
        burger.classList.remove('toggle');
        navLinks.classList.remove('showNav');
        setTimeout(()=>{
            profilePage.classList.remove('disabled');
            header.classList.toggle('open-header-profile');
        },200)
        return;
    }
    if(languages.classList.contains('display-languages')){
        header.classList.toggle('open-header');
        setTimeout(()=>{
            languages.classList.toggle('display-languages');
            profilePage.classList.remove('disabled');
            header.classList.toggle('open-header-profile');
        },200)
        return;
    }

    profilePage.classList.remove('disabled');
    header.classList.toggle('open-header-profile');
}

//SEARCH BUTTON
searchBtn.addEventListener('click', ()=>{
    if(searchBtn.classList.contains('expand-search')){
        return;
    }
    expandSearch();
    })

const mediaQueryList = window.matchMedia("(min-width: 1050px)");

function expandSearch(){
    //close other menus if they're open
    if (mediaQueryList.matches) {
        return;
      }
    if(header.classList.contains('open-header')||header.classList.contains('open-header-profile')){
        header.classList.remove('open-header');
        header.classList.remove('open-header-profile');
        burger.classList.remove('toggle');
        navLinks.classList.remove('showNav');
        languages.classList.remove('display-languages');
        setTimeout(()=>{
            //body.classList.toggle('scroll-disabled');
            searchBtn.classList.toggle('expand-search');
            burger.classList.toggle('toggle');
            bookingForm.classList.toggle('showBookingForm');
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        },200);
        return;
    }
    if(searchBtn.classList.contains('expand-search')){
        searchBtn.classList.remove('expand-search');
        bookingForm.classList.remove('showBookingForm');
        burger.classList.remove('toggle');
        return;
    }
    //body.classList.toggle('scroll-disabled');
    searchBtn.classList.toggle('expand-search');
    burger.classList.toggle('toggle');
    bookingForm.classList.toggle('showBookingForm');
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//DOCK SEARCH BUTTON
dockSearch.addEventListener('click',()=>{
    expandSearch();
})
    //shows and hides top logo and burger, together with header/other menus
header.addEventListener('transitionrun',()=>{
    if(header.classList.contains('open-header')||header.classList.contains('open-header-profile')){
        header.classList.add('show-header');
    }else{
        header.classList.remove('show-header');
    }
})


//SCROLL ACTIVATION ----> DEBOUNCATI ILI NEKI KURAC
/*
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navDock.classList.add('show-navDock');
    } else {
        navDock.classList.remove('show-navDock');
    }
    prevScrollpos = currentScrollPos;
}
*/

//DRAGGABLE ELEMENT
      
var dragItem = document.querySelector("#item");
var container = document.querySelector("#container");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }

  if (e.target === dragItem) {
    active = true;
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  active = false;
}

function drag(e) {
  if (active) {
  
    e.preventDefault();
  
    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    } else {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(0, currentY, dragItem);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}
//DRAGGABLE ELEMENT