
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
