'use strict';

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

var reset = function reset() {
    personaA.edad;
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

var appRoot = document.getElementById('appRoot');
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' ',
            personaA.name,
            ' '
        ),
        React.createElement(
            'h1',
            null,
            ' ',
            personaA.edad,
            ' '
        ),
        React.createElement(
            'h3',
            null,
            ' ',
            personaA.city,
            ' '
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
