// API PAISES http://restcountries.eu/#api-endpoints-full-name
const url = 'https://restcountries.eu/rest/v2/all'

const getCountry = async (countryCode) => {
    const result = await axios.get(url);
    const countries = result.data;
    const country = countries.find((country) =>{return country.alpha2Code === countryCode.toUpperCase()})
    render(country.name);
}

const country = getCountry('es');

const appRoot = document.getElementById('appRoot')
const render = (country) => {
    const template = (
        <div>
            <h1>País: {country} </h1>
            
        </div>
    )
    ReactDOM.render(template, appRoot)
}
render()