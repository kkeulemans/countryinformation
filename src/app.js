import axios from 'axios';
async function getCountries() {
    try {
        console.clear();
        const country = document.getElementById("searchField").value
        const result = await axios.get(`https://restcountries.com/v2/name/${country}`)
        getCountryInformation(result.data[0]);
    } catch (e) {
        const errorMessage = document.getElementById("countrylist");
        errorMessage.innerHTML= ` Country is not available. Try another`
        console.error("Country is not available")
    }
}

const buttonElement = document.getElementById('search-button');
buttonElement.addEventListener('click', getCountries);



function getCountryInformation(country){
    const countryUnorderedList = document.getElementById("countrylist");
    countryUnorderedList.innerHTML= ``
    const search = document.getElementById("search").reset();

        const currency = country.currencies;
        const languages = country.languages;
        const languageString = getLanguages(languages);
        const countryList = document.createElement('p');
        countryList.innerHTML = `
            
            <h3 class=${country.region}><img src=${country.flag} class="flag"></img> ${country.name}</h3>
            <p>${country.name} is situated in ${country.subregion}. It has a population of ${country.population}</p>
            <p>The capital city is ${country.capital} ${getCurrencies(currency)}.</p>
             <p>${getLanguages(languages)}</p>`
        countryUnorderedList.appendChild(countryList);

    }
function getCurrencies(country){

    if (country.length ===2){
        return `and you can pay with ${country[0].name} and ${country[1].name}'s`
    }
    else {
        return `and you can pay with ${country[0].name}'s`
    }


}

function getLanguages(country){
let string;
         if (country.length === 1){

             return `They speak ${country[0].name}`;

          }

          else if (country.length > 1){
              string = `They speak ${country[0].name}`;
              console.log(string);
            for (let i = 1; i < country.length - 1; i++){
                 string += `, ${country[i].name}`;}
            string += ` and ${country[country.length - 1].name}`
           return string;

         }

 }