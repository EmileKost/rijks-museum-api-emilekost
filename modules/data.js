
import{renderData} from "../modules/render.js";

export const rijksData = 'https://www.rijksmuseum.nl/api/nl/collection?key=xvdOJegg';

//Dit zijn de functies om de data van de API op te halen.


export const errorMelding = document.getElementById('error-melding');
errorMelding.textContent = '';

export function getDataRijks() {
    console.log(rijksData)
    fetch(rijksData)
    .then(function(response){
        return response.json();
    }).then(function(collection){
        getAditionalData(collection)
        console.log(collection.artObjects)
    })
    .catch((error)=> {
        console.log(error);
        errorMelding.textContent = 'Kan informatie niet ophalen. Probeer nogmaals';
        feedback.textContent = '';
    });
};

export function getAditionalData(collection) {
    for(let i=0; i < collection.artObjects.length; i++) {
        fetch('https://www.rijksmuseum.nl/api/nl/collection/' +
        collection.artObjects[i].objectNumber + '?key=xvdOJegg&ps=10imgonly=true')
        .then(function(response){
            return response.json();
        }).then(function(detailed){
            renderData(detailed)
        })
        .catch((error)=> {
            console.log(error);
        });
    }
};

