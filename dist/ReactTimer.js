'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Timer = require('./Timer');

var _Timer2 = _interopRequireDefault(_Timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactTimer = function (_Component) {
    _inherits(ReactTimer, _Component);

    function ReactTimer(props) {
        _classCallCheck(this, ReactTimer);

        var _this = _possibleConstructorReturn(this, (ReactTimer.__proto__ || Object.getPrototypeOf(ReactTimer)).call(this, props));

        _this.state = { show: true };
        _this.onStopTimer = _this.onStopTimer.bind(_this);
        return _this;
    }

    _createClass(ReactTimer, [{
        key: 'onStopTimer',
        value: function onStopTimer() {
            this.setState({ show: false });
            if (this.props.onStop) {
                this.props.onStop();
            }
        }
    }, {
        key: 'renderTimer',
        value: function renderTimer() {
            if (this.state.show) {
                return _react2.default.createElement(
                    _Timer2.default,
                    { ref: 'timer_xyz', onStop: this.onStop, onStart: this.props.onStart, seconds: this.props.seconds, hours: this.props.hours, minutes: this.props.minutes, start: this.props.start },
                    this.props.children
                );
            }
            return '';
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.renderTimer()
            );
        }
    }]);

    return ReactTimer;
}(_react.Component);

exports.default = ReactTimer;