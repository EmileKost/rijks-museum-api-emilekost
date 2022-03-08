

export const dataSearchRijks = 'https://www.rijksmuseum.nl/api/nl/collection?key=xvdOJegg&ps&q='



export function searchDataRijks(searchValue) {
    const searchInput = dataSearchRijks + searchValue;
    fetch(searchInput)
    .then(function(response) {
        return response.json();
    }).then(function(searchInput){
        console.log('You searched ' + searchBalk.value);
        renderSearchData(searchInput, searchValue)
    }).catch((error) => {
        console.log(error);
        console.log('An error occured, please try again.')
    })
}

 export function renderSearchData(searchInput, searchValue) {
     const h2 = document.querySelector("h2");
     h2.innerHTML = "Resultaten voor " + searchValue;
     console.log(searchInput.artObjects[0].webImage.url)
     const resultsList = document.querySelector('#resultsList');
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