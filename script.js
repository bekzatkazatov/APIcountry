const row = document.querySelector('.row')
const continent = 'europe'
const converter =document.querySelector('.converter')
const submit = document.querySelector('.submit')
const title = document.querySelector('.title')
const title2 = document.querySelector('.title2')
const title3 = document.querySelector('.title3')


submit.addEventListener('click',() => {
    let f = converter.value
    fetch(`https://api.exchangerate.host/latest?base=KGS&symbols=USD,EUR,RUB,&amount=${f}`)
        .then(response => response.json())
        .then(data =>{
            console.log(data.rates)



            title.innerHTML = Object.values(data.rates)[0].toFixed(4)
            title2.innerHTML = Object.values(data.rates)[1].toFixed(4)
            title3.innerHTML = Object.values(data.rates)[2].toFixed(4)
        })
})

fetch(`https://restcountries.com/v3.1/region/${continent}`)
.then(response => response.json())
.then ( data => {
   data.map  (country =>{
       row.innerHTML += `<div class="col-4">
   <div class="box">
    <div class="img-wrapper">
    <img src="${country.flags.png}" alt="flag">
   </div>
   <h3>${country.translations.rus.common}</h3>
   <div>Capital: <h4>${country.capital}</h4></div>
   <div>lauguages: <h4>${Object.values (country.languages)}</h4></div>
    <div>Population: <h4>${country.population}</h4></div>
    <div>Area: <h4>${country.area}</h4></div>
     <form action="${country.maps.googleMaps}" target="_blank">Maps:
   <button>Переход по ссылке</button>
  </form>
    
   </div>
   </div>`
        console.log(country)

    })
})
