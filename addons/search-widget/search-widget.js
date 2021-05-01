const optionInput = document.querySelector('#option-input');
const optionList = document.querySelector('#option-list');
const body = document.querySelector('body');

//show list on widget click
optionInput.addEventListener('click',()=>{
    optionList.classList.toggle('show-block');
    setTimeout(() => {
        optionList.classList.toggle('show-transition');
    }, 50);
})


// ****** POPULATE WIDGET LIST ********
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

function searchWidget(arr){// MAIN FUNCTION, FOR EXPORT
    arr.forEach(obj => {
        populateList(obj);
    });
}
// ****** POPULATE WIDGET LIST ********





//test part

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

//select list option
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
        optionList.classList.toggle('show-transition');
        setTimeout(() => {
            optionList.classList.toggle('show-block');
        }, 200);
    })
});
//select list option