
# Rijksmuseum Artwork finder 

## User story
"As an art lover, I want to be able to search and view art from the Rijksmuseum at home, so that I can still enjoy art during a lockdown"

## Mijn concept
Mijn concept is een singlepage webapp waarin gebruikers tien verschillende kunstwerken random krijgen getoond. Gebruikers kunnen doormiddel van een zoek functie gemakkelijk zoeken naar elk soort kunstwerk dat in het Rijksmuseum te vinden is. Het zou voor de gebruiker ook mogelijk moeten zijn om de detailspagina te bezoeken, dit is qua tijd helaas niet gelukt. De app is gebouwd met HTML, CSS en Javascript. 

## Rijks Data API
Met Rijks Data API kan je vrijwel alle kunstwerken van het Rijksmuseum ophalen in een JSON formaat. Voordat je kunt beginnen met het ophalen van data moet je eerst een Rijksstudio account aanmaken. Als je dit gedaan hebt moet je met dit account een key aanvragen zodat je toegang hebt tot de data van de API. Alle data van de Rijks Data API is gratis en bij het regristreren van een account vrij te gebruiken. 
De API heeft drie verschillende API's:

* Collection API
 <img width="774" alt="Schermafbeelding 2022-05-19 om 10 11 58" src="https://user-images.githubusercontent.com/70690100/169245576-a0ede2a6-b2e9-456b-b574-6803c9266db0.png">

* Collection Details API
<img width="764" alt="Schermafbeelding 2022-05-19 om 10 12 33" src="https://user-images.githubusercontent.com/70690100/169245675-469df57f-e25e-4f6a-bcc6-d57abe8e6704.png">

* Collection Image API
<img width="769" alt="Schermafbeelding 2022-05-19 om 10 13 03" src="https://user-images.githubusercontent.com/70690100/169245778-c708bb5a-f835-4abe-bf96-0ad7d5b6cbfb.png">

## Code uitgelegd
Ik ga hier alle code uitleggen waardoor ik ben gekoment tot dit concept. Ik leg hier het fetchen van data uit, het renderen van data, en de zoekfunctie. 
Ik heb gebruik gemaakt van modules en Routie-min.js. Dankzij Jorn heb ik gebruik kunnen maken van Routie, dit omdat hij mij heel goed hier mee geholpen heeft. Zonder hem was dit waarschijnlijk niet gelukt.

### Fetchen van data
````
export const rijksData = 'https://www.rijksmuseum.nl/api/nl/collection?key=xvdOJegg';

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
````
Voordat je data kan fetchen moet je eerst de url van de API hebben. Ik heb de url hier in een constante variabele gezet onder de naam rijksData. Bij deze url zit mijn key al inbegrepen. Deze had ik eventueel los in een variabele genaamd key kunnen zetten en dan door middel van string interpolation.
Als je eenmaal de url hebt kan de fetch functie beginnen. In de functie getDataRijks() wordt de fetch() methode toegepast die in dit geval de url rijksData fetchet. Omdat dit een promise is krijgen we een .then methode waarin aan wordt gegeven dat de response in een JSON formaat moet zijn. In de tweede .then wordt ook de functie getAdditonalData(collection) aangeroepen. Door middel van .catch wordt er een errormelding gegeven als het fetchen van data een error oplevert. 

### Fetchen van extra data
````
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
````
Om voor elk art object extra data op te halen wordt de functie getAditionalData(collection) in de getDataRijks() functie aangeroepen. Bij deze functie wordt collection meegegeven en wordt er door middel van een for loop de detailed data opgehaald voor elk art object die bij de gedtDataRijks() functie is opgehaald. Ook hier is het een promise en wordt er dus gereageerd met een .then functie die ook hier weer aangeeft dat de response in JSON formaat moet zijn. In de tweede .then wordt uiteindelijk de renderData(detailed) functie aangeroepen zodat de art objects daadwerkelijk worden gerendert en voor de gebruiker zichtbaar worden.

### Renderen van data
````
export function renderData(detailed) {
    console.log(detailed);
        const list = $('main');
        list.insertAdjacentHTML('beforeend',
        `
        <li>
        <h2>${detailed.artObject.longTitle}</h2>
        <p>${detailed.artObject.titles}</p>
        <img src="${detailed.artObject.webImage.url}" alt="${detailed.artObject.title}">
        `
        )
        feedback.textContent='';{
        }
    }

    export function $(element) {
        return document.querySelector(element);
    }
````
Als de eerste data gefetched is en daarna ook de gedetailleerde data daarbij, dan kan het renderen van de kunstwerken beginnen. de functie renderData() wordt in de laatste functie getAditionalData() aangeroepen. Bij deze functie wordt detailed meegegeven wat wil zeggen dat de gedetailleerde data hier gerendert kan worden. Om de data te renderen wordt er voor elk kunstwerk een list item aangemaakt die wordt geplaatst in de unordered list. Bij elk kunstwerk krijgt de gebruiker de titel te zien, de beschrijving en een zeer gedetailleerde foto met hoge resolutie. 

### Zoekfunctie

#### Fetchen van data voor zoekopdracht
````
function searchField(event) {
    event.preventDefault();

    let searchValue = document.querySelector("input").value;
    window.location.hash = searchValue;
}

const form = document.querySelector("form");
form.addEventListener('submit', searchField);
````
Bij de functie searchField(event) wordt de variabele searchValue aangemaakt, deze is gelijk aan de input van de zoekbalk en wordt de hash van de pagina gelijk aan de searchValue. Doordat er een id wordt aangegeven in Routie mini worden de daadwerkelijke functie's voor het zoeken uitgevoerd. Door middel van het veranderen van de hash worden de functie's deleteResults() en searchDataRijks(inputfield) aangeroepen.

#### Delete results voor de zoekfunctie
````
export function deleteResults() {
    let resultatenHeader = document.querySelector("#resultatenHeader")
    if (resultatenHeader) {
        resultatenHeader.remove();
    }
    
    
    let kunstwerken = document.querySelectorAll("#resultsList li")
    kunstwerken.forEach(kunstwerk => {
        kunstwerk.remove();
    })
}
````
Om ruimte te maken voor de zoekresultaten moeten de eerder gerendere kunstwerken verdwijnen. Allereerst wordt de header van de pagina verwijdert. Ook wordt er een variabele aangemaakt voor de eerder ingelade kunstwerken. Deze kunstwerken worden door middel van de forEach methode verwijdert. Nu alle eerdere resultaten zijn verwijdert kunnen de zoekresultaten worden ingeladen.

#### Data van zoekopdracht fetchen
````
export function searchDataRijks(inputField) {
    console.log(inputField);
    let searchInput = dataSearchRijks + inputField;
    fetch(searchInput)
    .then(function(response) {
        return response.json();
    }).then(function(searchInput){
        console.log('You searched ' + inputField);
        renderSearchData(searchInput, inputField)
    }).catch((error) => {
        console.log(error);
        console.log('An error occured, please try again.')
    })
}
````
Als de hash wordt verandert wordt de functie searchDataRijks(inputField) aangeroepen. InputField staat gelijk aan de input.value. In deze functie wordt het variabele searchInput aangemaakt die gelijk is aan de url die moet worden gefetched. Met de .then methode geven we aan dat de response ook hier weer in JSON formaat moet zijn. In de tweede .then wordt aangegeven dat de functie renderSearchData() moet worden uitgevoerd.

#### Renderen van zoekopdracht
````
 export function renderSearchData(searchInput, inputField) {
    let resultatenHeaderTekst = "Resultaten voor " + inputField;
     if (inputField == "") {
        resultatenHeaderTekst = "Tien willekeurige resultaten"
     }
     errorMelding.textContent = '';
     feedback.textContent = "";

     const resultsList = document.querySelector('#resultsList');
     
     resultsList.insertAdjacentHTML('beforeend',
     `<h1 id="resultatenHeader"s>${resultatenHeaderTekst}</h1>`)
     for(let i=0; i < searchInput.artObjects.length; i++) {
    resultsList.insertAdjacentHTML('beforeend',
    `
     <li>
      <h2>${searchInput.artObjects[i].longTitle}</h2>
      <p>${searchInput.artObjects[i].title}</p>
      <img src="${searchInput.artObjects[i].webImage.url}"
      </li>
     `) 
     } 
     
 }
 ````
 Bij het renderen van de zoekresultaten wordt allereerst de header aangepast naar "Resultaten voor " + de zoekopdracht. Daarna worden de errormelding en feedback melding allebei verwijdert. Om de zoekresultaten kwijt te kunnen wordt er een resultsList variabele aangemaakt. Daarna wordt door middel van insertAdjacentHTML() en een for loop alle zoekresultaten een voor een gerendert. Ook bij deze kunstwerken is de titel, de beschrijving en foto van hoge resolutie zichtbaar voor de gebruiker.

## Activity Diagram
<img width="934" alt="Schermafbeelding 2022-05-19 om 14 38 38" src="https://user-images.githubusercontent.com/70690100/169295439-c5474622-4622-4abe-add7-ce11638c26cf.png">






