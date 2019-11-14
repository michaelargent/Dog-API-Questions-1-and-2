'use strict';

function getDogImage(numberOfDogs) {
    fetch(`https://dog.ceo/api/breeds/image/random/3`)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }
  

    function displayResults(responseJson) {
        console.log(responseJson);
        $(".results").html("");
        responseJson.message.forEach(renderedImg => {
          $(".results").append(`<img src="${renderedImg}" class="results">`);
        });
        //display the results section
        $(".results").removeClass("hidden");
      }

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let numberOfDogs = document.getElementById("numberOfDogs").value;
    getDogImage();
  });
}



$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});