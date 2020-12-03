// HELLO REACT

/* HELLO REACT */
const personaA = {
    name: 'Joan',
    edad: '26',
    city: 'Reus'
}
const personaB = {
    name: 'John',
    edad: '22',
    city: 'Budapest'
}
const edad = personaA.edad;
const reset = () => {
    personaA.edad = edad;
    render();
}

const sumar = () => {
    personaA.edad++;

    render();
}

const restar = () => {
    personaA.edad--;
    render();
}

const writeLocation = (city) => {
    if (city) {
        {
            return <p>  Ciudad: {city}</p>
        }

    }
}


const appRoot = document.getElementById('appRoot')
const render = () => {y
    const template = (
        <div>
            <h1> {personaA.name ? personaA.name : 'Anónimo'} </h1>
            <h1> {personaA.edad} </h1>
            { writeLocation(personaA.city) && <p>Edad: {personaA.edad}</p>}
            {(personaA.edad && personaA.edad >= 8) && <p>Edad: {personaA.edad}</p>}
            
            <button onClick={sumar}>+1 </button>
            <button onClick={restar}>-1 </button>
            <button onClick={reset}>reset </button>
        </div>
    )
    ReactDOM.render(template, appRoot)
}
render()