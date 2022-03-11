

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