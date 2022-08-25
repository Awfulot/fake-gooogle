const searchBoxEl = document.querySelector('#query');
const resultsEl = document.querySelector('#results');

const suggestions = [
    "boston",
    "bakersfield",
    "baltimore",
    "buffalo",
    "auston",
    "albuquerque",
    "atlanta",
    "arlington",
    "chicago",
    "columbus",
    "charlotte",
    "colorado Springs",
];



searchBoxEl.addEventListener('input',function(){
    const searchInput = searchBoxEl.value.toLowerCase();
    //searchInput.toLowerCase();
    const results = suggestions.filter( (item) => {
        return item.includes(searchInput)
    })

    console.log(results);

    displayResults(results)
});

function displayResults(resultsArray) {
    resultsEl.innerHTML ="";

    if(resultsArray.length !== 0) {
    resultsArray.forEach(item => {
        const paragraphElement = document.createElement("p");
        paragraphElement.innerHTML = `<p>${item}</p>`;

        resultsEl.appendChild(paragraphElement);
    })
    }
    if (searchBoxEl.value === "" || resultsArray.length === 0) {
        resultsEl.innerHTML = "";
        resultsEl.classList.add("hidden");

    }
    else {resultsEl.classList.remove("hidden")};
}