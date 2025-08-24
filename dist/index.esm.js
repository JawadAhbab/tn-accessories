import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _createForOfIteratorHelper from "@babel/runtime/helpers/esm/createForOfIteratorHelper";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _regenerator from "@babel/runtime/helpers/esm/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
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
var BeepChain = /*#__PURE__*/function () {
  function BeepChain() {
    _classCallCheck(this, BeepChain);
    _defineProperty(this, "actions", []);
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
    key: "wait",
    value: function wait() {
      var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
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
                _context2.n = 6;
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
              _context2.n = 5;
              break;
            case 4:
              _context2.n = 5;
              return beep.apply(void 0, _toConsumableArray(action.params));
            case 5:
              _context2.n = 2;
              break;
            case 6:
              _context2.n = 8;
              break;
            case 7:
              _context2.p = 7;
              _t = _context2.v;
              _iterator.e(_t);
            case 8:
              _context2.p = 8;
              _iterator.f();
              return _context2.f(8);
            case 9:
              return _context2.a(2);
          }
        }, _callee2, this, [[1, 7, 8, 9]]);
      }));
      function play() {
        return _play.apply(this, arguments);
      }
      return play;
    }()
  }]);
}();
function beepChain() {
  return new BeepChain();
}
export { average, beep, beepChain, fixednum, minmax, sleep };
