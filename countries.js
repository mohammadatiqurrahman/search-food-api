const loadCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => seeCountries(data))
}

const seeCountries = countries =>{
    // console.log(countries);
    countries.forEach(country =>{
        // console.log(country.name)
        const setCountries = document.getElementById('countries');
        const div = document.createElement('div')
        div.classList.add('styleSheet')
        div.innerHTML=`
            <img style="width: 50%" src="${country.flag}">
            <h3>${country.name}</h3>
            <h5>Capital: ${country.capital}</h5>
            <button onclick="showDetail('${country.name}')">details</button>
        `
        setCountries.appendChild(div)
    })
}

const showDetail = names =>{
    const url = `https://restcountries.eu/rest/v2/name/${names}`
    fetch(url)
    .then(res => res.json())
    .then(data => showData(data))
}
 const showData = country =>{
     const countryDetail = document.getElementById('country-detail')
     country.forEach(countrys =>{
        // const div = document.createElement('div')
        countryDetail.innerHTML=`
        <img style="width: 50%; padding-top: 25px;"" src="${countrys.flag}">
        <h3>${countrys.name}</h3>
        <h5 style="padding: 25px;">Capital: ${countrys.capital}</h5>
        `
     })

 }