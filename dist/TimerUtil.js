"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimerUtil = function () {
    function TimerUtil() {
        _classCallCheck(this, TimerUtil);
    }

    _createClass(TimerUtil, null, [{
        key: "checkNumber",
        value: function checkNumber(value) {
            return typeof value == "number";
        }
    }, {
        key: "createTimeInSeconds",
        value: function createTimeInSeconds(timerObj) {
            var time = 0;
            var time_properites = [{ key: "seconds", value: 1 }, { key: "minutes", value: 60 }, { key: "hours", value: 3600 }];
            for (var i = 0; i < time_properites.length; i++) {
                var time_property = time_properites[i];
                if (timerObj[time_property.key] && this.checkNumber(timerObj[time_property.key])) {
                    time += timerObj[time_property.key] * time_property.value;
                }
            }
            return time;
        }
    }, {
        key: "getCurrTimeFromDate",
        value: function getCurrTimeFromDate() {
            var d = new Date();
            var time = d.getTime();
            return Math.floor(time / 1000);
        }
    }]);

    return TimerUtil;
}();

exports.default = TimerUtil;