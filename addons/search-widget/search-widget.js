const optionInput = document.querySelector('#option-input');
const optionList = document.querySelector('#option-list');
const body = document.querySelector('body');
const clear = document.querySelector('.clear');

function showHideList(){
//show list on widget click
optionInput.addEventListener('click',()=>{
    optionList.classList.toggle('show-block');
    setTimeout(() => {
        optionList.classList.toggle('show-transition');
    }, 50);
})

// hide list if clicked outside
window.addEventListener('mouseup',(e)=>{
    if(!optionList.contains(e.target)){
        optionList.classList.remove('show-block');
        return;
    }else 
    optionList.classList.add('show-block');
    setTimeout(() => {
        optionList.classList.toggle('show-transition');
    }, 50);
})
// hide list if clicked outside

// clear list
clear.addEventListener('mouseup',()=>{
    optionInput.innerHTML = 'Where to go?';
    clear.classList.remove('show-transition');
    clear.classList.remove('show-block');
})
// clear list
}
showHideList();

//populate widget list
function populateList(obj){
    type = obj.type;
    title = obj.title;
    subtitle = obj.subtitle;
    
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
    x.className = 'item';
    x.dataset.original = title;
    x.dataset.type = type;
    x.innerHTML=(`<div class="type-img">`+`${typeImg}`+`</div>
    <div class="info"><div class="title">`+`${title}`+`</div><div class="subtitle">`+` ${subtitle}`)
    optionList.appendChild(x);
}
//populate widget list

// MAIN FUNCTION, FOR EXPORT
function searchWidget(arr){
    arr.forEach(obj => {
        populateList(obj);
    });
}
// MAIN FUNCTION, FOR EXPORT


//test part
/*
let arr1 = [
    {
    "type": "House",
    "title": "Kvarner",
    "subtitle": "Kvarner, Opatija, Opatija"
    },
    {
    "type": "place",
    "title": "Kvarner",
    "subtitle": "Kvarner, Opatija , Matulji"
    },
    {
    "type": "Villa",
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
   */
//test part

//select list option
function selectItem(){
const item = document.querySelectorAll('.item');
item.forEach(element => {
    element.addEventListener('click',()=>{
        let text = element.dataset.original;
        optionInput.dataset.type = element.dataset.type;
        switch (optionInput.dataset.type){
            case 'Place':
                typeImg2 = '<img src="./SVG/place.svg" alt=""></img>';
                break;
            case 'House':
                typeImg2 = '<img src="./SVG/house.svg" alt=""></img>';
                break;
            case 'Apartment':
                typeImg2 = '<img src="./SVG/apartment.svg" alt=""></img>';
                break;
            case 'Villa':
                typeImg2 = '<img src="./SVG/villa.svg" alt=""></img>';
                break;
            default:
                typeImg2 = '<img src="./SVG/place.svg" alt=""></img>';
        }
        optionInput.innerHTML = (`${typeImg2}`+`${text}`);
        clear.classList.add('show-transition');
        clear.classList.add('show-block');
    })
});
}
selectItem();
//select list option