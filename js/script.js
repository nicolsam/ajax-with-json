var pageCounter = 1;

const animalInfo = document.querySelector("#animal-info");
const buttonResquest = document.querySelector("#btn");

buttonResquest.addEventListener("click", () => {
        var ourRequest = new XMLHttpRequest();

        ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-" + pageCounter + ".json");
        ourRequest.onload = function() {
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        };
        ourRequest.send();
        pageCounter++;
        if(pageCounter > 3) {
            buttonResquest.classList.add("hide");
        }
    });

function renderHTML(data) {

    var spaceHTML = ' </br>';

    for(let i = 0; i < data.length; i++) {
        var insertHTML = data[i].name;
        animalInfo.insertAdjacentHTML('beforeend', insertHTML + spaceHTML);
    }

   
}
