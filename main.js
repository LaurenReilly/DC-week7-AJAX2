var dogContainer = document.getElementById("dog");
var button = document.getElementById("generate");
var select = document.getElementById("dogDropDown");

button.addEventListener("click", generateDog);

function generateDog() {
    button.innerHTML = "Generating Pup...";
    axios.get("https://dog.ceo/api/breeds/image/random").then(function(data) {
        dogContainer.innerHTML = `<img src="${data.data.message}" style="height: 300px; width: auto">`
        button.innerHTML = "Generate Pup";    
    });
}

function generateDropdown() {
    axios.get("https://dog.ceo/api/breeds/list").then(function(response) {
        var breeds = response.data.message;
        breeds.forEach(function(breed) {
            select.innerHTML += `<option value="${breed}">${breed}</option>`
        });
    });
}

generateDropdown();