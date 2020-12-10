'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CounterApp = function (_React$Component) {
    _inherits(CounterApp, _React$Component);

    function CounterApp(props) {
        _classCallCheck(this, CounterApp);

        var _this = _possibleConstructorReturn(this, (CounterApp.__proto__ || Object.getPrototypeOf(CounterApp)).call(this, props));

        _this.incrementar = _this.incrementar.bind(_this);
        _this.decrementar = _this.incrementar.bind(_this);
        _this.resetear = _this.incrementar.bind(_this);

        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(CounterApp, [{
        key: 'incrementar',
        value: function incrementar() {
            this.setState;
            this.count = this.count + 1;
        }
    }, {
        key: 'decrementar',
        value: function decrementar() {
            this.count = this.count - 1;
        }
    }, {
        key: 'resetear',
        value: function resetear() {
            this.count = this.count + 0;
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Contador'
                ),
                React.createElement(
                    'p',
                    null,
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.incrementar },
                    '+'
                ),
                React.createElement(
                    'button',
                    { onClick: this.decrementar },
                    '-'
                ),
                React.createElement(
                    'button',
                    { onClick: this.resetear },
                    'reset'
                )
            );
        }
    }]);

    return CounterApp;
}(React.Component);

ReactDOM.render(React.createElement(CounterApp, null), document.querySelector('#appRoot'));
