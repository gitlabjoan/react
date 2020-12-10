

class Header extends React.Component {
    render() {
        return <h1>{this.props.tituloDeMiApp}</h1> // indicamos un titulo de forma dinámica
        // return <h1>Consejero literario digital</h1>
    }
}

class Description extends React.Component {
    render() {
        return <p> | Recomendaciones peprsonalizadas al detalle</p>
    }
}
 
class ChooseBook extends React.Component {
    render() {
        return <button>Recomendar Libros</button>
    }
}

class EliminarBook extends React.Component{
    render (){
        
        return <button>{this.props.deleteButton}</button>
    }
}

class Books extends React.Component {
    render() {
        return <h2>Lista libros</h2>
    }
}


class Formulario extends React.Component {
    render() {

        return <form  >
            <label htmlFor="title">Book </label>
            <input type="text" name="title" /> <br />
            <br />
            <label htmlFor="title">Author </label>
            <input type="text" name="author" /> <br />
        </form>

    }
}

class ConsejeroApp extends React.Component {
    render() {
        return <div>
            <Header tituloDeMiApp = "Libros digitales"/>
            <Description />
            <ChooseBook />
            <EliminarBook deleteButton="Eliniar la lista de libros"/>
            <Books />
            <hr />
            <Formulario />

        </div>
    }
}


const template = (

    <div>
        <Header />
        <Description />
        <ChooseBook />
        <Books />
        <hr />
        <Formulario />

    </div>

)
// ReactDOM.render(template,<ConsejeroApp/>, document.querySelector('#appRoot'))
ReactDOM.render(<ConsejeroApp />, document.querySelector('#appRoot'))

// bind
// props
