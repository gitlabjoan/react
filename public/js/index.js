'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// API IP https://ipstack.com/signup/free
var url = 'https://restcountries.eu/rest/v2/all';

var getIP = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(countryCode) {
        var result, countries, country;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return axios.get(url);

                    case 2:
                        result = _context.sent;
                        countries = result.data;
                        country = countries.find(function (country) {
                            return country.alpha2Code === countryCode.toUpperCase();
                        });

                        render(country.name);

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getIP(_x) {
        return _ref.apply(this, arguments);
    };
}();

var ip = getIP('es');

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
