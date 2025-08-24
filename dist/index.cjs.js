'use strict';

var _toConsumableArray = require("@babel/runtime/helpers/toConsumableArray")["default"];
var _createForOfIteratorHelper = require("@babel/runtime/helpers/createForOfIteratorHelper")["default"];
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck")["default"];
var _createClass = require("@babel/runtime/helpers/createClass")["default"];
var _defineProperty = require("@babel/runtime/helpers/defineProperty")["default"];
var _regenerator = require("@babel/runtime/helpers/regenerator")["default"];
var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator")["default"];
var average = function average(numbers) {
  return numbers.reduce(function (a, b) {
    return a + b;
  }, 0) / numbers.length;
};
var fixednum = function fixednum(num) {
  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return +num.toFixed(digits);
};
var minmax = function minmax(num, min, max) {
  return Math.min(Math.max(num, min), max);
};
var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};
var beep = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var type,
      frequency,
      duration,
      volume,
      audioContext,
      oscillator,
      gainNode,
      _args = arguments;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          type = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'sine';
          frequency = _args.length > 1 && _args[1] !== undefined ? _args[1] : 500;
          duration = _args.length > 2 && _args[2] !== undefined ? _args[2] : 300;
          volume = _args.length > 3 && _args[3] !== undefined ? _args[3] : 1;
          audioContext = new window.AudioContext();
          oscillator = audioContext.createOscillator();
          gainNode = audioContext.createGain();
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          oscillator.frequency.value = frequency;
          oscillator.type = type;
          gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + duration / 1000);
          _context.n = 1;
          return sleep(duration);
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function beep() {
    return _ref.apply(this, arguments);
  };
}();
var beepChain = function beepChain() {
  return new BeepChain();
};
var BeepChain = /*#__PURE__*/function () {
  function BeepChain() {
    var _this = this;
    _classCallCheck(this, BeepChain);
    _defineProperty(this, "actions", []);
    setTimeout(function () {
      return _this.play();
    });
  }
  return _createClass(BeepChain, [{
    key: "beep",
    value: function beep() {
      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }
      this.actions.push({
        type: 'beep',
        params: params
      });
      return this;
    }
  }, {
    key: "beepAwait",
    value: function beepAwait() {
      for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        params[_key2] = arguments[_key2];
      }
      this.actions.push({
        type: 'beep',
        "await": true,
        params: params
      });
      return this;
    }
  }, {
    key: "wait",
    value: function wait() {
      var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
      this.actions.push({
        type: 'wait',
        duration: duration
      });
      return this;
    }
  }, {
    key: "play",
    value: function () {
      var _play = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _iterator, _step, action, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _iterator = _createForOfIteratorHelper(this.actions);
              _context2.p = 1;
              _iterator.s();
            case 2:
              if ((_step = _iterator.n()).done) {
                _context2.n = 8;
                break;
              }
              action = _step.value;
              if (!(action.type === 'wait')) {
                _context2.n = 4;
                break;
              }
              _context2.n = 3;
              return sleep(action.duration);
            case 3:
              _context2.n = 7;
              break;
            case 4:
              if (!action["await"]) {
                _context2.n = 6;
                break;
              }
              _context2.n = 5;
              return beep.apply(void 0, _toConsumableArray(action.params));
            case 5:
              _context2.n = 7;
              break;
            case 6:
              beep.apply(void 0, _toConsumableArray(action.params));
            case 7:
              _context2.n = 2;
              break;
            case 8:
              _context2.n = 10;
              break;
            case 9:
              _context2.p = 9;
              _t = _context2.v;
              _iterator.e(_t);
            case 10:
              _context2.p = 10;
              _iterator.f();
              return _context2.f(10);
            case 11:
              return _context2.a(2);
          }
        }, _callee2, this, [[1, 9, 10, 11]]);
      }));
      function play() {
        return _play.apply(this, arguments);
      }
      return play;
    }()
  }]);
}();
exports.average = average;
exports.beep = beep;
exports.beepChain = beepChain;
exports.fixednum = fixednum;
exports.minmax = minmax;
exports.sleep = sleep;
