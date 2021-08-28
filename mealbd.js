const searchFood = () =>{
    const inputValue = document.getElementById('search-field')
    const getValue = inputValue.value;
    inputValue.value = ''
    // console.log(getValue)
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getValue}`

    fetch(url)
    .then(res => res.json())
    .then(data => rcvData(data))
}

const rcvData = foods =>{
    // console.log(foods)
    const fishFoods = foods.meals
    const foodArea = document.getElementById('food-area')
    for(const food of fishFoods){
        // console.log(food)
        const div = document.createElement('div')
        div.classList.add('styleFood')
        div.innerHTML=`
        <img style="width: 60%; border-radius: 15px;" src="${food.strMealThumb}">
        <p style="margin-top: 15px"> ${food.strMeal}</p>
        <p style="margin-top: 15px"> ${food.strTags}</p>
        <p style="margin-top: 15px"> ${food.strIngredient4}</p>
        `
        foodArea.appendChild(div)
    }
}