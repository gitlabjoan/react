'use strict';

var appRoot = document.getElementById('appRoot');

var books = [{ _id: 'addasd', titulo: 'El principito', autor: 'joan' }, { _id: 'amdasd', titulo: 'Las nuves que buelan', autor: 'ioan' }, { _id: 'abdasd', titulo: 'El fin que nunca llegó', autor: 'iohan' }];

var onSubmitNewBook = function onSubmitNewBook(e) {
    e.preventDefault();

    var newTitle = e.target.elements.titulo.value;
    var newAutor = e.target.elements.autor.value;

    /*  if (newTitle) {
         books.push({ titulo: newTitle, autor: 'Anónimo' })
         e.target.elements.titulo.value = ''; //e.target.reset()
         render();
     } */

    if (newTitle) {
        books.push({ titulo: newTitle, autor: newAutor || 'JOHN DOE' });
        e.target.elements.titulo.value = ''; //e.target.reset()
        render();
    } else {
        console.log('Te falta indtorducir el autor o el titulo');
    }
};

var render = function render() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Consegero de libros'
        ),
        React.createElement(
            'h2',
            null,
            'Top libros 2020 seg\xFAn la revista BLA BLA'
        ),
        React.createElement(
            'p',
            null,
            'Numero de libros: ',
            books.length,
            ' '
        ),
        React.createElement(
            'ul',
            null,
            books.map(function (book) {
                return React.createElement(
                    'li',
                    { key: book._id },
                    book.titulo
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onSubmitNewBook },
            React.createElement(
                'label',
                null,
                'Nuevo t\xEDtulo '
            ),
            React.createElement('input', { type: 'text', name: 'titulo', placeholder: 'Escribir un t\xEDtulo' }),
            ' ',
            React.createElement('br', null),
            React.createElement(
                'label',
                null,
                'Autor '
            ),
            React.createElement('input', { type: 'text', name: 'autor', placeholder: 'Escribir un autor' }),
            ' ',
            React.createElement('br', null),
            React.createElement(
                'button',
                { type: 'submit' },
                'A\xF1adir t\xEDtulo'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};
render();

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
