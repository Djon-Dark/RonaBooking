import {testObject} from './testObject.js';
const optionInput = document.querySelector('#option-input');
const optionList = document.querySelector('#option-list');
const body = document.querySelector('body');
const clear = document.querySelector('.clear');
const typeIcon = document.querySelector('.type-icon');


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
        optionInput.value= '';
        typeIcon.innerHTML='<img src="./SVG/search.svg" alt=""></img>';
        clear.classList.remove('show-transition');
        clear.classList.remove('show-block');
        delete optionInput.dataset.id;
        delete optionInput.dataset.title;
        delete optionInput.dataset.type;
        delete optionInput.dataset.destination;
    })
    // clear list
}
showHideList();

// MAIN FUNCTION, FOR EXPORT
function searchWidget(arr){
    arr.forEach(obj => {
    let type = obj.type;
    let title = obj.title;
    let subtitle = obj.subtitle;
    let typeImg;
    
    switch (type.toLowerCase()){//sets picture type
        case 'place':
            typeImg = '<img src="./SVG/place.svg" alt=""></img>';
            break;
        case 'house':
            typeImg = '<img src="./SVG/house.svg" alt=""></img>';
            break;
        case 'apartment':
            typeImg = '<img src="./SVG/apartment.svg" alt=""></img>';
            break;
        case 'villa':
            typeImg = '<img src="./SVG/villa.svg" alt=""></img>';
            break;
        default:
            typeImg = '<img src="./SVG/place.svg" alt=""></img>';
    }
    //create element and append to list
    let x = document.createElement("LI");
    x.className = 'item';
    //add dataset to list item
    x.dataset.id = obj.id;
    x.dataset.title = title;
    x.dataset.type = type;
    x.dataset.destination = obj.terms.destination;
    //add dataset to list item
    x.innerHTML=(`<div class="type-img">`+`${typeImg}`+`</div>
    <div class="info"><div class="title">`+`${title}`+`</div><div class="subtitle">`+` ${subtitle}`)
    optionList.appendChild(x);
    });
    
    const item = document.querySelectorAll('.item');
    item.forEach(element => {
    element.addEventListener('click',()=>{
        //add datasets to selected option in widget
        //datasets have to be defined - line 62
        optionInput.dataset.id = element.dataset.id;
        optionInput.dataset.title = element.dataset.title;
        optionInput.dataset.type = element.dataset.type;
        optionInput.dataset.destination = element.dataset.destination;
        //add datasets to selected option in widget
        let typeImg2;
        switch (optionInput.dataset.type.toLowerCase()){
            case 'place':
                typeImg2 = '<img src="./SVG/place.svg" alt=""></img>';
                break;
            case 'house':
                typeImg2 = '<img src="./SVG/house.svg" alt=""></img>';
                break;
            case 'apartment':
                typeImg2 = '<img src="./SVG/apartment.svg" alt=""></img>';
                break;
            case 'villa':
                typeImg2 = '<img src="./SVG/villa.svg" alt=""></img>';
                break;
            default:
                typeImg2 = '<img src="./SVG/place.svg" alt=""></img>';
        }
        //display selected option in widget
        //optionInput.innerHTML = (`${typeImg2}`+`${element.dataset.title}`);
        
        typeIcon.innerHTML = typeImg2;
        optionInput.value = element.dataset.title;
        clear.classList.add('show-transition');
        clear.classList.add('show-block');
        //display selected option in widget
    })
});
}
searchWidget(testObject);
// MAIN FUNCTION, FOR EXPORT 