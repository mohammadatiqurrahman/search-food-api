const searchFood =() =>{
    const inputValue = document.getElementById('search-field')
    const getInputValue = inputValue.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getInputValue}`
    inputValue.value = ''
    fetch(url)
    .then(res => res.json())
    .then(data =>rcvData(data))
}

const rcvData = foods =>{
    // console.log(foods)
    const foodList = foods.meals;
    // console.log(foodList)
    const searchResults = document.getElementById('search-results')
    for(const food of foodList){
       const div = document.createElement('div')
       div.classList.add('col')
       div.innerHTML=`
       <div class="card h-100">
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