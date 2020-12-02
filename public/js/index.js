'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// API IP https://ipinfo.io/developers
var url = 'https://ipinfo.io/?token=9506ea54608e87';

var getCountryByIP = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result1, countryCode, result2, countries, country;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return axios.get(url);

                    case 2:
                        result1 = _context.sent;
                        countryCode = result1.data.country;

                        // consultar todos los paises a restcountries

                        _context.next = 6;
                        return axios.get('https://restcountries.eu/rest/v2/all');

                    case 6:
                        result2 = _context.sent;
                        countries = result2.data;

                        // Buscar el pais que tenga nuestro countryCode en todos los paises

                        country = countries.find(function (country) {
                            return country.alpha2Code == countryCode;
                        });

                        render(country.name);

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getCountryByIP() {
        return _ref.apply(this, arguments);
    };
}();

getCountryByIP();

var appRoot = document.getElementById('appRoot');
var render = function render(country) {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Pa\xEDs: ',
            country,
            ' '
        )
    );
    ReactDOM.render(template, appRoot);
};
render();
