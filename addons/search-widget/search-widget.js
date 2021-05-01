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
    /*
    let typeImg;

    switch (type){
        case place:
            typeImg = '<img src="./SVG/place_black_24dp.svg" alt=""></img>';
            break;
        default:
            typeImg = '<img src="./SVG/place_black_24dp.svg" alt=""></img>';
    }
*/
    //create element and append to list
    let x = document.createElement("LI");
    x.innerHTML=(`<div class="type-img"></div>
    <div class="info"><div class="title">`+`${title}`+`</div><div class="subtitle">`+` ${subtitle}`)
    optionList.appendChild(x);
}
// ****** POPULATE WIDGET LIST ********




//test part
var data = {"type": "Apartment", "title": "Opatija","subtitle": "Croatia"};
var randomplace = {"type": "House", "title": "Rijeka","subtitle": "Croatia"};
var randomplace2 = {"type": "Flat", "title": "Gerovo","subtitle": "Croatia"};
var randomplace3 = {"type": "Melania", "title": "Gerovo","subtitle": "Croatia"};
var randomplace4 = {"type": "Boskarin", "title": "Buzet","subtitle": "Croatia"};

populateList(data);
populateList(randomplace);
populateList(randomplace2);
populateList(randomplace3);
populateList(randomplace4);

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

    arr1.forEach(obj => {
        populateList(obj);
    });