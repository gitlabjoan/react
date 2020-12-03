// API IP https://ipinfo.io/developers
const url = 'https://ipinfo.io/?token=9506ea54608e87'

const getCountryByIP = async () => {
    const result1 = await axios.get(url);
    const countryCode = result1.data.country;
   
  // consultar todos los paises a restcountries
  const result2 = await axios.get('https://restcountries.eu/rest/v2/all');
  const countries = result2.data;
  
  // Buscar el pais que tenga nuestro countryCode en todos los paises
   const country = countries.find((country) => {
      return country.alpha2Code== countryCode;
  })
  render(country.name);
} 

getCountryByIP();

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