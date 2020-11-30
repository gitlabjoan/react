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

const reset = () => {
    personaA.edad ;
    render();
}

const sumar = () => {
   personaA.edad ++;
  
     render();
}

const restar = () => {
    personaA.edad--;
    render();
}



const appRoot = document.getElementById('appRoot')
const render = () => {
    const template = (
        <div>
            <h1> {personaA.name} </h1>
            <h1> {personaA.edad} </h1>
            <h3> {personaA.city} </h3>
            <button onClick={sumar}>+1 </button>
            <button onClick={restar}>-1 </button>
            <button onClick={reset}>reset </button>
        </div>
    )
    ReactDOM.render(template, appRoot)
}
render()