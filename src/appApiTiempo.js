
// api TIEMPO https://openweathermap.org/api

const url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=af66bbd9db5de0235d25be504ae3489a'
const getWeather = async ()=>{
    const result = await axios.get(url)
    console.log(result.data.main)
    console.log(result);
    render(result.data.main.temp, result.data.main.humidity, result.data.main.pressure)
}

getWeather(); 

const appRoot = document.getElementById('appRoot')
const render = (temperatura, humedad, presion) => {
    const template = (
        <div>
            <h1>Temperatura: {temperatura} </h1>
            <h1>Humedad: {humedad} </h1>
            <h3>Presión: {presion} </h3>
        </div>
    )
    ReactDOM.render(template, appRoot)
}
render()