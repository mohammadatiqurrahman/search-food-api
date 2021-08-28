const getRandomData=()=>{
    fetch('https://randomuser.me/api/?results=21')
    .then(res => res.json())
    .then(data => sendData(data))
}

function sendData(data){
    // console.log(data)
    const results = data.results;
    // console.log(results)
    const getData = document.getElementById('getData')
    for(const result of results){
        const div = document.createElement('div')
        div.classList.add('styleSheet')
        div.innerHTML=`
        <img style="border-radius: 5px;" src="${result.picture.large}">
        <h3>name: ${result.name.title} ${result.name.first} ${result.name.last }</h3>
        <p> email: ${result.email}</p>
        <p>city: ${result.location.city} state: ${result.location.state} country: ${result.location.country} </p>
        <p>phone: ${result.cell}</p>
        `
        getData.appendChild(div)
    }
}