'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TimerUtil = require('./TimerUtil');

var _TimerUtil2 = _interopRequireDefault(_TimerUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timer = function (_Component) {
    _inherits(Timer, _Component);

    function Timer(props) {
        _classCallCheck(this, Timer);

        var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

        _this.start_time = _this.props.start || 0;
        _this.state = { time: _this.start_time, time_limit: _TimerUtil2.default.createTimeInSeconds(_this.props) };
        return _this;
    }

    _createClass(Timer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var time_limit = this.state.time_limit;
            var prev_time = _TimerUtil2.default.getCurrTimeFromDate();
            if (this.props.onStart) {
                this.props.onStart();
            }
            this.interval = setInterval(function () {
                var time = Math.max(_this2.state.time + 1, _TimerUtil2.default.getCurrTimeFromDate() - _this2.state.prev_time);
                if (time >= time_limit) {
                    time = time_limit;
                    if (_this2.props.onStop) {
                        _this2.props.onStop();
                    }
                }
                _this2.setState({ time: time });
            }, 1000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.interval);
            if (this.props.onInterrupt) {
                this.props.onInterrupt();
            }
        }
    }, {
        key: 'getCountTime',
        value: function getCountTime() {
            var time = this.props.count_down ? this.state.time_limit - this.state.time : this.state.time;
            return t;
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var counttime_obj = { count_time: this.getCountTime() };
            return _react2.default.Children.map(this.props.children, function (child) {
                return _react2.default.cloneElement(child, counttime_obj);
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                this.renderChildren()
            );
        }
    }]);

    return Timer;
}(_react.Component);

exports.default = Timer;