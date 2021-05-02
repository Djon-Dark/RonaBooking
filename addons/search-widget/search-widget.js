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
    delete optionInput.dataset.id;
    delete optionInput.dataset.title;
    delete optionInput.dataset.type;
    delete optionInput.dataset.destination;
})
// clear list
}
showHideList();

//populate widget list
function populateList(obj){
    type = obj.type;
    title = obj.title;
    subtitle = obj.subtitle;
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
let testObject = [
    {
        "id": 7370,
        "type": "house",
        "title": "Islands",
        "subtitle": "Islands, Cres, Istria, Cres",
        "terms": {
        "destination": "Islands",
        "area": "Cres",
        "sub_area": "Istria",
        "place": "Cres",
        "settlment": "ZBIŠINA",
        "settlement_id": 7370
        }
        },
        {
        "id": 19200,
        "type": "place",
        "title": "Istria",
        "subtitle": "Istria, Istra, Poreč (Parenzo)",
        "terms": {
        "destination": "Istria",
        "area": null,
        "sub_area": "Istra",
        "place": "Poreč (Parenzo)",
        "settlment": "BABIĆI",
        "settlement_id": 19200
        }
        },
        {
        "id": 19201,
        "type": "villa",
        "title": "Istria",
        "subtitle": "Istria, Istra, Poreč (Parenzo)",
        "terms": {
        "destination": "Istria",
        "area": null,
        "sub_area": "Istra",
        "place": "Poreč (Parenzo)",
        "settlment": "BRNOBIĆI",
        "settlement_id": 19201
        }
        },
        {
        "id": 21505,
        "type": "apartment",
        "title": "Istria",
        "subtitle": "Istria, Istra, ROVINJ",
        "terms": {
        "destination": "Istria",
        "area": null,
        "sub_area": "Istra",
        "place": "ROVINJ",
        "settlment": "ROVINJ",
        "settlement_id": 21505
        }
        },
        {
        "id": 19202,
        "type": "place",
        "title": "Istria",
        "subtitle": "Istria, Istra, Poreč (Parenzo)",
        "terms": {
        "destination": "Istria",
        "area": null,
        "sub_area": "Istra",
        "place": "Poreč (Parenzo)",
        "settlment": "CERJANI",
        "settlement_id": 19202
        }
        },
        {
        "id": 21506,
        "type": "place",
        "title": "Istria",
        "subtitle": "Istria, Istra, Poreč (Parenzo)",
        "terms": {
        "destination": "Istria",
        "area": null,
        "sub_area": "Istra",
        "place": "Poreč (Parenzo)",
        "settlment": "FUNTANA",
        "settlement_id": 21506
        }
        },
        {
        "id": 7171,
        "type": "place",
        "title": "Istria",
        "subtitle": "Istria, West coast, Istra, Buje (Buie)",
        "terms": {
        "destination": "Istria",
        "area": "West coast",
        "sub_area": "Istra",
        "place": "Buje (Buie)",
        "settlment": "BAREDINE",
        "settlement_id": 7171
        }
        },
        {
        "id": 19203,
        "type": "place",
        "title": "Istria",
        "subtitle": "Istria, Istra, Poreč (Parenzo)",
        "terms": {
        "destination": "Istria",
        "area": null,
        "sub_area": "Istra",
        "place": "Poreč (Parenzo)",
        "settlment": "DEKLIĆI",
        "settlement_id": 19203
        }
        },
        {
        "id": 21507,
        "type": "place",
        "title": "Istria",
        "subtitle": "Istria, Istra, Poreč (Parenzo)",
        "terms": {
        "destination": "Istria",
        "area": null,
        "sub_area": "Istra",
        "place": "Poreč (Parenzo)",
        "settlment": "SVETI LOVREČ PAZENATIČKI",
        "settlement_id": 21507
        }
        }
]
searchWidget(testObject);
//test part

//select list item and display in widget
function selectItem(){
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
        optionInput.innerHTML = (`${typeImg2}`+`${element.dataset.title}`);
        clear.classList.add('show-transition');
        clear.classList.add('show-block');
        //display selected option in widget
    })
});
}
selectItem();
//select list item and display in widget



/*
// NEED TO ADD PROMISE
function readFile() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        res = xhttp.responseText;
        //console.log(res);
      }
    };
    xhttp.open("GET", "testObject.txt", false);//fals is for sync, true for async
    xhttp.send();
  }
  readFile();
//


  getJSON = function(url,data){
    return new Promise(function(resolve,reject)
      {
        var req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.onreadystatechange = function () {
          if (req.readyState == 4) {
            if(req.status == 200)
              resolve(JSON.parse(req.responseText));
            else
              reject(Error(req.statusText));
          }
        };
        req.onerror = function() {
          reject(Error("network error"));
        };
        req.send(data);
      });
  };
  
  let result = getJSON('testObject.txt');
  optionInput.innerHTML = result;



  */



 