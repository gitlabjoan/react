// API IP https://ipstack.com/signup/free
const url = 'https://restcountries.eu/rest/v2/all'

const getIP = async (countryCode) => {
    const result = await axios.get(url);
    const countries = result.data;
    const country = countries.find((country) =>{return country.alpha2Code === countryCode.toUpperCase()})
    render(country.name);
}

const ip = getIP('es');

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