const names = [ "Created by Jivan Meckel Rana"];
console.log(names);

const apiKey = "Ndmdifk0ASq2cxCAsnpopYWtOIeMVtEfWMsr7XDf";

let records = [];
const btnEl = document.getElementById("btn");
const query = 'christmas';



console.log(query);

  const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/recipe?query=" + query;


async function searched() {

  let searchKey = document.querySelector('#search-bar').value;
console.log(searchKey);
  
  const searchapiURL = "https://api.api-ninjas.com/v1/recipe?query=" + searchKey;

    const response = await fetch(searchapiURL, options);
    const data = await response.json();


   console.log(searchapiURL);
   console.log(data);

  drawTable(data);


}

async function getrecipe() {
    const response = await fetch(apiURL, options);
    const data = await response.json();
  
let searchKey = document.querySelector('#search-bar').value;
console.log(searchKey);
  
  
   console.log(apiURL);
   console.log(data);
  
  drawTable(data);
}
  getrecipe(apiURL)


function drawTable(records){
    let result = document.querySelector('#result');
    let html = '';
    for(let record of records){
        
        html += `

  <section class="recipe-preview">
      <div class="recipe-info">
          <p class="recipe-title">${record.title}</p>
          <p class="servings">${record.servings}</p>
      </div>

    <div class="recipe-ingredients">

      <p>INGREDIENTS</p>
      <p>${record.ingredients}</p>

    </div>

    <div class="recipe-directions">
        <p>DIRECTIONS</p>
        <p>${record.instructions}</p>
    </div>
  </section>`;
    }
    result.innerHTML = html;
}




// Set the date we're counting down to
var countDownDate = new Date("Dec 1, 2024 12:12:12").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "IT'S CHRISTMAS!";
  }
}, 1000);

