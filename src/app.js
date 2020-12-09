const appRoot = document.getElementById('appRoot')

const books = [
    { _id: 'addasd', titulo: 'El principito', autor: 'joan' },
    { _id: 'amdasd', titulo: 'Las nuves que buelan', autor: 'ioan' },
    { _id: 'abdasd', titulo: 'El fin que nunca llegó', autor: 'iohan' },
]

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
                <p>Numero de libros: {books.length} </p>
            }
            <ul>
                {
                    books.map((book) => {
                        return <li key={book._id}>{book.titulo}</li>
                    })
                }
            </ul>

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
