var dogContainer = document.getElementById("dog");
var select = document.getElementById("dogDropDown");

generateDropdown();

function generateDropdown() {
    axios.get("https://dog.ceo/api/breeds/list").then(function(response) {
        var breeds = response.data.message;
        breeds.forEach(function(breed) {
            select.innerHTML += `<option value="${breed}">${breed}</option>`
        });
    });
}

select.addEventListener("change", function() {
    console.log(this.value);
    // axios.get(`"https://dog.ceo/api/${this.value}/image/random"`).then(function(response) {
    //     dogContainer.innerHTML = `<img src="${response.data.message}" style="height: 300px; width: auto">`  
    // });
});

