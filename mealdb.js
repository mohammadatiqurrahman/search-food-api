const  searchField = document.getElementById("search-field");
const buttonSearch = document.getElementById("button-search");

searchField.addEventListener("keypress", function(event) {
    // event.preventDefault();
    if (event.key == "Enter"){
      buttonSearch.click();
    }
        
});


const searchFood =() =>{
    const inputValue = document.getElementById('search-field')
    const getInputValue = inputValue.value;
    const errorText = document.getElementById('error-message')
    if(getInputValue == ''){
      errorText.innerText = 'please write something to search!'
    }
    else{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getInputValue}`
    inputValue.value = ''
    fetch(url)
    .then(res => res.json())
    .then(data =>rcvData(data))
    errorText.innerText = ''
    }
}

const rcvData = foods =>{
    // console.log(foods)
    const foodList = foods.meals;

    // console.log(foodList)
    const searchResults = document.getElementById('search-results')

    // remove previous results!!
    searchResults.innerHTML='';

    for(const food of foodList){
       const div = document.createElement('div')
       div.classList.add('col')
       div.innerHTML=`
       <div onclick="mealInformation(${food.idMeal})" class="card h-100">
       <img style="padding: 10px; border-radius: 25px;" src="${food.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"> ${food.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
     </div>
       `
             searchResults.appendChild(div)
    }
}
const mealInformation = mealId =>{
  // console.log(mealId)
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  fetch(url)
  .then(res => res.json())
  .then(data => getMealInformation(data.meals[0]))
}

const getMealInformation = mealInfo =>{
  console.log(mealInfo)

  const getDiv = document.getElementById('more-info')
  getDiv.innerHTML=`
  <img  style="padding: 5px; border-radius: 25px;" src="${mealInfo.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${mealInfo.strMeal}</h5>
    <p class="card-text">${mealInfo.strInstructions.slice(0,100)}</p>
    <a href="${mealInfo.strYoutube}" class="btn btn-primary">receipe</a>
  </div>
  `
}



