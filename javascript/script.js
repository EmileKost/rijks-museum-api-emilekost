import { getDataRijks } from "../modules/data.js";
import { deleteResults, searchDataRijks } from "../modules/search.js";
import "../modules/vendor/routie.min.js";

export function handleRoutes() {
    routie(
        {
        '': () => {
            deleteResults();

            let inputField = ""
            searchDataRijks(inputField);
        },
        ":id": inputField => {
            deleteResults();
            searchDataRijks(inputField);
        }
        })
}

handleRoutes();

function searchField(event) {
    event.preventDefault();

    let searchValue = document.querySelector("input").value;
    window.location.hash = searchValue;
}

const form = document.querySelector("form");
form.addEventListener('submit', searchField);
    









