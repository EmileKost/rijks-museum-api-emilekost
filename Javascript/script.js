console.log('test134');

const dataRembrandt = 'https://www.rijksmuseum.nl/api/nl/collection?key=xvdOJegg&involvedMaker=Rembrandt+van+Rijn';
const dataVermeer = 'https://www.rijksmuseum.nl/api/nl/collection?key=xvdOJegg&involvedMaker=Johannes+Vermeer';

const geenContent = document.querySelector('p');
const feedback = document.querySelector('section');

feedback.textContent = 'De content is aan het laden!';
geenContent.textContent = 'Oeps, geen content geladen, check jouw internetverbinding';

krijgDataRembrandt();
krijgDataVermeer();


function krijgDataRembrandt() {
    fetch(dataRembrandt).then(function(reactionRembrandt){
        return reactionRembrandt.json();
    }) .then(function(dataRembrandt){
        const listRembrandt = $('ul');
        for(let i=0; dataRembrandt.artObjects.length; i++) {
            listRembrandt.insertAdjacentHTML('beforebegin', `<li><h4>${dataRembrandt.artObjects[i].title}</h4><img src="${dataRembrandt.artObjects[i].webImage.url}" alt="${dataRembrandt.artObjects[i].title}"></li>`);
            feedback.textContent = '';
            geenContent.textContent = '';
        }
    })
}

function krijgDataVermeer() {
    fetch(dataVermeer).then(function(reactionVermeer){
        return reactionVermeer.json();
    }) .then(function(dataVermeer){
        const listVermeer = document.getElementById('jvermeer');
        for(let i = 0; dataVermeer.artObjects.length; i++) {
            listVermeer.insertAdjacentHTML('beforebegin', `<li><h4>${dataVermeer.artObjects[i].title}</h4><img src="${dataVermeer.artObjects[i].webImage.url}" alt="${dataVermeer.artObjects[i].title}"></li>`);
            feedback.textContent = '';
            geenContent.textContent = '';
        }
    })
}

function $(element) {
    return document.querySelector(element);
}

