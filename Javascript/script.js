console.log('test134');

const rijksData = 'https://www.rijksmuseum.nl/api/nl/collection?key=xvdOJegg&ps=10imgonly=true';
const feedback = document.getElementById('feedback-melding');
feedback.textContent = 'De content is aan het laden, even geduld!';
const errorMelding = document.getElementById('error-melding');
errorMelding.textContent = '';



//Met deze functie wordt de data van de rijksmuseum API opgehaald
getDataRijks();

function getDataRijks() {
    fetch(rijksData)
    .then(function(response){
        return response.json();
    }).then(function(collection){
        getAditionalData(collection)
    })
    .catch((error)=> {
        console.log('error');
        errorMelding.textContent = 'Kan informatie niet ophalen. Probeer nogmaals';
        feedback.textContent = '';
    });
};


function getAditionalData(collection) {
    for(let i=0; i < collection.artObjects.length; i++) {
        fetch('https://www.rijksmuseum.nl/api/nl/collection/' +
        collection.artObjects[i].objectNumber + '?key=xvdOJegg&ps=10imgonly=true')
        .then(function(response){
            return response.json();
        }).then(function(detailed){
            renderData(detailed)
        })
        .catch((error)=> {
            console.log('error');
        });
    }
};

function renderData(detailed) {
    console.log(detailed)
        const list = $('main');
        list.insertAdjacentHTML('beforeend',
        `
        <ul>
        <li>
        <h2>${detailed.artObject.longTitle}</h2>
        <p>${detailed.artObject.titles}</p>
        <img src="${detailed.artObject.webImage.url}" alt="${detailed.artObject.title}">
        </ul>
        `
        )
        feedback.textContent='';{
        }
    }


    function $(element) {
        return document.querySelector(element);
    }
    