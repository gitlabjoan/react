const appRoot = document.getElementById('appRoot')

const books = [
    { _id: 'addasd', titulo: 'El principito', autor: 'joan' },
    { _id: 'amdasd', titulo: 'Las nubes que vuelan', autor: 'ioan' },
    { _id: 'abdasd', titulo: 'El fin que nunca llegó', autor: 'iohan' },
]
const eliminarLibros = () =>{
    books.splice(0, books.length)
    render()
}

const recomendarLibro = () =>{
    const libro = books[0];
    alert(libro.titulo)
    render()
}

const recomendarLibroAleatorio = ()=>{
    const indice = ( books[Math.floor(Math.random() * books.length)] )
    alert (indice.titulo)
}

const onSubmitNewBook = (e) => {
    e.preventDefault()

    const newTitle = e.target.elements.titulo.value;
    const newAutor = e.target.elements.autor.value;

   /*  if (newTitle) {
        books.push({ titulo: newTitle, autor: 'Anónimo' })
        e.target.elements.titulo.value = ''; //e.target.reset()
        render();
    } */

      if (newTitle) {
        books.push({ titulo: newTitle, autor: newAutor || 'JOHN DOE' })
        e.target.elements.titulo.value = ''; //e.target.reset()
        render();
    } else{
        console.log('Te falta indtorducir el autor o el titulo');
    }
}


const render = () => {

    const template = (
        <div>
            <h1>Consegero de libros</h1>
            <h2>Top libros 2020 según la revista BLA BLA</h2>
            {
                <p>Numero de libros: { books.length > 0 ? `Hay  ${books.length} libros ` : 'No hay libros todavía' } </p> 
            }
            
            <ul>
                {
                    books.map((book) => {
                        return <li key={book._id}>{book.titulo}</li>
                    })
                }
            </ul>

            <label htmlFor="eliminarLibro">Eliminar libros</label>
            <button onClick = { eliminarLibros}>Eliminar</button>
                <br/><br/>
            <label htmlFor="recomendarLibro">Recomendar libro</label>
            <button onClick = { recomendarLibro}>Recomendar LIBRO</button>
            <br/><br/>
            <label htmlFor="recLibroAleat">Recomendar libro ALEATORIO</label>
            <button onClick = { recomendarLibroAleatorio}>Recomendar LIBRO</button>
            <br/><br/>

            <form onSubmit={onSubmitNewBook} >
                <label >Nuevo título </label>
                <input type="text" name="titulo" placeholder="Escribir un título" /> <br />
                <label >Autor </label>
                <input type="text" name="autor" placeholder="Escribir un autor" /> <br />
                <button type="submit" >Añadir título</button>
            </form>



        </div>)

    ReactDOM.render(template, appRoot)
}
render()



// CLASES RECORDATORIO
// bind
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getDescripcion(){
        return `Mi nombre es ${this.name} Y tengo ${this.age}`
    }
}

class Amigo extends Person{
    constructor(name, age, location){
        super(name, age)
        this.location = location
    }
    saludar(){
        return 'MOLAAAAAAAAAAAAA'
    }
}

const unAmigo = new Amigo('Miguelito', 12, 'Reus')
console.log(unAmigo.saludar());


























{/*  const render = () => {
    const template = (
        <div>
            <h1 className='titulo'> LIBROS </h1>
            <h2>Títulos</h2>
                {
                    books.map((book) => { return <p key= {book._id}> {book.titulo} </p> })
                }

            <h2>Autores</h2>
            <ul>
                {
                    books.map((book) => {return <li key={book._id}> {book.autor} </li> })
                }
            </ul>

        </div>
    )
    ReactDOM.render(template, appRoot)
}
render()  */}
