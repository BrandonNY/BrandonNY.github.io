// num gen
let randomIndex = Math.floor(Math.random() * data.results.length);

// button
const randomizerButton = document.getElementById("random_btn");

// name
const factHeading = document.getElementById("fact");


//Get the button:
const mybutton = document.getElementById("myBtn");




function funfact() {
    // num gen
    randomIndex = Math.floor(Math.random() * data.results.length);

    let fact = data.results[randomIndex].funfacts.first;
    factHeading.innerHTML = "fun fact: " + fact;


}






randomizerButton.onclick = function (event) {
    event.preventDefault();
    funfact();
  };