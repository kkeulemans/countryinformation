import axios from "axios";

console.log("Hallo");


async function fetchCountries() {
    try {
        const result = await axios.get("https://restcountries.com/v2/all");
        console.log(result.data);

    result.data.sort((a, b) =>
    {
        return a.population - b.population;
    })
        getAllCountries(result.data);
} catch (e) {
        console.error("NOT FOUND");
    }

}
fetchCountries();
function getAllCountries(countries){
    const countryUnorderedList = document.getElementById("countrylist");

    countries.map((allCountries)=>{
        const countryList = document.createElement('li');
        countryList.innerHTML = `

            <h3 class=${allCountries.region}><img src=${allCountries.flag} class="flag"></img> ${allCountries.name}</h3>
            <p>Has a population of ${allCountries.population}</p>`
        countryUnorderedList.appendChild(countryList);
    })
}


 fetchCountries();
//const kleur = regionColor(list[0].region);
//console.log(kleur);


//dashboard.innerHTML = list.map((country) => {
    //const name = country.name.official;
    //const flag = country.flags.png;
    //const population = country.population;
//})


//for (let i = 0; i < countries.length; i++){
//     const country = countries[i];
//     const name = country.name.official;
//     const flag = country.flags.png;
//     const population = country.population;
//     console.log(name);
//     const countryInfo = document.getElementById("countrylist");
//     const result = name + " has " + population + " citizens and their flag is: " + flag;
//     countryInfo.innerText = result;}
