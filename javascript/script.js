import { getDataRijks } from "../modules/data.js";
import { searchDataRijks } from "../modules/search.js";

//Dit is de event listenter om zo de zoekfunctie te starten.


//Met deze functie wordt de data van de rijksmuseum API opgehaald en hier aangeroepen
getDataRijks();


document.getElementById('searchForm').addEventListener('submit', function(prevent){
    prevent.preventDefault();
    const searchBalk = document.getElementById('searchBalk');
    let searchValue = searchBalk.value;
    function removeContent() {
        let allResults = document.querySelectorAll('#resultsList > li');
        for (var i = 0, l = allResults.length; i < l; i++) {
            allResults[i].remove();
            }

    }
    removeContent();
    searchDataRijks(searchValue);
})


// Zorg dat bij elke nieuwe functie dat alle content wegwordt gehaald en ruimte maakt voor resultaten lijst
// Responsive maken
// detailspagina maken dmv routes en detailed data





    
    










