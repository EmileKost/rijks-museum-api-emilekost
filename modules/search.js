
export const dataSearchRijks = 'https://www.rijksmuseum.nl/api/nl/collection?key=xvdOJegg&ps&q='
export const searchBalk = document.getElementById('searchBalk');

export const feedback = document.getElementById('feedback-melding');
feedback.textContent = 'De content is aan het laden, even geduld!';

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

 export function renderSearchData(searchInput, inputField) {
    let resultatenHeaderTekst = "Resultaten voor " + inputField;
     if (inputField == "") {
        resultatenHeaderTekst = "Tien willekeurige resultaten"
     }
     feedback.textContent = "";
     console.log(searchInput.artObjects[0].webImage.url)
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








/*
export function renderSearchData(search) {
    const searchResults = document.getElementById('resultslist');
    searchResults.insertAdjacentHTML('beforeend',
    `<h2>${search.artObject.longTitle}</h2>`)
}
*/

   // console.log(dataSearchRijks + searchBalk.value)
        // for(let i=0; i < search.artObjects; i++) {
        //     console.log(search.artObjects[i])
        // }

      //  return search;