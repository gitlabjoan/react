'use strict';

// HELLO REACT

/* HELLO REACT */
var personaA = {
    name: 'Joan',
    edad: '26',
    city: 'Reus'
};
var personaB = {
    name: 'John',
    edad: '22',
    city: 'Budapest'
};
var edad = personaA.edad;
var reset = function reset() {
    personaA.edad = edad;
    render();
};

var sumar = function sumar() {
    personaA.edad++;

    render();
};

var restar = function restar() {
    personaA.edad--;
    render();
};

var writeLocation = function writeLocation(city) {
    if (city) {
        {
            return React.createElement(
                'p',
                null,
                '  Ciudad: ',
                city
            );
        }
    }
};

var appRoot = document.getElementById('appRoot');
var render = function render() {
    
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' ',
            personaA.name ? personaA.name : 'Anónimo',
            ' '
        ),
        React.createElement(
            'h1',
            null,
            ' ',
            personaA.edad,
            ' '
        ),
        writeLocation(personaA.city) && React.createElement(
            'p',
            null,
            'Edad: ',
            personaA.edad
        ),
        personaA.edad && personaA.edad >= 8 && React.createElement(
            'p',
            null,
            'Edad: ',
            personaA.edad
        ),
        React.createElement(
            'button',
            { onClick: sumar },
            '+1 '
        ),
        React.createElement(
            'button',
            { onClick: restar },
            '-1 '
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset '
        )
    );
    ReactDOM.render(template, appRoot);
};
render();
