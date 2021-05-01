const optionInput = document.querySelector('#option-input');
const optionList = document.querySelector('#option-list');
const body = document.querySelector('body');

//show list when clicked on widget
optionInput.addEventListener('click',()=>{
    optionList.classList.toggle('show-block');
    setTimeout(() => {
        optionList.classList.toggle('show-transition');
    }, 100);
})



// ****** POPULATE WIDGET LIST ********
function populateList(obj){
    let type = obj.type;
    let title = obj.title;
    let subtitle = obj.subtitle;
    
    let typeImg;

    switch (type){
        case 'Place':
            typeImg = '<img src="./SVG/place.svg" alt=""></img>';
            break;
        case 'House':
            typeImg = '<img src="./SVG/house.svg" alt=""></img>';
            break;
        case 'Apartment':
            typeImg = '<img src="./SVG/apartment.svg" alt=""></img>';
            break;
        case 'Villa':
            typeImg = '<img src="./SVG/villa.svg" alt=""></img>';
            break;
        default:
            typeImg = '<img src="./SVG/place.svg" alt=""></img>';
    }

    //create element and append to list
    let x = document.createElement("LI");
    x.innerHTML=(`<div class="type-img">`+`${typeImg}`+`</div>
    <div class="info"><div class="title">`+`${title}`+`</div><div class="subtitle">`+` ${subtitle}`)
    optionList.appendChild(x);
}

function searchWidget(arr){
    arr.forEach(obj => {
        populateList(obj);
    });
}
// ****** POPULATE WIDGET LIST ********




//test part

let arr1 = [
    {
    "type": "place",
    "title": "Kvarner",
    "subtitle": "Kvarner, Opatija, Opatija"
    },
    {
    "type": "place",
    "title": "Kvarner",
    "subtitle": "Kvarner, Opatija , Matulji"
    },
    {
    "type": "place",
    "title": "Kvarner",
    "subtitle": "Kvarner, Opatija, Lovran"
    },
    {
    "type": "place",
    "title": "Kvarner",
    "subtitle": "Kvarner, Opatija, Mošćenička Draga"
    },
    {
    "type": "place",
    "title": "Zagreb surrounding",
    "subtitle": "Zagreb surrounding, Central Croatia, Pokupsko "
    }
    ]



    searchWidget(arr1);
